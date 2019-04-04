self.addEventListener('install', function(e) {
 
    console.log('[Service Worker] installing service worker',event);
});

self.addEventListener('activate',function(event){
    console.log('[Service Worker] Activating service worker',event); 
    return self.clients.claim();
});

