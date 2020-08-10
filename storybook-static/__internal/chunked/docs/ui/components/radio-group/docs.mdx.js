var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/radio-group/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, i, s = t[0], l = t[1], u = t[2], c = 0, h = [];
      c < s.length;
      c++
    )
      (i = s[c]),
        Object.prototype.hasOwnProperty.call(o, i) && o[i] && h.push(o[i][0]),
        (o[i] = 0);
    for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
    for (d && d(t); h.length; ) h.shift()();
    return a.push.apply(a, u || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, s = 1; s < n.length; s++) {
        var l = n[s];
        0 !== o[l] && (r = !1);
      }
      r && (a.splice(t--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = { 63: 0 },
    a = [];
  function i(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = e),
    (i.c = r),
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
        for (var r in e)
          i.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
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
  var s = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    l = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var u = 0; u < s.length; u++) t(s[u]);
  var d = l;
  return a.push([136, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  136: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getElement', function() {
        return b;
      }),
      n.d(t, 'getContents', function() {
        return p;
      });
    var r = n(0),
      o = n(4),
      a = n(1),
      i = (n(26), n(43), n(15), n(2)),
      s = n(33),
      l = n(36),
      u = o.c.code,
      d = o.c.h2,
      c = o.c.h3,
      h = o.c.p,
      b = function() {
        return Object(r.createElement)(
          o.b,
          {},
          Object(r.createElement)(
            'div',
            { className: 'doc lead' },
            'A select list that can have a single entry checked at any one time.'
          ),
          Object(r.createElement)(a.a, { exampleOnly: !0 }, l.d),
          d({ id: 'About-Radio-Group' }, 'About Radio Group'),
          h(
            {},
            'Radio buttons are shown in a group of two or more. The user can only select one radio button at a time. You should use the same ',
            u({}, 'name'),
            ' attribute on all radio buttons in the group. This ensures that if there is more than one group in the form, each one stays associated with its own group.'
          ),
          h(
            {},
            'The ability to style radio buttons with CSS varies across browsers. To ensure that radio buttons look the same everywhere, we use a custom DOM. Pay close attention to the markup, because all elements must exist for the styles to work.'
          ),
          c({ id: 'Accessibility' }, 'Accessibility'),
          h(
            {},
            "Groups of radio buttons should be marked up using the fieldset and legend element. This helps someone using assistive technology to understand the question they're answering with the group of radio buttons. The fieldset is placed around the whole group and the legend contains the question."
          ),
          h(
            {},
            'Custom radio buttons are created by applying the ',
            u({}, '.slds-radio'),
            ' class to a ',
            u({}, '<label>'),
            ' element. To remain accessible to all user agents, place an ',
            u({}, '<input>'),
            ' with ',
            u({}, 'type="radio"'),
            ' inside the ',
            u({}, '<label>'),
            ' element. The ',
            u({}, '<input>'),
            ' is then visually hidden, and the styling is placed on a span with the ',
            u({}, '.slds-radio_faux'),
            ' class. The styling of the span changes based on whether the radio button is selected or focused by using a pseudo-element. A second span with ',
            u({}, '.slds-form-element__label'),
            ' contains the label text.'
          ),
          h(
            {},
            'When a radio group is required, the ',
            u({}, '<fieldset>'),
            ' should receive the class ',
            u({}, '.slds-is-required'),
            '. The ',
            u({}, '<legend>'),
            ' should then get ',
            u({}, '<abbr class="required" title="required">*</abbr>'),
            ' added to the DOM for visual indication that the radio group is required.'
          ),
          h(
            {},
            'When disabling a radio button, either the entire group must be disabled or if only some radio buttons are disabled, then the checked radio button cannot be disabled.'
          ),
          c({ id: 'Mobile' }, 'Mobile'),
          Object(r.createElement)(s.a, {
            patternSpecificText:
              'radio groups will have an increased size to accommodate tapping with a finger instead of the more precise mouse cursor'
          }),
          Object(r.createElement)(a.a, { frameOnly: !0 }, l.d),
          d({ id: 'Base' }, 'Base'),
          Object(r.createElement)(a.a, null, l.d),
          d({ id: 'States' }, 'States'),
          c({ id: 'Disabled' }, 'Disabled'),
          Object(r.createElement)(a.a, null, Object(i.e)(l.e, 'disabled')),
          c({ id: 'Checked-and-Disabled' }, 'Checked and Disabled'),
          Object(r.createElement)(
            a.a,
            null,
            Object(i.e)(l.e, 'checked-and-disabled')
          ),
          c({ id: 'Required' }, 'Required'),
          Object(r.createElement)(a.a, null, Object(i.e)(l.e, 'required')),
          c({ id: 'Error' }, 'Error'),
          Object(r.createElement)(a.a, null, Object(i.e)(l.e, 'error')),
          c({ id: 'Right-to-Left' }, 'Right to Left'),
          Object(r.createElement)(a.a, null, Object(i.e)(l.e, 'rtl'))
        );
      },
      p = function() {
        return Object(o.a)(b());
      };
  },
  18: function(e, t) {
    e.exports = JSBeautify;
  },
  19: function(e, t) {
    e.exports = ReactDOM;
  }
});