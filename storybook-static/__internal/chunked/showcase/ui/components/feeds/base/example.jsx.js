var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/feeds/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var a, s, o = t[0], c = t[1], i = t[2], d = 0, m = [];
      d < o.length;
      d++
    )
      (s = o[d]),
        Object.prototype.hasOwnProperty.call(l, s) && l[s] && m.push(l[s][0]),
        (l[s] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
    for (u && u(t); m.length; ) m.shift()();
    return r.push.apply(r, i || []), n();
  }
  function n() {
    for (var e, t = 0; t < r.length; t++) {
      for (var n = r[t], a = !0, o = 1; o < n.length; o++) {
        var c = n[o];
        0 !== l[c] && (a = !1);
      }
      a && (r.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var a = {},
    l = {
      78: 0,
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
    r = [];
  function s(t) {
    if (a[t]) return a[t].exports;
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.m = e),
    (s.c = a),
    (s.d = function(e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (s.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (s.t = function(e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          s.d(
            n,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return n;
    }),
    (s.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return s.d(t, 'a', t), t;
    }),
    (s.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = '/assets/scripts/bundle/');
  var o = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    c = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var i = 0; i < o.length; i++) t(o[i]);
  var u = c;
  return r.push([128, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  128: function(e, t, n) {
    'use strict';
    n.r(t);
    var a = n(0),
      l = n.n(a),
      r = n(51),
      s = n(55);
    t.default = l.a.createElement(
      'div',
      { className: 'slds-feed' },
      l.a.createElement(
        'ul',
        { className: 'slds-feed__list' },
        l.a.createElement(
          'li',
          { className: 'slds-feed__item' },
          l.a.createElement(
            r.Post,
            null,
            l.a.createElement(r.PostHeader, null),
            l.a.createElement(
              r.PostContent,
              null,
              l.a.createElement(
                'p',
                null,
                "Hey there! Here's the latest demo presentation",
                ' ',
                l.a.createElement(
                  'a',
                  { href: 'javascript:void(0);', title: 'Jenna Davis' },
                  '@Jenna Davis'
                ),
                ", let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots."
              )
            ),
            l.a.createElement(
              r.PostFooter,
              null,
              l.a.createElement(r.PostFooterActions, null),
              l.a.createElement(r.PostFooterMeta, null)
            )
          ),
          l.a.createElement(
            r.Comments,
            null,
            l.a.createElement(
              'div',
              {
                className:
                  'slds-p-horizontal_medium slds-p-vertical_x-small slds-grid'
              },
              l.a.createElement(
                'button',
                { className: 'slds-button_reset slds-text-link' },
                'More comments'
              ),
              l.a.createElement(
                'span',
                { className: 'slds-text-body_small slds-col_bump-left' },
                '1 of 8'
              )
            ),
            l.a.createElement(
              'ul',
              null,
              l.a.createElement(
                'li',
                null,
                l.a.createElement(
                  s.a,
                  null,
                  l.a.createElement(s.d, null),
                  l.a.createElement(
                    s.b,
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                  ),
                  l.a.createElement(s.c, null)
                )
              )
            )
          )
        ),
        l.a.createElement(
          'li',
          { className: 'slds-feed__item' },
          l.a.createElement(
            r.Post,
            null,
            l.a.createElement(r.PostHeader, null),
            l.a.createElement(
              r.PostContent,
              null,
              l.a.createElement(
                'p',
                null,
                "Hey there! Here's the latest demo presentation",
                ' ',
                l.a.createElement(
                  'a',
                  { href: 'javascript:void(0);', title: 'Jenna Davis' },
                  '@Jenna Davis'
                ),
                ", let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots."
              )
            ),
            l.a.createElement(
              r.PostFooter,
              null,
              l.a.createElement(r.PostFooterActions, null),
              l.a.createElement(r.PostFooterMeta, null)
            )
          )
        )
      )
    );
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  }
});
