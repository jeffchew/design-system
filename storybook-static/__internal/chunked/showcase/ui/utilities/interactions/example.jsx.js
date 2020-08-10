var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/utilities/interactions/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, l, i = t[0], o = t[1], u = t[2], f = 0, p = [];
      f < i.length;
      f++
    )
      (l = i[f]),
        Object.prototype.hasOwnProperty.call(a, l) && a[l] && p.push(a[l][0]),
        (a[l] = 0);
    for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
    for (c && c(t); p.length; ) p.shift()();
    return s.push.apply(s, u || []), n();
  }
  function n() {
    for (var e, t = 0; t < s.length; t++) {
      for (var n = s[t], r = !0, i = 1; i < n.length; i++) {
        var o = n[i];
        0 !== a[o] && (r = !1);
      }
      r && (s.splice(t--, 1), (e = l((l.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = {
      173: 0,
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
    s = [];
  function l(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, l), (n.l = !0), n.exports;
  }
  (l.m = e),
    (l.c = r),
    (l.d = function(e, t, n) {
      l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (l.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (l.t = function(e, t) {
      if ((1 & t && (e = l(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (l.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          l.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (l.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return l.d(t, 'a', t), t;
    }),
    (l.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (l.p = '/assets/scripts/bundle/');
  var i = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    o = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var u = 0; u < i.length; u++) t(i[u]);
  var c = o;
  return s.push([140, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  140: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'examples', function() {
        return s;
      });
    var r = n(0),
      a = n.n(r),
      s = [
        {
          id: 'reset',
          label: 'Link reset',
          element: a.a.createElement(
            'a',
            { href: 'javascript:void(0);', className: 'slds-text-link_reset' },
            'Link'
          )
        },
        {
          id: 'link',
          label: 'Link reset with text link inside',
          element: a.a.createElement(
            'a',
            { href: 'javascript:void(0);', className: 'slds-text-link_reset' },
            'This text is a link but looks like normal text...',
            a.a.createElement('span', { className: 'slds-text-link' }, 'More'),
            '.'
          )
        },
        {
          id: 'halo-focus',
          label: 'Link reset with halo focus',
          element: a.a.createElement(
            'a',
            { href: 'javascript:void(0);', className: 'slds-has-blur-focus' },
            'Link with halo focus'
          )
        },
        {
          id: 'button-reset',
          label: 'Button reset',
          element: a.a.createElement(
            'button',
            { className: 'slds-button slds-text-link_reset' },
            'Button'
          )
        },
        {
          id: 'faux',
          label: 'Faux Link on a span',
          element: a.a.createElement(
            'span',
            { className: 'slds-text-link_faux' },
            'Span with faux link interactions'
          )
        }
      ];
  }
});
