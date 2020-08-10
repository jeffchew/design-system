var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/slider/docs.mdx.js'] = (function(
  e
) {
  function t(t) {
    for (
      var l, i, s = t[0], c = t[1], u = t[2], m = 0, o = [];
      m < s.length;
      m++
    )
      (i = s[m]),
        Object.prototype.hasOwnProperty.call(n, i) && n[i] && o.push(n[i][0]),
        (n[i] = 0);
    for (l in c) Object.prototype.hasOwnProperty.call(c, l) && (e[l] = c[l]);
    for (d && d(t); o.length; ) o.shift()();
    return r.push.apply(r, u || []), a();
  }
  function a() {
    for (var e, t = 0; t < r.length; t++) {
      for (var a = r[t], l = !0, s = 1; s < a.length; s++) {
        var c = a[s];
        0 !== n[c] && (l = !1);
      }
      l && (r.splice(t--, 1), (e = i((i.s = a[0]))));
    }
    return e;
  }
  var l = {},
    n = { 69: 0 },
    r = [];
  function i(t) {
    if (l[t]) return l[t].exports;
    var a = (l[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, i), (a.l = !0), a.exports;
  }
  (i.m = e),
    (i.c = l),
    (i.d = function(e, t, a) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
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
      var a = Object.create(null);
      if (
        (i.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var l in e)
          i.d(
            a,
            l,
            function(t) {
              return e[t];
            }.bind(null, l)
          );
      return a;
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
    c = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var u = 0; u < s.length; u++) t(s[u]);
  var d = c;
  return r.push([278, 0]), a();
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
  278: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'getElement', function() {
        return S;
      }),
      a.d(t, 'getContents', function() {
        return w;
      });
    var l = a(0),
      n = a.n(l),
      r = a(4),
      i = a(1),
      s = a(5),
      c = a.n(s),
      u = a(8),
      d = 'slider-id-01',
      m = function(e) {
        return n.a.createElement(
          'span',
          { className: 'slds-slider-label' },
          n.a.createElement(
            'span',
            { className: 'slds-slider-label__label' },
            'Slider Label'
          ),
          n.a.createElement(
            'span',
            { className: 'slds-slider-label__range' },
            e.min || '0',
            ' - ',
            e.max || '100'
          )
        );
      },
      o = function(e) {
        return n.a.createElement(
          'div',
          { className: c()('slds-slider', e.className) },
          n.a.createElement('input', {
            'aria-describedby': e['aria-describedby'],
            id: e.id || d,
            className: 'slds-slider__range',
            type: 'range',
            defaultValue: e.value,
            min: e.min,
            max: e.max,
            step: e.step,
            disabled: e.disabled
          }),
          n.a.createElement(
            'span',
            { className: 'slds-slider__value', 'aria-hidden': 'true' },
            e.value
          )
        );
      },
      b = n.a.createElement(
        u.b,
        { labelContent: n.a.createElement(m, null), inputId: d },
        n.a.createElement(o, { value: '50' })
      ),
      p = [
        {
          id: 'disabled',
          label: 'Disabled',
          element: n.a.createElement(
            u.b,
            { labelContent: n.a.createElement(m, null), inputId: d },
            n.a.createElement(o, { value: '50', disabled: !0 })
          )
        },
        {
          id: 'value-0',
          label: 'Value: 0',
          element: n.a.createElement(
            u.b,
            {
              labelContent: n.a.createElement(m, { min: '0', max: '100' }),
              inputId: d
            },
            n.a.createElement(o, { value: '0' })
          )
        },
        {
          id: 'value-25',
          label: 'Value: 25',
          element: n.a.createElement(
            u.b,
            {
              labelContent: n.a.createElement(m, { min: '0', max: '100' }),
              inputId: d
            },
            n.a.createElement(o, { value: '25' })
          )
        },
        {
          id: 'value-50',
          label: 'Value: 50',
          element: n.a.createElement(
            u.b,
            {
              labelContent: n.a.createElement(m, { min: '0', max: '100' }),
              inputId: d
            },
            n.a.createElement(o, { value: '50' })
          )
        },
        {
          id: 'value-75',
          label: 'Value: 75',
          element: n.a.createElement(
            u.b,
            {
              labelContent: n.a.createElement(m, { min: '0', max: '100' }),
              inputId: d
            },
            n.a.createElement(o, { value: '75' })
          )
        },
        {
          id: 'value-100',
          label: 'Value: 100',
          element: n.a.createElement(
            u.b,
            {
              labelContent: n.a.createElement(m, { min: '0', max: '100' }),
              inputId: d
            },
            n.a.createElement(o, { value: '100' })
          )
        }
      ],
      h = [
        {
          id: 'min-max',
          label: 'Min/Max Range',
          element: n.a.createElement(
            u.b,
            {
              labelContent: n.a.createElement(m, { min: '0', max: '400' }),
              inputId: d
            },
            n.a.createElement(o, { value: '200', min: '0', max: '400' })
          )
        },
        {
          id: 'steps',
          label: 'Min/Max Range with Steps',
          element: n.a.createElement(
            u.b,
            {
              labelContent: n.a.createElement(m, { min: '0', max: '400' }),
              inputId: d
            },
            n.a.createElement(o, {
              value: '200',
              min: '0',
              max: '400',
              step: '100'
            })
          )
        },
        {
          id: 'width-x-small',
          label: 'Width: x-small',
          element: n.a.createElement(
            u.b,
            { labelContent: n.a.createElement(m, null), inputId: d },
            n.a.createElement(o, {
              className: 'slds-size_x-small',
              value: '50'
            })
          )
        },
        {
          id: 'width-small',
          label: 'Width: small',
          element: n.a.createElement(
            u.b,
            { labelContent: n.a.createElement(m, null), inputId: d },
            n.a.createElement(o, { className: 'slds-size_small', value: '50' })
          )
        },
        {
          id: 'width-medium',
          label: 'Width: medium',
          element: n.a.createElement(
            u.b,
            { labelContent: n.a.createElement(m, null), inputId: d },
            n.a.createElement(o, { className: 'slds-size_medium', value: '50' })
          )
        },
        {
          id: 'width-large',
          label: 'Width: large',
          element: n.a.createElement(
            u.b,
            { labelContent: n.a.createElement(m, null), inputId: d },
            n.a.createElement(o, { className: 'slds-size_large', value: '50' })
          )
        },
        {
          id: 'error',
          label: 'Error',
          element: n.a.createElement(
            u.b,
            {
              hasError: !0,
              labelContent: n.a.createElement(m, null),
              inputId: d
            },
            n.a.createElement(o, {
              'aria-describedby': 'error-message',
              className: 'slds-size_large',
              value: '50'
            }),
            n.a.createElement(
              'div',
              { id: 'error-message', className: 'slds-form-element__help' },
              'There is a problem with this field'
            )
          )
        },
        {
          id: 'vertical',
          label: 'Vertical',
          element: n.a.createElement(
            u.b,
            { labelContent: n.a.createElement(m, null), inputId: d },
            n.a.createElement(o, {
              value: '50',
              className: 'slds-slider_vertical'
            })
          )
        }
      ],
      E = a(2),
      v = a(33),
      f = r.c.code,
      O = r.c.h2,
      g = r.c.h3,
      j = r.c.li,
      x = r.c.p,
      _ = r.c.strong,
      y = r.c.ul,
      S = function() {
        return Object(l.createElement)(
          r.b,
          {},
          Object(l.createElement)(
            'div',
            { className: 'doc lead' },
            'An input range slider lets the user specify a numeric value which must be between two specified values.'
          ),
          Object(l.createElement)(i.a, { exampleOnly: !0 }, b),
          O({ id: 'About-Slider' }, 'About Slider'),
          x(
            {},
            'The slider component is built using a native input form element with the attribute type of "range".'
          ),
          g({ id: 'Implementation' }, 'Implementation'),
          y(
            {},
            j(
              {},
              f({}, 'slds-slider'),
              ' should be applied to the div containing both the ',
              f({}, '<input>'),
              ' and the ',
              f({}, '<span>'),
              ' that holds the value of the ',
              f({}, '<input>')
            ),
            j(
              {},
              f({}, 'slds-slider__range'),
              ' should be applied to the ',
              f({}, '<input>'),
              ' element',
              y(
                {},
                j(
                  {},
                  'The ',
                  f({}, '<input>'),
                  ' should have a unique ID that matches the ',
                  f({}, 'for'),
                  ' attribute on the form element ',
                  f({}, '<label>')
                )
              )
            ),
            j(
              {},
              'The ',
              f({}, 'slds-slider__range'),
              ' element can accept 4 attributes that describe the input range:',
              y(
                {},
                j({}, _({}, 'value'), ': Current value of the input range'),
                j({}, _({}, 'min'), ': Minimum value of a specified range'),
                j({}, _({}, 'max'), ': Maximum value of a specified range'),
                j(
                  {},
                  _({}, 'step'),
                  ': Indicates the granularity that is expected by limiting the allowed values'
                )
              )
            ),
            j(
              {},
              'The ',
              f({}, 'slds-slider__value'),
              ' span should be updated with the current value of the ',
              f({}, '<input>')
            ),
            j(
              {},
              'The ',
              f({}, 'slds-slider__value'),
              ' element must have ',
              f({}, 'aria-hidden=true'),
              ' to hide from screen readers as they understand that value already from the ',
              f({}, '<input>')
            ),
            j(
              {},
              'The class ',
              f({}, 'slds-assistive-text'),
              ' can be placed on the ',
              f({}, '<label>'),
              ', or either ',
              f({}, '<span>'),
              ' within the ',
              f({}, '<label>'),
              ', to visually hide the either value (or both).'
            )
          ),
          g({ id: 'Mobile' }, 'Mobile'),
          Object(l.createElement)(v.a, {
            patternSpecificText:
              'sliders will have an increased size to accommodate using a finger instead of the more precise mouse cursor'
          }),
          Object(l.createElement)(i.a, { frameOnly: !0 }, b),
          O({ id: 'Base' }, 'Base'),
          Object(l.createElement)(i.a, null, b),
          O({ id: 'States' }, 'States'),
          g({ id: 'Disabled' }, 'Disabled'),
          Object(l.createElement)(i.a, null, Object(E.e)(p, 'disabled')),
          g({ id: 'Value:-0' }, 'Value: 0'),
          Object(l.createElement)(i.a, null, Object(E.e)(p, 'value-0')),
          g({ id: 'Value:-25' }, 'Value: 25'),
          Object(l.createElement)(i.a, null, Object(E.e)(p, 'value-25')),
          g({ id: 'Value:-50' }, 'Value: 50'),
          Object(l.createElement)(i.a, null, Object(E.e)(p, 'value-50')),
          g({ id: 'Value:-75' }, 'Value: 75'),
          Object(l.createElement)(i.a, null, Object(E.e)(p, 'value-75')),
          g({ id: 'Value:-100' }, 'Value: 100'),
          Object(l.createElement)(i.a, null, Object(E.e)(p, 'value-100')),
          O({ id: 'Examples' }, 'Examples'),
          g({ id: 'MinMax-Range' }, 'Min/Max Range'),
          Object(l.createElement)(i.a, null, Object(E.e)(h, 'min-max')),
          g({ id: 'MinMax-Range-with-Steps' }, 'Min/Max Range with Steps'),
          Object(l.createElement)(i.a, null, Object(E.e)(h, 'steps')),
          g({ id: 'Width:-x-small' }, 'Width: x-small'),
          Object(l.createElement)(i.a, null, Object(E.e)(h, 'width-x-small')),
          g({ id: 'Width:-small' }, 'Width: small'),
          Object(l.createElement)(i.a, null, Object(E.e)(h, 'width-small')),
          g({ id: 'Width:-medium' }, 'Width: medium'),
          Object(l.createElement)(i.a, null, Object(E.e)(h, 'width-medium')),
          g({ id: 'Width:-large' }, 'Width: large'),
          Object(l.createElement)(i.a, null, Object(E.e)(h, 'width-large')),
          g({ id: 'Error' }, 'Error'),
          Object(l.createElement)(i.a, null, Object(E.e)(h, 'error')),
          O({ id: 'Modifiers' }, 'Modifiers'),
          g({ id: 'Vertical' }, 'Vertical'),
          Object(l.createElement)(i.a, null, Object(E.e)(h, 'vertical'))
        );
      },
      w = function() {
        return Object(r.a)(S());
      };
  }
});
