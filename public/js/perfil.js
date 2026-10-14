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

export function estadoSeccion(p, seccionId) {
  const { estado } = p.secciones[seccionId];
  if (estado === 'no_revisada' && p.declaracionGlobal) return 'cubierta_por_declaracion';
  return estado;
}

export const necesitaPreguntasPosicion = (p) => p.posicion !== null && p.posicion !== 'solo_sentado';

// Problemas que impiden generar una rutina. Lista vacía = se puede generar.
export function validarPerfil(p) {
  const problemas = [];
  const add = (codigo, mensaje) => problemas.push({ codigo, mensaje });

  if (!p.avisoAceptado) add('aviso', 'Falta aceptar el aviso inicial.');
  if (!p.posicion) add('posicion', 'Indica en qué posición puedes hacer ejercicio.');
  if (necesitaPreguntasPosicion(p)) {
    if (p.cama === null) add('cama', 'Indica si puedes tumbarte en una cama y volver a sentarte.');
    if (p.suelo === null) add('suelo', 'Indica si puedes bajar al suelo y levantarte.');
  }
  for (const s of SECCIONES) {
    if (estadoSeccion(p, s.id) === 'no_revisada') add(`seccion:${s.id}`, `Revisa la sección «${s.titulo}» o confirma que no tienes más dificultades.`);
    for (const o of p.secciones[s.id].opciones) {
      if (opcionDe(s.id, o)?.bloquea) {
        add('otra_indicacion', 'Indicaste una indicación profesional que HealthMove no puede representar, así que no puede respetarla. Consulta con tu profesional sanitario.');
      }
    }
  }
  if (!p.duracionMin) add('duracion', 'Elige la duración de la rutina.');
  return problemas;
}

// Perfil leído de localStorage: si no tiene la forma esperada, se descarta (nunca se "repara" a medias).
export function cargarPerfil(json) {
  try {
    const p = typeof json === 'string' ? JSON.parse(json) : json;
    if (!p || p.version !== VERSION_PERFIL) return perfilVacio();
    const base = perfilVacio();
    for (const s of SECCIONES) {
      const sec = p.secciones?.[s.id];
      const validas = Array.isArray(sec?.opciones) && sec.opciones.every((o) => opcionDe(s.id, o));
      if (!validas || !['no_revisada', 'sin_dificultades', 'con_selecciones'].includes(sec.estado)) return base;
    }
    return { ...base, ...p };
  } catch {
    return perfilVacio();
  }
}
