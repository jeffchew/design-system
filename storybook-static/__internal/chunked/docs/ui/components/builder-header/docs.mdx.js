var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/builder-header/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, s, o = t[0], i = t[1], c = t[2], d = 0, m = [];
      d < o.length;
      d++
    )
      (s = o[d]),
        Object.prototype.hasOwnProperty.call(r, s) && r[s] && m.push(r[s][0]),
        (r[s] = 0);
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    for (u && u(t); m.length; ) m.shift()();
    return l.push.apply(l, c || []), a();
  }
  function a() {
    for (var e, t = 0; t < l.length; t++) {
      for (var a = l[t], n = !0, o = 1; o < a.length; o++) {
        var i = a[o];
        0 !== r[i] && (n = !1);
      }
      n && (l.splice(t--, 1), (e = s((s.s = a[0]))));
    }
    return e;
  }
  var n = {},
    r = { 10: 0 },
    l = [];
  function s(t) {
    if (n[t]) return n[t].exports;
    var a = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, s), (a.l = !0), a.exports;
  }
  (s.m = e),
    (s.c = n),
    (s.d = function(e, t, a) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
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
      var a = Object.create(null);
      if (
        (s.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          s.d(
            a,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return a;
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
  var o = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    i = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var c = 0; c < o.length; c++) t(o[c]);
  var u = i;
  return l.push([275, 0]), a();
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
  275: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'getElement', function() {
        return A;
      }),
      a.d(t, 'getContents', function() {
        return H;
      });
    var n = a(0),
      r = a.n(n),
      l = a(4),
      s = a(1),
      o = (a(23), a(11)),
      i = (a(15), a(3)),
      c = a.n(i),
      u = a(10),
      d = a(7),
      m = a(12);
    function b(e) {
      return (b =
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
    function p(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function f(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function _(e, t, a) {
      return t && f(e.prototype, t), a && f(e, a), e;
    }
    function h(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 }
      })),
        t && y(e, t);
    }
    function y(e, t) {
      return (y =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function v(e) {
      return function() {
        var t,
          a = g(e);
        if (N()) {
          var n = g(this).constructor;
          t = Reflect.construct(a, arguments, n);
        } else t = a.apply(this, arguments);
        return E(this, t);
      };
    }
    function E(e, t) {
      return !t || ('object' !== b(t) && 'function' != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function N() {
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
    function g(e) {
      return (g = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var x = function() {
        return r.a.createElement(
          'div',
          { className: 'slds-builder-header__item' },
          r.a.createElement(
            'div',
            {
              className:
                'slds-builder-header__item-label slds-media slds-media_center'
            },
            r.a.createElement(
              'div',
              { className: 'slds-media__figure' },
              r.a.createElement(m.a, {
                containerClassName: 'slds-current-color',
                className: 'slds-icon_x-small',
                symbol: 'builder',
                assistiveText: !1,
                title: !1
              })
            ),
            r.a.createElement(
              'div',
              { className: 'slds-media__body' },
              'App Name'
            )
          )
        );
      },
      O = function(e) {
        return r.a.createElement(
          'nav',
          { className: 'slds-builder-header__item slds-builder-header__nav' },
          r.a.createElement(
            'ul',
            { className: 'slds-builder-header__nav-list' },
            r.a.createElement(j, { symbol: 'settings' }),
            r.a.createElement(j, { symbol: 'page', dropdown: !0 })
          )
        );
      },
      j = function(e) {
        return r.a.createElement(
          'li',
          { className: 'slds-builder-header__nav-item' },
          e.dropdown
            ? r.a.createElement(
                'button',
                {
                  className:
                    'slds-button slds-builder-header__item-action slds-media slds-media_center',
                  'aria-haspopup': 'true',
                  title: 'Click to open menu'
                },
                r.a.createElement(
                  'span',
                  { className: 'slds-media__figure' },
                  r.a.createElement(m.a, {
                    containerClassName: 'slds-current-color',
                    className: 'slds-icon_x-small',
                    symbol: e.symbol,
                    assistiveText: !1,
                    title: !1
                  })
                ),
                r.a.createElement(
                  'span',
                  { className: 'slds-media__body' },
                  r.a.createElement(
                    'span',
                    { className: 'slds-truncate', title: 'Dropdown' },
                    'Dropdown'
                  ),
                  r.a.createElement(m.a, {
                    containerClassName: 'slds-current-color slds-m-left_small',
                    className: 'slds-icon_x-small',
                    symbol: 'chevrondown',
                    assistiveText: !1,
                    title: !1
                  })
                )
              )
            : r.a.createElement(
                'a',
                {
                  href: 'javascript:void(0);',
                  className:
                    'slds-builder-header__item-action slds-media slds-media_center'
                },
                r.a.createElement(
                  'span',
                  { className: 'slds-media__figure' },
                  r.a.createElement(m.a, {
                    containerClassName: 'slds-current-color',
                    className: 'slds-icon_x-small',
                    symbol: e.symbol,
                    assistiveText: !1,
                    title: !1
                  })
                ),
                r.a.createElement(
                  'span',
                  { className: 'slds-media__body' },
                  r.a.createElement(
                    'span',
                    { className: 'slds-truncate', title: 'Link' },
                    'Link'
                  )
                )
              )
        );
      },
      w = function(e) {
        var t = e.label;
        return r.a.createElement(
          'div',
          { className: 'slds-builder-header__item slds-has-flexi-truncate' },
          r.a.createElement(
            'h1',
            { className: 'slds-builder-header__item-label' },
            r.a.createElement(
              'span',
              { className: 'slds-truncate', title: t },
              t
            )
          )
        );
      };
    (w.propTypes = { label: c.a.string }),
      (w.defaultProps = { label: 'Page Type' });
    var S = function(e) {
        return r.a.createElement(
          'div',
          { className: 'slds-builder-header__utilities-item' },
          r.a.createElement(
            'a',
            {
              href: 'javascript:void(0);',
              className:
                'slds-builder-header__item-action slds-media slds-media_center'
            },
            r.a.createElement(
              'div',
              { className: 'slds-media__figure' },
              r.a.createElement(m.a, {
                containerClassName: 'slds-current-color',
                className: 'slds-icon_x-small',
                symbol: 'back',
                assistiveText: !1,
                title: !1
              })
            ),
            r.a.createElement('div', { className: 'slds-media__body' }, 'Back')
          )
        );
      },
      T = function(e) {
        return r.a.createElement(
          'div',
          { className: 'slds-builder-header__utilities-item' },
          r.a.createElement(
            'a',
            {
              href: 'javascript:void(0);',
              className:
                'slds-builder-header__item-action slds-media slds-media_center'
            },
            r.a.createElement(
              'div',
              { className: 'slds-media__figure' },
              r.a.createElement(m.a, {
                containerClassName: 'slds-current-color',
                className: 'slds-icon_x-small',
                symbol: 'help',
                assistiveText: !1,
                title: !1
              })
            ),
            r.a.createElement('div', { className: 'slds-media__body' }, 'Help')
          )
        );
      },
      P = function(e) {
        return r.a.createElement(
          'div',
          {
            className: 'slds-builder-toolbar__item-group',
            'aria-label': 'Canvas Actions'
          },
          r.a.createElement(
            'div',
            { className: 'slds-button-group' },
            r.a.createElement(d.b, {
              className: 'slds-button_icon-border',
              symbol: 'undo',
              assistiveText: 'Undo',
              title: 'Undo',
              tabIndex: '0'
            }),
            r.a.createElement(d.b, {
              className: 'slds-button_icon-border',
              symbol: 'redo',
              assistiveText: 'Redo',
              title: 'Redo',
              tabIndex: '-1'
            })
          )
        );
      },
      C = function(e) {
        return r.a.createElement(
          'div',
          {
            className: 'slds-builder-toolbar__item-group',
            'aria-label': 'Edit actions'
          },
          r.a.createElement(
            'div',
            { className: 'slds-button-group' },
            r.a.createElement(d.b, {
              className: 'slds-button_icon-border',
              symbol: 'cut',
              assistiveText: 'Cut',
              title: 'Cut',
              tabIndex: '-1'
            }),
            r.a.createElement(d.b, {
              className: 'slds-button_icon-border',
              symbol: 'copy',
              assistiveText: 'Copy',
              title: 'Copy',
              tabIndex: '-1'
            }),
            r.a.createElement(d.b, {
              className: 'slds-button_icon-border',
              symbol: 'paste',
              assistiveText: 'Paste',
              title: 'Paste',
              tabIndex: '-1'
            })
          )
        );
      },
      k = function(e) {
        return r.a.createElement(
          'div',
          {
            className: 'slds-builder-toolbar__actions',
            'aria-label': 'Document actions'
          },
          r.a.createElement(
            'button',
            { className: 'slds-button slds-button_neutral' },
            r.a.createElement(u.a, {
              className: 'slds-button__icon slds-button__icon_left',
              sprite: 'utility',
              symbol: 'right'
            }),
            ' ',
            'Run'
          ),
          r.a.createElement(
            'button',
            { className: 'slds-button slds-button_neutral' },
            'Save As'
          ),
          r.a.createElement(
            'button',
            { className: 'slds-button slds-button_brand' },
            'Save'
          )
        );
      },
      D = (function(e) {
        h(a, e);
        var t = v(a);
        function a() {
          return p(this, a), t.apply(this, arguments);
        }
        return (
          _(a, [
            {
              key: 'render',
              value: function() {
                return r.a.createElement(
                  'div',
                  { className: 'slds-builder-toolbar', role: 'toolbar' },
                  r.a.createElement(P, null),
                  r.a.createElement(C, null),
                  r.a.createElement(k, null)
                );
              }
            }
          ]),
          a
        );
      })(n.Component),
      R = (function(e) {
        h(a, e);
        var t = v(a);
        function a() {
          return p(this, a), t.apply(this, arguments);
        }
        return (
          _(a, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.showToolbar,
                  a = e.docName;
                return r.a.createElement(
                  'div',
                  { className: 'slds-builder-header_container' },
                  r.a.createElement(
                    'header',
                    { className: 'slds-builder-header' },
                    r.a.createElement(x, null),
                    r.a.createElement(O, null),
                    r.a.createElement(w, { label: a }),
                    r.a.createElement(
                      'div',
                      {
                        className:
                          'slds-builder-header__item slds-builder-header__utilities'
                      },
                      r.a.createElement(S, null),
                      r.a.createElement(T, null)
                    )
                  ),
                  t && r.a.createElement(D, null)
                );
              }
            }
          ]),
          a
        );
      })(n.Component),
      B = l.c.a,
      L = l.c.h2,
      I = l.c.h3,
      V = l.c.p,
      A = function() {
        return Object(n.createElement)(
          l.b,
          {},
          Object(n.createElement)(
            'div',
            { className: 'doc lead' },
            'Every builder needs a builder header, which contains basic navigation elements. It also shows the builder type and content name.'
          ),
          Object(n.createElement)(
            s.a,
            { exampleOnly: !0, isViewport: !0, demoStyles: 'height: 132px;' },
            Object(n.createElement)(R, { showToolbar: !0 })
          ),
          L({ id: 'About-Builder-Header' }, 'About Builder Header'),
          V(
            {},
            'To learn more about the Builder pattern in general, check out our ',
            B({ href: '/guidelines/builder' }, 'guidelines'),
            ', which includes a section about how to use the ',
            B(
              { href: '/guidelines/builder/#Builder-Header' },
              'Builder Header'
            ),
            '.'
          ),
          L({ id: 'Base' }, 'Base'),
          Object(n.createElement)(
            o.a,
            { title: 'Base' },
            Object(n.createElement)(
              s.a,
              { isViewport: !0, demoStyles: 'height: 132px;' },
              Object(n.createElement)(R, null)
            )
          ),
          L({ id: 'Variations' }, 'Variations'),
          I({ id: 'With-a-Truncated-Name' }, 'With a Truncated Name'),
          Object(n.createElement)(
            o.a,
            { title: 'Truncated' },
            Object(n.createElement)(
              s.a,
              { isViewport: !0, demoStyles: 'height: 132px;' },
              Object(n.createElement)(R, {
                docName:
                  'Page Type with a very very long name that will truncate when the container is not wide enough to contain this content completely'
              })
            )
          ),
          I({ id: 'With-a-Toolbar' }, 'With a Toolbar'),
          Object(n.createElement)(
            o.a,
            { title: 'Toolbar' },
            Object(n.createElement)(
              s.a,
              { isViewport: !0, demoStyles: 'height: 132px;' },
              Object(n.createElement)(R, { showToolbar: !0 })
            )
          )
        );
      },
      H = function() {
        return Object(l.a)(A());
      };
  }
});
