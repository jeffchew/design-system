var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/utilities/margin/example.jsx.js'
] = (function(e) {
  function a(a) {
    for (
      var s, r, n = a[0], c = a[1], d = a[2], o = 0, v = [];
      o < n.length;
      o++
    )
      (r = n[o]),
        Object.prototype.hasOwnProperty.call(t, r) && t[r] && v.push(t[r][0]),
        (t[r] = 0);
    for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (e[s] = c[s]);
    for (i && i(a); v.length; ) v.shift()();
    return m.push.apply(m, d || []), l();
  }
  function l() {
    for (var e, a = 0; a < m.length; a++) {
      for (var l = m[a], s = !0, n = 1; n < l.length; n++) {
        var c = l[n];
        0 !== t[c] && (s = !1);
      }
      s && (m.splice(a--, 1), (e = r((r.s = l[0]))));
    }
    return e;
  }
  var s = {},
    t = {
      175: 0,
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
    m = [];
  function r(a) {
    if (s[a]) return s[a].exports;
    var l = (s[a] = { i: a, l: !1, exports: {} });
    return e[a].call(l.exports, l, l.exports, r), (l.l = !0), l.exports;
  }
  (r.m = e),
    (r.c = s),
    (r.d = function(e, a, l) {
      r.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: l });
    }),
    (r.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (r.t = function(e, a) {
      if ((1 & a && (e = r(e)), 8 & a)) return e;
      if (4 & a && 'object' == typeof e && e && e.__esModule) return e;
      var l = Object.create(null);
      if (
        (r.r(l),
        Object.defineProperty(l, 'default', { enumerable: !0, value: e }),
        2 & a && 'string' != typeof e)
      )
        for (var s in e)
          r.d(
            l,
            s,
            function(a) {
              return e[a];
            }.bind(null, s)
          );
      return l;
    }),
    (r.n = function(e) {
      var a =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(a, 'a', a), a;
    }),
    (r.o = function(e, a) {
      return Object.prototype.hasOwnProperty.call(e, a);
    }),
    (r.p = '/assets/scripts/bundle/');
  var n = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    c = n.push.bind(n);
  (n.push = a), (n = n.slice());
  for (var d = 0; d < n.length; d++) a(n[d]);
  var i = c;
  return m.push([207, 0]), l();
})({
  0: function(e, a) {
    e.exports = React;
  },
  207: function(e, a, l) {
    'use strict';
    l.r(a),
      l.d(a, 'examples', function() {
        return m;
      });
    var s = l(0),
      t = l.n(s),
      m = [
        {
          id: 'top',
          label: 'Top',
          element: t.a.createElement(
            'div',
            null,
            t.a.createElement('div', { className: 'slds-m-top_none' }),
            t.a.createElement('div', { className: 'slds-m-top_xxx-small' }),
            t.a.createElement('div', { className: 'slds-m-top_xx-small' }),
            t.a.createElement('div', { className: 'slds-m-top_x-small' }),
            t.a.createElement('div', { className: 'slds-m-top_small' }),
            t.a.createElement('div', { className: 'slds-m-top_medium' }),
            t.a.createElement('div', { className: 'slds-m-top_large' }),
            t.a.createElement('div', { className: 'slds-m-top_x-large' }),
            t.a.createElement('div', { className: 'slds-m-top_xx-large' })
          )
        },
        {
          id: 'right',
          label: 'Right',
          element: t.a.createElement(
            'div',
            null,
            t.a.createElement('div', { className: 'slds-m-right_none' }),
            t.a.createElement('div', { className: 'slds-m-right_xxx-small' }),
            t.a.createElement('div', { className: 'slds-m-right_xx-small' }),
            t.a.createElement('div', { className: 'slds-m-right_x-small' }),
            t.a.createElement('div', { className: 'slds-m-right_small' }),
            t.a.createElement('div', { className: 'slds-m-right_medium' }),
            t.a.createElement('div', { className: 'slds-m-right_large' }),
            t.a.createElement('div', { className: 'slds-m-right_x-large' }),
            t.a.createElement('div', { className: 'slds-m-right_xx-large' })
          )
        },
        {
          id: 'bottom',
          label: 'Bottom',
          element: t.a.createElement(
            'div',
            null,
            t.a.createElement('div', { className: 'slds-m-bottom_none' }),
            t.a.createElement('div', { className: 'slds-m-bottom_xxx-small' }),
            t.a.createElement('div', { className: 'slds-m-bottom_xx-small' }),
            t.a.createElement('div', { className: 'slds-m-bottom_x-small' }),
            t.a.createElement('div', { className: 'slds-m-bottom_small' }),
            t.a.createElement('div', { className: 'slds-m-bottom_medium' }),
            t.a.createElement('div', { className: 'slds-m-bottom_large' }),
            t.a.createElement('div', { className: 'slds-m-bottom_x-large' }),
            t.a.createElement('div', { className: 'slds-m-bottom_xx-large' })
          )
        },
        {
          id: 'left',
          label: 'Left',
          element: t.a.createElement(
            'div',
            null,
            t.a.createElement('div', { className: 'slds-m-left_none' }),
            t.a.createElement('div', { className: 'slds-m-left_xxx-small' }),
            t.a.createElement('div', { className: 'slds-m-left_xx-small' }),
            t.a.createElement('div', { className: 'slds-m-left_x-small' }),
            t.a.createElement('div', { className: 'slds-m-left_small' }),
            t.a.createElement('div', { className: 'slds-m-left_medium' }),
            t.a.createElement('div', { className: 'slds-m-left_large' }),
            t.a.createElement('div', { className: 'slds-m-left_x-large' }),
            t.a.createElement('div', { className: 'slds-m-left_xx-large' })
          )
        },
        {
          id: 'vertical',
          label: 'Vertical',
          element: t.a.createElement(
            'div',
            null,
            t.a.createElement('div', { className: 'slds-m-vertical_none' }),
            t.a.createElement('div', {
              className: 'slds-m-vertical_xxx-small'
            }),
            t.a.createElement('div', { className: 'slds-m-vertical_xx-small' }),
            t.a.createElement('div', { className: 'slds-m-vertical_x-small' }),
            t.a.createElement('div', { className: 'slds-m-vertical_small' }),
            t.a.createElement('div', { className: 'slds-m-vertical_medium' }),
            t.a.createElement('div', { className: 'slds-m-vertical_large' }),
            t.a.createElement('div', { className: 'slds-m-vertical_x-large' }),
            t.a.createElement('div', { className: 'slds-m-vertical_xx-large' })
          )
        },
        {
          id: 'horizontal',
          label: 'Horizontal',
          element: t.a.createElement(
            'div',
            null,
            t.a.createElement('div', { className: 'slds-m-horizontal_none' }),
            t.a.createElement('div', {
              className: 'slds-m-horizontal_xxx-small'
            }),
            t.a.createElement('div', {
              className: 'slds-m-horizontal_xx-small'
            }),
            t.a.createElement('div', {
              className: 'slds-m-horizontal_x-small'
            }),
            t.a.createElement('div', { className: 'slds-m-horizontal_small' }),
            t.a.createElement('div', { className: 'slds-m-horizontal_medium' }),
            t.a.createElement('div', { className: 'slds-m-horizontal_large' }),
            t.a.createElement('div', {
              className: 'slds-m-horizontal_x-large'
            }),
            t.a.createElement('div', {
              className: 'slds-m-horizontal_xx-large'
            })
          )
        },
        {
          id: 'around',
          label: 'Around',
          element: t.a.createElement(
            'div',
            null,
            t.a.createElement('div', { className: 'slds-m-around_none' }),
            t.a.createElement('div', { className: 'slds-m-around_xxx-small' }),
            t.a.createElement('div', { className: 'slds-m-around_xx-small' }),
            t.a.createElement('div', { className: 'slds-m-around_x-small' }),
            t.a.createElement('div', { className: 'slds-m-around_small' }),
            t.a.createElement('div', { className: 'slds-m-around_medium' }),
            t.a.createElement('div', { className: 'slds-m-around_large' }),
            t.a.createElement('div', { className: 'slds-m-around_x-large' }),
            t.a.createElement('div', { className: 'slds-m-around_xx-large' })
          )
        }
      ];
  }
});
