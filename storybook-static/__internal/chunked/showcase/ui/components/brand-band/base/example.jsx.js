var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/brand-band/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, l, u = t[0], i = t[1], c = t[2], f = 0, p = [];
      f < u.length;
      f++
    )
      (l = u[f]),
        Object.prototype.hasOwnProperty.call(o, l) && o[l] && p.push(o[l][0]),
        (o[l] = 0);
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    for (s && s(t); p.length; ) p.shift()();
    return a.push.apply(a, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, u = 1; u < n.length; u++) {
        var i = n[u];
        0 !== o[i] && (r = !1);
      }
      r && (a.splice(t--, 1), (e = l((l.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = {
      9: 0,
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
    a = [];
  function l(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, l), (n.l = !0), n.exports;
  }
  (l.m = e),
    (l.c = r),
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
        for (var r in e)
          l.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
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
  var u = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    i = u.push.bind(u);
  (u.push = t), (u = u.slice());
  for (var c = 0; c < u.length; c++) t(u[c]);
  var s = i;
  return a.push([245, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  245: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'examples', function() {
        return y;
      });
    var r = n(0),
      o = n.n(r),
      a = n(2),
      l = n.n(a);
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
    function i(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function c(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function s(e, t) {
      return (s =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function f(e, t) {
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
    function p() {
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
    function b(e) {
      return (b = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var d = function(e) {
        return o.a.createElement('div', {
          className: l()(
            'slds-brand-band',
            {
              'slds-brand-band_small': 'small' === e.size,
              'slds-brand-band_medium': 'medium' === e.size,
              'slds-brand-band_large': 'large' === e.size,
              'slds-brand-band_none': 'none' === e.size
            },
            {
              'slds-brand-band_group': 'group' === e.image,
              'slds-brand-band_user': 'user' === e.image
            }
          )
        });
      },
      m = (function(e) {
        !(function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && s(e, t);
        })(u, e);
        var t,
          n,
          r,
          a,
          l = ((t = u),
          function() {
            var e,
              n = b(t);
            if (p()) {
              var r = b(this).constructor;
              e = Reflect.construct(n, arguments, r);
            } else e = n.apply(this, arguments);
            return f(this, e);
          });
        function u() {
          return i(this, u), l.apply(this, arguments);
        }
        return (
          (n = u),
          (r = [
            {
              key: 'render',
              value: function() {
                return o.a.createElement(
                  'div',
                  {
                    style: {
                      minHeight: '20rem',
                      backgroundColor: 'rgb(176, 196, 223)',
                      position: 'relative',
                      zIndex: '1'
                    }
                  },
                  o.a.createElement(d, this.props)
                );
              }
            }
          ]) && c(n.prototype, r),
          a && c(n, a),
          u
        );
      })(r.Component),
      y = ((t.default = o.a.createElement(m, { size: 'medium' })),
      [
        {
          id: 'brand-band-small',
          label: 'Small',
          element: o.a.createElement(m, { size: 'small' })
        },
        {
          id: 'brand-band-large',
          label: 'Large',
          element: o.a.createElement(m, { size: 'large' })
        },
        {
          id: 'brand-band-no-image',
          label: 'No Image',
          element: o.a.createElement(m, { size: 'none' })
        },
        {
          id: 'brand-band-large-group',
          label: 'Large Group',
          element: o.a.createElement(m, { size: 'large', image: 'group' })
        },
        {
          id: 'brand-band-large-user',
          label: 'Large User',
          element: o.a.createElement(m, { size: 'large', image: 'user' })
        }
      ]);
  }
});
