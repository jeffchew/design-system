var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/path/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, o, i = t[0], c = t[1], s = t[2], p = 0, f = [];
      p < i.length;
      p++
    )
      (o = i[p]),
        Object.prototype.hasOwnProperty.call(a, o) && a[o] && f.push(a[o][0]),
        (a[o] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    for (u && u(t); f.length; ) f.shift()();
    return l.push.apply(l, s || []), n();
  }
  function n() {
    for (var e, t = 0; t < l.length; t++) {
      for (var n = l[t], r = !0, i = 1; i < n.length; i++) {
        var c = n[i];
        0 !== a[c] && (r = !1);
      }
      r && (l.splice(t--, 1), (e = o((o.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = {
      113: 0,
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
    l = [];
  function o(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.m = e),
    (o.c = r),
    (o.d = function(e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
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
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          o.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
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
  var i = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    c = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var s = 0; s < i.length; s++) t(i[s]);
  var u = c;
  return l.push([242, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  102: function(e, t, n) {
    'use strict';
    e.exports = n(156);
  },
  156: function(e, t, n) {
    'use strict';
    /** @license React v16.13.1
     * react-dom-server.browser.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ function r(e) {
      return (r =
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
    var a = n(157),
      l = n(0);
    function o(e) {
      for (
        var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
          n = 1;
        n < arguments.length;
        n++
      )
        t += '&args[]=' + encodeURIComponent(arguments[n]);
      return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
      );
    }
    var i = 'function' == typeof Symbol && Symbol.for,
      c = i ? Symbol.for('react.portal') : 60106,
      s = i ? Symbol.for('react.fragment') : 60107,
      u = i ? Symbol.for('react.strict_mode') : 60108,
      p = i ? Symbol.for('react.profiler') : 60114,
      f = i ? Symbol.for('react.provider') : 60109,
      d = i ? Symbol.for('react.context') : 60110,
      h = i ? Symbol.for('react.concurrent_mode') : 60111,
      m = i ? Symbol.for('react.forward_ref') : 60112,
      y = i ? Symbol.for('react.suspense') : 60113,
      b = i ? Symbol.for('react.suspense_list') : 60120,
      g = i ? Symbol.for('react.memo') : 60115,
      v = i ? Symbol.for('react.lazy') : 60116,
      x = i ? Symbol.for('react.block') : 60121,
      E = i ? Symbol.for('react.fundamental') : 60117,
      S = i ? Symbol.for('react.scope') : 60119;
    function w(e) {
      if (null == e) return null;
      if ('function' == typeof e) return e.displayName || e.name || null;
      if ('string' == typeof e) return e;
      switch (e) {
        case s:
          return 'Fragment';
        case c:
          return 'Portal';
        case p:
          return 'Profiler';
        case u:
          return 'StrictMode';
        case y:
          return 'Suspense';
        case b:
          return 'SuspenseList';
      }
      if ('object' === r(e))
        switch (e.$$typeof) {
          case d:
            return 'Context.Consumer';
          case f:
            return 'Context.Provider';
          case m:
            var t = e.render;
            return (
              (t = t.displayName || t.name || ''),
              e.displayName ||
                ('' !== t ? 'ForwardRef(' + t + ')' : 'ForwardRef')
            );
          case g:
            return w(e.type);
          case x:
            return w(e.render);
          case v:
            if ((e = 1 === e._status ? e._result : null)) return w(e);
        }
      return null;
    }
    var _ = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    _.hasOwnProperty('ReactCurrentDispatcher') ||
      (_.ReactCurrentDispatcher = { current: null }),
      _.hasOwnProperty('ReactCurrentBatchConfig') ||
        (_.ReactCurrentBatchConfig = { suspense: null });
    var k = {};
    function O(e, t) {
      for (var n = 0 | e._threadCount; n <= t; n++)
        (e[n] = e._currentValue2), (e._threadCount = n + 1);
    }
    for (var C = new Uint16Array(16), N = 0; 15 > N; N++) C[N] = N + 1;
    C[15] = 0;
    var P = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      D = Object.prototype.hasOwnProperty,
      j = {},
      I = {};
    function R(e) {
      return (
        !!D.call(I, e) ||
        (!D.call(j, e) && (P.test(e) ? (I[e] = !0) : ((j[e] = !0), !1)))
      );
    }
    function F(e, t, n, a) {
      if (
        null == t ||
        (function(e, t, n, a) {
          if (null !== n && 0 === n.type) return !1;
          switch (r(t)) {
            case 'function':
            case 'symbol':
              return !0;
            case 'boolean':
              return (
                !a &&
                (null !== n
                  ? !n.acceptsBooleans
                  : 'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
                    'aria-' !== e)
              );
            default:
              return !1;
          }
        })(e, t, n, a)
      )
        return !0;
      if (a) return !1;
      if (null !== n)
        switch (n.type) {
          case 3:
            return !t;
          case 4:
            return !1 === t;
          case 5:
            return isNaN(t);
          case 6:
            return isNaN(t) || 1 > t;
        }
      return !1;
    }
    function T(e, t, n, r, a, l) {
      (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = a),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = l);
    }
    var M = {};
    'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
      .split(' ')
      .forEach(function(e) {
        M[e] = new T(e, 0, !1, e, null, !1);
      }),
      [
        ['acceptCharset', 'accept-charset'],
        ['className', 'class'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv']
      ].forEach(function(e) {
        var t = e[0];
        M[t] = new T(t, 1, !1, e[1], null, !1);
      }),
      ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function(
        e
      ) {
        M[e] = new T(e, 2, !1, e.toLowerCase(), null, !1);
      }),
      [
        'autoReverse',
        'externalResourcesRequired',
        'focusable',
        'preserveAlpha'
      ].forEach(function(e) {
        M[e] = new T(e, 2, !1, e, null, !1);
      }),
      'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
        .split(' ')
        .forEach(function(e) {
          M[e] = new T(e, 3, !1, e.toLowerCase(), null, !1);
        }),
      ['checked', 'multiple', 'muted', 'selected'].forEach(function(e) {
        M[e] = new T(e, 3, !0, e, null, !1);
      }),
      ['capture', 'download'].forEach(function(e) {
        M[e] = new T(e, 4, !1, e, null, !1);
      }),
      ['cols', 'rows', 'size', 'span'].forEach(function(e) {
        M[e] = new T(e, 6, !1, e, null, !1);
      }),
      ['rowSpan', 'start'].forEach(function(e) {
        M[e] = new T(e, 5, !1, e.toLowerCase(), null, !1);
      });
    var L = /[\-:]([a-z])/g;
    function z(e) {
      return e[1].toUpperCase();
    }
    'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
      .split(' ')
      .forEach(function(e) {
        var t = e.replace(L, z);
        M[t] = new T(t, 1, !1, e, null, !1);
      }),
      'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
        .split(' ')
        .forEach(function(e) {
          var t = e.replace(L, z);
          M[t] = new T(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1);
        }),
      ['xml:base', 'xml:lang', 'xml:space'].forEach(function(e) {
        var t = e.replace(L, z);
        M[t] = new T(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1);
      }),
      ['tabIndex', 'crossOrigin'].forEach(function(e) {
        M[e] = new T(e, 1, !1, e.toLowerCase(), null, !1);
      }),
      (M.xlinkHref = new T(
        'xlinkHref',
        1,
        !1,
        'xlink:href',
        'http://www.w3.org/1999/xlink',
        !0
      )),
      ['src', 'href', 'action', 'formAction'].forEach(function(e) {
        M[e] = new T(e, 1, !1, e.toLowerCase(), null, !0);
      });
    var A = /["'&<>]/;
    function U(e) {
      if ('boolean' == typeof e || 'number' == typeof e) return '' + e;
      e = '' + e;
      var t = A.exec(e);
      if (t) {
        var n,
          r = '',
          a = 0;
        for (n = t.index; n < e.length; n++) {
          switch (e.charCodeAt(n)) {
            case 34:
              t = '&quot;';
              break;
            case 38:
              t = '&amp;';
              break;
            case 39:
              t = '&#x27;';
              break;
            case 60:
              t = '&lt;';
              break;
            case 62:
              t = '&gt;';
              break;
            default:
              continue;
          }
          a !== n && (r += e.substring(a, n)), (a = n + 1), (r += t);
        }
        e = a !== n ? r + e.substring(a, n) : r;
      }
      return e;
    }
    function W(e, t) {
      var n,
        r = M.hasOwnProperty(e) ? M[e] : null;
      return (
        (n = 'style' !== e) &&
          (n =
            null !== r
              ? 0 === r.type
              : 2 < e.length &&
                ('o' === e[0] || 'O' === e[0]) &&
                ('n' === e[1] || 'N' === e[1])),
        n || F(e, t, r, !1)
          ? ''
          : null !== r
          ? ((e = r.attributeName),
            3 === (n = r.type) || (4 === n && !0 === t)
              ? e + '=""'
              : (r.sanitizeURL && (t = '' + t), e + '="' + U(t) + '"'))
          : R(e)
          ? e + '="' + U(t) + '"'
          : ''
      );
    }
    var V =
        'function' == typeof Object.is
          ? Object.is
          : function(e, t) {
              return (
                (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              );
            },
      q = null,
      B = null,
      H = null,
      $ = !1,
      G = !1,
      Z = null,
      J = 0;
    function Q() {
      if (null === q) throw Error(o(321));
      return q;
    }
    function X() {
      if (0 < J) throw Error(o(312));
      return { memoizedState: null, queue: null, next: null };
    }
    function K() {
      return (
        null === H
          ? null === B
            ? (($ = !1), (B = H = X()))
            : (($ = !0), (H = B))
          : null === H.next
          ? (($ = !1), (H = H.next = X()))
          : (($ = !0), (H = H.next)),
        H
      );
    }
    function Y(e, t, n, r) {
      for (; G; ) (G = !1), (J += 1), (H = null), (n = e(t, r));
      return (B = q = null), (J = 0), (H = Z = null), n;
    }
    function ee(e, t) {
      return 'function' == typeof t ? t(e) : t;
    }
    function te(e, t, n) {
      if (((q = Q()), (H = K()), $)) {
        var r = H.queue;
        if (((t = r.dispatch), null !== Z && void 0 !== (n = Z.get(r)))) {
          Z.delete(r), (r = H.memoizedState);
          do {
            (r = e(r, n.action)), (n = n.next);
          } while (null !== n);
          return (H.memoizedState = r), [r, t];
        }
        return [H.memoizedState, t];
      }
      return (
        (e =
          e === ee
            ? 'function' == typeof t
              ? t()
              : t
            : void 0 !== n
            ? n(t)
            : t),
        (H.memoizedState = e),
        (e = (e = H.queue = { last: null, dispatch: null }).dispatch = ne.bind(
          null,
          q,
          e
        )),
        [H.memoizedState, e]
      );
    }
    function ne(e, t, n) {
      if (!(25 > J)) throw Error(o(301));
      if (e === q)
        if (
          ((G = !0),
          (e = { action: n, next: null }),
          null === Z && (Z = new Map()),
          void 0 === (n = Z.get(t)))
        )
          Z.set(t, e);
        else {
          for (t = n; null !== t.next; ) t = t.next;
          t.next = e;
        }
    }
    function re() {}
    var ae = 0,
      le = {
        readContext: function(e) {
          var t = ae;
          return O(e, t), e[t];
        },
        useContext: function(e) {
          Q();
          var t = ae;
          return O(e, t), e[t];
        },
        useMemo: function(e, t) {
          if (((q = Q()), (t = void 0 === t ? null : t), null !== (H = K()))) {
            var n = H.memoizedState;
            if (null !== n && null !== t) {
              e: {
                var r = n[1];
                if (null === r) r = !1;
                else {
                  for (var a = 0; a < r.length && a < t.length; a++)
                    if (!V(t[a], r[a])) {
                      r = !1;
                      break e;
                    }
                  r = !0;
                }
              }
              if (r) return n[0];
            }
          }
          return (e = e()), (H.memoizedState = [e, t]), e;
        },
        useReducer: te,
        useRef: function(e) {
          q = Q();
          var t = (H = K()).memoizedState;
          return null === t ? ((e = { current: e }), (H.memoizedState = e)) : t;
        },
        useState: function(e) {
          return te(ee, e);
        },
        useLayoutEffect: function() {},
        useCallback: function(e) {
          return e;
        },
        useImperativeHandle: re,
        useEffect: re,
        useDebugValue: re,
        useResponder: function(e, t) {
          return { props: t, responder: e };
        },
        useDeferredValue: function(e) {
          return Q(), e;
        },
        useTransition: function() {
          return (
            Q(),
            [
              function(e) {
                e();
              },
              !1
            ]
          );
        }
      },
      oe = 'http://www.w3.org/1999/xhtml';
    function ie(e) {
      switch (e) {
        case 'svg':
          return 'http://www.w3.org/2000/svg';
        case 'math':
          return 'http://www.w3.org/1998/Math/MathML';
        default:
          return 'http://www.w3.org/1999/xhtml';
      }
    }
    var ce = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
      },
      se = a({ menuitem: !0 }, ce),
      ue = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
      },
      pe = ['Webkit', 'ms', 'Moz', 'O'];
    Object.keys(ue).forEach(function(e) {
      pe.forEach(function(t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ue[t] = ue[e]);
      });
    });
    var fe = /([A-Z])/g,
      de = /^ms-/,
      he = l.Children.toArray,
      me = _.ReactCurrentDispatcher,
      ye = { listing: !0, pre: !0, textarea: !0 },
      be = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
      ge = {},
      ve = {};
    var xe = Object.prototype.hasOwnProperty,
      Ee = {
        children: null,
        dangerouslySetInnerHTML: null,
        suppressContentEditableWarning: null,
        suppressHydrationWarning: null
      };
    function Se(e, t) {
      if (void 0 === e) throw Error(o(152, w(t) || 'Component'));
    }
    function we(e, t, n) {
      function i(l, i) {
        var c = i.prototype && i.prototype.isReactComponent,
          s = (function(e, t, n, a) {
            if (a && ('object' === r((a = e.contextType)) && null !== a))
              return O(a, n), a[n];
            if ((e = e.contextTypes)) {
              for (var l in ((n = {}), e)) n[l] = t[l];
              t = n;
            } else t = k;
            return t;
          })(i, t, n, c),
          u = [],
          p = !1,
          f = {
            isMounted: function() {
              return !1;
            },
            enqueueForceUpdate: function() {
              if (null === u) return null;
            },
            enqueueReplaceState: function(e, t) {
              (p = !0), (u = [t]);
            },
            enqueueSetState: function(e, t) {
              if (null === u) return null;
              u.push(t);
            }
          };
        if (c) {
          if (
            ((c = new i(l.props, s, f)),
            'function' == typeof i.getDerivedStateFromProps)
          ) {
            var d = i.getDerivedStateFromProps.call(null, l.props, c.state);
            null != d && (c.state = a({}, c.state, d));
          }
        } else if (
          ((q = {}),
          (c = i(l.props, s, f)),
          null == (c = Y(i, l.props, c, s)) || null == c.render)
        )
          return void Se((e = c), i);
        if (
          ((c.props = l.props),
          (c.context = s),
          (c.updater = f),
          void 0 === (f = c.state) && (c.state = f = null),
          'function' == typeof c.UNSAFE_componentWillMount ||
            'function' == typeof c.componentWillMount)
        )
          if (
            ('function' == typeof c.componentWillMount &&
              'function' != typeof i.getDerivedStateFromProps &&
              c.componentWillMount(),
            'function' == typeof c.UNSAFE_componentWillMount &&
              'function' != typeof i.getDerivedStateFromProps &&
              c.UNSAFE_componentWillMount(),
            u.length)
          ) {
            f = u;
            var h = p;
            if (((u = null), (p = !1), h && 1 === f.length)) c.state = f[0];
            else {
              d = h ? f[0] : c.state;
              var m = !0;
              for (h = h ? 1 : 0; h < f.length; h++) {
                var y = f[h];
                null !=
                  (y = 'function' == typeof y ? y.call(c, d, l.props, s) : y) &&
                  (m ? ((m = !1), (d = a({}, d, y))) : a(d, y));
              }
              c.state = d;
            }
          } else u = null;
        if (
          (Se((e = c.render()), i),
          'function' == typeof c.getChildContext &&
            'object' === r((l = i.childContextTypes)))
        ) {
          var b = c.getChildContext();
          for (var g in b)
            if (!(g in l)) throw Error(o(108, w(i) || 'Unknown', g));
        }
        b && (t = a({}, t, b));
      }
      for (; l.isValidElement(e); ) {
        var c = e,
          s = c.type;
        if ('function' != typeof s) break;
        i(c, s);
      }
      return { child: e, context: t };
    }
    var _e = (function() {
        function e(e, t) {
          l.isValidElement(e)
            ? e.type !== s
              ? (e = [e])
              : ((e = e.props.children),
                (e = l.isValidElement(e) ? [e] : he(e)))
            : (e = he(e)),
            (e = {
              type: null,
              domNamespace: oe,
              children: e,
              childIndex: 0,
              context: k,
              footer: ''
            });
          var n = C[0];
          if (0 === n) {
            var r = C,
              a = 2 * (n = r.length);
            if (!(65536 >= a)) throw Error(o(304));
            var i = new Uint16Array(a);
            for (i.set(r), (C = i)[0] = n + 1, r = n; r < a - 1; r++)
              C[r] = r + 1;
            C[a - 1] = 0;
          } else C[0] = C[n];
          (this.threadID = n),
            (this.stack = [e]),
            (this.exhausted = !1),
            (this.currentSelectValue = null),
            (this.previousWasTextNode = !1),
            (this.makeStaticMarkup = t),
            (this.suspenseDepth = 0),
            (this.contextIndex = -1),
            (this.contextStack = []),
            (this.contextValueStack = []);
        }
        var t = e.prototype;
        return (
          (t.destroy = function() {
            if (!this.exhausted) {
              (this.exhausted = !0), this.clearProviders();
              var e = this.threadID;
              (C[e] = C[0]), (C[0] = e);
            }
          }),
          (t.pushProvider = function(e) {
            var t = ++this.contextIndex,
              n = e.type._context,
              r = this.threadID;
            O(n, r);
            var a = n[r];
            (this.contextStack[t] = n),
              (this.contextValueStack[t] = a),
              (n[r] = e.props.value);
          }),
          (t.popProvider = function() {
            var e = this.contextIndex,
              t = this.contextStack[e],
              n = this.contextValueStack[e];
            (this.contextStack[e] = null),
              (this.contextValueStack[e] = null),
              this.contextIndex--,
              (t[this.threadID] = n);
          }),
          (t.clearProviders = function() {
            for (var e = this.contextIndex; 0 <= e; e--)
              this.contextStack[e][this.threadID] = this.contextValueStack[e];
          }),
          (t.read = function(e) {
            if (this.exhausted) return null;
            var t = ae;
            ae = this.threadID;
            var n = me.current;
            me.current = le;
            try {
              for (var r = [''], a = !1; r[0].length < e; ) {
                if (0 === this.stack.length) {
                  this.exhausted = !0;
                  var l = this.threadID;
                  (C[l] = C[0]), (C[0] = l);
                  break;
                }
                var i = this.stack[this.stack.length - 1];
                if (a || i.childIndex >= i.children.length) {
                  var c = i.footer;
                  if (
                    ('' !== c && (this.previousWasTextNode = !1),
                    this.stack.pop(),
                    'select' === i.type)
                  )
                    this.currentSelectValue = null;
                  else if (
                    null != i.type &&
                    null != i.type.type &&
                    i.type.type.$$typeof === f
                  )
                    this.popProvider(i.type);
                  else if (i.type === y) {
                    this.suspenseDepth--;
                    var s = r.pop();
                    if (a) {
                      a = !1;
                      var u = i.fallbackFrame;
                      if (!u) throw Error(o(303));
                      this.stack.push(u),
                        (r[this.suspenseDepth] += '\x3c!--$!--\x3e');
                      continue;
                    }
                    r[this.suspenseDepth] += s;
                  }
                  r[this.suspenseDepth] += c;
                } else {
                  var p = i.children[i.childIndex++],
                    d = '';
                  try {
                    d += this.render(p, i.context, i.domNamespace);
                  } catch (e) {
                    if (null != e && 'function' == typeof e.then)
                      throw Error(o(294));
                    throw e;
                  }
                  r.length <= this.suspenseDepth && r.push(''),
                    (r[this.suspenseDepth] += d);
                }
              }
              return r[0];
            } finally {
              (me.current = n), (ae = t);
            }
          }),
          (t.render = function(e, t, n) {
            if ('string' == typeof e || 'number' == typeof e)
              return '' === (n = '' + e)
                ? ''
                : this.makeStaticMarkup
                ? U(n)
                : this.previousWasTextNode
                ? '\x3c!-- --\x3e' + U(n)
                : ((this.previousWasTextNode = !0), U(n));
            if (
              ((e = (t = we(e, t, this.threadID)).child),
              (t = t.context),
              null === e || !1 === e)
            )
              return '';
            if (!l.isValidElement(e)) {
              if (null != e && null != e.$$typeof) {
                if ((n = e.$$typeof) === c) throw Error(o(257));
                throw Error(o(258, n.toString()));
              }
              return (
                (e = he(e)),
                this.stack.push({
                  type: null,
                  domNamespace: n,
                  children: e,
                  childIndex: 0,
                  context: t,
                  footer: ''
                }),
                ''
              );
            }
            var i = e.type;
            if ('string' == typeof i) return this.renderDOM(e, t, n);
            switch (i) {
              case u:
              case h:
              case p:
              case b:
              case s:
                return (
                  (e = he(e.props.children)),
                  this.stack.push({
                    type: null,
                    domNamespace: n,
                    children: e,
                    childIndex: 0,
                    context: t,
                    footer: ''
                  }),
                  ''
                );
              case y:
                throw Error(o(294));
            }
            if ('object' === r(i) && null !== i)
              switch (i.$$typeof) {
                case m:
                  q = {};
                  var x = i.render(e.props, e.ref);
                  return (
                    (x = Y(i.render, e.props, x, e.ref)),
                    (x = he(x)),
                    this.stack.push({
                      type: null,
                      domNamespace: n,
                      children: x,
                      childIndex: 0,
                      context: t,
                      footer: ''
                    }),
                    ''
                  );
                case g:
                  return (
                    (e = [l.createElement(i.type, a({ ref: e.ref }, e.props))]),
                    this.stack.push({
                      type: null,
                      domNamespace: n,
                      children: e,
                      childIndex: 0,
                      context: t,
                      footer: ''
                    }),
                    ''
                  );
                case f:
                  return (
                    (n = {
                      type: e,
                      domNamespace: n,
                      children: (i = he(e.props.children)),
                      childIndex: 0,
                      context: t,
                      footer: ''
                    }),
                    this.pushProvider(e),
                    this.stack.push(n),
                    ''
                  );
                case d:
                  (i = e.type), (x = e.props);
                  var w = this.threadID;
                  return (
                    O(i, w),
                    (i = he(x.children(i[w]))),
                    this.stack.push({
                      type: e,
                      domNamespace: n,
                      children: i,
                      childIndex: 0,
                      context: t,
                      footer: ''
                    }),
                    ''
                  );
                case E:
                  throw Error(o(338));
                case v:
                  switch (
                    ((function(e) {
                      if (-1 === e._status) {
                        e._status = 0;
                        var t = e._ctor;
                        (t = t()),
                          (e._result = t),
                          t.then(
                            function(t) {
                              0 === e._status &&
                                ((t = t.default),
                                (e._status = 1),
                                (e._result = t));
                            },
                            function(t) {
                              0 === e._status &&
                                ((e._status = 2), (e._result = t));
                            }
                          );
                      }
                    })((i = e.type)),
                    i._status)
                  ) {
                    case 1:
                      return (
                        (e = [
                          l.createElement(i._result, a({ ref: e.ref }, e.props))
                        ]),
                        this.stack.push({
                          type: null,
                          domNamespace: n,
                          children: e,
                          childIndex: 0,
                          context: t,
                          footer: ''
                        }),
                        ''
                      );
                    case 2:
                      throw i._result;
                    default:
                      throw Error(o(295));
                  }
                case S:
                  throw Error(o(343));
              }
            throw Error(o(130, null == i ? i : r(i), ''));
          }),
          (t.renderDOM = function(e, t, n) {
            var i = e.type.toLowerCase();
            if ((n === oe && ie(i), !ge.hasOwnProperty(i))) {
              if (!be.test(i)) throw Error(o(65, i));
              ge[i] = !0;
            }
            var c = e.props;
            if ('input' === i)
              c = a({ type: void 0 }, c, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: null != c.value ? c.value : c.defaultValue,
                checked: null != c.checked ? c.checked : c.defaultChecked
              });
            else if ('textarea' === i) {
              var s = c.value;
              if (null == s) {
                s = c.defaultValue;
                var u = c.children;
                if (null != u) {
                  if (null != s) throw Error(o(92));
                  if (Array.isArray(u)) {
                    if (!(1 >= u.length)) throw Error(o(93));
                    u = u[0];
                  }
                  s = '' + u;
                }
                null == s && (s = '');
              }
              c = a({}, c, { value: void 0, children: '' + s });
            } else if ('select' === i)
              (this.currentSelectValue =
                null != c.value ? c.value : c.defaultValue),
                (c = a({}, c, { value: void 0 }));
            else if ('option' === i) {
              u = this.currentSelectValue;
              var p = (function(e) {
                if (null == e) return e;
                var t = '';
                return (
                  l.Children.forEach(e, function(e) {
                    null != e && (t += e);
                  }),
                  t
                );
              })(c.children);
              if (null != u) {
                var f = null != c.value ? c.value + '' : p;
                if (((s = !1), Array.isArray(u))) {
                  for (var d = 0; d < u.length; d++)
                    if ('' + u[d] === f) {
                      s = !0;
                      break;
                    }
                } else s = '' + u === f;
                c = a({ selected: void 0, children: void 0 }, c, {
                  selected: s,
                  children: p
                });
              }
            }
            if ((s = c)) {
              if (
                se[i] &&
                (null != s.children || null != s.dangerouslySetInnerHTML)
              )
                throw Error(o(137, i, ''));
              if (null != s.dangerouslySetInnerHTML) {
                if (null != s.children) throw Error(o(60));
                if (
                  'object' !== r(s.dangerouslySetInnerHTML) ||
                  !('__html' in s.dangerouslySetInnerHTML)
                )
                  throw Error(o(61));
              }
              if (null != s.style && 'object' !== r(s.style))
                throw Error(o(62, ''));
            }
            for (E in ((s = c),
            (u = this.makeStaticMarkup),
            (p = 1 === this.stack.length),
            (f = '<' + e.type),
            s))
              if (xe.call(s, E)) {
                var h = s[E];
                if (null != h) {
                  if ('style' === E) {
                    d = void 0;
                    var m = '',
                      y = '';
                    for (d in h)
                      if (h.hasOwnProperty(d)) {
                        var b = 0 === d.indexOf('--'),
                          g = h[d];
                        if (null != g) {
                          if (b) var v = d;
                          else if (((v = d), ve.hasOwnProperty(v))) v = ve[v];
                          else {
                            var x = v
                              .replace(fe, '-$1')
                              .toLowerCase()
                              .replace(de, '-ms-');
                            v = ve[v] = x;
                          }
                          (m += y + v + ':'),
                            (y = d),
                            (m += b =
                              null == g || 'boolean' == typeof g || '' === g
                                ? ''
                                : b ||
                                  'number' != typeof g ||
                                  0 === g ||
                                  (ue.hasOwnProperty(y) && ue[y])
                                ? ('' + g).trim()
                                : g + 'px'),
                            (y = ';');
                        }
                      }
                    h = m || null;
                  }
                  d = null;
                  e: if (((b = i), (g = s), -1 === b.indexOf('-')))
                    b = 'string' == typeof g.is;
                  else
                    switch (b) {
                      case 'annotation-xml':
                      case 'color-profile':
                      case 'font-face':
                      case 'font-face-src':
                      case 'font-face-uri':
                      case 'font-face-format':
                      case 'font-face-name':
                      case 'missing-glyph':
                        b = !1;
                        break e;
                      default:
                        b = !0;
                    }
                  b
                    ? Ee.hasOwnProperty(E) ||
                      (d = R((d = E)) && null != h ? d + '="' + U(h) + '"' : '')
                    : (d = W(E, h)),
                    d && (f += ' ' + d);
                }
              }
            u || (p && (f += ' data-reactroot=""'));
            var E = f;
            (s = ''),
              ce.hasOwnProperty(i)
                ? (E += '/>')
                : ((E += '>'), (s = '</' + e.type + '>'));
            e: {
              if (null != (u = c.dangerouslySetInnerHTML)) {
                if (null != u.__html) {
                  u = u.__html;
                  break e;
                }
              } else if (
                'string' == typeof (u = c.children) ||
                'number' == typeof u
              ) {
                u = U(u);
                break e;
              }
              u = null;
            }
            return (
              null != u
                ? ((c = []),
                  ye.hasOwnProperty(i) && '\n' === u.charAt(0) && (E += '\n'),
                  (E += u))
                : (c = he(c.children)),
              (e = e.type),
              (n =
                null == n || 'http://www.w3.org/1999/xhtml' === n
                  ? ie(e)
                  : 'http://www.w3.org/2000/svg' === n && 'foreignObject' === e
                  ? 'http://www.w3.org/1999/xhtml'
                  : n),
              this.stack.push({
                domNamespace: n,
                type: i,
                children: c,
                childIndex: 0,
                context: t,
                footer: s
              }),
              (this.previousWasTextNode = !1),
              E
            );
          }),
          e
        );
      })(),
      ke = {
        renderToString: function(e) {
          e = new _e(e, !1);
          try {
            return e.read(1 / 0);
          } finally {
            e.destroy();
          }
        },
        renderToStaticMarkup: function(e) {
          e = new _e(e, !0);
          try {
            return e.read(1 / 0);
          } finally {
            e.destroy();
          }
        },
        renderToNodeStream: function() {
          throw Error(o(207));
        },
        renderToStaticNodeStream: function() {
          throw Error(o(208));
        },
        version: '16.13.1'
      };
    e.exports = ke.default || ke;
  },
  157: function(e, t, n) {
    'use strict';
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r =
        Object.getOwnPropertySymbols,
      a = Object.prototype.hasOwnProperty,
      l = Object.prototype.propertyIsEnumerable;
    function o(e) {
      if (null == e)
        throw new TypeError(
          'Object.assign cannot be called with null or undefined'
        );
      return Object(e);
    }
    e.exports = (function() {
      try {
        if (!Object.assign) return !1;
        var e = new String('abc');
        if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0]))
          return !1;
        for (var t = {}, n = 0; n < 10; n++)
          t['_' + String.fromCharCode(n)] = n;
        if (
          '0123456789' !==
          Object.getOwnPropertyNames(t)
            .map(function(e) {
              return t[e];
            })
            .join('')
        )
          return !1;
        var r = {};
        return (
          'abcdefghijklmnopqrst'.split('').forEach(function(e) {
            r[e] = e;
          }),
          'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
        );
      } catch (e) {
        return !1;
      }
    })()
      ? Object.assign
      : function(e, t) {
          for (var n, i, c = o(e), s = 1; s < arguments.length; s++) {
            for (var u in (n = Object(arguments[s])))
              a.call(n, u) && (c[u] = n[u]);
            if (r) {
              i = r(n);
              for (var p = 0; p < i.length; p++)
                l.call(n, i[p]) && (c[i[p]] = n[i[p]]);
            }
          }
          return c;
        };
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  242: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'states', function() {
        return ee;
      });
    var r = n(0),
      a = n.n(r),
      l = n(1),
      o = n.n(l),
      i = n(102),
      c = n.n(i);
    function s(e) {
      return (s =
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
    function u(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function p(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function f(e, t) {
      return (f =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function d(e, t) {
      return !t || ('object' !== s(t) && 'function' != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function h() {
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
    var y = (function(e) {
      !(function(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          t && f(e, t);
      })(i, e);
      var t,
        n,
        r,
        l,
        o = ((t = i),
        function() {
          var e,
            n = m(t);
          if (h()) {
            var r = m(this).constructor;
            e = Reflect.construct(n, arguments, r);
          } else e = n.apply(this, arguments);
          return d(this, e);
        });
      function i() {
        return u(this, i), o.apply(this, arguments);
      }
      return (
        (n = i),
        (r = [
          {
            key: 'render',
            value: function() {
              var e = c.a.renderToString(this._renderIframe());
              return a.a.createElement('iframe', {
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
              return a.a.createElement(
                'html',
                { lang: 'en', style: { backgroundColor: 'transparent' } },
                a.a.createElement(
                  'head',
                  null,
                  a.a.createElement('link', {
                    type: 'text/css',
                    rel: 'stylesheet',
                    href: '/assets/styles/slds-small.css'
                  })
                ),
                a.a.createElement('body', null, e)
              );
            }
          }
        ]) && p(n.prototype, r),
        l && p(n, l),
        i
      );
    })(a.a.Component);
    y.propTypes = { children: o.a.node };
    var b = y,
      g = n(54),
      v = n(2),
      x = n.n(v),
      E = n(13),
      S = n(4),
      w = n(8),
      _ = n(35);
    function k(e) {
      return (k =
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
    function O(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function C(e, t) {
      return (C =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function N(e, t) {
      return !t || ('object' !== k(t) && 'function' != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function P() {
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
    function D(e) {
      return (D = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var j = function(e) {
      return a.a.createElement(
        'div',
        {
          className: x()('slds-path', {
            'slds-path_has-coaching': e.hasCoaching,
            'slds-is-expanded': e.coachingOpen
          })
        },
        e.children
      );
    };
    (j.propTypes = { hasCoaching: o.a.bool, coachingOpen: o.a.bool }),
      (j.defaultProps = { hasCoaching: !1, coachingOpen: !1 });
    var I = function(e) {
      var t = e.hasCoaching,
        n = e.coachingOpen,
        r = e.hasOverflow,
        l = e.coachingId,
        o = e.stageName,
        i = e.actionButtonLabel;
      return a.a.createElement(
        'div',
        {
          className: x()('slds-grid slds-path__track', {
            'slds-has-overflow': r
          })
        },
        a.a.createElement(
          'div',
          { className: 'slds-grid slds-path__scroller-container' },
          t
            ? a.a.createElement(S.b, {
                symbol: 'chevronright',
                theme: 'neutral',
                className: x()('slds-path__trigger', {
                  'slds-path__trigger_open': n
                }),
                assistiveText: 'Show Details',
                title: 'Toggle Sales Coaching',
                'aria-expanded': n,
                'aria-controls': l
              })
            : null,
          a.a.createElement(
            'div',
            { className: 'slds-path__scroller', role: 'application' },
            a.a.createElement(
              'div',
              { className: 'slds-path__scroller_inner' },
              a.a.createElement(
                'ul',
                {
                  className: 'slds-path__nav',
                  role: 'listbox',
                  'aria-orientation': 'horizontal'
                },
                e.children
              ),
              r
                ? a.a.createElement(
                    'div',
                    { className: 'slds-path__scroll-controls' },
                    a.a.createElement(S.b, {
                      symbol: 'left',
                      theme: 'neutral',
                      assistiveText: 'Scroll left',
                      title: 'Scroll left',
                      tabIndex: '-1'
                    }),
                    a.a.createElement(S.b, {
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
        a.a.createElement(
          'div',
          { className: 'slds-grid slds-path__action' },
          a.a.createElement(
            'span',
            { className: 'slds-path__stage-name' },
            'Stage: ',
            o
          ),
          a.a.createElement(
            E.Button,
            { isBrand: !0, className: 'slds-path__mark-complete' },
            i
          ),
          t
            ? a.a.createElement(
                E.Button,
                {
                  isNeutral: !0,
                  className: 'slds-path__trigger-coaching-content',
                  'aria-expanded': n,
                  'aria-controls': l
                },
                n ? 'Show Less' : 'Show More'
              )
            : null
        )
      );
    };
    (I.propTypes = {
      hasCoaching: o.a.bool,
      coachingOpen: o.a.bool,
      hasOverflow: o.a.bool,
      coachingId: o.a.string,
      stageName: o.a.string,
      actionButtonLabel: o.a.node
    }),
      (I.defaultProps = {
        hasCoaching: !1,
        coachingOpen: !1,
        hasOverflow: !1,
        coachingId: '',
        stageName: 'Unqualified',
        actionButtonLabel: a.a.createElement(
          r.Fragment,
          null,
          a.a.createElement(w.a, {
            className: 'slds-button__icon slds-button__icon_left',
            sprite: 'utility',
            symbol: 'check',
            'aria-hidden': 'true'
          }),
          'Mark Status as Complete'
        )
      });
    var R = (function(e) {
      !(function(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          t && C(e, t);
      })(i, e);
      var t,
        n,
        r,
        l,
        o = ((t = i),
        function() {
          var e,
            n = D(t);
          if (P()) {
            var r = D(this).constructor;
            e = Reflect.construct(n, arguments, r);
          } else e = n.apply(this, arguments);
          return N(this, e);
        });
      function i() {
        var e;
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, i),
          ((e = o.call(this)).state = { itemRef: null }),
          e
        );
      }
      return (
        (n = i),
        (r = [
          {
            key: 'componentDidUpdate',
            value: function(e, t) {
              var n = this.props.setTooltipRef,
                r = this.state.itemRef;
              n && r !== t.itemRef && n(r);
            }
          },
          {
            key: 'render',
            value: function() {
              var e = this,
                t = this.props,
                n = t.label,
                r = t.stepState,
                l = t.index,
                o = r.indexOf('active') > -1,
                i = r.indexOf('complete') > -1,
                c = r.indexOf('current') > -1,
                s = null;
              return (
                i ? (s = 'Stage Complete') : c && (s = 'Current Stage:'),
                a.a.createElement(
                  'li',
                  {
                    className: x()(
                      'slds-path__item',
                      r.map(function(e) {
                        return 'slds-is-'.concat(e);
                      })
                    ),
                    role: 'presentation',
                    ref: function(t) {
                      e.state.itemRef || e.setState({ itemRef: t });
                    }
                  },
                  a.a.createElement(
                    'a',
                    {
                      'aria-selected': o,
                      className: 'slds-path__link',
                      href: 'javascript:void(0);',
                      id: 'path-'.concat(l),
                      role: 'option',
                      tabIndex: o ? 0 : -1
                    },
                    a.a.createElement(
                      'span',
                      { className: 'slds-path__stage' },
                      a.a.createElement(w.a, {
                        className: 'slds-icon slds-icon_x-small',
                        sprite: 'utility',
                        symbol: 'check'
                      }),
                      s
                        ? a.a.createElement(
                            'span',
                            { className: 'slds-assistive-text' },
                            s
                          )
                        : null
                    ),
                    a.a.createElement(
                      'span',
                      { className: 'slds-path__title' },
                      n
                    )
                  )
                )
              );
            }
          }
        ]) && O(n.prototype, r),
        l && O(n, l),
        i
      );
    })(r.Component);
    (R.propTypes = {
      label: o.a.string,
      stepState: o.a.arrayOf(o.a.string),
      index: o.a.number
    }),
      (R.defaultProps = {
        label: 'Undefined',
        stepState: ['incomplete'],
        index: 0
      });
    var F = function(e) {
      var t = e.coachingId,
        n = e.isHidden,
        r = e.coachingData,
        l = e.pathGuidance;
      return a.a.createElement(
        'div',
        {
          className: x()('slds-path__content', { 'slds-is-collapsed': n }),
          id: t
        },
        a.a.createElement(
          'div',
          { className: 'slds-path__coach slds-grid' },
          a.a.createElement(
            'div',
            { className: 'slds-path__keys' },
            a.a.createElement(
              'div',
              {
                className:
                  'slds-grid slds-grid_align-spread slds-path__coach-title'
              },
              a.a.createElement('h2', null, 'Key Fields This Stage'),
              a.a.createElement(
                E.Button,
                { className: 'slds-path__coach-edit slds-text-body_small' },
                'Edit'
              )
            ),
            a.a.createElement(_.a, {
              direction: 'stacked',
              snapshot: r,
              isViewMode: !0
            })
          ),
          a.a.createElement(
            'div',
            { className: 'slds-path__guidance' },
            a.a.createElement(
              'h2',
              { className: 'slds-path__coach-title' },
              'Guidance for Success'
            ),
            a.a.createElement(
              'div',
              { className: 'slds-text-longform slds-path__guidance-content' },
              l
            )
          )
        )
      );
    };
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
    function M(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function L(e, t) {
      return (L =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function z(e, t) {
      return !t || ('object' !== T(t) && 'function' != typeof t) ? A(e) : t;
    }
    function A(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function U() {
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
    (F.propTypes = {
      coachingId: o.a.string,
      isHidden: o.a.bool,
      coachingData: o.a.object,
      pathGuidance: o.a.arrayOf(o.a.node)
    }),
      (F.defaultProps = {
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
          a.a.createElement(
            'p',
            { key: 'guidance-1' },
            'Regularly cross-sell related products using',
            ' ',
            a.a.createElement(
              'a',
              { href: 'javascript:void(0);' },
              'cross-sell tactics and principles'
            ),
            '.'
          ),
          a.a.createElement(
            'p',
            { key: 'guidance-2' },
            'Prepare demo deck using the',
            ' ',
            a.a.createElement(
              'a',
              { href: 'javascript:void(0);' },
              'latest template'
            ),
            ' and review with Marketing and Sales teams. Review demo copy with Legal and Doc team.'
          ),
          a.a.createElement(
            'p',
            { key: 'guidance-3' },
            'Look up ',
            a.a.createElement(
              'a',
              { href: 'javascript:void(0);' },
              'needs analysis principles'
            ),
            ' and review selling plan with Sales Engineer.'
          )
        ]
      });
    var V = function() {
        return a.a.createElement(
          j,
          null,
          a.a.createElement(
            I,
            null,
            a.a.createElement(R, {
              label: 'Contacted',
              stepState: ['current', 'active'],
              index: 1
            }),
            a.a.createElement(R, {
              label: 'Open',
              stepState: ['incomplete'],
              index: 2
            }),
            a.a.createElement(R, {
              label: 'Unqualified',
              stepState: ['incomplete'],
              index: 3
            }),
            a.a.createElement(R, {
              label: 'Nurturing',
              stepState: ['incomplete'],
              index: 4
            }),
            a.a.createElement(R, {
              label: 'Closed',
              stepState: ['incomplete'],
              index: 5
            })
          )
        );
      },
      q = function() {
        return a.a.createElement(
          j,
          null,
          a.a.createElement(
            I,
            null,
            a.a.createElement(R, {
              label: 'Contacted',
              stepState: ['complete'],
              index: 6
            }),
            a.a.createElement(R, {
              label: 'Open',
              stepState: ['complete'],
              index: 7
            }),
            a.a.createElement(R, {
              label: 'Unqualified',
              stepState: ['complete'],
              index: 8
            }),
            a.a.createElement(R, {
              label: 'Nurturing',
              stepState: ['current', 'active'],
              index: 9
            }),
            a.a.createElement(R, {
              label: 'Closed',
              stepState: ['incomplete'],
              index: 10
            })
          )
        );
      },
      B = function() {
        return a.a.createElement(
          j,
          null,
          a.a.createElement(
            I,
            { actionButtonLabel: 'Mark as Current Stage' },
            a.a.createElement(R, {
              label: 'Contacted',
              stepState: ['current'],
              index: 11
            }),
            a.a.createElement(R, {
              label: 'Open',
              stepState: ['incomplete'],
              index: 12
            }),
            a.a.createElement(R, {
              label: 'Unqualified',
              stepState: ['active'],
              index: 13
            }),
            a.a.createElement(R, {
              label: 'Nurturing',
              stepState: ['incomplete'],
              index: 14
            }),
            a.a.createElement(R, {
              label: 'Closed',
              stepState: ['incomplete'],
              index: 15
            })
          )
        );
      },
      H = (function(e) {
        !(function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && L(e, t);
        })(c, e);
        var t,
          n,
          l,
          o,
          i = ((t = c),
          function() {
            var e,
              n = W(t);
            if (U()) {
              var r = W(this).constructor;
              e = Reflect.construct(n, arguments, r);
            } else e = n.apply(this, arguments);
            return z(this, e);
          });
        function c() {
          var e;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, c),
            ((e = i.call(
              this
            )).updateTooltipOffset = e.updateTooltipOffset.bind(A(e))),
            (e.setTooltipRef = e.setTooltipRef.bind(A(e))),
            (e.state = { tooltipRef: null, tooltipLeft: 0, tooltipTop: 0 }),
            e
          );
        }
        return (
          (n = c),
          (l = [
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
                  n = 0;
                e &&
                  ((t = e.offsetLeft + e.offsetWidth / 2),
                  (n = e.offsetTop + e.offsetHeight + 14)),
                  this.setState({ tooltipLeft: t, tooltipTop: n });
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
                  n = t.tooltipLeft,
                  l = t.tooltipTop;
                return a.a.createElement(
                  r.Fragment,
                  null,
                  a.a.createElement(
                    j,
                    null,
                    a.a.createElement(
                      I,
                      { actionButtonLabel: 'Mark as Current Stage' },
                      a.a.createElement(R, {
                        label: 'Contacted',
                        stepState: ['complete'],
                        index: 16
                      }),
                      a.a.createElement(R, {
                        label: 'Open',
                        stepState: ['complete'],
                        index: 17
                      }),
                      a.a.createElement(R, {
                        label: 'Unqualified',
                        stepState: ['current'],
                        index: 18,
                        setTooltipRef: function(t) {
                          return e.setTooltipRef(t);
                        }
                      }),
                      a.a.createElement(R, {
                        label: 'Nurturing',
                        stepState: ['active'],
                        index: 19
                      }),
                      a.a.createElement(R, {
                        label: 'Closed',
                        stepState: ['incomplete'],
                        index: 20
                      })
                    ),
                    a.a.createElement(
                      g.Tooltip,
                      {
                        className: 'slds-nubbin_top',
                        style: {
                          left: ''.concat(n, 'px'),
                          transform: 'translateX(-50%)',
                          top: ''.concat(l, 'px'),
                          position: 'absolute'
                        }
                      },
                      '3 Days in Unqualified'
                    )
                  )
                );
              }
            }
          ]) && M(n.prototype, l),
          o && M(n, o),
          c
        );
      })(r.Component),
      $ = function() {
        return a.a.createElement(
          j,
          { hasCoaching: !0 },
          a.a.createElement(
            I,
            { coachingId: 'path-coaching-1', hasCoaching: !0 },
            a.a.createElement(R, {
              label: 'Contacted',
              stepState: ['complete'],
              index: 21
            }),
            a.a.createElement(R, {
              label: 'Open',
              stepState: ['complete'],
              index: 22
            }),
            a.a.createElement(R, {
              label: 'Unqualified',
              stepState: ['active', 'current'],
              index: 23
            }),
            a.a.createElement(R, {
              label: 'Nurturing',
              stepState: ['incomplete'],
              index: 24
            }),
            a.a.createElement(R, {
              label: 'Closed',
              stepState: ['incomplete'],
              index: 25
            })
          ),
          a.a.createElement(F, {
            coachingId: 'path-coaching-1',
            labelledBy: 'path-23',
            isHidden: !0
          })
        );
      },
      G = function() {
        return a.a.createElement(
          j,
          { hasCoaching: !0, coachingOpen: !0 },
          a.a.createElement(
            I,
            {
              coachingId: 'path-coaching-2',
              hasCoaching: !0,
              coachingOpen: !0
            },
            a.a.createElement(R, {
              label: 'Contacted',
              stepState: ['complete'],
              index: 26
            }),
            a.a.createElement(R, {
              label: 'Open',
              stepState: ['complete'],
              index: 27
            }),
            a.a.createElement(R, {
              label: 'Unqualified',
              stepState: ['current'],
              index: 28
            }),
            a.a.createElement(R, {
              label: 'Nurturing',
              stepState: ['incomplete', 'active'],
              index: 29
            }),
            a.a.createElement(R, {
              label: 'Closed',
              stepState: ['incomplete'],
              index: 30
            })
          ),
          a.a.createElement(F, {
            coachingId: 'path-coaching-2',
            labelledBy: 'path-28'
          })
        );
      },
      Z = function() {
        return a.a.createElement(
          j,
          null,
          a.a.createElement(
            I,
            { actionButtonLabel: 'Change Closed State' },
            a.a.createElement(R, {
              label: 'Contacted',
              stepState: ['complete'],
              index: 31
            }),
            a.a.createElement(R, {
              label: 'Open',
              stepState: ['complete'],
              index: 32
            }),
            a.a.createElement(R, {
              label: 'Unqualified',
              stepState: ['complete'],
              index: 33
            }),
            a.a.createElement(R, {
              label: 'Nurturing',
              stepState: ['complete'],
              index: 34
            }),
            a.a.createElement(R, {
              label: 'Closed Won',
              stepState: ['won', 'active', 'current'],
              index: 35
            })
          )
        );
      },
      J = function() {
        return a.a.createElement(
          j,
          null,
          a.a.createElement(
            I,
            { actionButtonLabel: 'Change Closed State' },
            a.a.createElement(R, {
              label: 'Contacted',
              stepState: ['incomplete'],
              index: 36
            }),
            a.a.createElement(R, {
              label: 'Open',
              stepState: ['incomplete'],
              index: 37
            }),
            a.a.createElement(R, {
              label: 'Unqualified',
              stepState: ['incomplete'],
              index: 38
            }),
            a.a.createElement(R, {
              label: 'Nurturing',
              stepState: ['incomplete'],
              index: 39
            }),
            a.a.createElement(R, {
              label: 'Closed Lost',
              stepState: ['lost', 'active', 'current'],
              index: 40
            })
          )
        );
      },
      Q = function() {
        return a.a.createElement(
          j,
          null,
          a.a.createElement(
            I,
            { hasOverflow: !0 },
            a.a.createElement(R, {
              label: 'Prospecting',
              stepState: ['complete'],
              index: 41
            }),
            a.a.createElement(R, {
              label: 'Qualification',
              stepState: ['complete'],
              index: 42
            }),
            a.a.createElement(R, {
              label: 'Needs Analysis',
              stepState: ['active', 'current'],
              index: 43
            }),
            a.a.createElement(R, {
              label: 'Value Proposition',
              stepState: ['incomplete'],
              index: 44
            }),
            a.a.createElement(R, {
              label: 'Id. Decision Maker',
              stepState: ['incomplete'],
              index: 45
            }),
            a.a.createElement(R, {
              label: 'Perception Analysis',
              stepState: ['incomplete'],
              index: 46
            }),
            a.a.createElement(R, {
              label: 'Proposal / Pricing',
              stepState: ['incomplete'],
              index: 47
            }),
            a.a.createElement(R, {
              label: 'Negotiation / Review',
              stepState: ['incomplete'],
              index: 48
            }),
            a.a.createElement(R, {
              label: 'Closed',
              stepState: ['incomplete'],
              index: 49
            })
          )
        );
      },
      X = function() {
        return a.a.createElement(
          'div',
          { className: 'slds-region_medium', style: { width: '700px' } },
          a.a.createElement(
            j,
            null,
            a.a.createElement(
              I,
              null,
              a.a.createElement(R, {
                label: 'Contacted',
                stepState: ['complete'],
                index: 50
              }),
              a.a.createElement(R, {
                label: 'Open',
                stepState: ['complete'],
                index: 51
              }),
              a.a.createElement(R, {
                label: 'Unqualified',
                stepState: ['active', 'current'],
                index: 52
              }),
              a.a.createElement(R, {
                label: 'Nurturing',
                stepState: ['incomplete'],
                index: 53
              }),
              a.a.createElement(R, {
                label: 'Closed',
                stepState: ['incomplete'],
                index: 54
              })
            )
          )
        );
      },
      K = function() {
        return a.a.createElement(
          'div',
          { className: 'slds-region_medium', style: { width: '700px' } },
          a.a.createElement(
            j,
            { hasCoaching: !0, coachingOpen: !0 },
            a.a.createElement(
              I,
              {
                stageName: 'Needs Analysis',
                coachingId: 'path-coaching-2',
                hasCoaching: !0,
                coachingOpen: !0,
                hasOverflow: !0
              },
              a.a.createElement(R, {
                label: 'Prospecting',
                stepState: ['complete'],
                index: 55
              }),
              a.a.createElement(R, {
                label: 'Qualification',
                stepState: ['complete'],
                index: 56
              }),
              a.a.createElement(R, {
                label: 'Needs Analysis',
                stepState: ['active', 'current'],
                index: 57
              }),
              a.a.createElement(R, {
                label: 'Value Proposition',
                stepState: ['incomplete'],
                index: 58
              }),
              a.a.createElement(R, {
                label: 'Id. Decision Maker',
                stepState: ['incomplete'],
                index: 59
              }),
              a.a.createElement(R, {
                label: 'Perception Analysis',
                stepState: ['incomplete'],
                index: 60
              }),
              a.a.createElement(R, {
                label: 'Proposal / Pricing',
                stepState: ['incomplete'],
                index: 61
              }),
              a.a.createElement(R, {
                label: 'Negotiation / Review',
                stepState: ['incomplete'],
                index: 62
              }),
              a.a.createElement(R, {
                label: 'Closed',
                stepState: ['incomplete'],
                index: 63
              })
            ),
            a.a.createElement(F, {
              coachingId: 'path-coaching-2',
              labelledBy: 'path-57'
            })
          )
        );
      },
      Y = function() {
        return a.a.createElement(
          'div',
          { className: 'slds-region_small', style: { width: '360px' } },
          a.a.createElement(
            j,
            { hasCoaching: !0, coachingOpen: !0 },
            a.a.createElement(
              I,
              {
                stageName: 'Needs Analysis',
                coachingId: 'path-coaching-3',
                hasOverflow: !0,
                hasCoaching: !0,
                coachingOpen: !0
              },
              a.a.createElement(R, {
                label: 'Prospecting',
                stepState: ['complete'],
                index: 64
              }),
              a.a.createElement(R, {
                label: 'Qualification',
                stepState: ['complete'],
                index: 65
              }),
              a.a.createElement(R, {
                label: 'Needs Analysis',
                stepState: ['active', 'current'],
                index: 66
              }),
              a.a.createElement(R, {
                label: 'Value Proposition',
                stepState: ['incomplete'],
                index: 67
              }),
              a.a.createElement(R, {
                label: 'Id. Decision Maker',
                stepState: ['incomplete'],
                index: 68
              }),
              a.a.createElement(R, {
                label: 'Perception Analysis',
                stepState: ['incomplete'],
                index: 69
              }),
              a.a.createElement(R, {
                label: 'Proposal / Pricing',
                stepState: ['incomplete'],
                index: 70
              }),
              a.a.createElement(R, {
                label: 'Negotiation / Review',
                stepState: ['incomplete'],
                index: 71
              }),
              a.a.createElement(R, {
                label: 'Closed',
                stepState: ['incomplete'],
                index: 72
              })
            ),
            a.a.createElement(F, {
              coachingId: 'path-coaching-3',
              labelledBy: 'path-66'
            })
          )
        );
      },
      ee = ((t.default = a.a.createElement(V, null)),
      [
        {
          id: 'later-stage',
          label: 'In a later stage',
          element: a.a.createElement(q, null)
        },
        {
          id: 'different-stage-selected',
          label: 'With different stage selected',
          element: a.a.createElement(B, null)
        },
        {
          id: 'with-visible-tooltip',
          label: 'With visible tooltip',
          element: a.a.createElement(H, null)
        },
        {
          id: 'with-coaching',
          label: 'With coaching available',
          element: a.a.createElement($, null)
        },
        {
          id: 'different-coaching',
          label: 'With different stage selected - with coaching',
          element: a.a.createElement(G, null)
        },
        { id: 'lost', label: 'Lost', element: a.a.createElement(J, null) },
        { id: 'won', label: 'Won', element: a.a.createElement(Z, null) },
        {
          id: 'with-overflow',
          label: 'Path with overflow',
          element: a.a.createElement(Q, null)
        },
        {
          id: 'medium',
          label: 'Medium viewport',
          element: a.a.createElement(X, null)
        },
        {
          id: 'medium-coaching',
          label: 'Medium viewport with coaching',
          element: a.a.createElement(K, null)
        },
        {
          id: 'small-coaching',
          label: 'Small viewport',
          element: a.a.createElement(Y, null)
        },
        {
          id: 'mobile-default',
          label: 'Mobile: default',
          element: a.a.createElement(b, null, a.a.createElement(V, null))
        }
      ]);
  }
});