// CS50 AI citation: written with the help of Claude (Anthropic), an AI assistant. Requirements, design decisions and review: JJhiru.
// ============================================================
//  Cliente mínimo de la API de DeepSeek (formato OpenAI, sin streaming).
//  Documentación: https://api-docs.deepseek.com (consultada el 2026-10-18).
//
//  - La URL es fija: la clave no puede enviarse a otro servidor.
//  - El modo de razonamiento se desactiva (por omisión está activo y
//    multiplica los tokens de salida) y se pide JSON.
//  - Sin reintentos aquí: un error detiene la solicitud. Los reintentos
//    acotados, si los hay, los decide quien llama (auditoria-documental.mjs).
//  - La clave nunca aparece en errores ni en el valor devuelto.
//  - `transporte` permite pruebas sin red; por omisión es fetch.
// ============================================================
export const URL_API = 'https://api.deepseek.com/chat/completions';

const MENSAJES_HTTP = {
  400: 'formato de solicitud no válido',
  401: 'autenticación fallida: revisa DEEPSEEK_API_KEY',
  402: 'saldo insuficiente en la cuenta de DeepSeek',
  422: 'parámetros no válidos',
  429: 'límite de solicitudes de DeepSeek alcanzado',
  500: 'error del servidor de DeepSeek',
  503: 'servidor de DeepSeek sobrecargado',
};

export class ErrorDeepSeek extends Error {
  // codigo: parametros | timeout | red | http | malformada | incompleta.
  // enviada: la solicitud pudo llegar a DeepSeek y facturarse. uso: si la respuesta lo traía.
  constructor(mensaje, { codigo, estado = null, enviada = false, uso = null } = {}) {
    super(mensaje);
    this.codigo = codigo;
    this.estado = estado;
    this.enviada = enviada;
    this.uso = uso;
  }
}

// Texto que viene del servidor: sin la clave, sin caracteres de control y acortado.
const sanear = (texto, clave) => String(texto ?? '').split(clave).join('[clave]').replace(/[\x00-\x1f\x7f]+/g, ' ').slice(0, 200);
const entero = (n) => Number.isInteger(n) && n >= 0;

function leerUso(u) {
  if (!u || !entero(u.prompt_cache_hit_tokens) || !entero(u.prompt_cache_miss_tokens) || !entero(u.completion_tokens)) return null;
  return {
    aciertoCache: u.prompt_cache_hit_tokens,
    falloCache: u.prompt_cache_miss_tokens,
    salida: u.completion_tokens,
    razonamiento: entero(u.completion_tokens_details?.reasoning_tokens) ? u.completion_tokens_details.reasoning_tokens : 0,
  };
}

function comprobarParametros({ clave, modelo, mensajes, maxTokens, timeoutMs }) {
  const fallo = (m) => { throw new ErrorDeepSeek(m, { codigo: 'parametros' }); };
  if (typeof clave !== 'string' || !clave) fallo('falta la clave');
  if (typeof modelo !== 'string' || !modelo) fallo('falta el modelo');
  if (!Array.isArray(mensajes) || !mensajes.length) fallo('faltan los mensajes');
  for (const m of mensajes) {
    // assistant solo aparece al continuar una respuesta truncada (su texto literal anterior).
    if (!['system', 'user', 'assistant'].includes(m?.role) || typeof m.content !== 'string' || !m.content) fallo('cada mensaje necesita role system, user o assistant y un content no vacío');
  }
  if (!Number.isInteger(maxTokens) || maxTokens < 1 || maxTokens > 393216) fallo('maxTokens debe ser un entero entre 1 y 393216');
  if (!Number.isInteger(timeoutMs) || timeoutMs < 1) fallo('timeoutMs debe ser un entero positivo');
}

// Solicitud sin interpretar la respuesta: devuelve el cuerpo HTTP exacto (texto), el contenido
// del mensaje tal como llega (o null), el motivo de fin y el uso (o null). Solo lanza en errores
// de red, de tiempo o HTTP, o si el cuerpo no es JSON. Para conservar respuestas literales.
// formato: 'json' (response_format json_object) o 'texto'.
export async function completarCrudo(parametros, { transporte = globalThis.fetch } = {}) {
  comprobarParametros(parametros);
  const { clave, modelo, mensajes, maxTokens, timeoutMs, formato = 'json' } = parametros;
  if (!['json', 'texto'].includes(formato)) throw new ErrorDeepSeek('formato debe ser json o texto', { codigo: 'parametros' });
  const cuerpo = {
    model: modelo,
    messages: mensajes,
    thinking: { type: 'disabled' },
    response_format: { type: formato === 'json' ? 'json_object' : 'text' },
    max_tokens: maxTokens,
    temperature: 0,
    stream: false,
  };

  let respuesta;
  try {
    respuesta = await transporte(URL_API, {
      method: 'POST',
      headers: { Authorization: `Bearer ${clave}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(cuerpo),
      signal: AbortSignal.timeout(timeoutMs),
    });
  } catch (e) {
    // No se reenvía el error original: podría incluir la petición.
    if (e?.name === 'TimeoutError' || e?.name === 'AbortError') {
      throw new ErrorDeepSeek(`sin respuesta en ${timeoutMs} ms`, { codigo: 'timeout', enviada: true });
    }
    throw new ErrorDeepSeek('fallo de red al contactar con DeepSeek', { codigo: 'red', enviada: true });
  }

  if (!respuesta.ok) {
    let detalle = '';
    try { detalle = (await respuesta.json())?.error?.message ?? ''; } catch { /* cuerpo sin JSON */ }
    const texto = MENSAJES_HTTP[respuesta.status] ?? 'error inesperado';
    throw new ErrorDeepSeek(`HTTP ${respuesta.status}: ${texto}${detalle ? ` (${sanear(detalle, clave)})` : ''}`, {
      codigo: 'http', estado: respuesta.status, enviada: true,
    });
  }

  // Se lee el texto exacto del cuerpo antes de interpretarlo (los transportes simulados pueden ofrecer solo json()).
  let cuerpoTexto;
  try { cuerpoTexto = typeof respuesta.text === 'function' ? await respuesta.text() : JSON.stringify(await respuesta.json()); } catch {
    throw new ErrorDeepSeek('no se pudo leer el cuerpo de la respuesta', { codigo: 'malformada', enviada: true });
  }
  let datos;
  try { datos = JSON.parse(cuerpoTexto); } catch {
    throw new ErrorDeepSeek('la respuesta no es JSON', { codigo: 'malformada', enviada: true });
  }
  const opcion = datos?.choices?.[0];
  return {
    cuerpoTexto,
    contenido: typeof opcion?.message?.content === 'string' ? opcion.message.content : null,
    finishReason: typeof opcion?.finish_reason === 'string' ? sanear(opcion.finish_reason, clave) : null,
    uso: leerUso(datos?.usage),
    id: typeof datos?.id === 'string' ? sanear(datos.id, clave) : null,
    modelo: typeof datos?.model === 'string' ? sanear(datos.model, clave) : null,
  };
}

// Solicitud JSON validada: una respuesta sin uso, incompleta o vacía es un error, nunca un resultado.
export async function completar(parametros, opciones = {}) {
  const r = await completarCrudo({ ...parametros, formato: 'json' }, opciones);
  if (!r.uso) throw new ErrorDeepSeek('la respuesta no trae el uso de tokens', { codigo: 'malformada', enviada: true });
  if (r.finishReason !== 'stop') {
    throw new ErrorDeepSeek(`respuesta incompleta (finish_reason: ${r.finishReason || 'ausente'})`, { codigo: 'incompleta', enviada: true, uso: r.uso });
  }
  // DeepSeek avisa de que el modo JSON puede devolver contenido vacío.
  if (typeof r.contenido !== 'string' || !r.contenido.trim()) {
    throw new ErrorDeepSeek('la respuesta no tiene contenido', { codigo: 'malformada', enviada: true, uso: r.uso });
  }
  return { contenido: r.contenido, id: r.id, modelo: r.modelo, uso: r.uso };
}
