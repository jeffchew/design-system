var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/showcase/ui/utilities/box/example.jsx.js'] = (function(
  e
) {
  function t(t) {
    for (
      var n, s, o = t[0], i = t[1], u = t[2], p = 0, f = [];
      p < o.length;
      p++
    )
      (s = o[p]),
        Object.prototype.hasOwnProperty.call(r, s) && r[s] && f.push(r[s][0]),
        (r[s] = 0);
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    for (c && c(t); f.length; ) f.shift()();
    return a.push.apply(a, u || []), l();
  }
  function l() {
    for (var e, t = 0; t < a.length; t++) {
      for (var l = a[t], n = !0, o = 1; o < l.length; o++) {
        var i = l[o];
        0 !== r[i] && (n = !1);
      }
      n && (a.splice(t--, 1), (e = s((s.s = l[0]))));
    }
    return e;
  }
  var n = {},
    r = {
      167: 0,
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
    a = [];
  function s(t) {
    if (n[t]) return n[t].exports;
    var l = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(l.exports, l, l.exports, s), (l.l = !0), l.exports;
  }
  (s.m = e),
    (s.c = n),
    (s.d = function(e, t, l) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: l });
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
      var l = Object.create(null);
      if (
        (s.r(l),
        Object.defineProperty(l, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          s.d(
            l,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return l;
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
    i = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var u = 0; u < o.length; u++) t(o[u]);
  var c = i;
  return a.push([125, 0]), l();
})({
  0: function(e, t) {
    e.exports = React;
  },
  125: function(e, t, l) {
    'use strict';
    l.r(t),
      l.d(t, 'examples', function() {
        return a;
      });
    var n = l(0),
      r = l.n(n),
      a = [
        {
          id: 'default',
          label: 'Size - Default',
          element: r.a.createElement(
            'div',
            { className: 'slds-box' },
            r.a.createElement('p', null, 'This is a regular-sized box.')
          )
        },
        {
          id: 'small',
          label: 'Size - small',
          element: r.a.createElement(
            'div',
            { className: 'slds-box slds-box_small' },
            r.a.createElement('p', null, 'This is a small box.')
          )
        },
        {
          id: 'x-small',
          label: 'Size - x-small',
          element: r.a.createElement(
            'div',
            { className: 'slds-box slds-box_x-small' },
            r.a.createElement('p', null, 'This is an extra-small box.')
          )
        },
        {
          id: 'xx-small',
          label: 'Size - xx-small',
          element: r.a.createElement(
            'div',
            { className: 'slds-box slds-box_xx-small' },
            r.a.createElement('p', null, 'This is an extra-extra-small box.')
          )
        }
      ];
  }
});
