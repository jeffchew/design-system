var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/data-tables/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var a, c, o = t[0], u = t[1], i = t[2], d = 0, s = [];
      d < o.length;
      d++
    )
      (c = o[d]),
        Object.prototype.hasOwnProperty.call(n, c) && n[c] && s.push(n[c][0]),
        (n[c] = 0);
    for (a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
    for (m && m(t); s.length; ) s.shift()();
    return r.push.apply(r, i || []), l();
  }
  function l() {
    for (var e, t = 0; t < r.length; t++) {
      for (var l = r[t], a = !0, o = 1; o < l.length; o++) {
        var u = l[o];
        0 !== n[u] && (a = !1);
      }
      a && (r.splice(t--, 1), (e = c((c.s = l[0]))));
    }
    return e;
  }
  var a = {},
    n = {
      52: 0,
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
  function c(t) {
    if (a[t]) return a[t].exports;
    var l = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(l.exports, l, l.exports, c), (l.l = !0), l.exports;
  }
  (c.m = e),
    (c.c = a),
    (c.d = function(e, t, l) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: l });
    }),
    (c.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (c.t = function(e, t) {
      if ((1 & t && (e = c(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var l = Object.create(null);
      if (
        (c.r(l),
        Object.defineProperty(l, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          c.d(
            l,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return l;
    }),
    (c.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return c.d(t, 'a', t), t;
    }),
    (c.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = '/assets/scripts/bundle/');
  var o = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    u = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var i = 0; i < o.length; i++) t(o[i]);
  var m = u;
  return r.push([198, 0]), l();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  198: function(e, t, l) {
    'use strict';
    l.r(t),
      l.d(t, 'examples', function() {
        return c;
      });
    var a = l(0),
      n = l.n(a),
      r = l(3);
    t.default = n.a.createElement(
      r.r,
      { isBordered: !0, hasCellBuffer: !0, type: 'base' },
      n.a.createElement(r.p, null, n.a.createElement(r.f, null)),
      n.a.createElement(
        r.n,
        null,
        n.a.createElement(r.k, { title: 'Cloudhub' }),
        n.a.createElement(r.k, { title: 'Cloudhub + Anypoint Connectors' })
      )
    );
    var c = [
      {
        id: 'data-table-striped-rows',
        label: 'With striped rows',
        element: n.a.createElement(
          r.r,
          { isBordered: !0, isStriped: !0, hasCellBuffer: !0, type: 'base' },
          n.a.createElement(r.p, null, n.a.createElement(r.f, null)),
          n.a.createElement(
            r.n,
            null,
            n.a.createElement(r.k, { title: 'Cloudhub' }),
            n.a.createElement(r.k, { title: 'Cloudhub + Anypoint Connectors' }),
            n.a.createElement(r.k, { title: 'Cloudhub' })
          )
        )
      },
      {
        id: 'data-table-no-hover',
        label: 'With no row hovers',
        element: n.a.createElement(
          r.r,
          {
            isBordered: !0,
            hasCellBuffer: !0,
            hasNoRowHover: !0,
            type: 'base'
          },
          n.a.createElement(r.p, null, n.a.createElement(r.f, null)),
          n.a.createElement(
            r.n,
            null,
            n.a.createElement(r.k, { title: 'Cloudhub' }),
            n.a.createElement(r.k, { title: 'Cloudhub + Anypoint Connectors' })
          )
        )
      },
      {
        id: 'data-table-vertical-borders',
        label: 'With vertical borders',
        element: n.a.createElement(
          r.r,
          {
            isBordered: !0,
            isColBordered: !0,
            hasCellBuffer: !0,
            type: 'base'
          },
          n.a.createElement(r.p, null, n.a.createElement(r.f, null)),
          n.a.createElement(
            r.n,
            null,
            n.a.createElement(r.k, { title: 'Cloudhub' }),
            n.a.createElement(r.k, { title: 'Cloudhub + Anypoint Connectors' })
          )
        )
      },
      {
        id: 'single-column',
        label: 'Single Column',
        element: n.a.createElement(
          r.r,
          { isBordered: !0, hasCellBuffer: !0, type: 'base' },
          n.a.createElement(
            r.p,
            null,
            n.a.createElement(
              r.q,
              null,
              n.a.createElement(
                r.c,
                null,
                n.a.createElement(r.b, { columnName: 'Opportunity Name' })
              )
            )
          ),
          n.a.createElement(
            r.n,
            null,
            n.a.createElement(
              r.o,
              null,
              n.a.createElement(
                r.s,
                { 'data-label': 'Opportunity Name', type: 'base' },
                n.a.createElement(r.i, {
                  cellLink: 'javascript:void(0);',
                  cellText: 'Cloudhub'
                })
              )
            ),
            n.a.createElement(
              r.o,
              null,
              n.a.createElement(
                r.s,
                { 'data-label': 'Opportunity Name', type: 'base' },
                n.a.createElement(r.i, {
                  cellLink: 'javascript:void(0);',
                  cellText: 'Cloudhub + Anypoint Connectors'
                })
              )
            )
          )
        )
      },
      {
        id: 'no-borders',
        label: 'No borders',
        element: n.a.createElement(
          r.r,
          { isStriped: !0, hasCellBuffer: !0, type: 'base' },
          n.a.createElement(r.p, null, n.a.createElement(r.f, null)),
          n.a.createElement(
            r.n,
            null,
            n.a.createElement(r.k, { title: 'Cloudhub' }),
            n.a.createElement(r.k, { title: 'Cloudhub + Anypoint Connectors' }),
            n.a.createElement(r.k, { title: 'Cloudhub' })
          )
        )
      },
      {
        id: 'headless',
        label: 'Headless',
        element: n.a.createElement(
          r.r,
          {
            hasHiddenHeader: !0,
            isBordered: !0,
            hasCellBuffer: !0,
            type: 'base'
          },
          n.a.createElement(
            r.p,
            { isHidden: !0 },
            n.a.createElement(r.f, null)
          ),
          n.a.createElement(
            r.n,
            null,
            n.a.createElement(r.k, { title: 'Cloudhub' }),
            n.a.createElement(r.k, { title: 'Cloudhub + Anypoint Connectors' }),
            n.a.createElement(r.k, { title: 'Cloudhub' })
          )
        )
      },
      {
        id: 'headless-no-borders',
        label: 'Headless with no borders',
        element: n.a.createElement(
          r.r,
          { hasHiddenHeader: !0, hasCellBuffer: !0, type: 'base' },
          n.a.createElement(
            r.p,
            { isHidden: !0 },
            n.a.createElement(r.f, null)
          ),
          n.a.createElement(
            r.n,
            null,
            n.a.createElement(r.k, { title: 'Cloudhub' }),
            n.a.createElement(r.k, { title: 'Cloudhub + Anypoint Connectors' }),
            n.a.createElement(r.k, { title: 'Cloudhub' })
          )
        )
      },
      {
        id: 'cell-content-truncated',
        label: 'Cell content truncated',
        demoStyles: 'max-width: 600px;',
        element: n.a.createElement(
          r.r,
          {
            isBordered: !0,
            isStriped: !0,
            hasCellBuffer: !0,
            isFixedLayout: !0,
            type: 'base'
          },
          n.a.createElement(
            r.p,
            null,
            n.a.createElement(
              r.q,
              null,
              n.a.createElement(
                r.c,
                null,
                n.a.createElement(r.b, { columnName: 'Typical Column Header' })
              ),
              n.a.createElement(
                r.c,
                null,
                n.a.createElement(r.b, { columnName: 'Truncated, no wrap' })
              ),
              n.a.createElement(
                r.c,
                null,
                n.a.createElement(r.b, { columnName: 'Typical Column Header' })
              )
            )
          ),
          n.a.createElement(
            r.n,
            null,
            n.a.createElement(
              r.o,
              null,
              n.a.createElement(
                r.l,
                { 'data-label': 'Typical Column Header' },
                n.a.createElement(r.i, { cellText: 'Typical cell content' })
              ),
              n.a.createElement(
                r.s,
                {
                  'data-label': 'Truncated, no wrap',
                  type: 'base',
                  hasWrap: !0
                },
                n.a.createElement(r.i, { cellText: r.t })
              ),
              n.a.createElement(
                r.s,
                { 'data-label': 'Typical Column Header', type: 'base' },
                n.a.createElement(r.i, { cellText: 'Typical cell content' })
              )
            )
          )
        )
      },
      {
        id: 'cell-content-wrapped',
        label: 'Cell content wrapped',
        demoStyles: 'max-width: 600px;',
        element: n.a.createElement(
          r.r,
          {
            isBordered: !0,
            isStriped: !0,
            hasCellBuffer: !0,
            isFixedLayout: !0,
            type: 'base'
          },
          n.a.createElement(
            r.p,
            null,
            n.a.createElement(
              r.q,
              null,
              n.a.createElement(
                r.c,
                null,
                n.a.createElement(r.b, { columnName: 'Typical Column Header' })
              ),
              n.a.createElement(
                r.c,
                null,
                n.a.createElement(r.b, { columnName: 'Wrapped, line clamped' })
              ),
              n.a.createElement(
                r.c,
                null,
                n.a.createElement(r.b, { columnName: 'Typical Column Header' })
              )
            )
          ),
          n.a.createElement(
            r.n,
            null,
            n.a.createElement(
              r.o,
              null,
              n.a.createElement(
                r.l,
                { 'data-label': 'Typical Column Header' },
                n.a.createElement(r.i, { cellText: 'Typical cell content' })
              ),
              n.a.createElement(
                r.s,
                {
                  'data-label': 'Wrapped, line clamped',
                  type: 'base',
                  hasWrap: !0
                },
                n.a.createElement(r.i, { cellText: r.t, hasWrap: !0 })
              ),
              n.a.createElement(
                r.s,
                { 'data-label': 'Typical Column Header', type: 'base' },
                n.a.createElement(r.i, { cellText: 'Typical cell content' })
              )
            )
          )
        )
      }
    ];
  }
});