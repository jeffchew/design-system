var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/avatar/initials/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, i, l = t[0], c = t[1], u = t[2], p = 0, f = [];
      p < l.length;
      p++
    )
      (i = l[p]),
        Object.prototype.hasOwnProperty.call(a, i) && a[i] && f.push(a[i][0]),
        (a[i] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    for (s && s(t); f.length; ) f.shift()();
    return o.push.apply(o, u || []), n();
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], r = !0, l = 1; l < n.length; l++) {
        var c = n[l];
        0 !== a[c] && (r = !1);
      }
      r && (o.splice(t--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = {
      7: 0,
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
    c = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var u = 0; u < l.length; u++) t(l[u]);
  var s = c;
  return o.push([119, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  119: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'examples', function() {
        return l;
      });
    var r = n(0),
      a = n.n(r),
      o = n(43),
      i = n(33);
    t.default = a.a.createElement(
      o.Avatar,
      null,
      a.a.createElement(i.c, {
        iconClassName: 'slds-icon-standard-account',
        title: 'company name',
        initials: 'Ac'
      })
    );
    var l = [
      {
        id: 'linked-avatar-initials',
        label: 'Wrapped in a link',
        element: a.a.createElement(
          'a',
          { href: 'javascript:void(0);' },
          a.a.createElement(
            o.Avatar,
            null,
            a.a.createElement(i.c, {
              iconClassName: 'slds-icon-standard-account',
              title: 'company name',
              initials: 'Ac'
            })
          )
        )
      }
    ];
  }
});
