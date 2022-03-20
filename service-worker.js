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
    "revision": "3151d05739b612c8361081d6c61a8754"
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
    "url": "assets/js/14.42456ad7.js",
    "revision": "ad1082eae5cde58af9a387564dba60b2"
  },
  {
    "url": "assets/js/15.f855ad64.js",
    "revision": "0b1add242ddd243aa460371e7cad4ac9"
  },
  {
    "url": "assets/js/16.ab77882b.js",
    "revision": "00e36646c8e49a95e7c7a1f7cf5b77b9"
  },
  {
    "url": "assets/js/17.245e114b.js",
    "revision": "9659f6a031519351d9622956d556aeee"
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
    "url": "assets/js/app.10925af0.js",
    "revision": "316a78543ca68773ef5d4edfcc8dc137"
  },
  {
    "url": "categories/index.html",
    "revision": "389f8de6555e62c69456eab9220a74bc"
  },
  {
    "url": "deployment/index.html",
    "revision": "a7cbb301bfa90b2cf57e68eb7a74c35f"
  },
  {
    "url": "deployment/使用Docker部署.html",
    "revision": "311df9509851b6ad9faafc37c0a19758"
  },
  {
    "url": "deployment/使用源码部署.html",
    "revision": "51d8a2c5a23b4bcd538980c2afb1cd38"
  },
  {
    "url": "deployment/数据源准备.html",
    "revision": "d9fc715b2daf06fcbafb3755103cd1fa"
  },
  {
    "url": "dev/index.html",
    "revision": "be9d5785e2a076c38ad004e0b83d87f0"
  },
  {
    "url": "docs/index.html",
    "revision": "5bbf3172c98b86c489766eb5efac7c91"
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
    "revision": "1acf9a98f9477f487ece870a6022881e"
  },
  {
    "url": "intro/index.html",
    "revision": "9bb00be259a0d72c6871b15a8299a7f5"
  },
  {
    "url": "tag/index.html",
    "revision": "339652faa114dfc523a2d8831ec7be48"
  },
  {
    "url": "timeline/index.html",
    "revision": "e9850422e349e320cd85c4dcd3d301b8"
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
