var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/utilities/media-objects/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, l, s = t[0], o = t[1], c = t[2], d = 0, m = [];
      d < s.length;
      d++
    )
      (l = s[d]),
        Object.prototype.hasOwnProperty.call(n, l) && n[l] && m.push(n[l][0]),
        (n[l] = 0);
    for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
    for (u && u(t); m.length; ) m.shift()();
    return i.push.apply(i, c || []), a();
  }
  function a() {
    for (var e, t = 0; t < i.length; t++) {
      for (var a = i[t], r = !0, s = 1; s < a.length; s++) {
        var o = a[s];
        0 !== n[o] && (r = !1);
      }
      r && (i.splice(t--, 1), (e = l((l.s = a[0]))));
    }
    return e;
  }
  var r = {},
    n = { 98: 0 },
    i = [];
  function l(t) {
    if (r[t]) return r[t].exports;
    var a = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, l), (a.l = !0), a.exports;
  }
  (l.m = e),
    (l.c = r),
    (l.d = function(e, t, a) {
      l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
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
      var a = Object.create(null);
      if (
        (l.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          l.d(
            a,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return a;
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
  var s = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    o = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var c = 0; c < s.length; c++) t(s[c]);
  var u = o;
  return i.push([240, 0]), a();
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
  240: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'getElement', function() {
        return g;
      }),
      a.d(t, 'getContents', function() {
        return v;
      });
    var r = a(0),
      n = a.n(r),
      i = a(4),
      l = a(1),
      s = a(2),
      o = a(62),
      c = a(40),
      u = n.a.createElement(
        c.a,
        { className: 'slds-avatar_large' },
        n.a.createElement('img', {
          alt: 'Person name',
          src: '/assets/images/avatar3.jpg',
          title: 'User avatar'
        })
      ),
      d = function(e) {
        return n.a.createElement(
          'div',
          { className: 'demo-only slds-size_3-of-4' },
          n.a.createElement(
            o.a,
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
      m = [
        {
          id: 'default',
          label: 'Default',
          element: n.a.createElement(d, { figureLeft: u })
        },
        {
          id: 'center',
          label: 'Centered vertically',
          element: n.a.createElement(d, { figureLeft: u, flavor: 'center' })
        },
        {
          id: 'reverse',
          label: 'Reverse',
          element: n.a.createElement(d, { figureRight: u })
        },
        {
          id: 'reverse-center',
          label: 'Reverse centered vertically',
          element: n.a.createElement(d, { figureRight: u, flavor: 'center' })
        },
        {
          id: 'double',
          label: 'Double figures',
          element: n.a.createElement(d, { figureLeft: u, figureRight: u })
        },
        {
          id: 'small',
          label: 'Small space between figure and body',
          element: n.a.createElement(d, {
            className: 'slds-media_small',
            figureLeft: u
          })
        },
        {
          id: 'large',
          label: 'Large space between figure and body',
          element: n.a.createElement(d, {
            className: 'slds-media_large',
            figureLeft: u
          })
        },
        {
          id: 'responsive',
          label: 'Responsive',
          element: n.a.createElement(
            'div',
            { className: 'demo-only slds-size_3-of-4' },
            n.a.createElement(
              o.a,
              { figureLeft: u, flavor: 'responsive' },
              n.a.createElement(
                'p',
                null,
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda.'
              )
            )
          )
        }
      ],
      f = i.c.code,
      b = i.c.h2,
      p = i.c.h3,
      h = i.c.p,
      g = function() {
        return Object(r.createElement)(
          i.b,
          {},
          Object(r.createElement)(
            'div',
            { className: 'doc lead' },
            'When you need text and a figure next to each other, use a media object.'
          ),
          b({ id: 'About-Media-Objects' }, 'About Media Objects'),
          h(
            {},
            'Placing text next to an image, icon, figure, or video is common for many applications. The figure can be either on the right, left, or both. The text can start at the top of the image or be centered next to it. The width of the media object is controlled either by the parent container or a secondary module class.'
          ),
          h(
            {},
            'The ',
            f({}, '.slds-media'),
            ' object can be used as a container on any element. Inside are the two required elements. The figure (typically an image or an icon) should be placed inside an element with the ',
            f({}, '.slds-media__figure'),
            ' class. Next to it is typically some text that should be placed in an element with the ',
            f({}, '.slds-media__body'),
            ' class.'
          ),
          h(
            {},
            'By default, the text starts at the top of the figure. Center the body and the figure by applying the ',
            f({}, '.slds-media_center'),
            ' class to ',
            f({}, '.slds-media'),
            '.'
          ),
          h(
            {},
            'To position the figure on the other side of the body, apply the ',
            f({}, '.slds-media__figure_reverse'),
            ' to the figure.'
          ),
          h(
            {},
            'You may also position figures on both sides of the body at the same time using ',
            f({}, '.slds-media__figure'),
            ' and ',
            f({}, '.slds-media__figure_reverse'),
            '.'
          ),
          b({ id: 'Base' }, 'Base'),
          Object(r.createElement)(l.a, null, Object(s.e)(m, 'default')),
          b({ id: 'Examples' }, 'Examples'),
          p({ id: 'Center' }, 'Center'),
          Object(r.createElement)(l.a, null, Object(s.e)(m, 'center')),
          p({ id: 'Reverse' }, 'Reverse'),
          Object(r.createElement)(l.a, null, Object(s.e)(m, 'reverse')),
          p({ id: 'Reverse-Center' }, 'Reverse Center'),
          Object(r.createElement)(l.a, null, Object(s.e)(m, 'reverse-center')),
          p({ id: 'Double' }, 'Double'),
          Object(r.createElement)(l.a, null, Object(s.e)(m, 'double')),
          p({ id: 'Small' }, 'Small'),
          Object(r.createElement)(l.a, null, Object(s.e)(m, 'small')),
          p({ id: 'Large' }, 'Large'),
          Object(r.createElement)(l.a, null, Object(s.e)(m, 'large')),
          p({ id: 'Responsive' }, 'Responsive'),
          Object(r.createElement)(l.a, null, Object(s.e)(m, 'responsive'))
        );
      },
      v = function() {
        return Object(i.a)(g());
      };
  }
});
