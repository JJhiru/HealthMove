// Fichas de pose: ejercicios de pie (y tres que la fuente plantea de pie pero se hacen sentado).
import { S, SF, P, PF, PA, PAF, PP, MANOS_CADERA } from './comun.mjs';

// Sentado en la silla de atrás → de pie: los pies no se mueven, así que la figura avanza (dx).
const SENTADO_EN_PIE = { caderaD: 90, rodillaD: -6, caderaI: 90, rodillaI: -6, tronco: 28 };
const DE_PIE = { caderaD: 0, rodillaD: 0, caderaI: 0, rodillaI: 0, tronco: 0, dx: 52 };
const CRUZADOS = { brazoD: 15, codoD: 160, brazoI: 11, codoI: 156 };

export const DE_PIE_FICHAS = {
  // --- Versiones de pie separadas de su versión sentada (C2, P23): mismos brazos, sin apoyo ---
  'estiramiento-hombro-cruzado-pie': PF({}, { alcanza: { manoD: 'hombroI', manoI: 'codoD' } }, { zona: ['hombro'] }),
  'estiramiento-triceps-pie': PF({}, { brazoD: 165, codoD: 205, alcanza: { manoI: 'codoD' } }, { zona: ['brazo'] }),
  'estiramiento-pecho-manos-lumbar-pie': P({ brazoD: -35, codoD: -5, brazoI: -35, codoI: -5 }, { brazoD: -55, codoD: 10, brazoI: -55, codoI: 10 }, { zona: ['pecho'] }),
  'estiramiento-pecho-manos-detras-pie': P({ brazoD: -20, codoD: -20, brazoI: -20, codoI: -20 }, { brazoD: -45, codoD: -45, brazoI: -45, codoI: -45 }, { zona: ['pecho'] }),
  'manos-espalda-codo-contrario-pie': P({}, { brazoD: -30, codoD: -90, brazoI: -30, codoI: -90, cortoD: { antebrazo: 0.35 }, cortoI: { antebrazo: 0.35 } }, { zona: ['hombro'] }),

  // --- Catálogo v0.2.0 ---
  'sentarse-levantarse': P({ ...SENTADO_EN_PIE, brazoD: 30, codoD: 60, brazoI: 26, codoI: 56 }, { ...DE_PIE, brazoD: 4, codoD: 4, brazoI: -4, codoI: -4 }, { apoyos: ['silla-detras'] }),
  'mini-sentadillas': PA({}, { caderaD: 35, rodillaD: -15, caderaI: 35, rodillaI: -15, tronco: 15, dx: -19 }),
  'elevacion-talones-apoyo': PA({}, { pieD: 38, pieI: 38 }, { flechas: ['talones'] }),
  'elevacion-talones-sin-apoyo': P({}, { pieD: 38, pieI: 38 }, { apoyos: ['silla-delante'], flechas: ['talones'] }),
  'elevacion-lateral-pierna': PAF({}, { caderaD: 28, rodillaD: 28 }),
  'extension-pierna-atras': PA({}, { caderaD: -25, rodillaD: -25 }),
  'flexiones-pared': PP({ inclina: 13 }, { inclina: 19 }, { paredX: 306 }),
  'equilibrio-una-pierna-pared': PP({ inclina: 4 }, { caderaI: 8, rodillaI: -80 }, { paredX: 262 }),
  'inclinacion-lateral-de-pie': PF({}, { tronco: -16, brazoD: 4, codoD: 4 }),
  'estiramiento-gemelo-pared': PP({ caderaD: -22, rodillaD: -22, caderaI: 25, rodillaI: -5, inclina: 8 }, {}, { zona: ['pantorrilla'], paredX: 290 }),
  'flexion-alterna-piernas-de-pie': PA({}, { caderaD: 70, rodillaD: -40 }),

  // --- Ampliación v0.3.0 ---
  'elevar-puntas-pies-apoyo': PA({}, { pieD: 125, pieI: 125 }),
  'flexion-rodilla-pie-apoyo': PA({}, { rodillaD: -95 }),
  'tandem-apoyo': P({ caderaD: 9, rodillaD: 9, caderaI: -9, rodillaI: -9, alcanza: { manoD: 'respaldo' } }, {}, { apoyos: ['silla-delante'] }),
  'de-pie-mano-preparada': P({ brazoD: 52, codoD: 52, caderaD: 4, caderaI: -4 }, {}, { apoyos: ['silla-delante'] }),
  'circulos-cadera-pie': PA({}, {}, { circulo: ['cadera'] }),
  'paso-atras-apoyo': PA({}, { caderaI: -25, rodillaI: -25 }),
  'marcha-sitio-apoyo': PA({}, { caderaD: 70, rodillaD: -40 }),
  'arquear-espalda-pie': P({ brazoD: -25, codoD: -20, brazoI: -25, codoI: -20 }, { tronco: -12 }, { apoyos: ['silla-delante'] }),
  'giro-tronco-pie': PF({ alcanza: { manoD: 'hombroI' }, brazoI: 32, codoI: 0 }, { giro: 45 }, { giro: true, apoyos: ['silla-lado'], sillaX: 245 }),
  'sentadilla-sin-apoyo': P({ brazoD: 4, codoD: 4 }, { caderaD: 60, rodillaD: -20, caderaI: 60, rodillaI: -20, tronco: 30, brazoD: 80, codoD: 80, brazoI: 76, codoI: 76, dx: -32 }, { apoyos: ['silla-detras'] }),
  'sentarse-levantarse-sin-manos': P({ ...SENTADO_EN_PIE, ...CRUZADOS }, DE_PIE, { apoyos: ['silla-detras'] }),
  'banda-sentarse-levantarse': P({ ...SENTADO_EN_PIE, brazoD: 4, codoD: 12 }, DE_PIE, { apoyos: ['silla-detras'], banda: [['manoD', 'pieD']] }),
  'puntillas-talones-apoyo': PA({ pieD: 38, pieI: 38 }, { pieD: 125, pieI: 125 }),
  'estiramiento-cuadriceps-pie': PA({ alcanza: { manoI: 'respaldo' } }, { rodillaD: -150, alcanza: { manoI: 'respaldo', manoD: 'pieD' } }, { toalla: [['manoD', 'pieD']], zona: ['muslo'] }),
  'codos-atras-sentado': S({ brazoD: 150, codoD: 260, brazoI: 146, codoI: 256 }, { brazoD: -35, codoD: 15, brazoI: -35, codoI: 15 }, { zona: ['pecho'] }),
  'pendulo-hombro': P({ tronco: 45, alcanza: { manoI: 'respaldo' }, brazoD: 0, codoD: 0 }, { brazoD: 24, codoD: 24, alcanza: { manoI: 'respaldo' } }, { apoyos: ['silla-delante'], circulo: ['manoD'] }),
  'remo-inclinado-botella': P({ tronco: 40, alcanza: { manoI: 'respaldo' }, brazoD: 0, codoD: 0 }, { brazoD: -40, codoD: 30, alcanza: { manoI: 'respaldo' } }, { apoyos: ['silla-delante'], botella: ['manoD'] }),
  'elevaciones-frontales-botella': P({ brazoD: 5, codoD: 5, brazoI: 5, codoI: 5 }, { brazoD: 95, codoD: 95 }, { botella: ['manoD'] }),
  'elevaciones-laterales-botella': PF({ brazoD: 6, codoD: 6, brazoI: 6, codoI: 6 }, { brazoD: 88, codoD: 88, brazoI: 88, codoI: 88 }, { botella: ['manoD', 'manoI'] }),
  'press-hombros-botella-pie': PF({ brazoD: 90, codoD: 175, brazoI: 90, codoI: 175 }, { brazoD: 165, codoD: 170, brazoI: 165, codoI: 170 }, { botella: ['manoD', 'manoI'] }),
  'banda-deslizar-brazos-pared': PP({ inclina: 8 }, { inclina: 10, alcanza: { manoD: 'paredAlta', manoI: 'paredAlta' } }, { banda: [['manoD', 'manoI']], paredX: 270 }),
  'banda-elevar-brazos-pie': PF({ brazoD: 8, codoD: 8, brazoI: 8, codoI: 8 }, { brazoD: 150, codoD: 150, brazoI: 150, codoI: 150 }, { banda: [['manoD', 'manoI']] }),
  'descanso-apoyado-pared': PP({ inclina: 14 }, {}, { paredX: 262, aire: 'sale', ini: { inclina: 14, alcanza: { manoD: 'paredAlta', manoI: 'paredAlta' } }, fin: {} }),
  'descanso-espalda-pared': P({ inclina: -7 }, {}, { apoyos: ['pared-detras'], paredX: 150, aire: 'sale' }),
  'abrir-pierna-brazo-pared': PF({ alcanza: { manoD: 'pared' } }, { caderaI: 25, rodillaI: 25, brazoI: 90, codoI: 90, alcanza: { manoD: 'pared' } }, { apoyos: ['pared-detras'], paredX: 118 }),
  'estiramiento-hombros-espalda-pared': PF({ brazoD: 90, codoD: 180, brazoI: 90, codoI: 180 }, { codoD: 0, codoI: 0 }, { apoyos: ['pared-fondo'], zona: ['hombro'] }),
  'subir-manos-pared': PP({ inclina: 8 }, { inclina: 10, alcanza: { manoD: 'paredAlta', manoI: 'paredAlta' } }, { paredX: 262 }),
  'toalla-detras-espalda-sentado': S({ brazoD: 170, codoD: -20, brazoI: -40, codoI: -10 }, { brazoD: 160, codoD: -30, brazoI: -30, codoI: -20 }, { toalla: [['manoD', 'manoI']], zona: ['hombro'] }),
  'deslizar-toalla-pared': P({ inclina: 4, alcanza: { manoD: 'pared' } }, { alcanza: { manoD: 'paredAlta' } }, { apoyos: ['pared'], paredX: 262, toalla: ['manoD'] }),
  'estiramiento-pecho-pared': PF({ alcanza: { manoD: 'pared' } }, { giro: 40, alcanza: { manoD: 'pared' } }, { apoyos: ['pared-detras'], paredX: 110, giro: true, zona: ['pecho'] }),
  'estiramiento-flexor-cadera-pie': PA({ caderaD: -22, rodillaD: -30, pieD: 30, caderaI: 18, rodillaI: 10 }, {}, { zona: ['muslo'] }),
  'estiramiento-aductores-pie': PAF({ caderaD: 22, rodillaD: 22, caderaI: 22, rodillaI: 22 }, { caderaD: 12, rodillaD: 12, caderaI: 30, rodillaI: 30, dx: -14 }, { zona: ['musloI'] }),
  'estiramiento-isquios-pie': PA({ caderaD: 24, rodillaD: 24, pieD: 160, caderaI: -12, rodillaI: -40, tronco: 22 }, {}, { zona: ['muslo'] }),
  'estiramiento-soleo-pared': PP({ caderaD: -12, rodillaD: -36, caderaI: 22, rodillaI: -8, inclina: 6 }, {}, { zona: ['pantorrilla'], paredX: 285 }),
  'estiramiento-lateral-muslo-pared': PF({ caderaD: -10, rodillaD: -10, brazoI: 40, codoI: 95 }, { dx: 10, tronco: -8, brazoI: 34, codoI: 90 }, { apoyos: ['pared'], paredX: 228, zona: ['musloI'] }),
  'isometrico-hombro-fuera-pared': PF({ brazoI: 4, codoI: 90 }, {}, { apoyos: ['pared'], paredX: 246, toalla: ['codoI'], zona: ['hombro'] }),
  'isometrico-hombro-dentro': SF({ brazoD: 4, codoD: -90, alcanza: { manoI: 'manoD' } }, {}, { toalla: ['codoD'], zona: ['hombro'] }),
};
