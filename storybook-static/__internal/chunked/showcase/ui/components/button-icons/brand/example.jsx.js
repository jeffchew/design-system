var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/button-icons/brand/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, s, u = t[0], c = t[1], i = t[2], f = 0, p = [];
      f < u.length;
      f++
    )
      (s = u[f]),
        Object.prototype.hasOwnProperty.call(o, s) && o[s] && p.push(o[s][0]),
        (o[s] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    for (l && l(t); p.length; ) p.shift()();
    return a.push.apply(a, i || []), r();
  }
  function r() {
    for (var e, t = 0; t < a.length; t++) {
      for (var r = a[t], n = !0, u = 1; u < r.length; u++) {
        var c = r[u];
        0 !== o[c] && (n = !1);
      }
      n && (a.splice(t--, 1), (e = s((s.s = r[0]))));
    }
    return e;
  }
  var n = {},
    o = {
      20: 0,
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
    a = [];
  function s(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, s), (r.l = !0), r.exports;
  }
  (s.m = e),
    (s.c = n),
    (s.d = function(e, t, r) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (s.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (s.t = function(e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (s.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          s.d(
            r,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
    }),
    (s.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return s.d(t, 'a', t), t;
    }),
    (s.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = '/assets/scripts/bundle/');
  var u = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    c = u.push.bind(u);
  (u.push = t), (u = u.slice());
  for (var i = 0; i < u.length; i++) t(u[i]);
  var l = c;
  return a.push([202, 0]), r();
})({
  0: function(e, t) {
    e.exports = React;
  },
  202: function(e, t, r) {
    'use strict';
    r.r(t),
      r.d(t, 'states', function() {
        return s;
      });
    var n = r(0),
      o = r.n(n),
      a = r(4);
    t.default = o.a.createElement(a.b, {
      assistiveText: 'Search',
      title: 'Search',
      theme: 'brand',
      symbol: 'search'
    });
    var s = [
      {
        id: 'disabled',
        label: 'Disabled',
        element: o.a.createElement(a.b, {
          assistiveText: 'Search',
          title: 'Search',
          theme: 'brand',
          symbol: 'search',
          disabled: !0
        })
      }
    ];
  }
});
