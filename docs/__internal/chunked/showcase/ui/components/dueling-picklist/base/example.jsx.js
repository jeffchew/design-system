var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/dueling-picklist/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var i, r, o = t[0], d = t[1], c = t[2], u = 0, p = [];
      u < o.length;
      u++
    )
      (r = o[u]),
        Object.prototype.hasOwnProperty.call(n, r) && n[r] && p.push(n[r][0]),
        (n[r] = 0);
    for (i in d) Object.prototype.hasOwnProperty.call(d, i) && (e[i] = d[i]);
    for (s && s(t); p.length; ) p.shift()();
    return a.push.apply(a, c || []), l();
  }
  function l() {
    for (var e, t = 0; t < a.length; t++) {
      for (var l = a[t], i = !0, o = 1; o < l.length; o++) {
        var d = l[o];
        0 !== n[d] && (i = !1);
      }
      i && (a.splice(t--, 1), (e = r((r.s = l[0]))));
    }
    return e;
  }
  var i = {},
    n = {
      63: 0,
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
  function r(t) {
    if (i[t]) return i[t].exports;
    var l = (i[t] = { i: t, l: !1, exports: {} });
    return e[t].call(l.exports, l, l.exports, r), (l.l = !0), l.exports;
  }
  (r.m = e),
    (r.c = i),
    (r.d = function(e, t, l) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: l });
    }),
    (r.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var l = Object.create(null);
      if (
        (r.r(l),
        Object.defineProperty(l, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var i in e)
          r.d(
            l,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
          );
      return l;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(t, 'a', t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = '/assets/scripts/bundle/');
  var o = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    d = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var c = 0; c < o.length; c++) t(o[c]);
  var s = d;
  return a.push([146, 0]), l();
})({
  0: function(e, t) {
    e.exports = React;
  },
  146: function(e, t, l) {
    'use strict';
    l.r(t),
      l.d(t, 'states', function() {
        return r;
      });
    var i = l(0),
      n = l.n(i),
      a = l(29);
    t.default = n.a.createElement(a.i, { dataSet: a.a });
    var r = [
      {
        id: 'locked-item-dueling-picklist',
        label: 'Locked',
        element: n.a.createElement(a.i, { dataSet: a.f })
      },
      {
        id: 'disabled-dueling-picklist',
        label: 'Disabled',
        element: n.a.createElement(a.i, { dataSet: a.c, disabled: !0 })
      },
      {
        id: 'multi-select-selected-item',
        label: 'Selected Item',
        element: n.a.createElement(a.i, { dataSet: a.l })
      },
      {
        id: 'multi-select-multi-selected-items',
        label: 'Multiple Selected Items',
        element: n.a.createElement(a.i, { dataSet: a.k })
      },
      {
        id: 'multi-select-grabbed',
        label: 'Grabbed',
        element: n.a.createElement(a.i, { dataSet: a.e })
      },
      {
        id: 'multi-select-moved-in',
        label: 'Moved in list',
        element: n.a.createElement(a.i, { dataSet: a.h })
      },
      {
        id: 'multi-select-dropped',
        label: 'Dropped',
        element: n.a.createElement(a.i, { dataSet: a.d })
      },
      {
        id: 'multi-select-moved-to',
        label: 'Moved to list',
        element: n.a.createElement(a.i, { dataSet: a.g })
      },
      {
        id: 'no-reordering-dueling-picklist',
        label: 'No Reordering',
        element: n.a.createElement(a.i, { dataSet: a.a, noReorder: !0 })
      },
      {
        id: 'responsive-no-reordering-dueling-picklist',
        label: 'Responsive No Reordering',
        element: n.a.createElement(a.i, {
          dataSet: a.a,
          noReorder: !0,
          isResponsive: !0
        })
      },
      {
        id: 'view-mode-dueling-picklist',
        label: 'View Mode',
        element: n.a.createElement(a.j, null)
      },
      {
        id: 'required-dueling-picklist',
        label: 'Required',
        element: n.a.createElement(a.i, { dataSet: a.a, isRequired: !0 })
      },
      {
        id: 'with-tooltip',
        label: 'With Tooltip',
        element: n.a.createElement(
          a.b,
          null,
          n.a.createElement(a.i, {
            dataSet: a.a,
            hasTooltip: !0,
            showTooltip: !0
          })
        )
      },
      {
        id: 'required-dueling-picklist-with-tooltip',
        label: 'Required With Tooltip',
        element: n.a.createElement(
          a.b,
          null,
          n.a.createElement(a.i, {
            dataSet: a.a,
            isRequired: !0,
            hasTooltip: !0,
            showTooltip: !0
          })
        )
      }
    ];
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  }
});
