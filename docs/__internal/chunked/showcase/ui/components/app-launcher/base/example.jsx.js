var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/app-launcher/base/example.jsx.js'
] = (function(e) {
  function a(a) {
    for (
      var l, r, i = a[0], o = a[1], c = a[2], p = 0, u = [];
      p < i.length;
      p++
    )
      (r = i[p]),
        Object.prototype.hasOwnProperty.call(s, r) && s[r] && u.push(s[r][0]),
        (s[r] = 0);
    for (l in o) Object.prototype.hasOwnProperty.call(o, l) && (e[l] = o[l]);
    for (d && d(a); u.length; ) u.shift()();
    return n.push.apply(n, c || []), t();
  }
  function t() {
    for (var e, a = 0; a < n.length; a++) {
      for (var t = n[a], l = !0, i = 1; i < t.length; i++) {
        var o = t[i];
        0 !== s[o] && (l = !1);
      }
      l && (n.splice(a--, 1), (e = r((r.s = t[0]))));
    }
    return e;
  }
  var l = {},
    s = {
      4: 0,
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
    n = [];
  function r(a) {
    if (l[a]) return l[a].exports;
    var t = (l[a] = { i: a, l: !1, exports: {} });
    return e[a].call(t.exports, t, t.exports, r), (t.l = !0), t.exports;
  }
  (r.m = e),
    (r.c = l),
    (r.d = function(e, a, t) {
      r.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: t });
    }),
    (r.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (r.t = function(e, a) {
      if ((1 & a && (e = r(e)), 8 & a)) return e;
      if (4 & a && 'object' == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (r.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
        2 & a && 'string' != typeof e)
      )
        for (var l in e)
          r.d(
            t,
            l,
            function(a) {
              return e[a];
            }.bind(null, l)
          );
      return t;
    }),
    (r.n = function(e) {
      var a =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(a, 'a', a), a;
    }),
    (r.o = function(e, a) {
      return Object.prototype.hasOwnProperty.call(e, a);
    }),
    (r.p = '/assets/scripts/bundle/');
  var i = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    o = i.push.bind(i);
  (i.push = a), (i = i.slice());
  for (var c = 0; c < i.length; c++) a(i[c]);
  var d = o;
  return n.push([181, 0]), t();
})({
  0: function(e, a) {
    e.exports = React;
  },
  16: function(e, a) {
    e.exports = ReactDOM;
  },
  181: function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'Context', function() {
        return m;
      }),
      t.d(a, 'AppLauncherModal', function() {
        return b;
      }),
      t.d(a, 'AppLauncherTile', function() {
        return f;
      }),
      t.d(a, 'itemTiles', function() {
        return h;
      }),
      t.d(a, 'searchItemTiles', function() {
        return g;
      }),
      t.d(a, 'appTiles', function() {
        return v;
      }),
      t.d(a, 'appTilesSearch', function() {
        return y;
      }),
      t.d(a, 'appTilesGrabbed', function() {
        return T;
      }),
      t.d(a, 'appTilesMoved', function() {
        return _;
      }),
      t.d(a, 'appTilesDropped', function() {
        return S;
      }),
      t.d(a, 'states', function() {
        return x;
      });
    var l = t(0),
      s = t.n(l),
      n = t(8),
      r = t(21),
      i = t(58),
      o = t(43),
      c = t(101),
      d = t(54),
      p = t(2),
      u = t.n(p),
      m = function(e) {
        return s.a.createElement(
          'div',
          { style: { height: '800px' } },
          e.children
        );
      },
      b = function(e) {
        return s.a.createElement(
          r.Modal,
          {
            className: 'slds-modal_large slds-app-launcher',
            'aria-labelledby': 'header43'
          },
          s.a.createElement(
            r.ModalHeader,
            {
              className:
                'slds-grid slds-grid_align-spread slds-grid_vertical-align-center'
            },
            s.a.createElement(
              'h2',
              { id: 'header43', className: 'slds-text-heading_medium' },
              'App Launcher'
            ),
            s.a.createElement(
              'div',
              { className: 'slds-app-launcher__header-search' },
              s.a.createElement(
                'div',
                { className: 'slds-form-element' },
                s.a.createElement(
                  'label',
                  {
                    htmlFor: 'app-launcher-search',
                    className: 'slds-form-element__label slds-assistive-text'
                  },
                  'Find an app'
                ),
                s.a.createElement(
                  'div',
                  {
                    className:
                      'slds-form-element__control slds-input-has-icon slds-input-has-icon_left'
                  },
                  s.a.createElement(n.a, {
                    className: 'slds-input__icon',
                    sprite: 'utility',
                    symbol: 'search'
                  }),
                  s.a.createElement('input', {
                    type: 'search',
                    className: 'slds-input',
                    id: 'app-launcher-search',
                    placeholder: 'Find an app',
                    defaultValue: e.searchTerm
                  })
                )
              )
            ),
            s.a.createElement(
              'button',
              { className: 'slds-button slds-button_neutral' },
              'App Exchange'
            )
          ),
          s.a.createElement(
            r.ModalContent,
            { className: 'slds-app-launcher__content slds-p-around_medium' },
            s.a.createElement(
              i.Section,
              { className: 'slds-is-open' },
              s.a.createElement(
                i.SectionTitle,
                null,
                s.a.createElement(
                  i.SectionTitleAction,
                  { isOpen: !0, referenceId: 'appsContent' },
                  'All Apps'
                )
              ),
              s.a.createElement(
                i.SectionContent,
                { isOpen: !0, referenceId: 'appsContent' },
                s.a.createElement(
                  'div',
                  {
                    className: 'slds-assistive-text',
                    id: 'drag-live-region',
                    'aria-live': 'assertive'
                  },
                  e.dragDropLiveRegion
                ),
                s.a.createElement(
                  'ul',
                  { className: 'slds-grid slds-grid_pull-padded slds-wrap' },
                  e.appTiles.map(function(e, a) {
                    return s.a.createElement(
                      'li',
                      {
                        className:
                          'slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3',
                        key: a
                      },
                      s.a.createElement(f, {
                        figureClass: e.figureClass,
                        grabbed: e.grabbed,
                        objectInitials: e.initials,
                        label: e.label,
                        description: e.description,
                        hasTooltip: e.hasTooltip,
                        tooltipText: e.tooltipText,
                        index: a
                      })
                    );
                  })
                )
              )
            ),
            s.a.createElement('hr', null),
            s.a.createElement(
              i.Section,
              { className: 'slds-is-open' },
              s.a.createElement(
                i.SectionTitle,
                null,
                s.a.createElement(
                  i.SectionTitleAction,
                  { isOpen: !0, referenceId: 'itemsContent' },
                  'All Items'
                )
              ),
              s.a.createElement(
                i.SectionContent,
                { isOpen: !0, referenceId: 'itemsContent' },
                s.a.createElement(
                  'ul',
                  { className: 'slds-grid slds-wrap' },
                  e.itemTiles.map(function(e, a) {
                    return s.a.createElement(
                      'li',
                      {
                        className:
                          'slds-col_padded slds-p-vertical_xx-small slds-size_1-of-5',
                        key: a
                      },
                      s.a.createElement(
                        'a',
                        {
                          href: 'javascript:void(0);',
                          className: 'slds-truncate',
                          title: e.label
                        },
                        e.label
                      )
                    );
                  })
                )
              )
            )
          )
        );
      },
      f = function(e) {
        return s.a.createElement(
          'div',
          {
            draggable: !0,
            className: u()(
              'slds-app-launcher__tile slds-text-link_reset slds-is-draggable',
              e.className,
              { 'slds-is-grabbed': e.grabbed }
            )
          },
          s.a.createElement(
            'div',
            { className: 'slds-app-launcher__tile-figure' },
            s.a.createElement(
              o.Avatar,
              { className: 'slds-avatar_large' },
              s.a.createElement(
                'abbr',
                {
                  className: u()('slds-avatar__initials', e.figureClass),
                  title: e.label
                },
                e.objectInitials
              )
            ),
            s.a.createElement(
              'div',
              { className: 'slds-m-top_xxx-small' },
              s.a.createElement(c.ButtonIconStateful, {
                'aria-pressed': e.grabbed ? 'true' : 'false',
                assistiveText: 'Reorder',
                selected: e.grabbed,
                symbol: 'rows',
                title: 'Reorder'
              })
            )
          ),
          s.a.createElement(
            'div',
            { className: 'slds-app-launcher__tile-body' },
            s.a.createElement('a', { href: 'javascript:void(0);' }, e.label),
            s.a.createElement(
              'p',
              null,
              e.description,
              ' ',
              e.hasTooltip &&
                s.a.createElement(
                  'button',
                  {
                    'aria-describedby': 'help-'.concat(e.index),
                    className: 'slds-button slds-button_reset slds-text-link'
                  },
                  'More'
                )
            ),
            s.a.createElement(
              d.Tooltip,
              {
                className: u()('slds-nubbin_top', {
                  'slds-hide': !e.tooltipText
                }),
                id: 'help-'.concat(e.index),
                style: { position: 'absolute', top: '100px', left: '165px' }
              },
              e.tooltipText
            )
          )
        );
      },
      h = [
        { label: 'Accounts', symbol: 'account' },
        { label: 'Announcements', symbol: 'announcement' },
        { label: 'Approvals', symbol: 'approval' },
        { label: 'Campaigns', symbol: 'campaign' },
        { label: 'Cases', symbol: 'case' },
        { label: 'Coaching', symbol: 'coaching' },
        { label: 'Contacts', symbol: 'contact' }
      ],
      g = [
        {
          label: s.a.createElement(
            'span',
            null,
            s.a.createElement('mark', null, 'Sales'),
            ' Invoices'
          ),
          symbol: 'account'
        },
        {
          label: s.a.createElement(
            'span',
            null,
            s.a.createElement('mark', null, 'Sales'),
            ' Objects'
          ),
          symbol: 'announcement'
        }
      ],
      v = [
        {
          description:
            'The primary internal Salesforce org. Used to run our online sales business...',
          hasTooltip: !0,
          figureClass: 'slds-icon-custom-27',
          grabbed: !1,
          initials: 'SC',
          label: 'Sales Cloud'
        },
        {
          description:
            'Salesforce Marketing Cloud lets businesses of any size...',
          hasTooltip: !0,
          figureClass: 'slds-icon-custom-59',
          grabbed: !1,
          initials: 'MC',
          label: 'Marketing Cloud'
        },
        {
          description: 'Community for managing employee benefits and time off.',
          hasTooltip: !1,
          figureClass: 'slds-icon-custom-10',
          grabbed: !1,
          initials: 'HR',
          label: 'HR Concierge'
        },
        {
          description:
            'Manage your finances across multiple financial platforms...',
          hasTooltip: !0,
          figureClass: 'slds-icon-custom-6',
          grabbed: !1,
          initials: 'MM',
          label: 'My Money'
        },
        {
          description:
            'The key to call center and contact center management is more...',
          hasTooltip: !0,
          figureClass: 'slds-icon-custom-91',
          grabbed: !1,
          initials: 'CC',
          label: 'Call Center'
        },
        {
          description:
            'Areas of Focus are used to track customer support for your...',
          hasTooltip: !0,
          figureClass: 'slds-icon-custom-50',
          grabbed: !1,
          initials: 'CS',
          label: 'Customer Support Communitiy'
        }
      ],
      y = [
        {
          description:
            'The primary internal Salesforce org. Used to run our...',
          hasTooltip: !0,
          figureClass: 'slds-icon-custom-27',
          grabbed: !1,
          initials: 'SC',
          label: s.a.createElement(
            'span',
            null,
            s.a.createElement('mark', null, 'Sales'),
            ' Cloud'
          )
        }
      ],
      E = function(e, a, t) {
        var l = e.slice(0);
        return l.splice(t, 0, l.splice(a, 1)[0]), l;
      },
      T = v.slice(0);
    T[0] = Object.assign({}, T[0], { grabbed: !0 });
    var _ = E(v, 0, 2);
    _[2] = Object.assign({}, _[2], { grabbed: !0 });
    var S = E(v, 0, 3),
      C = s.a.createElement(
        r.Backdrop,
        null,
        s.a.createElement(b, {
          appTiles: v,
          dragDropLiveRegion: '',
          itemTiles: h
        })
      );
    a.default = C;
    var x = [
      {
        id: 'default',
        label: 'Default',
        demoStyles: 'height: 800px;',
        element: C
      },
      {
        id: 'grabbed',
        label: 'Tile grabbed',
        demoStyles: 'height: 800px;',
        element: s.a.createElement(
          r.Backdrop,
          null,
          s.a.createElement(b, {
            appTiles: T,
            dragDropLiveRegion:
              'Sales Cloud: current position 1 of 6. Use the up and down arrows to move this app',
            grabbed: !0,
            itemTiles: h
          })
        )
      },
      {
        id: 'moved',
        label: 'Tile moved in list',
        demoStyles: 'height: 800px;',
        element: s.a.createElement(
          r.Backdrop,
          null,
          s.a.createElement(b, {
            appTiles: _,
            dragDropLiveRegion: 'Sales Cloud: new position 3 of 6.',
            itemTiles: h
          })
        )
      },
      {
        id: 'dropped',
        label: 'Tile dropped',
        demoStyles: 'height: 800px;',
        element: s.a.createElement(
          r.Backdrop,
          null,
          s.a.createElement(b, {
            appTiles: S,
            dragDropLiveRegion: 'Sales Cloud: final position 4 of 6.',
            itemTiles: h
          })
        )
      },
      {
        id: 'search',
        label: 'Search',
        demoStyles: 'height: 800px;',
        element: s.a.createElement(
          r.Backdrop,
          null,
          s.a.createElement(b, {
            appTiles: y,
            dragDropLiveRegion: '',
            itemTiles: g,
            searchTerm: 'sales'
          })
        )
      },
      {
        id: 'tooltip',
        label: 'Tooltip',
        demoStyles: 'width: 360px; height: 135px;',
        element: s.a.createElement(f, {
          figureClass: 'slds-icon-custom-27',
          objectInitials: 'SC',
          label: 'Sales Cloud',
          description:
            'The primary internal Salesforce org. Used to run our online sales business...',
          hasTooltip: !0,
          tooltipText:
            'The primary internal Salesforce org. Used to run our online sales business and manage accounts.',
          index: 'x'
        })
      }
    ];
  }
});
