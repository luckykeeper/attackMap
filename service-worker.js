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
    "revision": "7829d6a4e1749dd6f9797ba57f60301d"
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
    "url": "assets/js/10.f3e8b732.js",
    "revision": "6e9f53cdb68e363e62c917fa9734ad43"
  },
  {
    "url": "assets/js/11.d6e4fbdd.js",
    "revision": "6d0e87a2de61bb125b04202cfeee450c"
  },
  {
    "url": "assets/js/12.aab13852.js",
    "revision": "cac7cfd40736f95790700dc4420949ae"
  },
  {
    "url": "assets/js/13.e6e9731e.js",
    "revision": "85c4be60a6a752a4fd5a10aaf66dc9ae"
  },
  {
    "url": "assets/js/14.fffc7110.js",
    "revision": "1a0ac40ff3d5cfc8f5ea68d29978c8a2"
  },
  {
    "url": "assets/js/15.21c446da.js",
    "revision": "db948eef63c3067acc3e126c75a51370"
  },
  {
    "url": "assets/js/16.494db04b.js",
    "revision": "487dc789a798afb3509faf72ec8cd9ee"
  },
  {
    "url": "assets/js/17.36c44a1e.js",
    "revision": "9eb8b44007dfa1abca83a3d725f06422"
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
    "url": "assets/js/app.8bde26d6.js",
    "revision": "c681a5dd262918693cb9a9e879117365"
  },
  {
    "url": "categories/index.html",
    "revision": "7e28cc809ab1de72bb0f199c11d5efb2"
  },
  {
    "url": "deployment/index.html",
    "revision": "525a564146c01f5fad47e37ba42c19c5"
  },
  {
    "url": "deployment/数据源准备.html",
    "revision": "b1b8ac104ace5a0222370293a17c75b5"
  },
  {
    "url": "docs/index.html",
    "revision": "4793841aa329022a3981daf63a344521"
  },
  {
    "url": "images/attackmap_logo_small.png",
    "revision": "60537481c6e0583ce153f8251f20e2be"
  },
  {
    "url": "images/attackmap_logo.png",
    "revision": "db365422672c47d63cddb490ec141d05"
  },
  {
    "url": "images/intro/README/发现新内容可用.png",
    "revision": "7e55bfbdccd891502dcc82c8cdddda80"
  },
  {
    "url": "index.html",
    "revision": "0f1174b47bfeebfc1ffcb3c765d8bf45"
  },
  {
    "url": "intro/index.html",
    "revision": "9a6229c1bf623e7bb7f4531f2de6eeaa"
  },
  {
    "url": "tag/index.html",
    "revision": "0cfdfa8e38bbb6e326e4976deb5b2f8d"
  },
  {
    "url": "timeline/index.html",
    "revision": "431834fa6d2bfbc08cf0e3037898ed61"
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
