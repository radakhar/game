const CACHE_NAME = 'radakhar-game-v2';

const urlsToCache = [
  '/game/',
  '/game/index.html',
  '/game/style.css',
  '/game/script.js',
  '/game/manifest.json',
  'https://uploadkon.ir/uploads/c6c531_26Icon-اصلی.png',
  'https://uploadkon.ir/uploads/dcfa31_26Icon478.png',
  'https://uploadkon.ir/uploads/76a631_26Icon974.png',
  'https://uploadkon.ir/uploads/dbab31_26Screenshot12.jpg',
  'https://uploadkon.ir/uploads/08c431_26Screenshot23.jpg',
  'https://uploadkon.ir/uploads/876931_26Screenshot86.jpg'
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
