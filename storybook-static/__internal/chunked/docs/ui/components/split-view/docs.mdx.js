var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/split-view/docs.mdx.js'
] = (function(e) {
  function l(l) {
    for (
      var s, c, o = l[0], r = l[1], i = l[2], m = 0, u = [];
      m < o.length;
      m++
    )
      (c = o[m]),
        Object.prototype.hasOwnProperty.call(a, c) && a[c] && u.push(a[c][0]),
        (a[c] = 0);
    for (s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    for (d && d(l); u.length; ) u.shift()();
    return n.push.apply(n, i || []), t();
  }
  function t() {
    for (var e, l = 0; l < n.length; l++) {
      for (var t = n[l], s = !0, o = 1; o < t.length; o++) {
        var r = t[o];
        0 !== a[r] && (s = !1);
      }
      s && (n.splice(l--, 1), (e = c((c.s = t[0]))));
    }
    return e;
  }
  var s = {},
    a = { 71: 0 },
    n = [];
  function c(l) {
    if (s[l]) return s[l].exports;
    var t = (s[l] = { i: l, l: !1, exports: {} });
    return e[l].call(t.exports, t, t.exports, c), (t.l = !0), t.exports;
  }
  (c.m = e),
    (c.c = s),
    (c.d = function(e, l, t) {
      c.o(e, l) || Object.defineProperty(e, l, { enumerable: !0, get: t });
    }),
    (c.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (c.t = function(e, l) {
      if ((1 & l && (e = c(e)), 8 & l)) return e;
      if (4 & l && 'object' == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (c.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
        2 & l && 'string' != typeof e)
      )
        for (var s in e)
          c.d(
            t,
            s,
            function(l) {
              return e[l];
            }.bind(null, s)
          );
      return t;
    }),
    (c.n = function(e) {
      var l =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return c.d(l, 'a', l), l;
    }),
    (c.o = function(e, l) {
      return Object.prototype.hasOwnProperty.call(e, l);
    }),
    (c.p = '/assets/scripts/bundle/');
  var o = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    r = o.push.bind(o);
  (o.push = l), (o = o.slice());
  for (var i = 0; i < o.length; i++) l(o[i]);
  var d = r;
  return n.push([267, 0]), t();
})({
  0: function(e, l) {
    e.exports = React;
  },
  18: function(e, l) {
    e.exports = JSBeautify;
  },
  19: function(e, l) {
    e.exports = ReactDOM;
  },
  267: function(e, l, t) {
    'use strict';
    t.r(l),
      t.d(l, 'getElement', function() {
        return T;
      }),
      t.d(l, 'getContents', function() {
        return S;
      });
    var s = t(0),
      a = t.n(s),
      n = t(4),
      c = t(1),
      o = t(10),
      r = t(5),
      i = t.n(r),
      d = t(7),
      m = [
        {
          unread: !0,
          colOne: 'Riley Shultz',
          colTwo: '99',
          colThree: 'Biotech, Inc.',
          colFour: 'Nurturing'
        },
        {
          unread: !0,
          colOne: 'Jason A. - VP of Sales',
          colTwo: '92',
          colThree: 'Case Management Solutions',
          colFour: 'Contacted'
        },
        {
          unread: !0,
          colOne: 'Josh Smith',
          colTwo: '90',
          colThree: 'Acme, Inc.',
          colFour: 'Contacted'
        },
        {
          unread: !0,
          colOne: 'Bobby Tree',
          colTwo: '89',
          colThree: 'Salesforce, Inc.',
          colFour: 'Closing'
        },
        {
          selected: !0,
          colOne: 'Riley Shultz',
          colTwo: '74',
          colThree: 'Tesla',
          colFour: 'Contacted'
        },
        {
          unread: !0,
          colOne: 'Andy Smith',
          colTwo: '72',
          colThree: 'Universal Technologies',
          colFour: 'New'
        },
        {
          colOne: 'Jim Steele',
          colTwo: '71',
          colThree: 'BigList, Inc.',
          colFour: 'New'
        },
        {
          colOne: 'John Gardner',
          colTwo: '70',
          colThree: '3C Systems',
          colFour: 'Contacted'
        },
        {
          colOne: 'Sarah Loehr',
          colTwo: '68',
          colThree: 'MedLife, Inc.',
          colFour: 'New'
        }
      ],
      u = function(e) {
        return a.a.createElement(
          'div',
          {
            className: i()(
              'slds-split-view_container',
              e.hidden ? 'slds-is-closed' : 'slds-is-open'
            )
          },
          a.a.createElement(d.b, {
            'aria-controls': 'split-view-id',
            'aria-expanded': e.hidden ? 'false' : 'true',
            className: i()(
              'slds-button_icon slds-split-view__toggle-button',
              e.hidden ? 'slds-is-closed' : 'slds-is-open'
            ),
            iconClassName: 'slds-button__icon_x-small',
            symbol: 'left',
            assistiveText: e.hidden ? 'Open Split View' : 'Close Split View',
            title: e.hidden ? 'Open Split View' : 'Close Split View'
          }),
          a.a.createElement(
            'article',
            {
              'aria-hidden': e.hidden ? 'true' : 'false',
              id: 'split-view-id',
              className: i()(
                'slds-split-view slds-grid slds-grid_vertical slds-grow',
                e.className
              )
            },
            a.a.createElement(
              'header',
              { className: 'slds-split-view__header' },
              a.a.createElement(
                'div',
                {
                  className:
                    'slds-grid slds-grid_vertical-align-center slds-m-bottom_xx-small'
                },
                a.a.createElement(
                  'div',
                  { className: 'slds-has-flexi-truncate' },
                  a.a.createElement(
                    'div',
                    { className: 'slds-media slds-media_center' },
                    a.a.createElement(
                      'div',
                      { className: 'slds-media__figure' },
                      a.a.createElement(
                        'div',
                        {
                          className:
                            'slds-icon_container slds-icon-standard-lead'
                        },
                        a.a.createElement(o.a, {
                          className: 'slds-icon',
                          sprite: 'standard',
                          symbol: 'lead'
                        }),
                        a.a.createElement(
                          'span',
                          { className: 'slds-assistive-text' },
                          'Leads'
                        )
                      )
                    ),
                    a.a.createElement(
                      'div',
                      { className: 'slds-media__body' },
                      a.a.createElement(
                        'h1',
                        {
                          className:
                            'slds-text-heading_small slds-text-color_default slds-p-right_x-small'
                        },
                        a.a.createElement(
                          'button',
                          {
                            className:
                              'slds-button slds-button_reset slds-type-focus slds-truncate',
                            'aria-haspopup': 'true',
                            title: ''
                          },
                          a.a.createElement(
                            'span',
                            {
                              className:
                                'slds-grid slds-has-flexi-truncate slds-grid_vertical-align-center'
                            },
                            a.a.createElement(
                              'span',
                              { className: 'slds-truncate', title: 'My Leads' },
                              'My Leads'
                            ),
                            a.a.createElement(o.a, {
                              className:
                                'slds-button__icon slds-button__icon_right slds-no-flex',
                              sprite: 'utility',
                              symbol: 'down'
                            })
                          )
                        )
                      )
                    )
                  )
                ),
                a.a.createElement(
                  'div',
                  { className: 'slds-no-flex slds-grid' },
                  a.a.createElement(d.b, {
                    className: 'slds-button_icon-border-filled',
                    symbol: 'down',
                    'aria-haspopup': 'true',
                    assistiveText: 'More Actions',
                    title: 'More Actions'
                  })
                )
              ),
              a.a.createElement(
                'div',
                { className: 'slds-grid slds-grid_vertical-align-center' },
                a.a.createElement(
                  'p',
                  { className: 'slds-text-body_small slds-text-color_weak' },
                  '42 items • Updated just now'
                ),
                a.a.createElement(
                  'div',
                  { className: 'slds-no-flex slds-grid slds-col_bump-left' },
                  a.a.createElement(
                    'div',
                    { className: 'slds-button-group' },
                    a.a.createElement(d.b, {
                      hasDropdown: !0,
                      className:
                        'slds-button_icon slds-button_icon-container-more',
                      symbol: 'side_list',
                      title: 'Display As Split View',
                      assistiveText: 'Display As Split View'
                    })
                  ),
                  a.a.createElement(
                    'div',
                    { className: 'slds-button-group' },
                    a.a.createElement(d.b, {
                      className: 'slds-button_icon slds-button_icon-container',
                      symbol: 'refresh',
                      title: 'Refresh List',
                      assistiveText: 'Refresh List'
                    })
                  )
                )
              )
            ),
            a.a.createElement(
              'div',
              { className: 'slds-grid slds-grid_vertical' },
              a.a.createElement(
                'div',
                { className: 'slds-split-view__list-header slds-grid' },
                a.a.createElement(
                  'span',
                  { className: 'slds-assistive-text' },
                  'Sorted by:'
                ),
                a.a.createElement(
                  'span',
                  null,
                  'Lead Score',
                  a.a.createElement(o.a, {
                    className:
                      'slds-icon slds-icon_xx-small slds-icon-text-default slds-align-top',
                    sprite: 'utility',
                    symbol: 'arrowdown'
                  })
                ),
                a.a.createElement(
                  'span',
                  { className: 'slds-assistive-text' },
                  '- Descending'
                )
              ),
              a.a.createElement(
                'ul',
                {
                  'aria-multiselectable': 'true',
                  className: 'slds-scrollable_y',
                  role: 'listbox',
                  'aria-label':
                    'Select an item to open it in a new workspace tab.'
                },
                e.children
              )
            )
          )
        );
      },
      p = function(e) {
        return a.a.createElement(
          'li',
          {
            className: i()(
              'slds-split-view__list-item',
              e.className,
              e.unread ? 'slds-is-unread' : null
            ),
            role: 'presentation'
          },
          a.a.createElement(
            'a',
            {
              href: 'javascript:void(0);',
              'aria-selected': !!e.selected,
              role: 'option',
              className:
                'slds-split-view__list-item-action slds-grow slds-has-flexi-truncate',
              tabIndex: e.tabIndex
            },
            e.unread
              ? a.a.createElement(
                  'abbr',
                  {
                    className: 'slds-indicator_unread',
                    title: 'Unread Item',
                    'aria-label': 'Unread Item'
                  },
                  a.a.createElement(
                    'span',
                    { className: 'slds-assistive-text' },
                    '●'
                  )
                )
              : null,
            a.a.createElement(
              'div',
              { className: 'slds-grid slds-wrap' },
              a.a.createElement(
                'span',
                {
                  className:
                    'slds-truncate slds-text-body_regular slds-text-color_default',
                  title: e.colOne || 'Object Name'
                },
                e.colOne || 'Column 1'
              ),
              a.a.createElement(
                'span',
                {
                  className: 'slds-truncate slds-col_bump-left',
                  title: e.colTwo || 'Column 2'
                },
                e.colTwo || 'Column 2'
              )
            ),
            a.a.createElement(
              'div',
              { className: 'slds-grid slds-wrap' },
              a.a.createElement(
                'span',
                { className: 'slds-truncate', title: e.colThree || 'Column 3' },
                e.colThree || 'Column 3'
              ),
              a.a.createElement(
                'span',
                {
                  className: 'slds-truncate slds-col_bump-left',
                  title: e.colFour || 'Column 4'
                },
                e.colFour || 'Column 4'
              )
            )
          )
        );
      },
      h = a.a.createElement(
        'div',
        {
          className: 'demo-only',
          style: { display: 'flex', width: '20rem', height: '37.5rem' }
        },
        a.a.createElement(
          u,
          null,
          m.slice(0, 5).map(function(e, l) {
            return a.a.createElement(p, {
              key: l,
              colOne: e.colOne,
              colTwo: e.colTwo,
              colThree: e.colThree,
              colFour: e.colFour,
              tabIndex: 0 === l ? 0 : -1
            });
          })
        )
      ),
      b = [
        {
          id: 'selected-item',
          label: 'Selected Item',
          element: a.a.createElement(
            'div',
            {
              className: 'demo-only',
              style: { display: 'flex', width: '20rem', height: '37.5rem' }
            },
            a.a.createElement(
              u,
              null,
              m.slice(0, 5).map(function(e, l) {
                return a.a.createElement(p, {
                  key: l,
                  selected: e.selected,
                  colOne: e.colOne,
                  colTwo: e.colTwo,
                  colThree: e.colThree,
                  colFour: e.colFour,
                  tabIndex: 0 === l ? 0 : -1
                });
              })
            )
          )
        },
        {
          id: 'overflow',
          label: 'Overflow',
          element: a.a.createElement(
            'div',
            {
              className: 'demo-only',
              style: { display: 'flex', width: '20rem', height: '37.5rem' }
            },
            a.a.createElement(
              u,
              null,
              m.map(function(e, l) {
                return a.a.createElement(p, {
                  key: l,
                  colOne: e.colOne,
                  colTwo: e.colTwo,
                  colThree: e.colThree,
                  colFour: e.colFour,
                  tabIndex: 0 === l ? 0 : -1
                });
              })
            )
          )
        },
        {
          id: 'unread',
          label: 'Unread Items',
          element: a.a.createElement(
            'div',
            {
              className: 'demo-only',
              style: { display: 'flex', width: '20rem', height: '37.5rem' }
            },
            a.a.createElement(
              u,
              null,
              m.map(function(e, l) {
                return a.a.createElement(p, {
                  key: l,
                  unread: e.unread,
                  colOne: e.colOne,
                  colTwo: e.colTwo,
                  colThree: e.colThree,
                  colFour: e.colFour,
                  tabIndex: 0 === l ? 0 : -1
                });
              })
            )
          )
        },
        {
          id: 'panel-collapsed',
          label: 'Collapsed Panel',
          element: a.a.createElement(
            'div',
            {
              className: 'demo-only',
              style: { display: 'flex', width: '20rem', height: '37.5rem' }
            },
            a.a.createElement(
              u,
              { hidden: !0 },
              m.map(function(e, l) {
                return a.a.createElement(p, {
                  key: l,
                  unread: e.unread,
                  colOne: e.colOne,
                  colTwo: e.colTwo,
                  colThree: e.colThree,
                  colFour: e.colFour,
                  tabIndex: 0 === l ? 0 : -1
                });
              })
            )
          )
        }
      ],
      f = t(2),
      w = n.c.a,
      v = n.c.code,
      y = n.c.em,
      _ = n.c.h2,
      E = n.c.h3,
      g = n.c.li,
      N = n.c.p,
      O = n.c.strong,
      x = n.c.ul,
      T = function() {
        return Object(s.createElement)(
          n.b,
          {},
          Object(s.createElement)(
            'div',
            { className: 'doc lead' },
            'Split view is used to navigate between records in a list while staying on the same screen.'
          ),
          Object(s.createElement)(
            c.a,
            { exampleOnly: !0 },
            Object(f.e)(b, 'selected-item')
          ),
          _({ id: 'About-Split-View' }, 'About Split View'),
          E({ id: 'Accessibility' }, 'Accessibility'),
          N(
            {},
            'The list component of the Split View consists of an ARIA Listbox, and as such must abide by the following rules:'
          ),
          x(
            {},
            g(
              {},
              'Each option can only be a single actionable element. No child actions are allowed'
            ),
            g(
              {},
              O({}, 'Must'),
              ' implement the keyboard interaction as described by the ',
              w(
                { href: 'https://www.w3.org/TR/wai-aria-practices/#Listbox' },
                'ARIA Authoring Practices'
              )
            ),
            g(
              {},
              'For each open workspace tab, the corresponding option ',
              y({}, 'should'),
              ' be set to ',
              v({}, 'aria-selected="true"')
            )
          ),
          _({ id: 'Base' }, 'Base'),
          Object(s.createElement)(c.a, null, h),
          _({ id: 'States' }, 'States'),
          E({ id: 'Selected-Item' }, 'Selected Item'),
          Object(s.createElement)(c.a, null, Object(f.e)(b, 'selected-item')),
          E({ id: 'Overflow' }, 'Overflow'),
          Object(s.createElement)(c.a, null, Object(f.e)(b, 'overflow')),
          E({ id: 'Unread-Items' }, 'Unread Items'),
          Object(s.createElement)(c.a, null, Object(f.e)(b, 'unread')),
          E({ id: 'Collapsed-Panel' }, 'Collapsed Panel'),
          Object(s.createElement)(c.a, null, Object(f.e)(b, 'panel-collapsed'))
        );
      },
      S = function() {
        return Object(n.a)(T());
      };
  }
});
