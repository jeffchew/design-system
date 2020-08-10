var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/drop-zone/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var a, s, o = t[0], c = t[1], i = t[2], m = 0, u = [];
      m < o.length;
      m++
    )
      (s = o[m]),
        Object.prototype.hasOwnProperty.call(l, s) && l[s] && u.push(l[s][0]),
        (l[s] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
    for (d && d(t); u.length; ) u.shift()();
    return r.push.apply(r, i || []), n();
  }
  function n() {
    for (var e, t = 0; t < r.length; t++) {
      for (var n = r[t], a = !0, o = 1; o < n.length; o++) {
        var c = n[o];
        0 !== l[c] && (a = !1);
      }
      a && (r.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var a = {},
    l = {
      62: 0,
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
  function s(t) {
    if (a[t]) return a[t].exports;
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.m = e),
    (s.c = a),
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
        for (var a in e)
          s.d(
            n,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
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
  var d = c;
  return r.push([206, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  206: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'Demo', function() {
        return E;
      }),
      n.d(t, 'DemoComponent', function() {
        return h;
      }),
      n.d(t, 'DropZone', function() {
        return b;
      }),
      n.d(t, 'DropZoneInsertionPoint', function() {
        return f;
      }),
      n.d(t, 'DropZoneContainer', function() {
        return v;
      }),
      n.d(t, 'DropZoneLabel', function() {
        return _;
      }),
      n.d(t, 'examples', function() {
        return y;
      });
    var a = n(0),
      l = n.n(a),
      r = n(2),
      s = n.n(r),
      o = n(9),
      c = n(48),
      i = n(4),
      d = n(59),
      m = n(11),
      u = n(1),
      p = n.n(u),
      E = function(e) {
        return l.a.createElement(
          'div',
          { className: 'demo-only', style: { paddingTop: '2rem' } },
          e.children
        );
      };
    E.propTypes = { children: p.a.node };
    var h = function(e) {
      return l.a.createElement(
        'div',
        {
          className: 'demo-only demo-component',
          style: { width: '100%', height: '10rem' }
        },
        e.children
      );
    };
    h.propTypes = { children: p.a.node };
    var b = function(e) {
      return l.a.createElement(
        'div',
        {
          className: s()('slds-drop-zone', {
            'slds-drop-zone_drag': e.isDragging
          })
        },
        e.children
      );
    };
    b.propTypes = { isDragging: p.a.bool, children: p.a.node };
    var f = function(e) {
        return l.a.createElement('div', {
          className: 'slds-drop-zone_drag__slot'
        });
      },
      v = function(e) {
        return l.a.createElement(
          'div',
          {
            className: s()('slds-drop-zone__container', {
              'slds-is-hovered': e.isHovered
            }),
            tabIndex: '-1'
          },
          l.a.createElement(_, {
            isContainer: !0,
            headerText: 'Component Name'
          }),
          e.children,
          e.hasActions &&
            l.a.createElement(
              'div',
              { className: 'slds-drop-zone__actions' },
              l.a.createElement(
                d.ButtonGroup,
                null,
                l.a.createElement(i.b, {
                  className: 'slds-button_icon-x-small',
                  theme: 'brand',
                  symbol: 'move',
                  assistiveText: 'Move',
                  title: 'Move'
                }),
                l.a.createElement(i.b, {
                  className: 'slds-button_icon-x-small',
                  theme: 'brand',
                  symbol: 'close',
                  assistiveText: 'Close',
                  title: 'Close'
                })
              )
            )
        );
      };
    v.propTypes = {
      hasActions: p.a.bool,
      isHovered: p.a.bool,
      children: p.a.node
    };
    var g = function(e) {
      return l.a.createElement(o.UtilityIcon, {
        symbol: e.isContainer ? 'connected_apps' : 'builder',
        className: 'slds-icon slds-icon_x-small slds-icon-text-default',
        containerClassName: 'slds-current-color',
        title: !1,
        assistiveText: !1
      });
    };
    g.propTypes = { isContainer: p.a.bool };
    var _ = function(e) {
      return l.a.createElement(
        'div',
        {
          className: s()('slds-drop-zone__label', {
            'slds-drop-zone__label_container': e.isContainer
          })
        },
        l.a.createElement(
          c.a,
          {
            figureLeft: l.a.createElement(g, { isContainer: e.isContainer }),
            flavor: 'center'
          },
          e.isContainer
            ? l.a.createElement(
                'h2',
                null,
                l.a.createElement(
                  'button',
                  {
                    className: 'slds-drop-zone__label_button slds-button_reset'
                  },
                  l.a.createElement(
                    'span',
                    { className: 'slds-assistive-text' },
                    'Edit: '
                  ),
                  l.a.createElement('span', null, e.headerText)
                )
              )
            : l.a.createElement('h2', null, e.headerText)
        )
      );
    };
    (_.propTypes = { isContainer: p.a.bool, headerText: p.a.string }),
      (t.default = l.a.createElement(b, null, l.a.createElement(h, null)));
    var y = [
      {
        id: 'drag-over',
        label: 'Drag Over',
        element: l.a.createElement(
          E,
          null,
          l.a.createElement(
            b,
            { isDragging: !0 },
            l.a.createElement(_, { headerText: 'Content' }),
            l.a.createElement(h, null),
            l.a.createElement(f, null),
            l.a.createElement(h, null)
          )
        )
      },
      {
        id: 'with-populated-region',
        label: 'With Populated Region',
        element: l.a.createElement(
          E,
          null,
          l.a.createElement(
            b,
            null,
            l.a.createElement(h, null),
            l.a.createElement(v, { isHovered: !0 }, l.a.createElement(h, null))
          )
        )
      },
      {
        id: 'with-populated-region-and-actions',
        label: 'With Populated Region and Actions',
        element: l.a.createElement(
          E,
          null,
          l.a.createElement(
            b,
            null,
            l.a.createElement(h, null),
            l.a.createElement(
              v,
              { hasActions: !0, isHovered: !0 },
              l.a.createElement(h, null)
            )
          )
        )
      },
      {
        id: 'with-cards',
        label: 'With Cards',
        element: l.a.createElement(
          E,
          null,
          l.a.createElement(
            b,
            null,
            l.a.createElement(
              v,
              { hasActions: !0 },
              l.a.createElement(
                m.d,
                { className: 'slds-m-bottom_small' },
                l.a.createElement(m.c, {
                  title: 'Accounts',
                  showIcon: !0,
                  symbol: 'account'
                }),
                l.a.createElement(m.a, { hasPadding: !0 }, 'Card Body'),
                l.a.createElement(
                  m.b,
                  { linkTabIndex: '-1' },
                  'View All ',
                  l.a.createElement(
                    'span',
                    { className: 'slds-assistive-text' },
                    'Accounts'
                  )
                )
              )
            ),
            l.a.createElement(
              v,
              { hasActions: !0 },
              l.a.createElement(
                m.d,
                { className: 'slds-m-top_small' },
                l.a.createElement(m.c, {
                  title: 'Accounts',
                  showIcon: !0,
                  symbol: 'account'
                }),
                l.a.createElement(m.a, { hasPadding: !0 }, 'Card Body'),
                l.a.createElement(
                  m.b,
                  { linkTabIndex: '-1' },
                  'View All ',
                  l.a.createElement(
                    'span',
                    { className: 'slds-assistive-text' },
                    'Accounts'
                  )
                )
              )
            )
          )
        )
      },
      {
        id: 'dragging-with-cards',
        label: 'Dragging With Cards',
        element: l.a.createElement(
          E,
          null,
          l.a.createElement(
            b,
            { isDragging: !0 },
            l.a.createElement(_, { headerText: 'Content' }),
            l.a.createElement(
              v,
              { hasActions: !0 },
              l.a.createElement(
                m.d,
                { className: 'slds-m-bottom_small' },
                l.a.createElement(m.c, {
                  title: 'Accounts',
                  showIcon: !0,
                  symbol: 'account'
                }),
                l.a.createElement(m.a, { hasPadding: !0 }, 'Card Body'),
                l.a.createElement(
                  m.b,
                  { linkTabIndex: '-1' },
                  'View All ',
                  l.a.createElement(
                    'span',
                    { className: 'slds-assistive-text' },
                    'Accounts'
                  )
                )
              )
            ),
            l.a.createElement(f, null),
            l.a.createElement(
              v,
              { hasActions: !0 },
              l.a.createElement(
                m.d,
                { className: 'slds-m-top_small' },
                l.a.createElement(m.c, {
                  title: 'Accounts',
                  showIcon: !0,
                  symbol: 'account'
                }),
                l.a.createElement(m.a, { hasPadding: !0 }, 'Card Body'),
                l.a.createElement(
                  m.b,
                  { linkTabIndex: '-1' },
                  'View All ',
                  l.a.createElement(
                    'span',
                    { className: 'slds-assistive-text' },
                    'Accounts'
                  )
                )
              )
            )
          )
        )
      }
    ];
  }
});
