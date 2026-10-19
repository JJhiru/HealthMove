// ============================================================
//  Configuración de la revisión asistida por IA, solo desde
//  variables de entorno. No se lee ningún archivo .env.
//  Los límites son controles de esta herramienta, no límites de
//  facturación de DeepSeek.
// ============================================================
import { TARIFAS } from './tarifas.mjs';

export const LIMITES = {
  presupuestoUSD: { variable: 'HM_IA_PRESUPUESTO_USD', omision: 0.05, min: 0.001, max: 1, entero: false },
  maxSolicitudes: { variable: 'HM_IA_MAX_SOLICITUDES', omision: 3, min: 1, max: 10, entero: true },
  maxTokensEntrada: { variable: 'HM_IA_MAX_TOKENS_ENTRADA', omision: 30000, min: 1000, max: 200000, entero: true },
  maxTokensSalida: { variable: 'HM_IA_MAX_TOKENS_SALIDA', omision: 4000, min: 256, max: 16000, entero: true },
  timeoutMs: { variable: 'HM_IA_TIMEOUT_MS', omision: 120000, min: 5000, max: 600000, entero: true },
};
export const MODELO_POR_OMISION = 'deepseek-flash';

export class ConfiguracionInvalida extends Error {}

export function leerConfiguracion(entorno = process.env) {
  const c = {};
  for (const [clave, d] of Object.entries(LIMITES)) {
    const bruto = entorno[d.variable];
    if (bruto === undefined || bruto === '') { c[clave] = d.omision; continue; }
    const n = Number(bruto);
    if (!Number.isFinite(n) || (d.entero && !Number.isInteger(n)) || n < d.min || n > d.max) {
      throw new ConfiguracionInvalida(`${d.variable} debe ser ${d.entero ? 'un entero' : 'un número'} entre ${d.min} y ${d.max}`);
    }
    c[clave] = n;
  }
  const modelo = entorno.HM_IA_MODELO || MODELO_POR_OMISION;
  if (!/^[a-z0-9][a-z0-9.-]{0,63}$/.test(modelo)) throw new ConfiguracionInvalida('HM_IA_MODELO no tiene un formato válido');
  // Sin tarifa no se puede acotar el gasto: el modelo nuevo se añade antes a tarifas.mjs.
  if (!TARIFAS.modelos[modelo]) {
    throw new ConfiguracionInvalida(`HM_IA_MODELO=${modelo} no tiene tarifa en scripts/ia/tarifas.mjs (modelos con tarifa: ${Object.keys(TARIFAS.modelos).join(', ')})`);
  }
  c.modelo = modelo;
  return c;
}

// La clave se lee aparte y solo cuando se va a llamar a la API. Nunca se muestra.
export function leerClave(entorno = process.env) {
  const k = entorno.DEEPSEEK_API_KEY;
  if (!k) throw new ConfiguracionInvalida('falta DEEPSEEK_API_KEY en el entorno');
  if (/\s/.test(k) || k.length < 16 || k.length > 512) throw new ConfiguracionInvalida('DEEPSEEK_API_KEY no tiene un formato válido');
  return k;
}
