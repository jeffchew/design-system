var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/carousel/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, o, s = t[0], c = t[1], l = t[2], p = 0, d = [];
      p < s.length;
      p++
    )
      (o = s[p]),
        Object.prototype.hasOwnProperty.call(r, o) && r[o] && d.push(r[o][0]),
        (r[o] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    for (u && u(t); d.length; ) d.shift()();
    return i.push.apply(i, l || []), a();
  }
  function a() {
    for (var e, t = 0; t < i.length; t++) {
      for (var a = i[t], n = !0, s = 1; s < a.length; s++) {
        var c = a[s];
        0 !== r[c] && (n = !1);
      }
      n && (i.splice(t--, 1), (e = o((o.s = a[0]))));
    }
    return e;
  }
  var n = {},
    r = {
      31: 0,
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
    i = [];
  function o(t) {
    if (n[t]) return n[t].exports;
    var a = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
  }
  (o.m = e),
    (o.c = n),
    (o.d = function(e, t, a) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
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
      var a = Object.create(null);
      if (
        (o.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          o.d(
            a,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return a;
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
    c = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var l = 0; l < s.length; l++) t(s[l]);
  var u = c;
  return i.push([249, 0]), a();
})({
  0: function(e, t) {
    e.exports = React;
  },
  249: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'Context', function() {
        return _;
      }),
      a.d(t, 'states', function() {
        return E;
      });
    var n = a(0),
      r = a.n(n),
      i = a(4),
      o = a(2),
      s = a.n(o);
    function c(e) {
      return (c =
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
    function l(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function u(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function p(e, t) {
      return (p =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function d(e, t) {
      return !t || ('object' !== c(t) && 'function' != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function f() {
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
    function m(e) {
      return (m = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var b = function(e) {
        return r.a.createElement(
          'li',
          { className: 'slds-carousel__indicator', role: 'presentation' },
          r.a.createElement(
            'a',
            {
              id: e.id,
              className: s()(
                'slds-carousel__indicator-action',
                e.isActive && 'slds-is-active',
                e.className
              ),
              href: 'javascript:void(0);',
              role: 'tab',
              tabIndex: e.isActive ? '0' : '-1',
              'aria-selected': e.isActive ? 'true' : 'false',
              'aria-controls': e.contentId,
              title: e.title
            },
            r.a.createElement(
              'span',
              { className: 'slds-assistive-text' },
              e.title
            )
          )
        );
      },
      v = function(e) {
        return r.a.createElement(
          'div',
          {
            id: e.id,
            className: s()('slds-carousel__panel', e.className),
            role: 'tabpanel',
            'aria-hidden': e.isActive ? 'false' : 'true',
            'aria-labelledby': e.indicatorId
          },
          r.a.createElement(
            'a',
            {
              href: 'javascript:void(0);',
              className: 'slds-carousel__panel-action slds-text-link_reset',
              tabIndex: e.isActive ? '0' : '-1'
            },
            r.a.createElement(
              'div',
              { className: 'slds-carousel__image' },
              r.a.createElement('img', { src: e.src, alt: e.title })
            ),
            r.a.createElement(
              'div',
              { className: 'slds-carousel__content' },
              r.a.createElement(
                'h2',
                { className: 'slds-carousel__content-title' },
                e.title
              ),
              r.a.createElement('p', null, e.description)
            )
          )
        );
      },
      y = function(e) {
        return r.a.createElement(
          'span',
          { className: 'slds-carousel__autoplay' },
          r.a.createElement(i.b, {
            className:
              'slds-button_icon-border-filled slds-button_icon-x-small',
            symbol: e.stop ? 'right' : 'pause',
            'aria-controls': e['aria-controls'],
            'aria-pressed': e.stop,
            disabled: e.disabled,
            title: 'Stop auto-play',
            assistiveText: 'Stop auto-play'
          })
        );
      },
      h = (function(e) {
        !(function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && p(e, t);
        })(c, e);
        var t,
          a,
          n,
          i,
          o = ((t = c),
          function() {
            var e,
              a = m(t);
            if (f()) {
              var n = m(this).constructor;
              e = Reflect.construct(a, arguments, n);
            } else e = a.apply(this, arguments);
            return d(this, e);
          });
        function c() {
          return l(this, c), o.apply(this, arguments);
        }
        return (
          (a = c),
          (n = [
            {
              key: 'render',
              value: function() {
                return r.a.createElement(
                  'div',
                  { className: s()('slds-carousel', this.props.className) },
                  r.a.createElement(
                    'div',
                    { className: 'slds-carousel__stage' },
                    this.props.autoPlay &&
                      r.a.createElement(y, {
                        stop: 'stop' === this.props.autoPlay
                      }),
                    r.a.createElement(
                      'div',
                      {
                        className: 'slds-carousel__panels',
                        style: {
                          transform: 'translateX(-'.concat(
                            100 * (this.props.panelActive - 1),
                            '%)'
                          )
                        }
                      },
                      r.a.createElement(v, {
                        isActive: '1' === this.props.panelActive,
                        id: 'content-id-01',
                        indicatorId: 'indicator-id-01',
                        title: 'Visit App Exchange',
                        description:
                          'Extend Salesforce with the #1 business marketplace.',
                        src: '/assets/images/carousel/carousel-01.jpg'
                      }),
                      r.a.createElement(v, {
                        isActive: '2' === this.props.panelActive,
                        id: 'content-id-02',
                        indicatorId: 'indicator-id-02',
                        title: 'Click to Customize',
                        description:
                          'Use the Object Manager to add fields, build layouts, and more.',
                        src: '/assets/images/carousel/carousel-02.jpg'
                      }),
                      r.a.createElement(v, {
                        isActive: '3' === this.props.panelActive,
                        id: 'content-id-03',
                        indicatorId: 'indicator-id-03',
                        title: 'Download SalesforceA',
                        description:
                          "Get the mobile app that's just for Salesforce admins.",
                        src: '/assets/images/carousel/carousel-03.jpg'
                      })
                    ),
                    r.a.createElement(
                      'ul',
                      {
                        className: 'slds-carousel__indicators',
                        role: 'tablist'
                      },
                      r.a.createElement(b, {
                        isActive: '1' === this.props.panelActive,
                        id: 'indicator-id-01',
                        contentId: 'content-id-01',
                        title: 'Visit App Exchange tab'
                      }),
                      r.a.createElement(b, {
                        isActive: '2' === this.props.panelActive,
                        id: 'indicator-id-02',
                        contentId: 'content-id-02',
                        title: 'Click to Customize tab'
                      }),
                      r.a.createElement(b, {
                        isActive: '3' === this.props.panelActive,
                        id: 'indicator-id-03',
                        contentId: 'content-id-03',
                        title: 'Download SalesforceA tab'
                      })
                    )
                  )
                );
              }
            }
          ]) && u(a.prototype, n),
          i && u(a, i),
          c
        );
      })(n.Component),
      _ = function(e) {
        return r.a.createElement(
          'div',
          { style: { width: '480px', maxWidth: '100%', height: '400px' } },
          e.children
        );
      },
      E = ((t.default = r.a.createElement(h, { panelActive: '1' })),
      [
        {
          id: 'tab-1-active',
          label: 'Tab 1 Active',
          element: r.a.createElement(h, { panelActive: '1' })
        },
        {
          id: 'tab-2-active',
          label: 'Tab 2 Active',
          element: r.a.createElement(h, { panelActive: '2' })
        },
        {
          id: 'tab-3-active',
          label: 'Tab 3 active',
          element: r.a.createElement(h, { panelActive: '3' })
        },
        {
          id: 'auto-play-enabled',
          label: 'Auto-play enabled',
          element: r.a.createElement(h, { panelActive: '1', autoPlay: !0 })
        },
        {
          id: 'auto-play-stopped',
          label: 'Auto-play stopped',
          element: r.a.createElement(h, { panelActive: '1', autoPlay: 'stop' })
        }
      ]);
  }
});
