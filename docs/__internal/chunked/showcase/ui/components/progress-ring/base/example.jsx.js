var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/progress-ring/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, l, s = t[0], o = t[1], c = t[2], g = 0, u = [];
      g < s.length;
      g++
    )
      (l = s[g]),
        Object.prototype.hasOwnProperty.call(a, l) && a[l] && u.push(a[l][0]),
        (a[l] = 0);
    for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
    for (p && p(t); u.length; ) u.shift()();
    return i.push.apply(i, c || []), r();
  }
  function r() {
    for (var e, t = 0; t < i.length; t++) {
      for (var r = i[t], n = !0, s = 1; s < r.length; s++) {
        var o = r[s];
        0 !== a[o] && (n = !1);
      }
      n && (i.splice(t--, 1), (e = l((l.s = r[0]))));
    }
    return e;
  }
  var n = {},
    a = {
      128: 0,
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
    i = [];
  function l(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, l), (r.l = !0), r.exports;
  }
  (l.m = e),
    (l.c = n),
    (l.d = function(e, t, r) {
      l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
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
      var r = Object.create(null);
      if (
        (l.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          l.d(
            r,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
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
  var s = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    o = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var c = 0; c < s.length; c++) t(s[c]);
  var p = o;
  return i.push([112, 0]), r();
})({
  0: function(e, t) {
    e.exports = React;
  },
  112: function(e, t, r) {
    'use strict';
    r.r(t),
      r.d(t, 'examples', function() {
        return s;
      });
    var n = r(0),
      a = r.n(n),
      i = r(45),
      l = r(9);
    t.default = a.a.createElement(i.a, { percent: 100 });
    var s = [
      {
        id: 'progress-ring-partially-drained',
        label: 'Partially Drained',
        element: a.a.createElement(i.a, { percent: 88 })
      },
      {
        id: 'progress-ring-partially-filled',
        label: 'Partially Filled',
        element: a.a.createElement(i.a, { percent: 40, isFilling: !0 })
      },
      {
        id: 'progress-ring-warning',
        label: 'Partially Drained With Warning Icon',
        element: a.a.createElement(
          i.a,
          { percent: 20, isWarning: !0 },
          a.a.createElement(l.UtilityIcon, {
            symbol: 'warning',
            title: 'Warning',
            assistiveText: 'Warning'
          })
        )
      },
      {
        id: 'progress-ring-partially-filled-warning',
        label: 'Partially Filled with Warning Icon',
        element: a.a.createElement(
          i.a,
          { percent: 75, isFilling: !0, isWarning: !0 },
          a.a.createElement(l.UtilityIcon, {
            symbol: 'warning',
            title: 'Warning',
            assistiveText: 'Warning'
          })
        )
      },
      {
        id: 'progress-ring-expired',
        label: 'With Expired Icon',
        element: a.a.createElement(
          i.a,
          { percent: 0, isExpired: !0 },
          a.a.createElement(l.UtilityIcon, {
            symbol: 'error',
            title: 'Expired',
            assistiveText: 'Expired'
          })
        )
      },
      {
        id: 'progress-ring-complete',
        label: 'Complete',
        element: a.a.createElement(
          i.a,
          { percent: 100, isComplete: !0 },
          a.a.createElement(l.UtilityIcon, {
            symbol: 'check',
            title: 'Complete',
            assistiveText: 'Complete'
          })
        )
      },
      {
        id: 'progress-ring-large',
        label: 'Large Size',
        element: a.a.createElement(i.a, {
          percent: 100,
          className: 'slds-progress-ring_large'
        })
      },
      {
        id: 'progress-ring-active-step',
        label: 'Active Step',
        element: a.a.createElement(i.a, { percent: 100, isActiveStep: !0 })
      },
      {
        id: 'progress-ring-theme-warning',
        label: 'Theme: Warning',
        element: a.a.createElement(i.a, { percent: 100, isWarning: !0 })
      },
      {
        id: 'progress-ring-theme-expired',
        label: 'Theme: Expired',
        element: a.a.createElement(i.a, { percent: 100, isExpired: !0 })
      },
      {
        id: 'progress-ring-theme-complete',
        label: 'Theme: Complete',
        element: a.a.createElement(i.a, { percent: 100, isComplete: !0 })
      }
    ];
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  }
});
