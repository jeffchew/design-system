var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/button-icons/inverse/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, a, i = t[0], l = t[1], c = t[2], p = 0, d = [];
      p < i.length;
      p++
    )
      (a = i[p]),
        Object.prototype.hasOwnProperty.call(o, a) && o[a] && d.push(o[a][0]),
        (o[a] = 0);
    for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
    for (u && u(t); d.length; ) d.shift()();
    return s.push.apply(s, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < s.length; t++) {
      for (var n = s[t], r = !0, i = 1; i < n.length; i++) {
        var l = n[i];
        0 !== o[l] && (r = !1);
      }
      r && (s.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = {
      21: 0,
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
  var i = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    l = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var c = 0; c < i.length; c++) t(i[c]);
  var u = l;
  return s.push([174, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  174: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'Context', function() {
        return a;
      }),
      n.d(t, 'states', function() {
        return i;
      }),
      n.d(t, 'examples', function() {
        return l;
      });
    var r = n(0),
      o = n.n(r),
      s = n(4),
      a = function(e) {
        return o.a.createElement(
          'div',
          { style: { padding: '0.5rem', backgroundColor: '#16325C' } },
          e.children
        );
      };
    t.default = o.a.createElement(s.b, {
      assistiveText: 'Search',
      title: 'Search',
      theme: 'inverse',
      symbol: 'search'
    });
    var i = [
        {
          id: 'disabled',
          label: 'Disabled',
          element: o.a.createElement(s.b, {
            assistiveText: 'Search',
            title: 'Search',
            theme: 'inverse',
            symbol: 'search',
            disabled: !0
          })
        }
      ],
      l = [
        {
          id: 'with-dropdown',
          label: 'With dropdown',
          element: o.a.createElement(s.b, {
            hasDropdown: !0,
            theme: 'transparent',
            className: 'slds-button_icon-inverse',
            assistiveText: 'More options',
            title: 'More Options'
          })
        },
        {
          id: 'hint-hover',
          label: 'Hint on hover',
          element: o.a.createElement(
            'div',
            { className: 'slds-hint-parent' },
            o.a.createElement(s.b, {
              theme: 'inverse',
              iconClassName: 'slds-button__icon_inverse-hint',
              assistiveText: 'More options',
              title: 'More Options'
            })
          )
        }
      ];
  }
});