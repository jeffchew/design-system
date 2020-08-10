var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/welcome-mat/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var o, a, i = t[0], s = t[1], c = t[2], m = 0, d = [];
      m < i.length;
      m++
    )
      (a = i[m]),
        Object.prototype.hasOwnProperty.call(r, a) && r[a] && d.push(r[a][0]),
        (r[a] = 0);
    for (o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o]);
    for (u && u(t); d.length; ) d.shift()();
    return l.push.apply(l, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < l.length; t++) {
      for (var n = l[t], o = !0, i = 1; i < n.length; i++) {
        var s = n[i];
        0 !== r[s] && (o = !1);
      }
      o && (l.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var o = {},
    r = { 85: 0 },
    l = [];
  function a(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = e),
    (a.c = o),
    (a.d = function(e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (a.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (a.t = function(e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          a.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (a.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return a.d(t, 'a', t), t;
    }),
    (a.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = '/assets/scripts/bundle/');
  var i = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    s = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var c = 0; c < i.length; c++) t(i[c]);
  var u = s;
  return l.push([203, 0]), n();
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
  203: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getElement', function() {
        return xe;
      }),
      n.d(t, 'getContents', function() {
        return Ie;
      });
    var o = n(0),
      r = n.n(o),
      l = n(4),
      a = n(3),
      i = n.n(a),
      s = n(13),
      c = n(30),
      u = n(8),
      m = function(e) {
        return r.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '800px' } },
          e.children
        );
      };
    m.propTypes = { children: i.a.node.isRequired };
    var d = function() {
        return r.a.createElement(
          o.Fragment,
          null,
          r.a.createElement(s.a, { isBrand: !0 }, 'Learn More'),
          r.a.createElement(
            'div',
            { className: 'slds-m-top_large' },
            r.a.createElement(
              u.b,
              null,
              r.a.createElement(c.a, { label: "Don't show this again" })
            )
          )
        );
      },
      p = function(e) {
        return r.a.createElement(
          'h2',
          { className: 'slds-welcome-mat__info-title', id: e.labelId },
          e.children
        );
      };
    p.propTypes = {
      labelId: i.a.string.isRequired,
      children: i.a.string.isRequired
    };
    var f = function(e) {
      return r.a.createElement(
        'div',
        { className: 'slds-welcome-mat__info-description slds-text-longform' },
        e.children
      );
    };
    f.propTypes = { children: i.a.node.isRequired };
    var h = function(e) {
      return r.a.createElement(
        'div',
        { className: 'slds-welcome-mat__info-actions' },
        r.a.createElement(d, null)
      );
    };
    h.propTypes = { children: i.a.node };
    var b = function(e) {
      var t = e.labelId,
        n = e.headline,
        l = e.description,
        a = e.actions;
      return r.a.createElement(
        o.Fragment,
        null,
        r.a.createElement(p, { labelId: t }, n),
        r.a.createElement(f, null, l),
        r.a.createElement(h, null, a)
      );
    };
    (b.propTypes = {
      labelId: i.a.string.isRequired,
      headline: i.a.string.isRequired,
      description: i.a.object,
      actions: i.a.object
    }),
      (b.defaultProps = {
        headline: 'The Lightning Experience is here!',
        description: r.a.createElement(
          'p',
          null,
          'Welcome to Lightning Experience, the modern, beautiful user experience from Salesforce. With a sales-and service-centric mindset, we focused on reinventing the desktop environment to better support your business processes.'
        )
      });
    var y = n(5),
      g = n.n(y),
      v = n(2),
      w = n(22),
      _ = n(12),
      E = n(84);
    function O(e) {
      return (O =
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
    function S(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function j(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    function T(e, t) {
      return (T =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function x(e, t) {
      return !t || ('object' !== O(t) && 'function' != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function I() {
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
    var k = (function(e) {
      !(function(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          t && T(e, t);
      })(s, e);
      var t,
        n,
        l,
        a,
        i = ((t = s),
        function() {
          var e,
            n = R(t);
          if (I()) {
            var o = R(this).constructor;
            e = Reflect.construct(n, arguments, o);
          } else e = n.apply(this, arguments);
          return x(this, e);
        });
      function s() {
        return S(this, s), i.apply(this, arguments);
      }
      return (
        (n = s),
        (l = [
          {
            key: 'render',
            value: function() {
              var e = this.props,
                t = e.tile,
                n = e.isInfoOnly,
                l = t.completed,
                a = g()('slds-welcome-mat__tile', {
                  'slds-welcome-mat__tile_complete': l,
                  'slds-welcome-mat__tile_info-only': n
                }),
                i = function() {
                  return r.a.createElement(
                    o.Fragment,
                    null,
                    r.a.createElement(
                      'div',
                      {
                        className: g()(
                          'slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center'
                        )
                      },
                      r.a.createElement(
                        'div',
                        { className: 'slds-welcome-mat__tile-figure' },
                        r.a.createElement(
                          'div',
                          {
                            className: 'slds-welcome-mat__tile-icon-container'
                          },
                          r.a.createElement(_.a, {
                            className: 'slds-icon-text-default',
                            symbol: t.symbol,
                            title: !1,
                            assistiveText: !1
                          }),
                          !n &&
                            r.a.createElement(E.a, {
                              title: 'Completed',
                              assistiveText: 'Completed',
                              className: 'slds-welcome-mat__icon-check',
                              symbol: 'check'
                            })
                        )
                      )
                    ),
                    r.a.createElement(
                      'div',
                      { className: 'slds-media__body' },
                      r.a.createElement(
                        'div',
                        { className: 'slds-welcome-mat__tile-body' },
                        r.a.createElement(
                          'h3',
                          { className: 'slds-welcome-mat__tile-title' },
                          t.title
                        ),
                        r.a.createElement(
                          'p',
                          { className: 'slds-welcome-mat__tile-description' },
                          t.description
                        )
                      )
                    )
                  );
                };
              return r.a.createElement(
                'li',
                { className: a },
                n
                  ? r.a.createElement('div', { className: 'slds-media' }, i())
                  : r.a.createElement(
                      'a',
                      {
                        href: 'javascript:void(0);',
                        className: 'slds-box slds-box_link slds-media'
                      },
                      i()
                    )
              );
            }
          }
        ]) && j(n.prototype, l),
        a && j(n, a),
        s
      );
    })(r.a.Component);
    (k.propTypes = { tile: i.a.object.isRequired }),
      (k.defaultProps = {
        tile: {
          symbol: 'animal_and_nature',
          title: 'Welcome to Salesforce!',
          description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor.',
          completed: !1
        }
      });
    var P = k,
      C = n(52);
    function N(e) {
      return (N =
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
    function L(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function W(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    function q(e, t) {
      return (q =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function D(e, t) {
      return !t || ('object' !== N(t) && 'function' != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function M() {
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
    function A(e) {
      return (A = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var z = (function(e) {
      !(function(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          t && q(e, t);
      })(i, e);
      var t,
        n,
        o,
        l,
        a = ((t = i),
        function() {
          var e,
            n = A(t);
          if (M()) {
            var o = A(this).constructor;
            e = Reflect.construct(n, arguments, o);
          } else e = n.apply(this, arguments);
          return D(this, e);
        });
      function i() {
        return L(this, i), a.apply(this, arguments);
      }
      return (
        (n = i),
        (o = [
          {
            key: 'render',
            value: function() {
              var e = this.props,
                t = e.complete,
                n = e.total,
                o = e.labelId,
                l = e.description,
                a = (t / n) * 100;
              return r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  p,
                  { labelId: o },
                  'The Lightning Experience is here!'
                ),
                r.a.createElement(f, null, l),
                r.a.createElement(
                  'div',
                  { className: 'slds-welcome-mat__info-progress' },
                  r.a.createElement(
                    'p',
                    null,
                    r.a.createElement(
                      'strong',
                      null,
                      t,
                      '/',
                      n,
                      ' units completed'
                    )
                  )
                ),
                r.a.createElement(C.a, {
                  value: a,
                  className: 'slds-progress-bar_circular'
                })
              );
            }
          }
        ]) && W(n.prototype, o),
        l && W(n, l),
        i
      );
    })(r.a.Component);
    (z.propTypes = {
      complete: i.a.number.isRequired,
      total: i.a.number.isRequired,
      labelId: i.a.string.isRequired,
      description: i.a.element.isRequired
    }),
      (z.defaultProps = {
        complete: 0,
        total: 5,
        labelId: 'welcome-mat-label-1',
        description: r.a.createElement(
          'p',
          null,
          'Welcome to Lightning Experience, the modern, beautiful user experience from Salesforce. With a sales-and service-centric mindset, we focused on reinventing the desktop environment to better support your business processes.'
        )
      });
    var V = z;
    function B(e) {
      return (B =
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
    function U(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    function J(e, t) {
      return (J =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function H(e, t) {
      return !t || ('object' !== B(t) && 'function' != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function K() {
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
    function Y(e) {
      return (Y = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var $ = (function(e) {
      !(function(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          t && J(e, t);
      })(i, e);
      var t,
        n,
        o,
        l,
        a = ((t = i),
        function() {
          var e,
            n = Y(t);
          if (K()) {
            var o = Y(this).constructor;
            e = Reflect.construct(n, arguments, o);
          } else e = n.apply(this, arguments);
          return H(this, e);
        });
      function i() {
        return F(this, i), a.apply(this, arguments);
      }
      return (
        (n = i),
        (o = [
          {
            key: 'renderTiles',
            value: function(e) {
              var t = this.props,
                n = t.tiles,
                o = t.isInfoOnly;
              return n
                .filter(function(t) {
                  return (t.completed || !1) === e;
                })
                .map(function(e, t) {
                  return r.a.createElement(P, {
                    key: ''.concat(v.c.uniqueId('welcome-mat-'), '-').concat(t),
                    tile: e,
                    isInfoOnly: o
                  });
                });
            }
          },
          {
            key: 'completeTileCount',
            value: function() {
              var e = this.props.tiles;
              return e
                ? e.filter(function(e) {
                    return !0 === e.completed;
                  }).length
                : 0;
            }
          },
          {
            key: 'totalTileCount',
            value: function() {
              var e = this.props.tiles;
              return e ? e.length : 0;
            }
          },
          {
            key: 'render',
            value: function() {
              var e = this.props,
                t = e.content,
                n = e.isInfoOnly,
                o = e.tiles,
                l = v.c.uniqueId('welcome-mat-'),
                a = ''.concat(l, '-label'),
                i = ''.concat(l, '-content'),
                s = g()('slds-welcome-mat', {
                  'slds-welcome-mat_info-only': n,
                  'slds-welcome-mat_splash': !o
                }),
                c = g()('slds-welcome-mat__info', {
                  'slds-size_1-of-2': !!o,
                  'slds-size_1-of-1': !o
                }),
                u = g()('slds-welcome-mat__tiles slds-size_1-of-2', {
                  'slds-welcome-mat__tiles_info-only': n
                });
              return r.a.createElement(
                w.b,
                {
                  className: 'slds-modal_small',
                  'aria-labelledby': a,
                  'aria-describedby': i
                },
                r.a.createElement(w.e, {
                  className: 'slds-modal__header_empty'
                }),
                r.a.createElement(
                  w.c,
                  { id: i },
                  r.a.createElement(
                    'div',
                    { className: s },
                    r.a.createElement(
                      'div',
                      { className: 'slds-welcome-mat__content slds-grid' },
                      r.a.createElement(
                        'div',
                        { className: c },
                        r.a.createElement(
                          'div',
                          { className: 'slds-welcome-mat__info-content' },
                          t({
                            complete: this.completeTileCount(),
                            total: this.totalTileCount(),
                            labelId: a
                          })
                        )
                      ),
                      o && o.length > 0
                        ? r.a.createElement(
                            'ul',
                            { className: u },
                            this.renderTiles(!0),
                            this.renderTiles(!1)
                          )
                        : null
                    )
                  )
                )
              );
            }
          }
        ]) && U(n.prototype, o),
        l && U(n, l),
        i
      );
    })(o.Component);
    ($.propTypes = {
      tiles: i.a.arrayOf(
        i.a.shape({
          symbol: i.a.string.isRequired,
          title: i.a.string.isRequired,
          description: i.a.string.isRequired,
          completed: i.a.bool
        })
      ),
      content: i.a.func.isRequired,
      isInfoOnly: i.a.bool
    }),
      ($.defaultProps = {
        tiles: [
          {
            symbol: 'animal_and_nature',
            title: 'Welcome to Salesforce!',
            description:
              'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.'
          },
          {
            symbol: 'call',
            title: 'Learn About OpenCTI',
            description:
              'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.'
          },
          {
            symbol: 'upload',
            title: 'Power Up the Utility Bar',
            description:
              'Tap into case history or share notes with fellow agents—it all happens on the utility bar.'
          },
          {
            symbol: 'magicwand',
            title: 'Customize your view',
            description:
              "Tailor your cases to your team's workflow with custom list views."
          },
          {
            symbol: 'knowledge_base',
            title: 'Share the Knowledge',
            description:
              "Harness your team's collective know-how with our powerful knowledge base."
          }
        ],
        content: function(e) {
          var t = e.complete,
            n = e.total,
            o = e.labelId;
          return r.a.createElement(V, { complete: t, total: n, labelId: o });
        }
      });
    var G = $;
    function Q(e) {
      return (
        (function(e) {
          if (Array.isArray(e)) return X(e);
        })(e) ||
        (function(e) {
          if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e);
        })(e) ||
        (function(e, t) {
          if (!e) return;
          if ('string' == typeof e) return X(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          'Object' === n && e.constructor && (n = e.constructor.name);
          if ('Map' === n || 'Set' === n) return Array.from(n);
          if (
            'Arguments' === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return X(e, t);
        })(e) ||
        (function() {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        })()
      );
    }
    function X(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
      return o;
    }
    var Z = [
        {
          symbol: 'animal_and_nature',
          title: 'Welcome to Salesforce!',
          description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.'
        },
        {
          symbol: 'call',
          title: 'Learn About OpenCTI',
          description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.'
        },
        {
          symbol: 'upload',
          title: 'Power Up the Utility Bar',
          description:
            'Tap into case history or share notes with fellow agents—it all happens on the utility bar.'
        },
        {
          symbol: 'magicwand',
          title: 'Customize your view',
          description:
            "Tailor your cases to your team's workflow with custom list views."
        },
        {
          symbol: 'knowledge_base',
          title: 'Share the Knowledge',
          description:
            "Harness your team's collective know-how with our powerful knowledge base."
        }
      ],
      ee = [
        Object.assign({}, Z[0], { completed: !0 }),
        Object.assign({}, Z[1], { completed: !0 })
      ].concat(Q(Z.slice(2))),
      te = Q(ee).concat(Z.slice(2)),
      ne = r.a.createElement(w.a, null, r.a.createElement(G, null)),
      oe = [
        {
          id: 'default',
          label: 'Default',
          demoStyles: 'height: 800px;',
          element: ne
        },
        {
          id: 'with-completed-tiles',
          label: 'With Completed Tiles',
          demoStyles: 'height: 800px;',
          element: r.a.createElement(
            w.a,
            null,
            r.a.createElement(G, { tiles: ee })
          )
        },
        {
          id: 'with-overflowing-tiles',
          label: 'With Overflowing Tiles',
          demoStyles: 'height: 800px;',
          element: r.a.createElement(
            w.a,
            null,
            r.a.createElement(G, { tiles: te })
          )
        },
        {
          id: 'with-overflowing-tiles-and-long-description',
          label: 'With Overflowing Tiles and Long Description',
          demoStyles: 'height: 800px;',
          element: r.a.createElement(
            w.a,
            null,
            r.a.createElement(G, {
              tiles: te,
              content: function(e) {
                var t = e.complete,
                  n = e.total,
                  o = e.labelId;
                return r.a.createElement(V, {
                  complete: t,
                  total: n,
                  labelId: o,
                  description: r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      'p',
                      null,
                      'Integer nibh libero, pulvinar sed libero et, rhoncus convallis purus. Sed faucibus nibh vel arcu vestibulum, nec commodo sapien tincidunt. In dignissim faucibus ipsum, nec placerat dui pulvinar a mi nec lectus feugiat vel arcu rhoncus convallis, nibh libero.'
                    ),
                    r.a.createElement(
                      'p',
                      null,
                      'Sed vestibulum dui ac diam suscipit vehicula. Nam vestibulum mi nec lectus feugiat euismod. Phasellus in suscipit est.'
                    ),
                    r.a.createElement(
                      'p',
                      null,
                      'Morbi facilisis aliquet dapibus. Morbi ac leo viverra, cursus nibh eget, ultrices mauris. Integer pharetra, lorem ac hendrerit vulputate, sem elit luctus metus, sit amet vehicula justo ex at sem.'
                    )
                  )
                });
              }
            })
          )
        }
      ];
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
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function ae(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    function ie(e, t) {
      return (ie =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function se(e, t) {
      return !t || ('object' !== re(t) && 'function' != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function ce() {
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
    function ue(e) {
      return (ue = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var me = (function(e) {
      !(function(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          t && ie(e, t);
      })(i, e);
      var t,
        n,
        o,
        l,
        a = ((t = i),
        function() {
          var e,
            n = ue(t);
          if (ce()) {
            var o = ue(this).constructor;
            e = Reflect.construct(n, arguments, o);
          } else e = n.apply(this, arguments);
          return se(this, e);
        });
      function i() {
        return le(this, i), a.apply(this, arguments);
      }
      return (
        (n = i),
        (o = [
          {
            key: 'render',
            value: function() {
              var e = this.props,
                t = e.complete,
                n = e.total,
                o = e.labelId,
                l = (t / n) * 100,
                a = 100 === l,
                i = a
                  ? r.a.createElement(
                      'p',
                      null,
                      'Cha-ching! You earned the badge.'
                    )
                  : r.a.createElement('p', null, t, '/', n, ' units completed');
              return r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  'h2',
                  { id: o, className: 'slds-welcome-mat__info-title' },
                  'The Lightning Experience is here!'
                ),
                r.a.createElement(
                  'p',
                  {
                    className:
                      'slds-welcome-mat__info-description slds-text-longform'
                  },
                  'Welcome to Lightning Experience, the modern, beautiful user experience from Salesforce. With a sales-and service-centric mindset, we focused on reinventing the desktop environment to better support your business processes.'
                ),
                r.a.createElement(
                  'div',
                  {
                    className: g()('slds-welcome-mat__info-progress', {
                      'slds-welcome-mat__info-progress_complete': a
                    })
                  },
                  r.a.createElement(
                    'div',
                    { className: 'slds-welcome-mat__info-badge-container' },
                    r.a.createElement('img', {
                      className: 'slds-welcome-mat__info-badge',
                      src: '/assets/images/welcome-mat/trailhead_badge@2x.png',
                      width: '50',
                      height: '50',
                      alt: ''
                    }),
                    r.a.createElement(E.a, {
                      title: 'Completed',
                      assistiveText: 'Completed',
                      className:
                        'slds-welcome-mat__icon-check slds-icon_xx-small',
                      symbol: 'check'
                    })
                  ),
                  r.a.createElement(
                    'p',
                    null,
                    r.a.createElement('strong', null, 'Lightning Explorer')
                  ),
                  i
                ),
                a
                  ? r.a.createElement(
                      s.a,
                      { isBrand: !0 },
                      'View on your Trailblazer Profile'
                    )
                  : r.a.createElement(C.a, {
                      value: l,
                      className: 'slds-progress-bar_circular'
                    })
              );
            }
          }
        ]) && ae(n.prototype, o),
        l && ae(n, l),
        i
      );
    })(r.a.Component);
    (me.propTypes = {
      complete: i.a.number.isRequired,
      total: i.a.number.isRequired,
      labelId: i.a.string.isRequired
    }),
      (me.defaultProps = {
        complete: 0,
        total: 5,
        labelId: 'welcome-mat-label-1'
      });
    var de = me,
      pe = [];
    G.defaultProps.tiles.forEach(function(e) {
      pe.push(Object.assign({}, e, { completed: !0 }));
    });
    var fe = r.a.createElement(
        w.a,
        null,
        r.a.createElement(G, {
          content: function(e) {
            var t = e.complete,
              n = e.total,
              o = e.labelId;
            return r.a.createElement(de, { complete: t, total: n, labelId: o });
          }
        })
      ),
      he = [
        {
          id: 'default',
          label: 'Default',
          demoStyles: 'height: 800px;',
          element: fe
        },
        {
          id: 'trailhead-complete',
          label: 'Trailhead Complete',
          demoStyles: 'height: 800px;',
          element: r.a.createElement(
            w.a,
            null,
            r.a.createElement(G, {
              tiles: pe,
              content: function(e) {
                var t = e.complete,
                  n = e.total,
                  o = e.labelId;
                return r.a.createElement(de, {
                  complete: t,
                  total: n,
                  labelId: o
                });
              }
            })
          )
        }
      ],
      be = r.a.createElement(
        w.a,
        null,
        r.a.createElement(G, {
          content: function(e) {
            var t = e.labelId;
            return r.a.createElement(b, { labelId: t });
          },
          tiles: null
        })
      ),
      ye = [
        {
          id: 'default',
          label: 'Default',
          demoStyles: 'height: 800px;',
          element: be
        }
      ],
      ge = r.a.createElement(
        w.a,
        null,
        r.a.createElement(G, {
          content: function(e) {
            var t = e.labelId;
            return r.a.createElement(b, { labelId: t });
          },
          isInfoOnly: !0
        })
      ),
      ve = [
        {
          id: 'default',
          label: 'Default',
          demoStyles: 'height: 800px;',
          element: ge
        }
      ],
      we = (n(11), n(1)),
      _e = l.c.code,
      Ee = l.c.h2,
      Oe = l.c.h3,
      Se = l.c.li,
      je = l.c.p,
      Te = l.c.ul,
      xe = function() {
        return Object(o.createElement)(
          l.b,
          {},
          Object(o.createElement)(
            'div',
            { className: 'doc lead' },
            'A Welcome Mat provides a series of unordered items a user can click to learn about a thematic topic.'
          ),
          Object(o.createElement)(
            we.a,
            {
              exampleOnly: !0,
              isViewport: !0,
              demoStyles: Object(v.d)(oe, 'with-completed-tiles')
            },
            Object(v.e)(oe, 'with-completed-tiles')
          ),
          Ee({ id: 'About-Welcome-Mat' }, 'About Welcome Mat'),
          Te(
            {},
            Se(
              {},
              'Welcome Mat tiles may trigger walkthroughs, modals, videos, or navigate users to specific URLs.'
            ),
            Se(
              {},
              'The Welcome Mat consists of two sections, the informational left pane and the actionable right pane.'
            ),
            Se(
              {},
              'The left pane should be used to educate users as to the theme of the content displayed in the right pane.'
            ),
            Se(
              {},
              'Icon choices, colors, and tile content can be customized to fit your experience.'
            )
          ),
          Ee({ id: 'Base' }, 'Base'),
          Object(o.createElement)(
            we.a,
            { isViewport: !0, demoStyles: Object(v.d)(oe, 'default') },
            Object(v.e)(oe, 'default')
          ),
          Ee({ id: 'Examples' }, 'Examples'),
          Oe({ id: 'With-Completed-Steps' }, 'With Completed Steps'),
          je(
            {},
            'As users complete items in the list, the list updates to show as completed.'
          ),
          je(
            {},
            'As tiles are completed, they move to the bottom of the list, and get a modifier class of ',
            _e({}, 'slds-welcome-mat__tile_complete'),
            '.'
          ),
          Object(o.createElement)(
            we.a,
            {
              isViewport: !0,
              demoStyles: Object(v.d)(oe, 'with-completed-tiles')
            },
            Object(v.e)(oe, 'with-completed-tiles')
          ),
          Oe({ id: 'Trailhead-Connected' }, 'Trailhead Connected'),
          je(
            {},
            'The Trailhead Connected variant should only be used when users can achieve a badge in Trailhead for completing all steps in the current Welcome Mat.'
          ),
          je(
            {},
            'Only Trailhead connected mats may have the Trailhead font for the header.'
          ),
          Object(o.createElement)(
            we.a,
            { isViewport: !0, demoStyles: Object(v.d)(oe, 'default') },
            Object(v.e)(he, 'default')
          ),
          Oe(
            { id: 'Trailhead-Connected-Complete' },
            'Trailhead Connected - Complete'
          ),
          je(
            {},
            'When all tiles on a Trailhead Connected Welcome Mat are completed, users should be presented with a message and link to view their new badge on their Trailblazer profile page.'
          ),
          je(
            {},
            'When a class of ',
            _e({}, 'slds-welcome-mat__info-progress_complete'),
            ' is added to the ',
            _e({}, '.slds-welcome-mat__info-progress'),
            ' element, the complete check mark will appear with the Trailhead badge.'
          ),
          je(
            {},
            "Additionally, the progress indicator should be replaced with a button to view the badge on the user's Trailblazer profile page."
          ),
          Object(o.createElement)(
            we.a,
            {
              isViewport: !0,
              demoStyles: Object(v.d)(he, 'trailhead-complete')
            },
            Object(v.e)(he, 'trailhead-complete')
          ),
          Oe({ id: 'Info-only' }, 'Info-only'),
          je(
            {},
            'In the event your displayed steps are informational rather than actionable, you can set the tiles to "info only" mode. In this variation, the ',
            _e({}, '<a>'),
            ' tags are removed from the tiles. The tiles also lose their button appearance, removing borders and shadows.'
          ),
          je(
            {},
            'The tile container background changes from gray to white, which is done by applying the modifier class of ',
            _e({}, 'slds-welcome-mat__tiles_info-only'),
            ' to the ',
            _e({}, 'slds-welcome-mat__tiles'),
            " element. Since the tiles aren't actionable, also apply the modifier class of ",
            _e({}, 'slds-welcome-mat__tile-info-only'),
            ' to each ',
            _e({}, 'slds-welcome-mat__tile'),
            ' element.'
          ),
          Object(o.createElement)(
            we.a,
            { isViewport: !0, demoStyles: Object(v.d)(ve, 'default') },
            Object(v.e)(ve, 'default')
          ),
          Oe({ id: 'Splash' }, 'Splash'),
          je(
            {},
            'The Splash variant is a singular interstitial modal. It removes the actionable/content column and allows the background image to span the full-width. Make sure that the areas of your background image behind your text provide enough contrast to ensure accessibility.'
          ),
          Object(o.createElement)(
            we.a,
            { isViewport: !0, demoStyles: Object(v.d)(ye, 'default') },
            Object(v.e)(ye, 'default')
          )
        );
      },
      Ie = function() {
        return Object(l.a)(xe());
      };
  }
});
