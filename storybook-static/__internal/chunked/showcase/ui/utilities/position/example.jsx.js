var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/utilities/position/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var o, s, l = t[0], a = t[1], d = t[2], u = 0, p = [];
      u < l.length;
      u++
    )
      (s = l[u]),
        Object.prototype.hasOwnProperty.call(n, s) && n[s] && p.push(n[s][0]),
        (n[s] = 0);
    for (o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
    for (c && c(t); p.length; ) p.shift()();
    return r.push.apply(r, d || []), i();
  }
  function i() {
    for (var e, t = 0; t < r.length; t++) {
      for (var i = r[t], o = !0, l = 1; l < i.length; l++) {
        var a = i[l];
        0 !== n[a] && (o = !1);
      }
      o && (r.splice(t--, 1), (e = s((s.s = i[0]))));
    }
    return e;
  }
  var o = {},
    n = {
      179: 0,
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
    r = [];
  function s(t) {
    if (o[t]) return o[t].exports;
    var i = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(i.exports, i, i.exports, s), (i.l = !0), i.exports;
  }
  (s.m = e),
    (s.c = o),
    (s.d = function(e, t, i) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
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
      var i = Object.create(null);
      if (
        (s.r(i),
        Object.defineProperty(i, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          s.d(
            i,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return i;
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
  var l = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    a = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var d = 0; d < l.length; d++) t(l[d]);
  var c = a;
  return r.push([234, 0]), i();
})({
  0: function(e, t) {
    e.exports = React;
  },
  234: function(e, t, i) {
    'use strict';
    i.r(t),
      i.d(t, 'examples', function() {
        return r;
      });
    var o = i(0),
      n = i.n(o),
      r = [
        {
          id: 'fixed',
          label: 'Fixed',
          element: n.a.createElement(
            'div',
            {
              className: 'demo-only slds-grid',
              style: { height: '10rem', width: '20rem', padding: '2rem' }
            },
            n.a.createElement(
              'div',
              { className: 'slds-is-fixed' },
              n.a.createElement(
                'div',
                {
                  style: {
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    border: '1px solid red',
                    background: '#f4f6f9'
                  }
                },
                'An element with fixed positioning is positioned relative to the viewport. If no other positioning values are given (',
                n.a.createElement('code', null, 'top, right, bottom, left'),
                ') it will start its positioning relative to where it is in the flow of the page.'
              ),
              n.a.createElement(
                'p',
                null,
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              )
            )
          ),
          description:
            '`.slds-is-fixed` can be used to position a container relative to the viewport.'
        },
        {
          id: 'absolute',
          label: 'Absolute',
          element: n.a.createElement(
            'div',
            {
              className: 'demo-only slds-grid',
              style: { height: '10rem', width: '20rem', padding: '2rem' }
            },
            n.a.createElement(
              'div',
              { className: 'slds-is-absolute' },
              n.a.createElement(
                'div',
                {
                  style: {
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    border: '1px solid red',
                    background: '#f4f6f9'
                  }
                },
                'An element with absolute positioning is positioned relative to its closest ancestor with relative positioning. If no other positioning values are given (',
                n.a.createElement('code', null, 'top, right, bottom, left'),
                ') it will start its positioning relative to where it is in the flow of the page.'
              ),
              n.a.createElement(
                'p',
                null,
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              )
            )
          ),
          description:
            '`.slds-is-absolute` can be used to position a container relative to its closest ancestor with relative positioning.'
        },
        {
          id: 'relative',
          label: 'Relative',
          element: n.a.createElement(
            'div',
            {
              className: 'demo-only slds-grid',
              style: { height: '10rem', width: '20rem', padding: '2rem' }
            },
            n.a.createElement(
              'div',
              { className: 'slds-is-relative' },
              n.a.createElement(
                'div',
                {
                  style: {
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    border: '1px solid red',
                    background: '#f4f6f9'
                  }
                },
                'Like static, a relatively positioned element is put where its normal position would be in the document layout flow.'
              ),
              n.a.createElement(
                'p',
                null,
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              )
            )
          ),
          description:
            '`.slds-is-relative` can be used to contain children if children are absolutely positioned and out of flow. It is also used to position element without changing layout.'
        },
        {
          id: 'static',
          label: 'Static',
          element: n.a.createElement(
            'div',
            {
              className: 'demo-only slds-grid',
              style: { height: '10rem', width: '20rem', padding: '2rem' }
            },
            n.a.createElement(
              'div',
              { className: 'slds-is-static' },
              n.a.createElement(
                'div',
                {
                  style: {
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    border: '1px solid red',
                    background: '#f4f6f9'
                  }
                },
                'A static positioned element is positioned exactly as it comes in the flow of the page.'
              ),
              n.a.createElement(
                'p',
                null,
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              )
            )
          ),
          description:
            '`.slds-is-static` resets positioning of element back to normal behavior.'
        }
      ];
  }
});
