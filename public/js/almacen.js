// CS50 AI citation: written with the help of Claude (Anthropic), an AI assistant. Requirements, design decisions and review: JJhiru.
// ============================================================
//  Almacenamiento local. Todo se queda en este dispositivo.
//  localStorage puede fallar (modo privado, datos bloqueados):
//  cada acceso va protegido y la app sigue funcionando sin él.
// ============================================================
const PREFIJO = 'hm_';

export function leer(clave, porDefecto = null) {
  try {
    const v = localStorage.getItem(PREFIJO + clave);
    return v === null ? porDefecto : JSON.parse(v);
  } catch {
    return porDefecto;
  }
}

// Texto guardado tal cual, sin interpretarlo (null si no hay nada o no se puede leer).
// Sirve para conservar datos que no se pueden cargar sin perder ni un carácter.
export function leerTexto(clave) {
  try {
    return localStorage.getItem(PREFIJO + clave);
  } catch {
    return null;
  }
}

export function guardar(clave, valor) {
  try {
    localStorage.setItem(PREFIJO + clave, JSON.stringify(valor));
    return true;
  } catch {
    return false;
  }
}

export function borrarTodo() {
  try {
    Object.keys(localStorage).filter((k) => k.startsWith(PREFIJO)).forEach((k) => localStorage.removeItem(k));
  } catch { /* nada que borrar */ }
}
