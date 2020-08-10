var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/docked-composer/docs.mdx.js'
] = (function(e) {
  function a(a) {
    for (
      var t, o, i = a[0], d = a[1], c = a[2], r = 0, p = [];
      r < i.length;
      r++
    )
      (o = i[r]),
        Object.prototype.hasOwnProperty.call(l, o) && l[o] && p.push(l[o][0]),
        (l[o] = 0);
    for (t in d) Object.prototype.hasOwnProperty.call(d, t) && (e[t] = d[t]);
    for (m && m(a); p.length; ) p.shift()();
    return n.push.apply(n, c || []), s();
  }
  function s() {
    for (var e, a = 0; a < n.length; a++) {
      for (var s = n[a], t = !0, i = 1; i < s.length; i++) {
        var d = s[i];
        0 !== l[d] && (t = !1);
      }
      t && (n.splice(a--, 1), (e = o((o.s = s[0]))));
    }
    return e;
  }
  var t = {},
    l = { 27: 0 },
    n = [];
  function o(a) {
    if (t[a]) return t[a].exports;
    var s = (t[a] = { i: a, l: !1, exports: {} });
    return e[a].call(s.exports, s, s.exports, o), (s.l = !0), s.exports;
  }
  (o.m = e),
    (o.c = t),
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
        for (var t in e)
          o.d(
            s,
            t,
            function(a) {
              return e[a];
            }.bind(null, t)
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
  var i = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    d = i.push.bind(i);
  (i.push = a), (i = i.slice());
  for (var c = 0; c < i.length; c++) a(i[c]);
  var m = d;
  return n.push([279, 0]), s();
})({
  0: function(e, a) {
    e.exports = React;
  },
  18: function(e, a) {
    e.exports = JSBeautify;
  },
  19: function(e, a) {
    e.exports = ReactDOM;
  },
  279: function(e, a, s) {
    'use strict';
    s.r(a),
      s.d(a, 'getElement', function() {
        return T;
      }),
      s.d(a, 'getContents', function() {
        return A;
      });
    var t = s(0),
      l = s.n(t),
      n = s(4),
      o = s(1),
      i = (s(23), s(15), s(40)),
      d = s(7),
      c = s(9),
      m = s(22),
      r = s(20),
      p = s(8),
      u = s(16),
      b = s(21),
      h = s(29),
      E = s(10),
      _ = s(5),
      N = s.n(_),
      g = s(2),
      f = [
        { entity: 'email', title: 'Agenda for next week' },
        { entity: 'call', title: 'Lei Chan' },
        { entity: 'task', title: 'August 14 Meeting Notes' }
      ],
      v = function(e) {
        return l.a.createElement(
          'div',
          { className: 'slds-col_bump-left slds-text-align_right' },
          l.a.createElement(
            'button',
            { className: 'slds-button slds-button_brand' },
            'Action'
          )
        );
      },
      x = function(e) {
        return l.a.createElement(
          'div',
          {
            className:
              'slds-col_bump-left slds-grid slds-grid_vertical-align-center'
          },
          l.a.createElement(
            'div',
            { className: 'slds-grid slds-m-right_small', role: 'toolbar' },
            l.a.createElement(
              'ul',
              { className: 'slds-grid', 'aria-label': 'Insert content' },
              l.a.createElement(
                'li',
                null,
                l.a.createElement(d.b, {
                  className: 'slds-button_icon-small',
                  symbol: 'link',
                  assistiveText: 'Attach File',
                  title: 'Attach File'
                })
              ),
              l.a.createElement(
                'li',
                null,
                l.a.createElement(d.b, {
                  className: 'slds-button_icon-small',
                  symbol: 'insert_template',
                  assistiveText: 'Insert Template',
                  title: 'Insert Template',
                  tabIndex: '-1'
                })
              ),
              l.a.createElement(
                'li',
                null,
                l.a.createElement(d.b, {
                  className: 'slds-button_icon-small',
                  symbol: 'insert_tag_field',
                  assistiveText: 'Insert HTML',
                  title: 'Insert HTML',
                  tabIndex: '-1'
                })
              )
            ),
            l.a.createElement(d.b, {
              className: 'slds-button_icon-small',
              symbol: 'preview',
              assistiveText: 'Preview',
              title: 'Preview',
              tabIndex: '-1'
            })
          ),
          l.a.createElement(
            'button',
            { className: 'slds-button slds-button_brand' },
            'Send'
          )
        );
      },
      y = function(e) {
        return l.a.createElement(
          'section',
          {
            className: N()(
              'slds-docked-composer slds-grid slds-grid_vertical',
              e.className,
              e.dialogClosed ? 'slds-is-closed' : null
            ),
            role: e.nestedDialog ? null : 'dialog',
            'aria-labelledby': e.nestedDialog ? null : 'dialog-heading-id-1',
            'aria-describedby': e.nestedDialog ? null : 'dialog-content-id-1'
          },
          l.a.createElement(
            'header',
            {
              className:
                'slds-docked-composer__header slds-grid slds-shrink-none',
              'aria-live': 'assertive'
            },
            l.a.createElement(
              'div',
              { className: 'slds-media slds-media_center slds-no-space' },
              l.a.createElement(
                'div',
                { className: 'slds-media__figure slds-m-right_x-small' },
                l.a.createElement(
                  'span',
                  { className: 'slds-icon_container' },
                  l.a.createElement(E.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-text-default',
                    sprite: 'standard',
                    symbol: e.headerSymbol || 'call'
                  })
                )
              ),
              l.a.createElement(
                'div',
                { className: 'slds-media__body' },
                e.dialogClosed
                  ? l.a.createElement(
                      'span',
                      { className: 'slds-assistive-text' },
                      'Minimized'
                    )
                  : null,
                l.a.createElement(
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
            l.a.createElement(
              'div',
              { className: 'slds-col_bump-left slds-shrink-none' },
              l.a.createElement(d.b, {
                className: 'slds-button_icon',
                symbol: 'minimize_window',
                assistiveText: 'Minimize Composer Panel',
                title: 'Minimize window'
              }),
              l.a.createElement(d.b, {
                className: 'slds-button_icon',
                symbol: 'expand_alt',
                assistiveText: 'Expand Composer Panel',
                title: 'Expand Composer'
              }),
              l.a.createElement(d.b, {
                className: 'slds-button_icon',
                symbol: 'close',
                assistiveText: 'Close Composer Panel',
                title: 'Close'
              })
            )
          ),
          l.a.createElement(
            'div',
            {
              className: N()('slds-docked-composer__body', e.bodyClassName),
              id: 'dialog-content-id-1'
            },
            e.children
          ),
          e.footer
            ? l.a.createElement(
                'footer',
                {
                  className: N()(
                    'slds-docked-composer__footer slds-shrink-none',
                    e.footerClassName
                  )
                },
                e.footer
              )
            : null
        );
      },
      w = function(e) {
        return l.a.createElement(
          'div',
          { className: 'slds-docked-composer slds-docked-composer_overflow' },
          l.a.createElement(
            'button',
            {
              className:
                'slds-button slds-button_icon slds-docked-composer_overflow__button',
              'aria-haspopup': 'true'
            },
            l.a.createElement(E.a, {
              className: 'slds-button__icon',
              sprite: 'utility',
              symbol: 'standard_objects'
            }),
            l.a.createElement(
              'span',
              { className: 'slds-text-body_small slds-m-left_xx-small' },
              '3',
              ' ',
              l.a.createElement(
                'span',
                { className: 'slds-assistive-text' },
                'other docked composer panels'
              )
            )
          ),
          l.a.createElement(
            c.f,
            {
              className:
                'slds-dropdown_left slds-dropdown_bottom slds-dropdown_medium slds-nubbin_bottom-left'
            },
            l.a.createElement(
              c.h,
              { className: 'slds-dropdown_length-with-icon-7' },
              g.c.times(f.length, function(e) {
                return l.a.createElement(
                  c.g,
                  { key: e, title: f[e].title },
                  l.a.createElement(
                    'span',
                    {
                      className:
                        'slds-icon_container slds-icon-standard-' +
                        f[e].entity +
                        ' slds-m-right_x-small'
                    },
                    l.a.createElement(E.a, {
                      className: 'slds-icon slds-icon_small',
                      sprite: 'standard',
                      symbol: f[e].entity
                    }),
                    l.a.createElement(
                      'span',
                      { className: 'slds-assistive-text' },
                      f[e].entity
                    )
                  ),
                  f[e].title
                );
              })
            )
          )
        );
      },
      C = function(e) {
        return l.a.createElement(
          b.c,
          {
            listboxClassName: 'slds-dropdown slds-dropdown_fluid',
            vertical: !0,
            id: e.id
          },
          l.a.createElement(
            b.d,
            null,
            l.a.createElement(b.b, {
              id: e.listboxOptionId,
              entityTitle: 'Acme',
              entityMeta: !0
            })
          )
        );
      },
      k = l.a.createElement(
        'div',
        { className: 'slds-docked_container' },
        l.a.createElement(
          y,
          { className: 'slds-is-open', footer: l.a.createElement(v, null) },
          l.a.createElement(
            'div',
            { className: 'slds-align_absolute-center' },
            'Docked Composer Panel Body ',
            l.a.createElement('br', null),
            ' This area consumes the feature'
          )
        )
      ),
      j = [
        {
          id: 'single-composer-open',
          label: 'Open',
          element: l.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            l.a.createElement(
              y,
              { className: 'slds-is-open', footer: l.a.createElement(v, null) },
              l.a.createElement(
                'div',
                { className: 'slds-align_absolute-center' },
                'Docked Composer Panel Body ',
                l.a.createElement('br', null),
                ' This area consumes the feature'
              )
            )
          )
        },
        {
          id: 'single-composer-focused',
          label: 'Focused',
          element: l.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            l.a.createElement(
              y,
              {
                className: 'slds-is-open slds-has-focus',
                footer: l.a.createElement(v, null)
              },
              l.a.createElement(
                'div',
                { className: 'slds-align_absolute-center' },
                'Docked Composer Panel Body ',
                l.a.createElement('br', null),
                ' This area consumes the feature'
              )
            )
          )
        },
        {
          id: 'single-composer-closed',
          label: 'Closed',
          element: l.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            l.a.createElement(
              y,
              { dialogClosed: !0, footer: l.a.createElement(v, null) },
              l.a.createElement(
                'div',
                { className: 'slds-align_absolute-center' },
                'Docked Composer Panel Body ',
                l.a.createElement('br', null),
                ' This area consumes the feature'
              )
            )
          )
        },
        {
          id: 'single-composer-closed-focused',
          label: 'Closed Focused',
          element: l.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            l.a.createElement(
              y,
              {
                className: 'slds-has-focus',
                dialogClosed: !0,
                footer: l.a.createElement(v, null)
              },
              l.a.createElement(
                'div',
                { className: 'slds-align_absolute-center' },
                'Docked Composer Panel Body ',
                l.a.createElement('br', null),
                ' This area consumes the feature'
              )
            )
          )
        },
        {
          id: 'single-composer-popout',
          label: 'Popout',
          element: l.a.createElement(
            m.a,
            null,
            l.a.createElement(
              m.b,
              {
                className: 'slds-docked-composer-modal',
                'aria-labelledby': 'dialog-heading-id-1',
                'aria-describedby': 'dialog-content-id-1'
              },
              l.a.createElement(
                m.c,
                { id: 'modal-content-id' },
                l.a.createElement(
                  y,
                  { footer: l.a.createElement(v, null), nestedDialog: !0 },
                  l.a.createElement(
                    'div',
                    { className: 'slds-align_absolute-center' },
                    'Docked Composer Panel Body ',
                    l.a.createElement('br', null),
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
          element: l.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            l.a.createElement(w, null),
            l.a.createElement(
              y,
              { className: 'slds-is-open', footer: l.a.createElement(v, null) },
              l.a.createElement(
                'div',
                { className: 'slds-align_absolute-center' },
                'Docked Composer Panel Body ',
                l.a.createElement('br', null),
                ' This area consumes the feature'
              )
            )
          )
        }
      ],
      S = [
        {
          id: 'task',
          label: 'Log a Task',
          element: l.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            l.a.createElement(
              y,
              {
                className: 'slds-is-open',
                bodyClassName: 'slds-docked-composer__body_form',
                header: 'New Task',
                headerSymbol: 'task',
                footer: l.a.createElement(
                  'button',
                  {
                    className:
                      'slds-button slds-button_brand slds-col_bump-left'
                  },
                  'Save'
                )
              },
              l.a.createElement(
                'fieldset',
                { className: 'slds-form-element slds-form_compound' },
                l.a.createElement(
                  'legend',
                  { className: 'slds-assistive-text' },
                  'Log new task'
                ),
                l.a.createElement(
                  'div',
                  { className: 'slds-form-element__control' },
                  l.a.createElement(
                    'div',
                    { className: 'slds-form-element__group' },
                    l.a.createElement(
                      'div',
                      { className: 'slds-form-element__row' },
                      l.a.createElement(
                        'div',
                        { className: 'slds-form-element slds-size_1-of-1' },
                        l.a.createElement(
                          'label',
                          {
                            className: 'slds-form-element__label',
                            htmlFor: 'text-input-01'
                          },
                          'Subject'
                        ),
                        l.a.createElement(
                          'div',
                          { className: 'slds-form-element__control' },
                          l.a.createElement('input', {
                            className: 'slds-input',
                            type: 'text',
                            id: 'text-input-01'
                          })
                        )
                      )
                    ),
                    l.a.createElement(
                      'div',
                      { className: 'slds-form-element__row' },
                      l.a.createElement(
                        'div',
                        { className: 'slds-form-element slds-size_1-of-2' },
                        l.a.createElement(
                          'label',
                          {
                            className: 'slds-form-element__label',
                            htmlFor: 'text-input-02'
                          },
                          'Assigned To'
                        ),
                        l.a.createElement(
                          'div',
                          { className: 'slds-form-element__control' },
                          l.a.createElement('input', {
                            className: 'slds-input',
                            type: 'text',
                            id: 'text-input-02'
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        { className: 'slds-form-element slds-size_1-of-2' },
                        l.a.createElement(
                          'label',
                          {
                            className: 'slds-form-element__label',
                            htmlFor: 'text-input-03'
                          },
                          'Due Dates'
                        ),
                        l.a.createElement(
                          'div',
                          { className: 'slds-form-element__control' },
                          l.a.createElement('input', {
                            className: 'slds-input',
                            type: 'text',
                            id: 'text-input-03'
                          })
                        )
                      )
                    ),
                    l.a.createElement(
                      'div',
                      { className: 'slds-form-element__row' },
                      l.a.createElement(b.a, {
                        formClassName: 'slds-size_1-of-2',
                        autocomplete: !0,
                        label: 'Name',
                        placeholder: 'Search Leads',
                        inputIcon: 'right',
                        inputIconRightSymbol: 'search',
                        objectSwitcher: !0,
                        objectSwitcherInline: !0,
                        'aria-controls': 'listbox-id-01',
                        listbox: l.a.createElement(C, {
                          id: 'listbox-id-01',
                          listboxOptionId: 'listbox-option-id-1'
                        })
                      }),
                      l.a.createElement(b.a, {
                        formClassName: 'slds-size_1-of-2',
                        autocomplete: !0,
                        label: 'Name',
                        placeholder: 'Search Accounts',
                        inputIcon: 'right',
                        inputIconRightSymbol: 'search',
                        objectSwitcher: !0,
                        objectSwitcherInline: !0,
                        'aria-controls': 'listbox-id-02',
                        listbox: l.a.createElement(C, {
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
          element: l.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            l.a.createElement(
              y,
              {
                className: 'slds-is-open',
                bodyClassName: 'slds-align_absolute-center',
                header: 'Lei Chan - Connecting...',
                footer: l.a.createElement(
                  'button',
                  {
                    className:
                      'slds-button slds-button_destructive slds-size_1-of-1'
                  },
                  'End Call'
                )
              },
              l.a.createElement(
                'div',
                { className: 'slds-text-align_center slds-align-middle' },
                l.a.createElement(
                  'span',
                  { className: 'slds-avatar slds-avatar_large' },
                  l.a.createElement('img', {
                    alt: '',
                    src: '/assets/images/avatar2.jpg',
                    title: 'Lei Chan avatar'
                  })
                ),
                l.a.createElement(
                  'h3',
                  { className: 'slds-text-heading_large' },
                  'Lei Chan'
                ),
                l.a.createElement(
                  'ul',
                  {
                    className:
                      'slds-list_horizontal slds-has-dividers_right slds-text-body_small'
                  },
                  l.a.createElement(
                    'li',
                    { className: 'slds-item' },
                    'VP of Sales'
                  ),
                  l.a.createElement(
                    'li',
                    { className: 'slds-item ' },
                    'Acme Corporation'
                  )
                ),
                l.a.createElement(
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
          element: l.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            l.a.createElement(
              y,
              {
                className: 'slds-is-open',
                bodyClassName: 'slds-align_absolute-center',
                header: 'Lei Chan - Dialing...',
                footer: l.a.createElement(
                  'button',
                  {
                    className:
                      'slds-button slds-button_destructive slds-size_1-of-1'
                  },
                  'End Call'
                )
              },
              l.a.createElement(
                'div',
                { className: 'slds-text-align_center slds-align-middle' },
                l.a.createElement(
                  'span',
                  { className: 'slds-avatar slds-avatar_large' },
                  l.a.createElement('img', {
                    alt: '',
                    src: '/assets/images/avatar2.jpg',
                    title: 'Lei Chan avatar'
                  })
                ),
                l.a.createElement(
                  'h3',
                  { className: 'slds-text-heading_large' },
                  'Lei Chan'
                ),
                l.a.createElement(
                  'ul',
                  {
                    className:
                      'slds-list_horizontal slds-has-dividers_right slds-text-body_small'
                  },
                  l.a.createElement(
                    'li',
                    { className: 'slds-item' },
                    'VP of Sales'
                  ),
                  l.a.createElement(
                    'li',
                    { className: 'slds-item ' },
                    'Acme Corporation'
                  )
                ),
                l.a.createElement(
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
          element: l.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            l.a.createElement(
              y,
              {
                className: 'slds-is-open',
                header: 'Lei Chan - Call in Progress',
                footer: l.a.createElement(
                  'button',
                  {
                    className:
                      'slds-button slds-button_destructive slds-col_bump-left'
                  },
                  'End Call'
                )
              },
              l.a.createElement(
                'div',
                { className: 'slds-docked-composer__lead' },
                l.a.createElement(
                  'div',
                  { className: 'slds-media' },
                  l.a.createElement(
                    'div',
                    { className: 'slds-media__figure' },
                    l.a.createElement(
                      'span',
                      { className: 'slds-avatar slds-avatar_medium' },
                      l.a.createElement('img', {
                        alt: '',
                        src: '/assets/images/avatar2.jpg',
                        title: 'Lei Chan avatar'
                      })
                    )
                  ),
                  l.a.createElement(
                    'div',
                    { className: 'slds-media__body' },
                    l.a.createElement(
                      'p',
                      { className: 'slds-text-heading_medium' },
                      'Lei Chan'
                    ),
                    l.a.createElement(
                      'ul',
                      {
                        className:
                          'slds-list_horizontal slds-has-dividers_right slds-text-body_small'
                      },
                      l.a.createElement(
                        'li',
                        { className: 'slds-item' },
                        'VP of Sales'
                      ),
                      l.a.createElement(
                        'li',
                        { className: 'slds-item ' },
                        'Acme Corporation'
                      )
                    )
                  )
                ),
                l.a.createElement(
                  'p',
                  { className: 'slds-col_bump-left slds-text-heading_large' },
                  '5:37'
                )
              ),
              l.a.createElement(
                'div',
                { className: 'slds-docked-composer__toolbar' },
                l.a.createElement(d.b, {
                  className:
                    'slds-button_icon-border-filled slds-button_icon-small',
                  symbol: 'unmuted',
                  assistiveText: 'Mute Yourself',
                  title: 'Mute Yourself',
                  'aria-pressed': 'false'
                })
              ),
              l.a.createElement(
                'label',
                {
                  className: 'slds-assistive-text',
                  htmlFor: 'composer-text-input-1'
                },
                'Take notes'
              ),
              l.a.createElement('textarea', {
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
          element: l.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            l.a.createElement(
              y,
              {
                className: 'slds-is-open',
                bodyClassName: 'slds-align_absolute-center',
                header: 'Lei Chan - Cancelling...'
              },
              l.a.createElement(
                'div',
                { className: 'slds-text-align_center slds-align-middle' },
                l.a.createElement(
                  'span',
                  { className: 'slds-avatar slds-avatar_large' },
                  l.a.createElement('img', {
                    alt: '',
                    src: '/assets/images/avatar2.jpg',
                    title: 'Lei Chan avatar'
                  })
                ),
                l.a.createElement(
                  'h3',
                  { className: 'slds-text-heading_large' },
                  'Lei Chan'
                ),
                l.a.createElement(
                  'ul',
                  {
                    className:
                      'slds-list_horizontal slds-has-dividers_right slds-text-body_small'
                  },
                  l.a.createElement(
                    'li',
                    { className: 'slds-item' },
                    'VP of Sales'
                  ),
                  l.a.createElement(
                    'li',
                    { className: 'slds-item ' },
                    'Acme Corporation'
                  )
                ),
                l.a.createElement(
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
          element: l.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            l.a.createElement(
              y,
              {
                className: 'slds-is-open',
                bodyClassName: 'slds-align_absolute-center',
                header: 'Lei Chan - Busy',
                footer: [
                  l.a.createElement(
                    'button',
                    {
                      className:
                        'slds-button slds-button_neutral slds-size_1-of-2',
                      key: g.c.uniqueId('follow-up-')
                    },
                    'Follow-Up Later'
                  ),
                  l.a.createElement(
                    'button',
                    {
                      className:
                        'slds-button slds-button_brand slds-size_1-of-2',
                      key: g.c.uniqueId('call-again-')
                    },
                    'Call Again'
                  )
                ]
              },
              l.a.createElement(
                'div',
                { className: 'slds-text-align_center slds-align-middle' },
                l.a.createElement(
                  'span',
                  { className: 'slds-avatar slds-avatar_large' },
                  l.a.createElement('img', {
                    alt: '',
                    src: '/assets/images/avatar2.jpg',
                    title: 'Lei Chan avatar'
                  })
                ),
                l.a.createElement(
                  'h3',
                  { className: 'slds-text-heading_large' },
                  'Lei Chan'
                ),
                l.a.createElement(
                  'ul',
                  {
                    className:
                      'slds-list_horizontal slds-has-dividers_right slds-text-body_small'
                  },
                  l.a.createElement(
                    'li',
                    { className: 'slds-item' },
                    'VP of Sales'
                  ),
                  l.a.createElement(
                    'li',
                    { className: 'slds-item ' },
                    'Acme Corporation'
                  )
                ),
                l.a.createElement(
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
          element: l.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            l.a.createElement(
              y,
              {
                className: 'slds-is-open',
                bodyClassName: 'slds-align_absolute-center',
                header: 'Lei Chan - Call Failed',
                footer: [
                  l.a.createElement(
                    'button',
                    {
                      className:
                        'slds-button slds-button_neutral slds-size_1-of-2',
                      key: g.c.uniqueId('follow-up-')
                    },
                    'Edit Phone Number'
                  ),
                  l.a.createElement(
                    'button',
                    {
                      className:
                        'slds-button slds-button_brand slds-size_1-of-2',
                      key: g.c.uniqueId('call-again-')
                    },
                    'Call Again'
                  )
                ]
              },
              l.a.createElement(
                'div',
                { className: 'slds-text-align_center slds-align-middle' },
                l.a.createElement(
                  'span',
                  { className: 'slds-avatar slds-avatar_large' },
                  l.a.createElement('img', {
                    alt: '',
                    src: '/assets/images/avatar2.jpg',
                    title: 'Lei Chan avatar'
                  })
                ),
                l.a.createElement(
                  'h3',
                  { className: 'slds-text-heading_large' },
                  'Lei Chan'
                ),
                l.a.createElement(
                  'ul',
                  {
                    className:
                      'slds-list_horizontal slds-has-dividers_right slds-text-body_small'
                  },
                  l.a.createElement(
                    'li',
                    { className: 'slds-item' },
                    'VP of Sales'
                  ),
                  l.a.createElement(
                    'li',
                    { className: 'slds-item ' },
                    'Acme Corporation'
                  )
                ),
                l.a.createElement(
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
          element: l.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            l.a.createElement(
              y,
              {
                className: 'slds-is-open',
                bodyClassName: 'slds-align_absolute-center',
                header: 'Lei Chan - No Answer',
                footer: [
                  l.a.createElement(
                    'button',
                    {
                      className:
                        'slds-button slds-button_neutral slds-size_1-of-2',
                      key: g.c.uniqueId('follow-up-')
                    },
                    'Follow-Up Later'
                  ),
                  l.a.createElement(
                    'button',
                    {
                      className:
                        'slds-button slds-button_brand slds-size_1-of-2',
                      key: g.c.uniqueId('call-again-')
                    },
                    'Call Again'
                  )
                ]
              },
              l.a.createElement(
                'div',
                { className: 'slds-text-align_center slds-align-middle' },
                l.a.createElement(
                  'span',
                  { className: 'slds-avatar slds-avatar_large' },
                  l.a.createElement('img', {
                    alt: '',
                    src: '/assets/images/avatar2.jpg',
                    title: 'Lei Chan avatar'
                  })
                ),
                l.a.createElement(
                  'h3',
                  { className: 'slds-text-heading_large' },
                  'Lei Chan'
                ),
                l.a.createElement(
                  'ul',
                  {
                    className:
                      'slds-list_horizontal slds-has-dividers_right slds-text-body_small'
                  },
                  l.a.createElement(
                    'li',
                    { className: 'slds-item' },
                    'VP of Sales'
                  ),
                  l.a.createElement(
                    'li',
                    { className: 'slds-item ' },
                    'Acme Corporation'
                  )
                ),
                l.a.createElement(
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
          element: l.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            l.a.createElement(
              y,
              {
                className: 'slds-is-open',
                header: 'Lei Chan - Call Finished',
                footer: l.a.createElement(
                  'button',
                  {
                    className:
                      'slds-button slds-button_brand slds-col_bump-left'
                  },
                  'Finish Notes'
                )
              },
              l.a.createElement(
                'div',
                { className: 'slds-docked-composer__lead' },
                l.a.createElement(
                  'div',
                  { className: 'slds-media' },
                  l.a.createElement(
                    'div',
                    { className: 'slds-media__figure' },
                    l.a.createElement(
                      'span',
                      { className: 'slds-avatar slds-avatar_medium' },
                      l.a.createElement('img', {
                        alt: '',
                        src: '/assets/images/avatar2.jpg',
                        title: 'Lei Chan avatar'
                      })
                    )
                  ),
                  l.a.createElement(
                    'div',
                    { className: 'slds-media__body' },
                    l.a.createElement(
                      'p',
                      { className: 'slds-text-heading_medium' },
                      'Lei Chan'
                    ),
                    l.a.createElement(
                      'ul',
                      {
                        className:
                          'slds-list_horizontal slds-has-dividers_right slds-text-body_small'
                      },
                      l.a.createElement(
                        'li',
                        { className: 'slds-item' },
                        'VP of Sales'
                      ),
                      l.a.createElement(
                        'li',
                        { className: 'slds-item ' },
                        'Acme Corporation'
                      )
                    )
                  )
                )
              ),
              l.a.createElement(
                'div',
                { className: 'slds-docked-composer__toolbar' },
                l.a.createElement(d.b, {
                  className:
                    'slds-button_icon-border-filled slds-button_icon-small',
                  symbol: 'unmuted',
                  assistiveText: 'Mute Yourself',
                  title: 'Mute Yourself',
                  'aria-pressed': 'false'
                })
              ),
              l.a.createElement(
                'label',
                {
                  className: 'slds-assistive-text',
                  htmlFor: 'composer-text-input-1'
                },
                'Take notes'
              ),
              l.a.createElement('textarea', {
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
          element: l.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            l.a.createElement(
              y,
              {
                className: 'slds-is-open',
                bodyClassName: 'slds-align_absolute-center slds-size_1-of-1',
                header: 'Lei Chan - Incoming Call...',
                footer: l.a.createElement(
                  'button',
                  {
                    className:
                      'slds-button slds-button_brand slds-col_bump-left'
                  },
                  'Finish Notes'
                )
              },
              l.a.createElement(
                'div',
                { className: 'slds-text-align_center slds-align-middle' },
                l.a.createElement(
                  'span',
                  { className: 'slds-avatar slds-avatar_large' },
                  l.a.createElement('img', {
                    alt: '',
                    src: '/assets/images/avatar2.jpg',
                    title: 'Lei Chan avatar'
                  })
                ),
                l.a.createElement(
                  'h3',
                  { className: 'slds-text-heading_large' },
                  'Lei Chan'
                ),
                l.a.createElement(
                  'ul',
                  {
                    className:
                      'slds-list_horizontal slds-has-dividers_right slds-text-body_small'
                  },
                  l.a.createElement(
                    'li',
                    { className: 'slds-item' },
                    'VP of Sales'
                  ),
                  l.a.createElement(
                    'li',
                    { className: 'slds-item ' },
                    'Acme Corporation'
                  )
                ),
                l.a.createElement(
                  'p',
                  { className: 'slds-text-heading_medium slds-m-top_medium' },
                  '(416) 555-1234'
                )
              ),
              l.a.createElement(
                'div',
                {
                  className:
                    'slds-p-horizontal_x-small slds-text-align_left slds-size_1-of-1'
                },
                l.a.createElement(
                  'h3',
                  { className: 'slds-m-bottom_x-small' },
                  'Recent Activity'
                ),
                l.a.createElement(
                  'ul',
                  { className: 'slds-has-dividers_around-space' },
                  l.a.createElement(
                    'li',
                    { className: 'slds-item slds-theme_shade slds-grid' },
                    l.a.createElement(
                      'span',
                      {
                        className:
                          'slds-icon_container slds-icon-standard-task slds-m-right_x-small'
                      },
                      l.a.createElement(E.a, {
                        className: 'slds-icon slds-icon_small',
                        sprite: 'standard',
                        symbol: 'task'
                      }),
                      l.a.createElement(
                        'span',
                        { className: 'slds-assistive-text' },
                        'Task'
                      )
                    ),
                    'Discussed New Pricing Models',
                    l.a.createElement(
                      'span',
                      { className: 'slds-col_bump-left' },
                      'Yesterday'
                    )
                  ),
                  l.a.createElement(
                    'li',
                    { className: 'slds-item slds-theme_shade slds-grid' },
                    l.a.createElement(
                      'span',
                      {
                        className:
                          'slds-icon_container slds-icon-standard-email slds-m-right_x-small'
                      },
                      l.a.createElement(E.a, {
                        className: 'slds-icon slds-icon_small',
                        sprite: 'standard',
                        symbol: 'email'
                      }),
                      l.a.createElement(
                        'span',
                        { className: 'slds-assistive-text' },
                        'Email'
                      )
                    ),
                    'Re: Updated Proposals',
                    l.a.createElement(
                      'span',
                      { className: 'slds-col_bump-left' },
                      '4 Hours Ago'
                    )
                  ),
                  l.a.createElement(
                    'li',
                    { className: 'slds-item slds-theme_shade slds-grid' },
                    l.a.createElement(
                      'span',
                      {
                        className:
                          'slds-icon_container slds-icon-standard-note slds-m-right_x-small'
                      },
                      l.a.createElement(E.a, {
                        className: 'slds-icon slds-icon_small',
                        sprite: 'standard',
                        symbol: 'note'
                      }),
                      l.a.createElement(
                        'span',
                        { className: 'slds-assistive-text' },
                        'Note'
                      )
                    ),
                    'Discuss Slides for Nov EBC',
                    l.a.createElement(
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
          element: l.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            l.a.createElement(
              y,
              {
                className: 'slds-is-open',
                bodyClassName: 'slds-docked-composer__body_form',
                header: 'Lei Chan',
                footer: l.a.createElement(
                  'button',
                  {
                    className:
                      'slds-button slds-button_brand slds-col_bump-left'
                  },
                  'Save'
                )
              },
              l.a.createElement(
                'fieldset',
                { className: 'slds-form-element slds-form_compound' },
                l.a.createElement(
                  'legend',
                  { className: 'slds-assistive-text' },
                  'Log a call'
                ),
                l.a.createElement(
                  'div',
                  { className: 'slds-form-element__control' },
                  l.a.createElement(
                    'div',
                    { className: 'slds-form-element__group' },
                    l.a.createElement(
                      'div',
                      { className: 'slds-form-element__row' },
                      l.a.createElement(
                        'div',
                        { className: 'slds-form-element slds-size_1-of-1' },
                        l.a.createElement(
                          'label',
                          {
                            className: 'slds-form-element__label',
                            htmlFor: 'text-input-01'
                          },
                          'Subject'
                        ),
                        l.a.createElement(
                          'div',
                          { className: 'slds-form-element__control' },
                          l.a.createElement('input', {
                            className: 'slds-input',
                            type: 'text',
                            id: 'text-input-01'
                          })
                        )
                      )
                    ),
                    l.a.createElement(
                      'div',
                      { className: 'slds-form-element__row' },
                      l.a.createElement(
                        'div',
                        { className: 'slds-form-element slds-size_1-of-1' },
                        l.a.createElement(
                          'label',
                          {
                            className: 'slds-form-element__label',
                            htmlFor: 'textarea-input-01'
                          },
                          'Comments'
                        ),
                        l.a.createElement(
                          'div',
                          { className: 'slds-form-element__control' },
                          l.a.createElement('textarea', {
                            className: 'slds-textarea',
                            id: 'textarea-input-01'
                          })
                        )
                      )
                    ),
                    l.a.createElement(
                      'div',
                      { className: 'slds-form-element__row' },
                      l.a.createElement(b.a, {
                        formClassName: 'slds-size_1-of-2',
                        autocomplete: !0,
                        label: 'Name',
                        placeholder: 'Search Leads',
                        inputIcon: 'right',
                        inputIconRightSymbol: 'search',
                        objectSwitcher: !0,
                        objectSwitcherInline: !0,
                        'aria-controls': 'listbox-id-01',
                        listbox: l.a.createElement(C, {
                          id: 'listbox-id-01',
                          listboxOptionId: 'listbox-option-id-1'
                        })
                      }),
                      l.a.createElement(b.a, {
                        formClassName: 'slds-size_1-of-2',
                        autocomplete: !0,
                        label: 'Name',
                        placeholder: 'Search Accounts',
                        inputIcon: 'right',
                        inputIconRightSymbol: 'search',
                        objectSwitcher: !0,
                        objectSwitcherInline: !0,
                        'aria-controls': 'listbox-id-02',
                        listbox: l.a.createElement(C, {
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
          element: l.a.createElement(
            'div',
            { className: 'slds-docked_container' },
            l.a.createElement(
              y,
              {
                className: 'slds-is-open',
                header: 'New Email',
                headerSymbol: 'email',
                footer: l.a.createElement(x, null)
              },
              l.a.createElement(
                'div',
                { className: 'slds-email-composer' },
                l.a.createElement(
                  b.a,
                  {
                    id: 'recipients-to',
                    formClassName: 'slds-email-composer__combobox',
                    selectedOptionsInline: !0,
                    label: 'To',
                    placeholder: ' ',
                    autocomplete: !0,
                    'aria-controls': 'listbox-id-01',
                    listbox: l.a.createElement(C, {
                      id: 'listbox-id-01',
                      listboxOptionId: 'listbox-option-id-1'
                    })
                  },
                  l.a.createElement(
                    h.b,
                    null,
                    l.a.createElement(
                      h.c,
                      null,
                      l.a.createElement(
                        h.a,
                        { label: 'jrogers@cloudhub.com', tabIndex: '0' },
                        l.a.createElement(
                          i.a,
                          {
                            className:
                              'slds-avatar_x-small slds-pill__icon_container'
                          },
                          l.a.createElement('img', {
                            alt: 'Person name',
                            src: '/assets/images/avatar2.jpg',
                            title: 'User avatar'
                          })
                        )
                      )
                    )
                  )
                ),
                l.a.createElement(b.a, {
                  id: 'recipients-bcc',
                  formClassName: 'slds-email-composer__combobox',
                  selectedOptionsInline: !0,
                  label: 'Bcc',
                  placeholder: ' ',
                  autocomplete: !0,
                  'aria-controls': 'listbox-id-02',
                  listbox: l.a.createElement(C, {
                    id: 'listbox-id-02',
                    listboxOptionId: 'listbox-option-id-2'
                  })
                }),
                l.a.createElement(b.a, {
                  id: 'recipients-cc',
                  formClassName: 'slds-email-composer__combobox',
                  selectedOptionsInline: !0,
                  label: 'Cc',
                  placeholder: ' ',
                  autocomplete: !0,
                  'aria-controls': 'listbox-id-03',
                  listbox: l.a.createElement(C, {
                    id: 'listbox-id-03',
                    listboxOptionId: 'listbox-option-id-3'
                  })
                }),
                l.a.createElement(
                  p.b,
                  {
                    labelContent: 'Enter subject',
                    hasHiddenLabel: !0,
                    inputId: 'input-subject-01'
                  },
                  l.a.createElement(u.a, {
                    id: 'input-subject-01',
                    className: 'slds-input_bare',
                    placeholder: 'Enter Subject'
                  })
                ),
                l.a.createElement(
                  r.a,
                  null,
                  l.a.createElement(
                    r.l,
                    null,
                    l.a.createElement(r.f, null),
                    l.a.createElement(r.g, { tabIndexSetting: '-1' }),
                    l.a.createElement(r.e, null),
                    l.a.createElement(r.d, null),
                    l.a.createElement(r.b, null),
                    l.a.createElement(r.i, null),
                    l.a.createElement(r.c, null)
                  ),
                  l.a.createElement(r.k, { placeholder: 'Compose Email...' })
                )
              )
            )
          )
        }
      ],
      O = n.c.code,
      L = n.c.h2,
      I = n.c.h3,
      V = n.c.h4,
      P = n.c.h5,
      z = n.c.p,
      T = function() {
        return Object(t.createElement)(
          n.b,
          {},
          Object(t.createElement)(
            'div',
            { className: 'doc lead' },
            'Docked Composer is a persistent utility bar that allows a user to continually use the app to complete tasks or gather information while expanding/collapsing a composer window.'
          ),
          Object(t.createElement)(
            o.a,
            {
              exampleOnly: !0,
              isViewport: !0,
              demoStyles: 'height: 500px; min-width: 615px; overflow: hidden;'
            },
            Object(g.e)(S, 'voice-composer-connected')
          ),
          L({ id: 'About-Docked-Composer' }, 'About Docked Composer'),
          I({ id: 'Implementation' }, 'Implementation'),
          z(
            {},
            'The docked composer relies heavily on utility classes to piece together the layout so please pay close attention to the markup and classes.'
          ),
          z(
            {},
            'The overflow menu for docked composer, ',
            O({}, '.slds-docked-composer_overflow'),
            ', displays when the number of docked composers exceeds the width of the viewport. The overflow pill displays with a number indicator for all hidden docked composers. A user can invoke a popover with all available docked composers and replace the furthest left docked composer with the one being selected.'
          ),
          z(
            {},
            'When a user clicks on the "pop out" icon in the ',
            O({}, '.slds-docked-composer__header'),
            ', a modal displays and contains the task that was currently in the docked composer.'
          ),
          L({ id: 'Base' }, 'Base'),
          Object(t.createElement)(
            o.a,
            {
              isViewport: !0,
              demoStyles: 'height: 500px; min-width: 615px; overflow: hidden;'
            },
            k
          ),
          I({ id: 'States' }, 'States'),
          V({ id: 'OpenFocused' }, 'Open/Focused'),
          Object(t.createElement)(
            o.a,
            {
              isViewport: !0,
              demoStyles: 'height: 500px; min-width: 615px; overflow: hidden;'
            },
            Object(g.e)(j, 'single-composer-focused')
          ),
          V({ id: 'Closed' }, 'Closed'),
          Object(t.createElement)(
            o.a,
            {
              isViewport: !0,
              demoStyles: 'height: 500px; min-width: 615px; overflow: hidden;'
            },
            Object(g.e)(j, 'single-composer-closed')
          ),
          V({ id: 'ClosedFocused' }, 'Closed/Focused'),
          Object(t.createElement)(
            o.a,
            {
              isViewport: !0,
              demoStyles: 'height: 500px; min-width: 615px; overflow: hidden;'
            },
            Object(g.e)(j, 'single-composer-closed-focused')
          ),
          V({ id: 'Popped-out' }, 'Popped out'),
          Object(t.createElement)(
            o.a,
            {
              isViewport: !0,
              demoStyles: 'height: 500px; min-width: 615px; overflow: hidden;'
            },
            Object(g.e)(j, 'single-composer-popout')
          ),
          V({ id: 'With-overflow-menu' }, 'With overflow menu'),
          Object(t.createElement)(
            o.a,
            {
              isViewport: !0,
              demoStyles: 'height: 500px; min-width: 615px; overflow: hidden;'
            },
            Object(g.e)(j, 'multiple-composer-overflow')
          ),
          I({ id: 'Examples' }, 'Examples'),
          V({ id: 'Log-a-task' }, 'Log a task'),
          Object(t.createElement)(
            o.a,
            {
              isViewport: !0,
              demoStyles: 'height: 500px; min-width: 615px; overflow: hidden;'
            },
            Object(g.e)(S, 'task')
          ),
          V({ id: 'Email-Composer' }, 'Email Composer'),
          Object(t.createElement)(
            o.a,
            {
              isViewport: !0,
              demoStyles: 'height: 500px; min-width: 615px; overflow: hidden;'
            },
            Object(g.e)(S, 'email')
          ),
          V({ id: 'Voice' }, 'Voice'),
          P({ id: 'Queued' }, 'Queued'),
          Object(t.createElement)(
            o.a,
            {
              isViewport: !0,
              demoStyles: 'height: 500px; min-width: 615px; overflow: hidden;'
            },
            Object(g.e)(S, 'voice-composer-queued')
          ),
          P({ id: 'Ringing' }, 'Ringing'),
          Object(t.createElement)(
            o.a,
            {
              isViewport: !0,
              demoStyles: 'height: 500px; min-width: 615px; overflow: hidden;'
            },
            Object(g.e)(S, 'voice-composer-ringing')
          ),
          P({ id: 'Connected' }, 'Connected'),
          Object(t.createElement)(
            o.a,
            {
              isViewport: !0,
              demoStyles: 'height: 500px; min-width: 615px; overflow: hidden;'
            },
            Object(g.e)(S, 'voice-composer-connected')
          ),
          P({ id: 'Cancelled' }, 'Cancelled'),
          Object(t.createElement)(
            o.a,
            {
              isViewport: !0,
              demoStyles: 'height: 500px; min-width: 615px; overflow: hidden;'
            },
            Object(g.e)(S, 'voice-composer-cancelled')
          ),
          P({ id: 'Busy' }, 'Busy'),
          Object(t.createElement)(
            o.a,
            {
              isViewport: !0,
              demoStyles: 'height: 500px; min-width: 615px; overflow: hidden;'
            },
            Object(g.e)(S, 'voice-composer-busy')
          ),
          P({ id: 'Call-Failed' }, 'Call Failed'),
          Object(t.createElement)(
            o.a,
            {
              isViewport: !0,
              demoStyles: 'height: 500px; min-width: 615px; overflow: hidden;'
            },
            Object(g.e)(S, 'voice-composer-failed')
          ),
          P({ id: 'No-Answer' }, 'No Answer'),
          Object(t.createElement)(
            o.a,
            {
              isViewport: !0,
              demoStyles: 'height: 500px; min-width: 615px; overflow: hidden;'
            },
            Object(g.e)(S, 'voice-composer-no-answer')
          ),
          P({ id: 'Call-Finished' }, 'Call Finished'),
          Object(t.createElement)(
            o.a,
            {
              isViewport: !0,
              demoStyles: 'height: 500px; min-width: 615px; overflow: hidden;'
            },
            Object(g.e)(S, 'voice-composer-call-finished')
          ),
          P({ id: 'Call-Incoming' }, 'Call Incoming'),
          Object(t.createElement)(
            o.a,
            {
              isViewport: !0,
              demoStyles: 'height: 500px; min-width: 615px; overflow: hidden;'
            },
            Object(g.e)(S, 'voice-composer-call-incoming')
          ),
          P({ id: 'Call-Logged' }, 'Call Logged'),
          Object(t.createElement)(
            o.a,
            {
              isViewport: !0,
              demoStyles: 'height: 500px; min-width: 615px; overflow: hidden;'
            },
            Object(g.e)(S, 'voice-composer-call-logged')
          )
        );
      },
      A = function() {
        return Object(n.a)(T());
      };
  }
});
