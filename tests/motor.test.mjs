import { test } from 'node:test';
import assert from 'node:assert/strict';
import { SECCIONES, POSICION, RECURSOS, DURACIONES } from '../public/js/opciones.js';
import * as P from '../public/js/perfil.js';
import { calcularRestricciones, generarRutina, crearAleatorio, MINIMOS, clavePosicion, calcularFamilias } from '../public/js/motor.js';
import { catalogoReal, perfilCompleto, ejercicioFalso, catalogoFalso } from './ayudas.mjs';

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
  // Con todo el catálogo en borrador no debe haber rutina.
  const todoBorrador = structuredClone(catalogoReal);
  for (const e of todoBorrador.ejercicios) e.validacion = { ...e.validacion, estado: 'borrador' };
  const res = generarRutina(todoBorrador, perfilCompleto());
  assert.equal(res.ok, false);
  assert.equal(res.motivo, 'catalogo_insuficiente');
  assert.equal(res.explicacion.sinRevisar, catalogoReal.ejercicios.length);
  // Con el catálogo real (aprobados y borradores mezclados), la rutina solo usa aprobados.
  const estado = new Map(catalogoReal.ejercicios.map((e) => [e.id, e.validacion.estado]));
  let generadas = 0;
  for (let semilla = 1; semilla <= 20; semilla++) {
    const real = generarRutina(catalogoReal, perfilCompleto(), { semilla });
    if (!real.ok) continue;
    generadas++;
    assert.equal(real.rutina.usaBorrador, false);
    for (const b of real.rutina.bloques) assert.notEqual(estado.get(b.ejercicioId), 'borrador', `semilla ${semilla}: ${b.ejercicioId}`);
  }
  assert.ok(generadas > 0, 'con los aprobados del catálogo real se genera alguna rutina');
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
  const catalogo = catalogoFalso([
    ejercicioFalso('calentar', { fases: ['calentamiento'] }),
    ejercicioFalso('calma', { fases: ['calma'] }),
    ejercicioFalso('fuerza-1'),
    ejercicioFalso('fuerza-agarre-1', { si: ['agarre'] }),
    ejercicioFalso('fuerza-agarre-2', { si: ['agarre'] }),
  ]);
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
    const res = generarRutina(catalogoFalso(ej), perfilCompleto((p) => P.elegirDuracion(p, 10)), { semilla });
    assert.equal(res.ok, true);
    const ids = new Set(res.rutina.bloques.map((b) => b.ejercicioId));
    assert.ok(!(ids.has('base') && ids.has('variante')), `semilla ${semilla}`);
  }
});

// Cadenas de variante_de (DS-38, C-1): A es variante de B y B de C. Ningún par de la cadena puede coincidir,
// tampoco A con su original directo B ni el primero con el último.
for (const largo of [3, 4]) {
  test(`cadena de ${largo} ejercicios: nunca coinciden dos de la misma cadena`, () => {
    const cadena = Array.from({ length: largo }, (_, i) => `cadena-${i}`);
    const ej = [
      ejercicioFalso('c', { fases: ['calentamiento'] }), ejercicioFalso('k', { fases: ['calma'] }),
      ...cadena.map((id, i) => ejercicioFalso(id, { variante_de: cadena[i + 1] ?? null })),
      ejercicioFalso('otro-1'), ejercicioFalso('otro-2'),
    ];
    const vistos = new Set();
    for (let semilla = 1; semilla <= 60; semilla++) {
      const res = generarRutina(catalogoFalso(ej), perfilCompleto((p) => P.elegirDuracion(p, 10)), { semilla });
      assert.equal(res.ok, true);
      const deLaCadena = new Set(res.rutina.bloques.map((b) => b.ejercicioId).filter((id) => cadena.includes(id)));
      assert.equal(deLaCadena.size, 1, `semilla ${semilla}: ${[...deLaCadena]}`);
      deLaCadena.forEach((id) => vistos.add(id));
    }
    assert.deepEqual([...vistos].sort(), cadena, 'cada miembro de la cadena sigue pudiendo salir');
  });
}

test('ejercicios de familias distintas sí coinciden en la misma rutina', () => {
  // Tres familias en la parte principal, que necesita tres ejercicios: cada rutina lleva uno de cada una.
  const ej = [
    ejercicioFalso('c', { fases: ['calentamiento'] }), ejercicioFalso('k', { fases: ['calma'] }),
    ejercicioFalso('x-base'), ejercicioFalso('x-variante', { variante_de: 'x-base' }),
    ejercicioFalso('y-base'), ejercicioFalso('y-variante', { variante_de: 'y-base' }), ejercicioFalso('y-variante-2', { variante_de: 'y-variante' }),
    ejercicioFalso('z'),
  ];
  const familia = (id) => id.split('-')[0];
  for (let semilla = 1; semilla <= 30; semilla++) {
    const res = generarRutina(catalogoFalso(ej), perfilCompleto((p) => P.elegirDuracion(p, 10)), { semilla });
    assert.equal(res.ok, true);
    const principal = [...new Set(res.rutina.bloques.filter((b) => b.fase === 'principal').map((b) => b.ejercicioId))];
    assert.deepEqual(principal.map(familia).sort(), ['x', 'y', 'z'], `semilla ${semilla}: ${principal}`);
  }
});

test('un ciclo de variante_de no bloquea el motor y sus miembros cuentan como una sola familia', () => {
  // El validador hoy no rechaza ciclos (DS-33); el catálogo real no tiene ninguno. 'ciclo-c' entra en el ciclo por una cola.
  const ej = [
    ejercicioFalso('c', { fases: ['calentamiento'] }), ejercicioFalso('k', { fases: ['calma'] }),
    ejercicioFalso('ciclo-a', { variante_de: 'ciclo-b' }), ejercicioFalso('ciclo-b', { variante_de: 'ciclo-a' }),
    ejercicioFalso('ciclo-c', { variante_de: 'ciclo-a' }),
    ejercicioFalso('otro-1'), ejercicioFalso('otro-2'),
  ];
  const fam = calcularFamilias(ej);
  assert.equal(new Set(['ciclo-a', 'ciclo-b', 'ciclo-c'].map((id) => fam.get(id))).size, 1);
  for (let semilla = 1; semilla <= 30; semilla++) {
    const res = generarRutina(catalogoFalso(ej), perfilCompleto((p) => P.elegirDuracion(p, 10)), { semilla });
    assert.equal(res.ok, true);
    const delCiclo = new Set(res.rutina.bloques.map((b) => b.ejercicioId).filter((id) => id.startsWith('ciclo-')));
    assert.equal(delCiclo.size, 1, `semilla ${semilla}: ${[...delCiclo]}`);
  }
});

test('cadena con el eslabón central inválido: sus extremos siguen siendo una familia', () => {
  // A → B → C (A es variante de B y B de C). B es inválido (una exigencia sin revisar) y el motor lo descarta,
  // pero las familias se calculan con el catálogo completo: A y C siguen siendo de la misma familia.
  const invalido = (e) => { e.exigencias.agarre = null; return e; };
  const base = [
    ejercicioFalso('c', { fases: ['calentamiento'] }), ejercicioFalso('k', { fases: ['calma'] }),
    ejercicioFalso('cadena-a', { variante_de: 'cadena-b' }),
    invalido(ejercicioFalso('cadena-b', { variante_de: 'cadena-c' })),
    ejercicioFalso('cadena-c'),
    ejercicioFalso('otro-1'),
  ];
  const perfil = perfilCompleto((p) => P.elegirDuracion(p, 10));

  // Determinista: la parte principal necesita 3 ejercicios y solo hay A, C y otro-1, es decir, dos familias.
  // Si las familias se calcularan después de descartar B, A y C serían familias distintas y cualquier semilla los juntaría.
  for (let semilla = 1; semilla <= 10; semilla++) {
    const res = generarRutina(catalogoFalso(base), perfil, { semilla });
    assert.equal(res.explicacion.invalidos, 1, 'B debe quedar descartado por inválido');
    assert.equal(res.ok, false, `semilla ${semilla}: A y C no pueden completar juntos la parte principal`);
    assert.equal(res.motivo, 'catalogo_insuficiente');
    assert.deepEqual(res.faltan, { principal: 1 });
  }

  // Con otro ejercicio más ya hay rutina: B nunca sale, A y C no coinciden y los dos siguen pudiendo salir.
  const vistos = new Set();
  for (let semilla = 1; semilla <= 60; semilla++) {
    const res = generarRutina(catalogoFalso([...base, ejercicioFalso('otro-2')]), perfil, { semilla });
    assert.equal(res.ok, true);
    const ids = new Set(res.rutina.bloques.map((b) => b.ejercicioId));
    assert.ok(!ids.has('cadena-b'), `semilla ${semilla}: B es inválido`);
    assert.ok(!(ids.has('cadena-a') && ids.has('cadena-c')), `semilla ${semilla}: A y C juntos`);
    for (const id of ['cadena-a', 'cadena-c']) if (ids.has(id)) vistos.add(id);
  }
  assert.deepEqual([...vistos].sort(), ['cadena-a', 'cadena-c']);
});

test('catálogo real: las cadenas de variantes comparten familia y no coinciden en una rutina', () => {
  const fam = calcularFamilias(catalogoReal.ejercicios);
  const cadenas = [
    ['marcha-apertura-brazos-sentado', 'marcha-sentado-manos-cadera', 'marcha-sentado-sujetandose'],
    ['abdomen-boca-abajo', 'abdomen-profundo-tumbado', 'abdomen-sentado'],
    ['flexor-cadera-tumbado', 'abrazar-rodilla-tumbado', 'rodilla-al-pecho-tumbado'],
  ];
  for (const c of cadenas) assert.deepEqual(c.map((id) => fam.get(id)), [c[2], c[2], c[2]], c.join(' → '));
  for (const duracion of [10, 15, 20]) {
    for (let semilla = 1; semilla <= 150; semilla++) {
      const res = generarRutina(catalogoReal, perfilCompleto((p) => P.elegirDuracion(p, duracion)), { semilla, permitirBorrador: true });
      assert.equal(res.ok, true);
      const porFamilia = new Map();
      for (const id of new Set(res.rutina.bloques.map((b) => b.ejercicioId))) porFamilia.set(fam.get(id), [...(porFamilia.get(fam.get(id)) || []), id]);
      for (const ids of porFamilia.values()) assert.equal(ids.length, 1, `${duracion} min, semilla ${semilla}: ${ids}`);
    }
  }
});

test('un ejercicio con alguna exigencia sin revisar no se usa', () => {
  const roto = ejercicioFalso('roto');
  delete roto.exigencias.agarre;
  roto.exigencias.agarre = null;
  const ej = [ejercicioFalso('c', { fases: ['calentamiento'] }), ejercicioFalso('k', { fases: ['calma'] }), ejercicioFalso('a'), ejercicioFalso('b'), roto];
  const res = generarRutina(catalogoFalso(ej), perfilCompleto((p) => P.elegirDuracion(p, 10)));
  assert.equal(res.ok, false);
  // Falla porque el ejercicio roto queda fuera (faltan principales), no porque se rechace el catálogo entero.
  assert.equal(res.motivo, 'catalogo_insuficiente');
  assert.equal(res.explicacion.invalidos, 1);
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

test('una rutina con ejercicios sin revisar deja de valer fuera del modo desarrollo', async () => {
  const { resultadoVigente } = await import('../public/js/motor.js');
  const res = generarRutina(catalogoReal, perfilCompleto(), { permitirBorrador: true });
  assert.equal(res.ok, true);
  assert.equal(res.rutina.usaBorrador, true);
  const guardado = { res, semilla: 1, fecha: '2026-10-14' };
  assert.equal(resultadoVigente(guardado, { permitirBorrador: true }), true);
  assert.equal(resultadoVigente(guardado, { permitirBorrador: false }), false);
  // Un aviso de «no hay rutina» no contiene ejercicios: sigue siendo válido.
  assert.equal(resultadoVigente({ res: { ok: false, motivo: 'catalogo_insuficiente' } }), true);
  assert.equal(resultadoVigente(null), false);
});
