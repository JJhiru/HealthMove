// Auditoría documental con DeepSeek (scripts/ia/auditoria-documental.mjs, orden auditar-documentos).
// Sin red: transporte simulado. Lo esencial: la respuesta se guarda literal, byte a byte, también si
// llega truncada o vacía; los reintentos están acotados; nada se sobrescribe.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, mkdtempSync, rmSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';
import { leerConfiguracion } from '../scripts/ia/configuracion.mjs';
import { Presupuesto, LimiteAlcanzado } from '../scripts/ia/presupuesto.mjs';
import { leerFase, prepararFase, prepararContinuacion, ejecutarFase, guardarEjecucion, FaseInvalida, CARPETA, MAX_INTENTOS, MAX_BLOQUES, ORDEN_CONTINUAR } from '../scripts/ia/auditoria-documental.mjs';

const RAIZ = fileURLToPath(new URL('..', import.meta.url));
const CLAVE = 'clave-de-prueba-0123456789abcdef';
const config = { ...leerConfiguracion({}), maxTokensEntrada: 200000, maxTokensSalida: 16000, presupuestoUSD: 1, maxSolicitudes: 10 };
const sha = (t) => createHash('sha256').update(t).digest('hex');
// La fase 01 con su bloque de pie en dos partes: entero ya no cabe en MAX_CARACTERES_BLOQUE.
const fase01 = leerFase(RAIZ, 'fase-01-protocolo');
const prep = prepararFase(RAIZ, { ...fase01, bloques: fase01.bloques.flatMap((b) => (b.tipo === 'catalogo-de-pie' ? ['1/2', '2/2'].map((parte, i) => ({ ...b, id: `${b.id}-${i + 1}`, parte })) : [b])) });

// Texto difícil de conservar: Unicode, espacios al final, \r\n, tabuladores, comillas y markdown.
const LITERAL = '# Informe\r\n\nDS-1 · «ambos_brazos» — evidencia: "sujétate con las dos manos"  \n\t- ñ, ü, 😀, ½\n\n```js\nconst x = 1;\n```\n';
const cuerpo = (contenido, finish = 'stop', usage = { prompt_tokens: 50000, prompt_cache_hit_tokens: 0, prompt_cache_miss_tokens: 50000, completion_tokens: 3000, total_tokens: 53000 }) =>
  `\n\n${JSON.stringify({ id: 'resp-doc', model: 'deepseek-flash', choices: [{ index: 0, finish_reason: finish, message: { role: 'assistant', content: contenido } }], usage })}`;
const respuesta = (texto, status = 200) => ({ ok: status < 300, status, text: async () => texto, json: async () => JSON.parse(texto) });
const transporteDe = (...respuestas) => { const cola = [...respuestas]; let llamadas = 0; const t = async () => { llamadas++; const r = cola.shift(); if (r instanceof Error) throw r; return r; }; t.llamadas = () => llamadas; return t; };
const ejecutar = (transporte, cfg = config) => ejecutarFase(prep, { config: cfg, clave: CLAVE, presupuesto: new Presupuesto(cfg), transporte });

test('fase: solo ids, claves y rutas válidas del repositorio', () => {
  assert.equal(prep.bloques.length, 10);
  assert.equal(prep.mensajes[0].role, 'system');
  assert.ok(prep.mensajes[1].content.includes('<<<INICIO id="protocolo" procedencia="docs/auditoria-catalogo/protocolo.md">>>'));
  const catalogo = JSON.parse(readFileSync(join(RAIZ, 'public/data/catalogo.json'), 'utf8'));
  const partes = ['catalogo-de-pie-1', 'catalogo-de-pie-2'].map((id) => prep.bloques.find((b) => b.id === id));
  assert.deepEqual(partes.map((b) => b.procedencia), ['public/data/catalogo.json#catalogo-de-pie-1-de-2', 'public/data/catalogo.json#catalogo-de-pie-2-de-2']);
  const dePie = partes.flatMap((b) => JSON.parse(b.texto).ejercicios.map((e) => e.id));
  assert.deepEqual(dePie, catalogo.ejercicios.filter((e) => e.posiciones.includes('de_pie')).map((e) => e.id), 'las partes, juntas y en orden, son los de pie: ni el catálogo entero ni huecos');
  for (const id of ['../x', 'fase-1', 'FASE-01', 'fase-01/../../x', '']) assert.throws(() => leerFase(RAIZ, id), FaseInvalida, id);
  const raiz = mkdtempSync(join(tmpdir(), 'hm-fase-'));
  try {
    mkdirSync(join(raiz, CARPETA, 'fases'), { recursive: true });
    const fase = (obj) => { writeFileSync(join(raiz, CARPETA, 'fases', 'fase-99.json'), JSON.stringify(obj)); return () => leerFase(raiz, 'fase-99'); };
    const base = { id: 'fase-99', titulo: 't', instrucciones: 'i.md', tarea: 't.md', bloques: [{ id: 'a', tipo: 'archivo', ruta: 'a.md' }] };
    assert.doesNotThrow(fase(base));
    assert.throws(fase({ ...base, extra: 1 }), FaseInvalida);
    assert.throws(fase({ ...base, id: 'fase-98' }), FaseInvalida);
    assert.throws(fase({ ...base, bloques: [{ id: 'a', tipo: 'url', ruta: 'x' }] }), FaseInvalida);
    assert.throws(fase({ ...base, bloques: [{ id: 'a', tipo: 'archivo', ruta: 'a.md' }, { id: 'a', tipo: 'archivo', ruta: 'b.md' }] }), FaseInvalida);
    assert.doesNotThrow(fase({ ...base, bloques: [{ id: 'a', tipo: 'catalogo-de-pie', parte: '2/3' }] }));
    for (const parte of ['3/2', '0/2', '1-2', 2, '']) assert.throws(fase({ ...base, bloques: [{ id: 'a', tipo: 'catalogo-de-pie', parte }] }), FaseInvalida, String(parte));
    assert.throws(fase({ ...base, bloques: [{ id: 'a', tipo: 'archivo', ruta: 'a.md', parte: '1/2' }] }), FaseInvalida);
    assert.doesNotThrow(fase({ ...base, bloques: [{ id: 'a', tipo: 'catalogo-ids', ids: ['boxeo-sentado', 'pulgar-dedos'] }] }));
    for (const ids of [undefined, [], ['Boxeo'], ['a', 'a'], ['../x'], [1], 'boxeo-sentado']) assert.throws(fase({ ...base, bloques: [{ id: 'a', tipo: 'catalogo-ids', ids }] }), FaseInvalida, JSON.stringify(ids));
    assert.throws(fase({ ...base, bloques: [{ id: 'a', tipo: 'catalogo-de-pie', ids: ['x'] }] }), FaseInvalida);
    // Rutas fuera del repositorio o prohibidas no se leen.
    writeFileSync(join(raiz, '.env'), 'DEEPSEEK_API_KEY=x');
    writeFileSync(join(raiz, 'i.md'), 'i'); writeFileSync(join(raiz, 't.md'), 't');
    mkdirSync(join(raiz, 'public/data'), { recursive: true });
    writeFileSync(join(raiz, 'public/data/catalogo.json'), JSON.stringify({ ejercicios: [] }));
    for (const ruta of ['../fuera.md', '/etc/passwd', '.env', 'no-existe.md']) {
      assert.throws(() => prepararFase(raiz, { ...base, bloques: [{ id: 'a', tipo: 'archivo', ruta }] }), Error, ruta);
    }
    assert.throws(() => prepararFase(raiz, { ...base, bloques: [{ id: 'a', tipo: 'catalogo-ids', ids: ['no-existe'] }] }), FaseInvalida, 'un id que no está en el catálogo');
  } finally { rmSync(raiz, { recursive: true, force: true }); }
});

test('ejecución: una respuesta completa en un solo intento, con su coste', async () => {
  const t = transporteDe(respuesta(cuerpo(LITERAL)));
  const r = await ejecutar(t);
  assert.equal(r.estado, 'completa');
  assert.equal(r.respuesta.contenido, LITERAL);
  assert.equal(t.llamadas(), 1);
  assert.ok(r.intentos[0].coste > 0 && r.intentos[0].costeExacto);
});

test('ejecución: reintentos acotados solo ante errores transitorios o respuestas vacías', async () => {
  assert.equal((await ejecutar(transporteDe(respuesta(cuerpo('')), respuesta(cuerpo(LITERAL))))).estado, 'completa');
  assert.equal((await ejecutar(transporteDe(respuesta('{}', 429), respuesta(cuerpo(LITERAL))))).estado, 'completa');
  const vacias = transporteDe(respuesta(cuerpo('')), respuesta(cuerpo('')), respuesta(cuerpo(LITERAL)));
  const rv = await ejecutar(vacias);
  assert.equal(rv.estado, 'vacia');
  assert.equal(vacias.llamadas(), MAX_INTENTOS, 'nunca más de MAX_INTENTOS');
  for (const status of [400, 401, 402, 422]) {
    const t = transporteDe(respuesta('{}', status), respuesta(cuerpo(LITERAL)));
    const r = await ejecutar(t);
    assert.equal(r.estado, 'error');
    assert.equal(t.llamadas(), 1, `${status} no se reintenta`);
  }
  // Una respuesta truncada se conserva y no se reintenta.
  const tr = transporteDe(respuesta(cuerpo('# Informe parcial…', 'length')), respuesta(cuerpo(LITERAL)));
  const rt = await ejecutar(tr);
  assert.equal(rt.estado, 'truncada');
  assert.equal(rt.respuesta.contenido, '# Informe parcial…');
  assert.equal(tr.llamadas(), 1);
});

test('ejecución: el presupuesto se comprueba antes de enviar', async () => {
  const t = transporteDe(respuesta(cuerpo(LITERAL)));
  await assert.rejects(ejecutar(t, { ...config, presupuestoUSD: 0.001 }), LimiteAlcanzado);
  assert.equal(t.llamadas(), 0);
  await assert.rejects(ejecutar(t, { ...config, maxTokensEntrada: 1000 }), LimiteAlcanzado);
  assert.equal(t.llamadas(), 0);
});

test('guardado: respuesta y cuerpo literales byte a byte, con hashes verificables y sin sobrescribir', async () => {
  const raiz = mkdtempSync(join(tmpdir(), 'hm-ejec-'));
  try {
    const texto = cuerpo(LITERAL);
    const resultado = await ejecutar(transporteDe(respuesta(texto)));
    const ahora = new Date('2026-10-18T12:00:00.000Z');
    const g = guardarEjecucion(raiz, { prep, resultado, ahora, clave: CLAVE, config });
    const leer = (f) => readFileSync(join(raiz, g.archivos[f]));
    assert.deepEqual(leer('respuesta'), Buffer.from(LITERAL, 'utf8'), 'respuesta.md es exactamente el contenido recibido');
    assert.deepEqual(leer('respuestaApi'), Buffer.from(texto, 'utf8'), 'respuesta-api.json es exactamente el cuerpo recibido');
    const meta = JSON.parse(leer('metadatos'));
    assert.equal(meta.literalVerificado, true);
    assert.equal(meta.hashes.respuesta, sha(leer('respuesta')));
    assert.equal(meta.hashes.respuestaApi, sha(leer('respuestaApi')));
    assert.equal(meta.estado, 'completa');
    assert.equal(meta.bloques.length, prep.bloques.length);
    assert.ok(!JSON.stringify(meta).includes(CLAVE) && !leer('solicitud').toString().includes(CLAVE));
    assert.throws(() => guardarEjecucion(raiz, { prep, resultado, ahora, clave: CLAVE, config }), /EEXIST/, 'una ejecución nunca se sobrescribe');
  } finally { rmSync(raiz, { recursive: true, force: true }); }
});

test('guardado: truncada, vacía y error quedan registradas como tales, sin inventar contenido', async () => {
  const raiz = mkdtempSync(join(tmpdir(), 'hm-ejec-'));
  try {
    const guarda = async (t, s) => guardarEjecucion(raiz, { prep, resultado: await ejecutar(t), ahora: new Date(`2026-10-18T12:00:0${s}.000Z`), clave: CLAVE, config });
    const tr = await guarda(transporteDe(respuesta(cuerpo('parcial', 'length'))), 1);
    assert.equal(tr.meta.estado, 'truncada');
    assert.equal(readFileSync(join(raiz, tr.archivos.respuesta), 'utf8'), 'parcial');
    const va = await guarda(transporteDe(respuesta(cuerpo('')), respuesta(cuerpo(''))), 2);
    assert.equal(va.meta.estado, 'vacia');
    assert.equal(readFileSync(join(raiz, va.archivos.respuesta), 'utf8'), '');
    const er = await guarda(transporteDe(respuesta('{"error":{"message":"x"}}', 401)), 3);
    assert.equal(er.meta.estado, 'error');
    assert.equal(er.archivos.respuesta, undefined, 'sin respuesta no hay respuesta.md');
    assert.equal(er.meta.intentos[0].http, 401);
    await assert.rejects(async () => guarda(transporteDe(respuesta(cuerpo(`fuga ${CLAVE}`))), 4), /clave/);
  } finally { rmSync(raiz, { recursive: true, force: true }); }
});

test('continuación: reenvía la conversación exacta y solo sobre una respuesta truncada e intacta', async () => {
  const raiz = mkdtempSync(join(tmpdir(), 'hm-cont-'));
  try {
    const parcial = '# Informe\n\n### DS-01 · algo  \n- **Nivel de certeza:** alta.\n-';
    const r1 = await ejecutar(transporteDe(respuesta(cuerpo(parcial, 'length'))));
    const g1 = guardarEjecucion(raiz, { prep, resultado: r1, ahora: new Date('2026-10-18T12:00:00.000Z'), clave: CLAVE, config });
    const c = prepararContinuacion(raiz, g1.idEjecucion);
    assert.deepEqual(c.mensajes.slice(0, 2), prep.mensajes, 'el prefijo es exactamente la solicitud anterior');
    assert.deepEqual(c.mensajes[2], { role: 'assistant', content: parcial }, 'la respuesta anterior va literal');
    assert.equal(c.mensajes[3].content, ORDEN_CONTINUAR);
    assert.equal(c.continuacion.bloque, 2);
    const r2 = await ejecutarFase(c, { config, clave: CLAVE, presupuesto: new Presupuesto(config), transporte: transporteDe(respuesta(cuerpo(' resto del informe.', 'length'))) });
    const g2 = guardarEjecucion(raiz, { prep: c, resultado: r2, ahora: new Date('2026-10-18T12:01:00.000Z'), clave: CLAVE, config });
    assert.match(g2.idEjecucion, /-bloque2$/);
    assert.equal(g2.meta.continuacion.continuaDe, g1.idEjecucion);
    assert.equal(readFileSync(join(raiz, g2.archivos.respuesta), 'utf8'), ' resto del informe.');
    const c3 = prepararContinuacion(raiz, g2.idEjecucion);
    assert.equal(c3.continuacion.raiz, g1.idEjecucion);
    const r3 = await ejecutarFase(c3, { config, clave: CLAVE, presupuesto: new Presupuesto(config), transporte: transporteDe(respuesta(cuerpo('más', 'length'))) });
    const g3 = guardarEjecucion(raiz, { prep: c3, resultado: r3, ahora: new Date('2026-10-18T12:02:00.000Z'), clave: CLAVE, config });
    assert.throws(() => prepararContinuacion(raiz, g3.idEjecucion), /bloques/, `como mucho ${MAX_BLOQUES} bloques`);
    // Una ejecución completa no se continúa, y un respuesta.md alterado tampoco.
    const rc = await ejecutar(transporteDe(respuesta(cuerpo(LITERAL))));
    const gc = guardarEjecucion(raiz, { prep, resultado: rc, ahora: new Date('2026-10-18T12:03:00.000Z'), clave: CLAVE, config });
    assert.throws(() => prepararContinuacion(raiz, gc.idEjecucion), /no está truncada/);
    writeFileSync(join(raiz, g1.archivos.respuesta), `${parcial} editado`);
    assert.throws(() => prepararContinuacion(raiz, g1.idEjecucion), /hash/);
    assert.throws(() => prepararContinuacion(raiz, '../../x'), FaseInvalida);
  } finally { rmSync(raiz, { recursive: true, force: true }); }
});

test('CLI: auditar-documentos simula sin red ni clave y no crea ejecuciones', () => {
  const carpeta = join(RAIZ, CARPETA, 'ejecuciones');
  const antes = existsSync(carpeta) ? readdirSync(carpeta) : null;
  const entorno = Object.fromEntries(Object.entries(process.env).filter(([k]) => k !== 'DEEPSEEK_API_KEY' && !k.startsWith('HM_IA_')));
  const cli = (...a) => spawnSync(process.execPath, ['--import', 'data:text/javascript,globalThis.fetch=()=>{throw new Error("RED-PROHIBIDA")}', join(RAIZ, 'scripts/auditoria-ia.mjs'), ...a], { encoding: 'utf8', env: entorno });
  // Una fase vigente: las ya ejecutadas no se editan y su bloque de pie entero ya no cabe.
  const sim = cli('auditar-documentos', 'fase-03-leicester');
  assert.equal(sim.status, 0, sim.stderr);
  assert.match(sim.stdout, /SIMULACIÓN \(no se llama a la API\)/);
  assert.doesNotMatch(sim.stdout + sim.stderr, /RED-PROHIBIDA/);
  const sinClave = cli('auditar-documentos', 'fase-03-leicester', '--ejecutar');
  assert.equal(sinClave.status, 2);
  assert.match(sinClave.stderr, /falta DEEPSEEK_API_KEY/);
  for (const a of [['auditar-documentos'], ['auditar-documentos', '../x'], ['auditar-documentos', 'fase-01-protocolo', '--borrar']]) {
    assert.equal(cli(...a).status, 2, JSON.stringify(a));
  }
  assert.deepEqual(existsSync(carpeta) ? readdirSync(carpeta) : null, antes);
});
