var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/utilities/scrollable/example.jsx.js'
] = (function(e) {
  function i(i) {
    for (
      var n, r, u = i[0], s = i[1], o = i[2], m = 0, d = [];
      m < u.length;
      m++
    )
      (r = u[m]),
        Object.prototype.hasOwnProperty.call(l, r) && l[r] && d.push(l[r][0]),
        (l[r] = 0);
    for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
    for (c && c(i); d.length; ) d.shift()();
    return a.push.apply(a, o || []), t();
  }
  function t() {
    for (var e, i = 0; i < a.length; i++) {
      for (var t = a[i], n = !0, u = 1; u < t.length; u++) {
        var s = t[u];
        0 !== l[s] && (n = !1);
      }
      n && (a.splice(i--, 1), (e = r((r.s = t[0]))));
    }
    return e;
  }
  var n = {},
    l = {
      181: 0,
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
  function r(i) {
    if (n[i]) return n[i].exports;
    var t = (n[i] = { i: i, l: !1, exports: {} });
    return e[i].call(t.exports, t, t.exports, r), (t.l = !0), t.exports;
  }
  (r.m = e),
    (r.c = n),
    (r.d = function(e, i, t) {
      r.o(e, i) || Object.defineProperty(e, i, { enumerable: !0, get: t });
    }),
    (r.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (r.t = function(e, i) {
      if ((1 & i && (e = r(e)), 8 & i)) return e;
      if (4 & i && 'object' == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (r.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
        2 & i && 'string' != typeof e)
      )
        for (var n in e)
          r.d(
            t,
            n,
            function(i) {
              return e[i];
            }.bind(null, n)
          );
      return t;
    }),
    (r.n = function(e) {
      var i =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(i, 'a', i), i;
    }),
    (r.o = function(e, i) {
      return Object.prototype.hasOwnProperty.call(e, i);
    }),
    (r.p = '/assets/scripts/bundle/');
  var u = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    s = u.push.bind(u);
  (u.push = i), (u = u.slice());
  for (var o = 0; o < u.length; o++) i(u[o]);
  var c = s;
  return a.push([120, 0]), t();
})({
  0: function(e, i) {
    e.exports = React;
  },
  120: function(e, i, t) {
    'use strict';
    t.r(i),
      t.d(i, 'examples', function() {
        return a;
      });
    var n = t(0),
      l = t.n(n),
      a = [
        {
          id: 'auto',
          label: 'Auto',
          element: l.a.createElement(
            'div',
            {
              className: 'slds-scrollable',
              style: { height: '5rem', width: '24rem' }
            },
            l.a.createElement('p', null, 'Scrollable Content Here'),
            l.a.createElement(
              'div',
              { className: 'slds-text-longform', style: { width: '150%' } },
              l.a.createElement(
                'p',
                null,
                'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.'
              ),
              l.a.createElement(
                'p',
                null,
                'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.'
              ),
              l.a.createElement(
                'p',
                null,
                'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.'
              )
            )
          )
        },
        {
          id: 'none',
          label: 'None',
          element: l.a.createElement(
            'div',
            {
              className: 'slds-scrollable_none',
              style: { height: '5rem', width: '24rem' }
            },
            l.a.createElement('p', null, 'Scrollable Content Here'),
            l.a.createElement(
              'div',
              { className: 'slds-text-longform' },
              l.a.createElement(
                'p',
                null,
                'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.'
              ),
              l.a.createElement(
                'p',
                null,
                'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.'
              ),
              l.a.createElement(
                'p',
                null,
                'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.'
              )
            )
          )
        },
        {
          id: 'x-axis',
          label: 'X-axis',
          element: l.a.createElement(
            'div',
            {
              className: 'slds-scrollable_x',
              style: { height: '5rem', width: '24rem' }
            },
            l.a.createElement('p', null, 'Scrollable Content Here'),
            l.a.createElement(
              'div',
              { className: 'slds-text-longform', style: { width: '150%' } },
              l.a.createElement(
                'p',
                null,
                'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.'
              ),
              l.a.createElement(
                'p',
                null,
                'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.'
              ),
              l.a.createElement(
                'p',
                null,
                'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.'
              )
            )
          )
        },
        {
          id: 'y-axis',
          label: 'Y-axis',
          element: l.a.createElement(
            'div',
            {
              className: 'slds-scrollable_y',
              style: { height: '5rem', width: '24rem' }
            },
            l.a.createElement('p', null, 'Scrollable Content Here'),
            l.a.createElement(
              'div',
              { className: 'slds-text-longform' },
              l.a.createElement(
                'p',
                null,
                'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.'
              ),
              l.a.createElement(
                'p',
                null,
                'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.'
              ),
              l.a.createElement(
                'p',
                null,
                'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.'
              )
            )
          )
        }
      ];
  }
});
