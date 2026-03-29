// Service Worker for H4CK3R_BOT PWA
const CACHE_NAME = 'hacker-bot-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/style.css',
    '/bot.js',
    '/manifest.json'
];

// Install Service Worker & cache assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('[SW] Caching assets...');
            return cache.addAll(ASSETS);
        })
    );
});

// Activate & clean old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
            )
        )
    );
});

// Fetch — serve from cache, fallback to network
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cached => {
            return cached || fetch(event.request);
        })
    );
});