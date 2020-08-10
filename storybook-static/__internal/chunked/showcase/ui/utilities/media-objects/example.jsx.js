var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/utilities/media-objects/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var a, i, s = t[0], u = t[1], o = t[2], f = 0, m = [];
      f < s.length;
      f++
    )
      (i = s[f]),
        Object.prototype.hasOwnProperty.call(n, i) && n[i] && m.push(n[i][0]),
        (n[i] = 0);
    for (a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
    for (c && c(t); m.length; ) m.shift()();
    return l.push.apply(l, o || []), r();
  }
  function r() {
    for (var e, t = 0; t < l.length; t++) {
      for (var r = l[t], a = !0, s = 1; s < r.length; s++) {
        var u = r[s];
        0 !== n[u] && (a = !1);
      }
      a && (l.splice(t--, 1), (e = i((i.s = r[0]))));
    }
    return e;
  }
  var a = {},
    n = {
      176: 0,
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
  function i(t) {
    if (a[t]) return a[t].exports;
    var r = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.m = e),
    (i.c = a),
    (i.d = function(e, t, r) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
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
      var r = Object.create(null);
      if (
        (i.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          i.d(
            r,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return r;
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
  var s = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    u = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var o = 0; o < s.length; o++) t(s[o]);
  var c = u;
  return l.push([124, 0]), r();
})({
  0: function(e, t) {
    e.exports = React;
  },
  124: function(e, t, r) {
    'use strict';
    r.r(t),
      r.d(t, 'examples', function() {
        return o;
      });
    var a = r(0),
      n = r.n(a),
      l = r(48),
      i = r(43),
      s = n.a.createElement(
        i.Avatar,
        { className: 'slds-avatar_large' },
        n.a.createElement('img', {
          alt: 'Person name',
          src: '/assets/images/avatar3.jpg',
          title: 'User avatar'
        })
      ),
      u = function(e) {
        return n.a.createElement(
          'div',
          { className: 'demo-only slds-size_3-of-4' },
          n.a.createElement(
            l.a,
            {
              className: e.className,
              figureLeft: e.figureLeft,
              figureRight: e.figureRight,
              flavor: e.flavor
            },
            n.a.createElement(
              'p',
              null,
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda.'
            )
          )
        );
      },
      o = [
        {
          id: 'default',
          label: 'Default',
          element: n.a.createElement(u, { figureLeft: s })
        },
        {
          id: 'center',
          label: 'Centered vertically',
          element: n.a.createElement(u, { figureLeft: s, flavor: 'center' })
        },
        {
          id: 'reverse',
          label: 'Reverse',
          element: n.a.createElement(u, { figureRight: s })
        },
        {
          id: 'reverse-center',
          label: 'Reverse centered vertically',
          element: n.a.createElement(u, { figureRight: s, flavor: 'center' })
        },
        {
          id: 'double',
          label: 'Double figures',
          element: n.a.createElement(u, { figureLeft: s, figureRight: s })
        },
        {
          id: 'small',
          label: 'Small space between figure and body',
          element: n.a.createElement(u, {
            className: 'slds-media_small',
            figureLeft: s
          })
        },
        {
          id: 'large',
          label: 'Large space between figure and body',
          element: n.a.createElement(u, {
            className: 'slds-media_large',
            figureLeft: s
          })
        },
        {
          id: 'responsive',
          label: 'Responsive',
          element: n.a.createElement(
            'div',
            { className: 'demo-only slds-size_3-of-4' },
            n.a.createElement(
              l.a,
              { figureLeft: s, flavor: 'responsive' },
              n.a.createElement(
                'p',
                null,
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda.'
              )
            )
          )
        }
      ];
  }
});