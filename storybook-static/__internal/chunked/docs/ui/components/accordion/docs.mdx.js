var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/accordion/docs.mdx.js'] = (function(
  e
) {
  function n(n) {
    for (
      var c, o, i = n[0], s = n[1], l = n[2], m = 0, u = [];
      m < i.length;
      m++
    )
      (o = i[m]),
        Object.prototype.hasOwnProperty.call(r, o) && r[o] && u.push(r[o][0]),
        (r[o] = 0);
    for (c in s) Object.prototype.hasOwnProperty.call(s, c) && (e[c] = s[c]);
    for (d && d(n); u.length; ) u.shift()();
    return a.push.apply(a, l || []), t();
  }
  function t() {
    for (var e, n = 0; n < a.length; n++) {
      for (var t = a[n], c = !0, i = 1; i < t.length; i++) {
        var s = t[i];
        0 !== r[s] && (c = !1);
      }
      c && (a.splice(n--, 1), (e = o((o.s = t[0]))));
    }
    return e;
  }
  var c = {},
    r = { 1: 0 },
    a = [];
  function o(n) {
    if (c[n]) return c[n].exports;
    var t = (c[n] = { i: n, l: !1, exports: {} });
    return e[n].call(t.exports, t, t.exports, o), (t.l = !0), t.exports;
  }
  (o.m = e),
    (o.c = c),
    (o.d = function(e, n, t) {
      o.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (o.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (o.t = function(e, n) {
      if ((1 & n && (e = o(e)), 8 & n)) return e;
      if (4 & n && 'object' == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (o.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
        2 & n && 'string' != typeof e)
      )
        for (var c in e)
          o.d(
            t,
            c,
            function(n) {
              return e[n];
            }.bind(null, c)
          );
      return t;
    }),
    (o.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return o.d(n, 'a', n), n;
    }),
    (o.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (o.p = '/assets/scripts/bundle/');
  var i = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    s = i.push.bind(i);
  (i.push = n), (i = i.slice());
  for (var l = 0; l < i.length; l++) n(i[l]);
  var d = s;
  return a.push([246, 0]), t();
})({
  0: function(e, n) {
    e.exports = React;
  },
  18: function(e, n) {
    e.exports = JSBeautify;
  },
  19: function(e, n) {
    e.exports = ReactDOM;
  },
  246: function(e, n, t) {
    'use strict';
    t.r(n),
      t.d(n, 'getElement', function() {
        return w;
      }),
      t.d(n, 'getContents', function() {
        return x;
      });
    var c = t(0),
      r = t.n(c),
      a = t(4),
      o = t(1),
      i = (t(15), t(2)),
      s = t(10),
      l = t(5),
      d = t.n(l),
      m = t(91),
      u = t(14),
      p = 'accordion-details-01',
      f = 'accordion-details-02',
      y = 'accordion-details-03',
      A = function(e) {
        return r.a.createElement(
          'ul',
          { className: d()('slds-accordion', e.className) },
          e.children
        );
      },
      O = function(e) {
        return r.a.createElement(
          'li',
          { className: 'slds-accordion__list-item' },
          r.a.createElement(
            'section',
            {
              className: d()(
                'slds-accordion__section',
                e.isOpen ? 'slds-is-open' : null
              )
            },
            r.a.createElement(
              'div',
              { className: d()('slds-accordion__summary', e.className) },
              r.a.createElement(
                'h3',
                {
                  className: d()('slds-accordion__summary-heading', e.className)
                },
                r.a.createElement(
                  'button',
                  {
                    'aria-controls': e.referenceId,
                    'aria-expanded': e.isOpen,
                    className:
                      'slds-button slds-button_reset slds-accordion__summary-action'
                  },
                  r.a.createElement(s.a, {
                    className:
                      'slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left',
                    sprite: 'utility',
                    symbol: 'switch'
                  }),
                  r.a.createElement(
                    'span',
                    {
                      className: 'slds-accordion__summary-content',
                      title: e.summary
                    },
                    e.summary
                  )
                )
              ),
              e.hasActionOverflow &&
                r.a.createElement(m.a, {
                  position: 'right',
                  dropdownIsOpen: !1
                })
            ),
            r.a.createElement(
              'div',
              {
                hidden: !e.isOpen,
                className: d()('slds-accordion__content', e.className),
                id: e.referenceId
              },
              e.children
            )
          )
        );
      },
      h = function() {
        return r.a.createElement(
          A,
          null,
          r.a.createElement(
            O,
            { summary: 'Accordion summary', isOpen: !0, referenceId: p },
            'Accordion details - A'
          ),
          r.a.createElement(
            O,
            { summary: 'Accordion summary', isOpen: !1, referenceId: f },
            'Accordion details - B'
          ),
          r.a.createElement(
            O,
            { summary: 'Accordion summary', isOpen: !1, referenceId: y },
            'Accordion details - C'
          )
        );
      },
      b = r.a.createElement(h, null),
      E = [
        {
          id: 'section-one-open',
          label: 'Section one open',
          element: r.a.createElement(
            A,
            null,
            r.a.createElement(
              O,
              { summary: 'Accordion summary', isOpen: !0, referenceId: p },
              'Accordion details - A'
            ),
            r.a.createElement(
              O,
              { summary: 'Accordion summary', isOpen: !1, referenceId: f },
              'Accordion details - B'
            ),
            r.a.createElement(
              O,
              { summary: 'Accordion summary', isOpen: !1, referenceId: y },
              'Accordion details - C'
            )
          )
        },
        {
          id: 'section-two-open',
          label: 'Section two open',
          element: r.a.createElement(
            A,
            null,
            r.a.createElement(
              O,
              { summary: 'Accordion summary', isOpen: !1, referenceId: p },
              'Accordion details - A'
            ),
            r.a.createElement(
              O,
              { summary: 'Accordion summary', isOpen: !0, referenceId: f },
              'Accordion details - B'
            ),
            r.a.createElement(
              O,
              { summary: 'Accordion summary', isOpen: !1, referenceId: y },
              'Accordion details - C'
            )
          )
        },
        {
          id: 'section-three-open',
          label: 'Section three open',
          element: r.a.createElement(
            A,
            null,
            r.a.createElement(
              O,
              { summary: 'Accordion summary', isOpen: !1, referenceId: p },
              'Accordion details - A'
            ),
            r.a.createElement(
              O,
              { summary: 'Accordion summary', isOpen: !1, referenceId: f },
              'Accordion details - B'
            ),
            r.a.createElement(
              O,
              { summary: 'Accordion summary', isOpen: !0, referenceId: y },
              'Accordion details - C'
            )
          )
        },
        {
          id: 'multiple-sections-open',
          label: 'Multiple sections open',
          element: r.a.createElement(
            A,
            null,
            r.a.createElement(
              O,
              { summary: 'Accordion summary', isOpen: !0, referenceId: p },
              'Accordion details - A'
            ),
            r.a.createElement(
              O,
              { summary: 'Accordion summary', isOpen: !1, referenceId: f },
              'Accordion details - B'
            ),
            r.a.createElement(
              O,
              { summary: 'Accordion summary', isOpen: !0, referenceId: y },
              'Accordion details - C'
            )
          )
        }
      ],
      _ = [
        {
          id: 'long-heading-truncated',
          label: 'Long Section Heading with Truncation for larger screens',
          demoStyles: 'max-width: 500px;',
          element: r.a.createElement(
            u.d,
            null,
            r.a.createElement(
              A,
              null,
              r.a.createElement(
                O,
                {
                  summary:
                    'Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary',
                  isOpen: !0,
                  referenceId: p
                },
                'Accordion details - A'
              ),
              r.a.createElement(
                O,
                { summary: 'Accordion summary', isOpen: !1, referenceId: f },
                'Accordion details - B'
              ),
              r.a.createElement(
                O,
                { summary: 'Accordion summary', isOpen: !1, referenceId: y },
                'Accordion details - C'
              )
            )
          )
        },
        {
          id: 'nested-accordions',
          label: 'Nested Accordions',
          element: r.a.createElement(
            A,
            null,
            r.a.createElement(
              O,
              { summary: 'Accordion summary', isOpen: !0, referenceId: p },
              r.a.createElement(
                A,
                null,
                r.a.createElement(
                  O,
                  {
                    summary: 'Nested accordion summary',
                    isOpen: !0,
                    referenceId: 'accordion-details-04'
                  },
                  'Accordion details - A'
                ),
                r.a.createElement(
                  O,
                  {
                    summary: 'Nested accordion summary',
                    isOpen: !1,
                    referenceId: 'accordion-details-05'
                  },
                  'Accordion details - B'
                )
              )
            ),
            r.a.createElement(
              O,
              { summary: 'Accordion summary', isOpen: !1, referenceId: f },
              'Accordion details - B'
            ),
            r.a.createElement(
              O,
              { summary: 'Accordion summary', isOpen: !1, referenceId: y },
              'Accordion details - C'
            )
          )
        },
        {
          id: 'styled',
          label: 'Wrapped in Card',
          element: r.a.createElement(
            'div',
            { className: 'slds-card' },
            r.a.createElement(
              A,
              null,
              r.a.createElement(
                O,
                { summary: 'Accordion summary', isOpen: !0, referenceId: p },
                'Accordion details - A'
              ),
              r.a.createElement(
                O,
                { summary: 'Accordion summary', isOpen: !1, referenceId: f },
                'Accordion details - B'
              ),
              r.a.createElement(
                O,
                { summary: 'Accordion summary', isOpen: !1, referenceId: y },
                'Accordion details - C'
              )
            )
          )
        },
        {
          id: 'has-action-overflow',
          label: 'Has Action Overflow Menu',
          element: r.a.createElement(
            A,
            null,
            r.a.createElement(
              O,
              {
                summary: 'Accordion summary',
                hasActionOverflow: !0,
                isOpen: !0,
                referenceId: p
              },
              'Accordion details - A'
            ),
            r.a.createElement(
              O,
              {
                summary: 'Accordion summary',
                hasActionOverflow: !0,
                isOpen: !1,
                referenceId: f
              },
              'Accordion details - B'
            ),
            r.a.createElement(
              O,
              {
                summary: 'Accordion summary',
                hasActionOverflow: !0,
                isOpen: !1,
                referenceId: y
              },
              'Accordion details - C'
            )
          )
        }
      ],
      v = a.c.a,
      I = a.c.code,
      g = a.c.h2,
      S = a.c.h3,
      j = a.c.p,
      w = function() {
        return Object(c.createElement)(
          a.b,
          {},
          Object(c.createElement)(
            'div',
            { className: 'doc lead' },
            'An accordion allows a user to toggle the display of a section of content.'
          ),
          Object(c.createElement)(
            o.a,
            { exampleOnly: !0 },
            Object(i.e)(_, 'styled')
          ),
          g({ id: 'About-Accordions' }, 'About Accordions'),
          j(
            {},
            'Accordions are composed of a list of longer blocks of text, with a header button to toggle the visibility of each block.'
          ),
          g({ id: 'Accessibility' }, 'Accessibility'),
          j(
            {},
            'Availability of accordion content to assistive technology requires the use of ',
            I({}, 'aria-controls'),
            ' and toggling ',
            I({}, 'aria-expanded'),
            ' as regions are expanded and collapsed.'
          ),
          j(
            {},
            'There are additional accessibility considerations within the ',
            v({ href: '/components/buttons' }, 'Buttons'),
            ' and ',
            v({ href: '/components/menus' }, 'Menus'),
            '.'
          ),
          g({ id: 'Default' }, 'Default'),
          Object(c.createElement)(o.a, null, b),
          S(
            { id: 'Structure-and-Implementation' },
            'Structure and Implementation'
          ),
          j(
            {},
            'An accordion is implemented as an unordered list with a class of ',
            I({}, 'slds-accordion'),
            '. Inside the list, each chunk of content is inside both a list item with class of ',
            I({}, 'slds-accordion__list-item'),
            ' and a section with a class of ',
            I({}, 'slds-accordion__section'),
            '.'
          ),
          j(
            {},
            'The content itself is contained within a div with the class ',
            I({}, 'slds-accordion__content'),
            ', an ID that corresponds to the ',
            I({}, 'aria-control'),
            ' on the button and the hidden attribute.'
          ),
          j(
            {},
            'Content visibility is toggled via a ',
            v({ href: '/components/buttons' }, 'Button'),
            ' in the H3 heading. To make accordion content visible, the section is given the class ',
            I({}, 'slds-is-open'),
            ', the button is changed from ',
            I({}, 'aria-expanded="false"'),
            ' to ',
            I({}, 'aria-expanded="true"'),
            ', and the hidden attribute is removed from the content div.'
          ),
          g({ id: 'States' }, 'States'),
          S({ id: 'Section-1-Open' }, 'Section 1 - Open'),
          Object(c.createElement)(
            o.a,
            null,
            Object(i.e)(E, 'section-one-open')
          ),
          S({ id: 'Section-2-Open' }, 'Section 2 - Open'),
          Object(c.createElement)(
            o.a,
            null,
            Object(i.e)(E, 'section-two-open')
          ),
          S({ id: 'Section-3-Open' }, 'Section 3 - Open'),
          Object(c.createElement)(
            o.a,
            null,
            Object(i.e)(E, 'section-three-open')
          ),
          S({ id: 'Multiple-Sections-Open' }, 'Multiple Sections - Open'),
          Object(c.createElement)(
            o.a,
            null,
            Object(i.e)(E, 'multiple-sections-open')
          ),
          g({ id: 'Examples' }, 'Examples'),
          S({ id: 'With-Action-Overflow-Menu' }, 'With Action Overflow Menu'),
          Object(c.createElement)(
            o.a,
            null,
            Object(i.e)(_, 'has-action-overflow')
          ),
          S({ id: 'In-a-Card' }, 'In a Card'),
          Object(c.createElement)(o.a, null, Object(i.e)(_, 'styled')),
          S({ id: 'Nested' }, 'Nested'),
          Object(c.createElement)(
            o.a,
            null,
            Object(i.e)(_, 'nested-accordions')
          )
        );
      },
      x = function() {
        return Object(a.a)(w());
      };
  }
});
