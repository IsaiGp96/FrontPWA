const CACHE_NAME = "V1_cache_PWA"

var urlsToCache = [
    './src/',
    './src/App.css',
    './src/index.css',
    './src/assets/icons/icon-512x512.png',
    './src/assets/icons/icon-384x384.png',
    './src/assets/icons/icon-192x192.png',
    './src/assets/icons/icon-152x152.png',
    './src/assets/icons/icon-144x144.png',
    './src/assets/icons/icon-128x128.png',
    './src/assets/icons/icon-96x96.png',
    './src/assets/icons/icon-72x72.png',
    './src/assets/icons/icon.png',
    './src/assets/icons/apple-touch-icon.png'
];


self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache)
                    .then(() => {
                        self.skipWaiting();
                    });
            })
            .catch(err => {
                console.log('No se a cargado la cache', err);
            })
    );
});

self.addEventListener('activate', e => {
    const cacheWhiteList = [CACHE_NAME];
    e.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheWhiteList.indexOf(cacheName) === -1) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                self.clients.claim();
            })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
            .then(res => {
                if (res) {
                    return res;
                }
                return fetch(e.request);
            })
    );
});