var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/welcome-mat/info-only/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, u, l = t[0], c = t[1], i = t[2], s = 0, p = [];
      s < l.length;
      s++
    )
      (u = l[s]),
        Object.prototype.hasOwnProperty.call(o, u) && o[u] && p.push(o[u][0]),
        (o[u] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    for (f && f(t); p.length; ) p.shift()();
    return a.push.apply(a, i || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, l = 1; l < n.length; l++) {
        var c = n[l];
        0 !== o[c] && (r = !1);
      }
      r && (a.splice(t--, 1), (e = u((u.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = {
      162: 0,
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
  var l = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    c = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var i = 0; i < l.length; i++) t(l[i]);
  var f = c;
  return a.push([187, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  187: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'Context', function() {
        return c;
      }),
      n.d(t, 'examples', function() {
        return f;
      });
    var r = n(0),
      o = n.n(r),
      a = n(52),
      u = n(40),
      l = n(21),
      c = u.a,
      i = o.a.createElement(
        l.Backdrop,
        null,
        o.a.createElement(a.a, {
          content: function(e) {
            var t = e.labelId;
            return o.a.createElement(u.d, { labelId: t });
          },
          isInfoOnly: !0
        })
      );
    t.default = i;
    var f = [{ id: 'default', label: 'Default', demoStyles: u.e, element: i }];
  }
});
