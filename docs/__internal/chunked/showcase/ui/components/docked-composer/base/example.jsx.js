var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/docked-composer/base/example.jsx.js'
] = (function(e) {
  function a(a) {
    for (
      var l, o, c = a[0], d = a[1], i = a[2], r = 0, u = [];
      r < c.length;
      r++
    )
      (o = c[r]),
        Object.prototype.hasOwnProperty.call(t, o) && t[o] && u.push(t[o][0]),
        (t[o] = 0);
    for (l in d) Object.prototype.hasOwnProperty.call(d, l) && (e[l] = d[l]);
    for (m && m(a); u.length; ) u.shift()();
    return n.push.apply(n, i || []), s();
  }
  function s() {
    for (var e, a = 0; a < n.length; a++) {
      for (var s = n[a], l = !0, c = 1; c < s.length; c++) {
        var d = s[c];
        0 !== t[d] && (l = !1);
      }
      l && (n.splice(a--, 1), (e = o((o.s = s[0]))));
    }
    return e;
  }
  var l = {},
    t = {
      59: 0,
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
  function o(a) {
    if (l[a]) return l[a].exports;
    var s = (l[a] = { i: a, l: !1, exports: {} });
    return e[a].call(s.exports, s, s.exports, o), (s.l = !0), s.exports;
  }
  (o.m = e),
    (o.c = l),
    (o.d = function(e, a, s) {
      o.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: s });
    }),
    (o.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (o.t = function(e, a) {
      if ((1 & a && (e = o(e)), 8 & a)) return e;
      if (4 & a && 'object' == typeof e && e && e.__esModule) return e;
      var s = Object.create(null);
      if (
        (o.r(s),
        Object.defineProperty(s, 'default', { enumerable: !0, value: e }),
        2 & a && 'string' != typeof e)
      )
        for (var l in e)
          o.d(
            s,
            l,
            function(a) {
              return e[a];
            }.bind(null, l)
          );
      return s;
    }),
    (o.n = function(e) {
      var a =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return o.d(a, 'a', a), a;
    }),
    (o.o = function(e, a) {
      return Object.prototype.hasOwnProperty.call(e, a);
    }),
    (o.p = '/assets/scripts/bundle/');
  var c = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    d = c.push.bind(c);
  (c.push = a), (c = c.slice());
  for (var i = 0; i < c.length; i++) a(c[i]);
  var m = d;
  return n.push([160, 0]), s();
})({
  0: function(e, a) {
    e.exports = React;
  },
  16: function(e, a) {
    e.exports = ReactDOM;
  },
  160: function(e, a, s) {
    'use strict';
    s.r(a),
      s.d(a, 'Footer', function() {
        return g;
      }),
      s.d(a, 'DockedComposerPanel', function() {
        return v;
      }),
      s.d(a, 'ComposerOverflowMenu', function() {
        return x;
      }),
      s.d(a, 'Context', function() {
        return C;
      }),
      s.d(a, 'states', function() {
        return k;
      }),
      s.d(a, 'examples', function() {
        return w;
      });
    var l = s(0),
      t = s.n(l),
      n = s(43),
      o = s(4),
      c = s(14),
      d = s(21),
      i = s(15),
      m = s(5),
      r = s(10),
      u = s(12),
      p = s(18),
      b = s(8),
      _ = s(2),
      E = s.n(_),
      N = s(6),
      h = [
        { entity: 'email', title: 'Agenda for next week' },
        { entity: 'call', title: 'Lei Chan' },
        { entity: 'task', title: 'August 14 Meeting Notes' }
      ],
      g = function(e) {
        return t.a.createElement(
          'div',
          { className: 'slds-col_bump-left slds-text-align_right' },
          t.a.createElement(
            'button',
            { className: 'slds-button slds-button_brand' },
            'Action'
          )
        );
      },
      f = function(e) {
        return t.a.createElement(
          'div',
          {
            className:
              'slds-col_bump-left slds-grid slds-grid_vertical-align-center'
          },
          t.a.createElement(
            'div',
            { className: 'slds-grid slds-m-right_small', role: 'toolbar' },
            t.a.createElement(
              'ul',
              { className: 'slds-grid', 'aria-label': 'Insert content' },
              t.a.createElement(
                'li',
                null,
                t.a.createElement(o.b, {
                  className: 'slds-button_icon-small',
                  symbol: 'link',
                  assistiveText: 'Attach File',
                  title: 'Attach File'
                })
              ),
              t.a.createElement(
                'li',
                null,
                t.a.createElement(o.b, {
                  className: 'slds-button_icon-small',
                  symbol: 'insert_template',
                  assistiveText: 'Insert Template',
                  title: 'Insert Template',
                  tabIndex: '-1'
                })
              ),
              t.a.createElement(
                'li',
                null,
                t.a.createElement(o.b, {
                  className: 'slds-button_icon-small',
                  symbol: 'insert_tag_field',
                  assistiveText: 'Insert HTML',
                  title: 'Insert HTML',
                  tabIndex: '-1'
                })
              )
            ),
            t.a.createElement(o.b, {
              className: 'slds-button_icon-small',
              symbol: 'preview',
              assistiveText: 'Preview',
              title: 'Preview',
              tabIndex: '-1'
            })
          ),
          t.a.createElement(
            'button',
            { className: 'slds-button slds-button_brand' },
            'Send'
          )
        );
      },
      v = function(e) {
        return t.a.createElement(
          'section',
          {
            className: E()(
              'slds-docked-composer slds-grid slds-grid_vertical',
              e.className,
              e.dialogClosed ? 'slds-is-closed' : null
            ),
            role: e.nestedDialog ? null : 'dialog',
            'aria-labelledby': e.nestedDialog ? null : 'dialog-heading-id-1',
            'aria-describedby': e.nestedDialog ? null : 'dialog-content-id-1'
          },
          t.a.createElement(
            'header',
            {
              className:
                'slds-docked-composer__header slds-grid slds-shrink-none',
              'aria-live': 'assertive'
            },
            t.a.createElement(
              'div',
              { className: 'slds-media slds-media_center slds-no-space' },
              t.a.createElement(
                'div',
                { className: 'slds-media__figure slds-m-right_x-small' },
                t.a.createElement(
                  'span',
                  { className: 'slds-icon_container' },
                  t.a.createElement(b.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-text-default',
                    sprite: 'standard',
                    symbol: e.headerSymbol || 'call'
                  })
                )
              ),
              t.a.createElement(
                'div',
                { className: 'slds-media__body' },
                e.dialogClosed
                  ? t.a.createElement(
                      'span',
                      { className: 'slds-assistive-text' },
                      'Minimized'
                    )
                  : null,
                t.a.createElement(
                  'h2',
                  {
                    className: 'slds-truncate',
                    id: 'dialog-heading-id-1',
                    title: e.header || 'Header'
                  },
                  e.header || 'Header'
                )
              )
            ),
            t.a.createElement(
              'div',
              { className: 'slds-col_bump-left slds-shrink-none' },
              t.a.createElement(o.b, {
                className: 'slds-button_icon',
                symbol: 'minimize_window',
                assistiveText: 'Minimize Composer Panel',
                title: 'Minimize window'
              }),
              t.a.createElement(o.b, {
                className: 'slds-button_icon',
                symbol: 'expand_alt',
                assistiveText: 'Expand Composer Panel',
                title: 'Expand Composer'
              }),
              t.a.createElement(o.b, {
                className: 'slds-button_icon',
                symbol: 'close',
                assistiveText: 'Close Composer Panel',
                title: 'Close'
              })
            )
          ),
          t.a.createElement(
            'div',
            {
              className: E()('slds-docked-composer__body', e.bodyClassName),
              id: 'dialog-content-id-1'
            },
            e.children
          ),
          e.footer
            ? t.a.createElement(
                'footer',
                {
                  className: E()(
                    'slds-docked-composer__footer slds-shrink-none',
                    e.footerClassName
                  )
                },
                e.footer
              )
            : null
        );
      },
      x = function(e) {
        return t.a.createElement(
          'div',
          { className: 'slds-docked-composer slds-docked-composer_overflow' },
          t.a.createElement(
            'button',
            {
              className:
                'slds-button slds-button_icon slds-docked-composer_overflow__button',
              'aria-haspopup': 'true'
            },
            t.a.createElement(b.a, {
              className: 'slds-button__icon',
              sprite: 'utility',
              symbol: 'standard_objects'
            }),
            t.a.createElement(
              'span',
              { className: 'slds-text-body_small slds-m-left_xx-small' },
              '3',
              ' ',
              t.a.createElement(
                'span',
                { className: 'slds-assistive-text' },
                'other docked composer panels'
              )
            )
          ),
          t.a.createElement(
            c.Menu,
            {
              className:
                'slds-dropdown_left slds-dropdown_bottom slds-dropdown_medium slds-nubbin_bottom-left'
            },
            t.a.createElement(
              c.MenuList,
              { className: 'slds-dropdown_length-with-icon-7' },
              N.c.times(h.length, function(e) {
                return t.a.createElement(
                  c.MenuItem,
                  { key: e, title: h[e].title },
                  t.a.createElement(
                    'span',
                    {
                      className:
                        'slds-icon_container slds-icon-standard-' +
                        h[e].entity +
                        ' slds-m-right_x-small'
                    },
                    t.a.createElement(b.a, {
                      className: 'slds-icon slds-icon_small',
                      sprite: 'standard',
                      symbol: h[e].entity
                    }),
                    t.a.createElement(
                      'span',
                      { className: 'slds-assistive-text' },
                      h[e].entity
                    )
                  ),
                  h[e].title
                );
              })
            )
          )
        );
      },
      y = function(e) {
        return t.a.createElement(
          u.c,
          {
            listboxClassName: 'slds-dropdown slds-dropdown_fluid',
            vertical: !0,
            id: e.id
          },
          t.a.createElement(
            u.d,
            null,
            t.a.createElement(u.b, {
              id: e.listboxOptionId,
              entityTitle: 'Acme',
              entityMeta: !0
            })
          )
        );
      },
      C = function(e) {
        return t.a.createElement(
          'div',
          {
            className: 'demo-only demo-only_viewport',
            style: { height: '500px', minWidth: '615px', overflowX: 'auto' }
          },
          e.children
        );
      };
    a.default = t.a.createElement(
      'div',
      { className: 'slds-docked_container' },
      t.a.createElement(
        v,
        { className: 'slds-is-open', footer: t.a.createElement(g, null) },
        t.a.createElement(
          'div',
          { className: 'slds-align_absolute-center' },
          'Docked Composer Panel Body ',
          t.a.createElement('br', null),
          ' This area consumes the feature'
        )
      )
    );
    var k = [
        {
          id: 'single-composer-open',
          label: 'Open',
          element: t.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            t.a.createElement(
              v,
              { className: 'slds-is-open', footer: t.a.createElement(g, null) },
              t.a.createElement(
                'div',
                { className: 'slds-align_absolute-center' },
                'Docked Composer Panel Body ',
                t.a.createElement('br', null),
                ' This area consumes the feature'
              )
            )
          )
        },
        {
          id: 'single-composer-focused',
          label: 'Focused',
          element: t.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            t.a.createElement(
              v,
              {
                className: 'slds-is-open slds-has-focus',
                footer: t.a.createElement(g, null)
              },
              t.a.createElement(
                'div',
                { className: 'slds-align_absolute-center' },
                'Docked Composer Panel Body ',
                t.a.createElement('br', null),
                ' This area consumes the feature'
              )
            )
          )
        },
        {
          id: 'single-composer-closed',
          label: 'Closed',
          element: t.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            t.a.createElement(
              v,
              { dialogClosed: !0, footer: t.a.createElement(g, null) },
              t.a.createElement(
                'div',
                { className: 'slds-align_absolute-center' },
                'Docked Composer Panel Body ',
                t.a.createElement('br', null),
                ' This area consumes the feature'
              )
            )
          )
        },
        {
          id: 'single-composer-closed-focused',
          label: 'Closed Focused',
          element: t.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            t.a.createElement(
              v,
              {
                className: 'slds-has-focus',
                dialogClosed: !0,
                footer: t.a.createElement(g, null)
              },
              t.a.createElement(
                'div',
                { className: 'slds-align_absolute-center' },
                'Docked Composer Panel Body ',
                t.a.createElement('br', null),
                ' This area consumes the feature'
              )
            )
          )
        },
        {
          id: 'single-composer-popout',
          label: 'Popout',
          element: t.a.createElement(
            d.Backdrop,
            null,
            t.a.createElement(
              d.Modal,
              {
                className: 'slds-docked-composer-modal',
                'aria-labelledby': 'dialog-heading-id-1',
                'aria-describedby': 'dialog-content-id-1'
              },
              t.a.createElement(
                d.ModalContent,
                { id: 'modal-content-id' },
                t.a.createElement(
                  v,
                  { footer: t.a.createElement(g, null), nestedDialog: !0 },
                  t.a.createElement(
                    'div',
                    { className: 'slds-align_absolute-center' },
                    'Docked Composer Panel Body ',
                    t.a.createElement('br', null),
                    ' This area consumes the feature'
                  )
                )
              )
            )
          )
        },
        {
          id: 'multiple-composer-overflow',
          label: 'With Overflow Menu',
          element: t.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            t.a.createElement(x, null),
            t.a.createElement(
              v,
              { className: 'slds-is-open', footer: t.a.createElement(g, null) },
              t.a.createElement(
                'div',
                { className: 'slds-align_absolute-center' },
                'Docked Composer Panel Body ',
                t.a.createElement('br', null),
                ' This area consumes the feature'
              )
            )
          )
        }
      ],
      w = [
        {
          id: 'task',
          label: 'Log a Task',
          element: t.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            t.a.createElement(
              v,
              {
                className: 'slds-is-open',
                bodyClassName: 'slds-docked-composer__body_form',
                header: 'New Task',
                headerSymbol: 'task',
                footer: t.a.createElement(
                  'button',
                  {
                    className:
                      'slds-button slds-button_brand slds-col_bump-left'
                  },
                  'Save'
                )
              },
              t.a.createElement(
                'fieldset',
                { className: 'slds-form-element slds-form_compound' },
                t.a.createElement(
                  'legend',
                  { className: 'slds-assistive-text' },
                  'Log new task'
                ),
                t.a.createElement(
                  'div',
                  { className: 'slds-form-element__control' },
                  t.a.createElement(
                    'div',
                    { className: 'slds-form-element__group' },
                    t.a.createElement(
                      'div',
                      { className: 'slds-form-element__row' },
                      t.a.createElement(
                        'div',
                        { className: 'slds-form-element slds-size_1-of-1' },
                        t.a.createElement(
                          'label',
                          {
                            className: 'slds-form-element__label',
                            htmlFor: 'text-input-01'
                          },
                          'Subject'
                        ),
                        t.a.createElement(
                          'div',
                          { className: 'slds-form-element__control' },
                          t.a.createElement('input', {
                            className: 'slds-input',
                            type: 'text',
                            id: 'text-input-01'
                          })
                        )
                      )
                    ),
                    t.a.createElement(
                      'div',
                      { className: 'slds-form-element__row' },
                      t.a.createElement(
                        'div',
                        { className: 'slds-form-element slds-size_1-of-2' },
                        t.a.createElement(
                          'label',
                          {
                            className: 'slds-form-element__label',
                            htmlFor: 'text-input-02'
                          },
                          'Assigned To'
                        ),
                        t.a.createElement(
                          'div',
                          { className: 'slds-form-element__control' },
                          t.a.createElement('input', {
                            className: 'slds-input',
                            type: 'text',
                            id: 'text-input-02'
                          })
                        )
                      ),
                      t.a.createElement(
                        'div',
                        { className: 'slds-form-element slds-size_1-of-2' },
                        t.a.createElement(
                          'label',
                          {
                            className: 'slds-form-element__label',
                            htmlFor: 'text-input-03'
                          },
                          'Due Dates'
                        ),
                        t.a.createElement(
                          'div',
                          { className: 'slds-form-element__control' },
                          t.a.createElement('input', {
                            className: 'slds-input',
                            type: 'text',
                            id: 'text-input-03'
                          })
                        )
                      )
                    ),
                    t.a.createElement(
                      'div',
                      { className: 'slds-form-element__row' },
                      t.a.createElement(u.a, {
                        formClassName: 'slds-size_1-of-2',
                        autocomplete: !0,
                        label: 'Name',
                        placeholder: 'Search Leads',
                        inputIcon: 'right',
                        inputIconRightSymbol: 'search',
                        objectSwitcher: !0,
                        objectSwitcherInline: !0,
                        'aria-controls': 'listbox-id-01',
                        listbox: t.a.createElement(y, {
                          id: 'listbox-id-01',
                          listboxOptionId: 'listbox-option-id-1'
                        })
                      }),
                      t.a.createElement(u.a, {
                        formClassName: 'slds-size_1-of-2',
                        autocomplete: !0,
                        label: 'Name',
                        placeholder: 'Search Accounts',
                        inputIcon: 'right',
                        inputIconRightSymbol: 'search',
                        objectSwitcher: !0,
                        objectSwitcherInline: !0,
                        'aria-controls': 'listbox-id-02',
                        listbox: t.a.createElement(y, {
                          id: 'listbox-id-02',
                          listboxOptionId: 'listbox-option-id-2'
                        })
                      })
                    )
                  )
                )
              )
            )
          )
        },
        {
          id: 'voice-composer-queued',
          label: 'Voice - Queued',
          element: t.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            t.a.createElement(
              v,
              {
                className: 'slds-is-open',
                bodyClassName: 'slds-align_absolute-center',
                header: 'Lei Chan - Connecting...',
                footer: t.a.createElement(
                  'button',
                  {
                    className:
                      'slds-button slds-button_destructive slds-size_1-of-1'
                  },
                  'End Call'
                )
              },
              t.a.createElement(
                'div',
                { className: 'slds-text-align_center slds-align-middle' },
                t.a.createElement(
                  'span',
                  { className: 'slds-avatar slds-avatar_large' },
                  t.a.createElement('img', {
                    alt: '',
                    src: '/assets/images/avatar2.jpg',
                    title: 'Lei Chan avatar'
                  })
                ),
                t.a.createElement(
                  'h3',
                  { className: 'slds-text-heading_large' },
                  'Lei Chan'
                ),
                t.a.createElement(
                  'ul',
                  {
                    className:
                      'slds-list_horizontal slds-has-dividers_right slds-text-body_small'
                  },
                  t.a.createElement(
                    'li',
                    { className: 'slds-item' },
                    'VP of Sales'
                  ),
                  t.a.createElement(
                    'li',
                    { className: 'slds-item ' },
                    'Acme Corporation'
                  )
                ),
                t.a.createElement(
                  'p',
                  { className: 'slds-text-heading_medium slds-m-top_medium' },
                  'Connecting...'
                )
              )
            )
          )
        },
        {
          id: 'voice-composer-ringing',
          label: 'Voice - Ringing',
          element: t.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            t.a.createElement(
              v,
              {
                className: 'slds-is-open',
                bodyClassName: 'slds-align_absolute-center',
                header: 'Lei Chan - Dialing...',
                footer: t.a.createElement(
                  'button',
                  {
                    className:
                      'slds-button slds-button_destructive slds-size_1-of-1'
                  },
                  'End Call'
                )
              },
              t.a.createElement(
                'div',
                { className: 'slds-text-align_center slds-align-middle' },
                t.a.createElement(
                  'span',
                  { className: 'slds-avatar slds-avatar_large' },
                  t.a.createElement('img', {
                    alt: '',
                    src: '/assets/images/avatar2.jpg',
                    title: 'Lei Chan avatar'
                  })
                ),
                t.a.createElement(
                  'h3',
                  { className: 'slds-text-heading_large' },
                  'Lei Chan'
                ),
                t.a.createElement(
                  'ul',
                  {
                    className:
                      'slds-list_horizontal slds-has-dividers_right slds-text-body_small'
                  },
                  t.a.createElement(
                    'li',
                    { className: 'slds-item' },
                    'VP of Sales'
                  ),
                  t.a.createElement(
                    'li',
                    { className: 'slds-item ' },
                    'Acme Corporation'
                  )
                ),
                t.a.createElement(
                  'p',
                  { className: 'slds-text-heading_medium slds-m-top_medium' },
                  'Dialing...'
                )
              )
            )
          )
        },
        {
          id: 'voice-composer-connected',
          label: 'Voice - Connected',
          element: t.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            t.a.createElement(
              v,
              {
                className: 'slds-is-open',
                header: 'Lei Chan - Call in Progress',
                footer: t.a.createElement(
                  'button',
                  {
                    className:
                      'slds-button slds-button_destructive slds-col_bump-left'
                  },
                  'End Call'
                )
              },
              t.a.createElement(
                'div',
                { className: 'slds-docked-composer__lead' },
                t.a.createElement(
                  'div',
                  { className: 'slds-media' },
                  t.a.createElement(
                    'div',
                    { className: 'slds-media__figure' },
                    t.a.createElement(
                      'span',
                      { className: 'slds-avatar slds-avatar_medium' },
                      t.a.createElement('img', {
                        alt: '',
                        src: '/assets/images/avatar2.jpg',
                        title: 'Lei Chan avatar'
                      })
                    )
                  ),
                  t.a.createElement(
                    'div',
                    { className: 'slds-media__body' },
                    t.a.createElement(
                      'p',
                      { className: 'slds-text-heading_medium' },
                      'Lei Chan'
                    ),
                    t.a.createElement(
                      'ul',
                      {
                        className:
                          'slds-list_horizontal slds-has-dividers_right slds-text-body_small'
                      },
                      t.a.createElement(
                        'li',
                        { className: 'slds-item' },
                        'VP of Sales'
                      ),
                      t.a.createElement(
                        'li',
                        { className: 'slds-item ' },
                        'Acme Corporation'
                      )
                    )
                  )
                ),
                t.a.createElement(
                  'p',
                  { className: 'slds-col_bump-left slds-text-heading_large' },
                  '5:37'
                )
              ),
              t.a.createElement(
                'div',
                { className: 'slds-docked-composer__toolbar' },
                t.a.createElement(o.b, {
                  className:
                    'slds-button_icon-border-filled slds-button_icon-small',
                  symbol: 'unmuted',
                  assistiveText: 'Mute Yourself',
                  title: 'Mute Yourself',
                  'aria-pressed': 'false'
                })
              ),
              t.a.createElement(
                'label',
                {
                  className: 'slds-assistive-text',
                  htmlFor: 'composer-text-input-1'
                },
                'Take notes'
              ),
              t.a.createElement('textarea', {
                id: 'composer-text-input-1',
                className:
                  'slds-docked-composer__input slds-input_bare slds-text-longform slds-grow',
                placeholder: 'Jot down notes here...'
              })
            )
          )
        },
        {
          id: 'voice-composer-cancelled',
          label: 'Voice - Cancelled',
          element: t.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            t.a.createElement(
              v,
              {
                className: 'slds-is-open',
                bodyClassName: 'slds-align_absolute-center',
                header: 'Lei Chan - Cancelling...'
              },
              t.a.createElement(
                'div',
                { className: 'slds-text-align_center slds-align-middle' },
                t.a.createElement(
                  'span',
                  { className: 'slds-avatar slds-avatar_large' },
                  t.a.createElement('img', {
                    alt: '',
                    src: '/assets/images/avatar2.jpg',
                    title: 'Lei Chan avatar'
                  })
                ),
                t.a.createElement(
                  'h3',
                  { className: 'slds-text-heading_large' },
                  'Lei Chan'
                ),
                t.a.createElement(
                  'ul',
                  {
                    className:
                      'slds-list_horizontal slds-has-dividers_right slds-text-body_small'
                  },
                  t.a.createElement(
                    'li',
                    { className: 'slds-item' },
                    'VP of Sales'
                  ),
                  t.a.createElement(
                    'li',
                    { className: 'slds-item ' },
                    'Acme Corporation'
                  )
                ),
                t.a.createElement(
                  'p',
                  { className: 'slds-text-heading_medium slds-m-top_medium' },
                  'Cancelling...'
                )
              )
            )
          )
        },
        {
          id: 'voice-composer-busy',
          label: 'Voice - Busy',
          element: t.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            t.a.createElement(
              v,
              {
                className: 'slds-is-open',
                bodyClassName: 'slds-align_absolute-center',
                header: 'Lei Chan - Busy',
                footer: [
                  t.a.createElement(
                    'button',
                    {
                      className:
                        'slds-button slds-button_neutral slds-size_1-of-2',
                      key: N.c.uniqueId('follow-up-')
                    },
                    'Follow-Up Later'
                  ),
                  t.a.createElement(
                    'button',
                    {
                      className:
                        'slds-button slds-button_brand slds-size_1-of-2',
                      key: N.c.uniqueId('call-again-')
                    },
                    'Call Again'
                  )
                ]
              },
              t.a.createElement(
                'div',
                { className: 'slds-text-align_center slds-align-middle' },
                t.a.createElement(
                  'span',
                  { className: 'slds-avatar slds-avatar_large' },
                  t.a.createElement('img', {
                    alt: '',
                    src: '/assets/images/avatar2.jpg',
                    title: 'Lei Chan avatar'
                  })
                ),
                t.a.createElement(
                  'h3',
                  { className: 'slds-text-heading_large' },
                  'Lei Chan'
                ),
                t.a.createElement(
                  'ul',
                  {
                    className:
                      'slds-list_horizontal slds-has-dividers_right slds-text-body_small'
                  },
                  t.a.createElement(
                    'li',
                    { className: 'slds-item' },
                    'VP of Sales'
                  ),
                  t.a.createElement(
                    'li',
                    { className: 'slds-item ' },
                    'Acme Corporation'
                  )
                ),
                t.a.createElement(
                  'p',
                  { className: 'slds-text-heading_medium slds-m-top_medium' },
                  'Busy'
                )
              )
            )
          )
        },
        {
          id: 'voice-composer-failed',
          label: 'Voice - Call Failed',
          element: t.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            t.a.createElement(
              v,
              {
                className: 'slds-is-open',
                bodyClassName: 'slds-align_absolute-center',
                header: 'Lei Chan - Call Failed',
                footer: [
                  t.a.createElement(
                    'button',
                    {
                      className:
                        'slds-button slds-button_neutral slds-size_1-of-2',
                      key: N.c.uniqueId('follow-up-')
                    },
                    'Edit Phone Number'
                  ),
                  t.a.createElement(
                    'button',
                    {
                      className:
                        'slds-button slds-button_brand slds-size_1-of-2',
                      key: N.c.uniqueId('call-again-')
                    },
                    'Call Again'
                  )
                ]
              },
              t.a.createElement(
                'div',
                { className: 'slds-text-align_center slds-align-middle' },
                t.a.createElement(
                  'span',
                  { className: 'slds-avatar slds-avatar_large' },
                  t.a.createElement('img', {
                    alt: '',
                    src: '/assets/images/avatar2.jpg',
                    title: 'Lei Chan avatar'
                  })
                ),
                t.a.createElement(
                  'h3',
                  { className: 'slds-text-heading_large' },
                  'Lei Chan'
                ),
                t.a.createElement(
                  'ul',
                  {
                    className:
                      'slds-list_horizontal slds-has-dividers_right slds-text-body_small'
                  },
                  t.a.createElement(
                    'li',
                    { className: 'slds-item' },
                    'VP of Sales'
                  ),
                  t.a.createElement(
                    'li',
                    { className: 'slds-item ' },
                    'Acme Corporation'
                  )
                ),
                t.a.createElement(
                  'p',
                  { className: 'slds-text-heading_medium slds-m-top_medium' },
                  'Call Failed'
                )
              )
            )
          )
        },
        {
          id: 'voice-composer-no-answer',
          label: 'Voice - No Answer',
          element: t.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            t.a.createElement(
              v,
              {
                className: 'slds-is-open',
                bodyClassName: 'slds-align_absolute-center',
                header: 'Lei Chan - No Answer',
                footer: [
                  t.a.createElement(
                    'button',
                    {
                      className:
                        'slds-button slds-button_neutral slds-size_1-of-2',
                      key: N.c.uniqueId('follow-up-')
                    },
                    'Follow-Up Later'
                  ),
                  t.a.createElement(
                    'button',
                    {
                      className:
                        'slds-button slds-button_brand slds-size_1-of-2',
                      key: N.c.uniqueId('call-again-')
                    },
                    'Call Again'
                  )
                ]
              },
              t.a.createElement(
                'div',
                { className: 'slds-text-align_center slds-align-middle' },
                t.a.createElement(
                  'span',
                  { className: 'slds-avatar slds-avatar_large' },
                  t.a.createElement('img', {
                    alt: '',
                    src: '/assets/images/avatar2.jpg',
                    title: 'Lei Chan avatar'
                  })
                ),
                t.a.createElement(
                  'h3',
                  { className: 'slds-text-heading_large' },
                  'Lei Chan'
                ),
                t.a.createElement(
                  'ul',
                  {
                    className:
                      'slds-list_horizontal slds-has-dividers_right slds-text-body_small'
                  },
                  t.a.createElement(
                    'li',
                    { className: 'slds-item' },
                    'VP of Sales'
                  ),
                  t.a.createElement(
                    'li',
                    { className: 'slds-item ' },
                    'Acme Corporation'
                  )
                ),
                t.a.createElement(
                  'p',
                  { className: 'slds-text-heading_medium slds-m-top_medium' },
                  'No Answer'
                )
              )
            )
          )
        },
        {
          id: 'voice-composer-call-finished',
          label: 'Voice - Call Finished',
          element: t.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            t.a.createElement(
              v,
              {
                className: 'slds-is-open',
                header: 'Lei Chan - Call Finished',
                footer: t.a.createElement(
                  'button',
                  {
                    className:
                      'slds-button slds-button_brand slds-col_bump-left'
                  },
                  'Finish Notes'
                )
              },
              t.a.createElement(
                'div',
                { className: 'slds-docked-composer__lead' },
                t.a.createElement(
                  'div',
                  { className: 'slds-media' },
                  t.a.createElement(
                    'div',
                    { className: 'slds-media__figure' },
                    t.a.createElement(
                      'span',
                      { className: 'slds-avatar slds-avatar_medium' },
                      t.a.createElement('img', {
                        alt: '',
                        src: '/assets/images/avatar2.jpg',
                        title: 'Lei Chan avatar'
                      })
                    )
                  ),
                  t.a.createElement(
                    'div',
                    { className: 'slds-media__body' },
                    t.a.createElement(
                      'p',
                      { className: 'slds-text-heading_medium' },
                      'Lei Chan'
                    ),
                    t.a.createElement(
                      'ul',
                      {
                        className:
                          'slds-list_horizontal slds-has-dividers_right slds-text-body_small'
                      },
                      t.a.createElement(
                        'li',
                        { className: 'slds-item' },
                        'VP of Sales'
                      ),
                      t.a.createElement(
                        'li',
                        { className: 'slds-item ' },
                        'Acme Corporation'
                      )
                    )
                  )
                )
              ),
              t.a.createElement(
                'div',
                { className: 'slds-docked-composer__toolbar' },
                t.a.createElement(o.b, {
                  className:
                    'slds-button_icon-border-filled slds-button_icon-small',
                  symbol: 'unmuted',
                  assistiveText: 'Mute Yourself',
                  title: 'Mute Yourself',
                  'aria-pressed': 'false'
                })
              ),
              t.a.createElement(
                'label',
                {
                  className: 'slds-assistive-text',
                  htmlFor: 'composer-text-input-1'
                },
                'Take notes'
              ),
              t.a.createElement('textarea', {
                id: 'composer-text-input-1',
                className:
                  'slds-docked-composer__input slds-input_bare slds-text-longform slds-grow',
                placeholder: 'Jot down notes here...'
              })
            )
          )
        },
        {
          id: 'voice-composer-call-incoming',
          label: 'Voice - Call Incoming',
          element: t.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            t.a.createElement(
              v,
              {
                className: 'slds-is-open',
                bodyClassName: 'slds-align_absolute-center slds-size_1-of-1',
                header: 'Lei Chan - Incoming Call...',
                footer: t.a.createElement(
                  'button',
                  {
                    className:
                      'slds-button slds-button_brand slds-col_bump-left'
                  },
                  'Finish Notes'
                )
              },
              t.a.createElement(
                'div',
                { className: 'slds-text-align_center slds-align-middle' },
                t.a.createElement(
                  'span',
                  { className: 'slds-avatar slds-avatar_large' },
                  t.a.createElement('img', {
                    alt: '',
                    src: '/assets/images/avatar2.jpg',
                    title: 'Lei Chan avatar'
                  })
                ),
                t.a.createElement(
                  'h3',
                  { className: 'slds-text-heading_large' },
                  'Lei Chan'
                ),
                t.a.createElement(
                  'ul',
                  {
                    className:
                      'slds-list_horizontal slds-has-dividers_right slds-text-body_small'
                  },
                  t.a.createElement(
                    'li',
                    { className: 'slds-item' },
                    'VP of Sales'
                  ),
                  t.a.createElement(
                    'li',
                    { className: 'slds-item ' },
                    'Acme Corporation'
                  )
                ),
                t.a.createElement(
                  'p',
                  { className: 'slds-text-heading_medium slds-m-top_medium' },
                  '(416) 555-1234'
                )
              ),
              t.a.createElement(
                'div',
                {
                  className:
                    'slds-p-horizontal_x-small slds-text-align_left slds-size_1-of-1'
                },
                t.a.createElement(
                  'h3',
                  { className: 'slds-m-bottom_x-small' },
                  'Recent Activity'
                ),
                t.a.createElement(
                  'ul',
                  { className: 'slds-has-dividers_around-space' },
                  t.a.createElement(
                    'li',
                    { className: 'slds-item slds-theme_shade slds-grid' },
                    t.a.createElement(
                      'span',
                      {
                        className:
                          'slds-icon_container slds-icon-standard-task slds-m-right_x-small'
                      },
                      t.a.createElement(b.a, {
                        className: 'slds-icon slds-icon_small',
                        sprite: 'standard',
                        symbol: 'task'
                      }),
                      t.a.createElement(
                        'span',
                        { className: 'slds-assistive-text' },
                        'Task'
                      )
                    ),
                    'Discussed New Pricing Models',
                    t.a.createElement(
                      'span',
                      { className: 'slds-col_bump-left' },
                      'Yesterday'
                    )
                  ),
                  t.a.createElement(
                    'li',
                    { className: 'slds-item slds-theme_shade slds-grid' },
                    t.a.createElement(
                      'span',
                      {
                        className:
                          'slds-icon_container slds-icon-standard-email slds-m-right_x-small'
                      },
                      t.a.createElement(b.a, {
                        className: 'slds-icon slds-icon_small',
                        sprite: 'standard',
                        symbol: 'email'
                      }),
                      t.a.createElement(
                        'span',
                        { className: 'slds-assistive-text' },
                        'Email'
                      )
                    ),
                    'Re: Updated Proposals',
                    t.a.createElement(
                      'span',
                      { className: 'slds-col_bump-left' },
                      '4 Hours Ago'
                    )
                  ),
                  t.a.createElement(
                    'li',
                    { className: 'slds-item slds-theme_shade slds-grid' },
                    t.a.createElement(
                      'span',
                      {
                        className:
                          'slds-icon_container slds-icon-standard-note slds-m-right_x-small'
                      },
                      t.a.createElement(b.a, {
                        className: 'slds-icon slds-icon_small',
                        sprite: 'standard',
                        symbol: 'note'
                      }),
                      t.a.createElement(
                        'span',
                        { className: 'slds-assistive-text' },
                        'Note'
                      )
                    ),
                    'Discuss Slides for Nov EBC',
                    t.a.createElement(
                      'span',
                      { className: 'slds-col_bump-left' },
                      '2 Days Ago'
                    )
                  )
                )
              )
            )
          )
        },
        {
          id: 'voice-composer-call-logged',
          label: 'Voice - Log a Call',
          element: t.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            t.a.createElement(
              v,
              {
                className: 'slds-is-open',
                bodyClassName: 'slds-docked-composer__body_form',
                header: 'Lei Chan',
                footer: t.a.createElement(
                  'button',
                  {
                    className:
                      'slds-button slds-button_brand slds-col_bump-left'
                  },
                  'Save'
                )
              },
              t.a.createElement(
                'fieldset',
                { className: 'slds-form-element slds-form_compound' },
                t.a.createElement(
                  'legend',
                  { className: 'slds-assistive-text' },
                  'Log a call'
                ),
                t.a.createElement(
                  'div',
                  { className: 'slds-form-element__control' },
                  t.a.createElement(
                    'div',
                    { className: 'slds-form-element__group' },
                    t.a.createElement(
                      'div',
                      { className: 'slds-form-element__row' },
                      t.a.createElement(
                        'div',
                        { className: 'slds-form-element slds-size_1-of-1' },
                        t.a.createElement(
                          'label',
                          {
                            className: 'slds-form-element__label',
                            htmlFor: 'text-input-01'
                          },
                          'Subject'
                        ),
                        t.a.createElement(
                          'div',
                          { className: 'slds-form-element__control' },
                          t.a.createElement('input', {
                            className: 'slds-input',
                            type: 'text',
                            id: 'text-input-01'
                          })
                        )
                      )
                    ),
                    t.a.createElement(
                      'div',
                      { className: 'slds-form-element__row' },
                      t.a.createElement(
                        'div',
                        { className: 'slds-form-element slds-size_1-of-1' },
                        t.a.createElement(
                          'label',
                          {
                            className: 'slds-form-element__label',
                            htmlFor: 'textarea-input-01'
                          },
                          'Comments'
                        ),
                        t.a.createElement(
                          'div',
                          { className: 'slds-form-element__control' },
                          t.a.createElement('textarea', {
                            className: 'slds-textarea',
                            id: 'textarea-input-01'
                          })
                        )
                      )
                    ),
                    t.a.createElement(
                      'div',
                      { className: 'slds-form-element__row' },
                      t.a.createElement(u.a, {
                        formClassName: 'slds-size_1-of-2',
                        autocomplete: !0,
                        label: 'Name',
                        placeholder: 'Search Leads',
                        inputIcon: 'right',
                        inputIconRightSymbol: 'search',
                        objectSwitcher: !0,
                        objectSwitcherInline: !0,
                        'aria-controls': 'listbox-id-01',
                        listbox: t.a.createElement(y, {
                          id: 'listbox-id-01',
                          listboxOptionId: 'listbox-option-id-1'
                        })
                      }),
                      t.a.createElement(u.a, {
                        formClassName: 'slds-size_1-of-2',
                        autocomplete: !0,
                        label: 'Name',
                        placeholder: 'Search Accounts',
                        inputIcon: 'right',
                        inputIconRightSymbol: 'search',
                        objectSwitcher: !0,
                        objectSwitcherInline: !0,
                        'aria-controls': 'listbox-id-02',
                        listbox: t.a.createElement(y, {
                          id: 'listbox-id-02',
                          listboxOptionId: 'listbox-option-id-2'
                        })
                      })
                    )
                  )
                )
              )
            )
          )
        },
        {
          id: 'email',
          label: 'Email Composer',
          element: t.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            t.a.createElement(
              v,
              {
                className: 'slds-is-open',
                header: 'New Email',
                headerSymbol: 'email',
                footer: t.a.createElement(f, null)
              },
              t.a.createElement(
                'div',
                { className: 'slds-email-composer' },
                t.a.createElement(
                  u.a,
                  {
                    id: 'recipients-to',
                    formClassName: 'slds-email-composer__combobox',
                    selectedOptionsInline: !0,
                    label: 'To',
                    placeholder: ' ',
                    autocomplete: !0,
                    'aria-controls': 'listbox-id-01',
                    listbox: t.a.createElement(y, {
                      id: 'listbox-id-01',
                      listboxOptionId: 'listbox-option-id-1'
                    })
                  },
                  t.a.createElement(
                    p.b,
                    null,
                    t.a.createElement(
                      p.c,
                      null,
                      t.a.createElement(
                        p.a,
                        { label: 'jrogers@cloudhub.com', tabIndex: '0' },
                        t.a.createElement(
                          n.Avatar,
                          {
                            className:
                              'slds-avatar_x-small slds-pill__icon_container'
                          },
                          t.a.createElement('img', {
                            alt: 'Person name',
                            src: '/assets/images/avatar2.jpg',
                            title: 'User avatar'
                          })
                        )
                      )
                    )
                  )
                ),
                t.a.createElement(u.a, {
                  id: 'recipients-bcc',
                  formClassName: 'slds-email-composer__combobox',
                  selectedOptionsInline: !0,
                  label: 'Bcc',
                  placeholder: ' ',
                  autocomplete: !0,
                  'aria-controls': 'listbox-id-02',
                  listbox: t.a.createElement(y, {
                    id: 'listbox-id-02',
                    listboxOptionId: 'listbox-option-id-2'
                  })
                }),
                t.a.createElement(u.a, {
                  id: 'recipients-cc',
                  formClassName: 'slds-email-composer__combobox',
                  selectedOptionsInline: !0,
                  label: 'Cc',
                  placeholder: ' ',
                  autocomplete: !0,
                  'aria-controls': 'listbox-id-03',
                  listbox: t.a.createElement(y, {
                    id: 'listbox-id-03',
                    listboxOptionId: 'listbox-option-id-3'
                  })
                }),
                t.a.createElement(
                  m.b,
                  {
                    labelContent: 'Enter subject',
                    hasHiddenLabel: !0,
                    inputId: 'input-subject-01'
                  },
                  t.a.createElement(r.a, {
                    id: 'input-subject-01',
                    className: 'slds-input_bare',
                    placeholder: 'Enter Subject'
                  })
                ),
                t.a.createElement(
                  i.a,
                  null,
                  t.a.createElement(
                    i.l,
                    null,
                    t.a.createElement(i.f, null),
                    t.a.createElement(i.g, { tabIndexSetting: '-1' }),
                    t.a.createElement(i.e, null),
                    t.a.createElement(i.d, null),
                    t.a.createElement(i.b, null),
                    t.a.createElement(i.i, null),
                    t.a.createElement(i.c, null)
                  ),
                  t.a.createElement(i.k, { placeholder: 'Compose Email...' })
                )
              )
            )
          )
        }
      ];
  }
});
