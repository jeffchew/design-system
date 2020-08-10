var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/buttons/dual-stateful/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, a, o = t[0], u = t[1], i = t[2], d = 0, p = [];
      d < o.length;
      d++
    )
      (a = o[d]),
        Object.prototype.hasOwnProperty.call(l, a) && l[a] && p.push(l[a][0]),
        (l[a] = 0);
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
    for (c && c(t); p.length; ) p.shift()();
    return s.push.apply(s, i || []), n();
  }
  function n() {
    for (var e, t = 0; t < s.length; t++) {
      for (var n = s[t], r = !0, o = 1; o < n.length; o++) {
        var u = n[o];
        0 !== l[u] && (r = !1);
      }
      r && (s.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var r = {},
    l = {
      25: 0,
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
    s = [];
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
  var o = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    u = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var i = 0; i < o.length; i++) t(o[i]);
  var c = u;
  return s.push([194, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  194: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'DualStatefulButton', function() {
        return f;
      }),
      n.d(t, 'DefaultText', function() {
        return d;
      }),
      n.d(t, 'PressedText', function() {
        return p;
      }),
      n.d(t, 'states', function() {
        return b;
      }),
      n.d(t, 'examples', function() {
        return m;
      });
    var r = n(0),
      l = n.n(r),
      s = n(1),
      a = n.n(s),
      o = n(8),
      u = n(2),
      i = n.n(u),
      c = n(13),
      d = function(e) {
        return l.a.createElement(
          'span',
          { className: 'slds-text-not-pressed' },
          l.a.createElement(o.a, {
            className:
              'slds-button__icon slds-button__icon_small slds-button__icon_left',
            sprite: 'utility',
            symbol: 'add'
          }),
          e.children
        );
      };
    d.propTypes = { children: a.a.string.isRequired };
    var p = function(e) {
      return l.a.createElement(
        'span',
        { className: 'slds-text-pressed' },
        l.a.createElement(o.a, {
          className:
            'slds-button__icon slds-button__icon_small slds-button__icon_left',
          sprite: 'utility',
          symbol: 'check'
        }),
        e.children
      );
    };
    p.propTypes = { children: a.a.string.isRequired };
    var f = function(e) {
      var t = e.isDisabled,
        n = e.isPressed;
      return l.a.createElement(
        c.Button,
        {
          isNeutral: !0,
          className: i()('slds-button_dual-stateful', { 'slds-is-pressed': n }),
          disabled: t,
          'aria-live': 'assertive'
        },
        l.a.createElement(d, null, 'Follow'),
        l.a.createElement(p, null, 'Following')
      );
    };
    (f.propTypes = { isDisabled: a.a.bool, isPressed: a.a.bool }),
      (t.default = l.a.createElement(
        f,
        null,
        l.a.createElement(d, null, 'Follow'),
        l.a.createElement(p, null, 'Following')
      ));
    var b = [
        {
          id: 'disabled',
          label: 'disabled',
          element: l.a.createElement(
            f,
            { isDisabled: !0 },
            l.a.createElement(d, null, 'Follow'),
            l.a.createElement(p, null, 'Following')
          )
        }
      ],
      m = [
        {
          id: 'pressed',
          label: 'pressed',
          element: l.a.createElement(
            f,
            { isPressed: !0 },
            l.a.createElement(d, null, 'Follow'),
            l.a.createElement(p, null, 'Following')
          )
        }
      ];
  }
});
