var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/buttons/with-icon/example.jsx.js'
] = (function(t) {
  function e(e) {
    for (
      var r, l, u = e[0], i = e[1], s = e[2], p = 0, d = [];
      p < u.length;
      p++
    )
      (l = u[p]),
        Object.prototype.hasOwnProperty.call(o, l) && o[l] && d.push(o[l][0]),
        (o[l] = 0);
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
    for (c && c(e); d.length; ) d.shift()();
    return a.push.apply(a, s || []), n();
  }
  function n() {
    for (var t, e = 0; e < a.length; e++) {
      for (var n = a[e], r = !0, u = 1; u < n.length; u++) {
        var i = n[u];
        0 !== o[i] && (r = !1);
      }
      r && (a.splice(e--, 1), (t = l((l.s = n[0]))));
    }
    return t;
  }
  var r = {},
    o = {
      27: 0,
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
  function l(e) {
    if (r[e]) return r[e].exports;
    var n = (r[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, l), (n.l = !0), n.exports;
  }
  (l.m = t),
    (l.c = r),
    (l.d = function(t, e, n) {
      l.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (l.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (l.t = function(t, e) {
      if ((1 & e && (t = l(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (l.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var r in t)
          l.d(
            n,
            r,
            function(e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (l.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return l.d(e, 'a', e), e;
    }),
    (l.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (l.p = '/assets/scripts/bundle/');
  var u = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    i = u.push.bind(u);
  (u.push = e), (u = u.slice());
  for (var s = 0; s < u.length; s++) e(u[s]);
  var c = i;
  return a.push([184, 0]), n();
})({
  0: function(t, e) {
    t.exports = React;
  },
  16: function(t, e) {
    t.exports = ReactDOM;
  },
  184: function(t, e, n) {
    'use strict';
    n.r(e),
      n.d(e, 'states', function() {
        return u;
      }),
      n.d(e, 'examples', function() {
        return i;
      });
    var r = n(0),
      o = n.n(r),
      a = n(8),
      l = n(13);
    e.default = o.a.createElement(
      l.Button,
      { isNeutral: !0 },
      o.a.createElement(a.a, {
        className: 'slds-button__icon slds-button__icon_left',
        sprite: 'utility',
        symbol: 'download'
      }),
      'Button Neutral'
    );
    var u = [
        {
          id: 'disabled',
          label: 'Disabled',
          element: o.a.createElement(
            l.Button,
            { isNeutral: !0, disabled: !0 },
            o.a.createElement(a.a, {
              className: 'slds-button__icon slds-button__icon_left',
              sprite: 'utility',
              symbol: 'download'
            }),
            'Button Neutral'
          )
        }
      ],
      i = [
        {
          id: 'with-icon-right',
          label: 'With right icon',
          element: o.a.createElement(
            l.Button,
            { isNeutral: !0 },
            'Button Neutral',
            o.a.createElement(a.a, {
              className: 'slds-button__icon slds-button__icon_right',
              sprite: 'utility',
              symbol: 'download'
            })
          )
        }
      ];
  }
});
