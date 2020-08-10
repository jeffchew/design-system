var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/pills/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, s, c = t[0], o = t[1], i = t[2], d = 0, p = [];
      d < c.length;
      d++
    )
      (s = c[d]),
        Object.prototype.hasOwnProperty.call(r, s) && r[s] && p.push(r[s][0]),
        (r[s] = 0);
    for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
    for (u && u(t); p.length; ) p.shift()();
    return l.push.apply(l, i || []), a();
  }
  function a() {
    for (var e, t = 0; t < l.length; t++) {
      for (var a = l[t], n = !0, c = 1; c < a.length; c++) {
        var o = a[c];
        0 !== r[o] && (n = !1);
      }
      n && (l.splice(t--, 1), (e = s((s.s = a[0]))));
    }
    return e;
  }
  var n = {},
    r = {
      115: 0,
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
    l = [];
  function s(t) {
    if (n[t]) return n[t].exports;
    var a = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, s), (a.l = !0), a.exports;
  }
  (s.m = e),
    (s.c = n),
    (s.d = function(e, t, a) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
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
      var a = Object.create(null);
      if (
        (s.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          s.d(
            a,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return a;
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
    o = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var i = 0; i < c.length; i++) t(c[i]);
  var u = o;
  return l.push([154, 0]), a();
})({
  0: function(e, t) {
    e.exports = React;
  },
  154: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'states', function() {
        return c;
      }),
      a.d(t, 'examples', function() {
        return o;
      });
    var n = a(0),
      r = a.n(n),
      l = a(8),
      s = a(18);
    t.default = r.a.createElement(s.d, null);
    var c = [
        {
          id: 'error',
          label: 'Error',
          element: r.a.createElement(
            s.d,
            { className: 'slds-has-error' },
            r.a.createElement(
              'span',
              { className: 'slds-pill__icon_container' },
              r.a.createElement(
                'span',
                { className: 'slds-icon_container', title: 'Error' },
                r.a.createElement(l.a, {
                  className: 'slds-icon slds-icon-text-error',
                  sprite: 'utility',
                  symbol: 'error'
                }),
                r.a.createElement(
                  'span',
                  { className: 'slds-assistive-text' },
                  'Warning'
                )
              )
            )
          )
        },
        {
          id: 'truncated',
          label: 'Truncated',
          demoStyles: 'width: 220px;',
          element: r.a.createElement(
            s.e,
            null,
            r.a.createElement(s.d, {
              label: 'Pill label that is longer than the area that contains it'
            })
          )
        }
      ],
      o = [
        {
          id: 'icon',
          label: 'With icon',
          element: r.a.createElement(
            s.d,
            null,
            r.a.createElement(
              'span',
              { className: 'slds-pill__icon_container' },
              r.a.createElement(
                'span',
                {
                  className: 'slds-icon_container slds-icon-standard-account',
                  title: 'Account'
                },
                r.a.createElement(l.a, {
                  className: 'slds-icon',
                  sprite: 'standard',
                  symbol: 'account'
                }),
                r.a.createElement(
                  'span',
                  { className: 'slds-assistive-text' },
                  'Account'
                )
              )
            )
          )
        },
        {
          id: 'avatar',
          label: 'With avatar',
          element: r.a.createElement(
            s.d,
            null,
            r.a.createElement(
              'span',
              { className: 'slds-pill__icon_container' },
              r.a.createElement(
                'span',
                {
                  className: 'slds-avatar slds-avatar_circle',
                  title: 'User avatar'
                },
                r.a.createElement('img', {
                  alt: 'Person name',
                  src: '/assets/images/avatar2.jpg',
                  title: 'User avatar'
                })
              )
            )
          )
        },
        {
          id: 'container',
          label: 'Pill with Container',
          element: r.a.createElement(
            s.e,
            null,
            r.a.createElement(s.d, null),
            r.a.createElement(s.d, null),
            r.a.createElement(s.d, null)
          )
        }
      ];
  }
});
