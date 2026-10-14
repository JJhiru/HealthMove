// ============================================================
//  Service Worker — cachea el "shell" de la app para offline.
//  Estrategia: la API va siempre a la red; los archivos estáticos
//  se sirven del caché primero (cargan al instante y offline).
// ============================================================
const CACHE = 'mv10-v5';
const SHELL = ['/', '/index.html', '/app.js', '/styles.css', '/manifest.json', '/icon.svg'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  // Borra cachés viejos cuando subes la versión (v1 -> v2 ...)
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const { request } = e;

  // Las llamadas a la API no se cachean: siempre a la red.
  if (new URL(request.url).pathname.startsWith('/api/')) {
    return; // deja que el navegador la maneje normal
  }

  // Estáticos: caché primero, si no está, a la red.
  e.respondWith(
    caches.match(request).then((cached) => cached || fetch(request))
  );
});
