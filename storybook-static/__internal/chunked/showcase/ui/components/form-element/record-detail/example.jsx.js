var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/form-element/record-detail/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var o, i, l = t[0], c = t[1], s = t[2], d = 0, p = [];
      d < l.length;
      d++
    )
      (i = l[d]),
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && p.push(r[i][0]),
        (r[i] = 0);
    for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
    for (u && u(t); p.length; ) p.shift()();
    return a.push.apply(a, s || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], o = !0, l = 1; l < n.length; l++) {
        var c = n[l];
        0 !== r[c] && (o = !1);
      }
      o && (a.splice(t--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var o = {},
    r = {
      88: 0,
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
  function i(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = e),
    (i.c = o),
    (i.d = function(e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.t = function(e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          i.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return i.d(t, 'a', t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = '/assets/scripts/bundle/');
  var l = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    c = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var s = 0; s < l.length; s++) t(l[s]);
  var u = c;
  return a.push([230, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  230: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'examples', function() {
        return l;
      });
    var o = n(0),
      r = n.n(o),
      a = n(35),
      i = n(37);
    t.default = r.a.createElement(a.a, {
      direction: 'stacked',
      snapshot: i.b,
      isViewMode: !0,
      hasInlineEdit: !0
    });
    var l = [
      {
        id: 'stacked-single-column',
        label: 'Stacked form layout - 1 column - Read Only Mode',
        element: r.a.createElement(a.a, {
          direction: 'stacked',
          snapshot: i.d,
          isViewMode: !0,
          isSingleColumn: !0
        })
      },
      {
        id: 'edit-stacked',
        label: 'Stacked form layout - Edit Mode',
        element: r.a.createElement(a.a, { direction: 'stacked', snapshot: i.b })
      },
      {
        id: 'horizontal',
        label: 'Horizontal form layout - View Mode',
        element: r.a.createElement(a.a, {
          direction: 'horizontal',
          snapshot: i.c,
          isViewMode: !0,
          hasInlineEdit: !0
        })
      },
      {
        id: 'horizontal-single-column',
        label: 'Horizontal form layout - 1 column - Read Only Mode',
        element: r.a.createElement(a.a, {
          direction: 'horizontal',
          snapshot: i.d,
          isViewMode: !0,
          isSingleColumn: !0
        })
      },
      {
        id: 'edit-horizontal',
        label: 'Horizontal form layout - Edit Mode',
        element: r.a.createElement(a.a, {
          direction: 'horizontal',
          snapshot: i.c
        })
      }
    ];
  }
});
