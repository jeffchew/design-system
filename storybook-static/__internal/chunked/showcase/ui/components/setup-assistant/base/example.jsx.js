var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/setup-assistant/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, s, o = t[0], l = t[1], c = t[2], p = 0, m = [];
      p < o.length;
      p++
    )
      (s = o[p]),
        Object.prototype.hasOwnProperty.call(a, s) && a[s] && m.push(a[s][0]),
        (a[s] = 0);
    for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
    for (u && u(t); m.length; ) m.shift()();
    return i.push.apply(i, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r = !0, o = 1; o < n.length; o++) {
        var l = n[o];
        0 !== a[l] && (r = !1);
      }
      r && (i.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = {
      138: 0,
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
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.m = e),
    (s.c = r),
    (s.d = function(e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
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
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          s.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
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
  var o = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    l = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var c = 0; c < o.length; c++) t(o[c]);
  var u = l;
  return i.push([237, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  237: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'states', function() {
        return W;
      }),
      n.d(t, 'examples', function() {
        return H;
      });
    var r = n(0),
      a = n.n(r),
      i = n(2),
      s = n.n(i),
      o = n(6),
      l = n(56),
      c = n(1),
      u = n.n(c),
      p = n(9),
      m = n(13),
      d = n(76),
      f = n(45);
    function y(e) {
      return (y =
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
    function b(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function g(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function h(e, t) {
      return (h =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function E(e, t) {
      return !t || ('object' !== y(t) && 'function' != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function v() {
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
    var S = (function(e) {
      !(function(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          t && h(e, t);
      })(l, e);
      var t,
        n,
        r,
        i,
        o = ((t = l),
        function() {
          var e,
            n = _(t);
          if (v()) {
            var r = _(this).constructor;
            e = Reflect.construct(n, arguments, r);
          } else e = n.apply(this, arguments);
          return E(this, e);
        });
      function l() {
        return b(this, l), o.apply(this, arguments);
      }
      return (
        (n = l),
        (r = [
          {
            key: 'render',
            value: function() {
              var e = this.props,
                t = e.title,
                n = e.description,
                r = e.action,
                i = e.duration,
                o = e.stepProgress,
                l = e.isActiveStep,
                c = e.referenceId,
                u = e.isOpen,
                y =
                  r &&
                  ('button' === r.type
                    ? a.a.createElement(
                        m.Button,
                        { isOutlineBrand: !0 },
                        r.title
                      )
                    : 'toggle' === r.type
                    ? a.a.createElement(d.CheckboxToggle, {
                        title: r.title,
                        isBare: !0,
                        checked: r.checked
                      })
                    : a.a.createElement(
                        'a',
                        { href: 'javascript:void(0);' },
                        r.title
                      )),
                b =
                  o &&
                  (o.isComplete
                    ? a.a.createElement(
                        f.a,
                        {
                          className: 'slds-progress-ring_large',
                          percent: 100,
                          isComplete: !0
                        },
                        a.a.createElement(p.UtilityIcon, {
                          symbol: 'check',
                          title: 'Complete',
                          assistiveText: 'Complete'
                        })
                      )
                    : a.a.createElement(
                        f.a,
                        {
                          className: 'slds-progress-ring_large',
                          percent: l ? o.percentage : 0,
                          isActiveStep: l,
                          isFilling: !0
                        },
                        o.number
                      )),
                g = a.a.createElement(
                  'div',
                  { className: 'slds-media' },
                  a.a.createElement(
                    'div',
                    {
                      className:
                        'slds-setup-assistant__step-summary-content slds-media__body'
                    },
                    a.a.createElement(
                      'h3',
                      {
                        className:
                          'slds-setup-assistant__step-summary-title slds-text-heading_small'
                      },
                      c
                        ? a.a.createElement(
                            m.Button,
                            {
                              className: 'slds-button_reset',
                              'aria-controls': c,
                              'aria-expanded': u ? 'true' : 'false'
                            },
                            t
                          )
                        : t
                    ),
                    a.a.createElement('p', null, n)
                  ),
                  a.a.createElement(
                    'div',
                    {
                      className: 'slds-media__figure slds-media__figure_reverse'
                    },
                    y,
                    i &&
                      a.a.createElement(
                        'p',
                        {
                          className: s()(
                            'slds-text-align_right',
                            'slds-text-color_weak',
                            { 'slds-p-top_medium': r }
                          )
                        },
                        i
                      )
                  )
                );
              return a.a.createElement(
                'div',
                { className: 'slds-setup-assistant__step-summary' },
                o
                  ? a.a.createElement(
                      'div',
                      { className: 'slds-media' },
                      a.a.createElement(
                        'div',
                        { className: 'slds-media__figure' },
                        b
                      ),
                      a.a.createElement(
                        'div',
                        { className: 'slds-media__body slds-m-top_x-small' },
                        g
                      )
                    )
                  : g
              );
            }
          }
        ]) && g(n.prototype, r),
        i && g(n, i),
        l
      );
    })(a.a.Component);
    (S.propTypes = {
      title: u.a.string.isRequired,
      description: u.a.string.isRequired,
      action: u.a.object,
      duration: u.a.string,
      stepProgress: u.a.object,
      isActiveStep: u.a.bool
    }),
      (S.defaultProps = {
        title: 'Configure user settings for this org',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      });
    var O = S,
      P = n(86),
      x = n(103);
    function C(e) {
      return (C =
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
    function w(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function k(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function j(e, t) {
      return (j =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function N(e, t) {
      return !t || ('object' !== C(t) && 'function' != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function T() {
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
    var D = [
        {
          complete: !0,
          title: 'Turn on Lightning for all users.',
          action: {
            type: 'toggle',
            title: 'Turn on Lightning for all users',
            checked: !0
          }
        },
        {
          active: !0,
          title:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          action: { type: 'link', title: 'View in Trailhead' }
        },
        {
          title: 'Lorem ipsum dolor sit amet, lorem ipsum dolor.',
          action: { type: 'button', title: 'Add Users' }
        }
      ],
      L = function(e) {
        return e.map(function(e, t) {
          return a.a.createElement(
            P.Step,
            {
              key: 'progress-step-'.concat(t),
              done: e.complete,
              hasSuccessMarker: e.complete,
              active: e.active,
              assistiveText: e.title
            },
            a.a.createElement(
              'div',
              { className: 'slds-size_3-of-4' },
              e.title
            ),
            a.a.createElement(
              'div',
              { className: 'slds-grid slds-grid_align-end slds-size_1-of-4' },
              (n = e.action) && 'button' === n.type
                ? a.a.createElement(m.Button, { isOutlineBrand: !0 }, n.title)
                : 'toggle' === n.type
                ? a.a.createElement(d.CheckboxToggle, {
                    title: n.title,
                    isBare: !0,
                    checked: n.checked
                  })
                : a.a.createElement(
                    'a',
                    { href: 'javascript:void(0);' },
                    n.title
                  )
            )
          );
          var n;
        });
      },
      R = (function(e) {
        !(function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && j(e, t);
        })(l, e);
        var t,
          n,
          r,
          i,
          o = ((t = l),
          function() {
            var e,
              n = A(t);
            if (T()) {
              var r = A(this).constructor;
              e = Reflect.construct(n, arguments, r);
            } else e = n.apply(this, arguments);
            return N(this, e);
          });
        function l() {
          return w(this, l), o.apply(this, arguments);
        }
        return (
          (n = l),
          (r = [
            {
              key: 'render',
              value: function() {
                var e = s()(
                  'slds-setup-assistant__step-detail',
                  this.props.className
                );
                return a.a.createElement(
                  'div',
                  { className: e },
                  a.a.createElement(
                    P.Progress,
                    { value: '50', hasBorders: !0, hasSuccessBar: !0 },
                    L(D)
                  ),
                  a.a.createElement(
                    x.ScopedNotificationThemed,
                    { theme: 'light' },
                    a.a.createElement(
                      'p',
                      null,
                      'It looks as if duplicates exist for this lead.',
                      ' ',
                      a.a.createElement(
                        'a',
                        { href: 'javascript:void(0);' },
                        'View Duplicates.'
                      )
                    )
                  )
                );
              }
            }
          ]) && k(n.prototype, r),
          i && k(n, i),
          l
        );
      })(a.a.Component);
    R.propTypes = { className: u.a.string };
    var B = R,
      I = (n(105),
      [
        {
          title: 'Add Users to Your Org',
          description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor.',
          action: { type: 'button', title: 'Add Users' },
          duration: '4 mins',
          stepProgress: { isComplete: !0, number: '1' }
        },
        {
          title: 'Create Profiles for Your Users',
          description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor.',
          action: { type: 'button', title: 'Add Profiles' },
          stepProgress: { isComplete: !1, number: '2', percentage: 33 },
          isActiveStep: !0,
          isOpen: !0
        },
        {
          title: 'Learn How to Use Profiles to control Visibility',
          description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor.',
          action: { type: 'link', title: 'View on Trailhead' },
          duration: '15 mins',
          stepProgress: { isComplete: !0, number: '3', percentage: '0' }
        },
        {
          title: 'Turn on tracking for profiles',
          description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor.',
          action: { type: 'toggle', title: 'Turn on tracking for profiles' },
          stepProgress: { isComplete: !1, number: '4', percentage: '0' }
        },
        {
          title: 'Setup Einstein Visibility for Admins',
          description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor.',
          action: { type: 'link', title: 'Watch Video' },
          stepProgress: { isComplete: !1, number: '5', percentage: '0' }
        }
      ]),
      U = function(e) {
        return a.a.createElement(
          'li',
          { className: 'slds-setup-assistant__item' },
          a.a.createElement(
            'article',
            { className: 'slds-setup-assistant__step', key: e.key },
            e.children
          )
        );
      },
      q = function(e) {
        return a.a.createElement(
          'ol',
          { className: 'slds-setup-assistant' },
          e.children
        );
      },
      V = function(e) {
        var t = e.isBase,
          n = e.stepsHaveProgress,
          r = e.stepsAreExpandable;
        return a.a.createElement(
          q,
          null,
          t &&
            (function(e, t) {
              return e.map(function(e, n) {
                return a.a.createElement(
                  U,
                  {
                    key: 'base-step-'
                      .concat(e.title, '-')
                      .concat(t, '-')
                      .concat(n)
                  },
                  a.a.createElement(O, {
                    title: e.title,
                    stepProgress: t && e.stepProgress,
                    action: e.action,
                    duration: e.duration
                  })
                );
              });
            })(I, n),
          r &&
            I.map(function(e, t) {
              return a.a.createElement(
                U,
                { key: 'expand-step-'.concat(e.title, '-').concat(t) },
                a.a.createElement(
                  l.SummaryDetail,
                  { className: s()({ 'slds-is-open': e.isOpen }) },
                  a.a.createElement(l.SummaryDetailAction, {
                    className: 'slds-m-top_x-small',
                    referenceId: 'step-'.concat(t, '-summary-action'),
                    isOpen: e.isOpen,
                    summaryTitle: e.title
                  }),
                  a.a.createElement(
                    'div',
                    { className: 'slds-container_fluid' },
                    a.a.createElement(
                      l.SummaryDetailTitle,
                      null,
                      a.a.createElement(O, {
                        title: e.title,
                        isActiveStep: e.isActiveStep,
                        stepProgress: e.stepProgress,
                        duration: e.duration || '10 mins',
                        referenceId: 'step-'.concat(t, '-summary-action'),
                        isOpen: e.isOpen
                      })
                    ),
                    a.a.createElement(
                      l.SummaryDetailContent,
                      {
                        referenceId: 'step-'.concat(t, '-summary-action'),
                        isOpen: e.isOpen
                      },
                      a.a.createElement(B, null)
                    )
                  )
                )
              );
            })
        );
      },
      M = function(e) {
        var t = e.isOpen,
          n = e.title,
          r = e.isActiveStep,
          i = e.stepProgress,
          c = e.duration,
          u = o.c.uniqueId('setup-assistant-step-'),
          p = ''.concat(u, '-action');
        return a.a.createElement(
          U,
          null,
          a.a.createElement(
            l.SummaryDetail,
            { className: s()({ 'slds-is-open': t }) },
            a.a.createElement(l.SummaryDetailAction, {
              className: 'slds-m-top_x-small',
              referenceId: p,
              isOpen: t,
              summaryTitle: n
            }),
            a.a.createElement(
              'div',
              null,
              a.a.createElement(
                l.SummaryDetailTitle,
                null,
                a.a.createElement(O, {
                  title: n,
                  isActiveStep: r,
                  stepProgress: i,
                  duration: c || '10 mins',
                  referenceId: p,
                  isOpen: t
                })
              ),
              a.a.createElement(
                l.SummaryDetailContent,
                { referenceId: p, isOpen: t },
                a.a.createElement(B, null)
              )
            )
          )
        );
      },
      W = ((t.default = a.a.createElement(
        q,
        null,
        a.a.createElement(U, null, a.a.createElement(O, null))
      )),
      [
        {
          id: 'with-button-action',
          label: 'With Button Action',
          element: a.a.createElement(
            q,
            null,
            a.a.createElement(
              U,
              null,
              a.a.createElement(O, {
                action: { type: 'button', title: 'Add Users' },
                duration: '5 min'
              })
            )
          )
        },
        {
          id: 'with-link-action',
          label: 'With Link Action',
          element: a.a.createElement(
            q,
            null,
            a.a.createElement(
              U,
              null,
              a.a.createElement(O, {
                action: { type: 'link', title: 'View on Trailhead' }
              })
            )
          )
        },
        {
          id: 'with-toggle-action',
          label: 'With Toggle Action',
          element: a.a.createElement(
            q,
            null,
            a.a.createElement(
              U,
              null,
              a.a.createElement(O, {
                action: {
                  type: 'toggle',
                  title: 'Configure user settings for this org'
                }
              })
            )
          )
        },
        {
          id: 'with-step-number',
          label: 'With Step Number',
          element: a.a.createElement(
            q,
            null,
            a.a.createElement(
              U,
              null,
              a.a.createElement(O, {
                stepProgress: { isComplete: !1, number: '3' },
                action: { type: 'button', title: 'Add Users' },
                duration: '5 min'
              })
            )
          )
        },
        {
          id: 'completed',
          label: 'Completed',
          element: a.a.createElement(
            q,
            null,
            a.a.createElement(
              U,
              null,
              a.a.createElement(O, {
                stepProgress: { isComplete: !0, number: '2' },
                action: { type: 'link', title: 'View on Trailhead' },
                duration: '10 min'
              })
            )
          )
        },
        {
          id: 'closed-expandable-step',
          label: 'Closed Expandable Step',
          element: a.a.createElement(
            q,
            null,
            a.a.createElement(M, {
              title: 'Configure user settings for this org',
              stepProgress: { isComplete: !1, number: '1' },
              duration: '5 min'
            })
          )
        },
        {
          id: 'open-expandable-step',
          label: 'Open Expandable Step',
          element: a.a.createElement(
            q,
            null,
            a.a.createElement(M, {
              title: 'Configure user settings for this org',
              stepProgress: { isComplete: !1, number: '1' },
              duration: '5 min',
              isOpen: !0
            })
          )
        },
        {
          id: 'open-in-progress-expandable-step',
          label: 'Open, In Progress Expandable Step',
          element: a.a.createElement(
            q,
            null,
            a.a.createElement(M, {
              title: 'Configure user settings for this org',
              stepProgress: { isComplete: !1, number: '1', percentage: 33 },
              duration: '5 min',
              isOpen: !0,
              isActiveStep: !0
            })
          )
        },
        {
          id: 'open-expandable-step-completed',
          label: 'Completed Open Expandable Step',
          element: a.a.createElement(
            q,
            null,
            a.a.createElement(M, {
              title: 'Configure user settings for this org',
              stepProgress: { isComplete: !0, number: '1' },
              duration: '5 min',
              isOpen: !0
            })
          )
        }
      ]),
      H = [
        {
          id: 'consecutive-base-steps',
          label: 'Consecutive Base Steps',
          element: a.a.createElement(V, { isBase: !0 })
        },
        {
          id: 'consecutive-progress-steps',
          label: 'Consecutive Progress Steps',
          element: a.a.createElement(V, { isBase: !0, stepsHaveProgress: !0 })
        },
        {
          id: 'consecutive-expandable-steps',
          label: 'Consecutive Expandable Steps',
          element: a.a.createElement(V, { stepsAreExpandable: !0 })
        }
      ];
  }
});
