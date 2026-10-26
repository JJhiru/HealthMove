// CS50 AI citation: written with the help of Claude (Anthropic), an AI assistant. Requirements, design decisions and review: JJhiru.
// scripts/auditoria.mjs frente a un entorno de git hostil o heredado (por ejemplo, desde un hook,
// que exporta GIT_DIR y GIT_INDEX_FILE). Todo ocurre en directorios temporales: un repositorio
// ajeno, un HOME con ~/.gitconfig propio y destinos de trazas. No se toca la configuración real.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readdirSync, statSync, rmSync, utimesSync } from 'node:fs';
import { spawnSync, execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { entornoGit, ejecutarGit } from '../scripts/auditoria/entradas.mjs';

const RAIZ = fileURLToPath(new URL('..', import.meta.url));
const SCRIPT = join(RAIZ, 'scripts/auditoria.mjs');
const INFORME = 'docs/auditoria-catalogo/lote-01.md';

// Entorno mínimo sin GIT_*: el del proceso de test podría venir de un hook.
const base = entornoGit();
delete base.GIT_OPTIONAL_LOCKS;
delete base.GIT_TERMINAL_PROMPT;
const ejecutar = (args, extra = {}, cwd = tmpdir()) => spawnSync(process.execPath, [SCRIPT, ...args], { cwd, encoding: 'utf8', env: { ...base, ...extra } });
const indice = execFileSync('git', ['rev-parse', '--path-format=absolute', '--git-path', 'index'], { cwd: RAIZ, encoding: 'utf8', env: base }).trim();

test('entornoGit quita todas las variables GIT_* sin distinguir mayúsculas', () => {
  const e = entornoGit({ PATH: '/bin', GIT_DIR: 'x', git_work_tree: 'y', Git_Trace: 'z', GIT_CONFIG_COUNT: '1', HOME: '/h' });
  assert.deepEqual(Object.keys(e).sort(), ['GIT_OPTIONAL_LOCKS', 'GIT_TERMINAL_PROMPT', 'HOME', 'PATH']);
});

test('git status no reescribe el índice aunque haya datos de archivo desactualizados', () => {
  const dir = mkdtempSync(join(tmpdir(), 'hm-indice-'));
  try {
    const g = (...a) => execFileSync('git', a, { cwd: dir, env: base, stdio: 'ignore' });
    g('init', '-q');
    writeFileSync(join(dir, 'a.md'), 'x');
    g('add', '.'); g('-c', 'user.name=t', '-c', 'user.email=t@t', 'commit', '-qm', 't');
    const futuro = new Date(Date.now() + 60_000);
    utimesSync(join(dir, 'a.md'), futuro, futuro); // sin --no-optional-locks, status refrescaría el índice
    const ruta = join(dir, '.git/index');
    const antes = statSync(ruta).mtimeMs;
    assert.equal(ejecutarGit(dir, ['status', '--porcelain']), '');
    assert.equal(statSync(ruta).mtimeMs, antes);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('variables de git heredadas no desvían, no escriben y no ejecutan nada', () => {
  const dir = mkdtempSync(join(tmpdir(), 'hm-entorno-'));
  try {
    // Repositorio ajeno con un informe del mismo nombre y contenido distinto.
    const otro = join(dir, 'otro');
    mkdirSync(join(otro, 'docs/auditoria-catalogo'), { recursive: true });
    writeFileSync(join(otro, INFORME), '# AJENO\n\n## 1. curl-biceps-sentado\n');
    const g = (...a) => execFileSync('git', a, { cwd: otro, env: base, stdio: 'ignore' });
    g('init', '-q'); g('add', '.'); g('-c', 'user.name=t', '-c', 'user.email=t@t', 'commit', '-qm', 't');
    // HOME con un ~/.gitconfig que ejecutaría una orden mediante core.fsmonitor.
    const home = join(dir, 'home');
    mkdirSync(home);
    writeFileSync(join(home, '.gitconfig'), `[core]\n\tfsmonitor = touch ${join(dir, 'EJECUTADO-home')}; false\n`);
    const trazas = join(dir, 'trazas');
    mkdirSync(trazas);

    const limpio = ejecutar(['estado']);
    assert.equal(limpio.status, 0, limpio.stderr);
    const cabecera = ejecutar(['cabecera']).stdout.split('\n').filter((l) => !l.startsWith('- Fecha')).join('\n');
    const antes = statSync(indice).mtimeMs;

    const hostiles = [
      { GIT_DIR: join(otro, '.git') },
      { GIT_DIR: join(otro, '.git'), GIT_WORK_TREE: otro },
      { GIT_INDEX_FILE: join(trazas, 'indice') },
      { GIT_OBJECT_DIRECTORY: join(otro, '.git/objects'), GIT_ALTERNATE_OBJECT_DIRECTORIES: join(otro, '.git/objects') },
      { GIT_TRACE: join(trazas, 't1'), GIT_TRACE2_EVENT: join(trazas, 't2'), GIT_TRACE_PERFORMANCE: join(trazas, 't3'), GIT_TRACE_SETUP: join(trazas, 't4') },
      { GIT_CONFIG_COUNT: '1', GIT_CONFIG_KEY_0: 'core.fsmonitor', GIT_CONFIG_VALUE_0: `touch ${join(dir, 'EJECUTADO-count')}; false` },
      { GIT_CONFIG_PARAMETERS: `'core.fsmonitor'='touch ${join(dir, 'EJECUTADO-param')}; false'` },
      { GIT_CONFIG_GLOBAL: join(home, '.gitconfig') },
      { HOME: home, XDG_CONFIG_HOME: join(home, '.config') },
      { git_dir: join(otro, '.git') },
    ];
    for (const extra of hostiles) {
      const nombre = Object.keys(extra).join('+');
      const estado = ejecutar(['estado'], extra, trazas);
      assert.equal(estado.status, 0, `${nombre}: ${estado.stderr}`);
      assert.equal(estado.stdout, limpio.stdout, `${nombre}: estado debe describir este repositorio`);
      const cab = ejecutar(['cabecera'], extra, trazas).stdout.split('\n').filter((l) => !l.startsWith('- Fecha')).join('\n');
      assert.equal(cab, cabecera, `${nombre}: la cabecera no debe cambiar`);
      const cmp = ejecutar(['comparar', `HEAD:${INFORME}`, INFORME], extra, trazas);
      assert.equal(cmp.status, 0, `${nombre}: ${cmp.stderr}`);
      assert.match(cmp.stdout, /: 0 cambio\(s\)/, `${nombre}: debe leer el informe de este repositorio`);
    }
    assert.deepEqual(readdirSync(trazas), [], 'no deben aparecer trazas ni índices');
    assert.deepEqual(readdirSync(dir).filter((f) => f.startsWith('EJECUTADO')), [], 'no debe ejecutarse ninguna orden');
    assert.equal(statSync(indice).mtimeMs, antes, 'el índice del repositorio no debe reescribirse');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
