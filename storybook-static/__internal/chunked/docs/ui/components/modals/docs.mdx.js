var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/modals/docs.mdx.js'] = (function(
  e
) {
  function t(t) {
    for (
      var o, s, r = t[0], l = t[1], d = t[2], h = 0, u = [];
      h < r.length;
      h++
    )
      (s = r[h]),
        Object.prototype.hasOwnProperty.call(n, s) && n[s] && u.push(n[s][0]),
        (n[s] = 0);
    for (o in l) Object.prototype.hasOwnProperty.call(l, o) && (e[o] = l[o]);
    for (c && c(t); u.length; ) u.shift()();
    return i.push.apply(i, d || []), a();
  }
  function a() {
    for (var e, t = 0; t < i.length; t++) {
      for (var a = i[t], o = !0, r = 1; r < a.length; r++) {
        var l = a[r];
        0 !== n[l] && (o = !1);
      }
      o && (i.splice(t--, 1), (e = s((s.s = a[0]))));
    }
    return e;
  }
  var o = {},
    n = { 49: 0 },
    i = [];
  function s(t) {
    if (o[t]) return o[t].exports;
    var a = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, s), (a.l = !0), a.exports;
  }
  (s.m = e),
    (s.c = o),
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
        for (var o in e)
          s.d(
            a,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
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
  var r = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    l = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var d = 0; d < r.length; d++) t(r[d]);
  var c = l;
  return i.push([201, 0]), a();
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
  201: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'getElement', function() {
        return g;
      }),
      a.d(t, 'getContents', function() {
        return y;
      });
    var o = a(0),
      n = a(4),
      i = a(22),
      s = a(1),
      r = a(2),
      l = a(33),
      d = n.c.a,
      c = n.c.code,
      h = n.c.h2,
      u = n.c.h3,
      m = n.c.h4,
      p = n.c.li,
      f = n.c.p,
      b = n.c.ul,
      g = function() {
        return Object(o.createElement)(
          n.b,
          {},
          Object(o.createElement)(
            'div',
            { className: 'doc lead' },
            'Modals are used to display content in a layer above the app. This paradigm is used in cases such as the creation or editing of a record, as well as various types of messaging and wizards.'
          ),
          Object(o.createElement)(
            s.a,
            { exampleOnly: !0, isViewport: !0, demoStyles: 'height: 640px;' },
            i.f
          ),
          h({ id: 'About-Modals' }, 'About Modals'),
          f(
            {},
            'Default modals are used in the vast majority of cases. They are as wide as 50% of the viewport, but include a minimum and maximum width to avoid going too narrow or too wide.'
          ),
          f(
            {},
            'Modals always have an equal amount of space at the top and bottom to account for the height of the close button.'
          ),
          f(
            {},
            'Modals grow according to how much content is within, but once the modal full height (including the previously mentioned space on top and bottom), the content area will begin to scroll. (This scrolling is currently not available in Salesforce1 Mobile.)'
          ),
          f(
            {},
            'Modals can have a tagline in the header, simply by adding a paragraph after the heading.'
          ),
          f(
            {},
            'By default, the content area of the modal does not have spacing. This allows for content such as Tables to be full-width to the modal. To get spacing when you need it, apply a padding utility (',
            c({}, '.slds-p-around_medium'),
            ').'
          ),
          f(
            {},
            'Modal headers can also have taglines, if you need to provide additional context. This tagline can also contain links, or the whole thing could be a link in and of itself.'
          ),
          f(
            {},
            'Large modals call for large amounts of content. The height follows the same behavior and styles of other modals. The width changes to 90% of the viewport, and uses a wider minimum width and no maximum width.'
          ),
          f(
            {},
            'These are modals that require a linearly directional paradigm of navigation (“Next” and “Back”, etc.) — the actionable buttons in the modal footer live on the left and right, rather than all on the right. These can either be within a large or default modal, depending on the use case.'
          ),
          f(
            {},
            "If you're using a Modal for a system alert that the user must acknowledge, consider using a ",
            d({ href: '/components/prompt' }, 'Prompt'),
            '.'
          ),
          u({ id: 'Accessibility' }, 'Accessibility'),
          f(
            {},
            'Modals, by definition, trap focus. This means that if a user presses Tab or Shift+Tab while their keyboard focus is in the modal, their focus should stay in and cycle through the modal’s content. Focus shouldn’t return to the underlying page until the user presses the Esc key, presses an explicit “Cancel” or “Close” button in the modal, or performs another action that closes the modal.'
          ),
          m({ id: 'Expected-markup' }, 'Expected markup'),
          b(
            {},
            p({}, 'Modal has ', c({}, 'role="dialog"')),
            p(
              {},
              'When the modal is open, everything behind it has HTML attribute ',
              c({}, 'aria-hidden="true"'),
              ", so assistive technology won't read out the underlying page. The best way to do this is to give the modal and the page separate wrapper elements and toggle ",
              c({}, 'aria-hidden="true"'),
              '/',
              c({}, 'aria-hidden="false"'),
              " on the main page's wrapper depending on whether or not the modal is open."
            ),
            p({}, 'Modal contains an HTML heading'),
            p(
              {},
              'Modal has an ',
              c({}, 'aria-labelledby'),
              ' attribute whose value is the id of the modal’s heading'
            )
          ),
          m(
            { id: 'Expected-keyboard-interactions' },
            'Expected keyboard interactions'
          ),
          b(
            {},
            p(
              {},
              'Esc key closes the modal and moves focus to whatever triggered the modal to open'
            ),
            p(
              {},
              'Tab key at bottom of modal cycles focus back to first focusable element at top of modal'
            ),
            p(
              {},
              'Shift+Tab keys at top of modal cycle focus back to last focusable element at bottom of modal'
            ),
            p({}, 'Enter key submits modal’s form data, if applicable')
          ),
          u({ id: 'Mobile' }, 'Mobile'),
          Object(o.createElement)(l.a, {
            patternSpecificText:
              'modals will have buttons of increased size to accommodate tapping with a finger instead of the more precise mouse cursor'
          }),
          Object(o.createElement)(
            s.a,
            { frameOnly: !0, frameStyles: { height: '640px' } },
            i.f
          ),
          h({ id: 'Base' }, 'Base'),
          Object(o.createElement)(
            s.a,
            { isViewport: !0, demoStyles: Object(r.d)(i.g, 'default') },
            Object(r.e)(i.g, 'default')
          ),
          h({ id: 'Examples' }, 'Examples'),
          u({ id: 'Taglines' }, 'Taglines'),
          Object(o.createElement)(
            s.a,
            { isViewport: !0, demoStyles: Object(r.d)(i.g, 'taglines') },
            Object(r.e)(i.g, 'taglines')
          ),
          u({ id: 'Headless' }, 'Headless'),
          Object(o.createElement)(
            s.a,
            { isViewport: !0, demoStyles: Object(r.d)(i.g, 'headless') },
            Object(r.e)(i.g, 'headless')
          ),
          u({ id: 'Footless' }, 'Footless'),
          Object(o.createElement)(
            s.a,
            { isViewport: !0, demoStyles: Object(r.d)(i.g, 'footless') },
            Object(r.e)(i.g, 'footless')
          ),
          u({ id: 'Directional' }, 'Directional'),
          Object(o.createElement)(
            s.a,
            { isViewport: !0, demoStyles: Object(r.d)(i.g, 'directional') },
            Object(r.e)(i.g, 'directional')
          ),
          u({ id: 'Small-Modal' }, 'Small Modal'),
          Object(o.createElement)(
            s.a,
            { isViewport: !0, demoStyles: Object(r.d)(i.g, 'small') },
            Object(r.e)(i.g, 'small')
          ),
          u({ id: 'Medium-Modal' }, 'Medium Modal'),
          Object(o.createElement)(
            s.a,
            { isViewport: !0, demoStyles: Object(r.d)(i.g, 'medium') },
            Object(r.e)(i.g, 'medium')
          ),
          u({ id: 'Large-Modal' }, 'Large Modal'),
          Object(o.createElement)(
            s.a,
            { isViewport: !0, demoStyles: Object(r.d)(i.g, 'large') },
            Object(r.e)(i.g, 'large')
          )
        );
      },
      y = function() {
        return Object(n.a)(g());
      };
  }
});
