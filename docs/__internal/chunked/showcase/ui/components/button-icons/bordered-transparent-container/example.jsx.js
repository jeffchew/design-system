var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/button-icons/bordered-transparent-container/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, s, i = t[0], l = t[1], c = t[2], p = 0, f = [];
      p < i.length;
      p++
    )
      (s = i[p]),
        Object.prototype.hasOwnProperty.call(o, s) && o[s] && f.push(o[s][0]),
        (o[s] = 0);
    for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
    for (u && u(t); f.length; ) f.shift()();
    return a.push.apply(a, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, i = 1; i < n.length; i++) {
        var l = n[i];
        0 !== o[l] && (r = !1);
      }
      r && (a.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = {
      19: 0,
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
  function s(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.m = e),
    (s.c = r),
    (s.d = function(e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (s.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (s.t = function(e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          s.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (s.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return s.d(t, 'a', t), t;
    }),
    (s.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = '/assets/scripts/bundle/');
  var i = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    l = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var c = 0; c < i.length; c++) t(i[c]);
  var u = l;
  return a.push([178, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  178: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'Context', function() {
        return s;
      }),
      n.d(t, 'states', function() {
        return i;
      }),
      n.d(t, 'examples', function() {
        return l;
      });
    var r = n(0),
      o = n.n(r),
      a = n(4),
      s = function(e) {
        return o.a.createElement(
          'div',
          { style: { padding: '0.5rem', backgroundColor: '#f4f6f9' } },
          e.children
        );
      };
    t.default = o.a.createElement(a.b, {
      assistiveText: 'Search',
      title: 'Search',
      theme: 'transparent',
      symbol: 'search'
    });
    var i = [
        {
          id: 'disabled',
          label: 'Disabled',
          element: o.a.createElement(a.b, {
            assistiveText: 'Search',
            title: 'Search',
            theme: 'transparent',
            symbol: 'search',
            disabled: !0
          })
        }
      ],
      l = [
        {
          id: 'hint-hover',
          label: 'Hint on hover',
          element: o.a.createElement(
            'div',
            { className: 'slds-hint-parent' },
            o.a.createElement(a.b, {
              theme: 'transparent',
              iconClassName: 'slds-button__icon_hint',
              assistiveText: 'More options',
              title: 'More Options'
            })
          )
        }
      ];
  }
});
