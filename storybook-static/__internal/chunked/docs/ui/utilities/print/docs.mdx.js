var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/utilities/print/docs.mdx.js'] = (function(e) {
  function t(t) {
    for (
      var r, c, u = t[0], a = t[1], l = t[2], p = 0, f = [];
      p < u.length;
      p++
    )
      (c = u[p]),
        Object.prototype.hasOwnProperty.call(o, c) && o[c] && f.push(o[c][0]),
        (o[c] = 0);
    for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
    for (s && s(t); f.length; ) f.shift()();
    return i.push.apply(i, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r = !0, u = 1; u < n.length; u++) {
        var a = n[u];
        0 !== o[a] && (r = !1);
      }
      r && (i.splice(t--, 1), (e = c((c.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = { 102: 0 },
    i = [];
  function c(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, c), (n.l = !0), n.exports;
  }
  (c.m = e),
    (c.c = r),
    (c.d = function(e, t, n) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (c.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (c.t = function(e, t) {
      if ((1 & t && (e = c(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (c.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          c.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (c.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return c.d(t, 'a', t), t;
    }),
    (c.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = '/assets/scripts/bundle/');
  var u = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    a = u.push.bind(u);
  (u.push = t), (u = u.slice());
  for (var l = 0; l < u.length; l++) t(u[l]);
  var s = a;
  return i.push([250, 0]), n();
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
  250: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getElement', function() {
        return p;
      }),
      n.d(t, 'getContents', function() {
        return f;
      });
    var r = n(0),
      o = n.n(r),
      i = n(4),
      c = n(1),
      u = n(2),
      a = [
        {
          id: 'no-print',
          label: 'No Print',
          element: o.a.createElement(
            'div',
            { className: 'slds-no-print' },
            'I am hidden when printing'
          ),
          description:
            'Use the `slds-no-print` class to hide an element when printing the page.'
        }
      ],
      l = i.c.h2,
      s = i.c.h3,
      p = function() {
        return Object(r.createElement)(
          i.b,
          {},
          Object(r.createElement)(
            'div',
            { className: 'doc lead' },
            'Print utilities give you the ability to hide a component when printing a page.'
          ),
          l({ id: 'Examples' }, 'Examples'),
          s({ id: 'No-Print' }, 'No Print'),
          Object(r.createElement)(c.a, null, Object(u.e)(a, 'no-print'))
        );
      },
      f = function() {
        return Object(i.a)(p());
      };
  }
});
