const CACHE_NAME = "football v-2";
const urlsToCache = [
    "/",
    "/navbar.html",
    "/index.html",
    "/assets/css/materialize.min.css",
    "/assets/js/materialize.min.js",
    "/assets/js/navbar.js",
    "/assets/js/register-sw.js",
    "/assets/js/api.js",
    "/pages/home.html",
    "/pages/about.html",
    "/pages/contact.html",
    "/pages/favorites.html",
    "/pages/jadwal.html",
    "/manifest.json",
    "/assets/image/iconpwa.png",
    "/assets/image/192x192.png",
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then( cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", event => {
    const base_url = "https://api.football-data.org/v2/";

    if(event.request.url.indexOf(base_url) > -1){
        event.respondWith(
            caches.open(CACHE_NAME)
            .then(cache => {
                return fetch(event.request)
                .then(respon => {
                    cache.put(event.request.url, respon.clone());
                    return respon;
                })
            })
        );
    }else{
    event.respondWith(
        caches.
        match
        (event.request, {cacheName: CACHE_NAME})
            .then( response => {
                if (response) {
                    console.log(`ServiceWorker: Gunakan aset dari cache: `, response.url);
                    return response;
                }

                console.log(`ServiceWorker: Memuat aset dari server: `, event.request.url
                );
                return fetch(event.request);
            })
        );
    }
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then( cacheNames => {
            return Promise.all(
                cacheNames.map( cacheName => {
                    if (cacheName != CACHE_NAME) {
                        console.log('ServiceWorker: cache ${cacheName} dihapus');
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('push', function (event) {
    var body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = 'Pesan Push Tanpa Payload';
    }
    var options = {
        body: body,
        icon: 'assets/image/iconpwa.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };
    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});