var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/scoped-notifications/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var o, a, c = t[0], s = t[1], l = t[2], d = 0, f = [];
      d < c.length;
      d++
    )
      (a = c[d]),
        Object.prototype.hasOwnProperty.call(r, a) && r[a] && f.push(r[a][0]),
        (r[a] = 0);
    for (o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o]);
    for (u && u(t); f.length; ) f.shift()();
    return i.push.apply(i, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], o = !0, c = 1; c < n.length; c++) {
        var s = n[c];
        0 !== r[s] && (o = !1);
      }
      o && (i.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var o = {},
    r = { 65: 0 },
    i = [];
  function a(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = e),
    (a.c = o),
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
        for (var o in e)
          a.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
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
  var c = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    s = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var l = 0; l < c.length; l++) t(c[l]);
  var u = s;
  return i.push([129, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  129: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getElement', function() {
        return p;
      }),
      n.d(t, 'getContents', function() {
        return h;
      });
    var o = n(0),
      r = n(4),
      i = n(1),
      a = (n(23), n(15), n(2)),
      c = n(71),
      s = r.c.code,
      l = r.c.h2,
      u = r.c.h3,
      d = r.c.h4,
      f = r.c.p,
      p = function() {
        return Object(o.createElement)(
          r.b,
          {},
          Object(o.createElement)(
            'div',
            { className: 'lead doc' },
            'Scoped notifications serve advisory information for the user that is not important enough to justify an alert. It is often presented as a status bar scoped to the container. They are not dismissible.'
          ),
          Object(o.createElement)(
            i.a,
            { exampleOnly: !0 },
            Object(a.e)(c.c, 'dark-theme')
          ),
          l({ id: 'About-Scoped-Notifications' }, 'About Scoped Notifications'),
          u({ id: 'Accessibility' }, 'Accessibility'),
          f(
            {},
            'Scoped notifications contain ',
            s({}, 'role="status"'),
            ' on the container to signal to the browser to send an accessible status event to assistive technology. The assistive technology then notifies the user.'
          ),
          l({ id: 'Base' }, 'Base'),
          Object(o.createElement)(i.a, null, c.b),
          u({ id: 'States' }, 'States'),
          d({ id: 'Informational' }, 'Informational'),
          Object(o.createElement)(i.a, null, Object(a.e)(c.d, 'info')),
          d({ id: 'Success' }, 'Success'),
          Object(o.createElement)(i.a, null, Object(a.e)(c.d, 'success')),
          d({ id: 'Warning' }, 'Warning'),
          Object(o.createElement)(i.a, null, Object(a.e)(c.d, 'warning')),
          d({ id: 'Error' }, 'Error'),
          Object(o.createElement)(i.a, null, Object(a.e)(c.d, 'error')),
          u({ id: 'Examples' }, 'Examples'),
          f(
            {},
            'Informational Notifications default to the dark theme. For light, use the class ',
            s({}, 'slds-scoped-notification_light'),
            ' instead of ',
            s({}, 'slds-theme_info'),
            '. An additional class, ',
            s({}, 'slds-scoped-notification_dark'),
            ' is also available for the dark theme to more easily toggle between them.'
          ),
          d({ id: 'Light-Theme' }, 'Light Theme'),
          Object(o.createElement)(i.a, null, Object(a.e)(c.c, 'light-theme')),
          d({ id: 'Dark-Theme' }, 'Dark Theme'),
          Object(o.createElement)(i.a, null, Object(a.e)(c.c, 'dark-theme'))
        );
      },
      h = function() {
        return Object(r.a)(p());
      };
  },
  18: function(e, t) {
    e.exports = JSBeautify;
  },
  19: function(e, t) {
    e.exports = ReactDOM;
  }
});
