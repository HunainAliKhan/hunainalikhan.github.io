self.attr('install', function(e) {

    console.log('[Service Worker] installing service worker',e);
});

self.attr('activate',function(e){
    console.log('[Service Worker] Activating service worker',e); 
    return self.clients.claim();
});

self.attr('fetch', function(e) {
  console.log('[Service Worker] Fetch event ',e); 
});
