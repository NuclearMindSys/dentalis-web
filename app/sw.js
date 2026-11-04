// [WEB 2026-11-04] Dentalis AI app-shell service worker.
// Flutter 3.47 ships only a self-uninstalling stub (no fetch handler, no
// precache), so every visit re-downloaded ~25 MB of dart.js/canvaskit/fonts.
// This SW restores proper caching:
//   - cache-first   : immutable assets (canvaskit/, fonts, icons, images)
//   - SWR           : main.dart.js, flutter_bootstrap.js, other app assets
//   - network-first : version.json + env assets (config must be fresh)
// Cross-origin requests (gstatic canvaskit, CDN fonts) are left to the
// browser HTTP cache — they already send immutable headers.

const SHELL_CACHE = 'dentalis-shell-v1';
const RUNTIME_CACHE = 'dentalis-runtime-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(Promise.resolve());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // Drop caches from older SW versions.
      const keep = new Set([SHELL_CACHE, RUNTIME_CACHE]);
      const names = await caches.keys();
      await Promise.all(
        names.filter((n) => !keep.has(n)).map((n) => caches.delete(n)),
      );
      await self.clients.claim();
    })(),
  );
});

function isImmutable(url) {
  return (
    url.pathname.includes('/canvaskit/') ||
    url.pathname.includes('/icons/') ||
    /\.(otf|ttf|woff2?|png|jpe?g|svg|webp)$/i.test(url.pathname)
  );
}

function isNetworkFirst(url) {
  return (
    url.pathname.endsWith('version.json') ||
    /assets\/env(\.production)?$/.test(url.pathname) ||
    url.pathname.endsWith('sw.js')
  );
}

async function cacheFirst(request) {
  const cache = await caches.open(SHELL_CACHE);
  const hit = await cache.match(request);
  if (hit) return hit;
  const resp = await fetch(request);
  if (resp && resp.ok) cache.put(request, resp.clone());
  return resp;
}

async function staleWhileRevalidate(request, event) {
  const cache = await caches.open(RUNTIME_CACHE);
  const hit = await cache.match(request);
  const network = fetch(request)
    .then((resp) => {
      if (resp && resp.ok) cache.put(request, resp.clone());
      return resp;
    })
    .catch(() => null);
  if (hit) {
    event.waitUntil(network);
    return hit;
  }
  const resp = await network;
  return resp || new Response('', { status: 504 });
}

async function networkFirst(request, cache) {
  try {
    const resp = await fetch(request, { cache: 'no-store' });
    if (resp && resp.ok) {
      const c = await caches.open(RUNTIME_CACHE);
      c.put(request, resp.clone());
    }
    return resp;
  } catch (e) {
    const hit = await cache.match(request);
    if (hit) return hit;
    throw e;
  }
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  // Never intercept the OAuth/edge-function round-trips.
  if (!url.pathname.startsWith(self.registration.scope)) return;

  if (isNetworkFirst(url)) {
    event.respondWith(networkFirst(req, RUNTIME_CACHE));
    return;
  }
  if (isImmutable(url)) {
    event.respondWith(cacheFirst(req));
    return;
  }
  event.respondWith(staleWhileRevalidate(req, event));
});

// When a new deployment lands, the revalidated main.dart.js replaces the
// cached one via SWR; the next reload picks it up. Purge runtime caches on
// message so the login page can force a clean state after an update.
self.addEventListener('message', (event) => {
  if (event.data === 'dentalis-purge-runtime') {
    event.waitUntil(caches.delete(RUNTIME_CACHE));
  }
});
