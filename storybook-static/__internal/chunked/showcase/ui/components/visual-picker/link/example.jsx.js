var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/visual-picker/link/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, a, o = t[0], i = t[1], c = t[2], d = 0, f = [];
      d < o.length;
      d++
    )
      (a = o[d]),
        Object.prototype.hasOwnProperty.call(s, a) && s[a] && f.push(s[a][0]),
        (s[a] = 0);
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    for (u && u(t); f.length; ) f.shift()();
    return l.push.apply(l, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < l.length; t++) {
      for (var n = l[t], r = !0, o = 1; o < n.length; o++) {
        var i = n[o];
        0 !== s[i] && (r = !1);
      }
      r && (l.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var r = {},
    s = {
      158: 0,
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
  function a(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = e),
    (a.c = r),
    (a.d = function(e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (a.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (a.t = function(e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          a.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (a.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return a.d(t, 'a', t), t;
    }),
    (a.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = '/assets/scripts/bundle/');
  var o = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    i = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var c = 0; c < o.length; c++) t(o[c]);
  var u = i;
  return l.push([122, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  122: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'VisualPickerMediaObject', function() {
        return i;
      });
    var r = n(0),
      s = n.n(r),
      l = n(2),
      a = n.n(l),
      o = n(9),
      i = function(e) {
        var t = e.symbol || 'knowledge_base',
          n =
            e.icon ||
            s.a.createElement(o.UtilityIcon, {
              className: 'slds-icon-text-default',
              symbol: t,
              title: !1,
              assistiveText: !1
            });
        return s.a.createElement(
          'a',
          {
            href: 'javascript:void(0);',
            className: a()(
              'slds-box slds-box_link slds-box_x-small slds-media',
              e.className
            )
          },
          s.a.createElement(
            'div',
            {
              className:
                'slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center slds-m-left_xx-small'
            },
            n
          ),
          s.a.createElement(
            'div',
            {
              className: 'slds-media__body slds-border_left slds-p-around_small'
            },
            e.children
          )
        );
      };
    t.default = s.a.createElement(
      'div',
      { className: 'demo-only', style: { width: '24rem' } },
      s.a.createElement(
        i,
        { symbol: 'knowledge_base' },
        s.a.createElement(
          'h2',
          {
            className: 'slds-truncate slds-text-heading_small',
            title: 'Share the knowledge'
          },
          'Share the knowledge'
        ),
        s.a.createElement(
          'p',
          { className: 'slds-m-top_small' },
          "Harness your team's collective know-how with our powerful knowledge base"
        )
      )
    );
  }
});
