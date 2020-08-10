var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/activity-timeline/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var l, i, r = t[0], o = t[1], c = t[2], m = 0, u = [];
      m < r.length;
      m++
    )
      (i = r[m]),
        Object.prototype.hasOwnProperty.call(n, i) && n[i] && u.push(n[i][0]),
        (n[i] = 0);
    for (l in o) Object.prototype.hasOwnProperty.call(o, l) && (e[l] = o[l]);
    for (d && d(t); u.length; ) u.shift()();
    return s.push.apply(s, c || []), a();
  }
  function a() {
    for (var e, t = 0; t < s.length; t++) {
      for (var a = s[t], l = !0, r = 1; r < a.length; r++) {
        var o = a[r];
        0 !== n[o] && (l = !1);
      }
      l && (s.splice(t--, 1), (e = i((i.s = a[0]))));
    }
    return e;
  }
  var l = {},
    n = { 2: 0 },
    s = [];
  function i(t) {
    if (l[t]) return l[t].exports;
    var a = (l[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, i), (a.l = !0), a.exports;
  }
  (i.m = e),
    (i.c = l),
    (i.d = function(e, t, a) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (i.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.t = function(e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (i.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var l in e)
          i.d(
            a,
            l,
            function(t) {
              return e[t];
            }.bind(null, l)
          );
      return a;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return i.d(t, 'a', t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = '/assets/scripts/bundle/');
  var r = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    o = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var c = 0; c < r.length; c++) t(r[c]);
  var d = o;
  return s.push([289, 0]), a();
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
  289: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'getElement', function() {
        return W;
      }),
      a.d(t, 'getContents', function() {
        return Y;
      });
    var l = a(0),
      n = a.n(l),
      s = a(4),
      i = a(1),
      r = (a(23), a(15)),
      o = a(2),
      c = a(7),
      d = a(30),
      m = a(10),
      u = a(12),
      p = a(13),
      h = a(5),
      b = a.n(h),
      E = [
        n.a.createElement(u.a, {
          key: 'groups',
          className:
            'slds-icon_xx-small slds-icon-text-default slds-m-left_x-small',
          symbol: 'groups',
          title: 'Group email',
          assistiveText: 'Group email'
        }),
        n.a.createElement(u.a, {
          key: 'attach',
          className:
            'slds-icon_xx-small slds-icon-text-default slds-m-left_x-small',
          symbol: 'attach',
          title: 'Has attachments',
          assistiveText: 'Has attachments'
        })
      ],
      f = [
        n.a.createElement(u.a, {
          key: 'rotate',
          className:
            'slds-icon_xx-small slds-icon-text-default slds-m-left_x-small',
          symbol: 'rotate',
          title: 'Recurring Task',
          assistiveText: 'Recurring Task'
        })
      ],
      x = [
        n.a.createElement(u.a, {
          key: 'world',
          className:
            'slds-icon_xx-small slds-icon-text-default slds-m-left_x-small',
          symbol: 'world',
          title: 'Public sharing',
          assistiveText: 'Public sharing'
        })
      ],
      _ = function(e) {
        return n.a.createElement(
          'div',
          {
            className: b()(
              'slds-icon_container',
              'log_a_call' === e.symbol
                ? 'slds-icon-standard-log-a-call'
                : 'slds-icon-standard-' + e.symbol,
              e.className
            ),
            title: 'log_a_call' === e.symbol ? 'call' : e.symbol
          },
          n.a.createElement(m.a, {
            className: 'slds-icon slds-icon_small',
            sprite: 'standard',
            symbol: e.symbol
          })
        );
      },
      y = function(e) {
        return n.a.createElement(
          'div',
          {
            className: b()('slds-timeline__actions', {
              'slds-timeline__actions_inline': e.inline
            })
          },
          n.a.createElement(
            'p',
            { className: 'slds-timeline__date' },
            e.date || 'Feb 24'
          ),
          n.a.createElement(c.b, {
            className:
              'slds-button_icon-border-filled slds-button_icon-x-small',
            symbol: 'down',
            assistiveText: e.assistiveText || 'More Options',
            'aria-haspopup': 'true',
            title: e.title || 'More Options'
          })
        );
      },
      g = function(e) {
        return n.a.createElement(
          'div',
          { className: 'slds-media__figure' },
          n.a.createElement(c.b, {
            iconClassName: 'slds-timeline__details-action-icon',
            symbol: 'switch',
            title: 'Toggle details for '.concat(e.title),
            assistiveText: 'Toggle details for '.concat(e.title),
            'aria-controls': e.id,
            'aria-expanded': e.isExpanded
          }),
          n.a.createElement(_, {
            symbol: e.type,
            className: 'slds-timeline__icon'
          })
        );
      },
      v = function(e) {
        return n.a.createElement(
          'div',
          { className: 'slds-media__body' },
          e.children
        );
      },
      N = function(e) {
        return n.a.createElement(
          'div',
          {
            className: 'slds-grid slds-grid_align-spread slds-timeline__trigger'
          },
          n.a.createElement(
            'div',
            {
              className:
                'slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space'
            },
            'task' === e.type &&
              n.a.createElement(d.a, {
                hideLabel: !0,
                label: 'Mark '.concat(e.title, ' complete')
              }),
            n.a.createElement(
              'h3',
              { className: 'slds-truncate', title: e.title },
              n.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                n.a.createElement('strong', null, e.title)
              )
            ),
            e.iconSet &&
              n.a.createElement('div', { className: 'slds-no-flex' }, e.iconSet)
          ),
          n.a.createElement(y, {
            inline: !0,
            date: e.date,
            title: 'More Options for this item',
            assistiveText: 'More Options for this item'
          })
        );
      },
      w = function(e) {
        return n.a.createElement(
          'p',
          { className: 'slds-m-horizontal_xx-small' },
          n.a.createElement(
            'a',
            { href: 'javascript:void(0);' },
            e.subtext.you
          ),
          ' ',
          e.subtext.action,
          ' ',
          n.a.createElement('a', { href: 'javascript:void(0);' }, e.subtext.to),
          ' ',
          e.subtext.extra
        );
      },
      O = function(e) {
        return n.a.createElement(
          'div',
          {
            className:
              'slds-grid slds-text-color_error slds-m-top_x-small slds-m-horizontal_xx-small',
            id: e.id
          },
          n.a.createElement(u.a, {
            key: 'attach',
            className:
              'slds-icon-text-error slds-icon_x-small slds-m-right_xx-small',
            symbol: 'error',
            title: 'Error Occurred',
            assistiveText: 'Error Occurred'
          }),
          n.a.createElement('p', null, 'There was an error loading the details')
        );
      },
      j = function(e) {
        return n.a.createElement(
          'div',
          {
            className: b()(
              'slds-timeline__item_expandable',
              ''.concat(
                'log_a_call' === e.type
                  ? 'slds-timeline__item_call'
                  : 'slds-timeline__item_' + e.type
              ),
              { 'slds-is-open': e.isExpanded },
              e.className
            )
          },
          n.a.createElement(
            'span',
            { className: 'slds-assistive-text' },
            e.type
          ),
          n.a.createElement(
            'div',
            { className: b()('slds-media') },
            n.a.createElement(g, e),
            n.a.createElement(
              v,
              null,
              n.a.createElement(N, e),
              n.a.createElement(w, e),
              e.hasError
                ? n.a.createElement(O, e)
                : n.a.createElement(
                    k,
                    {
                      id: e.id,
                      isExpanded: e.isExpanded,
                      fields: e.fields,
                      bodyLabel: e.bodyLabel,
                      footerButtons: e.footerButtons
                    },
                    e.children
                  )
            )
          )
        );
      },
      S = function(e) {
        return n.a.createElement(
          'li',
          {
            className:
              'slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small'
          },
          n.a.createElement(
            'span',
            { className: 'slds-text-title slds-p-bottom_x-small' },
            e.label
          ),
          n.a.createElement(
            'span',
            {
              className: 'slds-text-body_medium slds-truncate',
              title: e.content
            },
            n.a.createElement('a', { href: 'javascript:void(0);' }, e.content)
          )
        );
      },
      T = function(e) {
        return n.a.createElement(
          'ul',
          { className: 'slds-list_horizontal slds-wrap' },
          e.fields.map(function(e, t) {
            return n.a.createElement(S, {
              key: t,
              label: e.label,
              content: e.content
            });
          })
        );
      },
      k = function(e) {
        return n.a.createElement(
          'article',
          {
            className: b()(
              'slds-box',
              'slds-timeline__item_details',
              'slds-theme_shade',
              'slds-m-top_x-small',
              'slds-m-horizontal_xx-small',
              { 'slds-p-around_medium': e.isExpanded },
              e.className
            ),
            id: e.id,
            'aria-hidden': !e.isExpanded
          },
          e.fields && n.a.createElement(T, e),
          e.children &&
            n.a.createElement(
              'div',
              null,
              n.a.createElement(
                'span',
                { className: 'slds-text-title' },
                e.bodyLabel
              ),
              n.a.createElement(
                'p',
                { className: 'slds-p-top_x-small' },
                e.children
              )
            ),
          e.footerButtons &&
            n.a.createElement(
              p.a,
              { isNeutral: !0, className: 'slds-m-top_small' },
              n.a.createElement(m.a, {
                className: 'slds-button__icon slds-button__icon_left',
                sprite: 'utility',
                symbol: 'world'
              }),
              'Public Sharing'
            )
        );
      },
      M = function(e) {
        return n.a.createElement(
          'div',
          { className: 'demo-only', style: { width: '400px' } },
          e.children
        );
      },
      A = function(e) {
        var t = function(t) {
          if (e.itemsExpanded) return e.itemsExpanded.includes(t);
        };
        return n.a.createElement(
          'ul',
          { className: 'slds-timeline' },
          n.a.createElement(
            'li',
            null,
            n.a.createElement(
              j,
              {
                id: ''.concat('task-item-' + e.id),
                type: 'task',
                title:
                  'Review proposals for EBC deck with larger team and have marketing review this',
                date: '9:00am | 3/20/17',
                subtext: {
                  you: 'You',
                  action: 'created a task with',
                  to: 'Charlie Gomez'
                },
                iconSet: f,
                fields: [
                  { label: 'Name', content: 'Charlie Gomez' },
                  {
                    label: 'Related To',
                    content: 'Tesla Cloudhub + Anypoint Connectors'
                  }
                ],
                bodyLabel: 'Description',
                isExpanded: t(1),
                isNarrow: e.isNarrow,
                hasError: e.hasError
              },
              'Need to finalize proposals and brand details before the meeting'
            )
          ),
          n.a.createElement(
            'li',
            null,
            n.a.createElement(
              j,
              {
                id: ''.concat('call-item-' + e.id),
                type: 'log_a_call',
                title: 'Mobile conversation on Monday',
                date: '10:00am | 3/23/17',
                subtext: {
                  you: 'You',
                  action: 'logged a call with',
                  to: 'Adam Chan'
                },
                fields: [
                  { label: 'Name', content: 'Adam Chan' },
                  {
                    label: 'Related To',
                    content: 'Tesla Cloudhub + Anypoint Connectors'
                  }
                ],
                bodyLabel: 'Description',
                isExpanded: t(2),
                isNarrow: e.isNarrow
              },
              'Adam seemed interested in closing this deal quickly! Let’s move.'
            )
          ),
          n.a.createElement(
            'li',
            null,
            n.a.createElement(
              j,
              {
                id: ''.concat('email-item-' + e.id),
                type: 'email',
                title:
                  'Re: Mobile conversation on Monday with the new global team',
                date: '10:00am | 3/24/17',
                subtext: { you: 'You', action: 'emailed', to: 'Lea Chan' },
                iconSet: E,
                fields: [
                  { label: 'From Address', content: 'Jackie Dewar' },
                  { label: 'To Address', content: 'Lea Chan' }
                ],
                bodyLabel: 'Text Body',
                isExpanded: t(3),
                isNarrow: e.isNarrow,
                footerButtons: e.footerButtons
              },
              'Hi everyone, Thanks for meeting with the team today and going through the proposals we saw. This goes on and wraps if needed.'
            )
          ),
          n.a.createElement(
            'li',
            null,
            n.a.createElement(
              j,
              {
                id: ''.concat('event-item-' + e.id),
                type: 'event',
                title: 'EBC Follow up call',
                date: '10:30am | 3/24/17',
                subtext: {
                  you: 'You',
                  action: 'created an event with',
                  to: 'Aida Lee',
                  extra: 'and 5 others'
                },
                iconSet: x,
                fields: [
                  {
                    label: 'Location',
                    content: 'Westen St. Francis, San Francisco, CA, 94622'
                  },
                  {
                    label: 'Attendees',
                    content: 'Jason Dewar (Organizer) + 5 others'
                  },
                  { label: 'When', content: 'March 26, 10:00 AM - 11:00 AM' }
                ],
                bodyLabel: 'Description',
                isExpanded: t(4),
                isNarrow: e.isNarrow,
                footerButtons: e.footerButtons
              },
              "Let's discuss the 2017 product roadmap and address any questions"
            )
          )
        );
      },
      L = n.a.createElement(A, { id: 'base', isExpanded: 'false' }),
      B = [
        {
          id: 'narrow',
          label: 'Narrow',
          element: n.a.createElement(
            M,
            null,
            n.a.createElement(A, {
              id: 'narrow',
              itemsExpanded: [1, 2, 3, 4],
              isNarrow: !0,
              footerButtons: !0
            })
          )
        }
      ],
      C = [
        {
          id: 'expanded',
          label: 'Expanded',
          element: n.a.createElement(A, {
            id: 'expanded',
            itemsExpanded: [1, 2, 3, 4],
            footerButtons: !0
          })
        },
        {
          id: 'expanded-single',
          label: 'Expanded - Single Item',
          element: n.a.createElement(A, {
            id: 'expanded',
            itemsExpanded: [1],
            footerButtons: !0
          })
        },
        {
          id: 'error',
          label: 'Error',
          element: n.a.createElement(A, {
            id: 'error',
            itemsExpanded: [1, 2, 3, 4],
            hasError: !0,
            footerButtons: !0
          })
        },
        {
          id: 'error-single',
          label: 'Error - Single Item',
          element: n.a.createElement(A, {
            id: 'error',
            itemsExpanded: [1],
            hasError: !0,
            footerButtons: !0
          })
        }
      ],
      D = s.c.code,
      I = s.c.h2,
      P = s.c.h3,
      R = s.c.h4,
      z = s.c.li,
      F = s.c.p,
      G = s.c.strong,
      J = s.c.ul,
      W = function() {
        return Object(l.createElement)(
          s.b,
          {},
          Object(l.createElement)(
            'div',
            { className: 'doc lead' },
            'The activity timeline displays each of the user’s upcoming, current, and past activities.'
          ),
          Object(l.createElement)(i.a, { exampleOnly: !0 }, L),
          I({ id: 'About-Activity-Timeline' }, 'About Activity Timeline'),
          F(
            {},
            'Each Activity timeline item receives its width from the parent list. It can consume the full width of the main page area or be placed in the smaller right sidebar.'
          ),
          P({ id: 'Accessibility' }, 'Accessibility'),
          F(
            {},
            'Text describing the type of timeline item is placed in a ',
            D({}, 'span'),
            '. It is the first element in the timeline item and should be hidden with the ',
            D({}, 'slds-assistive-text'),
            ' class. The ',
            D({}, 'SVG'),
            ' image does not need the ',
            D({}, 'slds-assistive-text'),
            ' class.'
          ),
          R({ id: 'Markup' }, 'Markup'),
          F({}, G({}, 'Button:')),
          J(
            {},
            z(
              {},
              D({}, 'aria-controls'),
              ' is used to create an association between the button and the details section. If the details section has an ',
              D({}, 'id="email-content"'),
              ', then the button should have ',
              D({}, 'aria-controls="email-content"'),
              '.'
            ),
            z(
              {},
              'The title of the timeline item can also be used as a button to open the details section. If the details section has an ',
              D({}, 'id="email-content"'),
              ', then the div with ',
              D({}, 'slds-timeline__trigger'),
              ' should have ',
              D({}, 'aria-controls="email-content"'),
              ' and the click handler.'
            ),
            z(
              {},
              D({}, 'aria-expanded'),
              ' indicates if the details section is open or closed and is read aloud by assistive technology when the button is focused.'
            )
          ),
          F({}, G({}, 'Section:')),
          J(
            {},
            z(
              {},
              D({}, 'aria-hidden'),
              ' indicates if the details section is open or closed, and if set to ',
              D({}, 'true'),
              ', assistive technology hides the details section.'
            )
          ),
          R({ id: 'Keyboard-Interactions' }, 'Keyboard Interactions'),
          J(
            {},
            z(
              {},
              'The button should behave as a normal button. The user should be able to tab to focus it and press enter/space to activate it.'
            )
          ),
          I({ id: 'Base' }, 'Base'),
          Object(l.createElement)(i.a, null, L),
          I({ id: 'States' }, 'States'),
          P({ id: 'Expanding-sections' }, 'Expanding sections'),
          Object(l.createElement)(
            r.a,
            { type: 'a11y', header: 'Accessibility Note' },
            Object(l.createElement)(
              'p',
              null,
              'When the user interacts with the button to open the details section, ',
              Object(l.createElement)('code', null, 'aria-expanded'),
              ' on the button should be ',
              Object(l.createElement)('code', null, 'true'),
              ' and ',
              Object(l.createElement)('code', null, 'aria-hidden'),
              ' on the details section should be ',
              Object(l.createElement)('code', null, 'false'),
              '.'
            ),
            Object(l.createElement)(
              'p',
              null,
              'When the user interacts with the button to close the details section, ',
              Object(l.createElement)('code', null, 'aria-expanded'),
              ' on the button should be ',
              Object(l.createElement)('code', null, 'false'),
              ' and ',
              Object(l.createElement)('code', null, 'aria-hidden'),
              ' on the details section should be ',
              Object(l.createElement)('code', null, 'true'),
              '.'
            )
          ),
          R({ id: 'Single-Item-Expanded' }, 'Single Item Expanded'),
          Object(l.createElement)(i.a, null, Object(o.e)(C, 'expanded-single')),
          R({ id: 'Multiple-Items-Expanded' }, 'Multiple Items Expanded'),
          Object(l.createElement)(i.a, null, Object(o.e)(C, 'expanded')),
          P({ id: 'Error' }, 'Error'),
          Object(l.createElement)(i.a, null, Object(o.e)(C, 'error-single')),
          I({ id: 'Narrow-Region-Example' }, 'Narrow Region Example'),
          Object(l.createElement)(i.a, null, Object(o.e)(B, 'narrow'))
        );
      },
      Y = function() {
        return Object(s.a)(W());
      };
  }
});
