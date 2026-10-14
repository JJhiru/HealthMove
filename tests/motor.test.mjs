import { test } from 'node:test';
import assert from 'node:assert/strict';
import { SECCIONES, POSICION, RECURSOS, DURACIONES } from '../public/js/opciones.js';
import * as P from '../public/js/perfil.js';
import { calcularRestricciones, generarRutina, crearAleatorio, MINIMOS, clavePosicion } from '../public/js/motor.js';
import { catalogoReal, perfilCompleto, ejercicioFalso } from './ayudas.mjs';

const porId = new Map(catalogoReal.ejercicios.map((e) => [e.id, e]));

test('cada opción se traduce a las exigencias de la especificación', () => {
  const p = perfilCompleto((p) => P.alternarOpcion(P.alternarOpcion(p, 'manos', 'cerrar_mano'), 'movilidad', 'equilibrio'));
  const r = calcularRestricciones(p);
  assert.deepEqual([...r.exigencias.keys()].sort(), ['agarre', 'equilibrio_sin_apoyo', 'una_pierna']);
  assert.deepEqual(r.exigencias.get('agarre'), ['Me cuesta cerrar la mano o sujetar objetos']);
});

test('"solo sentado/a" deja únicamente la posición sentado', () => {
  const p = perfilCompleto((p) => P.elegirPosicion(p, 'solo_sentado'));
  const r = calcularRestricciones(p);
  assert.deepEqual([...r.posiciones], ['sentado']);
  assert.ok(r.exigencias.has('sentarse_levantarse'));
});

test('responder "No" a cama o suelo excluye esa posición', () => {
  const p = perfilCompleto((p) => P.responderPregunta(P.responderPregunta(p, 'cama', false), 'suelo', false));
  const r = calcularRestricciones(p);
  assert.ok(!r.posiciones.has('tumbado') && !r.posiciones.has('suelo'));
  assert.ok(r.posiciones.has('de_pie') && r.posiciones.has('sentado'));
});

test('sin modo desarrollo, los ejercicios en borrador nunca se usan', () => {
  const res = generarRutina(catalogoReal, perfilCompleto());
  // El catálogo real está entero en borrador: no debe haber rutina.
  assert.equal(res.ok, false);
  assert.equal(res.motivo, 'catalogo_insuficiente');
  assert.equal(res.explicacion.sinRevisar, catalogoReal.ejercicios.length);
});

test('con modo desarrollo se genera una rutina marcada como borrador', () => {
  const res = generarRutina(catalogoReal, perfilCompleto(), { permitirBorrador: true });
  assert.equal(res.ok, true);
  assert.equal(res.rutina.usaBorrador, true);
});

test('PROPIEDAD DE SEGURIDAD: ninguna rutina contiene un ejercicio incompatible (400 perfiles aleatorios)', () => {
  const azar = crearAleatorio(2026);
  const elegir = (lista) => lista[Math.floor(azar() * lista.length)];
  let generadas = 0;
  for (let i = 0; i < 400; i++) {
    let p = perfilCompleto((p) => P.elegirPosicion(p, elegir(POSICION).id));
    p = P.responderPregunta(p, 'cama', azar() < 0.5);
    p = P.responderPregunta(p, 'suelo', azar() < 0.5);
    for (const s of SECCIONES) {
      for (const o of s.opciones) if (!o.bloquea && azar() < 0.2) p = P.alternarOpcion(p, s.id, o.id);
      if (p.secciones[s.id].opciones.length === 0) p = P.marcarSinDificultades(p, s.id);
    }
    for (const r of RECURSOS) if (azar() < 0.4) p = P.alternarRecurso(p, r.id);
    p = P.elegirDuracion(p, elegir(DURACIONES));

    const res = generarRutina(catalogoReal, p, { semilla: i, permitirBorrador: true });
    if (!res.ok) continue;
    generadas++;
    const restr = calcularRestricciones(p);
    for (const b of res.rutina.bloques) {
      const e = porId.get(b.ejercicioId);
      for (const pos of e.posiciones) assert.ok(restr.posiciones.has(pos), `${e.id} usa la posición ${pos}`);
      for (const [k, v] of Object.entries(e.exigencias)) assert.ok(!(v && restr.exigencias.has(k)), `${e.id} exige ${k}`);
      for (const r of e.recursos) assert.ok(p.recursos.includes(r), `${e.id} necesita ${r}`);
      assert.ok(e.fases.includes(b.fase), `${e.id} no pertenece a la fase ${b.fase}`);
    }
  }
  assert.ok(generadas > 50, `solo se generaron ${generadas} rutinas: la prueba no es significativa`);
});

test('si no hay ejercicios suficientes, informa y no relaja ningún filtro', () => {
  const catalogo = {
    exigencias: catalogoReal.exigencias,
    ejercicios: [
      ejercicioFalso('calentar', { fases: ['calentamiento'] }),
      ejercicioFalso('calma', { fases: ['calma'] }),
      ejercicioFalso('fuerza-1'),
      ejercicioFalso('fuerza-agarre-1', { si: ['agarre'] }),
      ejercicioFalso('fuerza-agarre-2', { si: ['agarre'] }),
    ],
  };
  const sinRestriccion = generarRutina(catalogo, perfilCompleto((p) => P.elegirDuracion(p, 10)));
  assert.equal(sinRestriccion.ok, true);

  const conMano = perfilCompleto((p) => P.elegirDuracion(P.alternarOpcion(p, 'manos', 'cerrar_mano'), 10));
  const res = generarRutina(catalogo, conMano);
  assert.equal(res.ok, false);
  assert.equal(res.motivo, 'catalogo_insuficiente');
  assert.deepEqual(res.faltan, { principal: MINIMOS.principal - 1 });
  assert.equal(res.limitantes[0].codigo, 'agarre');
  assert.equal(res.limitantes[0].ejerciciosExtra, 2);
});

test('un ejercicio y su variante nunca aparecen en la misma rutina', () => {
  const ej = [
    ejercicioFalso('c', { fases: ['calentamiento'] }), ejercicioFalso('k', { fases: ['calma'] }),
    ejercicioFalso('base'), ejercicioFalso('variante', { variante_de: 'base' }),
    ejercicioFalso('otro-1'), ejercicioFalso('otro-2'),
  ];
  for (let semilla = 1; semilla <= 30; semilla++) {
    const res = generarRutina({ exigencias: catalogoReal.exigencias, ejercicios: ej }, perfilCompleto((p) => P.elegirDuracion(p, 10)), { semilla });
    assert.equal(res.ok, true);
    const ids = new Set(res.rutina.bloques.map((b) => b.ejercicioId));
    assert.ok(!(ids.has('base') && ids.has('variante')), `semilla ${semilla}`);
  }
});

test('un ejercicio con alguna exigencia sin revisar no se usa', () => {
  const roto = ejercicioFalso('roto');
  delete roto.exigencias.agarre;
  roto.exigencias.agarre = null;
  const ej = [ejercicioFalso('c', { fases: ['calentamiento'] }), ejercicioFalso('k', { fases: ['calma'] }), ejercicioFalso('a'), ejercicioFalso('b'), roto];
  const res = generarRutina({ exigencias: catalogoReal.exigencias, ejercicios: ej }, perfilCompleto((p) => P.elegirDuracion(p, 10)));
  assert.equal(res.ok, false);
});

test('la misma semilla produce la misma rutina', () => {
  const p = perfilCompleto();
  const a = generarRutina(catalogoReal, p, { semilla: 7, permitirBorrador: true });
  const b = generarRutina(catalogoReal, p, { semilla: 7, permitirBorrador: true });
  assert.deepEqual(a.rutina, b.rutina);
});

test('la duración estimada queda entre el 80 % y el 110 % del objetivo', () => {
  for (const min of DURACIONES) {
    const res = generarRutina(catalogoReal, perfilCompleto((p) => P.elegirDuracion(p, min)), { permitirBorrador: true });
    assert.equal(res.ok, true);
    const objetivo = min * 60;
    assert.ok(res.rutina.duracionEstimadaSeg >= objetivo * 0.8 && res.rutina.duracionEstimadaSeg <= objetivo * 1.1,
      `${min} min → ${res.rutina.duracionEstimadaSeg} s`);
  }
});

test('las fases salen en orden: calentamiento, principal, calma', () => {
  const res = generarRutina(catalogoReal, perfilCompleto(), { permitirBorrador: true });
  const orden = res.rutina.bloques.map((b) => b.fase);
  const rango = { calentamiento: 0, principal: 1, calma: 2 };
  for (let i = 1; i < orden.length; i++) assert.ok(rango[orden[i - 1]] <= rango[orden[i]]);
});

test('dentro de cada fase y vuelta, los ejercicios van agrupados por posición (silla, de pie, cama, suelo)', () => {
  for (let semilla = 1; semilla <= 60; semilla++) {
    const res = generarRutina(catalogoReal, perfilCompleto((p) => P.elegirDuracion(p, 20)), { semilla, permitirBorrador: true });
    assert.equal(res.ok, true);
    const grupos = new Map();
    for (const b of res.rutina.bloques) {
      const k = `${b.fase}-${b.ronda}`;
      grupos.set(k, [...(grupos.get(k) || []), clavePosicion(porId.get(b.ejercicioId))]);
    }
    for (const [k, claves] of grupos) {
      for (let i = 1; i < claves.length; i++) assert.ok(claves[i - 1] <= claves[i], `semilla ${semilla}, ${k}: ${claves}`);
    }
  }
});

test('perfil incompleto: no genera y explica qué falta', () => {
  const res = generarRutina(catalogoReal, P.perfilVacio(), { permitirBorrador: true });
  assert.equal(res.ok, false);
  assert.equal(res.motivo, 'perfil_incompleto');
  assert.ok(res.problemas.some((x) => x.codigo === 'aviso'));
});
