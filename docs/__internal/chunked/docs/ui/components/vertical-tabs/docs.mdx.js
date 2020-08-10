var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/vertical-tabs/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, i, r = t[0], c = t[1], l = t[2], b = 0, d = [];
      b < r.length;
      b++
    )
      (i = r[b]),
        Object.prototype.hasOwnProperty.call(o, i) && o[i] && d.push(o[i][0]),
        (o[i] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    for (h && h(t); d.length; ) d.shift()();
    return s.push.apply(s, l || []), a();
  }
  function a() {
    for (var e, t = 0; t < s.length; t++) {
      for (var a = s[t], n = !0, r = 1; r < a.length; r++) {
        var c = a[r];
        0 !== o[c] && (n = !1);
      }
      n && (s.splice(t--, 1), (e = i((i.s = a[0]))));
    }
    return e;
  }
  var n = {},
    o = { 83: 0 },
    s = [];
  function i(t) {
    if (n[t]) return n[t].exports;
    var a = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, i), (a.l = !0), a.exports;
  }
  (i.m = e),
    (i.c = n),
    (i.d = function(e, t, a) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
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
      var a = Object.create(null);
      if (
        (i.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          i.d(
            a,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return a;
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
  var r = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    c = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var l = 0; l < r.length; l++) t(r[l]);
  var h = c;
  return s.push([196, 0]), a();
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
  196: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'getElement', function() {
        return p;
      }),
      a.d(t, 'getContents', function() {
        return m;
      });
    var n = a(0),
      o = a(4),
      s = a(1),
      i = (a(26), a(43), a(15), a(75)),
      r = a(2),
      c = o.c.code,
      l = o.c.h2,
      h = o.c.h3,
      b = o.c.h4,
      d = o.c.li,
      u = o.c.p,
      f = o.c.ul,
      p = function() {
        return Object(n.createElement)(
          o.b,
          {},
          Object(n.createElement)(
            'div',
            { className: 'doc lead' },
            'A component that shows groups of content, separated into tabs, and controlled by the tabs'
          ),
          Object(n.createElement)(
            s.a,
            { exampleOnly: !0 },
            Object(r.e)(i.b, 'with-icons')
          ),
          l({ id: 'About-Vertical-Tabs' }, 'About Vertical Tabs'),
          u(
            {},
            "The Vertical Tabs component serves as a container to show groups of content, divided into tabs. Each tab label should correspond with a block of related content. Only one tab's contents are visible at any given time."
          ),
          u(
            {},
            "This component varies from the regular 'tabs' component, with the tabs arranged on the left in a vertical space, instead of on the top in a horizontal space."
          ),
          h({ id: 'Implementation' }, 'Implementation'),
          u({}, 'The Tab Component has the following markup requirements:'),
          f(
            {},
            d(
              {},
              'The ',
              c({}, '.slds-is-active'),
              ' modifier class is required on the ',
              c({}, '.slds-vertical-tabs__nav-item'),
              ' element that is active (its content is being shown).'
            ),
            d(
              {},
              'The ',
              c({}, '.slds-has-focus'),
              ' modifier class is required on the ',
              c({}, '.slds-vertical-tabs__nav-item'),
              ' element that has focus.'
            ),
            d(
              {},
              'The ',
              c({}, '.slds-show'),
              ' modifier class is required on the ',
              c({}, '.slds-vertical-tabs__content'),
              ' element that is being shown (their tab label is selected).'
            ),
            d(
              {},
              'The ',
              c({}, '.slds-hide'),
              ' modifier class is required on all ',
              c({}, '.slds-vertical-tabs__content'),
              ' elements that are not being shown (their tab label is not selected).'
            ),
            d(
              {},
              'If an icon or badge is to be used in combination with a tab nav item label, you can wrap an icon on the left of the label in a ',
              c({}, 'span'),
              ' with the class ',
              c({}, 'slds-vertical-tabs__left-icon'),
              '. If you require an icon or badge to the right of the label, you can wrap the element in a ',
              c({}, 'span'),
              ' with the class ',
              c({}, 'slds-vertical-tabs__right-icon'),
              '.'
            )
          ),
          h({ id: 'Accessibility' }, 'Accessibility'),
          u({}, 'Vertical Tabbed UIs have three parts with specific'),
          b({ id: 'ARIA-Roles' }, 'ARIA Roles'),
          f(
            {},
            d({}, 'The tab list, which should have ', c({}, 'role="tablist"')),
            d(
              {},
              'The tabs in that list, which should each be an ',
              c({}, '<a role="tab">'),
              ' anchor wrapped in a ',
              c({}, '<li role="presentation">'),
              ' li'
            ),
            d(
              {},
              "The tab panels, which display each tab's content and should each have ",
              c({}, 'role="tabpanel"')
            )
          ),
          b({ id: 'Markup' }, 'Markup'),
          f(
            {},
            d(
              {},
              'Selected tab’s anchor has ',
              c({}, 'aria-selected="true"'),
              ', all other tabs’ anchors have ',
              c({}, 'aria-selected="false"')
            ),
            d(
              {},
              'Selected tab’s anchor has ',
              c({}, 'tabindex="0"'),
              ', all other tabs have ',
              c({}, 'tabindex="-1"')
            ),
            d(
              {},
              'Each tab’s anchor has an ',
              c({}, 'aria-controls'),
              ' attribute whose value is the id of the associated ',
              c({}, '<div role="tabpanel">')
            ),
            d(
              {},
              'Each tab panel has an ',
              c({}, 'aria-labelledby'),
              ' attribute whose value is the id of its associated ',
              c({}, '<a role="tab">')
            )
          ),
          b({ id: 'Keyboard-Interactions' }, 'Keyboard Interactions'),
          f(
            {},
            d(
              {},
              'Arrow keys, when focus is on selected tab, cycle selection to the next or previous tab'
            ),
            d(
              {},
              'Tab key, when focus is before the tab list, moves focus to the selected tab'
            ),
            d(
              {},
              'Tab key, when focus is on selected tab, moves focus into the selected tab’s associated tab panel or to the next focusable element on the page if that panel has no focusable elements'
            ),
            d(
              {},
              'Shift+Tab keys, when focus is on first element in a tab panel, move focus to the selected tab'
            )
          ),
          l({ id: 'Base' }, 'Base'),
          Object(n.createElement)(s.a, null, i.a),
          l({ id: 'Examples' }, 'Examples'),
          h({ id: 'With-Icons' }, 'With Icons'),
          Object(n.createElement)(s.a, null, Object(r.e)(i.b, 'with-icons')),
          h({ id: 'With-Badges' }, 'With Badges'),
          Object(n.createElement)(s.a, null, Object(r.e)(i.b, 'with-badges')),
          l({ id: 'Modifiers' }, 'Modifiers'),
          h({ id: 'Interactions' }, 'Interactions'),
          b({ id: 'Item-Focus' }, 'Item Focus'),
          Object(n.createElement)(
            s.a,
            { toggleCode: !1 },
            Object(r.e)(i.b, 'item-focus')
          ),
          b({ id: 'Item-Active' }, 'Item Active'),
          Object(n.createElement)(s.a, { toggleCode: !1 }, i.a)
        );
      },
      m = function() {
        return Object(o.a)(p());
      };
  }
});
