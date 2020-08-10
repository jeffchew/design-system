var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/popovers/panels/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var l, r, d = t[0], c = t[1], o = t[2], i = 0, p = [];
      i < d.length;
      i++
    )
      (r = d[i]),
        Object.prototype.hasOwnProperty.call(s, r) && s[r] && p.push(s[r][0]),
        (s[r] = 0);
    for (l in c) Object.prototype.hasOwnProperty.call(c, l) && (e[l] = c[l]);
    for (m && m(t); p.length; ) p.shift()();
    return n.push.apply(n, o || []), a();
  }
  function a() {
    for (var e, t = 0; t < n.length; t++) {
      for (var a = n[t], l = !0, d = 1; d < a.length; d++) {
        var c = a[d];
        0 !== s[c] && (l = !1);
      }
      l && (n.splice(t--, 1), (e = r((r.s = a[0]))));
    }
    return e;
  }
  var l = {},
    s = {
      120: 0,
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
    n = [];
  function r(t) {
    if (l[t]) return l[t].exports;
    var a = (l[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
  }
  (r.m = e),
    (r.c = l),
    (r.d = function(e, t, a) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (r.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (r.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var l in e)
          r.d(
            a,
            l,
            function(t) {
              return e[t];
            }.bind(null, l)
          );
      return a;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(t, 'a', t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = '/assets/scripts/bundle/');
  var d = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    c = d.push.bind(d);
  (d.push = t), (d = d.slice());
  for (var o = 0; o < d.length; o++) t(d[o]);
  var m = c;
  return n.push([190, 0]), a();
})({
  0: function(e, t) {
    e.exports = React;
  },
  190: function(e, t, a) {
    'use strict';
    a.r(t);
    var l = a(0),
      s = a.n(l),
      n = a(8),
      r = a(48),
      d = a(4),
      c = s.a.createElement(
        'span',
        { className: 'slds-icon_container slds-icon-standard-opportunity' },
        s.a.createElement(n.a, {
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
      o = s.a.createElement(
        'span',
        { className: 'slds-icon_container slds-icon-standard-case' },
        s.a.createElement(n.a, {
          className: 'slds-icon slds-icon_small',
          sprite: 'standard',
          symbol: 'case'
        }),
        s.a.createElement('span', { className: 'slds-assistive-text' }, 'Cases')
      ),
      m = function() {
        return s.a.createElement(
          'dd',
          { className: 'slds-m-top_x-small slds-text-align_right' },
          s.a.createElement(
            'a',
            { href: 'javascript:void(0);', title: 'View all Opportunities' },
            'View All'
          )
        );
      };
    t.default = s.a.createElement(
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
            s.a.createElement(n.a, {
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
                  { className: 'slds-truncate', title: '3500 Deer Creek Rd.' },
                  '3500 Deer Creek Rd.'
                ),
                s.a.createElement(
                  'p',
                  { className: 'slds-truncate', title: 'Palo Alto, CA 94304' },
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
              r.a,
              { figureLeft: c, flavor: 'center' },
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
                className: 'slds-list_horizontal slds-wrap slds-text-body_small'
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
              { className: 'slds-truncate', title: 'Tesla - Anypoint Studios' },
              s.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'Tesla - Anypoint Studios'
              )
            ),
            s.a.createElement(
              'dl',
              {
                className: 'slds-list_horizontal slds-wrap slds-text-body_small'
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
          s.a.createElement(m, null)
        ),
        s.a.createElement(
          'dl',
          { className: 'slds-popover__body-list' },
          s.a.createElement(
            'dt',
            { className: 'slds-m-bottom_small' },
            s.a.createElement(
              r.a,
              { figureLeft: o, flavor: 'center' },
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
              { className: 'slds-truncate', title: 'Tesla - Anypoint Studios' },
              s.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'Tesla - Anypoint Studios'
              )
            ),
            s.a.createElement(
              'dl',
              {
                className: 'slds-list_horizontal slds-wrap slds-text-body_small'
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
          s.a.createElement(m, null)
        )
      )
    );
  }
});
