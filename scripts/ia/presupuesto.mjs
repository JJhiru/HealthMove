// CS50 AI citation: written with the help of Claude (Anthropic), an AI assistant. Requirements, design decisions and review: JJhiru.
// ============================================================
//  Control local del gasto de una ejecución. No conoce el saldo de
//  la cuenta ni lo limita: solo impide que esta herramienta envíe
//  solicitudes que superen los límites configurados.
//
//  Antes de enviar se autoriza la cota superior del coste: tokens de
//  entrada estimados + máximo de salida, a tarifa punta. El coste
//  exacto solo se conoce después, por el campo `usage` de la API.
// ============================================================
import { TARIFAS } from './tarifas.mjs';

// DeepSeek indica ≈0,3 tokens por carácter en inglés. Se usa 0,5 como
// margen para el español, la puntuación y el formato markdown.
export const TOKENS_POR_CARACTER = 0.5;
export const estimarTokens = (texto) => Math.ceil(texto.length * TOKENS_POR_CARACTER);

const tarifa = (modelo) => {
  const t = TARIFAS.modelos[modelo];
  if (!t) throw new Error(`sin tarifa para ${modelo}`);
  return t;
};
const porMillon = (tokens, precio) => (tokens * precio) / 1e6;

export const costeMaximo = (modelo, tokensEntrada, maxTokensSalida) =>
  porMillon(tokensEntrada, tarifa(modelo).entrada) + porMillon(maxTokensSalida, tarifa(modelo).salida);

// Coste según el uso que devuelve la API, a tarifa punta (cota superior).
export function costeReal(modelo, uso) {
  const t = tarifa(modelo);
  return porMillon(uso.aciertoCache, t.entradaCache) + porMillon(uso.falloCache, t.entrada) + porMillon(uso.salida, t.salida);
}

export class LimiteAlcanzado extends Error {}

export class Presupuesto {
  constructor(config) {
    this.config = config;
    this.solicitudes = 0;
    this.gastado = 0;
  }

  // Lanza LimiteAlcanzado si la solicitud no cabe; si cabe, la cuenta y devuelve su coste máximo.
  autorizar(tokensEntrada) {
    const c = this.config;
    if (this.solicitudes >= c.maxSolicitudes) throw new LimiteAlcanzado(`máximo de ${c.maxSolicitudes} solicitud(es) por ejecución`);
    if (tokensEntrada > c.maxTokensEntrada) throw new LimiteAlcanzado(`la entrada estimada (${tokensEntrada} tokens) supera HM_IA_MAX_TOKENS_ENTRADA (${c.maxTokensEntrada})`);
    const maximo = costeMaximo(c.modelo, tokensEntrada, c.maxTokensSalida);
    if (this.gastado + maximo > c.presupuestoUSD) {
      throw new LimiteAlcanzado(`el coste máximo de la solicitud (${usd(maximo)}) supera lo que queda del presupuesto (${usd(c.presupuestoUSD - this.gastado)} de ${usd(c.presupuestoUSD)})`);
    }
    this.solicitudes++;
    return maximo;
  }

  registrar(uso) {
    const coste = costeReal(this.config.modelo, uso);
    this.gastado += coste;
    return coste;
  }

  // La solicitud salió pero no hay `usage` (timeout, error de red): se cuenta el máximo autorizado.
  registrarSinUso(maximo) {
    this.gastado += maximo;
    return maximo;
  }
}

export const usd = (n) => `${n.toFixed(4)} USD`;
