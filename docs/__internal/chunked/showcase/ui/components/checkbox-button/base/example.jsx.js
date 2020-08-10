var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/checkbox-button/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var c, a, o = t[0], i = t[1], d = t[2], s = 0, u = [];
      s < o.length;
      s++
    )
      (a = o[s]),
        Object.prototype.hasOwnProperty.call(l, a) && l[a] && u.push(l[a][0]),
        (l[a] = 0);
    for (c in i) Object.prototype.hasOwnProperty.call(i, c) && (e[c] = i[c]);
    for (b && b(t); u.length; ) u.shift()();
    return r.push.apply(r, d || []), n();
  }
  function n() {
    for (var e, t = 0; t < r.length; t++) {
      for (var n = r[t], c = !0, o = 1; o < n.length; o++) {
        var i = n[o];
        0 !== l[i] && (c = !1);
      }
      c && (r.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var c = {},
    l = {
      35: 0,
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
    r = [];
  function a(t) {
    if (c[t]) return c[t].exports;
    var n = (c[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = e),
    (a.c = c),
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
        for (var c in e)
          a.d(
            n,
            c,
            function(t) {
              return e[t];
            }.bind(null, c)
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
  var o = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    i = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var d = 0; d < o.length; d++) t(o[d]);
  var b = i;
  return r.push([167, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  167: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'states', function() {
        return a;
      }),
      n.d(t, 'examples', function() {
        return o;
      });
    var c = n(0),
      l = n.n(c),
      r = n(46);
    t.default = l.a.createElement(r.b, null);
    var a = [
        {
          id: 'checkbox-button-checked',
          label: 'Checked',
          element: l.a.createElement(r.b, { isChecked: !0 })
        },
        {
          id: 'checkbox-button-disabled',
          label: 'Disabled',
          element: l.a.createElement(r.b, { isDisabled: !0 })
        },
        {
          id: 'checkbox-button-checked-disabled',
          label: 'Checked and Disabled',
          element: l.a.createElement(r.b, { isChecked: !0, isDisabled: !0 })
        },
        {
          id: 'checkbox-add-button-checked',
          label: 'Deprecated - Checked',
          element: l.a.createElement(r.a, { checked: !0 })
        },
        {
          id: 'checkbox-add-button-disabled',
          label: 'Deprecated - Disabled',
          element: l.a.createElement(r.a, { disabled: !0 })
        },
        {
          id: 'checkbox-add-button-checked-and-disabled',
          label: 'Deprecated - Checked and Disabled',
          element: l.a.createElement(r.a, { checked: !0, disabled: !0 })
        }
      ],
      o = [
        {
          id: 'checkbox-button-icon-symbol',
          label: 'Different Icon',
          element: l.a.createElement(r.b, {
            iconUnchecked: 'recycle_bin_empty',
            iconChecked: 'recycle_bin_full'
          })
        },
        {
          id: 'checkbox-button-checked-icon-symbol',
          label: 'Different Icon - Checked',
          element: l.a.createElement(r.b, {
            iconUnchecked: 'recycle_bin_empty',
            iconChecked: 'recycle_bin_full',
            isChecked: !0
          })
        },
        {
          id: 'checkbox-button-disabled-icon-symbol',
          label: 'Different Icon - Disabled',
          element: l.a.createElement(r.b, {
            iconUnchecked: 'recycle_bin_empty',
            isDisabled: !0
          })
        },
        {
          id: 'checkbox-button-checked-disabled-icon-symbol',
          label: 'Different Icon - Checked and Disabled',
          element: l.a.createElement(r.b, {
            iconChecked: 'recycle_bin_full',
            isChecked: !0,
            isDisabled: !0
          })
        }
      ];
  }
});
