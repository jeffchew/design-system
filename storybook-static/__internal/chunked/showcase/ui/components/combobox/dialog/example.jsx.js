var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/combobox/dialog/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var l, i, s = t[0], r = t[1], c = t[2], d = 0, p = [];
      d < s.length;
      d++
    )
      (i = s[d]),
        Object.prototype.hasOwnProperty.call(a, i) && a[i] && p.push(a[i][0]),
        (a[i] = 0);
    for (l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l]);
    for (u && u(t); p.length; ) p.shift()();
    return o.push.apply(o, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], l = !0, s = 1; s < n.length; s++) {
        var r = n[s];
        0 !== a[r] && (l = !1);
      }
      l && (o.splice(t--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var l = {},
    a = {
      48: 0,
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
    o = [];
  function i(t) {
    if (l[t]) return l[t].exports;
    var n = (l[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = e),
    (i.c = l),
    (i.d = function(e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
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
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var l in e)
          i.d(
            n,
            l,
            function(t) {
              return e[t];
            }.bind(null, l)
          );
      return n;
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
  var s = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    r = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var c = 0; c < s.length; c++) t(s[c]);
  var u = r;
  return o.push([166, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  166: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'ComboboxWithDialog', function() {
        return p;
      }),
      n.d(t, 'states', function() {
        return m;
      }),
      n.d(t, 'examples', function() {
        return b;
      });
    var l = n(0),
      a = n.n(l),
      o = n(19),
      i = n(9),
      s = n(6),
      r = n(27),
      c = n(13),
      u = n(5),
      d = n(24),
      p = function() {
        var e = s.c.uniqueId('popover-id-');
        return a.a.createElement(o.b, {
          id: s.c.uniqueId('combobox-id-'),
          'aria-controls': e,
          label: 'Languages',
          readonly: !0,
          inputIconPosition: 'right',
          rightInputIcon: a.a.createElement(i.UtilityIcon, {
            symbol: 'down',
            className: 'slds-icon slds-icon_x-small slds-icon-text-default',
            containerClassName: 'slds-input__icon slds-input__icon_right',
            assistiveText: !1,
            title: !1
          }),
          resultsType: 'dialog',
          results: a.a.createElement(
            r.Popover,
            {
              popoverId: e,
              title: 'Language Options',
              isFullWidth: !0,
              isHidden: !0,
              hasFormFooter: !0,
              size: 'small',
              footer: a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(c.Button, null),
                a.a.createElement(c.Button, null)
              )
            },
            a.a.createElement(
              'div',
              null,
              'Any content can go here in this Dialog'
            )
          )
        });
      };
    t.default = a.a.createElement(p, null);
    var m = [
        {
          id: 'open',
          label: 'Open',
          element: a.a.createElement(o.b, {
            id: s.c.uniqueId('combobox-id-'),
            'aria-controls': 'popover-unique-id-01',
            label: 'Languages',
            readonly: !0,
            isOpen: !0,
            inputIconPosition: 'right',
            rightInputIcon: a.a.createElement(i.UtilityIcon, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            resultsType: 'dialog',
            results: a.a.createElement(
              r.Popover,
              {
                popoverId: 'popover-unique-id-01',
                title: 'Language Options',
                isFullWidth: !0,
                hasFormFooter: !0,
                size: 'small',
                footer: a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(c.Button, { isNeutral: !0 }, 'Cancel'),
                  a.a.createElement(c.Button, { isBrand: !0 }, 'Done')
                )
              },
              a.a.createElement(
                'div',
                null,
                'Any content can go here in this Dialog'
              )
            )
          })
        }
      ],
      b = [
        {
          id: 'with-checkbox-group',
          label: 'With Checkbox Group',
          element: a.a.createElement(o.b, {
            id: s.c.uniqueId('combobox-id-'),
            'aria-controls': 'popover-unique-id-02',
            label: 'Languages',
            readonly: !0,
            isOpen: !0,
            inputIconPosition: 'right',
            rightInputIcon: a.a.createElement(i.UtilityIcon, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            resultsType: 'dialog',
            results: a.a.createElement(
              r.Popover,
              {
                popoverId: 'popover-unique-id-02',
                title: 'Language Options',
                isFullWidth: !0,
                hasFormFooter: !0,
                size: 'small',
                footer: a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(c.Button, { isNeutral: !0 }, 'Cancel'),
                  a.a.createElement(c.Button, { isBrand: !0 }, 'Done')
                )
              },
              a.a.createElement(
                u.a,
                { label: 'Select up to 2' },
                a.a.createElement(d.Checkbox, { label: 'English' }),
                a.a.createElement(d.Checkbox, { label: 'German' }),
                a.a.createElement(d.Checkbox, {
                  label: 'Tobagonian Creole English'
                }),
                a.a.createElement(d.Checkbox, { label: 'Spanish' })
              )
            )
          })
        },
        {
          id: 'selecting-options',
          label: 'Selecting Options',
          element: a.a.createElement(o.b, {
            id: s.c.uniqueId('combobox-id-'),
            'aria-controls': 'popover-unique-id-03',
            label: 'Languages',
            readonly: !0,
            isOpen: !0,
            inputIconPosition: 'right',
            rightInputIcon: a.a.createElement(i.UtilityIcon, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            resultsType: 'dialog',
            results: a.a.createElement(
              r.Popover,
              {
                popoverId: 'popover-unique-id-03',
                title: 'Language Options',
                isFullWidth: !0,
                hasFormFooter: !0,
                size: 'small',
                footer: a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(c.Button, { isNeutral: !0 }, 'Cancel'),
                  a.a.createElement(c.Button, { isBrand: !0 }, 'Done')
                )
              },
              a.a.createElement(
                u.a,
                { label: 'Select up to 2' },
                a.a.createElement(d.Checkbox, { label: 'English' }),
                a.a.createElement(d.Checkbox, { label: 'German', checked: !0 }),
                a.a.createElement(d.Checkbox, {
                  label: 'Tobagonian Creole English',
                  checked: !0
                }),
                a.a.createElement(d.Checkbox, { label: 'Spanish' })
              )
            )
          })
        },
        {
          id: 'open-one-option-selected',
          label: 'Open - One Option Selected ',
          element: a.a.createElement(o.b, {
            id: s.c.uniqueId('combobox-id-'),
            'aria-controls': 'popover-unique-id-04',
            label: 'Languages',
            readonly: !0,
            isOpen: !0,
            value: 'German',
            inputIconPosition: 'right',
            rightInputIcon: a.a.createElement(i.UtilityIcon, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            resultsType: 'dialog',
            results: a.a.createElement(
              r.Popover,
              {
                popoverId: 'popover-unique-id-04',
                title: 'Language Options',
                isFullWidth: !0,
                hasFormFooter: !0,
                size: 'small',
                footer: a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(c.Button, { isNeutral: !0 }, 'Cancel'),
                  a.a.createElement(c.Button, { isBrand: !0 }, 'Done')
                )
              },
              a.a.createElement(
                u.a,
                { label: 'Select up to 2' },
                a.a.createElement(d.Checkbox, { label: 'English' }),
                a.a.createElement(d.Checkbox, { label: 'German', checked: !0 }),
                a.a.createElement(d.Checkbox, {
                  label: 'Tobagonian Creole English'
                }),
                a.a.createElement(d.Checkbox, { label: 'Spanish' })
              )
            )
          })
        },
        {
          id: 'closed-one-option-selected',
          label: 'Closed - One Option Selected',
          element: a.a.createElement(o.b, {
            id: s.c.uniqueId('combobox-id-'),
            'aria-controls': 'popover-unique-id-05',
            label: 'Languages',
            readonly: !0,
            value: 'German',
            inputIconPosition: 'right',
            rightInputIcon: a.a.createElement(i.UtilityIcon, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            resultsType: 'dialog',
            results: a.a.createElement(
              r.Popover,
              {
                popoverId: 'popover-unique-id-05',
                title: 'Language Options',
                isHidden: !0,
                isFullWidth: !0,
                hasFormFooter: !0,
                size: 'small',
                footer: a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(c.Button, { isNeutral: !0 }, 'Cancel'),
                  a.a.createElement(c.Button, { isBrand: !0 }, 'Done')
                )
              },
              a.a.createElement(
                u.a,
                { label: 'Select up to 2' },
                a.a.createElement(d.Checkbox, { label: 'English' }),
                a.a.createElement(d.Checkbox, { label: 'German', checked: !0 }),
                a.a.createElement(d.Checkbox, {
                  label: 'Tobagonian Creole English'
                }),
                a.a.createElement(d.Checkbox, { label: 'Spanish' })
              )
            )
          })
        },
        {
          id: 'open-two-or-more-options-selected',
          label: 'Open - Two or More Options Selected',
          element: a.a.createElement(o.b, {
            id: s.c.uniqueId('combobox-id-'),
            'aria-controls': 'popover-unique-id-06',
            label: 'Languages',
            readonly: !0,
            isOpen: !0,
            value: '2 options selected',
            inputIconPosition: 'right',
            rightInputIcon: a.a.createElement(i.UtilityIcon, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            resultsType: 'dialog',
            results: a.a.createElement(
              r.Popover,
              {
                popoverId: 'popover-unique-id-06',
                title: 'Language Options',
                isFullWidth: !0,
                hasFormFooter: !0,
                size: 'small',
                footer: a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(c.Button, { isNeutral: !0 }, 'Cancel'),
                  a.a.createElement(c.Button, { isBrand: !0 }, 'Done')
                )
              },
              a.a.createElement(
                u.a,
                { label: 'Select up to 2' },
                a.a.createElement(d.Checkbox, { label: 'English' }),
                a.a.createElement(d.Checkbox, { label: 'German', checked: !0 }),
                a.a.createElement(d.Checkbox, {
                  label: 'Tobagonian Creole English',
                  checked: !0
                }),
                a.a.createElement(d.Checkbox, { label: 'Spanish' })
              )
            )
          })
        },
        {
          id: 'closed-two-or-more-options-selected',
          label: 'Closed - Two or More Options Selected',
          element: a.a.createElement(o.b, {
            id: s.c.uniqueId('combobox-id-'),
            'aria-controls': 'popover-unique-id-07',
            label: 'Languages',
            readonly: !0,
            value: '2 options selected',
            inputIconPosition: 'right',
            rightInputIcon: a.a.createElement(i.UtilityIcon, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            resultsType: 'dialog',
            results: a.a.createElement(
              r.Popover,
              {
                popoverId: 'popover-unique-id-07',
                title: 'Language Options',
                isHidden: !0,
                isFullWidth: !0,
                hasFormFooter: !0,
                size: 'small',
                footer: a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(c.Button, { isNeutral: !0 }, 'Cancel'),
                  a.a.createElement(c.Button, { isBrand: !0 }, 'Done')
                )
              },
              a.a.createElement(
                u.a,
                { label: 'Select up to 2' },
                a.a.createElement(d.Checkbox, { label: 'English' }),
                a.a.createElement(d.Checkbox, { label: 'German', checked: !0 }),
                a.a.createElement(d.Checkbox, {
                  label: 'Tobagonian Creole English',
                  checked: !0
                }),
                a.a.createElement(d.Checkbox, { label: 'Spanish' })
              )
            )
          })
        }
      ];
  }
});
