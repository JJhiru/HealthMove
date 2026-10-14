import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { swEsperado } from '../scripts/version-sw.mjs';

const leer = (r) => readFileSync(new URL(`../public/${r}`, import.meta.url), 'utf8');

test('sw.js precachea todos los archivos de public/ y su versión está al día', () => {
  assert.equal(leer('sw.js'), swEsperado(), 'ejecuta npm run version-sw');
});

test('el manifest apunta a iconos que existen', () => {
  const m = JSON.parse(leer('manifest.webmanifest'));
  assert.equal(m.display, 'standalone');
  for (const i of m.icons) assert.ok(existsSync(new URL(`../public/${i.src}`, import.meta.url)), i.src);
  assert.ok(m.icons.some((i) => i.sizes === '192x192') && m.icons.some((i) => i.sizes === '512x512'));
});

test('index.html usa rutas relativas (funciona en un subdirectorio, p. ej. GitHub Pages)', () => {
  const html = leer('index.html');
  assert.ok(!/(href|src)="\//.test(html), 'hay una ruta absoluta');
});

test('estilos.css respeta el atributo hidden aunque una clase cambie display', () => {
  assert.match(leer('estilos.css'), /\[hidden\]\s*\{\s*display:\s*none\s*!important;?\s*\}/);
});
