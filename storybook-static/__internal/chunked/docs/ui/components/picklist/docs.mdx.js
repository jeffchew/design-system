var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/picklist/docs.mdx.js'] = (function(
  e
) {
  function t(t) {
    for (
      var n, i, a = t[0], c = t[1], d = t[2], p = 0, u = [];
      p < a.length;
      p++
    )
      (i = a[p]),
        Object.prototype.hasOwnProperty.call(o, i) && o[i] && u.push(o[i][0]),
        (o[i] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    for (r && r(t); u.length; ) u.shift()();
    return l.push.apply(l, d || []), s();
  }
  function s() {
    for (var e, t = 0; t < l.length; t++) {
      for (var s = l[t], n = !0, a = 1; a < s.length; a++) {
        var c = s[a];
        0 !== o[c] && (n = !1);
      }
      n && (l.splice(t--, 1), (e = i((i.s = s[0]))));
    }
    return e;
  }
  var n = {},
    o = { 54: 0 },
    l = [];
  function i(t) {
    if (n[t]) return n[t].exports;
    var s = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
  }
  (i.m = e),
    (i.c = n),
    (i.d = function(e, t, s) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s });
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
      var s = Object.create(null);
      if (
        (i.r(s),
        Object.defineProperty(s, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          i.d(
            s,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return s;
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
  var a = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    c = a.push.bind(a);
  (a.push = t), (a = a.slice());
  for (var d = 0; d < a.length; d++) t(a[d]);
  var r = c;
  return l.push([222, 0]), s();
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
  222: function(e, t, s) {
    'use strict';
    s.r(t),
      s.d(t, 'getElement', function() {
        return C;
      }),
      s.d(t, 'getContents', function() {
        return A;
      });
    var n = s(0),
      o = s.n(n),
      l = s(4),
      i = s(1),
      a = (s(26), s(43), s(15), s(2)),
      c = s(24),
      d = s(25),
      r = s(5),
      p = s.n(r),
      u = s(10),
      m = s(7),
      b = s(8),
      h = function(e) {
        return o.a.createElement(
          'div',
          { className: p()('slds-dropdown', e.className), role: 'listbox' },
          e.children
        );
      },
      x = function(e) {
        return o.a.createElement(
          'ul',
          {
            id: e.id || 'option-list-01',
            className: p()('slds-dropdown__list', e.className),
            role: 'group' === e.role ? 'group' : 'presentation',
            'aria-label': 'group' === e.role ? e['aria-label'] : null
          },
          e.children
        );
      },
      _ = function(e) {
        var t = a.c.uniqueId('listbox-option-');
        return o.a.createElement(
          'li',
          { className: e.className, role: 'presentation' },
          o.a.createElement(
            'span',
            {
              className: p()(
                'presentation' === e.role
                  ? 'slds-lookup__item_label'
                  : e.text
                  ? 'slds-lookup__item-action slds-lookup__item-action_label'
                  : 'slds-lookup__item-action slds-media'
              ),
              role: e.role ? e.role : 'option',
              tabIndex: e.tabIndex || '-1',
              id: t
            },
            e.isSelectable
              ? o.a.createElement(u.a, {
                  className:
                    'slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small slds-shrink-none',
                  sprite: 'utility',
                  symbol: 'check'
                })
              : null,
            e.headerText
              ? o.a.createElement(
                  'h3',
                  { className: 'slds-text-title_caps', role: 'presentation' },
                  e.headerText
                )
              : e.text
              ? o.a.createElement(
                  'span',
                  { className: 'slds-truncate', title: e.title },
                  e.children
                )
              : e.children
          )
        );
      },
      O = function(e) {
        return o.a.createElement(
          b.b,
          null,
          o.a.createElement(b.d, {
            labelContent: 'Categories',
            inputId: 'text-input-01'
          }),
          o.a.createElement(
            b.c,
            {
              className:
                'slds-input-has-icon slds-input-has-icon_right slds-picklist__input'
            },
            o.a.createElement('input', {
              id: 'text-input-01',
              className: 'slds-lookup__search-input slds-input',
              type: 'text',
              placeholder: e.placeholder || 'Select an Option',
              'aria-owns': 'option-list-01',
              role: 'textbox',
              readOnly: !e.autocomplete,
              'aria-autocomplete': e.autocomplete ? 'list' : null
            }),
            e.autocomplete
              ? null
              : o.a.createElement(m.b, {
                  className: 'slds-input__icon slds-text-color_default',
                  symbol: 'down',
                  assistiveText: 'Expand category options',
                  'aria-expanded': 'open' === e.dropdown ? 'true' : 'false',
                  iconClassName: 'slds-button__icon',
                  tabIndex: '-1'
                })
          )
        );
      },
      f = s(56),
      y = s(12),
      g = {
        option1: { name: 'Option A' },
        option2: { name: 'Option B' },
        option3: { name: 'Option ABCDEFGHIJKLMNOPQRSTUVWXYZ' }
      },
      E = {
        option1: { name: 'Option A', selected: !0 },
        option2: { name: 'Option B' },
        option3: { name: 'Option ABCDEFGHIJKLMNOPQRSTUVWXYZ' }
      },
      S = {
        option1: { name: 'Option A', selected: !0 },
        option2: { name: 'Option B', selected: !0 },
        option3: { name: 'Option ABCDEFGHIJKLMNOPQRSTUVWXYZ' }
      },
      v = o.a.createElement(c.b, {
        id: a.c.uniqueId('combobox-id-'),
        className: 'slds-size_small',
        'aria-controls': 'listbox-id-1',
        inputIconPosition: 'right',
        rightInputIcon: o.a.createElement(y.a, {
          symbol: 'down',
          className: 'slds-icon slds-icon_x-small slds-icon-text-default',
          containerClassName: 'slds-input__icon slds-input__icon_right',
          assistiveText: !1,
          title: !1
        }),
        results: o.a.createElement(d.e, {
          id: 'listbox-id-1',
          snapshot: g,
          type: 'plain',
          count: 8,
          visualSelection: !0
        }),
        resultsType: 'listbox',
        readonly: !0,
        hasInteractions: !0
      }),
      I = [
        {
          id: 'focused',
          label: 'Focused',
          element: o.a.createElement(c.b, {
            id: a.c.uniqueId('combobox-id-'),
            className: 'slds-size_small',
            'aria-controls': 'listbox-id-2',
            inputIconPosition: 'right',
            rightInputIcon: o.a.createElement(y.a, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: o.a.createElement(d.e, {
              id: 'listbox-id-2',
              snapshot: g,
              type: 'plain',
              count: 8,
              visualSelection: !0
            }),
            resultsType: 'listbox',
            readonly: !0,
            hasFocus: !0,
            isOpen: !0
          })
        },
        {
          id: 'open-item-focused',
          label: 'Open - Item Focused',
          element: o.a.createElement(c.b, {
            id: a.c.uniqueId('combobox-id-'),
            className: 'slds-size_small',
            'aria-controls': 'listbox-id-3',
            inputIconPosition: 'right',
            rightInputIcon: o.a.createElement(y.a, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: o.a.createElement(d.e, {
              id: 'listbox-id-3',
              snapshot: {
                option1: { name: 'Option A', focused: !0 },
                option2: { name: 'Option B' },
                option3: { name: 'Option ABCDEFGHIJKLMNOPQRSTUVWXYZ' }
              },
              type: 'plain',
              count: 8,
              visualSelection: !0
            }),
            resultsType: 'listbox',
            'aria-activedescendant': 'option1',
            readonly: !0,
            hasFocus: !0,
            isOpen: !0
          })
        },
        {
          id: 'open-option-selected',
          label: 'Open - Option Selected',
          element: o.a.createElement(c.b, {
            id: a.c.uniqueId('combobox-id-'),
            className: 'slds-size_small',
            'aria-controls': 'listbox-id-4',
            inputIconPosition: 'right',
            value: 'Option A',
            rightInputIcon: o.a.createElement(y.a, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: o.a.createElement(d.e, {
              id: 'listbox-id-4',
              snapshot: E,
              type: 'plain',
              count: 8,
              visualSelection: !0
            }),
            resultsType: 'listbox',
            'aria-activedescendant': 'option1',
            readonly: !0,
            hasFocus: !0,
            isOpen: !0
          })
        },
        {
          id: 'open-options-selected',
          label: 'Open - Options Selected',
          element: o.a.createElement(c.b, {
            id: a.c.uniqueId('combobox-id-'),
            className: 'slds-size_small',
            'aria-controls': 'listbox-id-5',
            readonly: !0,
            value: '2 Options Selected',
            inputIconPosition: 'right',
            rightInputIcon: o.a.createElement(y.a, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: o.a.createElement(d.e, {
              id: 'listbox-id-5',
              snapshot: S,
              type: 'plain',
              count: 8,
              visualSelection: !0
            }),
            resultsType: 'listbox',
            isOpen: !0,
            hasFocus: !0
          })
        },
        {
          id: 'closed-option-selected',
          label: 'Closed - Option Selected',
          element: o.a.createElement(c.b, {
            id: a.c.uniqueId('combobox-id-'),
            className: 'slds-size_small',
            'aria-controls': 'listbox-id-6',
            inputIconPosition: 'right',
            value: 'Option A',
            rightInputIcon: o.a.createElement(y.a, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: o.a.createElement(d.e, {
              id: 'listbox-id-6',
              snapshot: E,
              type: 'plain',
              count: 8,
              visualSelection: !0
            }),
            resultsType: 'listbox',
            'aria-activedescendant': 'option1',
            readonly: !0
          })
        },
        {
          id: 'closed-options-selected',
          label: 'Closed - Options Selected',
          element: o.a.createElement(c.b, {
            id: a.c.uniqueId('combobox-id-'),
            className: 'slds-size_small',
            'aria-controls': 'listbox-id-7',
            readonly: !0,
            value: '2 Options Selected',
            inputIconPosition: 'right',
            rightInputIcon: o.a.createElement(y.a, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: o.a.createElement(d.e, {
              id: 'listbox-id-7',
              snapshot: S,
              type: 'plain',
              count: 8,
              visualSelection: !0
            }),
            resultsType: 'listbox',
            listboxOfSelections: o.a.createElement(f.a, {
              snapshot: {
                option1: { name: 'Option A', tabIndex: 0 },
                option2: { name: 'Option B' }
              },
              count: 2
            })
          })
        },
        {
          id: 'group-heading',
          label: 'Group heading label',
          element: o.a.createElement(c.b, {
            id: a.c.uniqueId('combobox-id-'),
            className: 'slds-size_small',
            'aria-controls': 'listbox-id-8',
            readonly: !0,
            inputIconPosition: 'right',
            rightInputIcon: o.a.createElement(y.a, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: o.a.createElement(
              d.c,
              {
                id: 'listbox-id-8',
                className: 'slds-dropdown slds-dropdown_fluid'
              },
              o.a.createElement(d.b, {
                'aria-label': 'Group One',
                snapshot: {
                  option0: { name: 'Recently Viewed', label: !0 },
                  option1: { name: 'Option A' },
                  option2: { name: 'Option B' }
                },
                count: 3
              })
            ),
            resultsType: 'listbox',
            isOpen: !0,
            hasFocus: !0
          })
        },
        {
          id: 'deprecated-picklist-open',
          label: 'Deprecated Picklist Open',
          element: o.a.createElement(
            'div',
            { className: 'demo-only', style: { height: '240px' } },
            o.a.createElement(
              'div',
              {
                className:
                  'slds-picklist slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open'
              },
              o.a.createElement(O, { dropdown: 'open' }),
              o.a.createElement(
                h,
                { className: 'slds-dropdown_left slds-dropdown_length-5' },
                o.a.createElement(
                  x,
                  null,
                  o.a.createElement(
                    _,
                    {
                      isSelectable: !0,
                      text: !0,
                      title: 'Option A',
                      tabIndex: '0'
                    },
                    'Option A'
                  ),
                  o.a.createElement(
                    _,
                    { isSelectable: !0, text: !0, title: 'Option B' },
                    'Option B'
                  ),
                  o.a.createElement(
                    _,
                    { isSelectable: !0, text: !0, title: 'Option C' },
                    'Option C'
                  ),
                  o.a.createElement(
                    _,
                    { isSelectable: !0, text: !0, title: 'Option D' },
                    'Option D'
                  ),
                  o.a.createElement(
                    _,
                    { isSelectable: !0, text: !0, title: 'Option E' },
                    'Option E'
                  ),
                  o.a.createElement(
                    _,
                    { isSelectable: !0, text: !0, title: 'Option F' },
                    'Option FGHIJKLMNOPQRSTUVWXYZ'
                  )
                )
              )
            )
          )
        }
      ],
      w = l.c.a,
      N = l.c.code,
      T = l.c.h2,
      j = l.c.h3,
      k = l.c.p,
      C = function() {
        return Object(n.createElement)(
          l.b,
          {},
          Object(n.createElement)(
            'div',
            { className: 'doc lead' },
            'A Picklist provides a user with an read-only input field that is accompanied with a listbox of pre-defined options. A picklist has both single and multi-selection patterns.'
          ),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 11rem;', exampleOnly: !0 },
            Object(a.e)(I, 'open-option-selected')
          ),
          T({ id: 'About-Picklist' }, 'About Picklist'),
          k(
            {},
            'A picklist is a widget that displays a list of selectable options. When an option is selected, it is shown as selected and the value of the read-only input is updated to match it.'
          ),
          k(
            {},
            'A multi-select picklist is widget that displays a list of selectable options, where more than one option can be chosen. When more than one option has been selected, the value of the read-only input should update with the total number of selected items, such as "3 options selected". When a picklist with multiple selected options is closed, a listbox of pills is also used to represent those selected options. The listbox of pills is positioned below the read-only input, each pill represents a selected option. This allows a user to easily see and remove selected items.'
          ),
          k(
            {},
            'The target HTML element, ',
            N({}, 'slds-combobox'),
            ' and dropdown need to be wrapped in the class ',
            N({}, '.slds-dropdown-trigger dropdown-trigger_click'),
            '.'
          ),
          T({ id: 'Accessibility' }, 'Accessibility'),
          k(
            {},
            'A Picklist allows a user to select and set a value from a pre-defined list of options. As such we follow the ARIA Combobox widget pattern to implement it as it\'s the most appropriate concept to achieve this. The variant of Combobox we chose is the "Read-only" version, as a users keyboard input cannot directly affect the value set in the Combobox, but can only select a value from a pre-defined list. It also does not perform a search, or autocomplete function. It most closely resembles the HTML ',
            N({}, 'select'),
            ' element.'
          ),
          k(
            {},
            'Implementing a multi-select pattern with a Combobox is not standard, nor is it technically supported by the specification. Therefore great care should be paid to the extra steps we take to try and communicate multi-selection.'
          ),
          k(
            {},
            'Please refer to the ',
            w({ href: '/components/combobox' }, 'Combobox'),
            ' documentation relating to read-only implementation guidelines.'
          ),
          T({ id: 'Default' }, 'Default'),
          k(
            {},
            'A Picklist provides a user with an read-only input field that is accompanied with a listbox of pre-defined options. A picklist has a single and multi-selection pattern.'
          ),
          Object(n.createElement)(i.a, { demoStyles: 'height: 11rem;' }, v),
          T({ id: 'States' }, 'States'),
          j({ id: 'Focused' }, 'Focused'),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 11rem;' },
            Object(a.e)(I, 'focused')
          ),
          j({ id: 'Open-Item-Focused' }, 'Open - Item Focused'),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 11rem;' },
            Object(a.e)(I, 'open-item-focused')
          ),
          j({ id: 'Open-Option-Selected' }, 'Open - Option Selected'),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 11rem;' },
            Object(a.e)(I, 'open-option-selected')
          ),
          j({ id: 'Open-Options-Selected' }, 'Open - Options Selected'),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 11rem;' },
            Object(a.e)(I, 'open-options-selected')
          ),
          j({ id: 'Closed-Option-Selected' }, 'Closed - Option Selected'),
          Object(n.createElement)(
            i.a,
            null,
            Object(a.e)(I, 'closed-option-selected')
          ),
          j({ id: 'Closed-Options-Selected' }, 'Closed - Options Selected'),
          Object(n.createElement)(
            i.a,
            null,
            Object(a.e)(I, 'closed-options-selected')
          ),
          T({ id: 'Examples' }, 'Examples'),
          j({ id: 'Group-heading-label' }, 'Group heading label'),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 13rem;' },
            Object(a.e)(I, 'group-heading')
          )
        );
      },
      A = function() {
        return Object(l.a)(C());
      };
  }
});
