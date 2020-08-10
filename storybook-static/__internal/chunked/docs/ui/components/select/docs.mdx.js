var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/select/docs.mdx.js'] = (function(
  e
) {
  function t(t) {
    for (
      var r, l, i = t[0], u = t[1], a = t[2], p = 0, d = [];
      p < i.length;
      p++
    )
      (l = i[p]),
        Object.prototype.hasOwnProperty.call(o, l) && o[l] && d.push(o[l][0]),
        (o[l] = 0);
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
    for (s && s(t); d.length; ) d.shift()();
    return c.push.apply(c, a || []), n();
  }
  function n() {
    for (var e, t = 0; t < c.length; t++) {
      for (var n = c[t], r = !0, i = 1; i < n.length; i++) {
        var u = n[i];
        0 !== o[u] && (r = !1);
      }
      r && (c.splice(t--, 1), (e = l((l.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = { 67: 0 },
    c = [];
  function l(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, l), (n.l = !0), n.exports;
  }
  (l.m = e),
    (l.c = r),
    (l.d = function(e, t, n) {
      l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (l.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (l.t = function(e, t) {
      if ((1 & t && (e = l(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (l.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          l.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (l.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return l.d(t, 'a', t), t;
    }),
    (l.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (l.p = '/assets/scripts/bundle/');
  var i = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    u = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var a = 0; a < i.length; a++) t(i[a]);
  var s = u;
  return c.push([197, 0]), n();
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
  197: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getElement', function() {
        return f;
      }),
      n.d(t, 'getContents', function() {
        return b;
      });
    var r = n(0),
      o = n(4),
      c = n(1),
      l = n(2),
      i = n(59),
      u = o.c.a,
      a = o.c.code,
      s = o.c.h2,
      p = o.c.h3,
      d = o.c.p,
      f = function() {
        return Object(r.createElement)(
          o.b,
          {},
          Object(r.createElement)(
            'div',
            { className: 'doc lead' },
            'Select element presents a menu of options. For selecting multiple options, see Dueling Picklist.'
          ),
          Object(r.createElement)(c.a, { exampleOnly: !0 }, i.b),
          s({ id: 'About-Select' }, 'About Select'),
          d(
            {},
            'The HTML ',
            a({}, '<select>'),
            ' element presents a menu of options. The options within the menu are represented by ',
            a({}, '<option>'),
            ' elements that you can group with ',
            a({}, '<optgroup>'),
            ' elements. You can pre-select options for the user.'
          ),
          d(
            {},
            'For selecting multiple options, we have created a custom component called the ',
            u({ href: '/components/dueling-picklist' }, 'Dueling Picklist'),
            ' to ensure Accessibility and ease-of-use. Please refer to that documentation for the interaction model, markup, and Accessibility requirements.'
          ),
          s({ id: 'Base' }, 'Base'),
          Object(r.createElement)(c.a, null, i.b),
          s({ id: 'States' }, 'States'),
          p({ id: 'Error' }, 'Error'),
          Object(r.createElement)(c.a, null, Object(l.e)(i.d, 'select-error')),
          p({ id: 'Disabled' }, 'Disabled'),
          Object(r.createElement)(
            c.a,
            null,
            Object(l.e)(i.d, 'select-disabled')
          ),
          s({ id: 'Examples' }, 'Examples'),
          p({ id: 'Required' }, 'Required'),
          Object(r.createElement)(
            c.a,
            null,
            Object(l.e)(i.c, 'select-required')
          ),
          p({ id: 'Multiple-Selection' }, 'Multiple Selection'),
          Object(r.createElement)(
            c.a,
            null,
            Object(l.e)(i.c, 'select-multiple')
          ),
          p({ id: 'Multiple-Selection-Narrow' }, 'Multiple Selection Narrow'),
          Object(r.createElement)(
            c.a,
            null,
            Object(l.e)(i.c, 'select-multiple-narrow')
          )
        );
      },
      b = function() {
        return Object(o.a)(f());
      };
  }
});
