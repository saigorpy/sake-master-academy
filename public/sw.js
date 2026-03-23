self.addEventListener('install', e => e.waitUntil(caches.open('sake-v1').then(c => c.addAll(['/','/tools','/quiz']))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
