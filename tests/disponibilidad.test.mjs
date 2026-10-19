// Herramienta de impacto en la disponibilidad (scripts/disponibilidad.mjs, protocolo apartado 9):
// cuenta con el motor real, aplica los escenarios solo en memoria y nunca escribe datos.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SECCIONES, POSICION } from '../public/js/opciones.js';
import { calcularRestricciones, esCompatible } from '../public/js/motor.js';
import { analizar, aplicarEscenario, medir, perfilesR91, construirPerfil, EntradaInvalida, COMBINACIONES_R91 } from '../scripts/disponibilidad.mjs';
import { ejercicioFalso, catalogoFalso, catalogoReal } from './ayudas.mjs';

const SCRIPT = fileURLToPath(new URL('../scripts/disponibilidad.mjs', import.meta.url));
const CATALOGO = fileURLToPath(new URL('../public/data/catalogo.json', import.meta.url));
const sha = (ruta) => createHash('sha256').update(readFileSync(ruta)).digest('hex');
const temporal = (nombre, datos) => {
  const ruta = join(mkdtempSync(join(tmpdir(), 'hm-disp-')), nombre);
  writeFileSync(ruta, JSON.stringify(datos));
  return ruta;
};

// Dos de pie (uno con ambos_brazos), uno sentado en calma y uno en borrador.
const cat = () => catalogoFalso([
  ejercicioFalso('pie-a', { posiciones: ['de_pie'] }),
  ejercicioFalso('pie-b', { posiciones: ['de_pie'], si: ['ambos_brazos'] }),
  ejercicioFalso('silla', { fases: ['calma'] }),
  ejercicioFalso('borr', { estado: 'borrador' }),
]);

test('R9.1: un perfil por posición, uno por opción y la lista fija de combinaciones (registro, P6)', () => {
  const opciones = SECCIONES.reduce((n, s) => n + s.opciones.length, 0);
  const perfiles = perfilesR91();
  assert.equal(perfiles.length, POSICION.length + opciones + COMBINACIONES_R91.length);
  const combinados = perfiles.filter((p) => p.opciones?.length > 1);
  // «Posición con dos opciones»: de_pie_apoyo + una opción; «solo sentado con tres opciones».
  const dos = perfiles.filter((p) => p.posicion === 'de_pie_apoyo' && p.opciones?.length === 1);
  assert.equal(dos.length, 4);
  assert.equal(combinados.length, 2);
  assert.ok(combinados.every((p) => p.posicion === 'solo_sentado' && p.opciones.length === 3));
  // Todas las combinaciones se pueden construir: posiciones y opciones existen.
  for (const p of perfiles) assert.doesNotThrow(() => construirPerfil(p), p.nombre);
});

test('las cuentas coinciden con el motor, por fase y por posición', () => {
  const c = cat();
  const def = { nombre: 'un brazo', opciones: ['un_brazo'] };
  const m = medir(c, def);
  const restr = calcularRestricciones(construirPerfil(def));
  const esperado = c.ejercicios.filter((e) => esCompatible(e, restr, { permitirBorrador: true })).map((e) => e.id);
  assert.deepEqual(m.ids, esperado);
  assert.deepEqual(m.ids, ['pie-a', 'silla', 'borr']);
  assert.deepEqual(m.porFase, { calentamiento: 0, principal: 2, calma: 1 });
  assert.equal(m.porPosicion.de_pie, 1);
});

test('perfil mal formado: listas que no son listas o ids repetidos se rechazan (conmutar dos veces desmarcaría)', () => {
  for (const def of [{ opciones: 'un_brazo' }, { recursos: 'silla' }, { opciones: ['un_brazo', 'un_brazo'] }, { recursos: ['silla', 'silla'] }]) {
    assert.throws(() => medir(cat(), def), EntradaInvalida, JSON.stringify(def));
  }
});

test('modo auditoría por omisión; --sin-borradores deja fuera los borradores', () => {
  assert.ok(medir(cat(), {}).ids.includes('borr'));
  assert.ok(!medir(cat(), {}, { permitirBorrador: false }).ids.includes('borr'));
});

test('un perfil que la app bloquea se marca, pero se mide', () => {
  const m = medir(cat(), { opciones: ['otra_indicacion'] });
  assert.ok(m.bloqueos.includes('otra_indicacion'));
  assert.equal(m.total, 4);
});

test('escenario: antes y después en memoria, con lo que se pierde y se gana; el catálogo de entrada no cambia', () => {
  const c = cat();
  const copia = JSON.stringify(c);
  const escenario = { cambios: [{ id: 'pie-a', exigencias: { ambos_brazos: true } }, { id: 'pie-b', exigencias: { ambos_brazos: false } }] };
  const [r] = analizar(c, [{ nombre: 'un brazo', opciones: ['un_brazo'] }], { escenario });
  assert.deepEqual(r.pierde, ['pie-a']);
  assert.deepEqual(r.gana, ['pie-b']);
  assert.equal(r.porPosicion.de_pie, 1);
  assert.equal(r.despues.porPosicion.de_pie, 1);
  assert.equal(JSON.stringify(c), copia, 'aplicarEscenario no toca el catálogo recibido');
});

test('escenario inválido: id, exigencia o valor desconocidos se rechazan', () => {
  const casos = [
    { cambios: [{ id: 'no-existe', exigencias: { agarre: true } }] },
    { cambios: [{ id: 'pie-a', exigencias: { saltar: true } }] },
    { cambios: [{ id: 'pie-a', exigencias: { agarre: 'true' } }] },
    { cambios: [{ id: 'pie-a' }] },
    {},
  ];
  for (const e of casos) assert.throws(() => aplicarEscenario(cat(), e), EntradaInvalida, JSON.stringify(e));
});

test('CLI: escribe solo por la salida estándar y no modifica el catálogo', () => {
  const antes = sha(CATALOGO);
  const perfiles = temporal('perfiles.json', [{ nombre: 'Q1', posicion: 'de_pie_apoyo', opciones: ['un_brazo'] }]);
  const escenario = temporal('escenario.json', { descripcion: 'prueba', cambios: [{ id: catalogoReal.ejercicios[0].id, exigencias: { agarre: true } }] });
  const salida = JSON.parse(execFileSync(process.execPath, [SCRIPT, '--perfiles', perfiles, '--escenario', escenario, '--json'], { encoding: 'utf8' }));
  assert.match(salida.condiciones.modo, /auditoría/);
  assert.equal(salida.condiciones.escenario.cambios, 1);
  assert.equal(salida.resultados.at(-1).nombre, 'Q1');
  assert.ok('despues' in salida.resultados.at(-1));
  assert.equal(sha(CATALOGO), antes);
});

test('CLI: una entrada inválida termina con código 2 y sin traza', () => {
  const malos = [
    ['--perfiles', '/no/existe.json'],
    ['--perfiles', temporal('p.json', [{ posicion: 'volando' }])],
    ['--escenario', temporal('e.json', { cambios: [{ id: 'x', exigencias: {} }] })],
    ['--desconocido'],
  ];
  for (const args of malos) {
    const r = spawnSync(process.execPath, [SCRIPT, ...args], { encoding: 'utf8' });
    assert.equal(r.status, 2, args.join(' '));
    assert.match(r.stderr, /^✗ /);
    assert.doesNotMatch(r.stderr, /at .*\.mjs/);
  }
});
