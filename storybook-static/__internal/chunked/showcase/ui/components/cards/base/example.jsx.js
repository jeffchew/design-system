var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/cards/base/example.jsx.js'
] = (function(e) {
  function a(a) {
    for (
      var l, c, r = a[0], d = a[1], i = a[2], m = 0, u = [];
      m < r.length;
      m++
    )
      (c = r[m]),
        Object.prototype.hasOwnProperty.call(n, c) && n[c] && u.push(n[c][0]),
        (n[c] = 0);
    for (l in d) Object.prototype.hasOwnProperty.call(d, l) && (e[l] = d[l]);
    for (o && o(a); u.length; ) u.shift()();
    return s.push.apply(s, i || []), t();
  }
  function t() {
    for (var e, a = 0; a < s.length; a++) {
      for (var t = s[a], l = !0, r = 1; r < t.length; r++) {
        var d = t[r];
        0 !== n[d] && (l = !1);
      }
      l && (s.splice(a--, 1), (e = c((c.s = t[0]))));
    }
    return e;
  }
  var l = {},
    n = {
      28: 0,
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
  function c(a) {
    if (l[a]) return l[a].exports;
    var t = (l[a] = { i: a, l: !1, exports: {} });
    return e[a].call(t.exports, t, t.exports, c), (t.l = !0), t.exports;
  }
  (c.m = e),
    (c.c = l),
    (c.d = function(e, a, t) {
      c.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: t });
    }),
    (c.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (c.t = function(e, a) {
      if ((1 & a && (e = c(e)), 8 & a)) return e;
      if (4 & a && 'object' == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (c.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
        2 & a && 'string' != typeof e)
      )
        for (var l in e)
          c.d(
            t,
            l,
            function(a) {
              return e[a];
            }.bind(null, l)
          );
      return t;
    }),
    (c.n = function(e) {
      var a =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return c.d(a, 'a', a), a;
    }),
    (c.o = function(e, a) {
      return Object.prototype.hasOwnProperty.call(e, a);
    }),
    (c.p = '/assets/scripts/bundle/');
  var r = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    d = r.push.bind(r);
  (r.push = a), (r = r.slice());
  for (var i = 0; i < r.length; i++) a(r[i]);
  var o = d;
  return s.push([182, 0]), t();
})({
  0: function(e, a) {
    e.exports = React;
  },
  16: function(e, a) {
    e.exports = ReactDOM;
  },
  182: function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'CardWithDataTable', function() {
        return b;
      }),
      t.d(a, 'CardWithTiles', function() {
        return p;
      }),
      t.d(a, 'NestedCards', function() {
        return v;
      }),
      t.d(a, 'WrappedCards', function() {
        return y;
      }),
      t.d(a, 'states', function() {
        return f;
      }),
      t.d(a, 'examples', function() {
        return w;
      });
    var l = t(0),
      n = t.n(l),
      s = t(80),
      c = t(22),
      r = t(11),
      d = t(3),
      i = t(53),
      o = t(57),
      m = t(87),
      u = n.a.createElement(
        'button',
        { className: 'slds-button slds-button_neutral' },
        'New'
      ),
      E = n.a.createElement(
        d.r,
        {
          isFixedLayout: !0,
          isBordered: !0,
          hasNoRowHover: !0,
          hasCellBuffer: !0,
          type: 'advanced'
        },
        n.a.createElement(
          d.p,
          null,
          n.a.createElement(
            d.q,
            null,
            n.a.createElement(
              d.c,
              null,
              n.a.createElement(d.b, { columnName: 'Name' })
            ),
            n.a.createElement(
              d.c,
              null,
              n.a.createElement(d.b, { columnName: 'Company' })
            ),
            n.a.createElement(
              d.c,
              null,
              n.a.createElement(d.b, { columnName: 'Title' })
            ),
            n.a.createElement(
              d.c,
              null,
              n.a.createElement(d.b, { columnName: 'Email' })
            )
          )
        ),
        n.a.createElement(
          d.n,
          null,
          n.a.createElement(
            d.o,
            null,
            n.a.createElement(
              d.l,
              null,
              n.a.createElement(d.i, {
                cellLink: 'javascript:void(0);',
                cellText: 'Amy Choi'
              })
            ),
            n.a.createElement(
              d.s,
              { type: 'advanced' },
              n.a.createElement(d.i, { cellText: 'Company One' })
            ),
            n.a.createElement(
              d.s,
              { type: 'advanced' },
              n.a.createElement(d.i, { cellText: 'Director of Operations' })
            ),
            n.a.createElement(
              d.s,
              { type: 'advanced' },
              n.a.createElement(d.i, { cellText: 'adam@company.com' })
            )
          )
        )
      ),
      h = n.a.createElement(
        'ul',
        { className: 'slds-grid slds-wrap slds-grid_pull-padded' },
        n.a.createElement(
          'li',
          {
            className:
              'slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3'
          },
          n.a.createElement(s.TileMedia, {
            actions: !0,
            className: 'slds-card__tile',
            media: n.a.createElement(c.StandardIcon, {
              className: 'slds-icon_small',
              symbol: 'contact',
              assistiveText: 'Contact'
            }),
            title: 'Related Record Title 1'
          })
        ),
        n.a.createElement(
          'li',
          {
            className:
              'slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3'
          },
          n.a.createElement(s.TileMedia, {
            actions: !0,
            className: 'slds-card__tile',
            media: n.a.createElement(c.StandardIcon, {
              className: 'slds-icon_small',
              symbol: 'contact',
              assistiveText: 'Contact'
            }),
            title: 'Related Record Title 1'
          })
        ),
        n.a.createElement(
          'li',
          {
            className:
              'slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3'
          },
          n.a.createElement(s.TileMedia, {
            actions: !0,
            className: 'slds-card__tile',
            media: n.a.createElement(c.StandardIcon, {
              className: 'slds-icon_small',
              symbol: 'contact',
              assistiveText: 'Contact'
            }),
            title: 'Related Record Title 1'
          })
        )
      ),
      b = function(e) {
        return n.a.createElement(
          r.d,
          null,
          n.a.createElement(r.c, {
            title: 'Contacts (1)',
            href: 'javascript:void(0);',
            symbol: 'contact',
            action: u
          }),
          n.a.createElement(r.a, null, E),
          n.a.createElement(
            r.b,
            null,
            'View All ',
            n.a.createElement(
              'span',
              { className: 'slds-assistive-text' },
              'Contacts'
            )
          )
        );
      },
      p = function(e) {
        return n.a.createElement(
          r.d,
          null,
          n.a.createElement(r.c, {
            title: 'Contacts (3)',
            href: 'javascript:void(0);',
            symbol: 'contact',
            action: u
          }),
          n.a.createElement(r.a, { hasPadding: !0 }, h),
          n.a.createElement(
            r.b,
            null,
            'View All ',
            n.a.createElement(
              'span',
              { className: 'slds-assistive-text' },
              'Contacts'
            )
          )
        );
      },
      v = function(e) {
        return n.a.createElement(
          r.d,
          null,
          n.a.createElement(r.c, {
            title: 'Outer Card Header',
            href: 'javascript:void(0);',
            symbol: 'contact',
            action: u
          }),
          n.a.createElement(
            r.a,
            { hasPadding: !0 },
            n.a.createElement(
              r.d,
              null,
              n.a.createElement(r.c, {
                title: 'Contacts',
                href: 'javascript:void(0);',
                symbol: 'contact',
                action: u
              }),
              n.a.createElement(
                r.a,
                { hasPadding: !0 },
                'This is a card inside an `slds-card` to show how styling is removed when cards are nested inside each other.'
              ),
              n.a.createElement(
                r.b,
                null,
                'View All ',
                n.a.createElement(
                  'span',
                  { className: 'slds-assistive-text' },
                  'Contacts'
                )
              )
            ),
            n.a.createElement(
              r.d,
              null,
              n.a.createElement(r.c, {
                title: 'Contacts',
                href: 'javascript:void(0);',
                symbol: 'contact',
                action: u
              }),
              n.a.createElement(
                r.a,
                { hasPadding: !0 },
                'This is a card inside an `slds-card` to show how styling is removed when cards are nested inside each other.'
              ),
              n.a.createElement(
                r.b,
                null,
                'View All ',
                n.a.createElement(
                  'span',
                  { className: 'slds-assistive-text' },
                  'Contacts'
                )
              )
            ),
            n.a.createElement(
              r.d,
              { hasCardBoundary: !0 },
              n.a.createElement(r.c, {
                title: 'Contacts',
                href: 'javascript:void(0);',
                symbol: 'contact',
                action: u
              }),
              n.a.createElement(
                r.a,
                { hasPadding: !0 },
                'This is a card inside an `slds-card` to illustrate how `slds-card_boundary` adds a rounded border when desired.'
              ),
              n.a.createElement(
                r.b,
                null,
                'View All ',
                n.a.createElement(
                  'span',
                  { className: 'slds-assistive-text' },
                  'Contacts'
                )
              )
            ),
            n.a.createElement(
              r.d,
              { hasCardBoundary: !0 },
              n.a.createElement(r.c, {
                title: 'Contacts',
                href: 'javascript:void(0);',
                symbol: 'contact',
                action: u
              }),
              n.a.createElement(
                r.a,
                { hasPadding: !0 },
                'This is a card inside an `slds-card` to illustrate how `slds-card_boundary` adds a rounded border when desired.'
              ),
              n.a.createElement(
                r.b,
                null,
                'View All ',
                n.a.createElement(
                  'span',
                  { className: 'slds-assistive-text' },
                  'Contacts'
                )
              )
            )
          )
        );
      },
      y = function(e) {
        return n.a.createElement(
          'div',
          { className: 'slds-card-wrapper' },
          n.a.createElement(
            'header',
            null,
            n.a.createElement(
              'h2',
              { className: 'slds-text-heading_medium' },
              'Outer card wrapper header'
            )
          ),
          n.a.createElement(
            r.d,
            null,
            n.a.createElement(r.c, {
              title: 'Contacts',
              href: 'javascript:void(0);',
              symbol: 'contact',
              action: u
            }),
            n.a.createElement(
              r.a,
              null,
              'This is a card inside an `slds-card-wrapper` to show how styling is removed when cards are nested inside.'
            ),
            n.a.createElement(
              r.b,
              null,
              'View All ',
              n.a.createElement(
                'span',
                { className: 'slds-assistive-text' },
                'Contacts'
              )
            )
          ),
          n.a.createElement(
            r.d,
            { hasCardBoundary: !0 },
            n.a.createElement(r.c, {
              title: 'Contacts',
              href: 'javascript:void(0);',
              symbol: 'contact',
              action: u
            }),
            n.a.createElement(
              r.a,
              { hasPadding: !0 },
              'This is a card inside an `slds-card-wrapper` to illustrate how `slds-card_boundary` adds a rounded border when desired.'
            ),
            n.a.createElement(
              r.b,
              null,
              'View All ',
              n.a.createElement(
                'span',
                { className: 'slds-assistive-text' },
                'Contacts'
              )
            )
          )
        );
      };
    a.default = n.a.createElement(
      r.d,
      null,
      n.a.createElement(r.c, {
        title: 'Accounts',
        href: 'javascript:void(0);',
        symbol: 'account',
        action: n.a.createElement(
          'button',
          { className: 'slds-button slds-button_neutral' },
          'New'
        )
      }),
      n.a.createElement(
        r.a,
        { hasPadding: !0 },
        'Anything can go into the card body'
      ),
      n.a.createElement(
        r.b,
        null,
        'View All ',
        n.a.createElement(
          'span',
          { className: 'slds-assistive-text' },
          'Accounts'
        )
      )
    );
    var f = [
        {
          id: 'empty',
          label: 'Empty',
          element: n.a.createElement(
            r.d,
            null,
            n.a.createElement(r.c, {
              title: 'Card Header',
              href: 'javascript:void(0);',
              symbol: 'contact',
              action: n.a.createElement(
                'button',
                { className: 'slds-button slds-button_neutral' },
                'New'
              )
            }),
            n.a.createElement(r.a, null),
            n.a.createElement(r.b, null)
          )
        },
        {
          id: 'empty-illustration',
          label: 'Empty with illustration',
          element: n.a.createElement(
            r.d,
            null,
            n.a.createElement(r.c, {
              title: 'Tasks',
              href: 'javascript:void(0);',
              symbol: 'task'
            }),
            n.a.createElement(
              r.a,
              { hasPadding: !0 },
              n.a.createElement(
                m.Illustration,
                null,
                n.a.createElement(o.d, null),
                n.a.createElement(m.IllustrationText, {
                  heading: 'No new tasks',
                  message:
                    'Nothing needs your attention right now. Check back later.'
                })
              )
            )
          )
        },
        {
          id: 'loading',
          label: 'Loading',
          element: n.a.createElement(
            r.d,
            null,
            n.a.createElement(r.c, {
              title: 'Tasks',
              href: 'javascript:void(0);',
              symbol: 'task'
            }),
            n.a.createElement(
              r.a,
              { hasPadding: !0 },
              n.a.createElement(i.Spinner, { className: 'slds-spinner_small' })
            )
          )
        }
      ],
      w = [
        {
          id: 'related-list-table',
          label: 'With data-table',
          element: n.a.createElement(b, null)
        },
        {
          id: 'related-list-tiles',
          label: 'With tiles',
          element: n.a.createElement(p, null)
        },
        {
          id: 'nested-cards',
          label: 'Nested cards',
          element: n.a.createElement(v, null)
        },
        {
          id: 'with-no-header',
          label: 'With no header',
          element: n.a.createElement(
            r.d,
            null,
            n.a.createElement(
              r.a,
              { hasPadding: !0 },
              'Anything can go into the card body'
            ),
            n.a.createElement(
              r.b,
              null,
              'View All ',
              n.a.createElement(
                'span',
                { className: 'slds-assistive-text' },
                'Accounts'
              )
            )
          )
        },
        {
          id: 'visibly-hidden-card-header',
          label: 'Visibly hidden card header',
          element: n.a.createElement(
            r.d,
            null,
            n.a.createElement(r.c, {
              title: 'Card Header',
              href: 'javascript:void(0);',
              className: 'slds-assistive-text'
            }),
            n.a.createElement(
              r.a,
              { hasPadding: !0 },
              'Anything can go into the card body'
            ),
            n.a.createElement(
              r.b,
              null,
              'View All ',
              n.a.createElement(
                'span',
                { className: 'slds-assistive-text' },
                'Accounts'
              )
            )
          )
        },
        {
          id: 'body-has-no-padding',
          label: 'Body with no padding',
          element: n.a.createElement(
            r.d,
            null,
            n.a.createElement(r.c, {
              title: 'Accounts',
              href: 'javascript:void(0);',
              symbol: 'account'
            }),
            n.a.createElement(r.a, null, 'Card Body')
          )
        },
        {
          id: 'body-has-padding',
          label: 'Body with padding',
          element: n.a.createElement(
            r.d,
            null,
            n.a.createElement(r.c, {
              title: 'Accounts',
              href: 'javascript:void(0);',
              symbol: 'account'
            }),
            n.a.createElement(r.a, { hasPadding: !0 }, 'Card Body with Padding')
          )
        },
        {
          id: 'has-no-footer',
          label: 'No footer',
          element: n.a.createElement(
            r.d,
            null,
            n.a.createElement(r.c, {
              title: 'Accounts',
              href: 'javascript:void(0);',
              showIcon: !0,
              symbol: 'account'
            }),
            n.a.createElement(r.a, { hasPadding: !0 }, 'Card Body'),
            n.a.createElement(r.b, null)
          )
        },
        {
          id: 'has-footer',
          label: 'Has footer',
          element: n.a.createElement(
            r.d,
            null,
            n.a.createElement(r.c, {
              title: 'Accounts',
              href: 'javascript:void(0);',
              showIcon: !0,
              symbol: 'account'
            }),
            n.a.createElement(r.a, { hasPadding: !0 }, 'Card Body'),
            n.a.createElement(
              r.b,
              null,
              'View All ',
              n.a.createElement(
                'span',
                { className: 'slds-assistive-text' },
                'Accounts'
              )
            )
          )
        },
        {
          id: 'nested-no-boundary',
          label: 'Nested with no boundary',
          element: n.a.createElement(
            r.d,
            null,
            n.a.createElement(r.c, {
              title: 'Outer Card Header',
              href: 'javascript:void(0);',
              symbol: 'account'
            }),
            n.a.createElement(
              r.a,
              { hasPadding: !0 },
              n.a.createElement(
                r.d,
                null,
                n.a.createElement(r.c, {
                  title: 'Card Header',
                  href: 'javascript:void(0);',
                  symbol: 'account'
                }),
                n.a.createElement(
                  r.a,
                  { hasPadding: !0 },
                  'This is a nested card with no styling (default)'
                ),
                n.a.createElement(
                  r.b,
                  null,
                  'View All ',
                  n.a.createElement(
                    'span',
                    { className: 'slds-assistive-text' },
                    'Accounts'
                  )
                )
              )
            ),
            n.a.createElement(
              r.b,
              null,
              'View All ',
              n.a.createElement(
                'span',
                { className: 'slds-assistive-text' },
                'Accounts'
              )
            )
          )
        },
        {
          id: 'nested-with-boundary',
          label: 'Nested with boundary',
          element: n.a.createElement(
            r.d,
            null,
            n.a.createElement(r.c, {
              title: 'Outer Card Header',
              href: 'javascript:void(0);',
              symbol: 'account'
            }),
            n.a.createElement(
              r.a,
              { hasPadding: !0 },
              n.a.createElement(
                r.d,
                { hasCardBoundary: !0 },
                n.a.createElement(r.c, {
                  title: 'Card Header',
                  href: 'javascript:void(0);',
                  symbol: 'account'
                }),
                n.a.createElement(
                  r.a,
                  { hasPadding: !0 },
                  'This is a card inside an `slds-card` to illustrate how `slds-card_boundary` adds a rounded border when desired.'
                ),
                n.a.createElement(
                  r.b,
                  null,
                  'View All ',
                  n.a.createElement(
                    'span',
                    { className: 'slds-assistive-text' },
                    'Accounts'
                  )
                )
              )
            ),
            n.a.createElement(
              r.b,
              null,
              'View All ',
              n.a.createElement(
                'span',
                { className: 'slds-assistive-text' },
                'Accounts'
              )
            )
          )
        },
        {
          id: 'with-long-truncated-title',
          label: 'With long truncated title',
          demoStyles: 'max-width: 360px;',
          element: n.a.createElement(
            r.d,
            null,
            n.a.createElement(r.c, {
              title: 'Card Header Title With Exceptionally Long Title',
              href: 'javascript:void(0);',
              symbol: 'account',
              action: n.a.createElement(
                'button',
                { className: 'slds-button slds-button_neutral' },
                'New'
              )
            }),
            n.a.createElement(
              r.a,
              { hasPadding: !0 },
              'Anything can go into the card body'
            ),
            n.a.createElement(
              r.b,
              null,
              'View All ',
              n.a.createElement(
                'span',
                { className: 'slds-assistive-text' },
                'Accounts'
              )
            )
          )
        }
      ];
  }
});
