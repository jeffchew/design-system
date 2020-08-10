var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/utilities/interactions/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, l, s = t[0], o = t[1], c = t[2], f = 0, d = [];
      f < s.length;
      f++
    )
      (l = s[f]),
        Object.prototype.hasOwnProperty.call(a, l) && a[l] && d.push(a[l][0]),
        (a[l] = 0);
    for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
    for (u && u(t); d.length; ) d.shift()();
    return i.push.apply(i, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r = !0, s = 1; s < n.length; s++) {
        var o = n[s];
        0 !== a[o] && (r = !1);
      }
      r && (i.splice(t--, 1), (e = l((l.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = { 94: 0 },
    i = [];
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
  var s = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    o = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var c = 0; c < s.length; c++) t(s[c]);
  var u = o;
  return i.push([287, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  18: function(e, t) {
    e.exports = JSBeautify;
  },
  19: function(e, t) {
    e.exports = ReactDOM;
  },
  287: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getElement', function() {
        return f;
      }),
      n.d(t, 'getContents', function() {
        return d;
      });
    var r = n(0),
      a = n.n(r),
      i = n(4),
      l = n(1),
      s = n(2),
      o = [
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
      ],
      c = i.c.h2,
      u = i.c.h3,
      f = function() {
        return Object(r.createElement)(
          i.b,
          {},
          Object(r.createElement)(
            'div',
            { className: 'doc lead' },
            'Set of utilities that provide interaction(s).'
          ),
          c({ id: 'Examples' }, 'Examples'),
          u({ id: 'Link-Reset' }, 'Link Reset'),
          Object(r.createElement)(l.a, null, Object(s.e)(o, 'reset')),
          u(
            { id: 'Link-Reset-with-Text-Link-Inside' },
            'Link Reset with Text Link Inside'
          ),
          Object(r.createElement)(l.a, null, Object(s.e)(o, 'link')),
          u({ id: 'Link-Reset-with-Halo-Focus' }, 'Link Reset with Halo Focus'),
          Object(r.createElement)(l.a, null, Object(s.e)(o, 'halo-focus')),
          u({ id: 'Button-Reset' }, 'Button Reset'),
          Object(r.createElement)(l.a, null, Object(s.e)(o, 'button-reset')),
          u({ id: 'Faux-Link-on-a-span' }, 'Faux Link on a span'),
          Object(r.createElement)(l.a, null, Object(s.e)(o, 'faux'))
        );
      },
      d = function() {
        return Object(i.a)(f());
      };
  }
});
