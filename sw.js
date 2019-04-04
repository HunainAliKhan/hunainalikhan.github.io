self.on('install',function(event){
    console.log('[Service Worker] installing service worker',event);
});

self.on('activate',function(event){
    console.log('[Service Worker] Activating service worker',event); 
    return self.clients.claim();
});

