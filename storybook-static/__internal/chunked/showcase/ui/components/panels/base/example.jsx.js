var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/panels/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, o, u = t[0], i = t[1], c = t[2], p = 0, f = [];
      p < u.length;
      p++
    )
      (o = u[p]),
        Object.prototype.hasOwnProperty.call(a, o) && a[o] && f.push(a[o][0]),
        (a[o] = 0);
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    for (s && s(t); f.length; ) f.shift()();
    return l.push.apply(l, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < l.length; t++) {
      for (var n = l[t], r = !0, u = 1; u < n.length; u++) {
        var i = n[u];
        0 !== a[i] && (r = !1);
      }
      r && (l.splice(t--, 1), (e = o((o.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = {
      111: 0,
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
    l = [];
  function o(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.m = e),
    (o.c = r),
    (o.d = function(e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (o.t = function(e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          o.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (o.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return o.d(t, 'a', t), t;
    }),
    (o.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = '/assets/scripts/bundle/');
  var u = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    i = u.push.bind(u);
  (u.push = t), (u = u.slice());
  for (var c = 0; c < u.length; c++) t(u[c]);
  var s = i;
  return l.push([188, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  188: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'examples', function() {
        return o;
      });
    var r = n(0),
      a = n.n(r),
      l = n(67);
    t.default = a.a.createElement(l.a, null);
    var o = [
      {
        id: 'with-centered-title',
        label: 'With Centered Title',
        element: a.a.createElement(l.a, { hasCenterTitle: !0 })
      },
      {
        id: 'with-truncated-title',
        label: 'With Truncated Title',
        element: a.a.createElement(l.a, {
          title: 'Panel Header with a really, really long name'
        })
      }
    ];
  }
});