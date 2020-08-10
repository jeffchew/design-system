var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/dynamic-icons/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, i, r = t[0], c = t[1], d = t[2], m = 0, u = [];
      m < r.length;
      m++
    )
      (i = r[m]),
        Object.prototype.hasOwnProperty.call(l, i) && l[i] && u.push(l[i][0]),
        (l[i] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    for (o && o(t); u.length; ) u.shift()();
    return s.push.apply(s, d || []), a();
  }
  function a() {
    for (var e, t = 0; t < s.length; t++) {
      for (var a = s[t], n = !0, r = 1; r < a.length; r++) {
        var c = a[r];
        0 !== l[c] && (n = !1);
      }
      n && (s.splice(t--, 1), (e = i((i.s = a[0]))));
    }
    return e;
  }
  var n = {},
    l = { 32: 0 },
    s = [];
  function i(t) {
    if (n[t]) return n[t].exports;
    var a = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, i), (a.l = !0), a.exports;
  }
  (i.m = e),
    (i.c = n),
    (i.d = function(e, t, a) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (i.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.t = function(e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (i.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          i.d(
            a,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return a;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return i.d(t, 'a', t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = '/assets/scripts/bundle/');
  var r = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    c = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var d = 0; d < r.length; d++) t(r[d]);
  var o = c;
  return s.push([202, 0]), a();
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
  202: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'getElement', function() {
        return R;
      }),
      a.d(t, 'getContents', function() {
        return J;
      });
    var n = a(0),
      l = a.n(n),
      s = a(4),
      i = a(1),
      r = a(2),
      c = a(86),
      d = l.a.createElement(c.a, {
        className: 'slds-is-animated',
        title: 'Description of the icon',
        assistiveText: 'Text alternative'
      }),
      o = [
        {
          id: 'paused',
          label: 'Paused',
          element: l.a.createElement(c.a, {
            className: 'slds-is-animated slds-is-paused',
            title: 'Description of the icon',
            assistiveText: 'Text alternative'
          })
        },
        {
          id: 'static',
          label: 'Static (no animation)',
          element: l.a.createElement(c.a, {
            title: 'Description of the icon',
            assistiveText: 'Text alternative'
          })
        }
      ],
      m = function() {
        return l.a.createElement(
          'div',
          {
            className: 'slds-icon-eq slds-is-animated',
            title: 'Description of the icon when needed'
          },
          l.a.createElement('div', { className: 'slds-icon-eq__bar' }),
          l.a.createElement('div', { className: 'slds-icon-eq__bar' }),
          l.a.createElement('div', { className: 'slds-icon-eq__bar' }),
          l.a.createElement(
            'span',
            { className: 'slds-assistive-text' },
            'Text alternative when needed'
          )
        );
      },
      u = l.a.createElement(m, null),
      p = function() {
        return l.a.createElement(
          'button',
          { className: 'slds-button slds-button_icon slds-icon-help' },
          l.a.createElement(
            'svg',
            {
              className: 'slds-button__icon',
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 -12 78.5 110',
              'aria-labelledby': 'title',
              role: 'presentation'
            },
            l.a.createElement(
              'defs',
              null,
              l.a.createElement(
                'mask',
                {
                  id: 'questionMark',
                  x: '0',
                  y: '0',
                  width: '78.5',
                  height: '110'
                },
                l.a.createElement('path', {
                  d:
                    'M46.8,70.4H37a2.7,2.7,0,0,1-2.7-2.7V64.8A19.6,19.6,0,0,1,47.4,46.4a14.6,14.6,0,0,0,6.2-4.1c9.8-11.7.8-25.8-10.9-26.2a15.7,15.7,0,0,0-11.5,4.4,13.7,13.7,0,0,0-4.5,8.6,2.8,2.8,0,0,1-2.9,2.1H14a2.8,2.8,0,0,1-2.9-3.1A31.8,31.8,0,0,1,20.5,8.8,32,32,0,0,1,43.3,0a31.3,31.3,0,0,1,9.6,60.7A4.4,4.4,0,0,0,50,64.6v2.9a3,3,0,0,1-3.1,2.9Zm3.1,20.5a3,3,0,0,1-2.9,3H37.2A3,3,0,0,1,34.3,91V81.2a3,3,0,0,1,2.9-2.9H47a3,3,0,0,1,2.9,2.9Z',
                  transform: 'translate(-2.5 0)',
                  fill: '#aab4be'
                })
              )
            ),
            l.a.createElement('title', { id: 'title' }, 'help'),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('circle', { cy: '45', cx: '45', r: '60' }),
              l.a.createElement('circle', {
                className: 'slds-icon-help_hover',
                cy: '45',
                cx: '45',
                r: '60'
              }),
              l.a.createElement('circle', {
                className: 'slds-icon-help_focus',
                cy: '45',
                cx: '45',
                r: '60'
              })
            )
          ),
          l.a.createElement(
            'span',
            { className: 'slds-assistive-text' },
            'help'
          )
        );
      },
      b = l.a.createElement(p, null),
      g = a(87),
      h = l.a.createElement(g.a, { 'data-slds-state': 'positive' }),
      v = [
        {
          id: 'positive',
          label: 'Positive',
          element: l.a.createElement(g.a, { 'data-slds-state': 'positive' })
        },
        {
          id: 'negative',
          label: 'Negative',
          element: l.a.createElement(g.a, { 'data-slds-state': 'negative' })
        }
      ],
      E = a(5),
      f = a.n(E);
    function O() {
      return (O =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var n in a)
              Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    var j = function(e) {
        return l.a.createElement(
          'span',
          O({}, e, {
            title: 'Description of the icon when needed',
            className: f()('slds-icon-strength', e.className)
          }),
          l.a.createElement(
            'svg',
            { viewBox: '0 0 27 7', 'aria-hidden': 'true' },
            l.a.createElement('circle', { r: '3.025', cx: '3.5', cy: '3.5' }),
            l.a.createElement('circle', { r: '3.025', cx: '13.5', cy: '3.5' }),
            l.a.createElement('circle', { r: '3.025', cx: '23.5', cy: '3.5' })
          ),
          l.a.createElement(
            'span',
            { className: 'slds-assistive-text' },
            'Text alternative when needed'
          )
        );
      },
      x = l.a.createElement(j, { 'data-slds-strength': '0' }),
      y = [
        {
          id: 'strength-1',
          label: 'Strength: 1',
          element: l.a.createElement(j, { 'data-slds-strength': '1' })
        },
        {
          id: 'strength-2',
          label: 'Strength: 2',
          element: l.a.createElement(j, { 'data-slds-strength': '2' })
        },
        {
          id: 'strength-3',
          label: 'Strength: 3',
          element: l.a.createElement(j, { 'data-slds-strength': '3' })
        },
        {
          id: 'strength-negative-1',
          label: 'Strength: Neg 1',
          element: l.a.createElement(j, { 'data-slds-strength': '-1' })
        },
        {
          id: 'strength-negative-2',
          label: 'Strength: Neg 2',
          element: l.a.createElement(j, { 'data-slds-strength': '-2' })
        },
        {
          id: 'strength-negative-3',
          label: 'Strength: Neg 3',
          element: l.a.createElement(j, { 'data-slds-strength': '-3' })
        },
        {
          id: 'animated',
          label: 'Animated on load',
          element: l.a.createElement(j, {
            className: 'slds-is-animated',
            'data-slds-strength': '3'
          })
        },
        {
          id: 'animated-negative',
          label: 'Animated on load (negative)',
          element: l.a.createElement(j, {
            className: 'slds-is-animated',
            'data-slds-strength': '-3'
          })
        },
        {
          id: 'paused',
          label: 'Paused',
          element: l.a.createElement(j, {
            className: 'slds-is-animated slds-is-paused',
            'data-slds-strength': '3'
          })
        }
      ],
      S = a(3),
      N = a.n(S);
    function _() {
      return (_ =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var n in a)
              Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    function T(e, t) {
      if (null == e) return {};
      var a,
        n,
        l = (function(e, t) {
          if (null == e) return {};
          var a,
            n,
            l = {},
            s = Object.keys(e);
          for (n = 0; n < s.length; n++)
            (a = s[n]), t.indexOf(a) >= 0 || (l[a] = e[a]);
          return l;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (n = 0; n < s.length; n++)
          (a = s[n]),
            t.indexOf(a) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, a) &&
                (l[a] = e[a]));
      }
      return l;
    }
    var w = function(e) {
      var t = e.assistiveText,
        a = T(e, ['assistiveText']);
      return l.a.createElement(
        'span',
        _({}, a, { className: f()('slds-icon-trend', e.className) }),
        l.a.createElement(
          'svg',
          { viewBox: '0 0 16 16', 'aria-hidden': 'true' },
          l.a.createElement('path', {
            className: 'slds-icon-trend__arrow',
            d: 'M.75 8H11M8 4.5L11.5 8 8 11.5'
          }),
          l.a.createElement('circle', {
            className: 'slds-icon-trend__circle',
            cy: '8',
            cx: '8',
            r: '7.375',
            transform: 'rotate(-28 8 8) scale(-1 1) translate(-16 0)'
          })
        ),
        l.a.createElement('span', { className: 'slds-assistive-text' }, t)
      );
    };
    w.propTypes = {
      title: N.a.string.isRequired,
      assistiveText: N.a.string.isRequired
    };
    var P = w,
      D = l.a.createElement(P, {
        'data-slds-trend': 'neutral',
        className: 'slds-is-animated',
        title: 'Description of the icon',
        assistiveText: 'Text alternative'
      }),
      A = [
        {
          id: 'down',
          label: 'Down',
          element: l.a.createElement(P, {
            'data-slds-trend': 'down',
            className: 'slds-is-animated',
            title: 'Description of the icon',
            assistiveText: 'Text alternative'
          })
        },
        {
          id: 'up',
          label: 'Up',
          element: l.a.createElement(P, {
            'data-slds-trend': 'up',
            className: 'slds-is-animated',
            title: 'Description of the icon',
            assistiveText: 'Text alternative'
          })
        },
        {
          id: 'static',
          label: 'Static (no animation)',
          element: l.a.createElement(P, {
            'data-slds-trend': 'up',
            title: 'Description of the icon',
            assistiveText: 'Text alternative'
          })
        },
        {
          id: 'paused',
          label: 'Paused',
          element: l.a.createElement(P, {
            'data-slds-trend': 'up',
            className: 'slds-is-animated slds-is-paused',
            title: 'Description of the icon',
            assistiveText: 'Text alternative'
          })
        }
      ],
      q = a(88),
      M = l.a.createElement(q.a, {
        title: 'User is typing',
        assistiveText: 'User is typing',
        isAnimated: !0
      }),
      U = [
        {
          id: 'paused',
          label: 'Paused',
          element: l.a.createElement(q.a, {
            title: 'User is typing',
            assistiveText: 'User is typing',
            isAnimated: !0,
            isPaused: !0
          })
        },
        {
          id: 'static',
          label: 'Static',
          element: l.a.createElement(q.a, {
            title: 'User is typing',
            assistiveText: 'User is typing'
          })
        }
      ],
      k = a(83),
      H = l.a.createElement(k.a, null),
      L = s.c.h2,
      B = s.c.h3,
      R = function() {
        return Object(n.createElement)(
          s.b,
          {},
          Object(n.createElement)(
            'div',
            { className: 'lead doc' },
            'A set of delightful animated icons'
          ),
          Object(n.createElement)(i.a, { exampleOnly: !0 }, u),
          L({ id: 'Ellie' }, 'Ellie'),
          Object(n.createElement)(i.a, null, d),
          B({ id: 'Paused' }, 'Paused'),
          Object(n.createElement)(i.a, null, Object(r.e)(o, 'paused')),
          B({ id: 'Static' }, 'Static'),
          Object(n.createElement)(i.a, null, Object(r.e)(o, 'static')),
          L({ id: 'Eq' }, 'Eq'),
          Object(n.createElement)(i.a, null, u),
          L({ id: 'Global-Action-Help' }, 'Global Action Help'),
          Object(n.createElement)(i.a, null, b),
          L({ id: 'Score' }, 'Score'),
          Object(n.createElement)(i.a, null, h),
          B({ id: 'Positive' }, 'Positive'),
          Object(n.createElement)(i.a, null, Object(r.e)(v, 'positive')),
          B({ id: 'Negative' }, 'Negative'),
          Object(n.createElement)(i.a, null, Object(r.e)(v, 'negative')),
          L({ id: 'Strength' }, 'Strength'),
          Object(n.createElement)(i.a, null, x),
          B({ id: 'Strength:-1' }, 'Strength: 1'),
          Object(n.createElement)(i.a, null, Object(r.e)(y, 'strength-1')),
          B({ id: 'Strength:-2' }, 'Strength: 2'),
          Object(n.createElement)(i.a, null, Object(r.e)(y, 'strength-2')),
          B({ id: 'Strength:-3' }, 'Strength: 3'),
          Object(n.createElement)(i.a, null, Object(r.e)(y, 'strength-3')),
          B({ id: 'Strength:-1-2' }, 'Strength: -1'),
          Object(n.createElement)(
            i.a,
            null,
            Object(r.e)(y, 'strength-negative-1')
          ),
          B({ id: 'Strength:-2-2' }, 'Strength: -2'),
          Object(n.createElement)(
            i.a,
            null,
            Object(r.e)(y, 'strength-negative-2')
          ),
          B({ id: 'Strength:-3-2' }, 'Strength: -3'),
          Object(n.createElement)(
            i.a,
            null,
            Object(r.e)(y, 'strength-negative-3')
          ),
          B({ id: 'Animated-on-load' }, 'Animated on load'),
          Object(n.createElement)(i.a, null, Object(r.e)(y, 'animated')),
          B(
            { id: 'Animated-on-load-(negative)' },
            'Animated on load (negative)'
          ),
          Object(n.createElement)(
            i.a,
            null,
            Object(r.e)(y, 'animated-negative')
          ),
          B({ id: 'Paused-2' }, 'Paused'),
          Object(n.createElement)(i.a, null, Object(r.e)(y, 'paused')),
          L({ id: 'Trend' }, 'Trend'),
          Object(n.createElement)(i.a, null, D),
          B({ id: 'Down' }, 'Down'),
          Object(n.createElement)(i.a, null, Object(r.e)(A, 'down')),
          B({ id: 'Up' }, 'Up'),
          Object(n.createElement)(i.a, null, Object(r.e)(A, 'up')),
          B({ id: 'Static-(no-animation)' }, 'Static (no animation)'),
          Object(n.createElement)(i.a, null, Object(r.e)(A, 'static')),
          B({ id: 'Paused-3' }, 'Paused'),
          Object(n.createElement)(i.a, null, Object(r.e)(A, 'paused')),
          L({ id: 'Typing' }, 'Typing'),
          Object(n.createElement)(i.a, null, M),
          B({ id: 'Paused-4' }, 'Paused'),
          Object(n.createElement)(i.a, null, Object(r.e)(U, 'paused')),
          B({ id: 'Static-2' }, 'Static'),
          Object(n.createElement)(i.a, null, Object(r.e)(U, 'static')),
          L({ id: 'Waffle' }, 'Waffle'),
          Object(n.createElement)(i.a, null, H)
        );
      },
      J = function() {
        return Object(s.a)(R());
      };
  }
});
