// CS50 AI citation: written with the help of Claude (Anthropic), an AI assistant. Requirements, design decisions and review: JJhiru.
// ============================================================
//  Revisión documental asistida por IA (DeepSeek). Complementa a
//  scripts/auditoria.mjs: no lo sustituye ni decide nada.
//
//  Uso:
//    node scripts/auditoria-ia.mjs revisar-ejercicio <id> [<id> …] [--informe <lote-NN.md>] [--ejecutar]
//    node scripts/auditoria-ia.mjs auditar-documentos <fase> [--ejecutar]
//    node scripts/auditoria-ia.mjs auditar-documentos --continuar <id-ejecución> [--ejecutar]
//
//  --continuar sigue una respuesta truncada: reenvía la conversación
//  exacta y guarda la continuación como un bloque nuevo (máx. 3).
//
//  auditar-documentos envía los archivos completos que define
//  docs/auditoria-catalogo/deepseek/fases/<fase>.json y guarda la
//  respuesta literal en docs/auditoria-catalogo/deepseek/ejecuciones/.
//  Estado y procedimiento: docs/auditoria-catalogo/deepseek/ESTADO.md
//
//  Sin --ejecutar es una SIMULACIÓN: no llama a la API ni necesita
//  la clave. Muestra qué se enviaría, los tokens estimados y el coste
//  máximo. Con --ejecutar hace una solicitud por ejercicio, dentro de
//  los límites (HM_IA_*), y guarda cada informe en
//  docs/auditoria-catalogo/ia/. Se detiene al primer error.
//
//  Configuración: docs/auditoria-catalogo/revision-asistida-ia.md
// ============================================================
import { fileURLToPath } from 'node:url';
import { leerConfiguracion, leerClave } from './ia/configuracion.mjs';
import { Presupuesto, costeMaximo, estimarTokens, usd } from './ia/presupuesto.mjs';
import { construirMensajes, comprobarBloque, revisar } from './ia/revision.mjs';
import { prepararRevisionEjercicio, informeMarkdown, guardarInforme } from './ia/revision-ejercicio.mjs';
import { leerFase, prepararFase, prepararContinuacion, tokensDe, ejecutarFase, guardarEjecucion, MAX_INTENTOS, MAX_BLOQUES } from './ia/auditoria-documental.mjs';

const RAIZ = fileURLToPath(new URL('..', import.meta.url));
const USO = 'Uso: node scripts/auditoria-ia.mjs revisar-ejercicio <id> [<id> …] [--informe <lote-NN.md>] [--ejecutar] | auditar-documentos <fase> [--ejecutar] | auditar-documentos --continuar <id-ejecución> [--ejecutar]';

class ErrorUso extends Error {}

function leerArgumentos(argv) {
  const [orden, ...resto] = argv;
  if (orden !== 'revisar-ejercicio') throw new ErrorUso(USO);
  const ids = [];
  let informe = null;
  let ejecutar = false;
  for (let i = 0; i < resto.length; i++) {
    const a = resto[i];
    if (a === '--ejecutar') ejecutar = true;
    else if (a === '--informe') {
      informe = resto[++i];
      if (!informe) throw new ErrorUso('--informe necesita una ruta');
    } else if (a.startsWith('-')) throw new ErrorUso(`opción desconocida ${JSON.stringify(a.slice(0, 40))}. ${USO}`);
    else if (/^[a-z0-9-]{1,80}$/.test(a)) ids.push(a);
    else throw new ErrorUso(`id no válido ${JSON.stringify(a.slice(0, 40))}`);
  }
  if (!ids.length) throw new ErrorUso(USO);
  if (new Set(ids).size !== ids.length) throw new ErrorUso('hay ids repetidos');
  return { ids, informe, ejecutar };
}

async function auditarDocumentos(argv) {
  // auditar-documentos <fase> [--ejecutar]  |  auditar-documentos --continuar <id-ejecución> [--ejecutar]
  const ejecutar = argv.includes('--ejecutar');
  const resto = argv.filter((a) => a !== '--ejecutar');
  let prep;
  const config = leerConfiguracion();
  if (resto[0] === '--continuar') {
    if (resto.length !== 2 || resto[1].startsWith('-')) throw new ErrorUso(USO);
    prep = prepararContinuacion(RAIZ, resto[1]);
    console.log(`Continuación (bloque ${prep.continuacion.bloque} de como mucho ${MAX_BLOQUES}) de ${prep.continuacion.continuaDe}`);
  } else {
    if (resto.length !== 1 || resto[0].startsWith('-')) throw new ErrorUso(`${resto.length ? `argumento no válido ${JSON.stringify(resto.find((a) => a.startsWith('-')) ?? resto[1] ?? '').slice(0, 40)}. ` : ''}${USO}`);
    prep = prepararFase(RAIZ, leerFase(RAIZ, resto[0]));
  }
  const tokens = tokensDe(prep);
  const maximo = costeMaximo(config.modelo, tokens, config.maxTokensSalida);
  console.log(`${ejecutar ? 'EJECUCIÓN' : 'SIMULACIÓN (no se llama a la API)'} · ${prep.fase.id}: ${prep.fase.titulo}`);
  console.log(`modelo ${config.modelo} · presupuesto ${usd(config.presupuestoUSD)} · máx. ${MAX_INTENTOS} intento(s), ${config.maxTokensEntrada} tokens de entrada y ${config.maxTokensSalida} de salida por intento`);
  for (const b of prep.bloques) console.log(`  - ${b.id} ← ${b.procedencia} (${b.texto.length} caracteres)`);
  console.log(`≈${tokens} tokens de entrada (estimación) · coste máximo por intento ${usd(maximo)} (tarifa punta)`);
  if (prep.versiones.archivosSinConfirmar.length) console.log(`Aviso: archivos enviados con cambios sin confirmar: ${prep.versiones.archivosSinConfirmar.join(', ')}`);
  if (tokens > config.maxTokensEntrada) console.log('  ✗ supera HM_IA_MAX_TOKENS_ENTRADA: no se enviaría');
  if (!ejecutar) { console.log('Simulación terminada. Para enviar de verdad, añade --ejecutar (necesita DEEPSEEK_API_KEY).'); return 0; }

  const clave = leerClave();
  const presupuesto = new Presupuesto({ ...config, maxSolicitudes: Math.min(config.maxSolicitudes, MAX_INTENTOS) });
  let resultado;
  try {
    resultado = await ejecutarFase(prep, { config, clave, presupuesto });
  } catch (e) {
    console.error(`✗ ${e.message}`);
    console.error(`Detenido antes de recibir respuesta. Solicitudes: ${presupuesto.solicitudes} · gasto (cota superior): ${usd(presupuesto.gastado)}`);
    return 1;
  }
  const g = guardarEjecucion(RAIZ, { prep, resultado, ahora: new Date(), clave, config });
  for (const i of resultado.intentos) console.log(`  intento ${i.n}: ${i.estado}${i.mensaje ? ` (${i.mensaje})` : ''} · ${usd(i.coste)}${i.costeExacto ? '' : ' (sin uso informado: se cuenta el máximo)'}`);
  console.log(`${resultado.estado === 'completa' ? '✓' : '✗'} estado: ${resultado.estado} · literal verificado: ${g.meta.literalVerificado} · ${g.carpeta}`);
  console.log(`Gasto acumulado (cota superior): ${usd(presupuesto.gastado)}`);
  return resultado.estado === 'completa' ? 0 : 1;
}

async function principal() {
  if (process.argv[2] === 'auditar-documentos') return auditarDocumentos(process.argv.slice(3));
  const { ids, informe, ejecutar } = leerArgumentos(process.argv.slice(2));
  const config = leerConfiguracion();
  if (ids.length > config.maxSolicitudes) throw new ErrorUso(`${ids.length} ejercicios superan HM_IA_MAX_SOLICITUDES (${config.maxSolicitudes})`);

  // Todo se prepara y se valida antes de la primera solicitud.
  const preparados = ids.map((id) => prepararRevisionEjercicio({ raiz: RAIZ, id, informe }));
  let maximoTotal = 0;
  console.log(`${ejecutar ? 'EJECUCIÓN' : 'SIMULACIÓN (no se llama a la API)'} · modelo ${config.modelo} · presupuesto ${usd(config.presupuestoUSD)} · máx. ${config.maxSolicitudes} solicitud(es), ${config.maxTokensEntrada} tokens de entrada y ${config.maxTokensSalida} de salida por solicitud`);
  for (const p of preparados) {
    for (const b of [...p.contexto, ...p.entradas]) comprobarBloque(b);
    const tokens = estimarTokens(construirMensajes(p).map((m) => m.content).join('\n'));
    const maximo = costeMaximo(config.modelo, tokens, config.maxTokensSalida);
    maximoTotal += maximo;
    console.log(`\n${p.id}: ${p.contexto.length} bloques de contexto + ${p.entradas.length} de entrada · ≈${tokens} tokens de entrada (estimación) · coste máximo ${usd(maximo)}`);
    for (const b of [...p.contexto, ...p.entradas]) console.log(`  - ${b.id} ← ${b.procedencia} (${b.texto.length} caracteres)`);
    if (tokens > config.maxTokensEntrada) console.log(`  ✗ supera HM_IA_MAX_TOKENS_ENTRADA: no se enviaría`);
  }
  console.log(`\nCoste máximo de la ejecución: ${usd(maximoTotal)} (tarifa punta; el real lo informa la API).${maximoTotal > config.presupuestoUSD ? ' Supera el presupuesto: se detendría antes de agotarlo.' : ''}`);

  if (!ejecutar) {
    console.log('Simulación terminada. Para enviar de verdad, añade --ejecutar (necesita DEEPSEEK_API_KEY).');
    return 0;
  }

  const clave = leerClave();
  const presupuesto = new Presupuesto(config);
  for (const p of preparados) {
    try {
      const salida = await revisar(p, { config, clave, presupuesto });
      const fecha = new Date().toISOString();
      const ruta = guardarInforme(RAIZ, { id: p.id, fecha, contenido: informeMarkdown({ prep: p, salida, fecha }), clave });
      console.log(`✓ ${p.id}: ${salida.resultado.hallazgos.length} hallazgo(s) · ${usd(salida.meta.coste)} · ${ruta}`);
    } catch (e) {
      console.error(`✗ ${p.id}: ${e.message}`);
      console.error(`Detenido. Solicitudes: ${presupuesto.solicitudes} · gasto acumulado (cota superior): ${usd(presupuesto.gastado)}`);
      return 1;
    }
  }
  console.log(`\nSolicitudes: ${presupuesto.solicitudes} · gasto acumulado (cota superior): ${usd(presupuesto.gastado)}`);
  return 0;
}

try {
  process.exitCode = await principal();
} catch (e) {
  // Errores de uso, configuración o preparación: una línea, sin traza y sin datos de la clave.
  console.error(`✗ ${e.message}`);
  process.exitCode = 2;
}
