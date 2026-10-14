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
