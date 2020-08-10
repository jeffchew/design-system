var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/spinners/docs.mdx.js'] = (function(
  e
) {
  function t(t) {
    for (
      var r, c, o = t[0], l = t[1], s = t[2], d = 0, p = [];
      d < o.length;
      d++
    )
      (c = o[d]),
        Object.prototype.hasOwnProperty.call(i, c) && i[c] && p.push(i[c][0]),
        (i[c] = 0);
    for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
    for (u && u(t); p.length; ) p.shift()();
    return a.push.apply(a, s || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, o = 1; o < n.length; o++) {
        var l = n[o];
        0 !== i[l] && (r = !1);
      }
      r && (a.splice(t--, 1), (e = c((c.s = n[0]))));
    }
    return e;
  }
  var r = {},
    i = { 70: 0 },
    a = [];
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
  for (var s = 0; s < o.length; s++) t(o[s]);
  var u = l;
  return a.push([139, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  139: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getElement', function() {
        return p;
      }),
      n.d(t, 'getContents', function() {
        return b;
      });
    var r = n(0),
      i = n(4),
      a = n(1),
      c = n(2),
      o = n(48),
      l = i.c.code,
      s = i.c.h2,
      u = i.c.h3,
      d = i.c.p,
      p = function() {
        return Object(r.createElement)(
          i.b,
          {},
          Object(r.createElement)(
            'div',
            { className: 'doc lead' },
            'Spinners are CSS loading indicators that should be shown when retrieving data or performing slow computations. In some cases, the first time a parent component loads, a stencil is preferred to indicate network activity.'
          ),
          Object(r.createElement)(
            a.a,
            { exampleOnly: !0 },
            Object(c.e)(o.c, 'brand')
          ),
          s({ id: 'About-Spinners' }, 'About Spinners'),
          d(
            {},
            'To use the spinner in a component, the parent of the spinner should be set to ',
            l({}, 'position:relative'),
            '. You can use the utility class ',
            l({}, '.slds-is-relative'),
            ' or add the declaration to your custom component CSS. If you are using the spinner in an ',
            l({}, 'iframe'),
            ' and dynamically loading DOM nodes after the page has loaded, it is recommended that you set the ',
            l({}, '.slds-spinner_container'),
            ' to ',
            l({}, 'position:fixed'),
            ' so that it remains centered in the viewport. The background overlay for the spinner is an optional element.'
          ),
          u({ id: 'Accessibility' }, 'Accessibility'),
          d(
            {},
            'A spinner should have the Aria ',
            l({}, 'role="status"'),
            ' and contain assistive text that explains what is currently happening.'
          ),
          s({ id: 'Base' }, 'Base'),
          Object(r.createElement)(a.a, null, o.b),
          s({ id: 'Examples' }, 'Examples'),
          u({ id: 'Without-container' }, 'Without container'),
          Object(r.createElement)(
            a.a,
            null,
            Object(c.e)(o.c, 'without-container')
          ),
          u({ id: 'With-container' }, 'With container'),
          Object(r.createElement)(
            a.a,
            null,
            Object(c.e)(o.c, 'with-container')
          ),
          u({ id: 'Fixed-container' }, 'Fixed container'),
          Object(r.createElement)(
            a.a,
            null,
            Object(c.e)(o.c, 'fixed-container')
          ),
          u({ id: 'Right-to-left-support' }, 'Right to left support'),
          Object(r.createElement)(
            a.a,
            null,
            Object(c.e)(o.c, 'right-to-left-medium')
          ),
          s({ id: 'Layout' }, 'Layout'),
          u({ id: 'Inlined' }, 'Inlined'),
          Object(r.createElement)(a.a, null, Object(c.e)(o.c, 'inlined')),
          s({ id: 'Color' }, 'Color'),
          u({ id: 'Inverse' }, 'Inverse'),
          Object(r.createElement)(a.a, null, Object(c.e)(o.c, 'inverse')),
          u({ id: 'Brand' }, 'Brand'),
          Object(r.createElement)(a.a, null, Object(c.e)(o.c, 'brand')),
          s({ id: 'Timing' }, 'Timing'),
          u({ id: 'Delayed' }, 'Delayed'),
          Object(r.createElement)(a.a, null, Object(c.e)(o.c, 'delayed')),
          s({ id: 'Sizing' }, 'Sizing'),
          u({ id: 'Xx-Small' }, 'Xx-Small'),
          Object(r.createElement)(a.a, null, Object(c.e)(o.c, 'xx-small')),
          u({ id: 'X-Small' }, 'X-Small'),
          Object(r.createElement)(a.a, null, Object(c.e)(o.c, 'x-small')),
          u({ id: 'Small' }, 'Small'),
          Object(r.createElement)(a.a, null, Object(c.e)(o.c, 'small')),
          u({ id: 'Medium' }, 'Medium'),
          Object(r.createElement)(a.a, null, Object(c.e)(o.c, 'medium')),
          u({ id: 'Large' }, 'Large'),
          Object(r.createElement)(a.a, null, Object(c.e)(o.c, 'large'))
        );
      },
      b = function() {
        return Object(i.a)(p());
      };
  },
  18: function(e, t) {
    e.exports = JSBeautify;
  },
  19: function(e, t) {
    e.exports = ReactDOM;
  }
});
