var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/checkbox-button-group/base/example.jsx.js'
] = (function(e) {
  function r(r) {
    for (
      var a, c, d = r[0], o = r[1], s = r[2], u = 0, m = [];
      u < d.length;
      u++
    )
      (c = d[u]),
        Object.prototype.hasOwnProperty.call(n, c) && n[c] && m.push(n[c][0]),
        (n[c] = 0);
    for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    for (i && i(r); m.length; ) m.shift()();
    return l.push.apply(l, s || []), t();
  }
  function t() {
    for (var e, r = 0; r < l.length; r++) {
      for (var t = l[r], a = !0, d = 1; d < t.length; d++) {
        var o = t[d];
        0 !== n[o] && (a = !1);
      }
      a && (l.splice(r--, 1), (e = c((c.s = t[0]))));
    }
    return e;
  }
  var a = {},
    n = {
      34: 0,
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
    l = [];
  function c(r) {
    if (a[r]) return a[r].exports;
    var t = (a[r] = { i: r, l: !1, exports: {} });
    return e[r].call(t.exports, t, t.exports, c), (t.l = !0), t.exports;
  }
  (c.m = e),
    (c.c = a),
    (c.d = function(e, r, t) {
      c.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t });
    }),
    (c.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (c.t = function(e, r) {
      if ((1 & r && (e = c(e)), 8 & r)) return e;
      if (4 & r && 'object' == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (c.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
        2 & r && 'string' != typeof e)
      )
        for (var a in e)
          c.d(
            t,
            a,
            function(r) {
              return e[r];
            }.bind(null, a)
          );
      return t;
    }),
    (c.n = function(e) {
      var r =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return c.d(r, 'a', r), r;
    }),
    (c.o = function(e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (c.p = '/assets/scripts/bundle/');
  var d = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    o = d.push.bind(d);
  (d.push = r), (d = d.slice());
  for (var s = 0; s < d.length; s++) r(d[s]);
  var i = o;
  return l.push([226, 0]), t();
})({
  0: function(e, r) {
    e.exports = React;
  },
  16: function(e, r) {
    e.exports = ReactDOM;
  },
  226: function(e, r, t) {
    'use strict';
    t.r(r),
      t.d(r, 'Fieldset', function() {
        return o;
      }),
      t.d(r, 'CheckboxGroup', function() {
        return s;
      }),
      t.d(r, 'Checkbox', function() {
        return i;
      }),
      t.d(r, 'states', function() {
        return u;
      });
    var a = t(0),
      n = t.n(a),
      l = t(2),
      c = t.n(l),
      d = t(6),
      o = function(e) {
        return n.a.createElement(
          'fieldset',
          { className: c()('slds-form-element', e.className) },
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
      s = function(e) {
        return n.a.createElement(
          'div',
          { className: c()('slds-checkbox_button-group', e.className) },
          e.children
        );
      },
      i = function(e) {
        var r = d.c.uniqueId('unique-id-'.concat(e.id, '-'));
        return n.a.createElement(
          'span',
          { className: c()('slds-button slds-checkbox_button', e.className) },
          n.a.createElement('input', {
            'aria-describedby': e.errorId,
            disabled: e.disabled,
            defaultChecked: e.checked,
            id: r,
            value: r,
            name: 'checkbox',
            type: 'checkbox'
          }),
          n.a.createElement(
            'label',
            { className: 'slds-checkbox_button__label', htmlFor: r },
            n.a.createElement(
              'span',
              { className: 'slds-checkbox_faux' },
              e.children
            )
          )
        );
      };
    r.default = n.a.createElement(
      o,
      null,
      n.a.createElement(
        s,
        null,
        n.a.createElement(i, { id: 'monday' }, 'Mon'),
        n.a.createElement(i, { id: 'tuesday' }, 'Tue'),
        n.a.createElement(i, { id: 'wednesday' }, 'Wed'),
        n.a.createElement(i, { id: 'thursday' }, 'Thu'),
        n.a.createElement(i, { id: 'friday' }, 'Fri')
      )
    );
    var u = [
      {
        id: 'has-error',
        label: 'Error',
        element: n.a.createElement(
          o,
          { className: 'slds-has-error' },
          n.a.createElement(
            s,
            null,
            n.a.createElement(i, { errorId: 'error_01', id: 'monday' }, 'Mon'),
            n.a.createElement(i, { errorId: 'error_01', id: 'tuesday' }, 'Tue'),
            n.a.createElement(
              i,
              { errorId: 'error_01', id: 'wednesday' },
              'Wed'
            ),
            n.a.createElement(
              i,
              { errorId: 'error_01', id: 'thursday' },
              'Thu'
            ),
            n.a.createElement(i, { errorId: 'error_01', id: 'friday' }, 'Fri')
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
          o,
          null,
          n.a.createElement(
            s,
            null,
            n.a.createElement(i, { id: 'monday', disabled: !0 }, 'Mon'),
            n.a.createElement(i, { id: 'tuesday', disabled: !0 }, 'Tue'),
            n.a.createElement(i, { id: 'wednesday', disabled: !0 }, 'Wed'),
            n.a.createElement(i, { id: 'thursday', disabled: !0 }, 'Thu'),
            n.a.createElement(i, { id: 'friday', disabled: !0 }, 'Fri')
          )
        )
      }
    ];
  }
});
