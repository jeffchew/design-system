var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/color-picker/swatches-only/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, s, a = t[0], c = t[1], i = t[2], p = 0, d = [];
      p < a.length;
      p++
    )
      (s = a[p]),
        Object.prototype.hasOwnProperty.call(o, s) && o[s] && d.push(o[s][0]),
        (o[s] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    for (u && u(t); d.length; ) d.shift()();
    return l.push.apply(l, i || []), r();
  }
  function r() {
    for (var e, t = 0; t < l.length; t++) {
      for (var r = l[t], n = !0, a = 1; a < r.length; a++) {
        var c = r[a];
        0 !== o[c] && (n = !1);
      }
      n && (l.splice(t--, 1), (e = s((s.s = r[0]))));
    }
    return e;
  }
  var n = {},
    o = {
      42: 0,
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
  var a = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    c = a.push.bind(a);
  (a.push = t), (a = a.slice());
  for (var i = 0; i < a.length; i++) t(a[i]);
  var u = c;
  return l.push([200, 0]), r();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  200: function(e, t, r) {
    'use strict';
    r.r(t),
      r.d(t, 'states', function() {
        return a;
      });
    var n = r(0),
      o = r.n(n),
      l = r(44),
      s = r(14);
    t.default = o.a.createElement(
      s.Trigger,
      null,
      o.a.createElement(
        'div',
        { className: 'slds-dropdown slds-dropdown_left' },
        o.a.createElement(
          'div',
          { className: 'slds-color-picker slds-color-picker_swatches-only' },
          o.a.createElement(
            'div',
            { className: 'slds-color-picker__selector' },
            o.a.createElement(l.a, { isMenuRole: !0 })
          )
        )
      )
    );
    var a = [
      {
        id: 'open-swatches-only-color-picker',
        label: 'Open',
        element: o.a.createElement(
          'div',
          { style: { height: '12rem' } },
          o.a.createElement(
            s.Trigger,
            { className: 'slds-is-open' },
            o.a.createElement(
              'div',
              { className: 'slds-dropdown slds-dropdown_left' },
              o.a.createElement(
                'div',
                {
                  className: 'slds-color-picker slds-color-picker_swatches-only'
                },
                o.a.createElement(
                  'div',
                  { className: 'slds-color-picker__selector' },
                  o.a.createElement(l.a, { isMenuRole: !0 })
                )
              )
            )
          )
        )
      }
    ];
  }
});
