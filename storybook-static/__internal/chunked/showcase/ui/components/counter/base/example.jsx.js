var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/counter/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, s, o = t[0], c = t[1], i = t[2], m = 0, d = [];
      m < o.length;
      m++
    )
      (s = o[m]),
        Object.prototype.hasOwnProperty.call(l, s) && l[s] && d.push(l[s][0]),
        (l[s] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    for (u && u(t); d.length; ) d.shift()();
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
    l = {
      50: 0,
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
  var o = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    c = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var i = 0; i < o.length; i++) t(o[i]);
  var u = c;
  return a.push([163, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  163: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'states', function() {
        return i;
      }),
      n.d(t, 'examples', function() {
        return u;
      });
    var r = n(0),
      l = n.n(r),
      a = n(5),
      s = n(10),
      o = n(4),
      c = 'Counter Label';
    t.default = l.a.createElement(
      a.b,
      {
        labelContent: c,
        inputId: 'default1',
        labelClassName: 'slds-m-right_none'
      },
      l.a.createElement(o.b, {
        className: 'slds-button_icon-small slds-input__button_decrement',
        symbol: 'ban',
        assistiveText: 'Decrement counter',
        title: 'Decrement counter'
      }),
      l.a.createElement(s.a, {
        id: 'default1',
        type: 'number',
        placeholder: '1'
      }),
      l.a.createElement(o.b, {
        className: 'slds-button_icon-small slds-input__button_increment',
        symbol: 'new',
        assistiveText: 'Increment counter',
        title: 'Increment counter'
      })
    );
    var i = [
        {
          id: 'disabled',
          label: 'Disabled',
          element: l.a.createElement(
            a.b,
            {
              labelContent: c,
              inputId: 'state-disabled',
              labelClassName: 'slds-m-right_none'
            },
            l.a.createElement(o.b, {
              className: 'slds-button_icon-small slds-input__button_decrement',
              symbol: 'ban',
              assistiveText: 'Decrement counter',
              title: 'Decrement counter',
              disabled: !0
            }),
            l.a.createElement(s.a, {
              id: 'state-disabled',
              type: 'number',
              placeholder: '1',
              disabled: !0
            }),
            l.a.createElement(o.b, {
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
            a.b,
            {
              labelContent: c,
              inputId: 'state-read-only',
              labelClassName: 'slds-m-right_none'
            },
            l.a.createElement(s.a, {
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
            a.b,
            {
              labelContent: c,
              inputId: 'state-required',
              isRequired: !0,
              labelClassName: 'slds-m-right_none'
            },
            l.a.createElement(o.b, {
              className: 'slds-button_icon-small slds-input__button_decrement',
              symbol: 'ban',
              assistiveText: 'Decrement counter',
              title: 'Decrement counter'
            }),
            l.a.createElement(s.a, {
              id: 'state-required',
              type: 'number',
              placeholder: '1',
              required: !0
            }),
            l.a.createElement(o.b, {
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
            a.b,
            {
              hasError: !0,
              labelContent: c,
              inputId: 'state-error',
              errorId: 'state-error-1',
              isRequired: !0,
              inlineMessage: 'This field is required',
              labelClassName: 'slds-m-right_none'
            },
            l.a.createElement(o.b, {
              className: 'slds-button_icon-small slds-input__button_decrement',
              symbol: 'ban',
              assistiveText: 'Decrement counter',
              title: 'Decrement counter'
            }),
            l.a.createElement(s.a, {
              id: 'state-error',
              type: 'number',
              placeholder: '1',
              required: !0,
              'aria-describedby': 'state-error-1'
            }),
            l.a.createElement(o.b, {
              className: 'slds-button_icon-small slds-input__button_increment',
              symbol: 'new',
              assistiveText: 'Increment counter',
              title: 'Increment counter'
            })
          )
        }
      ],
      u = [
        {
          id: 'centered',
          label: 'Label Centered',
          element: l.a.createElement(
            a.b,
            {
              formElementClassName: 'slds-text-align_center',
              labelContent: c,
              inputId: 'example-centered',
              labelClassName: 'slds-m-right_none'
            },
            l.a.createElement(o.b, {
              className: 'slds-button_icon-small slds-input__button_decrement',
              symbol: 'ban',
              assistiveText: 'Decrement counter',
              title: 'Decrement counter'
            }),
            l.a.createElement(s.a, {
              id: 'example-centered',
              type: 'number',
              placeholder: '1'
            }),
            l.a.createElement(o.b, {
              className: 'slds-button_icon-small slds-input__button_increment',
              symbol: 'new',
              assistiveText: 'Increment counter',
              title: 'Increment counter'
            })
          )
        }
      ];
  }
});
