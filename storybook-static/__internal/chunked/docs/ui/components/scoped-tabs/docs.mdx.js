var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/scoped-tabs/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, o, c = t[0], i = t[1], l = t[2], u = 0, h = [];
      u < c.length;
      u++
    )
      (o = c[u]),
        Object.prototype.hasOwnProperty.call(s, o) && s[o] && h.push(s[o][0]),
        (s[o] = 0);
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    for (d && d(t); h.length; ) h.shift()();
    return r.push.apply(r, l || []), a();
  }
  function a() {
    for (var e, t = 0; t < r.length; t++) {
      for (var a = r[t], n = !0, c = 1; c < a.length; c++) {
        var i = a[c];
        0 !== s[i] && (n = !1);
      }
      n && (r.splice(t--, 1), (e = o((o.s = a[0]))));
    }
    return e;
  }
  var n = {},
    s = { 66: 0 },
    r = [];
  function o(t) {
    if (n[t]) return n[t].exports;
    var a = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
  }
  (o.m = e),
    (o.c = n),
    (o.d = function(e, t, a) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (o.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (o.t = function(e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (o.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          o.d(
            a,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return a;
    }),
    (o.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return o.d(t, 'a', t), t;
    }),
    (o.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = '/assets/scripts/bundle/');
  var c = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    i = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var l = 0; l < c.length; l++) t(c[l]);
  var d = i;
  return r.push([198, 0]), a();
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
  198: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'getElement', function() {
        return v;
      }),
      a.d(t, 'getContents', function() {
        return m;
      });
    var n = a(0),
      s = a(4),
      r = a(1),
      o = a(2),
      c = a(74),
      i = s.c.code,
      l = s.c.h2,
      d = s.c.h3,
      u = s.c.h4,
      h = s.c.li,
      b = s.c.p,
      p = s.c.strong,
      f = s.c.ul,
      v = function() {
        return Object(n.createElement)(
          s.b,
          {},
          Object(n.createElement)(
            'div',
            { className: 'doc lead' },
            'A tab keeps related content in a single container that is shown and hidden through navigation.'
          ),
          Object(n.createElement)(r.a, { exampleOnly: !0 }, c.b),
          l({ id: 'About-Scoped-Tabs' }, 'About Scoped Tabs'),
          b(
            {},
            'Because tab sets can be nested, pay close attention to the markup. They are constructed to prevent styles from leaking from parent tab sets into child tab sets.'
          ),
          d({ id: 'Accessibility' }, 'Accessibility'),
          b(
            {},
            'Tabbed UIs have three parts with specific ',
            p({}, 'ARIA'),
            ' role requirements:'
          ),
          f(
            {},
            h({}, 'The tab list, which should have ', i({}, 'role="tablist"')),
            h(
              {},
              'The tabs in that list, which should each be an ',
              i({}, '<a role="tab">'),
              ' anchor wrapped in a ',
              i({}, '<li role="presentation">'),
              ' list item'
            ),
            h(
              {},
              'The tab panels, which display each tab’s content and should each have ',
              i({}, 'role="tabpanel"')
            )
          ),
          u({ id: 'Markup' }, 'Markup'),
          f(
            {},
            h(
              {},
              'Selected tab’s anchor has ',
              i({}, 'aria-selected="true"'),
              ', all other tabs’ anchors have ',
              i({}, 'aria-selected="false"')
            ),
            h(
              {},
              'Selected tab’s anchor has ',
              i({}, 'tabindex="0"'),
              ', all other tabs have ',
              i({}, 'tabindex="-1"')
            ),
            h(
              {},
              'Each tab’s anchor has an ',
              i({}, 'aria-controls'),
              ' attribute whose value is the id of the associated ',
              i({}, '<div role="tabpanel">')
            ),
            h(
              {},
              'Each tab panel has an ',
              i({}, 'aria-labelledby'),
              ' attribute whose value is the id of its associated ',
              i({}, '<a role="tab">')
            )
          ),
          u({ id: 'Keyboard-Interactions' }, 'Keyboard Interactions'),
          f(
            {},
            h(
              {},
              'Arrow keys, when focus is on selected tab, cycle selection to the next or previous tab'
            ),
            h(
              {},
              'Tab key, when focus is before the tab list, moves focus to the selected tab'
            ),
            h(
              {},
              'Tab key, when focus is on selected tab, moves focus into the selected tab’s associated tab panel or to the next focusable element on the page if that panel has no focusable elements'
            ),
            h(
              {},
              'Shift+Tab keys, when focus is on first element in a tab panel, move focus to the selected tab'
            )
          ),
          l({ id: 'Base' }, 'Base'),
          Object(n.createElement)(r.a, null, c.b),
          l({ id: 'Selecting-Tabs' }, 'Selecting Tabs'),
          Object(n.createElement)(r.a, null, Object(o.e)(c.d, 'selected')),
          d({ id: 'JavaScript-Needs' }, 'JavaScript Needs'),
          b({}, 'The active tab has two markup requirements:'),
          f(
            {},
            h(
              {},
              'The ',
              i({}, '.slds-active'),
              ' class should be placed on the ',
              i({}, 'li'),
              ' with ',
              i({}, '.slds-tabs_{variant}__item'),
              '.'
            ),
            h(
              {},
              'The corresponding ',
              i({}, '.slds-tabs_{variant}__content'),
              ' container receives ',
              i({}, '.slds-show'),
              '.'
            )
          ),
          b(
            {},
            'Inactive ',
            i({}, '.slds-tabs_{variant}__content'),
            ' containers receive ',
            i({}, '.slds-hide'),
            '.\nWhen the user clicks a different tab, move the ',
            i({}, '.slds-active'),
            ' class and\ntoggle the ',
            i({}, '.slds-hide'),
            '/',
            i({}, '.slds-show'),
            ' classes.'
          ),
          l({ id: 'With-Overflowing-Items' }, 'With Overflowing Items'),
          Object(n.createElement)(
            r.a,
            null,
            Object(o.e)(c.c, 'overflowing-items')
          ),
          l({ id: 'Sizes' }, 'Sizes'),
          d({ id: 'Medium' }, 'Medium'),
          Object(n.createElement)(r.a, null, Object(o.e)(c.c, 'size-medium')),
          d({ id: 'Large' }, 'Large'),
          Object(n.createElement)(r.a, null, Object(o.e)(c.c, 'size-large'))
        );
      },
      m = function() {
        return Object(s.a)(v());
      };
  }
});
