var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/accordion/base/example.jsx.js'
] = (function(e) {
  function n(n) {
    for (
      var c, o, s = n[0], i = n[1], l = n[2], d = 0, u = [];
      d < s.length;
      d++
    )
      (o = s[d]),
        Object.prototype.hasOwnProperty.call(a, o) && a[o] && u.push(a[o][0]),
        (a[o] = 0);
    for (c in i) Object.prototype.hasOwnProperty.call(i, c) && (e[c] = i[c]);
    for (m && m(n); u.length; ) u.shift()();
    return t.push.apply(t, l || []), r();
  }
  function r() {
    for (var e, n = 0; n < t.length; n++) {
      for (var r = t[n], c = !0, s = 1; s < r.length; s++) {
        var i = r[s];
        0 !== a[i] && (c = !1);
      }
      c && (t.splice(n--, 1), (e = o((o.s = r[0]))));
    }
    return e;
  }
  var c = {},
    a = {
      1: 0,
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
    t = [];
  function o(n) {
    if (c[n]) return c[n].exports;
    var r = (c[n] = { i: n, l: !1, exports: {} });
    return e[n].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
  }
  (o.m = e),
    (o.c = c),
    (o.d = function(e, n, r) {
      o.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
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
      var r = Object.create(null);
      if (
        (o.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & n && 'string' != typeof e)
      )
        for (var c in e)
          o.d(
            r,
            c,
            function(n) {
              return e[n];
            }.bind(null, c)
          );
      return r;
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
  var s = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    i = s.push.bind(s);
  (s.push = n), (s = s.slice());
  for (var l = 0; l < s.length; l++) n(s[l]);
  var m = i;
  return t.push([257, 0]), r();
})({
  0: function(e, n) {
    e.exports = React;
  },
  257: function(e, n, r) {
    'use strict';
    r.r(n),
      r.d(n, 'Accordion', function() {
        return O;
      }),
      r.d(n, 'AccordionSection', function() {
        return h;
      }),
      r.d(n, 'AccordionExample', function() {
        return _;
      }),
      r.d(n, 'states', function() {
        return b;
      }),
      r.d(n, 'examples', function() {
        return I;
      });
    var c = r(0),
      a = r.n(c),
      t = r(8),
      o = r(2),
      s = r.n(o),
      i = r(1),
      l = r.n(i),
      m = r(4),
      d = r(14),
      u = a.a.createElement(m.b, {
        className: 'slds-button_icon-border-filled slds-button_icon-x-small',
        symbol: 'down',
        assistiveText: 'Show More',
        'aria-haspopup': 'true',
        title: 'Show More'
      }),
      p = function(e) {
        var n = e.position,
          r = e.dropdownIsOpen;
        return a.a.createElement(
          d.Trigger,
          { isOpen: r, triggerIcon: u },
          a.a.createElement(
            d.Menu,
            {
              className: s()(
                'slds-dropdown_actions',
                'slds-dropdown_'.concat(n)
              )
            },
            a.a.createElement(
              d.MenuList,
              null,
              a.a.createElement(d.MenuItem, { tabIndex: '0' }, 'Action One'),
              a.a.createElement(d.MenuItem, null, 'Action Two'),
              a.a.createElement(d.MenuItem, null, 'Action Three')
            )
          )
        );
      };
    (p.defaultProps = { dropdownIsOpen: !0, position: 'left' }),
      (p.propTypes = {
        position: l.a.oneOf(['left', 'right']),
        dropdownIsOpen: l.a.bool
      });
    var y = r(11),
      f = 'accordion-details-01',
      A = 'accordion-details-02',
      E = 'accordion-details-03',
      O = function(e) {
        return a.a.createElement(
          'ul',
          { className: s()('slds-accordion', e.className) },
          e.children
        );
      },
      h = function(e) {
        return a.a.createElement(
          'li',
          { className: 'slds-accordion__list-item' },
          a.a.createElement(
            'section',
            {
              className: s()(
                'slds-accordion__section',
                e.isOpen ? 'slds-is-open' : null
              )
            },
            a.a.createElement(
              'div',
              { className: s()('slds-accordion__summary', e.className) },
              a.a.createElement(
                'h3',
                {
                  className: s()('slds-accordion__summary-heading', e.className)
                },
                a.a.createElement(
                  'button',
                  {
                    'aria-controls': e.referenceId,
                    'aria-expanded': e.isOpen,
                    className:
                      'slds-button slds-button_reset slds-accordion__summary-action'
                  },
                  a.a.createElement(t.a, {
                    className:
                      'slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left',
                    sprite: 'utility',
                    symbol: 'switch'
                  }),
                  a.a.createElement(
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
                a.a.createElement(p, { position: 'right', dropdownIsOpen: !1 })
            ),
            a.a.createElement(
              'div',
              {
                hidden: !e.isOpen,
                className: s()('slds-accordion__content', e.className),
                id: e.referenceId
              },
              e.children
            )
          )
        );
      },
      _ = function() {
        return a.a.createElement(
          O,
          null,
          a.a.createElement(
            h,
            { summary: 'Accordion summary', isOpen: !0, referenceId: f },
            'Accordion details - A'
          ),
          a.a.createElement(
            h,
            { summary: 'Accordion summary', isOpen: !1, referenceId: A },
            'Accordion details - B'
          ),
          a.a.createElement(
            h,
            { summary: 'Accordion summary', isOpen: !1, referenceId: E },
            'Accordion details - C'
          )
        );
      },
      b = ((n.default = a.a.createElement(_, null)),
      [
        {
          id: 'section-one-open',
          label: 'Section one open',
          element: a.a.createElement(
            O,
            null,
            a.a.createElement(
              h,
              { summary: 'Accordion summary', isOpen: !0, referenceId: f },
              'Accordion details - A'
            ),
            a.a.createElement(
              h,
              { summary: 'Accordion summary', isOpen: !1, referenceId: A },
              'Accordion details - B'
            ),
            a.a.createElement(
              h,
              { summary: 'Accordion summary', isOpen: !1, referenceId: E },
              'Accordion details - C'
            )
          )
        },
        {
          id: 'section-two-open',
          label: 'Section two open',
          element: a.a.createElement(
            O,
            null,
            a.a.createElement(
              h,
              { summary: 'Accordion summary', isOpen: !1, referenceId: f },
              'Accordion details - A'
            ),
            a.a.createElement(
              h,
              { summary: 'Accordion summary', isOpen: !0, referenceId: A },
              'Accordion details - B'
            ),
            a.a.createElement(
              h,
              { summary: 'Accordion summary', isOpen: !1, referenceId: E },
              'Accordion details - C'
            )
          )
        },
        {
          id: 'section-three-open',
          label: 'Section three open',
          element: a.a.createElement(
            O,
            null,
            a.a.createElement(
              h,
              { summary: 'Accordion summary', isOpen: !1, referenceId: f },
              'Accordion details - A'
            ),
            a.a.createElement(
              h,
              { summary: 'Accordion summary', isOpen: !1, referenceId: A },
              'Accordion details - B'
            ),
            a.a.createElement(
              h,
              { summary: 'Accordion summary', isOpen: !0, referenceId: E },
              'Accordion details - C'
            )
          )
        },
        {
          id: 'multiple-sections-open',
          label: 'Multiple sections open',
          element: a.a.createElement(
            O,
            null,
            a.a.createElement(
              h,
              { summary: 'Accordion summary', isOpen: !0, referenceId: f },
              'Accordion details - A'
            ),
            a.a.createElement(
              h,
              { summary: 'Accordion summary', isOpen: !1, referenceId: A },
              'Accordion details - B'
            ),
            a.a.createElement(
              h,
              { summary: 'Accordion summary', isOpen: !0, referenceId: E },
              'Accordion details - C'
            )
          )
        }
      ]),
      I = [
        {
          id: 'long-heading-truncated',
          label: 'Long Section Heading with Truncation for larger screens',
          demoStyles: 'max-width: 500px;',
          element: a.a.createElement(
            y.d,
            null,
            a.a.createElement(
              O,
              null,
              a.a.createElement(
                h,
                {
                  summary:
                    'Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary',
                  isOpen: !0,
                  referenceId: f
                },
                'Accordion details - A'
              ),
              a.a.createElement(
                h,
                { summary: 'Accordion summary', isOpen: !1, referenceId: A },
                'Accordion details - B'
              ),
              a.a.createElement(
                h,
                { summary: 'Accordion summary', isOpen: !1, referenceId: E },
                'Accordion details - C'
              )
            )
          )
        },
        {
          id: 'nested-accordions',
          label: 'Nested Accordions',
          element: a.a.createElement(
            O,
            null,
            a.a.createElement(
              h,
              { summary: 'Accordion summary', isOpen: !0, referenceId: f },
              a.a.createElement(
                O,
                null,
                a.a.createElement(
                  h,
                  {
                    summary: 'Nested accordion summary',
                    isOpen: !0,
                    referenceId: 'accordion-details-04'
                  },
                  'Accordion details - A'
                ),
                a.a.createElement(
                  h,
                  {
                    summary: 'Nested accordion summary',
                    isOpen: !1,
                    referenceId: 'accordion-details-05'
                  },
                  'Accordion details - B'
                )
              )
            ),
            a.a.createElement(
              h,
              { summary: 'Accordion summary', isOpen: !1, referenceId: A },
              'Accordion details - B'
            ),
            a.a.createElement(
              h,
              { summary: 'Accordion summary', isOpen: !1, referenceId: E },
              'Accordion details - C'
            )
          )
        },
        {
          id: 'styled',
          label: 'Wrapped in Card',
          element: a.a.createElement(
            'div',
            { className: 'slds-card' },
            a.a.createElement(
              O,
              null,
              a.a.createElement(
                h,
                { summary: 'Accordion summary', isOpen: !0, referenceId: f },
                'Accordion details - A'
              ),
              a.a.createElement(
                h,
                { summary: 'Accordion summary', isOpen: !1, referenceId: A },
                'Accordion details - B'
              ),
              a.a.createElement(
                h,
                { summary: 'Accordion summary', isOpen: !1, referenceId: E },
                'Accordion details - C'
              )
            )
          )
        },
        {
          id: 'has-action-overflow',
          label: 'Has Action Overflow Menu',
          element: a.a.createElement(
            O,
            null,
            a.a.createElement(
              h,
              {
                summary: 'Accordion summary',
                hasActionOverflow: !0,
                isOpen: !0,
                referenceId: f
              },
              'Accordion details - A'
            ),
            a.a.createElement(
              h,
              {
                summary: 'Accordion summary',
                hasActionOverflow: !0,
                isOpen: !1,
                referenceId: A
              },
              'Accordion details - B'
            ),
            a.a.createElement(
              h,
              {
                summary: 'Accordion summary',
                hasActionOverflow: !0,
                isOpen: !1,
                referenceId: E
              },
              'Accordion details - C'
            )
          )
        }
      ];
  }
});
