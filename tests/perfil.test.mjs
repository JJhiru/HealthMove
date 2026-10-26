// CS50 AI citation: written with the help of Claude (Anthropic), an AI assistant. Requirements, design decisions and review: JJhiru.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { SECCIONES } from '../public/js/opciones.js';
import * as P from '../public/js/perfil.js';
import { perfilCompleto } from './ayudas.mjs';

test('un perfil nuevo tiene todas las secciones sin revisar', () => {
  const p = P.perfilVacio();
  for (const s of SECCIONES) assert.equal(P.estadoSeccion(p, s.id), 'no_revisada');
});

test('marcar una dificultad pone la sección en "con_selecciones"', () => {
  const p = P.alternarOpcion(P.perfilVacio(), 'piernas', 'rodilla');
  assert.equal(P.estadoSeccion(p, 'piernas'), 'con_selecciones');
  assert.deepEqual(p.secciones.piernas.opciones, ['rodilla']);
});

test('desmarcar la última dificultad vuelve a "no_revisada" (hay que responder explícitamente)', () => {
  const p = P.alternarOpcion(P.alternarOpcion(P.perfilVacio(), 'piernas', 'rodilla'), 'piernas', 'rodilla');
  assert.equal(P.estadoSeccion(p, 'piernas'), 'no_revisada');
});

test('"sin dificultades en esta sección" solo borra las opciones de esa sección', () => {
  let p = P.alternarOpcion(P.perfilVacio(), 'piernas', 'rodilla');
  p = P.alternarOpcion(p, 'manos', 'cerrar_mano');
  p = P.marcarSinDificultades(p, 'piernas');
  assert.equal(P.estadoSeccion(p, 'piernas'), 'sin_dificultades');
  assert.deepEqual(p.secciones.piernas.opciones, []);
  assert.deepEqual(p.secciones.manos.opciones, ['cerrar_mano']);
});

test('marcar una dificultad retira "sin dificultades" de su sección', () => {
  let p = P.marcarSinDificultades(P.perfilVacio(), 'espalda');
  p = P.alternarOpcion(p, 'espalda', 'girar');
  assert.equal(P.estadoSeccion(p, 'espalda'), 'con_selecciones');
});

test('"deshacer" es volver al perfil anterior: las funciones no modifican el original', () => {
  const antes = P.alternarOpcion(P.perfilVacio(), 'piernas', 'rodilla');
  const copia = structuredClone(antes);
  P.marcarSinDificultades(antes, 'piernas');
  assert.deepEqual(antes, copia);
});

test('la declaración global no borra nada y cubre solo las secciones sin revisar', () => {
  let p = P.alternarOpcion(P.perfilVacio(), 'piernas', 'rodilla');
  p = P.confirmarDeclaracionGlobal(p);
  assert.deepEqual(p.secciones.piernas.opciones, ['rodilla']);
  assert.equal(P.estadoSeccion(p, 'piernas'), 'con_selecciones');
  assert.equal(P.estadoSeccion(p, 'manos'), 'cubierta_por_declaracion');
});

test('cambiar cualquier sección invalida la declaración global', () => {
  let p = P.confirmarDeclaracionGlobal(P.perfilVacio());
  p = P.alternarOpcion(p, 'piernas', 'rodilla');
  assert.equal(p.declaracionGlobal, false);
  assert.equal(P.estadoSeccion(p, 'manos'), 'no_revisada');
});

test('sin declaración, una sección no revisada impide generar', () => {
  let p = perfilCompleto();
  p = { ...p, secciones: { ...p.secciones, manos: { estado: 'no_revisada', opciones: [] } } };
  assert.ok(P.validarPerfil(p).some((x) => x.codigo === 'seccion:manos'));
  assert.deepEqual(P.validarPerfil(P.confirmarDeclaracionGlobal(p)), []);
});

test('caso rodilla: una sola restricción + declaración global basta para generar', () => {
  let p = P.aceptarAviso(P.perfilVacio());
  p = P.elegirPosicion(p, 'de_pie_libre');
  p = P.responderPregunta(P.responderPregunta(p, 'cama', true), 'suelo', false);
  p = P.alternarOpcion(p, 'piernas', 'rodilla');
  p = P.confirmarDeclaracionGlobal(P.elegirDuracion(P.alternarRecurso(p, 'silla'), 10));
  assert.deepEqual(P.validarPerfil(p), []);
});

test('"otra indicación" bloquea la generación', () => {
  const p = perfilCompleto((p) => P.alternarOpcion(p, 'indicaciones', 'otra_indicacion'));
  assert.ok(P.validarPerfil(p).some((x) => x.codigo === 'otra_indicacion'));
});

test('"solo sentado/a" no exige responder cama ni suelo', () => {
  let p = perfilCompleto((p) => P.elegirPosicion(p, 'solo_sentado'));
  p = { ...p, cama: null, suelo: null };
  assert.deepEqual(P.validarPerfil(p), []);
});

test('las demás posiciones sí exigen responder cama y suelo', () => {
  const p = { ...perfilCompleto(), cama: null };
  assert.ok(P.validarPerfil(p).some((x) => x.codigo === 'cama'));
});

test('cargarPerfil descarta datos corruptos o de otra versión en vez de repararlos', () => {
  assert.deepEqual(P.cargarPerfil('no es json'), P.perfilVacio());
  assert.deepEqual(P.cargarPerfil({ version: 99 }), P.perfilVacio());
  const malo = perfilCompleto();
  malo.secciones.manos.opciones = ['inventada'];
  assert.deepEqual(P.cargarPerfil(JSON.stringify(malo)), P.perfilVacio());
  const bueno = perfilCompleto();
  assert.deepEqual(P.cargarPerfil(JSON.stringify(bueno)), bueno);
});

test('opciones, recursos y duraciones desconocidos lanzan error', () => {
  assert.throws(() => P.alternarOpcion(P.perfilVacio(), 'manos', 'volar'));
  assert.throws(() => P.alternarRecurso(P.perfilVacio(), 'piscina'));
  assert.throws(() => P.elegirDuracion(P.perfilVacio(), 45));
});
