var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/dynamic-icons/global-action-help/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, o, c = t[0], s = t[1], i = t[2], p = 0, f = [];
      p < c.length;
      p++
    )
      (o = c[p]),
        Object.prototype.hasOwnProperty.call(a, o) && a[o] && f.push(a[o][0]),
        (a[o] = 0);
    for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
    for (u && u(t); f.length; ) f.shift()();
    return l.push.apply(l, i || []), n();
  }
  function n() {
    for (var e, t = 0; t < l.length; t++) {
      for (var n = l[t], r = !0, c = 1; c < n.length; c++) {
        var s = n[c];
        0 !== a[s] && (r = !1);
      }
      r && (l.splice(t--, 1), (e = o((o.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = {
      66: 0,
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
  var c = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    s = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var i = 0; i < c.length; i++) t(c[i]);
  var u = s;
  return l.push([261, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  261: function(e, t, n) {
    'use strict';
    n.r(t);
    var r = n(0),
      a = n.n(r),
      l = function() {
        return a.a.createElement(
          'button',
          { className: 'slds-button slds-button_icon slds-icon-help' },
          a.a.createElement(
            'svg',
            {
              className: 'slds-button__icon',
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 -12 78.5 110',
              'aria-labelledby': 'title',
              role: 'presentation'
            },
            a.a.createElement(
              'defs',
              null,
              a.a.createElement(
                'mask',
                {
                  id: 'questionMark',
                  x: '0',
                  y: '0',
                  width: '78.5',
                  height: '110'
                },
                a.a.createElement('path', {
                  d:
                    'M46.8,70.4H37a2.7,2.7,0,0,1-2.7-2.7V64.8A19.6,19.6,0,0,1,47.4,46.4a14.6,14.6,0,0,0,6.2-4.1c9.8-11.7.8-25.8-10.9-26.2a15.7,15.7,0,0,0-11.5,4.4,13.7,13.7,0,0,0-4.5,8.6,2.8,2.8,0,0,1-2.9,2.1H14a2.8,2.8,0,0,1-2.9-3.1A31.8,31.8,0,0,1,20.5,8.8,32,32,0,0,1,43.3,0a31.3,31.3,0,0,1,9.6,60.7A4.4,4.4,0,0,0,50,64.6v2.9a3,3,0,0,1-3.1,2.9Zm3.1,20.5a3,3,0,0,1-2.9,3H37.2A3,3,0,0,1,34.3,91V81.2a3,3,0,0,1,2.9-2.9H47a3,3,0,0,1,2.9,2.9Z',
                  transform: 'translate(-2.5 0)',
                  fill: '#aab4be'
                })
              )
            ),
            a.a.createElement('title', { id: 'title' }, 'help'),
            a.a.createElement(
              'g',
              null,
              a.a.createElement('circle', { cy: '45', cx: '45', r: '60' }),
              a.a.createElement('circle', {
                className: 'slds-icon-help_hover',
                cy: '45',
                cx: '45',
                r: '60'
              }),
              a.a.createElement('circle', {
                className: 'slds-icon-help_focus',
                cy: '45',
                cx: '45',
                r: '60'
              })
            )
          ),
          a.a.createElement(
            'span',
            { className: 'slds-assistive-text' },
            'help'
          )
        );
      };
    t.default = a.a.createElement(l, null);
  }
});
