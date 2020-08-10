var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/utilities/sizing/docs.mdx.js'] = (function(e) {
  function t(t) {
    for (
      var n, i, s = t[0], r = t[1], c = t[2], d = 0, f = [];
      d < s.length;
      d++
    )
      (i = s[d]),
        Object.prototype.hasOwnProperty.call(l, i) && l[i] && f.push(l[i][0]),
        (l[i] = 0);
    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    for (m && m(t); f.length; ) f.shift()();
    return o.push.apply(o, c || []), a();
  }
  function a() {
    for (var e, t = 0; t < o.length; t++) {
      for (var a = o[t], n = !0, s = 1; s < a.length; s++) {
        var r = a[s];
        0 !== l[r] && (n = !1);
      }
      n && (o.splice(t--, 1), (e = i((i.s = a[0]))));
    }
    return e;
  }
  var n = {},
    l = { 104: 0 },
    o = [];
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
  var s = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    r = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var c = 0; c < s.length; c++) t(s[c]);
  var m = r;
  return o.push([283, 0]), a();
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
  283: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'getElement', function() {
        return y;
      }),
      a.d(t, 'getContents', function() {
        return S;
      });
    var n = a(0),
      l = a.n(n),
      o = a(4),
      i = a(1),
      s = a(2),
      r = function(e) {
        return l.a.createElement(
          'div',
          { className: 'slds-size_'.concat(e.size) },
          l.a.createElement(
            'div',
            {
              className:
                'slds-box slds-box_x-small slds-text-align_center slds-m-around_x-small'
            },
            '.slds-size_',
            e.size
          )
        );
      },
      c = [
        {
          id: 'two-column',
          label: '2 Column Span',
          element: l.a.createElement(
            'div',
            { className: 'demo-only demo-only--sizing slds-grid slds-wrap' },
            l.a.createElement(r, { size: '1-of-2' }),
            l.a.createElement(r, { size: '1-of-2' }),
            l.a.createElement(r, { size: '2-of-2' })
          )
        },
        {
          id: 'three-column',
          label: '3 Column Span',
          element: l.a.createElement(
            'div',
            { className: 'demo-only demo-only--sizing slds-grid slds-wrap' },
            l.a.createElement(r, { size: '1-of-3' }),
            l.a.createElement(r, { size: '1-of-3' }),
            l.a.createElement(r, { size: '1-of-3' }),
            l.a.createElement(r, { size: '1-of-3' }),
            l.a.createElement(r, { size: '2-of-3' }),
            l.a.createElement(r, { size: '3-of-3' })
          )
        },
        {
          id: 'four-column',
          label: '4 Column Span',
          element: l.a.createElement(
            'div',
            { className: 'demo-only demo-only--sizing slds-grid slds-wrap' },
            l.a.createElement(r, { size: '1-of-4' }),
            l.a.createElement(r, { size: '1-of-4' }),
            l.a.createElement(r, { size: '1-of-4' }),
            l.a.createElement(r, { size: '1-of-4' }),
            l.a.createElement(r, { size: '1-of-4' }),
            l.a.createElement(r, { size: '3-of-4' }),
            l.a.createElement(r, { size: '2-of-4' }),
            l.a.createElement(r, { size: '2-of-4' }),
            l.a.createElement(r, { size: '4-of-4' })
          )
        },
        {
          id: 'five-column',
          label: '5 Column Span',
          element: l.a.createElement(
            'div',
            { className: 'demo-only demo-only--sizing slds-grid slds-wrap' },
            l.a.createElement(r, { size: '1-of-5' }),
            l.a.createElement(r, { size: '1-of-5' }),
            l.a.createElement(r, { size: '1-of-5' }),
            l.a.createElement(r, { size: '1-of-5' }),
            l.a.createElement(r, { size: '1-of-5' }),
            l.a.createElement(r, { size: '1-of-5' }),
            l.a.createElement(r, { size: '4-of-5' }),
            l.a.createElement(r, { size: '2-of-5' }),
            l.a.createElement(r, { size: '3-of-5' }),
            l.a.createElement(r, { size: '5-of-5' })
          )
        },
        {
          id: 'six-column',
          label: '6 Column Span',
          element: l.a.createElement(
            'div',
            { className: 'demo-only demo-only--sizing slds-grid slds-wrap' },
            l.a.createElement(r, { size: '1-of-6' }),
            l.a.createElement(r, { size: '1-of-6' }),
            l.a.createElement(r, { size: '1-of-6' }),
            l.a.createElement(r, { size: '1-of-6' }),
            l.a.createElement(r, { size: '1-of-6' }),
            l.a.createElement(r, { size: '1-of-6' }),
            l.a.createElement(r, { size: '2-of-6' }),
            l.a.createElement(r, { size: '4-of-6' }),
            l.a.createElement(r, { size: '3-of-6' }),
            l.a.createElement(r, { size: '3-of-6' }),
            l.a.createElement(r, { size: '6-of-6' })
          )
        },
        {
          id: 'seven-column',
          label: '7 Column Span',
          element: l.a.createElement(
            'div',
            { className: 'demo-only demo-only--sizing slds-grid slds-wrap' },
            l.a.createElement(r, { size: '1-of-7' }),
            l.a.createElement(r, { size: '1-of-7' }),
            l.a.createElement(r, { size: '1-of-7' }),
            l.a.createElement(r, { size: '1-of-7' }),
            l.a.createElement(r, { size: '1-of-7' }),
            l.a.createElement(r, { size: '1-of-7' }),
            l.a.createElement(r, { size: '1-of-7' }),
            l.a.createElement(r, { size: '2-of-7' }),
            l.a.createElement(r, { size: '5-of-7' }),
            l.a.createElement(r, { size: '3-of-7' }),
            l.a.createElement(r, { size: '4-of-7' }),
            l.a.createElement(r, { size: '7-of-7' })
          )
        },
        {
          id: 'eight-column',
          label: '8 Column Span',
          element: l.a.createElement(
            'div',
            { className: 'demo-only demo-only--sizing slds-grid slds-wrap' },
            l.a.createElement(r, { size: '1-of-8' }),
            l.a.createElement(r, { size: '1-of-8' }),
            l.a.createElement(r, { size: '1-of-8' }),
            l.a.createElement(r, { size: '1-of-8' }),
            l.a.createElement(r, { size: '1-of-8' }),
            l.a.createElement(r, { size: '1-of-8' }),
            l.a.createElement(r, { size: '1-of-8' }),
            l.a.createElement(r, { size: '1-of-8' }),
            l.a.createElement(r, { size: '2-of-8' }),
            l.a.createElement(r, { size: '6-of-8' }),
            l.a.createElement(r, { size: '3-of-8' }),
            l.a.createElement(r, { size: '5-of-8' }),
            l.a.createElement(r, { size: '4-of-8' }),
            l.a.createElement(r, { size: '4-of-8' }),
            l.a.createElement(r, { size: '8-of-8' })
          )
        },
        {
          id: 'twelve-column',
          label: '12 Column Span',
          element: l.a.createElement(
            'div',
            { className: 'demo-only demo-only--sizing slds-grid slds-wrap' },
            l.a.createElement(r, { size: '1-of-12' }),
            l.a.createElement(r, { size: '1-of-12' }),
            l.a.createElement(r, { size: '1-of-12' }),
            l.a.createElement(r, { size: '1-of-12' }),
            l.a.createElement(r, { size: '1-of-12' }),
            l.a.createElement(r, { size: '1-of-12' }),
            l.a.createElement(r, { size: '1-of-12' }),
            l.a.createElement(r, { size: '1-of-12' }),
            l.a.createElement(r, { size: '1-of-12' }),
            l.a.createElement(r, { size: '1-of-12' }),
            l.a.createElement(r, { size: '1-of-12' }),
            l.a.createElement(r, { size: '1-of-12' }),
            l.a.createElement(r, { size: '2-of-12' }),
            l.a.createElement(r, { size: '10-of-12' }),
            l.a.createElement(r, { size: '3-of-12' }),
            l.a.createElement(r, { size: '9-of-12' }),
            l.a.createElement(r, { size: '4-of-12' }),
            l.a.createElement(r, { size: '8-of-12' }),
            l.a.createElement(r, { size: '5-of-12' }),
            l.a.createElement(r, { size: '7-of-12' }),
            l.a.createElement(r, { size: '6-of-12' }),
            l.a.createElement(r, { size: '6-of-12' }),
            l.a.createElement(r, { size: '12-of-12' })
          )
        }
      ],
      m = o.c.a,
      d = o.c.code,
      f = o.c.h2,
      u = o.c.h3,
      p = o.c.p,
      z = o.c.table,
      E = o.c.tbody,
      h = o.c.td,
      g = o.c.th,
      b = o.c.thead,
      v = o.c.tr,
      y = function() {
        return Object(n.createElement)(
          o.b,
          {},
          Object(n.createElement)(
            'div',
            { className: 'doc lead' },
            'Sizing utilities allow for easy width sizing on an element.'
          ),
          f({ id: 'About-Sizing' }, 'About Sizing'),
          p(
            {},
            'Our sizing class names are set up in a human-readable format, e.g. ',
            d({}, '.slds-size_1-of-2'),
            '. This equates to a width of 50%.'
          ),
          p(
            {},
            'By default, a group of sizing helpers are created based on standard grid column spans of 2, 3, 4, 5, 6, 7, 8 and 12. For example, if you need 3 cards to horizontally align along the same x-axis, you would use the class ',
            d({}, '.slds-size_1-of-3'),
            ' on each element. This will make each card take up 33.333% of containing section.'
          ),
          p(
            {},
            'Our sizing helpers have the option to be responsive. By pre-pending a breakpoint name to a sizing helper, e.g. ',
            d({}, '.slds-medium-size_1-of-3'),
            ' you will output a width at the specified breakpoint name.'
          ),
          p(
            {},
            'Absolute sizing helpers are also available (where widths are declared in ',
            d({}, 'rem'),
            ' units): ',
            d({}, 'xx-small'),
            ', ',
            d({}, 'x-small'),
            ', ',
            d({}, 'medium'),
            ', ',
            d({}, 'large'),
            ', ',
            d({}, 'x-large'),
            ' and ',
            d({}, 'xx-large'),
            ' as defined in the ',
            m(
              { href: '/design-tokens/#category-sizing' },
              'sizing category of the Design Tokens'
            ),
            '. e.g. ',
            d({}, '.slds-size_large'),
            '.'
          ),
          p(
            {},
            'In some uncommon cases, you may need a sizing helper that is up to a certain breakpoint. For these, use the classes prefixed with ',
            d({}, 'max-'),
            ' to achieve this result.'
          ),
          p({}, 'Here is an overview of our available breakpoint names:'),
          z(
            {},
            b({}, v({}, g({}, 'Breakpoint Name'), g({}, 'Breakpoint Width'))),
            E(
              {},
              v({}, h({}, d({}, 'small-')), h({}, '30em / 480px and higher')),
              v({}, h({}, d({}, 'medium-')), h({}, '48em / 768px and higher')),
              v({}, h({}, d({}, 'large-')), h({}, '64em / 1024px and higher')),
              v(
                {},
                h({}, d({}, 'max-small-')),
                h({}, 'up to 29.9375em / 479px')
              ),
              v(
                {},
                h({}, d({}, 'max-medium-')),
                h({}, 'up to 47.9375em / 767px')
              ),
              v(
                {},
                h({}, d({}, 'max-large-')),
                h({}, 'up to 63.9375em / 1023px')
              )
            )
          ),
          p(
            {},
            'Our responsive sizing helpers are built upon a mobile first approach. To achieve the desired outcome of this approach, you will need to append responsive sizing helpers to an element that overrides the previous breakpoint. A default sizing helper is required and responsive sizing helpers are additive. The following example demonstrates the class name position for each breakpoint:'
          ),
          p(
            {},
            d(
              {},
              '<div class="[default] [small size override] [medium size override] [large size override]">'
            )
          ),
          f({ id: 'Examples' }, 'Examples'),
          u({ id: '2-Column-Span' }, '2 Column Span'),
          Object(n.createElement)(i.a, null, Object(s.e)(c, 'two-column')),
          u({ id: '3-Column-Span' }, '3 Column Span'),
          Object(n.createElement)(i.a, null, Object(s.e)(c, 'three-column')),
          u({ id: '4-Column-Span' }, '4 Column Span'),
          Object(n.createElement)(i.a, null, Object(s.e)(c, 'four-column')),
          u({ id: '5-Column-Span' }, '5 Column Span'),
          Object(n.createElement)(i.a, null, Object(s.e)(c, 'five-column')),
          u({ id: '6-Column-Span' }, '6 Column Span'),
          Object(n.createElement)(i.a, null, Object(s.e)(c, 'six-column')),
          u({ id: '7-Column-Span' }, '7 Column Span'),
          Object(n.createElement)(i.a, null, Object(s.e)(c, 'seven-column')),
          u({ id: '8-Column-Span' }, '8 Column Span'),
          Object(n.createElement)(i.a, null, Object(s.e)(c, 'eight-column')),
          u({ id: '12-Column-Span' }, '12 Column Span'),
          Object(n.createElement)(i.a, null, Object(s.e)(c, 'twelve-column'))
        );
      },
      S = function() {
        return Object(o.a)(y());
      };
  }
});
