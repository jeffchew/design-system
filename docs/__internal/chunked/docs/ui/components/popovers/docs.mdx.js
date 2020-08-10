var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/popovers/docs.mdx.js'] = (function(
  e
) {
  function t(t) {
    for (
      var a, o, i = t[0], r = t[1], c = t[2], m = 0, u = [];
      m < i.length;
      m++
    )
      (o = i[m]),
        Object.prototype.hasOwnProperty.call(s, o) && s[o] && u.push(s[o][0]),
        (s[o] = 0);
    for (a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    for (d && d(t); u.length; ) u.shift()();
    return n.push.apply(n, c || []), l();
  }
  function l() {
    for (var e, t = 0; t < n.length; t++) {
      for (var l = n[t], a = !0, i = 1; i < l.length; i++) {
        var r = l[i];
        0 !== s[r] && (a = !1);
      }
      a && (n.splice(t--, 1), (e = o((o.s = l[0]))));
    }
    return e;
  }
  var a = {},
    s = { 56: 0 },
    n = [];
  function o(t) {
    if (a[t]) return a[t].exports;
    var l = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(l.exports, l, l.exports, o), (l.l = !0), l.exports;
  }
  (o.m = e),
    (o.c = a),
    (o.d = function(e, t, l) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: l });
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
      var l = Object.create(null);
      if (
        (o.r(l),
        Object.defineProperty(l, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          o.d(
            l,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return l;
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
  var i = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    r = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var c = 0; c < i.length; c++) t(i[c]);
  var d = r;
  return n.push([207, 0]), l();
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
  207: function(e, t, l) {
    'use strict';
    l.r(t),
      l.d(t, 'getElement', function() {
        return Y;
      }),
      l.d(t, 'getContents', function() {
        return G;
      });
    var a = l(0),
      s = l.n(a),
      n = l(4),
      o = l(1),
      i = (l(23), l(15), l(26)),
      r = l(43),
      c = l(34),
      d = l(7),
      m = function(e) {
        return s.a.createElement(
          'section',
          {
            'aria-label': 'Dialog title',
            'aria-describedby': 'popover-body-id',
            className: 'slds-popover slds-nubbin_'.concat(e.nubbinPosition),
            role: 'dialog'
          },
          s.a.createElement(d.b, {
            className:
              'slds-button_icon slds-button_icon-small slds-float_right slds-popover__close',
            symbol: 'close',
            assistiveText: 'Close dialog',
            title: 'Close dialog'
          }),
          s.a.createElement(
            'div',
            { id: 'popover-body-id', className: 'slds-popover__body' },
            s.a.createElement(
              'p',
              null,
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quaerat? Accusamus excepturi eos, molestias expedita distinctio eligendi ut esse quasi!'
            )
          )
        );
      },
      u = [
        {
          id: 'left',
          label: 'Left',
          element: s.a.createElement(m, { nubbinPosition: 'left' })
        },
        {
          id: 'left-top',
          label: 'Left (top)',
          element: s.a.createElement(m, { nubbinPosition: 'left-top' })
        },
        {
          id: 'left-bottom',
          label: 'Left (bottom)',
          element: s.a.createElement(m, { nubbinPosition: 'left-bottom' })
        },
        {
          id: 'top',
          label: 'Top',
          element: s.a.createElement(m, { nubbinPosition: 'top' })
        },
        {
          id: 'top-left',
          label: 'Top (left)',
          element: s.a.createElement(m, { nubbinPosition: 'top-left' })
        },
        {
          id: 'top-right',
          label: 'Top (right)',
          element: s.a.createElement(m, { nubbinPosition: 'top-right' })
        },
        {
          id: 'right',
          label: 'Right',
          element: s.a.createElement(m, { nubbinPosition: 'right' })
        },
        {
          id: 'right-top',
          label: 'Right (top)',
          element: s.a.createElement(m, { nubbinPosition: 'right-top' })
        },
        {
          id: 'right-bottom',
          label: 'Right (bottom)',
          element: s.a.createElement(m, { nubbinPosition: 'right-bottom' })
        },
        {
          id: 'bottom',
          label: 'Bottom',
          element: s.a.createElement(m, { nubbinPosition: 'bottom' })
        },
        {
          id: 'bottom-left',
          label: 'Bottom (left)',
          element: s.a.createElement(m, { nubbinPosition: 'bottom-left' })
        },
        {
          id: 'bottom-right',
          label: 'Bottom (right)',
          element: s.a.createElement(m, { nubbinPosition: 'bottom-right' })
        }
      ],
      p = l(69),
      b = l(2),
      h = b.c.uniqueId('dialog-heading-id-'),
      E = s.a.createElement(
        c.a,
        {
          className: 'slds-popover_warning slds-nubbin_bottom-left',
          headingId: h,
          bodyClassName: 'slds-popover_warning__body',
          header: s.a.createElement(p.b, {
            headingId: h,
            title: 'Review warning',
            symbol: 'warning',
            iconDefault: !0
          }),
          closeButton: !0
        },
        s.a.createElement(
          'p',
          null,
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
          ' ',
          s.a.createElement(
            'a',
            { href: 'javascript:void(0);', title: 'Learn More' },
            'Learn More'
          )
        )
      ),
      _ = [
        {
          id: 'with-footer',
          label: 'With Footer',
          element: s.a.createElement(
            c.a,
            {
              className: 'slds-popover_warning slds-nubbin_bottom-left',
              bodyClassName: 'slds-popover_warning__body',
              headingId: h,
              header: s.a.createElement(p.b, {
                headingId: h,
                title: 'Review warning',
                symbol: 'warning',
                iconDefault: !0
              }),
              footer: s.a.createElement(p.a, null),
              closeButton: !0
            },
            s.a.createElement(
              'p',
              null,
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
              ' ',
              s.a.createElement(
                'a',
                { href: 'javascript:void(0);', title: 'Learn More' },
                'Learn More'
              )
            )
          )
        }
      ],
      g = l(10),
      f = b.c.uniqueId('dialog-heading-id-'),
      v = function(e) {
        return s.a.createElement(
          'header',
          { className: 'slds-popover__header slds-p-vertical_medium' },
          s.a.createElement(
            'h2',
            { id: f, className: 'slds-text-heading_medium' },
            e.title
          )
        );
      },
      N = function(e) {
        return s.a.createElement(
          'div',
          { className: 'slds-grid slds-grid_vertical-align-center' },
          e.steps
            ? s.a.createElement(
                'span',
                { className: 'slds-text-title' },
                'Step 2 of 4'
              )
            : null,
          e.skipButton
            ? s.a.createElement(
                'button',
                {
                  className:
                    'slds-button slds-button_inverse slds-col_bump-left'
                },
                'Skip'
              )
            : null,
          e.setupButton
            ? s.a.createElement(
                'button',
                {
                  className:
                    'slds-button slds-button_success slds-col_bump-left'
                },
                'Setup Email'
              )
            : null,
          e.nextButton
            ? s.a.createElement(
                'button',
                {
                  className: 'slds-button slds-button_brand slds-col_bump-left'
                },
                'Next'
              )
            : null,
          e.learnMoreButton
            ? s.a.createElement(
                'button',
                {
                  className:
                    'slds-button slds-button_neutral slds-col_bump-left'
                },
                'Learn More'
              )
            : null
        );
      },
      j = s.a.createElement(
        c.a,
        {
          className: 'slds-popover_walkthrough slds-nubbin_left',
          headingId: f,
          header: s.a.createElement(v, { title: 'Manage your channels' }),
          footer: s.a.createElement(N, { steps: !0, nextButton: !0 }),
          closeButton: !0,
          inverse: !0
        },
        s.a.createElement(
          'p',
          null,
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        )
      ),
      O = [
        {
          id: 'micro-setup',
          label: 'Micro Setup',
          element: s.a.createElement(
            c.a,
            {
              className: 'slds-popover_walkthrough slds-nubbin_left',
              headingId: f,
              header: s.a.createElement(v, { title: 'Manage your channels' }),
              footer: s.a.createElement(N, {
                steps: !0,
                setupButton: !0,
                nextButton: !0
              }),
              closeButton: !0,
              inverse: !0
            },
            s.a.createElement(
              'p',
              null,
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            )
          )
        },
        {
          id: 'micro-setup-alternate',
          label: 'Micro Setup - Alternate',
          element: s.a.createElement(
            c.a,
            {
              className: 'slds-popover_walkthrough slds-nubbin_left',
              headingId: f,
              header: s.a.createElement(v, { title: 'Manage your channels' }),
              footer: s.a.createElement(N, {
                steps: !0,
                skipButton: !0,
                setupButton: !0
              }),
              closeButton: !0,
              inverse: !0
            },
            s.a.createElement(
              'p',
              null,
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            )
          )
        },
        {
          id: 'micro-setup-in-page',
          label: 'Micro Setup - In Page',
          element: s.a.createElement(
            c.a,
            {
              className: 'slds-popover_walkthrough slds-nubbin_bottom',
              headingId: f,
              header: s.a.createElement(v, { title: 'Manage your channels' }),
              footer: s.a.createElement(N, { steps: !0, skipButton: !0 }),
              closeButton: !0,
              inverse: !0
            },
            s.a.createElement(
              'p',
              null,
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            )
          )
        },
        {
          id: 'micro-setup-inline-form',
          label: 'Micro Setup - Inline Form',
          element: s.a.createElement(
            c.a,
            {
              className: 'slds-popover_walkthrough slds-nubbin_left',
              headingId: f,
              header: s.a.createElement(v, { title: 'Manage your channels' }),
              footer: s.a.createElement(N, {
                steps: !0,
                skipButton: !0,
                nextButton: !0
              }),
              closeButton: !0,
              inverse: !0
            },
            s.a.createElement(
              'p',
              null,
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            ),
            s.a.createElement(
              'div',
              { className: 'slds-form-element slds-p-top_small' },
              s.a.createElement(
                'label',
                {
                  className: 'slds-form-element__label slds-assistive-text',
                  htmlFor: 'email-text-input-01'
                },
                'Email Address'
              ),
              s.a.createElement(
                'div',
                { className: 'slds-form-element__control' },
                s.a.createElement('input', {
                  id: 'email-text-input-01',
                  className: 'slds-input',
                  type: 'text',
                  placeholder: 'Email Address'
                })
              )
            )
          )
        },
        {
          id: 'action-popover',
          label: 'Action Popover',
          element: s.a.createElement(
            c.a,
            {
              className:
                'slds-popover_walkthrough slds-popover_walkthrough-alt slds-nubbin_left',
              title: 'Dialog Title',
              closeButton: !0,
              inverse: !0
            },
            s.a.createElement(
              'div',
              { className: 'slds-media' },
              s.a.createElement(
                'div',
                { className: 'slds-media__figure' },
                s.a.createElement(
                  'span',
                  {
                    className: 'slds-icon_container',
                    title: 'description of icon when needed'
                  },
                  s.a.createElement(g.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-text-default',
                    sprite: 'utility',
                    symbol: 'touch_action'
                  }),
                  s.a.createElement(
                    'span',
                    { className: 'slds-assistive-text' },
                    'Description of icon'
                  )
                )
              ),
              s.a.createElement(
                'div',
                { className: 'slds-media__body' },
                s.a.createElement(
                  'p',
                  { className: 'slds-text-heading_small' },
                  'Text that describes the action'
                ),
                s.a.createElement(
                  'p',
                  { className: 'slds-m-top_medium slds-text-title' },
                  'Step 3 of 4'
                )
              )
            )
          )
        },
        {
          id: 'action-popover-heading',
          label: 'Action Popover - With Heading',
          element: s.a.createElement(
            c.a,
            {
              className:
                'slds-popover_walkthrough slds-popover_walkthrough-alt slds-nubbin_left',
              headingId: f,
              closeButton: !0,
              inverse: !0
            },
            s.a.createElement(
              'div',
              { className: 'slds-media' },
              s.a.createElement(
                'div',
                { className: 'slds-media__figure' },
                s.a.createElement(
                  'span',
                  {
                    className: 'slds-icon_container',
                    title: 'description of icon when needed'
                  },
                  s.a.createElement(g.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-text-default',
                    sprite: 'utility',
                    symbol: 'touch_action'
                  }),
                  s.a.createElement(
                    'span',
                    { className: 'slds-assistive-text' },
                    'Description of icon'
                  )
                )
              ),
              s.a.createElement(
                'div',
                { className: 'slds-media__body' },
                s.a.createElement(
                  'h2',
                  { id: f, className: 'slds-text-heading_small' },
                  'Title'
                ),
                s.a.createElement('p', null, 'Text that describes the action'),
                s.a.createElement(
                  'p',
                  { className: 'slds-m-top_medium slds-text-title' },
                  'Step 3 of 4'
                )
              )
            )
          )
        },
        {
          id: 'action-popover-with-link',
          label: 'Action Popover - With Link',
          element: s.a.createElement(
            c.a,
            {
              className:
                'slds-popover_walkthrough slds-popover_walkthrough-alt slds-nubbin_left',
              headingId: f,
              closeButton: !0,
              inverse: !0
            },
            s.a.createElement(
              'div',
              { className: 'slds-media' },
              s.a.createElement(
                'div',
                { className: 'slds-media__figure' },
                s.a.createElement(
                  'span',
                  {
                    className: 'slds-icon_container',
                    title: 'description of icon when needed'
                  },
                  s.a.createElement(g.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-text-default',
                    sprite: 'utility',
                    symbol: 'touch_action'
                  }),
                  s.a.createElement(
                    'span',
                    { className: 'slds-assistive-text' },
                    'Description of icon'
                  )
                )
              ),
              s.a.createElement(
                'div',
                { className: 'slds-media__body' },
                s.a.createElement(
                  'h2',
                  { id: f, className: 'slds-text-heading_small' },
                  'Title'
                ),
                s.a.createElement('p', null, 'Text that describes the action'),
                s.a.createElement(
                  'a',
                  { href: 'javascript:void(0);' },
                  'Take Action'
                ),
                s.a.createElement(
                  'p',
                  { className: 'slds-m-top_medium slds-text-title' },
                  'Step 3 of 4'
                )
              )
            )
          )
        }
      ],
      y = b.c.uniqueId('dialog-heading-id-'),
      x = s.a.createElement(
        c.a,
        {
          className:
            'slds-popover_walkthrough slds-popover_feature slds-nubbin_left',
          title: 'Dialog Title',
          closeButton: !0,
          inverse: !0
        },
        s.a.createElement(
          'div',
          { className: 'slds-media' },
          s.a.createElement(
            'div',
            { className: 'slds-media__body' },
            s.a.createElement(
              'p',
              { className: 'slds-text-heading_small' },
              'Shelly, it seems you frequent this record. Try favoriting it for easy access.'
            )
          )
        )
      ),
      w = [
        {
          id: 'icon-text',
          label: 'With icon and text',
          element: s.a.createElement(
            c.a,
            {
              className:
                'slds-popover_walkthrough slds-popover_feature slds-nubbin_left',
              title: 'Dialog Title',
              closeButton: !0,
              inverse: !0
            },
            s.a.createElement(
              'div',
              { className: 'slds-media' },
              s.a.createElement(
                'div',
                { className: 'slds-media__figure' },
                s.a.createElement(
                  'span',
                  {
                    className: 'slds-icon_container',
                    title: 'description of icon when needed'
                  },
                  s.a.createElement(g.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-text-default',
                    sprite: 'utility',
                    symbol: 'favorite'
                  }),
                  s.a.createElement(
                    'span',
                    { className: 'slds-assistive-text' },
                    'Description of icon'
                  )
                )
              ),
              s.a.createElement(
                'div',
                { className: 'slds-media__body' },
                s.a.createElement(
                  'p',
                  { className: 'slds-text-heading_small' },
                  'Shelly, it seems you frequent this record. Try favoriting it for easy access.'
                )
              )
            )
          )
        },
        {
          id: 'icon-header-text-link',
          label: 'With icon, header, text, and link',
          element: s.a.createElement(
            c.a,
            {
              className:
                'slds-popover_walkthrough slds-popover_feature slds-nubbin_left',
              headingId: y,
              closeButton: !0,
              inverse: !0
            },
            s.a.createElement(
              'div',
              { className: 'slds-media' },
              s.a.createElement(
                'div',
                { className: 'slds-media__figure' },
                s.a.createElement(
                  'span',
                  {
                    className: 'slds-icon_container',
                    title: 'description of icon when needed'
                  },
                  s.a.createElement(g.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-text-default',
                    sprite: 'utility',
                    symbol: 'smiley_and_people'
                  }),
                  s.a.createElement(
                    'span',
                    { className: 'slds-assistive-text' },
                    'Description of icon'
                  )
                )
              ),
              s.a.createElement(
                'div',
                { className: 'slds-media__body' },
                s.a.createElement(
                  'h2',
                  { id: y, className: 'slds-text-heading_small' },
                  'Title'
                ),
                s.a.createElement(
                  'p',
                  null,
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                  ' ',
                  s.a.createElement(
                    'a',
                    { href: 'javascript:void(0);' },
                    'Learn more'
                  )
                )
              )
            )
          )
        },
        {
          id: 'icon-header-text',
          label: 'With icon, header, and text',
          element: s.a.createElement(
            c.a,
            {
              className:
                'slds-popover_walkthrough slds-popover_feature slds-nubbin_left',
              headingId: y,
              closeButton: !0,
              inverse: !0
            },
            s.a.createElement(
              'div',
              { className: 'slds-media' },
              s.a.createElement(
                'div',
                { className: 'slds-media__figure' },
                s.a.createElement(
                  'span',
                  {
                    className: 'slds-icon_container',
                    title: 'description of icon when needed'
                  },
                  s.a.createElement(g.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-text-default',
                    sprite: 'utility',
                    symbol: 'description'
                  }),
                  s.a.createElement(
                    'span',
                    { className: 'slds-assistive-text' },
                    'Description of icon'
                  )
                )
              ),
              s.a.createElement(
                'div',
                { className: 'slds-media__body' },
                s.a.createElement(
                  'h2',
                  { id: y, className: 'slds-text-heading_small' },
                  'Title'
                ),
                s.a.createElement(
                  'p',
                  null,
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                )
              )
            )
          )
        },
        {
          id: 'icon-header-text-footer',
          label: 'With icon, header, text, and footer',
          element: s.a.createElement(
            c.a,
            {
              className:
                'slds-popover_walkthrough slds-popover_feature slds-nubbin_left',
              headingId: y,
              footer: s.a.createElement(N, { learnMoreButton: !0 }),
              closeButton: !0,
              inverse: !0
            },
            s.a.createElement(
              'div',
              { className: 'slds-media' },
              s.a.createElement(
                'div',
                { className: 'slds-media__figure' },
                s.a.createElement(
                  'span',
                  {
                    className: 'slds-icon_container',
                    title: 'description of icon when needed'
                  },
                  s.a.createElement(g.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-text-default',
                    sprite: 'utility',
                    symbol: 'favorite'
                  }),
                  s.a.createElement(
                    'span',
                    { className: 'slds-assistive-text' },
                    'Description of icon'
                  )
                )
              ),
              s.a.createElement(
                'div',
                { className: 'slds-media__body' },
                s.a.createElement(
                  'h2',
                  { id: y, className: 'slds-text-heading_small' },
                  'Title'
                ),
                s.a.createElement(
                  'p',
                  null,
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                )
              )
            )
          )
        }
      ],
      k = l(62),
      P = s.a.createElement(
        'span',
        { className: 'slds-icon_container slds-icon-standard-opportunity' },
        s.a.createElement(g.a, {
          className: 'slds-icon slds-icon_small',
          sprite: 'standard',
          symbol: 'opportunity'
        }),
        s.a.createElement(
          'span',
          { className: 'slds-assistive-text' },
          'Opportunities'
        )
      ),
      S = s.a.createElement(
        'span',
        { className: 'slds-icon_container slds-icon-standard-case' },
        s.a.createElement(g.a, {
          className: 'slds-icon slds-icon_small',
          sprite: 'standard',
          symbol: 'case'
        }),
        s.a.createElement('span', { className: 'slds-assistive-text' }, 'Cases')
      ),
      L = function() {
        return s.a.createElement(
          'dd',
          { className: 'slds-m-top_x-small slds-text-align_right' },
          s.a.createElement(
            'a',
            { href: 'javascript:void(0);', title: 'View all Opportunities' },
            'View All'
          )
        );
      },
      B = s.a.createElement(
        'section',
        {
          'aria-labelledby': 'panel-heading-id',
          className: 'slds-popover slds-popover_panel slds-nubbin_left-top',
          role: 'dialog'
        },
        s.a.createElement(d.b, {
          className:
            'slds-button_icon slds-button_icon-small slds-float_right slds-popover__close',
          symbol: 'close',
          assistiveText: 'Close dialog',
          title: 'Close dialog'
        }),
        s.a.createElement(
          'div',
          { className: 'slds-popover__header' },
          s.a.createElement(
            'header',
            { className: 'slds-media slds-media_center slds-m-bottom_small' },
            s.a.createElement(
              'span',
              {
                className:
                  'slds-icon_container slds-icon-standard-account slds-media__figure'
              },
              s.a.createElement(g.a, {
                className: 'slds-icon slds-icon_small',
                sprite: 'standard',
                symbol: 'account'
              })
            ),
            s.a.createElement(
              'div',
              { className: 'slds-media__body' },
              s.a.createElement(
                'h2',
                {
                  className: 'slds-text-heading_medium slds-hyphenate',
                  id: 'panel-heading-id'
                },
                s.a.createElement(
                  'a',
                  { href: 'javascript:void(0);' },
                  'Tesla Motors'
                )
              )
            )
          ),
          s.a.createElement(
            'footer',
            { className: 'slds-grid slds-wrap slds-grid_pull-padded' },
            s.a.createElement(
              'div',
              {
                className:
                  'slds-p-horizontal_small slds-size_1-of-2 slds-p-bottom_x-small'
              },
              s.a.createElement(
                'dl',
                null,
                s.a.createElement(
                  'dt',
                  null,
                  s.a.createElement(
                    'p',
                    {
                      className: 'slds-popover_panel__label slds-truncate',
                      title: 'Billing Address'
                    },
                    'Billing Address'
                  )
                ),
                s.a.createElement(
                  'dd',
                  null,
                  s.a.createElement(
                    'p',
                    {
                      className: 'slds-truncate',
                      title: '3500 Deer Creek Rd.'
                    },
                    '3500 Deer Creek Rd.'
                  ),
                  s.a.createElement(
                    'p',
                    {
                      className: 'slds-truncate',
                      title: 'Palo Alto, CA 94304'
                    },
                    'Palo Alto, CA 94304'
                  )
                )
              )
            ),
            s.a.createElement(
              'div',
              {
                className:
                  'slds-p-horizontal_small slds-size_1-of-2 slds-p-bottom_x-small'
              },
              s.a.createElement(
                'dl',
                null,
                s.a.createElement(
                  'dt',
                  null,
                  s.a.createElement(
                    'p',
                    {
                      className: 'slds-popover_panel__label slds-truncate',
                      title: 'Phone'
                    },
                    'Phone'
                  )
                ),
                s.a.createElement(
                  'dd',
                  null,
                  s.a.createElement(
                    'a',
                    { href: 'javascript:void(0);' },
                    '212-345-3485'
                  )
                )
              )
            ),
            s.a.createElement(
              'div',
              {
                className:
                  'slds-p-horizontal_small slds-size_1-of-2 slds-p-bottom_x-small'
              },
              s.a.createElement(
                'dl',
                null,
                s.a.createElement(
                  'dt',
                  null,
                  s.a.createElement(
                    'p',
                    {
                      className: 'slds-popover_panel__label slds-truncate',
                      title: 'Website'
                    },
                    'Website'
                  )
                ),
                s.a.createElement(
                  'dd',
                  null,
                  s.a.createElement(
                    'a',
                    { href: 'javascript:void(0);' },
                    'teslamotors.com'
                  )
                )
              )
            ),
            s.a.createElement(
              'div',
              {
                className:
                  'slds-p-horizontal_small slds-size_1-of-2 slds-p-bottom_x-small'
              },
              s.a.createElement(
                'dl',
                null,
                s.a.createElement(
                  'dt',
                  null,
                  s.a.createElement(
                    'p',
                    {
                      className: 'slds-popover_panel__label slds-truncate',
                      title: 'Account Owner'
                    },
                    'Account Owner'
                  )
                ),
                s.a.createElement(
                  'dd',
                  null,
                  s.a.createElement(
                    'a',
                    { href: 'javascript:void(0);' },
                    'Jeff Maguire'
                  )
                )
              )
            )
          )
        ),
        s.a.createElement(
          'div',
          { className: 'slds-popover__body' },
          s.a.createElement(
            'dl',
            { className: 'slds-popover__body-list' },
            s.a.createElement(
              'dt',
              { className: 'slds-m-bottom_small' },
              s.a.createElement(
                k.a,
                { figureLeft: P, flavor: 'center' },
                s.a.createElement(
                  'p',
                  { className: 'slds-text-heading_small slds-hyphenate' },
                  'Opportunities (2+)'
                )
              )
            ),
            s.a.createElement(
              'dd',
              { className: 'slds-m-top_x-small' },
              s.a.createElement(
                'p',
                { className: 'slds-truncate', title: 'Tesla - Mule ESB' },
                s.a.createElement(
                  'a',
                  { href: 'javascript:void(0);' },
                  'Tesla - Mule ESB'
                )
              ),
              s.a.createElement(
                'dl',
                {
                  className:
                    'slds-list_horizontal slds-wrap slds-text-body_small'
                },
                s.a.createElement(
                  'dt',
                  {
                    className:
                      'slds-item_label slds-text-color_weak slds-truncate',
                    title: 'Value'
                  },
                  'Value'
                ),
                s.a.createElement(
                  'dd',
                  {
                    className:
                      'slds-item_detail slds-text-color_weak slds-truncate',
                    title: '$500,000'
                  },
                  '$500,000'
                ),
                s.a.createElement(
                  'dt',
                  {
                    className:
                      'slds-item_label slds-text-color_weak slds-truncate',
                    title: 'Close Date'
                  },
                  'Close Date'
                ),
                s.a.createElement(
                  'dd',
                  {
                    className:
                      'slds-item_detail slds-text-color_weak slds-truncate',
                    title: 'Dec 15, 2015'
                  },
                  'Dec 15, 2015'
                )
              )
            ),
            s.a.createElement(
              'dd',
              { className: 'slds-m-top_x-small' },
              s.a.createElement(
                'p',
                {
                  className: 'slds-truncate',
                  title: 'Tesla - Anypoint Studios'
                },
                s.a.createElement(
                  'a',
                  { href: 'javascript:void(0);' },
                  'Tesla - Anypoint Studios'
                )
              ),
              s.a.createElement(
                'dl',
                {
                  className:
                    'slds-list_horizontal slds-wrap slds-text-body_small'
                },
                s.a.createElement(
                  'dt',
                  {
                    className:
                      'slds-item_label slds-text-color_weak slds-truncate',
                    title: 'Value'
                  },
                  'Value'
                ),
                s.a.createElement(
                  'dd',
                  {
                    className:
                      'slds-item_detail slds-text-color_weak slds-truncate',
                    title: '$60,000'
                  },
                  '$60,000'
                ),
                s.a.createElement(
                  'dt',
                  {
                    className:
                      'slds-item_label slds-text-color_weak slds-truncate',
                    title: 'Close Date'
                  },
                  'Close Date'
                ),
                s.a.createElement(
                  'dd',
                  {
                    className:
                      'slds-item_detail slds-text-color_weak slds-truncate',
                    title: 'Jan 15, 2016'
                  },
                  'Jan 15, 2016'
                )
              )
            ),
            s.a.createElement(L, null)
          ),
          s.a.createElement(
            'dl',
            { className: 'slds-popover__body-list' },
            s.a.createElement(
              'dt',
              { className: 'slds-m-bottom_small' },
              s.a.createElement(
                k.a,
                { figureLeft: S, flavor: 'center' },
                s.a.createElement(
                  'p',
                  { className: 'slds-text-heading_small slds-hyphenate' },
                  'Cases (1)'
                )
              )
            ),
            s.a.createElement(
              'dd',
              { className: 'slds-m-top_x-small' },
              s.a.createElement(
                'p',
                {
                  className: 'slds-truncate',
                  title: 'Tesla - Anypoint Studios'
                },
                s.a.createElement(
                  'a',
                  { href: 'javascript:void(0);' },
                  'Tesla - Anypoint Studios'
                )
              ),
              s.a.createElement(
                'dl',
                {
                  className:
                    'slds-list_horizontal slds-wrap slds-text-body_small'
                },
                s.a.createElement(
                  'dt',
                  {
                    className:
                      'slds-item_label slds-text-color_weak slds-truncate',
                    title: 'Value'
                  },
                  'Value'
                ),
                s.a.createElement(
                  'dd',
                  {
                    className:
                      'slds-item_detail slds-text-color_weak slds-truncate',
                    title: '$60,000'
                  },
                  '$60,000'
                ),
                s.a.createElement(
                  'dt',
                  {
                    className:
                      'slds-item_label slds-text-color_weak slds-truncate',
                    title: 'Close Date'
                  },
                  'Close Date'
                ),
                s.a.createElement(
                  'dd',
                  {
                    className:
                      'slds-item_detail slds-text-color_weak slds-truncate',
                    title: 'Jan 15, 2016'
                  },
                  'Jan 15, 2016'
                )
              )
            ),
            s.a.createElement(L, null)
          )
        )
      ),
      T = l(5),
      M = l.n(T),
      W = b.c.uniqueId('dialog-heading-id-'),
      A = function(e) {
        return s.a.createElement(
          'div',
          { className: 'slds-grid slds-grid_vertical-align-center' },
          e.dismissButtonLabel &&
            s.a.createElement(
              'button',
              {
                className: 'slds-button slds-button_neutral slds-col_bump-right'
              },
              e.dismissButtonLabel
            ),
          e.actionLinkText &&
            s.a.createElement(
              'span',
              { className: 'slds-popover_prompt__action-link' },
              s.a.createElement(
                'a',
                { href: '#', className: 'slds-button' },
                e.actionLinkText
              )
            ),
          e.brandButtonLabel &&
            s.a.createElement(
              'button',
              { className: 'slds-button slds-button_brand' },
              e.brandButtonLabel
            )
        );
      },
      D = function(e) {
        var t = {
          'slds-popover_prompt_top': 'top' === e.position,
          'slds-popover_prompt_top-right': 'top-right' === e.position,
          'slds-popover_prompt_top-left': 'top-left' === e.position,
          'slds-popover_prompt_bottom': 'bottom' === e.position,
          'slds-popover_prompt_bottom-left': 'bottom-left' === e.position,
          'slds-popover_prompt_bottom-right': 'bottom-right' === e.position
        };
        return s.a.createElement(
          c.a,
          {
            className: M()('slds-popover_prompt', t, e.className),
            headingId: W,
            footer: s.a.createElement(A, {
              dismissButtonLabel: 'Dismiss',
              actionLinkText: 'Learn more',
              brandButtonLabel: 'Save'
            }),
            closeButton: !0
          },
          s.a.createElement(
            'div',
            { className: 'slds-media' },
            e.symbol &&
              s.a.createElement(
                'div',
                { className: 'slds-media__figure' },
                s.a.createElement(
                  'span',
                  { className: 'slds-icon_container', title: e.assistiveText },
                  s.a.createElement(g.a, {
                    className:
                      'slds-icon slds-icon_small slds-icon-text-default',
                    sprite: 'utility',
                    symbol: e.symbol
                  }),
                  s.a.createElement(
                    'span',
                    { className: 'slds-assistive-text' },
                    e.assistiveText
                  )
                )
              ),
            s.a.createElement(
              'div',
              { className: 'slds-media__body' },
              s.a.createElement(
                'h2',
                { id: W, className: 'slds-popover_prompt__heading' },
                'Title'
              ),
              s.a.createElement(
                'p',
                null,
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              )
            )
          )
        );
      },
      I = s.a.createElement(D, { symbol: 'prompt' }),
      C = [
        {
          id: 'top-left',
          label: 'Positioned: top left',
          element: s.a.createElement(D, {
            symbol: 'prompt',
            position: 'top-left'
          })
        },
        {
          id: 'top-center',
          label: 'Positioned: top center',
          element: s.a.createElement(D, { symbol: 'prompt', position: 'top' })
        },
        {
          id: 'top-right',
          label: 'Positioned: top right',
          element: s.a.createElement(D, {
            symbol: 'prompt',
            position: 'top-right'
          })
        },
        {
          id: 'bottom-right',
          label: 'Positioned: bottom right',
          element: s.a.createElement(D, {
            symbol: 'prompt',
            position: 'bottom-right'
          })
        },
        {
          id: 'bottom-center',
          label: 'Positioned: bottom center',
          element: s.a.createElement(D, {
            symbol: 'prompt',
            position: 'bottom'
          })
        },
        {
          id: 'bottom-left',
          label: 'Positioned: bottom left',
          element: s.a.createElement(D, {
            symbol: 'prompt',
            position: 'bottom-left'
          })
        }
      ],
      q = l(33),
      F = n.c.code,
      R = n.c.h2,
      z = n.c.h3,
      J = n.c.h4,
      V = n.c.li,
      H = n.c.p,
      $ = n.c.strong,
      U = n.c.ul,
      Y = function() {
        return Object(a.createElement)(
          n.b,
          {},
          Object(a.createElement)(
            'div',
            { className: 'doc lead' },
            'A popover is a non-modal dialog. The component should be paired with a clickable trigger element and contain at least one focusable element.'
          ),
          Object(a.createElement)(
            o.a,
            { exampleOnly: !0 },
            Object(b.e)(u, 'bottom')
          ),
          R({ id: 'About-Popovers' }, 'About Popovers'),
          H(
            {},
            'A popover is used to display contextual information to the user.'
          ),
          H(
            {},
            'A popover can accept the following nubbin position classes, ',
            F({}, '.slds-nubbin_left'),
            ', ',
            F({}, '.slds-nubbin_left-top'),
            ', ',
            F({}, '.slds-nubbin_left-bottom'),
            ', ',
            F({}, '.slds-nubbin_top-left'),
            ', ',
            F({}, '.slds-nubbin_top-right'),
            ', ',
            F({}, '.slds-nubbin_right-top'),
            ', ',
            F({}, '.slds-nubbin_right-bottom'),
            ', ',
            F({}, '.slds-nubbin_bottom-left'),
            ', ',
            F({}, '.slds-nubbin_bottom-right'),
            '.'
          ),
          z({ id: 'Accessibility' }, 'Accessibility'),
          J({ id: 'Notable-features' }, 'Notable features'),
          U(
            {},
            V({}, 'Popovers ', $({}, 'must'), ' come with a triggering button'),
            V(
              {},
              'They ',
              $({}, 'must'),
              ' have at least one focusable element inside'
            ),
            V(
              {},
              'They ',
              $({}, 'should'),
              ' be implemented as a keyboard focus trap'
            ),
            V(
              {},
              "When triggered, user focus should be placed on the first focusable element that isn't the close button. If the close button is the only focusable element, focus should be placed there"
            ),
            V(
              {},
              'Pressing the Escape the key as well as clicking the close button should close the Popover'
            ),
            V(
              {},
              'User focus should be placed back on the triggering button when the popover is closed'
            )
          ),
          H(
            {},
            'Panel Popovers can be shown on mouse hover but for keyboard or screen reader users, a button should be present ',
            $({}, 'in addition'),
            ' and next to the hover trigger.\nThis is due to the focus moving and trapping nature of non-modal dialogs. You ',
            $({}, 'should not'),
            " move a user's focus without their expressed intent."
          ),
          J({ id: 'Notable-attributes' }, 'Notable attributes'),
          U(
            {},
            V(
              {},
              'The Popover element should have ',
              F({}, 'role="dialog"'),
              ' applied'
            ),
            V(
              {},
              'The ',
              F({}, 'dialog'),
              ' should be labelled, this can be achieved in two ways:',
              U(
                {},
                V(
                  {},
                  'Apply the ',
                  F({}, 'aria-labelledby'),
                  ' attribute to the ',
                  F({}, 'dialog'),
                  ' element and set the value to be the ID of the main Heading element in the Popover (if it provides a good and meaningful title to the ',
                  F({}, 'dialog'),
                  ')'
                ),
                V(
                  {},
                  'If no Heading element is present, use the ',
                  F({}, 'aria-label'),
                  ' attribute and set the value to be a meaningful title of the ',
                  F({}, 'dialog')
                )
              )
            ),
            V(
              {},
              'The ',
              F({}, 'dialog'),
              ' should be described where possible. This can be achieved by applying the ',
              F({}, 'aria-describedby'),
              ' attribute to the ',
              F({}, 'dialog'),
              ' element and set the value to be the id of the Popover body'
            )
          ),
          z({ id: 'Mobile' }, 'Mobile'),
          Object(a.createElement)(q.a, {
            patternSpecificText:
              'popovers will have increased close button size to accommodate tapping with a finger instead of the more precise mouse cursor'
          }),
          Object(a.createElement)(
            o.a,
            { frameOnly: !0 },
            Object(b.e)(u, 'bottom')
          ),
          R({ id: 'Base' }, 'Base'),
          Object(a.createElement)(o.a, null, c.b),
          R({ id: 'With-Header' }, 'With Header'),
          Object(a.createElement)(o.a, null, Object(b.e)(c.c, 'header')),
          R({ id: 'With-Footer' }, 'With Footer'),
          Object(a.createElement)(o.a, null, Object(b.e)(c.c, 'footer')),
          R(
            { id: 'Scrolling-region-with-max-height' },
            'Scrolling region with max-height'
          ),
          Object(a.createElement)(o.a, null, Object(b.e)(c.c, 'scrolling')),
          R({ id: 'Widths' }, 'Widths'),
          z({ id: 'Small' }, 'Small'),
          Object(a.createElement)(o.a, null, Object(b.e)(c.c, 'width-small')),
          z({ id: 'Medium' }, 'Medium'),
          Object(a.createElement)(o.a, null, Object(b.e)(c.c, 'width-medium')),
          z({ id: 'Large' }, 'Large'),
          Object(a.createElement)(o.a, null, Object(b.e)(c.c, 'width-large')),
          z({ id: 'Full-Width' }, 'Full Width'),
          Object(a.createElement)(
            o.a,
            null,
            Object(b.e)(c.c, 'width-full-width')
          ),
          R({ id: 'Nubbins' }, 'Nubbins'),
          z({ id: 'Left' }, 'Left'),
          Object(a.createElement)(
            r.a,
            null,
            Object(a.createElement)(
              i.a,
              null,
              Object(a.createElement)('strong', null, 'Left'),
              Object(a.createElement)(o.a, null, Object(b.e)(u, 'left'))
            ),
            Object(a.createElement)(
              i.a,
              null,
              Object(a.createElement)('strong', null, 'Left Top'),
              Object(a.createElement)(o.a, null, Object(b.e)(u, 'left-top'))
            ),
            Object(a.createElement)(
              i.a,
              null,
              Object(a.createElement)('strong', null, 'Left Bottom'),
              Object(a.createElement)(o.a, null, Object(b.e)(u, 'left-bottom'))
            ),
            Object(a.createElement)(
              i.a,
              null,
              Object(a.createElement)('strong', null, 'Top'),
              Object(a.createElement)(o.a, null, Object(b.e)(u, 'top'))
            ),
            Object(a.createElement)(
              i.a,
              null,
              Object(a.createElement)('strong', null, 'Top Left'),
              Object(a.createElement)(o.a, null, Object(b.e)(u, 'top-left'))
            ),
            Object(a.createElement)(
              i.a,
              null,
              Object(a.createElement)('strong', null, 'Top Right'),
              Object(a.createElement)(o.a, null, Object(b.e)(u, 'top-right'))
            ),
            Object(a.createElement)(
              i.a,
              null,
              Object(a.createElement)('strong', null, 'Right'),
              Object(a.createElement)(o.a, null, Object(b.e)(u, 'right'))
            ),
            Object(a.createElement)(
              i.a,
              null,
              Object(a.createElement)('strong', null, 'Right Top'),
              Object(a.createElement)(o.a, null, Object(b.e)(u, 'right-top'))
            ),
            Object(a.createElement)(
              i.a,
              null,
              Object(a.createElement)('strong', null, 'Right Bottom'),
              Object(a.createElement)(o.a, null, Object(b.e)(u, 'right-bottom'))
            ),
            Object(a.createElement)(
              i.a,
              null,
              Object(a.createElement)('strong', null, 'Bottom'),
              Object(a.createElement)(o.a, null, Object(b.e)(u, 'bottom'))
            ),
            Object(a.createElement)(
              i.a,
              null,
              Object(a.createElement)('strong', null, 'Bottom Left'),
              Object(a.createElement)(o.a, null, Object(b.e)(u, 'bottom-left'))
            ),
            Object(a.createElement)(
              i.a,
              null,
              Object(a.createElement)('strong', null, 'Bottom Right'),
              Object(a.createElement)(o.a, null, Object(b.e)(u, 'bottom-right'))
            )
          ),
          R({ id: 'Feedback-States' }, 'Feedback States'),
          z({ id: 'Error' }, 'Error'),
          Object(a.createElement)(o.a, null, p.c),
          J({ id: 'With-Footer-2' }, 'With Footer'),
          Object(a.createElement)(o.a, null, Object(b.e)(p.d, 'with-footer')),
          z({ id: 'Warning' }, 'Warning'),
          Object(a.createElement)(o.a, null, E),
          J({ id: 'With-Footer-3' }, 'With Footer'),
          Object(a.createElement)(o.a, null, Object(b.e)(_, 'with-footer')),
          R({ id: 'Examples' }, 'Examples'),
          z({ id: 'Walkthrough' }, 'Walkthrough'),
          Object(a.createElement)(o.a, null, j),
          J({ id: 'Micro-Setup' }, 'Micro Setup'),
          Object(a.createElement)(o.a, null, Object(b.e)(O, 'micro-setup')),
          J({ id: 'Micro-Setup-Alternate' }, 'Micro Setup - Alternate'),
          Object(a.createElement)(
            o.a,
            null,
            Object(b.e)(O, 'micro-setup-alternate')
          ),
          J({ id: 'Micro-Setup-In-Page' }, 'Micro Setup - In Page'),
          Object(a.createElement)(
            o.a,
            null,
            Object(b.e)(O, 'micro-setup-in-page')
          ),
          J({ id: 'Micro-Setup-Inline-Form' }, 'Micro Setup - Inline Form'),
          Object(a.createElement)(
            o.a,
            null,
            Object(b.e)(O, 'micro-setup-inline-form')
          ),
          J({ id: 'Action' }, 'Action'),
          Object(a.createElement)(o.a, null, Object(b.e)(O, 'action-popover')),
          J({ id: 'Action-With-Heading' }, 'Action - With Heading'),
          Object(a.createElement)(
            o.a,
            null,
            Object(b.e)(O, 'action-popover-heading')
          ),
          J({ id: 'Action-With-Link' }, 'Action - With Link'),
          Object(a.createElement)(
            o.a,
            null,
            Object(b.e)(O, 'action-popover-with-link')
          ),
          z({ id: 'Feature' }, 'Feature'),
          Object(a.createElement)(o.a, null, x),
          J({ id: 'With-icon-and-text' }, 'With icon and text'),
          Object(a.createElement)(o.a, null, Object(b.e)(w, 'icon-text')),
          J({ id: 'With-icon-header-and-text' }, 'With icon, header, and text'),
          Object(a.createElement)(
            o.a,
            null,
            Object(b.e)(w, 'icon-header-text')
          ),
          J(
            { id: 'With-icon-header-text-and-link' },
            'With icon, header, text and link'
          ),
          Object(a.createElement)(
            o.a,
            null,
            Object(b.e)(w, 'icon-header-text-link')
          ),
          J(
            { id: 'With-icon-header-text-and-footer' },
            'With icon, header, text and footer'
          ),
          Object(a.createElement)(
            o.a,
            null,
            Object(b.e)(w, 'icon-header-text-footer')
          ),
          z({ id: 'Record-Preview-Panel' }, 'Record Preview Panel'),
          Object(a.createElement)(o.a, null, B),
          z({ id: 'Prompt' }, 'Prompt'),
          Object(a.createElement)(o.a, null, I),
          Object(a.createElement)(q.b, {
            docsLink: '#Mobile',
            header: 'Mobile context changes',
            elementName: 'prompts'
          }),
          Object(a.createElement)(o.a, { frameOnly: !0 }, I),
          J({ id: 'Positioned-top-left' }, 'Positioned top left'),
          Object(a.createElement)(
            o.a,
            { demoStyles: 'height: 250px;' },
            Object(b.e)(C, 'top-left')
          ),
          J({ id: 'Positioned-top-center' }, 'Positioned top center'),
          Object(a.createElement)(
            o.a,
            { demoStyles: 'height: 250px;' },
            Object(b.e)(C, 'top-center')
          ),
          J({ id: 'Positioned-top-right' }, 'Positioned top right'),
          Object(a.createElement)(
            o.a,
            { demoStyles: 'height: 250px;' },
            Object(b.e)(C, 'top-right')
          ),
          J({ id: 'Positioned-bottom-right' }, 'Positioned bottom right'),
          Object(a.createElement)(
            o.a,
            { demoStyles: 'height: 250px;' },
            Object(b.e)(C, 'bottom-right')
          ),
          J({ id: 'Positioned-bottom-center' }, 'Positioned bottom center'),
          Object(a.createElement)(
            o.a,
            { demoStyles: 'height: 250px;' },
            Object(b.e)(C, 'bottom-center')
          ),
          J({ id: 'Positioned-bottom-left' }, 'Positioned bottom left'),
          Object(a.createElement)(
            o.a,
            { demoStyles: 'height: 250px;' },
            Object(b.e)(C, 'bottom-left')
          )
        );
      },
      G = function() {
        return Object(n.a)(Y());
      };
  }
});
