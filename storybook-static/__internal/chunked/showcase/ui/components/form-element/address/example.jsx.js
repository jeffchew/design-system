var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/form-element/address/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var a, i, d = t[0], m = t[1], o = t[2], u = 0, c = [];
      u < d.length;
      u++
    )
      (i = d[u]),
        Object.prototype.hasOwnProperty.call(n, i) && n[i] && c.push(n[i][0]),
        (n[i] = 0);
    for (a in m) Object.prototype.hasOwnProperty.call(m, a) && (e[a] = m[a]);
    for (s && s(t); c.length; ) c.shift()();
    return r.push.apply(r, o || []), l();
  }
  function l() {
    for (var e, t = 0; t < r.length; t++) {
      for (var l = r[t], a = !0, d = 1; d < l.length; d++) {
        var m = l[d];
        0 !== n[m] && (a = !1);
      }
      a && (r.splice(t--, 1), (e = i((i.s = l[0]))));
    }
    return e;
  }
  var a = {},
    n = {
      84: 0,
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
    if (a[t]) return a[t].exports;
    var l = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(l.exports, l, l.exports, i), (l.l = !0), l.exports;
  }
  (i.m = e),
    (i.c = a),
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
        for (var a in e)
          i.d(
            l,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
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
  var d = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    m = d.push.bind(d);
  (d.push = t), (d = d.slice());
  for (var o = 0; o < d.length; o++) t(d[o]);
  var s = m;
  return r.push([201, 0]), l();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  201: function(e, t, l) {
    'use strict';
    l.r(t),
      l.d(t, 'states', function() {
        return o;
      });
    var a = l(0),
      n = l.n(a),
      r = l(26),
      i = l(5),
      d = l(10),
      m = l(38);
    t.default = n.a.createElement(
      r.a,
      { labelContent: 'Billing Address', isAddress: !0 },
      n.a.createElement(
        r.b,
        null,
        n.a.createElement(
          'div',
          { className: 'slds-size_1-of-1' },
          n.a.createElement(
            i.b,
            { labelContent: 'Billing Street', inputId: 'form-element-id-04' },
            n.a.createElement(m.Textarea, {
              id: 'form-element-id-04',
              defaultValue: '525 S. Lexington Ave',
              required: !0
            })
          )
        )
      ),
      n.a.createElement(
        r.b,
        null,
        n.a.createElement(
          'div',
          { className: 'slds-size_4-of-6' },
          n.a.createElement(
            i.b,
            { labelContent: 'Billing City', inputId: 'form-element-id-05' },
            n.a.createElement(d.a, {
              id: 'form-element-id-05',
              defaultValue: 'Burlington',
              required: !0
            })
          )
        ),
        n.a.createElement(
          'div',
          { className: 'slds-size_2-of-6' },
          n.a.createElement(
            i.b,
            {
              labelContent: 'Billing State/Province',
              inputId: 'form-element-id-06'
            },
            n.a.createElement(d.a, {
              id: 'form-element-id-06',
              defaultValue: 'NC',
              required: !0
            })
          )
        )
      ),
      n.a.createElement(
        r.b,
        null,
        n.a.createElement(
          'div',
          { className: 'slds-size_4-of-6' },
          n.a.createElement(
            i.b,
            {
              labelContent: 'Billing Zip/Postal Code',
              inputId: 'form-element-id-07'
            },
            n.a.createElement(d.a, {
              id: 'form-element-id-07',
              defaultValue: '27215',
              required: !0
            })
          )
        ),
        n.a.createElement(
          'div',
          { className: 'slds-size_2-of-6' },
          n.a.createElement(
            i.b,
            { labelContent: 'Billing Country', inputId: 'form-element-id-08' },
            n.a.createElement(d.a, {
              id: 'form-element-id-08',
              defaultValue: 'USA',
              required: !0
            })
          )
        )
      )
    );
    var o = [
      {
        id: 'required',
        label: 'Required',
        element: n.a.createElement(
          r.a,
          { labelContent: 'Billing Address', isAddress: !0, isRequired: !0 },
          n.a.createElement(
            r.b,
            null,
            n.a.createElement(
              'div',
              { className: 'slds-size_1-of-1' },
              n.a.createElement(
                i.b,
                {
                  labelContent: 'Billing Street',
                  inputId: 'form-element-id-04'
                },
                n.a.createElement(m.Textarea, {
                  id: 'form-element-id-04',
                  defaultValue: '525 S. Lexington Ave',
                  required: !0
                })
              )
            )
          ),
          n.a.createElement(
            r.b,
            null,
            n.a.createElement(
              'div',
              { className: 'slds-size_4-of-6' },
              n.a.createElement(
                i.b,
                { labelContent: 'Billing City', inputId: 'form-element-id-05' },
                n.a.createElement(d.a, {
                  id: 'form-element-id-05',
                  defaultValue: 'Burlington',
                  required: !0
                })
              )
            ),
            n.a.createElement(
              'div',
              { className: 'slds-size_2-of-6' },
              n.a.createElement(
                i.b,
                {
                  labelContent: 'Billing State/Province',
                  inputId: 'form-element-id-06'
                },
                n.a.createElement(d.a, {
                  id: 'form-element-id-06',
                  defaultValue: 'NC',
                  required: !0
                })
              )
            )
          ),
          n.a.createElement(
            r.b,
            null,
            n.a.createElement(
              'div',
              { className: 'slds-size_4-of-6' },
              n.a.createElement(
                i.b,
                {
                  labelContent: 'Billing Zip/Postal Code',
                  inputId: 'form-element-id-07'
                },
                n.a.createElement(d.a, {
                  id: 'form-element-id-07',
                  defaultValue: '27215',
                  required: !0
                })
              )
            ),
            n.a.createElement(
              'div',
              { className: 'slds-size_2-of-6' },
              n.a.createElement(
                i.b,
                {
                  labelContent: 'Billing Country',
                  inputId: 'form-element-id-08'
                },
                n.a.createElement(d.a, {
                  id: 'form-element-id-08',
                  defaultValue: 'USA',
                  required: !0
                })
              )
            )
          )
        )
      },
      {
        id: 'help-text',
        label: 'Has help text icon with tooltip',
        element: n.a.createElement(
          r.a,
          { labelContent: 'Billing Address', isAddress: !0, hasTooltip: !0 },
          n.a.createElement(
            r.b,
            null,
            n.a.createElement(
              'div',
              { className: 'slds-size_1-of-1' },
              n.a.createElement(
                i.b,
                {
                  labelContent: 'Billing Street',
                  inputId: 'form-element-id-04'
                },
                n.a.createElement(m.Textarea, {
                  id: 'form-element-id-04',
                  defaultValue: '525 S. Lexington Ave',
                  required: !0
                })
              )
            )
          ),
          n.a.createElement(
            r.b,
            null,
            n.a.createElement(
              'div',
              { className: 'slds-size_4-of-6' },
              n.a.createElement(
                i.b,
                { labelContent: 'Billing City', inputId: 'form-element-id-05' },
                n.a.createElement(d.a, {
                  id: 'form-element-id-05',
                  defaultValue: 'Burlington',
                  required: !0
                })
              )
            ),
            n.a.createElement(
              'div',
              { className: 'slds-size_2-of-6' },
              n.a.createElement(
                i.b,
                {
                  labelContent: 'Billing State/Province',
                  inputId: 'form-element-id-06'
                },
                n.a.createElement(d.a, {
                  id: 'form-element-id-06',
                  defaultValue: 'NC',
                  required: !0
                })
              )
            )
          ),
          n.a.createElement(
            r.b,
            null,
            n.a.createElement(
              'div',
              { className: 'slds-size_4-of-6' },
              n.a.createElement(
                i.b,
                {
                  labelContent: 'Billing Zip/Postal Code',
                  inputId: 'form-element-id-07'
                },
                n.a.createElement(d.a, {
                  id: 'form-element-id-07',
                  defaultValue: '27215',
                  required: !0
                })
              )
            ),
            n.a.createElement(
              'div',
              { className: 'slds-size_2-of-6' },
              n.a.createElement(
                i.b,
                {
                  labelContent: 'Billing Country',
                  inputId: 'form-element-id-08'
                },
                n.a.createElement(d.a, {
                  id: 'form-element-id-08',
                  defaultValue: 'USA',
                  required: !0
                })
              )
            )
          )
        )
      },
      {
        id: 'has-error',
        label: 'Has error',
        element: n.a.createElement(
          r.a,
          {
            labelContent: 'Billing Address',
            isAddress: !0,
            isRequired: !0,
            hasError: !0,
            errorId: 'address-error-id-01',
            inlineMessage: 'These fields are required'
          },
          n.a.createElement(
            r.b,
            null,
            n.a.createElement(
              'div',
              { className: 'slds-size_1-of-1' },
              n.a.createElement(
                i.b,
                {
                  labelContent: 'Billing Street',
                  inputId: 'form-element-id-04'
                },
                n.a.createElement(m.Textarea, {
                  id: 'form-element-id-04',
                  defaultValue: '525 S. Lexington Ave',
                  required: !0
                })
              )
            )
          ),
          n.a.createElement(
            r.b,
            null,
            n.a.createElement(
              'div',
              { className: 'slds-size_4-of-6' },
              n.a.createElement(
                i.b,
                { labelContent: 'Billing City', inputId: 'form-element-id-05' },
                n.a.createElement(d.a, {
                  id: 'form-element-id-05',
                  defaultValue: 'Burlington',
                  required: !0
                })
              )
            ),
            n.a.createElement(
              'div',
              { className: 'slds-size_2-of-6' },
              n.a.createElement(
                i.b,
                {
                  labelContent: 'Billing State/Province',
                  inputId: 'form-element-id-06'
                },
                n.a.createElement(d.a, {
                  id: 'form-element-id-06',
                  defaultValue: 'NC',
                  required: !0
                })
              )
            )
          ),
          n.a.createElement(
            r.b,
            null,
            n.a.createElement(
              'div',
              { className: 'slds-size_4-of-6' },
              n.a.createElement(
                i.b,
                {
                  labelContent: 'Billing Zip/Postal Code',
                  inputId: 'form-element-id-07'
                },
                n.a.createElement(d.a, {
                  id: 'form-element-id-07',
                  defaultValue: '27215',
                  required: !0
                })
              )
            ),
            n.a.createElement(
              'div',
              { className: 'slds-size_2-of-6' },
              n.a.createElement(
                i.b,
                {
                  labelContent: 'Billing Country',
                  inputId: 'form-element-id-08'
                },
                n.a.createElement(d.a, {
                  id: 'form-element-id-08',
                  defaultValue: 'USA',
                  required: !0
                })
              )
            )
          )
        )
      }
    ];
  }
});
