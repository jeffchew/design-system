var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/breadcrumbs/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, l, c = t[0], i = t[1], s = t[2], d = 0, m = [];
      d < c.length;
      d++
    )
      (l = c[d]),
        Object.prototype.hasOwnProperty.call(a, l) && a[l] && m.push(a[l][0]),
        (a[l] = 0);
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    for (u && u(t); m.length; ) m.shift()();
    return o.push.apply(o, s || []), r();
  }
  function r() {
    for (var e, t = 0; t < o.length; t++) {
      for (var r = o[t], n = !0, c = 1; c < r.length; c++) {
        var i = r[c];
        0 !== a[i] && (n = !1);
      }
      n && (o.splice(t--, 1), (e = l((l.s = r[0]))));
    }
    return e;
  }
  var n = {},
    a = { 9: 0 },
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
  var c = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    i = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var s = 0; s < c.length; s++) t(c[s]);
  var u = i;
  return o.push([259, 0]), r();
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
  259: function(e, t, r) {
    'use strict';
    r.r(t),
      r.d(t, 'getElement', function() {
        return O;
      }),
      r.d(t, 'getContents', function() {
        return _;
      });
    var n = r(0),
      a = r.n(n),
      o = r(4),
      l = r(1),
      c = r(2),
      i = (r(15), r(80)),
      s = r(7),
      u = r(9),
      d = i.a.Crumb,
      m = a.a.createElement(s.b, {
        className: 'slds-button_icon-border-filled slds-button_icon-x-small',
        symbol: 'threedots',
        assistiveText: 'Show More',
        'aria-haspopup': 'true',
        title: 'Show More'
      }),
      b = function(e) {
        return a.a.createElement(
          u.l,
          { className: 'slds-is-open', triggerIcon: m },
          a.a.createElement(
            u.f,
            { className: 'slds-dropdown_left slds-dropdown_actions' },
            a.a.createElement(
              u.h,
              null,
              a.a.createElement(u.g, { tabIndex: '0' }, 'Menu Item One'),
              a.a.createElement(u.g, null, 'Menu Item Two'),
              a.a.createElement(u.g, null, 'Menu Item Three')
            )
          )
        );
      },
      f = function(e) {
        return a.a.createElement(
          i.a,
          null,
          a.a.createElement(
            d,
            { href: 'javascript:void(0);' },
            'Parent Entity'
          ),
          a.a.createElement(
            d,
            { href: 'javascript:void(0);' },
            'Parent Record Name'
          )
        );
      },
      h = function(e) {
        return a.a.createElement(
          i.a,
          { listClassNames: 'slds-grid_vertical-align-center' },
          a.a.createElement(d, { hasMenu: !0 }, a.a.createElement(b, null)),
          a.a.createElement(
            d,
            { href: 'javascript:void(0);' },
            'Parent Entity'
          ),
          a.a.createElement(
            d,
            { href: 'javascript:void(0);' },
            'Parent Record Name'
          )
        );
      },
      p = a.a.createElement(f, null),
      v = [
        {
          id: 'overflow-breadcrumbs',
          label: 'Breadcrumbs with Overflow Menu',
          element: a.a.createElement(h, null)
        }
      ],
      y = o.c.code,
      g = o.c.h2,
      E = o.c.h3,
      w = o.c.p,
      O = function() {
        return Object(n.createElement)(
          o.b,
          {},
          Object(n.createElement)(
            'div',
            { className: 'doc lead' },
            'Use breadcrumbs to note the path of a record and help the user to navigate back to the parent.'
          ),
          Object(n.createElement)(l.a, { exampleOnly: !0 }, p),
          g({ id: 'About-Breadcrumbs' }, 'About Breadcrumbs'),
          w(
            {},
            'Breadcrumbs are typically constructed with an ',
            y({}, 'ol'),
            ' because their order matters. You mark up breadcrumbs with classes from the horizontal list utility. When you add the ',
            y({}, 'slds-breadcrumb'),
            ' class, the separators are automatically generated.'
          ),
          E({ id: 'Accessibility' }, 'Accessibility'),
          w(
            {},
            'Place the breadcrumb in a ',
            y({}, 'nav'),
            ' element with ',
            y({}, 'role="navigation"'),
            '. The ',
            y({}, 'nav'),
            ' element is also marked-up with ',
            y({}, 'aria-label="Breadcrumbs"'),
            ' to describe the type of navigation.'
          ),
          g({ id: 'Base' }, 'Base'),
          Object(n.createElement)(l.a, null, p),
          g({ id: 'Variations' }, 'Variations'),
          E({ id: 'With-Overflow' }, 'With Overflow'),
          w(
            {},
            'The overflow menu breadcrumbs variant is a composition of the overflow menu with actions example of the menus component and breadcrumbs component. To implement this, include the overflow menu as the first ',
            y({}, '<li>'),
            ' in the breadcrumb component. In order to vertically align all of the breadcrumb items to the center, add the ',
            y({}, 'slds-grid_vertical-align-center'),
            ' class to the ',
            y({}, '<ol>'),
            '.'
          ),
          Object(n.createElement)(
            l.a,
            { demoStyles: 'height: 150px;' },
            Object(c.e)(v, 'overflow-breadcrumbs')
          )
        );
      },
      _ = function() {
        return Object(o.a)(O());
      };
  }
});
