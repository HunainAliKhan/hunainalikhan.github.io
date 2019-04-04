self.on('install',function(event){
    console.log('[Service Worker] installing service worker',event);
});

self.on('activate',function(event){
    console.log('[Service Worker] Activating service worker',event); 
    return self.clients.claim();
});

self.on('fetch',function(event){
    console.log('[Service Worker] fetching something.... ',event); 
    //respondWith expects a promise  because its an async code 
    //fetch returns a promise as soon as network request is done
    event.respondWith(fetch(event.request)); // allow us to override the data which get sent back
});