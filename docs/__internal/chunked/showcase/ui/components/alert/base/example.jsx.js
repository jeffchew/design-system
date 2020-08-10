var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/alert/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, s, o = t[0], i = t[1], c = t[2], m = 0, f = [];
      m < o.length;
      m++
    )
      (s = o[m]),
        Object.prototype.hasOwnProperty.call(a, s) && a[s] && f.push(a[s][0]),
        (a[s] = 0);
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    for (u && u(t); f.length; ) f.shift()();
    return l.push.apply(l, c || []), r();
  }
  function r() {
    for (var e, t = 0; t < l.length; t++) {
      for (var r = l[t], n = !0, o = 1; o < r.length; o++) {
        var i = r[o];
        0 !== a[i] && (n = !1);
      }
      n && (l.splice(t--, 1), (e = s((s.s = r[0]))));
    }
    return e;
  }
  var n = {},
    a = {
      3: 0,
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
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, s), (r.l = !0), r.exports;
  }
  (s.m = e),
    (s.c = n),
    (s.d = function(e, t, r) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
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
      var r = Object.create(null);
      if (
        (s.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          s.d(
            r,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
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
  for (var c = 0; c < o.length; c++) t(o[c]);
  var u = i;
  return l.push([165, 0]), r();
})({
  0: function(e, t) {
    e.exports = React;
  },
  165: function(e, t, r) {
    'use strict';
    r.r(t),
      r.d(t, 'Alert', function() {
        return c;
      }),
      r.d(t, 'states', function() {
        return u;
      });
    var n = r(0),
      a = r.n(n),
      l = r(4),
      s = r(9),
      o = r(2),
      i = r.n(o),
      c = function(e) {
        var t = e.className,
          r = e.type,
          n = e.children;
        return a.a.createElement(
          'div',
          {
            className: i()(
              'slds-notify slds-notify_alert slds-theme_alert-texture',
              t,
              r ? 'slds-theme_' + r : null
            ),
            role: 'alert'
          },
          a.a.createElement(
            'span',
            { className: 'slds-assistive-text' },
            r || 'info'
          ),
          n,
          a.a.createElement(
            'div',
            { className: 'slds-notify__close' },
            a.a.createElement(l.b, {
              className: i()('warning' !== r && 'slds-button_icon-inverse'),
              symbol: 'close',
              assistiveText: 'Close',
              title: 'Close',
              size: 'small'
            })
          )
        );
      };
    t.default = a.a.createElement(
      c,
      { type: 'info' },
      a.a.createElement(s.UtilityIcon, {
        containerClassName: 'slds-m-right_x-small',
        className: 'slds-icon_x-small',
        assistiveText: !1,
        symbol: 'user'
      }),
      a.a.createElement(
        'h2',
        null,
        'Logged in as John Smith (johnsmith@acme.com).',
        ' ',
        a.a.createElement('a', { href: 'javascript:void(0);' }, 'Log out')
      )
    );
    var u = [
      {
        id: 'warning',
        label: 'Warning',
        element: a.a.createElement(
          c,
          { type: 'warning' },
          a.a.createElement(s.UtilityIcon, {
            containerClassName: 'slds-m-right_x-small',
            className: 'slds-icon_x-small',
            assistiveText: !1,
            symbol: 'warning'
          }),
          a.a.createElement(
            'h2',
            null,
            'Your browser is outdated. Your Salesforce experience may be degraded.',
            ' ',
            a.a.createElement(
              'a',
              { href: 'javascript:void(0);' },
              'More Information'
            )
          )
        )
      },
      {
        id: 'error',
        label: 'Error',
        element: a.a.createElement(
          c,
          { type: 'error' },
          a.a.createElement(s.UtilityIcon, {
            containerClassName: 'slds-m-right_x-small',
            className: 'slds-icon_x-small',
            assistiveText: !1,
            symbol: 'error'
          }),
          a.a.createElement(
            'h2',
            null,
            'Your browser is currently not supported. Your Salesforce may be degraded. ',
            a.a.createElement(
              'a',
              { href: 'javascript:void(0);' },
              'More Information'
            )
          )
        )
      },
      {
        id: 'offline',
        label: 'Offline',
        element: a.a.createElement(
          c,
          { type: 'offline' },
          a.a.createElement(s.UtilityIcon, {
            containerClassName: 'slds-m-right_x-small',
            className: 'slds-icon_x-small',
            assistiveText: !1,
            symbol: 'offline'
          }),
          a.a.createElement(
            'h2',
            null,
            'You are in offline mode.',
            ' ',
            a.a.createElement(
              'a',
              { href: 'javascript:void(0);' },
              'More Information'
            )
          )
        )
      }
    ];
  }
});
