var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/drop-zone/docs.mdx.js'] = (function(
  e
) {
  function t(t) {
    for (
      var a, l, c = t[0], s = t[1], i = t[2], m = 0, u = [];
      m < c.length;
      m++
    )
      (l = c[m]),
        Object.prototype.hasOwnProperty.call(r, l) && r[l] && u.push(r[l][0]),
        (r[l] = 0);
    for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
    for (d && d(t); u.length; ) u.shift()();
    return o.push.apply(o, i || []), n();
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], a = !0, c = 1; c < n.length; c++) {
        var s = n[c];
        0 !== r[s] && (a = !1);
      }
      a && (o.splice(t--, 1), (e = l((l.s = n[0]))));
    }
    return e;
  }
  var a = {},
    r = { 30: 0 },
    o = [];
  function l(t) {
    if (a[t]) return a[t].exports;
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, l), (n.l = !0), n.exports;
  }
  (l.m = e),
    (l.c = a),
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
        for (var a in e)
          l.d(
            n,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
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
  var c = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    s = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var i = 0; i < c.length; i++) t(c[i]);
  var d = s;
  return o.push([252, 0]), n();
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
  252: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getElement', function() {
        return A;
      }),
      n.d(t, 'getContents', function() {
        return S;
      });
    var a = n(0),
      r = n.n(a),
      o = n(4),
      l = n(1),
      c = (n(23), n(15), n(11)),
      s = n(5),
      i = n.n(s),
      d = n(12),
      m = n(62),
      u = n(7),
      p = n(51),
      b = n(14),
      h = n(3),
      E = n.n(h),
      O = function(e) {
        return r.a.createElement(
          'div',
          { className: 'demo-only', style: { paddingTop: '2rem' } },
          e.children
        );
      };
    O.propTypes = { children: E.a.node };
    var j = function(e) {
      return r.a.createElement(
        'div',
        {
          className: 'demo-only demo-component',
          style: { width: '100%', height: '10rem' }
        },
        e.children
      );
    };
    j.propTypes = { children: E.a.node };
    var f = function(e) {
      return r.a.createElement(
        'div',
        {
          className: i()('slds-drop-zone', {
            'slds-drop-zone_drag': e.isDragging
          })
        },
        e.children
      );
    };
    f.propTypes = { isDragging: E.a.bool, children: E.a.node };
    var g = function(e) {
        return r.a.createElement('div', {
          className: 'slds-drop-zone_drag__slot'
        });
      },
      v = function(e) {
        return r.a.createElement(
          'div',
          {
            className: i()('slds-drop-zone__container', {
              'slds-is-hovered': e.isHovered
            }),
            tabIndex: '-1'
          },
          r.a.createElement(_, {
            isContainer: !0,
            headerText: 'Component Name'
          }),
          e.children,
          e.hasActions &&
            r.a.createElement(
              'div',
              { className: 'slds-drop-zone__actions' },
              r.a.createElement(
                p.a,
                null,
                r.a.createElement(u.b, {
                  className: 'slds-button_icon-x-small',
                  theme: 'brand',
                  symbol: 'move',
                  assistiveText: 'Move',
                  title: 'Move'
                }),
                r.a.createElement(u.b, {
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
      hasActions: E.a.bool,
      isHovered: E.a.bool,
      children: E.a.node
    };
    var y = function(e) {
      return r.a.createElement(d.a, {
        symbol: e.isContainer ? 'connected_apps' : 'builder',
        className: 'slds-icon slds-icon_x-small slds-icon-text-default',
        containerClassName: 'slds-current-color',
        title: !1,
        assistiveText: !1
      });
    };
    y.propTypes = { isContainer: E.a.bool };
    var _ = function(e) {
      return r.a.createElement(
        'div',
        {
          className: i()('slds-drop-zone__label', {
            'slds-drop-zone__label_container': e.isContainer
          })
        },
        r.a.createElement(
          m.a,
          {
            figureLeft: r.a.createElement(y, { isContainer: e.isContainer }),
            flavor: 'center'
          },
          e.isContainer
            ? r.a.createElement(
                'h2',
                null,
                r.a.createElement(
                  'button',
                  {
                    className: 'slds-drop-zone__label_button slds-button_reset'
                  },
                  r.a.createElement(
                    'span',
                    { className: 'slds-assistive-text' },
                    'Edit: '
                  ),
                  r.a.createElement('span', null, e.headerText)
                )
              )
            : r.a.createElement('h2', null, e.headerText)
        )
      );
    };
    _.propTypes = { isContainer: E.a.bool, headerText: E.a.string };
    b.d,
      b.c,
      b.a,
      b.b,
      b.d,
      b.c,
      b.a,
      b.b,
      b.d,
      b.c,
      b.a,
      b.b,
      b.d,
      b.c,
      b.a,
      b.b,
      n(32),
      n(2);
    var x = o.c.h2,
      C = o.c.h3,
      w = o.c.li,
      D = o.c.p,
      T = o.c.strong,
      N = o.c.ul,
      A = function() {
        return Object(a.createElement)(
          o.b,
          {},
          Object(a.createElement)(
            'div',
            { className: 'lead doc' },
            'Screen building elements that surround areas where components can be placed. Drop Zones visually indicate to users where they may drag and drop components onto a page.'
          ),
          Object(a.createElement)(
            l.a,
            { exampleOnly: !0 },
            Object(a.createElement)(
              f,
              null,
              Object(a.createElement)(j, null),
              Object(a.createElement)(
                v,
                { hasActions: !0, isHovered: !0 },
                Object(a.createElement)(j, null)
              )
            )
          ),
          x({ id: 'Base-Drop-Zone' }, 'Base Drop Zone'),
          D(
            {},
            'A Base Drop Zone outlines areas within a page where users may drag and drop a component. These create a template to guide users within a screen building experience.'
          ),
          Object(a.createElement)(
            c.a,
            { title: 'Drop Zone - Base' },
            Object(a.createElement)(
              l.a,
              { toggleCode: !1 },
              Object(a.createElement)(f, null, Object(a.createElement)(j, null))
            )
          ),
          x({ id: 'Drag-Over-Drop-Zone' }, 'Drag Over Drop Zone'),
          D(
            {},
            'When dragging a component, use the drag over drop zone to indicate to the user where the component will be placed when dropped.'
          ),
          Object(a.createElement)(
            c.a,
            { title: 'Drop Zone - Drag Over' },
            Object(a.createElement)(
              l.a,
              null,
              Object(a.createElement)(
                O,
                null,
                Object(a.createElement)(
                  f,
                  { isDragging: !0 },
                  Object(a.createElement)(_, { headerText: 'Content' }),
                  Object(a.createElement)(j, null),
                  Object(a.createElement)(g, null),
                  Object(a.createElement)(j, null)
                )
              )
            )
          ),
          C({ id: 'Insertion-Point' }, 'Insertion Point'),
          D(
            {},
            'An insertion point is used to further communicate to the user the exact slot the component is being placed.'
          ),
          Object(a.createElement)(
            l.a,
            { toggleCode: !1 },
            Object(a.createElement)(g, null)
          ),
          D(
            {},
            'The position of this element should be controlled by your implementation.'
          ),
          N(
            {},
            w(
              {},
              D(
                {},
                T({}, 'When there are no components in the drop zone'),
                ': The insertion point should be placed in the center.'
              )
            ),
            w(
              {},
              D(
                {},
                T({}, 'When there are components in the drop zone'),
                ': The insertion point should be placed before or after components, to indicate where a new component will be placed relative to the ones already in the the drop zone.'
              )
            )
          ),
          x({ id: 'Drop-Zone-Container' }, 'Drop Zone Container'),
          D(
            {},
            'Use a drop zone container to highlight components within a drop zone. This provides a label for the component, as well as Button Icons to perform actions, such as moving the component and deleting the component from the screen.'
          ),
          Object(a.createElement)(
            c.a,
            { title: 'Drop Zone - Container' },
            Object(a.createElement)(
              l.a,
              null,
              Object(a.createElement)(
                f,
                null,
                Object(a.createElement)(j, null),
                Object(a.createElement)(
                  v,
                  { hasActions: !0, isHovered: !0 },
                  Object(a.createElement)(j, null)
                )
              )
            )
          ),
          x({ id: 'Example-Cards' }, 'Example - Cards'),
          Object(a.createElement)(
            c.a,
            { title: 'Drop Zone - Cards Example' },
            Object(a.createElement)(
              l.a,
              null,
              Object(a.createElement)(
                O,
                null,
                Object(a.createElement)(
                  f,
                  null,
                  Object(a.createElement)(
                    v,
                    { hasActions: !0 },
                    Object(a.createElement)(
                      b.d,
                      { className: 'slds-m-bottom_small' },
                      Object(a.createElement)(b.c, {
                        title: 'Accounts',
                        showIcon: !0,
                        symbol: 'account'
                      }),
                      Object(a.createElement)(
                        b.a,
                        { hasPadding: !0 },
                        'Card Body'
                      ),
                      Object(a.createElement)(
                        b.b,
                        { linkTabIndex: '-1' },
                        'View All ',
                        Object(a.createElement)(
                          'span',
                          { className: 'slds-assistive-text' },
                          'Accounts'
                        )
                      )
                    )
                  ),
                  Object(a.createElement)(
                    v,
                    { hasActions: !0 },
                    Object(a.createElement)(
                      b.d,
                      { className: 'slds-m-top_small' },
                      Object(a.createElement)(b.c, {
                        title: 'Accounts',
                        showIcon: !0,
                        symbol: 'account'
                      }),
                      Object(a.createElement)(
                        b.a,
                        { hasPadding: !0 },
                        'Card Body'
                      ),
                      Object(a.createElement)(
                        b.b,
                        { linkTabIndex: '-1' },
                        'View All ',
                        Object(a.createElement)(
                          'span',
                          { className: 'slds-assistive-text' },
                          'Accounts'
                        )
                      )
                    )
                  )
                )
              )
            )
          ),
          x({ id: 'Example-Cards-Insertion' }, 'Example - Cards Insertion'),
          Object(a.createElement)(
            c.a,
            { title: 'Drop Zone - Cards Insert Example' },
            Object(a.createElement)(
              l.a,
              null,
              Object(a.createElement)(
                O,
                null,
                Object(a.createElement)(
                  f,
                  { isDragging: !0 },
                  Object(a.createElement)(_, { headerText: 'Content' }),
                  Object(a.createElement)(
                    v,
                    { hasActions: !0 },
                    Object(a.createElement)(
                      b.d,
                      { className: 'slds-m-bottom_small' },
                      Object(a.createElement)(b.c, {
                        title: 'Accounts',
                        showIcon: !0,
                        symbol: 'account'
                      }),
                      Object(a.createElement)(
                        b.a,
                        { hasPadding: !0 },
                        'Card Body'
                      ),
                      Object(a.createElement)(
                        b.b,
                        { linkTabIndex: '-1' },
                        'View All ',
                        Object(a.createElement)(
                          'span',
                          { className: 'slds-assistive-text' },
                          'Accounts'
                        )
                      )
                    )
                  ),
                  Object(a.createElement)(g, null),
                  Object(a.createElement)(
                    v,
                    { hasActions: !0 },
                    Object(a.createElement)(
                      b.d,
                      { className: 'slds-m-top_small' },
                      Object(a.createElement)(b.c, {
                        title: 'Accounts',
                        showIcon: !0,
                        symbol: 'account'
                      }),
                      Object(a.createElement)(
                        b.a,
                        { hasPadding: !0 },
                        'Card Body'
                      ),
                      Object(a.createElement)(
                        b.b,
                        { linkTabIndex: '-1' },
                        'View All ',
                        Object(a.createElement)(
                          'span',
                          { className: 'slds-assistive-text' },
                          'Accounts'
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        );
      },
      S = function() {
        return Object(o.a)(A());
      };
  }
});
