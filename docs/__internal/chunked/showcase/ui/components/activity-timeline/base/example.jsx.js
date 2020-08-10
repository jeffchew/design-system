var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/activity-timeline/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var l, i, r = t[0], o = t[1], d = t[2], m = 0, u = [];
      m < r.length;
      m++
    )
      (i = r[m]),
        Object.prototype.hasOwnProperty.call(n, i) && n[i] && u.push(n[i][0]),
        (n[i] = 0);
    for (l in o) Object.prototype.hasOwnProperty.call(o, l) && (e[l] = o[l]);
    for (c && c(t); u.length; ) u.shift()();
    return s.push.apply(s, d || []), a();
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
    n = {
      2: 0,
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
  var r = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    o = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var d = 0; d < r.length; d++) t(r[d]);
  var c = o;
  return s.push([173, 0]), a();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  173: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'TimelineIcon', function() {
        return b;
      }),
      a.d(t, 'TimelineActions', function() {
        return x;
      }),
      a.d(t, 'TimelineMediaFigure', function() {
        return E;
      }),
      a.d(t, 'TimelineMediaBody', function() {
        return _;
      }),
      a.d(t, 'TimelineTrigger', function() {
        return h;
      }),
      a.d(t, 'TimelineSubtext', function() {
        return y;
      }),
      a.d(t, 'TimelineError', function() {
        return v;
      }),
      a.d(t, 'TimelineItem', function() {
        return g;
      }),
      a.d(t, 'FieldInfoListItem', function() {
        return N;
      }),
      a.d(t, 'FieldInfoList', function() {
        return w;
      }),
      a.d(t, 'DescriptionCard', function() {
        return T;
      }),
      a.d(t, 'NarrowContext', function() {
        return S;
      }),
      a.d(t, 'ActivityTimeline', function() {
        return k;
      }),
      a.d(t, 'examples', function() {
        return L;
      }),
      a.d(t, 'states', function() {
        return M;
      });
    var l = a(0),
      n = a.n(l),
      s = a(4),
      i = a(24),
      r = a(8),
      o = a(9),
      d = a(13),
      c = a(2),
      m = a.n(c),
      u = [
        n.a.createElement(o.UtilityIcon, {
          key: 'groups',
          className:
            'slds-icon_xx-small slds-icon-text-default slds-m-left_x-small',
          symbol: 'groups',
          title: 'Group email',
          assistiveText: 'Group email'
        }),
        n.a.createElement(o.UtilityIcon, {
          key: 'attach',
          className:
            'slds-icon_xx-small slds-icon-text-default slds-m-left_x-small',
          symbol: 'attach',
          title: 'Has attachments',
          assistiveText: 'Has attachments'
        })
      ],
      p = [
        n.a.createElement(o.UtilityIcon, {
          key: 'rotate',
          className:
            'slds-icon_xx-small slds-icon-text-default slds-m-left_x-small',
          symbol: 'rotate',
          title: 'Recurring Task',
          assistiveText: 'Recurring Task'
        })
      ],
      f = [
        n.a.createElement(o.UtilityIcon, {
          key: 'world',
          className:
            'slds-icon_xx-small slds-icon-text-default slds-m-left_x-small',
          symbol: 'world',
          title: 'Public sharing',
          assistiveText: 'Public sharing'
        })
      ],
      b = function(e) {
        return n.a.createElement(
          'div',
          {
            className: m()(
              'slds-icon_container',
              'log_a_call' === e.symbol
                ? 'slds-icon-standard-log-a-call'
                : 'slds-icon-standard-' + e.symbol,
              e.className
            ),
            title: 'log_a_call' === e.symbol ? 'call' : e.symbol
          },
          n.a.createElement(r.a, {
            className: 'slds-icon slds-icon_small',
            sprite: 'standard',
            symbol: e.symbol
          })
        );
      },
      x = function(e) {
        return n.a.createElement(
          'div',
          {
            className: m()('slds-timeline__actions', {
              'slds-timeline__actions_inline': e.inline
            })
          },
          n.a.createElement(
            'p',
            { className: 'slds-timeline__date' },
            e.date || 'Feb 24'
          ),
          n.a.createElement(s.b, {
            className:
              'slds-button_icon-border-filled slds-button_icon-x-small',
            symbol: 'down',
            assistiveText: e.assistiveText || 'More Options',
            'aria-haspopup': 'true',
            title: e.title || 'More Options'
          })
        );
      },
      E = function(e) {
        return n.a.createElement(
          'div',
          { className: 'slds-media__figure' },
          n.a.createElement(s.b, {
            iconClassName: 'slds-timeline__details-action-icon',
            symbol: 'switch',
            title: 'Toggle details for '.concat(e.title),
            assistiveText: 'Toggle details for '.concat(e.title),
            'aria-controls': e.id,
            'aria-expanded': e.isExpanded
          }),
          n.a.createElement(b, {
            symbol: e.type,
            className: 'slds-timeline__icon'
          })
        );
      },
      _ = function(e) {
        return n.a.createElement(
          'div',
          { className: 'slds-media__body' },
          e.children
        );
      },
      h = function(e) {
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
              n.a.createElement(i.Checkbox, {
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
          n.a.createElement(x, {
            inline: !0,
            date: e.date,
            title: 'More Options for this item',
            assistiveText: 'More Options for this item'
          })
        );
      },
      y = function(e) {
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
      v = function(e) {
        return n.a.createElement(
          'div',
          {
            className:
              'slds-grid slds-text-color_error slds-m-top_x-small slds-m-horizontal_xx-small',
            id: e.id
          },
          n.a.createElement(o.UtilityIcon, {
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
      g = function(e) {
        return n.a.createElement(
          'div',
          {
            className: m()(
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
            { className: m()('slds-media') },
            n.a.createElement(E, e),
            n.a.createElement(
              _,
              null,
              n.a.createElement(h, e),
              n.a.createElement(y, e),
              e.hasError
                ? n.a.createElement(v, e)
                : n.a.createElement(
                    T,
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
      N = function(e) {
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
      w = function(e) {
        return n.a.createElement(
          'ul',
          { className: 'slds-list_horizontal slds-wrap' },
          e.fields.map(function(e, t) {
            return n.a.createElement(N, {
              key: t,
              label: e.label,
              content: e.content
            });
          })
        );
      },
      T = function(e) {
        return n.a.createElement(
          'article',
          {
            className: m()(
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
          e.fields && n.a.createElement(w, e),
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
              d.Button,
              { isNeutral: !0, className: 'slds-m-top_small' },
              n.a.createElement(r.a, {
                className: 'slds-button__icon slds-button__icon_left',
                sprite: 'utility',
                symbol: 'world'
              }),
              'Public Sharing'
            )
        );
      },
      S = function(e) {
        return n.a.createElement(
          'div',
          { className: 'demo-only', style: { width: '400px' } },
          e.children
        );
      },
      k = function(e) {
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
              g,
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
                iconSet: p,
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
              g,
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
              g,
              {
                id: ''.concat('email-item-' + e.id),
                type: 'email',
                title:
                  'Re: Mobile conversation on Monday with the new global team',
                date: '10:00am | 3/24/17',
                subtext: { you: 'You', action: 'emailed', to: 'Lea Chan' },
                iconSet: u,
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
              g,
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
                iconSet: f,
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
      };
    t.default = n.a.createElement(k, { id: 'base', isExpanded: 'false' });
    var L = [
        {
          id: 'narrow',
          label: 'Narrow',
          element: n.a.createElement(
            S,
            null,
            n.a.createElement(k, {
              id: 'narrow',
              itemsExpanded: [1, 2, 3, 4],
              isNarrow: !0,
              footerButtons: !0
            })
          )
        }
      ],
      M = [
        {
          id: 'expanded',
          label: 'Expanded',
          element: n.a.createElement(k, {
            id: 'expanded',
            itemsExpanded: [1, 2, 3, 4],
            footerButtons: !0
          })
        },
        {
          id: 'expanded-single',
          label: 'Expanded - Single Item',
          element: n.a.createElement(k, {
            id: 'expanded',
            itemsExpanded: [1],
            footerButtons: !0
          })
        },
        {
          id: 'error',
          label: 'Error',
          element: n.a.createElement(k, {
            id: 'error',
            itemsExpanded: [1, 2, 3, 4],
            hasError: !0,
            footerButtons: !0
          })
        },
        {
          id: 'error-single',
          label: 'Error - Single Item',
          element: n.a.createElement(k, {
            id: 'error',
            itemsExpanded: [1],
            hasError: !0,
            footerButtons: !0
          })
        }
      ];
  }
});
