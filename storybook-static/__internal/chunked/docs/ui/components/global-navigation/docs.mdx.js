var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/global-navigation/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, s, r = t[0], o = t[1], c = t[2], m = 0, b = [];
      m < r.length;
      m++
    )
      (s = r[m]),
        Object.prototype.hasOwnProperty.call(l, s) && l[s] && b.push(l[s][0]),
        (l[s] = 0);
    for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
    for (d && d(t); b.length; ) b.shift()();
    return i.push.apply(i, c || []), a();
  }
  function a() {
    for (var e, t = 0; t < i.length; t++) {
      for (var a = i[t], n = !0, r = 1; r < a.length; r++) {
        var o = a[r];
        0 !== l[o] && (n = !1);
      }
      n && (i.splice(t--, 1), (e = s((s.s = a[0]))));
    }
    return e;
  }
  var n = {},
    l = { 41: 0 },
    i = [];
  function s(t) {
    if (n[t]) return n[t].exports;
    var a = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, s), (a.l = !0), a.exports;
  }
  (s.m = e),
    (s.c = n),
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
        for (var n in e)
          s.d(
            a,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
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
    o = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var c = 0; c < r.length; c++) t(r[c]);
  var d = o;
  return i.push([225, 0]), a();
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
  225: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'getElement', function() {
        return le;
      }),
      a.d(t, 'getContents', function() {
        return ie;
      });
    var n = a(0),
      l = a.n(n),
      i = a(4),
      s = a(1),
      r = a(23),
      o = (a(15), a(3)),
      c = a.n(o),
      d = a(5),
      m = a.n(d),
      b = a(10),
      u = a(9),
      E = a(7),
      v = a(83);
    function h(e) {
      return (h =
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
    function p(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function I(e, t) {
      return (I =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function T(e, t) {
      return !t || ('object' !== h(t) && 'function' != typeof t) ? g(e) : t;
    }
    function g(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function C() {
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
    function w(e) {
      return (w = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function f() {
      return (f =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var n in a)
              Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    var O = l.a.createElement(
        u.f,
        { className: 'slds-dropdown_right' },
        l.a.createElement(
          u.h,
          null,
          l.a.createElement(
            u.g,
            { title: 'Main action' },
            l.a.createElement(b.a, {
              className:
                'slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small',
              sprite: 'utility',
              symbol: 'add'
            }),
            'Main action'
          ),
          l.a.createElement(
            'li',
            {
              className: 'slds-dropdown__header slds-has-divider_top-space',
              role: 'separator'
            },
            l.a.createElement('span', null, 'Menu header')
          ),
          l.a.createElement(u.g, null, 'Menu Item One'),
          l.a.createElement(u.g, null, 'Menu Item Two'),
          l.a.createElement(u.g, null, 'Menu Item Three')
        )
      ),
      y = function(e) {
        var t = e.label,
          a = e.isActive,
          n = e.hasNavMenu,
          i = e.hasNavMenuOpen,
          s = e.hasMenuDropdown,
          r = m()('slds-context-bar__item', {
            'slds-is-active': a,
            'slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click': n,
            'slds-is-open': i
          });
        return l.a.createElement(
          'li',
          { className: r },
          l.a.createElement(
            'a',
            {
              href: 'javascript:void(0);',
              className: 'slds-context-bar__label-action',
              title: t
            },
            a &&
              l.a.createElement(
                'span',
                { className: 'slds-assistive-text' },
                'Current Page:'
              ),
            l.a.createElement(
              'span',
              { className: 'slds-truncate', title: t },
              t
            )
          ),
          n &&
            l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(P, { onClick: e.onClick }),
              s && O
            )
        );
      };
    (y.defaultProps = { lable: 'Menu Item', hasMenuDropdown: !0 }),
      (y.propTypes = {
        label: c.a.string.isRequired,
        isActive: c.a.bool,
        hasNavMenu: c.a.bool,
        hasNavMenuOpen: c.a.bool,
        hasMenuDropdown: c.a.bool
      });
    var P = function(e) {
        return l.a.createElement(
          'div',
          { className: 'slds-context-bar__icon-action slds-p-left_none' },
          l.a.createElement(
            E.b,
            f(
              {
                className: 'slds-button_icon slds-context-bar__button',
                symbol: 'chevrondown',
                'aria-haspopup': 'true',
                assistiveText: 'Open menu item submenu',
                title: 'Open menu item submenu'
              },
              e
            )
          )
        );
      },
      _ = function(e) {
        var t = e.appName,
          a = e.homeItemIsActive,
          n = e.hasNavMenuOpen,
          i = e.children;
        return l.a.createElement(
          'div',
          { className: 'slds-context-bar' },
          l.a.createElement(
            'div',
            { className: 'slds-context-bar__primary' },
            l.a.createElement(
              'div',
              {
                className:
                  'slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover'
              },
              l.a.createElement(
                'div',
                { className: 'slds-context-bar__icon-action' },
                l.a.createElement(v.a, {
                  className: 'slds-context-bar__button'
                })
              ),
              l.a.createElement(
                'span',
                {
                  className:
                    'slds-context-bar__label-action slds-context-bar__app-name'
                },
                l.a.createElement(
                  'span',
                  { className: 'slds-truncate', title: t || 'App Name' },
                  t || 'App Name'
                )
              )
            )
          ),
          l.a.createElement(
            'nav',
            { className: 'slds-context-bar__secondary', role: 'navigation' },
            l.a.createElement(
              'ul',
              { className: 'slds-grid' },
              l.a.createElement(y, { label: 'Home', isActive: a }),
              i ||
                l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement(y, {
                    label: 'Menu Item',
                    hasNavMenu: !0,
                    hasNavMenuOpen: n,
                    onClick: function() {
                      return e.toggleNavMenu();
                    }
                  }),
                  l.a.createElement(y, { label: 'Menu Item' }),
                  l.a.createElement(y, { label: 'Menu Item' }),
                  l.a.createElement(y, { label: 'Menu Item' })
                )
            )
          )
        );
      };
    _.propTypes = {
      appName: c.a.string,
      homeItemIsActive: c.a.bool,
      hasNavMenuOpen: c.a.bool,
      children: c.a.node
    };
    var N = (function(e) {
        !(function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && I(e, t);
        })(r, e);
        var t,
          a,
          n,
          i,
          s = ((t = r),
          function() {
            var e,
              a = w(t);
            if (C()) {
              var n = w(this).constructor;
              e = Reflect.construct(a, arguments, n);
            } else e = a.apply(this, arguments);
            return T(this, e);
          });
        function r() {
          var e;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, r),
            ((e = s.call(this)).toggleNavMenu = e.toggleNavMenu.bind(g(e))),
            (e.state = { hasNavMenuOpen: !1 }),
            e
          );
        }
        return (
          (a = r),
          (n = [
            {
              key: 'toggleNavMenu',
              value: function() {
                this.setState({ hasNavMenuOpen: !this.state.hasNavMenuOpen });
              }
            },
            {
              key: 'render',
              value: function() {
                return l.a.createElement(_, {
                  homeItemIsActive: !0,
                  toggleNavMenu: this.toggleNavMenu,
                  hasNavMenuOpen:
                    this.props.hasNavMenuOpen || this.state.hasNavMenuOpen
                });
              }
            }
          ]) && p(a.prototype, n),
          i && p(a, i),
          r
        );
      })(n.Component),
      A = l.a.createElement(N, null),
      x = [
        {
          id: 'item-active',
          label: 'Item Active',
          element: l.a.createElement(
            _,
            null,
            l.a.createElement(y, { label: 'Menu Item', hasNavMenu: !0 }),
            l.a.createElement(y, { label: 'Menu Item' }),
            l.a.createElement(y, { label: 'Menu Item', isActive: !0 }),
            l.a.createElement(y, { label: 'Menu Item' })
          )
        },
        {
          id: 'item-menu-open',
          label: 'Item Menu Open',
          element: l.a.createElement(N, { hasNavMenuOpen: !0 })
        }
      ],
      U = a(41),
      j = a(47),
      S = 'context-tab-panel-1',
      L = 'context-tab-panel-2',
      H = 'context-tab-panel-3',
      F = 'context-tab-id-1',
      M = 'context-tab-id-2',
      k = 'context-tab-id-3',
      W = function(e) {
        return l.a.createElement(
          'span',
          {
            className:
              'slds-text-body_small slds-text-color_weak slds-p-left_large'
          },
          l.a.createElement('span', { className: 'slds-assistive-text' }, ':'),
          e.children
        );
      },
      V = function(e) {
        return l.a.createElement(
          'li',
          {
            className: m()(
              'slds-context-bar__item slds-context-bar__item_tab',
              e.className,
              {
                'slds-is-active': e.itemActive,
                'slds-is-unsaved': e.itemUnsaved,
                'slds-is-pinned': e.pinned,
                'slds-has-focus': e.hasFocus,
                'slds-has-notification': e.itemUnread,
                'slds-has-sub-tabs': e.hasSubtabs,
                'slds-has-success': 'success' === e.statusLevel,
                'slds-has-warning': 'warning' === e.statusLevel,
                'slds-has-error': 'error' === e.statusLevel
              }
            ),
            role: 'presentation'
          },
          l.a.createElement(
            'a',
            {
              href: 'javascript:void(0);',
              className: 'slds-context-bar__label-action',
              role: 'tab',
              title: e.title,
              'aria-selected': e.itemActive ? 'true' : 'false',
              tabIndex: e.itemActive ? '0' : '-1',
              'aria-controls': e.tabPanelId,
              id: e.id
            },
            l.a.createElement(
              j.a,
              null,
              e.itemUnsaved &&
                l.a.createElement(j.c, { title: 'Tab Not Saved' }),
              e.itemUnread && l.a.createElement(j.b, null)
            ),
            e.hasIcon &&
              l.a.createElement(j.d, {
                statusLevel: e.statusLevel,
                symbol: e.symbol
              }),
            l.a.createElement(
              'span',
              {
                className: m()(
                  'slds-truncate',
                  e.pinned ? 'slds-assistive-text' : null
                ),
                title: e.title
              },
              e.title
            )
          ),
          l.a.createElement(
            'div',
            {
              className: m()(
                'slds-context-bar__icon-action slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-p-left_none slds-p-right_none',
                'true' === e.actionOverflow ? 'slds-is-open' : null
              )
            },
            l.a.createElement(E.b, {
              className: 'slds-button_icon-container slds-button_icon-x-small',
              tabIndex: e.itemActive ? '0' : '-1',
              symbol: 'chevrondown',
              'aria-haspopup': 'true',
              assistiveText: 'Actions for ' + e.title,
              title: 'Actions for ' + e.title,
              theme:
                'error' === e.statusLevel || 'success' === e.statusLevel
                  ? 'inverse'
                  : null,
              useCurrentColor:
                'error' !== e.statusLevel && 'success' !== e.statusLevel
            }),
            l.a.createElement(
              u.f,
              { className: 'slds-dropdown_right' },
              l.a.createElement(
                u.h,
                null,
                l.a.createElement(
                  u.g,
                  { iconRight: l.a.createElement(W, null, 'r') },
                  'Refresh Tab'
                ),
                l.a.createElement(
                  u.g,
                  { iconRight: l.a.createElement(W, null, '⇧ + n') },
                  'Open in a new window'
                ),
                l.a.createElement(
                  u.g,
                  { iconRight: l.a.createElement(W, null, 'p') },
                  'Pin Tab'
                ),
                l.a.createElement(
                  u.g,
                  { iconRight: l.a.createElement(W, null, 'w') },
                  'Close Tab'
                )
              )
            )
          ),
          e.pinned
            ? null
            : l.a.createElement(
                'div',
                {
                  className:
                    'slds-context-bar__icon-action slds-col_bump-left slds-p-left_none'
                },
                l.a.createElement(E.b, {
                  className:
                    'slds-button_icon-container slds-button_icon-x-small',
                  tabIndex: e.itemActive ? '0' : '-1',
                  symbol: 'close',
                  assistiveText: 'Close ' + e.title,
                  title: 'Close ' + e.title,
                  theme:
                    'error' === e.statusLevel || 'success' === e.statusLevel
                      ? 'inverse'
                      : null,
                  useCurrentColor:
                    'error' !== e.statusLevel && 'success' !== e.statusLevel
                })
              )
        );
      };
    (V.propTypes = {
      className: c.a.string,
      hasFocus: c.a.bool,
      hasSubtabs: c.a.bool,
      id: c.a.string.isRequired,
      itemActive: c.a.bool,
      itemUnread: c.a.bool,
      itemUnsaved: c.a.bool,
      pinned: c.a.bool,
      statusLevel: c.a.oneOf(['error', 'success', 'warning']),
      tabPanelId: c.a.string.isRequired,
      title: c.a.string
    }),
      (V.defaultProps = { hasIcon: !0, title: 'Tab Name' });
    var R = function(e) {
        return l.a.createElement(
          'div',
          {
            id: e.id,
            className: m()(e.show ? 'slds-show' : 'slds-hide'),
            role: 'tabpanel',
            'aria-labelledby': e.tabId
          },
          e.children
        );
      },
      D = function(e) {
        return l.a.createElement(
          'div',
          {
            className: m()(
              'slds-context-bar slds-context-bar_tabs',
              e.className
            )
          },
          l.a.createElement(
            'div',
            { className: 'slds-context-bar__primary' },
            l.a.createElement(
              'div',
              {
                className:
                  'slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover'
              },
              l.a.createElement(
                'div',
                { className: 'slds-context-bar__icon-action' },
                l.a.createElement(v.a, {
                  className: 'slds-context-bar__button'
                })
              ),
              l.a.createElement(
                'span',
                {
                  className:
                    'slds-context-bar__label-action slds-context-bar__app-name'
                },
                l.a.createElement(
                  'span',
                  {
                    className: 'slds-truncate',
                    title: e.appName || 'App Name'
                  },
                  e.appName || 'App Name'
                )
              )
            ),
            l.a.createElement(
              'div',
              {
                className: m()(
                  'slds-context-bar__item slds-context-bar__object-switcher slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click',
                  e.objectSwitchClassName
                )
              },
              l.a.createElement(
                'a',
                {
                  href: 'javascript:void(0);',
                  className: 'slds-context-bar__label-action'
                },
                l.a.createElement(
                  'span',
                  { className: 'slds-truncate', title: 'Object' },
                  'Object'
                )
              ),
              l.a.createElement(
                'div',
                { className: 'slds-context-bar__icon-action' },
                l.a.createElement(E.b, {
                  className:
                    'slds-button_icon-container slds-button_icon-x-small',
                  symbol: 'chevrondown',
                  'aria-haspopup': 'true',
                  assistiveText: 'Open object switcher menu',
                  title: 'Open object switcher menu'
                })
              ),
              l.a.createElement(
                u.f,
                { className: 'slds-dropdown_right' },
                l.a.createElement(
                  u.h,
                  null,
                  l.a.createElement(
                    u.g,
                    null,
                    l.a.createElement(b.a, {
                      className:
                        'slds-icon slds-icon_small slds-icon-standard-account slds-m-right_small',
                      sprite: 'standard',
                      symbol: 'account'
                    }),
                    'Accounts'
                  ),
                  l.a.createElement(
                    u.g,
                    null,
                    l.a.createElement(b.a, {
                      className:
                        'slds-icon slds-icon_small slds-icon-standard-case slds-m-right_small',
                      sprite: 'standard',
                      symbol: 'case'
                    }),
                    'Cases'
                  ),
                  l.a.createElement(
                    u.g,
                    null,
                    l.a.createElement(b.a, {
                      className:
                        'slds-icon slds-icon_small slds-icon-standard-work-order slds-m-right_small',
                      sprite: 'standard',
                      symbol: 'work_order'
                    }),
                    'Insights'
                  )
                )
              )
            ),
            l.a.createElement(
              'div',
              {
                className: m()(
                  'slds-context-bar__item slds-dropdown-trigger slds-dropdown-trigger_click',
                  e.addTabActive ? 'slds-is-open' : null,
                  e.addTabClassName
                )
              },
              l.a.createElement(
                'div',
                { className: 'slds-context-bar__icon-action' },
                l.a.createElement(E.b, {
                  className:
                    'slds-button_icon-container slds-button_icon-small',
                  symbol: 'add',
                  assistiveText: 'Open a New Tab',
                  title: 'Open a New Tab'
                })
              ),
              e.addTabActive
                ? l.a.createElement(
                    'section',
                    {
                      className: 'slds-popover slds-nubbin_top',
                      role: 'dialog',
                      'aria-label': 'Add tab by URL or ID',
                      style: {
                        position: 'absolute',
                        left: '1.125rem',
                        top: '2.75rem',
                        marginLeft: '-10rem'
                      }
                    },
                    l.a.createElement(
                      'div',
                      { className: 'slds-popover__body' },
                      l.a.createElement(
                        'div',
                        { className: 'slds-form-element' },
                        l.a.createElement(
                          'label',
                          {
                            className: 'slds-form-element__label',
                            htmlFor: 'text-input-01'
                          },
                          'Add Page by URL or ID'
                        ),
                        l.a.createElement(
                          'div',
                          { className: 'slds-form-element__control slds-grid' },
                          l.a.createElement('input', {
                            id: 'text-input-01',
                            className: 'slds-input',
                            type: 'text',
                            placeholder: 'Placeholder Text'
                          }),
                          l.a.createElement(
                            'button',
                            {
                              className:
                                'slds-button slds-button_brand slds-shrink-none slds-m-left_small',
                              type: 'submit'
                            },
                            'Add Tab'
                          )
                        )
                      )
                    )
                  )
                : null
            )
          ),
          l.a.createElement(
            'div',
            { className: 'slds-context-bar__secondary' },
            l.a.createElement('div', {
              className: 'slds-context-bar__vertical-divider'
            }),
            l.a.createElement(
              'ul',
              { className: 'slds-grid', role: 'tablist' },
              e.children
            )
          )
        );
      },
      B = function(e) {
        return l.a.createElement(
          'li',
          {
            className: m()(
              'slds-context-bar__item',
              'slds-context-bar__dropdown-trigger',
              'slds-dropdown-trigger',
              'slds-dropdown-trigger_click',
              {
                'slds-is-open': e.isOpen,
                'slds-has-notification': e.itemUnread,
                'slds-is-unsaved': e.itemUnsaved,
                'slds-has-success': 'success' === e.statusLevel,
                'slds-has-warning': 'warning' === e.statusLevel,
                'slds-has-error': 'error' === e.statusLevel
              }
            )
          },
          l.a.createElement(
            'button',
            {
              className: 'slds-button slds-context-bar__label-action',
              title: 'More Tab Items',
              'aria-haspopup': 'true'
            },
            l.a.createElement(
              j.a,
              null,
              e.itemUnsaved && l.a.createElement(j.c, null),
              e.itemUnread && l.a.createElement(j.b, null)
            ),
            l.a.createElement(
              'span',
              { className: 'slds-truncate', title: 'More Tabs' },
              'More ',
              l.a.createElement(
                'span',
                { className: 'slds-assistive-text' },
                'Tabs'
              )
            ),
            l.a.createElement(b.a, {
              className:
                'slds-button__icon slds-button__icon_small slds-button__icon_right',
              sprite: 'utility',
              symbol: 'chevrondown'
            })
          ),
          l.a.createElement(
            u.f,
            { className: 'slds-dropdown_right' },
            l.a.createElement(
              u.h,
              null,
              l.a.createElement(
                u.g,
                {
                  className: m()({
                    'slds-has-notification': e.itemUnread,
                    'slds-is-unsaved': e.itemUnsaved
                  }),
                  statusLevel: e.statusLevel,
                  title: 'Chat - Customer'
                },
                l.a.createElement(
                  j.a,
                  null,
                  e.itemUnsaved &&
                    l.a.createElement(j.c, {
                      title: 'Tab(s) within menu not saved'
                    }),
                  e.itemUnread && l.a.createElement(j.b, null)
                ),
                e.itemHasIcon &&
                  l.a.createElement(j.d, {
                    statusLevel: e.statusLevel,
                    symbol: 'live_chat'
                  }),
                l.a.createElement('span', null, 'Chat - Customer')
              ),
              l.a.createElement(
                u.g,
                { title: 'Overflow Tab Item' },
                l.a.createElement(j.a, null),
                e.itemHasIcon && l.a.createElement(j.d, null),
                l.a.createElement('span', null, 'Overflow Tab Item')
              )
            )
          )
        );
      };
    (B.propTypes = { statusLevel: c.a.oneOf(['error', 'success', 'warning']) }),
      (B.defaultProps = { itemHasIcon: !0 });
    var q = l.a.createElement(
        l.a.Fragment,
        null,
        l.a.createElement(
          D,
          null,
          l.a.createElement(V, {
            title: 'Home',
            symbol: 'home',
            tabPanelId: S,
            id: F
          }),
          l.a.createElement(V, { title: 'Tab Item 1', tabPanelId: L, id: M }),
          l.a.createElement(V, { title: 'Tab Item 2', tabPanelId: H, id: k })
        ),
        l.a.createElement(R, { show: !0, id: S, tabId: F }, 'Tab Home Content'),
        l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
        l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
      ),
      z = [
        {
          id: 'tab-active',
          label: 'Tab - Active',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                title: 'Home',
                symbol: 'home',
                tabPanelId: S,
                id: F
              }),
              l.a.createElement(V, {
                title: 'Tab Item 1',
                tabPanelId: L,
                id: M,
                itemActive: !0
              }),
              l.a.createElement(V, {
                title: 'Tab Item 2',
                tabPanelId: H,
                id: k
              })
            ),
            l.a.createElement(R, { id: S, tabId: F }, 'Tab Home Content'),
            l.a.createElement(
              R,
              { show: !0, id: L, tabId: M },
              'Tab One Content'
            ),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'tab-active-focus',
          label: 'Tab - Active Focus',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                title: 'Home',
                symbol: 'home',
                tabPanelId: S,
                id: F
              }),
              l.a.createElement(V, {
                title: 'Tab Item 1',
                tabPanelId: L,
                id: M,
                itemActive: !0,
                hasFocus: !0
              }),
              l.a.createElement(V, {
                title: 'Tab Item 2',
                tabPanelId: H,
                id: k
              })
            ),
            l.a.createElement(R, { id: S, tabId: F }, 'Tab Home Content'),
            l.a.createElement(
              R,
              { show: !0, id: L, tabId: M },
              'Tab One Content'
            ),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'tab-item-action-menu-open',
          label: 'Tab - Action Overflow',
          element: l.a.createElement(
            'div',
            { className: 'demo-only', style: { height: '12rem' } },
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                title: 'Home',
                symbol: 'home',
                tabPanelId: S,
                id: F
              }),
              l.a.createElement(V, {
                title: 'Tab Item 1',
                tabPanelId: L,
                id: M,
                itemActive: !0,
                actionOverflow: 'true'
              }),
              l.a.createElement(V, {
                title: 'Tab Item 2',
                tabPanelId: H,
                id: k
              })
            ),
            l.a.createElement(R, { id: S, tabId: F }, 'Tab Home Content'),
            l.a.createElement(
              R,
              { show: !0, id: L, tabId: M },
              'Tab One Content'
            ),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'unsaved-tab',
          label: 'Unsaved Tab',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                title: 'Home',
                symbol: 'home',
                tabPanelId: S,
                id: F,
                itemActive: !0
              }),
              l.a.createElement(V, {
                title: 'Tab Item 1',
                tabPanelId: L,
                id: M
              }),
              l.a.createElement(V, {
                title: 'Tab Item 2',
                tabPanelId: H,
                id: k,
                itemUnsaved: !0
              })
            ),
            l.a.createElement(
              R,
              { show: !0, id: S, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'unread-tab',
          label: 'Unread Tab',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'New activity in Tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                title: 'Home',
                symbol: 'home',
                tabPanelId: S,
                id: F,
                itemActive: !0
              }),
              l.a.createElement(V, {
                title: 'Tab Item 1',
                tabPanelId: L,
                id: M
              }),
              l.a.createElement(V, {
                title: 'Chat - Customer',
                tabPanelId: H,
                id: k,
                symbol: 'live_chat',
                itemUnread: !0
              })
            ),
            l.a.createElement(
              R,
              { show: !0, id: S, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Chat - Customer Content')
          )
        },
        {
          id: 'unread-unsaved-tab',
          label: 'Unread/Unsaved Tab',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'New activity in Tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                title: 'Home',
                symbol: 'home',
                tabPanelId: S,
                id: F,
                itemActive: !0
              }),
              l.a.createElement(V, {
                title: 'Tab Item 1',
                tabPanelId: L,
                id: M
              }),
              l.a.createElement(V, {
                title: 'Chat - Customer',
                tabPanelId: H,
                id: k,
                symbol: 'live_chat',
                itemUnread: !0,
                itemUnsaved: !0
              })
            ),
            l.a.createElement(
              R,
              { show: !0, id: S, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Chat - Customer Content')
          )
        },
        {
          id: 'tab-success',
          label: 'Tab - Success',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Success: SLA agreement warning cleared in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                id: F,
                itemActive: !0,
                symbol: 'home',
                tabPanelId: S,
                title: 'Home'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                statusLevel: 'success',
                id: k,
                symbol: 'live_chat',
                tabPanelId: H,
                title: 'Chat - Customer'
              })
            ),
            l.a.createElement(
              R,
              { id: S, show: !0, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Chat - Customer Content')
          )
        },
        {
          id: 'tab-success-active',
          label: 'Tab - Success Active',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Success: SLA agreement warning cleared in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                id: F,
                symbol: 'home',
                tabPanelId: S,
                title: 'Home'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                statusLevel: 'success',
                id: k,
                itemActive: !0,
                symbol: 'live_chat',
                tabPanelId: H,
                title: 'Chat - Customer'
              })
            ),
            l.a.createElement(R, { id: S, tabId: F }, 'Tab Home Content'),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(
              R,
              { id: H, show: !0, tabId: k },
              'Chat - Customer Content'
            )
          )
        },
        {
          id: 'tab-success-focus',
          label: 'Tab - Success Focused',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Success: SLA agreement warning cleared in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                id: F,
                symbol: 'home',
                tabPanelId: S,
                title: 'Home'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                statusLevel: 'success',
                hasFocus: !0,
                id: k,
                itemActive: !0,
                symbol: 'live_chat',
                tabPanelId: H,
                title: 'Chat - Customer'
              })
            ),
            l.a.createElement(R, { id: S, tabId: F }, 'Tab Home Content'),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(
              R,
              { id: H, show: !0, tabId: k },
              'Chat - Customer Content'
            )
          )
        },
        {
          id: 'tab-success-unread',
          label: 'Tab - Success Unread',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Success: SLA agreement warning cleared in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                id: F,
                itemActive: !0,
                symbol: 'home',
                tabPanelId: S,
                title: 'Home'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                statusLevel: 'success',
                id: k,
                itemUnread: !0,
                symbol: 'live_chat',
                tabPanelId: H,
                title: 'Chat - Customer'
              })
            ),
            l.a.createElement(
              R,
              { id: S, show: !0, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Chat - Customer Content')
          )
        },
        {
          id: 'tab-success-unsaved',
          label: 'Tab - Success Unsaved',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Success: SLA agreement warning cleared in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                id: F,
                itemActive: !0,
                symbol: 'home',
                tabPanelId: S,
                title: 'Home'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                statusLevel: 'success',
                id: k,
                itemUnsaved: !0,
                symbol: 'live_chat',
                tabPanelId: H,
                title: 'Chat - Customer'
              })
            ),
            l.a.createElement(
              R,
              { id: S, show: !0, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Chat - Customer Content')
          )
        },
        {
          id: 'tab-success-unread-unsaved',
          label: 'Tab - Success Unread and Unsaved',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Success: SLA agreement warning cleared in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                id: F,
                itemActive: !0,
                symbol: 'home',
                tabPanelId: S,
                title: 'Home'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                statusLevel: 'success',
                id: k,
                itemUnread: !0,
                itemUnsaved: !0,
                symbol: 'live_chat',
                tabPanelId: H,
                title: 'Chat - Customer'
              })
            ),
            l.a.createElement(
              R,
              { id: S, show: !0, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Chat - Customer Content')
          )
        },
        {
          id: 'tab-warning',
          label: 'Tab - Warning',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Warning: SLA agreement in 30 seconds in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                id: F,
                itemActive: !0,
                symbol: 'home',
                tabPanelId: S,
                title: 'Home'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                statusLevel: 'warning',
                id: k,
                symbol: 'live_chat',
                tabPanelId: H,
                title: 'SLA in 0.30'
              })
            ),
            l.a.createElement(
              R,
              { id: S, show: !0, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Chat - Customer Content')
          )
        },
        {
          id: 'tab-warning-active',
          label: 'Tab - Warning Active',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Warning: SLA agreement in 30 seconds in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                id: F,
                symbol: 'home',
                tabPanelId: S,
                title: 'Home'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                statusLevel: 'warning',
                id: k,
                itemActive: !0,
                symbol: 'live_chat',
                tabPanelId: H,
                title: 'SLA in 0.30'
              })
            ),
            l.a.createElement(R, { id: S, tabId: F }, 'Tab Home Content'),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(
              R,
              { id: H, show: !0, tabId: k },
              'Chat - Customer Content'
            )
          )
        },
        {
          id: 'tab-warning-focus',
          label: 'Tab - Warning focused',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Warning: SLA agreement in 30 seconds in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                id: F,
                symbol: 'home',
                tabPanelId: S,
                title: 'Home'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                statusLevel: 'warning',
                hasFocus: !0,
                id: k,
                itemActive: !0,
                symbol: 'live_chat',
                tabPanelId: H,
                title: 'SLA in 0.30'
              })
            ),
            l.a.createElement(
              R,
              { id: S, show: !0, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Chat - Customer Content')
          )
        },
        {
          id: 'tab-warning-unread',
          label: 'Tab - Warning Unread',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Warning: SLA agreement in 30 seconds in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                id: F,
                itemActive: !0,
                symbol: 'home',
                tabPanelId: S,
                title: 'Home'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                statusLevel: 'warning',
                id: k,
                itemUnread: !0,
                symbol: 'live_chat',
                tabPanelId: H,
                title: 'SLA in 0.30'
              })
            ),
            l.a.createElement(
              R,
              { id: S, show: !0, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Chat - Customer Content')
          )
        },
        {
          id: 'tab-warning-unsaved',
          label: 'Tab - Warning Unsaved',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Warning: SLA agreement in 30 seconds in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                id: F,
                itemActive: !0,
                symbol: 'home',
                tabPanelId: S,
                title: 'Home'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                statusLevel: 'warning',
                id: k,
                itemUnsaved: !0,
                symbol: 'live_chat',
                tabPanelId: H,
                title: 'SLA in 0.30'
              })
            ),
            l.a.createElement(
              R,
              { id: S, show: !0, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Chat - Customer Content')
          )
        },
        {
          id: 'tab-warning-unread-unsaved',
          label: 'Tab - Warning Unread and Unsaved',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Warning: SLA agreement in 30 seconds in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                id: F,
                itemActive: !0,
                symbol: 'home',
                tabPanelId: S,
                title: 'Home'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                statusLevel: 'warning',
                id: k,
                itemUnread: !0,
                itemUnsaved: !0,
                symbol: 'live_chat',
                tabPanelId: H,
                title: 'SLA in 0.30'
              })
            ),
            l.a.createElement(
              R,
              { id: S, show: !0, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Chat - Customer Content')
          )
        },
        {
          id: 'tab-error',
          label: 'Tab - Error',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Violation: SLA agreement in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                id: F,
                itemActive: !0,
                symbol: 'home',
                tabPanelId: S,
                title: 'Home'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                statusLevel: 'error',
                id: k,
                symbol: 'live_chat',
                tabPanelId: H,
                title: 'SLA Violation'
              })
            ),
            l.a.createElement(
              R,
              { id: S, show: !0, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Chat - Customer Content')
          )
        },
        {
          id: 'tab-error-active',
          label: 'Tab - Error Active',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Violation: SLA agreement in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                id: F,
                symbol: 'home',
                tabPanelId: S,
                title: 'Home'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                statusLevel: 'error',
                id: k,
                itemActive: !0,
                symbol: 'live_chat',
                tabPanelId: H,
                title: 'SLA Violation'
              })
            ),
            l.a.createElement(R, { id: S, tabId: F }, 'Tab Home Content'),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(
              R,
              { id: H, show: !0, tabId: k },
              'Chat - Customer Content'
            )
          )
        },
        {
          id: 'tab-error-focused',
          label: 'Tab - Error focused',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Violation: SLA agreement in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                id: F,
                symbol: 'home',
                tabPanelId: S,
                title: 'Home'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                statusLevel: 'error',
                hasFocus: !0,
                id: k,
                itemActive: !0,
                symbol: 'live_chat',
                tabPanelId: H,
                title: 'SLA Violation'
              })
            ),
            l.a.createElement(R, { id: S, tabId: F }, 'Tab Home Content'),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(
              R,
              { id: H, show: !0, tabId: k },
              'Chat - Customer Content'
            )
          )
        },
        {
          id: 'tab-error-unread',
          label: 'Tab - Error Unread',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Violation: SLA agreement in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                id: F,
                itemActive: !0,
                symbol: 'home',
                tabPanelId: S,
                title: 'Home'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                statusLevel: 'error',
                id: k,
                itemUnread: !0,
                symbol: 'live_chat',
                tabPanelId: H,
                title: 'SLA Violation'
              })
            ),
            l.a.createElement(
              R,
              { id: S, show: !0, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Chat - Customer Content')
          )
        },
        {
          id: 'tab-error-unsaved',
          label: 'Tab - Error Unsaved',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Violation: SLA agreement in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                id: F,
                itemActive: !0,
                symbol: 'home',
                tabPanelId: S,
                title: 'Home'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                statusLevel: 'error',
                id: k,
                itemUnsaved: !0,
                symbol: 'live_chat',
                tabPanelId: H,
                title: 'SLA Violation'
              })
            ),
            l.a.createElement(
              R,
              { id: S, show: !0, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Chat - Customer Content')
          )
        },
        {
          id: 'tab-error-unread-unsaved',
          label: 'Tab - Error Unread and Unsaved',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Violation: SLA agreement in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                id: F,
                itemActive: !0,
                symbol: 'home',
                tabPanelId: S,
                title: 'Home'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                statusLevel: 'error',
                id: k,
                itemUnread: !0,
                itemUnsaved: !0,
                symbol: 'live_chat',
                tabPanelId: H,
                title: 'SLA Violation'
              })
            ),
            l.a.createElement(
              R,
              { id: S, show: !0, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Chat - Customer Content')
          )
        },
        {
          id: 'pinned-tab',
          label: 'Pinned Tab',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                title: 'Home',
                symbol: 'home',
                tabPanelId: S,
                id: F,
                pinned: !0
              }),
              l.a.createElement(V, {
                title: 'Tab Item 1',
                tabPanelId: L,
                id: M,
                itemActive: !0
              }),
              l.a.createElement(V, {
                title: 'Tab Item 2',
                tabPanelId: H,
                id: k
              })
            ),
            l.a.createElement(R, { id: S, tabId: F }, 'Tab Home Content'),
            l.a.createElement(
              R,
              { show: !0, id: L, tabId: M },
              'Tab One Content'
            ),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'pinned-tab-active',
          label: 'Pinned Tab - Active',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                title: 'Home',
                symbol: 'home',
                tabPanelId: S,
                id: F,
                itemActive: !0,
                pinned: !0
              }),
              l.a.createElement(V, {
                title: 'Tab Item 1',
                tabPanelId: L,
                id: M
              }),
              l.a.createElement(V, {
                title: 'Tab Item 2',
                tabPanelId: H,
                id: k
              })
            ),
            l.a.createElement(
              R,
              { show: !0, id: S, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'pinned-tab-active-focus',
          label: 'Pinned Tab - Active Focus',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                title: 'Home',
                symbol: 'home',
                tabPanelId: S,
                id: F,
                itemActive: !0,
                pinned: !0,
                hasFocus: !0
              }),
              l.a.createElement(V, {
                title: 'Tab Item 1',
                tabPanelId: L,
                id: M
              }),
              l.a.createElement(V, {
                title: 'Tab Item 2',
                tabPanelId: H,
                id: k
              })
            ),
            l.a.createElement(
              R,
              { show: !0, id: S, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'unsaved-pinned-tab',
          label: 'Unsaved Pinned Tab',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                title: 'Home',
                symbol: 'home',
                tabPanelId: S,
                id: F,
                pinned: !0,
                itemUnsaved: !0
              }),
              l.a.createElement(V, {
                title: 'Tab Item 1',
                tabPanelId: L,
                id: M,
                itemActive: !0
              }),
              l.a.createElement(V, {
                title: 'Tab Item 2',
                tabPanelId: H,
                id: k
              })
            ),
            l.a.createElement(R, { id: S, tabId: F }, 'Tab Home Content'),
            l.a.createElement(
              R,
              { show: !0, id: L, tabId: M },
              'Tab One Content'
            ),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'unread-pinned-tab',
          label: 'Unread Pinned Tab',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'New activity in Tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                title: 'Chat - Customer',
                symbol: 'live_chat',
                tabPanelId: S,
                id: F,
                pinned: !0,
                itemUnread: !0
              }),
              l.a.createElement(V, {
                title: 'Tab Item 1',
                tabPanelId: L,
                id: M,
                itemActive: !0
              }),
              l.a.createElement(V, {
                title: 'Tab Item 2',
                tabPanelId: H,
                id: k
              })
            ),
            l.a.createElement(R, { id: S, tabId: F }, 'Tab Home Content'),
            l.a.createElement(
              R,
              { show: !0, id: L, tabId: M },
              'Tab One Content'
            ),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'pinned-tab-success',
          label: 'Pinned Success Tab',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Success: SLA agreement warning cleared in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                statusLevel: 'success',
                id: F,
                pinned: !0,
                symbol: 'live_chat',
                tabPanelId: S,
                title: 'Chat - Customer'
              }),
              l.a.createElement(V, {
                id: M,
                itemActive: !0,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                id: k,
                tabPanelId: H,
                title: 'Tab Item 2'
              })
            ),
            l.a.createElement(
              R,
              { id: S, tabId: F },
              'Chat - Customer Content'
            ),
            l.a.createElement(
              R,
              { id: L, show: !0, tabId: M },
              'Tab One Content'
            ),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'pinned-tab-success-active',
          label: 'Pinned Success Tab Active',
          element: l.a.createElement(
            'div',
            { className: 'demo-only' },
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Success: SLA agreement warning cleared in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                statusLevel: 'success',
                id: F,
                itemActive: !0,
                pinned: !0,
                symbol: 'live_chat',
                tabPanelId: S,
                title: 'Chat - Customer'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                id: k,
                tabPanelId: H,
                title: 'Tab Item 2'
              })
            ),
            l.a.createElement(
              R,
              { id: S, show: !0, tabId: F },
              'Chat - Customer Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'pinned-tab-success-focused',
          label: 'Pinned Success Tab Focused',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Success: SLA agreement warning cleared in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                statusLevel: 'success',
                hasFocus: !0,
                id: F,
                itemActive: !0,
                pinned: !0,
                symbol: 'live_chat',
                tabPanelId: S,
                title: 'Chat - Customer'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                id: k,
                tabPanelId: H,
                title: 'Tab Item 2'
              })
            ),
            l.a.createElement(
              R,
              { id: S, show: !0, tabId: F },
              'Chat - Customer Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'pinned-tab-success-unread',
          label: 'Pinned Success Tab Unread',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Success: SLA agreement warning cleared in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                statusLevel: 'success',
                id: F,
                itemUnread: !0,
                pinned: !0,
                symbol: 'live_chat',
                tabPanelId: S,
                title: 'Chat - Customer'
              }),
              l.a.createElement(V, {
                id: M,
                itemActive: !0,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                id: k,
                tabPanelId: H,
                title: 'Tab Item 2'
              })
            ),
            l.a.createElement(
              R,
              { id: S, tabId: F },
              'Chat - Customer Content'
            ),
            l.a.createElement(
              R,
              { id: L, show: !0, tabId: M },
              'Tab One Content'
            ),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'pinned-tab-success-unsaved',
          label: 'Pinned Success Tab Unsaved',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Success: SLA agreement warning cleared in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                statusLevel: 'success',
                id: F,
                itemUnsaved: !0,
                pinned: !0,
                symbol: 'live_chat',
                tabPanelId: S,
                title: 'Chat - Customer'
              }),
              l.a.createElement(V, {
                id: M,
                itemActive: !0,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                id: k,
                tabPanelId: H,
                title: 'Tab Item 2'
              })
            ),
            l.a.createElement(
              R,
              { id: S, tabId: F },
              'Chat - Customer Content'
            ),
            l.a.createElement(
              R,
              { id: L, show: !0, tabId: M },
              'Tab One Content'
            ),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'pinned-tab-warning',
          label: 'Pinned Warning Tab',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Warning: SLA agreement in 30 seconds in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                statusLevel: 'warning',
                id: F,
                pinned: !0,
                symbol: 'live_chat',
                tabPanelId: S,
                title: 'Chat - Customer'
              }),
              l.a.createElement(V, {
                id: M,
                itemActive: !0,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                id: k,
                tabPanelId: H,
                title: 'Tab Item 2'
              })
            ),
            l.a.createElement(
              R,
              { id: S, tabId: F },
              'Chat - Customer Content'
            ),
            l.a.createElement(
              R,
              { id: L, show: !0, tabId: M },
              'Tab One Content'
            ),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'pinned-tab-warning-active',
          label: 'Pinned Warning Tab Active',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Warning: SLA agreement in 30 seconds in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                statusLevel: 'warning',
                id: F,
                itemActive: !0,
                pinned: !0,
                symbol: 'live_chat',
                tabPanelId: S,
                title: 'Chat - Customer'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                id: k,
                tabPanelId: H,
                title: 'Tab Item 2'
              })
            ),
            l.a.createElement(
              R,
              { id: S, show: !0, tabId: F },
              'Chat - Customer Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'pinned-tab-warning-focused',
          label: 'Pinned Warning Tab Focused',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Warning: SLA agreement in 30 seconds in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                statusLevel: 'warning',
                hasFocus: !0,
                id: F,
                itemActive: !0,
                pinned: !0,
                symbol: 'live_chat',
                tabPanelId: S,
                title: 'Chat - Customer'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                id: k,
                tabPanelId: H,
                title: 'Tab Item 2'
              })
            ),
            l.a.createElement(
              R,
              { id: S, show: !0, tabId: F },
              'Chat - Customer Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'pinned-tab-warning-unread',
          label: 'Pinned Warning Tab Unread',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Warning: SLA agreement in 30 seconds in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                statusLevel: 'warning',
                id: F,
                itemUnread: !0,
                pinned: !0,
                symbol: 'live_chat',
                tabPanelId: S,
                title: 'Chat - Customer'
              }),
              l.a.createElement(V, {
                id: M,
                itemActive: !0,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                id: k,
                tabPanelId: H,
                title: 'Tab Item 2'
              })
            ),
            l.a.createElement(
              R,
              { id: S, tabId: F },
              'Chat - Customer Content'
            ),
            l.a.createElement(
              R,
              { id: L, show: !0, tabId: M },
              'Tab One Content'
            ),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'pinned-tab-warning-unsaved',
          label: 'Pinned Warning Tab Unsaved',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Warning: SLA agreement in 30 seconds in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                statusLevel: 'warning',
                id: F,
                itemUnsaved: !0,
                pinned: !0,
                symbol: 'live_chat',
                tabPanelId: S,
                title: 'Chat - Customer'
              }),
              l.a.createElement(V, {
                id: M,
                itemActive: !0,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                id: k,
                tabPanelId: H,
                title: 'Tab Item 2'
              })
            ),
            l.a.createElement(
              R,
              { id: S, tabId: F },
              'Chat - Customer Content'
            ),
            l.a.createElement(
              R,
              { id: L, show: !0, tabId: M },
              'Tab One Content'
            ),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'pinned-tab-error',
          label: 'Pinned Error Tab',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Violation: SLA agreement in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                statusLevel: 'error',
                id: F,
                pinned: !0,
                symbol: 'live_chat',
                tabPanelId: S,
                title: 'Chat - Customer'
              }),
              l.a.createElement(V, {
                id: M,
                itemActive: !0,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                id: k,
                tabPanelId: H,
                title: 'Tab Item 2'
              })
            ),
            l.a.createElement(
              R,
              { id: S, tabId: F },
              'Chat - Customer Content'
            ),
            l.a.createElement(
              R,
              { id: L, show: !0, tabId: M },
              'Tab One Content'
            ),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'pinned-tab-error-active',
          label: 'Pinned Error Tab Active',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Violation: SLA agreement in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                statusLevel: 'error',
                id: F,
                itemActive: !0,
                pinned: !0,
                symbol: 'live_chat',
                tabPanelId: S,
                title: 'Chat - Customer'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                id: k,
                tabPanelId: H,
                title: 'Tab Item 2'
              })
            ),
            l.a.createElement(
              R,
              { id: S, show: !0, tabId: F },
              'Chat - Customer Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'pinned-tab-error-focused',
          label: 'Pinned Error Tab Focused',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Violation: SLA agreement in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                statusLevel: 'error',
                id: F,
                itemActive: !0,
                pinned: !0,
                symbol: 'live_chat',
                tabPanelId: S,
                title: 'Chat - Customer'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                id: k,
                tabPanelId: H,
                title: 'Tab Item 2'
              })
            ),
            l.a.createElement(
              R,
              { id: S, show: !0, tabId: F },
              'Chat - Customer Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'pinned-tab-error-unread',
          label: 'Pinned Error Tab Unread',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Violation: SLA agreement in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                statusLevel: 'error',
                id: F,
                itemUnread: !0,
                pinned: !0,
                symbol: 'live_chat',
                tabPanelId: S,
                title: 'Chat - Customer'
              }),
              l.a.createElement(V, {
                id: M,
                itemActive: !0,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                id: k,
                tabPanelId: H,
                title: 'Tab Item 2'
              })
            ),
            l.a.createElement(
              R,
              { id: S, tabId: F },
              'Chat - Customer Content'
            ),
            l.a.createElement(
              R,
              { id: L, show: !0, tabId: M },
              'Tab One Content'
            ),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'pinned-tab-error-unsaved',
          label: 'Pinned Error Tab Unsaved',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Violation: SLA agreement in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                statusLevel: 'error',
                id: F,
                itemUnsaved: !0,
                pinned: !0,
                symbol: 'live_chat',
                tabPanelId: S,
                title: 'Chat - Customer'
              }),
              l.a.createElement(V, {
                id: M,
                itemActive: !0,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                id: k,
                tabPanelId: H,
                title: 'Tab Item 2'
              })
            ),
            l.a.createElement(
              R,
              { id: S, tabId: F },
              'Chat - Customer Content'
            ),
            l.a.createElement(
              R,
              { id: L, show: !0, tabId: M },
              'Tab One Content'
            ),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'overflow-tabs',
          label: 'Overflow Tabs',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                title: 'Home',
                symbol: 'home',
                tabPanelId: S,
                id: F,
                itemActive: !0
              }),
              l.a.createElement(V, {
                title: 'Tab Item 1',
                tabPanelId: L,
                id: M
              }),
              l.a.createElement(V, {
                title: 'Tab Item 2',
                tabPanelId: H,
                id: k
              }),
              l.a.createElement(B, null)
            ),
            l.a.createElement(
              R,
              { show: !0, id: S, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'overflow-tabs-open',
          label: 'Overflow Tabs - Open',
          element: l.a.createElement(
            'div',
            { className: 'demo-only', style: { height: '8rem' } },
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                title: 'Home',
                symbol: 'home',
                tabPanelId: S,
                id: F,
                itemActive: !0
              }),
              l.a.createElement(V, {
                title: 'Tab Item 1',
                tabPanelId: L,
                id: M
              }),
              l.a.createElement(V, {
                title: 'Tab Item 2',
                tabPanelId: H,
                id: k
              }),
              l.a.createElement(B, { isOpen: !0 })
            ),
            l.a.createElement(
              R,
              { show: !0, id: S, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'unsaved-overflow-tabs',
          label: 'Unsaved Overflow Tabs',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                title: 'Home',
                symbol: 'home',
                tabPanelId: S,
                id: F,
                itemActive: !0
              }),
              l.a.createElement(V, {
                title: 'Tab Item 1',
                tabPanelId: L,
                id: M
              }),
              l.a.createElement(V, {
                title: 'Tab Item 2',
                tabPanelId: H,
                id: k
              }),
              l.a.createElement(B, { itemUnsaved: !0 })
            ),
            l.a.createElement(
              R,
              { show: !0, id: S, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'unsaved-overflow-tabs-open',
          label: 'Unsaved Overflow Tabs - Open',
          element: l.a.createElement(
            'div',
            { className: 'demo-only', style: { height: '8rem' } },
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                title: 'Home',
                symbol: 'home',
                tabPanelId: S,
                id: F,
                itemActive: !0
              }),
              l.a.createElement(V, {
                title: 'Tab Item 1',
                tabPanelId: L,
                id: M
              }),
              l.a.createElement(V, {
                title: 'Tab Item 2',
                tabPanelId: H,
                id: k
              }),
              l.a.createElement(B, { isOpen: !0, itemUnsaved: !0 })
            ),
            l.a.createElement(
              R,
              { show: !0, id: S, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'unread-overflow-tabs',
          label: 'Unread Overflow Tabs',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'New activity in Tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                title: 'Home',
                symbol: 'home',
                tabPanelId: S,
                id: F,
                itemActive: !0
              }),
              l.a.createElement(V, {
                title: 'Tab Item 1',
                tabPanelId: L,
                id: M
              }),
              l.a.createElement(V, {
                title: 'Tab Item 2',
                tabPanelId: H,
                id: k
              }),
              l.a.createElement(B, { itemUnread: !0 })
            ),
            l.a.createElement(
              R,
              { show: !0, id: S, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'unread-overflow-tabs-open',
          label: 'Unread Overflow Tabs - Open',
          element: l.a.createElement(
            'div',
            { className: 'demo-only', style: { height: '8rem' } },
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'New activity in Tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                title: 'Home',
                symbol: 'home',
                tabPanelId: S,
                id: F,
                itemActive: !0
              }),
              l.a.createElement(V, {
                title: 'Tab Item 1',
                tabPanelId: L,
                id: M
              }),
              l.a.createElement(V, {
                title: 'Tab Item 2',
                tabPanelId: H,
                id: k
              }),
              l.a.createElement(B, { isOpen: !0, itemUnread: !0 })
            ),
            l.a.createElement(
              R,
              { show: !0, id: S, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'unread-unsaved-overflow-tabs-open',
          label: 'Unread Unsaved Overflow Tabs - Open',
          element: l.a.createElement(
            'div',
            { className: 'demo-only', style: { height: '8rem' } },
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'New activity in Tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                title: 'Home',
                symbol: 'home',
                tabPanelId: S,
                id: F,
                itemActive: !0
              }),
              l.a.createElement(V, {
                title: 'Tab Item 1',
                tabPanelId: L,
                id: M
              }),
              l.a.createElement(V, {
                title: 'Tab Item 2',
                tabPanelId: H,
                id: k
              }),
              l.a.createElement(B, {
                isOpen: !0,
                itemUnread: !0,
                itemUnsaved: !0
              })
            ),
            l.a.createElement(
              R,
              { show: !0, id: S, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'unread-unsaved-overflow-tabs-without-icon-open',
          label: 'Unread Unsaved Overflow Tabs without Icon - Open',
          element: l.a.createElement(
            'div',
            { className: 'demo-only', style: { height: '8rem' } },
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'New activity in Tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                title: 'Home',
                symbol: 'home',
                tabPanelId: S,
                id: F,
                itemActive: !0
              }),
              l.a.createElement(V, {
                title: 'Tab Item 1',
                tabPanelId: L,
                id: M
              }),
              l.a.createElement(V, {
                title: 'Tab Item 2',
                tabPanelId: H,
                id: k,
                itemUnread: !0,
                itemUnsaved: !0,
                hasIcon: !1
              }),
              l.a.createElement(B, {
                isOpen: !0,
                itemUnread: !0,
                itemUnsaved: !0,
                itemHasIcon: !1
              })
            ),
            l.a.createElement(
              R,
              { show: !0, id: S, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'success-overflow',
          label: 'Success Overflow Tabs',
          element: l.a.createElement(
            'div',
            { className: 'demo-only', style: { height: '8rem' } },
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Success: SLA agreement warning cleared in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                id: F,
                itemActive: !0,
                symbol: 'home',
                tabPanelId: S,
                title: 'Home'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                id: k,
                tabPanelId: H,
                title: 'Tab Item 2'
              }),
              l.a.createElement(B, { statusLevel: 'success', isOpen: !0 })
            ),
            l.a.createElement(
              R,
              { id: S, show: !0, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'success-overflow-unread-unsaved',
          label: 'Success Overflow Tabs Unread and Unsaved',
          element: l.a.createElement(
            'div',
            { className: 'demo-only', style: { height: '8rem' } },
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Success: SLA agreement warning cleared in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                id: F,
                itemActive: !0,
                symbol: 'home',
                tabPanelId: S,
                title: 'Home'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                id: k,
                tabPanelId: H,
                title: 'Tab Item 2'
              }),
              l.a.createElement(B, {
                statusLevel: 'success',
                isOpen: !0,
                itemUnread: !0,
                itemUnsaved: !0
              })
            ),
            l.a.createElement(
              R,
              { id: S, show: !0, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'warning-overflow',
          label: 'Warning Overflow Tabs',
          element: l.a.createElement(
            'div',
            { className: 'demo-only', style: { height: '8rem' } },
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Warning: SLA agreement in 30 seconds in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                id: F,
                itemActive: !0,
                symbol: 'home',
                tabPanelId: S,
                title: 'Home'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                id: k,
                tabPanelId: H,
                title: 'Tab Item 2'
              }),
              l.a.createElement(B, { statusLevel: 'warning', isOpen: !0 })
            ),
            l.a.createElement(
              R,
              { id: S, show: !0, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'warning-overflow-unread-unsaved',
          label: 'Warning Overflow Tabs Unread and Unsaved',
          element: l.a.createElement(
            'div',
            { className: 'demo-only', style: { height: '8rem' } },
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Warning: SLA agreement in 30 seconds in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                id: F,
                itemActive: !0,
                symbol: 'home',
                tabPanelId: S,
                title: 'Home'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                id: k,
                tabPanelId: H,
                title: 'Tab Item 2'
              }),
              l.a.createElement(B, {
                statusLevel: 'warning',
                isOpen: !0,
                itemUnread: !0,
                itemUnsaved: !0
              })
            ),
            l.a.createElement(
              R,
              { id: S, show: !0, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'error-overflow',
          label: 'Error Overflow Tabs',
          element: l.a.createElement(
            'div',
            { className: 'demo-only', style: { height: '8rem' } },
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Violation: SLA agreement in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                id: F,
                itemActive: !0,
                symbol: 'home',
                tabPanelId: S,
                title: 'Home'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                id: k,
                tabPanelId: H,
                title: 'Tab Item 2'
              }),
              l.a.createElement(B, { statusLevel: 'error', isOpen: !0 })
            ),
            l.a.createElement(
              R,
              { id: S, show: !0, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'error-overflow-unread-unsaved',
          label: 'Error Overflow Tabs Unread and Unsaved',
          element: l.a.createElement(
            'div',
            { className: 'demo-only', style: { height: '8rem' } },
            l.a.createElement(
              'span',
              { 'aria-live': 'polite', className: 'slds-assistive-text' },
              'Violation: SLA agreement in tab: Chat - Customer'
            ),
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                id: F,
                itemActive: !0,
                symbol: 'home',
                tabPanelId: S,
                title: 'Home'
              }),
              l.a.createElement(V, {
                id: M,
                tabPanelId: L,
                title: 'Tab Item 1'
              }),
              l.a.createElement(V, {
                id: k,
                tabPanelId: H,
                title: 'Tab Item 2'
              }),
              l.a.createElement(B, {
                statusLevel: 'error',
                isOpen: !0,
                itemUnread: !0,
                itemUnsaved: !0
              })
            ),
            l.a.createElement(
              R,
              { id: S, show: !0, tabId: F },
              'Tab Home Content'
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'object-switcher-active',
          label: 'Object Switcher - Active',
          element: l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              D,
              { objectSwitchClassName: 'slds-is-active' },
              l.a.createElement(V, {
                title: 'Home',
                symbol: 'home',
                tabPanelId: S,
                id: F
              }),
              l.a.createElement(V, {
                title: 'Tab Item 1',
                tabPanelId: L,
                id: M
              }),
              l.a.createElement(V, {
                title: 'Tab Item 2',
                tabPanelId: H,
                id: k
              })
            ),
            l.a.createElement(R, { id: S, tabId: F }, 'Tab Home Content'),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'object-switcher-menu-open',
          label: 'Object Switcher - Open',
          element: l.a.createElement(
            'div',
            { className: 'demo-only', style: { height: '11rem' } },
            l.a.createElement(
              D,
              { objectSwitchClassName: 'slds-is-open' },
              l.a.createElement(V, {
                title: 'Home',
                symbol: 'home',
                tabPanelId: S,
                id: F
              }),
              l.a.createElement(V, {
                title: 'Tab Item 1',
                tabPanelId: L,
                id: M
              }),
              l.a.createElement(V, {
                title: 'Tab Item 2',
                tabPanelId: H,
                id: k
              })
            ),
            l.a.createElement(R, { id: S, tabId: F }, 'Tab Home Content'),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'add-tab-dialog-open',
          label: 'Add Tab Dialog - Open',
          element: l.a.createElement(
            'div',
            { className: 'demo-only', style: { height: '8rem' } },
            l.a.createElement(
              D,
              { addTabActive: !0 },
              l.a.createElement(V, {
                title: 'Home',
                symbol: 'home',
                tabPanelId: S,
                id: F
              }),
              l.a.createElement(V, {
                title: 'Tab Item 1',
                tabPanelId: L,
                id: M
              }),
              l.a.createElement(V, {
                title: 'Tab Item 2',
                tabPanelId: H,
                id: k
              })
            ),
            l.a.createElement(R, { id: S, tabId: F }, 'Tab Home Content'),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        },
        {
          id: 'sub-tabs-open',
          label: 'Sub Tabs - Open',
          element: l.a.createElement(
            'div',
            { className: 'demo-only', style: { height: '8rem' } },
            l.a.createElement(
              D,
              null,
              l.a.createElement(V, {
                title: 'Home',
                symbol: 'home',
                tabPanelId: S,
                id: F,
                itemActive: !0,
                hasSubtabs: !0
              }),
              l.a.createElement(V, {
                title: 'Tab Item 1',
                tabPanelId: L,
                id: M
              }),
              l.a.createElement(V, {
                title: 'Tab Item 2',
                tabPanelId: H,
                id: k
              })
            ),
            l.a.createElement(
              R,
              { show: !0, id: S, tabId: F },
              l.a.createElement(
                U.d,
                null,
                l.a.createElement(
                  U.b,
                  null,
                  l.a.createElement(U.a, {
                    active: !0,
                    title: '00071938',
                    tabItemId: 'subtab-tabitem-01',
                    tabPanelId: 'subtab-tabpanel-01'
                  }),
                  l.a.createElement(U.a, {
                    title: 'Chat - Customer',
                    tabItemId: 'subtab-tabitem-02',
                    tabPanelId: 'subtab-tabpanel-02',
                    symbol: 'live_chat'
                  })
                ),
                l.a.createElement(
                  U.c,
                  {
                    id: 'subtab-tabpanel-01',
                    tabId: 'subtab-tabitem-01',
                    isVisible: !0
                  },
                  'Item One Content'
                ),
                l.a.createElement(
                  U.c,
                  { id: 'subtab-tabpanel-02', tabId: 'subtab-tabitem-02' },
                  'Item Two Content'
                )
              )
            ),
            l.a.createElement(R, { id: L, tabId: M }, 'Tab One Content'),
            l.a.createElement(R, { id: H, tabId: k }, 'Tab Two Content')
          )
        }
      ],
      J = a(2),
      G = i.c.a,
      Y = i.c.code,
      K = i.c.h2,
      Q = i.c.h3,
      X = i.c.h4,
      Z = i.c.h5,
      $ = i.c.li,
      ee = i.c.ol,
      te = i.c.p,
      ae = i.c.strong,
      ne = i.c.ul,
      le = function() {
        return Object(n.createElement)(
          i.b,
          {},
          Object(n.createElement)(
            'div',
            { className: 'doc lead' },
            'Global Navigation is the list of navigation links your users find in the Header on every page in Salesforce. Your Global Navigation includes a Navigation Bar where your users find the App Launcher, App Name, and Pages that each App includes.'
          ),
          Object(n.createElement)(
            s.a,
            { exampleOnly: !0, demoStyles: 'height: 15rem;' },
            A
          ),
          K({ id: 'About-Navigation-Bar' }, 'About Navigation Bar'),
          te(
            {},
            'The navigation bar is composed of a wrapper and 2 required regions:'
          ),
          ne(
            {},
            $(
              {},
              ae({}, 'Primary,'),
              ' which contains the App Launcher and App Name'
            ),
            $(
              {},
              ae({}, 'Secondary,'),
              ' which contains the App Items, for navigating within the current app'
            )
          ),
          te(
            {},
            'The markup should follow the order listed above for proper keyboard interaction set by the 508 compliance standards. Each included region inside the wrapper of ',
            Y({}, '.slds-context-bar'),
            ' needs the appropriate ordering class name, e.g. ',
            Y({}, '.slds-context-bar__primary'),
            '.'
          ),
          Object(n.createElement)(s.a, { demoStyles: 'height: 16rem;' }, A),
          Q(
            { id: 'Items-on-the-Navigation-Bar' },
            'Items on the Navigation Bar'
          ),
          te(
            {},
            'Every item that sits on the horizontal axis of the navigation bar should receive the class ',
            Y({}, '.slds-context-bar__item'),
            '.'
          ),
          Object(n.createElement)(
            r.a,
            null,
            Object(n.createElement)(y, { label: 'Menu Item' })
          ),
          te(
            {},
            'This class is used to notify the navigation bar that it has a new item. The styles applied allow the children of the navigation bar to vertically aligned, without knowing the height of the navigation bar. The styles will also allow for the actionable items ',
            Y({}, '.slds-context-bar__label-action'),
            ' and ',
            Y({}, '.slds-context-bar__icon-action'),
            ' to stretch 100% of the height of the navigation bar, optimizing the hit area of those actions.'
          ),
          te(
            {},
            'Since the items are leveraging flexbox, the elements inside can easily be re-ordered easily by using an order class helper on the element, such as ',
            Y({}, '.slds-order--[#]'),
            '.'
          ),
          Q(
            { id: 'Building-the-Navigation-Bar-Item' },
            'Building the Navigation Bar Item'
          ),
          te(
            {},
            'The navigation bar item is built to accommodate 2 specific layout needs.'
          ),
          ee(
            {},
            $({}, 'Individual text hyperlink to invokes link destination'),
            $(
              {},
              'Individual text hyperlink to invokes link destination + button icon to indicate menu dropdown is available'
            )
          ),
          te(
            {},
            'These layouts are built upon 2 reusable classes. The text hyperlink action area would get the class ',
            Y({}, '.slds-context-bar__label-action'),
            ' and the icon based action area would get the class ',
            Y({}, '.slds-context-bar__icon-action'),
            '.'
          ),
          te(
            {},
            'The ',
            Y({}, '.slds-context-bar__icon-action'),
            ' class handles the alignment and coloring of the icons based on interactions such as ',
            Y({}, ':hover'),
            ', ',
            Y({}, ':focus'),
            ' and ',
            Y({}, ':active'),
            '. This is a required if you have an actionable icon area adjacent to an actionable text area.'
          ),
          te(
            {},
            'The markup structure should have the button icon(s) preceding the text label. The icons can be visually reordered by using the ordering utility classes such as ',
            Y({}, '.slds-order--[#]'),
            '.'
          ),
          X({ id: 'Icons' }, 'Icons'),
          te(
            {},
            'The icons in the navigation bar either serve as a visual affordance that indicates an item has a menu with additional actions or the icon itself is actionable.'
          ),
          Object(n.createElement)(
            r.a,
            null,
            Object(n.createElement)(y, {
              label: 'Menu Item',
              hasNavMenu: !0,
              hasMenuDropdown: !1
            })
          ),
          te(
            {},
            'The class used to indicate a button icon will sit adjacent to another actionable item is ',
            Y({}, '.slds-context-bar__icon-action'),
            '. If you two icons in an item, each icon should be contained in it’s own ',
            Y({}, '.slds-context-bar__icon-action'),
            ' element.'
          ),
          te(
            {},
            'The look and feel of the button icon is dependant on the modifiers used from ',
            G(
              { href: '/components/buttons/#icon' },
              'Button Icon Variant Component'
            ),
            ' page.'
          ),
          te(
            {},
            'The ',
            Y({}, '.slds-context-bar__icon-action'),
            ' styles apply a default left and right padding of 0.75rem. That padding can be removed or modified by using our spacing utilities. In example #1, the left padding has been removed by using the class ',
            Y({}, '.slds-p-left--none'),
            '.'
          ),
          te(
            {},
            'If a navigation bar item has an icon then we want to provide visual indication that its active when a user hovers into its region. To make this happen, apply the class ',
            Y({}, '.slds-hint-parent'),
            ' to the hover region, most cases would be ',
            Y({}, '.slds-context-bar__icon-action'),
            ' element.'
          ),
          X({ id: 'Menu-trigger-area' }, 'Menu trigger area'),
          te(
            {},
            'When a navigation bar items requires a menu with additional sub options or actions, the classes that need to be added to the target hit area are the following:'
          ),
          Object(n.createElement)(
            r.a,
            null,
            Object(n.createElement)(y, { label: 'Menu Item', hasNavMenu: !0 })
          ),
          ee(
            {},
            $(
              {},
              Y({}, '.slds-context-bar__dropdown-trigger'),
              ' — Add a hoverable zone below the action so that the dropdown doesn’t disappear when the mouse is between the action and the dropdown — this is specific to the navigation bar'
            ),
            $(
              {},
              Y({}, '.slds-dropdown-trigger'),
              ' — Globally used utility that notifies the element there is a dropdown menu'
            ),
            $(
              {},
              Y({}, '.slds-dropdown-trigger_click'),
              ' — Specifies that an item requires a click to open interaction.'
            )
          ),
          te(
            {},
            'If the navigation item has one hyperlink with a menu containing additional sub actions, then the hover area that invokes the dropdown menu is both the ',
            Y({}, '.slds-context-bar__label-action'),
            ' and ',
            Y({}, '.slds-context-bar__icon-action'),
            '. If the navigation item is demonstrated as a tab format, one hyperlink plus two additional actions, then the hover area that invokes the dropdown menu is only on the ',
            Y({}, '.slds-context-bar__icon-action'),
            '.'
          ),
          Q(
            { id: 'Specifics-of-the-Navigation-Bar' },
            'Specifics of the Navigation Bar'
          ),
          X({ id: 'App-Launcher' }, 'App Launcher'),
          te(
            {},
            'The app launcher is the one element on the navigation bar that requires a mouse click or keyboard enter to invoke the app launcher dropdown. Please use JavaScript to accommodate this requirement.'
          ),
          X({ id: 'App-Name' }, 'App Name'),
          te(
            {},
            'The application name needs to receive the ',
            Y({}, '.slds-context-bar__app-name'),
            ' class. This class will handle such things as its unique font sizing and truncation widths.'
          ),
          X({ id: 'Dividers' }, 'Dividers'),
          te(
            {},
            'Due to the platform-esc nature of the navigation bar, there is an available element utility to apply a divider between sections where needed. The ',
            Y({}, '.slds-context-bar__vertical-divider'),
            ' class should be applied to an empty ',
            Y({}, '<div>'),
            ' and placed within the markup of your navigation bar for a visual divider.'
          ),
          te(
            {},
            'Alternatively, two classes are available to add border using css. Adding the class ',
            Y({}, '.slds-context-bar__item--divider-left'),
            ' will add a left border to a navigation bar item while ',
            Y({}, '.slds-context-bar__item--divider-right'),
            ' will add a right border.'
          ),
          Q({ id: 'States' }, 'States'),
          X({ id: 'Active-item' }, 'Active item'),
          Object(n.createElement)(s.a, null, Object(J.e)(x, 'item-active')),
          X({ id: 'Menu-Open' }, 'Menu Open'),
          Object(n.createElement)(
            s.a,
            { demoStyles: 'height: 16rem;' },
            Object(J.e)(x, 'item-menu-open')
          ),
          K({ id: 'About-Navigation-Tab-Bar' }, 'About Navigation Tab Bar'),
          Object(n.createElement)(s.a, null, q),
          Q({ id: 'Accessibility' }, 'Accessibility'),
          te({}, ae({}, 'Communicating Status to Screen Readers:')),
          te(
            {},
            'When communicating tab status updates to the user, unread, warning, error and success notifications should  all employ the same technique to communicate that update to users of assistive technology, who would be otherwise unaware of that status change.'
          ),
          te(
            {},
            'You should use a single hidden ARIA live region for the entire sub tabs block, the contents of which gets updated each time a sub tab changes its status. The contents should contain a description of the status level and the name of the tab the status change event occurred in. The markup would look something like:'
          ),
          te(
            {},
            Y(
              {},
              '<div className="slds-assistive-text" aria-live="polite">...</div>'
            )
          ),
          te(
            {},
            'Upon clearing the status on a given tab, you should clear the message from the live region.'
          ),
          te({}, ae({}, 'Unread status:')),
          te(
            {},
            'In order to inform screen readers of new activity in a tab, 2 things should occur.'
          ),
          ee(
            {},
            $(
              {},
              te(
                {},
                'The ',
                Y({}, 'title'),
                ' attribute and ',
                Y({}, 'aria-label'),
                ' on the element that displays the red dot should read ',
                ae({}, '"New Activity"'),
                '. This will update the text content of the tab to include the "New Activity" text: "New Activity Chat - Customer".'
              )
            ),
            $(
              {},
              te(
                {},
                'The hidden live region as described above, should have its content updated to ',
                ae({}, '"New Activity in Tab: [Tab Name Here]"'),
                ' to alert the user of new activity in that particular sub tab.'
              )
            )
          ),
          te(
            {},
            Y(
              {},
              '<span aria-label="New Activity" className="slds-indicator_unread" title="New Activity"></span>'
            )
          ),
          te(
            {},
            Y(
              {},
              '<div className="slds-assistive-text" aria-live="polite">New activity in Tab: Chat - Customer</div>'
            )
          ),
          te({}, ae({}, 'Warning, Error and Success Tabs:')),
          te(
            {},
            'When you wish to draw attention to a particular tab because something has occurred in that tab that corresponds to an alert level, you can use the ',
            Y({}, 'slds-has-warning'),
            ', ',
            Y({}, 'slds-has-error'),
            ' or ',
            Y({}, 'slds-has-success'),
            ' class to change the background color and introduce a short pulsing animation to draw attention from the user.'
          ),
          te(
            {},
            'The icon is updated to match the corresponding alert level, to give an extra way to communicate the level of the status without relying on the use of color alone.'
          ),
          te(
            {},
            'In this example we show that something inside the tab is about to break a service level agreement in 30 seconds, and we wish to draw the users attention to it to take action.'
          ),
          te(
            {},
            'Update the hidden live region with a message that informs the user of the status level, the message and the offending sub tab ',
            ae({}, '[level]: [message] in tab: [tab_name]'),
            '.'
          ),
          te(
            {},
            Y(
              {},
              '<div className="slds-assistive-text" aria-live="polite">Warning: SLA agreement in 30 seconds in tab: Chat - Customer</div>'
            )
          ),
          Q({ id: 'States-2' }, 'States'),
          X({ id: 'Active' }, 'Active'),
          Object(n.createElement)(s.a, null, Object(J.e)(z, 'tab-active')),
          Z({ id: 'Focus' }, 'Focus'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'tab-active-focus')
          ),
          X({ id: 'Unsaved' }, 'Unsaved'),
          Object(n.createElement)(s.a, null, Object(J.e)(z, 'unsaved-tab')),
          X({ id: 'Unread' }, 'Unread'),
          Object(n.createElement)(s.a, null, Object(J.e)(z, 'unread-tab')),
          X({ id: 'Overflow' }, 'Overflow'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'tab-item-action-menu-open')
          ),
          X({ id: 'UnreadUnsaved' }, 'Unread/Unsaved'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'unread-unsaved-tab')
          ),
          Q({ id: 'Tab-Feedback-States' }, 'Tab Feedback States'),
          X({ id: 'Success' }, 'Success'),
          Object(n.createElement)(s.a, null, Object(J.e)(z, 'tab-success')),
          Z({ id: 'Active-2' }, 'Active'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'tab-success-active')
          ),
          Z({ id: 'Focus-2' }, 'Focus'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'tab-success-focus')
          ),
          Z({ id: 'Unsaved-2' }, 'Unsaved'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'tab-success-unsaved')
          ),
          Z({ id: 'Unread-2' }, 'Unread'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'tab-success-unread')
          ),
          Z({ id: 'UnreadUnsaved-2' }, 'Unread/Unsaved'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'tab-success-unread-unsaved')
          ),
          X({ id: 'Warning' }, 'Warning'),
          Object(n.createElement)(s.a, null, Object(J.e)(z, 'tab-warning')),
          Z({ id: 'Active-3' }, 'Active'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'tab-warning-active')
          ),
          Z({ id: 'Focus-3' }, 'Focus'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'tab-warning-focus')
          ),
          Z({ id: 'Unsaved-3' }, 'Unsaved'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'tab-warning-unsaved')
          ),
          Z({ id: 'Unread-3' }, 'Unread'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'tab-warning-unread')
          ),
          Z({ id: 'UnreadUnsaved-3' }, 'Unread/Unsaved'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'tab-warning-unread-unsaved')
          ),
          X({ id: 'Error' }, 'Error'),
          Object(n.createElement)(s.a, null, Object(J.e)(z, 'tab-error')),
          Z({ id: 'Active-4' }, 'Active'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'tab-error-active')
          ),
          Z({ id: 'Focus-4' }, 'Focus'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'tab-error-focused')
          ),
          Z({ id: 'Unsaved-4' }, 'Unsaved'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'tab-error-unsaved')
          ),
          Z({ id: 'Unread-4' }, 'Unread'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'tab-error-unread')
          ),
          Z({ id: 'UnreadUnsaved-4' }, 'Unread/Unsaved'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'tab-error-unread-unsaved')
          ),
          Q({ id: 'Pinned' }, 'Pinned'),
          Object(n.createElement)(s.a, null, Object(J.e)(z, 'pinned-tab')),
          X({ id: 'Pinned-States' }, 'Pinned States'),
          Z({ id: 'Active-5' }, 'Active'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'pinned-tab-active')
          ),
          Z({ id: 'Focus-5' }, 'Focus'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'pinned-tab-active-focus')
          ),
          Z({ id: 'Unsaved-5' }, 'Unsaved'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'unsaved-pinned-tab')
          ),
          Z({ id: 'Unread-5' }, 'Unread'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'unread-pinned-tab')
          ),
          Q({ id: 'Overflowed-Tabs' }, 'Overflowed Tabs'),
          Object(n.createElement)(s.a, null, Object(J.e)(z, 'overflow-tabs')),
          X({ id: 'Opened' }, 'Opened'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'overflow-tabs-open')
          ),
          X({ id: 'Unsaved-6' }, 'Unsaved'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'unsaved-overflow-tabs')
          ),
          Z({ id: 'Opened-2' }, 'Opened'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'unsaved-overflow-tabs-open')
          ),
          X({ id: 'Unread-6' }, 'Unread'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'unread-overflow-tabs')
          ),
          Z({ id: 'Opened-3' }, 'Opened'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'unread-overflow-tabs-open')
          ),
          X({ id: 'UnreadUnsaved-5' }, 'Unread/Unsaved'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'unread-unsaved-overflow-tabs-open')
          ),
          Z({ id: 'No-Icon' }, 'No Icon'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'unread-unsaved-overflow-tabs-without-icon-open')
          ),
          Q(
            { id: 'Feedback-states-for-overflow-menu' },
            'Feedback states for overflow menu'
          ),
          X({ id: 'Success-2' }, 'Success'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'success-overflow')
          ),
          Z({ id: 'UnsavedUnread' }, 'Unsaved/Unread'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'success-overflow-unread-unsaved')
          ),
          X({ id: 'Warning-2' }, 'Warning'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'warning-overflow')
          ),
          Z({ id: 'UnsavedUnread-2' }, 'Unsaved/Unread'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'warning-overflow-unread-unsaved')
          ),
          X({ id: 'Error-2' }, 'Error'),
          Object(n.createElement)(s.a, null, Object(J.e)(z, 'error-overflow')),
          Z({ id: 'UnsavedUnread-3' }, 'Unsaved/Unread'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'error-overflow-unread-unsaved')
          ),
          Q({ id: 'Object-Switcher' }, 'Object Switcher'),
          X({ id: 'Active-6' }, 'Active'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'object-switcher-active')
          ),
          X({ id: 'Menu-open' }, 'Menu open'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'object-switcher-menu-open')
          ),
          Q({ id: 'Add-a-tab-dialog' }, 'Add a tab dialog'),
          Object(n.createElement)(
            s.a,
            null,
            Object(J.e)(z, 'add-tab-dialog-open')
          ),
          Q({ id: 'Active-tab-with-Sub-Tabs' }, 'Active tab with Sub Tabs'),
          Object(n.createElement)(s.a, null, Object(J.e)(z, 'sub-tabs-open'))
        );
      },
      ie = function() {
        return Object(i.a)(le());
      };
  }
});
