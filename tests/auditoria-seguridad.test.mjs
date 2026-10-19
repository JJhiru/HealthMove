// Entradas de scripts/auditoria.mjs (validar, comparar): solo informes .md del repositorio
// o «<revisión>:<ruta>»; nada llega a git como opción y una entrada inválida no escribe nada.
// Las pruebas de lectura usan una raíz temporal; las de la CLI no modifican el proyecto.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, mkdirSync, symlinkSync, readdirSync, statSync, existsSync, rmSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { join, relative } from 'node:path';
import { tmpdir } from 'node:os';
import { analizarEntrada, leerEntrada, EntradaInvalida } from '../scripts/auditoria/entradas.mjs';

const RAIZ = fileURLToPath(new URL('..', import.meta.url));
const SCRIPT = join(RAIZ, 'scripts/auditoria.mjs');
const temporal = (p) => mkdtempSync(join(tmpdir(), p));

// Entradas que intentan pasar por opción de git, salir del repositorio o usar sintaxis especial de git.
const INVALIDAS = [
  '', '-x', '--output=salida', '--output=x:y', '-ox:y', '--end-of-options',
  ' --output=x:y', '\t--output=x:y', '--output=x\n:y', 'a\u0000b.md', '－－output=x:y.md',
  'HEAD~1..HEAD:docs/a.md', 'HEAD...main:docs/a.md', 'HEAD^{tree}:docs/a.md', '@{-1}:docs/a.md', 'HEAD@{1}:docs/a.md',
  ':/Rediseño:docs/a.md', ':docs/a.md', 'HEAD:', 'HEAD:../README.md', 'HEAD:docs/../README.md', 'HEAD:./README.md',
  'HEAD:/etc/passwd.md', 'HEAD:docs//a.md', 'HEAD:.git/config.md', 'HEAD:.GIT/x.md', 'HEAD:package.json',
  'HEAD:docs\\a.md', 'main/:docs/a.md', 'rama.lock:docs/a.md', 'C:/etc/hostname',
  '/etc/passwd', '.git', '.git/config', 'docs/.git/x.md', 'package.json', 'README.md ',
  '-a.md', '--output=salida.md', ' README.md', 'README.md\u007f',
];

// Cada defensa, por separado: estas entradas solo las detiene la comprobación indicada.
const MOTIVOS = [
  ['-a.md', /empieza por «-»/],
  ['--output=salida.md', /empieza por «-»/],
  [' README.md', /espacios/],
  ['README.md\u007f', /caracteres de control/],
  ['HEAD~1..HEAD:docs/a.md', /la revisión debe ser/],
  ['HEAD:docs/../README.md', /segmentos/],
  ['HEAD:.GIT/x.md', /\.git/],
  ['docs/.git/x.md', /\.git/],
  ['HEAD:package.json', /solo se admiten informes \.md/],
];

test('el analizador rechaza opciones, sintaxis especial de git y rutas fuera de ámbito', () => {
  for (const ref of INVALIDAS) {
    assert.throws(() => analizarEntrada(ref), EntradaInvalida, `debería rechazar ${JSON.stringify(ref)}`);
  }
  for (const [ref, motivo] of MOTIVOS) assert.throws(() => analizarEntrada(ref), motivo, JSON.stringify(ref));
});

test('el analizador acepta solo los dos formatos previstos', () => {
  assert.deepEqual(analizarEntrada('docs/auditoria-catalogo/lote-01.md'), { tipo: 'archivo', ruta: 'docs/auditoria-catalogo/lote-01.md' });
  for (const rev of ['HEAD', 'HEAD~1', 'HEAD^', 'HEAD~2^1', 'defd8b0', 'desarrollo-v1', 'origin/main']) {
    assert.deepEqual(analizarEntrada(`${rev}:docs/auditoria-catalogo/lote-01.md`), { tipo: 'git', rev, ruta: 'docs/auditoria-catalogo/lote-01.md' });
  }
});

const error = (fn) => { try { fn(); } catch (e) { return e; } assert.fail('no lanzó'); };

test('los mensajes de error escapan y acortan la entrada', () => {
  assert.ok(error(() => analizarEntrada('-' + 'x'.repeat(5000))).message.length < 300);
  const m = error(() => analizarEntrada('a\nb.md')).message;
  assert.ok(!m.includes('\n') && m.includes('\\n'));
});

test('la lectura se limita a la raíz aunque haya enlaces simbólicos, directorios o rutas absolutas', () => {
  const raiz = temporal('hm-raiz-');
  const fuera = temporal('hm-fuera-');
  try {
    writeFileSync(join(raiz, 'a.md'), '# dentro');
    writeFileSync(join(fuera, 'secreto.md'), '# fuera');
    mkdirSync(join(raiz, 'dir.md'));
    mkdirSync(join(raiz, 'sub'));
    symlinkSync(join(fuera, 'secreto.md'), join(raiz, 'enlace.md'));
    symlinkSync(fuera, join(raiz, 'sub', 'salida'));
    symlinkSync('/etc/hostname', join(raiz, 'host.md'));

    assert.equal(leerEntrada('a.md', raiz), '# dentro');
    assert.equal(leerEntrada(join(raiz, 'a.md'), raiz), '# dentro');
    for (const ref of ['enlace.md', 'sub/salida/secreto.md', 'host.md', 'dir.md', join(fuera, 'secreto.md'), `${relative(raiz, fuera)}/secreto.md`, 'no-existe.md']) {
      assert.throws(() => leerEntrada(ref, raiz), EntradaInvalida, `debería rechazar ${ref}`);
    }
  } finally {
    rmSync(raiz, { recursive: true, force: true });
    rmSync(fuera, { recursive: true, force: true });
  }
});

test('las referencias git se verifican como commit y la ruta debe existir en él', () => {
  assert.match(leerEntrada('HEAD:docs/auditoria-catalogo/lote-01.md', RAIZ), /^# Auditoría del catálogo — Lote 1/);
  assert.match(leerEntrada('75cd4b8:docs/auditoria-catalogo/lote-01.md', RAIZ), /Lote 1/);
  assert.throws(() => leerEntrada('rama-que-no-existe:docs/auditoria-catalogo/lote-01.md', RAIZ), /no existe/);
  assert.throws(() => leerEntrada('HEAD:docs/auditoria-catalogo/no-existe.md', RAIZ), /no contiene/);
  // Un blob o un árbol no son commits.
  assert.throws(() => leerEntrada('72fda34f80d2e3222eabd5c0ce583c21c83d7699:docs/a.md', RAIZ), /no existe|no resuelve/);
});

// Huella del árbol de trabajo (ruta, tamaño y fecha de cada archivo, sin .git ni node_modules).
function huellaArbol(dir) {
  const out = [];
  (function recorrer(d) {
    for (const n of readdirSync(d)) {
      if (n === '.git' || n === 'node_modules') continue;
      const p = join(d, n);
      const st = statSync(p);
      if (st.isDirectory()) recorrer(p);
      else out.push(`${relative(dir, p)} ${st.size} ${st.mtimeMs}`);
    }
  })(dir);
  return out.sort().join('\n');
}

test('una entrada inválida en la CLI no escribe archivos y no muestra trazas', () => {
  const cwd = temporal('hm-cwd-');
  const destino = join(cwd, 'escrito');
  const antes = huellaArbol(RAIZ);
  try {
    const casos = [
      ['comparar', `--output=${destino}:x`, 'HEAD:README.md'],
      ['comparar', `--output=${destino}`, 'HEAD:README.md'],
      ['comparar', 'HEAD:README.md', `--output=${destino}`],
      ['comparar', ` --output=${destino}:x`, 'HEAD:README.md'],
      ['comparar', '--output=relativo:x', 'HEAD:README.md'],
      ['comparar', '-o', destino],
      ['comparar', 'HEAD~1..HEAD:README.md', 'HEAD:README.md'],
      ['comparar', '/etc/hostname', 'HEAD:README.md'],
      ['comparar', '../../../../../../../../etc/hostname', 'HEAD:README.md'],
      ['comparar', '.git', 'HEAD:README.md'],
      ['comparar', 'no-existe.md', 'HEAD:README.md'],
      ['validar', '/etc/passwd'],
      ['validar', `--output=${destino}`],
      ['validar', 'package.json'],
    ];
    for (const args of casos) {
      const r = spawnSync(process.execPath, [SCRIPT, ...args], { cwd, encoding: 'utf8' });
      const salida = r.stdout + r.stderr;
      assert.equal(r.status, 2, `${JSON.stringify(args)} debería terminar con 2:\n${salida}`);
      assert.match(r.stderr, /^✗ entrada no válida/, JSON.stringify(args));
      assert.doesNotMatch(salida, /\n\s+at |node:internal|Error:/, `traza en ${JSON.stringify(args)}`);
    }
    assert.equal(existsSync(destino), false);
    assert.deepEqual(readdirSync(cwd), []);
    assert.equal(existsSync(join(RAIZ, 'relativo')), false);
    assert.equal(huellaArbol(RAIZ), antes, 'el árbol de trabajo no debe cambiar');
  } finally {
    rmSync(cwd, { recursive: true, force: true });
  }
});
