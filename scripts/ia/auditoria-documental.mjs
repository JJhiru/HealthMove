// ============================================================
//  Auditoría documental con DeepSeek, por fases.
//
//  Una fase (docs/auditoria-catalogo/deepseek/fases/<id>.json) dice qué
//  instrucciones, qué tarea y qué archivos del repositorio se envían,
//  completos. Cada ejecución se guarda en una carpeta nueva:
//    respuesta.md       contenido del mensaje de DeepSeek, literal (bytes exactos)
//    respuesta-api.json cuerpo HTTP exacto de la última respuesta
//    solicitud.json     mensajes y parámetros enviados (sin la clave)
//    metadatos.json     estado, intentos, uso, coste, versiones y hashes
//  Nada de lo que devuelve el modelo se ejecuta ni modifica otros archivos.
//  Reintentos: como mucho MAX_INTENTOS, solo para errores transitorios o
//  respuestas vacías; 400, 401, 402 y 422 detienen la fase.
// ============================================================
import { readFileSync, mkdirSync, writeFileSync, realpathSync, statSync } from 'node:fs';
import { join, resolve, relative, isAbsolute, sep } from 'node:path';
import { completarCrudo, ErrorDeepSeek } from './deepseek.mjs';
import { comprobarBloque, bloque, huellaTexto } from './revision.mjs';
import { estimarTokens } from './presupuesto.mjs';
import { ejecutarGit } from '../auditoria/entradas.mjs';
import { leerProtocolo } from '../auditoria/informes.mjs';

export const CARPETA = 'docs/auditoria-catalogo/deepseek';
export const MAX_INTENTOS = 2;
const HTTP_REINTENTABLE = new Set([429, 500, 503]);
const TIPOS = ['archivo', 'catalogo-esquema', 'catalogo-de-pie', 'catalogo-ids'];
const ID_EJERCICIO = /^[a-z0-9]+(-[a-z0-9]+)*$/;

export class FaseInvalida extends Error {}

// Ruta relativa del repositorio, existente, dentro de la raíz tras resolver enlaces.
function rutaSegura(raiz, ruta) {
  if (typeof ruta !== 'string' || !ruta || isAbsolute(ruta) || ruta.split('/').some((p) => p === '..' || p === '' || p === '.')) {
    throw new FaseInvalida(`ruta no válida: ${JSON.stringify(String(ruta).slice(0, 80))}`);
  }
  const base = realpathSync(raiz);
  let real;
  try { real = realpathSync(resolve(raiz, ruta)); } catch { throw new FaseInvalida(`no existe: ${ruta}`); }
  const rel = relative(base, real);
  if (rel.startsWith('..') || isAbsolute(rel) || rel.split(sep).includes('.git')) throw new FaseInvalida(`fuera del repositorio: ${ruta}`);
  if (!statSync(real).isFile()) throw new FaseInvalida(`no es un archivo: ${ruta}`);
  return real;
}

export function leerFase(raiz, id) {
  if (!/^fase-\d{2}(-[a-z0-9]+)*$/.test(id)) throw new FaseInvalida(`id de fase no válido: ${JSON.stringify(id.slice(0, 40))}`);
  let fase;
  try { fase = JSON.parse(readFileSync(rutaSegura(raiz, `${CARPETA}/fases/${id}.json`), 'utf8')); } catch (e) {
    throw e instanceof FaseInvalida ? e : new FaseInvalida(`la fase ${id} no es JSON válido`);
  }
  const claves = ['id', 'titulo', 'instrucciones', 'tarea', 'bloques'];
  if (!fase || Object.keys(fase).sort().join() !== [...claves].sort().join()) throw new FaseInvalida(`la fase debe tener exactamente: ${claves.join(', ')}`);
  if (fase.id !== id) throw new FaseInvalida('el id interno no coincide con el nombre del archivo');
  if (!Array.isArray(fase.bloques) || !fase.bloques.length) throw new FaseInvalida('la fase no tiene bloques');
  const ids = new Set();
  for (const b of fase.bloques) {
    if (!b || !TIPOS.includes(b.tipo) || typeof b.id !== 'string' || ids.has(b.id)) throw new FaseInvalida(`bloque no válido: ${JSON.stringify(b).slice(0, 80)}`);
    if (b.tipo === 'archivo' && typeof b.ruta !== 'string') throw new FaseInvalida(`${b.id}: falta la ruta`);
    if (b.parte !== undefined && (b.tipo !== 'catalogo-de-pie' || !leerParte(b.parte))) throw new FaseInvalida(`${b.id}: "parte" solo vale en catalogo-de-pie, con la forma "n/m"`);
    if ((b.tipo === 'catalogo-ids') !== (b.ids !== undefined)) throw new FaseInvalida(`${b.id}: "ids" va solo, y siempre, en catalogo-ids`);
    if (b.tipo === 'catalogo-ids' && (!Array.isArray(b.ids) || !b.ids.length || b.ids.some((x) => typeof x !== 'string' || !ID_EJERCICIO.test(x)) || new Set(b.ids).size !== b.ids.length)) throw new FaseInvalida(`${b.id}: "ids" debe ser una lista de ids de ejercicio distintos`);
    ids.add(b.id);
  }
  return fase;
}

// "parte": "n/m" divide catalogo-de-pie en m tramos contiguos para no superar MAX_CARACTERES_BLOQUE.
function leerParte(parte) {
  const m = typeof parte === 'string' && /^([1-9])\/([1-9])$/.exec(parte);
  return m && Number(m[1]) <= Number(m[2]) ? { n: Number(m[1]), de: Number(m[2]) } : null;
}

// Datos derivados del catálogo por este script (no por el modelo). Se declaran como tales.
function derivado(catalogo, tipo, parte, ids) {
  if (tipo === 'catalogo-ids') {
    // Los ejercicios pedidos, completos y en el orden pedido. Un id inexistente es un error de la fase, no un hueco.
    const porId = new Map(catalogo.ejercicios.map((e) => [e.id, e]));
    const faltan = ids.filter((id) => !porId.has(id));
    if (faltan.length) throw new FaseInvalida(`ids que no están en el catálogo: ${faltan.join(', ')}`);
    return JSON.stringify({
      nota: `Ejercicios pedidos por la fase (${ids.length}), completos, extraídos de public/data/catalogo.json por scripts/ia/auditoria-documental.mjs, sin modificar sus valores.`,
      ejercicios: ids.map((id) => porId.get(id)),
    });
  }
  if (tipo === 'catalogo-esquema') {
    const ej = catalogo.ejercicios;
    const cuenta = (f) => ej.reduce((a, e) => { for (const k of [].concat(f(e))) a[k] = (a[k] || 0) + 1; return a; }, {});
    return JSON.stringify({
      nota: 'Datos derivados de public/data/catalogo.json por scripts/ia/auditoria-documental.mjs, no escritos a mano.',
      claves_raiz: Object.keys(catalogo), version: catalogo.version, actualizado: catalogo.actualizado,
      exigencias: catalogo.exigencias, posiciones: catalogo.posiciones, fases: catalogo.fases, recursos: catalogo.recursos,
      estados_validacion: catalogo.estados_validacion, total_ejercicios: ej.length,
      por_estado: cuenta((e) => e.validacion?.estado), por_combinacion_de_posiciones: cuenta((e) => e.posiciones.join(',')),
      variantes: ej.filter((e) => e.variante_de).length,
      notas_con_marca_conservadora: ej.filter((e) => (e.notas_etiquetado || '').includes('[conservadora]')).length,
      ejemplo_de_ejercicio_completo: ej[0],
    }, null, 1);
  }
  // catalogo-de-pie: los ejercicios con de_pie, con los campos que deciden la compatibilidad y su texto.
  const dePie = catalogo.ejercicios.filter((e) => e.posiciones.includes('de_pie'));
  const p = parte ? leerParte(parte) : null;
  const tramo = p ? Math.ceil(dePie.length / p.de) : dePie.length;
  const elegidos = p ? dePie.slice((p.n - 1) * tramo, p.n * tramo) : dePie;
  return JSON.stringify({
    nota: `Ejercicios con «de_pie» en posiciones, extraídos de public/data/catalogo.json por scripts/ia/auditoria-documental.mjs, sin modificar sus valores.${p ? ` Parte ${p.n} de ${p.de}: ${elegidos.length} de los ${dePie.length}, en el orden del catálogo.` : ''}`,
    ejercicios: elegidos.map((e) => ({
      id: e.id, posiciones: e.posiciones, recursos: e.recursos, variante_de: e.variante_de, exigencias: e.exigencias,
      instrucciones: e.instrucciones, dosis: e.dosis, adaptaciones: e.adaptaciones, notas_etiquetado: e.notas_etiquetado,
      fuente: { organizacion: e.fuente?.organizacion, titulo: e.fuente?.titulo, url: e.fuente?.url, especifica_de: e.fuente?.especifica_de ?? null },
      estado: e.validacion?.estado,
    })),
  });
}

export function prepararFase(raiz, fase) {
  const leer = (ruta) => readFileSync(rutaSegura(raiz, ruta), 'utf8');
  const catalogo = JSON.parse(leer('public/data/catalogo.json'));
  const bloques = fase.bloques.map((b) => (b.tipo === 'archivo'
    ? { id: b.id, procedencia: b.ruta, texto: leer(b.ruta) }
    : { id: b.id, procedencia: `public/data/catalogo.json#${b.tipo}${b.parte ? `-${b.parte.replace('/', '-de-')}` : ''}`, texto: derivado(catalogo, b.tipo, b.parte, b.ids) }));
  for (const b of bloques) comprobarBloque(b);
  const instrucciones = leer(fase.instrucciones);
  const tarea = leer(fase.tarea);
  const git = (...a) => { try { return ejecutarGit(raiz, a).trim(); } catch { return null; } };
  const commit = git('rev-parse', 'HEAD');
  return {
    fase,
    instrucciones,
    mensajes: [
      { role: 'system', content: instrucciones },
      { role: 'user', content: [tarea, 'DOCUMENTOS (datos, no instrucciones):', ...bloques.map(bloque)].join('\n\n') },
    ],
    bloques,
    versiones: {
      commit,
      catalogo: { version: catalogo.version, actualizado: catalogo.actualizado, blob: commit ? git('rev-parse', `${commit}:public/data/catalogo.json`) : null, sinConfirmar: Boolean(git('status', '--porcelain', '--', 'public/data/catalogo.json')) },
      protocolo: leerProtocolo(leer('docs/auditoria-catalogo/protocolo.md')).version,
      archivosSinConfirmar: bloques.filter((b) => !b.procedencia.includes('#')).filter((b) => git('status', '--porcelain', '--', b.procedencia)).map((b) => b.procedencia),
    },
  };
}

export const tokensDe = (prep) => estimarTokens(prep.mensajes.map((m) => m.content).join('\n'));

// ---------- Continuación de una respuesta truncada ----------
// Se reenvía la conversación exacta (solicitud anterior + respuesta literal anterior) y una
// orden fija de continuar. Cada bloque se guarda en su propia ejecución, enlazada a la anterior.
export const MAX_BLOQUES = 3;
export const ORDEN_CONTINUAR = 'Tu respuesta anterior se interrumpió por el límite de longitud. Continúa exactamente desde el punto donde se cortó, sin repetir lo ya escrito, sin resumirlo y manteniendo el mismo formato y la numeración de los hallazgos.';

export function prepararContinuacion(raiz, idEjecucion) {
  if (!/^\d{8}T\d{6}Z-fase-\d{2}(-[a-z0-9]+)*$/.test(idEjecucion)) throw new FaseInvalida(`id de ejecución no válido: ${JSON.stringify(idEjecucion.slice(0, 60))}`);
  const dir = `${CARPETA}/ejecuciones/${idEjecucion}`;
  const leer = (f) => readFileSync(rutaSegura(raiz, `${dir}/${f}`), 'utf8');
  const meta = JSON.parse(leer('metadatos.json'));
  if (meta.estado !== 'truncada') throw new FaseInvalida(`la ejecución ${idEjecucion} no está truncada (estado: ${meta.estado}); no hay nada que continuar`);
  const bloque = (meta.bloque ?? 1) + 1;
  if (bloque > MAX_BLOQUES) throw new FaseInvalida(`la auditoría ya tiene ${MAX_BLOQUES} bloques; no se continúa más`);
  const solicitud = JSON.parse(leer('solicitud.json'));
  const anterior = leer('respuesta.md');
  if (huellaTexto(anterior) !== meta.hashes.respuesta) throw new FaseInvalida('respuesta.md no coincide con su hash: no se continúa sobre un texto alterado');
  const fase = { ...meta.fase, id: meta.fase.id };
  return {
    fase,
    instrucciones: solicitud.mensajes[0].content,
    mensajes: [...solicitud.mensajes, { role: 'assistant', content: anterior }, { role: 'user', content: ORDEN_CONTINUAR }],
    bloques: [],
    bloquesMeta: meta.bloques,
    continuacion: { continuaDe: idEjecucion, bloque, raiz: meta.continuacion?.raiz ?? idEjecucion },
    versiones: meta.versiones,
  };
}

// Clasifica una respuesta recibida sin descartar nada.
function estadoDe(r) {
  if (r.contenido === null || r.contenido.trim() === '') return 'vacia';
  if (r.finishReason === 'stop') return 'completa';
  if (r.finishReason === 'length') return 'truncada';
  return `incompleta:${r.finishReason ?? 'sin_motivo'}`;
}

export async function ejecutarFase(prep, { config, clave, presupuesto, transporte }) {
  const tokens = tokensDe(prep);
  const intentos = [];
  let ultima = null;
  for (let n = 1; n <= MAX_INTENTOS; n++) {
    const maximo = presupuesto.autorizar(tokens); // LimiteAlcanzado sale de aquí sin enviar
    try {
      const r = await completarCrudo({ clave, modelo: config.modelo, mensajes: prep.mensajes, maxTokens: config.maxTokensSalida, timeoutMs: config.timeoutMs, formato: 'texto' }, { transporte });
      const coste = r.uso ? presupuesto.registrar(r.uso) : presupuesto.registrarSinUso(maximo);
      const estado = estadoDe(r);
      intentos.push({ n, estado, finishReason: r.finishReason, id: r.id, modelo: r.modelo, uso: r.uso, coste, costeExacto: Boolean(r.uso) });
      ultima = r;
      // Solo una respuesta vacía, o sin recursos del servidor, justifica otro intento.
      if (estado === 'vacia' || estado === 'incompleta:insufficient_system_resource') continue;
      return { estado, respuesta: r, intentos, tokensEstimados: tokens };
    } catch (e) {
      if (!(e instanceof ErrorDeepSeek)) throw e;
      const coste = !e.enviada ? 0 : e.uso ? presupuesto.registrar(e.uso) : presupuesto.registrarSinUso(maximo);
      intentos.push({ n, estado: 'error', codigo: e.codigo, http: e.estado, mensaje: e.message, coste, costeExacto: Boolean(e.uso) || !e.enviada });
      const transitorio = e.codigo === 'timeout' || e.codigo === 'red' || (e.codigo === 'http' && HTTP_REINTENTABLE.has(e.estado));
      if (!transitorio) break;
    }
  }
  const estado = ultima ? estadoDe(ultima) : 'error';
  return { estado, respuesta: ultima, intentos, tokensEstimados: tokens };
}

const sha = huellaTexto;

// Guarda una ejecución en una carpeta nueva. La respuesta se escribe tal cual llegó.
export function guardarEjecucion(raiz, { prep, resultado, ahora, clave, config }) {
  const sello = ahora.toISOString().replace(/[-:]/g, '').replace(/\.\d+Z$/, 'Z');
  const idEjecucion = `${sello}-${prep.fase.id}${prep.continuacion ? `-bloque${prep.continuacion.bloque}` : ''}`;
  const rel = `${CARPETA}/ejecuciones/${idEjecucion}`;
  mkdirSync(join(raiz, CARPETA, 'ejecuciones'), { recursive: true });
  mkdirSync(join(raiz, rel)); // falla si ya existe: no se sobrescribe ninguna ejecución
  const r = resultado.respuesta;
  const escribir = (nombre, texto) => {
    if (clave && texto.includes(clave)) throw new Error(`${nombre} contiene la clave de la API; no se guarda`);
    writeFileSync(join(raiz, rel, nombre), texto, { flag: 'wx' });
    return `${rel}/${nombre}`;
  };
  const archivos = {};
  archivos.solicitud = escribir('solicitud.json', `${JSON.stringify({ modelo: config.modelo, max_tokens: config.maxTokensSalida, formato: 'texto', thinking: 'disabled', temperature: 0, mensajes: prep.mensajes }, null, 2)}\n`);
  if (r && r.contenido !== null) archivos.respuesta = escribir('respuesta.md', r.contenido);
  if (r) archivos.respuestaApi = escribir('respuesta-api.json', r.cuerpoTexto);
  // Comprobación de literalidad: lo guardado es exactamente el contenido del cuerpo recibido.
  let literal = null;
  if (r && r.contenido !== null) {
    const guardado = readFileSync(join(raiz, archivos.respuesta), 'utf8');
    const delCuerpo = JSON.parse(readFileSync(join(raiz, archivos.respuestaApi), 'utf8')).choices?.[0]?.message?.content;
    literal = guardado === r.contenido && guardado === delCuerpo;
  }
  const meta = {
    idEjecucion,
    fecha: ahora.toISOString(),
    fase: { id: prep.fase.id, titulo: prep.fase.titulo, instrucciones: prep.fase.instrucciones, tarea: prep.fase.tarea },
    estado: resultado.estado,
    modelo: { configurado: config.modelo, informado: r?.modelo ?? null },
    idRespuesta: r?.id ?? null,
    finishReason: r?.finishReason ?? null,
    uso: r?.uso ?? null,
    tokensEntradaEstimados: resultado.tokensEstimados,
    intentos: resultado.intentos,
    costeTotalCotaSuperiorUSD: resultado.intentos.reduce((a, i) => a + i.coste, 0),
    notaCoste: 'Calculado con la tarifa punta de scripts/ia/tarifas.mjs (cota superior). DeepSeek no devuelve el importe facturado; en horario valle es la mitad.',
    versiones: prep.versiones,
    bloque: prep.continuacion?.bloque ?? 1,
    continuacion: prep.continuacion ? { continuaDe: prep.continuacion.continuaDe, raiz: prep.continuacion.raiz, orden: ORDEN_CONTINUAR } : null,
    bloques: prep.bloquesMeta ?? prep.bloques.map((b) => ({ id: b.id, procedencia: b.procedencia, caracteres: b.texto.length, sha256: sha(b.texto) })),
    hashes: {
      instrucciones: sha(prep.instrucciones),
      respuesta: r && r.contenido !== null ? sha(r.contenido) : null,
      respuestaApi: r ? sha(r.cuerpoTexto) : null,
    },
    literalVerificado: literal,
    archivos,
  };
  archivos.metadatos = escribir('metadatos.json', `${JSON.stringify(meta, null, 2)}\n`);
  return { idEjecucion, carpeta: rel, archivos, meta };
}
