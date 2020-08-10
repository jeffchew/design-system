var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/expandable-section/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var o, s, r = t[0], c = t[1], l = t[2], d = 0, h = [];
      d < r.length;
      d++
    )
      (s = r[d]),
        Object.prototype.hasOwnProperty.call(a, s) && a[s] && h.push(a[s][0]),
        (a[s] = 0);
    for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
    for (u && u(t); h.length; ) h.shift()();
    return i.push.apply(i, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], o = !0, r = 1; r < n.length; r++) {
        var c = n[r];
        0 !== a[c] && (o = !1);
      }
      o && (i.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var o = {},
    a = { 34: 0 },
    i = [];
  function s(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.m = e),
    (s.c = o),
    (s.d = function(e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
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
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          s.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
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
  var r = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    c = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var l = 0; l < r.length; l++) t(r[l]);
  var u = c;
  return i.push([130, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  130: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getElement', function() {
        return y;
      }),
      n.d(t, 'getContents', function() {
        return v;
      });
    var o = n(0),
      a = n(4),
      i = n(1),
      s = (n(26), n(43), n(15), n(2)),
      r = n(65),
      c = a.c.code,
      l = a.c.h2,
      u = a.c.h3,
      d = a.c.h4,
      h = a.c.li,
      p = a.c.p,
      b = a.c.strong,
      f = a.c.ul,
      y = function() {
        return Object(o.createElement)(
          a.b,
          {},
          Object(o.createElement)(
            'div',
            { className: 'doc lead' },
            'Toggle visibility of section content'
          ),
          Object(o.createElement)(i.a, { exampleOnly: !0 }, r.e),
          l({ id: 'About-Expandable-Section' }, 'About Expandable Section'),
          p(
            {},
            'Section Titles are interactive titles that open and close sections, typically on a form.'
          ),
          u({ id: 'Accessibility' }, 'Accessibility'),
          p(
            {},
            'If the Section Title is interactive, the button needs to be associated with the section so that assistive technology knows what the button opens and closes. The button and section also need ARIA attributes to indicate the open and closed state of the section.'
          ),
          d({ id: 'Markup' }, 'Markup'),
          p({}, b({}, 'Button:')),
          f(
            {},
            h(
              {},
              c({}, 'aria-controls'),
              ' is used to create an association between the button and the section. If the section has an ',
              c({}, 'id="content"'),
              ', then the button should have ',
              c({}, 'aria-controls="content"'),
              '.'
            ),
            h(
              {},
              c({}, 'aria-expanded'),
              ' indicates if the section is open or closed and is read aloud by assistive technology when the button is focused.'
            )
          ),
          p({}, b({}, 'Section:')),
          f(
            {},
            h(
              {},
              c({}, 'aria-hidden'),
              ' indicates if the section is open or closed, and if set to ',
              c({}, 'true'),
              ', assistive technology hides the section.'
            )
          ),
          d({ id: 'Keyboard-Interactions' }, 'Keyboard Interactions'),
          f(
            {},
            h(
              {},
              'The button should behave as a normal button. The user should be able to tab to focus it and press enter/space to activate it.'
            )
          ),
          d(
            { id: 'Updating-Operation-and-State' },
            'Updating Operation and State'
          ),
          f(
            {},
            h(
              {},
              'When the user interacts with the button to open the section, ',
              c({}, 'aria-expanded'),
              ' on the button should be ',
              c({}, 'true'),
              ' and ',
              c({}, 'aria-hidden'),
              ' on the section should be ',
              c({}, 'false'),
              '.'
            ),
            h(
              {},
              'When the user interacts with the button to close the section, ',
              c({}, 'aria-expanded'),
              ' on the button should be ',
              c({}, 'false'),
              ' and ',
              c({}, 'aria-hidden'),
              ' on the section should be ',
              c({}, 'true'),
              '.'
            )
          ),
          l({ id: 'Base' }, 'Base'),
          Object(o.createElement)(i.a, null, r.e),
          l({ id: 'Examples' }, 'Examples'),
          u({ id: 'Non-collapsible' }, 'Non-collapsible'),
          Object(o.createElement)(
            i.a,
            null,
            Object(s.e)(r.f, 'non-collapsable')
          ),
          l({ id: 'States' }, 'States'),
          u({ id: 'Closed' }, 'Closed'),
          Object(o.createElement)(i.a, null, Object(s.e)(r.g, 'closed'))
        );
      },
      v = function() {
        return Object(a.a)(y());
      };
  },
  18: function(e, t) {
    e.exports = JSBeautify;
  },
  19: function(e, t) {
    e.exports = ReactDOM;
  }
});
