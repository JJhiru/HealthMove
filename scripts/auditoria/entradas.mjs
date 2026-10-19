// ============================================================
//  Entradas admitidas por scripts/auditoria.mjs (validar, comparar).
//
//  Solo dos formatos, validados de forma explícita:
//    · <ruta>             archivo .md dentro de la raíz del
//                         repositorio, fuera de .git (se resuelven
//                         los enlaces simbólicos antes de comprobarlo).
//    · <revisión>:<ruta>  el mismo archivo en un commit. La revisión
//                         es HEAD, un hash o un nombre de rama, con
//                         ~n o ^n; se verifica que sea un commit.
//  Todo lo demás se rechaza antes de llamar a git. git nunca recibe
//  como primer argumento un texto escrito por el usuario.
// ============================================================
import { readFileSync, realpathSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { isAbsolute, relative, resolve, sep } from 'node:path';

export const TAMANO_MAXIMO = 2 * 1024 * 1024;

export class EntradaInvalida extends Error {}

// El texto del usuario se muestra escapado y acortado: nunca se reproduce tal cual.
const mostrar = (s) => JSON.stringify(String(s).slice(0, 120));
const rechazar = (ref, motivo) => { throw new EntradaInvalida(`entrada no válida ${mostrar(ref)}: ${motivo}`); };

const REVISION = /^(?:HEAD|[0-9a-f]{7,40}|[A-Za-z0-9][A-Za-z0-9._/-]*)(?:[~^][0-9]{0,3})*$/;

// Ruta relativa con «/», sin segmentos vacíos, «.», «..» ni «.git», terminada en .md.
function comprobarRuta(ref, ruta) {
  if (isAbsolute(ruta) || ruta.includes('\\')) rechazar(ref, 'la ruta del commit debe ser relativa a la raíz del repositorio');
  const partes = ruta.split('/');
  if (partes.some((p) => p === '' || p === '.' || p === '..')) rechazar(ref, 'la ruta no puede tener segmentos vacíos, «.» ni «..»');
  if (partes.some((p) => p.toLowerCase() === '.git')) rechazar(ref, 'no se leen archivos de .git');
  if (!ruta.toLowerCase().endsWith('.md')) rechazar(ref, 'solo se admiten informes .md');
}

function comprobarRevision(ref, rev) {
  if (!REVISION.test(rev) || rev.includes('..') || rev.includes('//') || rev.endsWith('/') || rev.endsWith('.lock')) {
    rechazar(ref, 'la revisión debe ser HEAD, un hash o un nombre de rama, con ~n o ^n opcionales');
  }
}

// Clasifica y valida una entrada sin tocar el disco ni git.
export function analizarEntrada(ref) {
  if (typeof ref !== 'string' || ref === '') rechazar(ref, 'está vacía');
  if (/[\x00-\x1f\x7f]/.test(ref)) rechazar(ref, 'contiene caracteres de control');
  if (ref !== ref.trim()) rechazar(ref, 'empieza o termina con espacios');
  if (ref.startsWith('-')) rechazar(ref, 'empieza por «-» y git la tomaría como opción');
  const i = ref.indexOf(':');
  if (i < 0) {
    if (ref.split(/[\\/]/).some((p) => p.toLowerCase() === '.git')) rechazar(ref, 'no se leen archivos de .git');
    if (!ref.toLowerCase().endsWith('.md')) rechazar(ref, 'solo se admiten informes .md');
    return { tipo: 'archivo', ruta: ref };
  }
  const rev = ref.slice(0, i);
  const ruta = ref.slice(i + 1);
  comprobarRevision(ref, rev);
  comprobarRuta(ref, ruta);
  return { tipo: 'git', rev, ruta };
}

// Única forma de llamar a git en estas herramientas. Las variables GIT_* heredadas
// (GIT_DIR, GIT_WORK_TREE, GIT_TRACE*, GIT_CONFIG_*…) desviarían la lectura a otro
// repositorio, escribirían archivos o, con core.fsmonitor, ejecutarían órdenes; los
// hooks de git exportan algunas. Se quitan todas, y git no toma bloqueos opcionales
// ni ejecuta fsmonitor, así que tampoco reescribe el índice.
export function entornoGit(entorno = process.env) {
  const limpio = Object.fromEntries(Object.entries(entorno).filter(([k]) => !k.toUpperCase().startsWith('GIT_')));
  return { ...limpio, GIT_OPTIONAL_LOCKS: '0', GIT_TERMINAL_PROMPT: '0' };
}
export const ejecutarGit = (raiz, args) => execFileSync('git', ['--no-optional-locks', '-c', 'core.fsmonitor=false', ...args], {
  cwd: raiz, env: entornoGit(), encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], maxBuffer: TAMANO_MAXIMO,
});
const git = ejecutarGit;

// Lee el contenido de una entrada ya validada, limitado a la raíz del repositorio.
export function leerEntrada(ref, raiz) {
  const e = analizarEntrada(ref);
  if (e.tipo === 'git') {
    let commit;
    try { commit = git(raiz, ['rev-parse', '--verify', '--quiet', '--end-of-options', `${e.rev}^{commit}`]).trim(); }
    catch { rechazar(ref, 'la revisión no existe en este repositorio'); }
    if (!/^[0-9a-f]{40,64}$/.test(commit)) rechazar(ref, 'la revisión no resuelve a un commit');
    try { return git(raiz, ['cat-file', 'blob', `${commit}:${e.ruta}`]); }
    catch { rechazar(ref, `el commit ${commit.slice(0, 7)} no contiene ese archivo o supera ${TAMANO_MAXIMO} bytes`); }
  }
  const base = realpathSync(raiz);
  let real;
  try { real = realpathSync(resolve(raiz, e.ruta)); }
  catch { rechazar(ref, 'el archivo no existe'); }
  const rel = relative(base, real);
  if (rel === '' || rel.startsWith('..') || isAbsolute(rel)) rechazar(ref, 'está fuera del repositorio');
  if (rel.split(sep).some((p) => p.toLowerCase() === '.git')) rechazar(ref, 'no se leen archivos de .git');
  if (!real.toLowerCase().endsWith('.md')) rechazar(ref, 'el destino del enlace no es un informe .md');
  const st = statSync(real);
  if (!st.isFile()) rechazar(ref, 'no es un archivo');
  if (st.size > TAMANO_MAXIMO) rechazar(ref, `supera ${TAMANO_MAXIMO} bytes`);
  return readFileSync(real, 'utf8');
}
