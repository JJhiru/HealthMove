import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dibujar } from '../public/js/figura.js';
import { jsonEsperado } from '../scripts/ilustraciones.mjs';

const leer = (r) => JSON.parse(readFileSync(new URL(`../public/data/${r}`, import.meta.url), 'utf8'));
const catalogo = leer('catalogo.json');
const fichas = leer('ilustraciones.json');

test('ilustraciones.json está al día con las fichas de scripts/ilustraciones', () => {
  assert.equal(readFileSync(new URL('../public/data/ilustraciones.json', import.meta.url), 'utf8'), jsonEsperado(), 'ejecuta npm run ilustraciones');
});

test('cada ejercicio del catálogo tiene su ilustración, y no sobra ninguna', () => {
  const ids = new Set(catalogo.ejercicios.map((e) => e.id));
  for (const id of ids) assert.ok(fichas[id], `falta la ilustración de ${id}`);
  for (const id of Object.keys(fichas)) assert.ok(ids.has(id), `ilustración sin ejercicio: ${id}`);
});

// La postura dibujada debe ser una de las del ejercicio.
const POSICION_DE_BASE = {
  silla: 'sentado', pie: 'de_pie', 'cama-arriba': 'tumbado', 'cama-lado': 'tumbado', 'cama-planta': 'tumbado',
  'suelo-arriba': 'suelo', 'suelo-lado': 'suelo', 'suelo-planta': 'suelo', 'suelo-sentado': 'suelo', 'boca-abajo': 'suelo',
};

test('la postura dibujada coincide con la posición del ejercicio', () => {
  for (const e of catalogo.ejercicios) {
    const f = fichas[e.id];
    if (f.detalle) continue; // detalle de mano o pie: no dibuja la postura
    const pos = POSICION_DE_BASE[f.base || 'pie'];
    assert.ok(e.posiciones.includes(pos), `${e.id}: dibujado ${pos}, pero el ejercicio es ${e.posiciones.join('/')}`);
  }
});

test('la ilustración muestra el material que pide el ejercicio', () => {
  const fallos = [];
  const ok = (cond, msg) => { if (!cond) fallos.push(msg); };
  const tiene = (f, clave) => Boolean(f[clave]) && (!Array.isArray(f[clave]) || f[clave].length > 0);
  for (const e of catalogo.ejercicios) {
    const f = fichas[e.id];
    const apoyos = f.apoyos || [];
    if (e.recursos.includes('banda')) ok(tiene(f, 'banda'), `${e.id}: falta la banda`);
    if (e.recursos.includes('peso_ligero')) ok(tiene(f, 'botella'), `${e.id}: falta la botella`);
    if (e.recursos.includes('toalla')) ok(tiene(f, 'toalla'), `${e.id}: falta la toalla`);
    if (e.recursos.includes('pared')) ok(apoyos.some((a) => a.startsWith('pared')), `${e.id}: falta la pared`);
    if (e.recursos.includes('silla') && !f.detalle) {
      ok(apoyos.some((a) => a.startsWith('silla')), `${e.id}: falta la silla`);
    }
    if (e.recursos.includes('cama') && !f.detalle) ok((f.base || '').startsWith('cama'), `${e.id}: falta la cama`);
    // Y al revés: no se dibuja material que el ejercicio no usa.
    if (tiene(f, 'banda')) ok(e.recursos.includes('banda'), `${e.id}: dibuja una banda que no usa`);
    if (tiene(f, 'botella')) ok(e.recursos.includes('peso_ligero'), `${e.id}: dibuja una botella que no usa`);
    if (tiene(f, 'toalla')) ok(e.recursos.includes('toalla'), `${e.id}: dibuja una toalla que no usa`);
  }
  assert.deepEqual(fallos, []);
});

test('cada ilustración se dibuja como SVG accesible y sin números rotos', () => {
  for (const e of catalogo.ejercicios) {
    const svg = dibujar(fichas[e.id], e.nombre);
    assert.match(svg, /^<svg [^>]*role="img"[^>]*aria-label="Ilustración: /, e.id);
    assert.ok(!/NaN|undefined|Infinity/.test(svg), `${e.id}: coordenadas rotas`);
    assert.ok(svg.length < 12000, `${e.id}: SVG demasiado grande`);
  }
});
