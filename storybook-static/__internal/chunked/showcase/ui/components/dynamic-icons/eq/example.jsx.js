var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/dynamic-icons/eq/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, s, c = t[0], l = t[1], i = t[2], p = 0, f = [];
      p < c.length;
      p++
    )
      (s = c[p]),
        Object.prototype.hasOwnProperty.call(a, s) && a[s] && f.push(a[s][0]),
        (a[s] = 0);
    for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
    for (u && u(t); f.length; ) f.shift()();
    return o.push.apply(o, i || []), n();
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], r = !0, c = 1; c < n.length; c++) {
        var l = n[c];
        0 !== a[l] && (r = !1);
      }
      r && (o.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = {
      65: 0,
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
    o = [];
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
  var c = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    l = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var i = 0; i < c.length; i++) t(c[i]);
  var u = l;
  return o.push([244, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  244: function(e, t, n) {
    'use strict';
    n.r(t);
    var r = n(0),
      a = n.n(r),
      o = function() {
        return a.a.createElement(
          'div',
          {
            className: 'slds-icon-eq slds-is-animated',
            title: 'Description of the icon when needed'
          },
          a.a.createElement('div', { className: 'slds-icon-eq__bar' }),
          a.a.createElement('div', { className: 'slds-icon-eq__bar' }),
          a.a.createElement('div', { className: 'slds-icon-eq__bar' }),
          a.a.createElement(
            'span',
            { className: 'slds-assistive-text' },
            'Text alternative when needed'
          )
        );
      };
    t.default = a.a.createElement(o, null);
  }
});