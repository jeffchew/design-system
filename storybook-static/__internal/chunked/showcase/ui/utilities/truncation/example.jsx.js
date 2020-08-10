var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/utilities/truncation/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var a, r, s = t[0], o = t[1], c = t[2], u = 0, h = [];
      u < s.length;
      u++
    )
      (r = s[u]),
        Object.prototype.hasOwnProperty.call(l, r) && l[r] && h.push(l[r][0]),
        (l[r] = 0);
    for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    for (d && d(t); h.length; ) h.shift()();
    return i.push.apply(i, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], a = !0, s = 1; s < n.length; s++) {
        var o = n[s];
        0 !== l[o] && (a = !1);
      }
      a && (i.splice(t--, 1), (e = r((r.s = n[0]))));
    }
    return e;
  }
  var a = {},
    l = {
      185: 0,
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
    i = [];
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
  var s = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    o = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var c = 0; c < s.length; c++) t(s[c]);
  var d = o;
  return i.push([229, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  229: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'ListItem', function() {
        return s;
      }),
      n.d(t, 'List', function() {
        return o;
      }),
      n.d(t, 'examples', function() {
        return c;
      });
    var a = n(0),
      l = n.n(a),
      i = n(2),
      r = n.n(i),
      s = function(e) {
        return l.a.createElement(
          'li',
          {
            className: r()(
              'slds-list__item slds-m-right_large slds-grid',
              e.className
            )
          },
          l.a.createElement('span', null, 'To:'),
          l.a.createElement(
            'span',
            { className: 'slds-m-left_xx-small slds-truncate', title: e.title },
            e.children
          ),
          l.a.createElement(
            'span',
            { className: 'slds-m-left_xx-small slds-no-flex' },
            ' + 44 more'
          )
        );
      },
      o = function(e) {
        return l.a.createElement(
          'ul',
          null,
          l.a.createElement(
            s,
            {
              title: 'Lei Chan',
              className: 'slds-truncate_container_' + e.width
            },
            l.a.createElement('a', { href: 'javascript:void(0);' }, 'Lei Chan')
          ),
          l.a.createElement(
            s,
            {
              title: 'Lei Chan with Long Name',
              className: 'slds-truncate_container_' + e.width
            },
            l.a.createElement(
              'a',
              { href: 'javascript:void(0);' },
              'Lei Chan with Long Name'
            )
          ),
          l.a.createElement(
            s,
            {
              title:
                'Lei Chan with Long Name that might go on for quite some distance futher than you might expect',
              className: 'slds-truncate_container_' + e.width
            },
            l.a.createElement(
              'a',
              { href: 'javascript:void(0);' },
              'Lei Chan with Long Name that might go on for quite some distance futher than you might expect'
            )
          )
        );
      },
      c = [
        {
          id: 'fluid',
          label: 'Single line',
          element: l.a.createElement(
            'div',
            { className: 'slds-size_1-of-2' },
            l.a.createElement(
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
          element: l.a.createElement(
            'div',
            { className: 'slds-grid', style: { width: '200px' } },
            l.a.createElement(
              'div',
              { className: 'slds-grid slds-has-flexi-truncate' },
              l.a.createElement(
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
          element: l.a.createElement(o, { width: '25' })
        },
        {
          id: '33%',
          label: 'Max-width 33%',
          element: l.a.createElement(o, { width: '33' })
        },
        {
          id: '50%',
          label: 'Max-width 50%',
          element: l.a.createElement(o, { width: '50' })
        },
        {
          id: '66%',
          label: 'Max-width 66%',
          element: l.a.createElement(o, { width: '66' })
        },
        {
          id: '75%',
          label: 'Max-width 75%',
          element: l.a.createElement(o, { width: '75' })
        }
      ];
  }
});
