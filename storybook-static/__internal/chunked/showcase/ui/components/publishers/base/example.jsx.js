var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/publishers/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, s, i = t[0], o = t[1], c = t[2], d = 0, p = [];
      d < i.length;
      d++
    )
      (s = i[d]),
        Object.prototype.hasOwnProperty.call(a, s) && a[s] && p.push(a[s][0]),
        (a[s] = 0);
    for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
    for (u && u(t); p.length; ) p.shift()();
    return l.push.apply(l, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < l.length; t++) {
      for (var n = l[t], r = !0, i = 1; i < n.length; i++) {
        var o = n[i];
        0 !== a[o] && (r = !1);
      }
      r && (l.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = {
      130: 0,
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
  function s(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.m = e),
    (s.c = r),
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
        for (var r in e)
          s.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
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
  var i = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    o = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var c = 0; c < i.length; c++) t(i[c]);
  var u = o;
  return l.push([216, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  216: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'examples', function() {
        return u;
      });
    var r = n(0),
      a = n.n(r),
      l = n(4),
      s = n(2),
      i = n.n(s),
      o = function(e) {
        return a.a.createElement(
          'div',
          { className: i()('slds-publisher', e.className) },
          a.a.createElement(
            'label',
            {
              htmlFor: 'comment-text-input2',
              className: 'slds-publisher__toggle-visibility slds-m-bottom_small'
            },
            a.a.createElement(
              'span',
              { className: 'slds-assistive-text' },
              'Write a comment'
            ),
            'To: My followers'
          ),
          a.a.createElement('textarea', {
            id: 'comment-text-input2',
            className: 'slds-publisher__input slds-textarea slds-text-longform',
            placeholder: 'Write a comment…'
          }),
          e.children
        );
      },
      c = function(e) {
        return a.a.createElement(
          'div',
          {
            className:
              'slds-publisher__actions slds-grid slds-grid_align-spread'
          },
          a.a.createElement(
            'ul',
            { className: 'slds-grid slds-publisher__toggle-visibility' },
            a.a.createElement(
              'li',
              null,
              a.a.createElement(l.b, {
                className: 'slds-button_icon-container',
                symbol: 'adduser',
                assistiveText: 'Add User',
                title: 'Add User'
              })
            ),
            a.a.createElement(
              'li',
              null,
              a.a.createElement(l.b, {
                className: 'slds-button_icon-container',
                symbol: 'attach',
                assistiveText: 'Attach a file',
                title: 'Attach a file'
              })
            )
          ),
          a.a.createElement(
            'button',
            { className: 'slds-button slds-button_brand' },
            'Share'
          )
        );
      };
    t.default = a.a.createElement(o, null, a.a.createElement(c, null));
    var u = [
      {
        id: 'active',
        label: 'Active',
        element: a.a.createElement(
          o,
          { className: 'slds-is-active' },
          a.a.createElement(c, null)
        )
      }
    ];
  }
});
