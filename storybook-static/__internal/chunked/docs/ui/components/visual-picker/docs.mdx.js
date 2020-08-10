var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/visual-picker/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var l, c, i = t[0], r = t[1], m = t[2], d = 0, u = [];
      d < i.length;
      d++
    )
      (c = i[d]),
        Object.prototype.hasOwnProperty.call(s, c) && s[c] && u.push(s[c][0]),
        (s[c] = 0);
    for (l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l]);
    for (o && o(t); u.length; ) u.shift()();
    return n.push.apply(n, m || []), a();
  }
  function a() {
    for (var e, t = 0; t < n.length; t++) {
      for (var a = n[t], l = !0, i = 1; i < a.length; i++) {
        var r = a[i];
        0 !== s[r] && (l = !1);
      }
      l && (n.splice(t--, 1), (e = c((c.s = a[0]))));
    }
    return e;
  }
  var l = {},
    s = { 84: 0 },
    n = [];
  function c(t) {
    if (l[t]) return l[t].exports;
    var a = (l[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, c), (a.l = !0), a.exports;
  }
  (c.m = e),
    (c.c = l),
    (c.d = function(e, t, a) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (c.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (c.t = function(e, t) {
      if ((1 & t && (e = c(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (c.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var l in e)
          c.d(
            a,
            l,
            function(t) {
              return e[t];
            }.bind(null, l)
          );
      return a;
    }),
    (c.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return c.d(t, 'a', t), t;
    }),
    (c.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = '/assets/scripts/bundle/');
  var i = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    r = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var m = 0; m < i.length; m++) t(i[m]);
  var o = r;
  return n.push([215, 0]), a();
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
  215: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'getElement', function() {
        return L;
      }),
      a.d(t, 'getContents', function() {
        return A;
      });
    var l = a(0),
      s = a.n(l),
      n = a(4),
      c = a(1),
      i = a(2),
      r = a(10),
      m = a(5),
      o = a.n(m),
      d = a(36),
      u = a(8),
      p = a(12),
      b = function(e) {
        return s.a.createElement(
          'span',
          { className: 'slds-text-title', key: i.c.uniqueId() },
          e.label
        );
      },
      E = function(e) {
        var t = i.c.uniqueId('visual-picker-');
        return s.a.createElement(
          'div',
          {
            className: o()(
              'slds-visual-picker',
              {
                'slds-visual-picker_large': 'large' === e.size,
                'slds-visual-picker_medium': 'medium' === e.size,
                'slds-visual-picker_small': 'small' === e.size
              },
              e.className
            )
          },
          s.a.createElement('input', {
            type: e.type,
            id: t,
            value: t,
            name: 'options',
            defaultChecked: e.checked,
            disabled: e.disabled
          }),
          s.a.createElement(
            'label',
            { htmlFor: t },
            e.icon
              ? s.a.createElement(
                  'span',
                  {
                    className: o()(
                      'slds-visual-picker__figure slds-visual-picker__icon slds-align_absolute-center'
                    )
                  },
                  s.a.createElement(
                    'span',
                    { className: 'slds-is-selected' },
                    s.a.createElement(
                      'span',
                      { className: 'slds-icon_container' },
                      s.a.createElement(r.a, {
                        className:
                          'slds-icon slds-icon_large slds-icon-action-check',
                        sprite: 'action',
                        symbol: 'check'
                      })
                    )
                  ),
                  s.a.createElement(
                    'span',
                    { className: 'slds-is-not-selected' },
                    s.a.createElement(
                      'span',
                      { className: 'slds-icon_container' },
                      s.a.createElement(r.a, {
                        className: o()(
                          'slds-icon slds-icon-' +
                            e.sprite +
                            '-' +
                            e.symbol +
                            ' slds-icon_large',
                          { 'slds-icon-text-default': 'utility' === e.sprite }
                        ),
                        sprite: e.sprite || 'action',
                        symbol: e.symbol
                      })
                    )
                  )
                )
              : s.a.createElement(
                  'span',
                  {
                    className: o()(
                      'slds-visual-picker__figure slds-visual-picker__text slds-align_absolute-center'
                    )
                  },
                  e.children
                ),
            e.label
              ? s.a.createElement(
                  'span',
                  { className: 'slds-visual-picker__body' },
                  e.label
                )
              : null,
            e.icon
              ? null
              : s.a.createElement(
                  'span',
                  {
                    className:
                      'slds-icon_container slds-visual-picker__text-check'
                  },
                  s.a.createElement(r.a, {
                    className:
                      'slds-icon slds-icon-text-check slds-icon_x-small',
                    sprite: 'utility',
                    symbol: 'check'
                  })
                )
          )
        );
      },
      h = s.a.createElement(
        d.a,
        null,
        s.a.createElement(d.b, null, 'Select an app'),
        s.a.createElement(
          u.c,
          null,
          s.a.createElement(E, {
            type: 'radio',
            icon: !0,
            sprite: 'utility',
            symbol: 'connected_apps',
            label: s.a.createElement(b, { label: 'Connected App' }),
            size: 'medium'
          }),
          s.a.createElement(E, {
            type: 'radio',
            icon: !0,
            sprite: 'utility',
            symbol: 'custom_apps',
            label: s.a.createElement(b, { label: 'Custom App' }),
            size: 'medium'
          })
        )
      ),
      y = [
        {
          id: 'disabled',
          label: 'Disabled option',
          element: s.a.createElement(
            d.a,
            null,
            s.a.createElement(d.b, null, 'Select an app'),
            s.a.createElement(
              u.c,
              null,
              s.a.createElement(E, {
                type: 'radio',
                icon: !0,
                sprite: 'utility',
                symbol: 'connected_apps',
                label: s.a.createElement(b, { label: 'Connected App' }),
                size: 'medium'
              }),
              s.a.createElement(E, {
                type: 'radio',
                disabled: !0,
                icon: !0,
                sprite: 'utility',
                symbol: 'custom_apps',
                label: s.a.createElement(b, { label: 'Custom App' }),
                size: 'medium'
              })
            )
          )
        }
      ],
      _ = [
        {
          id: 'base_small',
          label: 'Small base',
          element: s.a.createElement(
            d.a,
            null,
            s.a.createElement(d.b, null, 'Select an app'),
            s.a.createElement(
              u.c,
              null,
              s.a.createElement(E, {
                type: 'radio',
                icon: !0,
                sprite: 'utility',
                symbol: 'connected_apps',
                label: s.a.createElement(b, { label: 'Connected App' }),
                size: 'small'
              }),
              s.a.createElement(E, {
                type: 'radio',
                icon: !0,
                sprite: 'utility',
                symbol: 'custom_apps',
                label: s.a.createElement(b, { label: 'Custom App' }),
                size: 'small'
              })
            )
          )
        },
        {
          id: 'base',
          label: 'Medium (default) base',
          element: s.a.createElement(
            d.a,
            null,
            s.a.createElement(d.b, null, 'Select an app'),
            s.a.createElement(
              u.c,
              null,
              s.a.createElement(E, {
                type: 'radio',
                icon: !0,
                sprite: 'utility',
                symbol: 'connected_apps',
                label: s.a.createElement(b, { label: 'Connected App' }),
                size: 'medium'
              }),
              s.a.createElement(E, {
                type: 'radio',
                icon: !0,
                sprite: 'utility',
                symbol: 'custom_apps',
                label: s.a.createElement(b, { label: 'Custom App' }),
                size: 'medium'
              })
            )
          )
        },
        {
          id: 'base_large',
          label: 'Large base',
          element: s.a.createElement(
            d.a,
            null,
            s.a.createElement(d.b, null, 'Select an app'),
            s.a.createElement(
              u.c,
              null,
              s.a.createElement(E, {
                type: 'radio',
                icon: !0,
                sprite: 'utility',
                symbol: 'connected_apps',
                label: s.a.createElement(b, { label: 'Connected App' }),
                size: 'large'
              }),
              s.a.createElement(E, {
                type: 'radio',
                icon: !0,
                sprite: 'utility',
                symbol: 'custom_apps',
                label: s.a.createElement(b, { label: 'Custom App' }),
                size: 'large'
              })
            )
          )
        },
        {
          id: 'checkbox-group_small',
          label: 'Small base with checkboxes',
          element: s.a.createElement(
            d.a,
            null,
            s.a.createElement(d.b, null, 'Add the following object(s)'),
            s.a.createElement(
              u.c,
              null,
              s.a.createElement(E, {
                type: 'checkbox',
                icon: !0,
                sprite: 'standard',
                symbol: 'account',
                label: s.a.createElement(b, { label: 'Account' }),
                size: 'small'
              }),
              s.a.createElement(E, {
                type: 'checkbox',
                icon: !0,
                sprite: 'standard',
                symbol: 'lead',
                label: s.a.createElement(b, { label: 'Lead' }),
                size: 'small'
              }),
              s.a.createElement(E, {
                type: 'checkbox',
                icon: !0,
                sprite: 'standard',
                symbol: 'orders',
                label: s.a.createElement(b, { label: 'Orders' }),
                size: 'small'
              })
            )
          )
        },
        {
          id: 'checkbox-group',
          label: 'Medium base with checkboxes',
          element: s.a.createElement(
            d.a,
            null,
            s.a.createElement(d.b, null, 'Add the following object(s)'),
            s.a.createElement(
              u.c,
              null,
              s.a.createElement(E, {
                type: 'checkbox',
                icon: !0,
                sprite: 'standard',
                symbol: 'account',
                label: s.a.createElement(b, { label: 'Account' }),
                size: 'medium'
              }),
              s.a.createElement(E, {
                type: 'checkbox',
                icon: !0,
                sprite: 'standard',
                symbol: 'lead',
                label: s.a.createElement(b, { label: 'Lead' }),
                size: 'medium'
              }),
              s.a.createElement(E, {
                type: 'checkbox',
                icon: !0,
                sprite: 'standard',
                symbol: 'orders',
                label: s.a.createElement(b, { label: 'Orders' }),
                size: 'medium'
              })
            )
          )
        },
        {
          id: 'checkbox-group_large',
          label: 'Large base with checkboxes',
          element: s.a.createElement(
            d.a,
            null,
            s.a.createElement(d.b, null, 'Add the following object(s)'),
            s.a.createElement(
              u.c,
              null,
              s.a.createElement(E, {
                type: 'checkbox',
                icon: !0,
                sprite: 'standard',
                symbol: 'account',
                label: s.a.createElement(b, { label: 'Account' }),
                size: 'large'
              }),
              s.a.createElement(E, {
                type: 'checkbox',
                icon: !0,
                sprite: 'standard',
                symbol: 'lead',
                label: s.a.createElement(b, { label: 'Lead' }),
                size: 'large'
              }),
              s.a.createElement(E, {
                type: 'checkbox',
                icon: !0,
                sprite: 'standard',
                symbol: 'orders',
                label: s.a.createElement(b, { label: 'Orders' }),
                size: 'large'
              })
            )
          )
        }
      ],
      x = [
        s.a.createElement(
          'span',
          { className: 'slds-text-heading_small', key: i.c.uniqueId() },
          'Lightning Professional'
        ),
        s.a.createElement(
          'span',
          { className: 'slds-text-title', key: i.c.uniqueId() },
          'Complete service CRM for teams of any size'
        )
      ],
      g = [
        s.a.createElement(
          'span',
          { className: 'slds-text-heading_small', key: i.c.uniqueId() },
          'Lightning Enterprise'
        ),
        s.a.createElement(
          'span',
          { className: 'slds-text-title', key: i.c.uniqueId() },
          'Everything you need to take support to the next level'
        )
      ],
      k = [
        s.a.createElement(
          'span',
          { className: 'slds-text-heading_small', key: i.c.uniqueId() },
          'Lightning Unlimited'
        ),
        s.a.createElement(
          'span',
          { className: 'slds-text-title', key: i.c.uniqueId() },
          'Complete support with enterprise-grade customization'
        )
      ],
      f = s.a.createElement(
        d.a,
        null,
        s.a.createElement(d.b, null, 'Select a plan'),
        s.a.createElement(
          u.c,
          null,
          s.a.createElement(
            E,
            { type: 'radio', size: 'medium', label: x },
            s.a.createElement(
              'span',
              null,
              s.a.createElement(
                'span',
                { className: 'slds-text-heading_large' },
                '$30'
              ),
              s.a.createElement(
                'span',
                { className: 'slds-text-title' },
                'USD/user/month *'
              )
            )
          ),
          s.a.createElement(
            E,
            { type: 'radio', size: 'medium', label: g },
            s.a.createElement(
              'span',
              null,
              s.a.createElement(
                'span',
                { className: 'slds-text-heading_large' },
                '$150'
              ),
              s.a.createElement(
                'span',
                { className: 'slds-text-title' },
                'USD/user/month *'
              )
            )
          ),
          s.a.createElement(
            E,
            { type: 'radio', size: 'medium', label: k },
            s.a.createElement(
              'span',
              null,
              s.a.createElement(
                'span',
                { className: 'slds-text-heading_large' },
                '$300'
              ),
              s.a.createElement(
                'span',
                { className: 'slds-text-title' },
                'USD/user/month *'
              )
            )
          )
        )
      ),
      v = [
        {
          id: 'disabled',
          label: 'Disabled option',
          element: s.a.createElement(
            d.a,
            null,
            s.a.createElement(d.b, null, 'Select a plan'),
            s.a.createElement(
              u.c,
              null,
              s.a.createElement(
                E,
                { type: 'radio', size: 'medium', label: x },
                s.a.createElement(
                  'span',
                  null,
                  s.a.createElement(
                    'span',
                    { className: 'slds-text-heading_large' },
                    '$30'
                  ),
                  s.a.createElement(
                    'span',
                    { className: 'slds-text-title' },
                    'USD/user/month *'
                  )
                )
              ),
              s.a.createElement(
                E,
                { type: 'radio', size: 'medium', label: g },
                s.a.createElement(
                  'span',
                  null,
                  s.a.createElement(
                    'span',
                    { className: 'slds-text-heading_large' },
                    '$150'
                  ),
                  s.a.createElement(
                    'span',
                    { className: 'slds-text-title' },
                    'USD/user/month *'
                  )
                )
              ),
              s.a.createElement(
                E,
                { type: 'radio', size: 'medium', disabled: !0, label: k },
                s.a.createElement(
                  'span',
                  null,
                  s.a.createElement(
                    'span',
                    { className: 'slds-text-heading_large' },
                    '$300'
                  ),
                  s.a.createElement(
                    'span',
                    { className: 'slds-text-title' },
                    'USD/user/month *'
                  )
                )
              )
            )
          )
        }
      ],
      N = function(e) {
        var t = e.symbol || 'knowledge_base',
          a =
            e.icon ||
            s.a.createElement(p.a, {
              className: 'slds-icon-text-default',
              symbol: t,
              title: !1,
              assistiveText: !1
            });
        return s.a.createElement(
          'a',
          {
            href: 'javascript:void(0);',
            className: o()(
              'slds-box slds-box_link slds-box_x-small slds-media',
              e.className
            )
          },
          s.a.createElement(
            'div',
            {
              className:
                'slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center slds-m-left_xx-small'
            },
            a
          ),
          s.a.createElement(
            'div',
            {
              className: 'slds-media__body slds-border_left slds-p-around_small'
            },
            e.children
          )
        );
      },
      S = s.a.createElement(
        'div',
        { className: 'demo-only', style: { width: '24rem' } },
        s.a.createElement(
          N,
          { symbol: 'knowledge_base' },
          s.a.createElement(
            'h2',
            {
              className: 'slds-truncate slds-text-heading_small',
              title: 'Share the knowledge'
            },
            'Share the knowledge'
          ),
          s.a.createElement(
            'p',
            { className: 'slds-m-top_small' },
            "Harness your team's collective know-how with our powerful knowledge base"
          )
        )
      ),
      O = s.a.createElement(
        d.a,
        null,
        s.a.createElement(d.b, null, 'Select an option'),
        s.a.createElement(
          u.c,
          null,
          s.a.createElement(
            E,
            { className: 'slds-visual-picker_vertical', type: 'radio' },
            s.a.createElement(
              'span',
              null,
              s.a.createElement(
                'span',
                { className: 'slds-text-heading_medium slds-m-bottom_x-small' },
                'Item Text'
              ),
              s.a.createElement(
                'span',
                { className: 'slds-text-title' },
                'Some optional item description to help the user better understand what this option is about.'
              )
            )
          ),
          s.a.createElement(
            E,
            { className: 'slds-visual-picker_vertical', type: 'radio' },
            s.a.createElement(
              'span',
              null,
              s.a.createElement(
                'span',
                { className: 'slds-text-heading_medium slds-m-bottom_x-small' },
                'Item Text'
              ),
              s.a.createElement(
                'span',
                { className: 'slds-text-title' },
                'Some optional item description to help the user better understand what this option is about.'
              )
            )
          ),
          s.a.createElement(
            E,
            { className: 'slds-visual-picker_vertical', type: 'radio' },
            s.a.createElement(
              'span',
              null,
              s.a.createElement(
                'span',
                { className: 'slds-text-heading_medium slds-m-bottom_x-small' },
                'Item Text'
              ),
              s.a.createElement(
                'span',
                { className: 'slds-text-title' },
                'Some optional item description to help the user better understand what this option is about.'
              )
            )
          )
        )
      ),
      j = [
        {
          id: 'disabled',
          label: 'Disabled option',
          element: s.a.createElement(
            d.a,
            null,
            s.a.createElement(d.b, null, 'Select an option'),
            s.a.createElement(
              u.c,
              null,
              s.a.createElement(
                E,
                { className: 'slds-visual-picker_vertical', type: 'radio' },
                s.a.createElement(
                  'span',
                  null,
                  s.a.createElement(
                    'span',
                    {
                      className:
                        'slds-text-heading_medium slds-m-bottom_x-small'
                    },
                    'Item Text'
                  ),
                  s.a.createElement(
                    'span',
                    { className: 'slds-text-title' },
                    'Some optional item description to help the user better understand what this option is about.'
                  )
                )
              ),
              s.a.createElement(
                E,
                { className: 'slds-visual-picker_vertical', type: 'radio' },
                s.a.createElement(
                  'span',
                  null,
                  s.a.createElement(
                    'span',
                    {
                      className:
                        'slds-text-heading_medium slds-m-bottom_x-small'
                    },
                    'Item Text'
                  ),
                  s.a.createElement(
                    'span',
                    { className: 'slds-text-title' },
                    'Some optional item description to help the user better understand what this option is about.'
                  )
                )
              ),
              s.a.createElement(
                E,
                {
                  className: 'slds-visual-picker_vertical',
                  type: 'radio',
                  disabled: !0
                },
                s.a.createElement(
                  'span',
                  null,
                  s.a.createElement(
                    'span',
                    {
                      className:
                        'slds-text-heading_medium slds-m-bottom_x-small'
                    },
                    'Item Text'
                  ),
                  s.a.createElement(
                    'span',
                    { className: 'slds-text-title' },
                    'Some optional item description to help the user better understand what this option is about.'
                  )
                )
              )
            )
          )
        }
      ],
      w = n.c.h2,
      C = n.c.h3,
      z = n.c.h4,
      D = n.c.p,
      L = function() {
        return Object(l.createElement)(
          n.b,
          {},
          Object(l.createElement)(
            'div',
            { className: 'doc lead' },
            'A visual picker can be either radio buttons, checkboxes, or links that are visually enhanced.'
          ),
          Object(l.createElement)(
            c.a,
            { exampleOnly: !0 },
            Object(i.e)(_, 'checkbox-group')
          ),
          w({ id: 'Coverable-Content' }, 'Coverable Content'),
          C({ id: 'Base' }, 'Base'),
          D(
            {},
            'Coverable content comes in three sizes - small, medium (default) or large. The default uses radio buttons, allowing the user to pick only one. To allow multiple selections, follow the checkbox examples below.'
          ),
          z({ id: 'Small' }, 'Small'),
          Object(l.createElement)(c.a, null, Object(i.e)(_, 'base_small')),
          z({ id: 'Medium' }, 'Medium'),
          Object(l.createElement)(c.a, null, h),
          z({ id: 'Large' }, 'Large'),
          Object(l.createElement)(c.a, null, Object(i.e)(_, 'base_large')),
          C({ id: 'States' }, 'States'),
          z({ id: 'Disabled' }, 'Disabled'),
          Object(l.createElement)(c.a, null, Object(i.e)(y, 'disabled')),
          C({ id: 'Checkbox-Examples' }, 'Checkbox Examples'),
          D(
            {},
            'To allow users to select more than one option, use checkboxes instead of radio buttons.'
          ),
          z({ id: 'Small-Checkboxes' }, 'Small Checkboxes'),
          Object(l.createElement)(
            c.a,
            null,
            Object(i.e)(_, 'checkbox-group_small')
          ),
          z({ id: 'Medium-Checkboxes' }, 'Medium Checkboxes'),
          Object(l.createElement)(c.a, null, Object(i.e)(_, 'checkbox-group')),
          z({ id: 'Large-Checkboxes' }, 'Large Checkboxes'),
          Object(l.createElement)(
            c.a,
            null,
            Object(i.e)(_, 'checkbox-group_large')
          ),
          w({ id: 'Non-Coverable-Content' }, 'Non Coverable Content'),
          C({ id: 'Base-2' }, 'Base'),
          Object(l.createElement)(c.a, null, f),
          C({ id: 'States-2' }, 'States'),
          z({ id: 'Disabled-2' }, 'Disabled'),
          Object(l.createElement)(c.a, null, Object(i.e)(v, 'disabled')),
          w({ id: 'Link' }, 'Link'),
          Object(l.createElement)(c.a, null, S),
          w({ id: 'Vertical' }, 'Vertical'),
          C({ id: 'Base-3' }, 'Base'),
          Object(l.createElement)(c.a, null, O),
          C({ id: 'States-3' }, 'States'),
          z({ id: 'Disabled-3' }, 'Disabled'),
          Object(l.createElement)(c.a, null, Object(i.e)(j, 'disabled'))
        );
      },
      A = function() {
        return Object(n.a)(L());
      };
  }
});
