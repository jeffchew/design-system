var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/tiles/docs.mdx.js'] = (function(e) {
  function t(t) {
    for (
      var r, c, o = t[0], l = t[1], u = t[2], d = 0, f = [];
      d < o.length;
      d++
    )
      (c = o[d]),
        Object.prototype.hasOwnProperty.call(a, c) && a[c] && f.push(a[c][0]),
        (a[c] = 0);
    for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
    for (s && s(t); f.length; ) f.shift()();
    return i.push.apply(i, u || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r = !0, o = 1; o < n.length; o++) {
        var l = n[o];
        0 !== a[l] && (r = !1);
      }
      r && (i.splice(t--, 1), (e = c((c.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = { 75: 0 },
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
  var o = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    l = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var u = 0; u < o.length; u++) t(o[u]);
  var s = l;
  return i.push([128, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  128: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getElement', function() {
        return f;
      }),
      n.d(t, 'getContents', function() {
        return b;
      });
    var r = n(0),
      a = n(4),
      i = n(1),
      c = n(2),
      o = n(15),
      l = n(63),
      u = a.c.h2,
      s = a.c.h3,
      d = a.c.p,
      f = function() {
        return Object(r.createElement)(
          a.b,
          {},
          Object(r.createElement)(
            'div',
            { className: 'doc lead' },
            'A tile is a grouping of related information associated with a record.'
          ),
          Object(r.createElement)(
            i.a,
            { exampleOnly: !0 },
            Object(c.e)(l.c, 'with-icon')
          ),
          u({ id: 'About-Tile' }, 'About Tile'),
          d(
            {},
            'Tiles are setup to be displayed with or without an image/icon. The default pattern for tiles has an image/icon, a detail body which contains a list of information and action overflow menu dropdown. The detail body list, by default, comes as a name/value pairing but can be swapped out with a string of text or an inline horizontal list.'
          ),
          Object(r.createElement)(
            o.a,
            { type: 'warning', header: 'Warning' },
            Object(r.createElement)(
              'p',
              null,
              'Tiles can have different groupings of information based on its context. Pay close attention to the markup, as each tile layout is constructed differently.'
            )
          ),
          u({ id: 'Base' }, 'Base'),
          Object(r.createElement)(i.a, null, l.b),
          u({ id: 'Examples' }, 'Examples'),
          s({ id: 'Default-with-actions' }, 'Default with actions'),
          Object(r.createElement)(i.a, null, Object(c.e)(l.c, 'with-action')),
          s({ id: 'With-icon' }, 'With icon'),
          Object(r.createElement)(i.a, null, Object(c.e)(l.c, 'with-icon')),
          s({ id: 'With-avatar' }, 'With avatar'),
          Object(r.createElement)(i.a, null, Object(c.e)(l.c, 'with-avatar')),
          s({ id: 'Task' }, 'Task'),
          Object(r.createElement)(i.a, null, Object(c.e)(l.c, 'task')),
          s({ id: 'Article' }, 'Article'),
          Object(r.createElement)(i.a, null, Object(c.e)(l.c, 'article')),
          s({ id: 'Article-with-like-bar' }, 'Article with like bar'),
          Object(r.createElement)(
            i.a,
            null,
            Object(c.e)(l.c, 'article-liker-bar')
          ),
          s({ id: 'Board' }, 'Board'),
          Object(r.createElement)(i.a, null, Object(c.e)(l.c, 'board'))
        );
      },
      b = function() {
        return Object(a.a)(f());
      };
  },
  18: function(e, t) {
    e.exports = JSBeautify;
  },
  19: function(e, t) {
    e.exports = ReactDOM;
  }
});
