var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/global-navigation/navigation-bar/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var a, l, s = t[0], c = t[1], u = t[2], p = 0, m = [];
      p < s.length;
      p++
    )
      (l = s[p]),
        Object.prototype.hasOwnProperty.call(r, l) && r[l] && m.push(r[l][0]),
        (r[l] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
    for (i && i(t); m.length; ) m.shift()();
    return o.push.apply(o, u || []), n();
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], a = !0, s = 1; s < n.length; s++) {
        var c = n[s];
        0 !== r[c] && (a = !1);
      }
      a && (o.splice(t--, 1), (e = l((l.s = n[0]))));
    }
    return e;
  }
  var a = {},
    r = {
      91: 0,
      6: 0,
      22: 0,
      73: 0,
      80: 0,
      93: 0,
      94: 0,
      96: 0,
      97: 0,
      98: 0,
      103: 0,
      104: 0,
      127: 0,
      131: 0,
      135: 0,
      140: 0,
      142: 0
    },
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
  var s = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    c = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var u = 0; u < s.length; u++) t(s[u]);
  var i = c;
  return o.push([246, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  246: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'Context', function() {
        return x;
      }),
      n.d(t, 'states', function() {
        return S;
      });
    var a = n(0),
      r = n.n(a),
      o = n(1),
      l = n.n(o),
      s = n(2),
      c = n.n(s),
      u = n(8),
      i = n(14),
      p = n(4),
      m = n(64);
    function f(e) {
      return (f =
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
    function d(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          'value' in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    function b(e, t) {
      return (b =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function v(e, t) {
      return !t || ('object' !== f(t) && 'function' != typeof t) ? h(e) : t;
    }
    function h(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function y() {
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
    function _(e) {
      return (_ = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function g() {
      return (g =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n)
              Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
          }
          return e;
        }).apply(this, arguments);
    }
    var M = r.a.createElement(
        i.Menu,
        { className: 'slds-dropdown_right' },
        r.a.createElement(
          i.MenuList,
          null,
          r.a.createElement(
            i.MenuItem,
            { title: 'Main action' },
            r.a.createElement(u.a, {
              className:
                'slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small',
              sprite: 'utility',
              symbol: 'add'
            }),
            'Main action'
          ),
          r.a.createElement(
            'li',
            {
              className: 'slds-dropdown__header slds-has-divider_top-space',
              role: 'separator'
            },
            r.a.createElement('span', null, 'Menu header')
          ),
          r.a.createElement(i.MenuItem, null, 'Menu Item One'),
          r.a.createElement(i.MenuItem, null, 'Menu Item Two'),
          r.a.createElement(i.MenuItem, null, 'Menu Item Three')
        )
      ),
      E = function(e) {
        var t = e.label,
          n = e.isActive,
          a = e.hasNavMenu,
          o = e.hasNavMenuOpen,
          l = e.hasMenuDropdown,
          s = c()('slds-context-bar__item', {
            'slds-is-active': n,
            'slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click': a,
            'slds-is-open': o
          });
        return r.a.createElement(
          'li',
          { className: s },
          r.a.createElement(
            'a',
            {
              href: 'javascript:void(0);',
              className: 'slds-context-bar__label-action',
              title: t
            },
            n &&
              r.a.createElement(
                'span',
                { className: 'slds-assistive-text' },
                'Current Page:'
              ),
            r.a.createElement(
              'span',
              { className: 'slds-truncate', title: t },
              t
            )
          ),
          a &&
            r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(N, { onClick: e.onClick }),
              l && M
            )
        );
      };
    (E.defaultProps = { lable: 'Menu Item', hasMenuDropdown: !0 }),
      (E.propTypes = {
        label: l.a.string.isRequired,
        isActive: l.a.bool,
        hasNavMenu: l.a.bool,
        hasNavMenuOpen: l.a.bool,
        hasMenuDropdown: l.a.bool
      });
    var N = function(e) {
        return r.a.createElement(
          'div',
          { className: 'slds-context-bar__icon-action slds-p-left_none' },
          r.a.createElement(
            p.b,
            g(
              {
                className: 'slds-button_icon slds-context-bar__button',
                symbol: 'chevrondown',
                'aria-haspopup': 'true',
                assistiveText: 'Open menu item submenu',
                title: 'Open menu item submenu'
              },
              e
            )
          )
        );
      },
      O = function(e) {
        var t = e.appName,
          n = e.homeItemIsActive,
          a = e.hasNavMenuOpen,
          o = e.children;
        return r.a.createElement(
          'div',
          { className: 'slds-context-bar' },
          r.a.createElement(
            'div',
            { className: 'slds-context-bar__primary' },
            r.a.createElement(
              'div',
              {
                className:
                  'slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover'
              },
              r.a.createElement(
                'div',
                { className: 'slds-context-bar__icon-action' },
                r.a.createElement(m.a, {
                  className: 'slds-context-bar__button'
                })
              ),
              r.a.createElement(
                'span',
                {
                  className:
                    'slds-context-bar__label-action slds-context-bar__app-name'
                },
                r.a.createElement(
                  'span',
                  { className: 'slds-truncate', title: t || 'App Name' },
                  t || 'App Name'
                )
              )
            )
          ),
          r.a.createElement(
            'nav',
            { className: 'slds-context-bar__secondary', role: 'navigation' },
            r.a.createElement(
              'ul',
              { className: 'slds-grid' },
              r.a.createElement(E, { label: 'Home', isActive: n }),
              o ||
                r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(E, {
                    label: 'Menu Item',
                    hasNavMenu: !0,
                    hasNavMenuOpen: a,
                    onClick: function() {
                      return e.toggleNavMenu();
                    }
                  }),
                  r.a.createElement(E, { label: 'Menu Item' }),
                  r.a.createElement(E, { label: 'Menu Item' }),
                  r.a.createElement(E, { label: 'Menu Item' })
                )
            )
          )
        );
      };
    O.propTypes = {
      appName: l.a.string,
      homeItemIsActive: l.a.bool,
      hasNavMenuOpen: l.a.bool,
      children: l.a.node
    };
    var w = (function(e) {
        !(function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && b(e, t);
        })(s, e);
        var t,
          n,
          a,
          o,
          l = ((t = s),
          function() {
            var e,
              n = _(t);
            if (y()) {
              var a = _(this).constructor;
              e = Reflect.construct(n, arguments, a);
            } else e = n.apply(this, arguments);
            return v(this, e);
          });
        function s() {
          var e;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, s),
            ((e = l.call(this)).toggleNavMenu = e.toggleNavMenu.bind(h(e))),
            (e.state = { hasNavMenuOpen: !1 }),
            e
          );
        }
        return (
          (n = s),
          (a = [
            {
              key: 'toggleNavMenu',
              value: function() {
                this.setState({ hasNavMenuOpen: !this.state.hasNavMenuOpen });
              }
            },
            {
              key: 'render',
              value: function() {
                return r.a.createElement(O, {
                  homeItemIsActive: !0,
                  toggleNavMenu: this.toggleNavMenu,
                  hasNavMenuOpen:
                    this.props.hasNavMenuOpen || this.state.hasNavMenuOpen
                });
              }
            }
          ]) && d(n.prototype, a),
          o && d(n, o),
          s
        );
      })(a.Component),
      x = function(e) {
        return r.a.createElement(
          'div',
          { style: { height: '16rem' } },
          e.children
        );
      },
      S = ((t.default = r.a.createElement(w, null)),
      [
        {
          id: 'item-active',
          label: 'Item Active',
          element: r.a.createElement(
            O,
            null,
            r.a.createElement(E, { label: 'Menu Item', hasNavMenu: !0 }),
            r.a.createElement(E, { label: 'Menu Item' }),
            r.a.createElement(E, { label: 'Menu Item', isActive: !0 }),
            r.a.createElement(E, { label: 'Menu Item' })
          )
        },
        {
          id: 'item-menu-open',
          label: 'Item Menu Open',
          element: r.a.createElement(w, { hasNavMenuOpen: !0 })
        }
      ]);
  }
});
