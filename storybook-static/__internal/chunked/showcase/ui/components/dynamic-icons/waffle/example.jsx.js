var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/dynamic-icons/waffle/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, a, c = t[0], l = t[1], i = t[2], f = 0, p = [];
      f < c.length;
      f++
    )
      (a = c[f]),
        Object.prototype.hasOwnProperty.call(o, a) && o[a] && p.push(o[a][0]),
        (o[a] = 0);
    for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
    for (s && s(t); p.length; ) p.shift()();
    return u.push.apply(u, i || []), n();
  }
  function n() {
    for (var e, t = 0; t < u.length; t++) {
      for (var n = u[t], r = !0, c = 1; c < n.length; c++) {
        var l = n[c];
        0 !== o[l] && (r = !1);
      }
      r && (u.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = {
      71: 0,
      6: 0,
      22: 0,
      73: 0,
      80: 0,
      93: 0,
      94: 0,
      96: 0,
      97: 0,
      98: 0,
      103: 0,
      104: 0,
      127: 0,
      131: 0,
      135: 0,
      140: 0,
      142: 0
    },
    u = [];
  function a(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = e),
    (a.c = r),
    (a.d = function(e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (a.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (a.t = function(e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          a.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (a.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return a.d(t, 'a', t), t;
    }),
    (a.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = '/assets/scripts/bundle/');
  var c = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    l = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var i = 0; i < c.length; i++) t(c[i]);
  var s = l;
  return u.push([153, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  153: function(e, t, n) {
    'use strict';
    n.r(t);
    var r = n(0),
      o = n.n(r),
      u = n(64);
    t.default = o.a.createElement(u.a, null);
  }
});
