var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/carousel/docs.mdx.js'] = (function(
  e
) {
  function t(t) {
    for (
      var n, i, r = t[0], c = t[1], o = t[2], u = 0, p = [];
      u < r.length;
      u++
    )
      (i = r[u]),
        Object.prototype.hasOwnProperty.call(s, i) && s[i] && p.push(s[i][0]),
        (s[i] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    for (d && d(t); p.length; ) p.shift()();
    return l.push.apply(l, o || []), a();
  }
  function a() {
    for (var e, t = 0; t < l.length; t++) {
      for (var a = l[t], n = !0, r = 1; r < a.length; r++) {
        var c = a[r];
        0 !== s[c] && (n = !1);
      }
      n && (l.splice(t--, 1), (e = i((i.s = a[0]))));
    }
    return e;
  }
  var n = {},
    s = { 15: 0 },
    l = [];
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
  for (var o = 0; o < r.length; o++) t(r[o]);
  var d = c;
  return l.push([276, 0]), a();
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
  276: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'getElement', function() {
        return I;
      }),
      a.d(t, 'getContents', function() {
        return C;
      });
    var n = a(0),
      s = a.n(n),
      l = a(4),
      i = a(1),
      r = a(23),
      c = a(15),
      o = a(11),
      d = a(7),
      u = a(5),
      p = a.n(u);
    function b(e) {
      return (b =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            })(e);
    }
    function h(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function m(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function f(e, t) {
      return (f =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function v(e, t) {
      return !t || ('object' !== b(t) && 'function' != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function y() {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function() {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    function _(e) {
      return (_ = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var E = function(e) {
        return s.a.createElement(
          'li',
          { className: 'slds-carousel__indicator', role: 'presentation' },
          s.a.createElement(
            'a',
            {
              id: e.id,
              className: p()(
                'slds-carousel__indicator-action',
                e.isActive && 'slds-is-active',
                e.className
              ),
              href: 'javascript:void(0);',
              role: 'tab',
              tabIndex: e.isActive ? '0' : '-1',
              'aria-selected': e.isActive ? 'true' : 'false',
              'aria-controls': e.contentId,
              title: e.title
            },
            s.a.createElement(
              'span',
              { className: 'slds-assistive-text' },
              e.title
            )
          )
        );
      },
      j = function(e) {
        return s.a.createElement(
          'div',
          {
            id: e.id,
            className: p()('slds-carousel__panel', e.className),
            role: 'tabpanel',
            'aria-hidden': e.isActive ? 'false' : 'true',
            'aria-labelledby': e.indicatorId
          },
          s.a.createElement(
            'a',
            {
              href: 'javascript:void(0);',
              className: 'slds-carousel__panel-action slds-text-link_reset',
              tabIndex: e.isActive ? '0' : '-1'
            },
            s.a.createElement(
              'div',
              { className: 'slds-carousel__image' },
              s.a.createElement('img', { src: e.src, alt: e.title })
            ),
            s.a.createElement(
              'div',
              { className: 'slds-carousel__content' },
              s.a.createElement(
                'h2',
                { className: 'slds-carousel__content-title' },
                e.title
              ),
              s.a.createElement('p', null, e.description)
            )
          )
        );
      },
      O = function(e) {
        return s.a.createElement(
          'span',
          { className: 'slds-carousel__autoplay' },
          s.a.createElement(d.b, {
            className:
              'slds-button_icon-border-filled slds-button_icon-x-small',
            symbol: e.stop ? 'right' : 'pause',
            'aria-controls': e['aria-controls'],
            'aria-pressed': e.stop,
            disabled: e.disabled,
            title: 'Stop auto-play',
            assistiveText: 'Stop auto-play'
          })
        );
      },
      g = (function(e) {
        !(function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && f(e, t);
        })(r, e);
        var t,
          a,
          n,
          l,
          i = ((t = r),
          function() {
            var e,
              a = _(t);
            if (y()) {
              var n = _(this).constructor;
              e = Reflect.construct(a, arguments, n);
            } else e = a.apply(this, arguments);
            return v(this, e);
          });
        function r() {
          return h(this, r), i.apply(this, arguments);
        }
        return (
          (a = r),
          (n = [
            {
              key: 'render',
              value: function() {
                return s.a.createElement(
                  'div',
                  { className: p()('slds-carousel', this.props.className) },
                  s.a.createElement(
                    'div',
                    { className: 'slds-carousel__stage' },
                    this.props.autoPlay &&
                      s.a.createElement(O, {
                        stop: 'stop' === this.props.autoPlay
                      }),
                    s.a.createElement(
                      'div',
                      {
                        className: 'slds-carousel__panels',
                        style: {
                          transform: 'translateX(-'.concat(
                            100 * (this.props.panelActive - 1),
                            '%)'
                          )
                        }
                      },
                      s.a.createElement(j, {
                        isActive: '1' === this.props.panelActive,
                        id: 'content-id-01',
                        indicatorId: 'indicator-id-01',
                        title: 'Visit App Exchange',
                        description:
                          'Extend Salesforce with the #1 business marketplace.',
                        src: '/assets/images/carousel/carousel-01.jpg'
                      }),
                      s.a.createElement(j, {
                        isActive: '2' === this.props.panelActive,
                        id: 'content-id-02',
                        indicatorId: 'indicator-id-02',
                        title: 'Click to Customize',
                        description:
                          'Use the Object Manager to add fields, build layouts, and more.',
                        src: '/assets/images/carousel/carousel-02.jpg'
                      }),
                      s.a.createElement(j, {
                        isActive: '3' === this.props.panelActive,
                        id: 'content-id-03',
                        indicatorId: 'indicator-id-03',
                        title: 'Download SalesforceA',
                        description:
                          "Get the mobile app that's just for Salesforce admins.",
                        src: '/assets/images/carousel/carousel-03.jpg'
                      })
                    ),
                    s.a.createElement(
                      'ul',
                      {
                        className: 'slds-carousel__indicators',
                        role: 'tablist'
                      },
                      s.a.createElement(E, {
                        isActive: '1' === this.props.panelActive,
                        id: 'indicator-id-01',
                        contentId: 'content-id-01',
                        title: 'Visit App Exchange tab'
                      }),
                      s.a.createElement(E, {
                        isActive: '2' === this.props.panelActive,
                        id: 'indicator-id-02',
                        contentId: 'content-id-02',
                        title: 'Click to Customize tab'
                      }),
                      s.a.createElement(E, {
                        isActive: '3' === this.props.panelActive,
                        id: 'indicator-id-03',
                        contentId: 'content-id-03',
                        title: 'Download SalesforceA tab'
                      })
                    )
                  )
                );
              }
            }
          ]) && m(a.prototype, n),
          l && m(a, l),
          r
        );
      })(n.Component),
      w = l.c.code,
      x = l.c.h2,
      A = l.c.h3,
      S = l.c.h4,
      N = l.c.li,
      P = l.c.p,
      k = l.c.ul,
      I = function() {
        return Object(n.createElement)(
          l.b,
          {},
          Object(n.createElement)(
            'div',
            { className: 'doc lead' },
            'A carousel allows multiple pieces of featured content to occupy an allocated amount of space.'
          ),
          Object(n.createElement)(
            i.a,
            { exampleOnly: !0, demoStyles: 'width: 480px; max-width: 100%;' },
            Object(n.createElement)(g, { panelActive: '2', autoPlay: !0 })
          ),
          x({ id: 'About-Carousel' }, 'About Carousel'),
          P(
            {},
            'A Carousel can accept a maximum number of 5 panels where only 1 panel is visible at a time.'
          ),
          A({ id: 'Accessibility' }, 'Accessibility'),
          P(
            {},
            'A Carousel is built using a tabbed UI specification and requires the following to meet accessibility requirements:'
          ),
          k(
            {},
            N({}, 'The tab list, which should have ', w({}, 'role="tablist"')),
            N(
              {},
              'The tabs in that list, which should each be an ',
              w({}, '<a role="tab">'),
              ' anchor wrapped in a ',
              w({}, '<li role="presentation">'),
              ' list item'
            ),
            N(
              {},
              'The tab panels, which display each tab’s content and should each have ',
              w({}, 'role="tabpanel"')
            )
          ),
          S({ id: 'Markup' }, 'Markup'),
          k(
            {},
            N(
              {},
              'Selected tab’s anchor has ',
              w({}, 'aria-selected="true"'),
              ', all other tabs’ anchors have ',
              w({}, 'aria-selected="false"')
            ),
            N(
              {},
              'Selected tab’s anchor has ',
              w({}, 'tabindex="0"'),
              ', all other tabs have ',
              w({}, 'tabindex="-1"')
            ),
            N(
              {},
              'Each tab’s anchor has an ',
              w({}, 'aria-controls'),
              ' attribute whose value is the id of the associated ',
              w({}, '<div role="tabpanel">')
            ),
            N(
              {},
              'Each tab panel has an ',
              w({}, 'aria-labelledby'),
              ' attribute whose value is the id of its associated ',
              w({}, '<a role="tab">')
            ),
            N(
              {},
              'Each tab panel has an ',
              w({}, 'aria-hidden'),
              ' attribute whose value is toggled based on which panel is visible'
            ),
            N(
              {},
              'When the Carousel is set to auto-play, the HTML for the pause button is required to precede the HTML of the tab set'
            )
          ),
          S({ id: 'Keyboard-Interactions' }, 'Keyboard Interactions'),
          k(
            {},
            N(
              {},
              'Arrow keys, when focus is on selected tab, cycle selection to the next or previous tab'
            ),
            N(
              {},
              'Tab key, when focus is before the tab list, moves focus to the selected tab panel'
            ),
            N(
              {},
              "Tab key, when focus is on selected tabpanel, moves focus into the selected tabpanel's associated tab or to the next focusable element on the page if that panel has no focusable elements"
            ),
            N(
              {},
              'Shift+Tab keys, when focus is on first element in a tab panel, move focus focus entirely from tabset'
            )
          ),
          x({ id: 'Base' }, 'Base'),
          Object(n.createElement)(
            o.a,
            { title: 'carousel' },
            Object(n.createElement)(
              i.a,
              { demoStyles: 'width: 480px; max-width: 100%;' },
              Object(n.createElement)(g, { panelActive: '1', autoPlay: !0 })
            )
          ),
          x({ id: 'Navigating-between-panels' }, 'Navigating between panels'),
          P(
            {},
            'You are able to navigate between panels but interacting with the ',
            w({}, 'slds-carousel__indicator'),
            ' elements that sit below the panel.'
          ),
          A({ id: 'Panel-1-active' }, 'Panel 1 active'),
          Object(n.createElement)(
            o.a,
            { title: 'carousel-panel-transition-panel-1' },
            Object(n.createElement)(
              i.a,
              { demoStyles: 'width: 480px; max-width: 100%;' },
              Object(n.createElement)(g, { panelActive: '1', autoPlay: !0 })
            )
          ),
          A({ id: 'Panel-2-active' }, 'Panel 2 active'),
          Object(n.createElement)(
            o.a,
            { title: 'carousel-panel-transition-panel-2' },
            Object(n.createElement)(
              i.a,
              { demoStyles: 'width: 480px; max-width: 100%;' },
              Object(n.createElement)(g, { panelActive: '2', autoPlay: !0 })
            )
          ),
          Object(n.createElement)(
            r.a,
            { toggleCode: !1 },
            Object(n.createElement)(
              'div',
              { className: 'slds-carousel' },
              Object(n.createElement)(
                'div',
                { className: 'slds-carousel__stage' },
                Object(n.createElement)(
                  'div',
                  {
                    className: 'slds-carousel__panels',
                    style: { transform: 'translateX(-100%)' }
                  },
                  Object(n.createElement)(
                    'div',
                    {
                      id: 'content-id-01',
                      className: 'slds-carousel__panel',
                      'aria-hidden': 'false',
                      role: 'tabpanel',
                      'aria-labelledby': 'indicator-id-01',
                      tabIndex: '-1'
                    },
                    '...'
                  ),
                  Object(n.createElement)(
                    'div',
                    {
                      id: 'content-id-02',
                      className: 'slds-carousel__panel',
                      'aria-hidden': 'true',
                      role: 'tabpanel',
                      'aria-labelledby': 'indicator-id-02',
                      tabIndex: '0'
                    },
                    '...'
                  )
                ),
                Object(n.createElement)(
                  'ul',
                  { className: 'slds-carousel__indicators', role: 'tablist' },
                  Object(n.createElement)(
                    'li',
                    {
                      className: 'slds-carousel__indicator',
                      role: 'presentation'
                    },
                    Object(n.createElement)(
                      'a',
                      {
                        id: 'indicator-id-01',
                        className: 'slds-carousel__indicator-action',
                        href: 'javascript:void(0);',
                        role: 'tab',
                        tabIndex: '-1',
                        'aria-selected': 'false',
                        'aria-controls': 'content-id-01',
                        title: 'Visit App Exchange tab'
                      },
                      '...'
                    )
                  ),
                  Object(n.createElement)(
                    'li',
                    {
                      className: 'slds-carousel__indicator',
                      role: 'presentation'
                    },
                    Object(n.createElement)(
                      'a',
                      {
                        id: 'indicator-id-02',
                        className:
                          'slds-carousel__indicator-action slds-is-active',
                        href: 'javascript:void(0);',
                        role: 'tab',
                        tabIndex: '0',
                        'aria-selected': 'true',
                        'aria-controls': 'content-id-02',
                        title: 'Click to Customize tab'
                      },
                      '...'
                    )
                  )
                )
              )
            )
          ),
          Object(n.createElement)(
            c.a,
            { header: 'Accessibility', type: 'a11y' },
            Object(n.createElement)(
              'p',
              null,
              'A panel becomes visible by toggling the ',
              Object(n.createElement)('code', null, 'aria-hidden'),
              ' attribute from ',
              Object(n.createElement)('code', null, 'false'),
              ' to ',
              Object(n.createElement)('code', null, 'true'),
              ' on the ',
              Object(n.createElement)('code', null, 'slds-carousel__panel'),
              ' element. When a panel becomes active, the `tabindex` of the other non-visible panels should be set to -1 while the active panel remains at 0.'
            )
          ),
          P(
            {},
            'When a panel becomes active, apply an inline style to ',
            w({}, 'slds-carousel__panel'),
            ' to move the panels left to right. We do this by updating the location of the panel on its Y axis using transforms. The first panel should be ',
            w({}, 'transform: translateX(0%)'),
            ' but when any preceding panel becomes active it can be subtracted by 100%, moving 100% of each panel to the left. For example, panel 1 would be visible at ',
            w({}, 'transform: translateX(0%)'),
            ', while panel 3 would be visible at ',
            w({}, 'transform: translateX(-200%)'),
            '.'
          ),
          P(
            {},
            'When making the ',
            w({}, 'slds-carousel__panel'),
            ' active, the indicator should be updated with the ',
            w({}, 'slds-is-active'),
            ' class. This provides visual feedback showing which carousel panel is active.'
          ),
          x({ id: 'Auto-play' }, 'Auto-play'),
          P(
            {},
            'If the Carousel is set to auto-play, a pause button is required to be first in the HTML before the tab set.'
          ),
          Object(n.createElement)(
            c.a,
            { header: 'Accessibility', type: 'a11y' },
            Object(n.createElement)(
              'p',
              null,
              'When that pause button is interacted with, the ',
              Object(n.createElement)('code', null, 'aria-pressed'),
              ' role needs to be toggled to ',
              Object(n.createElement)('code', null, 'true'),
              '.'
            )
          ),
          Object(n.createElement)(
            o.a,
            { title: 'carousel-autoplay' },
            Object(n.createElement)(
              r.a,
              { toggleCode: !1 },
              Object(n.createElement)(
                'div',
                { className: 'slds-carousel' },
                Object(n.createElement)(
                  'div',
                  { className: 'slds-carousel__stage' },
                  Object(n.createElement)(O, { stop: !0 }),
                  Object(n.createElement)(
                    'div',
                    { className: 'slds-carousel__panels' },
                    '...'
                  )
                )
              )
            )
          )
        );
      },
      C = function() {
        return Object(l.a)(I());
      };
  }
});
