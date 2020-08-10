var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/utilities/sizing/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, o, r = t[0], i = t[1], c = t[2], f = 0, z = [];
      f < r.length;
      f++
    )
      (o = r[f]),
        Object.prototype.hasOwnProperty.call(l, o) && l[o] && z.push(l[o][0]),
        (l[o] = 0);
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    for (m && m(t); z.length; ) z.shift()();
    return s.push.apply(s, c || []), a();
  }
  function a() {
    for (var e, t = 0; t < s.length; t++) {
      for (var a = s[t], n = !0, r = 1; r < a.length; r++) {
        var i = a[r];
        0 !== l[i] && (n = !1);
      }
      n && (s.splice(t--, 1), (e = o((o.s = a[0]))));
    }
    return e;
  }
  var n = {},
    l = {
      182: 0,
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
  function o(t) {
    if (n[t]) return n[t].exports;
    var a = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
  }
  (o.m = e),
    (o.c = n),
    (o.d = function(e, t, a) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
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
      var a = Object.create(null);
      if (
        (o.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          o.d(
            a,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return a;
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
  var r = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    i = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var c = 0; c < r.length; c++) t(r[c]);
  var m = i;
  return s.push([150, 0]), a();
})({
  0: function(e, t) {
    e.exports = React;
  },
  150: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'examples', function() {
        return o;
      });
    var n = a(0),
      l = a.n(n),
      s = function(e) {
        return l.a.createElement(
          'div',
          { className: 'slds-size_'.concat(e.size) },
          l.a.createElement(
            'div',
            {
              className:
                'slds-box slds-box_x-small slds-text-align_center slds-m-around_x-small'
            },
            '.slds-size_',
            e.size
          )
        );
      },
      o = [
        {
          id: 'two-column',
          label: '2 Column Span',
          element: l.a.createElement(
            'div',
            { className: 'demo-only demo-only--sizing slds-grid slds-wrap' },
            l.a.createElement(s, { size: '1-of-2' }),
            l.a.createElement(s, { size: '1-of-2' }),
            l.a.createElement(s, { size: '2-of-2' })
          )
        },
        {
          id: 'three-column',
          label: '3 Column Span',
          element: l.a.createElement(
            'div',
            { className: 'demo-only demo-only--sizing slds-grid slds-wrap' },
            l.a.createElement(s, { size: '1-of-3' }),
            l.a.createElement(s, { size: '1-of-3' }),
            l.a.createElement(s, { size: '1-of-3' }),
            l.a.createElement(s, { size: '1-of-3' }),
            l.a.createElement(s, { size: '2-of-3' }),
            l.a.createElement(s, { size: '3-of-3' })
          )
        },
        {
          id: 'four-column',
          label: '4 Column Span',
          element: l.a.createElement(
            'div',
            { className: 'demo-only demo-only--sizing slds-grid slds-wrap' },
            l.a.createElement(s, { size: '1-of-4' }),
            l.a.createElement(s, { size: '1-of-4' }),
            l.a.createElement(s, { size: '1-of-4' }),
            l.a.createElement(s, { size: '1-of-4' }),
            l.a.createElement(s, { size: '1-of-4' }),
            l.a.createElement(s, { size: '3-of-4' }),
            l.a.createElement(s, { size: '2-of-4' }),
            l.a.createElement(s, { size: '2-of-4' }),
            l.a.createElement(s, { size: '4-of-4' })
          )
        },
        {
          id: 'five-column',
          label: '5 Column Span',
          element: l.a.createElement(
            'div',
            { className: 'demo-only demo-only--sizing slds-grid slds-wrap' },
            l.a.createElement(s, { size: '1-of-5' }),
            l.a.createElement(s, { size: '1-of-5' }),
            l.a.createElement(s, { size: '1-of-5' }),
            l.a.createElement(s, { size: '1-of-5' }),
            l.a.createElement(s, { size: '1-of-5' }),
            l.a.createElement(s, { size: '1-of-5' }),
            l.a.createElement(s, { size: '4-of-5' }),
            l.a.createElement(s, { size: '2-of-5' }),
            l.a.createElement(s, { size: '3-of-5' }),
            l.a.createElement(s, { size: '5-of-5' })
          )
        },
        {
          id: 'six-column',
          label: '6 Column Span',
          element: l.a.createElement(
            'div',
            { className: 'demo-only demo-only--sizing slds-grid slds-wrap' },
            l.a.createElement(s, { size: '1-of-6' }),
            l.a.createElement(s, { size: '1-of-6' }),
            l.a.createElement(s, { size: '1-of-6' }),
            l.a.createElement(s, { size: '1-of-6' }),
            l.a.createElement(s, { size: '1-of-6' }),
            l.a.createElement(s, { size: '1-of-6' }),
            l.a.createElement(s, { size: '2-of-6' }),
            l.a.createElement(s, { size: '4-of-6' }),
            l.a.createElement(s, { size: '3-of-6' }),
            l.a.createElement(s, { size: '3-of-6' }),
            l.a.createElement(s, { size: '6-of-6' })
          )
        },
        {
          id: 'seven-column',
          label: '7 Column Span',
          element: l.a.createElement(
            'div',
            { className: 'demo-only demo-only--sizing slds-grid slds-wrap' },
            l.a.createElement(s, { size: '1-of-7' }),
            l.a.createElement(s, { size: '1-of-7' }),
            l.a.createElement(s, { size: '1-of-7' }),
            l.a.createElement(s, { size: '1-of-7' }),
            l.a.createElement(s, { size: '1-of-7' }),
            l.a.createElement(s, { size: '1-of-7' }),
            l.a.createElement(s, { size: '1-of-7' }),
            l.a.createElement(s, { size: '2-of-7' }),
            l.a.createElement(s, { size: '5-of-7' }),
            l.a.createElement(s, { size: '3-of-7' }),
            l.a.createElement(s, { size: '4-of-7' }),
            l.a.createElement(s, { size: '7-of-7' })
          )
        },
        {
          id: 'eight-column',
          label: '8 Column Span',
          element: l.a.createElement(
            'div',
            { className: 'demo-only demo-only--sizing slds-grid slds-wrap' },
            l.a.createElement(s, { size: '1-of-8' }),
            l.a.createElement(s, { size: '1-of-8' }),
            l.a.createElement(s, { size: '1-of-8' }),
            l.a.createElement(s, { size: '1-of-8' }),
            l.a.createElement(s, { size: '1-of-8' }),
            l.a.createElement(s, { size: '1-of-8' }),
            l.a.createElement(s, { size: '1-of-8' }),
            l.a.createElement(s, { size: '1-of-8' }),
            l.a.createElement(s, { size: '2-of-8' }),
            l.a.createElement(s, { size: '6-of-8' }),
            l.a.createElement(s, { size: '3-of-8' }),
            l.a.createElement(s, { size: '5-of-8' }),
            l.a.createElement(s, { size: '4-of-8' }),
            l.a.createElement(s, { size: '4-of-8' }),
            l.a.createElement(s, { size: '8-of-8' })
          )
        },
        {
          id: 'twelve-column',
          label: '12 Column Span',
          element: l.a.createElement(
            'div',
            { className: 'demo-only demo-only--sizing slds-grid slds-wrap' },
            l.a.createElement(s, { size: '1-of-12' }),
            l.a.createElement(s, { size: '1-of-12' }),
            l.a.createElement(s, { size: '1-of-12' }),
            l.a.createElement(s, { size: '1-of-12' }),
            l.a.createElement(s, { size: '1-of-12' }),
            l.a.createElement(s, { size: '1-of-12' }),
            l.a.createElement(s, { size: '1-of-12' }),
            l.a.createElement(s, { size: '1-of-12' }),
            l.a.createElement(s, { size: '1-of-12' }),
            l.a.createElement(s, { size: '1-of-12' }),
            l.a.createElement(s, { size: '1-of-12' }),
            l.a.createElement(s, { size: '1-of-12' }),
            l.a.createElement(s, { size: '2-of-12' }),
            l.a.createElement(s, { size: '10-of-12' }),
            l.a.createElement(s, { size: '3-of-12' }),
            l.a.createElement(s, { size: '9-of-12' }),
            l.a.createElement(s, { size: '4-of-12' }),
            l.a.createElement(s, { size: '8-of-12' }),
            l.a.createElement(s, { size: '5-of-12' }),
            l.a.createElement(s, { size: '7-of-12' }),
            l.a.createElement(s, { size: '6-of-12' }),
            l.a.createElement(s, { size: '6-of-12' }),
            l.a.createElement(s, { size: '12-of-12' })
          )
        }
      ];
  }
});
