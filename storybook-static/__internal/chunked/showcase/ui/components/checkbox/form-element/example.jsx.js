var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/checkbox/form-element/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, a, o = t[0], s = t[1], c = t[2], d = 0, p = [];
      d < o.length;
      d++
    )
      (a = o[d]),
        Object.prototype.hasOwnProperty.call(l, a) && l[a] && p.push(l[a][0]),
        (l[a] = 0);
    for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
    for (u && u(t); p.length; ) p.shift()();
    return i.push.apply(i, c || []), r();
  }
  function r() {
    for (var e, t = 0; t < i.length; t++) {
      for (var r = i[t], n = !0, o = 1; o < r.length; o++) {
        var s = r[o];
        0 !== l[s] && (n = !1);
      }
      n && (i.splice(t--, 1), (e = a((a.s = r[0]))));
    }
    return e;
  }
  var n = {},
    l = {
      38: 0,
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
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, a), (r.l = !0), r.exports;
  }
  (a.m = e),
    (a.c = n),
    (a.d = function(e, t, r) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
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
      var r = Object.create(null);
      if (
        (a.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          a.d(
            r,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
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
  var o = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    s = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var c = 0; c < o.length; c++) t(o[c]);
  var u = s;
  return i.push([143, 0]), r();
})({
  0: function(e, t) {
    e.exports = React;
  },
  143: function(e, t, r) {
    'use strict';
    r.r(t),
      r.d(t, 'states', function() {
        return s;
      }),
      r.d(t, 'examples', function() {
        return c;
      });
    var n = r(0),
      l = r.n(n),
      i = r(47),
      a = r(5),
      o = r(9);
    t.default = l.a.createElement(i.a, null);
    var s = [
        {
          id: 'checked',
          label: 'Checked',
          element: l.a.createElement(i.a, { isChecked: !0 })
        },
        {
          id: 'disabled',
          label: 'Disabled',
          element: l.a.createElement(i.a, { isDisabled: !0 })
        },
        {
          id: 'checked-disabled',
          label: 'Checked and Disabled',
          element: l.a.createElement(i.a, { isChecked: !0, isDisabled: !0 })
        },
        {
          id: 'error',
          label: 'Error',
          element: l.a.createElement(i.a, {
            isRequired: !0,
            hasError: !0,
            inlineMessage: 'This field is required'
          })
        },
        {
          id: 'required',
          label: 'Required',
          element: l.a.createElement(i.a, { isRequired: !0 })
        },
        {
          id: 'view-mode-unchecked',
          label: 'View mode - Unchecked',
          element: l.a.createElement(
            a.b,
            { labelContent: 'Form Element Label', isViewMode: !0 },
            l.a.createElement(o.UtilityIcon, {
              symbol: 'steps',
              size: 'x-small',
              useCurrentColor: !0,
              assistiveText: 'False',
              title: 'False'
            })
          )
        },
        {
          id: 'view-mode-checked',
          label: 'View mode - Checked',
          element: l.a.createElement(
            a.b,
            { labelContent: 'Form Element Label', isViewMode: !0 },
            l.a.createElement(o.UtilityIcon, {
              symbol: 'check',
              size: 'x-small',
              useCurrentColor: !0,
              assistiveText: 'True',
              title: 'True'
            })
          )
        }
      ],
      c = [
        {
          id: 'help-text-icon',
          label: 'Help text icon',
          element: l.a.createElement(i.a, { hasTooltip: !0 })
        },
        {
          id: 'required-help-text-icon',
          label: 'Required with Help text icon',
          element: l.a.createElement(i.a, { isRequired: !0, hasTooltip: !0 })
        },
        {
          id: 'required-help-text-icon-tooltip',
          label: 'Required with Help text icon, showing tooltip',
          element: l.a.createElement(
            'div',
            { style: { paddingTop: '3rem' } },
            l.a.createElement(i.a, {
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
