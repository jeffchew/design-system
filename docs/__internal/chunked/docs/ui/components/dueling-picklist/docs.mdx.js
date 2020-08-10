var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/dueling-picklist/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var i, c, s = t[0], o = t[1], r = t[2], u = 0, m = [];
      u < s.length;
      u++
    )
      (c = s[u]),
        Object.prototype.hasOwnProperty.call(a, c) && a[c] && m.push(a[c][0]),
        (a[c] = 0);
    for (i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
    for (d && d(t); m.length; ) m.shift()();
    return n.push.apply(n, r || []), l();
  }
  function l() {
    for (var e, t = 0; t < n.length; t++) {
      for (var l = n[t], i = !0, s = 1; s < l.length; s++) {
        var o = l[s];
        0 !== a[o] && (i = !1);
      }
      i && (n.splice(t--, 1), (e = c((c.s = l[0]))));
    }
    return e;
  }
  var i = {},
    a = { 31: 0 },
    n = [];
  function c(t) {
    if (i[t]) return i[t].exports;
    var l = (i[t] = { i: t, l: !1, exports: {} });
    return e[t].call(l.exports, l, l.exports, c), (l.l = !0), l.exports;
  }
  (c.m = e),
    (c.c = i),
    (c.d = function(e, t, l) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: l });
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
      var l = Object.create(null);
      if (
        (c.r(l),
        Object.defineProperty(l, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var i in e)
          c.d(
            l,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
          );
      return l;
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
  var s = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    o = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var r = 0; r < s.length; r++) t(s[r]);
  var d = o;
  return n.push([199, 0]), l();
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
  199: function(e, t, l) {
    'use strict';
    l.r(t),
      l.d(t, 'getElement', function() {
        return E;
      }),
      l.d(t, 'getContents', function() {
        return f;
      });
    var i = l(0),
      a = l(4),
      n = l(1),
      c = l(23),
      s = l(11),
      o = l(15),
      r = l(35),
      d = (l(81), a.c.a),
      u = a.c.code,
      m = a.c.em,
      b = a.c.h2,
      h = a.c.h3,
      p = a.c.h4,
      j = a.c.li,
      g = a.c.p,
      O = a.c.ul,
      E = function() {
        return Object(i.createElement)(
          a.b,
          {},
          Object(i.createElement)(
            'div',
            { className: 'doc lead' },
            'A dueling-picklist is used to move options between two lists and is often referred to as a multi-select. Sometimes, the list options can then be re-ordered, depending on the use case.'
          ),
          Object(i.createElement)(
            n.a,
            { exampleOnly: !0 },
            Object(i.createElement)(r.j, { dataSet: r.m, noReorder: !0 })
          ),
          b({ id: 'About-Dueling-Picklist' }, 'About Dueling-Picklist'),
          h({ id: 'Accessibility' }, 'Accessibility'),
          g(
            {},
            'This component is essentially 2 ARIA listboxes side by side, so we follow the ',
            d(
              { href: 'https://www.w3.org/TR/wai-aria-practices/#Listbox' },
              'ARIA practices guide'
            ),
            ' to help implement their interaction in an accessible way. Some additional details, supplementary to the ARIA guide include:'
          ),
          p({ id: 'Markup' }, 'Markup'),
          O(
            {},
            j(
              {},
              u({}, 'aria-multiselectable="true"'),
              ' should be set on each listbox'
            ),
            j(
              {},
              u({}, 'aria-selected'),
              ' should be placed on each ',
              u({}, 'role="option"'),
              ', and set to ',
              u({}, 'false'),
              ' by default'
            ),
            j(
              {},
              u({}, 'aria-labelledby'),
              ' is used to identify the list to the user and should point to the list label'
            ),
            j(
              {},
              u({}, 'aria-describedby'),
              ' is used to provide operation instructions for the Drag and Drop interaction'
            ),
            j(
              {},
              u({}, 'tabindex'),
              ' should be set to "0" when an item is selected and "-1" otherwise'
            )
          ),
          p({ id: 'Focus-Management' }, 'Focus Management'),
          O(
            {},
            j(
              {},
              'Initially, nothing should be selected and the first item in each list should have ',
              u({}, 'tabindex="0"')
            ),
            j({}, 'When an item is focused, it becomes selected'),
            j(
              {},
              'When focus leaves the list, the last selected item remains selected and focusable. When focus returns to the list focus is placed on the last selected item.'
            ),
            j(
              {},
              'When moving items:',
              O(
                {},
                j(
                  {},
                  'With the move button: the items are unselected and added to the target list. The focus should remain on the move button.'
                ),
                j(
                  {},
                  'With a keyboard shortcut: focus remains on the item, but in the target list. Since the item is focused, it is also selected.'
                ),
                j(
                  {},
                  'If there are already selected items in the target list, they stay selected and the new items are added below them.'
                )
              )
            )
          ),
          p({ id: 'Keyboard-Interactions' }, 'Keyboard Interactions'),
          O(
            {},
            j(
              {},
              'Each list has a single focusable option inside. There is only ever one focusable option per list and it is expected that a user will use their arrow keys, and some modifier keys, to perform all actions.'
            ),
            j(
              {},
              'Because we support drag and drop re-ordering within a list, we implement the second multi-select keyboard model.',
              O(
                {},
                j(
                  {},
                  u({}, 'up'),
                  ' and ',
                  u({}, 'down'),
                  ' arrows move focus ',
                  m({}, 'and'),
                  ' selection, with ',
                  u({}, 'aria-selected="true"'),
                  '. Any previously selected items are deselected.'
                ),
                j(
                  {},
                  u({}, 'shift + up'),
                  ' and ',
                  u({}, 'shift + down'),
                  ' move focus and creates addition selections'
                ),
                j(
                  {},
                  u({}, 'ctrl + down'),
                  ' or ',
                  u({}, 'ctrl + up'),
                  ' moves focus but selection remains where it is'
                ),
                j(
                  {},
                  u({}, 'ctrl + space'),
                  ' toggles selection on the focused option, in addition to previous selections'
                ),
                j({}, u({}, 'ctrl + a'), ' selects all options in the list'),
                j(
                  {},
                  u({}, 'cmd/ctrl + right'),
                  ' and ',
                  u({}, 'cmd/ctrl + left'),
                  ' Moves selected items between lists'
                ),
                j(
                  {},
                  u({}, 'space'),
                  ' toggles "Drag and Drop" mode. When in "Drag and Drop" mode:',
                  O(
                    {},
                    j(
                      {},
                      u({}, 'up'),
                      ' and ',
                      u({}, 'down'),
                      ' arrows move the selected items ',
                      m({}, 'within'),
                      ' the current list'
                    )
                  )
                )
              )
            )
          ),
          b({ id: 'Base' }, 'Base'),
          Object(i.createElement)(
            s.a,
            { title: 'Dueling Picklist with Reorder' },
            Object(i.createElement)(r.j, { dataSet: r.b })
          ),
          b({ id: 'Group-Label' }, 'Group Label'),
          g(
            {},
            'A Dueling Picklist should have a group label, similar to using a ',
            u({}, 'fieldset'),
            ' and ',
            u({}, 'legend'),
            ' on grouped form controls. To achieve this, wrap the Dueling Picklist in an ',
            u({}, 'slds-form-element'),
            ' and add a ',
            u({}, 'div'),
            ' with the same class names that are applied to a ',
            u({}, 'legend'),
            ' element in a fieldset, ',
            u({}, 'slds-form-element__label slds-form-element__legend'),
            '.'
          ),
          Object(i.createElement)(
            o.a,
            { header: 'Labeling the group', type: 'a11y' },
            Object(i.createElement)(
              'p',
              null,
              'It is important that the ',
              Object(i.createElement)('code', null, 'slds-form-element'),
              ' ',
              Object(i.createElement)('code', null, '<div>'),
              ' has the ',
              Object(i.createElement)('code', null, 'role="group"'),
              ' attribute applied, along with ',
              Object(i.createElement)('code', null, 'aria-labelledby'),
              ', whose value is the ID of the visible group label.'
            )
          ),
          Object(i.createElement)(
            s.a,
            { title: 'Dueling Picklist With Group Label' },
            Object(i.createElement)(
              n.a,
              null,
              Object(i.createElement)(r.j, { dataSet: r.b })
            )
          ),
          b({ id: 'Responsive' }, 'Responsive'),
          g(
            {},
            'To make the dueling picklist responsive or use it within narrow regions, apply the class ',
            u({}, 'slds-dueling-picklist__column_responsive'),
            ' to the ',
            u({}, '<div>'),
            's with class ',
            u({}, 'slds-dueling-picklist__column'),
            ' that contain options (not the columns that only contain buttons). Any items longer than the space available will truncate with ellipses.'
          ),
          Object(i.createElement)(
            s.a,
            { title: 'Dueling Picklist Responsive' },
            Object(i.createElement)(
              n.a,
              null,
              Object(i.createElement)(r.j, {
                dataSet: r.a,
                noReorder: !0,
                isResponsive: !0
              })
            )
          ),
          Object(i.createElement)(
            o.a,
            { header: 'Adjusting Height', type: 'note' },
            Object(i.createElement)(
              'p',
              null,
              'To adjust the height of the listboxes, set the height using an inline style on _both_ of the ',
              Object(i.createElement)('code', null, '<div>'),
              's with class ',
              Object(i.createElement)(
                'code',
                null,
                'slds-dueling-picklist__column'
              ),
              '. If you are setting it based on a maximum number of items being shown before scrolling, you can set ',
              Object(i.createElement)(
                'code',
                null,
                'height = (2.25rem * numItems) + 1rem'
              ),
              '.'
            )
          ),
          Object(i.createElement)(
            c.a,
            { toggleCode: !1 },
            Object(i.createElement)(
              'div',
              { className: 'slds-dueling-list' },
              Object(i.createElement)(
                'div',
                { className: 'slds-dueling-list__column' },
                Object(i.createElement)(
                  'span',
                  { className: 'slds-form-element__label', id: 'label-1' },
                  'Available Languages'
                ),
                Object(i.createElement)(
                  'div',
                  {
                    className: 'slds-dueling-list__options',
                    style: { height: '10rem' }
                  },
                  '...'
                )
              ),
              Object(i.createElement)(
                'div',
                { className: 'slds-dueling-list__column' },
                '...'
              ),
              Object(i.createElement)(
                'div',
                { className: 'slds-dueling-list__column' },
                Object(i.createElement)(
                  'span',
                  { className: 'slds-form-element__label', id: 'label-2' },
                  'Selected Languages'
                ),
                Object(i.createElement)(
                  'div',
                  {
                    className: 'slds-dueling-list__options',
                    style: { height: '10rem' }
                  },
                  '...'
                )
              )
            )
          ),
          b({ id: 'Edit-Mode' }, 'Edit Mode'),
          g(
            {},
            'If the user needs to select multiple options for a field, like a list of languages supported, then use a dueling picklist without the re-order arrows on the right.'
          ),
          Object(i.createElement)(
            o.a,
            { header: 'Helpful Assistive Text', type: 'a11y' },
            Object(i.createElement)(
              'p',
              null,
              'The assistive text content in the ',
              Object(i.createElement)('code', null, 'option-drag-label'),
              ' ',
              Object(i.createElement)('code', null, '<div>'),
              ' should provide clear instructions on how to drag and drop with a keyboard.'
            )
          ),
          Object(i.createElement)(
            s.a,
            { title: 'Dueling Picklist' },
            Object(i.createElement)(
              n.a,
              null,
              Object(i.createElement)(r.j, { dataSet: r.a, noReorder: !0 })
            )
          ),
          h({ id: 'Selected-Item' }, 'Selected Item'),
          Object(i.createElement)(
            o.a,
            { header: 'Aria Selected', type: 'a11y' },
            Object(i.createElement)(
              'p',
              null,
              Object(i.createElement)('code', null, 'aria-selected'),
              ' should be placed on each',
              ' ',
              Object(i.createElement)('code', null, 'role="option"'),
              ', and set to',
              ' ',
              Object(i.createElement)('code', null, 'true'),
              ' when the item is selected.'
            )
          ),
          Object(i.createElement)(
            s.a,
            { title: 'Dueling Picklist with Item Selected' },
            Object(i.createElement)(
              n.a,
              null,
              Object(i.createElement)(r.j, { dataSet: r.m, noReorder: !0 })
            )
          ),
          h({ id: 'Multiple-Selected-Items' }, 'Multiple Selected Items'),
          Object(i.createElement)(
            s.a,
            { title: 'Dueling Picklist with Multiple Items Selected' },
            Object(i.createElement)(
              n.a,
              null,
              Object(i.createElement)(r.j, { dataSet: r.l, noReorder: !0 })
            )
          ),
          h({ id: 'Dropped-Items' }, 'Dropped Items'),
          Object(i.createElement)(
            o.a,
            { type: 'a11y', header: 'Aria Live' },
            Object(i.createElement)(
              'p',
              null,
              'The ',
              Object(i.createElement)('code', null, 'drag-live-region'),
              ' ',
              Object(i.createElement)('code', null, '<div>'),
              ' with ',
              Object(i.createElement)('code', null, 'aria-live="assertive"'),
              ' should update as items are moved to provide context about the state and location of the items.'
            )
          ),
          Object(i.createElement)(
            c.a,
            { toggleCode: !1 },
            Object(i.createElement)(
              'div',
              { className: 'slds-dueling-list' },
              Object(i.createElement)(
                'div',
                {
                  className: 'slds-assistive-text',
                  id: 'drag-live-region',
                  'aria-live': 'assertive'
                },
                'Arabic and German: Moved to Selected Languages.'
              )
            )
          ),
          Object(i.createElement)(
            s.a,
            { title: 'Dueling Picklist with Items Dropped' },
            Object(i.createElement)(
              n.a,
              null,
              Object(i.createElement)(r.j, { dataSet: r.e, noReorder: !0 })
            )
          ),
          h({ id: 'Locked-Items' }, 'Locked Items'),
          g(
            {},
            'If items are not able to be removed or reordered from the selected list, a lock icon appears next to the item name.'
          ),
          Object(i.createElement)(
            o.a,
            { type: 'a11y', header: 'Aria Disabled and Assistive Text' },
            Object(i.createElement)(
              'p',
              null,
              'For each locked item, ',
              Object(i.createElement)('code', null, 'aria-disabled="true"'),
              ' must be applied to ',
              Object(i.createElement)('code', null, '.slds-listbox__option'),
              ' and assistive text (',
              Object(i.createElement)('code', null, '.slds-assistive-text'),
              ') must be added to',
              ' ',
              Object(i.createElement)('code', null, '.slds-icon_container'),
              '.'
            )
          ),
          Object(i.createElement)(
            s.a,
            { title: 'Dueling Picklist with a Locked Item' },
            Object(i.createElement)(
              n.a,
              null,
              Object(i.createElement)(r.j, { dataSet: r.h, noReorder: !0 })
            )
          ),
          h({ id: 'With-Reordering' }, 'With Reordering'),
          g(
            {},
            'If the order of the selected options matters, include the vertical arrows to the right. This allows the user to reorder the second listbox of options.'
          ),
          Object(i.createElement)(
            s.a,
            { title: 'Dueling Picklist with Reorder Active' },
            Object(i.createElement)(
              n.a,
              null,
              Object(i.createElement)(r.j, { dataSet: r.b })
            )
          ),
          g(
            {},
            'The following examples show the process of selecting an item, moving it within a list, and dropping it in a final position.'
          ),
          Object(i.createElement)(
            o.a,
            { type: 'a11y', header: 'Aria Live' },
            Object(i.createElement)(
              'p',
              null,
              'Pay attention to the ',
              Object(i.createElement)('code', null, 'drag-live-region'),
              ' ',
              Object(i.createElement)('code', null, '<div>'),
              ' with',
              Object(i.createElement)('code', null, 'aria-live="assertive"'),
              '. This should update as items are moved to provide context about the state and location of the items at all times.'
            )
          ),
          p({ id: 'Item-Selected' }, 'Item Selected'),
          Object(i.createElement)(
            s.a,
            { title: 'Dueling Picklist with Reorder Active Item Selected' },
            Object(i.createElement)(
              n.a,
              null,
              Object(i.createElement)(r.j, { dataSet: r.n })
            )
          ),
          p({ id: 'Item-Grabbed' }, 'Item Grabbed'),
          g({}, 'Within a list, users are able to drag and drop an item.'),
          Object(i.createElement)(
            s.a,
            { title: 'Dueling Picklist with Reorder Active Item Grabbed' },
            Object(i.createElement)(
              n.a,
              null,
              Object(i.createElement)(r.j, { dataSet: r.g })
            )
          ),
          p({ id: 'Item-Moved-Within-a-List' }, 'Item Moved Within a List'),
          Object(i.createElement)(
            s.a,
            {
              title:
                'Dueling Picklist with Reorder Active Item Moved within List'
            },
            Object(i.createElement)(
              n.a,
              null,
              Object(i.createElement)(r.j, { dataSet: r.i })
            )
          ),
          p({ id: 'Item-Dropped-in-a-List' }, 'Item Dropped in a List'),
          Object(i.createElement)(
            s.a,
            { title: 'Dueling Picklist with Reorder Active Item Dropped' },
            Object(i.createElement)(
              n.a,
              null,
              Object(i.createElement)(r.j, { dataSet: r.f })
            )
          ),
          h({ id: 'Disabled' }, 'Disabled'),
          g(
            {},
            'If the user is not able to interact with the dueling picklist, then it should be marked as disabled.'
          ),
          Object(i.createElement)(
            o.a,
            { type: 'a11y', header: 'Aria Disabled' },
            Object(i.createElement)(
              'p',
              null,
              'In disabled mode, both list boxes',
              ' ',
              Object(i.createElement)('code', null, 'ul[role=listbox]'),
              ' should receive',
              ' ',
              Object(i.createElement)('code', null, 'aria-disabled="true"'),
              ', and all directional buttons should receive the ',
              Object(i.createElement)('code', null, 'disabled'),
              ' attribute.'
            )
          ),
          Object(i.createElement)(
            o.a,
            { type: 'note', header: 'Utility Class' },
            Object(i.createElement)(
              'p',
              null,
              'The class ',
              Object(i.createElement)('code', null, 'slds-is-disabled'),
              ' should also be applied to the divs with the class',
              ' ',
              Object(i.createElement)(
                'code',
                null,
                'slds-dueling-list_options'
              ),
              '.'
            )
          ),
          Object(i.createElement)(
            s.a,
            { title: 'Dueling Picklist Disabled' },
            Object(i.createElement)(
              n.a,
              null,
              Object(i.createElement)(r.j, { dataSet: r.d, disabled: !0 })
            )
          ),
          h({ id: 'Required' }, 'Required'),
          Object(i.createElement)(
            s.a,
            { title: 'Dueling Picklist with Required Indicator' },
            Object(i.createElement)(
              n.a,
              null,
              Object(i.createElement)(r.j, { dataSet: r.b, isRequired: !0 })
            )
          ),
          h({ id: 'With-Tooltip' }, 'With Tooltip'),
          g(
            {},
            'If some contextual information regarding the dueling picklist is needed, add a tooltip next to the group label.'
          ),
          Object(i.createElement)(
            s.a,
            { title: 'Dueling Picklist with Tooltip' },
            Object(i.createElement)(
              n.a,
              null,
              Object(i.createElement)(
                r.c,
                null,
                Object(i.createElement)(r.j, {
                  dataSet: r.b,
                  hasTooltip: !0,
                  showTooltip: !0
                })
              )
            )
          ),
          h({ id: 'Required-With-Tooltip' }, 'Required With Tooltip'),
          Object(i.createElement)(
            s.a,
            { title: 'Dueling Picklist with Required Indicator and Tooltip' },
            Object(i.createElement)(
              n.a,
              null,
              Object(i.createElement)(
                r.c,
                null,
                Object(i.createElement)(r.j, {
                  dataSet: r.b,
                  isRequired: !0,
                  hasTooltip: !0,
                  showTooltip: !0
                })
              )
            )
          ),
          b({ id: 'View-Mode' }, 'View Mode'),
          g(
            {},
            'When the user is done selecting options, or is in view mode of the field, they are presented with a comma separated list.'
          ),
          Object(i.createElement)(
            s.a,
            { title: 'Dueling Picklist in View Mode' },
            Object(i.createElement)(
              n.a,
              null,
              Object(i.createElement)(r.k, null)
            )
          )
        );
      },
      f = function() {
        return Object(a.a)(E());
      };
  }
});
