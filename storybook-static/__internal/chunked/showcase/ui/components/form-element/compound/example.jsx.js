var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/form-element/compound/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var a, i, o = t[0], s = t[1], u = t[2], d = 0, m = [];
      d < o.length;
      d++
    )
      (i = o[d]),
        Object.prototype.hasOwnProperty.call(l, i) && l[i] && m.push(l[i][0]),
        (l[i] = 0);
    for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
    for (c && c(t); m.length; ) m.shift()();
    return r.push.apply(r, u || []), n();
  }
  function n() {
    for (var e, t = 0; t < r.length; t++) {
      for (var n = r[t], a = !0, o = 1; o < n.length; o++) {
        var s = n[o];
        0 !== l[s] && (a = !1);
      }
      a && (r.splice(t--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var a = {},
    l = {
      86: 0,
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
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = e),
    (i.c = a),
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
        for (var a in e)
          i.d(
            n,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
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
  var o = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    s = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var u = 0; u < o.length; u++) t(o[u]);
  var c = s;
  return r.push([235, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  235: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'states', function() {
        return s;
      }),
      n.d(t, 'examples', function() {
        return u;
      });
    var a = n(0),
      l = n.n(a),
      r = n(26),
      i = n(5),
      o = n(10);
    t.default = l.a.createElement(
      r.a,
      { labelContent: 'Location' },
      l.a.createElement(
        r.b,
        null,
        l.a.createElement(
          'div',
          { className: 'slds-size_1-of-2' },
          l.a.createElement(
            i.b,
            { labelContent: 'Latitude', inputId: 'input-01' },
            l.a.createElement(o.a, { id: 'input-01' })
          )
        ),
        l.a.createElement(
          'div',
          { className: 'slds-size_1-of-2' },
          l.a.createElement(
            i.b,
            { labelContent: 'Longitude', inputId: 'input-02' },
            l.a.createElement(o.a, { id: 'input-02' })
          )
        )
      )
    );
    var s = [
        {
          id: 'required',
          label: 'Required',
          element: l.a.createElement(
            r.a,
            { labelContent: 'Location', isRequired: !0 },
            l.a.createElement(
              r.b,
              null,
              l.a.createElement(
                'div',
                { className: 'slds-size_1-of-2' },
                l.a.createElement(
                  i.b,
                  { labelContent: 'Latitude', inputId: 'input-01' },
                  l.a.createElement(o.a, { id: 'input-01' })
                )
              ),
              l.a.createElement(
                'div',
                { className: 'slds-size_1-of-2' },
                l.a.createElement(
                  i.b,
                  { labelContent: 'Longitude', inputId: 'input-02' },
                  l.a.createElement(o.a, { id: 'input-02' })
                )
              )
            )
          )
        },
        {
          id: 'help-text',
          label: 'Has help text icon with tooltip',
          element: l.a.createElement(
            r.a,
            { labelContent: 'Location', hasTooltip: !0 },
            l.a.createElement(
              r.b,
              null,
              l.a.createElement(
                'div',
                { className: 'slds-size_1-of-2' },
                l.a.createElement(
                  i.b,
                  { labelContent: 'Latitude', inputId: 'input-01' },
                  l.a.createElement(o.a, { id: 'input-01' })
                )
              ),
              l.a.createElement(
                'div',
                { className: 'slds-size_1-of-2' },
                l.a.createElement(
                  i.b,
                  { labelContent: 'Longitude', inputId: 'input-02' },
                  l.a.createElement(o.a, { id: 'input-02' })
                )
              )
            )
          )
        },
        {
          id: 'has-error',
          label: 'Has error',
          element: l.a.createElement(
            r.a,
            { labelContent: 'Location', isRequired: !0 },
            l.a.createElement(
              r.b,
              null,
              l.a.createElement(
                'div',
                { className: 'slds-size_1-of-2' },
                l.a.createElement(
                  i.b,
                  {
                    labelContent: 'Latitude',
                    inputId: 'input-01',
                    isRequired: !0,
                    hasError: !0,
                    errorId: 'error-message-unique-id',
                    inlineMessage: 'This field is required'
                  },
                  l.a.createElement(o.a, {
                    id: 'input-01',
                    required: !0,
                    'aria-describedby': 'error-message-unique-id'
                  })
                )
              ),
              l.a.createElement(
                'div',
                { className: 'slds-size_1-of-2' },
                l.a.createElement(
                  i.b,
                  { labelContent: 'Longitude', inputId: 'input-02' },
                  l.a.createElement(o.a, { id: 'input-02' })
                )
              )
            )
          )
        }
      ],
      u = [
        {
          id: 'deprecated-stacked',
          label: 'Deprecated - Compound form element',
          element: l.a.createElement(
            i.a,
            { label: 'Location', hasCompoundFields: !0, isDeprecated: !0 },
            l.a.createElement(
              'div',
              { className: 'slds-form-element__group' },
              l.a.createElement(
                'div',
                { className: 'slds-form-element__row' },
                l.a.createElement(
                  i.b,
                  {
                    formElementClassName: 'slds-size_1-of-2',
                    labelContent: 'Longitude',
                    inputId: 'location-longitude-01'
                  },
                  l.a.createElement(o.a, {
                    id: 'location-longitude-01',
                    defaultValue: '10.283'
                  })
                ),
                l.a.createElement(
                  i.b,
                  {
                    formElementClassName: 'slds-size_1-of-2',
                    labelContent: 'Latitude',
                    inputId: 'location-latitude-01'
                  },
                  l.a.createElement(o.a, {
                    id: 'location-latitude-01',
                    defaultValue: '54.293'
                  })
                )
              )
            )
          )
        }
      ];
  }
});
