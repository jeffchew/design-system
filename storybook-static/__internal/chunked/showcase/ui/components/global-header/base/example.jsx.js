var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/global-header/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, s, r = t[0], l = t[1], c = t[2], d = 0, f = [];
      d < r.length;
      d++
    )
      (s = r[d]),
        Object.prototype.hasOwnProperty.call(a, s) && a[s] && f.push(a[s][0]),
        (a[s] = 0);
    for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
    for (u && u(t); f.length; ) f.shift()();
    return i.push.apply(i, c || []), o();
  }
  function o() {
    for (var e, t = 0; t < i.length; t++) {
      for (var o = i[t], n = !0, r = 1; r < o.length; r++) {
        var l = o[r];
        0 !== a[l] && (n = !1);
      }
      n && (i.splice(t--, 1), (e = s((s.s = o[0]))));
    }
    return e;
  }
  var n = {},
    a = {
      90: 0,
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
    i = [];
  function s(t) {
    if (n[t]) return n[t].exports;
    var o = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(o.exports, o, o.exports, s), (o.l = !0), o.exports;
  }
  (s.m = e),
    (s.c = n),
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
        for (var n in e)
          s.d(
            o,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
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
  var r = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    l = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var c = 0; c < r.length; c++) t(r[c]);
  var u = l;
  return i.push([236, 0]), o();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  236: function(e, t, o) {
    'use strict';
    o.r(t),
      o.d(t, 'Context', function() {
        return _e;
      }),
      o.d(t, 'states', function() {
        return ve;
      });
    var n = o(0),
      a = o.n(n),
      i = o(2),
      s = o.n(i),
      r = o(1),
      l = o.n(r),
      c = o(4),
      u = o(43),
      d = o(27),
      f = {
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
    function m(e) {
      return (m =
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
      for (var o = 0; o < t.length; o++) {
        var n = t[o];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function b(e, t) {
      return (b =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function y(e, t) {
      return !t || ('object' !== m(t) && 'function' != typeof t) ? h(e) : t;
    }
    function h(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function _() {
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
    function v(e) {
      return (v = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var g = function(e) {
        return a.a.createElement(
          'li',
          {
            className: s()(
              'slds-global-header__notification',
              e.unread && 'slds-global-header__notification_unread',
              e.className
            ),
            key: e.index
          },
          a.a.createElement(
            'div',
            {
              className:
                'slds-media slds-has-flexi-truncate slds-p-around_x-small'
            },
            a.a.createElement(
              'div',
              { className: 'slds-media__figure' },
              a.a.createElement(
                u.Avatar,
                { className: 'slds-avatar_small' },
                a.a.createElement('img', {
                  alt: e.username,
                  src: e.avatar,
                  title: ''.concat(e.username, ' avatar')
                })
              )
            ),
            a.a.createElement(
              'div',
              { className: 'slds-media__body' },
              a.a.createElement(
                'div',
                { className: 'slds-grid slds-grid_align-spread' },
                a.a.createElement(
                  'a',
                  {
                    href: 'javascript:void(0);',
                    className: 'slds-text-link_reset slds-has-flexi-truncate'
                  },
                  a.a.createElement(
                    'h3',
                    {
                      className: 'slds-truncate',
                      title: ''.concat(e.username, ' ').concat(e.title)
                    },
                    a.a.createElement(
                      'strong',
                      null,
                      ''.concat(e.username, ' ').concat(e.title)
                    )
                  ),
                  a.a.createElement(
                    'p',
                    { className: 'slds-truncate', title: e.message },
                    e.message
                  ),
                  a.a.createElement(
                    'p',
                    { className: 'slds-m-top_x-small slds-text-color_weak' },
                    e.timestamp,
                    e.unread &&
                      a.a.createElement(
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
      x = (function(e) {
        !(function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && b(e, t);
        })(r, e);
        var t,
          o,
          n,
          i,
          s = ((t = r),
          function() {
            var e,
              o = v(t);
            if (_()) {
              var n = v(this).constructor;
              e = Reflect.construct(o, arguments, n);
            } else e = o.apply(this, arguments);
            return y(this, e);
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
            )).renderNotificationItems = e.renderNotificationItems.bind(h(e))),
            e
          );
        }
        return (
          (o = r),
          (n = [
            {
              key: 'renderNotificationItems',
              value: function(e) {
                var t = f[e];
                return a.a.createElement(g, {
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
                return a.a.createElement(
                  d.Popover,
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
                  a.a.createElement(
                    'ul',
                    null,
                    Object.keys(f).map(this.renderNotificationItems)
                  )
                );
              }
            }
          ]) && p(o.prototype, n),
          i && p(o, i),
          r
        );
      })(n.Component),
      w = o(85);
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
    function N(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function S(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function I(e, t) {
      return (I =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function P(e, t) {
      return !t || ('object' !== E(t) && 'function' != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function C() {
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
    function O(e) {
      return (O = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var j = (function(e) {
        !(function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && I(e, t);
        })(r, e);
        var t,
          o,
          n,
          i,
          s = ((t = r),
          function() {
            var e,
              o = O(t);
            if (C()) {
              var n = O(this).constructor;
              e = Reflect.construct(o, arguments, n);
            } else e = o.apply(this, arguments);
            return P(this, e);
          });
        function r() {
          return N(this, r), s.apply(this, arguments);
        }
        return (
          (o = r),
          (n = [
            {
              key: 'render',
              value: function() {
                return a.a.createElement(
                  d.Popover,
                  {
                    className: 'slds-nubbin_top slds-dynamic-menu',
                    bodyClassName: 'slds-p-horizontal_none',
                    title: 'My Favorites',
                    footer: a.a.createElement(w.Footer, null),
                    style: { position: 'absolute', left: '-8rem', top: '36px' }
                  },
                  a.a.createElement(w.ListboxList, {
                    length: this.props.numberOfFavorites
                  })
                );
              }
            }
          ]) && S(o.prototype, n),
          i && S(o, i),
          r
        );
      })(n.Component),
      T = o(14),
      k = o(22);
    function R(e) {
      return (R =
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
    function F(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function D(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function M(e, t) {
      return (M =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function L(e, t) {
      return !t || ('object' !== R(t) && 'function' != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function A() {
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
    function q(e) {
      return (q = Object.setPrototypeOf
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
          t && M(e, t);
      })(r, e);
      var t,
        o,
        n,
        i,
        s = ((t = r),
        function() {
          var e,
            o = q(t);
          if (A()) {
            var n = q(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return L(this, e);
        });
      function r() {
        return F(this, r), s.apply(this, arguments);
      }
      return (
        (o = r),
        (n = [
          {
            key: 'render',
            value: function() {
              return a.a.createElement(
                T.Menu,
                {
                  className: 'slds-dropdown_right slds-nubbin_top-right',
                  style: { right: '-1rem' }
                },
                a.a.createElement(
                  T.MenuList,
                  null,
                  a.a.createElement(
                    T.MenuItem,
                    {
                      iconLeft: a.a.createElement(k.StandardIcon, {
                        containerClassName: 'slds-m-right_x-small',
                        className: 'slds-icon_small',
                        symbol: 'event'
                      }),
                      tabIndex: '0'
                    },
                    'New Event'
                  ),
                  a.a.createElement(
                    T.MenuItem,
                    {
                      iconLeft: a.a.createElement(k.StandardIcon, {
                        containerClassName: 'slds-m-right_x-small',
                        className: 'slds-icon_small',
                        symbol: 'note'
                      }),
                      tabIndex: '0'
                    },
                    'New Note'
                  ),
                  a.a.createElement(
                    T.MenuItem,
                    {
                      iconLeft: a.a.createElement(k.StandardIcon, {
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
        ]) && D(o.prototype, n),
        i && D(o, i),
        r
      );
    })(n.Component);
    function H(e) {
      return (H =
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
    function V(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function G(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function J(e, t) {
      return (J =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function z(e, t) {
      return !t || ('object' !== H(t) && 'function' != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Y() {
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
    function B(e) {
      return (B = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var K = function(e) {
      return a.a.createElement(
        'div',
        {
          className:
            'slds-global-actions__favorites slds-dropdown-trigger slds-dropdown-trigger_click'
        },
        a.a.createElement(
          'div',
          { className: 'slds-button-group' },
          a.a.createElement(c.b, {
            className: s()(
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
          a.a.createElement(c.b, {
            className: s()(
              'slds-global-actions__favorites-more slds-button_icon slds-button_icon-border slds-button_icon-small'
            ),
            iconClassName: 'slds-button__icon_small',
            symbol: 'down',
            title: 'View Favorites',
            assistiveText: 'View Favorites'
          })
        ),
        e.showFavoritesPopup && a.a.createElement(j, { numberOfFavorites: '2' })
      );
    };
    K.propTypes = {
      favoritesDisabled: l.a.bool,
      favoritesClicked: l.a.bool,
      showFavoritesPopup: l.a.bool
    };
    var Q = function(e) {
      return a.a.createElement(
        'div',
        {
          className: s()(
            'slds-dropdown-trigger slds-dropdown-trigger_click',
            e.showTaskMenu && 'slds-is-open'
          )
        },
        a.a.createElement(c.b, {
          className:
            'slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__task slds-global-actions__item-action',
          'aria-haspopup': 'true',
          symbol: 'add',
          title: 'Global Actions',
          assistiveText: 'Global Actions'
        }),
        e.showTaskMenu && a.a.createElement(U, null)
      );
    };
    Q.propTypes = { showTaskMenu: l.a.bool };
    var $ = function() {
        return a.a.createElement(
          'div',
          { className: 'slds-dropdown-trigger slds-dropdown-trigger_click' },
          a.a.createElement(c.b, {
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
      W = function() {
        return a.a.createElement(
          'div',
          { className: 'slds-dropdown-trigger slds-dropdown-trigger_click' },
          a.a.createElement(c.b, {
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
      X = function(e) {
        var t = e.notificationCount
          ? ''.concat(e.notificationCount, ' new notifications')
          : 'no new notifications';
        return a.a.createElement(
          'div',
          {
            className: s()(
              'slds-dropdown-trigger slds-dropdown-trigger_click',
              e.showNotificationPopup && 'slds-is-open'
            )
          },
          a.a.createElement(c.b, {
            className: s()(
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
          a.a.createElement(
            'span',
            {
              'aria-hidden': 'true',
              className: s()(
                'slds-notification-badge',
                e.notificationCount && 'slds-incoming-notification',
                e.showNotification && 'slds-show-notification'
              )
            },
            e.notificationCount
          ),
          e.showNotificationPopup && a.a.createElement(x, null)
        );
      };
    X.propTypes = {
      notificationCount: l.a.oneOfType([l.a.string, l.a.number]),
      showNotificationPopup: l.a.bool
    };
    var Z = function() {
        return a.a.createElement(
          'div',
          { className: 'slds-dropdown-trigger slds-dropdown-trigger_click' },
          a.a.createElement(
            'button',
            {
              className:
                'slds-button slds-global-actions__avatar slds-global-actions__item-action',
              title: 'person name',
              'aria-haspopup': 'true'
            },
            a.a.createElement(
              'span',
              {
                className: 'slds-avatar slds-avatar_circle slds-avatar_medium'
              },
              a.a.createElement('img', {
                alt: 'Person name',
                src: '/assets/images/avatar2.jpg',
                title: 'User avatar'
              })
            )
          )
        );
      },
      ee = (function(e) {
        !(function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && J(e, t);
        })(r, e);
        var t,
          o,
          n,
          i,
          s = ((t = r),
          function() {
            var e,
              o = B(t);
            if (Y()) {
              var n = B(this).constructor;
              e = Reflect.construct(o, arguments, n);
            } else e = o.apply(this, arguments);
            return z(this, e);
          });
        function r() {
          return V(this, r), s.apply(this, arguments);
        }
        return (
          (o = r),
          (n = [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.toggleFavorite,
                  o = e.favoritesClicked,
                  n = e.favoritesDisabled,
                  i = e.showFavoritesPopup,
                  s = e.showNotification,
                  r = e.notificationCount,
                  l = e.showNotificationPopup,
                  c = e.showTaskMenu;
                return a.a.createElement(
                  'ul',
                  { className: 'slds-global-actions' },
                  a.a.createElement(
                    'li',
                    { className: 'slds-global-actions__item' },
                    a.a.createElement(K, {
                      toggleFavorite: t,
                      favoritesClicked: o,
                      favoritesDisabled: n,
                      showFavoritesPopup: i
                    })
                  ),
                  a.a.createElement(
                    'li',
                    { className: 'slds-global-actions__item' },
                    a.a.createElement(Q, { showTaskMenu: c })
                  ),
                  a.a.createElement(
                    'li',
                    { className: 'slds-global-actions__item' },
                    a.a.createElement($, null)
                  ),
                  a.a.createElement(
                    'li',
                    { className: 'slds-global-actions__item' },
                    a.a.createElement(W, null)
                  ),
                  a.a.createElement(
                    'li',
                    { className: 'slds-global-actions__item' },
                    a.a.createElement(X, {
                      showNotification: s,
                      notificationCount: r,
                      showNotificationPopup: l
                    })
                  ),
                  a.a.createElement(
                    'li',
                    { className: 'slds-global-actions__item' },
                    a.a.createElement(Z, null)
                  )
                );
              }
            }
          ]) && G(o.prototype, n),
          i && G(o, i),
          r
        );
      })(a.a.Component);
    ee.propTypes = {
      favoritesClicked: l.a.bool,
      favoritesDisabled: l.a.bool,
      showFavoritesPopup: l.a.bool,
      showNotification: l.a.bool,
      notificationCount: l.a.oneOfType([l.a.string, l.a.number]),
      showNotificationPopup: l.a.bool,
      showTaskMenu: l.a.bool
    };
    var te = ee;
    function oe(e) {
      return (oe =
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
    function ne(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function ae(e, t) {
      return (ae =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function ie(e, t) {
      return !t || ('object' !== oe(t) && 'function' != typeof t) ? se(e) : t;
    }
    function se(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function re() {
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
    function le(e) {
      return (le = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var ce = function() {
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'a',
            {
              href: 'javascript:void(0);',
              className: 'slds-assistive-text slds-assistive-text_focus'
            },
            'Skip to Navigation'
          ),
          a.a.createElement(
            'a',
            {
              href: 'javascript:void(0);',
              className: 'slds-assistive-text slds-assistive-text_focus'
            },
            'Skip to Main Content'
          )
        );
      },
      ue = function() {
        return a.a.createElement('div', {
          className: 'slds-global-header__logo'
        });
      },
      de = (function(e) {
        !(function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && ae(e, t);
        })(l, e);
        var t,
          o,
          n,
          i,
          r = ((t = l),
          function() {
            var e,
              o = le(t);
            if (re()) {
              var n = le(this).constructor;
              e = Reflect.construct(o, arguments, n);
            } else e = o.apply(this, arguments);
            return ie(this, e);
          });
        function l() {
          var e;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, l),
            ((e = r.call(this)).toggleFavorite = e.toggleFavorite.bind(se(e))),
            (e.showNotification = e.showNotification.bind(se(e))),
            (e.showIncomingNotification = e.showIncomingNotification.bind(
              se(e)
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
          (o = l),
          (n = [
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
                return a.a.createElement(
                  'header',
                  {
                    className: s()(
                      'slds-global-header_container',
                      this.props.className
                    )
                  },
                  a.a.createElement(ce, null),
                  a.a.createElement(
                    'div',
                    {
                      className:
                        'slds-global-header slds-grid slds-grid_align-spread'
                    },
                    a.a.createElement(
                      'div',
                      { className: 'slds-global-header__item' },
                      a.a.createElement(ue, null)
                    ),
                    !this.props.playground &&
                      a.a.createElement(
                        'div',
                        {
                          className:
                            'slds-global-header__item slds-global-header__item_search'
                        },
                        this.props.globalSearch
                      ),
                    a.a.createElement(
                      'div',
                      { className: 'slds-global-header__item' },
                      a.a.createElement(te, {
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
                    a.a.createElement(
                      'div',
                      { className: 'slds-button-group slds-m-around_medium' },
                      a.a.createElement(
                        'button',
                        {
                          className: 'slds-button slds-button_neutral',
                          onClick: function() {
                            return e.showNotification();
                          }
                        },
                        'Toggle Notification'
                      ),
                      a.a.createElement(
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
          ]) && ne(o.prototype, n),
          i && ne(o, i),
          l
        );
      })(n.Component),
      fe = o(19),
      me = o(42),
      pe = o(20),
      be = o(9),
      ye = {
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
      he = o(6),
      _e = function(e) {
        return a.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '340px' } },
          e.children
        );
      },
      ve = ((t.default = a.a.createElement(de, {
        globalSearch: a.a.createElement(fe.a, {
          id: he.c.uniqueId('combobox-id-'),
          'aria-controls': 'search-listbox-id-1',
          comboboxID: 'primary-search-combobox-id-1',
          autocomplete: !0,
          inputContainerClassName: 'slds-global-search__form-element',
          label: 'Search Salesforce',
          hideLabel: !0,
          placeholder: 'Search Salesforce',
          results: a.a.createElement(pe.e, {
            id: 'search-listbox-id-1',
            'aria-label': 'Recent Items',
            snapshot: ye,
            type: 'entity',
            count: 6
          }),
          resultsType: 'listbox',
          addon: a.a.createElement(me.b, {
            id: he.c.uniqueId('objectswitcher-combobox-id-'),
            value: 'Accounts',
            addonPosition: 'start',
            hasInteractions: !0,
            comboboxAriaControls: 'primary-search-combobox-id-1',
            listboxId: he.c.uniqueId('objectswitcher-listbox-id-')
          }),
          addonPosition: 'start',
          comboboxPosition: 'end',
          inputIconPosition: 'left',
          leftInputIcon: a.a.createElement(be.UtilityIcon, {
            symbol: 'search',
            className: 'slds-icon slds-icon_xx-small slds-icon-text-default',
            containerClassName: 'slds-input__icon slds-input__icon_left',
            title: !1,
            assistiveText: !1
          }),
          hasInteractions: !0
        })
      })),
      [
        {
          id: 'search-focused-expanded',
          label: 'Global Search - Focused and Exanded',
          element: a.a.createElement(de, {
            globalSearch: a.a.createElement(fe.a, {
              id: he.c.uniqueId('combobox-id-'),
              'aria-controls': 'search-listbox-id-2',
              comboboxID: 'primary-search-combobox-id-2',
              autocomplete: !0,
              inputContainerClassName: 'slds-global-search__form-element',
              label: 'Search Salesforce',
              hideLabel: !0,
              placeholder: 'Search Salesforce',
              results: a.a.createElement(pe.e, {
                id: 'search-listbox-id-2',
                'aria-label': 'Recent Items',
                snapshot: ye,
                type: 'entity',
                count: 6
              }),
              resultsType: 'listbox',
              addon: a.a.createElement(me.b, {
                id: he.c.uniqueId('objectswitcher-combobox-id-'),
                value: 'Accounts',
                addonPosition: 'start',
                comboboxAriaControls: 'primary-search-combobox-id-2',
                listboxId: he.c.uniqueId('objectswitcher-listbox-id-')
              }),
              addonPosition: 'start',
              comboboxPosition: 'end',
              inputIconPosition: 'left',
              leftInputIcon: a.a.createElement(be.UtilityIcon, {
                symbol: 'search',
                className:
                  'slds-icon slds-icon_xx-small slds-icon-text-default',
                containerClassName: 'slds-input__icon slds-input__icon_left',
                title: !1,
                assistiveText: !1
              })
            })
          })
        },
        {
          id: 'search-active-typing',
          label: 'Global Search - Active and typing',
          element: a.a.createElement(de, {
            globalSearch: a.a.createElement(fe.a, {
              id: he.c.uniqueId('combobox-id-'),
              'aria-controls': 'search-listbox-id-4',
              comboboxID: 'primary-search-combobox-id-4',
              autocomplete: !0,
              inputContainerClassName: 'slds-global-search__form-element',
              label: 'Search Salesforce',
              hideLabel: !0,
              placeholder: 'Search Salesforce',
              value: 'salesforce',
              results: a.a.createElement(pe.e, {
                id: 'search-listbox-id-4',
                term: 'salesforce',
                snapshot: {
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
                type: 'entity',
                count: 6
              }),
              resultsType: 'listbox',
              'aria-activedescendant': 'option0',
              addon: a.a.createElement(me.b, {
                id: he.c.uniqueId('objectswitcher-combobox-id-'),
                value: 'Accounts',
                addonPosition: 'start',
                comboboxAriaControls: 'primary-search-combobox-id-4',
                listboxId: he.c.uniqueId('objectswitcher-listbox-id-')
              }),
              addonPosition: 'start',
              comboboxPosition: 'end',
              inputIconPosition: 'left',
              leftInputIcon: a.a.createElement(be.UtilityIcon, {
                symbol: 'search',
                className:
                  'slds-icon slds-icon_xx-small slds-icon-text-default',
                containerClassName: 'slds-input__icon slds-input__icon_left',
                title: !1,
                assistiveText: !1
              }),
              hasFocus: !0,
              isOpen: !0
            })
          })
        },
        {
          id: 'favorites-disabled',
          label: 'Favorites - Disabled',
          element: a.a.createElement(de, {
            favoritesDisabled: !0,
            globalSearch: a.a.createElement(fe.a, {
              id: he.c.uniqueId('combobox-id-'),
              'aria-controls': 'search-listbox-id-1',
              comboboxID: 'primary-search-combobox-id-1',
              autocomplete: !0,
              inputContainerClassName: 'slds-global-search__form-element',
              label: 'Search Salesforce',
              hideLabel: !0,
              placeholder: 'Search Salesforce',
              results: a.a.createElement(pe.e, {
                id: 'search-listbox-id-1',
                'aria-label': 'Recent Items',
                snapshot: ye,
                type: 'entity',
                count: 2
              }),
              resultsType: 'listbox',
              addon: a.a.createElement(me.b, {
                id: he.c.uniqueId('objectswitcher-combobox-id-'),
                value: 'Accounts',
                addonPosition: 'start',
                hasInteractions: !0,
                comboboxAriaControls: 'primary-search-combobox-id-1',
                listboxId: he.c.uniqueId('objectswitcher-listbox-id-')
              }),
              addonPosition: 'start',
              comboboxPosition: 'end',
              inputIconPosition: 'left',
              leftInputIcon: a.a.createElement(be.UtilityIcon, {
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
        },
        {
          id: 'notification-count-1',
          label: 'Notification - Count +1',
          element: a.a.createElement(de, {
            playground: !0,
            globalSearch: a.a.createElement(fe.a, {
              id: he.c.uniqueId('combobox-id-'),
              'aria-controls': 'search-listbox-id-1',
              comboboxID: 'primary-search-combobox-id-1',
              autocomplete: !0,
              inputContainerClassName: 'slds-global-search__form-element',
              label: 'Search Salesforce',
              hideLabel: !0,
              placeholder: 'Search Salesforce',
              results: a.a.createElement(pe.e, {
                id: 'search-listbox-id-1',
                'aria-label': 'Recent Items',
                snapshot: ye,
                type: 'entity',
                count: 2
              }),
              resultsType: 'listbox',
              addon: a.a.createElement(me.b, {
                id: he.c.uniqueId('objectswitcher-combobox-id-'),
                value: 'Accounts',
                addonPosition: 'start',
                hasInteractions: !0,
                comboboxAriaControls: 'primary-search-combobox-id-1',
                listboxId: he.c.uniqueId('objectswitcher-listbox-id-')
              }),
              addonPosition: 'start',
              comboboxPosition: 'end',
              inputIconPosition: 'left',
              leftInputIcon: a.a.createElement(be.UtilityIcon, {
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
        }
      ]);
  }
});
