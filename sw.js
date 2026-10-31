/* Bizu do Operador SARP - funcionamento sem internet. Versão: 20261031-013118 */
var CACHE = "bizu-sarp-20261031-013118";
var CORE = ["./", "index.html", "manifest.json", "icon-192.png", "icon-512.png"];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k.indexOf("bizu-sarp-") === 0 && k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
function timeout(ms, p) { return new Promise(function (ok, no) { var t = setTimeout(function () { no(new Error("timeout")); }, ms); p.then(function (r) { clearTimeout(t); ok(r); }, function (er) { clearTimeout(t); no(er); }); }); }
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (req.mode === "navigate" && url.origin === location.origin) {
    /* página: tenta a versão nova (até 4 s); sem sinal, abre a guardada */
    e.respondWith(timeout(4000, fetch(req)).then(function (r) {
      var copy = r.clone(); caches.open(CACHE).then(function (c) { c.put("./", copy); }); return r;
    }).catch(function () { return caches.match("./").then(function (r) { return r || caches.match("index.html"); }); }));
    return;
  }
  /* demais arquivos (ícones, fontes): usa o guardado e atualiza por trás */
  e.respondWith(caches.match(req).then(function (hit) {
    var net = fetch(req).then(function (r) {
      if (r && (r.ok || r.type === "opaque")) { var copy = r.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
      return r;
    }).catch(function () { return hit; });
    return hit || net;
  }));
});
