var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/form-element/stacked/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, l, c = t[0], i = t[1], d = t[2], u = 0, p = [];
      u < c.length;
      u++
    )
      (l = c[u]),
        Object.prototype.hasOwnProperty.call(r, l) && r[l] && p.push(r[l][0]),
        (r[l] = 0);
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    for (s && s(t); p.length; ) p.shift()();
    return o.push.apply(o, d || []), a();
  }
  function a() {
    for (var e, t = 0; t < o.length; t++) {
      for (var a = o[t], n = !0, c = 1; c < a.length; c++) {
        var i = a[c];
        0 !== r[i] && (n = !1);
      }
      n && (o.splice(t--, 1), (e = l((l.s = a[0]))));
    }
    return e;
  }
  var n = {},
    r = {
      89: 0,
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
    o = [];
  function l(t) {
    if (n[t]) return n[t].exports;
    var a = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, l), (a.l = !0), a.exports;
  }
  (l.m = e),
    (l.c = n),
    (l.d = function(e, t, a) {
      l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (l.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (l.t = function(e, t) {
      if ((1 & t && (e = l(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (l.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          l.d(
            a,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return a;
    }),
    (l.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return l.d(t, 'a', t), t;
    }),
    (l.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (l.p = '/assets/scripts/bundle/');
  var c = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    i = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var d = 0; d < c.length; d++) t(c[d]);
  var s = i;
  return o.push([131, 0]), a();
})({
  0: function(e, t) {
    e.exports = React;
  },
  131: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'states', function() {
        return p;
      }),
      a.d(t, 'examples', function() {
        return f;
      });
    var n = a(0),
      r = a.n(n),
      o = a(35),
      l = a(37),
      c = a(5),
      i = a(10),
      d = a(38),
      s = a(28),
      u = a(24);
    t.default = r.a.createElement(o.a, {
      direction: 'stacked',
      snapshot: l.b,
      isViewMode: !0,
      hasInlineEdit: !0
    });
    var p = [
        {
          id: 'edit-stacked',
          label: 'Stacked form layout - Edit Mode',
          element: r.a.createElement(o.a, {
            direction: 'stacked',
            snapshot: l.b
          })
        }
      ],
      f = [
        {
          id: 'stacked-single-column',
          label: 'Stacked form layout - 1 column - Read Only Mode',
          element: r.a.createElement(o.a, {
            direction: 'stacked',
            snapshot: l.d,
            isViewMode: !0
          })
        },
        {
          id: 'deprecated-view-stacked',
          label: 'Deprecated - Stacked form layout - View Mode',
          element: r.a.createElement(o.a, {
            direction: 'stacked',
            snapshot: l.a,
            isViewMode: !0,
            hasInlineEdit: !0,
            isDeprecated: !0
          })
        },
        {
          id: 'deprecated-edit-stacked',
          label: 'Deprecated - Stacked form layout - Edit Mode',
          element: r.a.createElement(o.a, {
            direction: 'stacked',
            snapshot: l.a,
            isDeprecated: !0
          })
        },
        {
          id: 'simple-stacked',
          label: 'Simple - Stacked form layout',
          element: r.a.createElement(
            'div',
            { className: 'slds-form' },
            r.a.createElement(
              c.b,
              {
                labelContent: 'Text Input',
                inputId: 'stacked-input-id-01',
                isStacked: !0
              },
              r.a.createElement(i.a, {
                id: 'stacked-input-id-01',
                placeholder: 'Placeholder Text'
              })
            ),
            r.a.createElement(
              c.b,
              {
                labelContent: 'Textarea Input',
                inputId: 'stacked-input-id-02',
                isStacked: !0
              },
              r.a.createElement(d.Textarea, {
                id: 'stacked-input-id-02',
                placeholder: 'Placeholder Text'
              })
            ),
            r.a.createElement(
              c.a,
              { label: 'Checkbox Group label', isStacked: !0 },
              r.a.createElement(u.Checkbox, {
                label: 'All opportunities owned by you',
                name: 'default'
              }),
              r.a.createElement(u.Checkbox, {
                label: 'All contacts in the account owned by you',
                name: 'default'
              })
            ),
            r.a.createElement(
              c.a,
              { label: 'Radio Group label', isStacked: !0 },
              r.a.createElement(s.Radio, {
                label: 'Lead Generation',
                name: 'options'
              }),
              r.a.createElement(s.Radio, {
                label: 'Education Leads',
                name: 'options'
              })
            )
          )
        }
      ];
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  }
});
