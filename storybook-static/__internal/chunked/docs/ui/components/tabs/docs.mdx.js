var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/tabs/docs.mdx.js'] = (function(e) {
  function t(t) {
    for (
      var n, i, r = t[0], o = t[1], c = t[2], m = 0, b = [];
      m < r.length;
      m++
    )
      (i = r[m]),
        Object.prototype.hasOwnProperty.call(s, i) && s[i] && b.push(s[i][0]),
        (s[i] = 0);
    for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
    for (d && d(t); b.length; ) b.shift()();
    return l.push.apply(l, c || []), a();
  }
  function a() {
    for (var e, t = 0; t < l.length; t++) {
      for (var a = l[t], n = !0, r = 1; r < a.length; r++) {
        var o = a[r];
        0 !== s[o] && (n = !1);
      }
      n && (l.splice(t--, 1), (e = i((i.s = a[0]))));
    }
    return e;
  }
  var n = {},
    s = { 73: 0 },
    l = [];
  function i(t) {
    if (n[t]) return n[t].exports;
    var a = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, i), (a.l = !0), a.exports;
  }
  (i.m = e),
    (i.c = n),
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
        for (var n in e)
          i.d(
            a,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
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
  var r = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    o = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var c = 0; c < r.length; c++) t(r[c]);
  var d = o;
  return l.push([230, 0]), a();
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
  230: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'getElement', function() {
        return ce;
      }),
      a.d(t, 'getContents', function() {
        return de;
      });
    var n = a(0),
      s = a.n(n),
      l = a(4),
      i = a(1),
      r = a(23),
      o = a(11),
      c = a(15),
      d = a(3),
      m = a.n(d),
      b = a(5),
      u = a.n(b),
      h = a(10),
      f = a(67),
      p = a(13);
    function E(e) {
      return (E =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            })(e);
    }
    function v(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function y(e, t) {
      return (y =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function g(e, t) {
      return !t || ('object' !== E(t) && 'function' != typeof t) ? O(e) : t;
    }
    function O(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function w() {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function() {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    function T(e) {
      return (T = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var j = function(e) {
      return s.a.createElement(
        'div',
        { className: 'slds-tabs-mobile__group' },
        e.children
      );
    };
    j.propTypes = { children: m.a.node };
    var I = function(e) {
      return s.a.createElement(
        'div',
        { className: 'slds-tabs-mobile__container' },
        e.children
      );
    };
    I.propTypes = { children: m.a.node };
    var S = function(e) {
      return s.a.createElement(
        'ul',
        { className: u()('slds-tabs-mobile', { 'slds-hidden': e.isHidden }) },
        e.children
      );
    };
    S.propTypes = { children: m.a.node, isHidden: m.a.bool };
    var x = function(e) {
      return s.a.createElement(
        'li',
        { className: u()('slds-tabs-mobile__item') },
        e.children
      );
    };
    x.propTypes = { children: m.a.node };
    var _ = function(e) {
      return s.a.createElement(
        p.a,
        { isFullWidth: !0, onClick: e.onClick },
        s.a.createElement(
          'span',
          { className: 'slds-truncate', title: e.summary },
          e.summary
        ),
        s.a.createElement(h.a, {
          className: 'slds-icon slds-icon_x-small slds-icon-text-default',
          sprite: 'utility',
          symbol: 'chevronright'
        })
      );
    };
    _.propTypes = { onClick: m.a.func, summary: m.a.string };
    var N = function(e) {
      return s.a.createElement(
        f.b,
        {
          title: e.title,
          isAnimated: !0,
          docked: 'left',
          invoke: 'drill-in',
          isInvokedByTab: !0,
          isVisible: e.isVisible || !1,
          handleVisibility: e.hidePanel,
          hasCenterTitle: !0
        },
        e.children || 'A panel body accepts any layout or component'
      );
    };
    N.propTypes = {
      hidePanel: m.a.func,
      isVisible: m.a.bool,
      title: m.a.string,
      children: m.a.node
    };
    var C = function(e) {
        return s.a.createElement(
          I,
          null,
          s.a.createElement(
            S,
            { isHidden: !0 },
            s.a.createElement(
              x,
              null,
              s.a.createElement(_, { summary: 'Item One' })
            ),
            s.a.createElement(
              x,
              null,
              s.a.createElement(_, { summary: 'Item Two' })
            ),
            s.a.createElement(
              x,
              null,
              s.a.createElement(_, { summary: 'Item Three' })
            )
          ),
          s.a.createElement(
            N,
            { title: 'Item 1 Panel', isVisible: !0 },
            s.a.createElement(
              S,
              null,
              s.a.createElement(
                x,
                null,
                s.a.createElement(_, { summary: 'Nested Item One' })
              ),
              s.a.createElement(
                x,
                null,
                s.a.createElement(_, { summary: 'Nested Item Two' })
              ),
              s.a.createElement(
                x,
                null,
                s.a.createElement(_, { summary: 'Nested Item Three' })
              )
            ),
            s.a.createElement('div', null, ' Any content can be here '),
            s.a.createElement(
              S,
              null,
              s.a.createElement(
                x,
                null,
                s.a.createElement(_, { summary: 'Nested Item Four' })
              ),
              s.a.createElement(
                x,
                null,
                s.a.createElement(_, { summary: 'Nested Item Five' })
              )
            )
          ),
          s.a.createElement(N, { title: 'Item 2 Panel' }),
          s.a.createElement(N, { title: 'Item 3 Panel' }),
          s.a.createElement(N, { title: 'Nested Item 1 Panel' }),
          s.a.createElement(N, { title: 'Nested Item 2 Panel' }),
          s.a.createElement(N, { title: 'Nested Item 3 Panel' }),
          s.a.createElement(N, { title: 'Nested Item 4 Panel' }),
          s.a.createElement(N, { title: 'Nested Item 5 Panel' })
        );
      },
      k = (function(e) {
        !(function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && y(e, t);
        })(r, e);
        var t,
          a,
          n,
          l,
          i = ((t = r),
          function() {
            var e,
              a = T(t);
            if (w()) {
              var n = T(this).constructor;
              e = Reflect.construct(a, arguments, n);
            } else e = a.apply(this, arguments);
            return g(this, e);
          });
        function r(e) {
          var t;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, r),
            ((t = i.call(this, e)).hidePanel = t.hidePanel.bind(O(t))),
            (t.state = { visiblePanelIdx: -1 }),
            t
          );
        }
        return (
          (a = r),
          (n = [
            {
              key: 'componentDidMount',
              value: function() {
                void 0 !== this.props.visiblePanelIdx &&
                  -1 === this.state.visiblePanelIdx &&
                  this.setState({
                    visiblePanelIdx: this.props.visiblePanelIdx
                  });
              }
            },
            {
              key: 'showPanel',
              value: function(e) {
                this.props.isStatic || this.setState({ visiblePanelIdx: e });
              }
            },
            {
              key: 'hidePanel',
              value: function() {
                this.props.isStatic || this.setState({ visiblePanelIdx: -1 });
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this.state.visiblePanelIdx;
                return s.a.createElement(
                  I,
                  null,
                  s.a.createElement(
                    S,
                    { isHidden: -1 !== e },
                    s.a.createElement(
                      x,
                      null,
                      s.a.createElement(_, {
                        summary: 'Item One',
                        onClick: this.showPanel.bind(this, 0)
                      })
                    ),
                    s.a.createElement(
                      x,
                      null,
                      s.a.createElement(_, {
                        summary: 'Item Two',
                        onClick: this.showPanel.bind(this, 1)
                      })
                    ),
                    s.a.createElement(
                      x,
                      null,
                      s.a.createElement(_, {
                        summary: 'Item Three',
                        onClick: this.showPanel.bind(this, 2)
                      })
                    )
                  ),
                  s.a.createElement(N, {
                    title: 'Item 1 Panel',
                    isVisible: 0 === e,
                    hidePanel: this.hidePanel
                  }),
                  s.a.createElement(N, {
                    title: 'Item 2 Panel',
                    isVisible: 1 === e,
                    hidePanel: this.hidePanel
                  }),
                  s.a.createElement(N, {
                    title: 'Item 3 Panel',
                    isVisible: 2 === e,
                    hidePanel: this.hidePanel
                  })
                );
              }
            }
          ]) && v(a.prototype, n),
          l && v(a, l),
          r
        );
      })(n.Component);
    k.propTypes = { visiblePanelIdx: m.a.number, isStatic: m.a.bool };
    var P = k,
      A = a(31),
      U = a(32),
      W = a(12),
      M = a(89),
      B = a(9),
      L = a(74),
      V = a(14),
      F = function(e) {
        return s.a.createElement(
          A.a,
          { selectedIndex: e.selectedIndex },
          s.a.createElement(
            A.a.Item,
            { title: 'Item One', id: 'tab-default-1' },
            e.itemOneContent
          ),
          s.a.createElement(
            A.a.Item,
            { title: 'Item Two', id: 'tab-default-2' },
            'Item Two Content'
          ),
          s.a.createElement(
            A.a.Item,
            { title: 'Item Three', id: 'tab-default-3' },
            'Item Three Content'
          )
        );
      };
    (F.propTypes = { selectedIndex: m.a.number, itemOneContent: m.a.node }),
      (F.defaultProps = {
        selectedIndex: 0,
        itemOneContent: 'Item One Content'
      });
    var D = function() {
        return s.a.createElement(F, {
          itemOneContent: s.a.createElement(L.a, null)
        });
      },
      R = function() {
        return s.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '12rem' } },
          s.a.createElement(
            A.a,
            null,
            s.a.createElement(
              A.a.Item,
              { title: 'Item One', id: 'tab-default-1' },
              s.a.createElement('h2', null, 'Item One Content')
            ),
            s.a.createElement(
              A.a.Item,
              { title: 'Item Two', id: 'tab-default-2' },
              s.a.createElement('h2', null, 'Item Two Content')
            ),
            s.a.createElement(
              A.a.Item,
              { title: 'Item Three', id: 'tab-default-3' },
              s.a.createElement('h2', null, 'Item Three Content')
            ),
            s.a.createElement(
              A.a.Item,
              { title: 'Item Four', id: 'tab-default-4' },
              s.a.createElement('h2', null, 'Item Four Content')
            ),
            s.a.createElement(
              A.a.Item,
              { title: 'Item Five', id: 'tab-default-5' },
              s.a.createElement('h2', null, 'Item Five Content')
            ),
            s.a.createElement(
              A.a.ItemOverflow,
              { title: 'More Tabs', id: 'tab-default-8' },
              s.a.createElement(
                M.a,
                { label: 'More', type: 'tabs', flavor: 'default', isOpen: !0 },
                s.a.createElement(H, null)
              )
            )
          )
        );
      },
      z = function() {
        return s.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '12rem' } },
          s.a.createElement(
            A.a,
            null,
            s.a.createElement(
              A.a.Item,
              {
                title: 'Opportunities',
                leftIcon: s.a.createElement(U.a, {
                  className: 'slds-icon_small',
                  symbol: 'opportunity',
                  title: 'Opportunities',
                  assistiveText: !1
                }),
                id: 'tab-default-1'
              },
              s.a.createElement('h2', null, 'Item One Content')
            ),
            s.a.createElement(
              A.a.Item,
              {
                title: 'Cases',
                leftIcon: s.a.createElement(U.a, {
                  className: 'slds-icon_small',
                  title: 'Cases',
                  symbol: 'case',
                  assistiveText: !1
                }),
                id: 'tab-default-2'
              },
              s.a.createElement('h2', null, 'Item Two Content')
            ),
            s.a.createElement(
              A.a.Item,
              {
                title: 'Products',
                leftIcon: s.a.createElement(U.a, {
                  className: 'slds-icon_small',
                  title: 'Products',
                  symbol: 'product',
                  assistiveText: !1
                }),
                id: 'tab-default-3'
              },
              s.a.createElement('h2', null, 'Item Three Content')
            ),
            s.a.createElement(
              A.a.Item,
              {
                title: 'Price Books',
                leftIcon: s.a.createElement(U.a, {
                  className: 'slds-icon_small',
                  title: 'Price Books',
                  symbol: 'pricebook',
                  assistiveText: !1
                }),
                id: 'tab-default-4'
              },
              s.a.createElement('h2', null, 'Item Four Content')
            ),
            s.a.createElement(
              A.a.Item,
              {
                title: 'Contacts',
                leftIcon: s.a.createElement(U.a, {
                  className: 'slds-icon_small',
                  title: 'Contacts',
                  symbol: 'contact',
                  assistiveText: !1
                }),
                id: 'tab-default-5'
              },
              s.a.createElement('h2', null, 'Item Five Content')
            ),
            s.a.createElement(
              A.a.ItemOverflow,
              { title: 'More Tabs', id: 'tab-default-8' },
              s.a.createElement(
                M.a,
                { label: 'More', type: 'tabs', flavor: 'default', isOpen: !0 },
                s.a.createElement(q, null)
              )
            )
          )
        );
      },
      H = function() {
        return s.a.createElement(
          B.f,
          { className: 'slds-dropdown_right' },
          s.a.createElement(
            B.h,
            { className: 'slds-dropdown_length-with-icon-10' },
            s.a.createElement(B.g, { title: 'Accounts' }, 'Accounts'),
            s.a.createElement(B.g, { title: 'Approvals' }, 'Approvals'),
            s.a.createElement(B.g, { title: 'Lead' }, 'Leads')
          )
        );
      },
      q = function() {
        return s.a.createElement(
          B.f,
          { className: 'slds-dropdown_right' },
          s.a.createElement(
            B.h,
            { className: 'slds-dropdown_length-with-icon-10' },
            s.a.createElement(
              B.g,
              { title: 'Accounts' },
              s.a.createElement(
                'span',
                { className: 'slds-media slds-media_center' },
                s.a.createElement(
                  'span',
                  { className: 'slds-media__figure' },
                  s.a.createElement(U.a, {
                    className: 'slds-icon_small',
                    symbol: 'account',
                    assistiveText: !1
                  })
                ),
                s.a.createElement(
                  'span',
                  { className: 'slds-media__body' },
                  'Accounts'
                )
              )
            ),
            s.a.createElement(
              B.g,
              { title: 'Approvals' },
              s.a.createElement(
                'span',
                { className: 'slds-media slds-media_center' },
                s.a.createElement(
                  'span',
                  { className: 'slds-media__figure' },
                  s.a.createElement(U.a, {
                    className: 'slds-icon_small',
                    symbol: 'approval',
                    assistiveText: !1
                  })
                ),
                s.a.createElement(
                  'span',
                  { className: 'slds-media__body' },
                  'Approvals'
                )
              )
            ),
            s.a.createElement(
              B.g,
              { title: 'Lead' },
              s.a.createElement(
                'span',
                { className: 'slds-media slds-media_center' },
                s.a.createElement(
                  'span',
                  { className: 'slds-media__figure' },
                  s.a.createElement(U.a, {
                    className: 'slds-icon_small',
                    symbol: 'lead',
                    assistiveText: !1
                  })
                ),
                s.a.createElement(
                  'span',
                  { className: 'slds-media__body' },
                  'Leads'
                )
              )
            )
          )
        );
      },
      J = function() {
        return s.a.createElement(
          A.a,
          { isCard: !0, selectedIndex: 0 },
          s.a.createElement(
            A.a.Item,
            { title: 'Item One', id: 'tab-default-1' },
            s.a.createElement(
              V.d,
              null,
              s.a.createElement(V.c, {
                symbol: 'contact',
                title: 'Card Header',
                href: 'javascript:void(0);',
                action: s.a.createElement(
                  'button',
                  { className: 'slds-button slds-button_neutral' },
                  'New'
                )
              }),
              s.a.createElement(
                V.a,
                { hasPadding: !0 },
                'This is a card inside an ',
                s.a.createElement(
                  'code',
                  { className: 'doc' },
                  '.slds-tabs_card'
                ),
                ' ',
                'to show how styling is removed when cards are nested inside.'
              ),
              s.a.createElement(
                V.b,
                null,
                'View All ',
                s.a.createElement(
                  'span',
                  { className: 'slds-assistive-text' },
                  'Contacts'
                )
              )
            ),
            s.a.createElement(
              V.d,
              null,
              s.a.createElement(V.c, {
                symbol: 'contact',
                title: 'Card Header',
                href: 'javascript:void(0);',
                action: s.a.createElement(
                  'button',
                  { className: 'slds-button slds-button_neutral' },
                  'New'
                )
              }),
              s.a.createElement(
                V.a,
                { hasPadding: !0 },
                'This is a card inside an ',
                s.a.createElement(
                  'code',
                  { className: 'doc' },
                  '.slds-tabs_card'
                ),
                ' ',
                'to show how styling is removed when cards are nested inside.'
              ),
              s.a.createElement(
                V.b,
                null,
                'View All ',
                s.a.createElement(
                  'span',
                  { className: 'slds-assistive-text' },
                  'Contacts'
                )
              )
            ),
            s.a.createElement(
              V.d,
              { hasCardBoundary: !0 },
              s.a.createElement(V.c, {
                symbol: 'contact',
                title: 'Card Header',
                href: 'javascript:void(0);',
                action: s.a.createElement(
                  'button',
                  { className: 'slds-button slds-button_neutral' },
                  'New'
                )
              }),
              s.a.createElement(
                V.a,
                { hasPadding: !0 },
                'This is a card inside an ',
                s.a.createElement(
                  'code',
                  { className: 'doc' },
                  '.slds-tabs_card'
                ),
                ' ',
                'to illustrate how',
                s.a.createElement(
                  'code',
                  { className: 'doc' },
                  '.slds-card_boundary'
                ),
                ' adds a rounded border when desired.'
              ),
              s.a.createElement(
                V.b,
                null,
                'View All ',
                s.a.createElement(
                  'span',
                  { className: 'slds-assistive-text' },
                  'Contacts'
                )
              )
            )
          ),
          s.a.createElement(
            A.a.Item,
            { title: 'Item Two', id: 'tab-default-2' },
            'Item Two Content'
          ),
          s.a.createElement(
            A.a.Item,
            { title: 'Item Three', id: 'tab-default-3' },
            'Item Three Content'
          )
        );
      },
      G = function() {
        return s.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '12rem' } },
          s.a.createElement(
            A.a,
            null,
            s.a.createElement(
              A.a.Item,
              { title: 'Item One', id: 'tab-default-1' },
              s.a.createElement('h2', null, 'Item One Content')
            ),
            s.a.createElement(
              A.a.Item,
              {
                title: 'Item Two',
                id: 'tab-default-2',
                rightIcon: s.a.createElement(W.a, {
                  className: 'slds-icon_x-small slds-icon-text-error',
                  symbol: 'error',
                  title: 'This item has an error',
                  assistiveText: 'This item has an error'
                })
              },
              s.a.createElement('h2', null, 'Item Two Content - Has Error')
            ),
            s.a.createElement(
              A.a.Item,
              { title: 'Item Three', id: 'tab-default-3' },
              s.a.createElement('h2', null, 'Item Three Content')
            ),
            s.a.createElement(
              A.a.Item,
              { title: 'Item Four', id: 'tab-default-4' },
              s.a.createElement('h2', null, 'Item Four Content')
            )
          )
        );
      },
      K = function() {
        return s.a.createElement(
          A.a,
          { size: 'medium' },
          s.a.createElement(
            A.a.Item,
            { title: 'Item One', id: 'tab-default-1' },
            'Item One Content'
          ),
          s.a.createElement(
            A.a.Item,
            { title: 'Item Two', id: 'tab-default-2' },
            'Item Two Content'
          ),
          s.a.createElement(
            A.a.Item,
            { title: 'Item Three', id: 'tab-default-3' },
            'Item Three Content'
          )
        );
      },
      Y = function() {
        return s.a.createElement(
          A.a,
          { size: 'large' },
          s.a.createElement(
            A.a.Item,
            { title: 'Item One', id: 'tab-default-1' },
            'Item One Content'
          ),
          s.a.createElement(
            A.a.Item,
            { title: 'Item Two', id: 'tab-default-2' },
            'Item Two Content'
          ),
          s.a.createElement(
            A.a.Item,
            { title: 'Item Three', id: 'tab-default-3' },
            'Item Three Content'
          )
        );
      },
      $ = a(41),
      Q = a(75),
      X = a(2),
      Z = l.c.a,
      ee = l.c.code,
      te = l.c.h2,
      ae = l.c.h3,
      ne = l.c.h4,
      se = l.c.h5,
      le = l.c.li,
      ie = l.c.p,
      re = l.c.strong,
      oe = l.c.ul,
      ce = function() {
        return Object(n.createElement)(
          l.b,
          {},
          Object(n.createElement)(
            'div',
            { className: 'doc lead' },
            'Tabs keeps related content in a single container that is shown and hidden through navigation.'
          ),
          Object(n.createElement)(
            i.a,
            { exampleOnly: !0, demoStyles: 'height: 200px;' },
            Object(n.createElement)(F, null)
          ),
          te({ id: 'About-Tabs' }, 'About Tabs'),
          ie(
            {},
            'The default tab set style encapsulates everything that is underneath it without enclosing it visually. Because tab sets can be nested, pay close attention to the markup. They are constructed to prevent styles from leaking from parent tab sets into child tab sets.'
          ),
          ae({ id: 'Implementation' }, 'Implementation'),
          ne({ id: 'Markup' }, 'Markup'),
          ie({}, 'The following markup is crucial for Accessibility'),
          oe(
            {},
            le(
              {},
              'Selected tab’s anchor has ',
              ee({}, 'aria-selected="true"'),
              ', all other tabs’ anchors have ',
              ee({}, 'aria-selected="false"')
            ),
            le(
              {},
              'Selected tab’s anchor has ',
              ee({}, 'tabindex="0"'),
              ', all other tabs have ',
              ee({}, 'tabindex="-1"')
            ),
            le(
              {},
              'Each tab’s anchor has an ',
              ee({}, 'aria-controls'),
              ' attribute whose value is the id of the associated ',
              ee({}, '<div role="tabpanel">')
            ),
            le(
              {},
              'Each tab panel has an ',
              ee({}, 'aria-labelledby'),
              ' attribute whose value is the id of its associated ',
              ee({}, '<a role="tab">')
            )
          ),
          ne({ id: 'Keyboard-Interactions' }, 'Keyboard Interactions'),
          oe(
            {},
            le(
              {},
              'Arrow keys, when focus is on a selected tab, cycle selection to the next or previous tab'
            ),
            le(
              {},
              'Tab key, when focus is before the tab list, moves focus to the selected tab'
            ),
            le(
              {},
              'Tab key, when focus is on selected tab, moves focus into the selected tab’s associated tab panel or to the next focusable element on the page if that panel has no focusable elements'
            ),
            le(
              {},
              'Shift+Tab keys, when focus is on first element in a tab panel, moves focus back to the selected tab'
            )
          ),
          ne({ id: 'JavaScript-Needs' }, 'JavaScript Needs'),
          ie({}, 'The active tab has two markup requirements:'),
          oe(
            {},
            le(
              {},
              'The ',
              ee({}, '.slds-active'),
              ' class should be placed on the ',
              ee({}, 'li'),
              ' with ',
              ee({}, '.slds-tabs_{variant}__item'),
              '.'
            ),
            le(
              {},
              'The corresponding ',
              ee({}, '.slds-tabs_{variant}__content'),
              ' container receives ',
              ee({}, '.slds-show'),
              '.'
            ),
            le(
              {},
              'In order to achieve the focus state styling, apply ',
              ee({}, '.slds-has-focus'),
              ' to the parent ',
              ee({}, 'li'),
              '.'
            )
          ),
          ie(
            {},
            'Inactive ',
            ee({}, '.slds-tabs_{variant}__content'),
            ' containers receive ',
            ee({}, '.slds-hide'),
            '.'
          ),
          ie(
            {},
            'When the user clicks a different tab, move the ',
            ee({}, '.slds-active'),
            ' class and toggle the ',
            ee({}, '.slds-hide'),
            '/',
            ee({}, '.slds-show'),
            ' classes.'
          ),
          ae({ id: 'Accessibility' }, 'Accessibility'),
          ie(
            {},
            'Tabbed UIs have three parts with specific ARIA role requirements:'
          ),
          oe(
            {},
            le(
              {},
              'The tab list, which should have ',
              ee({}, 'role="tablist"')
            ),
            le(
              {},
              'The tabs in that list, which should each be an ',
              ee({}, '<a role="tab">'),
              ' anchor wrapped in a ',
              ee({}, '<li role="presentation">'),
              ' list item'
            ),
            le(
              {},
              'The tab panels, which display each tab’s content and should each have ',
              ee({}, 'role="tabpanel"')
            )
          ),
          te({ id: 'Base' }, 'Base'),
          Object(n.createElement)(
            o.a,
            { title: 'Tabs Base' },
            Object(n.createElement)(
              i.a,
              { demoStyles: 'height: 200px;' },
              Object(n.createElement)(F, null)
            )
          ),
          te({ id: 'With-Overflow' }, 'With Overflow'),
          ie(
            {},
            "The overflow tab style is provided as a tab item type that acts as a menu component and appears as a tab item. It could contain those tab items that don't all fit in a horizontal orientation."
          ),
          Object(n.createElement)(
            o.a,
            { title: 'Tabs Overflowing' },
            Object(n.createElement)(
              i.a,
              { demoStyles: 'height: 200px;' },
              Object(n.createElement)(R, null)
            )
          ),
          Object(n.createElement)(
            c.a,
            { type: 'note', header: 'Implementation Guidelines' },
            Object(n.createElement)(
              'p',
              null,
              'The ',
              Object(n.createElement)('code', null, 'slds-dropdown__list'),
              ' element requires a',
              Object(n.createElement)(
                'code',
                null,
                'slds-dropdown_length-with-icon-10'
              ),
              ' class, where 10 is the maximum number of items that will be visible before having to scroll.'
            )
          ),
          te({ id: 'With-Icon' }, 'With Icon'),
          ie(
            {},
            'Icons can be used with tabs to help users differentiate among them.'
          ),
          Object(n.createElement)(
            o.a,
            { title: 'Tabs With Icons' },
            Object(n.createElement)(
              i.a,
              { demoStyles: 'height: 200px;' },
              Object(n.createElement)(z, null)
            )
          ),
          te({ id: 'With-Error' }, 'With Error'),
          ie(
            {},
            'An icon can be used to communicate when a tab contains a validation error that needs attention.'
          ),
          Object(n.createElement)(
            o.a,
            { title: 'Tabs With Icons' },
            Object(n.createElement)(
              i.a,
              { demoStyles: 'height: 200px;' },
              Object(n.createElement)(G, null)
            )
          ),
          te({ id: 'With-Nested-Scoped-Tabs' }, 'With Nested Scoped Tabs'),
          ie(
            {},
            'If nesting tabs within tabs, the second set should be rendered as Scoped Tabs to help differentiate between tab sets.'
          ),
          Object(n.createElement)(
            o.a,
            { title: 'Tabs with Nested Scoped Tabs' },
            Object(n.createElement)(
              i.a,
              { demoStyles: 'height: 200px;' },
              Object(n.createElement)(D, null)
            )
          ),
          te({ id: 'Size-Modifiers' }, 'Size Modifiers'),
          ie(
            {},
            'Tabs come with three size modifiers: default, medium, and large. Each size step will gradually increase the typography. Add the modifier class ',
            ee({}, 'slds-tabs_medium'),
            ' or ',
            ee({}, 'slds-tabs_large'),
            ' to the ',
            ee({}, 'slds-tabs_default'),
            ' element.'
          ),
          ae({ id: 'Medium' }, 'Medium'),
          Object(n.createElement)(
            o.a,
            { title: 'Tabs with Medium sizing modifier' },
            Object(n.createElement)(i.a, null, Object(n.createElement)(K, null))
          ),
          ae({ id: 'Large' }, 'Large'),
          Object(n.createElement)(
            o.a,
            { title: 'Tabs with Large sizing modifier' },
            Object(n.createElement)(i.a, null, Object(n.createElement)(Y, null))
          ),
          te({ id: 'Subtabs' }, 'Subtabs'),
          ie(
            {},
            'Subtabs are used to provide an additional level of navigation below the Global Navigation Tab Bar. Use these tabs when users need to work across multiple sub-pages within a single navigation item.'
          ),
          Object(n.createElement)(i.a, { demoStyles: 'height: 100px;' }, $.e),
          ae({ id: 'Expected-Behavior' }, 'Expected Behavior'),
          oe(
            {},
            le(
              {},
              'The first tab within the Subtab Bar is always the default content for the parent navigation item. To differentiate this tab from other sub-navigation tabs, this tab cannot be closed.'
            ),
            le(
              {},
              'When opening a navigation item for the first time, the default sub-navigation tab can be assumed; don’t show the Subtab Bar.',
              oe(
                {},
                le(
                  {},
                  'When opening the first additional sub-navigation tab, a new tab bar is inserted containing both the default tab and the new sub-navigation tab.'
                )
              )
            ),
            le(
              {},
              'All sub tabs are closed when the parent navigation item is closed.'
            ),
            le(
              {},
              'Subtabs can optionally include a tab menu for additional controls.'
            )
          ),
          ae({ id: 'With-Focus' }, 'With Focus'),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 100px;' },
            Object(X.e)($.f, 'subtabs-has-focus')
          ),
          ae({ id: 'With-Borders' }, 'With Borders'),
          ie(
            {},
            'To add borders on either side of the subtab, add the classes ',
            ee({}, 'slds-border_right'),
            ' and ',
            ee({}, 'slds-border_left'),
            ', as needed, to the ',
            ee({}, '<li>'),
            ' with class ',
            ee({}, 'slds-sub-tabs__item'),
            '.'
          ),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 100px;' },
            Object(X.e)($.f, 'subtabs-borders')
          ),
          ae({ id: 'With-Tab-Actions' }, 'With Tab Actions'),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 100px;' },
            Object(X.e)($.f, 'subtabs-menu')
          ),
          ae({ id: 'Status-Options' }, 'Status Options'),
          ne({ id: 'Unsaved-Tab' }, 'Unsaved Tab'),
          ie({}, 'Unsaved tabs receive a blue asterisk on the tab.'),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 100px;' },
            Object(X.e)($.f, 'subtabs-unsaved')
          ),
          Object(n.createElement)(
            c.a,
            { header: 'Additional Tag for Accessibility', type: 'a11y' },
            Object(n.createElement)(
              'p',
              null,
              'In order to inform screen readers of the unsaved state, an ',
              Object(n.createElement)('code', null, '<abbr>'),
              ' tag is used to render the asterisk. The ',
              Object(n.createElement)('code', null, 'title'),
              ' attribute and ',
              Object(n.createElement)('code', null, 'aria-label'),
              ' should read ',
              Object(n.createElement)('b', null, '"Tab Not Saved"'),
              '.'
            )
          ),
          Object(n.createElement)(
            r.a,
            { toggleCode: !1 },
            Object(n.createElement)(
              'abbr',
              {
                className: 'slds-indicator_unsaved',
                title: 'Tab Not Saved',
                'aria-label': 'Tab Not Saved'
              },
              '*'
            )
          ),
          ne(
            { id: 'Communicating-Status-to-Screen-Readers' },
            'Communicating Status to Screen Readers'
          ),
          ie(
            {},
            'The following examples of sub tab status updates should all employ the same technique to communicate that update to users of assistive technology, who would be otherwise unaware of that status change.'
          ),
          ie(
            {},
            'You should use a single hidden ARIA live region for the entire sub tabs block, the contents of which gets updated each time a sub tab changes its status. The contents should contain a description of the status level and the name of the tab the status change event occurred in. The markup would look something like:'
          ),
          Object(n.createElement)(
            r.a,
            { toggleCode: !1 },
            Object(n.createElement)(
              'div',
              { className: 'slds-assistive-text', 'aria-live': 'polite' },
              '...'
            )
          ),
          ie(
            {},
            'Upon clearing the status on a given tab, you should clear the message from the live region.'
          ),
          ne({ id: 'Unread-Tab' }, 'Unread Tab'),
          ie({}, 'Unread tabs receive a red dot on the tab.'),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 100px;' },
            Object(X.e)($.f, 'unread')
          ),
          Object(n.createElement)(
            c.a,
            { header: 'Accessibility', type: 'a11y' },
            Object(n.createElement)(
              'p',
              null,
              'In order to inform screen readers of new activity in a tab, 2 things should occur.'
            ),
            Object(n.createElement)(
              'ol',
              { class: 'slds-list_ordered' },
              Object(n.createElement)(
                'li',
                null,
                'The ',
                Object(n.createElement)('code', null, 'title'),
                ' attribute and ',
                Object(n.createElement)('code', null, 'aria-label'),
                ' on the element that displays the red dot should read ',
                Object(n.createElement)('b', null, '"New Activity"'),
                '. This will update the text content of the tab to include the "New Activity" text: "New Activity Chat - Customer".'
              ),
              Object(n.createElement)(
                'li',
                null,
                'The hidden live region as described above, should have its content updated to ',
                Object(n.createElement)(
                  'b',
                  null,
                  '"New Activity in Tab: [Tab Name Here]"'
                ),
                ' to alert the user of new activity in that particular sub tab.'
              )
            )
          ),
          Object(n.createElement)(
            r.a,
            { toggleCode: !1 },
            Object(n.createElement)('span', {
              'aria-label': 'New Activity',
              className: 'slds-indicator_unread',
              title: 'New Activity'
            })
          ),
          Object(n.createElement)(
            r.a,
            { toggleCode: !1 },
            Object(n.createElement)(
              'div',
              { className: 'slds-assistive-text', 'aria-live': 'polite' },
              'New activity in Tab: Chat - Customer'
            )
          ),
          ne({ id: 'Unread-and-Unsaved-Tab' }, 'Unread and Unsaved Tab'),
          ie(
            {},
            'Unread and unsaved tabs receive a blue asterisk with a red dot underneath. Be sure to check out the individual sections above for the Accessibility requirements.'
          ),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 100px;' },
            Object(X.e)($.f, 'unsaved')
          ),
          Object(n.createElement)(
            c.a,
            { header: 'Accessibility', type: 'a11y' },
            Object(n.createElement)(
              'p',
              null,
              "Don't forget to update the hidden live region with which sub tab has new activity"
            )
          ),
          ne({ id: 'Warning-Tab' }, 'Warning Tab'),
          ie(
            {},
            'When you wish to draw attention to a particular sub tab because a warning about that tab has occurred, you can use the ',
            ee({}, 'slds-has-warning'),
            ' class to change the background color and introduce a short pulsing animation to draw attention from the user.'
          ),
          ie(
            {},
            'The icon is updated to be the warning icon, to give an extra way to communicate the level of the status without relying on the use of color alone.'
          ),
          ie(
            {},
            'In this example we show that something inside the sub tab is about to break a service level agreement in 30 seconds, and we wish to draw the users attention to it to take action.'
          ),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 100px;' },
            Object(X.e)($.f, 'warning')
          ),
          Object(n.createElement)(
            c.a,
            { header: 'Accessibility', type: 'a11y' },
            Object(n.createElement)(
              'p',
              null,
              'Update the hidden live region with a message that informs the user of the status level, the warning and the offending sub tab',
              ' ',
              Object(n.createElement)(
                'b',
                null,
                '[level]: [message] in tab: [tab_name]'
              )
            )
          ),
          Object(n.createElement)(
            r.a,
            { toggleCode: !1 },
            Object(n.createElement)(
              'div',
              { className: 'slds-assistive-text', 'aria-live': 'polite' },
              'Warning: SLA agreement in 30 seconds in tab: Chat - Customer'
            )
          ),
          se({ id: 'Unsaved-Warning-Tab' }, 'Unsaved Warning Tab'),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 100px;' },
            Object(X.e)($.f, 'warning-unsaved')
          ),
          se({ id: 'Unread-Warning-Tab' }, 'Unread Warning Tab'),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 100px;' },
            Object(X.e)($.f, 'warning-unread')
          ),
          ne({ id: 'Error-Tab' }, 'Error Tab'),
          ie(
            {},
            'When you wish to draw attention to a particular sub tab because an error or violation has occurred in that tab, you can use the ',
            ee({}, 'slds-has-error'),
            ' class to change the background color and introduce a short pulsing animation to draw attention from the user.'
          ),
          ie(
            {},
            'The icon is updated to be the error icon, to give an extra way to communicate the level of the status without relying on the use of color alone.'
          ),
          ie(
            {},
            'In this example we show that something inside the sub tab has broken an SLA agreement, and we wish to draw the users attention to it to take action.'
          ),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 100px;' },
            Object(X.e)($.f, 'error')
          ),
          Object(n.createElement)(
            c.a,
            { header: 'Accessibility', type: 'a11y' },
            Object(n.createElement)(
              'p',
              null,
              'Update the hidden live region with a message that informs the user of the status level, the error or violation and the offending sub tab',
              ' ',
              Object(n.createElement)(
                'b',
                null,
                '[level]: [message] in tab: [tab_name]'
              )
            )
          ),
          Object(n.createElement)(
            r.a,
            { toggleCode: !1 },
            Object(n.createElement)(
              'div',
              { className: 'slds-assistive-text', 'aria-live': 'polite' },
              'Violation: SLA agreement in tab: Chat - Customer'
            )
          ),
          se({ id: 'Unsaved-Error-Tab' }, 'Unsaved Error Tab'),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 100px;' },
            Object(X.e)($.f, 'error-unsaved')
          ),
          se({ id: 'Unread-Error-Tab' }, 'Unread Error Tab'),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 100px;' },
            Object(X.e)($.f, 'error-unread')
          ),
          ne({ id: 'Success-Tab' }, 'Success Tab'),
          ie(
            {},
            'When you wish to draw attention to a particular sub tab because a warning or violation has been cleared in the sub tab, you can use the ',
            ee({}, 'slds-has-success'),
            ' class to change the background color and introduce a short pulsing animation to draw attention from the user.'
          ),
          ie(
            {},
            'The icon is updated to be the success icon, to give an extra way to communicate the level of the status without relying on the use of color alone.'
          ),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 100px;' },
            Object(X.e)($.f, 'success')
          ),
          Object(n.createElement)(
            c.a,
            { header: 'Accessibility', type: 'a11y' },
            Object(n.createElement)(
              'p',
              null,
              'Update the hidden live region with a message that informs the user that the status level has been successfully cleared and the sub tab it was cleared from',
              ' ',
              Object(n.createElement)(
                'b',
                null,
                '[level]: [message] in tab: [tab_name]'
              )
            )
          ),
          Object(n.createElement)(
            r.a,
            { toggleCode: !1 },
            Object(n.createElement)(
              'div',
              { className: 'slds-assistive-text', 'aria-live': 'polite' },
              'Success: SLA agreement warning cleared in tab: Chat - Customer'
            )
          ),
          se({ id: 'Unsaved-Success-Tab' }, 'Unsaved Success Tab'),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 100px;' },
            Object(X.e)($.f, 'success-unsaved')
          ),
          se({ id: 'Unread-Success-Tab' }, 'Unread Success Tab'),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 100px;' },
            Object(X.e)($.f, 'success-unread')
          ),
          ae({ id: 'With-Overflow-Tab' }, 'With Overflow Tab'),
          ie({}, 'Overflowing subtabs are contained in a More dropdown.'),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 100px;' },
            Object(X.e)($.f, 'overflow-tabs')
          ),
          ne({ id: 'Overflow-Tab-Open' }, 'Overflow Tab Open'),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 200px;' },
            Object(X.e)($.f, 'overflow-tabs-open')
          ),
          ne({ id: 'Unread-Overflow-Tab' }, 'Unread Overflow Tab'),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 200px;' },
            Object(X.e)($.f, 'unread-overflow-tabs-open')
          ),
          ne({ id: 'Unsaved-Overflow-Tab' }, 'Unsaved Overflow Tab'),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 200px;' },
            Object(X.e)($.f, 'unsaved-overflow-tabs-open')
          ),
          ne(
            { id: 'Unread-and-Unsaved-Overflow-Tab' },
            'Unread and Unsaved Overflow Tab'
          ),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 200px;' },
            Object(X.e)($.f, 'unsaved-unread-overflow-tabs-open')
          ),
          ne({ id: 'Success-Overflow-Tab' }, 'Success Overflow Tab'),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 200px;' },
            Object(X.e)($.f, 'overflow-tabs-success')
          ),
          ne(
            { id: 'Unread-and-Unsaved-Success-Overflow-Tab' },
            'Unread and Unsaved Success Overflow Tab'
          ),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 200px;' },
            Object(X.e)($.f, 'overflow-tabs-success-unread-unsaved')
          ),
          ne({ id: 'Warning-Overflow-Tab' }, 'Warning Overflow Tab'),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 200px;' },
            Object(X.e)($.f, 'overflow-tabs-warning')
          ),
          ne(
            { id: 'Unread-and-Unsaved-Warning-Overflow-Tab' },
            'Unread and Unsaved Warning Overflow Tab'
          ),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 200px;' },
            Object(X.e)($.f, 'overflow-tabs-warning-unread-unsaved')
          ),
          ne({ id: 'Error-Overflow-Tab' }, 'Error Overflow Tab'),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 200px;' },
            Object(X.e)($.f, 'overflow-tabs-error')
          ),
          ne(
            { id: 'Unread-and-Unsaved-Error-Overflow-Tab' },
            'Unread and Unsaved Error Overflow Tab'
          ),
          Object(n.createElement)(
            i.a,
            { demoStyles: 'height: 200px;' },
            Object(X.e)($.f, 'overflow-tabs-error-unread-unsaved')
          ),
          te({ id: 'Vertical' }, 'Vertical'),
          ie(
            {},
            'To use vertical tabs, check out the ',
            Z({ href: '../vertical-tabs' }, 'Vertical Tabs'),
            ' component'
          ),
          Object(n.createElement)(o.a, { title: 'Tabs as Vertical' }, Q.a),
          te({ id: 'As-a-Card' }, 'As a Card'),
          ie(
            {},
            'To style tabs as a card, add the class ',
            ee({}, 'slds-tabs_card'),
            ' to the ',
            ee({}, '<div>'),
            ' with the class ',
            ee({}, 'slds-tabs_default'),
            '. See the following example for guidance on styling cards inside the tab panel content.'
          ),
          Object(n.createElement)(
            o.a,
            { title: 'Tabs as a Card' },
            Object(n.createElement)(
              i.a,
              { demoStyles: 'height: 600px;' },
              Object(n.createElement)(J, null)
            )
          ),
          te({ id: 'On-Mobile' }, 'On Mobile'),
          ie(
            {},
            "For mobile, tabs become stacked and act as buttons that drill in to see the tab's content."
          ),
          ie(
            {},
            'Mobile tabs consist of two parts, the tabs, which are represented via buttons, and their associated panels. When clicking on one of the buttons, the associated panel will slide in from right-to-left.'
          ),
          Object(n.createElement)(
            c.a,
            { header: 'Focus Management', type: 'a11y' },
            Object(n.createElement)(
              'p',
              null,
              'When a user selects a tab button, focus should be placed on the back button of the panel that slides into view. When the user clicks the back button, focus should be placed on the button that was just pressed.'
            )
          ),
          Object(n.createElement)(
            o.a,
            { title: 'Tabs Mobile Base' },
            Object(n.createElement)(i.a, null, Object(n.createElement)(P, null))
          ),
          ae({ id: 'Accessibility-2' }, 'Accessibility'),
          ie({}, re({}, 'Visibility')),
          oe(
            {},
            le(
              {},
              'The panels should have ',
              ee({}, 'aria-hidden=true'),
              ' when they are not visible to ensure keyboard and screen reader users cannot access the content.'
            ),
            le(
              {},
              'The tabs should have ',
              ee({}, 'aria-hidden=true'),
              ' when a panel is open to ensure keyboard and screen reader users cannot access the buttons.'
            )
          ),
          ie({}, re({}, 'Focus Management')),
          ie(
            {},
            'When a user selects a tab button, focus should be placed on the back button of the panel that slides into view. When the user clicks the back button, focus should be placed on the button that was just pressed.'
          ),
          ie({}, re({}, 'Assistive Text')),
          ie(
            {},
            'The title and assistive text for the panel\'s back button text should read "Collapse $&123;heading text&125;” so it stays contextual to the tab that was clicked on.'
          ),
          ae({ id: 'Panel-Open' }, 'Panel Open'),
          ie(
            {},
            'When clicking a tab button, the entire view changes and is replaced with the "content" of that tab inside of a panel. This includes a back button on the top left of the screen to go back to the view with the tabs.'
          ),
          Object(n.createElement)(
            o.a,
            { title: 'Tabs Mobile Drilled-in' },
            Object(n.createElement)(
              i.a,
              null,
              Object(n.createElement)(P, { visiblePanelIdx: 0, isStatic: !0 })
            )
          ),
          ae({ id: 'Adjacent-Tab-Sets' }, 'Adjacent Tab Sets'),
          ie(
            {},
            'When there are two or more immediately adjacent tab sets on mobile, use the ',
            ee({}, 'slds-tabs_mobile__group'),
            " class to adjust the styling to make them appear as if they're part of one master list. Semantically, they are still two separate lists."
          ),
          Object(n.createElement)(
            o.a,
            { title: 'Tabs Mobile Adjacent Stacked' },
            Object(n.createElement)(
              i.a,
              null,
              Object(n.createElement)(
                j,
                null,
                Object(n.createElement)(P, { isStatic: !0 }),
                Object(n.createElement)(P, { isStatic: !0, startingIdx: 3 })
              )
            )
          ),
          ae({ id: 'Nested-Tab-Sets' }, 'Nested Tab Sets'),
          Object(n.createElement)(
            o.a,
            { title: 'Tabs Mobile Nested' },
            Object(n.createElement)(
              i.a,
              { demoStyles: 'height: 300px;' },
              Object(n.createElement)(C, null)
            )
          )
        );
      },
      de = function() {
        return Object(l.a)(ce());
      };
  }
});
