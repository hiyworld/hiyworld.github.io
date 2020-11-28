var cacheName = 'hello-pwa';
var filesToCache = [
  '/hiycard/',
  '/hiycard/index.html',
  '/hiycard/css/style.css',
  '/hiycard/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  console.log('Inside the install handler:', event);
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Inside the activate handler:', event);
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  console.log('Inside the fetch handler:', event);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
