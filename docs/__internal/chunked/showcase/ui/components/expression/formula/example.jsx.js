var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/expression/formula/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, l, u = t[0], c = t[1], s = t[2], p = 0, f = [];
      p < u.length;
      p++
    )
      (l = u[p]),
        Object.prototype.hasOwnProperty.call(o, l) && o[l] && f.push(o[l][0]),
        (o[l] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    for (i && i(t); f.length; ) f.shift()();
    return a.push.apply(a, s || []), r();
  }
  function r() {
    for (var e, t = 0; t < a.length; t++) {
      for (var r = a[t], n = !0, u = 1; u < r.length; u++) {
        var c = r[u];
        0 !== o[c] && (n = !1);
      }
      n && (a.splice(t--, 1), (e = l((l.s = r[0]))));
    }
    return e;
  }
  var n = {},
    o = {
      77: 0,
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
  var u = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    c = u.push.bind(u);
  (u.push = t), (u = u.slice());
  for (var s = 0; s < u.length; s++) t(u[s]);
  var i = c;
  return a.push([114, 0]), r();
})({
  0: function(e, t) {
    e.exports = React;
  },
  114: function(e, t, r) {
    'use strict';
    r.r(t),
      r.d(t, 'Formula', function() {
        return i;
      });
    var n = r(0),
      o = r.n(n),
      a = r(1),
      l = r.n(a),
      u = r(41),
      c = r(13),
      s = r(15),
      i = function(e) {
        return o.a.createElement(
          'div',
          { className: 'slds-expression' },
          o.a.createElement(u.c, { optionSelected: e.optionSelected }),
          o.a.createElement(
            'div',
            { className: 'slds-expression_formula__rte' },
            o.a.createElement(
              s.a,
              { label: 'Formula' },
              o.a.createElement(s.l, null, o.a.createElement(s.h, null)),
              o.a.createElement(s.k, {
                label: 'Compose formula',
                placeholder: 'Compose formula...'
              })
            )
          ),
          o.a.createElement(
            'div',
            { className: 'slds-m-top_small' },
            o.a.createElement(c.Button, { isNeutral: !0 }, 'Check Syntax')
          )
        );
      };
    (i.propTypes = { optionSelected: l.a.string }),
      (t.default = o.a.createElement(i, { optionSelected: 'formula' }));
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  }
});
