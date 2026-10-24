// Contrato de las rutinas guardadas: antes de mostrarlas o reproducirlas se comprueba cada bloque
// con el perfil y el catálogo actuales. La comprobación nunca modifica la rutina.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as P from '../public/js/perfil.js';
import { generarRutina, comprobarRutina, huellaCompatibilidad } from '../public/js/motor.js';
import { catalogoReal, perfilCompleto, ejercicioFalso, catalogoFalso } from './ayudas.mjs';

const clonar = (x) => JSON.parse(JSON.stringify(x));
const congelar = (x) => { if (x && typeof x === 'object') { Object.values(x).forEach(congelar); Object.freeze(x); } return x; };
const dev = { permitirBorrador: true };

// Lo que guarda la app (app.js, generar): pasa por JSON, igual que en localStorage.
function guardada(catalogo, perfil, semilla = 3, opciones = dev) {
  const res = generarRutina(catalogo, perfil, { semilla, ...opciones });
  assert.equal(res.ok, true, res.motivo);
  return clonar({ res, semilla, fecha: '2026-10-17T00:00:00.000Z' });
}

test('regresión: una rutina recién generada se comprueba como válida y sin aviso (30 semillas)', () => {
  const p = perfilCompleto();
  for (let semilla = 1; semilla <= 30; semilla++) {
    const r = guardada(catalogoReal, p, semilla);
    assert.equal(comprobarRutina(r, catalogoReal, p, dev).estado, 'ok', `semilla ${semilla}`);
  }
});

test('comprobar una rutina no la modifica (ni bloques, ni orden, ni campos)', () => {
  const p = perfilCompleto();
  const r = guardada(catalogoReal, p);
  const antes = clonar(r);
  congelar(r); // cualquier intento de escribir lanzaría un error en modo estricto
  for (const perfil of [p, P.alternarOpcion(p, 'brazos', 'un_brazo')]) comprobarRutina(r, catalogoReal, perfil, dev);
  comprobarRutina(r, { ...catalogoReal, ejercicios: [] }, p, dev);
  assert.deepEqual(r, antes);
});

test('cambio de perfil incompatible: se bloquea y se señalan los bloques, sin quitarlos', () => {
  const p = perfilCompleto();
  const r = guardada(catalogoReal, p);
  const conUnBrazo = P.alternarOpcion(p, 'brazos', 'un_brazo');
  const c = comprobarRutina(r, catalogoReal, conUnBrazo, dev);
  assert.equal(c.estado, 'bloqueada');
  const porId = new Map(catalogoReal.ejercicios.map((e) => [e.id, e]));
  const esperados = r.res.rutina.bloques.map((b, i) => [i, b.ejercicioId]).filter(([, id]) => porId.get(id).exigencias.ambos_brazos);
  assert.ok(esperados.length > 0, 'la semilla elegida debe incluir algún ejercicio con ambos_brazos');
  assert.deepEqual(c.motivos.map((m) => [m.bloque, m.ejercicioId]), esperados);
  assert.ok(c.motivos.every((m) => m.tipo === 'incompatible' && m.motivos.some((x) => x.codigo === 'ambos_brazos')));
});

test('id que ya no existe en el catálogo: se bloquea sin lanzar excepciones', () => {
  const p = perfilCompleto();
  const r = guardada(catalogoReal, p);
  const quitado = r.res.rutina.bloques[0].ejercicioId;
  const cat = { ...catalogoReal, ejercicios: catalogoReal.ejercicios.filter((e) => e.id !== quitado) };
  const c = comprobarRutina(r, cat, p, dev);
  assert.equal(c.estado, 'bloqueada');
  assert.ok(c.motivos.some((m) => m.tipo === 'no_existe' && m.ejercicioId === quitado));
  // Un bloque sin id, o con un id que no es texto, también.
  const rara = clonar(r); rara.res.rutina.bloques[1].ejercicioId = 42;
  assert.ok(comprobarRutina(rara, catalogoReal, p, dev).motivos.some((m) => m.tipo === 'no_existe' && m.bloque === 1));
});

test('ejercicio invalidado después de guardar la rutina: se bloquea', () => {
  const p = perfilCompleto();
  const r = guardada(catalogoReal, p);
  const id = r.res.rutina.bloques[0].ejercicioId;
  const cat = clonar(catalogoReal);
  delete cat.ejercicios.find((e) => e.id === id).exigencias.agarre;
  const c = comprobarRutina(r, cat, p, dev);
  assert.equal(c.estado, 'bloqueada');
  assert.ok(c.motivos.some((m) => m.tipo === 'invalido' && m.ejercicioId === id));
});

test('bloque en una fase que no corresponde a su ejercicio: se bloquea', () => {
  const p = perfilCompleto();
  const r = guardada(catalogoReal, p);
  const i = r.res.rutina.bloques.findIndex((b) => b.fase === 'principal');
  const e = catalogoReal.ejercicios.find((x) => x.id === r.res.rutina.bloques[i].ejercicioId);
  const otra = ['calentamiento', 'calma', 'siesta'].find((f) => !e.fases.includes(f));
  r.res.rutina.bloques[i].fase = otra;
  const c = comprobarRutina(r, catalogoReal, p, dev);
  assert.equal(c.estado, 'bloqueada');
  assert.ok(c.motivos.some((m) => m.tipo === 'fase' && m.bloque === i));
});

test('catálogo o perfil no válidos: se bloquea', () => {
  const p = perfilCompleto();
  const r = guardada(catalogoReal, p);
  const roto = clonar(catalogoReal); roto.exigencias.pop();
  assert.equal(comprobarRutina(r, roto, p, dev).motivos[0].tipo, 'catalogo_invalido');
  assert.equal(comprobarRutina(r, catalogoReal, { ...p, posicion: 'volando' }, dev).motivos[0].tipo, 'perfil_incompleto');
});

test('rutina mal formada o sin bloques: se bloquea', () => {
  const p = perfilCompleto();
  for (const r of [null, {}, { res: { ok: false } }, { res: { ok: true, rutina: { bloques: [] } } }, { res: { ok: true, rutina: { bloques: 'x' } } }]) {
    assert.deepEqual(comprobarRutina(r, catalogoReal, p, dev), { estado: 'bloqueada', motivos: [{ tipo: 'rutina_no_valida' }] });
  }
});

test('rutina con borradores fuera del modo desarrollo: se bloquea', () => {
  // Copia con todo en borrador: el catálogo real ya tiene casi todo aprobado (P30).
  const borrador = structuredClone(catalogoReal);
  for (const e of borrador.ejercicios) e.validacion = { ...e.validacion, estado: 'borrador' };
  const p = perfilCompleto();
  const r = guardada(borrador, p);
  const c = comprobarRutina(r, borrador, p, { permitirBorrador: false });
  assert.equal(c.estado, 'bloqueada');
  assert.ok(c.motivos.every((m) => m.tipo === 'incompatible' && m.motivos.some((x) => x.tipo === 'sin_revisar')));
});

test('bloques todavía compatibles: cambiar solo la duración no avisa; cambiar una restricción sí', () => {
  const p = perfilCompleto();
  const r = guardada(catalogoReal, p);
  assert.equal(comprobarRutina(r, catalogoReal, P.elegirDuracion(p, 20), dev).estado, 'ok');
  // «Evitar impactos» excluye una exigencia que ningún ejercicio tiene: los bloques siguen valiendo, la huella cambia.
  const sinImpacto = P.alternarOpcion(p, 'indicaciones', 'sin_impacto');
  const c = comprobarRutina(r, catalogoReal, sinImpacto, dev);
  assert.deepEqual(c, { estado: 'ok_con_aviso', aviso: 'cambio', motivos: [] });
  // Una versión de catálogo distinta también avisa.
  assert.equal(comprobarRutina(r, { ...catalogoReal, version: '9.9.9' }, p, dev).aviso, 'cambio');
});

test('rutina guardada antes de existir la huella: se comprueba igual y avisa', () => {
  const p = perfilCompleto();
  const r = guardada(catalogoReal, p);
  delete r.res.rutina.huella;
  assert.deepEqual(comprobarRutina(r, catalogoReal, p, dev), { estado: 'ok_con_aviso', aviso: 'sin_huella', motivos: [] });
  // Sin huella no se acepta nada que no valga: con un perfil incompatible sigue bloqueada.
  const inval = clonar(r); inval.res.rutina.bloques[0].ejercicioId = 'no-existe';
  assert.equal(comprobarRutina(inval, catalogoReal, p, dev).estado, 'bloqueada');
  assert.equal(comprobarRutina(r, catalogoReal, P.alternarOpcion(p, 'brazos', 'un_brazo'), dev).estado, 'bloqueada');
});

test('la huella solo depende de lo que decide la compatibilidad', () => {
  const p = perfilCompleto();
  const h = huellaCompatibilidad(p, catalogoReal);
  assert.equal(huellaCompatibilidad(P.elegirDuracion(p, 20), catalogoReal), h);
  assert.equal(huellaCompatibilidad({ ...p, nombre: 'Ana' }, catalogoReal), h);
  assert.notEqual(huellaCompatibilidad(P.alternarOpcion(p, 'manos', 'cerrar_mano'), catalogoReal), h);
  assert.notEqual(huellaCompatibilidad(P.alternarRecurso(p, 'banda'), catalogoReal), h);
  assert.notEqual(huellaCompatibilidad(P.elegirPosicion(p, 'de_pie_apoyo'), catalogoReal), h);
});

test('integración: generar, guardar como JSON, cambiar el perfil y volver a comprobar', () => {
  const ej = [
    ejercicioFalso('c', { fases: ['calentamiento'] }), ejercicioFalso('k', { fases: ['calma'] }),
    ejercicioFalso('a'), ejercicioFalso('b'), ejercicioFalso('d', { si: ['agarre'] }),
  ];
  const cat = catalogoFalso(ej);
  const p = perfilCompleto((x) => P.elegirDuracion(x, 10));
  const r = guardada(cat, p, 1, {});
  assert.ok(r.res.rutina.bloques.some((b) => b.ejercicioId === 'd'));
  assert.equal(comprobarRutina(r, cat, p).estado, 'ok');
  const conMano = P.alternarOpcion(p, 'manos', 'cerrar_mano');
  const c = comprobarRutina(r, cat, conMano);
  assert.equal(c.estado, 'bloqueada');
  assert.deepEqual([...new Set(c.motivos.map((m) => m.ejercicioId))], ['d']);
  // Generar otra con el perfil nuevo da una rutina que sí pasa la comprobación… o informa de que no hay suficientes.
  const nueva = generarRutina(cat, conMano);
  if (nueva.ok) assert.equal(comprobarRutina(clonar({ res: nueva }), cat, conMano).estado, 'ok');
  else assert.equal(nueva.motivo, 'catalogo_insuficiente');
});
