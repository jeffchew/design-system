var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/button-icons/bordered-inverse/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, a, s = t[0], l = t[1], u = t[2], d = 0, p = [];
      d < s.length;
      d++
    )
      (a = s[d]),
        Object.prototype.hasOwnProperty.call(o, a) && o[a] && p.push(o[a][0]),
        (o[a] = 0);
    for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
    for (c && c(t); p.length; ) p.shift()();
    return i.push.apply(i, u || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r = !0, s = 1; s < n.length; s++) {
        var l = n[s];
        0 !== o[l] && (r = !1);
      }
      r && (i.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = {
      18: 0,
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
  var s = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    l = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var u = 0; u < s.length; u++) t(s[u]);
  var c = l;
  return i.push([144, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  144: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'Context', function() {
        return a;
      }),
      n.d(t, 'states', function() {
        return s;
      }),
      n.d(t, 'examples', function() {
        return l;
      });
    var r = n(0),
      o = n.n(r),
      i = n(4),
      a = function(e) {
        return o.a.createElement(
          'div',
          { style: { padding: '0.5rem', backgroundColor: '#16325C' } },
          e.children
        );
      };
    t.default = o.a.createElement(i.b, {
      assistiveText: 'Search',
      size: 'medium',
      symbol: 'search',
      theme: 'inverse',
      title: 'Search'
    });
    var s = [
        {
          id: 'disabled',
          label: 'Disabled',
          element: o.a.createElement(i.b, {
            assistiveText: 'Search',
            disabled: !0,
            size: 'medium',
            symbol: 'search',
            theme: 'inverse',
            title: 'Search'
          })
        }
      ],
      l = [
        {
          id: 'with-dropdown',
          label: 'With dropdown',
          element: o.a.createElement(i.b, {
            assistiveText: 'More options',
            hasDropdown: !0,
            theme: 'neutral',
            title: 'More Options'
          })
        },
        {
          id: 'hint-hover',
          label: 'Hint on hover',
          element: o.a.createElement(
            i.a,
            null,
            o.a.createElement(i.b, {
              assistiveText: 'More options',
              iconClassName: 'slds-button__icon_inverse-hint',
              size: 'medium',
              theme: 'inverse',
              title: 'More Options'
            })
          )
        }
      ];
  }
});
