var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/global-navigation/navigation-tab-bar/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, s, m = t[0], r = t[1], d = t[2], o = 0, b = [];
      o < m.length;
      o++
    )
      (s = m[o]),
        Object.prototype.hasOwnProperty.call(l, s) && l[s] && b.push(l[s][0]),
        (l[s] = 0);
    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    for (c && c(t); b.length; ) b.shift()();
    return i.push.apply(i, d || []), a();
  }
  function a() {
    for (var e, t = 0; t < i.length; t++) {
      for (var a = i[t], n = !0, m = 1; m < a.length; m++) {
        var r = a[m];
        0 !== l[r] && (n = !1);
      }
      n && (i.splice(t--, 1), (e = s((s.s = a[0]))));
    }
    return e;
  }
  var n = {},
    l = {
      92: 0,
      6: 0,
      13: 0,
      14: 0,
      22: 0,
      24: 0,
      26: 0,
      36: 0,
      37: 0,
      56: 0,
      72: 0,
      73: 0,
      79: 0,
      80: 0,
      93: 0,
      94: 0,
      96: 0,
      97: 0,
      98: 0,
      103: 0,
      104: 0,
      112: 0,
      117: 0,
      118: 0,
      122: 0,
      124: 0,
      127: 0,
      131: 0,
      133: 0,
      135: 0,
      136: 0,
      137: 0,
      140: 0,
      142: 0,
      145: 0,
      146: 0,
      147: 0,
      150: 0,
      154: 0,
      157: 0
    },
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
  var m = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    r = m.push.bind(m);
  (m.push = t), (m = m.slice());
  for (var d = 0; d < m.length; d++) t(m[d]);
  var c = r;
  return i.push([218, 0]), a();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  218: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'ContextTab', function() {
        return g;
      }),
      a.d(t, 'ContextTabPanel', function() {
        return P;
      }),
      a.d(t, 'ContextTabBar', function() {
        return y;
      }),
      a.d(t, 'ContextTabBarOverflow', function() {
        return _;
      }),
      a.d(t, 'Context', function() {
        return A;
      }),
      a.d(t, 'states', function() {
        return N;
      });
    var n = a(0),
      l = a.n(n),
      i = a(1),
      s = a.n(i),
      m = a(8),
      r = a(14),
      d = a(64),
      c = a(4),
      o = a(62),
      b = a(34),
      E = a(2),
      u = a.n(E),
      I = 'context-tab-panel-1',
      v = 'context-tab-panel-2',
      C = 'context-tab-panel-3',
      T = 'context-tab-id-1',
      h = 'context-tab-id-2',
      p = 'context-tab-id-3',
      w = function(e) {
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
      g = function(e) {
        return l.a.createElement(
          'li',
          {
            className: u()(
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
              b.a,
              null,
              e.itemUnsaved &&
                l.a.createElement(b.c, { title: 'Tab Not Saved' }),
              e.itemUnread && l.a.createElement(b.b, null)
            ),
            e.hasIcon &&
              l.a.createElement(b.d, {
                statusLevel: e.statusLevel,
                symbol: e.symbol
              }),
            l.a.createElement(
              'span',
              {
                className: u()(
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
              className: u()(
                'slds-context-bar__icon-action slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-p-left_none slds-p-right_none',
                'true' === e.actionOverflow ? 'slds-is-open' : null
              )
            },
            l.a.createElement(c.b, {
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
              r.Menu,
              { className: 'slds-dropdown_right' },
              l.a.createElement(
                r.MenuList,
                null,
                l.a.createElement(
                  r.MenuItem,
                  { iconRight: l.a.createElement(w, null, 'r') },
                  'Refresh Tab'
                ),
                l.a.createElement(
                  r.MenuItem,
                  { iconRight: l.a.createElement(w, null, '⇧ + n') },
                  'Open in a new window'
                ),
                l.a.createElement(
                  r.MenuItem,
                  { iconRight: l.a.createElement(w, null, 'p') },
                  'Pin Tab'
                ),
                l.a.createElement(
                  r.MenuItem,
                  { iconRight: l.a.createElement(w, null, 'w') },
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
                l.a.createElement(c.b, {
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
    (g.propTypes = {
      className: s.a.string,
      hasFocus: s.a.bool,
      hasSubtabs: s.a.bool,
      id: s.a.string.isRequired,
      itemActive: s.a.bool,
      itemUnread: s.a.bool,
      itemUnsaved: s.a.bool,
      pinned: s.a.bool,
      statusLevel: s.a.oneOf(['error', 'success', 'warning']),
      tabPanelId: s.a.string.isRequired,
      title: s.a.string
    }),
      (g.defaultProps = { hasIcon: !0, title: 'Tab Name' });
    var P = function(e) {
        return l.a.createElement(
          'div',
          {
            id: e.id,
            className: u()(e.show ? 'slds-show' : 'slds-hide'),
            role: 'tabpanel',
            'aria-labelledby': e.tabId
          },
          e.children
        );
      },
      y = function(e) {
        return l.a.createElement(
          'div',
          {
            className: u()(
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
                l.a.createElement(d.a, {
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
                className: u()(
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
                l.a.createElement(c.b, {
                  className:
                    'slds-button_icon-container slds-button_icon-x-small',
                  symbol: 'chevrondown',
                  'aria-haspopup': 'true',
                  assistiveText: 'Open object switcher menu',
                  title: 'Open object switcher menu'
                })
              ),
              l.a.createElement(
                r.Menu,
                { className: 'slds-dropdown_right' },
                l.a.createElement(
                  r.MenuList,
                  null,
                  l.a.createElement(
                    r.MenuItem,
                    null,
                    l.a.createElement(m.a, {
                      className:
                        'slds-icon slds-icon_small slds-icon-standard-account slds-m-right_small',
                      sprite: 'standard',
                      symbol: 'account'
                    }),
                    'Accounts'
                  ),
                  l.a.createElement(
                    r.MenuItem,
                    null,
                    l.a.createElement(m.a, {
                      className:
                        'slds-icon slds-icon_small slds-icon-standard-case slds-m-right_small',
                      sprite: 'standard',
                      symbol: 'case'
                    }),
                    'Cases'
                  ),
                  l.a.createElement(
                    r.MenuItem,
                    null,
                    l.a.createElement(m.a, {
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
                className: u()(
                  'slds-context-bar__item slds-dropdown-trigger slds-dropdown-trigger_click',
                  e.addTabActive ? 'slds-is-open' : null,
                  e.addTabClassName
                )
              },
              l.a.createElement(
                'div',
                { className: 'slds-context-bar__icon-action' },
                l.a.createElement(c.b, {
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
      _ = function(e) {
        return l.a.createElement(
          'li',
          {
            className: u()(
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
              b.a,
              null,
              e.itemUnsaved && l.a.createElement(b.c, null),
              e.itemUnread && l.a.createElement(b.b, null)
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
            l.a.createElement(m.a, {
              className:
                'slds-button__icon slds-button__icon_small slds-button__icon_right',
              sprite: 'utility',
              symbol: 'chevrondown'
            })
          ),
          l.a.createElement(
            r.Menu,
            { className: 'slds-dropdown_right' },
            l.a.createElement(
              r.MenuList,
              null,
              l.a.createElement(
                r.MenuItem,
                {
                  className: u()({
                    'slds-has-notification': e.itemUnread,
                    'slds-is-unsaved': e.itemUnsaved
                  }),
                  statusLevel: e.statusLevel,
                  title: 'Chat - Customer'
                },
                l.a.createElement(
                  b.a,
                  null,
                  e.itemUnsaved &&
                    l.a.createElement(b.c, {
                      title: 'Tab(s) within menu not saved'
                    }),
                  e.itemUnread && l.a.createElement(b.b, null)
                ),
                e.itemHasIcon &&
                  l.a.createElement(b.d, {
                    statusLevel: e.statusLevel,
                    symbol: 'live_chat'
                  }),
                l.a.createElement('span', null, 'Chat - Customer')
              ),
              l.a.createElement(
                r.MenuItem,
                { title: 'Overflow Tab Item' },
                l.a.createElement(b.a, null),
                e.itemHasIcon && l.a.createElement(b.d, null),
                l.a.createElement('span', null, 'Overflow Tab Item')
              )
            )
          )
        );
      };
    (_.propTypes = { statusLevel: s.a.oneOf(['error', 'success', 'warning']) }),
      (_.defaultProps = { itemHasIcon: !0 });
    var A = function(e) {
      return l.a.createElement(
        'div',
        { style: { height: '16rem' } },
        e.children
      );
    };
    t.default = l.a.createElement(
      l.a.Fragment,
      null,
      l.a.createElement(
        y,
        null,
        l.a.createElement(g, {
          title: 'Home',
          symbol: 'home',
          tabPanelId: I,
          id: T
        }),
        l.a.createElement(g, { title: 'Tab Item 1', tabPanelId: v, id: h }),
        l.a.createElement(g, { title: 'Tab Item 2', tabPanelId: C, id: p })
      ),
      l.a.createElement(P, { show: !0, id: I, tabId: T }, 'Tab Home Content'),
      l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
      l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
    );
    var N = [
      {
        id: 'tab-active',
        label: 'Tab - Active',
        element: l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            y,
            null,
            l.a.createElement(g, {
              title: 'Home',
              symbol: 'home',
              tabPanelId: I,
              id: T
            }),
            l.a.createElement(g, {
              title: 'Tab Item 1',
              tabPanelId: v,
              id: h,
              itemActive: !0
            }),
            l.a.createElement(g, { title: 'Tab Item 2', tabPanelId: C, id: p })
          ),
          l.a.createElement(P, { id: I, tabId: T }, 'Tab Home Content'),
          l.a.createElement(
            P,
            { show: !0, id: v, tabId: h },
            'Tab One Content'
          ),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
        )
      },
      {
        id: 'tab-active-focus',
        label: 'Tab - Active Focus',
        element: l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            y,
            null,
            l.a.createElement(g, {
              title: 'Home',
              symbol: 'home',
              tabPanelId: I,
              id: T
            }),
            l.a.createElement(g, {
              title: 'Tab Item 1',
              tabPanelId: v,
              id: h,
              itemActive: !0,
              hasFocus: !0
            }),
            l.a.createElement(g, { title: 'Tab Item 2', tabPanelId: C, id: p })
          ),
          l.a.createElement(P, { id: I, tabId: T }, 'Tab Home Content'),
          l.a.createElement(
            P,
            { show: !0, id: v, tabId: h },
            'Tab One Content'
          ),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
        )
      },
      {
        id: 'tab-item-action-menu-open',
        label: 'Tab - Action Overflow',
        element: l.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '12rem' } },
          l.a.createElement(
            y,
            null,
            l.a.createElement(g, {
              title: 'Home',
              symbol: 'home',
              tabPanelId: I,
              id: T
            }),
            l.a.createElement(g, {
              title: 'Tab Item 1',
              tabPanelId: v,
              id: h,
              itemActive: !0,
              actionOverflow: 'true'
            }),
            l.a.createElement(g, { title: 'Tab Item 2', tabPanelId: C, id: p })
          ),
          l.a.createElement(P, { id: I, tabId: T }, 'Tab Home Content'),
          l.a.createElement(
            P,
            { show: !0, id: v, tabId: h },
            'Tab One Content'
          ),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
        )
      },
      {
        id: 'unsaved-tab',
        label: 'Unsaved Tab',
        element: l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            y,
            null,
            l.a.createElement(g, {
              title: 'Home',
              symbol: 'home',
              tabPanelId: I,
              id: T,
              itemActive: !0
            }),
            l.a.createElement(g, { title: 'Tab Item 1', tabPanelId: v, id: h }),
            l.a.createElement(g, {
              title: 'Tab Item 2',
              tabPanelId: C,
              id: p,
              itemUnsaved: !0
            })
          ),
          l.a.createElement(
            P,
            { show: !0, id: I, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              title: 'Home',
              symbol: 'home',
              tabPanelId: I,
              id: T,
              itemActive: !0
            }),
            l.a.createElement(g, { title: 'Tab Item 1', tabPanelId: v, id: h }),
            l.a.createElement(g, {
              title: 'Chat - Customer',
              tabPanelId: C,
              id: p,
              symbol: 'live_chat',
              itemUnread: !0
            })
          ),
          l.a.createElement(
            P,
            { show: !0, id: I, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Chat - Customer Content')
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
            y,
            null,
            l.a.createElement(g, {
              title: 'Home',
              symbol: 'home',
              tabPanelId: I,
              id: T,
              itemActive: !0
            }),
            l.a.createElement(g, { title: 'Tab Item 1', tabPanelId: v, id: h }),
            l.a.createElement(g, {
              title: 'Chat - Customer',
              tabPanelId: C,
              id: p,
              symbol: 'live_chat',
              itemUnread: !0,
              itemUnsaved: !0
            })
          ),
          l.a.createElement(
            P,
            { show: !0, id: I, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Chat - Customer Content')
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
            y,
            null,
            l.a.createElement(g, {
              id: T,
              itemActive: !0,
              symbol: 'home',
              tabPanelId: I,
              title: 'Home'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, {
              statusLevel: 'success',
              id: p,
              symbol: 'live_chat',
              tabPanelId: C,
              title: 'Chat - Customer'
            })
          ),
          l.a.createElement(
            P,
            { id: I, show: !0, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Chat - Customer Content')
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
            y,
            null,
            l.a.createElement(g, {
              id: T,
              symbol: 'home',
              tabPanelId: I,
              title: 'Home'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, {
              statusLevel: 'success',
              id: p,
              itemActive: !0,
              symbol: 'live_chat',
              tabPanelId: C,
              title: 'Chat - Customer'
            })
          ),
          l.a.createElement(P, { id: I, tabId: T }, 'Tab Home Content'),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(
            P,
            { id: C, show: !0, tabId: p },
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
            y,
            null,
            l.a.createElement(g, {
              id: T,
              symbol: 'home',
              tabPanelId: I,
              title: 'Home'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, {
              statusLevel: 'success',
              hasFocus: !0,
              id: p,
              itemActive: !0,
              symbol: 'live_chat',
              tabPanelId: C,
              title: 'Chat - Customer'
            })
          ),
          l.a.createElement(P, { id: I, tabId: T }, 'Tab Home Content'),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(
            P,
            { id: C, show: !0, tabId: p },
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
            y,
            null,
            l.a.createElement(g, {
              id: T,
              itemActive: !0,
              symbol: 'home',
              tabPanelId: I,
              title: 'Home'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, {
              statusLevel: 'success',
              id: p,
              itemUnread: !0,
              symbol: 'live_chat',
              tabPanelId: C,
              title: 'Chat - Customer'
            })
          ),
          l.a.createElement(
            P,
            { id: I, show: !0, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Chat - Customer Content')
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
            y,
            null,
            l.a.createElement(g, {
              id: T,
              itemActive: !0,
              symbol: 'home',
              tabPanelId: I,
              title: 'Home'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, {
              statusLevel: 'success',
              id: p,
              itemUnsaved: !0,
              symbol: 'live_chat',
              tabPanelId: C,
              title: 'Chat - Customer'
            })
          ),
          l.a.createElement(
            P,
            { id: I, show: !0, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Chat - Customer Content')
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
            y,
            null,
            l.a.createElement(g, {
              id: T,
              itemActive: !0,
              symbol: 'home',
              tabPanelId: I,
              title: 'Home'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, {
              statusLevel: 'success',
              id: p,
              itemUnread: !0,
              itemUnsaved: !0,
              symbol: 'live_chat',
              tabPanelId: C,
              title: 'Chat - Customer'
            })
          ),
          l.a.createElement(
            P,
            { id: I, show: !0, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Chat - Customer Content')
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
            y,
            null,
            l.a.createElement(g, {
              id: T,
              itemActive: !0,
              symbol: 'home',
              tabPanelId: I,
              title: 'Home'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, {
              statusLevel: 'warning',
              id: p,
              symbol: 'live_chat',
              tabPanelId: C,
              title: 'SLA in 0.30'
            })
          ),
          l.a.createElement(
            P,
            { id: I, show: !0, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Chat - Customer Content')
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
            y,
            null,
            l.a.createElement(g, {
              id: T,
              symbol: 'home',
              tabPanelId: I,
              title: 'Home'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, {
              statusLevel: 'warning',
              id: p,
              itemActive: !0,
              symbol: 'live_chat',
              tabPanelId: C,
              title: 'SLA in 0.30'
            })
          ),
          l.a.createElement(P, { id: I, tabId: T }, 'Tab Home Content'),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(
            P,
            { id: C, show: !0, tabId: p },
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
            y,
            null,
            l.a.createElement(g, {
              id: T,
              symbol: 'home',
              tabPanelId: I,
              title: 'Home'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, {
              statusLevel: 'warning',
              hasFocus: !0,
              id: p,
              itemActive: !0,
              symbol: 'live_chat',
              tabPanelId: C,
              title: 'SLA in 0.30'
            })
          ),
          l.a.createElement(
            P,
            { id: I, show: !0, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Chat - Customer Content')
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
            y,
            null,
            l.a.createElement(g, {
              id: T,
              itemActive: !0,
              symbol: 'home',
              tabPanelId: I,
              title: 'Home'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, {
              statusLevel: 'warning',
              id: p,
              itemUnread: !0,
              symbol: 'live_chat',
              tabPanelId: C,
              title: 'SLA in 0.30'
            })
          ),
          l.a.createElement(
            P,
            { id: I, show: !0, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Chat - Customer Content')
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
            y,
            null,
            l.a.createElement(g, {
              id: T,
              itemActive: !0,
              symbol: 'home',
              tabPanelId: I,
              title: 'Home'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, {
              statusLevel: 'warning',
              id: p,
              itemUnsaved: !0,
              symbol: 'live_chat',
              tabPanelId: C,
              title: 'SLA in 0.30'
            })
          ),
          l.a.createElement(
            P,
            { id: I, show: !0, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Chat - Customer Content')
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
            y,
            null,
            l.a.createElement(g, {
              id: T,
              itemActive: !0,
              symbol: 'home',
              tabPanelId: I,
              title: 'Home'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, {
              statusLevel: 'warning',
              id: p,
              itemUnread: !0,
              itemUnsaved: !0,
              symbol: 'live_chat',
              tabPanelId: C,
              title: 'SLA in 0.30'
            })
          ),
          l.a.createElement(
            P,
            { id: I, show: !0, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Chat - Customer Content')
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
            y,
            null,
            l.a.createElement(g, {
              id: T,
              itemActive: !0,
              symbol: 'home',
              tabPanelId: I,
              title: 'Home'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, {
              statusLevel: 'error',
              id: p,
              symbol: 'live_chat',
              tabPanelId: C,
              title: 'SLA Violation'
            })
          ),
          l.a.createElement(
            P,
            { id: I, show: !0, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Chat - Customer Content')
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
            y,
            null,
            l.a.createElement(g, {
              id: T,
              symbol: 'home',
              tabPanelId: I,
              title: 'Home'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, {
              statusLevel: 'error',
              id: p,
              itemActive: !0,
              symbol: 'live_chat',
              tabPanelId: C,
              title: 'SLA Violation'
            })
          ),
          l.a.createElement(P, { id: I, tabId: T }, 'Tab Home Content'),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(
            P,
            { id: C, show: !0, tabId: p },
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
            y,
            null,
            l.a.createElement(g, {
              id: T,
              symbol: 'home',
              tabPanelId: I,
              title: 'Home'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, {
              statusLevel: 'error',
              hasFocus: !0,
              id: p,
              itemActive: !0,
              symbol: 'live_chat',
              tabPanelId: C,
              title: 'SLA Violation'
            })
          ),
          l.a.createElement(P, { id: I, tabId: T }, 'Tab Home Content'),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(
            P,
            { id: C, show: !0, tabId: p },
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
            y,
            null,
            l.a.createElement(g, {
              id: T,
              itemActive: !0,
              symbol: 'home',
              tabPanelId: I,
              title: 'Home'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, {
              statusLevel: 'error',
              id: p,
              itemUnread: !0,
              symbol: 'live_chat',
              tabPanelId: C,
              title: 'SLA Violation'
            })
          ),
          l.a.createElement(
            P,
            { id: I, show: !0, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Chat - Customer Content')
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
            y,
            null,
            l.a.createElement(g, {
              id: T,
              itemActive: !0,
              symbol: 'home',
              tabPanelId: I,
              title: 'Home'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, {
              statusLevel: 'error',
              id: p,
              itemUnsaved: !0,
              symbol: 'live_chat',
              tabPanelId: C,
              title: 'SLA Violation'
            })
          ),
          l.a.createElement(
            P,
            { id: I, show: !0, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Chat - Customer Content')
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
            y,
            null,
            l.a.createElement(g, {
              id: T,
              itemActive: !0,
              symbol: 'home',
              tabPanelId: I,
              title: 'Home'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, {
              statusLevel: 'error',
              id: p,
              itemUnread: !0,
              itemUnsaved: !0,
              symbol: 'live_chat',
              tabPanelId: C,
              title: 'SLA Violation'
            })
          ),
          l.a.createElement(
            P,
            { id: I, show: !0, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Chat - Customer Content')
        )
      },
      {
        id: 'pinned-tab',
        label: 'Pinned Tab',
        element: l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            y,
            null,
            l.a.createElement(g, {
              title: 'Home',
              symbol: 'home',
              tabPanelId: I,
              id: T,
              pinned: !0
            }),
            l.a.createElement(g, {
              title: 'Tab Item 1',
              tabPanelId: v,
              id: h,
              itemActive: !0
            }),
            l.a.createElement(g, { title: 'Tab Item 2', tabPanelId: C, id: p })
          ),
          l.a.createElement(P, { id: I, tabId: T }, 'Tab Home Content'),
          l.a.createElement(
            P,
            { show: !0, id: v, tabId: h },
            'Tab One Content'
          ),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
        )
      },
      {
        id: 'pinned-tab-active',
        label: 'Pinned Tab - Active',
        element: l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            y,
            null,
            l.a.createElement(g, {
              title: 'Home',
              symbol: 'home',
              tabPanelId: I,
              id: T,
              itemActive: !0,
              pinned: !0
            }),
            l.a.createElement(g, { title: 'Tab Item 1', tabPanelId: v, id: h }),
            l.a.createElement(g, { title: 'Tab Item 2', tabPanelId: C, id: p })
          ),
          l.a.createElement(
            P,
            { show: !0, id: I, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
        )
      },
      {
        id: 'pinned-tab-active-focus',
        label: 'Pinned Tab - Active Focus',
        element: l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            y,
            null,
            l.a.createElement(g, {
              title: 'Home',
              symbol: 'home',
              tabPanelId: I,
              id: T,
              itemActive: !0,
              pinned: !0,
              hasFocus: !0
            }),
            l.a.createElement(g, { title: 'Tab Item 1', tabPanelId: v, id: h }),
            l.a.createElement(g, { title: 'Tab Item 2', tabPanelId: C, id: p })
          ),
          l.a.createElement(
            P,
            { show: !0, id: I, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
        )
      },
      {
        id: 'unsaved-pinned-tab',
        label: 'Unsaved Pinned Tab',
        element: l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            y,
            null,
            l.a.createElement(g, {
              title: 'Home',
              symbol: 'home',
              tabPanelId: I,
              id: T,
              pinned: !0,
              itemUnsaved: !0
            }),
            l.a.createElement(g, {
              title: 'Tab Item 1',
              tabPanelId: v,
              id: h,
              itemActive: !0
            }),
            l.a.createElement(g, { title: 'Tab Item 2', tabPanelId: C, id: p })
          ),
          l.a.createElement(P, { id: I, tabId: T }, 'Tab Home Content'),
          l.a.createElement(
            P,
            { show: !0, id: v, tabId: h },
            'Tab One Content'
          ),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              title: 'Chat - Customer',
              symbol: 'live_chat',
              tabPanelId: I,
              id: T,
              pinned: !0,
              itemUnread: !0
            }),
            l.a.createElement(g, {
              title: 'Tab Item 1',
              tabPanelId: v,
              id: h,
              itemActive: !0
            }),
            l.a.createElement(g, { title: 'Tab Item 2', tabPanelId: C, id: p })
          ),
          l.a.createElement(P, { id: I, tabId: T }, 'Tab Home Content'),
          l.a.createElement(
            P,
            { show: !0, id: v, tabId: h },
            'Tab One Content'
          ),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              statusLevel: 'success',
              id: T,
              pinned: !0,
              symbol: 'live_chat',
              tabPanelId: I,
              title: 'Chat - Customer'
            }),
            l.a.createElement(g, {
              id: h,
              itemActive: !0,
              tabPanelId: v,
              title: 'Tab Item 1'
            }),
            l.a.createElement(g, { id: p, tabPanelId: C, title: 'Tab Item 2' })
          ),
          l.a.createElement(P, { id: I, tabId: T }, 'Chat - Customer Content'),
          l.a.createElement(
            P,
            { id: v, show: !0, tabId: h },
            'Tab One Content'
          ),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              statusLevel: 'success',
              id: T,
              itemActive: !0,
              pinned: !0,
              symbol: 'live_chat',
              tabPanelId: I,
              title: 'Chat - Customer'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, { id: p, tabPanelId: C, title: 'Tab Item 2' })
          ),
          l.a.createElement(
            P,
            { id: I, show: !0, tabId: T },
            'Chat - Customer Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              statusLevel: 'success',
              hasFocus: !0,
              id: T,
              itemActive: !0,
              pinned: !0,
              symbol: 'live_chat',
              tabPanelId: I,
              title: 'Chat - Customer'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, { id: p, tabPanelId: C, title: 'Tab Item 2' })
          ),
          l.a.createElement(
            P,
            { id: I, show: !0, tabId: T },
            'Chat - Customer Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              statusLevel: 'success',
              id: T,
              itemUnread: !0,
              pinned: !0,
              symbol: 'live_chat',
              tabPanelId: I,
              title: 'Chat - Customer'
            }),
            l.a.createElement(g, {
              id: h,
              itemActive: !0,
              tabPanelId: v,
              title: 'Tab Item 1'
            }),
            l.a.createElement(g, { id: p, tabPanelId: C, title: 'Tab Item 2' })
          ),
          l.a.createElement(P, { id: I, tabId: T }, 'Chat - Customer Content'),
          l.a.createElement(
            P,
            { id: v, show: !0, tabId: h },
            'Tab One Content'
          ),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              statusLevel: 'success',
              id: T,
              itemUnsaved: !0,
              pinned: !0,
              symbol: 'live_chat',
              tabPanelId: I,
              title: 'Chat - Customer'
            }),
            l.a.createElement(g, {
              id: h,
              itemActive: !0,
              tabPanelId: v,
              title: 'Tab Item 1'
            }),
            l.a.createElement(g, { id: p, tabPanelId: C, title: 'Tab Item 2' })
          ),
          l.a.createElement(P, { id: I, tabId: T }, 'Chat - Customer Content'),
          l.a.createElement(
            P,
            { id: v, show: !0, tabId: h },
            'Tab One Content'
          ),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              statusLevel: 'warning',
              id: T,
              pinned: !0,
              symbol: 'live_chat',
              tabPanelId: I,
              title: 'Chat - Customer'
            }),
            l.a.createElement(g, {
              id: h,
              itemActive: !0,
              tabPanelId: v,
              title: 'Tab Item 1'
            }),
            l.a.createElement(g, { id: p, tabPanelId: C, title: 'Tab Item 2' })
          ),
          l.a.createElement(P, { id: I, tabId: T }, 'Chat - Customer Content'),
          l.a.createElement(
            P,
            { id: v, show: !0, tabId: h },
            'Tab One Content'
          ),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              statusLevel: 'warning',
              id: T,
              itemActive: !0,
              pinned: !0,
              symbol: 'live_chat',
              tabPanelId: I,
              title: 'Chat - Customer'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, { id: p, tabPanelId: C, title: 'Tab Item 2' })
          ),
          l.a.createElement(
            P,
            { id: I, show: !0, tabId: T },
            'Chat - Customer Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              statusLevel: 'warning',
              hasFocus: !0,
              id: T,
              itemActive: !0,
              pinned: !0,
              symbol: 'live_chat',
              tabPanelId: I,
              title: 'Chat - Customer'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, { id: p, tabPanelId: C, title: 'Tab Item 2' })
          ),
          l.a.createElement(
            P,
            { id: I, show: !0, tabId: T },
            'Chat - Customer Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              statusLevel: 'warning',
              id: T,
              itemUnread: !0,
              pinned: !0,
              symbol: 'live_chat',
              tabPanelId: I,
              title: 'Chat - Customer'
            }),
            l.a.createElement(g, {
              id: h,
              itemActive: !0,
              tabPanelId: v,
              title: 'Tab Item 1'
            }),
            l.a.createElement(g, { id: p, tabPanelId: C, title: 'Tab Item 2' })
          ),
          l.a.createElement(P, { id: I, tabId: T }, 'Chat - Customer Content'),
          l.a.createElement(
            P,
            { id: v, show: !0, tabId: h },
            'Tab One Content'
          ),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              statusLevel: 'warning',
              id: T,
              itemUnsaved: !0,
              pinned: !0,
              symbol: 'live_chat',
              tabPanelId: I,
              title: 'Chat - Customer'
            }),
            l.a.createElement(g, {
              id: h,
              itemActive: !0,
              tabPanelId: v,
              title: 'Tab Item 1'
            }),
            l.a.createElement(g, { id: p, tabPanelId: C, title: 'Tab Item 2' })
          ),
          l.a.createElement(P, { id: I, tabId: T }, 'Chat - Customer Content'),
          l.a.createElement(
            P,
            { id: v, show: !0, tabId: h },
            'Tab One Content'
          ),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              statusLevel: 'error',
              id: T,
              pinned: !0,
              symbol: 'live_chat',
              tabPanelId: I,
              title: 'Chat - Customer'
            }),
            l.a.createElement(g, {
              id: h,
              itemActive: !0,
              tabPanelId: v,
              title: 'Tab Item 1'
            }),
            l.a.createElement(g, { id: p, tabPanelId: C, title: 'Tab Item 2' })
          ),
          l.a.createElement(P, { id: I, tabId: T }, 'Chat - Customer Content'),
          l.a.createElement(
            P,
            { id: v, show: !0, tabId: h },
            'Tab One Content'
          ),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              statusLevel: 'error',
              id: T,
              itemActive: !0,
              pinned: !0,
              symbol: 'live_chat',
              tabPanelId: I,
              title: 'Chat - Customer'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, { id: p, tabPanelId: C, title: 'Tab Item 2' })
          ),
          l.a.createElement(
            P,
            { id: I, show: !0, tabId: T },
            'Chat - Customer Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              statusLevel: 'error',
              id: T,
              itemActive: !0,
              pinned: !0,
              symbol: 'live_chat',
              tabPanelId: I,
              title: 'Chat - Customer'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, { id: p, tabPanelId: C, title: 'Tab Item 2' })
          ),
          l.a.createElement(
            P,
            { id: I, show: !0, tabId: T },
            'Chat - Customer Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              statusLevel: 'error',
              id: T,
              itemUnread: !0,
              pinned: !0,
              symbol: 'live_chat',
              tabPanelId: I,
              title: 'Chat - Customer'
            }),
            l.a.createElement(g, {
              id: h,
              itemActive: !0,
              tabPanelId: v,
              title: 'Tab Item 1'
            }),
            l.a.createElement(g, { id: p, tabPanelId: C, title: 'Tab Item 2' })
          ),
          l.a.createElement(P, { id: I, tabId: T }, 'Chat - Customer Content'),
          l.a.createElement(
            P,
            { id: v, show: !0, tabId: h },
            'Tab One Content'
          ),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              statusLevel: 'error',
              id: T,
              itemUnsaved: !0,
              pinned: !0,
              symbol: 'live_chat',
              tabPanelId: I,
              title: 'Chat - Customer'
            }),
            l.a.createElement(g, {
              id: h,
              itemActive: !0,
              tabPanelId: v,
              title: 'Tab Item 1'
            }),
            l.a.createElement(g, { id: p, tabPanelId: C, title: 'Tab Item 2' })
          ),
          l.a.createElement(P, { id: I, tabId: T }, 'Chat - Customer Content'),
          l.a.createElement(
            P,
            { id: v, show: !0, tabId: h },
            'Tab One Content'
          ),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
        )
      },
      {
        id: 'overflow-tabs',
        label: 'Overflow Tabs',
        element: l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            y,
            null,
            l.a.createElement(g, {
              title: 'Home',
              symbol: 'home',
              tabPanelId: I,
              id: T,
              itemActive: !0
            }),
            l.a.createElement(g, { title: 'Tab Item 1', tabPanelId: v, id: h }),
            l.a.createElement(g, { title: 'Tab Item 2', tabPanelId: C, id: p }),
            l.a.createElement(_, null)
          ),
          l.a.createElement(
            P,
            { show: !0, id: I, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
        )
      },
      {
        id: 'overflow-tabs-open',
        label: 'Overflow Tabs - Open',
        element: l.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '8rem' } },
          l.a.createElement(
            y,
            null,
            l.a.createElement(g, {
              title: 'Home',
              symbol: 'home',
              tabPanelId: I,
              id: T,
              itemActive: !0
            }),
            l.a.createElement(g, { title: 'Tab Item 1', tabPanelId: v, id: h }),
            l.a.createElement(g, { title: 'Tab Item 2', tabPanelId: C, id: p }),
            l.a.createElement(_, { isOpen: !0 })
          ),
          l.a.createElement(
            P,
            { show: !0, id: I, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
        )
      },
      {
        id: 'unsaved-overflow-tabs',
        label: 'Unsaved Overflow Tabs',
        element: l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            y,
            null,
            l.a.createElement(g, {
              title: 'Home',
              symbol: 'home',
              tabPanelId: I,
              id: T,
              itemActive: !0
            }),
            l.a.createElement(g, { title: 'Tab Item 1', tabPanelId: v, id: h }),
            l.a.createElement(g, { title: 'Tab Item 2', tabPanelId: C, id: p }),
            l.a.createElement(_, { itemUnsaved: !0 })
          ),
          l.a.createElement(
            P,
            { show: !0, id: I, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
        )
      },
      {
        id: 'unsaved-overflow-tabs-open',
        label: 'Unsaved Overflow Tabs - Open',
        element: l.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '8rem' } },
          l.a.createElement(
            y,
            null,
            l.a.createElement(g, {
              title: 'Home',
              symbol: 'home',
              tabPanelId: I,
              id: T,
              itemActive: !0
            }),
            l.a.createElement(g, { title: 'Tab Item 1', tabPanelId: v, id: h }),
            l.a.createElement(g, { title: 'Tab Item 2', tabPanelId: C, id: p }),
            l.a.createElement(_, { isOpen: !0, itemUnsaved: !0 })
          ),
          l.a.createElement(
            P,
            { show: !0, id: I, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              title: 'Home',
              symbol: 'home',
              tabPanelId: I,
              id: T,
              itemActive: !0
            }),
            l.a.createElement(g, { title: 'Tab Item 1', tabPanelId: v, id: h }),
            l.a.createElement(g, { title: 'Tab Item 2', tabPanelId: C, id: p }),
            l.a.createElement(_, { itemUnread: !0 })
          ),
          l.a.createElement(
            P,
            { show: !0, id: I, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              title: 'Home',
              symbol: 'home',
              tabPanelId: I,
              id: T,
              itemActive: !0
            }),
            l.a.createElement(g, { title: 'Tab Item 1', tabPanelId: v, id: h }),
            l.a.createElement(g, { title: 'Tab Item 2', tabPanelId: C, id: p }),
            l.a.createElement(_, { isOpen: !0, itemUnread: !0 })
          ),
          l.a.createElement(
            P,
            { show: !0, id: I, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              title: 'Home',
              symbol: 'home',
              tabPanelId: I,
              id: T,
              itemActive: !0
            }),
            l.a.createElement(g, { title: 'Tab Item 1', tabPanelId: v, id: h }),
            l.a.createElement(g, { title: 'Tab Item 2', tabPanelId: C, id: p }),
            l.a.createElement(_, {
              isOpen: !0,
              itemUnread: !0,
              itemUnsaved: !0
            })
          ),
          l.a.createElement(
            P,
            { show: !0, id: I, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              title: 'Home',
              symbol: 'home',
              tabPanelId: I,
              id: T,
              itemActive: !0
            }),
            l.a.createElement(g, { title: 'Tab Item 1', tabPanelId: v, id: h }),
            l.a.createElement(g, {
              title: 'Tab Item 2',
              tabPanelId: C,
              id: p,
              itemUnread: !0,
              itemUnsaved: !0,
              hasIcon: !1
            }),
            l.a.createElement(_, {
              isOpen: !0,
              itemUnread: !0,
              itemUnsaved: !0,
              itemHasIcon: !1
            })
          ),
          l.a.createElement(
            P,
            { show: !0, id: I, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              id: T,
              itemActive: !0,
              symbol: 'home',
              tabPanelId: I,
              title: 'Home'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, { id: p, tabPanelId: C, title: 'Tab Item 2' }),
            l.a.createElement(_, { statusLevel: 'success', isOpen: !0 })
          ),
          l.a.createElement(
            P,
            { id: I, show: !0, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              id: T,
              itemActive: !0,
              symbol: 'home',
              tabPanelId: I,
              title: 'Home'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, { id: p, tabPanelId: C, title: 'Tab Item 2' }),
            l.a.createElement(_, {
              statusLevel: 'success',
              isOpen: !0,
              itemUnread: !0,
              itemUnsaved: !0
            })
          ),
          l.a.createElement(
            P,
            { id: I, show: !0, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              id: T,
              itemActive: !0,
              symbol: 'home',
              tabPanelId: I,
              title: 'Home'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, { id: p, tabPanelId: C, title: 'Tab Item 2' }),
            l.a.createElement(_, { statusLevel: 'warning', isOpen: !0 })
          ),
          l.a.createElement(
            P,
            { id: I, show: !0, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              id: T,
              itemActive: !0,
              symbol: 'home',
              tabPanelId: I,
              title: 'Home'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, { id: p, tabPanelId: C, title: 'Tab Item 2' }),
            l.a.createElement(_, {
              statusLevel: 'warning',
              isOpen: !0,
              itemUnread: !0,
              itemUnsaved: !0
            })
          ),
          l.a.createElement(
            P,
            { id: I, show: !0, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              id: T,
              itemActive: !0,
              symbol: 'home',
              tabPanelId: I,
              title: 'Home'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, { id: p, tabPanelId: C, title: 'Tab Item 2' }),
            l.a.createElement(_, { statusLevel: 'error', isOpen: !0 })
          ),
          l.a.createElement(
            P,
            { id: I, show: !0, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
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
            y,
            null,
            l.a.createElement(g, {
              id: T,
              itemActive: !0,
              symbol: 'home',
              tabPanelId: I,
              title: 'Home'
            }),
            l.a.createElement(g, { id: h, tabPanelId: v, title: 'Tab Item 1' }),
            l.a.createElement(g, { id: p, tabPanelId: C, title: 'Tab Item 2' }),
            l.a.createElement(_, {
              statusLevel: 'error',
              isOpen: !0,
              itemUnread: !0,
              itemUnsaved: !0
            })
          ),
          l.a.createElement(
            P,
            { id: I, show: !0, tabId: T },
            'Tab Home Content'
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
        )
      },
      {
        id: 'object-switcher-active',
        label: 'Object Switcher - Active',
        element: l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            y,
            { objectSwitchClassName: 'slds-is-active' },
            l.a.createElement(g, {
              title: 'Home',
              symbol: 'home',
              tabPanelId: I,
              id: T
            }),
            l.a.createElement(g, { title: 'Tab Item 1', tabPanelId: v, id: h }),
            l.a.createElement(g, { title: 'Tab Item 2', tabPanelId: C, id: p })
          ),
          l.a.createElement(P, { id: I, tabId: T }, 'Tab Home Content'),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
        )
      },
      {
        id: 'object-switcher-menu-open',
        label: 'Object Switcher - Open',
        element: l.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '11rem' } },
          l.a.createElement(
            y,
            { objectSwitchClassName: 'slds-is-open' },
            l.a.createElement(g, {
              title: 'Home',
              symbol: 'home',
              tabPanelId: I,
              id: T
            }),
            l.a.createElement(g, { title: 'Tab Item 1', tabPanelId: v, id: h }),
            l.a.createElement(g, { title: 'Tab Item 2', tabPanelId: C, id: p })
          ),
          l.a.createElement(P, { id: I, tabId: T }, 'Tab Home Content'),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
        )
      },
      {
        id: 'add-tab-dialog-open',
        label: 'Add Tab Dialog - Open',
        element: l.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '8rem' } },
          l.a.createElement(
            y,
            { addTabActive: !0 },
            l.a.createElement(g, {
              title: 'Home',
              symbol: 'home',
              tabPanelId: I,
              id: T
            }),
            l.a.createElement(g, { title: 'Tab Item 1', tabPanelId: v, id: h }),
            l.a.createElement(g, { title: 'Tab Item 2', tabPanelId: C, id: p })
          ),
          l.a.createElement(P, { id: I, tabId: T }, 'Tab Home Content'),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
        )
      },
      {
        id: 'sub-tabs-open',
        label: 'Sub Tabs - Open',
        element: l.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '8rem' } },
          l.a.createElement(
            y,
            null,
            l.a.createElement(g, {
              title: 'Home',
              symbol: 'home',
              tabPanelId: I,
              id: T,
              itemActive: !0,
              hasSubtabs: !0
            }),
            l.a.createElement(g, { title: 'Tab Item 1', tabPanelId: v, id: h }),
            l.a.createElement(g, { title: 'Tab Item 2', tabPanelId: C, id: p })
          ),
          l.a.createElement(
            P,
            { show: !0, id: I, tabId: T },
            l.a.createElement(
              o.SubtabsContainer,
              null,
              l.a.createElement(
                o.SubtabList,
                null,
                l.a.createElement(o.Subtab, {
                  active: !0,
                  title: '00071938',
                  tabItemId: 'subtab-tabitem-01',
                  tabPanelId: 'subtab-tabpanel-01'
                }),
                l.a.createElement(o.Subtab, {
                  title: 'Chat - Customer',
                  tabItemId: 'subtab-tabitem-02',
                  tabPanelId: 'subtab-tabpanel-02',
                  symbol: 'live_chat'
                })
              ),
              l.a.createElement(
                o.SubtabPanel,
                {
                  id: 'subtab-tabpanel-01',
                  tabId: 'subtab-tabitem-01',
                  isVisible: !0
                },
                'Item One Content'
              ),
              l.a.createElement(
                o.SubtabPanel,
                { id: 'subtab-tabpanel-02', tabId: 'subtab-tabitem-02' },
                'Item Two Content'
              )
            )
          ),
          l.a.createElement(P, { id: v, tabId: h }, 'Tab One Content'),
          l.a.createElement(P, { id: C, tabId: p }, 'Tab Two Content')
        )
      }
    ];
  }
});
