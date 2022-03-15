/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b09c7243a7cde008ee86cd9f1011f84b"
  },
  {
    "url": "assets/css/0.styles.c44ba411.css",
    "revision": "e0eeb91ecbdea55b1d3cc5d38255b75d"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/404.ec305c62.png",
    "revision": "ec305c627e94c9ec02eaae3ef7ff8c66"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/web404.f84b222b.png",
    "revision": "f84b222bd53bbc0b9b63b6812886979a"
  },
  {
    "url": "assets/js/1.dd12680e.js",
    "revision": "3488d4dd925409baadd0a7ba282b695c"
  },
  {
    "url": "assets/js/10.1aad5237.js",
    "revision": "d323c2609461c5dfb70089784af16829"
  },
  {
    "url": "assets/js/11.c9b47e25.js",
    "revision": "0a149b9ac36ce98cd1cfaf37539807c9"
  },
  {
    "url": "assets/js/12.aab13852.js",
    "revision": "cac7cfd40736f95790700dc4420949ae"
  },
  {
    "url": "assets/js/13.df354372.js",
    "revision": "aa99907201614c4f27c76882141b7bcd"
  },
  {
    "url": "assets/js/14.29dd17b1.js",
    "revision": "f498a332a94ba97aef7ea8066c39f8a1"
  },
  {
    "url": "assets/js/2.f9c52a5c.js",
    "revision": "1379fb44cdb8d7658e38013e7f6e6879"
  },
  {
    "url": "assets/js/4.3e917b5e.js",
    "revision": "4661a117400a8e6b67d7f3ba5e9e081c"
  },
  {
    "url": "assets/js/5.5e2bdd6d.js",
    "revision": "01d37fd68c09f83fd8882d8395713efa"
  },
  {
    "url": "assets/js/6.ba9927df.js",
    "revision": "ff0e47afee12f47bfbc6130148c7fef0"
  },
  {
    "url": "assets/js/7.1c3794f0.js",
    "revision": "5fd8245e604b3f84f6810711de1ae227"
  },
  {
    "url": "assets/js/8.978d59b1.js",
    "revision": "dd94bc5e216c7a98e0ca398eac8bc33b"
  },
  {
    "url": "assets/js/9.13b5d62a.js",
    "revision": "663ed3f22e8e77abcd7e784c067d327d"
  },
  {
    "url": "assets/js/app.387f4bee.js",
    "revision": "0662bf5f3d22c085bf31ba33b0e0d7b5"
  },
  {
    "url": "categories/index.html",
    "revision": "1b0a076a6d4aebcbedf3c66390f9d08d"
  },
  {
    "url": "docs/index.html",
    "revision": "45760d96ba670d0853f5630e1b64b154"
  },
  {
    "url": "index.html",
    "revision": "0eaccd9e4482c25ecb3f44dbfd9de72f"
  },
  {
    "url": "tag/index.html",
    "revision": "7dff43ac7139e03bc176b3c80c839841"
  },
  {
    "url": "timeline/index.html",
    "revision": "b82fbf8aa37a0436d7686b3bdfaa7c17"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
