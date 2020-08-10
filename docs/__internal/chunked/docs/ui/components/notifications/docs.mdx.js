var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/notifications/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var i, s, l = t[0], c = t[1], r = t[2], m = 0, u = [];
      m < l.length;
      m++
    )
      (s = l[m]),
        Object.prototype.hasOwnProperty.call(n, s) && n[s] && u.push(n[s][0]),
        (n[s] = 0);
    for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]);
    for (d && d(t); u.length; ) u.shift()();
    return o.push.apply(o, r || []), a();
  }
  function a() {
    for (var e, t = 0; t < o.length; t++) {
      for (var a = o[t], i = !0, l = 1; l < a.length; l++) {
        var c = a[l];
        0 !== n[c] && (i = !1);
      }
      i && (o.splice(t--, 1), (e = s((s.s = a[0]))));
    }
    return e;
  }
  var i = {},
    n = { 50: 0 },
    o = [];
  function s(t) {
    if (i[t]) return i[t].exports;
    var a = (i[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, s), (a.l = !0), a.exports;
  }
  (s.m = e),
    (s.c = i),
    (s.d = function(e, t, a) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
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
      var a = Object.create(null);
      if (
        (s.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var i in e)
          s.d(
            a,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
          );
      return a;
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
  var l = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    c = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var r = 0; r < l.length; r++) t(l[r]);
  var d = c;
  return o.push([247, 0]), a();
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
  247: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'getElement', function() {
        return N;
      }),
      a.d(t, 'getContents', function() {
        return T;
      });
    var i = a(0),
      n = a.n(i),
      o = a(4),
      s = a(1),
      l = (a(26), a(43), a(15), a(2)),
      c = a(7),
      r = a(32),
      d = a(5),
      m = a.n(d),
      u = function(e) {
        return n.a.createElement(
          'div',
          { className: 'slds-notification-container' },
          e.children
        );
      },
      f = function(e) {
        var t = l.c.uniqueId('dialog-body-id-');
        return n.a.createElement(
          'section',
          {
            className: 'slds-notification',
            role: 'dialog',
            'aria-labelledby': e.headingID,
            'aria-describedby': t
          },
          n.a.createElement(
            'div',
            { className: 'slds-notification__body', id: t },
            n.a.createElement(
              'a',
              {
                className: 'slds-notification__target slds-media',
                href: 'javascript:void(0);'
              },
              n.a.createElement(r.a, {
                containerClassName: 'slds-media__figure',
                className: 'slds-icon_small',
                assistiveText: !1,
                symbol: e.type,
                title: e.type
              }),
              n.a.createElement(
                'div',
                { className: 'slds-media__body' },
                n.a.createElement(
                  'h2',
                  {
                    className: 'slds-text-heading_small slds-m-bottom_xx-small',
                    id: e.headingID
                  },
                  n.a.createElement(
                    'span',
                    { className: 'slds-assistive-text' },
                    e.type + ' notification:'
                  ),
                  e.title
                ),
                n.a.createElement('p', null, e.description)
              )
            ),
            n.a.createElement(c.b, {
              className: 'slds-button_icon-container slds-notification__close',
              symbol: 'close',
              assistiveText: 'Dismiss ' + e.title + ' notification',
              title: 'Dismiss ' + e.title + ' notification'
            })
          ),
          e.footer
            ? n.a.createElement(
                'footer',
                {
                  className: m()('slds-notification__footer', e.footerClassName)
                },
                e.footer
              )
            : null
        );
      },
      h = n.a.createElement(
        'div',
        {
          className: 'demo-only demo-only_viewport',
          style: { height: '4.5rem' }
        },
        n.a.createElement(
          u,
          null,
          n.a.createElement(
            'div',
            {
              'aria-live': 'assertive',
              'aria-atomic': 'true',
              className: 'slds-assistive-text'
            },
            'event notification: Tesla - Renewal meeting'
          ),
          n.a.createElement(f, {
            headingID: 'noti52',
            type: 'event',
            title: 'Tesla - Renewal meeting',
            description: 'Event at 11:00am on Jan 8'
          })
        )
      ),
      p = [
        {
          id: 'task-notification',
          label: 'Task Notification',
          element: n.a.createElement(
            'div',
            {
              className: 'demo-only demo-only_viewport',
              style: { height: '4.5rem' }
            },
            n.a.createElement(
              u,
              null,
              n.a.createElement(
                'div',
                {
                  'aria-live': 'assertive',
                  'aria-atomic': 'true',
                  className: 'slds-assistive-text'
                },
                'task notification: Call Two: Jane Johnson'
              ),
              n.a.createElement(f, {
                headingID: 'noti77',
                type: 'task',
                title: 'Call Two: Jane Johnson',
                description: 'Task due on Jan 8'
              })
            )
          )
        },
        {
          id: 'stacked-2',
          label: 'Stacked Notifications',
          element: n.a.createElement(
            'div',
            {
              className: 'demo-only demo-only_viewport',
              style: { height: '15rem' }
            },
            n.a.createElement(
              u,
              null,
              n.a.createElement(
                'div',
                {
                  'aria-live': 'assertive',
                  'aria-atomic': 'true',
                  className: 'slds-assistive-text'
                },
                'task notification: Call Two: Jane Johnson'
              ),
              n.a.createElement(f, {
                headingID: 'noti77',
                type: 'task',
                title: 'Call Two: Jane Johnson',
                description: 'Task due on Jan 8'
              }),
              n.a.createElement(f, {
                headingID: 'noti52',
                type: 'event',
                title: 'Tesla - Renewal meeting',
                description: 'Event at 11:00am on Jan 8'
              })
            )
          )
        },
        {
          id: 'stacked-3',
          label: 'Three Stacked Notifications',
          element: n.a.createElement(
            'div',
            {
              className: 'demo-only demo-only_viewport',
              style: { height: '15rem' }
            },
            n.a.createElement(
              u,
              null,
              n.a.createElement(
                'div',
                {
                  'aria-live': 'assertive',
                  'aria-atomic': 'true',
                  className: 'slds-assistive-text'
                },
                'task notification: Call Two: Jane Johnson'
              ),
              n.a.createElement(f, {
                headingID: 'noti77',
                type: 'task',
                title: 'Call Two: Jane Johnson',
                description: 'Task due on Jan 8'
              }),
              n.a.createElement(f, {
                headingID: 'noti52',
                type: 'event',
                title: 'Tesla - Renewal meeting',
                description: 'Event at 11:00am on Jan 8'
              }),
              n.a.createElement(f, {
                headingID: 'noti66',
                type: 'task',
                title: 'Call Three: Jim Jameson',
                description: 'Task due on Jan 8'
              })
            )
          )
        },
        {
          id: 'overflow-six',
          label: 'Six Stacked Notifications',
          element: n.a.createElement(
            'div',
            {
              className: 'demo-only demo-only_viewport',
              style: { height: '17rem' }
            },
            n.a.createElement(
              u,
              null,
              n.a.createElement(
                'div',
                {
                  'aria-live': 'assertive',
                  'aria-atomic': 'true',
                  className: 'slds-assistive-text'
                },
                'task notification: Call Two: Jane Johnson'
              ),
              n.a.createElement(f, {
                headingID: 'noti77',
                type: 'task',
                title: 'Call Two: Jane Johnson',
                description: 'Task due on Jan 8'
              }),
              n.a.createElement(f, {
                headingID: 'noti52',
                type: 'event',
                title: 'Tesla - Renewal meeting',
                description: 'Event at 11:00am on Jan 8'
              }),
              n.a.createElement(f, {
                headingID: 'noti66',
                type: 'task',
                title: 'Call Three: Jim Jameson',
                description: 'Task due on Jan 8'
              }),
              n.a.createElement(f, {
                headingID: 'noti48',
                type: 'task',
                title: 'Call Two: Jane Johnson',
                description: 'Task due on Jan 8'
              }),
              n.a.createElement(f, {
                headingID: 'noti59',
                type: 'event',
                title: 'Tesla - Renewal meeting',
                description: 'Event at 11:00am on Jan 8'
              }),
              n.a.createElement(f, {
                headingID: 'noti86',
                type: 'task',
                title: 'Call Three: Jim Jameson',
                description: 'Task due on Jan 8'
              })
            )
          )
        }
      ],
      v = o.c.code,
      y = o.c.h2,
      b = o.c.h3,
      E = o.c.li,
      g = o.c.p,
      k = o.c.ul,
      N = function() {
        return Object(i.createElement)(
          o.b,
          {},
          Object(i.createElement)(
            'div',
            { className: 'doc lead' },
            'Notifications serve as a feedback & confirmation mechanism that comes in at the top right.'
          ),
          Object(i.createElement)(
            s.a,
            { exampleOnly: !0 },
            Object(l.e)(p, 'stacked-2')
          ),
          y({ id: 'About-Notifications' }, 'About Notifications'),
          g(
            {},
            'The body of the notification is a clickable region that will prompt an additional browser tab with that record loaded and dismiss the notification. It is also dismissable by clicking the X icon.'
          ),
          b({ id: 'Implementation-Notes' }, 'Implementation Notes'),
          g(
            {},
            "The first three notifications that appear on the page should stack on one another. The fourth notification will show slightly beneath the third notification. Any subsequent notifications won't show until earlier notifications are dismissed."
          ),
          b({ id: 'Accessibility' }, 'Accessibility'),
          g(
            {},
            'Notifications should contain ',
            v({}, 'role="dialog"'),
            ' to signal to\nassistive technology that they require the user’s immediate attention.'
          ),
          b({ id: 'Requirements' }, 'Requirements'),
          g({}, 'This notification will consist of the following:'),
          k(
            {},
            E({}, 'Entity icon with background color'),
            E({}, 'Subject field for the reminder'),
            E({}, 'The time/date of when the event/task is occurring'),
            E({}, 'An ‘X’ icon to dismiss the reminder')
          ),
          y({ id: 'Base' }, 'Base'),
          Object(i.createElement)(s.a, null, h),
          y({ id: 'Examples' }, 'Examples'),
          b({ id: 'Task-Notification' }, 'Task Notification'),
          Object(i.createElement)(
            s.a,
            null,
            Object(l.e)(p, 'task-notification')
          ),
          b({ id: 'Stacked-Notifications' }, 'Stacked Notifications'),
          Object(i.createElement)(s.a, null, Object(l.e)(p, 'stacked-2')),
          b(
            { id: 'Three-Stacked-Notifications' },
            'Three Stacked Notifications'
          ),
          Object(i.createElement)(s.a, null, Object(l.e)(p, 'stacked-3')),
          b({ id: 'Six-Stacked-Notifications' }, 'Six Stacked Notifications'),
          Object(i.createElement)(s.a, null, Object(l.e)(p, 'overflow-six'))
        );
      },
      T = function() {
        return Object(o.a)(N());
      };
  }
});
