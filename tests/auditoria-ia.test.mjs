// Revisión asistida por IA (scripts/ia/, scripts/auditoria-ia.mjs). Ninguna prueba usa la red:
// el cliente recibe un transporte simulado y la CLI se ejecuta con fetch sustituido por uno que falla.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, mkdtempSync, rmSync, existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';
import { leerConfiguracion, leerClave, ConfiguracionInvalida, LIMITES } from '../scripts/ia/configuracion.mjs';
import { completar, ErrorDeepSeek, URL_API } from '../scripts/ia/deepseek.mjs';
import { Presupuesto, LimiteAlcanzado, costeMaximo, costeReal, estimarTokens } from '../scripts/ia/presupuesto.mjs';
import { comprobarBloque, EntradaSensible, validarResultado, revisar, ErrorRevision } from '../scripts/ia/revision.mjs';
import { prepararRevisionEjercicio, informeMarkdown, guardarInforme, CARPETA_INFORMES } from '../scripts/ia/revision-ejercicio.mjs';
import { TARIFAS } from '../scripts/ia/tarifas.mjs';

const RAIZ = fileURLToPath(new URL('..', import.meta.url));
const CLAVE = 'clave-de-prueba-0123456789abcdef';
const SIN_RED = 'data:text/javascript,globalThis.fetch=()=>{throw new Error("RED-PROHIBIDA")}';
const config = leerConfiguracion({});
const huella = (p) => createHash('sha256').update(readFileSync(join(RAIZ, p))).digest('hex');
const PROTEGIDOS = ['public/data/catalogo.json', 'docs/auditoria-catalogo/protocolo.md', 'docs/auditoria-catalogo/registro.md'];

// Respuesta simulada con la forma documentada por DeepSeek.
const respuesta = (cuerpo, { status = 200 } = {}) => ({
  ok: status >= 200 && status < 300, status,
  json: async () => (typeof cuerpo === 'string' ? JSON.parse(cuerpo) : cuerpo),
});
const uso = { prompt_tokens: 1100, prompt_cache_hit_tokens: 100, prompt_cache_miss_tokens: 1000, completion_tokens: 200, total_tokens: 1300 };
const completada = (contenido, extra = {}) => respuesta({
  id: 'resp-1', model: 'deepseek-flash', object: 'chat.completion',
  choices: [{ index: 0, finish_reason: 'stop', message: { role: 'assistant', content: contenido } }], usage: uso, ...extra,
});
const parametros = { clave: CLAVE, modelo: 'deepseek-flash', mensajes: [{ role: 'user', content: 'json' }], maxTokens: 100, timeoutMs: 5000 };

const bloques = [
  { id: 'protocolo-3', procedencia: 'docs/auditoria-catalogo/protocolo.md#3', texto: 'R2.2. Valor false. Solo puede proponerse con evidencia D.' },
  { id: 'catalogo-x', procedencia: 'public/data/catalogo.json#x', texto: '{ "exigencias": { "agarre": false } }' },
];
const hallazgo = (cambios = {}) => ({
  titulo: 'false sin evidencia', evidencia: { procedencia: 'protocolo-3', cita: 'Solo puede proponerse con evidencia D.' },
  criterio: 'R2.2', gravedad: 'media', confianza: 'media', incertidumbre: '', recomendacion: 'Revisar la evidencia.', revision_humana: true, ...cambios,
});
const salidaValida = (h = [hallazgo()]) => JSON.stringify({ resumen: 'Revisión de prueba.', hallazgos: h, limitaciones: ['Sin acceso a la fuente.'] });

// ---------- Configuración y clave ----------

test('configuración: valores por omisión conservadores y rechazo de valores inválidos', () => {
  assert.deepEqual(config, { presupuestoUSD: 0.05, maxSolicitudes: 3, maxTokensEntrada: 30000, maxTokensSalida: 4000, timeoutMs: 120000, modelo: 'deepseek-flash' });
  for (const [k, d] of Object.entries(LIMITES)) {
    for (const malo of ['abc', String(d.max * 2), String(d.min / 10 - 1), 'Infinity']) {
      assert.throws(() => leerConfiguracion({ [d.variable]: malo }), ConfiguracionInvalida, `${k}=${malo}`);
    }
  }
  assert.throws(() => leerConfiguracion({ HM_IA_MAX_SOLICITUDES: '2.5' }), ConfiguracionInvalida);
  assert.throws(() => leerConfiguracion({ HM_IA_MODELO: 'modelo-sin-tarifa' }), /no tiene tarifa/);
  assert.throws(() => leerConfiguracion({ HM_IA_MODELO: 'Mal Nombre;' }), ConfiguracionInvalida);
  assert.equal(leerConfiguracion({ HM_IA_MODELO: 'deepseek-v4-pro' }).modelo, 'deepseek-v4-pro');
});

test('clave: ausente o con formato inválido, sin mostrarla nunca', () => {
  assert.throws(() => leerClave({}), /falta DEEPSEEK_API_KEY/);
  assert.throws(() => leerClave({ DEEPSEEK_API_KEY: 'corta' }), ConfiguracionInvalida);
  const conEspacio = 'abc def 0123456789abcdef';
  try { leerClave({ DEEPSEEK_API_KEY: conEspacio }); assert.fail(); } catch (e) { assert.ok(!e.message.includes(conEspacio)); }
  assert.equal(leerClave({ DEEPSEEK_API_KEY: CLAVE }), CLAVE);
});

// ---------- Cliente ----------

test('cliente: solicitud con autenticación, sin razonamiento, en json y con tiempo límite', async () => {
  let visto;
  const r = await completar(parametros, { transporte: async (url, opciones) => { visto = { url, opciones }; return completada('{"a":1}'); } });
  assert.equal(visto.url, URL_API);
  assert.equal(URL_API, 'https://api.deepseek.com/chat/completions');
  assert.equal(visto.opciones.method, 'POST');
  assert.equal(visto.opciones.headers.Authorization, `Bearer ${CLAVE}`);
  assert.ok(visto.opciones.signal instanceof AbortSignal);
  const cuerpo = JSON.parse(visto.opciones.body);
  assert.deepEqual(cuerpo.thinking, { type: 'disabled' });
  assert.deepEqual(cuerpo.response_format, { type: 'json_object' });
  assert.equal(cuerpo.max_tokens, 100);
  assert.equal(cuerpo.stream, false);
  assert.ok(!visto.opciones.body.includes(CLAVE), 'la clave solo va en la cabecera');
  assert.deepEqual(r, { contenido: '{"a":1}', id: 'resp-1', modelo: 'deepseek-flash', uso: { aciertoCache: 100, falloCache: 1000, salida: 200, razonamiento: 0 } });
});

test('cliente: parámetros inválidos no llegan al transporte', async () => {
  let llamadas = 0;
  const transporte = async () => { llamadas++; return completada('{}'); };
  for (const malo of [{ clave: '' }, { modelo: '' }, { mensajes: [] }, { mensajes: [{ role: 'tool', content: 'x' }] }, { maxTokens: 0 }, { maxTokens: 500000 }, { timeoutMs: 0 }]) {
    await assert.rejects(completar({ ...parametros, ...malo }, { transporte }), (e) => e instanceof ErrorDeepSeek && e.codigo === 'parametros');
  }
  assert.equal(llamadas, 0);
});

test('cliente: respuestas malformadas o incompletas son errores, no resultados', async () => {
  const casos = [
    [{ ok: true, status: 200, json: async () => { throw new SyntaxError('x'); } }, 'malformada'],
    [respuesta({ choices: [] }), 'malformada'],
    [completada(''), 'malformada'],
    [completada(null), 'malformada'],
    [respuesta({ choices: [{ finish_reason: 'length', message: { content: '{"a":' } }], usage: uso }), 'incompleta'],
    [respuesta({ choices: [{ finish_reason: 'stop', message: { content: '{}' } }] }), 'malformada'],
    [respuesta({ choices: [{ finish_reason: 'stop', message: { content: '{}' } }], usage: { prompt_cache_hit_tokens: -1, prompt_cache_miss_tokens: 1, completion_tokens: 1 } }), 'malformada'],
  ];
  for (const [r, codigo] of casos) {
    await assert.rejects(completar(parametros, { transporte: async () => r }), (e) => e.codigo === codigo && e.enviada === true, codigo);
  }
});

test('cliente: errores HTTP documentados, sin la clave en el mensaje', async () => {
  for (const [status, texto] of [[401, /autenticación/], [402, /saldo insuficiente/], [429, /límite de solicitudes/], [500, /servidor/], [503, /sobrecargado/], [418, /inesperado/]]) {
    const r = respuesta({ error: { message: `eco ${CLAVE}\nsiguiente línea` } }, { status });
    await assert.rejects(completar(parametros, { transporte: async () => r }), (e) => {
      assert.equal(e.estado, status);
      assert.match(e.message, texto);
      assert.ok(!e.message.includes(CLAVE), 'la clave no aparece aunque el servidor la repita');
      assert.ok(!e.message.includes('\n'));
      return true;
    });
  }
});

test('cliente: timeout y fallo de red, sin reenviar el error original', async () => {
  // El temporizador de AbortSignal.timeout no mantiene vivo el proceso; con fetch real lo hace el socket.
  // Aquí lo simula un temporizador que se cancela al abortar.
  const lento = (url, { signal }) => new Promise((_, rechazar) => {
    const vivo = setTimeout(() => {}, 10_000);
    signal.addEventListener('abort', () => { clearTimeout(vivo); rechazar(signal.reason); });
  });
  await assert.rejects(completar({ ...parametros, timeoutMs: 30 }, { transporte: lento }), (e) => e.codigo === 'timeout' && e.enviada);
  const red = async () => { throw new TypeError(`fetch failed Authorization: Bearer ${CLAVE}`); };
  await assert.rejects(completar(parametros, { transporte: red }), (e) => e.codigo === 'red' && !e.message.includes(CLAVE));
});

// ---------- Presupuesto ----------

test('costes: cálculo con las tarifas verificadas', () => {
  const t = TARIFAS.modelos['deepseek-flash'];
  assert.equal(costeMaximo('deepseek-flash', 1_000_000, 1_000_000), t.entrada + t.salida);
  assert.ok(Math.abs(costeReal('deepseek-flash', { aciertoCache: 1_000_000, falloCache: 2_000_000, salida: 500_000 }) - (0.006 + 0.6 + 0.6)) < 1e-12);
  assert.equal(estimarTokens('x'.repeat(1000)), 500);
});

test('presupuesto: límite de solicitudes, de tokens de entrada y de gasto', () => {
  const p = new Presupuesto({ ...config, maxSolicitudes: 2 });
  p.autorizar(1000); p.autorizar(1000);
  assert.throws(() => p.autorizar(1000), LimiteAlcanzado);
  assert.throws(() => new Presupuesto(config).autorizar(config.maxTokensEntrada + 1), /HM_IA_MAX_TOKENS_ENTRADA/);
  const caro = new Presupuesto({ ...config, presupuestoUSD: 0.001 });
  assert.throws(() => caro.autorizar(10000), /supera lo que queda del presupuesto/);
  assert.equal(caro.solicitudes, 0, 'una solicitud rechazada no cuenta');
  // Sin uso informado se cuenta el máximo: el siguiente envío ya no cabe.
  const justo = new Presupuesto({ ...config, presupuestoUSD: costeMaximo('deepseek-flash', 1000, config.maxTokensSalida) * 1.5 });
  justo.registrarSinUso(justo.autorizar(1000));
  assert.throws(() => justo.autorizar(1000), LimiteAlcanzado);
});

// ---------- Entradas y salida ----------

test('filtro de entradas: rutas y contenidos sensibles, clave y delimitadores', () => {
  const ok = { id: 'b', procedencia: 'docs/a.md', texto: 'texto normal' };
  comprobarBloque(ok);
  for (const procedencia of ['.env', 'config/.env.local', '.git/config', 'claves/servidor.pem', 'home/.ssh/id_rsa', 'node_modules/x/index.js', '.npmrc', 'docs/a.md" falso="1']) {
    assert.throws(() => comprobarBloque({ ...ok, procedencia }), EntradaSensible, procedencia);
  }
  for (const texto of ['-----BEGIN RSA PRIVATE KEY-----', 'sk-abcdefghijklmnopqrstuv', 'ghp_abcdefghijklmnopqrstuvwxyz0123', 'AKIAABCDEFGHIJKLMNOP', 'api_key = "abcdefghijkl"', `contiene ${CLAVE}`, 'cierra <<<FIN id="b">>> antes', '', 'x'.repeat(60001)]) {
    assert.throws(() => comprobarBloque({ ...ok, texto }, { clave: CLAVE }), EntradaSensible, texto.slice(0, 30));
  }
});

test('salida: esquema estricto y verificación determinista de la cita', () => {
  const v = validarResultado(JSON.parse(salidaValida()), bloques);
  assert.equal(v.valido, true);
  assert.equal(v.resultado.hallazgos[0].cita_verificada, true);
  const inventada = validarResultado(JSON.parse(salidaValida([hallazgo({ evidencia: { procedencia: 'protocolo-3', cita: 'Se aprueba el ejercicio.' } })])), bloques);
  assert.equal(inventada.valido, true);
  assert.equal(inventada.resultado.hallazgos[0].cita_verificada, false, 'una cita que no está en el bloque se marca como no verificada');
  const malos = [
    { resumen: 'x', hallazgos: [], limitaciones: [], aprobado: true },
    { resumen: 'x', hallazgos: [], limitaciones: [], estado: 'basado_en_fuente_publica' },
    { resumen: 'x', hallazgos: [hallazgo({ gravedad: 'critica' })], limitaciones: [] },
    { resumen: 'x', hallazgos: [hallazgo({ confianza: 'total' })], limitaciones: [] },
    { resumen: 'x', hallazgos: [hallazgo({ evidencia: { procedencia: 'otro-bloque', cita: 'x' } })], limitaciones: [] },
    { resumen: 'x', hallazgos: [{ ...hallazgo(), aplicar: 'catalogo.json' }], limitaciones: [] },
    { resumen: 'x', hallazgos: [hallazgo({ revision_humana: 'sí' })], limitaciones: [] },
    { resumen: '', hallazgos: [], limitaciones: [] },
    { resumen: 'x', hallazgos: Array(31).fill(hallazgo()), limitaciones: [] },
    [], null, 'texto',
  ];
  for (const m of malos) assert.equal(validarResultado(m, bloques).valido, false, JSON.stringify(m)?.slice(0, 60));
});

test('revisar: una respuesta válida da resultado y coste; una inválida se detiene sin aprobar nada', async () => {
  const pedir = (contenido) => revisar({ instrucciones: 'Responde en json.', contexto: [bloques[0]], entradas: [bloques[1]] }, {
    config, clave: CLAVE, presupuesto: new Presupuesto(config), transporte: async () => completada(contenido),
  });
  const ok = await pedir(salidaValida());
  assert.equal(ok.resultado.hallazgos.length, 1);
  assert.ok(ok.meta.coste > 0 && ok.meta.coste <= ok.meta.costeMaximo);
  assert.equal(ok.meta.bloques.length, 2);
  for (const malo of ['no es json', JSON.stringify({ aprobado: true }), JSON.stringify({ resumen: 'x', hallazgos: [], limitaciones: [], accion: 'aprobar' })]) {
    await assert.rejects(pedir(malo), (e) => e instanceof ErrorRevision && /detenida/.test(e.message) && e.coste > 0);
  }
});

test('revisar: un error HTTP cuenta el coste conservador y no reintenta', async () => {
  let llamadas = 0;
  const presupuesto = new Presupuesto(config);
  await assert.rejects(revisar({ instrucciones: 'json', contexto: [bloques[0]], entradas: [bloques[1]] }, {
    config, clave: CLAVE, presupuesto, transporte: async () => { llamadas++; return respuesta({}, { status: 503 }); },
  }), ErrorRevision);
  assert.equal(llamadas, 1);
  assert.ok(presupuesto.gastado > 0, 'sin uso informado se cuenta el máximo autorizado');
});

// ---------- Caso de uso, informe y CLI ----------

test('preparación: solo el ejercicio indicado y el contexto normativo, sin secretos', () => {
  const p = prepararRevisionEjercicio({ raiz: RAIZ, id: 'curl-biceps-sentado', informe: 'docs/auditoria-catalogo/lote-03.md' });
  assert.deepEqual(p.entradas.map((b) => b.id), ['catalogo-curl-biceps-sentado', 'informe-curl-biceps-sentado']);
  const catalogo = JSON.parse(readFileSync(join(RAIZ, 'public/data/catalogo.json'), 'utf8'));
  assert.deepEqual(JSON.parse(p.entradas[0].texto), catalogo.ejercicios.find((e) => e.id === 'curl-biceps-sentado'), 'se envía un ejercicio, no el catálogo');
  assert.ok(p.contexto.some((b) => b.id === 'protocolo-3') && p.contexto.some((b) => b.id === 'especificacion-4'));
  for (const b of [...p.contexto, ...p.entradas]) comprobarBloque(b);
  assert.throws(() => prepararRevisionEjercicio({ raiz: RAIZ, id: 'curl-biceps-sentado', informe: '/etc/passwd' }), /no válida/);
  assert.throws(() => prepararRevisionEjercicio({ raiz: RAIZ, id: 'no-existe' }), /no existe/);
});

test('informe: marcado como IA, separa lo determinista y se guarda solo en su carpeta sin sobrescribir', async () => {
  const p = prepararRevisionEjercicio({ raiz: RAIZ, id: 'banda-curl-sentado' });
  const salida = await revisar(p, {
    config, clave: CLAVE, presupuesto: new Presupuesto(config),
    transporte: async () => completada(JSON.stringify({ resumen: 'x', hallazgos: [hallazgo({ evidencia: { procedencia: 'catalogo-banda-curl-sentado', cita: 'banda-curl-sentado' } })], limitaciones: [] })),
  });
  const md = informeMarkdown({ prep: p, salida, fecha: '2026-10-18T00:00:00.000Z' });
  assert.match(md, /ANÁLISIS ASISTIDO POR IA/);
  assert.match(md, /## Comprobado por herramientas deterministas/);
  assert.match(md, /Discrepancia de ilustración pendiente \(R7\.7\): sí/);
  assert.ok(md.indexOf('Comprobado por herramientas deterministas') < md.indexOf('Sugerencias del modelo'));
  assert.ok(!md.includes(CLAVE));
  const raiz = mkdtempSync(join(tmpdir(), 'hm-ia-'));
  try {
    const ruta = guardarInforme(raiz, { id: 'banda-curl-sentado', fecha: '2026-10-18T00:00:00.000Z', contenido: md, clave: CLAVE });
    assert.equal(ruta, `${CARPETA_INFORMES}/20261018T000000Z-banda-curl-sentado.md`);
    assert.throws(() => guardarInforme(raiz, { id: 'banda-curl-sentado', fecha: '2026-10-18T00:00:00.000Z', contenido: md }), /EEXIST/);
    assert.throws(() => guardarInforme(raiz, { id: '../../catalogo', fecha: '2026-10-18T00:00:00.000Z', contenido: md }), /no válido/);
    assert.throws(() => guardarInforme(raiz, { id: 'x', fecha: '2026-10-18T00:00:01.000Z', contenido: `fuga ${CLAVE}`, clave: CLAVE }), /clave/);
    assert.deepEqual(readdirSync(join(raiz, CARPETA_INFORMES)), ['20261018T000000Z-banda-curl-sentado.md']);
  } finally { rmSync(raiz, { recursive: true, force: true }); }
});

test('CLI: la simulación no usa la red ni la clave, y --ejecutar sin clave para antes de enviar', () => {
  const antes = Object.fromEntries(PROTEGIDOS.map((p) => [p, huella(p)]));
  const carpetaAntes = existsSync(join(RAIZ, CARPETA_INFORMES)) ? readdirSync(join(RAIZ, CARPETA_INFORMES)) : null;
  const entorno = Object.fromEntries(Object.entries(process.env).filter(([k]) => k !== 'DEEPSEEK_API_KEY' && !k.startsWith('HM_IA_')));
  const cli = (...args) => spawnSync(process.execPath, ['--import', SIN_RED, join(RAIZ, 'scripts/auditoria-ia.mjs'), ...args], { encoding: 'utf8', env: entorno });

  const sim = cli('revisar-ejercicio', 'curl-biceps-sentado', '--informe', 'docs/auditoria-catalogo/lote-03.md');
  assert.equal(sim.status, 0, sim.stderr);
  assert.match(sim.stdout, /SIMULACIÓN \(no se llama a la API\)/);
  assert.match(sim.stdout, /coste máximo \d+\.\d{4} USD/);
  assert.doesNotMatch(sim.stdout + sim.stderr, /RED-PROHIBIDA/);

  const sinClave = cli('revisar-ejercicio', 'curl-biceps-sentado', '--ejecutar');
  assert.equal(sinClave.status, 2);
  assert.match(sinClave.stderr, /falta DEEPSEEK_API_KEY/);
  assert.doesNotMatch(sinClave.stdout + sinClave.stderr, /RED-PROHIBIDA|\n\s+at /);

  for (const args of [['otra-orden'], ['revisar-ejercicio'], ['revisar-ejercicio', 'a', 'a'], ['revisar-ejercicio', '--borrar'], ['revisar-ejercicio', 'Mal/Id'], ['revisar-ejercicio', 'a', 'b', 'c', 'd']]) {
    const r = cli(...args);
    assert.equal(r.status, 2, JSON.stringify(args));
    assert.doesNotMatch(r.stderr, /\n\s+at |RED-PROHIBIDA/);
  }
  // Nada de lo anterior modifica el catálogo, el protocolo o el registro, ni crea informes.
  for (const p of PROTEGIDOS) assert.equal(huella(p), antes[p], p);
  assert.deepEqual(existsSync(join(RAIZ, CARPETA_INFORMES)) ? readdirSync(join(RAIZ, CARPETA_INFORMES)) : null, carpetaAntes);
});

test('el código de IA no escribe fuera de su carpeta de informes ni ejecuta órdenes', () => {
  const archivos = ['scripts/auditoria-ia.mjs', ...readdirSync(join(RAIZ, 'scripts/ia')).filter((f) => f.endsWith('.mjs')).map((f) => `scripts/ia/${f}`)];
  for (const f of archivos) {
    const src = readFileSync(join(RAIZ, f), 'utf8');
    assert.doesNotMatch(src, /child_process|\beval\(|new Function\(/, `${f} no debe ejecutar código ni órdenes`);
    const escrituras = src.match(/\b(writeFileSync|appendFileSync|renameSync|unlinkSync|rmSync|copyFileSync)\b/g) ?? [];
    if (['scripts/ia/revision-ejercicio.mjs', 'scripts/ia/auditoria-documental.mjs'].includes(f)) assert.deepEqual(escrituras.filter((w) => w !== 'writeFileSync'), [], f);
    else assert.deepEqual(escrituras, [], `${f} no debe escribir archivos`);
  }
  const src = readFileSync(join(RAIZ, 'scripts/ia/revision-ejercicio.mjs'), 'utf8');
  assert.equal((src.match(/writeFileSync\(/g) ?? []).length, 1, 'una sola escritura: el informe, en guardarInforme');
  // Auditoría documental: una sola llamada de escritura, sin sobrescribir, dentro de su carpeta de ejecuciones.
  const doc = readFileSync(join(RAIZ, 'scripts/ia/auditoria-documental.mjs'), 'utf8');
  assert.equal((doc.match(/writeFileSync\(/g) ?? []).length, 1);
  assert.match(doc, /writeFileSync\(join\(raiz, rel, nombre\), texto, \{ flag: 'wx' \}\)/);
});
