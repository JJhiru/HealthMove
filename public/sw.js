// ============================================================
//  Service worker de HealthMove: la app arranca desde la caché,
//  sin red, y se actualiza en segundo plano.
//  VERSION y PRECACHE los escribe `npm run version-sw`; no editar a mano.
// ============================================================
const VERSION = 'hm-24dadc8da1e5';
const PRECACHE = [
  './',
  'data/catalogo.json',
  'data/ilustraciones.json',
  'estilos.css',
  'fotos/bici-adaptada-parque-1280.webp',
  'fotos/bici-adaptada-parque-640.webp',
  'fotos/calma-te-1280.webp',
  'fotos/calma-te-640.webp',
  'fotos/cama-estiramiento-1280.webp',
  'fotos/cama-estiramiento-640.webp',
  'fotos/de-pie-estiramiento-acompanado-1280.webp',
  'fotos/de-pie-estiramiento-acompanado-640.webp',
  'fotos/portada-clase-sillas-1280.webp',
  'fotos/portada-clase-sillas-640.webp',
  'fotos/silla-brazos-abiertos-1280.webp',
  'fotos/silla-brazos-abiertos-640.webp',
  'fotos/silla-ruedas-jardin-1280.webp',
  'fotos/silla-ruedas-jardin-640.webp',
  'fuente/OFL.txt',
  'fuente/atkinson-hyperlegible-400.woff2',
  'fuente/atkinson-hyperlegible-700.woff2',
  'icon.svg',
  'iconos.svg',
  'icons/apple-touch-icon.png',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'index.html',
  'js/almacen.js',
  'js/app.js',
  'js/figura.js',
  'js/motor.js',
  'js/opciones.js',
  'js/perfil.js',
  'js/validacion.js',
  'manifest.webmanifest',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((claves) => Promise.all(claves.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

// Una respuesta solo sustituye a la de la caché si llegó entera y, si es el catálogo, si es JSON válido.
// Así una conexión cortada a medias nunca deja la app sin ejercicios.
function respuestaCompleta(respuesta, texto, esCatalogo) {
  const declarada = Number(respuesta.headers.get('content-length'));
  if (declarada && new TextEncoder().encode(texto).length !== declarada) return false;
  if (!esCatalogo) return texto.length > 0;
  try { return Array.isArray(JSON.parse(texto).ejercicios); } catch { return false; }
}

// Vuelve a pedir el recurso en segundo plano; si cambió, actualiza la caché y avisa a la página.
async function refrescar(peticion, textoServido, esCatalogo) {
  try {
    const nueva = await fetch(peticion, { cache: 'no-cache' });
    if (!nueva.ok) return;
    const texto = await nueva.clone().text();
    if (texto === textoServido || !respuestaCompleta(nueva, texto, esCatalogo)) return;
    const cache = await caches.open(VERSION);
    await cache.put(peticion, nueva);
    for (const cliente of await self.clients.matchAll()) cliente.postMessage('contenido-actualizado');
  } catch { /* sin red: se queda lo que hay */ }
}

self.addEventListener('fetch', (e) => {
  const { request } = e;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  const esPagina = request.mode === 'navigate';
  const esCatalogo = new URL(request.url).pathname.endsWith('/data/catalogo.json');
  const clave = esPagina ? new Request(new URL('./', self.registration.scope)) : request;

  // Siempre primero la caché: una red lenta no da error, se queda colgada.
  e.respondWith((async () => {
    const enCache = await caches.match(clave, { ignoreSearch: esPagina });
    if (enCache) {
      if (esPagina || esCatalogo) {
        // Leer el cuerpo ANTES de entregar la respuesta: después queda bloqueado.
        const texto = await enCache.clone().text();
        e.waitUntil(refrescar(clave, texto, esCatalogo));
      }
      return enCache;
    }
    const respuesta = await fetch(request);
    if (respuesta.ok) {
      const cache = await caches.open(VERSION);
      cache.put(clave, respuesta.clone());
    }
    return respuesta;
  })());
});
