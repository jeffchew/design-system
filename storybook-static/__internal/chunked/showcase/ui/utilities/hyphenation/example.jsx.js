var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/utilities/hyphenation/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, u, i = t[0], l = t[1], s = t[2], p = 0, f = [];
      p < i.length;
      p++
    )
      (u = i[p]),
        Object.prototype.hasOwnProperty.call(o, u) && o[u] && f.push(o[u][0]),
        (o[u] = 0);
    for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
    for (c && c(t); f.length; ) f.shift()();
    return a.push.apply(a, s || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, i = 1; i < n.length; i++) {
        var l = n[i];
        0 !== o[l] && (r = !1);
      }
      r && (a.splice(t--, 1), (e = u((u.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = {
      172: 0,
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
  function u(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, u), (n.l = !0), n.exports;
  }
  (u.m = e),
    (u.c = r),
    (u.d = function(e, t, n) {
      u.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (u.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (u.t = function(e, t) {
      if ((1 & t && (e = u(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (u.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          u.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (u.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return u.d(t, 'a', t), t;
    }),
    (u.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (u.p = '/assets/scripts/bundle/');
  var i = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    l = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var s = 0; s < i.length; s++) t(i[s]);
  var c = l;
  return a.push([159, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  159: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'examples', function() {
        return o;
      });
    var r = n(0),
      o = [
        {
          id: 'default',
          label: 'Hyphenate',
          element: n
            .n(r)
            .a.createElement(
              'p',
              { className: 'slds-hyphenate' },
              'A long heading might be supercalifragilisticexpiallidocious.'
            )
        }
      ];
  }
});
