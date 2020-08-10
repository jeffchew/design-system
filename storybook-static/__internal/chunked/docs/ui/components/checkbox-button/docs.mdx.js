var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/checkbox-button/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, o, l = t[0], s = t[1], r = t[2], b = 0, h = [];
      b < l.length;
      b++
    )
      (o = l[b]),
        Object.prototype.hasOwnProperty.call(i, o) && i[o] && h.push(i[o][0]),
        (i[o] = 0);
    for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
    for (d && d(t); h.length; ) h.shift()();
    return a.push.apply(a, r || []), c();
  }
  function c() {
    for (var e, t = 0; t < a.length; t++) {
      for (var c = a[t], n = !0, l = 1; l < c.length; l++) {
        var s = c[l];
        0 !== i[s] && (n = !1);
      }
      n && (a.splice(t--, 1), (e = o((o.s = c[0]))));
    }
    return e;
  }
  var n = {},
    i = { 18: 0 },
    a = [];
  function o(t) {
    if (n[t]) return n[t].exports;
    var c = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(c.exports, c, c.exports, o), (c.l = !0), c.exports;
  }
  (o.m = e),
    (o.c = n),
    (o.d = function(e, t, c) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: c });
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
      var c = Object.create(null);
      if (
        (o.r(c),
        Object.defineProperty(c, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          o.d(
            c,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return c;
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
  var l = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    s = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var r = 0; r < l.length; r++) t(l[r]);
  var d = s;
  return a.push([280, 0]), c();
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
  280: function(e, t, c) {
    'use strict';
    c.r(t),
      c.d(t, 'getElement', function() {
        return E;
      }),
      c.d(t, 'getContents', function() {
        return S;
      });
    var n = c(0),
      i = c.n(n),
      a = c(4),
      o = c(60),
      l = i.a.createElement(o.b, null),
      s = [
        {
          id: 'checkbox-button-checked',
          label: 'Checked',
          element: i.a.createElement(o.b, { isChecked: !0 })
        },
        {
          id: 'checkbox-button-disabled',
          label: 'Disabled',
          element: i.a.createElement(o.b, { isDisabled: !0 })
        },
        {
          id: 'checkbox-button-checked-disabled',
          label: 'Checked and Disabled',
          element: i.a.createElement(o.b, { isChecked: !0, isDisabled: !0 })
        },
        {
          id: 'checkbox-add-button-checked',
          label: 'Deprecated - Checked',
          element: i.a.createElement(o.a, { checked: !0 })
        },
        {
          id: 'checkbox-add-button-disabled',
          label: 'Deprecated - Disabled',
          element: i.a.createElement(o.a, { disabled: !0 })
        },
        {
          id: 'checkbox-add-button-checked-and-disabled',
          label: 'Deprecated - Checked and Disabled',
          element: i.a.createElement(o.a, { checked: !0, disabled: !0 })
        }
      ],
      r = [
        {
          id: 'checkbox-button-icon-symbol',
          label: 'Different Icon',
          element: i.a.createElement(o.b, {
            iconUnchecked: 'recycle_bin_empty',
            iconChecked: 'recycle_bin_full'
          })
        },
        {
          id: 'checkbox-button-checked-icon-symbol',
          label: 'Different Icon - Checked',
          element: i.a.createElement(o.b, {
            iconUnchecked: 'recycle_bin_empty',
            iconChecked: 'recycle_bin_full',
            isChecked: !0
          })
        },
        {
          id: 'checkbox-button-disabled-icon-symbol',
          label: 'Different Icon - Disabled',
          element: i.a.createElement(o.b, {
            iconUnchecked: 'recycle_bin_empty',
            isDisabled: !0
          })
        },
        {
          id: 'checkbox-button-checked-disabled-icon-symbol',
          label: 'Different Icon - Checked and Disabled',
          element: i.a.createElement(o.b, {
            iconChecked: 'recycle_bin_full',
            isChecked: !0,
            isDisabled: !0
          })
        }
      ],
      d = c(1),
      b = c(2),
      h = c(33),
      u = a.c.a,
      f = a.c.code,
      p = a.c.h2,
      m = a.c.h3,
      k = a.c.li,
      y = a.c.p,
      x = a.c.table,
      _ = a.c.tbody,
      D = a.c.td,
      g = a.c.th,
      v = a.c.thead,
      O = a.c.tr,
      j = a.c.ul,
      E = function() {
        return Object(n.createElement)(
          a.b,
          {},
          Object(n.createElement)(
            'div',
            { className: 'doc lead' },
            'A styled checkable input that communicates if an option is being added to a group'
          ),
          Object(n.createElement)(d.a, { exampleOnly: !0 }, l),
          p({ id: 'About-Checkbox-Button' }, 'About Checkbox Button'),
          y(
            {},
            'The checkbox button is similar to a checkbox in that it presents a user with a\nbinary choice for an item. However, the only action a user can take is to\nadd (or remove) an entity. When a user clicks the checkbox button, the entity is\nstored, similar to an ‘add to cart’ experience, until the user saves changes.'
          ),
          y(
            {},
            'The checkbox button is useful for increasing clarity. Since the button only adds\nor removes entities, the user knows the action they will prompt upon click.\nThe checkbox button also provides a clear visual affordance and a large target to take this action.'
          ),
          y({}, 'Use the add button if the component you’re building:'),
          j(
            {},
            k(
              {},
              'Exists without other multi-select elements (i.e. checkboxes)'
            ),
            k({}, 'Allows users to select multiple entities'),
            k({}, 'Semantically fits the add/remove model')
          ),
          p(
            { id: 'Structure-and-Implementation' },
            'Structure and Implementation'
          ),
          y(
            {},
            'The checkbox ',
            f({}, '<input>'),
            ' is visually hidden with ',
            f({}, '.slds-assistive-text'),
            ' and a faux checkbox is created using the ',
            u({ href: '/components/icons' }, 'icon blueprint'),
            ' which allows the display of an icon instead of the standard checkbox.'
          ),
          y(
            {},
            'Click and tap events are captured by a ',
            f({}, '<label>'),
            ' that encases the entire blueprint. The ',
            f({}, 'for'),
            ' attribute of your ',
            f({}, '<label>'),
            ' must match the ',
            f({}, 'id'),
            ' attribute of your ',
            f({}, '<input>'),
            '.'
          ),
          y(
            {},
            'The states of the checkbox button are styled with the following classes:'
          ),
          x(
            {},
            v({}, O({}, g({}, 'Class'), g({}, 'State'), g({}, 'Description'))),
            _(
              {},
              O(
                {},
                D({}, f({}, '.slds-checkbox-button_is-checked')),
                D({}, 'checked'),
                D(
                  {},
                  'The checked state when the checkbox button has been selected'
                )
              ),
              O(
                {},
                D({}, f({}, '.slds-checkbox-button_is-disabled')),
                D({}, 'disabled'),
                D(
                  {},
                  'The disabled state when the checkbox button has been disabled'
                )
              ),
              O(
                {},
                D({}, f({}, '.slds-checkbox-button_is-focused')),
                D({}, 'focused'),
                D(
                  {},
                  'The focused state when the checkbox button has focus; important for accessibility'
                )
              )
            )
          ),
          y(
            {},
            'When implementing this blueprint, monitor the state of the checkbox ',
            f({}, '<input>'),
            ' and apply the appropriate state class listed in the above chart based on the current state of the checkbox ',
            f({}, '<input>'),
            '.'
          ),
          y(
            {},
            'It is possible to change the icon used within the checkbox button, see ',
            u({ href: '#different-icon' }, 'Different Icons'),
            ' for more details.'
          ),
          m({ id: 'Mobile' }, 'Mobile'),
          Object(n.createElement)(h.a, {
            patternSpecificText:
              'checkbox buttons will have an increased size to accommodate tapping with a finger instead of the more precise mouse cursor'
          }),
          Object(n.createElement)(d.a, { frameOnly: !0 }, l),
          p({ id: 'Base' }, 'Base'),
          Object(n.createElement)(d.a, null, l),
          p({ id: 'States' }, 'States'),
          m({ id: 'Checked' }, 'Checked'),
          Object(n.createElement)(
            d.a,
            null,
            Object(b.e)(s, 'checkbox-button-checked')
          ),
          m({ id: 'Disabled' }, 'Disabled'),
          Object(n.createElement)(
            d.a,
            null,
            Object(b.e)(s, 'checkbox-button-disabled')
          ),
          m({ id: 'Checked-and-Disabled' }, 'Checked and Disabled'),
          Object(n.createElement)(
            d.a,
            null,
            Object(b.e)(s, 'checkbox-button-checked-disabled')
          ),
          p({ id: 'Examples' }, 'Examples'),
          m({ id: 'Different-Icon' }, 'Different Icon'),
          y(
            {},
            'You may change the utility icon used by the checkbox button depending on the action you are communicating. Reference the ',
            u({ href: '/icons/#utility' }, 'utility icon listing'),
            ' for all available options.'
          ),
          y(
            {},
            'This example is using the ',
            f({}, 'recycle_bin_empty'),
            ' utility icon as its base state and the ',
            f({}, 'recycle_bin_full'),
            ' utility icon as its checked state.'
          ),
          Object(n.createElement)(
            d.a,
            null,
            Object(b.e)(r, 'checkbox-button-icon-symbol')
          ),
          Object(n.createElement)(
            d.a,
            null,
            Object(b.e)(r, 'checkbox-button-checked-icon-symbol')
          )
        );
      },
      S = function() {
        return Object(a.a)(E());
      };
  }
});
