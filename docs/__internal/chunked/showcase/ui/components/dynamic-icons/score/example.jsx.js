var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/dynamic-icons/score/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, s, i = t[0], u = t[1], l = t[2], p = 0, f = [];
      p < i.length;
      p++
    )
      (s = i[p]),
        Object.prototype.hasOwnProperty.call(a, s) && a[s] && f.push(a[s][0]),
        (a[s] = 0);
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
    for (c && c(t); f.length; ) f.shift()();
    return o.push.apply(o, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], r = !0, i = 1; i < n.length; i++) {
        var u = n[i];
        0 !== a[u] && (r = !1);
      }
      r && (o.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = {
      67: 0,
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
    o = [];
  function s(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.m = e),
    (s.c = r),
    (s.d = function(e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
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
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          s.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
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
  var i = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    u = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var l = 0; l < i.length; l++) t(i[l]);
  var c = u;
  return o.push([197, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  197: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'states', function() {
        return s;
      });
    var r = n(0),
      a = n.n(r),
      o = n(66);
    t.default = a.a.createElement(o.a, { 'data-slds-state': 'positive' });
    var s = [
      {
        id: 'positive',
        label: 'Positive',
        element: a.a.createElement(o.a, { 'data-slds-state': 'positive' })
      },
      {
        id: 'negative',
        label: 'Negative',
        element: a.a.createElement(o.a, { 'data-slds-state': 'negative' })
      }
    ];
  }
});
