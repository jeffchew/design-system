var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/utilities/themes/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, s, o = t[0], u = t[1], i = t[2], d = 0, h = [];
      d < o.length;
      d++
    )
      (s = o[d]),
        Object.prototype.hasOwnProperty.call(a, s) && a[s] && h.push(a[s][0]),
        (a[s] = 0);
    for (n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
    for (c && c(t); h.length; ) h.shift()();
    return l.push.apply(l, i || []), r();
  }
  function r() {
    for (var e, t = 0; t < l.length; t++) {
      for (var r = l[t], n = !0, o = 1; o < r.length; o++) {
        var u = r[o];
        0 !== a[u] && (n = !1);
      }
      n && (l.splice(t--, 1), (e = s((s.s = r[0]))));
    }
    return e;
  }
  var n = {},
    a = {
      184: 0,
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
  var o = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    u = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var i = 0; i < o.length; i++) t(o[i]);
  var c = u;
  return l.push([223, 0]), r();
})({
  0: function(e, t) {
    e.exports = React;
  },
  223: function(e, t, r) {
    'use strict';
    r.r(t),
      r.d(t, 'examples', function() {
        return l;
      });
    var n = r(0),
      a = r.n(n),
      l = [
        {
          id: 'default',
          label: 'Default',
          element: a.a.createElement(
            'div',
            { className: 'slds-box slds-theme_default' },
            a.a.createElement(
              'p',
              null,
              'This is a ',
              a.a.createElement('strong', null, 'default'),
              ' theme and here is a',
              ' ',
              a.a.createElement('a', { href: 'javascript:void(0);' }, 'link'),
              '.'
            )
          )
        },
        {
          id: 'shade',
          label: 'Shade',
          element: a.a.createElement(
            'div',
            { className: 'slds-box slds-theme_shade' },
            a.a.createElement(
              'p',
              null,
              'This is a ',
              a.a.createElement('strong', null, 'default'),
              ' theme and here is a',
              ' ',
              a.a.createElement('a', { href: 'javascript:void(0);' }, 'link'),
              '.'
            )
          )
        },
        {
          id: 'texture',
          label: 'Shade with texture',
          element: a.a.createElement(
            'div',
            { className: 'slds-box slds-theme_shade slds-theme_alert-texture' },
            a.a.createElement(
              'p',
              null,
              'This theme has the ',
              a.a.createElement('strong', null, 'alert texture'),
              ' added to the default theme and has a ',
              a.a.createElement('a', { href: 'javascript:void(0);' }, 'link'),
              '.'
            )
          )
        }
      ];
  }
});
