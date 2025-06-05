const CACHE_NAME = 'mariley-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './assets/css/styles.css',
  './assets/js/main.js',
  './assets/img/icon-192.png',
  './assets/img/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
