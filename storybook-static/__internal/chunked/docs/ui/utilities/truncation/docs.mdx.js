var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/utilities/truncation/docs.mdx.js'] = (function(
  e
) {
  function t(t) {
    for (
      var a, r, o = t[0], s = t[1], c = t[2], u = 0, h = [];
      u < o.length;
      u++
    )
      (r = o[u]),
        Object.prototype.hasOwnProperty.call(i, r) && i[r] && h.push(i[r][0]),
        (i[r] = 0);
    for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
    for (d && d(t); h.length; ) h.shift()();
    return l.push.apply(l, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < l.length; t++) {
      for (var n = l[t], a = !0, o = 1; o < n.length; o++) {
        var s = n[o];
        0 !== i[s] && (a = !1);
      }
      a && (l.splice(t--, 1), (e = r((r.s = n[0]))));
    }
    return e;
  }
  var a = {},
    i = { 107: 0 },
    l = [];
  function r(t) {
    if (a[t]) return a[t].exports;
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = e),
    (r.c = a),
    (r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          r.d(
            n,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return n;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(t, 'a', t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = '/assets/scripts/bundle/');
  var o = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    s = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var c = 0; c < o.length; c++) t(o[c]);
  var d = s;
  return l.push([243, 0]), n();
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
  243: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getElement', function() {
        return x;
      }),
      n.d(t, 'getContents', function() {
        return w;
      });
    var a = n(0),
      i = n.n(a),
      l = n(4),
      r = n(1),
      o = n(15),
      s = n(2),
      c = n(5),
      d = n.n(c),
      u = function(e) {
        return i.a.createElement(
          'li',
          {
            className: d()(
              'slds-list__item slds-m-right_large slds-grid',
              e.className
            )
          },
          i.a.createElement('span', null, 'To:'),
          i.a.createElement(
            'span',
            { className: 'slds-m-left_xx-small slds-truncate', title: e.title },
            e.children
          ),
          i.a.createElement(
            'span',
            { className: 'slds-m-left_xx-small slds-no-flex' },
            ' + 44 more'
          )
        );
      },
      h = function(e) {
        return i.a.createElement(
          'ul',
          null,
          i.a.createElement(
            u,
            {
              title: 'Lei Chan',
              className: 'slds-truncate_container_' + e.width
            },
            i.a.createElement('a', { href: 'javascript:void(0);' }, 'Lei Chan')
          ),
          i.a.createElement(
            u,
            {
              title: 'Lei Chan with Long Name',
              className: 'slds-truncate_container_' + e.width
            },
            i.a.createElement(
              'a',
              { href: 'javascript:void(0);' },
              'Lei Chan with Long Name'
            )
          ),
          i.a.createElement(
            u,
            {
              title:
                'Lei Chan with Long Name that might go on for quite some distance futher than you might expect',
              className: 'slds-truncate_container_' + e.width
            },
            i.a.createElement(
              'a',
              { href: 'javascript:void(0);' },
              'Lei Chan with Long Name that might go on for quite some distance futher than you might expect'
            )
          )
        );
      },
      m = [
        {
          id: 'fluid',
          label: 'Single line',
          element: i.a.createElement(
            'div',
            { className: 'slds-size_1-of-2' },
            i.a.createElement(
              'p',
              {
                className: 'slds-truncate',
                title:
                  'Long text field with many lines and truncation will look like this. Even though the text might go on for ages and ages.'
              },
              'Long text field with many lines and truncation will look like this. Even though the text might go on for ages and ages.'
            )
          )
        },
        {
          id: 'nested-grids',
          label: 'Single line within nested grid containers',
          element: i.a.createElement(
            'div',
            { className: 'slds-grid', style: { width: '200px' } },
            i.a.createElement(
              'div',
              { className: 'slds-grid slds-has-flexi-truncate' },
              i.a.createElement(
                'p',
                {
                  className: 'slds-truncate',
                  title:
                    'Long text field with many lines and truncation will look like this. Even though the text might go on for ages and ages.'
                },
                'Long text field with many lines and truncation will look like this. Even though the text might go on for ages and ages.'
              )
            )
          )
        },
        {
          id: '25%',
          label: 'Max-width 25%',
          element: i.a.createElement(h, { width: '25' })
        },
        {
          id: '33%',
          label: 'Max-width 33%',
          element: i.a.createElement(h, { width: '33' })
        },
        {
          id: '50%',
          label: 'Max-width 50%',
          element: i.a.createElement(h, { width: '50' })
        },
        {
          id: '66%',
          label: 'Max-width 66%',
          element: i.a.createElement(h, { width: '66' })
        },
        {
          id: '75%',
          label: 'Max-width 75%',
          element: i.a.createElement(h, { width: '75' })
        }
      ],
      f = l.c.code,
      g = l.c.h2,
      p = l.c.h3,
      b = l.c.p,
      x = function() {
        return Object(a.createElement)(
          l.b,
          {},
          Object(a.createElement)(
            'div',
            { className: 'doc lead' },
            'When applying truncation, place the full text in a title attribute so that it’s accessible on hover.'
          ),
          Object(a.createElement)(
            o.a,
            { type: 'note', heading: 'note' },
            Object(a.createElement)(
              'p',
              null,
              'There is an iOS bug that is triggered when you add a component from Visualforce into S1 using an iFrame. The truncated element does not recognize its width.'
            )
          ),
          g({ id: 'About-Truncation' }, 'About Truncation'),
          b(
            {},
            'If problems occur when using truncation with elements that use flexbox, you might need to add the ',
            f({}, '.slds-has-flexi-truncate'),
            ' class on the flexbox child node ( ',
            f({}, '.slds-col'),
            ' or ',
            f({}, '.slds-col_padded'),
            ' elements) that contains the truncated text.'
          ),
          g({ id: 'Examples' }, 'Examples'),
          p({ id: 'Single-Line' }, 'Single Line'),
          Object(a.createElement)(r.a, null, Object(s.e)(m, 'fluid')),
          p(
            { id: 'Single-Line-with-Nested-Grid-Containers' },
            'Single Line with Nested Grid Containers'
          ),
          Object(a.createElement)(r.a, null, Object(s.e)(m, 'nested-grids')),
          p({ id: 'Maximum-Width-of-25percent' }, 'Maximum Width of 25%'),
          Object(a.createElement)(r.a, null, Object(s.e)(m, '25%')),
          p({ id: 'Maximum-Width-of-33percent' }, 'Maximum Width of 33%'),
          Object(a.createElement)(r.a, null, Object(s.e)(m, '33%')),
          p({ id: 'Maximum-Width-of-75percent' }, 'Maximum Width of 75%'),
          Object(a.createElement)(r.a, null, Object(s.e)(m, '75%'))
        );
      },
      w = function() {
        return Object(l.a)(x());
      };
  }
});
