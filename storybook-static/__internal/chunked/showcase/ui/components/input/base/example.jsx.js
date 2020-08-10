var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/input/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, i, s = t[0], d = t[1], o = t[2], u = 0, p = [];
      u < s.length;
      u++
    )
      (i = s[u]),
        Object.prototype.hasOwnProperty.call(a, i) && a[i] && p.push(a[i][0]),
        (a[i] = 0);
    for (n in d) Object.prototype.hasOwnProperty.call(d, n) && (e[n] = d[n]);
    for (c && c(t); p.length; ) p.shift()();
    return r.push.apply(r, o || []), l();
  }
  function l() {
    for (var e, t = 0; t < r.length; t++) {
      for (var l = r[t], n = !0, s = 1; s < l.length; s++) {
        var d = l[s];
        0 !== a[d] && (n = !1);
      }
      n && (r.splice(t--, 1), (e = i((i.s = l[0]))));
    }
    return e;
  }
  var n = {},
    a = {
      99: 0,
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
    r = [];
  function i(t) {
    if (n[t]) return n[t].exports;
    var l = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(l.exports, l, l.exports, i), (l.l = !0), l.exports;
  }
  (i.m = e),
    (i.c = n),
    (i.d = function(e, t, l) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: l });
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
      var l = Object.create(null);
      if (
        (i.r(l),
        Object.defineProperty(l, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          i.d(
            l,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return l;
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
    d = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var o = 0; o < s.length; o++) t(s[o]);
  var c = d;
  return r.push([205, 0]), l();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  205: function(e, t, l) {
    'use strict';
    l.r(t),
      l.d(t, 'states', function() {
        return I;
      }),
      l.d(t, 'examples', function() {
        return y;
      });
    var n = l(0),
      a = l.n(n),
      r = l(10),
      i = l(8),
      s = l(4),
      d = l(53),
      o = l(5),
      c = 'Input Label',
      u = 'text-input-id-1',
      p = 'error-message-unique-id',
      m = 'Placeholder Text',
      b = function(e) {
        return a.a.createElement(
          o.b,
          { labelContent: c, inputId: u, isRequired: !0 },
          a.a.createElement(r.a, { id: u, placeholder: m, required: !0 })
        );
      },
      h = function(e) {
        return a.a.createElement(
          o.b,
          {
            hasError: !0,
            labelContent: c,
            inputId: u,
            errorId: e.errorId,
            isRequired: !0,
            inlineMessage: 'This field is required'
          },
          a.a.createElement(r.a, {
            id: u,
            placeholder: m,
            required: !0,
            'aria-describedby': e.errorId
          })
        );
      },
      f = function(e) {
        return a.a.createElement(
          o.b,
          {
            hasError: !0,
            labelContent: c,
            inputId: u,
            hasLeftIcon: !0,
            errorId: e.errorId,
            isRequired: !0,
            inlineMessage: 'This field is required'
          },
          a.a.createElement(i.a, {
            className: 'slds-input__icon',
            sprite: 'utility',
            symbol: 'error'
          }),
          a.a.createElement(r.a, {
            id: u,
            required: !0,
            placeholder: m,
            'aria-describedby': e.errorId
          })
        );
      },
      _ = function(e) {
        return a.a.createElement(
          o.b,
          { labelContent: c, inputId: u },
          a.a.createElement(r.a, { id: u, placeholder: m, disabled: !0 })
        );
      },
      E = function(e) {
        return a.a.createElement(
          o.b,
          { labelContent: c, inputId: u },
          a.a.createElement(r.a, {
            id: u,
            readOnly: !0,
            defaultValue: 'Read Only',
            placeholder: ''
          })
        );
      };
    t.default = a.a.createElement(
      o.b,
      { labelContent: c, inputId: u },
      a.a.createElement(r.a, { id: u, placeholder: m })
    );
    var I = [
        {
          id: 'input-required',
          label: 'Required',
          element: a.a.createElement(b, null)
        },
        {
          id: 'input-disabled',
          label: 'Disabled',
          element: a.a.createElement(_, null)
        },
        {
          id: 'input-error',
          label: 'Error',
          element: a.a.createElement(h, { errorId: p })
        },
        {
          id: 'input-error-icon',
          label: 'Error with icon',
          element: a.a.createElement(f, { errorId: p })
        },
        {
          id: 'read-only',
          label: 'Readonly',
          element: a.a.createElement(E, null)
        },
        {
          id: 'static',
          label: 'Static',
          element: a.a.createElement(
            o.h,
            null,
            a.a.createElement(
              'span',
              { className: 'slds-form-element__label' },
              'Input Label'
            ),
            a.a.createElement(
              o.c,
              null,
              a.a.createElement(
                'span',
                { className: 'slds-form-element__static' },
                'Read Only'
              )
            )
          )
        }
      ],
      y = [
        {
          id: 'left-icon',
          label: 'Left Icon',
          element: a.a.createElement(
            o.b,
            { labelContent: c, inputId: u, hasLeftIcon: !0 },
            a.a.createElement(i.a, {
              className:
                'slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default',
              sprite: 'utility',
              symbol: 'search'
            }),
            a.a.createElement(r.a, { id: u, placeholder: m })
          )
        },
        {
          id: 'right-icon',
          label: 'Right Icon',
          element: a.a.createElement(
            o.b,
            { labelContent: c, inputId: u, hasRightIcon: !0 },
            a.a.createElement(i.a, {
              className:
                'slds-icon slds-input__icon slds-input__icon_right slds-icon-text-default',
              sprite: 'utility',
              symbol: 'search'
            }),
            a.a.createElement(r.a, { id: u, placeholder: m })
          )
        },
        {
          id: 'double-icon',
          label: 'Left Icon & Clear Button',
          element: a.a.createElement(
            o.b,
            { labelContent: c, inputId: u, hasLeftIcon: !0, hasRightIcon: !0 },
            a.a.createElement(i.a, {
              className:
                'slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default',
              sprite: 'utility',
              symbol: 'search'
            }),
            a.a.createElement(r.a, { id: u, placeholder: m }),
            a.a.createElement(s.b, {
              symbol: 'clear',
              className: 'slds-input__icon slds-input__icon_right',
              iconClassName: 'slds-icon-text-light',
              assistiveText: 'Clear',
              title: 'Clear'
            })
          )
        },
        {
          id: 'double-icon-spinner',
          label: 'Clear Button with Spinner',
          element: a.a.createElement(
            o.b,
            {
              labelContent: c,
              inputId: u,
              hasLeftIcon: !0,
              hasRightIcon: !0,
              hasRightIconGroup: !0
            },
            a.a.createElement(i.a, {
              className:
                'slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default',
              sprite: 'utility',
              symbol: 'search'
            }),
            a.a.createElement(r.a, { id: u, placeholder: m }),
            a.a.createElement(
              'div',
              {
                className: 'slds-input__icon-group slds-input__icon-group_right'
              },
              a.a.createElement(d.Spinner, {
                className:
                  'slds-spinner_brand slds-spinner_x-small slds-input__spinner'
              }),
              a.a.createElement(s.b, {
                symbol: 'clear',
                className: 'slds-input__icon slds-input__icon_right',
                iconClassName: 'slds-icon-text-light',
                assistiveText: 'Clear',
                title: 'Clear'
              })
            )
          )
        },
        {
          id: 'email-input',
          label: 'Email Input',
          element: a.a.createElement(
            o.b,
            { labelContent: 'Email', inputId: 'input-email' },
            a.a.createElement(r.a, {
              id: 'input-email',
              type: 'email',
              placeholder: 'E-Mail'
            })
          )
        },
        {
          id: 'date-input',
          label: 'Date Input',
          element: a.a.createElement(
            o.b,
            { labelContent: c, inputId: u },
            a.a.createElement(r.a, { id: u, type: 'date' })
          )
        },
        {
          id: 'search-input',
          label: 'Search Input',
          element: a.a.createElement(
            o.b,
            { labelContent: c, inputId: u },
            a.a.createElement(r.a, { id: u, type: 'search' })
          )
        },
        {
          id: 'url-input',
          label: 'URL Input',
          element: a.a.createElement(
            o.b,
            { labelContent: c, inputId: u },
            a.a.createElement(r.a, { id: u, type: 'url' })
          )
        },
        {
          id: 'tel-input',
          label: 'Telephone Input',
          element: a.a.createElement(
            o.b,
            { labelContent: c, inputId: u },
            a.a.createElement(r.a, { id: u, type: 'tel' })
          )
        },
        {
          id: 'fixed-text',
          label: 'Fixed text',
          element: a.a.createElement(
            o.b,
            {
              labelContent: c,
              inputId: u,
              formControlClassName: 'slds-input-has-fixed-addon',
              labelId: 'fixed-text-label'
            },
            a.a.createElement(
              'span',
              {
                className: 'slds-form-element__addon',
                id: 'fixed-text-addon-pre'
              },
              '$'
            ),
            a.a.createElement(r.a, {
              id: u,
              placeholder: m,
              'aria-labelledby':
                'fixed-text-label fixed-text-addon-pre fixed-text-addon-post'
            }),
            a.a.createElement(
              'span',
              {
                className: 'slds-form-element__addon',
                id: 'fixed-text-addon-post'
              },
              'euro'
            )
          )
        },
        {
          id: 'inline-help',
          label: 'Inline Help',
          element: a.a.createElement(
            o.b,
            { labelId: 'inline-text-label', labelContent: c, inputId: u },
            a.a.createElement(r.a, {
              id: u,
              placeholder: m,
              'aria-labelledby': 'inline-text-label'
            }),
            a.a.createElement(
              'div',
              { className: 'slds-form-element__help' },
              'ex: (415)111-2222'
            )
          )
        },
        {
          id: 'field-level-help',
          label: 'Field level help',
          element: a.a.createElement(
            'div',
            { style: { paddingTop: '3rem', position: 'relative' } },
            a.a.createElement(
              o.b,
              { labelContent: c, inputId: u, hasTooltip: !0, showTooltip: !0 },
              a.a.createElement(r.a, { id: u, placeholder: m })
            )
          )
        }
      ];
  }
});
