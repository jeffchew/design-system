var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/data-tables/responsive/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var l, r, o = t[0], s = t[1], i = t[2], m = 0, d = [];
      m < o.length;
      m++
    )
      (r = o[m]),
        Object.prototype.hasOwnProperty.call(n, r) && n[r] && d.push(n[r][0]),
        (n[r] = 0);
    for (l in s) Object.prototype.hasOwnProperty.call(s, l) && (e[l] = s[l]);
    for (u && u(t); d.length; ) d.shift()();
    return c.push.apply(c, i || []), a();
  }
  function a() {
    for (var e, t = 0; t < c.length; t++) {
      for (var a = c[t], l = !0, o = 1; o < a.length; o++) {
        var s = a[o];
        0 !== n[s] && (l = !1);
      }
      l && (c.splice(t--, 1), (e = r((r.s = a[0]))));
    }
    return e;
  }
  var l = {},
    n = {
      55: 0,
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
    c = [];
  function r(t) {
    if (l[t]) return l[t].exports;
    var a = (l[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
  }
  (r.m = e),
    (r.c = l),
    (r.d = function(e, t, a) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (r.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (r.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var l in e)
          r.d(
            a,
            l,
            function(t) {
              return e[t];
            }.bind(null, l)
          );
      return a;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(t, 'a', t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = '/assets/scripts/bundle/');
  var o = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    s = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var i = 0; i < o.length; i++) t(o[i]);
  var u = s;
  return c.push([256, 0]), a();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  256: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'states', function() {
        return p;
      });
    var l = a(0),
      n = a.n(l),
      c = a(1),
      r = a.n(c),
      o = a(4),
      s = a(24),
      i = a(3),
      u = function(e) {
        return n.a.createElement(
          i.q,
          null,
          n.a.createElement(
            i.c,
            null,
            n.a.createElement(
              'span',
              { className: 'slds-assistive-text', id: 'check-group-header' },
              'Choose a row to select'
            ),
            n.a.createElement(s.Checkbox, {
              checked: e.checked,
              groupId: 'check-group-header',
              hideLabel: !0,
              id: 'checkbox-all',
              label: 'Select all',
              labelId: 'check-button-label-all'
            })
          ),
          n.a.createElement(
            i.c,
            null,
            n.a.createElement(i.b, { columnName: 'Opportunity Name' })
          ),
          n.a.createElement(
            i.c,
            null,
            n.a.createElement(i.b, { columnName: 'Account Name' })
          ),
          n.a.createElement(
            i.c,
            null,
            n.a.createElement(i.b, { columnName: 'Close Date' })
          ),
          n.a.createElement(
            i.c,
            null,
            n.a.createElement(i.b, { columnName: 'Stage' })
          ),
          n.a.createElement(
            i.c,
            null,
            n.a.createElement(i.b, { columnName: 'Confidence' })
          ),
          n.a.createElement(
            i.c,
            null,
            n.a.createElement(i.b, { columnName: 'Amount' })
          ),
          n.a.createElement(
            i.c,
            null,
            n.a.createElement(i.b, { columnName: 'Contact' })
          ),
          n.a.createElement(i.c, { columnName: 'Actions', isAssistiveText: !0 })
        );
      };
    u.propTypes = { checked: r.a.bool };
    var m = function(e) {
      return n.a.createElement(
        i.o,
        null,
        n.a.createElement(
          i.s,
          { 'data-label': 'Select Row', type: 'base' },
          n.a.createElement(s.Checkbox, {
            checked: e.checked,
            groupId: 'check-group-header',
            hideLabel: !0,
            id: 'checkbox-0'.concat(e.index),
            label: 'Select item '.concat(e.index),
            labelId: 'check-button-label-0'.concat(e.index)
          })
        ),
        n.a.createElement(
          i.l,
          { 'data-label': 'Opportunity Name', type: 'base' },
          n.a.createElement(i.i, { cellText: e.title })
        ),
        n.a.createElement(
          i.s,
          { 'data-label': 'Account Name', type: 'base' },
          n.a.createElement(i.i, { cellText: 'Cloudhub' })
        ),
        n.a.createElement(
          i.s,
          { 'data-label': 'Close Date', type: 'base' },
          n.a.createElement(i.i, { cellText: '4/14/2015' })
        ),
        n.a.createElement(
          i.s,
          { 'data-label': 'Prospecting', type: 'base' },
          n.a.createElement(i.i, { cellText: 'Prospecting' })
        ),
        n.a.createElement(
          i.s,
          { 'data-label': 'Confidence', type: 'base' },
          n.a.createElement(i.i, { cellText: '20%' })
        ),
        n.a.createElement(
          i.s,
          { 'data-label': 'Amount', type: 'base' },
          n.a.createElement(i.i, { cellText: '$25k' })
        ),
        n.a.createElement(
          i.s,
          { 'data-label': 'Contact', type: 'base' },
          n.a.createElement(i.i, {
            actionableMode: !0,
            cellLink: 'javascript:void(0);',
            cellText: 'jrogers@cloudhub.com'
          })
        ),
        n.a.createElement(
          i.s,
          { 'data-label': 'Actions', isShrunken: !0, type: 'base' },
          n.a.createElement(o.b, {
            assistiveText: 'Show More',
            className:
              'slds-button_icon-border-filled slds-button_icon-x-small',
            iconClassName: 'slds-button__icon_hint slds-button__icon_small',
            symbol: 'down',
            title: 'Show More'
          })
        )
      );
    };
    m.propTypes = { checked: r.a.bool, index: r.a.string, title: r.a.string };
    var d = function(e) {
        return n.a.createElement(
          i.r,
          { isBordered: !0, isResponsiveStacked: !0, type: 'base' },
          n.a.createElement(i.p, null, n.a.createElement(u, null)),
          n.a.createElement(
            i.n,
            null,
            n.a.createElement(m, { index: '1', title: 'Cloudhub' }),
            n.a.createElement(m, {
              index: '2',
              title: 'Cloudhub + Anypoint Connectors'
            })
          )
        );
      },
      b = function(e) {
        return n.a.createElement(
          i.r,
          { isBordered: !0, isResponsive: !0, type: 'base' },
          n.a.createElement(i.p, null, n.a.createElement(u, null)),
          n.a.createElement(
            i.n,
            null,
            n.a.createElement(m, { index: '1', title: 'Cloudhub' }),
            n.a.createElement(m, {
              index: '2',
              title: 'Cloudhub + Anypoint Connectors'
            })
          )
        );
      },
      p = ((t.default = n.a.createElement(b, null)),
      [
        {
          id: 'data-table-responsive-horizontal',
          label: 'Stacked with Horizontal Cells',
          element: n.a.createElement(b, null)
        },
        {
          id: 'data-table-responsive-stacked',
          label: 'Stacked',
          element: n.a.createElement(d, null)
        }
      ]);
  }
});
