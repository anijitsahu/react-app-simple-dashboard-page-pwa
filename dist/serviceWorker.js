const cacheName="dashboard-page",itemToCache=["/","main.js","/images/1.jpg","/images/2.jpg","/images/3.jpg","/images/4.jpg","/images/5.jpg","/images/favicon.ico","/images/icons/icon-192x192.png","/images/icons/icon-512x512.png"];async function installEventHandler(){return(await caches.open(cacheName)).addAll(itemToCache)}self.addEventListener("install",(async e=>{e.waitUntil(installEventHandler())})),self.addEventListener("fetch",(e=>{console.log("url of the req",e.request.url),e.respondWith(caches.match(e.request).then((a=>a||fetch(e.request))))}));