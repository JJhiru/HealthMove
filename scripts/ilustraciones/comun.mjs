// Ayudantes para escribir las fichas de pose de public/js/figura.js.
// Ángulos (vista de lado, mirando a la derecha): 0° = hacia abajo, 90° = hacia delante, 180° = hacia arriba.
// «brazo»/«cadera» son el brazo y el muslo; «codo»/«rodilla», el antebrazo y la pierna (siempre absolutos).
// D es el lado cercano (oscuro) e I el lejano (claro). En la vista de frente, positivo = hacia fuera.

export const SILLA = { base: 'silla', apoyos: ['silla'] };

// Sentado de lado / de frente
export const S = (ini = {}, fin = {}, x = {}) => ({ ...SILLA, ini, fin, ...x });
export const SF = (ini = {}, fin = {}, x = {}) => ({ ...SILLA, vista: 'frente', ini, fin, ...x });

// De pie sujetándose al respaldo de una silla que está delante
const APOYO = { alcanza: { manoD: 'respaldo', manoI: 'respaldo' } };
export const PA = (ini = {}, fin = {}, x = {}) => ({ base: 'pie', apoyos: ['silla-delante'], ini: { ...APOYO, ...ini }, fin: { ...APOYO, ...fin }, ...x });
// De pie, de frente, con el respaldo de la silla delante y las manos en él
const APOYO_F = { alcanza: { manoD: 'respaldoFD', manoI: 'respaldoFI' } };
export const PAF = (ini = {}, fin = {}, x = {}) => ({ base: 'pie', vista: 'frente', apoyos: ['silla-frente'], codoHacia: 1, ini: { ...APOYO_F, ...ini }, fin: { ...APOYO_F, ...fin }, ...x });
export const P = (ini = {}, fin = {}, x = {}) => ({ base: 'pie', ini, fin, ...x });
export const PF = (ini = {}, fin = {}, x = {}) => ({ base: 'pie', vista: 'frente', ini, fin, ...x });
// De pie frente a la pared, con las manos en ella
export const PP = (ini = {}, fin = {}, x = {}) => ({ base: 'pie', apoyos: ['pared'], paredX: 300, ini: { alcanza: { manoD: 'pared', manoI: 'pared' }, ...ini }, fin: { alcanza: { manoD: 'pared', manoI: 'pared' }, ...fin }, ...x });

// Tumbado en la cama (de lado se ve el perfil; «planta» es la cama vista desde arriba)
export const C = (ini = {}, fin = {}, x = {}) => ({ base: 'cama-arriba', ini, fin, ...x });
export const CP = (ini = {}, fin = {}, x = {}) => ({ base: 'cama-planta', vista: 'frente', ini, fin, ...x });
export const CL = (ini = {}, fin = {}, x = {}) => ({ base: 'cama-lado', vista: 'frente', ini, fin, ...x });
// Suelo
export const SU = (ini = {}, fin = {}, x = {}) => ({ base: 'suelo-arriba', ini, fin, ...x });
export const SUP = (ini = {}, fin = {}, x = {}) => ({ base: 'suelo-planta', vista: 'frente', ini, fin, ...x });
export const SL = (ini = {}, fin = {}, x = {}) => ({ base: 'suelo-lado', vista: 'frente', ini, fin, ...x });
export const BA = (ini = {}, fin = {}, x = {}) => ({ base: 'boca-abajo', ini, fin, ...x });
export const SS = (ini = {}, fin = {}, x = {}) => ({ base: 'suelo-sentado', ini, fin, ...x });

// Detalles
export const MANO = (ini, fin, vistaMano = 'lado') => ({ detalle: 'mano', vistaMano, ini: { mano: ini }, fin: { mano: fin } });
export const PIE = (ini = {}, fin = {}, x = {}) => ({ detalle: 'pie', ini, fin, ...x });

// Posturas frecuentes
export const MANOS_CADERA = { brazoD: -25, codoD: 40, brazoI: -25, codoI: 40 };
export const SUJETA_SILLA = { brazoD: -8, codoD: -4, brazoI: -8, codoI: -4 };
export const BRAZOS_LADO = { brazoD: 0, codoD: 0, brazoI: 0, codoI: 0 };
export const RODILLAS = { caderaD: 40, rodillaD: -40, caderaI: 40, rodillaI: -40 };
export const MANOS_ABDOMEN = { brazoD: 25, codoD: 120, brazoI: 25, codoI: 120 };
export const PUNO_PECHO = { brazoD: 14, codoD: 145, brazoI: 10, codoI: 141 };
// Vista de frente, tumbado o desde arriba: rodillas dobladas (el muslo se ve corto)
export const RODILLAS_PLANTA = { cortoD: { muslo: 0.55, pierna: 0.55 }, cortoI: { muslo: 0.55, pierna: 0.55 } };
