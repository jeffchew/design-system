var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/path/docs.mdx.js'] = (function(e) {
  function t(t) {
    for (
      var n, o, r = t[0], c = t[1], s = t[2], u = 0, d = [];
      u < r.length;
      u++
    )
      (o = r[u]),
        Object.prototype.hasOwnProperty.call(l, o) && l[o] && d.push(l[o][0]),
        (l[o] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    for (p && p(t); d.length; ) d.shift()();
    return i.push.apply(i, s || []), a();
  }
  function a() {
    for (var e, t = 0; t < i.length; t++) {
      for (var a = i[t], n = !0, r = 1; r < a.length; r++) {
        var c = a[r];
        0 !== l[c] && (n = !1);
      }
      n && (i.splice(t--, 1), (e = o((o.s = a[0]))));
    }
    return e;
  }
  var n = {},
    l = { 53: 0 },
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
  var r = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    c = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var s = 0; s < r.length; s++) t(r[s]);
  var p = c;
  return i.push([226, 0]), a();
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
  226: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'getElement', function() {
        return ve;
      }),
      a.d(t, 'getContents', function() {
        return Se;
      });
    var n = a(0),
      l = a.n(n),
      i = a(4),
      o = a(1),
      r = (a(23), a(15), a(2)),
      c = a(3),
      s = a.n(c),
      p = a(90),
      u = a.n(p);
    function d(e) {
      return (d =
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
    function m(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function h(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function f(e, t) {
      return (f =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function b(e, t) {
      return !t || ('object' !== d(t) && 'function' != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function g() {
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
    function y(e) {
      return (y = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var E = (function(e) {
      !(function(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          t && f(e, t);
      })(r, e);
      var t,
        a,
        n,
        i,
        o = ((t = r),
        function() {
          var e,
            a = y(t);
          if (g()) {
            var n = y(this).constructor;
            e = Reflect.construct(a, arguments, n);
          } else e = a.apply(this, arguments);
          return b(this, e);
        });
      function r() {
        return m(this, r), o.apply(this, arguments);
      }
      return (
        (a = r),
        (n = [
          {
            key: 'render',
            value: function() {
              var e = u.a.renderToString(this._renderIframe());
              return l.a.createElement('iframe', {
                className: 'docs-mobile_iframe',
                title: 'Mobile frame/container used for testing purposes',
                style: {
                  overflow: 'hidden',
                  height: '812px',
                  width: '375px',
                  border: 'none'
                },
                srcdoc: e
              });
            }
          },
          {
            key: '_renderIframe',
            value: function() {
              var e = this.props.children;
              return l.a.createElement(
                'html',
                { lang: 'en', style: { backgroundColor: 'transparent' } },
                l.a.createElement(
                  'head',
                  null,
                  l.a.createElement('link', {
                    type: 'text/css',
                    rel: 'stylesheet',
                    href: '/assets/styles/slds-small.css'
                  })
                ),
                l.a.createElement('body', null, e)
              );
            }
          }
        ]) && h(a.prototype, n),
        i && h(a, i),
        r
      );
    })(l.a.Component);
    E.propTypes = { children: s.a.node };
    var v = E,
      S = a(54),
      x = a(5),
      _ = a.n(x),
      O = a(13),
      w = a(7),
      j = a(10),
      C = a(53);
    function P(e) {
      return (P =
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
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function k(e, t) {
      return (k =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function T(e, t) {
      return !t || ('object' !== P(t) && 'function' != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function R() {
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
    var L = function(e) {
      return l.a.createElement(
        'div',
        {
          className: _()('slds-path', {
            'slds-path_has-coaching': e.hasCoaching,
            'slds-is-expanded': e.coachingOpen
          })
        },
        e.children
      );
    };
    (L.propTypes = { hasCoaching: s.a.bool, coachingOpen: s.a.bool }),
      (L.defaultProps = { hasCoaching: !1, coachingOpen: !1 });
    var I = function(e) {
      var t = e.hasCoaching,
        a = e.coachingOpen,
        n = e.hasOverflow,
        i = e.coachingId,
        o = e.stageName,
        r = e.actionButtonLabel;
      return l.a.createElement(
        'div',
        {
          className: _()('slds-grid slds-path__track', {
            'slds-has-overflow': n
          })
        },
        l.a.createElement(
          'div',
          { className: 'slds-grid slds-path__scroller-container' },
          t
            ? l.a.createElement(w.b, {
                symbol: 'chevronright',
                theme: 'neutral',
                className: _()('slds-path__trigger', {
                  'slds-path__trigger_open': a
                }),
                assistiveText: 'Show Details',
                title: 'Toggle Sales Coaching',
                'aria-expanded': a,
                'aria-controls': i
              })
            : null,
          l.a.createElement(
            'div',
            { className: 'slds-path__scroller', role: 'application' },
            l.a.createElement(
              'div',
              { className: 'slds-path__scroller_inner' },
              l.a.createElement(
                'ul',
                {
                  className: 'slds-path__nav',
                  role: 'listbox',
                  'aria-orientation': 'horizontal'
                },
                e.children
              ),
              n
                ? l.a.createElement(
                    'div',
                    { className: 'slds-path__scroll-controls' },
                    l.a.createElement(w.b, {
                      symbol: 'left',
                      theme: 'neutral',
                      assistiveText: 'Scroll left',
                      title: 'Scroll left',
                      tabIndex: '-1'
                    }),
                    l.a.createElement(w.b, {
                      symbol: 'right',
                      theme: 'neutral',
                      assistiveText: 'Scroll right',
                      title: 'Scroll right',
                      tabIndex: '-1'
                    })
                  )
                : null
            )
          )
        ),
        l.a.createElement(
          'div',
          { className: 'slds-grid slds-path__action' },
          l.a.createElement(
            'span',
            { className: 'slds-path__stage-name' },
            'Stage: ',
            o
          ),
          l.a.createElement(
            O.a,
            { isBrand: !0, className: 'slds-path__mark-complete' },
            r
          ),
          t
            ? l.a.createElement(
                O.a,
                {
                  isNeutral: !0,
                  className: 'slds-path__trigger-coaching-content',
                  'aria-expanded': a,
                  'aria-controls': i
                },
                a ? 'Show Less' : 'Show More'
              )
            : null
        )
      );
    };
    (I.propTypes = {
      hasCoaching: s.a.bool,
      coachingOpen: s.a.bool,
      hasOverflow: s.a.bool,
      coachingId: s.a.string,
      stageName: s.a.string,
      actionButtonLabel: s.a.node
    }),
      (I.defaultProps = {
        hasCoaching: !1,
        coachingOpen: !1,
        hasOverflow: !1,
        coachingId: '',
        stageName: 'Unqualified',
        actionButtonLabel: l.a.createElement(
          n.Fragment,
          null,
          l.a.createElement(j.a, {
            className: 'slds-button__icon slds-button__icon_left',
            sprite: 'utility',
            symbol: 'check',
            'aria-hidden': 'true'
          }),
          'Mark Status as Complete'
        )
      });
    var M = (function(e) {
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
        a,
        n,
        i,
        o = ((t = r),
        function() {
          var e,
            a = W(t);
          if (R()) {
            var n = W(this).constructor;
            e = Reflect.construct(a, arguments, n);
          } else e = a.apply(this, arguments);
          return T(this, e);
        });
      function r() {
        var e;
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, r),
          ((e = o.call(this)).state = { itemRef: null }),
          e
        );
      }
      return (
        (a = r),
        (n = [
          {
            key: 'componentDidUpdate',
            value: function(e, t) {
              var a = this.props.setTooltipRef,
                n = this.state.itemRef;
              a && n !== t.itemRef && a(n);
            }
          },
          {
            key: 'render',
            value: function() {
              var e = this,
                t = this.props,
                a = t.label,
                n = t.stepState,
                i = t.index,
                o = n.indexOf('active') > -1,
                r = n.indexOf('complete') > -1,
                c = n.indexOf('current') > -1,
                s = null;
              return (
                r ? (s = 'Stage Complete') : c && (s = 'Current Stage:'),
                l.a.createElement(
                  'li',
                  {
                    className: _()(
                      'slds-path__item',
                      n.map(function(e) {
                        return 'slds-is-'.concat(e);
                      })
                    ),
                    role: 'presentation',
                    ref: function(t) {
                      e.state.itemRef || e.setState({ itemRef: t });
                    }
                  },
                  l.a.createElement(
                    'a',
                    {
                      'aria-selected': o,
                      className: 'slds-path__link',
                      href: 'javascript:void(0);',
                      id: 'path-'.concat(i),
                      role: 'option',
                      tabIndex: o ? 0 : -1
                    },
                    l.a.createElement(
                      'span',
                      { className: 'slds-path__stage' },
                      l.a.createElement(j.a, {
                        className: 'slds-icon slds-icon_x-small',
                        sprite: 'utility',
                        symbol: 'check'
                      }),
                      s
                        ? l.a.createElement(
                            'span',
                            { className: 'slds-assistive-text' },
                            s
                          )
                        : null
                    ),
                    l.a.createElement(
                      'span',
                      { className: 'slds-path__title' },
                      a
                    )
                  )
                )
              );
            }
          }
        ]) && N(a.prototype, n),
        i && N(a, i),
        r
      );
    })(n.Component);
    (M.propTypes = {
      label: s.a.string,
      stepState: s.a.arrayOf(s.a.string),
      index: s.a.number
    }),
      (M.defaultProps = {
        label: 'Undefined',
        stepState: ['incomplete'],
        index: 0
      });
    var D = function(e) {
      var t = e.coachingId,
        a = e.isHidden,
        n = e.coachingData,
        i = e.pathGuidance;
      return l.a.createElement(
        'div',
        {
          className: _()('slds-path__content', { 'slds-is-collapsed': a }),
          id: t
        },
        l.a.createElement(
          'div',
          { className: 'slds-path__coach slds-grid' },
          l.a.createElement(
            'div',
            { className: 'slds-path__keys' },
            l.a.createElement(
              'div',
              {
                className:
                  'slds-grid slds-grid_align-spread slds-path__coach-title'
              },
              l.a.createElement('h2', null, 'Key Fields This Stage'),
              l.a.createElement(
                O.a,
                { className: 'slds-path__coach-edit slds-text-body_small' },
                'Edit'
              )
            ),
            l.a.createElement(C.c, {
              direction: 'stacked',
              snapshot: n,
              isViewMode: !0
            })
          ),
          l.a.createElement(
            'div',
            { className: 'slds-path__guidance' },
            l.a.createElement(
              'h2',
              { className: 'slds-path__coach-title' },
              'Guidance for Success'
            ),
            l.a.createElement(
              'div',
              { className: 'slds-text-longform slds-path__guidance-content' },
              i
            )
          )
        )
      );
    };
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
    function U(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function A(e, t) {
      return (A =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function q(e, t) {
      return !t || ('object' !== B(t) && 'function' != typeof t) ? z(e) : t;
    }
    function z(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function H() {
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
    function F(e) {
      return (F = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    (D.propTypes = {
      coachingId: s.a.string,
      isHidden: s.a.bool,
      coachingData: s.a.object,
      pathGuidance: s.a.arrayOf(s.a.node)
    }),
      (D.defaultProps = {
        coachingId: null,
        isHidden: !1,
        coachingData: {
          rows: [
            {
              fields: [
                { type: 'text', label: 'Expected Budget', value: '$10,000' }
              ]
            },
            {
              fields: [
                {
                  type: 'text',
                  label: 'Lead Source',
                  value: 'Marketing and Web Referral'
                }
              ]
            },
            {
              fields: [
                {
                  type: 'text',
                  label: 'Support Engineer',
                  value: 'Jane Authur'
                }
              ]
            }
          ]
        },
        pathGuidance: [
          l.a.createElement(
            'p',
            { key: 'guidance-1' },
            'Regularly cross-sell related products using',
            ' ',
            l.a.createElement(
              'a',
              { href: 'javascript:void(0);' },
              'cross-sell tactics and principles'
            ),
            '.'
          ),
          l.a.createElement(
            'p',
            { key: 'guidance-2' },
            'Prepare demo deck using the',
            ' ',
            l.a.createElement(
              'a',
              { href: 'javascript:void(0);' },
              'latest template'
            ),
            ' and review with Marketing and Sales teams. Review demo copy with Legal and Doc team.'
          ),
          l.a.createElement(
            'p',
            { key: 'guidance-3' },
            'Look up ',
            l.a.createElement(
              'a',
              { href: 'javascript:void(0);' },
              'needs analysis principles'
            ),
            ' and review selling plan with Sales Engineer.'
          )
        ]
      });
    var G = function() {
        return l.a.createElement(
          L,
          null,
          l.a.createElement(
            I,
            null,
            l.a.createElement(M, {
              label: 'Contacted',
              stepState: ['current', 'active'],
              index: 1
            }),
            l.a.createElement(M, {
              label: 'Open',
              stepState: ['incomplete'],
              index: 2
            }),
            l.a.createElement(M, {
              label: 'Unqualified',
              stepState: ['incomplete'],
              index: 3
            }),
            l.a.createElement(M, {
              label: 'Nurturing',
              stepState: ['incomplete'],
              index: 4
            }),
            l.a.createElement(M, {
              label: 'Closed',
              stepState: ['incomplete'],
              index: 5
            })
          )
        );
      },
      J = function() {
        return l.a.createElement(
          L,
          null,
          l.a.createElement(
            I,
            null,
            l.a.createElement(M, {
              label: 'Contacted',
              stepState: ['complete'],
              index: 6
            }),
            l.a.createElement(M, {
              label: 'Open',
              stepState: ['complete'],
              index: 7
            }),
            l.a.createElement(M, {
              label: 'Unqualified',
              stepState: ['complete'],
              index: 8
            }),
            l.a.createElement(M, {
              label: 'Nurturing',
              stepState: ['current', 'active'],
              index: 9
            }),
            l.a.createElement(M, {
              label: 'Closed',
              stepState: ['incomplete'],
              index: 10
            })
          )
        );
      },
      V = function() {
        return l.a.createElement(
          L,
          null,
          l.a.createElement(
            I,
            { actionButtonLabel: 'Mark as Current Stage' },
            l.a.createElement(M, {
              label: 'Contacted',
              stepState: ['current'],
              index: 11
            }),
            l.a.createElement(M, {
              label: 'Open',
              stepState: ['incomplete'],
              index: 12
            }),
            l.a.createElement(M, {
              label: 'Unqualified',
              stepState: ['active'],
              index: 13
            }),
            l.a.createElement(M, {
              label: 'Nurturing',
              stepState: ['incomplete'],
              index: 14
            }),
            l.a.createElement(M, {
              label: 'Closed',
              stepState: ['incomplete'],
              index: 15
            })
          )
        );
      },
      K = (function(e) {
        !(function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && A(e, t);
        })(c, e);
        var t,
          a,
          i,
          o,
          r = ((t = c),
          function() {
            var e,
              a = F(t);
            if (H()) {
              var n = F(this).constructor;
              e = Reflect.construct(a, arguments, n);
            } else e = a.apply(this, arguments);
            return q(this, e);
          });
        function c() {
          var e;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, c),
            ((e = r.call(
              this
            )).updateTooltipOffset = e.updateTooltipOffset.bind(z(e))),
            (e.setTooltipRef = e.setTooltipRef.bind(z(e))),
            (e.state = { tooltipRef: null, tooltipLeft: 0, tooltipTop: 0 }),
            e
          );
        }
        return (
          (a = c),
          (i = [
            {
              key: 'componentDidMount',
              value: function() {
                window.addEventListener('resize', this.updateTooltipOffset),
                  this.updateTooltipOffset();
              }
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                window.removeEventListener('resize', this.updateTooltipOffset);
              }
            },
            {
              key: 'componentDidUpdate',
              value: function(e, t) {
                this.state.tooltipRef &&
                  !t.tooltipRef &&
                  this.updateTooltipOffset();
              }
            },
            {
              key: 'updateTooltipOffset',
              value: function() {
                var e = this.state.tooltipRef,
                  t = 0,
                  a = 0;
                e &&
                  ((t = e.offsetLeft + e.offsetWidth / 2),
                  (a = e.offsetTop + e.offsetHeight + 14)),
                  this.setState({ tooltipLeft: t, tooltipTop: a });
              }
            },
            {
              key: 'setTooltipRef',
              value: function(e) {
                this.setState({ tooltipRef: e });
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.state,
                  a = t.tooltipLeft,
                  i = t.tooltipTop;
                return l.a.createElement(
                  n.Fragment,
                  null,
                  l.a.createElement(
                    L,
                    null,
                    l.a.createElement(
                      I,
                      { actionButtonLabel: 'Mark as Current Stage' },
                      l.a.createElement(M, {
                        label: 'Contacted',
                        stepState: ['complete'],
                        index: 16
                      }),
                      l.a.createElement(M, {
                        label: 'Open',
                        stepState: ['complete'],
                        index: 17
                      }),
                      l.a.createElement(M, {
                        label: 'Unqualified',
                        stepState: ['current'],
                        index: 18,
                        setTooltipRef: function(t) {
                          return e.setTooltipRef(t);
                        }
                      }),
                      l.a.createElement(M, {
                        label: 'Nurturing',
                        stepState: ['active'],
                        index: 19
                      }),
                      l.a.createElement(M, {
                        label: 'Closed',
                        stepState: ['incomplete'],
                        index: 20
                      })
                    ),
                    l.a.createElement(
                      S.a,
                      {
                        className: 'slds-nubbin_top',
                        style: {
                          left: ''.concat(a, 'px'),
                          transform: 'translateX(-50%)',
                          top: ''.concat(i, 'px'),
                          position: 'absolute'
                        }
                      },
                      '3 Days in Unqualified'
                    )
                  )
                );
              }
            }
          ]) && U(a.prototype, i),
          o && U(a, o),
          c
        );
      })(n.Component),
      Q = function() {
        return l.a.createElement(
          L,
          { hasCoaching: !0 },
          l.a.createElement(
            I,
            { coachingId: 'path-coaching-1', hasCoaching: !0 },
            l.a.createElement(M, {
              label: 'Contacted',
              stepState: ['complete'],
              index: 21
            }),
            l.a.createElement(M, {
              label: 'Open',
              stepState: ['complete'],
              index: 22
            }),
            l.a.createElement(M, {
              label: 'Unqualified',
              stepState: ['active', 'current'],
              index: 23
            }),
            l.a.createElement(M, {
              label: 'Nurturing',
              stepState: ['incomplete'],
              index: 24
            }),
            l.a.createElement(M, {
              label: 'Closed',
              stepState: ['incomplete'],
              index: 25
            })
          ),
          l.a.createElement(D, {
            coachingId: 'path-coaching-1',
            labelledBy: 'path-23',
            isHidden: !0
          })
        );
      },
      X = function() {
        return l.a.createElement(
          L,
          { hasCoaching: !0, coachingOpen: !0 },
          l.a.createElement(
            I,
            {
              coachingId: 'path-coaching-2',
              hasCoaching: !0,
              coachingOpen: !0
            },
            l.a.createElement(M, {
              label: 'Contacted',
              stepState: ['complete'],
              index: 26
            }),
            l.a.createElement(M, {
              label: 'Open',
              stepState: ['complete'],
              index: 27
            }),
            l.a.createElement(M, {
              label: 'Unqualified',
              stepState: ['current'],
              index: 28
            }),
            l.a.createElement(M, {
              label: 'Nurturing',
              stepState: ['incomplete', 'active'],
              index: 29
            }),
            l.a.createElement(M, {
              label: 'Closed',
              stepState: ['incomplete'],
              index: 30
            })
          ),
          l.a.createElement(D, {
            coachingId: 'path-coaching-2',
            labelledBy: 'path-28'
          })
        );
      },
      $ = function() {
        return l.a.createElement(
          L,
          null,
          l.a.createElement(
            I,
            { actionButtonLabel: 'Change Closed State' },
            l.a.createElement(M, {
              label: 'Contacted',
              stepState: ['complete'],
              index: 31
            }),
            l.a.createElement(M, {
              label: 'Open',
              stepState: ['complete'],
              index: 32
            }),
            l.a.createElement(M, {
              label: 'Unqualified',
              stepState: ['complete'],
              index: 33
            }),
            l.a.createElement(M, {
              label: 'Nurturing',
              stepState: ['complete'],
              index: 34
            }),
            l.a.createElement(M, {
              label: 'Closed Won',
              stepState: ['won', 'active', 'current'],
              index: 35
            })
          )
        );
      },
      Y = function() {
        return l.a.createElement(
          L,
          null,
          l.a.createElement(
            I,
            { actionButtonLabel: 'Change Closed State' },
            l.a.createElement(M, {
              label: 'Contacted',
              stepState: ['incomplete'],
              index: 36
            }),
            l.a.createElement(M, {
              label: 'Open',
              stepState: ['incomplete'],
              index: 37
            }),
            l.a.createElement(M, {
              label: 'Unqualified',
              stepState: ['incomplete'],
              index: 38
            }),
            l.a.createElement(M, {
              label: 'Nurturing',
              stepState: ['incomplete'],
              index: 39
            }),
            l.a.createElement(M, {
              label: 'Closed Lost',
              stepState: ['lost', 'active', 'current'],
              index: 40
            })
          )
        );
      },
      Z = function() {
        return l.a.createElement(
          L,
          null,
          l.a.createElement(
            I,
            { hasOverflow: !0 },
            l.a.createElement(M, {
              label: 'Prospecting',
              stepState: ['complete'],
              index: 41
            }),
            l.a.createElement(M, {
              label: 'Qualification',
              stepState: ['complete'],
              index: 42
            }),
            l.a.createElement(M, {
              label: 'Needs Analysis',
              stepState: ['active', 'current'],
              index: 43
            }),
            l.a.createElement(M, {
              label: 'Value Proposition',
              stepState: ['incomplete'],
              index: 44
            }),
            l.a.createElement(M, {
              label: 'Id. Decision Maker',
              stepState: ['incomplete'],
              index: 45
            }),
            l.a.createElement(M, {
              label: 'Perception Analysis',
              stepState: ['incomplete'],
              index: 46
            }),
            l.a.createElement(M, {
              label: 'Proposal / Pricing',
              stepState: ['incomplete'],
              index: 47
            }),
            l.a.createElement(M, {
              label: 'Negotiation / Review',
              stepState: ['incomplete'],
              index: 48
            }),
            l.a.createElement(M, {
              label: 'Closed',
              stepState: ['incomplete'],
              index: 49
            })
          )
        );
      },
      ee = function() {
        return l.a.createElement(
          'div',
          { className: 'slds-region_medium', style: { width: '700px' } },
          l.a.createElement(
            L,
            null,
            l.a.createElement(
              I,
              null,
              l.a.createElement(M, {
                label: 'Contacted',
                stepState: ['complete'],
                index: 50
              }),
              l.a.createElement(M, {
                label: 'Open',
                stepState: ['complete'],
                index: 51
              }),
              l.a.createElement(M, {
                label: 'Unqualified',
                stepState: ['active', 'current'],
                index: 52
              }),
              l.a.createElement(M, {
                label: 'Nurturing',
                stepState: ['incomplete'],
                index: 53
              }),
              l.a.createElement(M, {
                label: 'Closed',
                stepState: ['incomplete'],
                index: 54
              })
            )
          )
        );
      },
      te = function() {
        return l.a.createElement(
          'div',
          { className: 'slds-region_medium', style: { width: '700px' } },
          l.a.createElement(
            L,
            { hasCoaching: !0, coachingOpen: !0 },
            l.a.createElement(
              I,
              {
                stageName: 'Needs Analysis',
                coachingId: 'path-coaching-2',
                hasCoaching: !0,
                coachingOpen: !0,
                hasOverflow: !0
              },
              l.a.createElement(M, {
                label: 'Prospecting',
                stepState: ['complete'],
                index: 55
              }),
              l.a.createElement(M, {
                label: 'Qualification',
                stepState: ['complete'],
                index: 56
              }),
              l.a.createElement(M, {
                label: 'Needs Analysis',
                stepState: ['active', 'current'],
                index: 57
              }),
              l.a.createElement(M, {
                label: 'Value Proposition',
                stepState: ['incomplete'],
                index: 58
              }),
              l.a.createElement(M, {
                label: 'Id. Decision Maker',
                stepState: ['incomplete'],
                index: 59
              }),
              l.a.createElement(M, {
                label: 'Perception Analysis',
                stepState: ['incomplete'],
                index: 60
              }),
              l.a.createElement(M, {
                label: 'Proposal / Pricing',
                stepState: ['incomplete'],
                index: 61
              }),
              l.a.createElement(M, {
                label: 'Negotiation / Review',
                stepState: ['incomplete'],
                index: 62
              }),
              l.a.createElement(M, {
                label: 'Closed',
                stepState: ['incomplete'],
                index: 63
              })
            ),
            l.a.createElement(D, {
              coachingId: 'path-coaching-2',
              labelledBy: 'path-57'
            })
          )
        );
      },
      ae = function() {
        return l.a.createElement(
          'div',
          { className: 'slds-region_small', style: { width: '360px' } },
          l.a.createElement(
            L,
            { hasCoaching: !0, coachingOpen: !0 },
            l.a.createElement(
              I,
              {
                stageName: 'Needs Analysis',
                coachingId: 'path-coaching-3',
                hasOverflow: !0,
                hasCoaching: !0,
                coachingOpen: !0
              },
              l.a.createElement(M, {
                label: 'Prospecting',
                stepState: ['complete'],
                index: 64
              }),
              l.a.createElement(M, {
                label: 'Qualification',
                stepState: ['complete'],
                index: 65
              }),
              l.a.createElement(M, {
                label: 'Needs Analysis',
                stepState: ['active', 'current'],
                index: 66
              }),
              l.a.createElement(M, {
                label: 'Value Proposition',
                stepState: ['incomplete'],
                index: 67
              }),
              l.a.createElement(M, {
                label: 'Id. Decision Maker',
                stepState: ['incomplete'],
                index: 68
              }),
              l.a.createElement(M, {
                label: 'Perception Analysis',
                stepState: ['incomplete'],
                index: 69
              }),
              l.a.createElement(M, {
                label: 'Proposal / Pricing',
                stepState: ['incomplete'],
                index: 70
              }),
              l.a.createElement(M, {
                label: 'Negotiation / Review',
                stepState: ['incomplete'],
                index: 71
              }),
              l.a.createElement(M, {
                label: 'Closed',
                stepState: ['incomplete'],
                index: 72
              })
            ),
            l.a.createElement(D, {
              coachingId: 'path-coaching-3',
              labelledBy: 'path-66'
            })
          )
        );
      },
      ne = l.a.createElement(G, null),
      le = [
        {
          id: 'later-stage',
          label: 'In a later stage',
          element: l.a.createElement(J, null)
        },
        {
          id: 'different-stage-selected',
          label: 'With different stage selected',
          element: l.a.createElement(V, null)
        },
        {
          id: 'with-visible-tooltip',
          label: 'With visible tooltip',
          element: l.a.createElement(K, null)
        },
        {
          id: 'with-coaching',
          label: 'With coaching available',
          element: l.a.createElement(Q, null)
        },
        {
          id: 'different-coaching',
          label: 'With different stage selected - with coaching',
          element: l.a.createElement(X, null)
        },
        { id: 'lost', label: 'Lost', element: l.a.createElement(Y, null) },
        { id: 'won', label: 'Won', element: l.a.createElement($, null) },
        {
          id: 'with-overflow',
          label: 'Path with overflow',
          element: l.a.createElement(Z, null)
        },
        {
          id: 'medium',
          label: 'Medium viewport',
          element: l.a.createElement(ee, null)
        },
        {
          id: 'medium-coaching',
          label: 'Medium viewport with coaching',
          element: l.a.createElement(te, null)
        },
        {
          id: 'small-coaching',
          label: 'Small viewport',
          element: l.a.createElement(ae, null)
        },
        {
          id: 'mobile-default',
          label: 'Mobile: default',
          element: l.a.createElement(v, null, l.a.createElement(G, null))
        }
      ],
      ie = a(33),
      oe = i.c.code,
      re = i.c.em,
      ce = i.c.h2,
      se = i.c.h3,
      pe = i.c.h4,
      ue = i.c.li,
      de = i.c.p,
      me = i.c.table,
      he = i.c.tbody,
      fe = i.c.td,
      be = i.c.th,
      ge = i.c.thead,
      ye = i.c.tr,
      Ee = i.c.ul,
      ve = function() {
        return Object(n.createElement)(
          i.b,
          {},
          Object(n.createElement)(
            'div',
            { className: 'lead doc' },
            'The Path communicates to the user the progress of a particular process.'
          ),
          Object(n.createElement)(
            o.a,
            { exampleOnly: !0 },
            Object(r.e)(le, 'later-stage')
          ),
          ce({ id: 'About-Path' }, 'About Path'),
          se({ id: 'Accessibility' }, 'Accessibility'),
          de(
            {},
            "This component importantly changes role depending on what state it is in. If a Path comes with Stage Coaching information, this pattern lends itself perfectly to being a traditional Tab Set. As you navigate the Path Stages, it's associated content changes with it."
          ),
          de(
            {},
            "On the other hand, if a Path doesn't have Path Stage Coaching information, we can no longer use the Tab Set role, as we would effectively be misleading our users because each Tab has no associated content. This may lead to users trying to find absent content. In this situation, this component is much more suited to being a Listbox component."
          ),
          de(
            {},
            'The markup structure is identical, just some attributes change their values.'
          ),
          me(
            {},
            ge(
              {},
              ye(
                {},
                be({}, 'DOM Node'),
                be({}, 'Without Coaching'),
                be({}, 'With Coaching')
              )
            ),
            he(
              {},
              ye(
                {},
                fe({}, '.slds-path__nav'),
                fe({}, 'role="listbox"'),
                fe({}, 'role="tabset"')
              ),
              ye(
                {},
                fe({}, '.slds-path__link'),
                fe({}, 'role="option"'),
                fe({}, 'role="tab"')
              )
            )
          ),
          pe({ id: 'Without-Coaching' }, 'Without Coaching'),
          Ee(
            {},
            ue(
              {},
              oe({}, 'aria-orientation="horizontal"'),
              ' should be applied to the ',
              oe({}, 'slds-path__nav'),
              ' element to indicate to the screen reader to use horizontal navigation'
            ),
            ue(
              {},
              oe({}, 'aria-selected="true"'),
              ' should be applied to the selected Stage of the Path as you navigate through the Stages'
            )
          ),
          pe({ id: 'With-Coaching' }, 'With Coaching'),
          Ee(
            {},
            ue(
              {},
              'When the Path Stage Coaching is not visible, ',
              oe({}, 'aria-expanded="false"'),
              ' should be set on each ',
              oe({}, 'slds-path__link'),
              ' Tab'
            ),
            ue(
              {},
              'When the Path Stage Coaching is visible, ',
              oe({}, 'aria-expanded'),
              ' should be set to ',
              oe({}, 'true')
            ),
            ue(
              {},
              oe({}, 'aria-selected="true"'),
              ' is used to describe the currently active ',
              oe({}, 'slds-path__link'),
              ' Tab, not the Stage the Path is currently set to'
            )
          ),
          se({ id: 'Keyboard-Navigation' }, 'Keyboard Navigation'),
          Ee(
            {},
            ue(
              {},
              'For both with and without Path Stage Coaching variants, the following keyboard navigation applies'
            ),
            ue(
              {},
              oe({}, 'left'),
              ' and ',
              oe({}, 'right'),
              ' arrow keys move focus ',
              re({}, 'and'),
              ' selection, with ',
              oe({}, 'aria-selected="true"')
            )
          ),
          se({ id: 'Mobile' }, 'Mobile'),
          Object(n.createElement)(ie.a, {
            patternSpecificText:
              'elements of path will have an increased size to accommodate tapping with a finger instead of the more precise mouse cursor'
          }),
          Object(n.createElement)(
            o.a,
            { frameOnly: !0 },
            Object(r.e)(le, 'later-stage')
          ),
          ce({ id: 'Examples' }, 'Examples'),
          se({ id: 'Base' }, 'Base'),
          Object(n.createElement)(o.a, null, ne),
          se({ id: 'In-a-later-stage' }, 'In a later stage'),
          Object(n.createElement)(o.a, null, Object(r.e)(le, 'later-stage')),
          se(
            { id: 'With-different-stage-selected' },
            'With different stage selected'
          ),
          Object(n.createElement)(
            o.a,
            null,
            Object(r.e)(le, 'different-stage-selected')
          ),
          se({ id: 'With-visible-tooltip' }, 'With visible tooltip'),
          Object(n.createElement)(
            o.a,
            { demoStyles: 'min-height: 5rem;' },
            Object(r.e)(le, 'with-visible-tooltip')
          ),
          se({ id: 'With-coaching-available' }, 'With coaching available'),
          Object(n.createElement)(o.a, null, Object(r.e)(le, 'with-coaching')),
          se(
            { id: 'With-different-stage-selected-with-coaching' },
            'With different stage selected - with coaching'
          ),
          Object(n.createElement)(
            o.a,
            null,
            Object(r.e)(le, 'different-coaching')
          ),
          se({ id: 'Lost' }, 'Lost'),
          Object(n.createElement)(o.a, null, Object(r.e)(le, 'lost')),
          se({ id: 'Won' }, 'Won'),
          Object(n.createElement)(o.a, null, Object(r.e)(le, 'won')),
          se({ id: 'Path-with-overflow' }, 'Path with overflow'),
          Object(n.createElement)(o.a, null, Object(r.e)(le, 'with-overflow')),
          se({ id: 'Layout-overrides' }, 'Layout overrides'),
          de(
            {},
            'When the Path needs to be placed in a more narrow column on desktop (between 360px and 564px) the class ',
            oe({}, '.slds-region_small'),
            ' should be placed on the container so it can adapt. If the container is between 565px and 1280px, the class ',
            oe({}, '.slds-region_medium'),
            ' should be applied.'
          ),
          pe({ id: 'Medium-layout' }, 'Medium layout'),
          de(
            {},
            'With the class ',
            oe({}, '.slds-region_medium'),
            ' applied to the container.'
          ),
          Object(n.createElement)(o.a, null, Object(r.e)(le, 'medium')),
          pe(
            { id: 'Medium-layout-with-coaching' },
            'Medium layout with coaching'
          ),
          de(
            {},
            'With the class ',
            oe({}, '.slds-region_medium'),
            ' applied to the container.'
          ),
          Object(n.createElement)(
            o.a,
            null,
            Object(r.e)(le, 'medium-coaching')
          ),
          pe({ id: 'Small-layout' }, 'Small layout'),
          de(
            {},
            'With the class ',
            oe({}, '.slds-region_small'),
            ' applied to the container.'
          ),
          Object(n.createElement)(o.a, null, Object(r.e)(le, 'small-coaching'))
        );
      },
      Se = function() {
        return Object(i.a)(ve());
      };
  }
});