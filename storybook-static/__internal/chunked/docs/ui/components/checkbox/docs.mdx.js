var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/checkbox/docs.mdx.js'] = (function(
  e
) {
  function t(t) {
    for (
      var i, n, c = t[0], o = t[1], s = t[2], u = 0, h = [];
      u < c.length;
      u++
    )
      (n = c[u]),
        Object.prototype.hasOwnProperty.call(a, n) && a[n] && h.push(a[n][0]),
        (a[n] = 0);
    for (i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
    for (d && d(t); h.length; ) h.shift()();
    return r.push.apply(r, s || []), l();
  }
  function l() {
    for (var e, t = 0; t < r.length; t++) {
      for (var l = r[t], i = !0, c = 1; c < l.length; c++) {
        var o = l[c];
        0 !== a[o] && (i = !1);
      }
      i && (r.splice(t--, 1), (e = n((n.s = l[0]))));
    }
    return e;
  }
  var i = {},
    a = { 20: 0 },
    r = [];
  function n(t) {
    if (i[t]) return i[t].exports;
    var l = (i[t] = { i: t, l: !1, exports: {} });
    return e[t].call(l.exports, l, l.exports, n), (l.l = !0), l.exports;
  }
  (n.m = e),
    (n.c = i),
    (n.d = function(e, t, l) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: l });
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var l = Object.create(null);
      if (
        (n.r(l),
        Object.defineProperty(l, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var i in e)
          n.d(
            l,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
          );
      return l;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = '/assets/scripts/bundle/');
  var c = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    o = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var s = 0; s < c.length; s++) t(c[s]);
  var d = o;
  return r.push([284, 0]), l();
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
  284: function(e, t, l) {
    'use strict';
    l.r(t),
      l.d(t, 'getElement', function() {
        return g;
      }),
      l.d(t, 'getContents', function() {
        return w;
      });
    var i = l(0),
      a = l.n(i),
      r = l(4),
      n = l(1),
      c = (l(23), l(15), l(30)),
      o = l(61),
      s = l(8),
      d = l(12),
      u = a.a.createElement(o.a, null),
      h = [
        {
          id: 'checked',
          label: 'Checked',
          element: a.a.createElement(o.a, { isChecked: !0 })
        },
        {
          id: 'disabled',
          label: 'Disabled',
          element: a.a.createElement(o.a, { isDisabled: !0 })
        },
        {
          id: 'checked-disabled',
          label: 'Checked and Disabled',
          element: a.a.createElement(o.a, { isChecked: !0, isDisabled: !0 })
        },
        {
          id: 'error',
          label: 'Error',
          element: a.a.createElement(o.a, {
            isRequired: !0,
            hasError: !0,
            inlineMessage: 'This field is required'
          })
        },
        {
          id: 'required',
          label: 'Required',
          element: a.a.createElement(o.a, { isRequired: !0 })
        },
        {
          id: 'view-mode-unchecked',
          label: 'View mode - Unchecked',
          element: a.a.createElement(
            s.b,
            { labelContent: 'Form Element Label', isViewMode: !0 },
            a.a.createElement(d.a, {
              symbol: 'steps',
              size: 'x-small',
              useCurrentColor: !0,
              assistiveText: 'False',
              title: 'False'
            })
          )
        },
        {
          id: 'view-mode-checked',
          label: 'View mode - Checked',
          element: a.a.createElement(
            s.b,
            { labelContent: 'Form Element Label', isViewMode: !0 },
            a.a.createElement(d.a, {
              symbol: 'check',
              size: 'x-small',
              useCurrentColor: !0,
              assistiveText: 'True',
              title: 'True'
            })
          )
        }
      ],
      b = [
        {
          id: 'help-text-icon',
          label: 'Help text icon',
          element: a.a.createElement(o.a, { hasTooltip: !0 })
        },
        {
          id: 'required-help-text-icon',
          label: 'Required with Help text icon',
          element: a.a.createElement(o.a, { isRequired: !0, hasTooltip: !0 })
        },
        {
          id: 'required-help-text-icon-tooltip',
          label: 'Required with Help text icon, showing tooltip',
          element: a.a.createElement(
            'div',
            { style: { paddingTop: '3rem' } },
            a.a.createElement(o.a, {
              isRequired: !0,
              hasTooltip: !0,
              showTooltip: !0
            })
          )
        }
      ],
      m = l(2),
      p = l(33),
      f = r.c.a,
      x = r.c.code,
      k = r.c.h2,
      O = r.c.h3,
      E = r.c.h4,
      j = r.c.h5,
      y = r.c.p,
      g = function() {
        return Object(i.createElement)(
          r.b,
          {},
          Object(i.createElement)(
            'div',
            { className: 'doc lead' },
            'A checkable input that communicates if an option is true, false or indeterminate'
          ),
          Object(i.createElement)(n.a, { exampleOnly: !0 }, c.b),
          k({ id: 'About-Checkbox' }, 'About Checkbox'),
          y(
            {},
            'The ability to style checkboxes with CSS varies across browsers. To ensure that checkboxes look the same everywhere, we use a custom DOM. Pay close attention to the markup, because all elements must exist for the styles to work.'
          ),
          O({ id: 'Accessibility' }, 'Accessibility'),
          y(
            {},
            "Groups of checkboxes should be marked up using the fieldset and legend element. This helps someone using assistive technology to understand the question they're answering with the group of checkboxes. The fieldset is placed around the whole group and the legend contains the question."
          ),
          y(
            {},
            'Custom checkboxes are created by applying the ',
            x({}, '.slds-checkbox'),
            ' class to a ',
            x({}, '<label>'),
            ' element. To remain accessible to all user agents, place ',
            x({}, '<input>'),
            ' with ',
            x({}, 'type="checkbox"'),
            ' inside the ',
            x({}, '<label>'),
            ' element. The ',
            x({}, '<input>'),
            ' is then visually hidden, and the styling is placed on a span with the ',
            x({}, '.slds-checkbox_faux'),
            ' class. The styling of the span changes based on whether the checkbox is selected or focused by using a pseudo-element. A second span with ',
            x({}, '.slds-form-element__label'),
            ' contains the label text.'
          ),
          y(
            {},
            'When a single checkbox is required, ',
            x({}, '<div class="slds-checkbox">'),
            ' should get ',
            x({}, '<abbr class="required" title="required">*</abbr>'),
            ' added to the DOM, directly before the ',
            x({}, '<input type="checkbox" />'),
            ' for visual indication that the checkbox is required.'
          ),
          y(
            {},
            'When a checkbox group is required, the ',
            x({}, '<fieldset>'),
            ' should receive the class ',
            x({}, '.slds-is-required'),
            '. The ',
            x({}, '<legend>'),
            ' should then get ',
            x({}, '<abbr class="required" title="required">*</abbr>'),
            ' added to the DOM for visual indication that the checkbox group is required.'
          ),
          y(
            {},
            'As SLDS checkboxes rely on the ',
            x({}, ':checked'),
            ' pseudo selector, and the indeterminate state is only accessible via JavaScript, the use of a CSS class on the input will be necessary to implement this in SLDS. Use JavaScript to add the class when the indeterminate property is set to true on the input.'
          ),
          O({ id: 'Mobile' }, 'Mobile'),
          Object(i.createElement)(p.a, {
            patternSpecificText:
              'checkboxes will have an increased size to accommodate tapping with a finger instead of the more precise mouse cursor, as well as having larger label text'
          }),
          Object(i.createElement)(n.a, { frameOnly: !0 }, c.b),
          k({ id: 'Base' }, 'Base'),
          y(
            {},
            'The base variant of a checkbox is a single boolean value. The base checkbox is consumed by both a grouped checkbox and a checkbox within a form element.'
          ),
          y(
            {},
            'The ',
            f({ href: '#Form-Element' }, 'form element variant'),
            ' accommodates a top level label and additional functionality such as like help text and read only mode. Help text is not supported on a single checkbox.'
          ),
          Object(i.createElement)(n.a, null, c.b),
          O({ id: 'States' }, 'States'),
          E({ id: 'Required' }, 'Required'),
          Object(i.createElement)(n.a, null, Object(m.e)(c.d, 'required')),
          E({ id: 'Error' }, 'Error'),
          Object(i.createElement)(n.a, null, Object(m.e)(c.d, 'error')),
          E({ id: 'Disabled' }, 'Disabled'),
          Object(i.createElement)(n.a, null, Object(m.e)(c.d, 'disabled')),
          j({ id: 'Checked' }, 'Checked'),
          Object(i.createElement)(
            n.a,
            null,
            Object(m.e)(c.d, 'checked-and-disabled')
          ),
          O({ id: 'Examples' }, 'Examples'),
          E({ id: 'Group' }, 'Group'),
          Object(i.createElement)(n.a, null, Object(m.e)(c.c, 'group')),
          j({ id: 'Required-2' }, 'Required'),
          Object(i.createElement)(
            n.a,
            null,
            Object(m.e)(c.c, 'group-required')
          ),
          j({ id: 'Error-2' }, 'Error'),
          Object(i.createElement)(n.a, null, Object(m.e)(c.c, 'group-error')),
          j({ id: 'Disabled-2' }, 'Disabled'),
          Object(i.createElement)(
            n.a,
            null,
            Object(m.e)(c.c, 'group-disabled')
          ),
          E(
            { id: 'RTL-(right-to-left-direction)' },
            'RTL (right to left direction)'
          ),
          Object(i.createElement)(n.a, null, Object(m.e)(c.c, 'rtl')),
          k({ id: 'Form-Element' }, 'Form Element'),
          Object(i.createElement)(n.a, null, u),
          O({ id: 'States-2' }, 'States'),
          E({ id: 'Checked-2' }, 'Checked'),
          Object(i.createElement)(n.a, null, Object(m.e)(h, 'checked')),
          E({ id: 'Disabled-3' }, 'Disabled'),
          Object(i.createElement)(n.a, null, Object(m.e)(h, 'disabled')),
          E({ id: 'Checked-and-Disabled' }, 'Checked and Disabled'),
          Object(i.createElement)(
            n.a,
            null,
            Object(m.e)(h, 'checked-disabled')
          ),
          E({ id: 'Error-3' }, 'Error'),
          Object(i.createElement)(n.a, null, Object(m.e)(h, 'error')),
          E({ id: 'Required-3' }, 'Required'),
          Object(i.createElement)(n.a, null, Object(m.e)(h, 'required')),
          O({ id: 'View-mode' }, 'View mode'),
          y({}, 'View mode is the read only state of a checkbox form element.'),
          E({ id: 'Unchecked' }, 'Unchecked'),
          Object(i.createElement)(
            n.a,
            null,
            Object(m.e)(h, 'view-mode-unchecked')
          ),
          E({ id: 'Checked-3' }, 'Checked'),
          Object(i.createElement)(
            n.a,
            null,
            Object(m.e)(h, 'view-mode-checked')
          ),
          O({ id: 'Examples-2' }, 'Examples'),
          E({ id: 'With-help-text' }, 'With help text'),
          Object(i.createElement)(n.a, null, Object(m.e)(b, 'help-text-icon')),
          E({ id: 'Required-with-help-text' }, 'Required with help text'),
          Object(i.createElement)(
            n.a,
            null,
            Object(m.e)(b, 'required-help-text-icon')
          ),
          E(
            { id: 'Required-with-help-text-with-tooltip' },
            'Required with help text with tooltip'
          ),
          Object(i.createElement)(
            n.a,
            null,
            Object(m.e)(b, 'required-help-text-icon-tooltip')
          )
        );
      },
      w = function() {
        return Object(r.a)(g());
      };
  }
});
