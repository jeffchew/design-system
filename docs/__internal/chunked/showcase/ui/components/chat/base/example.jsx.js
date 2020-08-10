var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/chat/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, o, i = t[0], m = t[1], u = t[2], s = 0, d = [];
      s < i.length;
      s++
    )
      (o = i[s]),
        Object.prototype.hasOwnProperty.call(l, o) && l[o] && d.push(l[o][0]),
        (l[o] = 0);
    for (n in m) Object.prototype.hasOwnProperty.call(m, n) && (e[n] = m[n]);
    for (c && c(t); d.length; ) d.shift()();
    return r.push.apply(r, u || []), a();
  }
  function a() {
    for (var e, t = 0; t < r.length; t++) {
      for (var a = r[t], n = !0, i = 1; i < a.length; i++) {
        var m = a[i];
        0 !== l[m] && (n = !1);
      }
      n && (r.splice(t--, 1), (e = o((o.s = a[0]))));
    }
    return e;
  }
  var n = {},
    l = {
      32: 0,
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
  var i = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    m = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var u = 0; u < i.length; u++) t(i[u]);
  var c = m;
  return r.push([228, 0]), a();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  228: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'states', function() {
        return m;
      }),
      a.d(t, 'examples', function() {
        return u;
      });
    var n = a(0),
      l = a.n(n),
      r = a(7),
      o = a(32),
      i = a(100);
    t.default = l.a.createElement(
      r.a,
      null,
      l.a.createElement(
        r.e,
        null,
        l.a.createElement(
          r.f,
          { type: 'inbound' },
          l.a.createElement(
            r.g,
            null,
            l.a.createElement(
              r.h,
              {
                type: 'inbound',
                name: 'Taylor Watson-Rice',
                timeStamp: '4:59 PM'
              },
              'Hi, my CloudWidget only speaks French'
            )
          )
        )
      )
    );
    var m = [
        {
          id: 'inbound-with-avatar',
          label: 'Inbound With Avatar',
          element: l.a.createElement(
            r.a,
            null,
            l.a.createElement(
              r.e,
              null,
              l.a.createElement(
                r.f,
                { type: 'inbound' },
                l.a.createElement(
                  r.g,
                  null,
                  l.a.createElement(r.b, {
                    initials: 'TW',
                    name: 'Taylor Watson-Rice',
                    ariaHidden: 'true'
                  }),
                  l.a.createElement(
                    r.h,
                    {
                      type: 'inbound',
                      name: 'Taylor Watson-Rice',
                      timeStamp: '4:59 PM'
                    },
                    "Hi, my CloudWidget only speaks French and I'm having a lot of trouble. I've followed this article but it doesn't work",
                    ' ',
                    l.a.createElement(
                      'a',
                      { href: 'javascript:void(0)' },
                      'https://www.somehelpsite.com/CloudWidget-speaks-french'
                    )
                  )
                )
              )
            )
          )
        },
        {
          id: 'inbound-customer-is-typing',
          label: 'Inbound Customer is Typing',
          element: l.a.createElement(
            r.a,
            null,
            l.a.createElement(
              r.e,
              null,
              l.a.createElement(
                r.f,
                { type: 'inbound' },
                l.a.createElement(
                  r.g,
                  null,
                  l.a.createElement(r.b, {
                    initials: 'TW',
                    name: 'Taylor Watson-Rice',
                    ariaHidden: 'true'
                  }),
                  l.a.createElement(r.h, { isTyping: !0, type: 'inbound' })
                )
              )
            )
          )
        },
        {
          id: 'inbound-customer-is-typing-with-sneak-peek',
          label: 'Inbound Customer is Typing with Sneak Peek',
          element: l.a.createElement(
            r.a,
            null,
            l.a.createElement(
              r.e,
              null,
              l.a.createElement(
                r.f,
                { type: 'inbound' },
                l.a.createElement(
                  r.g,
                  null,
                  l.a.createElement(r.b, {
                    initials: 'TW',
                    name: 'Taylor Watson-Rice',
                    ariaHidden: 'true'
                  }),
                  l.a.createElement(
                    r.h,
                    { isTyping: !0, hasSneakPeek: !0, type: 'inbound' },
                    "Hi, my CloudWidget only speaks French and I'm having a lot of trouble trying to make i"
                  )
                )
              )
            )
          )
        },
        {
          id: 'inbound-with-attachment',
          label: 'Inbound With Attachment',
          element: l.a.createElement(
            r.a,
            null,
            l.a.createElement(
              r.e,
              null,
              l.a.createElement(
                r.f,
                { type: 'inbound' },
                l.a.createElement(
                  r.g,
                  null,
                  l.a.createElement(r.b, {
                    initials: 'TW',
                    name: 'Taylor Watson-Rice',
                    ariaHidden: 'true'
                  }),
                  l.a.createElement(
                    r.h,
                    {
                      type: 'inbound',
                      name: 'Taylor Watson-Rice',
                      timeStamp: '4:59 PM'
                    },
                    l.a.createElement(i.DoctypeIcon, {
                      assistiveText: 'Attachment',
                      className: 'slds-icon_small',
                      containerClassName: 'slds-chat-icon',
                      symbol: 'attachment',
                      title: 'Attachment'
                    }),
                    l.a.createElement(
                      'a',
                      { href: 'javascript:void(0)' },
                      'filename_of_attachment.jpg'
                    )
                  )
                )
              )
            )
          )
        },
        {
          id: 'inbound-with-loading-attachment-no-title',
          label: 'Inbound With Loading Attachment Without Title',
          element: l.a.createElement(
            r.a,
            null,
            l.a.createElement(
              r.e,
              null,
              l.a.createElement(
                r.f,
                { type: 'inbound' },
                l.a.createElement(
                  r.g,
                  null,
                  l.a.createElement(r.b, {
                    initials: 'TW',
                    name: 'Taylor Watson-Rice',
                    ariaHidden: 'true'
                  }),
                  l.a.createElement(
                    r.h,
                    {
                      type: 'inbound',
                      messageType: 'image',
                      name: 'Taylor Watson-Rice',
                      timeStamp: '4:59 PM',
                      isLoading: !0
                    },
                    l.a.createElement(o.b, {
                      has4x3Crop: !0,
                      isLoading: !0,
                      noCaption: !0
                    })
                  )
                )
              )
            )
          )
        },
        {
          id: 'inbound-with-loading-attachment-with-title',
          label: 'Inbound With Loading Attachment With Title',
          element: l.a.createElement(
            r.a,
            null,
            l.a.createElement(
              r.e,
              null,
              l.a.createElement(
                r.f,
                { type: 'inbound' },
                l.a.createElement(
                  r.g,
                  null,
                  l.a.createElement(r.b, {
                    initials: 'TW',
                    name: 'Taylor Watson-Rice',
                    ariaHidden: 'true'
                  }),
                  l.a.createElement(
                    r.h,
                    {
                      type: 'inbound',
                      messageType: 'file',
                      name: 'Taylor Watson-Rice',
                      timeStamp: '4:59 PM',
                      isLoading: !0
                    },
                    l.a.createElement(o.b, {
                      has4x3Crop: !0,
                      hasTitleCard: !0,
                      sprite: 'utility',
                      symbol: 'image',
                      isLoading: !0
                    })
                  )
                )
              )
            )
          )
        },
        {
          id: 'outbound',
          label: 'Outbound',
          element: l.a.createElement(
            r.a,
            null,
            l.a.createElement(
              r.e,
              null,
              l.a.createElement(
                r.f,
                { type: 'outbound' },
                l.a.createElement(
                  r.g,
                  null,
                  l.a.createElement(
                    r.h,
                    {
                      type: 'outbound',
                      name: 'Amber Cann',
                      timeStamp: '4:59 PM'
                    },
                    'Hi Taylor, thank you for contacting Widget Support. Can you please tell me what language you are trying to program on your CloudWidget?',
                    ' ',
                    l.a.createElement(
                      'a',
                      { href: 'javascript:void(0)' },
                      'http://www.cloud.widget'
                    )
                  )
                )
              )
            )
          )
        },
        {
          id: 'outbound-agent',
          label: 'Outbound Other Agent',
          element: l.a.createElement(
            r.a,
            null,
            l.a.createElement(
              r.e,
              null,
              l.a.createElement(
                r.f,
                { type: 'outbound' },
                l.a.createElement(
                  r.g,
                  null,
                  l.a.createElement(
                    r.h,
                    {
                      type: 'outbound-agent',
                      name: 'Jason Dewar',
                      timeStamp: '4:59 PM'
                    },
                    'So sorry to hear that. Let me transfer you to a more technical support member. Thank you for your patients. \n \n Have you tried visiting our help site?'
                  )
                )
              )
            )
          )
        },
        {
          id: 'inbound-unsupported-type',
          label: 'Inbound Unsupported Type',
          element: l.a.createElement(
            r.a,
            null,
            l.a.createElement(
              r.e,
              null,
              l.a.createElement(
                r.f,
                { type: 'inbound' },
                l.a.createElement(
                  r.g,
                  null,
                  l.a.createElement(r.b, {
                    initials: 'JD',
                    name: 'Jason Dewar',
                    ariaHidden: 'true'
                  }),
                  l.a.createElement(
                    r.h,
                    {
                      type: 'unsupported-type',
                      name: 'Jason Dewar',
                      timeStamp: '4:59 PM'
                    },
                    'Message type is not supported'
                  )
                )
              )
            )
          )
        },
        {
          id: 'outbound-delivery-failure',
          label: 'Outbound Delivery Failure',
          element: l.a.createElement(
            r.a,
            null,
            l.a.createElement(
              r.e,
              null,
              l.a.createElement(
                r.f,
                { type: 'outbound' },
                l.a.createElement(
                  r.g,
                  null,
                  l.a.createElement(
                    r.h,
                    {
                      type: 'delivery-failure',
                      deliveryFailureReason:
                        'Message was not delivered because Andy stopped receiving messages.',
                      name: 'Jason Dewar',
                      timeStamp: '4:59 PM'
                    },
                    'It might be the cause of the problem'
                  )
                )
              )
            )
          )
        },
        {
          id: 'event',
          label: 'Event',
          element: l.a.createElement(
            r.a,
            null,
            l.a.createElement(
              r.e,
              null,
              l.a.createElement(
                r.f,
                { type: 'event' },
                l.a.createElement(
                  r.d,
                  { symbol: 'priority', timeStamp: '5:09 PM' },
                  l.a.createElement('b', null, 'Jason Dewar'),
                  ' raised a flag'
                )
              )
            )
          )
        },
        {
          id: 'event-agent-message',
          label: 'Event - With agent message',
          element: l.a.createElement(
            r.a,
            null,
            l.a.createElement(
              r.e,
              null,
              l.a.createElement(
                r.f,
                { type: 'event' },
                l.a.createElement(
                  r.d,
                  {
                    agentMessage:
                      'Andy needs help changing the language on his CloudWidget',
                    symbol: 'change_owner',
                    timeStamp: '5:19 PM'
                  },
                  l.a.createElement('b', null, 'Jason Dewar'),
                  ' sent a transfer request to ',
                  l.a.createElement('b', null, 'Amber Cann')
                )
              )
            )
          )
        },
        {
          id: 'event-error',
          label: 'Event - Error',
          element: l.a.createElement(
            r.a,
            null,
            l.a.createElement(
              r.e,
              null,
              l.a.createElement(
                r.f,
                { type: 'event' },
                l.a.createElement(
                  r.d,
                  {
                    hasError: !0,
                    symbol: 'error',
                    iconAssistiveText: 'warning',
                    timeStamp: '5:06 PM'
                  },
                  'The file sent by ',
                  l.a.createElement('b', null, 'Andy Martinez'),
                  ' is too large'
                )
              )
            )
          )
        },
        {
          id: 'bookend',
          label: 'Bookend Start Chat',
          element: l.a.createElement(
            r.a,
            null,
            l.a.createElement(
              r.e,
              null,
              l.a.createElement(
                r.f,
                { type: 'bookend' },
                l.a.createElement(r.c, {
                  type: 'start',
                  name: 'Taylor Watson-Rice',
                  timeStamp: '4:59 PM'
                })
              )
            )
          )
        },
        {
          id: 'bookend-stop',
          label: 'Bookend Stop Chat',
          element: l.a.createElement(
            r.a,
            null,
            l.a.createElement(
              r.e,
              null,
              l.a.createElement(
                r.f,
                { type: 'bookend' },
                l.a.createElement(r.c, {
                  type: 'stop',
                  name: 'Taylor Watson-Rice',
                  timeStamp: '4:59 PM'
                })
              )
            )
          )
        }
      ],
      u = [
        {
          id: 'consecutive-inbound',
          label: 'Consecutive Inbound',
          element: l.a.createElement(
            r.a,
            null,
            l.a.createElement(
              r.e,
              null,
              l.a.createElement(
                r.f,
                { type: 'inbound' },
                l.a.createElement(
                  r.g,
                  null,
                  l.a.createElement(r.b, {
                    initials: 'TW',
                    name: 'Taylor Watson-Rice',
                    ariaHidden: 'true'
                  }),
                  l.a.createElement(
                    r.h,
                    { type: 'inbound' },
                    'Hi, my CloudWidget only speaks French'
                  )
                )
              ),
              l.a.createElement(
                r.f,
                { type: 'inbound' },
                l.a.createElement(
                  r.g,
                  { hasFauxAvatar: !0 },
                  l.a.createElement(
                    r.h,
                    {
                      type: 'inbound',
                      name: 'Taylor Watson-Rice',
                      timeStamp: '4:59 PM'
                    },
                    "I'm having trouble changing that."
                  )
                )
              )
            )
          )
        },
        {
          id: 'consecutive-outbound',
          label: 'Consecutive Outbound',
          element: l.a.createElement(
            r.a,
            null,
            l.a.createElement(
              r.e,
              null,
              l.a.createElement(
                r.f,
                { type: 'outbound' },
                l.a.createElement(
                  r.g,
                  null,
                  l.a.createElement(
                    r.h,
                    { type: 'outbound' },
                    'Hi Andy, thank you for contacting Widget Support. Can you please tell me what language you are trying to program on your CloudWidget?'
                  )
                )
              ),
              l.a.createElement(
                r.f,
                { type: 'outbound' },
                l.a.createElement(
                  r.g,
                  null,
                  l.a.createElement(
                    r.h,
                    {
                      type: 'outbound',
                      name: 'Taylor Watson-Rice',
                      timeStamp: '4:59 PM'
                    },
                    'It might be the cause of the problem'
                  )
                )
              )
            )
          )
        },
        {
          id: 'short-text',
          label: 'Short Text',
          element: l.a.createElement(
            r.a,
            null,
            l.a.createElement(
              r.e,
              null,
              l.a.createElement(
                r.f,
                { type: 'inbound' },
                l.a.createElement(
                  r.g,
                  null,
                  l.a.createElement(r.b, {
                    initials: 'TW',
                    name: 'Taylor Watson-Rice',
                    ariaHidden: 'true'
                  }),
                  l.a.createElement(
                    r.h,
                    {
                      type: 'inbound',
                      name: 'Taylor Watson-Rice',
                      timeStamp: '4:59 PM'
                    },
                    'Hi.'
                  )
                )
              ),
              l.a.createElement(
                r.f,
                { type: 'outbound' },
                l.a.createElement(
                  r.g,
                  null,
                  l.a.createElement(
                    r.h,
                    {
                      type: 'outbound',
                      name: 'Taylor Watson-Rice',
                      timeStamp: '4:59 PM'
                    },
                    'Hello.'
                  )
                )
              )
            )
          )
        },
        {
          id: 'chat-list',
          label: 'Chat List',
          element: l.a.createElement(
            r.a,
            null,
            l.a.createElement(
              r.e,
              null,
              l.a.createElement(
                r.f,
                { type: 'bookend' },
                l.a.createElement(r.c, {
                  type: 'start',
                  name: 'Andy Martinez',
                  timeStamp: '4:58 PM'
                })
              ),
              l.a.createElement(
                r.f,
                { type: 'inbound' },
                l.a.createElement(
                  r.g,
                  null,
                  l.a.createElement(r.b, {
                    initials: 'AM',
                    name: 'Andy Martinez',
                    ariaHidden: 'true'
                  }),
                  l.a.createElement(
                    r.h,
                    {
                      type: 'inbound',
                      name: 'Andy Martinez',
                      timeStamp: '4:59 PM'
                    },
                    'Hi, my CloudWidget only speaks French'
                  )
                )
              ),
              l.a.createElement(
                r.f,
                { type: 'outbound' },
                l.a.createElement(
                  r.g,
                  null,
                  l.a.createElement(
                    r.h,
                    { type: 'outbound-agent' },
                    'Hi Andy, thank you for contacting Widget Support. Can you please tell me what language you are trying to program on your CloudWidget?'
                  )
                )
              ),
              l.a.createElement(
                r.f,
                { type: 'outbound' },
                l.a.createElement(
                  r.g,
                  null,
                  l.a.createElement(
                    r.h,
                    {
                      type: 'outbound-agent',
                      name: 'Jason Dewar',
                      timeStamp: '5:02 PM'
                    },
                    'Have you tried turning it off and on again?'
                  )
                )
              ),
              l.a.createElement(
                r.f,
                { type: 'inbound' },
                l.a.createElement(
                  r.g,
                  null,
                  l.a.createElement(r.b, {
                    initials: 'AM',
                    name: 'Andy Martinez',
                    ariaHidden: 'true'
                  }),
                  l.a.createElement(
                    r.h,
                    {
                      type: 'inbound',
                      name: 'Andy Martinez',
                      timeStamp: '5:09 PM'
                    },
                    'yes, of course'
                  )
                )
              ),
              l.a.createElement(
                r.f,
                { type: 'outbound' },
                l.a.createElement(
                  r.g,
                  null,
                  l.a.createElement(
                    r.h,
                    {
                      type: 'outbound-agent',
                      name: 'Jason Dewar',
                      timeStamp: '5:15 PM'
                    },
                    'Sorry to hear that. Let me transfer you to a more technical support member. Thank you for your patients!'
                  )
                )
              ),
              l.a.createElement(
                r.f,
                { type: 'event' },
                l.a.createElement(
                  r.d,
                  {
                    agentMessage:
                      'Andy needs help changing the language on his CloudWidget',
                    symbol: 'change_owner',
                    timeStamp: '5:19 PM'
                  },
                  l.a.createElement('b', null, 'Jason Dewar'),
                  ' sent a transfer request to',
                  ' ',
                  l.a.createElement('b', null, 'Technical Support Team')
                )
              ),
              l.a.createElement(
                r.f,
                { type: 'event' },
                l.a.createElement(
                  r.d,
                  { symbol: 'change_owner', timeStamp: '5:20 PM' },
                  l.a.createElement('b', null, 'Technical Support Team'),
                  ' accepted the transfer request'
                )
              ),
              l.a.createElement(
                r.f,
                { type: 'event' },
                l.a.createElement(
                  r.d,
                  { symbol: 'change_owner', timeStamp: '5:22 PM' },
                  l.a.createElement('b', null, 'Amber Cann'),
                  ' accepted this chat'
                )
              ),
              l.a.createElement(
                r.f,
                { type: 'outbound' },
                l.a.createElement(
                  r.g,
                  null,
                  l.a.createElement(
                    r.h,
                    {
                      type: 'outbound',
                      name: 'Amber Cann',
                      timeStamp: '5:23 PM'
                    },
                    'Hi Andy, my name is Amber and I can help you solve your issue.'
                  )
                )
              ),
              l.a.createElement(
                r.f,
                { type: 'inbound' },
                l.a.createElement(
                  r.g,
                  null,
                  l.a.createElement(r.b, {
                    initials: 'AM',
                    name: 'Andy Martinez',
                    ariaHidden: 'true'
                  }),
                  l.a.createElement(
                    r.h,
                    {
                      type: 'inbound',
                      name: 'Andy Martinez',
                      timeStamp: '5:29 PM'
                    },
                    'Nevermind, I speak french.'
                  )
                )
              ),
              l.a.createElement(
                r.f,
                { type: 'bookend' },
                l.a.createElement(r.c, {
                  type: 'stop',
                  name: 'Andy Martinez',
                  timeStamp: '5:30 PM'
                })
              )
            )
          )
        },
        {
          id: 'conversation-with-attachments',
          label: 'Conversation With Attachments',
          element: l.a.createElement(
            r.a,
            null,
            l.a.createElement(
              r.e,
              null,
              l.a.createElement(
                r.f,
                { type: 'inbound' },
                l.a.createElement(
                  r.g,
                  null,
                  l.a.createElement(r.b, {
                    initials: 'TW',
                    name: 'Taylor Watson-Rice',
                    ariaHidden: 'true'
                  }),
                  l.a.createElement(
                    r.h,
                    {
                      type: 'inbound',
                      messageType: 'image',
                      name: 'Taylor Watson-Rice',
                      timeStamp: '4:59 PM'
                    },
                    l.a.createElement(o.b, {
                      hasActions: !0,
                      iconColor: 'white',
                      noCaption: !0,
                      hasImage: !0
                    })
                  )
                )
              ),
              l.a.createElement(
                r.f,
                { type: 'outbound' },
                l.a.createElement(
                  r.g,
                  null,
                  l.a.createElement(
                    r.h,
                    {
                      type: 'outbound',
                      messageType: 'image',
                      name: 'Taylor Watson-Rice',
                      timeStamp: '4:59 PM'
                    },
                    l.a.createElement(o.b, {
                      hasTitleCard: !0,
                      symbol: 'image',
                      title: 'Image.jpg',
                      hasActions: !0,
                      hasImagePortrait: !0
                    })
                  )
                )
              ),
              l.a.createElement(
                r.f,
                { type: 'inbound' },
                l.a.createElement(
                  r.g,
                  null,
                  l.a.createElement(r.b, {
                    initials: 'TW',
                    name: 'Taylor Watson-Rice',
                    ariaHidden: 'true'
                  }),
                  l.a.createElement(
                    r.h,
                    {
                      type: 'inbound',
                      messageType: 'file',
                      name: 'Taylor Watson-Rice',
                      timeStamp: '4:59 PM'
                    },
                    l.a.createElement(o.b, {
                      has4x3Crop: !0,
                      hasTitleCard: !0,
                      symbol: 'pdf',
                      title: 'File.pdf',
                      hasActions: !0,
                      hasImage: !0
                    })
                  )
                )
              ),
              l.a.createElement(
                r.f,
                { type: 'outbound' },
                l.a.createElement(
                  r.g,
                  null,
                  l.a.createElement(
                    r.h,
                    {
                      type: 'outbound',
                      messageType: 'file',
                      name: 'Taylor Watson-Rice',
                      timeStamp: '4:59 PM'
                    },
                    l.a.createElement(o.b, {
                      has4x3Crop: !0,
                      hasTitleCard: !0,
                      symbol: 'pdf',
                      title: 'File.pdf',
                      hasActions: !0,
                      hasImage: !0
                    })
                  )
                )
              )
            )
          )
        }
      ];
  }
});
