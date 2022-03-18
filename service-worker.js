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
    "revision": "038ed0796b93c11a724215ae9dd0953b"
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
    "url": "assets/js/14.52299b24.js",
    "revision": "5c59700e731f64aee080e8bb56f8caae"
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
    "url": "assets/js/app.331065c2.js",
    "revision": "96a1ea694c22bc51ffc3912ec2da0857"
  },
  {
    "url": "categories/index.html",
    "revision": "994ffe662236f85fb6e08fe702d46f3a"
  },
  {
    "url": "deployment/index.html",
    "revision": "ad32e827a3306496c95757e63b436837"
  },
  {
    "url": "deployment/使用源码部署.html",
    "revision": "8d715ea96f3000207a1467c0d3635879"
  },
  {
    "url": "deployment/数据源准备.html",
    "revision": "ad4eb43fa96636aa11b3bf4309e93050"
  },
  {
    "url": "docs/index.html",
    "revision": "0456d784efa79cc7fea65079c2825d5e"
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
    "revision": "ceb22b1c4541818d3f65fdbac9946ddc"
  },
  {
    "url": "intro/index.html",
    "revision": "f51affb65001f7060d79af5523e5f377"
  },
  {
    "url": "tag/index.html",
    "revision": "065cf8d329377d7cbfce59d38de98a5f"
  },
  {
    "url": "timeline/index.html",
    "revision": "121d75d81373d5ab07197bd65b85bb25"
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
