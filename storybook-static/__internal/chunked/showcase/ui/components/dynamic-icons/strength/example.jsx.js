var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/dynamic-icons/strength/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var a, l, c = t[0], i = t[1], o = t[2], u = 0, h = [];
      u < c.length;
      u++
    )
      (l = c[u]),
        Object.prototype.hasOwnProperty.call(r, l) && r[l] && h.push(r[l][0]),
        (r[l] = 0);
    for (a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
    for (d && d(t); h.length; ) h.shift()();
    return s.push.apply(s, o || []), n();
  }
  function n() {
    for (var e, t = 0; t < s.length; t++) {
      for (var n = s[t], a = !0, c = 1; c < n.length; c++) {
        var i = n[c];
        0 !== r[i] && (a = !1);
      }
      a && (s.splice(t--, 1), (e = l((l.s = n[0]))));
    }
    return e;
  }
  var a = {},
    r = {
      68: 0,
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
    if (a[t]) return a[t].exports;
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, l), (n.l = !0), n.exports;
  }
  (l.m = e),
    (l.c = a),
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
        for (var a in e)
          l.d(
            n,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
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
  var c = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    i = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var o = 0; o < c.length; o++) t(c[o]);
  var d = i;
  return s.push([252, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  252: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'states', function() {
        return o;
      });
    var a = n(0),
      r = n.n(a),
      s = n(2),
      l = n.n(s);
    function c() {
      return (c =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n)
              Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
          }
          return e;
        }).apply(this, arguments);
    }
    var i = function(e) {
        return r.a.createElement(
          'span',
          c({}, e, {
            title: 'Description of the icon when needed',
            className: l()('slds-icon-strength', e.className)
          }),
          r.a.createElement(
            'svg',
            { viewBox: '0 0 27 7', 'aria-hidden': 'true' },
            r.a.createElement('circle', { r: '3.025', cx: '3.5', cy: '3.5' }),
            r.a.createElement('circle', { r: '3.025', cx: '13.5', cy: '3.5' }),
            r.a.createElement('circle', { r: '3.025', cx: '23.5', cy: '3.5' })
          ),
          r.a.createElement(
            'span',
            { className: 'slds-assistive-text' },
            'Text alternative when needed'
          )
        );
      },
      o = ((t.default = r.a.createElement(i, { 'data-slds-strength': '0' })),
      [
        {
          id: 'strength-1',
          label: 'Strength: 1',
          element: r.a.createElement(i, { 'data-slds-strength': '1' })
        },
        {
          id: 'strength-2',
          label: 'Strength: 2',
          element: r.a.createElement(i, { 'data-slds-strength': '2' })
        },
        {
          id: 'strength-3',
          label: 'Strength: 3',
          element: r.a.createElement(i, { 'data-slds-strength': '3' })
        },
        {
          id: 'strength-negative-1',
          label: 'Strength: Neg 1',
          element: r.a.createElement(i, { 'data-slds-strength': '-1' })
        },
        {
          id: 'strength-negative-2',
          label: 'Strength: Neg 2',
          element: r.a.createElement(i, { 'data-slds-strength': '-2' })
        },
        {
          id: 'strength-negative-3',
          label: 'Strength: Neg 3',
          element: r.a.createElement(i, { 'data-slds-strength': '-3' })
        },
        {
          id: 'animated',
          label: 'Animated on load',
          element: r.a.createElement(i, {
            className: 'slds-is-animated',
            'data-slds-strength': '3'
          })
        },
        {
          id: 'animated-negative',
          label: 'Animated on load (negative)',
          element: r.a.createElement(i, {
            className: 'slds-is-animated',
            'data-slds-strength': '-3'
          })
        },
        {
          id: 'paused',
          label: 'Paused',
          element: r.a.createElement(i, {
            className: 'slds-is-animated slds-is-paused',
            'data-slds-strength': '3'
          })
        }
      ]);
  }
});
