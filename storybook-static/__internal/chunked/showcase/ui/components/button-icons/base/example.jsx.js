var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/button-icons/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, i, s = t[0], l = t[1], u = t[2], f = 0, p = [];
      f < s.length;
      f++
    )
      (i = s[f]),
        Object.prototype.hasOwnProperty.call(o, i) && o[i] && p.push(o[i][0]),
        (o[i] = 0);
    for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
    for (c && c(t); p.length; ) p.shift()();
    return a.push.apply(a, u || []), r();
  }
  function r() {
    for (var e, t = 0; t < a.length; t++) {
      for (var r = a[t], n = !0, s = 1; s < r.length; s++) {
        var l = r[s];
        0 !== o[l] && (n = !1);
      }
      n && (a.splice(t--, 1), (e = i((i.s = r[0]))));
    }
    return e;
  }
  var n = {},
    o = {
      16: 0,
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
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.m = e),
    (i.c = n),
    (i.d = function(e, t, r) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
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
      var r = Object.create(null);
      if (
        (i.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          i.d(
            r,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
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
  var s = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    l = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var u = 0; u < s.length; u++) t(s[u]);
  var c = l;
  return a.push([130, 0]), r();
})({
  0: function(e, t) {
    e.exports = React;
  },
  130: function(e, t, r) {
    'use strict';
    r.r(t),
      r.d(t, 'states', function() {
        return i;
      }),
      r.d(t, 'examples', function() {
        return s;
      });
    var n = r(0),
      o = r.n(n),
      a = r(4);
    t.default = o.a.createElement(a.b, {
      assistiveText: 'Settings',
      title: 'Settings'
    });
    var i = [
        {
          id: 'error',
          label: 'Error',
          element: o.a.createElement(a.b, {
            feedback: 'error',
            symbol: 'error',
            title: 'Error',
            assistiveText: 'Error'
          })
        },
        {
          id: 'bare-disabled',
          label: 'Disabled',
          element: o.a.createElement(a.b, {
            assistiveText: 'Settings',
            disabled: !0,
            title: 'Settings'
          })
        }
      ],
      s = [
        {
          id: 'hint-hover',
          label: 'Hint on hover',
          element: o.a.createElement(
            a.a,
            null,
            o.a.createElement(a.b, {
              assistiveText: 'Settings',
              iconClassName: 'slds-button__icon_hint',
              title: 'Settings'
            })
          )
        }
      ];
  }
});
