var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/button-icons/bordered-filled-container/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, i, l = t[0], s = t[1], u = t[2], p = 0, d = [];
      p < l.length;
      p++
    )
      (i = l[p]),
        Object.prototype.hasOwnProperty.call(o, i) && o[i] && d.push(o[i][0]),
        (o[i] = 0);
    for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
    for (c && c(t); d.length; ) d.shift()();
    return a.push.apply(a, u || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, l = 1; l < n.length; l++) {
        var s = n[l];
        0 !== o[s] && (r = !1);
      }
      r && (a.splice(t--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = {
      17: 0,
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
    a = [];
  function i(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = e),
    (i.c = r),
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
        for (var r in e)
          i.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
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
    s = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var u = 0; u < l.length; u++) t(l[u]);
  var c = s;
  return a.push([147, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  147: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'Context', function() {
        return i;
      }),
      n.d(t, 'states', function() {
        return l;
      }),
      n.d(t, 'examples', function() {
        return s;
      });
    var r = n(0),
      o = n.n(r),
      a = n(4),
      i = function(e) {
        return o.a.createElement(
          'div',
          { style: { padding: '0.5rem', backgroundColor: '#f4f6f9' } },
          e.children
        );
      };
    t.default = o.a.createElement(a.b, {
      assistiveText: 'Search',
      symbol: 'search',
      theme: 'neutral',
      title: 'Search'
    });
    var l = [
        {
          id: 'disabled',
          label: 'Disabled',
          element: o.a.createElement(a.b, {
            assistiveText: 'Search',
            disabled: !0,
            symbol: 'search',
            theme: 'neutral',
            title: 'Search'
          })
        }
      ],
      s = [
        {
          id: 'with-dropdown',
          label: 'With dropdown',
          element: o.a.createElement(a.b, {
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
            a.a,
            null,
            o.a.createElement(a.b, {
              assistiveText: 'More options',
              iconClassName: 'slds-button__icon_hint',
              theme: 'neutral',
              title: 'More Options'
            })
          )
        }
      ];
  }
});
