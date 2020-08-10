var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/breadcrumbs/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, l, u = t[0], c = t[1], s = t[2], d = 0, f = [];
      d < u.length;
      d++
    )
      (l = u[d]),
        Object.prototype.hasOwnProperty.call(a, l) && a[l] && f.push(a[l][0]),
        (a[l] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    for (i && i(t); f.length; ) f.shift()();
    return o.push.apply(o, s || []), r();
  }
  function r() {
    for (var e, t = 0; t < o.length; t++) {
      for (var r = o[t], n = !0, u = 1; u < r.length; u++) {
        var c = r[u];
        0 !== a[c] && (n = !1);
      }
      n && (o.splice(t--, 1), (e = l((l.s = r[0]))));
    }
    return e;
  }
  var n = {},
    a = {
      10: 0,
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
  function l(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, l), (r.l = !0), r.exports;
  }
  (l.m = e),
    (l.c = n),
    (l.d = function(e, t, r) {
      l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
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
      var r = Object.create(null);
      if (
        (l.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          l.d(
            r,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
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
  var u = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    c = u.push.bind(u);
  (u.push = t), (u = u.slice());
  for (var s = 0; s < u.length; s++) t(u[s]);
  var i = c;
  return o.push([113, 0]), r();
})({
  0: function(e, t) {
    e.exports = React;
  },
  113: function(e, t, r) {
    'use strict';
    r.r(t),
      r.d(t, 'Context', function() {
        return d;
      }),
      r.d(t, 'BreadcrumbsBase', function() {
        return f;
      }),
      r.d(t, 'BreadcrumbsWithOverflow', function() {
        return p;
      }),
      r.d(t, 'states', function() {
        return m;
      });
    var n = r(0),
      a = r.n(n),
      o = r(61),
      l = r(4),
      u = r(14),
      c = o.a.Crumb,
      s = a.a.createElement(l.b, {
        className: 'slds-button_icon-border-filled slds-button_icon-x-small',
        symbol: 'threedots',
        assistiveText: 'Show More',
        'aria-haspopup': 'true',
        title: 'Show More'
      }),
      i = function(e) {
        return a.a.createElement(
          u.Trigger,
          { className: 'slds-is-open', triggerIcon: s },
          a.a.createElement(
            u.Menu,
            { className: 'slds-dropdown_left slds-dropdown_actions' },
            a.a.createElement(
              u.MenuList,
              null,
              a.a.createElement(u.MenuItem, { tabIndex: '0' }, 'Menu Item One'),
              a.a.createElement(u.MenuItem, null, 'Menu Item Two'),
              a.a.createElement(u.MenuItem, null, 'Menu Item Three')
            )
          )
        );
      },
      d = function(e) {
        return a.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '150px' } },
          e.children
        );
      },
      f = function(e) {
        return a.a.createElement(
          o.a,
          null,
          a.a.createElement(
            c,
            { href: 'javascript:void(0);' },
            'Parent Entity'
          ),
          a.a.createElement(
            c,
            { href: 'javascript:void(0);' },
            'Parent Record Name'
          )
        );
      },
      p = function(e) {
        return a.a.createElement(
          o.a,
          { listClassNames: 'slds-grid_vertical-align-center' },
          a.a.createElement(c, { hasMenu: !0 }, a.a.createElement(i, null)),
          a.a.createElement(
            c,
            { href: 'javascript:void(0);' },
            'Parent Entity'
          ),
          a.a.createElement(
            c,
            { href: 'javascript:void(0);' },
            'Parent Record Name'
          )
        );
      };
    t.default = a.a.createElement(f, null);
    var m = [
      {
        id: 'overflow-breadcrumbs',
        label: 'Breadcrumbs with Overflow Menu',
        element: a.a.createElement(p, null)
      }
    ];
  }
});
