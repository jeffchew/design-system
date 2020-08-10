var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/alert/docs.mdx.js'] = (function(e) {
  function t(t) {
    for (
      var a, l, o = t[0], i = t[1], c = t[2], u = 0, d = [];
      u < o.length;
      u++
    )
      (l = o[u]),
        Object.prototype.hasOwnProperty.call(r, l) && r[l] && d.push(r[l][0]),
        (r[l] = 0);
    for (a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
    for (m && m(t); d.length; ) d.shift()();
    return s.push.apply(s, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < s.length; t++) {
      for (var n = s[t], a = !0, o = 1; o < n.length; o++) {
        var i = n[o];
        0 !== r[i] && (a = !1);
      }
      a && (s.splice(t--, 1), (e = l((l.s = n[0]))));
    }
    return e;
  }
  var a = {},
    r = { 3: 0 },
    s = [];
  function l(t) {
    if (a[t]) return a[t].exports;
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, l), (n.l = !0), n.exports;
  }
  (l.m = e),
    (l.c = a),
    (l.d = function(e, t, n) {
      l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
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
      var n = Object.create(null);
      if (
        (l.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          l.d(
            n,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return n;
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
    i = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var c = 0; c < o.length; c++) t(o[c]);
  var m = i;
  return s.push([282, 0]), n();
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
  282: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getElement', function() {
        return O;
      }),
      n.d(t, 'getContents', function() {
        return v;
      });
    var a = n(0),
      r = n.n(a),
      s = n(4),
      l = n(1),
      o = n(23),
      i = n(11),
      c = n(7),
      m = n(12),
      u = n(5),
      d = n.n(u),
      f = function(e) {
        var t = e.className,
          n = e.type,
          a = e.children;
        return r.a.createElement(
          'div',
          {
            className: d()(
              'slds-notify slds-notify_alert slds-theme_alert-texture',
              t,
              n ? 'slds-theme_' + n : null
            ),
            role: 'alert'
          },
          r.a.createElement(
            'span',
            { className: 'slds-assistive-text' },
            n || 'info'
          ),
          a,
          r.a.createElement(
            'div',
            { className: 'slds-notify__close' },
            r.a.createElement(c.b, {
              className: d()('warning' !== n && 'slds-button_icon-inverse'),
              symbol: 'close',
              assistiveText: 'Close',
              title: 'Close',
              size: 'small'
            })
          )
        );
      },
      h = (m.a, m.a, m.a, m.a, n(15), s.c.code),
      b = s.c.h2,
      p = s.c.h3,
      j = s.c.h4,
      y = s.c.p,
      O = function() {
        return Object(a.createElement)(
          s.b,
          {},
          Object(a.createElement)(
            'div',
            { className: 'doc lead' },
            'Alert banners communicate a state that affects the entire system, not just a feature or page. It persists over a session and appears without the user initiating the action.'
          ),
          Object(a.createElement)(
            l.a,
            { exampleOnly: !0 },
            Object(a.createElement)(
              f,
              { type: 'info' },
              Object(a.createElement)(m.a, {
                containerClassName: 'slds-m-right_x-small',
                className: 'slds-icon_x-small',
                assistiveText: !1,
                symbol: 'user'
              }),
              Object(a.createElement)(
                'h2',
                null,
                'Logged in as John Smith (johnsmith@acme.com).',
                ' ',
                Object(a.createElement)(
                  'a',
                  { href: 'javascript:void(0);' },
                  'Log out'
                )
              )
            )
          ),
          b({ id: 'About-Alert' }, 'About Alert'),
          p({ id: 'Accessibility' }, 'Accessibility'),
          j({ id: 'Role' }, 'Role'),
          y(
            {},
            'Alert notifications should contain ',
            h({}, 'role="alert"'),
            ' on the container to signal to assistive technology that they require the user’s immediate attention.'
          ),
          Object(a.createElement)(
            o.a,
            { toggleCode: !1 },
            Object(a.createElement)(
              'div',
              {
                className:
                  'slds-notify slds-notify_alert slds-theme_alert-texture slds-theme_info',
                role: 'alert'
              },
              '...'
            )
          ),
          j({ id: 'Assistive-Text' }, 'Assistive Text'),
          y(
            {},
            'Use a span with the class ',
            h({}, 'slds-assistive-text'),
            ' to let the user know what type of notification it is.'
          ),
          Object(a.createElement)(
            o.a,
            { toggleCode: !1 },
            Object(a.createElement)(
              'span',
              { className: 'slds-assistive-text' },
              'Info'
            )
          ),
          b({ id: 'Base' }, 'Base'),
          y(
            {},
            'Use the info alert when notifying the user of neutral information about the system.'
          ),
          Object(a.createElement)(
            i.a,
            { title: 'Alert Informational' },
            Object(a.createElement)(
              l.a,
              null,
              Object(a.createElement)(
                f,
                { type: 'info' },
                Object(a.createElement)(m.a, {
                  containerClassName: 'slds-m-right_x-small',
                  className: 'slds-icon_x-small',
                  assistiveText: !1,
                  symbol: 'user'
                }),
                Object(a.createElement)(
                  'h2',
                  null,
                  'Logged in as John Smith (johnsmith@acme.com).',
                  ' ',
                  Object(a.createElement)(
                    'a',
                    { href: 'javascript:void(0);' },
                    'Log out'
                  )
                )
              )
            )
          ),
          b({ id: 'Variations' }, 'Variations'),
          p({ id: 'Warning' }, 'Warning'),
          y(
            {},
            'Use the warning variant to warn the user about important system information that deserves caution.'
          ),
          Object(a.createElement)(
            i.a,
            { title: 'Alert Warning' },
            Object(a.createElement)(
              l.a,
              null,
              Object(a.createElement)(
                f,
                { type: 'warning' },
                Object(a.createElement)(m.a, {
                  containerClassName: 'slds-m-right_x-small',
                  className: 'slds-icon_x-small',
                  assistiveText: !1,
                  symbol: 'warning'
                }),
                Object(a.createElement)(
                  'h2',
                  null,
                  'Your browser is outdated. Your Salesforce experience may be degraded.',
                  ' ',
                  Object(a.createElement)(
                    'a',
                    { href: 'javascript:void(0);' },
                    'More Information'
                  )
                )
              )
            )
          ),
          p({ id: 'Error' }, 'Error'),
          y(
            {},
            'Use the error variant when you need to alert the user about an error in the system that needs immediate attention.'
          ),
          Object(a.createElement)(
            i.a,
            { title: 'Alert Error' },
            Object(a.createElement)(
              l.a,
              null,
              Object(a.createElement)(
                f,
                { type: 'error' },
                Object(a.createElement)(m.a, {
                  containerClassName: 'slds-m-right_x-small',
                  className: 'slds-icon_x-small',
                  assistiveText: !1,
                  symbol: 'error'
                }),
                Object(a.createElement)(
                  'h2',
                  null,
                  'Your browser is currently not supported. Your Salesforce may be degraded. ',
                  Object(a.createElement)(
                    'a',
                    { href: 'javascript:void(0);' },
                    'More Information'
                  )
                )
              )
            )
          ),
          p({ id: 'Offline' }, 'Offline'),
          y(
            {},
            'Use the offline alert to let the user know that they are not connected to the internet.'
          ),
          Object(a.createElement)(
            i.a,
            { title: 'Alert Offline' },
            Object(a.createElement)(
              l.a,
              null,
              Object(a.createElement)(
                f,
                { type: 'offline' },
                Object(a.createElement)(m.a, {
                  containerClassName: 'slds-m-right_x-small',
                  className: 'slds-icon_x-small',
                  assistiveText: !1,
                  symbol: 'offline'
                }),
                Object(a.createElement)(
                  'h2',
                  null,
                  'You are in offline mode.',
                  ' ',
                  Object(a.createElement)(
                    'a',
                    { href: 'javascript:void(0);' },
                    'More Information'
                  )
                )
              )
            )
          )
        );
      },
      v = function() {
        return Object(s.a)(O());
      };
  }
});