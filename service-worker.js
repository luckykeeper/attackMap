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
    "revision": "5d69a69ece45619a235b85b96bf36fc6"
  },
  {
    "url": "assets/css/0.styles.9fe33833.css",
    "revision": "8cf22410b5ce18cf438ded177cbd4e80"
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
    "url": "assets/js/10.f9cdd85f.js",
    "revision": "a9ef75718b25b27d6da3c82e0759e437"
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
    "url": "assets/js/14.e59dc81e.js",
    "revision": "6244c2ee59a286c7d1986d6324160b08"
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
    "url": "assets/js/17.28a609a7.js",
    "revision": "5eaa22e456f08841969931466442c2ae"
  },
  {
    "url": "assets/js/18.467b3d48.js",
    "revision": "a26d7b28f9d0711c93a959d76c8c4499"
  },
  {
    "url": "assets/js/19.6d744cb5.js",
    "revision": "2428b0c642627f1658fc253ffe6543fd"
  },
  {
    "url": "assets/js/2.3b0103f2.js",
    "revision": "681157989621860145cc4901087fb8f6"
  },
  {
    "url": "assets/js/20.81c8c617.js",
    "revision": "30107cd716a9c101be29d38a4a912393"
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
    "url": "assets/js/app.8fcac251.js",
    "revision": "2db24f380074992b7274e0ce5124526c"
  },
  {
    "url": "categories/index.html",
    "revision": "cba4f626a9314a2659bba44fd2f5f57d"
  },
  {
    "url": "deployment/index.html",
    "revision": "8d2df7205f04b054839e1b0878fd95b5"
  },
  {
    "url": "deployment/使用Docker部署.html",
    "revision": "fb72238a259bd3525796df2356aae13c"
  },
  {
    "url": "deployment/使用源码部署.html",
    "revision": "772bbb3846a398e89063c38ac82fd960"
  },
  {
    "url": "deployment/数据源准备.html",
    "revision": "ce7d867f9d6c32870655a14fb4d0f30f"
  },
  {
    "url": "dev/index.html",
    "revision": "064a33c43d52229f356e5843377a5ee7"
  },
  {
    "url": "docs/index.html",
    "revision": "38aa683bc2822aa8d5d9a8aca3c778f2"
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
    "revision": "d110fc8cd5b1b8929f4873d8b48d43dd"
  },
  {
    "url": "intro/index.html",
    "revision": "fd0ba12afd134dd88050f6c61e0801b1"
  },
  {
    "url": "tag/index.html",
    "revision": "40a871af6aac4dd32def427ff16f31c6"
  },
  {
    "url": "timeline/index.html",
    "revision": "9e80aa2dd2f104ca54c8549f9982ddba"
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