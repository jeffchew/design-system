var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/button-icons/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var l, o, r = t[0], c = t[1], i = t[2], d = 0, m = [];
      d < r.length;
      d++
    )
      (o = r[d]),
        Object.prototype.hasOwnProperty.call(a, o) && a[o] && m.push(a[o][0]),
        (a[o] = 0);
    for (l in c) Object.prototype.hasOwnProperty.call(c, l) && (e[l] = c[l]);
    for (b && b(t); m.length; ) m.shift()();
    return s.push.apply(s, i || []), n();
  }
  function n() {
    for (var e, t = 0; t < s.length; t++) {
      for (var n = s[t], l = !0, r = 1; r < n.length; r++) {
        var c = n[r];
        0 !== a[c] && (l = !1);
      }
      l && (s.splice(t--, 1), (e = o((o.s = n[0]))));
    }
    return e;
  }
  var l = {},
    a = { 12: 0 },
    s = [];
  function o(t) {
    if (l[t]) return l[t].exports;
    var n = (l[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.m = e),
    (o.c = l),
    (o.d = function(e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
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
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var l in e)
          o.d(
            n,
            l,
            function(t) {
              return e[t];
            }.bind(null, l)
          );
      return n;
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
  var r = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    c = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var i = 0; i < r.length; i++) t(r[i]);
  var b = c;
  return s.push([206, 0]), n();
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
  206: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getElement', function() {
        return Y;
      }),
      n.d(t, 'getContents', function() {
        return G;
      });
    var l = n(0),
      a = n.n(l),
      s = n(4),
      o = n(1),
      r = n(23),
      c = n(15),
      i = n(11),
      b = n(26),
      d = n(43),
      m = n(7),
      u = a.a.createElement(m.b, {
        assistiveText: 'Settings',
        title: 'Settings'
      }),
      h = [
        {
          id: 'error',
          label: 'Error',
          element: a.a.createElement(m.b, {
            feedback: 'error',
            symbol: 'error',
            title: 'Error',
            assistiveText: 'Error'
          })
        },
        {
          id: 'bare-disabled',
          label: 'Disabled',
          element: a.a.createElement(m.b, {
            assistiveText: 'Settings',
            disabled: !0,
            title: 'Settings'
          })
        }
      ],
      O = [
        {
          id: 'hint-hover',
          label: 'Hint on hover',
          element: a.a.createElement(
            m.a,
            null,
            a.a.createElement(m.b, {
              assistiveText: 'Settings',
              iconClassName: 'slds-button__icon_hint',
              title: 'Settings'
            })
          )
        }
      ],
      E = function(e) {
        return a.a.createElement(
          'div',
          { style: { padding: '0.5rem', backgroundColor: '#f4f6f9' } },
          e.children
        );
      },
      j = a.a.createElement(m.b, {
        assistiveText: 'Search',
        symbol: 'search',
        theme: 'neutral',
        title: 'Search'
      }),
      p = [
        {
          id: 'disabled',
          label: 'Disabled',
          element: a.a.createElement(m.b, {
            assistiveText: 'Search',
            disabled: !0,
            symbol: 'search',
            theme: 'neutral',
            title: 'Search'
          })
        }
      ],
      g = [
        {
          id: 'with-dropdown',
          label: 'With dropdown',
          element: a.a.createElement(m.b, {
            assistiveText: 'More options',
            hasDropdown: !0,
            theme: 'neutral',
            title: 'More Options'
          })
        },
        {
          id: 'hint-hover',
          label: 'Hint on hover',
          element: a.a.createElement(
            m.a,
            null,
            a.a.createElement(m.b, {
              assistiveText: 'More options',
              iconClassName: 'slds-button__icon_hint',
              theme: 'neutral',
              title: 'More Options'
            })
          )
        }
      ],
      v = function(e) {
        return a.a.createElement(
          'div',
          { style: { padding: '0.5rem', backgroundColor: '#16325C' } },
          e.children
        );
      },
      _ = a.a.createElement(m.b, {
        assistiveText: 'Search',
        size: 'medium',
        symbol: 'search',
        theme: 'inverse',
        title: 'Search'
      }),
      f = [
        {
          id: 'disabled',
          label: 'Disabled',
          element: a.a.createElement(m.b, {
            assistiveText: 'Search',
            disabled: !0,
            size: 'medium',
            symbol: 'search',
            theme: 'inverse',
            title: 'Search'
          })
        }
      ],
      x = [
        {
          id: 'with-dropdown',
          label: 'With dropdown',
          element: a.a.createElement(m.b, {
            assistiveText: 'More options',
            hasDropdown: !0,
            theme: 'neutral',
            title: 'More Options'
          })
        },
        {
          id: 'hint-hover',
          label: 'Hint on hover',
          element: a.a.createElement(
            m.a,
            null,
            a.a.createElement(m.b, {
              assistiveText: 'More options',
              iconClassName: 'slds-button__icon_inverse-hint',
              size: 'medium',
              theme: 'inverse',
              title: 'More Options'
            })
          )
        }
      ],
      y = function(e) {
        return a.a.createElement(
          'div',
          { style: { padding: '0.5rem', backgroundColor: '#f4f6f9' } },
          e.children
        );
      },
      C = a.a.createElement(m.b, {
        assistiveText: 'Search',
        title: 'Search',
        theme: 'transparent',
        symbol: 'search'
      }),
      S = [
        {
          id: 'disabled',
          label: 'Disabled',
          element: a.a.createElement(m.b, {
            assistiveText: 'Search',
            title: 'Search',
            theme: 'transparent',
            symbol: 'search',
            disabled: !0
          })
        }
      ],
      w = [
        {
          id: 'hint-hover',
          label: 'Hint on hover',
          element: a.a.createElement(
            'div',
            { className: 'slds-hint-parent' },
            a.a.createElement(m.b, {
              theme: 'transparent',
              iconClassName: 'slds-button__icon_hint',
              assistiveText: 'More options',
              title: 'More Options'
            })
          )
        }
      ],
      T = a.a.createElement(m.b, {
        assistiveText: 'Search',
        title: 'Search',
        theme: 'brand',
        symbol: 'search'
      }),
      M = [
        {
          id: 'disabled',
          label: 'Disabled',
          element: a.a.createElement(m.b, {
            assistiveText: 'Search',
            title: 'Search',
            theme: 'brand',
            symbol: 'search',
            disabled: !0
          })
        }
      ],
      N = function(e) {
        return a.a.createElement(
          'div',
          { style: { padding: '0.5rem', backgroundColor: '#16325C' } },
          e.children
        );
      },
      B = a.a.createElement(m.b, {
        assistiveText: 'Search',
        title: 'Search',
        theme: 'inverse',
        symbol: 'search'
      }),
      D = [
        {
          id: 'disabled',
          label: 'Disabled',
          element: a.a.createElement(m.b, {
            assistiveText: 'Search',
            title: 'Search',
            theme: 'inverse',
            symbol: 'search',
            disabled: !0
          })
        }
      ],
      I = [
        {
          id: 'with-dropdown',
          label: 'With dropdown',
          element: a.a.createElement(m.b, {
            hasDropdown: !0,
            theme: 'transparent',
            className: 'slds-button_icon-inverse',
            assistiveText: 'More options',
            title: 'More Options'
          })
        },
        {
          id: 'hint-hover',
          label: 'Hint on hover',
          element: a.a.createElement(
            'div',
            { className: 'slds-hint-parent' },
            a.a.createElement(m.b, {
              theme: 'inverse',
              iconClassName: 'slds-button__icon_inverse-hint',
              assistiveText: 'More options',
              title: 'More Options'
            })
          )
        }
      ],
      k = n(79),
      z = function(e) {
        return a.a.createElement(
          'div',
          { style: { padding: '0.5rem', backgroundColor: '#f4f6f9' } },
          e.children
        );
      },
      H = a.a.createElement(m.b, {
        assistiveText: 'Search',
        title: 'Search',
        size: 'medium',
        symbol: 'search'
      }),
      A = [
        {
          id: 'disabled',
          label: 'Disabled',
          element: a.a.createElement(m.b, {
            assistiveText: 'Search',
            title: 'Search',
            size: 'medium',
            symbol: 'search',
            disabled: !0
          })
        }
      ],
      F = [
        {
          id: 'with-dropdown',
          label: 'With dropdown',
          element: a.a.createElement(m.b, {
            assistiveText: 'More options',
            title: 'More Options',
            hasDropdown: !0,
            theme: 'transparent'
          })
        },
        {
          id: 'hint-hover',
          label: 'Hint on hover',
          element: a.a.createElement(
            'div',
            { className: 'slds-hint-parent' },
            a.a.createElement(m.b, {
              assistiveText: 'More options',
              title: 'More Options',
              size: 'medium',
              iconClassName: 'slds-button__icon_hint'
            })
          )
        }
      ],
      P = n(2),
      W = n(33),
      L = s.c.a,
      J = s.c.code,
      q = s.c.h2,
      R = s.c.h3,
      U = s.c.h4,
      V = s.c.p,
      Y = function() {
        return Object(l.createElement)(
          s.b,
          {},
          Object(l.createElement)(
            'div',
            { className: 'lead doc' },
            'Button icons provide the user with visual iconography that is typically used to invoke an event or action.'
          ),
          Object(l.createElement)(
            o.a,
            { exampleOnly: !0 },
            Object(l.createElement)(
              a.a.Fragment,
              null,
              Object(l.createElement)(m.b, {
                iconClassName: 'slds-button__icon_large',
                assistiveText: 'More options',
                title: 'More Options'
              }),
              Object(l.createElement)(m.b, {
                iconClassName: 'slds-button__icon_small',
                assistiveText: 'More options',
                title: 'More Options'
              }),
              Object(l.createElement)(m.b, {
                iconClassName: 'slds-button__icon_x-small',
                assistiveText: 'More options',
                title: 'More Options'
              })
            )
          ),
          q({ id: 'About-Button-Icons' }, 'About Button Icons'),
          V(
            {},
            'Button icons are button elements that represent their behavior with an ',
            L({ href: '/components/icons' }, 'icon'),
            ' instead of text. The button itself should have the classes ',
            J({}, 'slds-button'),
            ' and ',
            J({}, 'slds-button_icon'),
            ', while the svg icon has ',
            J({}, 'slds-button__icon'),
            ' on it.'
          ),
          V(
            {},
            "Some styling variations require the button to receive additional 'container' classes that remove the button styling and/or add borders. See below for more detail."
          ),
          R({ id: 'Accessibility' }, 'Accessibility'),
          V(
            {},
            'If an icon button doesn’t include a label, use a ',
            J({}, 'title'),
            ' attribute to show on hover for sighted users, and a span with class ',
            J({}, 'slds-assistive-text'),
            " to describe the button's action for screen readers."
          ),
          V(
            {},
            'When using assistive text, the icon element itself should have ',
            J({}, 'aria-hidden'),
            ' set to ',
            J({}, 'true'),
            '.'
          ),
          R({ id: 'Mobile' }, 'Mobile'),
          Object(l.createElement)(W.a, {
            patternSpecificText:
              'buttons will have an increased size to accommodate tapping with a finger instead of the more precise mouse cursor'
          }),
          Object(l.createElement)(
            o.a,
            { frameOnly: !0 },
            Object(l.createElement)(
              a.a.Fragment,
              null,
              Object(l.createElement)(m.b, {
                iconClassName: 'slds-button__icon_large',
                assistiveText: 'More Options',
                title: 'More Options'
              }),
              Object(l.createElement)(m.b, {
                iconClassName: 'slds-button__icon_small',
                assistiveText: 'More Options',
                title: 'More Options'
              }),
              Object(l.createElement)(m.b, {
                iconClassName: 'slds-button__icon_x-small',
                assistiveText: 'More Options',
                title: 'More Options'
              })
            )
          ),
          q({ id: 'Base' }, 'Base'),
          Object(l.createElement)(o.a, { toggleCode: !1 }, u),
          q({ id: 'Variations' }, 'Variations'),
          R({ id: 'Brand' }, 'Brand'),
          Object(l.createElement)(o.a, { toggleCode: !1 }, T),
          R({ id: 'Inverse' }, 'Inverse'),
          Object(l.createElement)(
            o.a,
            { toggleCode: !1 },
            Object(l.createElement)(N, null, B)
          ),
          R({ id: 'Icon-Containers' }, 'Icon Containers'),
          V(
            {},
            'Icon containers remove button styling from the button, leaving a bare icon.'
          ),
          V(
            {},
            'For a bare icon with transparent container, add ',
            J({}, 'slds-button_icon-container'),
            ' to the ',
            J({}, '<button>'),
            '. To add a border, use the ',
            J({}, 'slds-button_icon-border'),
            ' class instead.'
          ),
          V(
            {},
            'For a neutral themed button icon, with border and a filled background, use the ',
            J({}, 'slds-button_icon-border-filled'),
            ' class to the ',
            J({}, 'slds-button'),
            ' class.'
          ),
          V(
            {},
            'Use the inverse button on dark backgrounds by adding the ',
            J({}, 'slds-button_inverse'),
            ' class to the ',
            J({}, 'slds-button'),
            ' class.'
          ),
          Object(l.createElement)(
            d.a,
            null,
            Object(l.createElement)(
              b.a,
              null,
              Object(l.createElement)(
                'strong',
                null,
                'Bare - transparent container'
              ),
              Object(l.createElement)(
                o.a,
                { toggleCode: !1 },
                Object(l.createElement)(z, null, H)
              )
            ),
            Object(l.createElement)(
              b.a,
              null,
              Object(l.createElement)(
                'strong',
                null,
                'Bordered - filled container'
              ),
              Object(l.createElement)(
                o.a,
                { toggleCode: !1 },
                Object(l.createElement)(E, null, j)
              )
            ),
            Object(l.createElement)(
              b.a,
              null,
              Object(l.createElement)(
                'strong',
                null,
                'Bordered - transparent container'
              ),
              Object(l.createElement)(
                o.a,
                { toggleCode: !1 },
                Object(l.createElement)(y, null, C)
              )
            ),
            Object(l.createElement)(
              b.a,
              null,
              Object(l.createElement)(
                'strong',
                null,
                'Bordered inverse - transparent container'
              ),
              Object(l.createElement)(
                o.a,
                { toggleCode: !1 },
                Object(l.createElement)(v, null, _)
              )
            )
          ),
          R({ id: 'Stateful' }, 'Stateful'),
          V(
            {},
            'The stateful button requires the ',
            J({}, 'slds-button_icon-border'),
            ' class in addition to the ',
            J({}, 'slds-button'),
            ' class.\nThe stateful inverse button works just like the stateful button. It requires the ',
            J({}, 'slds-button_icon-border-inverse'),
            ' class in addition to the ',
            J({}, 'slds-button'),
            ' class.'
          ),
          Object(l.createElement)(o.a, { toggleCode: !1 }, k.b),
          Object(l.createElement)(
            c.a,
            { type: 'a11y', header: 'Accessibility Note' },
            Object(l.createElement)(
              'p',
              null,
              'For accessibility, implement the ',
              Object(l.createElement)(
                'a',
                { href: 'http://w3c.github.io/aria-practices/#button' },
                'ARIA Toggle Button'
              ),
              ' concept.'
            ),
            Object(l.createElement)(
              'ul',
              { className: 'slds-list_dotted' },
              Object(l.createElement)(
                'li',
                null,
                'Similar to a mute button, the button represents a pressed or unpressed state.'
              ),
              Object(l.createElement)(
                'li',
                null,
                "Button text doesn't change per state"
              ),
              Object(l.createElement)(
                'li',
                null,
                Object(l.createElement)('code', null, 'aria-pressed'),
                ' is set to ',
                Object(l.createElement)('code', null, 'true'),
                ' or ',
                Object(l.createElement)('code', null, 'false'),
                ', depending on its state'
              )
            )
          ),
          U({ id: 'Selected' }, 'Selected'),
          V(
            {},
            'Stateful icons can be toggled on and off and will retain their state. JavaScript is used to add the ',
            J({}, 'slds-is-selected'),
            ' class to the button when activated.'
          ),
          Object(l.createElement)(
            o.a,
            { toggleCode: !0 },
            Object(P.e)(k.c, 'button-icon-stateful-selected')
          ),
          U({ id: 'Disabled' }, 'Disabled'),
          V(
            {},
            'You can disable a stateful button icon by applying the ',
            J({}, 'disabled'),
            ' attribute to the ',
            J({}, '.slds-button_icon'),
            '. This will apply our disabled UI to the button icon, and freeze the button icon either in its selected or unselected state.'
          ),
          Object(l.createElement)(
            o.a,
            { toggleCode: !0 },
            Object(l.createElement)(
              l.Fragment,
              null,
              Object(P.e)(k.c, 'button-icon-stateful-disabled'),
              Object(P.e)(k.c, 'button-icon-stateful-selected-disabled')
            )
          ),
          q({ id: 'Sizes' }, 'Sizes'),
          R({ id: 'Bare-Icon' }, 'Bare Icon'),
          V(
            {},
            'The bare variant can be displayed in three other sizes—',
            J({}, 'large'),
            ', ',
            J({}, 'small'),
            ', ',
            J({}, 'x-small'),
            '—by adding a sizing class on the ',
            J({}, '<svg>'),
            ' icon itself.'
          ),
          Object(l.createElement)(
            r.a,
            { toggleCode: !1 },
            Object(l.createElement)(
              'button',
              null,
              Object(l.createElement)(
                'svg',
                { className: '...slds-button__icon_{size}' },
                '...'
              ),
              '...'
            )
          ),
          Object(l.createElement)(
            i.a,
            { title: 'Sizes' },
            Object(l.createElement)(
              o.a,
              { toggleCode: !0 },
              Object(l.createElement)(
                l.Fragment,
                null,
                Object(l.createElement)(m.b, {
                  iconClassName: 'slds-button__icon_large',
                  assistiveText: 'More options',
                  title: 'More Options'
                }),
                Object(l.createElement)(m.b, {
                  iconClassName: 'slds-button__icon_small',
                  assistiveText: 'More options',
                  title: 'More Options'
                }),
                Object(l.createElement)(m.b, {
                  iconClassName: 'slds-button__icon_x-small',
                  assistiveText: 'More options',
                  title: 'More Options'
                })
              )
            )
          ),
          R({ id: 'Icon-Container' }, 'Icon Container'),
          V(
            {},
            'Contained variants can be displayed in three smaller sizes—',
            J({}, 'small'),
            ', ',
            J({}, 'x-small'),
            ', ',
            J({}, 'xx-small'),
            '—by adding a sizing class on the ',
            J({}, '<button>'),
            '.'
          ),
          Object(l.createElement)(
            r.a,
            { toggleCode: !1 },
            Object(l.createElement)(
              'button',
              { className: '...slds-button_icon-{size}' },
              '...'
            )
          ),
          Object(l.createElement)(
            i.a,
            { title: 'Sizes' },
            Object(l.createElement)(
              o.a,
              { toggleCode: !0 },
              Object(l.createElement)(
                l.Fragment,
                null,
                Object(l.createElement)(m.b, {
                  className: 'slds-button_icon-border slds-button_icon-small',
                  assistiveText: 'More options',
                  title: 'More Options'
                }),
                Object(l.createElement)(m.b, {
                  className: 'slds-button_icon-border slds-button_icon-x-small',
                  assistiveText: 'More options',
                  title: 'More Options'
                }),
                Object(l.createElement)(m.b, {
                  className:
                    'slds-button_icon-border slds-button_icon-xx-small',
                  assistiveText: 'More options',
                  title: 'More Options'
                })
              )
            )
          ),
          q({ id: 'States' }, 'States'),
          R({ id: 'Disabled-2' }, 'Disabled'),
          V({}, 'Use a disabled attribute when a button can’t be clicked.'),
          V(
            {},
            'To create a disabled button, append the ',
            J({}, 'disabled'),
            ' attribute to the ',
            J({}, '<button>'),
            '.'
          ),
          Object(l.createElement)(
            r.a,
            { toggleCode: !1 },
            Object(l.createElement)(
              'button',
              { className: 'slds-button slds-button_icon ...', disabled: !0 },
              '...'
            )
          ),
          Object(l.createElement)(
            d.a,
            null,
            Object(l.createElement)(
              b.a,
              null,
              Object(l.createElement)('strong', null, 'Base'),
              Object(l.createElement)(
                o.a,
                { toggleCode: !0 },
                Object(P.e)(h, 'bare-disabled')
              )
            ),
            Object(l.createElement)(
              b.a,
              null,
              Object(l.createElement)('strong', null, 'Brand'),
              Object(l.createElement)(
                o.a,
                { toggleCode: !0 },
                Object(P.e)(M, 'disabled')
              )
            ),
            Object(l.createElement)(
              b.a,
              null,
              Object(l.createElement)('strong', null, 'Transparent container'),
              Object(l.createElement)(
                o.a,
                { toggleCode: !0 },
                Object(l.createElement)(z, null, Object(P.e)(A, 'disabled'))
              )
            ),
            Object(l.createElement)(
              b.a,
              null,
              Object(l.createElement)('strong', null, 'Inverse'),
              Object(l.createElement)(
                o.a,
                { toggleCode: !0 },
                Object(l.createElement)(N, null, Object(P.e)(D, 'disabled'))
              )
            ),
            Object(l.createElement)(
              b.a,
              null,
              Object(l.createElement)(
                'strong',
                null,
                'Bordered filled container'
              ),
              Object(l.createElement)(
                o.a,
                { toggleCode: !0 },
                Object(l.createElement)(E, null, Object(P.e)(p, 'disabled'))
              )
            ),
            Object(l.createElement)(
              b.a,
              null,
              Object(l.createElement)('strong', null, 'Bordered transparent'),
              Object(l.createElement)(
                o.a,
                { toggleCode: !0 },
                Object(l.createElement)(y, null, Object(P.e)(S, 'disabled'))
              )
            ),
            Object(l.createElement)(
              b.a,
              null,
              Object(l.createElement)('strong', null, 'Bordered inverse'),
              Object(l.createElement)(
                o.a,
                { toggleCode: !0 },
                Object(l.createElement)(v, null, Object(P.e)(f, 'disabled'))
              )
            )
          ),
          R({ id: 'Error' }, 'Error'),
          V(
            {},
            'Error button icons are typically used in conjunction with an ',
            L({ href: '../popovers/#Error' }, 'error popover'),
            '.'
          ),
          Object(l.createElement)(
            o.a,
            { toggleCode: !1 },
            Object(P.e)(h, 'error')
          ),
          q({ id: 'Examples' }, 'Examples'),
          R({ id: 'Hint-on-hover' }, 'Hint on hover'),
          V(
            {},
            'A parent class, ',
            J({}, 'slds-hint-parent'),
            ', must be put on any wrapper, and ',
            J({}, 'slds-button__icon_hint'),
            " must be added to the button's ",
            J({}, '<svg>'),
            ' so that the child reacts when the parent is hovered.'
          ),
          Object(l.createElement)(
            r.a,
            { toggleCode: !1 },
            Object(l.createElement)(
              m.a,
              null,
              Object(l.createElement)(
                'button',
                { className: 'slds-button slds-button_icon' },
                Object(l.createElement)(
                  'svg',
                  { className: 'slds-button__icon slds-button__icon_hint' },
                  '...'
                ),
                '...'
              )
            )
          ),
          Object(l.createElement)(
            d.a,
            null,
            Object(l.createElement)(
              b.a,
              null,
              Object(l.createElement)('strong', null, 'Base'),
              Object(l.createElement)(
                o.a,
                { toggleCode: !0 },
                Object(P.e)(O, 'hint-hover')
              )
            ),
            Object(l.createElement)(
              b.a,
              null,
              Object(l.createElement)('strong', null, 'Transparent container'),
              Object(l.createElement)(
                o.a,
                { toggleCode: !0 },
                Object(l.createElement)(z, null, Object(P.e)(F, 'hint-hover'))
              )
            ),
            Object(l.createElement)(
              b.a,
              null,
              Object(l.createElement)(
                'strong',
                null,
                'Bordered filled container'
              ),
              Object(l.createElement)(
                o.a,
                { toggleCode: !0 },
                Object(l.createElement)(E, null, Object(P.e)(g, 'hint-hover'))
              )
            ),
            Object(l.createElement)(
              b.a,
              null,
              Object(l.createElement)('strong', null, 'Bordered transparent'),
              Object(l.createElement)(
                o.a,
                { toggleCode: !0 },
                Object(l.createElement)(y, null, Object(P.e)(w, 'hint-hover'))
              )
            )
          ),
          U({ id: 'Inverse-2' }, 'Inverse'),
          V(
            {},
            'In the case of inverse, use the ',
            J({}, 'slds-button__icon_inverse-hint'),
            " class on the button's ",
            J({}, '<svg>'),
            ' instead.'
          ),
          Object(l.createElement)(
            r.a,
            { toggleCode: !1 },
            Object(l.createElement)(
              m.a,
              null,
              Object(l.createElement)(
                'button',
                { className: 'slds-button slds-button_icon' },
                Object(l.createElement)(
                  'svg',
                  {
                    className:
                      'slds-button__icon slds-button__icon_inverse-hint'
                  },
                  '...'
                ),
                '...'
              )
            )
          ),
          Object(l.createElement)(
            d.a,
            null,
            Object(l.createElement)(
              b.a,
              null,
              Object(l.createElement)('strong', null, 'Inverse'),
              Object(l.createElement)(
                o.a,
                { toggleCode: !0 },
                Object(l.createElement)(N, null, Object(P.e)(I, 'hint-hover'))
              )
            ),
            Object(l.createElement)(
              b.a,
              null,
              Object(l.createElement)('strong', null, 'Bordered inverse'),
              Object(l.createElement)(
                o.a,
                { toggleCode: !0 },
                Object(l.createElement)(v, null, Object(P.e)(x, 'hint-hover'))
              )
            )
          ),
          R({ id: 'With-a-Dropdown' }, 'With a Dropdown'),
          V(
            {},
            'If the button opens a menu, add ',
            J({}, 'slds-button_icon-more'),
            ' class to the ',
            J({}, '<button>'),
            ' and a ',
            J({}, 'down'),
            ' icon within the button to indicate the behavior.'
          ),
          Object(l.createElement)(
            r.a,
            { toggleCode: !1 },
            Object(l.createElement)(
              'button',
              {
                className:
                  'slds-button slds-button_icon slds-button_icon-container-more'
              },
              '...',
              Object(l.createElement)(
                'svg',
                { className: 'slds-button__icon slds-button__icon_x-small' },
                Object(l.createElement)('use', {
                  xlinkHref: '/assets/icons/utility-sprite/svg/symbols.svg#down'
                })
              ),
              '...'
            )
          ),
          Object(l.createElement)(
            d.a,
            null,
            Object(l.createElement)(
              b.a,
              null,
              Object(l.createElement)('strong', null, 'Transparent container'),
              Object(l.createElement)(
                o.a,
                { toggleCode: !0 },
                Object(l.createElement)(
                  z,
                  null,
                  Object(P.e)(F, 'with-dropdown')
                )
              )
            ),
            Object(l.createElement)(
              b.a,
              null,
              Object(l.createElement)('strong', null, 'Inverse'),
              Object(l.createElement)(
                o.a,
                { toggleCode: !0 },
                Object(l.createElement)(
                  N,
                  null,
                  Object(P.e)(I, 'with-dropdown')
                )
              )
            ),
            Object(l.createElement)(
              b.a,
              null,
              Object(l.createElement)(
                'strong',
                null,
                'Bordered filled container'
              ),
              Object(l.createElement)(
                o.a,
                { toggleCode: !0 },
                Object(l.createElement)(
                  E,
                  null,
                  Object(P.e)(g, 'with-dropdown')
                )
              )
            ),
            Object(l.createElement)(
              b.a,
              null,
              Object(l.createElement)('strong', null, 'Bordered inverse'),
              Object(l.createElement)(
                o.a,
                { toggleCode: !0 },
                Object(l.createElement)(
                  v,
                  null,
                  Object(P.e)(g, 'with-dropdown')
                )
              )
            )
          )
        );
      },
      G = function() {
        return Object(s.a)(Y());
      };
  }
});
