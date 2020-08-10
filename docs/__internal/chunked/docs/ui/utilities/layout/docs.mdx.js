var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/utilities/layout/docs.mdx.js'] = (function(e) {
  function t(t) {
    for (
      var a, l, c = t[0], s = t[1], i = t[2], d = 0, p = [];
      d < c.length;
      d++
    )
      (l = c[d]),
        Object.prototype.hasOwnProperty.call(r, l) && r[l] && p.push(r[l][0]),
        (r[l] = 0);
    for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
    for (u && u(t); p.length; ) p.shift()();
    return o.push.apply(o, i || []), n();
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], a = !0, c = 1; c < n.length; c++) {
        var s = n[c];
        0 !== r[s] && (a = !1);
      }
      a && (o.splice(t--, 1), (e = l((l.s = n[0]))));
    }
    return e;
  }
  var a = {},
    r = { 95: 0 },
    o = [];
  function l(t) {
    if (a[t]) return a[t].exports;
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, l), (n.l = !0), n.exports;
  }
  (l.m = e),
    (l.c = a),
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
        for (var a in e)
          l.d(
            n,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
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
  var c = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    s = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var i = 0; i < c.length; i++) t(c[i]);
  var u = s;
  return o.push([248, 0]), n();
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
  248: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getElement', function() {
        return y;
      }),
      n.d(t, 'getContents', function() {
        return j;
      });
    var a = n(0),
      r = n.n(a),
      o = n(4),
      l = n(1),
      c = n(5),
      s = n.n(c),
      i = function(e) {
        return r.a.createElement(
          'div',
          { className: s()('slds-card', e.className) },
          r.a.createElement(
            'div',
            { className: 'slds-p-around_medium' },
            'My Component'
          )
        );
      },
      u = n(11),
      d = o.c.a,
      p = o.c.code,
      f = o.c.h2,
      m = o.c.h3,
      h = o.c.li,
      b = o.c.p,
      g = o.c.ul,
      y = function() {
        return Object(a.createElement)(
          o.b,
          {},
          Object(a.createElement)(
            'div',
            { className: 'doc lead' },
            'Layout utility classes will help you to achieve layouts found within the Salesforce Platform.'
          ),
          f({ id: 'Examples' }, 'Examples'),
          m({ id: 'Magnets' }, 'Magnets'),
          b(
            {},
            'The magnet utilities are used to vertically attach adjacent card-like components.'
          ),
          b(
            {},
            'The components/utilities that provide a card-like look are the following:'
          ),
          g(
            {},
            h({}, d({ href: '/components/cards/' }, 'Cards')),
            h({}, d({ href: '/components/page-headers' }, 'Page Headers')),
            h({}, d({ href: '/utilities/box' }, 'Box'))
          ),
          b(
            {},
            'If you need a card-like component to appear flush to the card-like component below, you can add the classes  ',
            p({}, 'slds-has-bottom-magnet'),
            ' and ',
            p({}, 'slds-has-top-magnet'),
            '.'
          ),
          Object(a.createElement)(
            u.a,
            { title: 'layout card' },
            Object(a.createElement)(
              'div',
              { className: 'slds-grid slds-grid_pull-padded slds-wrap' },
              Object(a.createElement)(
                'div',
                {
                  className:
                    'slds-col slds-size_1-of-1 slds-large-size_1-of-2 slds-p-horizontal_medium'
                },
                Object(a.createElement)('strong', null, 'Before'),
                Object(a.createElement)(
                  l.a,
                  { toggleCode: !1 },
                  Object(a.createElement)(
                    'div',
                    null,
                    Object(a.createElement)(i, null),
                    Object(a.createElement)(i, null)
                  )
                )
              ),
              Object(a.createElement)(
                'div',
                {
                  className:
                    'slds-col slds-size_1-of-1 slds-large-size_1-of-2 slds-p-horizontal_medium'
                },
                Object(a.createElement)('strong', null, 'After'),
                Object(a.createElement)(
                  l.a,
                  { toggleCode: !1 },
                  Object(a.createElement)(
                    'div',
                    null,
                    Object(a.createElement)(i, {
                      className: 'slds-has-bottom-magnet'
                    }),
                    Object(a.createElement)(i, {
                      className: 'slds-has-top-magnet'
                    })
                  )
                )
              )
            )
          ),
          b(
            {},
            "In the after example, you'll notice the component's top and bottom side are flattened out and appear connected."
          )
        );
      },
      j = function() {
        return Object(o.a)(y());
      };
  }
});
