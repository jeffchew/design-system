var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/textarea/docs.mdx.js'] = (function(
  e
) {
  function t(t) {
    for (
      var n, c, u = t[0], l = t[1], i = t[2], d = 0, f = [];
      d < u.length;
      d++
    )
      (c = u[d]),
        Object.prototype.hasOwnProperty.call(a, c) && a[c] && f.push(a[c][0]),
        (a[c] = 0);
    for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
    for (s && s(t); f.length; ) f.shift()();
    return o.push.apply(o, i || []), r();
  }
  function r() {
    for (var e, t = 0; t < o.length; t++) {
      for (var r = o[t], n = !0, u = 1; u < r.length; u++) {
        var l = r[u];
        0 !== a[l] && (n = !1);
      }
      n && (o.splice(t--, 1), (e = c((c.s = r[0]))));
    }
    return e;
  }
  var n = {},
    a = { 74: 0 },
    o = [];
  function c(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, c), (r.l = !0), r.exports;
  }
  (c.m = e),
    (c.c = n),
    (c.d = function(e, t, r) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
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
      var r = Object.create(null);
      if (
        (c.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          c.d(
            r,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
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
    l = u.push.bind(u);
  (u.push = t), (u = u.slice());
  for (var i = 0; i < u.length; i++) t(u[i]);
  var s = l;
  return o.push([140, 0]), r();
})({
  0: function(e, t) {
    e.exports = React;
  },
  140: function(e, t, r) {
    'use strict';
    r.r(t),
      r.d(t, 'getElement', function() {
        return f;
      }),
      r.d(t, 'getContents', function() {
        return b;
      });
    var n = r(0),
      a = r(4),
      o = r(1),
      c = r(2),
      u = (r(15), r(42)),
      l = a.c.code,
      i = a.c.h2,
      s = a.c.h3,
      d = a.c.p,
      f = function() {
        return Object(n.createElement)(
          a.b,
          {},
          Object(n.createElement)(
            'div',
            { className: 'doc lead' },
            'Textarea inputs are used for freeform data entry.'
          ),
          Object(n.createElement)(
            o.a,
            { exampleOnly: !0 },
            Object(c.e)(u.c, 'required')
          ),
          i({ id: 'About-Textarea' }, 'About Textarea'),
          d(
            {},
            'You can style the HTML ',
            l({}, '<textarea>'),
            ' element to align with the Salesforce brand by using the class ',
            l({}, '.slds-textarea'),
            ' on the ',
            l({}, '<textarea>'),
            ' element.'
          ),
          i({ id: 'Base' }, 'Base'),
          Object(n.createElement)(o.a, null, u.b),
          i({ id: 'States' }, 'States'),
          s({ id: 'Disabled' }, 'Disabled'),
          Object(n.createElement)(o.a, null, Object(c.e)(u.c, 'disabled')),
          s({ id: 'Required' }, 'Required'),
          Object(n.createElement)(o.a, null, Object(c.e)(u.c, 'required')),
          s({ id: 'Error' }, 'Error'),
          Object(n.createElement)(o.a, null, Object(c.e)(u.c, 'error')),
          s({ id: 'Read-only' }, 'Read only'),
          Object(n.createElement)(o.a, null, Object(c.e)(u.c, 'read-only'))
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
