const CACHE_NAME = 'radakhar-game-v1';

const urlsToCache = [
  '/game/',
  '/game/index.html',
  '/game/style.css',
  '/game/script.js',
  '/game/manifest.json',
  'https://uploadkon.ir/uploads/83fc31_26Icon-اصلی.png',
  'https://uploadkon.ir/uploads/12dc31_26Icon478.png',
  'https://uploadkon.ir/uploads/51e931_26Icon974.png',
  'https://uploadkon.ir/uploads/109c31_26Screenshot2.jpg',
  'https://uploadkon.ir/uploads/6d0331_26Screenshot3.jpg',
  'https://uploadkon.ir/uploads/c4fe31_26Screenshot6.jpg'
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
      .then(response => response || fetch(event.request))
  );
});
