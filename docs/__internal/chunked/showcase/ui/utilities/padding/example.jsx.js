var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/utilities/padding/example.jsx.js'
] = (function(e) {
  function a(a) {
    for (
      var s, n, m = a[0], c = a[1], d = a[2], o = 0, p = [];
      o < m.length;
      o++
    )
      (n = m[o]),
        Object.prototype.hasOwnProperty.call(t, n) && t[n] && p.push(t[n][0]),
        (t[n] = 0);
    for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (e[s] = c[s]);
    for (i && i(a); p.length; ) p.shift()();
    return r.push.apply(r, d || []), l();
  }
  function l() {
    for (var e, a = 0; a < r.length; a++) {
      for (var l = r[a], s = !0, m = 1; m < l.length; m++) {
        var c = l[m];
        0 !== t[c] && (s = !1);
      }
      s && (r.splice(a--, 1), (e = n((n.s = l[0]))));
    }
    return e;
  }
  var s = {},
    t = {
      178: 0,
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
    r = [];
  function n(a) {
    if (s[a]) return s[a].exports;
    var l = (s[a] = { i: a, l: !1, exports: {} });
    return e[a].call(l.exports, l, l.exports, n), (l.l = !0), l.exports;
  }
  (n.m = e),
    (n.c = s),
    (n.d = function(e, a, l) {
      n.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: l });
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function(e, a) {
      if ((1 & a && (e = n(e)), 8 & a)) return e;
      if (4 & a && 'object' == typeof e && e && e.__esModule) return e;
      var l = Object.create(null);
      if (
        (n.r(l),
        Object.defineProperty(l, 'default', { enumerable: !0, value: e }),
        2 & a && 'string' != typeof e)
      )
        for (var s in e)
          n.d(
            l,
            s,
            function(a) {
              return e[a];
            }.bind(null, s)
          );
      return l;
    }),
    (n.n = function(e) {
      var a =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(a, 'a', a), a;
    }),
    (n.o = function(e, a) {
      return Object.prototype.hasOwnProperty.call(e, a);
    }),
    (n.p = '/assets/scripts/bundle/');
  var m = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    c = m.push.bind(m);
  (m.push = a), (m = m.slice());
  for (var d = 0; d < m.length; d++) a(m[d]);
  var i = c;
  return r.push([219, 0]), l();
})({
  0: function(e, a) {
    e.exports = React;
  },
  219: function(e, a, l) {
    'use strict';
    l.r(a),
      l.d(a, 'Context', function() {
        return r;
      }),
      l.d(a, 'examples', function() {
        return n;
      });
    var s = l(0),
      t = l.n(s),
      r = function(e) {
        return t.a.createElement(
          'div',
          { className: 'demo-only-spacing demo-only-padding' },
          e.children
        );
      },
      n = [
        {
          id: 'top',
          label: 'Top',
          element: t.a.createElement(
            'div',
            null,
            t.a.createElement('div', { className: 'slds-p-top_none' }),
            t.a.createElement('div', { className: 'slds-p-top_xxx-small' }),
            t.a.createElement('div', { className: 'slds-p-top_xx-small' }),
            t.a.createElement('div', { className: 'slds-p-top_x-small' }),
            t.a.createElement('div', { className: 'slds-p-top_small' }),
            t.a.createElement('div', { className: 'slds-p-top_medium' }),
            t.a.createElement('div', { className: 'slds-p-top_large' }),
            t.a.createElement('div', { className: 'slds-p-top_x-large' }),
            t.a.createElement('div', { className: 'slds-p-top_xx-large' })
          )
        },
        {
          id: 'right',
          label: 'Right',
          element: t.a.createElement(
            'div',
            null,
            t.a.createElement('div', { className: 'slds-p-right_none' }),
            t.a.createElement('div', { className: 'slds-p-right_xxx-small' }),
            t.a.createElement('div', { className: 'slds-p-right_xx-small' }),
            t.a.createElement('div', { className: 'slds-p-right_x-small' }),
            t.a.createElement('div', { className: 'slds-p-right_small' }),
            t.a.createElement('div', { className: 'slds-p-right_medium' }),
            t.a.createElement('div', { className: 'slds-p-right_large' }),
            t.a.createElement('div', { className: 'slds-p-right_x-large' }),
            t.a.createElement('div', { className: 'slds-p-right_xx-large' })
          )
        },
        {
          id: 'bottom',
          label: 'Bottom',
          element: t.a.createElement(
            'div',
            null,
            t.a.createElement('div', { className: 'slds-p-bottom_none' }),
            t.a.createElement('div', { className: 'slds-p-bottom_xxx-small' }),
            t.a.createElement('div', { className: 'slds-p-bottom_xx-small' }),
            t.a.createElement('div', { className: 'slds-p-bottom_x-small' }),
            t.a.createElement('div', { className: 'slds-p-bottom_small' }),
            t.a.createElement('div', { className: 'slds-p-bottom_medium' }),
            t.a.createElement('div', { className: 'slds-p-bottom_large' }),
            t.a.createElement('div', { className: 'slds-p-bottom_x-large' }),
            t.a.createElement('div', { className: 'slds-p-bottom_xx-large' })
          )
        },
        {
          id: 'left',
          label: 'Left',
          element: t.a.createElement(
            'div',
            null,
            t.a.createElement('div', { className: 'slds-p-left_none' }),
            t.a.createElement('div', { className: 'slds-p-left_xxx-small' }),
            t.a.createElement('div', { className: 'slds-p-left_xx-small' }),
            t.a.createElement('div', { className: 'slds-p-left_x-small' }),
            t.a.createElement('div', { className: 'slds-p-left_small' }),
            t.a.createElement('div', { className: 'slds-p-left_medium' }),
            t.a.createElement('div', { className: 'slds-p-left_large' }),
            t.a.createElement('div', { className: 'slds-p-left_x-large' }),
            t.a.createElement('div', { className: 'slds-p-left_xx-large' })
          )
        },
        {
          id: 'vertical',
          label: 'Vertical',
          element: t.a.createElement(
            'div',
            null,
            t.a.createElement('div', { className: 'slds-p-vertical_none' }),
            t.a.createElement('div', {
              className: 'slds-p-vertical_xxx-small'
            }),
            t.a.createElement('div', { className: 'slds-p-vertical_xx-small' }),
            t.a.createElement('div', { className: 'slds-p-vertical_x-small' }),
            t.a.createElement('div', { className: 'slds-p-vertical_small' }),
            t.a.createElement('div', { className: 'slds-p-vertical_medium' }),
            t.a.createElement('div', { className: 'slds-p-vertical_large' }),
            t.a.createElement('div', { className: 'slds-p-vertical_x-large' }),
            t.a.createElement('div', { className: 'slds-p-vertical_xx-large' })
          )
        },
        {
          id: 'horizontal',
          label: 'Horizontal',
          element: t.a.createElement(
            'div',
            null,
            t.a.createElement('div', { className: 'slds-p-horizontal_none' }),
            t.a.createElement('div', {
              className: 'slds-p-horizontal_xxx-small'
            }),
            t.a.createElement('div', {
              className: 'slds-p-horizontal_xx-small'
            }),
            t.a.createElement('div', {
              className: 'slds-p-horizontal_x-small'
            }),
            t.a.createElement('div', { className: 'slds-p-horizontal_small' }),
            t.a.createElement('div', { className: 'slds-p-horizontal_medium' }),
            t.a.createElement('div', { className: 'slds-p-horizontal_large' }),
            t.a.createElement('div', {
              className: 'slds-p-horizontal_x-large'
            }),
            t.a.createElement('div', {
              className: 'slds-p-horizontal_xx-large'
            })
          )
        },
        {
          id: 'around',
          label: 'Around',
          element: t.a.createElement(
            'div',
            null,
            t.a.createElement('div', { className: 'slds-p-around_none' }),
            t.a.createElement('div', { className: 'slds-p-around_xxx-small' }),
            t.a.createElement('div', { className: 'slds-p-around_xx-small' }),
            t.a.createElement('div', { className: 'slds-p-around_x-small' }),
            t.a.createElement('div', { className: 'slds-p-around_small' }),
            t.a.createElement('div', { className: 'slds-p-around_medium' }),
            t.a.createElement('div', { className: 'slds-p-around_large' }),
            t.a.createElement('div', { className: 'slds-p-around_x-large' }),
            t.a.createElement('div', { className: 'slds-p-around_xx-large' })
          )
        }
      ];
  }
});
