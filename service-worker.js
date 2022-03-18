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
    "revision": "66a698ec4f680856ecd34df67b1ebfc6"
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
    "url": "assets/js/10.d6396a1d.js",
    "revision": "f285a45c948acc9a7135c57fd745a064"
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
    "url": "assets/js/13.e6e9731e.js",
    "revision": "85c4be60a6a752a4fd5a10aaf66dc9ae"
  },
  {
    "url": "assets/js/14.6db178d9.js",
    "revision": "b10d9d5f0fdae92dc025a1b044fbbe87"
  },
  {
    "url": "assets/js/15.76ab6c9d.js",
    "revision": "a73fcb56e7afa975efe769edbb189176"
  },
  {
    "url": "assets/js/16.9ba42fcc.js",
    "revision": "25e0ccdaa8170f4771ea1b148f6c6b07"
  },
  {
    "url": "assets/js/17.1de8abc6.js",
    "revision": "fbff1717e5def051a804b180a1b24520"
  },
  {
    "url": "assets/js/18.a62aef46.js",
    "revision": "bfc73edcabe1bcb9793464536cf86975"
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
    "url": "assets/js/app.43231be8.js",
    "revision": "18d85fcff0f7982ae48f46ca995b13b6"
  },
  {
    "url": "categories/index.html",
    "revision": "a9da495af5c17be1aaefbda7c9ee35aa"
  },
  {
    "url": "deployment/index.html",
    "revision": "ae3085eb2828e530a67d10f3a7d03f7e"
  },
  {
    "url": "deployment/使用源码部署.html",
    "revision": "30e5a42d5b6bfb444f7fc01c1070a306"
  },
  {
    "url": "deployment/数据源准备.html",
    "revision": "2b3c7b7c479852de2e1207238bb8106c"
  },
  {
    "url": "docs/index.html",
    "revision": "86f12de402ce0575c20fa6f41c99c864"
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
    "revision": "8ad0d6efeaec41d1dd1f7dc5f1ea4f51"
  },
  {
    "url": "intro/index.html",
    "revision": "1e86d09c9531b6f4ec4675c444098254"
  },
  {
    "url": "tag/index.html",
    "revision": "74471b280b1cbca7129bf74382dfd735"
  },
  {
    "url": "timeline/index.html",
    "revision": "18cb23ea0591d9deec84ca90af193712"
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
