var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/prompt/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var a, l, s = t[0], i = t[1], u = t[2], d = 0, p = [];
      d < s.length;
      d++
    )
      (l = s[d]),
        Object.prototype.hasOwnProperty.call(n, l) && n[l] && p.push(n[l][0]),
        (n[l] = 0);
    for (a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
    for (c && c(t); p.length; ) p.shift()();
    return o.push.apply(o, u || []), r();
  }
  function r() {
    for (var e, t = 0; t < o.length; t++) {
      for (var r = o[t], a = !0, s = 1; s < r.length; s++) {
        var i = r[s];
        0 !== n[i] && (a = !1);
      }
      a && (o.splice(t--, 1), (e = l((l.s = r[0]))));
    }
    return e;
  }
  var a = {},
    n = {
      129: 0,
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
    o = [];
  function l(t) {
    if (a[t]) return a[t].exports;
    var r = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, l), (r.l = !0), r.exports;
  }
  (l.m = e),
    (l.c = a),
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
        for (var a in e)
          l.d(
            r,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
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
  var s = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    i = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var u = 0; u < s.length; u++) t(s[u]);
  var c = i;
  return o.push([149, 0]), r();
})({
  0: function(e, t) {
    e.exports = React;
  },
  149: function(e, t, r) {
    'use strict';
    r.r(t);
    var a = r(0),
      n = r.n(a),
      o = r(21);
    t.default = n.a.createElement(
      'div',
      { className: 'demo-only', style: { height: '24rem' } },
      n.a.createElement(
        o.Modal,
        {
          tabIndex: '0',
          role: 'alertdialog',
          'aria-labelledby': 'prompt-heading-id',
          'aria-describedby': 'prompt-message-wrapper',
          className: 'slds-modal_prompt'
        },
        n.a.createElement(
          o.ModalHeader,
          {
            className: 'slds-theme_error slds-theme_alert-texture',
            closeButton: !1
          },
          n.a.createElement(
            'h2',
            { className: 'slds-text-heading_medium', id: 'prompt-heading-id' },
            'Service Unavailable'
          )
        ),
        n.a.createElement(
          o.ModalContent,
          { className: 'slds-p-around_medium', id: 'prompt-message-wrapper' },
          n.a.createElement(
            'p',
            null,
            'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.'
          )
        ),
        n.a.createElement(
          o.ModalFooter,
          { className: 'slds-theme_default' },
          n.a.createElement(
            'button',
            { className: 'slds-button slds-button_neutral' },
            'Okay'
          )
        )
      ),
      n.a.createElement('div', {
        className: 'slds-backdrop slds-backdrop_open'
      })
    );
  }
});
