var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/pills/listbox-of-pill-options/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var l, c, s = t[0], o = t[1], i = t[2], m = 0, p = [];
      m < s.length;
      m++
    )
      (c = s[m]),
        Object.prototype.hasOwnProperty.call(n, c) && n[c] && p.push(n[c][0]),
        (n[c] = 0);
    for (l in o) Object.prototype.hasOwnProperty.call(o, l) && (e[l] = o[l]);
    for (u && u(t); p.length; ) p.shift()();
    return r.push.apply(r, i || []), a();
  }
  function a() {
    for (var e, t = 0; t < r.length; t++) {
      for (var a = r[t], l = !0, s = 1; s < a.length; s++) {
        var o = a[s];
        0 !== n[o] && (l = !1);
      }
      l && (r.splice(t--, 1), (e = c((c.s = a[0]))));
    }
    return e;
  }
  var l = {},
    n = {
      116: 0,
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
    r = [];
  function c(t) {
    if (l[t]) return l[t].exports;
    var a = (l[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, c), (a.l = !0), a.exports;
  }
  (c.m = e),
    (c.c = l),
    (c.d = function(e, t, a) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
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
      var a = Object.create(null);
      if (
        (c.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var l in e)
          c.d(
            a,
            l,
            function(t) {
              return e[t];
            }.bind(null, l)
          );
      return a;
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
  var s = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    o = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var i = 0; i < s.length; i++) t(s[i]);
  var u = o;
  return r.push([209, 0]), a();
})({
  0: function(e, t) {
    e.exports = React;
  },
  209: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'examples', function() {
        return o;
      });
    var l = a(0),
      n = a.n(l),
      r = a(18),
      c = a(43),
      s = a(22);
    t.default = n.a.createElement(
      r.e,
      null,
      n.a.createElement(
        r.b,
        null,
        n.a.createElement(r.c, null, n.a.createElement(r.a, { tabIndex: '0' })),
        n.a.createElement(r.c, null, n.a.createElement(r.a, null))
      )
    );
    var o = [
      {
        id: 'listbox-pill-with-icon',
        label: 'With icon',
        element: n.a.createElement(
          r.e,
          null,
          n.a.createElement(
            r.b,
            null,
            n.a.createElement(
              r.c,
              null,
              n.a.createElement(
                r.a,
                { tabIndex: '0' },
                n.a.createElement(s.StandardIcon, {
                  containerClassName: 'slds-pill__icon_container',
                  title: 'Account',
                  assistiveText: 'Account'
                })
              )
            ),
            n.a.createElement(
              r.c,
              null,
              n.a.createElement(
                r.a,
                null,
                n.a.createElement(s.StandardIcon, {
                  containerClassName: 'slds-pill__icon_container',
                  symbol: 'case',
                  title: 'Case',
                  assistiveText: 'Case'
                })
              )
            )
          )
        )
      },
      {
        id: 'listbox-pill-with-avatar',
        label: 'With avatar',
        element: n.a.createElement(
          r.e,
          null,
          n.a.createElement(
            r.b,
            null,
            n.a.createElement(
              r.c,
              null,
              n.a.createElement(
                r.a,
                { tabIndex: '0' },
                n.a.createElement(
                  c.Avatar,
                  {
                    className: 'slds-avatar_x-small slds-pill__icon_container'
                  },
                  n.a.createElement('img', {
                    alt: 'Person name',
                    src: '/assets/images/avatar2.jpg',
                    title: 'User avatar'
                  })
                )
              )
            ),
            n.a.createElement(
              r.c,
              null,
              n.a.createElement(
                r.a,
                null,
                n.a.createElement(
                  c.Avatar,
                  {
                    className: 'slds-avatar_x-small slds-pill__icon_container'
                  },
                  n.a.createElement('img', {
                    alt: 'Person name',
                    src: '/assets/images/avatar2.jpg',
                    title: 'User avatar'
                  })
                )
              )
            )
          )
        )
      },
      {
        id: 'listbox-pill-bare',
        label: 'Bare',
        element: n.a.createElement(
          r.e,
          null,
          n.a.createElement(
            r.b,
            null,
            n.a.createElement(
              r.c,
              null,
              n.a.createElement(r.a, {
                className: 'slds-pill_bare',
                tabIndex: '0'
              })
            ),
            n.a.createElement(
              r.c,
              null,
              n.a.createElement(r.a, { className: 'slds-pill_bare' })
            )
          )
        )
      }
    ];
  }
});
