var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/menus/docs.mdx.js'] = (function(e) {
  function t(t) {
    for (
      var l, r, o = t[0], c = t[1], d = t[2], m = 0, u = [];
      m < o.length;
      m++
    )
      (r = o[m]),
        Object.prototype.hasOwnProperty.call(a, r) && a[r] && u.push(a[r][0]),
        (a[r] = 0);
    for (l in c) Object.prototype.hasOwnProperty.call(c, l) && (e[l] = c[l]);
    for (i && i(t); u.length; ) u.shift()();
    return s.push.apply(s, d || []), n();
  }
  function n() {
    for (var e, t = 0; t < s.length; t++) {
      for (var n = s[t], l = !0, o = 1; o < n.length; o++) {
        var c = n[o];
        0 !== a[c] && (l = !1);
      }
      l && (s.splice(t--, 1), (e = r((r.s = n[0]))));
    }
    return e;
  }
  var l = {},
    a = { 48: 0 },
    s = [];
  function r(t) {
    if (l[t]) return l[t].exports;
    var n = (l[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = e),
    (r.c = l),
    (r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
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
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var l in e)
          r.d(
            n,
            l,
            function(t) {
              return e[t];
            }.bind(null, l)
          );
      return n;
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
  var o = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    c = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var d = 0; d < o.length; d++) t(o[d]);
  var i = c;
  return s.push([218, 0]), n();
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
  218: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getElement', function() {
        return X;
      }),
      n.d(t, 'getContents', function() {
        return Y;
      });
    var l = n(0),
      a = n.n(l),
      s = n(4),
      r = n(1),
      o = n(23),
      c = n(11),
      d = n(15),
      i = n(3),
      m = n.n(i);
    function u(e) {
      return (u =
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
    function h(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function p(e, t) {
      for (var n = 0; n < t.length; n++) {
        var l = t[n];
        (l.enumerable = l.enumerable || !1),
          (l.configurable = !0),
          'value' in l && (l.writable = !0),
          Object.defineProperty(e, l.key, l);
      }
    }
    function b(e, t) {
      return (b =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function g(e, t) {
      return !t || ('object' !== u(t) && 'function' != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function E() {
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
    function f(e) {
      return (f = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
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
      })(c, e);
      var t,
        n,
        s,
        r,
        o = ((t = c),
        function() {
          var e,
            n = f(t);
          if (E()) {
            var l = f(this).constructor;
            e = Reflect.construct(n, arguments, l);
          } else e = n.apply(this, arguments);
          return g(this, e);
        });
      function c() {
        return h(this, c), o.apply(this, arguments);
      }
      return (
        (n = c),
        (s = [
          {
            key: 'render',
            value: function() {
              return a.a.createElement(
                l.Fragment,
                null,
                this.props.fragmentChildren
              );
            }
          }
        ]) && p(n.prototype, s),
        r && p(n, r),
        c
      );
    })(a.a.Component);
    w.propTypes = { fragmentChildren: m.a.node.isRequired };
    var O = n(9),
      y = n(10),
      _ = function(e) {
        return a.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '260px' } },
          a.a.createElement(
            O.l,
            { className: 'slds-is-open' },
            a.a.createElement(
              O.f,
              { className: 'slds-dropdown_left slds-dropdown_small' },
              a.a.createElement(
                O.h,
                { className: 'slds-dropdown_length-5' },
                a.a.createElement(O.g, { tabIndex: '0' }, 'Menu Item One'),
                a.a.createElement(O.g, null, 'Menu Item Two'),
                a.a.createElement(O.g, null, 'Menu Item Three'),
                a.a.createElement(O.g, null, 'Menu Item Four'),
                a.a.createElement(O.g, null, 'Menu Item Five'),
                a.a.createElement(O.g, null, 'Menu Item Six'),
                a.a.createElement(O.g, null, 'Menu Item Seven'),
                a.a.createElement(O.g, null, 'Menu Item Eight'),
                a.a.createElement(O.g, null, 'Menu Item Nine'),
                a.a.createElement(O.g, null, 'Menu Item Ten')
              )
            )
          )
        );
      },
      j = function(e) {
        return a.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '300px' } },
          a.a.createElement(
            O.l,
            { className: 'slds-is-open' },
            a.a.createElement(
              O.f,
              { className: 'slds-dropdown_left slds-dropdown_small' },
              a.a.createElement(
                O.h,
                { className: 'slds-dropdown_length-7' },
                a.a.createElement(O.g, { tabIndex: '0' }, 'Menu Item One'),
                a.a.createElement(O.g, null, 'Menu Item Two'),
                a.a.createElement(O.g, null, 'Menu Item Three'),
                a.a.createElement(O.g, null, 'Menu Item Four'),
                a.a.createElement(O.g, null, 'Menu Item Five'),
                a.a.createElement(O.g, null, 'Menu Item Six'),
                a.a.createElement(O.g, null, 'Menu Item Seven'),
                a.a.createElement(O.g, null, 'Menu Item Eight'),
                a.a.createElement(O.g, null, 'Menu Item Nine'),
                a.a.createElement(O.g, null, 'Menu Item Ten')
              )
            )
          )
        );
      },
      v = function(e) {
        return a.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '430px' } },
          a.a.createElement(
            O.l,
            { className: 'slds-is-open' },
            a.a.createElement(
              O.f,
              { className: 'slds-dropdown_left slds-dropdown_small' },
              a.a.createElement(
                O.h,
                { className: 'slds-dropdown_length-10' },
                a.a.createElement(O.g, { tabIndex: '0' }, 'Menu Item One'),
                a.a.createElement(O.g, null, 'Menu Item Two'),
                a.a.createElement(O.g, null, 'Menu Item Three'),
                a.a.createElement(O.g, null, 'Menu Item Four'),
                a.a.createElement(O.g, null, 'Menu Item Five'),
                a.a.createElement(O.g, null, 'Menu Item Six'),
                a.a.createElement(O.g, null, 'Menu Item Seven'),
                a.a.createElement(O.g, null, 'Menu Item Eight'),
                a.a.createElement(O.g, null, 'Menu Item Nine'),
                a.a.createElement(O.g, null, 'Menu Item Ten')
              )
            )
          )
        );
      },
      I = function(e) {
        return a.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '260px' } },
          a.a.createElement(
            O.l,
            { className: 'slds-is-open' },
            a.a.createElement(
              O.f,
              { className: 'slds-dropdown_left slds-dropdown_small' },
              a.a.createElement(
                O.h,
                { className: 'slds-dropdown_length-with-icon-5' },
                a.a.createElement(
                  O.g,
                  { tabIndex: '0' },
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-account slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'account'
                  }),
                  'Menu Item One'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-approval slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'approval'
                  }),
                  'Menu Item Two'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-lead slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'lead'
                  }),
                  'Menu Item Three'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-opportunity slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'opportunity'
                  }),
                  'Menu Item Four'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-product slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'product'
                  }),
                  'Menu Item Five'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-account slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'account'
                  }),
                  'Menu Item Six'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-approval slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'approval'
                  }),
                  'Menu Item Seven'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-lead slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'lead'
                  }),
                  'Menu Item Eight'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-opportunity slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'opportunity'
                  }),
                  'Menu Item Nine'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-product slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'product'
                  }),
                  'Menu Item Ten'
                )
              )
            )
          )
        );
      },
      x = function(e) {
        return a.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '320px' } },
          a.a.createElement(
            O.l,
            { className: 'slds-is-open' },
            a.a.createElement(
              O.f,
              { className: 'slds-dropdown_left slds-dropdown_small' },
              a.a.createElement(
                O.h,
                { className: 'slds-dropdown_length-with-icon-7' },
                a.a.createElement(
                  O.g,
                  { tabIndex: '0' },
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-account slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'account'
                  }),
                  'Menu Item One'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-approval slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'approval'
                  }),
                  'Menu Item Two'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-lead slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'lead'
                  }),
                  'Menu Item Three'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-opportunity slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'opportunity'
                  }),
                  'Menu Item Four'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-product slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'product'
                  }),
                  'Menu Item Five'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-account slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'account'
                  }),
                  'Menu Item Six'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-approval slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'approval'
                  }),
                  'Menu Item Seven'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-lead slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'lead'
                  }),
                  'Menu Item Eight'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-opportunity slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'opportunity'
                  }),
                  'Menu Item Nine'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-product slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'product'
                  }),
                  'Menu Item Ten'
                )
              )
            )
          )
        );
      },
      M = function(e) {
        return a.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '450px' } },
          a.a.createElement(
            O.l,
            { className: 'slds-is-open' },
            a.a.createElement(
              O.f,
              { className: 'slds-dropdown_left slds-dropdown_small' },
              a.a.createElement(
                O.h,
                { className: 'slds-dropdown_length-with-icon-10' },
                a.a.createElement(
                  O.g,
                  { tabIndex: '0' },
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-account slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'account'
                  }),
                  'Menu Item One'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-approval slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'approval'
                  }),
                  'Menu Item Two'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-lead slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'lead'
                  }),
                  'Menu Item Three'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-opportunity slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'opportunity'
                  }),
                  'Menu Item Four'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-product slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'product'
                  }),
                  'Menu Item Five'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-account slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'account'
                  }),
                  'Menu Item Six'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-approval slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'approval'
                  }),
                  'Menu Item Seven'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-lead slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'lead'
                  }),
                  'Menu Item Eight'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-opportunity slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'opportunity'
                  }),
                  'Menu Item Nine'
                ),
                a.a.createElement(
                  O.g,
                  null,
                  a.a.createElement(y.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-standard-product slds-m-right_small',
                    sprite: 'standard',
                    symbol: 'product'
                  }),
                  'Menu Item Ten'
                )
              )
            )
          )
        );
      },
      N = [
        {
          id: 'dropdown-menu-length-5',
          label: '5 items',
          element: a.a.createElement(_, null)
        },
        {
          id: 'dropdown-menu-length-7',
          label: '7 items',
          element: a.a.createElement(j, null)
        },
        {
          id: 'dropdown-menu-length-10',
          label: '10 items',
          element: a.a.createElement(v, null)
        },
        {
          id: 'dropdown-menu-length-5-icon',
          label: '5 items with icon',
          element: a.a.createElement(I, null)
        },
        {
          id: 'dropdown-menu-length-7-icon',
          label: '7 items with icon',
          element: a.a.createElement(x, null)
        },
        {
          id: 'dropdown-menu-length-10-icon',
          label: '10 items with icon',
          element: a.a.createElement(M, null)
        }
      ],
      S = n(5),
      T = n.n(S);
    function k() {
      return (k =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var l in n)
              Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
          }
          return e;
        }).apply(this, arguments);
    }
    function C(e, t) {
      if (null == e) return {};
      var n,
        l,
        a = (function(e, t) {
          if (null == e) return {};
          var n,
            l,
            a = {},
            s = Object.keys(e);
          for (l = 0; l < s.length; l++)
            (n = s[l]), t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (l = 0; l < s.length; l++)
          (n = s[l]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (a[n] = e[n]));
      }
      return a;
    }
    var P = a.a.createElement(y.a, {
        className:
          'slds-icon slds-icon_x-small slds-icon-text-default slds-m-left_small slds-shrink-none',
        sprite: 'utility',
        symbol: 'right'
      }),
      R = function(e) {
        var t = e.ariaExpanded,
          n = e.className,
          l = (e.children, e.iconRight),
          s = e.itemName,
          r = e.tabIndex,
          o = e.title,
          c = e.submenuClassnames,
          d = C(e, [
            'ariaExpanded',
            'className',
            'children',
            'iconRight',
            'itemName',
            'tabIndex',
            'title',
            'submenuClassnames'
          ]);
        return a.a.createElement(
          'li',
          k({}, d, {
            className: T()('slds-dropdown__item slds-has-submenu', n),
            role: 'presentation'
          }),
          a.a.createElement(
            'a',
            {
              role: 'menuitem',
              href: 'javascript:void(0);',
              'aria-haspopup': 'true',
              'aria-expanded': t,
              tabIndex: r || '-1'
            },
            a.a.createElement(
              'span',
              { className: 'slds-truncate', title: o || s },
              e.itemName
            ),
            l || null
          ),
          a.a.createElement(
            O.f,
            { className: T()('slds-dropdown_submenu', c) },
            a.a.createElement(
              O.h,
              { ariaLabel: s },
              a.a.createElement(O.g, { tabIndex: '0' }, 'Submenu Item One'),
              a.a.createElement(O.g, null, 'Submenu Item Two'),
              a.a.createElement(O.g, null, 'Submenu Item Three'),
              a.a.createElement('li', {
                className: 'slds-has-divider_top-space',
                role: 'separator'
              }),
              a.a.createElement(O.g, null, 'Submenu Item Four')
            )
          )
        );
      },
      A = function(e) {
        return a.a.createElement(
          O.l,
          { className: 'slds-is-open' },
          a.a.createElement(
            O.f,
            { className: 'slds-dropdown_left' },
            a.a.createElement(
              O.h,
              { ariaLabel: 'Show More' },
              a.a.createElement(O.g, { tabIndex: '0' }, 'Menu Item One'),
              a.a.createElement(O.g, null, 'Menu Item Two'),
              a.a.createElement(R, {
                ariaExpanded: e.ariaExpanded,
                iconRight: P,
                itemName: 'Menu Item Three',
                submenuClassnames:
                  e.submenuClassnames || 'slds-dropdown_submenu-right'
              })
            )
          )
        );
      },
      L = (n(81), n(2)),
      W = n(33),
      F = s.c.code,
      D = s.c.h2,
      B = s.c.h3,
      H = s.c.h4,
      J = s.c.li,
      q = s.c.p,
      z = s.c.table,
      K = s.c.tbody,
      $ = s.c.td,
      G = s.c.th,
      Q = s.c.thead,
      U = s.c.tr,
      V = s.c.ul,
      X = function() {
        return Object(l.createElement)(
          s.b,
          {},
          Object(l.createElement)(
            'div',
            { className: 'doc lead' },
            'A Menu offers a list of actions or functions that a user can access.'
          ),
          Object(l.createElement)(
            r.a,
            { exampleOnly: !0, demoStyles: 'height: 150px;' },
            Object(l.createElement)(O.d, { hasLeftIcon: !0 })
          ),
          D({ id: 'About-Menu' }, 'About Menu'),
          q(
            {},
            'The unordered menu list ',
            F({}, '<ul>'),
            ' with ',
            F({}, 'role="menu"'),
            ' should be contained in a ',
            F({}, '<div>'),
            ' with the class ',
            F({}, '.slds-dropdown'),
            '.'
          ),
          q(
            {},
            'The target HTML element and dropdown need to be wrapped in the class ',
            F({}, '.slds-dropdown-trigger dropdown-trigger_click'),
            '.'
          ),
          B({ id: 'Accessibility' }, 'Accessibility'),
          H({ id: 'Markup' }, 'Markup'),
          V(
            {},
            J(
              {},
              'The menu trigger is a focusable element (',
              F({}, '<a>'),
              ' or ',
              F({}, '<button>'),
              ') with ',
              F({}, 'aria-haspopup="true"')
            ),
            J(
              {},
              'The menu has ',
              F({}, 'role="menu"'),
              ' and an ',
              F({}, 'aria-label'),
              ' attribute whose value is the name of the menu trigger'
            ),
            J(
              {},
              'The menu items have ',
              F({}, 'role="menuitem"'),
              ', ',
              F({}, 'role="menuitemcheckbox"'),
              ', or ',
              F({}, 'role="menuitemradio"'),
              ', depending on the selection options'
            )
          ),
          H({ id: 'Keyboard-Interactions' }, 'Keyboard Interactions'),
          q(
            {},
            'The main thing that distinguishes menus from other popover blocks is keyboard navigation: elsewhere, users press the Tab key to navigate through actionable items, but in a menu, users press the arrow keys to navigate.'
          ),
          V(
            {},
            J(
              {},
              'Arrow keys cycle focus through menu items (you should use JavaScript to disable focus for any disabled items)'
            ),
            J(
              {},
              'If a menu item opens a submenu, pressing Enter or the right arrow key opens the submenu and focus goes to the first item in the submenu'
            ),
            J(
              {},
              'If a submenu is open, pressing the left arrow key closes the submenu and puts focus back on the menu item that opened the submenu'
            ),
            J(
              {},
              'Tab key closes the menu and moves focus to the next focusable element on the page'
            ),
            J(
              {},
              'Esc key closes the menu and moves focus back to the menu trigger'
            ),
            J(
              {},
              'Any character key moves focus to the next menu item that starts with that character, if applicable'
            )
          ),
          B({ id: 'Mobile' }, 'Mobile'),
          Object(l.createElement)(W.a, {
            patternSpecificText:
              'menus will have an increased button size to accommodate tapping with a finger instead of the more precise mouse cursor as well as larger text size'
          }),
          Object(l.createElement)(
            r.a,
            { frameOnly: !0, frameStyles: { height: '14rem' } },
            Object(l.createElement)(O.d, { hasLeftIcon: !0 })
          ),
          D({ id: 'Base' }, 'Base'),
          Object(l.createElement)(
            c.a,
            { title: 'Menu Base' },
            Object(l.createElement)(
              r.a,
              { demoStyles: 'height: 200px;' },
              Object(l.createElement)(O.b, { className: 'slds-dropdown_left' })
            )
          ),
          D({ id: 'With-Subheaders' }, 'With Subheaders'),
          Object(l.createElement)(
            d.a,
            { type: 'a11y', header: 'Accessible Role' },
            Object(l.createElement)(
              'p',
              null,
              'A subheading must have ',
              Object(l.createElement)('code', null, 'role="separator"'),
              ' on the',
              ' ',
              Object(l.createElement)('code', null, '<li>'),
              ' and the content inside the ',
              Object(l.createElement)('code', null, '<li>'),
              ' ',
              'should be in a ',
              Object(l.createElement)('code', null, '<span>'),
              '.'
            )
          ),
          Object(l.createElement)(
            o.a,
            { toggleCode: !1 },
            Object(l.createElement)(
              'li',
              {
                className: 'slds-dropdown__header slds-truncate',
                title: 'Menu Sub Heading',
                role: 'separator'
              },
              Object(l.createElement)('span', null, 'Menu Sub Heading')
            )
          ),
          Object(l.createElement)(
            c.a,
            { title: 'Menu with Subheaders' },
            Object(l.createElement)(
              r.a,
              { demoStyles: 'height: 300px;' },
              Object(l.createElement)(O.k, null)
            )
          ),
          D({ id: 'With-Icons' }, 'With Icons'),
          q(
            {},
            'Icons can be included on either the left, right, or both sides of an option.'
          ),
          Object(l.createElement)(
            d.a,
            { type: 'a11y', header: 'Accessibility Note' },
            Object(l.createElement)(
              'p',
              null,
              'If using one of the icons to indicate selection (e.g. checkmarks), be sure to check out the',
              ' ',
              Object(l.createElement)(
                'a',
                { href: '#With-Selectable-Items' },
                'Menus with Selectable Items'
              ),
              ' docs for the Accessibility implications.'
            )
          ),
          B({ id: 'Icon-on-the-Left' }, 'Icon on the Left'),
          Object(l.createElement)(
            c.a,
            { title: 'Menu with Icon Left' },
            Object(l.createElement)(
              r.a,
              { demoStyles: 'height: 150px;' },
              Object(l.createElement)(O.d, { hasLeftIcon: !0 })
            )
          ),
          B({ id: 'Icon-on-the-Right' }, 'Icon on the Right'),
          Object(l.createElement)(
            c.a,
            { title: 'Menu with Icon Right' },
            Object(l.createElement)(
              r.a,
              { demoStyles: 'height: 150px;' },
              Object(l.createElement)(O.e, null)
            )
          ),
          B({ id: 'Double-Icon' }, 'Double Icon'),
          Object(l.createElement)(
            d.a,
            { type: 'a11y', header: 'Accessibility Note' },
            Object(l.createElement)(
              'p',
              null,
              'If using one of the icons to indicate selection (e.g. checkmarks), be sure to check out the',
              ' ',
              Object(l.createElement)(
                'a',
                { href: '#With-Selectable-Items' },
                'Menus with Selectable Items'
              ),
              ' docs.'
            )
          ),
          Object(l.createElement)(
            c.a,
            { title: 'Menu with Double Icon' },
            Object(l.createElement)(
              r.a,
              { demoStyles: 'height: 150px;' },
              Object(l.createElement)(O.c, null)
            )
          ),
          D({ id: 'With-Selectable-Items' }, 'With Selectable Items'),
          q({}, 'When creating a menu with selectable items:'),
          V(
            {},
            J(
              {},
              'All selectable items need the proper role, either ',
              F({}, 'role="menuitemcheckbox"'),
              ' or ',
              F({}, 'role="menuitemradio"')
            ),
            J({}, 'All selectable items should contain an icon'),
            J(
              {},
              'Each icon must have the class ',
              F({}, 'slds-icon_selected'),
              ' on the ',
              F({}, '<svg>'),
              V({}, J({}, 'This hides icons of non-selected items'))
            ),
            J(
              {},
              'Items that have been selected need ',
              F({}, 'aria-checked="true"'),
              ' on the ',
              F({}, '<a>'),
              ' element'
            )
          ),
          Object(l.createElement)(
            d.a,
            { type: 'a11y', header: 'Revealing Icons for Selected Items' },
            Object(l.createElement)(
              'p',
              null,
              'A selected item reveals its icon when the class',
              ' ',
              Object(l.createElement)('code', null, 'slds-is-selected'),
              ' is applied to the ',
              Object(l.createElement)('code', null, '<li>'),
              ' and',
              ' ',
              Object(l.createElement)('code', null, 'aria-checked="true"'),
              ' is applied to its',
              Object(l.createElement)('code', null, 'menuitemcheckbox'),
              ' or ',
              Object(l.createElement)('code', null, 'menuitemradio'),
              ' child.'
            )
          ),
          Object(l.createElement)(
            o.a,
            { toggleCode: !1 },
            Object(l.createElement)(
              'li',
              {
                className: 'slds-dropdown__item slds-is-selected',
                role: 'presentation'
              },
              Object(l.createElement)(
                'a',
                { role: 'menuitemcheckbox', 'aria-checked': 'true' },
                '...'
              )
            )
          ),
          Object(l.createElement)(
            c.a,
            { title: 'Menu with Selectable Icon Left' },
            Object(l.createElement)(
              r.a,
              { demoStyles: 'height: 150px;' },
              Object(l.createElement)(O.d, { isSelectable: !0 })
            )
          ),
          D({ id: 'With-Status-Notifications' }, 'With Status Notifications'),
          Object(l.createElement)(
            r.a,
            { demoStyles: 'height: 250px;' },
            Object(l.createElement)(O.i, null)
          ),
          q(
            {},
            'To enable menu items to reflect status level notifications like Error, Success and Warning, place a modifier class onto the ',
            F({}, 'menuitem'),
            ' that has the offending notification.'
          ),
          q(
            {},
            'The class is based on the ',
            F({}, 'slds-has-${level}'),
            ' pattern, where ',
            F({}, '${level}'),
            ' corresponds to the level you wish to set.'
          ),
          V(
            {},
            J({}, F({}, 'slds-has-error')),
            J({}, F({}, 'slds-has-success')),
            J({}, F({}, 'slds-has-warning'))
          ),
          Object(l.createElement)(
            o.a,
            { toggleCode: !1 },
            Object(l.createElement)(
              'a',
              {
                className: 'slds-has-warning',
                href: 'javascript:void(0);',
                role: 'menuitem',
                tabIndex: '-1'
              },
              '...'
            )
          ),
          Object(l.createElement)(
            d.a,
            { type: 'note', header: 'Warning Icon' },
            Object(l.createElement)(
              'p',
              null,
              'For warning level menu items it is required that you switch the icon to use the ',
              Object(l.createElement)('code', null, 'currentColor'),
              ' variant for icons.'
            )
          ),
          D({ id: 'With-Overflow-Scrolling' }, 'With Overflow Scrolling'),
          Object(l.createElement)(
            c.a,
            { title: 'Menu with Overflow Scrolling' },
            Object(l.createElement)(
              r.a,
              { demoStyles: 'height: 220px;' },
              Object(l.createElement)(O.j, {
                className: 'slds-dropdown_left slds-dropdown_length-5'
              })
            )
          ),
          q(
            {},
            'To force overflow scrolling after either 5, 7, or 10 items, add the modifier ',
            F({}, 'slds-dropdown_length-*'),
            ' to the ',
            F({}, '<div>'),
            ' with class ',
            F({}, 'slds-dropdown'),
            ' where the ',
            F({}, '*'),
            ' is either 5, 7, or 10.'
          ),
          Object(l.createElement)(
            o.a,
            { toggleCode: !1 },
            Object(l.createElement)(
              'div',
              { className: 'slds-dropdown slds-dropdown_length-5' },
              '...'
            )
          ),
          B(
            { id: 'Scrolling-for-Menu-Items-with-Icons' },
            'Scrolling for Menu Items with Icons'
          ),
          q(
            {},
            'To force overflow scrolling after either 5, 7, or 10 items with icons, add the modifier ',
            F({}, 'slds-dropdown_length-with-icon-*'),
            ' to the ',
            F({}, '<div>'),
            ' with class ',
            F({}, 'slds-dropdown'),
            ' where the ',
            F({}, '*'),
            ' is either 5, 7, or 10.'
          ),
          Object(l.createElement)(
            r.a,
            { demoStyles: 'height: 250px;' },
            Object(l.createElement)(O.j, {
              isSelectable: !0,
              isSelected: 'true',
              className: 'slds-dropdown_left slds-dropdown_length-with-icon-5'
            })
          ),
          D({ id: 'With-a-Submenu' }, 'With a Submenu'),
          q(
            {},
            'To create a menu with a submenu, add the ',
            F({}, 'slds-has-submenu'),
            ' class to the list item, ',
            F({}, '<li>'),
            ', that will open the submenu.'
          ),
          Object(l.createElement)(
            d.a,
            { type: 'a11y', header: 'Accessibility Note' },
            Object(l.createElement)(
              'p',
              null,
              'Any menu item that opens a submenu must have ',
              Object(l.createElement)('code', null, 'aria-haspop="true"'),
              ' ',
              'on the ',
              Object(l.createElement)('code', null, '<a>'),
              ' within the ',
              Object(l.createElement)('code', null, '<li>'),
              '. In order to open the submenu, set ',
              Object(l.createElement)('code', null, 'aria-expanded'),
              ' to ',
              Object(l.createElement)('code', null, 'true'),
              ' on that ',
              Object(l.createElement)('code', null, '<a>'),
              ' when the user clicks or hovers over the list item, or presses enter while focused on the list item. Additionally, the submenu should have ',
              Object(l.createElement)('code', null, 'role="menu"'),
              ' and an ',
              Object(l.createElement)('code', null, 'aria-label'),
              ' ',
              'attribute whose value matches the name of the ',
              Object(l.createElement)('code', null, '<li>'),
              ' that opened the submenu.'
            )
          ),
          Object(l.createElement)(
            o.a,
            { toggleCode: !1 },
            Object(l.createElement)(
              'li',
              {
                className: 'slds-dropdown__item slds-has-submenu',
                role: 'presentation'
              },
              Object(l.createElement)(
                'a',
                {
                  role: 'menuitem',
                  href: 'javascript:void(0);',
                  'aria-haspopup': 'true',
                  'aria-expanded': 'true',
                  tabIndex: '-1'
                },
                '...'
              ),
              Object(l.createElement)(
                'div',
                {
                  className:
                    'slds-dropdown slds-dropdown_submenu slds-dropdown_submenu-left'
                },
                Object(l.createElement)(
                  'ul',
                  {
                    className: 'slds-dropdown__list',
                    role: 'menu',
                    'aria-label': 'Name of Item that Opened this Menu'
                  },
                  '...'
                )
              )
            )
          ),
          B({ id: 'Submenu-to-Right' }, 'Submenu to Right'),
          q(
            {},
            'To open the submenu to the right of the main menu, add ',
            F({}, 'slds-dropdown_submenu-right'),
            ' to the ',
            F({}, '<div>'),
            ' with the ',
            F({}, 'slds-dropdown_submenu'),
            ' class.'
          ),
          Object(l.createElement)(
            c.a,
            { title: 'Menu with Submenu Right' },
            Object(l.createElement)(
              r.a,
              { demoStyles: 'height: 300px;' },
              Object(l.createElement)(A, { ariaExpanded: 'true' })
            )
          ),
          B({ id: 'Submenu-to-Left' }, 'Submenu to Left'),
          q(
            {},
            'To open the submenu to the left, add ',
            F({}, 'slds-dropdown_submenu-left'),
            ' to the ',
            F({}, '<div>'),
            ' with the ',
            F({}, 'slds-dropdown_submenu'),
            ' class.'
          ),
          Object(l.createElement)(
            c.a,
            { title: 'Menu with Submenu Left' },
            Object(l.createElement)(
              r.a,
              { demoStyles: 'height: 300px; margin-left: 150px;' },
              Object(l.createElement)(A, {
                ariaExpanded: !0,
                submenuClassnames: 'slds-dropdown_submenu-left'
              })
            )
          ),
          D({ id: 'Overflow-Menu-with-Actions' }, 'Overflow Menu with Actions'),
          q(
            {},
            'For an overflow of action items, use the overflow menu with actions styling by adding the modifier ',
            F({}, 'slds-dropdown_actions'),
            ' to the ',
            F({}, 'div'),
            ' with class ',
            F({}, 'slds-dropdown'),
            '. This pattern is typically used in conjunction with a button group.'
          ),
          Object(l.createElement)(
            c.a,
            { title: 'Menu with Action Overflow' },
            Object(l.createElement)(
              r.a,
              { demoStyles: 'height: 150px;' },
              Object(l.createElement)(O.a, null)
            )
          ),
          D({ id: 'Positioning' }, 'Positioning'),
          q(
            {},
            'There are 3 options for the positioning of the menu dropdown -- left, right, and bottom. To access these options, add a modifier to the ',
            F({}, '<div>'),
            ' with class name ',
            F({}, 'slds-dropdown'),
            '. For the standard positioning where the dropdown aligns with the left side of the dropdown trigger, use ',
            F({}, 'slds-dropdown_left'),
            ', as seen above.'
          ),
          Object(l.createElement)(
            o.a,
            { toggleCode: !1 },
            Object(l.createElement)(
              'div',
              { className: 'slds-dropdown slds-dropdown_left' },
              '...'
            )
          ),
          B({ id: 'Positioned-Right' }, 'Positioned Right'),
          q(
            {},
            'To position the dropdown to align with the right of the dropdown trigger, use ',
            F({}, 'slds-dropdown_right'),
            '.'
          ),
          Object(l.createElement)(
            c.a,
            { title: 'Menu Positioned Right' },
            Object(l.createElement)(
              r.a,
              { demoStyles: 'height: 200px; margin-left: 90px;' },
              Object(l.createElement)(O.b, { className: 'slds-dropdown_right' })
            )
          ),
          B({ id: 'Positioned-Bottom' }, 'Positioned Bottom'),
          q(
            {},
            'To position the dropdown to sit on top of the dropdown trigger, use ',
            F({}, 'slds-dropdown_bottom'),
            '.'
          ),
          Object(l.createElement)(
            c.a,
            { title: 'Menu Positioned Bottom' },
            Object(l.createElement)(
              r.a,
              { demoStyles: 'margin-left: 45px; margin-top: 163px;' },
              Object(l.createElement)(O.b, {
                className: 'slds-dropdown_bottom'
              })
            )
          ),
          D({ id: 'Width' }, 'Width'),
          q(
            {},
            'To adjust the width of the menu dropdown add modifier ',
            F({}, 'slds-dropdown_*'),
            ' to the ',
            F({}, '<div>'),
            ' with class ',
            F({}, 'slds-dropdown'),
            ' where the ',
            F({}, '*'),
            ' is ',
            F({}, 'xx-small'),
            ', ',
            F({}, 'x-small'),
            ', ',
            F({}, 'small'),
            ', ',
            F({}, 'medium'),
            ', or ',
            F({}, 'large'),
            '.'
          ),
          Object(l.createElement)(
            o.a,
            { toggleCode: !1 },
            Object(l.createElement)(
              'div',
              {
                className:
                  'slds-dropdown slds-dropdown_left slds-dropdown_medium'
              },
              '...'
            )
          ),
          z(
            {},
            Q({}, U({}, G({}, 'Modifier'), G({}, 'Example'))),
            K(
              {},
              U(
                {},
                $(
                  {},
                  F({}, '.slds-dropdown_xx-small'),
                  ' ',
                  Object(l.createElement)('br', null),
                  ' 6rem / 96px'
                ),
                $(
                  {},
                  Object(l.createElement)(
                    'div',
                    { style: { height: '200px', width: '320px' } },
                    Object(l.createElement)(O.b, {
                      className: 'slds-dropdown_left slds-dropdown_xx-small'
                    })
                  )
                )
              ),
              U(
                {},
                $(
                  {},
                  F({}, '.slds-dropdown_x-small'),
                  ' ',
                  Object(l.createElement)('br', null),
                  ' 12rem / 192px'
                ),
                $(
                  {},
                  Object(l.createElement)(
                    'div',
                    { style: { height: '200px', width: '320px' } },
                    Object(l.createElement)(O.b, {
                      className: 'slds-dropdown_left slds-dropdown_x-small'
                    })
                  )
                )
              ),
              U(
                {},
                $(
                  {},
                  F({}, '.slds-dropdown_small'),
                  ' ',
                  Object(l.createElement)('br', null),
                  ' 15rem / 240px'
                ),
                $(
                  {},
                  Object(l.createElement)(
                    'div',
                    { style: { height: '200px', width: '320px' } },
                    Object(l.createElement)(O.b, {
                      className: 'slds-dropdown_left slds-dropdown_small'
                    })
                  )
                )
              ),
              U(
                {},
                $(
                  {},
                  F({}, '.slds-dropdown_medium'),
                  ' ',
                  Object(l.createElement)('br', null),
                  ' 20rem / 320px'
                ),
                $(
                  {},
                  Object(l.createElement)(
                    'div',
                    { style: { height: '200px', width: '320px' } },
                    Object(l.createElement)(O.b, {
                      className: 'slds-dropdown_left slds-dropdown_medium'
                    })
                  )
                )
              ),
              U(
                {},
                $(
                  {},
                  F({}, '.slds-dropdown_large'),
                  ' ',
                  Object(l.createElement)('br', null),
                  ' 25rem / 400px'
                ),
                $(
                  {},
                  Object(l.createElement)(
                    'div',
                    { style: { height: '200px', width: '320px' } },
                    Object(l.createElement)(O.b, {
                      className: 'slds-dropdown_left slds-dropdown_large'
                    })
                  )
                )
              )
            )
          ),
          D({ id: 'Height' }, 'Height'),
          q(
            {},
            'To adjust the length of visible menu dropdown items before overflow scrolling activates, add modifier ',
            F({}, 'slds-dropdown_length-*'),
            ', or when using icons, ',
            F({}, 'slds-dropdown_length-with-icon-*'),
            ', where the ',
            F({}, '*'),
            ' is ',
            F({}, '5'),
            ', ',
            F({}, '7'),
            ', ',
            F({}, '10'),
            '. Apply the height classes to both the ',
            F({}, '<div>'),
            's with class ',
            F({}, 'slds-dropdown'),
            ' and ',
            F({}, 'slds-dropdown__list')
          ),
          Object(l.createElement)(
            o.a,
            { toggleCode: !1 },
            Object(l.createElement)(
              'div',
              {
                className:
                  'slds-dropdown slds-dropdown_left slds-dropdown_length-7'
              },
              Object(l.createElement)(
                'ul',
                { class: 'slds-dropdown__list slds-dropdown_length-7' },
                '...'
              )
            )
          ),
          z(
            {},
            Q({}, U({}, G({}, 'Modifier'), G({}, 'Example'))),
            K(
              {},
              U(
                {},
                $(
                  {},
                  F({}, '.slds-dropdown_length-5'),
                  ' ',
                  Object(l.createElement)('br', null),
                  ' 5 items'
                ),
                $(
                  {},
                  Object(l.createElement)(
                    'div',
                    { style: { height: '16rem', width: '320px' } },
                    Object(l.createElement)(w, {
                      fragmentChildren: Object(L.e)(N, 'dropdown-menu-length-5')
                    })
                  )
                )
              ),
              U(
                {},
                $(
                  {},
                  F({}, '.slds-dropdown_length-7'),
                  ' ',
                  Object(l.createElement)('br', null),
                  ' 7 items'
                ),
                $(
                  {},
                  Object(l.createElement)(
                    'div',
                    { style: { height: '21rem', width: '320px' } },
                    Object(l.createElement)(w, {
                      fragmentChildren: Object(L.e)(N, 'dropdown-menu-length-7')
                    })
                  )
                )
              ),
              U(
                {},
                $(
                  {},
                  F({}, '.slds-dropdown_length-10'),
                  ' ',
                  Object(l.createElement)('br', null),
                  ' 10 items'
                ),
                $(
                  {},
                  Object(l.createElement)(
                    'div',
                    { style: { height: '26rem', width: '320px' } },
                    Object(l.createElement)(w, {
                      fragmentChildren: Object(L.e)(
                        N,
                        'dropdown-menu-length-10'
                      )
                    })
                  )
                )
              ),
              U(
                {},
                $(
                  {},
                  F({}, '.slds-dropdown_length-with-icon-5'),
                  ' ',
                  Object(l.createElement)('br', null),
                  ' 5 items'
                ),
                $(
                  {},
                  Object(l.createElement)(
                    'div',
                    { style: { height: '16rem', width: '320px' } },
                    Object(l.createElement)(w, {
                      fragmentChildren: Object(L.e)(
                        N,
                        'dropdown-menu-length-5-icon'
                      )
                    })
                  )
                )
              ),
              U(
                {},
                $(
                  {},
                  F({}, '.slds-dropdown_length-with-icon-7'),
                  ' ',
                  Object(l.createElement)('br', null),
                  ' 7 items'
                ),
                $(
                  {},
                  Object(l.createElement)(
                    'div',
                    { style: { height: '21rem', width: '320px' } },
                    Object(l.createElement)(w, {
                      fragmentChildren: Object(L.e)(
                        N,
                        'dropdown-menu-length-7-icon'
                      )
                    })
                  )
                )
              ),
              U(
                {},
                $(
                  {},
                  F({}, '.slds-dropdown_length-with-icon-10'),
                  ' ',
                  Object(l.createElement)('br', null),
                  ' 10 items'
                ),
                $(
                  {},
                  Object(l.createElement)(
                    'div',
                    { style: { height: '28rem', width: '320px' } },
                    Object(l.createElement)(w, {
                      fragmentChildren: Object(L.e)(
                        N,
                        'dropdown-menu-length-10-icon'
                      )
                    })
                  )
                )
              )
            )
          )
        );
      },
      Y = function() {
        return Object(s.a)(X());
      };
  }
});
