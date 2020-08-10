var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/utilities/hyphenation/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, a, u = t[0], c = t[1], l = t[2], p = 0, d = [];
      p < u.length;
      p++
    )
      (a = u[p]),
        Object.prototype.hasOwnProperty.call(o, a) && o[a] && d.push(o[a][0]),
        (o[a] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    for (s && s(t); d.length; ) d.shift()();
    return i.push.apply(i, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r = !0, u = 1; u < n.length; u++) {
        var c = n[u];
        0 !== o[c] && (r = !1);
      }
      r && (i.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = { 93: 0 },
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
  var u = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    c = u.push.bind(u);
  (u.push = t), (u = u.slice());
  for (var l = 0; l < u.length; l++) t(u[l]);
  var s = c;
  return i.push([286, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  18: function(e, t) {
    e.exports = JSBeautify;
  },
  19: function(e, t) {
    e.exports = ReactDOM;
  },
  286: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getElement', function() {
        return p;
      }),
      n.d(t, 'getContents', function() {
        return d;
      });
    var r = n(0),
      o = n.n(r),
      i = n(4),
      a = n(1),
      u = n(2),
      c = [
        {
          id: 'default',
          label: 'Hyphenate',
          element: o.a.createElement(
            'p',
            { className: 'slds-hyphenate' },
            'A long heading might be supercalifragilisticexpiallidocious.'
          )
        }
      ],
      l = i.c.h2,
      s = i.c.p,
      p = function() {
        return Object(r.createElement)(
          i.b,
          {},
          Object(r.createElement)(
            'div',
            { className: 'doc lead' },
            'The hyphenation class should be placed on text that might be served in narrow width containers and is not truncated.'
          ),
          l({ id: 'About-Hyphenation' }, 'About Hyphenation'),
          s(
            {},
            "This will allow the text to break, or hyphenate, depending on the browser's capabilities. Chrome currently doesn't show the hyphenation, but the bug is currently marked fixed, so it should soon."
          ),
          l({ id: 'Base' }, 'Base'),
          Object(r.createElement)(a.a, null, Object(u.e)(c, 'default'))
        );
      },
      d = function() {
        return Object(i.a)(p());
      };
  }
});
