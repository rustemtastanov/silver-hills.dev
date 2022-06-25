const staticCacheName = "static-silverhills";

const assets = [
	"/ru/",
	"/css/*.css",
	"/fonts/*.*",
	"/img/**/*.*",
	"/js/*.js",
	"/ru/index.html",
];

// событие install
self.addEventListener("install", evt => {
	evt.waitUntil(
		caches.open(staticCacheName).then((cache) => {
			cache.addAll(assets);
		})
	);
});

// событие activate
self.addEventListener("activate", evt => {
	evt.waitUntil(
		caches.keys().then(keys => {
			return Promise.all(keys
				.filter(key => key !== staticCacheName)
				.map(key => caches.delete(key))
			);
		})
	);
});

// событие fetch
self.addEventListener("fetch", evt => {
	evt.respondWith(
		caches.match(evt.request).then(cacheRes => {
			return cacheRes || fetch(evt.request);
		})
	);
});