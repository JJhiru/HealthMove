// ============================================================
//  Tarifas de DeepSeek en USD por millón de tokens.
//  Copiadas de la documentación oficial el día indicado; DeepSeek
//  puede cambiarlas. Revísalas antes de confiar en las estimaciones.
//
//  Se usa la tarifa de hora punta, la más alta, como cota superior
//  del gasto. En horario valle DeepSeek cobra la mitad.
// ============================================================
export const TARIFAS = {
  verificadas: '2026-10-18',
  fuente: 'https://api-docs.deepseek.com/quick_start/pricing',
  modelos: {
    'deepseek-flash': { entradaCache: 0.006, entrada: 0.3, salida: 1.2 },
    'deepseek-v4-pro': { entradaCache: 0.044, entrada: 1.32, salida: 3.96 },
  },
};
