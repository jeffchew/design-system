var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/popovers/warning/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, i, l = t[0], s = t[1], u = t[2], d = 0, p = [];
      d < l.length;
      d++
    )
      (i = l[d]),
        Object.prototype.hasOwnProperty.call(o, i) && o[i] && p.push(o[i][0]),
        (o[i] = 0);
    for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
    for (c && c(t); p.length; ) p.shift()();
    return a.push.apply(a, u || []), r();
  }
  function r() {
    for (var e, t = 0; t < a.length; t++) {
      for (var r = a[t], n = !0, l = 1; l < r.length; l++) {
        var s = r[l];
        0 !== o[s] && (n = !1);
      }
      n && (a.splice(t--, 1), (e = i((i.s = r[0]))));
    }
    return e;
  }
  var n = {},
    o = {
      123: 0,
      6: 0,
      13: 0,
      14: 0,
      22: 0,
      24: 0,
      26: 0,
      36: 0,
      37: 0,
      56: 0,
      72: 0,
      73: 0,
      79: 0,
      80: 0,
      93: 0,
      94: 0,
      96: 0,
      97: 0,
      98: 0,
      103: 0,
      104: 0,
      112: 0,
      117: 0,
      118: 0,
      122: 0,
      124: 0,
      127: 0,
      131: 0,
      133: 0,
      135: 0,
      136: 0,
      137: 0,
      140: 0,
      142: 0,
      145: 0,
      146: 0,
      147: 0,
      150: 0,
      154: 0,
      157: 0
    },
    a = [];
  function i(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.m = e),
    (i.c = n),
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
        for (var n in e)
          i.d(
            r,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
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
  var l = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    s = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var u = 0; u < l.length; u++) t(l[u]);
  var c = s;
  return a.push([189, 0]), r();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  189: function(e, t, r) {
    'use strict';
    r.r(t),
      r.d(t, 'examples', function() {
        return s;
      });
    var n = r(0),
      o = r.n(n),
      a = r(27),
      i = r(60),
      l = r(6).c.uniqueId('dialog-heading-id-');
    t.default = o.a.createElement(
      a.Popover,
      {
        className: 'slds-popover_warning slds-nubbin_bottom-left',
        headingId: l,
        bodyClassName: 'slds-popover_warning__body',
        header: o.a.createElement(i.FeedbackHeader, {
          headingId: l,
          title: 'Review warning',
          symbol: 'warning',
          iconDefault: !0
        }),
        closeButton: !0
      },
      o.a.createElement(
        'p',
        null,
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        ' ',
        o.a.createElement(
          'a',
          { href: 'javascript:void(0);', title: 'Learn More' },
          'Learn More'
        )
      )
    );
    var s = [
      {
        id: 'with-footer',
        label: 'With Footer',
        element: o.a.createElement(
          a.Popover,
          {
            className: 'slds-popover_warning slds-nubbin_bottom-left',
            bodyClassName: 'slds-popover_warning__body',
            headingId: l,
            header: o.a.createElement(i.FeedbackHeader, {
              headingId: l,
              title: 'Review warning',
              symbol: 'warning',
              iconDefault: !0
            }),
            footer: o.a.createElement(i.FeedbackFooter, null),
            closeButton: !0
          },
          o.a.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            ' ',
            o.a.createElement(
              'a',
              { href: 'javascript:void(0);', title: 'Learn More' },
              'Learn More'
            )
          )
        )
      }
    ];
  }
});
