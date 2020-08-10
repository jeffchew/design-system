var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/expression/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, a, l = t[0], u = t[1], s = t[2], d = 0, p = [];
      d < l.length;
      d++
    )
      (a = l[d]),
        Object.prototype.hasOwnProperty.call(o, a) && o[a] && p.push(o[a][0]),
        (o[a] = 0);
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
    for (c && c(t); p.length; ) p.shift()();
    return i.push.apply(i, s || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r = !0, l = 1; l < n.length; l++) {
        var u = n[l];
        0 !== o[u] && (r = !1);
      }
      r && (i.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = {
      74: 0,
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
  function a(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = e),
    (a.c = r),
    (a.d = function(e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (a.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (a.t = function(e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          a.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (a.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return a.d(t, 'a', t), t;
    }),
    (a.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = '/assets/scripts/bundle/');
  var l = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    u = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var s = 0; s < l.length; s++) t(l[s]);
  var c = u;
  return i.push([224, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  224: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'examples', function() {
        return a;
      });
    var r = n(0),
      o = n.n(r),
      i = n(41);
    t.default = o.a.createElement(i.a, null);
    var a = [
      {
        id: 'initial-state',
        label: 'Initial State',
        element: o.a.createElement(i.a, {
          inputIsDisabled: !0,
          buttonIsDisabled: !0
        })
      },
      {
        id: 'with-expression-group',
        label: 'With Expression Group',
        element: o.a.createElement(
          i.a,
          { optionSelected: 'all', resourceIsSelected: !0 },
          o.a.createElement(
            i.b,
            { legendText: 'AND', assistiveText: 'Condition Group 1' },
            o.a.createElement(i.d, {
              conditionName: 'Condition 1',
              isGroup: !0,
              groupName: 'Condition Group 1'
            }),
            o.a.createElement(i.d, {
              conditionName: 'Condition 2',
              legendText: 'AND',
              isGroup: !0,
              groupName: 'Condition Group 1'
            })
          )
        )
      },
      {
        id: 'with-multiple-conditions',
        label: 'With Multiple Conditions',
        element: o.a.createElement(
          i.a,
          null,
          o.a.createElement(i.d, {
            legendText: 'AND',
            conditionName: 'Condition 2'
          })
        )
      },
      {
        id: 'with-disabled-inputs',
        label: 'With Disabled Inputs',
        element: o.a.createElement(
          i.a,
          null,
          o.a.createElement(i.d, {
            legendText: 'AND',
            conditionName: 'Condition 2',
            inputIsDisabled: !0
          })
        )
      },
      {
        id: 'with-error',
        label: 'With an Error',
        element: o.a.createElement(
          i.a,
          null,
          o.a.createElement(i.d, {
            legendText: 'AND',
            conditionName: 'Condition 2',
            errorMessage: 'Input has error',
            hasError: !0
          })
        )
      }
    ];
  }
});
