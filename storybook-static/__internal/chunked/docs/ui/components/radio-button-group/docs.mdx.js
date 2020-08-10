var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/radio-button-group/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, o, i = t[0], c = t[1], u = t[2], s = 0, b = [];
      s < i.length;
      s++
    )
      (o = i[s]),
        Object.prototype.hasOwnProperty.call(a, o) && a[o] && b.push(a[o][0]),
        (a[o] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    for (d && d(t); b.length; ) b.shift()();
    return l.push.apply(l, u || []), r();
  }
  function r() {
    for (var e, t = 0; t < l.length; t++) {
      for (var r = l[t], n = !0, i = 1; i < r.length; i++) {
        var c = r[i];
        0 !== a[c] && (n = !1);
      }
      n && (l.splice(t--, 1), (e = o((o.s = r[0]))));
    }
    return e;
  }
  var n = {},
    a = { 62: 0 },
    l = [];
  function o(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
  }
  (o.m = e),
    (o.c = n),
    (o.d = function(e, t, r) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
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
      var r = Object.create(null);
      if (
        (o.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          o.d(
            r,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
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
  var i = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    c = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var u = 0; u < i.length; u++) t(i[u]);
  var d = c;
  return l.push([261, 0]), r();
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
  261: function(e, t, r) {
    'use strict';
    r.r(t),
      r.d(t, 'getElement', function() {
        return S;
      }),
      r.d(t, 'getContents', function() {
        return _;
      });
    var n = r(0),
      a = r.n(n),
      l = r(4),
      o = r(1),
      i = (r(23), r(15), r(2)),
      c = r(33),
      u = r(5),
      d = r.n(u),
      s = r(94),
      b = r.n(s),
      f = r(8),
      m = r(36),
      p = function(e) {
        return a.a.createElement(
          'div',
          { className: d()('slds-radio_button-group', e.className) },
          e.children
        );
      },
      y = function(e) {
        var t = b()('example-unique-id-');
        return a.a.createElement(
          'span',
          { className: d()('slds-button slds-radio_button', e.className) },
          a.a.createElement('input', {
            name: e.name,
            type: 'radio',
            id: t,
            value: e.id,
            disabled: e.disabled,
            'aria-describedby': e.errorId,
            defaultChecked: e.checked
          }),
          a.a.createElement(
            'label',
            { className: 'slds-radio_button__label', htmlFor: t },
            a.a.createElement(
              'span',
              { className: 'slds-radio_faux' },
              e.children
            )
          )
        );
      },
      h = function(e) {
        var t = e.legend,
          r = e.modifier,
          n = e.disabled,
          l = e.required,
          o = e.hasError,
          i = b()('example-unique-name-'),
          c = b()('example-unique-id');
        return a.a.createElement(
          m.a,
          { className: o && 'slds-has-error' },
          a.a.createElement(
            m.b,
            null,
            l &&
              a.a.createElement(
                'abbr',
                { className: 'slds-required', title: 'required' },
                '*'
              ),
            !t && 'Radio Group Label'
          ),
          a.a.createElement(
            f.c,
            null,
            a.a.createElement(
              p,
              { className: r },
              a.a.createElement(
                y,
                { id: 'monday', name: i, disabled: n },
                'Mon'
              ),
              a.a.createElement(
                y,
                { id: 'tuesday', name: i, disabled: n },
                'Tue'
              ),
              a.a.createElement(
                y,
                { id: 'wednesday', name: i, disabled: n },
                'Wed'
              ),
              a.a.createElement(
                y,
                { id: 'thursday', name: i, disabled: n },
                'Thu'
              ),
              a.a.createElement(
                y,
                { id: 'friday', name: i, disabled: n },
                'Fri'
              )
            ),
            o &&
              a.a.createElement(
                'div',
                { id: c, className: 'slds-form-element__help' },
                'This field is required'
              )
          )
        );
      },
      E = a.a.createElement(h, null),
      j = [
        {
          id: 'disabled',
          label: 'Disabled',
          element: a.a.createElement(h, { disabled: !0 })
        },
        {
          id: 'required',
          label: 'Required',
          element: a.a.createElement(h, { required: !0 })
        },
        {
          id: 'error',
          label: 'Has error',
          element: a.a.createElement(h, { required: !0, hasError: !0 })
        }
      ],
      v = l.c.h2,
      O = l.c.h3,
      S = function() {
        return Object(n.createElement)(
          l.b,
          {},
          Object(n.createElement)(
            'div',
            { className: 'lead doc' },
            'A styled select list that can have a single entry checked at any one time.'
          ),
          v({ id: 'About-Radio-Button-Group' }, 'About Radio Button Group'),
          v({ id: 'Default' }, 'Default'),
          Object(n.createElement)(o.a, null, E),
          O({ id: 'Mobile' }, 'Mobile'),
          Object(n.createElement)(c.a, {
            patternSpecificText:
              'radio button groups will have an increased size to accommodate tapping with a finger instead of the more precise mouse cursor, and also become stacked'
          }),
          Object(n.createElement)(o.a, { frameOnly: !0 }, E),
          v({ id: 'States' }, 'States'),
          O({ id: 'Disabled' }, 'Disabled'),
          Object(n.createElement)(o.a, null, Object(i.e)(j, 'disabled')),
          O({ id: 'Required' }, 'Required'),
          Object(n.createElement)(o.a, null, Object(i.e)(j, 'required')),
          O({ id: 'Has-Error' }, 'Has Error'),
          Object(n.createElement)(o.a, null, Object(i.e)(j, 'error'))
        );
      },
      _ = function() {
        return Object(l.a)(S());
      };
  },
  94: function(e, t, r) {
    (function(t) {
      function r(e) {
        return (r =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      var n =
          'object' == (void 0 === t ? 'undefined' : r(t)) &&
          t &&
          t.Object === Object &&
          t,
        a =
          'object' == ('undefined' == typeof self ? 'undefined' : r(self)) &&
          self &&
          self.Object === Object &&
          self,
        l = n || a || Function('return this')(),
        o = Object.prototype,
        i = 0,
        c = o.toString,
        u = l.Symbol,
        d = u ? u.prototype : void 0,
        s = d ? d.toString : void 0;
      function b(e) {
        if ('string' == typeof e) return e;
        if (
          (function(e) {
            return (
              'symbol' == r(e) ||
              ((function(e) {
                return !!e && 'object' == r(e);
              })(e) &&
                '[object Symbol]' == c.call(e))
            );
          })(e)
        )
          return s ? s.call(e) : '';
        var t = e + '';
        return '0' == t && 1 / e == -1 / 0 ? '-0' : t;
      }
      e.exports = function(e) {
        var t,
          r = ++i;
        return (null == (t = e) ? '' : b(t)) + r;
      };
    }.call(this, r(77)));
  }
});