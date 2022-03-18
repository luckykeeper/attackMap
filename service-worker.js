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
    "revision": "81d4b30d97215f051e961e543558e140"
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
    "url": "assets/js/10.f5498ad3.js",
    "revision": "507fb814762b54a0b12b8fd6489f12bc"
  },
  {
    "url": "assets/js/11.80fdd6e7.js",
    "revision": "9f74baf0b15059d779dc9473626dbeaa"
  },
  {
    "url": "assets/js/12.aab13852.js",
    "revision": "cac7cfd40736f95790700dc4420949ae"
  },
  {
    "url": "assets/js/13.75affd2b.js",
    "revision": "03eade0c00f36bc295f3da7c813626c0"
  },
  {
    "url": "assets/js/14.42456ad7.js",
    "revision": "ad1082eae5cde58af9a387564dba60b2"
  },
  {
    "url": "assets/js/15.f855ad64.js",
    "revision": "0b1add242ddd243aa460371e7cad4ac9"
  },
  {
    "url": "assets/js/16.931b4a68.js",
    "revision": "391a7cb9dd4199a09ed2d901a483ff4f"
  },
  {
    "url": "assets/js/17.aaeea89d.js",
    "revision": "a303ed156b33a0a5d39f90e39b316361"
  },
  {
    "url": "assets/js/18.15eabc35.js",
    "revision": "35546f6dd843df43dea364a2b4ffaf24"
  },
  {
    "url": "assets/js/19.ad78c08d.js",
    "revision": "487a3f5d78be67b0555f30e493c939c7"
  },
  {
    "url": "assets/js/2.3b0103f2.js",
    "revision": "681157989621860145cc4901087fb8f6"
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
    "url": "assets/js/app.eb7415b0.js",
    "revision": "6e6a3bd6bdd8e7d95915c4ef34e17550"
  },
  {
    "url": "categories/index.html",
    "revision": "0d1216dc2adb8dbd758259e3ad8642d2"
  },
  {
    "url": "deployment/index.html",
    "revision": "44a7dee9a88feb4b80d4512084e7ef84"
  },
  {
    "url": "deployment/使用Docker部署.html",
    "revision": "26713626966cc369b6d2fb54bcd496a0"
  },
  {
    "url": "deployment/使用源码部署.html",
    "revision": "143bfb885b5891aba9b89b0fefa9f835"
  },
  {
    "url": "deployment/数据源准备.html",
    "revision": "bc770cb59be4ede6c31233aafcacc6d5"
  },
  {
    "url": "docs/index.html",
    "revision": "0157f8df30be07e2ddece4caa50de3ab"
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
    "url": "images/header-tou.jpg",
    "revision": "c8729cf219f10862eb948b2c82896110"
  },
  {
    "url": "images/intro/README/发现新内容可用.png",
    "revision": "7e55bfbdccd891502dcc82c8cdddda80"
  },
  {
    "url": "index.html",
    "revision": "fbcfdf8c5d4ea4ce886eae417c7f33ac"
  },
  {
    "url": "intro/index.html",
    "revision": "524b40924fe00057f17d9974065326a6"
  },
  {
    "url": "tag/index.html",
    "revision": "8c116add2059ee7b51e005ccbc838648"
  },
  {
    "url": "timeline/index.html",
    "revision": "e71bcbd313035df19750f5d0b72ee21c"
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
