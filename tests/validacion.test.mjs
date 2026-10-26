// CS50 AI citation: written with the help of Claude (Anthropic), an AI assistant. Requirements, design decisions and review: JJhiru.
// Contratos de validación del catálogo y de cada ejercicio (public/js/validacion.js),
// y su efecto en el motor: un dato inválido nunca entra en una rutina.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { SECCIONES, POSICION, RECURSOS, DURACIONES } from '../public/js/opciones.js';
import * as P from '../public/js/perfil.js';
import { generarRutina, motivosIncompatibilidad, calcularRestricciones, esCompatible, crearAleatorio } from '../public/js/motor.js';
import { validarCatalogo, problemasEjercicio, estadoUtilizable, EXIGENCIAS } from '../public/js/validacion.js';
import { catalogoReal, perfilCompleto, ejercicioFalso, catalogoFalso } from './ayudas.mjs';

const clonar = (x) => JSON.parse(JSON.stringify(x));
const sinRestricciones = calcularRestricciones(perfilCompleto());
// Catálogo pequeño con el que se genera rutina: 1 calentamiento, 3 principales y 1 calma válidos.
const base = () => [
  ejercicioFalso('c', { fases: ['calentamiento'] }), ejercicioFalso('k', { fases: ['calma'] }),
  ejercicioFalso('a'), ejercicioFalso('b'), ejercicioFalso('d'),
];

test('el catálogo real es válido y no tiene ejercicios inválidos', () => {
  const v = validarCatalogo(catalogoReal);
  assert.deepEqual(v.errores, []);
  assert.equal(v.porEjercicio.size, 0);
});

test('scripts/validar-catalogo.mjs usa las mismas reglas y acepta el catálogo real', () => {
  const script = fileURLToPath(new URL('../scripts/validar-catalogo.mjs', import.meta.url));
  const salida = execFileSync(process.execPath, [script], { encoding: 'utf8' });
  assert.match(salida, /Sin errores de estructura/);
});

// --- Errores que invalidan el catálogo completo ----------------------------

const catalogosRotos = {
  'no es un objeto': () => [],
  'sin la lista de ejercicios': () => { const c = clonar(catalogoReal); delete c.ejercicios; return c; },
  'falta una exigencia global': () => { const c = clonar(catalogoReal); c.exigencias = c.exigencias.slice(1); return c; },
  'sobra una exigencia global': () => { const c = clonar(catalogoReal); c.exigencias.push('saltar'); return c; },
  'exigencia global renombrada': () => { const c = clonar(catalogoReal); c.exigencias[0] = 'equilibrio'; return c; },
  'exigencia global repetida': () => { const c = clonar(catalogoReal); c.exigencias[1] = c.exigencias[0]; return c; },
  'falta un estado de validación': () => { const c = clonar(catalogoReal); c.estados_validacion = ['borrador', 'basado_en_fuente_publica']; return c; },
  'sin estados de validación': () => { const c = clonar(catalogoReal); delete c.estados_validacion; return c; },
  'posiciones distintas': () => { const c = clonar(catalogoReal); c.posiciones = ['sentado', 'de_pie']; return c; },
  'fases distintas': () => { const c = clonar(catalogoReal); c.fases.push('siesta'); return c; },
  'recursos distintos': () => { const c = clonar(catalogoReal); c.recursos.trampolin = 'Trampolín'; return c; },
  'ids repetidos': () => { const c = clonar(catalogoReal); c.ejercicios.push(clonar(c.ejercicios[0])); return c; },
};

for (const [caso, crear] of Object.entries(catalogosRotos)) {
  test(`catálogo rechazado entero: ${caso}`, () => {
    const cat = crear();
    assert.equal(validarCatalogo(cat).valido, false);
    const res = generarRutina(cat, perfilCompleto(), { permitirBorrador: true });
    assert.equal(res.ok, false);
    assert.equal(res.motivo, 'catalogo_invalido');
  });
}

// --- Problemas que bloquean un solo ejercicio ------------------------------

const mutaciones = {
  'falta una exigencia': (e) => { delete e.exigencias.agarre; },
  'exigencia desconocida en true': (e) => { e.exigencias['agarre '] = true; },
  'exigencia desconocida en false': (e) => { e.exigencias.saltar = false; },
  'exigencia con texto en vez de booleano': (e) => { e.exigencias.agarre = 'true'; },
  'exigencia null': (e) => { e.exigencias.agarre = null; },
  'sin exigencias': (e) => { delete e.exigencias; },
  'exigencias como lista': (e) => { e.exigencias = []; },
  'estado desconocido': (e) => { e.validacion.estado = 'pendiente'; },
  'sin validacion': (e) => { delete e.validacion; },
  'aprobado sin revisor': (e) => { e.validacion.estado = 'basado_en_fuente_publica'; e.validacion.revisado_por = null; },
  'aprobado con revisor vacío': (e) => { e.validacion.estado = 'revisado_por_profesional'; e.validacion.revisado_por = '  '; },
  // Especificación §7.6: salir de borrador exige rellenar revisado_por y fecha_revision (V7, DS-07).
  'aprobado con fecha_revision null': (e) => { e.validacion.estado = 'basado_en_fuente_publica'; e.validacion.fecha_revision = null; },
  'aprobado sin el campo fecha_revision': (e) => { e.validacion.estado = 'basado_en_fuente_publica'; delete e.validacion.fecha_revision; },
  'aprobado con fecha_revision vacía': (e) => { e.validacion.estado = 'basado_en_fuente_publica'; e.validacion.fecha_revision = ''; },
  'aprobado con fecha_revision en blanco': (e) => { e.validacion.estado = 'basado_en_fuente_publica'; e.validacion.fecha_revision = '   '; },
  'revisado por profesional sin fecha_revision': (e) => { e.validacion.estado = 'revisado_por_profesional'; e.validacion.fecha_revision = null; },
  'aprobado con fecha_revision imposible': (e) => { e.validacion.estado = 'basado_en_fuente_publica'; e.validacion.fecha_revision = '2026-02-30'; },
  'aprobado con fecha_revision como marca de tiempo': (e) => { e.validacion.estado = 'revisado_por_profesional'; e.validacion.fecha_revision = '2026-10-17T10:00:00Z'; },
  'duración cero': (e) => { e.duracion_estimada_seg = 0; },
  'duración negativa': (e) => { e.duracion_estimada_seg = -30; },
  'duración en texto': (e) => { e.duracion_estimada_seg = '60'; },
  'duración decimal': (e) => { e.duracion_estimada_seg = 1.5; },
  'sin duración': (e) => { delete e.duracion_estimada_seg; },
  'posición desconocida': (e) => { e.posiciones = ['volando']; },
  'sin posiciones': (e) => { e.posiciones = []; },
  'fase desconocida': (e) => { e.fases = ['siesta']; },
  'recurso desconocido': (e) => { e.recursos = ['trampolin']; },
  'impacto marcado': (e) => { e.exigencias.impacto = true; },
  'sin instrucciones': (e) => { e.instrucciones = []; },
  'fuente sin https': (e) => { e.fuente.url = 'http://example.org'; },
  'una_pierna sin estar de pie': (e) => { e.posiciones = ['sentado']; e.exigencias.una_pierna = true; },
};

for (const [caso, mutar] of Object.entries(mutaciones)) {
  test(`ejercicio bloqueado: ${caso}`, () => {
    const roto = ejercicioFalso('roto');
    mutar(roto);
    assert.ok(problemasEjercicio(roto).length > 0, 'debe tener problemas');
    // Ni compatible en modo normal ni en modo desarrollo: nunca se interpreta como "no la exige".
    for (const permitirBorrador of [false, true]) {
      assert.equal(esCompatible(roto, sinRestricciones, { permitirBorrador }), false);
      assert.equal(motivosIncompatibilidad(roto, sinRestricciones, { permitirBorrador })[0].tipo, 'invalido');
    }
    // El catálogo sigue siendo válido; solo ese ejercicio queda fuera de cualquier rutina.
    const cat = catalogoFalso([...base(), roto]);
    assert.equal(validarCatalogo(cat).valido, true);
    for (let semilla = 1; semilla <= 20; semilla++) {
      const res = generarRutina(cat, perfilCompleto((p) => P.elegirDuracion(p, 10)), { semilla, permitirBorrador: true });
      assert.equal(res.ok, true, `semilla ${semilla}: ${res.motivo}`);
      assert.ok(!res.rutina.bloques.some((b) => b.ejercicioId === 'roto'), `semilla ${semilla}`);
      assert.ok(Number.isFinite(res.rutina.duracionEstimadaSeg));
      assert.equal(res.explicacion.invalidos, 1);
    }
  });
}

test('metadatos de revisión: solo se exigen fuera de borrador, y cada falta se nombra por separado', () => {
  const sinRevision = (estado, revisado_por, fecha_revision) => {
    const e = ejercicioFalso('m', { estado });
    Object.assign(e.validacion, { revisado_por, fecha_revision });
    return problemasEjercicio(e);
  };
  // En borrador, los metadatos pueden faltar o estar a medias: el contrato solo los pide para salir de él.
  assert.deepEqual(sinRevision('borrador', null, null), []);
  assert.deepEqual(sinRevision('borrador', null, '2026-10-17'), []);
  assert.deepEqual(sinRevision('borrador', 'Autor', null), []);
  // Fuera de borrador, con los dos campos, no hay problema.
  for (const estado of ['basado_en_fuente_publica', 'revisado_por_profesional']) {
    assert.deepEqual(sinRevision(estado, 'Autor', '2026-10-17'), [], estado);
  }
  // Cada campo que falta da su propio problema; uno no tapa al otro.
  const faltaRevisor = 'un ejercicio fuera de borrador necesita "revisado_por"';
  const faltaFecha = 'un ejercicio fuera de borrador necesita "fecha_revision"';
  assert.deepEqual(sinRevision('basado_en_fuente_publica', 'Autor', null), [faltaFecha]);
  assert.deepEqual(sinRevision('basado_en_fuente_publica', null, '2026-10-17'), [faltaRevisor]);
  assert.deepEqual(sinRevision('basado_en_fuente_publica', null, null), [faltaRevisor, faltaFecha]);
});

test('fecha_revision fuera de borrador: formato exacto AAAA-MM-DD y fecha real del calendario', () => {
  const conFecha = (fecha_revision, estado = 'basado_en_fuente_publica') => {
    const e = ejercicioFalso('f', { estado });
    Object.assign(e.validacion, { revisado_por: 'Autor', fecha_revision });
    return problemasEjercicio(e);
  };
  const faltaFecha = 'un ejercicio fuera de borrador necesita "fecha_revision"';
  const fechaNoValida = '"fecha_revision" debe ser una fecha real con formato AAAA-MM-DD';
  const validas = [
    '2026-10-17', '2026-01-01', '2026-12-31', '2026-01-31', '2026-04-30',
    '2024-02-29', '2000-02-29', '1996-02-29', '2023-02-28', '0024-02-29',
  ];
  for (const estado of ['basado_en_fuente_publica', 'revisado_por_profesional']) {
    for (const f of validas) assert.deepEqual(conFecha(f, estado), [], `${estado}: ${f}`);
  }
  const imposibles = [
    '2023-02-29', '1900-02-29', '2100-02-29', '2026-02-30', '2026-04-31', '2026-06-31',
    '2026-09-31', '2026-11-31', '2026-01-32', '2026-00-10', '2026-13-01', '2026-10-00', '0000-00-00',
  ];
  const otrosFormatos = [
    '17/10/2026', '2026/10/17', '17-10-2026', '2026-1-7', '2026-10-7', '26-10-17', '20261017',
    '+2026-10-17', '02026-10-17', '2026-10-17-', '２０２６-10-17',
    '2026-10-17T10:00:00Z', '2026-10-17T10:00:00', '2026-10-17 10:00', '2026-10-17Z',
    ' 2026-10-17', '2026-10-17 ', '2026-10-17\n', 'hoy', 'fecha',
  ];
  for (const f of [...imposibles, ...otrosFormatos]) {
    assert.deepEqual(conFecha(f), [fechaNoValida], JSON.stringify(f));
  }
  // Vacía, en blanco o sin texto: se trata como fecha que falta.
  for (const f of [undefined, null, '', '   ', 20261017, 0, true, ['2026-10-17'], { fecha: '2026-10-17' }, new Date('2026-10-17')]) {
    assert.deepEqual(conFecha(f), [faltaFecha], String(f));
  }
  // En borrador no se comprueba: ni la falta ni el formato bloquean el ejercicio.
  for (const f of [null, '', '2026-02-30', '17/10/2026', '2026-10-17T10:00:00Z', 20261017]) {
    assert.deepEqual(conFecha(f, 'borrador'), [], `borrador: ${String(f)}`);
  }
  // Una fecha mal formada fuera de borrador no tapa la falta de revisor: cada problema aparece por separado.
  const sinRevisor = ejercicioFalso('g');
  Object.assign(sinRevisor.validacion, { revisado_por: null, fecha_revision: '2026-02-30' });
  assert.deepEqual(problemasEjercicio(sinRevisor), ['un ejercicio fuera de borrador necesita "revisado_por"', fechaNoValida]);
});

test('un aprobado sin fecha_revision no afecta a los demás ejercicios ni al catálogo', () => {
  const sinFecha = ejercicioFalso('sin-fecha'); sinFecha.validacion.fecha_revision = null;
  const v = validarCatalogo(catalogoFalso([...base(), sinFecha]));
  assert.equal(v.valido, true);
  assert.deepEqual([...v.porEjercicio.keys()], ['sin-fecha']);
  // El catálogo real (220 ejercicios en borrador, sin metadatos de revisión) sigue sin ningún ejercicio bloqueado.
  assert.equal(validarCatalogo(catalogoReal).porEjercicio.size, 0);
});

test('variante_de inexistente o a sí mismo: el ejercicio queda bloqueado', () => {
  for (const destino of ['no-existe', 'roto']) {
    const roto = ejercicioFalso('roto', { variante_de: destino });
    const v = validarCatalogo(catalogoFalso([...base(), roto]));
    assert.equal(v.valido, true);
    assert.ok(v.porEjercicio.has('roto'), destino);
    const res = generarRutina(catalogoFalso([...base(), roto]), perfilCompleto((p) => P.elegirDuracion(p, 10)));
    assert.ok(!res.rutina.bloques.some((b) => b.ejercicioId === 'roto'));
  }
});

test('estados: solo los aprobados se usan fuera del modo desarrollo; un estado desconocido, nunca', () => {
  const aprobado = ejercicioFalso('a');
  const borrador = ejercicioFalso('b', { estado: 'borrador' });
  const raro = ejercicioFalso('r'); raro.validacion.estado = 'pendiente';
  assert.equal(estadoUtilizable(aprobado), true);
  assert.equal(estadoUtilizable(borrador), false);
  assert.equal(estadoUtilizable(borrador, { permitirBorrador: true }), true);
  assert.equal(estadoUtilizable(raro), false);
  assert.equal(estadoUtilizable(raro, { permitirBorrador: true }), false);
  assert.equal(estadoUtilizable(null), false);
  assert.deepEqual(motivosIncompatibilidad(borrador, sinRestricciones), [{ tipo: 'sin_revisar' }]);
});

test('las 16 exigencias del código coinciden con las del catálogo real', () => {
  assert.deepEqual([...EXIGENCIAS].sort(), [...catalogoReal.exigencias].sort());
});

// --- Mutaciones sobre el catálogo real ---------------------------------------

test('PROPIEDAD: un ejercicio real mutado nunca entra en una rutina (300 casos)', () => {
  const azar = crearAleatorio(4242);
  const elegir = (lista) => lista[Math.floor(azar() * lista.length)];
  const nombres = Object.keys(mutaciones);
  let generadas = 0;
  for (let i = 0; i < 300; i++) {
    const cat = clonar(catalogoReal);
    const mutados = new Set();
    while (mutados.size < 15) {
      const e = elegir(cat.ejercicios);
      if (mutados.has(e.id)) continue; // una sola mutación por ejercicio
      mutados.add(e.id);
      const nombre = elegir(nombres);
      mutaciones[nombre](e);
      // Cada mutación debe dejar el ejercicio inválido por sí sola, sea cual sea su estado previo.
      assert.ok(problemasEjercicio(e).length > 0, `caso ${i}: «${nombre}» no invalidó ${e.id}`);
    }
    let p = perfilCompleto((x) => P.elegirPosicion(x, elegir(POSICION).id));
    p = P.responderPregunta(P.responderPregunta(p, 'cama', azar() < 0.5), 'suelo', azar() < 0.5);
    for (const s of SECCIONES) {
      for (const o of s.opciones) if (!o.bloquea && azar() < 0.15) p = P.alternarOpcion(p, s.id, o.id);
      if (p.secciones[s.id].opciones.length === 0) p = P.marcarSinDificultades(p, s.id);
    }
    for (const r of RECURSOS) if (azar() < 0.3) p = P.alternarRecurso(p, r.id);
    p = P.elegirDuracion(p, elegir(DURACIONES));
    const res = generarRutina(cat, p, { semilla: i, permitirBorrador: true });
    if (!res.ok) continue;
    generadas++;
    for (const b of res.rutina.bloques) assert.ok(!mutados.has(b.ejercicioId), `caso ${i}: ${b.ejercicioId} estaba mutado`);
  }
  assert.ok(generadas > 50, `solo se generaron ${generadas} rutinas`);
});
