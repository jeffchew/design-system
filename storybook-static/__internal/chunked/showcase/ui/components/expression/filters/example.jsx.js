var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/expression/filters/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, o, s = t[0], i = t[1], c = t[2], p = 0, d = [];
      p < s.length;
      p++
    )
      (o = s[p]),
        Object.prototype.hasOwnProperty.call(l, o) && l[o] && d.push(l[o][0]),
        (l[o] = 0);
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    for (u && u(t); d.length; ) d.shift()();
    return a.push.apply(a, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, s = 1; s < n.length; s++) {
        var i = n[s];
        0 !== l[i] && (r = !1);
      }
      r && (a.splice(t--, 1), (e = o((o.s = n[0]))));
    }
    return e;
  }
  var r = {},
    l = {
      76: 0,
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
  function o(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.m = e),
    (o.c = r),
    (o.d = function(e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
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
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          o.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
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
  var s = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    i = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var c = 0; c < s.length; c++) t(s[c]);
  var u = i;
  return a.push([161, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  161: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'ExpressionNarrowFooter', function() {
        return m;
      }),
      n.d(t, 'ExpressionNarrowGroup', function() {
        return f;
      }),
      n.d(t, 'ExpressionNarrow', function() {
        return b;
      }),
      n.d(t, 'examples', function() {
        return _;
      });
    var r = n(0),
      l = n.n(r),
      a = n(41),
      o = n(8),
      s = n(4),
      i = n(13),
      c = n(63),
      u = n(1),
      p = n.n(u),
      d = function(e) {
        return l.a.createElement(
          'div',
          {
            className: 'demo-only',
            style: { maxWidth: '320px', overflow: 'hidden' }
          },
          e.children
        );
      };
    d.propTypes = { children: p.a.node };
    var m = function(e) {
      return l.a.createElement(
        'div',
        { className: 'slds-m-top_small' },
        l.a.createElement(
          i.Button,
          { isNeutral: !0 },
          l.a.createElement(o.a, {
            className: 'slds-button__icon slds-button__icon_left',
            sprite: 'utility',
            symbol: 'add'
          }),
          'Add Condition'
        ),
        e.hasGroup &&
          l.a.createElement(
            i.Button,
            { isNeutral: !0 },
            l.a.createElement(o.a, {
              className: 'slds-button__icon slds-button__icon_left',
              sprite: 'utility',
              symbol: 'add'
            }),
            'Add Group'
          )
      );
    };
    m.propTypes = { hasGroup: p.a.bool };
    var f = function(e) {
      return l.a.createElement(
        'div',
        { className: 'slds-filters__group' },
        l.a.createElement(
          'div',
          { className: 'slds-grid slds-grid_align-spread' },
          l.a.createElement(
            'span',
            null,
            l.a.createElement('strong', null, 'AND')
          ),
          l.a.createElement(
            'span',
            { className: 'slds-assistive-text' },
            'Condition Group 1'
          ),
          l.a.createElement(s.b, {
            className: 'slds-button_icon slds-button_icon-small',
            iconClassName: 'slds-button__icon_hint',
            symbol: 'delete',
            assistiveText: 'Remove Group',
            title: 'Remove Group'
          })
        ),
        l.a.createElement(a.c, {
          isInFilter: !0,
          optionSelected: e.optionSelected
        }),
        l.a.createElement(
          'ol',
          null,
          l.a.createElement(
            c.FilterObject,
            { type: 'Amount', removable: !0, removeSymbol: 'delete' },
            'greater than "1000"'
          )
        ),
        l.a.createElement(m, null)
      );
    };
    f.propTypes = { optionSelected: p.a.string };
    var b = function(e) {
      return l.a.createElement(
        d,
        null,
        l.a.createElement(
          c.Filters,
          null,
          l.a.createElement(
            'h2',
            { className: 'slds-text-heading_small' },
            'Conditions'
          ),
          l.a.createElement(
            'div',
            { className: 'slds-m-vertical_small' },
            l.a.createElement(a.c, {
              isInFilter: !0,
              optionSelected: e.optionSelected
            })
          ),
          l.a.createElement(
            'ol',
            { className: 'slds-list_vertical slds-list_vertical-space' },
            l.a.createElement(
              c.FilterObject,
              { type: 'Amount', removable: !0, removeSymbol: 'delete' },
              'greater than "1000"'
            ),
            e.children
          ),
          l.a.createElement(m, { hasGroup: !0 })
        )
      );
    };
    (b.propTypes = { optionSelected: p.a.string, children: p.a.node }),
      (t.default = l.a.createElement(b, null));
    var _ = [
      {
        id: 'with-narrow-expression-group',
        label: 'With Narrow Expression Group',
        element: l.a.createElement(
          b,
          null,
          l.a.createElement(
            c.FilterObject,
            { operator: 'AND', type: 'Status', removable: !0 },
            'equals Red'
          ),
          l.a.createElement(
            c.FilterObjectListItem,
            null,
            l.a.createElement(f, null)
          )
        )
      },
      {
        id: 'with-option-selected',
        label: 'With Option Selected',
        element: l.a.createElement(
          b,
          { optionSelected: 'all' },
          l.a.createElement(
            c.FilterObject,
            { operator: 'AND', type: 'Status', removable: !0 },
            'equals Red'
          )
        )
      }
    ];
  }
});
