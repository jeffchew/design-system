var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/counter/docs.mdx.js'] = (function(
  e
) {
  function t(t) {
    for (
      var r, s, o = t[0], c = t[1], i = t[2], d = 0, m = [];
      d < o.length;
      d++
    )
      (s = o[d]),
        Object.prototype.hasOwnProperty.call(l, s) && l[s] && m.push(l[s][0]),
        (l[s] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    for (u && u(t); m.length; ) m.shift()();
    return a.push.apply(a, i || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, o = 1; o < n.length; o++) {
        var c = n[o];
        0 !== l[c] && (r = !1);
      }
      r && (a.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var r = {},
    l = { 23: 0 },
    a = [];
  function s(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.m = e),
    (s.c = r),
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
        for (var r in e)
          s.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
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
  var o = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    c = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var i = 0; i < o.length; i++) t(o[i]);
  var u = c;
  return a.push([281, 0]), n();
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
  281: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getElement', function() {
        return v;
      }),
      n.d(t, 'getContents', function() {
        return O;
      });
    var r = n(0),
      l = n.n(r),
      a = n(4),
      s = n(1),
      o = (n(23), n(15), n(8)),
      c = n(16),
      i = n(7),
      u = 'Counter Label',
      d = l.a.createElement(
        o.b,
        {
          labelContent: u,
          inputId: 'default1',
          labelClassName: 'slds-m-right_none'
        },
        l.a.createElement(i.b, {
          className: 'slds-button_icon-small slds-input__button_decrement',
          symbol: 'ban',
          assistiveText: 'Decrement counter',
          title: 'Decrement counter'
        }),
        l.a.createElement(c.a, {
          id: 'default1',
          type: 'number',
          placeholder: '1'
        }),
        l.a.createElement(i.b, {
          className: 'slds-button_icon-small slds-input__button_increment',
          symbol: 'new',
          assistiveText: 'Increment counter',
          title: 'Increment counter'
        })
      ),
      m = [
        {
          id: 'disabled',
          label: 'Disabled',
          element: l.a.createElement(
            o.b,
            {
              labelContent: u,
              inputId: 'state-disabled',
              labelClassName: 'slds-m-right_none'
            },
            l.a.createElement(i.b, {
              className: 'slds-button_icon-small slds-input__button_decrement',
              symbol: 'ban',
              assistiveText: 'Decrement counter',
              title: 'Decrement counter',
              disabled: !0
            }),
            l.a.createElement(c.a, {
              id: 'state-disabled',
              type: 'number',
              placeholder: '1',
              disabled: !0
            }),
            l.a.createElement(i.b, {
              className: 'slds-button_icon-small slds-input__button_increment',
              symbol: 'new',
              assistiveText: 'Increment counter',
              title: 'Increment counter',
              disabled: !0
            })
          )
        },
        {
          id: 'read-only',
          label: 'Read only',
          element: l.a.createElement(
            o.b,
            {
              labelContent: u,
              inputId: 'state-read-only',
              labelClassName: 'slds-m-right_none'
            },
            l.a.createElement(c.a, {
              id: 'state-read-only',
              type: 'text',
              placeholder: '1',
              readOnly: !0
            })
          )
        },
        {
          id: 'required',
          label: 'Required',
          element: l.a.createElement(
            o.b,
            {
              labelContent: u,
              inputId: 'state-required',
              isRequired: !0,
              labelClassName: 'slds-m-right_none'
            },
            l.a.createElement(i.b, {
              className: 'slds-button_icon-small slds-input__button_decrement',
              symbol: 'ban',
              assistiveText: 'Decrement counter',
              title: 'Decrement counter'
            }),
            l.a.createElement(c.a, {
              id: 'state-required',
              type: 'number',
              placeholder: '1',
              required: !0
            }),
            l.a.createElement(i.b, {
              className: 'slds-button_icon-small slds-input__button_increment',
              symbol: 'new',
              assistiveText: 'Increment counter',
              title: 'Increment counter'
            })
          )
        },
        {
          id: 'error',
          label: 'Error',
          element: l.a.createElement(
            o.b,
            {
              hasError: !0,
              labelContent: u,
              inputId: 'state-error',
              errorId: 'state-error-1',
              isRequired: !0,
              inlineMessage: 'This field is required',
              labelClassName: 'slds-m-right_none'
            },
            l.a.createElement(i.b, {
              className: 'slds-button_icon-small slds-input__button_decrement',
              symbol: 'ban',
              assistiveText: 'Decrement counter',
              title: 'Decrement counter'
            }),
            l.a.createElement(c.a, {
              id: 'state-error',
              type: 'number',
              placeholder: '1',
              required: !0,
              'aria-describedby': 'state-error-1'
            }),
            l.a.createElement(i.b, {
              className: 'slds-button_icon-small slds-input__button_increment',
              symbol: 'new',
              assistiveText: 'Increment counter',
              title: 'Increment counter'
            })
          )
        }
      ],
      b = [
        {
          id: 'centered',
          label: 'Label Centered',
          element: l.a.createElement(
            o.b,
            {
              formElementClassName: 'slds-text-align_center',
              labelContent: u,
              inputId: 'example-centered',
              labelClassName: 'slds-m-right_none'
            },
            l.a.createElement(i.b, {
              className: 'slds-button_icon-small slds-input__button_decrement',
              symbol: 'ban',
              assistiveText: 'Decrement counter',
              title: 'Decrement counter'
            }),
            l.a.createElement(c.a, {
              id: 'example-centered',
              type: 'number',
              placeholder: '1'
            }),
            l.a.createElement(i.b, {
              className: 'slds-button_icon-small slds-input__button_increment',
              symbol: 'new',
              assistiveText: 'Increment counter',
              title: 'Increment counter'
            })
          )
        }
      ],
      p = n(2),
      _ = a.c.a,
      f = a.c.h2,
      y = a.c.h3,
      h = a.c.h4,
      E = a.c.p,
      v = function() {
        return Object(r.createElement)(
          a.b,
          {},
          Object(r.createElement)(
            'div',
            { className: 'doc lead' },
            'The Counter allows a user to increase or decrease a numerical value.'
          ),
          f({ id: 'About-Counter' }, 'About Counter'),
          E(
            {},
            'A Counter is a ',
            _({ href: '/components/form-element' }, 'Form Element'),
            ' containing a label and a number ',
            _({ href: '/components/input' }, 'Input'),
            ' that can be increased or decreased using companion ',
            _({ href: '/components/button-icons' }, 'Button Icons'),
            '.'
          ),
          y({ id: 'Accessibility' }, 'Accessibility'),
          E(
            {},
            'To ensure the Counter is fully accessible, follow all guidelines for Button Icons and the error state on Inputs.'
          ),
          f({ id: 'Base' }, 'Base'),
          Object(r.createElement)(s.a, null, d),
          y({ id: 'States' }, 'States'),
          h({ id: 'Required' }, 'Required'),
          Object(r.createElement)(s.a, null, Object(p.e)(m, 'required')),
          h({ id: 'Error' }, 'Error'),
          Object(r.createElement)(s.a, null, Object(p.e)(m, 'error')),
          h({ id: 'Disabled' }, 'Disabled'),
          Object(r.createElement)(s.a, null, Object(p.e)(m, 'disabled')),
          h({ id: 'Read-only' }, 'Read-only'),
          Object(r.createElement)(s.a, null, Object(p.e)(m, 'read-only')),
          y({ id: 'Examples' }, 'Examples'),
          h({ id: 'Centered' }, 'Centered'),
          Object(r.createElement)(s.a, null, Object(p.e)(b, 'centered'))
        );
      },
      O = function() {
        return Object(a.a)(v());
      };
  }
});
