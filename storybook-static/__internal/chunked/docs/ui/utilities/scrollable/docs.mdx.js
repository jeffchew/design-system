var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/utilities/scrollable/docs.mdx.js'] = (function(
  e
) {
  function t(t) {
    for (
      var n, o, r = t[0], c = t[1], s = t[2], m = 0, d = [];
      m < r.length;
      m++
    )
      (o = r[m]),
        Object.prototype.hasOwnProperty.call(l, o) && l[o] && d.push(l[o][0]),
        (l[o] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    for (u && u(t); d.length; ) d.shift()();
    return a.push.apply(a, s || []), i();
  }
  function i() {
    for (var e, t = 0; t < a.length; t++) {
      for (var i = a[t], n = !0, r = 1; r < i.length; r++) {
        var c = i[r];
        0 !== l[c] && (n = !1);
      }
      n && (a.splice(t--, 1), (e = o((o.s = i[0]))));
    }
    return e;
  }
  var n = {},
    l = { 103: 0 },
    a = [];
  function o(t) {
    if (n[t]) return n[t].exports;
    var i = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(i.exports, i, i.exports, o), (i.l = !0), i.exports;
  }
  (o.m = e),
    (o.c = n),
    (o.d = function(e, t, i) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
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
      var i = Object.create(null);
      if (
        (o.r(i),
        Object.defineProperty(i, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          o.d(
            i,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return i;
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
  var r = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    c = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var s = 0; s < r.length; s++) t(r[s]);
  var u = c;
  return a.push([237, 0]), i();
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
  237: function(e, t, i) {
    'use strict';
    i.r(t),
      i.d(t, 'getElement', function() {
        return f;
      }),
      i.d(t, 'getContents', function() {
        return p;
      });
    var n = i(0),
      l = i.n(n),
      a = i(4),
      o = i(1),
      r = i(2),
      c = [
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
      ],
      s = a.c.code,
      u = a.c.h2,
      m = a.c.h3,
      d = a.c.p,
      f = function() {
        return Object(n.createElement)(
          a.b,
          {},
          Object(n.createElement)(
            'div',
            { className: 'doc lead' },
            'Make a containing box scrollable when scrolling is available.'
          ),
          u({ id: 'About-Scrollable' }, 'About Scrollable'),
          d(
            {},
            'Use the scrollable utility when you need to provide scrolling within a section of a page. For example, when the content within an element exceeds either the width or height of the element, applying ',
            s({}, '.slds-scrollable_y'),
            ' provides a vertical scrollbar, while ',
            s({}, '.slds-scrollable_x'),
            ' adds a horizontal scrollbar.'
          ),
          u({ id: 'Examples' }, 'Examples'),
          m({ id: 'Auto' }, 'Auto'),
          Object(n.createElement)(o.a, null, Object(r.e)(c, 'auto')),
          m({ id: 'None' }, 'None'),
          Object(n.createElement)(o.a, null, Object(r.e)(c, 'none')),
          m({ id: 'X-Axis' }, 'X-Axis'),
          Object(n.createElement)(o.a, null, Object(r.e)(c, 'x-axis')),
          m({ id: 'Y-Axis' }, 'Y-Axis'),
          Object(n.createElement)(o.a, null, Object(r.e)(c, 'y-axis'))
        );
      },
      p = function() {
        return Object(a.a)(f());
      };
  }
});
