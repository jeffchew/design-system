var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/color-picker/custom-only/example.jsx.js'
] = (function(e) {
  function r(r) {
    for (
      var n, u, c = r[0], i = r[1], l = r[2], p = 0, f = [];
      p < c.length;
      p++
    )
      (u = c[p]),
        Object.prototype.hasOwnProperty.call(o, u) && o[u] && f.push(o[u][0]),
        (o[u] = 0);
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    for (s && s(r); f.length; ) f.shift()();
    return a.push.apply(a, l || []), t();
  }
  function t() {
    for (var e, r = 0; r < a.length; r++) {
      for (var t = a[r], n = !0, c = 1; c < t.length; c++) {
        var i = t[c];
        0 !== o[i] && (n = !1);
      }
      n && (a.splice(r--, 1), (e = u((u.s = t[0]))));
    }
    return e;
  }
  var n = {},
    o = {
      40: 0,
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
  function u(r) {
    if (n[r]) return n[r].exports;
    var t = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(t.exports, t, t.exports, u), (t.l = !0), t.exports;
  }
  (u.m = e),
    (u.c = n),
    (u.d = function(e, r, t) {
      u.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t });
    }),
    (u.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (u.t = function(e, r) {
      if ((1 & r && (e = u(e)), 8 & r)) return e;
      if (4 & r && 'object' == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (u.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
        2 & r && 'string' != typeof e)
      )
        for (var n in e)
          u.d(
            t,
            n,
            function(r) {
              return e[r];
            }.bind(null, n)
          );
      return t;
    }),
    (u.n = function(e) {
      var r =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return u.d(r, 'a', r), r;
    }),
    (u.o = function(e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (u.p = '/assets/scripts/bundle/');
  var c = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    i = c.push.bind(c);
  (c.push = r), (c = c.slice());
  for (var l = 0; l < c.length; l++) r(c[l]);
  var s = i;
  return a.push([233, 0]), t();
})({
  0: function(e, r) {
    e.exports = React;
  },
  16: function(e, r) {
    e.exports = ReactDOM;
  },
  233: function(e, r, t) {
    'use strict';
    t.r(r),
      t.d(r, 'states', function() {
        return u;
      });
    var n = t(0),
      o = t.n(n),
      a = t(44);
    r.default = o.a.createElement(a.b, { hasPredefined: !1 });
    var u = [
      {
        id: 'custom-color-picker-open',
        label: 'Open',
        element: o.a.createElement(a.b, { isOpen: !0, hasPredefined: !1 })
      },
      {
        id: 'custom-color-picker-open-error',
        label: 'Open with Error',
        element: o.a.createElement(a.b, {
          isOpen: !0,
          hasCustomError: !0,
          hasPredefined: !1
        })
      }
    ];
  }
});
