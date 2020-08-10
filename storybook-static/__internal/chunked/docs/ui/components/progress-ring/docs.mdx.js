var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/progress-ring/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, l, o = t[0], s = t[1], c = t[2], g = 0, d = [];
      g < o.length;
      g++
    )
      (l = o[g]),
        Object.prototype.hasOwnProperty.call(i, l) && i[l] && d.push(i[l][0]),
        (i[l] = 0);
    for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
    for (p && p(t); d.length; ) d.shift()();
    return a.push.apply(a, c || []), r();
  }
  function r() {
    for (var e, t = 0; t < a.length; t++) {
      for (var r = a[t], n = !0, o = 1; o < r.length; o++) {
        var s = r[o];
        0 !== i[s] && (n = !1);
      }
      n && (a.splice(t--, 1), (e = l((l.s = r[0]))));
    }
    return e;
  }
  var n = {},
    i = { 59: 0 },
    a = [];
  function l(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, l), (r.l = !0), r.exports;
  }
  (l.m = e),
    (l.c = n),
    (l.d = function(e, t, r) {
      l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
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
      var r = Object.create(null);
      if (
        (l.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          l.d(
            r,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
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
  var o = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    s = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var c = 0; c < o.length; c++) t(o[c]);
  var p = s;
  return a.push([260, 0]), r();
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
  260: function(e, t, r) {
    'use strict';
    r.r(t),
      r.d(t, 'getElement', function() {
        return E;
      }),
      r.d(t, 'getContents', function() {
        return v;
      });
    var n = r(0),
      i = r.n(n),
      a = r(4),
      l = r(1),
      o = (r(23), r(15), r(2)),
      s = r(58),
      c = r(12),
      p = i.a.createElement(s.a, { percent: 100 }),
      g = [
        {
          id: 'progress-ring-partially-drained',
          label: 'Partially Drained',
          element: i.a.createElement(s.a, { percent: 88 })
        },
        {
          id: 'progress-ring-partially-filled',
          label: 'Partially Filled',
          element: i.a.createElement(s.a, { percent: 40, isFilling: !0 })
        },
        {
          id: 'progress-ring-warning',
          label: 'Partially Drained With Warning Icon',
          element: i.a.createElement(
            s.a,
            { percent: 20, isWarning: !0 },
            i.a.createElement(c.a, {
              symbol: 'warning',
              title: 'Warning',
              assistiveText: 'Warning'
            })
          )
        },
        {
          id: 'progress-ring-partially-filled-warning',
          label: 'Partially Filled with Warning Icon',
          element: i.a.createElement(
            s.a,
            { percent: 75, isFilling: !0, isWarning: !0 },
            i.a.createElement(c.a, {
              symbol: 'warning',
              title: 'Warning',
              assistiveText: 'Warning'
            })
          )
        },
        {
          id: 'progress-ring-expired',
          label: 'With Expired Icon',
          element: i.a.createElement(
            s.a,
            { percent: 0, isExpired: !0 },
            i.a.createElement(c.a, {
              symbol: 'error',
              title: 'Expired',
              assistiveText: 'Expired'
            })
          )
        },
        {
          id: 'progress-ring-complete',
          label: 'Complete',
          element: i.a.createElement(
            s.a,
            { percent: 100, isComplete: !0 },
            i.a.createElement(c.a, {
              symbol: 'check',
              title: 'Complete',
              assistiveText: 'Complete'
            })
          )
        },
        {
          id: 'progress-ring-large',
          label: 'Large Size',
          element: i.a.createElement(s.a, {
            percent: 100,
            className: 'slds-progress-ring_large'
          })
        },
        {
          id: 'progress-ring-active-step',
          label: 'Active Step',
          element: i.a.createElement(s.a, { percent: 100, isActiveStep: !0 })
        },
        {
          id: 'progress-ring-theme-warning',
          label: 'Theme: Warning',
          element: i.a.createElement(s.a, { percent: 100, isWarning: !0 })
        },
        {
          id: 'progress-ring-theme-expired',
          label: 'Theme: Expired',
          element: i.a.createElement(s.a, { percent: 100, isExpired: !0 })
        },
        {
          id: 'progress-ring-theme-complete',
          label: 'Theme: Complete',
          element: i.a.createElement(s.a, { percent: 100, isComplete: !0 })
        }
      ],
      d = a.c.code,
      u = a.c.h2,
      m = a.c.h3,
      h = a.c.h4,
      b = a.c.li,
      f = a.c.p,
      y = a.c.ul,
      E = function() {
        return Object(n.createElement)(
          a.b,
          {},
          Object(n.createElement)(
            'div',
            { className: 'lead doc' },
            'Customizable and configurable progress ring. Will display progress in a circular progress bar factor, and is capable of displaying iconography inside of the ring structure.'
          ),
          Object(n.createElement)(
            l.a,
            { exampleOnly: !0 },
            Object(o.e)(g, 'progress-ring-partially-filled')
          ),
          u({ id: 'About-Progress-Ring' }, 'About Progress Ring'),
          f(
            {},
            'The Progress Ring component renders a svg-based progress ring.'
          ),
          f(
            {},
            'Content (typically iconography) can be rendered inside the progress ring. For the current supported size of this progress ring, xxs sized icons should be used.'
          ),
          m({ id: 'Implementation-Guidelines' }, 'Implementation Guidelines'),
          h({ id: 'Defining-Completeness' }, 'Defining Completeness'),
          f(
            {},
            "The 'completeness' of the Progress Ring is indicated by the circular shape (pie slice), which is a svg shape of an arc."
          ),
          f(
            {},
            'The path declaration looks complex, but is actually pretty straightforward, with just a few parts that need customization.'
          ),
          f(
            {},
            "The breakdown of the progress ring's ",
            d({}, 'd'),
            ' attribute can be broken down like so:'
          ),
          f({}, d({}, 'd="M 1 0 A 1 1 0 {isLong} 1 {arcX} {arcY} L 0 0"')),
          y(
            {},
            b(
              {},
              "isLong: a binary flag if the arc should 'take the long path' (used for > 50% fill)"
            ),
            b(
              {},
              "arcX: the arc's x position, formulated by Math.cos(2 * Math.PI * fillPercent)"
            ),
            b(
              {},
              "arcY: the arc's y position, formulated by Math.sin(2 * Math.PI * fillPercent)"
            )
          ),
          f(
            {},
            'These calculations work in accordance with the defined svg viewBox, which goes from -1 to 1, on both x and y axis.'
          ),
          h({ id: 'Content' }, 'Content'),
          f(
            {},
            'The Progress Ring is currently designed to display any icon from our icon set.'
          ),
          m({ id: 'Accessibility' }, 'Accessibility'),
          f(
            {},
            d({}, '.slds-progress-ring__progress'),
            ' is the visual indicator of progress and needs proper aria roles and settings:'
          ),
          y(
            {},
            b({}, d({}, 'role'), ' : ', d({}, 'progressbar')),
            b(
              {},
              d({}, 'aria-valuemin'),
              ' : ',
              d({}, '0'),
              ' // the smallest valid value'
            ),
            b(
              {},
              d({}, 'aria-valuemax'),
              ' : ',
              d({}, '100'),
              ' // the largest valid value'
            ),
            b(
              {},
              d({}, 'aria-valuenow'),
              ' : ',
              d({}, '{fill}'),
              ' // the current fill value'
            )
          ),
          f(
            {},
            'Proper accessibility guidelines should be followed on any icons used within this Progress Ring component.'
          ),
          u({ id: 'Base' }, 'Base'),
          Object(n.createElement)(l.a, null, p),
          u({ id: 'Examples' }, 'Examples'),
          m({ id: 'Partially-Drained' }, 'Partially Drained'),
          Object(n.createElement)(
            l.a,
            null,
            Object(o.e)(g, 'progress-ring-partially-drained')
          ),
          m(
            { id: 'Partially-Drained-with-Warning-Icon' },
            'Partially Drained with Warning Icon'
          ),
          Object(n.createElement)(
            l.a,
            null,
            Object(o.e)(g, 'progress-ring-warning')
          ),
          m({ id: 'Partially-Filled' }, 'Partially Filled'),
          Object(n.createElement)(
            l.a,
            null,
            Object(o.e)(g, 'progress-ring-partially-filled')
          ),
          m(
            { id: 'Partially-Filled-with-Warning-Icon' },
            'Partially Filled with Warning Icon'
          ),
          Object(n.createElement)(
            l.a,
            null,
            Object(o.e)(g, 'progress-ring-partially-filled-warning')
          ),
          m({ id: 'With-Expired-Icon' }, 'With Expired Icon'),
          Object(n.createElement)(
            l.a,
            null,
            Object(o.e)(g, 'progress-ring-expired')
          ),
          m({ id: 'Complete' }, 'Complete'),
          Object(n.createElement)(
            l.a,
            null,
            Object(o.e)(g, 'progress-ring-complete')
          ),
          m({ id: 'Large-Size' }, 'Large Size'),
          Object(n.createElement)(
            l.a,
            null,
            Object(o.e)(g, 'progress-ring-large')
          ),
          m({ id: 'Active-Step' }, 'Active Step'),
          Object(n.createElement)(
            l.a,
            null,
            Object(o.e)(g, 'progress-ring-active-step')
          ),
          f({}, 'Set the color of the ring to the active step color.'),
          m({ id: 'Theme-Warning' }, 'Theme - Warning'),
          Object(n.createElement)(
            l.a,
            null,
            Object(o.e)(g, 'progress-ring-theme-warning')
          ),
          f({}, 'Set the color of the ring to the warning color.'),
          m({ id: 'Theme-Expired' }, 'Theme - Expired'),
          Object(n.createElement)(
            l.a,
            null,
            Object(o.e)(g, 'progress-ring-theme-expired')
          ),
          f({}, 'Set the color of the ring to the expired color.'),
          m({ id: 'Theme-Complete' }, 'Theme - Complete'),
          Object(n.createElement)(
            l.a,
            null,
            Object(o.e)(g, 'progress-ring-theme-complete')
          ),
          f(
            {},
            'Set the color of the ring to the complete color and solid fill.'
          )
        );
      },
      v = function() {
        return Object(a.a)(E());
      };
  }
});
