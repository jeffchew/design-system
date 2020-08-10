var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/checkbox-toggle/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var c, s, i = t[0], a = t[1], l = t[2], u = 0, d = [];
      u < i.length;
      u++
    )
      (s = i[u]),
        Object.prototype.hasOwnProperty.call(o, s) && o[s] && d.push(o[s][0]),
        (o[s] = 0);
    for (c in a) Object.prototype.hasOwnProperty.call(a, c) && (e[c] = a[c]);
    for (h && h(t); d.length; ) d.shift()();
    return r.push.apply(r, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < r.length; t++) {
      for (var n = r[t], c = !0, i = 1; i < n.length; i++) {
        var a = n[i];
        0 !== o[a] && (c = !1);
      }
      c && (r.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var c = {},
    o = { 19: 0 },
    r = [];
  function s(t) {
    if (c[t]) return c[t].exports;
    var n = (c[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.m = e),
    (s.c = c),
    (s.d = function(e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
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
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var c in e)
          s.d(
            n,
            c,
            function(t) {
              return e[t];
            }.bind(null, c)
          );
      return n;
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
  var i = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    a = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var l = 0; l < i.length; l++) t(i[l]);
  var h = a;
  return r.push([200, 0]), n();
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
  200: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getElement', function() {
        return p;
      }),
      n.d(t, 'getContents', function() {
        return f;
      });
    var c = n(0),
      o = n(4),
      r = n(1),
      s = (n(23), n(15), n(2)),
      i = n(33),
      a = n(70),
      l = o.c.code,
      h = o.c.h2,
      u = o.c.h3,
      d = o.c.h4,
      b = o.c.p,
      p = function() {
        return Object(c.createElement)(
          o.b,
          {},
          Object(c.createElement)(
            'div',
            { className: 'lead doc' },
            'A checkable input that communicates if an option is true, false or indeterminate'
          ),
          Object(c.createElement)(
            r.a,
            { exampleOnly: !0 },
            Object(s.e)(a.c, 'checkbox-toggle-checked')
          ),
          h({ id: 'About-Checkbox-Toggle' }, 'About Checkbox Toggle'),
          b(
            {},
            'The ability to style checkboxes with CSS varies across browsers. To ensure that checkboxes look the same everywhere, we use a custom DOM. Pay close attention to the markup, because all elements must exist for the styles to work.'
          ),
          u({ id: 'Accessibility' }, 'Accessibility'),
          b(
            {},
            "Groups of checkboxes should be marked up using the fieldset and legend element. This helps someone using assistive technology to understand the question they're answering with the group of checkboxes. The fieldset is placed around the whole group and the legend contains the question."
          ),
          b(
            {},
            'Custom checkboxes are created by applying the ',
            l({}, '.slds-checkbox'),
            ' class to a ',
            l({}, '<label>'),
            ' element. To remain accessible to all user agents, place ',
            l({}, '<input>'),
            ' with ',
            l({}, 'type="checkbox"'),
            ' inside the ',
            l({}, '<label>'),
            ' element. The ',
            l({}, '<input>'),
            ' is then visually hidden, and the styling is placed on a span with the ',
            l({}, '.slds-checkbox_faux'),
            ' class. The styling of the span changes based on whether the checkbox is selected or focused by using a pseudo-element. A second span with ',
            l({}, '.slds-form-element__label'),
            ' contains the label text.'
          ),
          b(
            {},
            'When a single checkbox is required, ',
            l({}, '<div class="slds-checkbox">'),
            ' should get ',
            l({}, '<abbr class="required" title="required">*</abbr>'),
            ' added to the DOM, directly before the ',
            l({}, '<input type="checkbox" />'),
            ' for visual indication that the checkbox is required.'
          ),
          b(
            {},
            'When a checkbox group is required, the ',
            l({}, '<fieldset>'),
            ' should receive the class ',
            l({}, '.slds-is-required'),
            '. The ',
            l({}, '<legend>'),
            ' should then get ',
            l({}, '<abbr class="required" title="required">*</abbr>'),
            ' added to the DOM for visual indication that the checkbox group is required.'
          ),
          b(
            {},
            'As SLDS checkboxes rely on the ',
            l({}, ':checked'),
            ' pseudo selector, and the indeterminate state is only accessible via JavaScript, the use of a CSS class on the input will be necessary to implement this in SLDS. Use JavaScript to add the class when the indeterminate property is set to true on the input.'
          ),
          b(
            {},
            'The following JavaScript demonstrates how to set a checkbox to be indeterminate:'
          ),
          l(
            {},
            "var checkbox = document.getElementById('checkbox-indeterminate-01');\ncheckbox.indeterminate = true;\n"
          ),
          u({ id: 'Mobile' }, 'Mobile'),
          Object(c.createElement)(i.a, {
            patternSpecificText:
              'checkbox toggles will have an increased label text size'
          }),
          Object(c.createElement)(r.a, { frameOnly: !0 }, a.b),
          h({ id: 'Base' }, 'Base'),
          Object(c.createElement)(r.a, null, a.b),
          u({ id: 'States' }, 'States'),
          d({ id: 'Checked' }, 'Checked'),
          Object(c.createElement)(
            r.a,
            null,
            Object(s.e)(a.c, 'checkbox-toggle-checked')
          ),
          d({ id: 'Disabled' }, 'Disabled'),
          Object(c.createElement)(
            r.a,
            null,
            Object(s.e)(a.c, 'checkbox-toggle-disabled')
          ),
          d({ id: 'Right-to-Left' }, 'Right to Left'),
          Object(c.createElement)(
            r.a,
            null,
            Object(s.e)(a.c, 'checkbox-toggle-rtl')
          )
        );
      },
      f = function() {
        return Object(o.a)(p());
      };
  }
});