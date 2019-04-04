self.addEventListener('install', function(e) {
    console.log('[Service Worker] installing service worker',e);
});

self.addEventListener('activate',function(e){
    console.log('[Service Worker] Activating service worker',e); 
    return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch event ',e); 
});
