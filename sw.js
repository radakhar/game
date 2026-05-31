const CACHE_NAME = 'radakhar-game-v1';

const urlsToCache = [
  '/game/',
  '/game/index.html',
  '/game/style.css',
  '/game/script.js',
  '/game/manifest.json',
  '/game/icons/Icon-اصلی.png',
  '/game/icons/Icon478.png',
  '/game/icons/Icon974.png',
  '/game/screenshots/Screenshot12.png',
  '/game/screenshots/Screenshot23.png',
  '/game/screenshots/Screenshot86.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
