var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/data-tables/hidden-header/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, o, u = t[0], c = t[1], i = t[2], p = 0, f = [];
      p < u.length;
      p++
    )
      (o = u[p]),
        Object.prototype.hasOwnProperty.call(a, o) && a[o] && f.push(a[o][0]),
        (a[o] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    for (s && s(t); f.length; ) f.shift()();
    return l.push.apply(l, i || []), n();
  }
  function n() {
    for (var e, t = 0; t < l.length; t++) {
      for (var n = l[t], r = !0, u = 1; u < n.length; u++) {
        var c = n[u];
        0 !== a[c] && (r = !1);
      }
      r && (l.splice(t--, 1), (e = o((o.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = {
      53: 0,
      6: 0,
      13: 0,
      14: 0,
      22: 0,
      24: 0,
      26: 0,
      36: 0,
      37: 0,
      56: 0,
      72: 0,
      73: 0,
      79: 0,
      80: 0,
      93: 0,
      94: 0,
      96: 0,
      97: 0,
      98: 0,
      103: 0,
      104: 0,
      112: 0,
      117: 0,
      118: 0,
      122: 0,
      124: 0,
      127: 0,
      131: 0,
      133: 0,
      135: 0,
      136: 0,
      137: 0,
      140: 0,
      142: 0,
      145: 0,
      146: 0,
      147: 0,
      150: 0,
      154: 0,
      157: 0
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
    c = u.push.bind(u);
  (u.push = t), (u = u.slice());
  for (var i = 0; i < u.length; i++) t(u[i]);
  var s = c;
  return l.push([217, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  217: function(e, t, n) {
    'use strict';
    n.r(t);
    var r = n(0),
      a = n.n(r),
      l = n(3);
    t.default = a.a.createElement(
      l.r,
      { isBordered: !0, hasCellBuffer: !0, hasHiddenHeader: !0, type: 'base' },
      a.a.createElement(
        l.p,
        { isHidden: !0 },
        a.a.createElement(
          l.q,
          null,
          a.a.createElement(
            l.c,
            null,
            a.a.createElement(l.b, { columnName: 'Opportunity Name' })
          )
        )
      ),
      a.a.createElement(
        l.n,
        null,
        a.a.createElement(
          l.o,
          null,
          a.a.createElement(
            l.s,
            { 'data-label': 'Opportunity Name', type: 'base' },
            a.a.createElement(l.i, {
              cellText: 'Cloudhub',
              cellLink: 'javascript:void(0);'
            })
          )
        ),
        a.a.createElement(
          l.o,
          null,
          a.a.createElement(
            l.s,
            { 'data-label': 'Opportunity Name', type: 'base' },
            a.a.createElement(l.i, {
              cellText: 'Cloudhub + Anypoint Connectors',
              cellLink: 'javascript:void(0);'
            })
          )
        )
      )
    );
  }
});
