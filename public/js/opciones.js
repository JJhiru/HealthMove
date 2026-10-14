// ============================================================
//  Opciones del perfil y lo que excluye cada una.
//  Fuente de verdad: docs/especificacion-v1.md, §5.
//  La interfaz y el motor leen de aquí; nada se decide en otro sitio.
// ============================================================

// Posición: una sola respuesta, obligatoria.
export const POSICION = [
  { id: 'de_pie_libre', texto: 'Puedo estar de pie sin sujetarme', excluyeExigencias: [], excluyePosiciones: [] },
  { id: 'de_pie_apoyo', texto: 'Puedo estar de pie solo si me sujeto a algo', excluyeExigencias: ['equilibrio_sin_apoyo'], excluyePosiciones: [] },
  {
    id: 'solo_sentado', texto: 'Solo puedo hacer ejercicio en una silla o silla de ruedas',
    excluyeExigencias: ['sentarse_levantarse'], excluyePosiciones: ['de_pie', 'tumbado', 'suelo'],
  },
];

// Preguntas sí/no que no se hacen si la posición es "solo en una silla".
export const PREGUNTAS_POSICION = [
  { id: 'cama', texto: '¿Puedes tumbarte boca arriba en una cama y volver a sentarte sin ayuda?', siNoExcluye: 'tumbado' },
  { id: 'suelo', texto: '¿Puedes bajar al suelo y levantarte sin ayuda?', siNoExcluye: 'suelo' },
];

// Secciones de dificultades e indicaciones. Cada opción excluye exigencias o posiciones.
export const SECCIONES = [
  {
    id: 'movilidad', titulo: 'Equilibrio y movilidad',
    opciones: [
      { id: 'equilibrio', texto: 'Me cuesta mantener el equilibrio', excluyeExigencias: ['equilibrio_sin_apoyo', 'una_pierna'] },
      { id: 'levantarse_silla', texto: 'Me cuesta levantarme de una silla', excluyeExigencias: ['sentarse_levantarse'] },
    ],
  },
  {
    id: 'brazos', titulo: 'Brazos y hombros',
    opciones: [
      { id: 'brazo_arriba', texto: 'No puedo, o me cuesta, levantar el brazo por encima del hombro', excluyeExigencias: ['brazo_sobre_hombro'] },
      { id: 'mano_detras', texto: 'Me cuesta llevar la mano a la espalda o detrás de la cabeza', excluyeExigencias: ['mano_detras'] },
      { id: 'un_brazo', texto: 'Solo puedo usar un brazo', excluyeExigencias: ['ambos_brazos'] },
    ],
  },
  {
    id: 'manos', titulo: 'Manos y muñecas',
    opciones: [
      { id: 'cerrar_mano', texto: 'Me cuesta cerrar la mano o sujetar objetos', excluyeExigencias: ['agarre'] },
      { id: 'peso_manos', texto: 'No puedo apoyar peso en las manos o las muñecas', excluyeExigencias: ['peso_en_manos'] },
    ],
  },
  {
    id: 'piernas', titulo: 'Piernas',
    opciones: [
      { id: 'cadera', grupo: 'Cadera', texto: 'Me cuesta doblar mucho la cadera (subir la rodilla al pecho)', excluyeExigencias: ['flexion_amplia_cadera'] },
      { id: 'rodilla', grupo: 'Rodilla', texto: 'Me cuesta doblar mucho la rodilla o agacharme', excluyeExigencias: ['flexion_profunda_rodilla'] },
      {
        id: 'carga_pierna', grupo: 'Rodilla', texto: 'No puedo cargar peso sobre una de mis piernas',
        excluyeExigencias: ['sentarse_levantarse', 'una_pierna'], excluyePosiciones: ['de_pie'],
      },
      { id: 'puntillas', grupo: 'Tobillo y pie', texto: 'Me cuesta ponerme de puntillas o sobre los talones', excluyeExigencias: ['puntillas_talones'] },
    ],
  },
  {
    id: 'espalda', titulo: 'Espalda y tronco',
    opciones: [
      { id: 'inclinar', texto: 'Me cuesta inclinar o arquear la espalda', excluyeExigencias: ['inclinacion_tronco'] },
      { id: 'girar', texto: 'Me cuesta girar el tronco', excluyeExigencias: ['rotacion_tronco'] },
    ],
  },
  {
    id: 'indicaciones', titulo: 'Indicaciones de un profesional',
    aviso: 'Marca solo lo que te haya indicado un profesional sanitario.',
    opciones: [
      { id: 'sin_impacto', texto: 'Evitar impactos o saltos', excluyeExigencias: ['impacto'] },
      { id: 'sin_carga', texto: 'No cargar peso ni usar resistencia', excluyeExigencias: ['carga_externa'] },
      { id: 'sin_esfuerzo', texto: 'Evitar esfuerzos que me agiten', excluyeExigencias: ['esfuerzo_cardio'] },
      { id: 'no_doblar_cadera', texto: 'No doblar mucho la cadera', excluyeExigencias: ['flexion_amplia_cadera'] },
      { id: 'no_doblar_rodilla', texto: 'No doblar mucho la rodilla', excluyeExigencias: ['flexion_profunda_rodilla'] },
      { id: 'no_inclinar_espalda', texto: 'No inclinar ni arquear la espalda', excluyeExigencias: ['inclinacion_tronco'] },
      { id: 'no_girar_espalda', texto: 'No girar la espalda', excluyeExigencias: ['rotacion_tronco'] },
      { id: 'otra_indicacion', texto: 'Tengo otra indicación que no aparece aquí', bloquea: true },
    ],
  },
];

export const RECURSOS = [
  { id: 'silla', texto: 'Una silla estable, sin ruedas' },
  { id: 'pared', texto: 'Un trozo de pared libre' },
  { id: 'cama', texto: 'Una cama' },
  { id: 'banda', texto: 'Una banda elástica' },
  { id: 'peso_ligero', texto: 'Un peso ligero, como una botella de agua llena' },
  { id: 'toalla', texto: 'Una toalla de mano' },
];

export const DURACIONES = [10, 15, 20];

// Texto comprensible de cada exigencia, para explicar exclusiones.
export const ETIQUETA_EXIGENCIA = {
  equilibrio_sin_apoyo: 'estar de pie sin sujetarse',
  una_pierna: 'apoyarse sobre una sola pierna',
  sentarse_levantarse: 'sentarse y levantarse',
  impacto: 'impactos o saltos',
  carga_externa: 'cargar peso o usar resistencia',
  esfuerzo_cardio: 'esfuerzos que agitan',
  brazo_sobre_hombro: 'subir el brazo por encima del hombro',
  mano_detras: 'llevar la mano detrás de la espalda o la cabeza',
  ambos_brazos: 'usar los dos brazos a la vez',
  agarre: 'cerrar la mano o sujetarse',
  peso_en_manos: 'apoyar peso en las manos',
  flexion_profunda_rodilla: 'doblar mucho la rodilla',
  flexion_amplia_cadera: 'doblar mucho la cadera',
  puntillas_talones: 'ponerse de puntillas o sobre los talones',
  inclinacion_tronco: 'inclinar o arquear la espalda',
  rotacion_tronco: 'girar el tronco',
};

export const ETIQUETA_POSICION = {
  sentado: 'en una silla', de_pie: 'de pie', tumbado: 'en la cama', suelo: 'en el suelo',
};

export const ETIQUETA_FASE = { calentamiento: 'Calentamiento', principal: 'Parte principal', calma: 'Vuelta a la calma' };

export const seccionPorId = (id) => SECCIONES.find((s) => s.id === id);
export const opcionDe = (seccionId, opcionId) => seccionPorId(seccionId)?.opciones.find((o) => o.id === opcionId);
