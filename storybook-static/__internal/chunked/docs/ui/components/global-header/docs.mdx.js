var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/global-header/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var a, s, r = t[0], l = t[1], c = t[2], d = 0, m = [];
      d < r.length;
      d++
    )
      (s = r[d]),
        Object.prototype.hasOwnProperty.call(n, s) && n[s] && m.push(n[s][0]),
        (n[s] = 0);
    for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
    for (u && u(t); m.length; ) m.shift()();
    return i.push.apply(i, c || []), o();
  }
  function o() {
    for (var e, t = 0; t < i.length; t++) {
      for (var o = i[t], a = !0, r = 1; r < o.length; r++) {
        var l = o[r];
        0 !== n[l] && (a = !1);
      }
      a && (i.splice(t--, 1), (e = s((s.s = o[0]))));
    }
    return e;
  }
  var a = {},
    n = { 40: 0 },
    i = [];
  function s(t) {
    if (a[t]) return a[t].exports;
    var o = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(o.exports, o, o.exports, s), (o.l = !0), o.exports;
  }
  (s.m = e),
    (s.c = a),
    (s.d = function(e, t, o) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
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
      var o = Object.create(null);
      if (
        (s.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          s.d(
            o,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return o;
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
  var r = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    l = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var c = 0; c < r.length; c++) t(r[c]);
  var u = l;
  return i.push([205, 0]), o();
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
  205: function(e, t, o) {
    'use strict';
    o.r(t),
      o.d(t, 'getElement', function() {
        return Pe;
      }),
      o.d(t, 'getContents', function() {
        return ke;
      });
    var a = o(0),
      n = o.n(a),
      i = o(4),
      s = o(1),
      r = o(23),
      l = o(11),
      c = o(15),
      u = o(5),
      d = o.n(u),
      m = o(3),
      b = o.n(m),
      f = o(7),
      p = o(40),
      h = o(34),
      y = {
        item1: {
          username: 'Val Handerly',
          avatar: '/assets/images/avatar2.jpg',
          title: 'mentioned you',
          message:
            '@jrogers Could I please have a review on my presentation deck',
          timestamp: '10 hours ago',
          unread: !0
        },
        item2: {
          username: 'Jon Rogers',
          avatar: '/assets/images/avatar3.jpg',
          title: 'commented on your post',
          message: 'I totally agree with your sentiment',
          timestamp: '13 hours ago',
          unread: !0
        },
        item3: {
          username: 'Rebecca Stone',
          avatar: '/assets/images/avatar2.jpg',
          title: 'mentioned you',
          message: "@jrogers Here's the conversation I mentioned to you",
          timestamp: '1 day ago',
          unread: !1
        }
      };
    function g(e) {
      return (g =
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
      for (var o = 0; o < t.length; o++) {
        var a = t[o];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          'value' in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    function _(e, t) {
      return (_ =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function E(e, t) {
      return !t || ('object' !== g(t) && 'function' != typeof t) ? w(e) : t;
    }
    function w(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function O() {
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
    function j(e) {
      return (j = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var x = function(e) {
        return n.a.createElement(
          'li',
          {
            className: d()(
              'slds-global-header__notification',
              e.unread && 'slds-global-header__notification_unread',
              e.className
            ),
            key: e.index
          },
          n.a.createElement(
            'div',
            {
              className:
                'slds-media slds-has-flexi-truncate slds-p-around_x-small'
            },
            n.a.createElement(
              'div',
              { className: 'slds-media__figure' },
              n.a.createElement(
                p.a,
                { className: 'slds-avatar_small' },
                n.a.createElement('img', {
                  alt: e.username,
                  src: e.avatar,
                  title: ''.concat(e.username, ' avatar')
                })
              )
            ),
            n.a.createElement(
              'div',
              { className: 'slds-media__body' },
              n.a.createElement(
                'div',
                { className: 'slds-grid slds-grid_align-spread' },
                n.a.createElement(
                  'a',
                  {
                    href: 'javascript:void(0);',
                    className: 'slds-text-link_reset slds-has-flexi-truncate'
                  },
                  n.a.createElement(
                    'h3',
                    {
                      className: 'slds-truncate',
                      title: ''.concat(e.username, ' ').concat(e.title)
                    },
                    n.a.createElement(
                      'strong',
                      null,
                      ''.concat(e.username, ' ').concat(e.title)
                    )
                  ),
                  n.a.createElement(
                    'p',
                    { className: 'slds-truncate', title: e.message },
                    e.message
                  ),
                  n.a.createElement(
                    'p',
                    { className: 'slds-m-top_x-small slds-text-color_weak' },
                    e.timestamp,
                    e.unread &&
                      n.a.createElement(
                        'abbr',
                        {
                          className:
                            'slds-text-link slds-m-horizontal_xxx-small',
                          title: 'unread'
                        },
                        '●'
                      )
                  )
                )
              )
            )
          )
        );
      },
      N = (function(e) {
        !(function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && _(e, t);
        })(r, e);
        var t,
          o,
          a,
          i,
          s = ((t = r),
          function() {
            var e,
              o = j(t);
            if (O()) {
              var a = j(this).constructor;
              e = Reflect.construct(o, arguments, a);
            } else e = o.apply(this, arguments);
            return E(this, e);
          });
        function r() {
          var e;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, r),
            ((e = s.call(
              this
            )).renderNotificationItems = e.renderNotificationItems.bind(w(e))),
            e
          );
        }
        return (
          (o = r),
          (a = [
            {
              key: 'renderNotificationItems',
              value: function(e) {
                var t = y[e];
                return n.a.createElement(x, {
                  key: e,
                  index: e,
                  avatar: t.avatar,
                  username: t.username,
                  title: t.title,
                  message: t.message,
                  timestamp: t.timestamp,
                  unread: t.unread
                });
              }
            },
            {
              key: 'render',
              value: function() {
                return n.a.createElement(
                  h.a,
                  {
                    className: 'slds-popover_large slds-nubbin_top-right',
                    bodyClassName: 'slds-p-around_none',
                    headerTitle: 'Notifications',
                    closeButton: !0,
                    style: {
                      position: 'absolute',
                      top: 'calc(100% + 12px)',
                      right: '-12px'
                    }
                  },
                  n.a.createElement(
                    'ul',
                    null,
                    Object.keys(y).map(this.renderNotificationItems)
                  )
                );
              }
            }
          ]) && v(o.prototype, a),
          i && v(o, i),
          r
        );
      })(a.Component),
      S = o(72);
    function T(e) {
      return (T =
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
    function C(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function P(e, t) {
      for (var o = 0; o < t.length; o++) {
        var a = t[o];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          'value' in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    function k(e, t) {
      return (k =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function I(e, t) {
      return !t || ('object' !== T(t) && 'function' != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function F() {
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
    function R(e) {
      return (R = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var D = (function(e) {
        !(function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && k(e, t);
        })(r, e);
        var t,
          o,
          a,
          i,
          s = ((t = r),
          function() {
            var e,
              o = R(t);
            if (F()) {
              var a = R(this).constructor;
              e = Reflect.construct(o, arguments, a);
            } else e = o.apply(this, arguments);
            return I(this, e);
          });
        function r() {
          return C(this, r), s.apply(this, arguments);
        }
        return (
          (o = r),
          (a = [
            {
              key: 'render',
              value: function() {
                return n.a.createElement(
                  h.a,
                  {
                    className: 'slds-nubbin_top slds-dynamic-menu',
                    bodyClassName: 'slds-p-horizontal_none',
                    title: 'My Favorites',
                    footer: n.a.createElement(S.a, null),
                    style: { position: 'absolute', left: '-8rem', top: '36px' }
                  },
                  n.a.createElement(S.b, {
                    length: this.props.numberOfFavorites
                  })
                );
              }
            }
          ]) && P(o.prototype, a),
          i && P(o, i),
          r
        );
      })(a.Component),
      A = o(9),
      M = o(32);
    function L(e) {
      return (L =
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
    function q(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function H(e, t) {
      for (var o = 0; o < t.length; o++) {
        var a = t[o];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          'value' in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    function G(e, t) {
      return (G =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function V(e, t) {
      return !t || ('object' !== L(t) && 'function' != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function B() {
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
    function W(e) {
      return (W = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var U = (function(e) {
      !(function(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          t && G(e, t);
      })(r, e);
      var t,
        o,
        a,
        i,
        s = ((t = r),
        function() {
          var e,
            o = W(t);
          if (B()) {
            var a = W(this).constructor;
            e = Reflect.construct(o, arguments, a);
          } else e = o.apply(this, arguments);
          return V(this, e);
        });
      function r() {
        return q(this, r), s.apply(this, arguments);
      }
      return (
        (o = r),
        (a = [
          {
            key: 'render',
            value: function() {
              return n.a.createElement(
                A.f,
                {
                  className: 'slds-dropdown_right slds-nubbin_top-right',
                  style: { right: '-1rem' }
                },
                n.a.createElement(
                  A.h,
                  null,
                  n.a.createElement(
                    A.g,
                    {
                      iconLeft: n.a.createElement(M.a, {
                        containerClassName: 'slds-m-right_x-small',
                        className: 'slds-icon_small',
                        symbol: 'event'
                      }),
                      tabIndex: '0'
                    },
                    'New Event'
                  ),
                  n.a.createElement(
                    A.g,
                    {
                      iconLeft: n.a.createElement(M.a, {
                        containerClassName: 'slds-m-right_x-small',
                        className: 'slds-icon_small',
                        symbol: 'note'
                      }),
                      tabIndex: '0'
                    },
                    'New Note'
                  ),
                  n.a.createElement(
                    A.g,
                    {
                      iconLeft: n.a.createElement(M.a, {
                        containerClassName: 'slds-m-right_x-small',
                        className: 'slds-icon_small',
                        symbol: 'email'
                      }),
                      tabIndex: '0'
                    },
                    'New Email'
                  )
                )
              );
            }
          }
        ]) && H(o.prototype, a),
        i && H(o, i),
        r
      );
    })(a.Component);
    function J(e) {
      return (J =
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
    function z(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function Y(e, t) {
      for (var o = 0; o < t.length; o++) {
        var a = t[o];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          'value' in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    function K(e, t) {
      return (K =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function Q(e, t) {
      return !t || ('object' !== J(t) && 'function' != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function $() {
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
    function X(e) {
      return (X = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var Z = function(e) {
      return n.a.createElement(
        'div',
        {
          className:
            'slds-global-actions__favorites slds-dropdown-trigger slds-dropdown-trigger_click'
        },
        n.a.createElement(
          'div',
          { className: 'slds-button-group' },
          n.a.createElement(f.b, {
            className: d()(
              'slds-global-actions__favorites-action slds-button_icon slds-button_icon-border slds-button_icon-small',
              {
                'slds-is-disabled': e.favoritesDisabled,
                'slds-is-selected': e.favoritesClicked
              }
            ),
            disabled: e.favoritesDisabled,
            'aria-pressed': e.favoritesClicked ? 'true' : 'false',
            symbol: 'favorite',
            title: 'Toggle Favorites',
            assistiveText: 'Toggle Favorite',
            onClick: function() {
              return e.toggleFavorite();
            }
          }),
          n.a.createElement(f.b, {
            className: d()(
              'slds-global-actions__favorites-more slds-button_icon slds-button_icon-border slds-button_icon-small'
            ),
            iconClassName: 'slds-button__icon_small',
            symbol: 'down',
            title: 'View Favorites',
            assistiveText: 'View Favorites'
          })
        ),
        e.showFavoritesPopup && n.a.createElement(D, { numberOfFavorites: '2' })
      );
    };
    Z.propTypes = {
      favoritesDisabled: b.a.bool,
      favoritesClicked: b.a.bool,
      showFavoritesPopup: b.a.bool
    };
    var ee = function(e) {
      return n.a.createElement(
        'div',
        {
          className: d()(
            'slds-dropdown-trigger slds-dropdown-trigger_click',
            e.showTaskMenu && 'slds-is-open'
          )
        },
        n.a.createElement(f.b, {
          className:
            'slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__task slds-global-actions__item-action',
          'aria-haspopup': 'true',
          symbol: 'add',
          title: 'Global Actions',
          assistiveText: 'Global Actions'
        }),
        e.showTaskMenu && n.a.createElement(U, null)
      );
    };
    ee.propTypes = { showTaskMenu: b.a.bool };
    var te = function() {
        return n.a.createElement(
          'div',
          { className: 'slds-dropdown-trigger slds-dropdown-trigger_click' },
          n.a.createElement(f.b, {
            className:
              'slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__help slds-global-actions__item-action',
            iconClassName: 'slds-global-header__icon',
            'aria-haspopup': 'true',
            symbol: 'question',
            title: 'Help and Training',
            assistiveText: 'Help and Training'
          })
        );
      },
      oe = function() {
        return n.a.createElement(
          'div',
          { className: 'slds-dropdown-trigger slds-dropdown-trigger_click' },
          n.a.createElement(f.b, {
            className:
              'slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__setup slds-global-actions__item-action',
            iconClassName: 'slds-global-header__icon',
            'aria-haspopup': 'true',
            symbol: 'setup',
            title: 'Setup',
            assistiveText: 'Setup'
          })
        );
      },
      ae = function(e) {
        var t = e.notificationCount
          ? ''.concat(e.notificationCount, ' new notifications')
          : 'no new notifications';
        return n.a.createElement(
          'div',
          {
            className: d()(
              'slds-dropdown-trigger slds-dropdown-trigger_click',
              e.showNotificationPopup && 'slds-is-open'
            )
          },
          n.a.createElement(f.b, {
            className: d()(
              'slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action',
              {
                'slds-incoming-notification':
                  e.showNotification && e.notificationCount
              }
            ),
            iconClassName: 'slds-global-header__icon',
            symbol: 'notification',
            title: t,
            assistiveText: t,
            'aria-live': 'assertive',
            'aria-atomic': 'true'
          }),
          n.a.createElement(
            'span',
            {
              'aria-hidden': 'true',
              className: d()(
                'slds-notification-badge',
                e.notificationCount && 'slds-incoming-notification',
                e.showNotification && 'slds-show-notification'
              )
            },
            e.notificationCount
          ),
          e.showNotificationPopup && n.a.createElement(N, null)
        );
      };
    ae.propTypes = {
      notificationCount: b.a.oneOfType([b.a.string, b.a.number]),
      showNotificationPopup: b.a.bool
    };
    var ne = function() {
        return n.a.createElement(
          'div',
          { className: 'slds-dropdown-trigger slds-dropdown-trigger_click' },
          n.a.createElement(
            'button',
            {
              className:
                'slds-button slds-global-actions__avatar slds-global-actions__item-action',
              title: 'person name',
              'aria-haspopup': 'true'
            },
            n.a.createElement(
              'span',
              {
                className: 'slds-avatar slds-avatar_circle slds-avatar_medium'
              },
              n.a.createElement('img', {
                alt: 'Person name',
                src: '/assets/images/avatar2.jpg',
                title: 'User avatar'
              })
            )
          )
        );
      },
      ie = (function(e) {
        !(function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && K(e, t);
        })(r, e);
        var t,
          o,
          a,
          i,
          s = ((t = r),
          function() {
            var e,
              o = X(t);
            if ($()) {
              var a = X(this).constructor;
              e = Reflect.construct(o, arguments, a);
            } else e = o.apply(this, arguments);
            return Q(this, e);
          });
        function r() {
          return z(this, r), s.apply(this, arguments);
        }
        return (
          (o = r),
          (a = [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.toggleFavorite,
                  o = e.favoritesClicked,
                  a = e.favoritesDisabled,
                  i = e.showFavoritesPopup,
                  s = e.showNotification,
                  r = e.notificationCount,
                  l = e.showNotificationPopup,
                  c = e.showTaskMenu;
                return n.a.createElement(
                  'ul',
                  { className: 'slds-global-actions' },
                  n.a.createElement(
                    'li',
                    { className: 'slds-global-actions__item' },
                    n.a.createElement(Z, {
                      toggleFavorite: t,
                      favoritesClicked: o,
                      favoritesDisabled: a,
                      showFavoritesPopup: i
                    })
                  ),
                  n.a.createElement(
                    'li',
                    { className: 'slds-global-actions__item' },
                    n.a.createElement(ee, { showTaskMenu: c })
                  ),
                  n.a.createElement(
                    'li',
                    { className: 'slds-global-actions__item' },
                    n.a.createElement(te, null)
                  ),
                  n.a.createElement(
                    'li',
                    { className: 'slds-global-actions__item' },
                    n.a.createElement(oe, null)
                  ),
                  n.a.createElement(
                    'li',
                    { className: 'slds-global-actions__item' },
                    n.a.createElement(ae, {
                      showNotification: s,
                      notificationCount: r,
                      showNotificationPopup: l
                    })
                  ),
                  n.a.createElement(
                    'li',
                    { className: 'slds-global-actions__item' },
                    n.a.createElement(ne, null)
                  )
                );
              }
            }
          ]) && Y(o.prototype, a),
          i && Y(o, i),
          r
        );
      })(n.a.Component);
    ie.propTypes = {
      favoritesClicked: b.a.bool,
      favoritesDisabled: b.a.bool,
      showFavoritesPopup: b.a.bool,
      showNotification: b.a.bool,
      notificationCount: b.a.oneOfType([b.a.string, b.a.number]),
      showNotificationPopup: b.a.bool,
      showTaskMenu: b.a.bool
    };
    var se = ie;
    function re(e) {
      return (re =
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
    function le(e, t) {
      for (var o = 0; o < t.length; o++) {
        var a = t[o];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          'value' in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    function ce(e, t) {
      return (ce =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function ue(e, t) {
      return !t || ('object' !== re(t) && 'function' != typeof t) ? de(e) : t;
    }
    function de(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function me() {
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
    function be(e) {
      return (be = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var fe = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            'a',
            {
              href: 'javascript:void(0);',
              className: 'slds-assistive-text slds-assistive-text_focus'
            },
            'Skip to Navigation'
          ),
          n.a.createElement(
            'a',
            {
              href: 'javascript:void(0);',
              className: 'slds-assistive-text slds-assistive-text_focus'
            },
            'Skip to Main Content'
          )
        );
      },
      pe = function() {
        return n.a.createElement('div', {
          className: 'slds-global-header__logo'
        });
      },
      he = (function(e) {
        !(function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && ce(e, t);
        })(r, e);
        var t,
          o,
          a,
          i,
          s = ((t = r),
          function() {
            var e,
              o = be(t);
            if (me()) {
              var a = be(this).constructor;
              e = Reflect.construct(o, arguments, a);
            } else e = o.apply(this, arguments);
            return ue(this, e);
          });
        function r() {
          var e;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, r),
            ((e = s.call(this)).toggleFavorite = e.toggleFavorite.bind(de(e))),
            (e.showNotification = e.showNotification.bind(de(e))),
            (e.showIncomingNotification = e.showIncomingNotification.bind(
              de(e)
            )),
            (e.state = {
              favoritesClicked: !1,
              showNotification: !1,
              notificationCount: 0
            }),
            e
          );
        }
        return (
          (o = r),
          (a = [
            {
              key: 'toggleFavorite',
              value: function() {
                this.setState({
                  favoritesClicked: !this.state.favoritesClicked
                });
              }
            },
            {
              key: 'showNotification',
              value: function() {
                this.setState({
                  showNotification: !this.state.showNotification,
                  notificationCount: 1
                });
              }
            },
            {
              key: 'showIncomingNotification',
              value: function() {
                this.setState({
                  notificationCount: ++this.state.notificationCount
                });
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this;
                return n.a.createElement(
                  'header',
                  {
                    className: d()(
                      'slds-global-header_container',
                      this.props.className
                    )
                  },
                  n.a.createElement(fe, null),
                  n.a.createElement(
                    'div',
                    {
                      className:
                        'slds-global-header slds-grid slds-grid_align-spread'
                    },
                    n.a.createElement(
                      'div',
                      { className: 'slds-global-header__item' },
                      n.a.createElement(pe, null)
                    ),
                    !this.props.playground &&
                      n.a.createElement(
                        'div',
                        {
                          className:
                            'slds-global-header__item slds-global-header__item_search'
                        },
                        this.props.globalSearch
                      ),
                    n.a.createElement(
                      'div',
                      { className: 'slds-global-header__item' },
                      n.a.createElement(se, {
                        toggleFavorite: this.toggleFavorite,
                        favoritesClicked: this.state.favoritesClicked,
                        favoritesDisabled: this.props.favoritesDisabled,
                        showFavoritesPopup: this.props.showFavoritesPopup,
                        showNotification: this.state.showNotification,
                        notificationCount: this.state.notificationCount,
                        showNotificationPopup: this.props.showNotificationPopup,
                        showTaskMenu: this.props.showTaskMenu
                      })
                    )
                  ),
                  this.props.playground &&
                    n.a.createElement(
                      'div',
                      { className: 'slds-button-group slds-m-around_medium' },
                      n.a.createElement(
                        'button',
                        {
                          className: 'slds-button slds-button_neutral',
                          onClick: function() {
                            return e.showNotification();
                          }
                        },
                        'Toggle Notification'
                      ),
                      n.a.createElement(
                        'button',
                        {
                          className: 'slds-button slds-button_neutral',
                          onClick: function() {
                            return e.showIncomingNotification();
                          }
                        },
                        'Increase count'
                      )
                    )
                );
              }
            }
          ]) && le(o.prototype, a),
          i && le(o, i),
          r
        );
      })(a.Component),
      ye = o(24),
      ge = o(49),
      ve = o(25),
      _e = o(12),
      Ee = {
        option0: { name: 'Recent Items', label: !0 },
        option1: {
          name: 'Salesforce - 1,000 Licenses',
          entityMeta: !0,
          entityType: 'Opportunity',
          entityField: 'Propecting'
        },
        option2: {
          name: 'Art Vandelay',
          entityMeta: !0,
          entityType: 'Contact',
          entityField: 'avandelay@vandelay.com'
        },
        option3: {
          name: 'Vandelay Industries',
          entityMeta: !0,
          entityType: 'Account',
          entityField: 'San Francisco'
        },
        option4: {
          name: 'Salesforce UK 2016 Events',
          entityMeta: !0,
          entityType: 'Event',
          entityField: '$20,000'
        },
        option5: {
          name: 'H.E. Pennypacker',
          entityMeta: !0,
          entityType: 'Lead',
          entityField: 'Nursing'
        }
      },
      we = {
        option1: {
          term: 'Salesforce',
          beforeTerm: '',
          afterTerm: '.com',
          entityMeta: !0,
          entityType: 'Account',
          entityLocation: 'San Francisco, CA'
        },
        option2: {
          term: 'Salesforce',
          beforeTerm: '',
          afterTerm: '.org',
          entityMeta: !0,
          entityType: 'Account',
          entityLocation: 'New York, NY'
        },
        option3: {
          term: 'Salesforce',
          beforeTerm: '',
          afterTerm: 'HQ',
          entityMeta: !0,
          entityType: 'Account',
          entityLocation: 'San Francisco, CA'
        }
      },
      Oe = o(2),
      je = i.c.a,
      xe = i.c.code,
      Ne = i.c.h2,
      Se = i.c.h3,
      Te = i.c.h4,
      Ce = i.c.p,
      Pe = function() {
        return Object(a.createElement)(
          i.b,
          {},
          Object(a.createElement)(
            'div',
            { className: 'lead doc' },
            'The global header is the anchor for the Salesforce platform and spans all other parts of the UI. The functionality in the header is applicable across all contexts in the Salesforce ecosystem (internal or 3rd party).'
          ),
          Object(a.createElement)(
            s.a,
            {
              exampleOnly: !0,
              demoStyles: 'position: relative; height: 20.25rem;'
            },
            Object(a.createElement)(he, {
              globalSearch: Object(a.createElement)(ye.a, {
                id: Oe.c.uniqueId('combobox-id-'),
                'aria-controls': 'search-listbox-id-1',
                comboboxID: 'primary-search-combobox-id-1',
                autocomplete: !0,
                inputContainerClassName: 'slds-global-search__form-element',
                label: 'Search Salesforce',
                hideLabel: !0,
                placeholder: 'Search Salesforce',
                results: Object(a.createElement)(ve.e, {
                  id: 'search-listbox-id-1',
                  'aria-label': 'Recent Items',
                  snapshot: Ee,
                  type: 'entity',
                  count: 6
                }),
                resultsType: 'listbox',
                addon: Object(a.createElement)(ge.b, {
                  id: Oe.c.uniqueId('objectswitcher-combobox-id-'),
                  value: 'Accounts',
                  addonPosition: 'start',
                  hasInteractions: !0,
                  comboboxAriaControls: 'primary-search-combobox-id-1',
                  listboxId: Oe.c.uniqueId('objectswitcher-listbox-id-')
                }),
                addonPosition: 'start',
                comboboxPosition: 'end',
                inputIconPosition: 'left',
                leftInputIcon: Object(a.createElement)(_e.a, {
                  symbol: 'search',
                  className:
                    'slds-icon slds-icon_xx-small slds-icon-text-default',
                  containerClassName: 'slds-input__icon slds-input__icon_left',
                  title: !1,
                  assistiveText: !1
                }),
                hasInteractions: !0
              })
            })
          ),
          Ne({ id: 'About-Global-Header' }, 'About Global Header'),
          Se({ id: 'Structure' }, 'Structure'),
          Ce(
            {},
            'The global header is made up of 3 distinct sections, the logo, the global search, and the global actions. Each section is wrapped in a ',
            xe({}, '<div>'),
            ' with the class name ',
            xe({}, 'slds-global-header__item'),
            '. The search region gets the modifier class ',
            xe({}, 'slds-global-header__item_search'),
            '. This class provides particular styling to handle the search box.'
          ),
          Object(a.createElement)(
            l.a,
            { title: 'global header layout' },
            Object(a.createElement)(
              r.a,
              { toggleCode: !1 },
              Object(a.createElement)(
                'header',
                { className: 'slds-global-header_container' },
                Object(a.createElement)(
                  'div',
                  { className: 'slds-global-header' },
                  Object(a.createElement)(
                    'div',
                    { className: 'slds-global-header__item' },
                    '...'
                  ),
                  Object(a.createElement)(
                    'div',
                    {
                      className:
                        'slds-global-header__item slds-global-header__item_search'
                    },
                    '...'
                  ),
                  Object(a.createElement)(
                    'div',
                    { className: 'slds-global-header__item' },
                    '...'
                  )
                )
              )
            )
          ),
          Ce(
            {},
            'In most scenarios, you will want to fix the global header to the top of the viewport. To achieve this, wrap the global header component in a ',
            xe({}, '<div>'),
            ' with the class name ',
            xe({}, 'slds-global-header_container'),
            '.'
          ),
          Object(a.createElement)(
            l.a,
            { title: 'global header container' },
            Object(a.createElement)(
              r.a,
              { toggleCode: !1 },
              Object(a.createElement)(
                'header',
                { className: 'slds-global-header_container' },
                Object(a.createElement)(
                  'div',
                  { className: 'slds-global-header' },
                  '...'
                )
              )
            )
          ),
          Se({ id: 'Accessibility' }, 'Accessibility'),
          Ce(
            {},
            'For screen reading users, we need to provide a way to navigate over the global header and directly to content regions. For this scenario, we need to provide two links above the global header that provides navigation to landmarks within the app. These links are visually hidden by default but become visible when focused.'
          ),
          Object(a.createElement)(
            l.a,
            { title: 'global header jump links' },
            Object(a.createElement)(
              r.a,
              { toggleCode: !1 },
              Object(a.createElement)(
                'header',
                { className: 'slds-global-header_container' },
                Object(a.createElement)(
                  'a',
                  {
                    href: 'javascript:void(0);',
                    className: 'slds-assistive-text slds-assistive-text_focus'
                  },
                  'Skip to Navigation'
                ),
                Object(a.createElement)(
                  'a',
                  {
                    href: 'javascript:void(0);',
                    className: 'slds-assistive-text slds-assistive-text_focus'
                  },
                  'Skip to Main Content'
                ),
                Object(a.createElement)(
                  'div',
                  { className: 'slds-global-header' },
                  '...'
                )
              )
            )
          ),
          Ne({ id: 'Base' }, 'Base'),
          Object(a.createElement)(
            l.a,
            { title: 'base global header' },
            Object(a.createElement)(
              s.a,
              { demoStyles: 'position: relative; height: 21.25rem;' },
              Object(a.createElement)(he, {
                globalSearch: Object(a.createElement)(ye.a, {
                  id: Oe.c.uniqueId('combobox-id-'),
                  'aria-controls': 'search-listbox-id-1',
                  comboboxID: 'primary-search-combobox-id-1',
                  autocomplete: !0,
                  inputContainerClassName: 'slds-global-search__form-element',
                  label: 'Search Salesforce',
                  hideLabel: !0,
                  placeholder: 'Search Salesforce',
                  results: Object(a.createElement)(ve.e, {
                    id: 'search-listbox-id-1',
                    'aria-label': 'Recent Items',
                    snapshot: Ee,
                    type: 'entity',
                    count: 6
                  }),
                  resultsType: 'listbox',
                  addon: Object(a.createElement)(ge.b, {
                    id: Oe.c.uniqueId('objectswitcher-combobox-id-'),
                    value: 'Accounts',
                    addonPosition: 'start',
                    hasInteractions: !0,
                    comboboxAriaControls: 'primary-search-combobox-id-1',
                    listboxId: Oe.c.uniqueId('objectswitcher-listbox-id-')
                  }),
                  addonPosition: 'start',
                  comboboxPosition: 'end',
                  inputIconPosition: 'left',
                  leftInputIcon: Object(a.createElement)(_e.a, {
                    symbol: 'search',
                    className:
                      'slds-icon slds-icon_xx-small slds-icon-text-default',
                    containerClassName:
                      'slds-input__icon slds-input__icon_left',
                    title: !1,
                    assistiveText: !1
                  }),
                  hasInteractions: !0
                })
              })
            )
          ),
          Ne({ id: 'Logo' }, 'Logo'),
          Ce(
            {},
            'The logo region is simply a ',
            xe({}, '<div>'),
            ' with the class name ',
            xe({}, 'slds-global-header__logo'),
            '. The logo is applied as a background image with CSS. This allows us to constrain the dimensions of the logo by a max-height of 40px and a max-width of 200px.'
          ),
          Object(a.createElement)(
            s.a,
            { toggleCode: !1 },
            Object(a.createElement)(
              'div',
              { className: 'slds-global-header__item' },
              Object(a.createElement)(pe, null)
            )
          ),
          Ne({ id: 'Global-Search' }, 'Global Search'),
          Ce(
            {},
            'The global search component is used for application wide search. The form element is implemented as a ',
            je({ href: '/components/combobox' }, 'Combobox'),
            ', please refer to the accessibility guidelines on the Combobox component page for implementation guidance.'
          ),
          Se({ id: 'Default' }, 'Default'),
          Object(a.createElement)(
            l.a,
            { title: 'Global Header Search Default State' },
            Object(a.createElement)(
              s.a,
              { demoStyles: 'position: relative; height: 3.5rem;' },
              Object(a.createElement)(he, {
                globalSearch: Object(a.createElement)(ye.a, {
                  id: Oe.c.uniqueId('combobox-id-'),
                  'aria-controls': 'search-listbox-id-2',
                  comboboxID: 'primary-search-combobox-id-2',
                  autocomplete: !0,
                  inputContainerClassName: 'slds-global-search__form-element',
                  label: 'Search Salesforce',
                  hideLabel: !0,
                  placeholder: 'Search Salesforce',
                  results: Object(a.createElement)(ve.e, {
                    id: 'search-listbox-id-2',
                    'aria-label': 'Recent Items',
                    snapshot: Ee,
                    type: 'entity',
                    count: 6
                  }),
                  resultsType: 'listbox',
                  addon: Object(a.createElement)(ge.b, {
                    id: Oe.c.uniqueId('objectswitcher-combobox-id-'),
                    value: 'Accounts',
                    addonPosition: 'start',
                    comboboxAriaControls: 'primary-search-combobox-id-2',
                    listboxId: Oe.c.uniqueId('objectswitcher-listbox-id-')
                  }),
                  addonPosition: 'start',
                  comboboxPosition: 'end',
                  inputIconPosition: 'left',
                  leftInputIcon: Object(a.createElement)(_e.a, {
                    symbol: 'search',
                    className:
                      'slds-icon slds-icon_xx-small slds-icon-text-default',
                    containerClassName:
                      'slds-input__icon slds-input__icon_left',
                    title: !1,
                    assistiveText: !1
                  })
                })
              })
            )
          ),
          Se({ id: 'Focused-and-expanded' }, 'Focused and expanded'),
          Object(a.createElement)(
            l.a,
            { title: 'Global Header Search Expanded State' },
            Object(a.createElement)(
              s.a,
              { demoStyles: 'position: relative; height: 21rem;' },
              Object(a.createElement)(he, {
                globalSearch: Object(a.createElement)(ye.a, {
                  id: Oe.c.uniqueId('combobox-id-'),
                  'aria-controls': 'search-listbox-id-3',
                  comboboxID: 'primary-search-combobox-id-3',
                  autocomplete: !0,
                  inputContainerClassName: 'slds-global-search__form-element',
                  label: 'Search Salesforce',
                  hideLabel: !0,
                  placeholder: 'Search Salesforce',
                  results: Object(a.createElement)(ve.e, {
                    id: 'search-listbox-id-3',
                    'aria-label': 'Recent Items',
                    snapshot: Ee,
                    type: 'entity',
                    count: 6
                  }),
                  resultsType: 'listbox',
                  addon: Object(a.createElement)(ge.b, {
                    id: Oe.c.uniqueId('objectswitcher-combobox-id-'),
                    value: 'Accounts',
                    addonPosition: 'start',
                    comboboxAriaControls: 'primary-search-combobox-id-3',
                    listboxId: Oe.c.uniqueId('objectswitcher-listbox-id-')
                  }),
                  addonPosition: 'start',
                  comboboxPosition: 'end',
                  inputIconPosition: 'left',
                  leftInputIcon: Object(a.createElement)(_e.a, {
                    symbol: 'search',
                    className:
                      'slds-icon slds-icon_xx-small slds-icon-text-default',
                    containerClassName:
                      'slds-input__icon slds-input__icon_left',
                    title: !1,
                    assistiveText: !1
                  }),
                  hasFocus: !0,
                  isOpen: !0
                })
              })
            )
          ),
          Se({ id: 'Active-and-typing' }, 'Active and typing'),
          Object(a.createElement)(
            l.a,
            { title: 'Global Header Search Active State' },
            Object(a.createElement)(
              s.a,
              { demoStyles: 'position: relative; height: 21rem;' },
              Object(a.createElement)(he, {
                globalSearch: Object(a.createElement)(ye.a, {
                  id: Oe.c.uniqueId('combobox-id-'),
                  'aria-controls': 'search-listbox-id-4',
                  comboboxID: 'primary-search-combobox-id-4',
                  autocomplete: !0,
                  inputContainerClassName: 'slds-global-search__form-element',
                  label: 'Search Salesforce',
                  hideLabel: !0,
                  placeholder: 'Search Salesforce',
                  value: 'salesforce',
                  results: Object(a.createElement)(ve.e, {
                    id: 'search-listbox-id-4',
                    term: 'salesforce',
                    snapshot: we,
                    type: 'entity',
                    count: 6
                  }),
                  resultsType: 'listbox',
                  'aria-activedescendant': 'option0',
                  addon: Object(a.createElement)(ge.b, {
                    id: Oe.c.uniqueId('objectswitcher-combobox-id-'),
                    value: 'Accounts',
                    addonPosition: 'start',
                    comboboxAriaControls: 'primary-search-combobox-id-4',
                    listboxId: Oe.c.uniqueId('objectswitcher-listbox-id-')
                  }),
                  addonPosition: 'start',
                  comboboxPosition: 'end',
                  inputIconPosition: 'left',
                  leftInputIcon: Object(a.createElement)(_e.a, {
                    symbol: 'search',
                    className:
                      'slds-icon slds-icon_xx-small slds-icon-text-default',
                    containerClassName:
                      'slds-input__icon slds-input__icon_left',
                    title: !1,
                    assistiveText: !1
                  }),
                  hasFocus: !0,
                  isOpen: !0
                })
              })
            )
          ),
          Ne({ id: 'Global-Actions-Bar' }, 'Global Actions Bar'),
          Ce(
            {},
            'The global actions bar holds application wide task actions that will persist with the user through their experience.'
          ),
          Ce(
            {},
            'The global actions bar is located in the right region of the global header.'
          ),
          Object(a.createElement)(
            'div',
            { className: 'docs-codeblock-example' },
            Object(a.createElement)(
              'div',
              { style: { position: 'relative', height: '3.125rem' } },
              Object(a.createElement)(he, null)
            )
          ),
          Se({ id: 'Favorites' }, 'Favorites'),
          Ce(
            {},
            'The favorites action is used to "favorite" a commonly used page within a user\'s experience. When a user "favorites" a page by pressing the favorites action, the button icon changes color with a small animation to confirm your selection.'
          ),
          Te({ id: 'Not-pressed' }, 'Not pressed'),
          Object(a.createElement)(
            s.a,
            null,
            Object(a.createElement)(
              'li',
              { className: 'slds-global-actions__item' },
              Object(a.createElement)(Z, null)
            )
          ),
          Te({ id: 'Pressed' }, 'Pressed'),
          Ce(
            {},
            'When pressed, apply the class ',
            xe({}, 'slds-is-selected'),
            ' to the ',
            xe({}, 'slds-global-actions__favorites-action'),
            ' button element.'
          ),
          Object(a.createElement)(
            c.a,
            { type: 'a11y', header: 'Accessibility Requirement' },
            Object(a.createElement)(
              'p',
              null,
              'When the favorites action is pressed, we need to toggle the',
              ' ',
              Object(a.createElement)('code', null, 'aria-pressed'),
              ' attribute to',
              ' ',
              Object(a.createElement)('code', null, 'true'),
              '. This will inform a screen reader that the button has been pressed.'
            )
          ),
          Object(a.createElement)(
            s.a,
            null,
            Object(a.createElement)(
              'li',
              { className: 'slds-global-actions__item' },
              Object(a.createElement)(Z, { favoritesClicked: !0 })
            )
          ),
          Te({ id: 'Disabled' }, 'Disabled'),
          Ce(
            {},
            'If the favorites action needs to become disabled, apply the ',
            xe({}, 'disabled'),
            ' attribute and the class ',
            xe({}, 'slds-is-disabled'),
            ' to the button with ',
            xe({}, 'class="slds-global-actions_favorites-action"'),
            '.'
          ),
          Object(a.createElement)(
            s.a,
            null,
            Object(a.createElement)(
              'li',
              { className: 'slds-global-actions__item' },
              Object(a.createElement)(Z, { favoritesDisabled: !0 })
            )
          ),
          Te({ id: 'Favorites-popover' }, 'Favorites popover'),
          Ce(
            {},
            'The favorites popover is invoked when a user clicks on the dropdown arrow action icon inside of the favorites button group. The favorites popover is implemented as a ',
            je(
              { href: '/components/dynamic-menu/' },
              'Popover - Dynamic Menu Variant'
            ),
            ' component, please refer to the accessibility guidelines on the Popover component page for implementation guidance.'
          ),
          Object(a.createElement)(
            s.a,
            {
              demoStyles:
                ' display: flex; justify-content: flex-end; align-items: flex-start; height: 16rem; min-width: 400px; '
            },
            Object(a.createElement)(se, { showFavoritesPopup: !0 })
          ),
          Se({ id: 'Task' }, 'Task'),
          Object(a.createElement)(
            s.a,
            null,
            Object(a.createElement)(
              'li',
              { className: 'slds-global-actions__item' },
              Object(a.createElement)(ee, null)
            )
          ),
          Te({ id: 'Task-menu' }, 'Task menu'),
          Ce(
            {},
            'When the global task action is invoked, a menu inside of a dropdown becomes visible. Please refer to the accessibility section of the ',
            je({ href: '/components/menus' }, 'Menus component'),
            ' for implementation guidelines.'
          ),
          Object(a.createElement)(
            s.a,
            {
              demoStyles:
                ' display: flex; justify-content: flex-end; align-items: flex-start; height: 16rem; min-width: 400px; '
            },
            Object(a.createElement)(se, { showTaskMenu: !0 })
          ),
          Se({ id: 'Help' }, 'Help'),
          Object(a.createElement)(
            s.a,
            null,
            Object(a.createElement)(
              'li',
              { className: 'slds-global-actions__item' },
              Object(a.createElement)(te, null)
            )
          ),
          Se({ id: 'Setup' }, 'Setup'),
          Object(a.createElement)(
            s.a,
            null,
            Object(a.createElement)(
              'li',
              { className: 'slds-global-actions__item' },
              Object(a.createElement)(oe, null)
            )
          ),
          Se({ id: 'Notifications' }, 'Notifications'),
          Ce(
            {},
            'Notifications are a way to notify a user about a global change within the application. This is commonly used to communicate a Chatter mention/reply or a status update on an opportunity pipeline.'
          ),
          Object(a.createElement)(
            s.a,
            {
              isViewport: !0,
              exampleOnly: !0,
              demoStyles: 'position: relative; height: 7.5rem;'
            },
            Object(a.createElement)(he, { playground: !0 })
          ),
          Te({ id: 'No-notifications' }, 'No notifications'),
          Object(a.createElement)(
            s.a,
            null,
            Object(a.createElement)(
              'li',
              { className: 'slds-global-actions__item' },
              Object(a.createElement)(ae, null)
            )
          ),
          Te({ id: 'New-notifications' }, 'New notifications'),
          Ce(
            {},
            'When a notification is coming through, we want to apply the ',
            xe({}, 'slds-incoming-notification'),
            ' class to both the ',
            xe({}, 'slds-global-actions__notifications'),
            ' button, as well as the ',
            xe({}, 'slds-notification-badge'),
            '. This will initiate the animation that there is a new incoming notification. A notification badge will also need to receive the ',
            xe({}, 'slds-show-notification'),
            ' class, this ensures the badge becomes visible for the incoming animation to work. The ',
            xe({}, 'slds-show-notification'),
            ' class should also be applied if a user has unread notifications upon their return to their application.'
          ),
          Object(a.createElement)(
            c.a,
            { type: 'a11y', header: 'Accessibility Note' },
            Object(a.createElement)(
              'p',
              null,
              'The notification badge is hidden from screen readers by add the attribute',
              ' ',
              Object(a.createElement)('code', null, 'aria-hidden="true"'),
              ' so the badge doesn\'t have to be inside the button itself. Since the badge count is hidden, we need to add the count number to the button text via some hidden assistive text. The assistive text string should be updated with number of new notifications, such as "3 new notification". If there are no notifications, the assistive text should read "No notifications". The button element also requires',
              ' ',
              Object(a.createElement)('code', null, 'aria-live="assertive"'),
              ' to announce any count updates.'
            )
          ),
          Object(a.createElement)(
            s.a,
            null,
            Object(a.createElement)(
              'li',
              { className: 'slds-global-actions__item' },
              Object(a.createElement)(ae, {
                showNotification: !0,
                notificationCount: '1'
              })
            )
          ),
          Te({ id: 'Notification-Popover' }, 'Notification Popover'),
          Ce(
            {},
            'The notification popover is invoked when a user clicks on the notification action icon. The notification popover is implemented as a ',
            je({ href: '/components/popovers' }, 'Popover component'),
            ', please refer to the accessibility guidelines on the Popover component page for implementation guidance.'
          ),
          Object(a.createElement)(
            s.a,
            {
              exampleOnly: !0,
              demoStyles:
                ' display: flex; justify-content: flex-end; align-items: flex-start; height: 25rem; min-width: 400px; '
            },
            Object(a.createElement)(se, {
              showNotification: !0,
              notificationCount: '3',
              showNotificationPopup: !0
            })
          ),
          Object(a.createElement)(r.a, null, Object(a.createElement)(N, null)),
          Te({ id: 'Unread-notifications' }, 'Unread notifications'),
          Ce(
            {},
            'When a notification item is unread, add the class ',
            xe({}, 'slds-global-header__notification_unread'),
            ' to the ',
            xe({}, 'slds-global-header__notification'),
            ' list item. This will provide the unread styles. In addition to adding the class name, please add a dot indicator, ',
            xe(
              {},
              '<abbr class="slds-text-link slds-m-horizontal_xxx-small" title="unread">●</abbr>'
            ),
            ', to provide visual affordance that the item is unread.'
          )
        );
      },
      ke = function() {
        return Object(i.a)(Pe());
      };
  }
});
