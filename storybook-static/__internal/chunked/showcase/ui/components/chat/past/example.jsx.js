var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/chat/past/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, o, m = t[0], c = t[1], i = t[2], s = 0, p = [];
      s < m.length;
      s++
    )
      (o = m[s]),
        Object.prototype.hasOwnProperty.call(r, o) && r[o] && p.push(r[o][0]),
        (r[o] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    for (u && u(t); p.length; ) p.shift()();
    return l.push.apply(l, i || []), a();
  }
  function a() {
    for (var e, t = 0; t < l.length; t++) {
      for (var a = l[t], n = !0, m = 1; m < a.length; m++) {
        var c = a[m];
        0 !== r[c] && (n = !1);
      }
      n && (l.splice(t--, 1), (e = o((o.s = a[0]))));
    }
    return e;
  }
  var n = {},
    r = {
      33: 0,
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
  function o(t) {
    if (n[t]) return n[t].exports;
    var a = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
  }
  (o.m = e),
    (o.c = n),
    (o.d = function(e, t, a) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (o.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (o.t = function(e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (o.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          o.d(
            a,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return a;
    }),
    (o.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return o.d(t, 'a', t), t;
    }),
    (o.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = '/assets/scripts/bundle/');
  var m = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    c = m.push.bind(m);
  (m.push = t), (m = m.slice());
  for (var i = 0; i < m.length; i++) t(m[i]);
  var u = c;
  return l.push([214, 0]), a();
})({
  0: function(e, t) {
    e.exports = React;
  },
  214: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'states', function() {
        return o;
      }),
      a.d(t, 'examples', function() {
        return m;
      });
    var n = a(0),
      r = a.n(n),
      l = a(7);
    t.default = r.a.createElement(
      l.a,
      { isPast: !0 },
      r.a.createElement(
        l.e,
        null,
        r.a.createElement(
          l.f,
          null,
          r.a.createElement(
            l.g,
            null,
            r.a.createElement(
              l.h,
              { isPast: !0, name: 'Taylor Watson-Rice', timeStamp: '4:59 PM' },
              'Hi, my CloudWidget only speaks French'
            )
          )
        )
      )
    );
    var o = [
        {
          id: 'outbound-message',
          label: 'Outbound',
          element: r.a.createElement(
            l.a,
            { isPast: !0 },
            r.a.createElement(
              l.e,
              null,
              r.a.createElement(
                l.f,
                null,
                r.a.createElement(
                  l.g,
                  null,
                  r.a.createElement(
                    l.h,
                    { isPast: !0, name: 'Jason Dewar', timeStamp: '5:02 PM' },
                    'Hi Andy, thank you for contacting Widget Support. Can you please tell me what language you are trying to program on your CloudWidget?'
                  )
                )
              )
            )
          )
        }
      ],
      m = [
        {
          id: 'chat-list-past',
          label: 'Past chat list',
          element: r.a.createElement(
            l.a,
            { isPast: !0 },
            r.a.createElement(
              l.e,
              null,
              r.a.createElement(
                l.f,
                { type: 'bookend' },
                r.a.createElement(l.c, {
                  type: 'start',
                  name: 'Andy Martinez',
                  timeStamp: '4:58 PM'
                })
              ),
              r.a.createElement(
                l.f,
                null,
                r.a.createElement(
                  l.g,
                  null,
                  r.a.createElement(
                    l.h,
                    {
                      isPast: !0,
                      name: 'Taylor Watson-Rice',
                      timeStamp: '4:59 PM'
                    },
                    'Hi, my CloudWidget only speaks French'
                  )
                )
              ),
              r.a.createElement(
                l.f,
                null,
                r.a.createElement(
                  l.g,
                  null,
                  r.a.createElement(
                    l.h,
                    { isPast: !0, name: 'Jason Dewar', timeStamp: '5:02 PM' },
                    'Hi Andy, thank you for contacting Widget Support. Can you please tell me what language you are trying to program on your CloudWidget?'
                  )
                )
              ),
              r.a.createElement(
                l.f,
                null,
                r.a.createElement(
                  l.g,
                  null,
                  r.a.createElement(
                    l.h,
                    { isPast: !0, name: 'Jason Dewar', timeStamp: '5:03 PM' },
                    'Have you tried turning it off and on again?'
                  )
                )
              ),
              r.a.createElement(
                l.f,
                null,
                r.a.createElement(
                  l.g,
                  null,
                  r.a.createElement(
                    l.h,
                    { isPast: !0, name: 'Andy Martinez', timeStamp: '5:09 PM' },
                    'yes, of course'
                  )
                )
              ),
              r.a.createElement(
                l.f,
                null,
                r.a.createElement(
                  l.g,
                  null,
                  r.a.createElement(
                    l.h,
                    { isPast: !0, name: 'Jason Dewar', timeStamp: '5:15 PM' },
                    'Sorry to hear that. Let me transfer you to a more technical support member. Thank you for your patients!'
                  )
                )
              ),
              r.a.createElement(
                l.f,
                { type: 'event' },
                r.a.createElement(
                  l.d,
                  {
                    agentMessage:
                      'Andy needs help changing the language on his CloudWidget',
                    symbol: 'change_owner',
                    timeStamp: '5:19 PM'
                  },
                  r.a.createElement('b', null, 'Jason Dewar'),
                  ' sent a transfer request to',
                  ' ',
                  r.a.createElement('b', null, 'Technical Support Team')
                )
              ),
              r.a.createElement(
                l.f,
                { type: 'event' },
                r.a.createElement(
                  l.d,
                  { symbol: 'change_owner', timeStamp: '5:20 PM' },
                  r.a.createElement('b', null, 'Technical Support Team'),
                  ' accepted the transfer request'
                )
              ),
              r.a.createElement(
                l.f,
                { type: 'event' },
                r.a.createElement(
                  l.d,
                  { symbol: 'change_owner', timeStamp: '5:22 PM' },
                  r.a.createElement('b', null, 'Amber Cann'),
                  ' accepted this chat'
                )
              ),
              r.a.createElement(
                l.f,
                null,
                r.a.createElement(
                  l.g,
                  null,
                  r.a.createElement(
                    l.h,
                    { isPast: !0, name: 'Amber Cann', timeStamp: '5:23 PM' },
                    'Hi Andy, my name is Amber and I can help you solve your issue.'
                  )
                )
              ),
              r.a.createElement(
                l.f,
                null,
                r.a.createElement(
                  l.g,
                  null,
                  r.a.createElement(
                    l.h,
                    { isPast: !0, name: 'Andy Martinez', timeStamp: '5:29 PM' },
                    'Nevermind, I speak french.'
                  )
                )
              ),
              r.a.createElement(
                l.f,
                { type: 'bookend' },
                r.a.createElement(l.c, {
                  type: 'stop',
                  name: 'Andy Martinez',
                  timeStamp: '5:30 PM'
                })
              ),
              r.a.createElement(
                l.f,
                { type: 'bookend' },
                r.a.createElement(l.c, {
                  type: 'start',
                  name: 'Andy Martinez',
                  timeStamp: '4:58 PM'
                })
              ),
              r.a.createElement(
                l.f,
                null,
                r.a.createElement(
                  l.g,
                  null,
                  r.a.createElement(
                    l.h,
                    { isPast: !0, name: 'Andy Martinez', timeStamp: '4:59 PM' },
                    'Hello, me again. I tried following this guide',
                    ' ',
                    r.a.createElement(
                      'a',
                      { href: 'javascript:void(0)' },
                      'https://www.somehelpsite.com/CloudWidget-speaks-french'
                    )
                  )
                )
              ),
              r.a.createElement(
                l.f,
                null,
                r.a.createElement(
                  l.g,
                  null,
                  r.a.createElement(
                    l.h,
                    { isPast: !0, name: 'Jason Dewar', timeStamp: '5:02 PM' },
                    'Hi Andy, thank you for contacting Widget Support again. What can I help you with?'
                  )
                )
              ),
              r.a.createElement(
                l.f,
                null,
                r.a.createElement(
                  l.g,
                  null,
                  r.a.createElement(
                    l.h,
                    { isPast: !0, name: 'Andy Martinez', timeStamp: '5:09 PM' },
                    'Nevermind, I figured it out.'
                  )
                )
              ),
              r.a.createElement(
                l.f,
                { type: 'bookend' },
                r.a.createElement(l.c, {
                  type: 'stop',
                  name: 'Andy Martinez',
                  timeStamp: '5:09 PM'
                })
              )
            )
          )
        }
      ];
  }
});