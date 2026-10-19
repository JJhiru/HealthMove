// Pruebas de integración de la app en un navegador real (Chromium sin interfaz).
// Comprueban lo que se ve en pantalla y lo que queda en localStorage, no el código fuente.
// Uso: npm run test:navegador   (navegador: HM_CHROME, PATH o caché de Playwright; si no hay, se omiten)
//
// Todos los ejercicios del catálogo real están en borrador, así que los flujos normales se prueban
// en modo desarrollo; el flujo sin modo desarrollo se prueba sirviendo una copia con ejercicios aprobados.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import * as P from '../../public/js/perfil.js';
import { generarRutina } from '../../public/js/motor.js';
import { catalogoReal, perfilCompleto } from '../ayudas.mjs';
import { buscarNavegador, arrancarServidor, arrancarNavegador, abrirPestana } from './ayudas-navegador.mjs';

const rutaNavegador = buscarNavegador();
const omitir = rutaNavegador ? false : 'no se encontró Chromium/Chrome (define HM_CHROME): estas pruebas NO se han ejecutado';
let servidor; let nav;

before(async () => {
  if (omitir) return;
  servidor = await arrancarServidor();
  nav = await arrancarNavegador(rutaNavegador);
});
after(async () => {
  await nav?.cerrar();
  await servidor?.cerrar();
});

const nombre = new Map(catalogoReal.ejercicios.map((e) => [e.id, e.nombre]));
const perfil = {
  base: perfilCompleto(),
  unBrazo: P.alternarOpcion(perfilCompleto(), 'brazos', 'un_brazo'),
  sinImpacto: P.alternarOpcion(perfilCompleto(), 'indicaciones', 'sin_impacto'),
};
// Rutina guardada tal como la guarda la app (generar en app.js).
function rutinaGuardada(p = perfil.base, semilla = 3) {
  const res = generarRutina(catalogoReal, p, { semilla, permitirBorrador: true });
  assert.equal(res.ok, true);
  return JSON.parse(JSON.stringify({ res, semilla, fecha: '2026-10-17T09:00:00.000Z' }));
}
async function conPestana(fn) {
  const pestana = await abrirPestana(nav, servidor);
  try { await fn(pestana); } finally { servidor.catalogo = null; await pestana.cerrar(); }
}
const cifra = (t) => t.evaluar('document.getElementById("cifra")?.textContent');
const segundos = (mmss) => { const [m, s] = mmss.split(':').map(Number); return m * 60 + s; };
const esperar = (ms) => new Promise((ok) => setTimeout(ok, ms));

test('1-6. generar, empezar, pausar y reanudar, avanzar y retroceder, finalizar y volver a abrir', { skip: omitir }, () => conPestana(async (t) => {
  await t.sembrar({ valores: { nombre: '', perfil: perfil.base, desarrollo: true } });
  await t.abrirApp('#rutina');

  // 1. Generar
  await t.pulsar('[data-accion="generar"]');
  await t.hasta('document.querySelector("#app h1")?.textContent.includes("Tu rutina")', { mensaje: 'aparece la rutina' });
  const guardada = await t.leer('resultado');
  const bloques = guardada.res.rutina.bloques;
  assert.ok(bloques.length >= 5);
  assert.equal(typeof guardada.res.rutina.huella, 'string');
  assert.doesNotMatch(await t.texto(), /han cambiado|No sabemos con qué perfil/);
  assert.match(await t.texto(), /no es una prescripción/);

  // 2. Empezar
  await t.pulsar('[data-accion="empezar"]');
  await t.hasta('location.hash === "#reproductor" && !!document.getElementById("titulo-ej")');
  assert.equal(await t.evaluar('document.getElementById("titulo-ej").textContent'), nombre.get(bloques[0].ejercicioId));
  assert.equal(await t.existe('[data-accion="anterior"]:disabled'), true);

  // 3. Pausar y reanudar: el tiempo baja, se detiene en pausa y vuelve a bajar.
  const t0 = segundos(await cifra(t));
  await esperar(2200);
  const t1 = segundos(await cifra(t));
  assert.ok(t1 < t0, `el tiempo baja (${t0} → ${t1})`);
  await t.pulsar('[data-accion="pausa"]');
  assert.match(await t.evaluar('document.querySelector("[data-accion=pausa]").textContent'), /Reanudar/);
  const p0 = segundos(await cifra(t));
  await esperar(2200);
  assert.equal(segundos(await cifra(t)), p0, 'en pausa el tiempo no cambia');
  await t.pulsar('[data-accion="pausa"]');
  assert.match(await t.evaluar('document.querySelector("[data-accion=pausa]").textContent'), /Pausar/);
  await esperar(2200);
  assert.ok(segundos(await cifra(t)) < p0, 'al reanudar el tiempo vuelve a bajar');

  // 4. Avanzar y retroceder
  await t.pulsar('[data-accion="siguiente"]');
  assert.match(await t.texto(), new RegExp(`Ejercicio 2 de ${bloques.length}`));
  assert.equal(await t.evaluar('document.getElementById("titulo-ej").textContent'), nombre.get(bloques[1].ejercicioId));
  await t.pulsar('[data-accion="anterior"]');
  assert.match(await t.texto(), new RegExp(`Ejercicio 1 de ${bloques.length}`));
  assert.equal(await t.evaluar('document.getElementById("titulo-ej").textContent'), nombre.get(bloques[0].ejercicioId));
  if (await t.existe('[data-accion="leer"]')) await t.pulsar('[data-accion="leer"]'); // no debe lanzar errores

  // 5. Finalizar
  for (let i = 1; i < bloques.length; i++) await t.pulsar('[data-accion="siguiente"]');
  assert.match(await t.evaluar('document.querySelector("[data-accion=siguiente]").textContent'), /Terminar/);
  await t.pulsar('[data-accion="siguiente"]');
  await t.hasta('location.hash === "#fin"');
  const historial = await t.leer('historial');
  assert.equal(historial.length, 1);
  assert.equal(historial[0].estado, 'completada');
  assert.equal(historial[0].ejercicios, bloques.length);
  assert.deepEqual(await t.leer('resultado'), guardada, 'terminar no modifica la rutina guardada');

  // 6. Volver a abrir la app con la rutina guardada
  await t.evaluar('location.hash = "#rutina"');
  await t.recargar();
  await t.hasta('document.querySelector("#app h1")?.textContent.includes("Tu rutina")');
  assert.doesNotMatch(await t.texto(), /han cambiado|No sabemos con qué perfil|ya no se puede usar/);
  assert.match(await t.texto(), new RegExp(nombre.get(bloques[0].ejercicioId).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  assert.deepEqual(await t.leer('resultado'), guardada);
  await t.pulsar('[data-accion="empezar"]');
  await t.hasta('location.hash === "#reproductor" && !!document.getElementById("titulo-ej")');
  assert.deepEqual(t.errores, []);
}));

test('7. rutina bloqueada por un cambio de perfil: no se reproduce y se conserva', { skip: omitir }, () => conPestana(async (t) => {
  const rutina = rutinaGuardada();
  const texto = JSON.stringify(rutina);
  await t.sembrar({ valores: { nombre: '', perfil: perfil.unBrazo, desarrollo: true }, textos: { resultado: texto } });
  await t.abrirApp('#rutina');
  assert.match(await t.texto(), /Esta rutina ya no se puede usar/);
  assert.match(await t.texto(), /exige usar los dos brazos/);
  assert.equal(await t.existe('[data-accion="empezar"]'), false);
  assert.equal(await t.existe('[data-accion="otra"]'), true);
  // Intentar reproducirla directamente
  await t.evaluar('location.hash = "#reproductor"');
  await t.hasta('location.hash === "#rutina"', { mensaje: 'el reproductor devuelve a la rutina' });
  assert.equal(await t.existe('#titulo-ej'), false);
  // Volver a abrir: sigue bloqueada y guardada byte a byte
  await t.recargar();
  assert.match(await t.texto(), /ya no se puede usar/);
  assert.equal(await t.leerTexto('resultado'), texto);
  assert.deepEqual(t.errores, []);
}));

test('7b. rutinas mal formadas o con un id inexistente: bloqueadas, sin errores y sin borrarlas', { skip: omitir }, () => conPestana(async (t) => {
  const fantasma = rutinaGuardada(); fantasma.res.rutina.bloques[0].ejercicioId = 'ejercicio-fantasma';
  for (const texto of ['{}', '"texto"', '{"res":{"ok":true}}', JSON.stringify(fantasma)]) {
    await t.sembrar({ valores: { nombre: '', perfil: perfil.base, desarrollo: true }, textos: { resultado: texto } });
    await t.abrirApp('#rutina');
    assert.match(await t.texto(), /Esta rutina ya no se puede usar/, texto.slice(0, 30));
    assert.equal(await t.leerTexto('resultado'), texto, 'la rutina guardada no cambia');
  }
  assert.deepEqual(t.errores, []);
}));

test('aviso de huella: rutina antigua sin huella y rutina con cambio de perfil, ambas compatibles', { skip: omitir }, () => conPestana(async (t) => {
  const antigua = rutinaGuardada(); delete antigua.res.rutina.huella;
  await t.sembrar({ valores: { nombre: '', perfil: perfil.base, desarrollo: true, resultado: antigua } });
  await t.abrirApp('#rutina');
  let texto = await t.texto();
  assert.match(texto, /No sabemos con qué perfil se preparó esta rutina/);
  assert.match(texto, /compatibles con lo que nos contaste/);
  assert.doesNotMatch(texto, /han cambiado/);
  assert.doesNotMatch(texto, /segur[ao]/i, 'el aviso no habla de seguridad');
  assert.match(texto, /no es una prescripción/);

  await t.sembrar({ valores: { nombre: '', perfil: perfil.sinImpacto, desarrollo: true, resultado: rutinaGuardada() } });
  await t.abrirApp('#reproductor');
  await t.hasta('location.hash === "#rutina"', { mensaje: 'sin confirmar el aviso, el reproductor lleva a la rutina' });
  texto = await t.texto();
  assert.match(texto, /Tu perfil o el catálogo han cambiado desde que se preparó esta rutina/);
  assert.match(texto, /compatibles con tu perfil actual/);
  assert.doesNotMatch(texto, /No sabemos con qué perfil/);
  await t.pulsar('[data-accion="empezar"]');
  await t.hasta('location.hash === "#reproductor" && !!document.getElementById("titulo-ej")');
  assert.deepEqual(t.errores, []);
}));

test('8. perfil corrupto: se copia el original, se avisa, y aceptar el aviso o recargar no lo pierde', { skip: omitir }, () => conPestana(async (t) => {
  await t.sembrar({ valores: { nombre: '' }, textos: { perfil: 'no es json' } });
  await t.abrirApp('#inicio');
  assert.match(await t.texto(), /No hemos podido cargar el perfil que tenías guardado/);
  assert.match(await t.texto(), /sus datos están dañados/);
  assert.equal(await t.leerTexto('perfil'), 'no es json', 'al abrir no se sobrescribe');
  const copias = await t.leer('perfil_original');
  assert.equal(copias.length, 1);
  assert.equal(copias[0].texto, 'no es json');
  assert.equal(copias[0].problema, 'ilegible');

  // Recargar sin hacer nada: el original sigue y la copia no se duplica.
  await t.recargar();
  assert.equal(await t.leerTexto('perfil'), 'no es json');
  assert.equal((await t.leer('perfil_original')).length, 1);

  // Aceptar el aviso guarda un perfil nuevo; la copia exacta del original permanece.
  await t.evaluar('location.hash = "#aviso"');
  await t.hasta('!!document.getElementById("acepto")');
  await t.evaluar('document.getElementById("acepto").checked = true');
  await t.pulsar('[data-accion="aceptar-aviso"]');
  const nuevo = await t.leer('perfil');
  assert.equal(nuevo.avisoAceptado, true);
  assert.deepEqual(await t.leer('perfil_original'), copias);

  // Volver a abrir: el perfil nuevo carga sin aviso y la copia sigue intacta. No hay rutina.
  await t.recargar();
  assert.doesNotMatch(await t.texto(), /No hemos podido cargar/);
  assert.deepEqual(await t.leer('perfil_original'), copias);
  assert.equal(await t.leerTexto('resultado'), null);
  assert.deepEqual(t.errores, []);
}));

test('8b. perfil de otra versión o con secciones inválidas: mismo trato, con su motivo', { skip: omitir }, () => conPestana(async (t) => {
  const otraVersion = JSON.stringify({ ...perfil.base, version: 99 });
  const malo = perfilCompleto(); malo.secciones.manos.opciones = ['inventada'];
  for (const [texto, motivo] of [[otraVersion, /es de otra versión de HealthMove/], [JSON.stringify(malo), /algunos de sus datos no son válidos/]]) {
    await t.sembrar({ valores: { nombre: '' }, textos: { perfil: texto } });
    await t.abrirApp('#inicio');
    assert.match(await t.texto(), motivo);
    assert.equal(await t.leerTexto('perfil'), texto);
    assert.equal((await t.leer('perfil_original'))[0].texto, texto);
  }
  assert.deepEqual(t.errores, []);
}));

test('8c. si no se puede guardar la copia, el perfil original no se sobrescribe', { skip: omitir }, () => conPestana(async (t) => {
  // Copias anteriores ilegibles: no se tocan, y por tanto tampoco se guarda encima del perfil original.
  await t.sembrar({ valores: { nombre: '' }, textos: { perfil: 'no es json', perfil_original: 'copias rotas' } });
  await t.abrirApp('#aviso');
  assert.match(await t.texto(), /no guardaremos en este dispositivo los cambios que hagas en tu perfil/);
  await t.hasta('!!document.getElementById("acepto")');
  await t.evaluar('document.getElementById("acepto").checked = true');
  await t.pulsar('[data-accion="aceptar-aviso"]');
  assert.equal(await t.leerTexto('perfil'), 'no es json');
  assert.equal(await t.leerTexto('perfil_original'), 'copias rotas');
  assert.deepEqual(t.errores, []);
}));

test('9. salir del modo desarrollo con una rutina con borradores: queda bloqueada y se conserva', { skip: omitir }, () => conPestana(async (t) => {
  const texto = JSON.stringify(rutinaGuardada());
  await t.sembrar({ valores: { nombre: '', perfil: perfil.base, desarrollo: true }, textos: { resultado: texto } });
  await t.abrirApp('#rutina');
  assert.match(await t.texto(), /Tu rutina|esta es tu rutina/);
  await t.pulsar('[data-accion="salir-desarrollo"]');
  assert.equal(await t.leer('desarrollo'), false);
  await t.hasta('document.querySelector("#app").innerText.includes("ya no se puede usar")');
  assert.match(await t.texto(), /Se preparó en modo desarrollo con ejercicios que todavía no se han revisado/);
  assert.equal(await t.existe('[data-accion="empezar"]'), false);
  assert.equal(await t.leerTexto('resultado'), texto, 'salir del modo desarrollo no borra la rutina');
  // Volver a abrir sin modo desarrollo: sigue guardada y bloqueada.
  await t.recargar();
  assert.match(await t.texto(), /ya no se puede usar/);
  assert.equal(await t.leerTexto('resultado'), texto);
  // Volver al modo desarrollo: la misma rutina vuelve a poder usarse.
  await t.abrirApp('?desarrollo=1#rutina');
  assert.match(await t.texto(), /Tu rutina|esta es tu rutina/);
  assert.equal(await t.leerTexto('resultado'), texto);
  assert.deepEqual(t.errores, []);
}));

test('sin modo desarrollo, con ejercicios aprobados (copia servida): generar y empezar funcionan', { skip: omitir }, () => conPestana(async (t) => {
  const aprobado = JSON.parse(JSON.stringify(catalogoReal));
  for (const e of aprobado.ejercicios) { e.validacion.estado = 'basado_en_fuente_publica'; e.validacion.revisado_por = 'Prueba de integración'; e.validacion.fecha_revision = '2026-10-18'; }
  servidor.catalogo = JSON.stringify(aprobado);
  await t.sembrar({ valores: { nombre: '', perfil: perfil.base } });
  await t.abrirApp('#rutina');
  await t.pulsar('[data-accion="generar"]');
  await t.hasta('document.querySelector("#app h1")?.textContent.includes("Tu rutina")');
  assert.doesNotMatch(await t.texto(), /sin revisar/);
  await t.pulsar('[data-accion="empezar"]');
  await t.hasta('location.hash === "#reproductor" && !!document.getElementById("titulo-ej")');
  assert.deepEqual(t.errores, []);
}));

test('catálogo con la estructura rota: pantalla de error y nada guardado cambia', { skip: omitir }, () => conPestana(async (t) => {
  const roto = JSON.parse(JSON.stringify(catalogoReal)); roto.exigencias.pop();
  servidor.catalogo = JSON.stringify(roto);
  const texto = JSON.stringify(rutinaGuardada());
  await t.sembrar({ valores: { nombre: '', perfil: perfil.base, desarrollo: true }, textos: { resultado: texto } });
  await t.abrirApp('#rutina');
  assert.match(await t.texto(), /No podemos usar los ejercicios/);
  assert.equal(await t.leerTexto('resultado'), texto);
  assert.deepEqual(await t.leer('perfil'), perfil.base);
  assert.equal(t.errores.length, 1);
  assert.match(t.errores[0], /Catálogo no válido/);
}));
