// CS50 AI citation: the profile questions and what each one excludes are JJhiru's decisions (docs/especificacion-v1.md); the code was written with the help of Claude (Anthropic), an AI assistant.
// ============================================================
//  Modelo del perfil (docs/especificacion-v1.md, §5 y §6).
//  Funciones puras: cada cambio devuelve un perfil nuevo, así
//  "deshacer" consiste en conservar el perfil anterior.
// ============================================================
import { POSICION, SECCIONES, RECURSOS, DURACIONES, opcionDe } from './opciones.js';

export const VERSION_PERFIL = 1;

export function perfilVacio() {
  const secciones = {};
  for (const s of SECCIONES) secciones[s.id] = { estado: 'no_revisada', opciones: [] };
  return {
    version: VERSION_PERFIL,
    avisoAceptado: false,
    posicion: null,          // id de POSICION
    cama: null,              // true | false | null
    suelo: null,             // true | false | null
    secciones,
    declaracionGlobal: false, // "Confirmo que no tengo más…"
    recursos: [],
    duracionMin: null,
  };
}

export const aceptarAviso = (p) => ({ ...p, avisoAceptado: true });

export function elegirPosicion(p, posicion) {
  if (!POSICION.some((o) => o.id === posicion)) throw new Error(`Posición desconocida: ${posicion}`);
  return { ...p, posicion };
}

export function responderPregunta(p, pregunta, valor) {
  if (pregunta !== 'cama' && pregunta !== 'suelo') throw new Error(`Pregunta desconocida: ${pregunta}`);
  return { ...p, [pregunta]: Boolean(valor) };
}

// Cualquier cambio en una sección invalida la declaración global: hay que volver a confirmarla.
function conSeccion(p, seccionId, seccion) {
  if (!p.secciones[seccionId]) throw new Error(`Sección desconocida: ${seccionId}`);
  return { ...p, secciones: { ...p.secciones, [seccionId]: seccion }, declaracionGlobal: false };
}

// Marca o desmarca una dificultad. Retira "sin dificultades" de esa sección (y solo de esa).
export function alternarOpcion(p, seccionId, opcionId) {
  if (!opcionDe(seccionId, opcionId)) throw new Error(`Opción desconocida: ${seccionId}.${opcionId}`);
  const actuales = p.secciones[seccionId].opciones;
  const opciones = actuales.includes(opcionId) ? actuales.filter((o) => o !== opcionId) : [...actuales, opcionId];
  return conSeccion(p, seccionId, { estado: opciones.length ? 'con_selecciones' : 'no_revisada', opciones });
}

// "No tengo dificultades en esta sección": desmarca solo las opciones de esta sección.
export const marcarSinDificultades = (p, seccionId) =>
  conSeccion(p, seccionId, { estado: 'sin_dificultades', opciones: [] });

// "No tengo más restricciones/dificultades": no borra nada; solo se confirma en el resumen.
export const confirmarDeclaracionGlobal = (p) => ({ ...p, declaracionGlobal: true });

export function alternarRecurso(p, recursoId) {
  if (!RECURSOS.some((r) => r.id === recursoId)) throw new Error(`Recurso desconocido: ${recursoId}`);
  const recursos = p.recursos.includes(recursoId) ? p.recursos.filter((r) => r !== recursoId) : [...p.recursos, recursoId];
  return { ...p, recursos };
}

export function elegirDuracion(p, minutos) {
  if (!DURACIONES.includes(minutos)) throw new Error(`Duración no válida: ${minutos}`);
  return { ...p, duracionMin: minutos };
}

// Solo un `true` estricto cubre las secciones sin revisar: un texto como "sí" no cuenta como confirmación.
export function estadoSeccion(p, seccionId) {
  const { estado } = p.secciones[seccionId];
  if (estado === 'no_revisada' && p.declaracionGlobal === true) return 'cubierta_por_declaracion';
  return estado;
}

export const necesitaPreguntasPosicion = (p) => p.posicion !== null && p.posicion !== 'solo_sentado';

const ESTADOS_SECCION = ['no_revisada', 'sin_dificultades', 'con_selecciones'];
const esObjeto = (x) => x !== null && typeof x === 'object' && !Array.isArray(x);
const vacio = (x) => x === null || x === undefined;

// Una sección guardada es válida si su estado es conocido, sus opciones existen y ambos concuerdan.
function seccionValida(s, sec) {
  if (!esObjeto(sec) || !ESTADOS_SECCION.includes(sec.estado) || !Array.isArray(sec.opciones)) return false;
  if (!sec.opciones.every((o) => opcionDe(s.id, o))) return false;
  return sec.estado === 'con_selecciones' ? sec.opciones.length > 0 : sec.opciones.length === 0;
}

// Problemas que impiden generar una rutina. Lista vacía = se puede generar.
// Comprueba tipos y valores: un dato desconocido nunca se interpreta como una capacidad.
export function validarPerfil(p) {
  const problemas = [];
  const add = (codigo, mensaje) => problemas.push({ codigo, mensaje });
  if (!esObjeto(p)) return [{ codigo: 'perfil', mensaje: 'El perfil guardado no es válido. Vuelve a completarlo.' }];

  if (p.avisoAceptado !== true) add('aviso', 'Falta aceptar el aviso inicial.');
  const posicionValida = POSICION.some((o) => o.id === p.posicion);
  if (vacio(p.posicion)) add('posicion', 'Indica en qué posición puedes hacer ejercicio.');
  else if (!posicionValida) add('posicion', 'La posición guardada no es válida. Vuelve a elegirla.');
  if (posicionValida && necesitaPreguntasPosicion(p)) {
    if (vacio(p.cama)) add('cama', 'Indica si puedes tumbarte en una cama y volver a sentarte.');
    else if (typeof p.cama !== 'boolean') add('cama', 'La respuesta guardada sobre la cama no es válida. Vuelve a responderla.');
    if (vacio(p.suelo)) add('suelo', 'Indica si puedes bajar al suelo y levantarte.');
    else if (typeof p.suelo !== 'boolean') add('suelo', 'La respuesta guardada sobre el suelo no es válida. Vuelve a responderla.');
  }
  if (typeof p.declaracionGlobal !== 'boolean') {
    add('declaracion', 'La confirmación de que no tienes más dificultades no es válida. Vuelve a confirmarla en el resumen.');
  }
  for (const s of SECCIONES) {
    const sec = esObjeto(p.secciones) ? p.secciones[s.id] : undefined;
    if (!seccionValida(s, sec)) {
      add(`seccion:${s.id}`, `La sección «${s.titulo}» guardada no es válida. Revísala de nuevo.`);
      continue;
    }
    if (estadoSeccion(p, s.id) === 'no_revisada') add(`seccion:${s.id}`, `Revisa la sección «${s.titulo}» o confirma que no tienes más dificultades.`);
    for (const o of sec.opciones) {
      if (opcionDe(s.id, o)?.bloquea) {
        add('otra_indicacion', 'Indicaste una indicación profesional que HealthMove no puede representar, así que no puede respetarla. Consulta con tu profesional sanitario.');
      }
    }
  }
  if (!Array.isArray(p.recursos) || !p.recursos.every((r) => RECURSOS.some((x) => x.id === r))) {
    add('recursos', 'Los recursos guardados no son válidos. Vuelve a elegirlos.');
  }
  if (vacio(p.duracionMin)) add('duracion', 'Elige la duración de la rutina.');
  else if (!DURACIONES.includes(p.duracionMin)) add('duracion', 'La duración guardada no es válida. Vuelve a elegirla.');
  return problemas;
}

// Perfil leído de localStorage: si no tiene la forma esperada, no se usa (nunca se "repara" a medias).
// `problema` dice por qué: null (se carga, o no había nada guardado), 'ilegible' (no es JSON ni un objeto),
// 'version' (otra versión del perfil) o 'estructura' (alguna sección no es válida).
// Quien llama decide qué hacer con los datos originales: esta función no borra nada.
export function diagnosticarPerfil(json) {
  if (json === null || json === undefined) return { perfil: perfilVacio(), problema: null };
  let p;
  try {
    p = typeof json === 'string' ? JSON.parse(json) : json;
  } catch {
    return { perfil: perfilVacio(), problema: 'ilegible' };
  }
  if (!esObjeto(p)) return { perfil: perfilVacio(), problema: 'ilegible' };
  if (p.version !== VERSION_PERFIL) return { perfil: perfilVacio(), problema: 'version' };
  const base = perfilVacio();
  for (const s of SECCIONES) {
    const sec = esObjeto(p.secciones) ? p.secciones[s.id] : undefined;
    const validas = Array.isArray(sec?.opciones) && sec.opciones.every((o) => opcionDe(s.id, o));
    if (!validas || !ESTADOS_SECCION.includes(sec.estado)) return { perfil: base, problema: 'estructura' };
  }
  return { perfil: { ...base, ...p }, problema: null };
}

export const cargarPerfil = (json) => diagnosticarPerfil(json).perfil;

// Copias de perfiles guardados que no se pudieron cargar. Se añade el texto original exacto,
// sin interpretarlo, salvo que ya esté copiado. Nunca se quita ninguna copia.
export function anadirCopiaPerfil(copias, texto, problema, fecha) {
  const lista = Array.isArray(copias) ? copias : [];
  if (lista.some((c) => c?.texto === texto)) return lista;
  return [...lista, { fecha, problema, texto }];
}
