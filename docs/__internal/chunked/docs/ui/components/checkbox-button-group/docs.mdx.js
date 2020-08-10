var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/checkbox-button-group/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var a, c, o = t[0], s = t[1], d = t[2], u = 0, m = [];
      u < o.length;
      u++
    )
      (c = o[u]),
        Object.prototype.hasOwnProperty.call(n, c) && n[c] && m.push(n[c][0]),
        (n[c] = 0);
    for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
    for (i && i(t); m.length; ) m.shift()();
    return l.push.apply(l, d || []), r();
  }
  function r() {
    for (var e, t = 0; t < l.length; t++) {
      for (var r = l[t], a = !0, o = 1; o < r.length; o++) {
        var s = r[o];
        0 !== n[s] && (a = !1);
      }
      a && (l.splice(t--, 1), (e = c((c.s = r[0]))));
    }
    return e;
  }
  var a = {},
    n = { 17: 0 },
    l = [];
  function c(t) {
    if (a[t]) return a[t].exports;
    var r = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, c), (r.l = !0), r.exports;
  }
  (c.m = e),
    (c.c = a),
    (c.d = function(e, t, r) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
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
      var r = Object.create(null);
      if (
        (c.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          c.d(
            r,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return r;
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
  var o = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    s = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var d = 0; d < o.length; d++) t(o[d]);
  var i = s;
  return l.push([257, 0]), r();
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
  257: function(e, t, r) {
    'use strict';
    r.r(t),
      r.d(t, 'getElement', function() {
        return O;
      }),
      r.d(t, 'getContents', function() {
        return g;
      });
    var a = r(0),
      n = r.n(a),
      l = r(4),
      c = r(1),
      o = (r(15), r(2)),
      s = r(33),
      d = r(5),
      i = r.n(d),
      u = function(e) {
        return n.a.createElement(
          'fieldset',
          { className: i()('slds-form-element', e.className) },
          n.a.createElement(
            'legend',
            { className: 'slds-form-element__legend slds-form-element__label' },
            'Scheduled Day(s)'
          ),
          n.a.createElement(
            'div',
            { className: 'slds-form-element__control' },
            e.children
          )
        );
      },
      m = function(e) {
        return n.a.createElement(
          'div',
          { className: i()('slds-checkbox_button-group', e.className) },
          e.children
        );
      },
      b = function(e) {
        var t = o.c.uniqueId('unique-id-'.concat(e.id, '-'));
        return n.a.createElement(
          'span',
          { className: i()('slds-button slds-checkbox_button', e.className) },
          n.a.createElement('input', {
            'aria-describedby': e.errorId,
            disabled: e.disabled,
            defaultChecked: e.checked,
            id: t,
            value: t,
            name: 'checkbox',
            type: 'checkbox'
          }),
          n.a.createElement(
            'label',
            { className: 'slds-checkbox_button__label', htmlFor: t },
            n.a.createElement(
              'span',
              { className: 'slds-checkbox_faux' },
              e.children
            )
          )
        );
      },
      f = n.a.createElement(
        u,
        null,
        n.a.createElement(
          m,
          null,
          n.a.createElement(b, { id: 'monday' }, 'Mon'),
          n.a.createElement(b, { id: 'tuesday' }, 'Tue'),
          n.a.createElement(b, { id: 'wednesday' }, 'Wed'),
          n.a.createElement(b, { id: 'thursday' }, 'Thu'),
          n.a.createElement(b, { id: 'friday' }, 'Fri')
        )
      ),
      p = [
        {
          id: 'has-error',
          label: 'Error',
          element: n.a.createElement(
            u,
            { className: 'slds-has-error' },
            n.a.createElement(
              m,
              null,
              n.a.createElement(
                b,
                { errorId: 'error_01', id: 'monday' },
                'Mon'
              ),
              n.a.createElement(
                b,
                { errorId: 'error_01', id: 'tuesday' },
                'Tue'
              ),
              n.a.createElement(
                b,
                { errorId: 'error_01', id: 'wednesday' },
                'Wed'
              ),
              n.a.createElement(
                b,
                { errorId: 'error_01', id: 'thursday' },
                'Thu'
              ),
              n.a.createElement(b, { errorId: 'error_01', id: 'friday' }, 'Fri')
            ),
            n.a.createElement(
              'div',
              { id: 'error_01', className: 'slds-form-element__help' },
              'This field is required'
            )
          )
        },
        {
          id: 'disabled',
          label: 'Disabled',
          element: n.a.createElement(
            u,
            null,
            n.a.createElement(
              m,
              null,
              n.a.createElement(b, { id: 'monday', disabled: !0 }, 'Mon'),
              n.a.createElement(b, { id: 'tuesday', disabled: !0 }, 'Tue'),
              n.a.createElement(b, { id: 'wednesday', disabled: !0 }, 'Wed'),
              n.a.createElement(b, { id: 'thursday', disabled: !0 }, 'Thu'),
              n.a.createElement(b, { id: 'friday', disabled: !0 }, 'Fri')
            )
          )
        }
      ],
      h = l.c.a,
      E = l.c.code,
      _ = l.c.h2,
      y = l.c.h3,
      x = l.c.p,
      O = function() {
        return Object(a.createElement)(
          l.b,
          {},
          Object(a.createElement)(
            'div',
            { className: 'doc lead' },
            'A styled checkable input group that communicates if an option(s) are true, false or indeterminate'
          ),
          Object(a.createElement)(c.a, { exampleOnly: !0 }, f),
          _(
            { id: 'About-Checkbox-Button-Group' },
            'About Checkbox Button Group'
          ),
          x(
            {},
            'The checkbox-button-group is a set of ',
            h({ href: '/components/checkbox-button' }, 'checkbox buttons'),
            ' wrapped in a fieldset that is also a ',
            h({ href: '/components/form-element' }, 'form element'),
            '. It is described by a legend with the classes ',
            E({}, 'slds-form-element__legend'),
            ' and ',
            E({}, 'slds-form-element__label'),
            ' applied to it.'
          ),
          y({ id: 'Mobile' }, 'Mobile'),
          Object(a.createElement)(s.a, {
            patternSpecificText:
              'buttons in the checkbox button group will have an increased size to accommodate tapping with a finger instead of the more precise mouse cursor, as well as become stacked'
          }),
          Object(a.createElement)(c.a, { frameOnly: !0 }, f),
          _({ id: 'Base' }, 'Base'),
          Object(a.createElement)(c.a, null, f),
          _({ id: 'States' }, 'States'),
          y({ id: 'Has-Error' }, 'Has Error'),
          Object(a.createElement)(c.a, null, Object(o.e)(p, 'has-error')),
          y({ id: 'Disabled' }, 'Disabled'),
          Object(a.createElement)(c.a, null, Object(o.e)(p, 'disabled'))
        );
      },
      g = function() {
        return Object(l.a)(O());
      };
  }
});
