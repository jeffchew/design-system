var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/builder-header/toolbar/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, a, i = t[0], l = t[1], c = t[2], p = 0, f = [];
      p < i.length;
      p++
    )
      (a = i[p]),
        Object.prototype.hasOwnProperty.call(o, a) && o[a] && f.push(o[a][0]),
        (o[a] = 0);
    for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
    for (s && s(t); f.length; ) f.shift()();
    return u.push.apply(u, c || []), r();
  }
  function r() {
    for (var e, t = 0; t < u.length; t++) {
      for (var r = u[t], n = !0, i = 1; i < r.length; i++) {
        var l = r[i];
        0 !== o[l] && (n = !1);
      }
      n && (u.splice(t--, 1), (e = a((a.s = r[0]))));
    }
    return e;
  }
  var n = {},
    o = {
      12: 0,
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
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, a), (r.l = !0), r.exports;
  }
  (a.m = e),
    (a.c = n),
    (a.d = function(e, t, r) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
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
      var r = Object.create(null);
      if (
        (a.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          a.d(
            r,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
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
  var i = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    l = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var c = 0; c < i.length; c++) t(i[c]);
  var s = l;
  return u.push([129, 0]), r();
})({
  0: function(e, t) {
    e.exports = React;
  },
  129: function(e, t, r) {
    'use strict';
    r.r(t),
      r.d(t, 'Context', function() {
        return a;
      });
    var n = r(0),
      o = r.n(n),
      u = r(73),
      a = function(e) {
        return o.a.createElement(
          'div',
          { style: { position: 'relative', height: '100px' } },
          e.children
        );
      };
    t.default = o.a.createElement(u.a, { showToolbar: !0 });
  }
});
