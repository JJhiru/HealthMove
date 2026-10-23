// Contratos del perfil: tipos y valores estrictos. Un perfil inválido nunca produce una rutina.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { SECCIONES } from '../public/js/opciones.js';
import * as P from '../public/js/perfil.js';
import { generarRutina, crearAleatorio } from '../public/js/motor.js';
import { catalogoReal, perfilCompleto } from './ayudas.mjs';

const generar = (p) => generarRutina(catalogoReal, p, { permitirBorrador: true });
const codigos = (p) => P.validarPerfil(p).map((x) => x.codigo);

test('regresión: el perfil completo de los tests sigue siendo válido y genera rutina', () => {
  assert.deepEqual(P.validarPerfil(perfilCompleto()), []);
  assert.equal(generar(perfilCompleto()).ok, true);
});

const invalidos = {
  'aviso aceptado como texto': [(p) => ({ ...p, avisoAceptado: 'true' }), 'aviso'],
  'aviso aceptado como número': [(p) => ({ ...p, avisoAceptado: 1 }), 'aviso'],
  'posición desconocida': [(p) => ({ ...p, posicion: 'volando' }), 'posicion'],
  'cama como texto': [(p) => ({ ...p, cama: 'no' }), 'cama'],
  'cama sin responder (undefined)': [(p) => { const q = { ...p }; delete q.cama; return q; }, 'cama'],
  'suelo como número': [(p) => ({ ...p, suelo: 0 }), 'suelo'],
  'declaración global como texto': [(p) => ({ ...p, declaracionGlobal: 'sí' }), 'declaracion'],
  'recurso desconocido': [(p) => ({ ...p, recursos: ['silla', 'trampolin'] }), 'recursos'],
  'recursos que no son lista': [(p) => ({ ...p, recursos: 'silla' }), 'recursos'],
  'duración no permitida': [(p) => ({ ...p, duracionMin: 7 }), 'duracion'],
  'duración como texto': [(p) => ({ ...p, duracionMin: '15' }), 'duracion'],
  'sección ausente': [(p) => { const s = { ...p.secciones }; delete s.manos; return { ...p, secciones: s }; }, 'seccion:manos'],
  'opción desconocida en una sección': [(p) => ({ ...p, secciones: { ...p.secciones, manos: { estado: 'con_selecciones', opciones: ['volar'] } } }), 'seccion:manos'],
  'estado de sección desconocido': [(p) => ({ ...p, secciones: { ...p.secciones, manos: { estado: 'quizas', opciones: [] } } }), 'seccion:manos'],
  '"con selecciones" sin opciones': [(p) => ({ ...p, secciones: { ...p.secciones, manos: { estado: 'con_selecciones', opciones: [] } } }), 'seccion:manos'],
  '"sin dificultades" con opciones': [(p) => ({ ...p, secciones: { ...p.secciones, manos: { estado: 'sin_dificultades', opciones: ['cerrar_mano'] } } }), 'seccion:manos'],
};

for (const [caso, [mutar, codigo]] of Object.entries(invalidos)) {
  test(`perfil inválido: ${caso}`, () => {
    const p = mutar(perfilCompleto());
    assert.ok(codigos(p).includes(codigo), `esperaba el problema "${codigo}", hay ${codigos(p)}`);
    const res = generar(p);
    assert.equal(res.ok, false);
    assert.equal(res.motivo, 'perfil_incompleto');
  });
}

test('un perfil que no es un objeto no genera rutina', () => {
  for (const p of [null, [], 'perfil']) {
    assert.deepEqual(codigos(p), ['perfil']);
    assert.equal(generar(p).motivo, 'perfil_incompleto');
  }
});

test('una declaración global que no es true estricto no cubre las secciones sin revisar', () => {
  let p = P.aceptarAviso(P.perfilVacio());
  p = P.elegirDuracion(P.elegirPosicion(p, 'solo_sentado'), 10);
  p = { ...p, recursos: ['silla'], declaracionGlobal: 'sí' };
  assert.equal(P.estadoSeccion(p, 'brazos'), 'no_revisada');
  assert.ok(codigos(p).includes('seccion:brazos'));
  assert.equal(P.estadoSeccion({ ...p, declaracionGlobal: true }, 'brazos'), 'cubierta_por_declaracion');
});

test('"solo sentado/a" no exige cama ni suelo, pero sí valida el resto', () => {
  const p = perfilCompleto((x) => P.elegirPosicion({ ...x, cama: null, suelo: null }, 'solo_sentado'));
  assert.deepEqual(P.validarPerfil(p), []);
  assert.ok(codigos({ ...p, duracionMin: 7 }).includes('duracion'));
});

test('PROPIEDAD: si el perfil tiene algún problema, nunca hay rutina (500 perfiles mutados)', () => {
  const azar = crearAleatorio(77);
  const elegir = (lista) => lista[Math.floor(azar() * lista.length)];
  const valores = [undefined, null, true, false, 0, 1, 7, 15, '', 'sí', 'true', 'volando', [], {}, ['silla'], ['trampolin']];
  const campos = ['avisoAceptado', 'posicion', 'cama', 'suelo', 'declaracionGlobal', 'recursos', 'duracionMin'];
  let conProblemas = 0;
  for (let i = 0; i < 500; i++) {
    const p = { ...perfilCompleto() };
    for (let k = 0; k < 1 + Math.floor(azar() * 3); k++) p[elegir(campos)] = elegir(valores);
    if (azar() < 0.3) p.secciones = { ...p.secciones, [elegir(SECCIONES).id]: elegir([{ estado: 'quizas', opciones: [] }, { estado: 'sin_dificultades', opciones: [] }, undefined]) };
    const problemas = P.validarPerfil(p);
    const res = generar(p);
    if (problemas.length) {
      conProblemas++;
      assert.equal(res.ok, false, `caso ${i}`);
      assert.equal(res.motivo, 'perfil_incompleto', `caso ${i}`);
    }
  }
  assert.ok(conProblemas > 300, `solo ${conProblemas} perfiles con problemas: la prueba no es significativa`);
});

// --- Perfil guardado que no se puede cargar: diagnóstico y copia del original --------

test('diagnosticarPerfil dice por qué no se carga un perfil, sin borrar ni reparar nada', () => {
  const bueno = perfilCompleto();
  assert.deepEqual(P.diagnosticarPerfil(JSON.stringify(bueno)), { perfil: bueno, problema: null });
  assert.deepEqual(P.diagnosticarPerfil(null), { perfil: P.perfilVacio(), problema: null });
  assert.equal(P.diagnosticarPerfil('no es json').problema, 'ilegible');
  assert.equal(P.diagnosticarPerfil('"texto"').problema, 'ilegible');
  assert.equal(P.diagnosticarPerfil('[]').problema, 'ilegible');
  assert.equal(P.diagnosticarPerfil(JSON.stringify({ ...bueno, version: 99 })).problema, 'version');
  const malo = perfilCompleto(); malo.secciones.manos.opciones = ['inventada'];
  const d = P.diagnosticarPerfil(JSON.stringify(malo));
  assert.equal(d.problema, 'estructura');
  assert.deepEqual(d.perfil, P.perfilVacio()); // no se rescatan campos sueltos: eso sería una recuperación sin decidir
  // cargarPerfil conserva su comportamiento
  assert.deepEqual(P.cargarPerfil(JSON.stringify(malo)), P.perfilVacio());
});

test('anadirCopiaPerfil guarda el texto exacto, no duplica y nunca quita copias', () => {
  const a = P.anadirCopiaPerfil(null, '{"version":99}', 'version', '2026-10-17T10:00:00.000Z');
  assert.deepEqual(a, [{ fecha: '2026-10-17T10:00:00.000Z', problema: 'version', texto: '{"version":99}' }]);
  assert.equal(P.anadirCopiaPerfil(a, '{"version":99}', 'version', 'otra fecha'), a); // misma copia: sin cambios
  const b = P.anadirCopiaPerfil(a, 'no es json', 'ilegible', '2026-10-17T11:00:00.000Z');
  assert.equal(b.length, 2);
  assert.deepEqual(b[0], a[0]);
  assert.equal(b[1].texto, 'no es json');
});
