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
    "revision": "10cfed338a05e8dbefa6c94e3477b8bf"
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
    "url": "assets/js/1.5d85aef4.js",
    "revision": "5cc05504593a1f161e527783cfc6cffc"
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
    "url": "assets/js/2.0b3e1a47.js",
    "revision": "8fc9d03bf72d3e026541463e2975f6fe"
  },
  {
    "url": "assets/js/4.3106a90a.js",
    "revision": "409fcb35002e42def25cf98586014688"
  },
  {
    "url": "assets/js/5.3b91379a.js",
    "revision": "5bce9a0508368fb3d0fc900aef2911de"
  },
  {
    "url": "assets/js/6.7a055ba1.js",
    "revision": "2cfd4f5984aaeea22afc10fe56649331"
  },
  {
    "url": "assets/js/7.d1776db1.js",
    "revision": "1f70fbff27714f3ec290775e7a367147"
  },
  {
    "url": "assets/js/8.978d59b1.js",
    "revision": "dd94bc5e216c7a98e0ca398eac8bc33b"
  },
  {
    "url": "assets/js/9.24cc95ab.js",
    "revision": "7ac28b0ea24bbea2473cbfa9dd52fd00"
  },
  {
    "url": "assets/js/app.334e3c71.js",
    "revision": "09456837018045bb18629ea78ed8c1c7"
  },
  {
    "url": "categories/index.html",
    "revision": "ed136524d99f770be267fe17b6887ba1"
  },
  {
    "url": "docs/index.html",
    "revision": "65a8bdc175d23e93377814f0be4fbe63"
  },
  {
    "url": "index.html",
    "revision": "2f07d567d61ae2e53eacf84f37faf5e4"
  },
  {
    "url": "tag/index.html",
    "revision": "c77fdddbcb60252858a0f845ecc4ef8b"
  },
  {
    "url": "timeline/index.html",
    "revision": "420c1dd0b672c0e1d11e7f1c06291dbb"
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
