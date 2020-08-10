var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/form-element/horizontal/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var o, l, i = t[0], c = t[1], u = t[2], s = 0, p = [];
      s < i.length;
      s++
    )
      (l = i[s]),
        Object.prototype.hasOwnProperty.call(a, l) && a[l] && p.push(a[l][0]),
        (a[l] = 0);
    for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
    for (d && d(t); p.length; ) p.shift()();
    return r.push.apply(r, u || []), n();
  }
  function n() {
    for (var e, t = 0; t < r.length; t++) {
      for (var n = r[t], o = !0, i = 1; i < n.length; i++) {
        var c = n[i];
        0 !== a[c] && (o = !1);
      }
      o && (r.splice(t--, 1), (e = l((l.s = n[0]))));
    }
    return e;
  }
  var o = {},
    a = {
      87: 0,
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
  function l(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, l), (n.l = !0), n.exports;
  }
  (l.m = e),
    (l.c = o),
    (l.d = function(e, t, n) {
      l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
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
      var n = Object.create(null);
      if (
        (l.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          l.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
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
  var i = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    c = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var u = 0; u < i.length; u++) t(i[u]);
  var d = c;
  return r.push([134, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  134: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'states', function() {
        return p;
      }),
      n.d(t, 'examples', function() {
        return h;
      });
    var o = n(0),
      a = n.n(o),
      r = n(35),
      l = n(37),
      i = n(5),
      c = n(10),
      u = n(38),
      d = n(28),
      s = n(24);
    t.default = a.a.createElement(r.a, {
      direction: 'horizontal',
      snapshot: l.c,
      isViewMode: !0,
      hasInlineEdit: !0
    });
    var p = [
        {
          id: 'edit-horizontal',
          label: 'Horizontal form layout - Edit Mode',
          element: a.a.createElement(r.a, {
            direction: 'horizontal',
            snapshot: l.c
          })
        }
      ],
      h = [
        {
          id: 'horizontal-single-column',
          label: 'Horizontal form layout - 1 column - Read Only Mode',
          element: a.a.createElement(r.a, {
            direction: 'horizontal',
            snapshot: l.d,
            isViewMode: !0
          })
        },
        {
          id: 'deprecated-view-horizontal',
          label: 'Deprecated - Horizontal form layout - View Mode',
          element: a.a.createElement(r.a, {
            direction: 'horizontal',
            snapshot: l.a,
            isViewMode: !0,
            hasInlineEdit: !0,
            isDeprecated: !0
          })
        },
        {
          id: 'deprecated-edit-horizontal',
          label: 'Deprecated - Horizontal form layout - Edit Mode',
          element: a.a.createElement(r.a, {
            direction: 'horizontal',
            snapshot: l.a,
            isDeprecated: !0
          })
        },
        {
          id: 'simple-horizontal',
          label: 'Simple - Horizontal form layout',
          element: a.a.createElement(
            'div',
            { className: 'slds-form' },
            a.a.createElement(
              i.b,
              {
                labelContent: 'Text Input',
                inputId: 'horizontal-input-id-01',
                isHorizontal: !0
              },
              a.a.createElement(c.a, {
                id: 'horizontal-input-id-01',
                placeholder: 'Placeholder Text'
              })
            ),
            a.a.createElement(
              i.b,
              {
                labelContent: 'Textarea Input',
                inputId: 'horizontal-input-id-02',
                isHorizontal: !0
              },
              a.a.createElement(u.Textarea, {
                id: 'horizontal-input-id-02',
                placeholder: 'Placeholder Text'
              })
            ),
            a.a.createElement(
              i.a,
              { label: 'Checkbox Group label', isHorizontal: !0 },
              a.a.createElement(s.Checkbox, {
                label: 'All opportunities owned by you',
                name: 'default'
              }),
              a.a.createElement(s.Checkbox, {
                label: 'All contacts in the account owned by you',
                name: 'default'
              })
            ),
            a.a.createElement(
              i.a,
              { label: 'Radio Group label', isHorizontal: !0 },
              a.a.createElement(d.Radio, {
                label: 'Lead Generation',
                name: 'options'
              }),
              a.a.createElement(d.Radio, {
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
