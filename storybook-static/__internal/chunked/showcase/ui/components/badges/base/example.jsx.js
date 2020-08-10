var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/badges/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var l, i, o = t[0], c = t[1], s = t[2], b = 0, m = [];
      b < o.length;
      b++
    )
      (i = o[b]),
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && m.push(r[i][0]),
        (r[i] = 0);
    for (l in c) Object.prototype.hasOwnProperty.call(c, l) && (e[l] = c[l]);
    for (u && u(t); m.length; ) m.shift()();
    return a.push.apply(a, s || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], l = !0, o = 1; o < n.length; o++) {
        var c = n[o];
        0 !== r[c] && (l = !1);
      }
      l && (a.splice(t--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var l = {},
    r = {
      8: 0,
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
    if (l[t]) return l[t].exports;
    var n = (l[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = e),
    (i.c = l),
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
        for (var l in e)
          i.d(
            n,
            l,
            function(t) {
              return e[t];
            }.bind(null, l)
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
  var o = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    c = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var s = 0; s < o.length; s++) t(o[s]);
  var u = c;
  return a.push([191, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  191: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'examples', function() {
        return i;
      }),
      n.d(t, 'states', function() {
        return o;
      });
    var l = n(0),
      r = n.n(l),
      a = n(39);
    t.default = r.a.createElement(a.a, null, 'Badge Label');
    var i = [
        {
          id: 'inverse',
          label: 'Inverse',
          element: r.a.createElement(a.c, null, 'Inverse badge')
        },
        {
          id: 'with-left-icon',
          label: 'With left icon',
          element: r.a.createElement(
            a.a,
            null,
            r.a.createElement(a.b, { symbol: 'moneybag' }),
            '423 Credits Available'
          )
        },
        {
          id: 'with-right-icon',
          label: 'With right icon',
          element: r.a.createElement(
            a.a,
            null,
            '423 Credits Available',
            r.a.createElement(a.b, { symbol: 'moneybag', align: 'right' })
          )
        },
        {
          id: 'light-with-left-icon',
          label: 'Light with left icon',
          element: r.a.createElement(
            a.d,
            null,
            r.a.createElement(a.b, { symbol: 'moneybag' }),
            '423 Credits Available'
          )
        },
        {
          id: 'light-with-right-icon',
          label: 'Light with right icon',
          element: r.a.createElement(
            a.d,
            null,
            '423 Credits Available',
            r.a.createElement(a.b, { symbol: 'moneybag', align: 'right' })
          )
        },
        {
          id: 'inverse-with-left-icon',
          label: 'Inverse with left icon',
          element: r.a.createElement(
            a.c,
            null,
            r.a.createElement(a.b, { symbol: 'moneybag', isInverse: !0 }),
            '423 Credits Available'
          )
        },
        {
          id: 'inverse-with-right-icon',
          label: 'Inverse with right icon',
          element: r.a.createElement(
            a.c,
            null,
            '423 Credits Available',
            r.a.createElement(a.b, {
              symbol: 'moneybag',
              align: 'right',
              isInverse: !0
            })
          )
        },
        {
          id: 'badge-with-child',
          label: 'With Child Element',
          element: r.a.createElement(
            a.a,
            null,
            'Component In: ',
            r.a.createElement('em', null, 'Lightning')
          )
        }
      ],
      o = [
        {
          id: 'success',
          label: 'Success',
          element: r.a.createElement(a.a, { isSuccess: !0 }, 'Success badge')
        },
        {
          id: 'warning',
          label: 'Warning',
          element: r.a.createElement(a.a, { isWarning: !0 }, 'Warning badge')
        },
        {
          id: 'error',
          label: 'Error',
          element: r.a.createElement(a.a, { isError: !0 }, 'Error badge')
        }
      ];
  }
});
