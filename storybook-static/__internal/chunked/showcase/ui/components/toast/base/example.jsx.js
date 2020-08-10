var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/toast/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var s, r, i = t[0], o = t[1], c = t[2], d = 0, u = [];
      d < i.length;
      d++
    )
      (r = i[d]),
        Object.prototype.hasOwnProperty.call(l, r) && l[r] && u.push(l[r][0]),
        (l[r] = 0);
    for (s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s]);
    for (m && m(t); u.length; ) u.shift()();
    return n.push.apply(n, c || []), a();
  }
  function a() {
    for (var e, t = 0; t < n.length; t++) {
      for (var a = n[t], s = !0, i = 1; i < a.length; i++) {
        var o = a[i];
        0 !== l[o] && (s = !1);
      }
      s && (n.splice(t--, 1), (e = r((r.s = a[0]))));
    }
    return e;
  }
  var s = {},
    l = {
      149: 0,
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
    if (s[t]) return s[t].exports;
    var a = (s[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
  }
  (r.m = e),
    (r.c = s),
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
        for (var s in e)
          r.d(
            a,
            s,
            function(t) {
              return e[t];
            }.bind(null, s)
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
  var i = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    o = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var c = 0; c < i.length; c++) t(i[c]);
  var m = o;
  return n.push([196, 0]), a();
})({
  0: function(e, t) {
    e.exports = React;
  },
  196: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'Toast', function() {
        return d;
      }),
      a.d(t, 'states', function() {
        return u;
      }),
      a.d(t, 'examples', function() {
        return p;
      });
    var s = a(0),
      l = a.n(s),
      n = a(1),
      r = a.n(n),
      i = a(4),
      o = a(9),
      c = a(2),
      m = a.n(c),
      d = function(e) {
        var t = e.containerClassName,
          a = e.className,
          s = e.type,
          n = e.children;
        return l.a.createElement(
          'div',
          { className: m()('slds-notify_container', t) },
          l.a.createElement(
            'div',
            {
              className: m()(
                'slds-notify slds-notify_toast',
                a,
                s && 'slds-theme_' + s
              ),
              role: 'status'
            },
            l.a.createElement('span', { className: 'slds-assistive-text' }, s),
            n,
            l.a.createElement(
              'div',
              { className: 'slds-notify__close' },
              l.a.createElement(i.b, {
                className: 'slds-button_icon-inverse',
                iconClassName: 'slds-button__icon_large',
                symbol: 'close',
                assistiveText: 'Close',
                title: 'Close'
              })
            )
          )
        );
      };
    (d.propTypes = {
      containerClassName: r.a.string,
      className: r.a.string,
      type: r.a.oneOf(['info', 'success', 'warning', 'error']),
      children: r.a.node
    }),
      (d.defaultProps = { type: 'info' }),
      (t.default = l.a.createElement(
        'div',
        { className: 'demo-only', style: { height: '4rem' } },
        l.a.createElement(
          d,
          { type: 'info', containerClassName: 'slds-is-relative' },
          l.a.createElement(o.UtilityIcon, {
            containerClassName:
              'slds-m-right_small slds-no-flex slds-align-top',
            className: 'slds-icon_small',
            assistiveText: !1,
            symbol: 'info'
          }),
          l.a.createElement(
            'div',
            { className: 'slds-notify__content' },
            l.a.createElement(
              'h2',
              { className: 'slds-text-heading_small' },
              '26 potential duplicate leads were found.',
              ' ',
              l.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'Select Leads to Merge'
              )
            )
          )
        )
      ));
    var u = [
        {
          id: 'success',
          label: 'Success',
          element: l.a.createElement(
            'div',
            { className: 'demo-only', style: { height: '4rem' } },
            l.a.createElement(
              d,
              { type: 'success', containerClassName: 'slds-is-relative' },
              l.a.createElement(o.UtilityIcon, {
                containerClassName:
                  'slds-m-right_small slds-no-flex slds-align-top',
                className: 'slds-icon_small',
                assistiveText: !1,
                symbol: 'success'
              }),
              l.a.createElement(
                'div',
                { className: 'slds-notify__content' },
                l.a.createElement(
                  'h2',
                  { className: 'slds-text-heading_small ' },
                  'Account ',
                  l.a.createElement(
                    'a',
                    { href: 'javascript:void(0);' },
                    'ACME - 100'
                  ),
                  ' widgets was created.'
                )
              )
            )
          )
        },
        {
          id: 'warning',
          label: 'Warning',
          element: l.a.createElement(
            'div',
            { className: 'demo-only', style: { height: '4rem' } },
            l.a.createElement(
              d,
              { type: 'warning', containerClassName: 'slds-is-relative' },
              l.a.createElement(o.UtilityIcon, {
                containerClassName:
                  'slds-m-right_small slds-no-flex slds-align-top',
                className: 'slds-icon_small',
                assistiveText: !1,
                symbol: 'warning'
              }),
              l.a.createElement(
                'div',
                { className: 'slds-notify__content' },
                l.a.createElement(
                  'h2',
                  { className: 'slds-text-heading_small ' },
                  'Can’t share file “report-q3.pdf” with the',
                  ' ',
                  l.a.createElement(
                    'a',
                    { href: 'javascript:void(0);' },
                    'selected users'
                  ),
                  '.'
                )
              )
            )
          )
        },
        {
          id: 'error',
          label: 'Error',
          element: l.a.createElement(
            'div',
            { className: 'demo-only', style: { height: '4rem' } },
            l.a.createElement(
              d,
              { type: 'error', containerClassName: 'slds-is-relative' },
              l.a.createElement(o.UtilityIcon, {
                containerClassName:
                  'slds-m-right_small slds-no-flex slds-align-top',
                className: 'slds-icon_small',
                assistiveText: !1,
                symbol: 'error'
              }),
              l.a.createElement(
                'div',
                { className: 'slds-notify__content' },
                l.a.createElement(
                  'h2',
                  { className: 'slds-text-heading_small ' },
                  'Can’t save lead “Sally Wong” because',
                  ' ',
                  l.a.createElement(
                    'a',
                    { href: 'javascript:void(0);' },
                    'another lead'
                  ),
                  ' has the same name.'
                )
              )
            )
          )
        },
        {
          id: 'error-with-details',
          label: 'Error With Details',
          element: l.a.createElement(
            'div',
            { className: 'demo-only', style: { height: '4rem' } },
            l.a.createElement(
              d,
              { type: 'error', containerClassName: 'slds-is-relative' },
              l.a.createElement(o.UtilityIcon, {
                containerClassName:
                  'slds-m-right_small slds-no-flex slds-align-top',
                className: 'slds-icon_small',
                assistiveText: !1,
                symbol: 'error'
              }),
              l.a.createElement(
                'div',
                { className: 'slds-notify__content' },
                l.a.createElement(
                  'h2',
                  { className: 'slds-text-heading_small' },
                  "You've encountered some errors when trying to save edits to Samuel Smith."
                ),
                l.a.createElement(
                  'p',
                  null,
                  "Here's some detail of",
                  ' ',
                  l.a.createElement(
                    'a',
                    { href: 'javascript:void(0);' },
                    'what happened'
                  ),
                  ', being very descriptive and transparent.'
                )
              )
            )
          )
        }
      ],
      p = [
        {
          id: 'small',
          label: 'Small Column',
          element: l.a.createElement(
            'div',
            {
              className: 'demo-only',
              style: { height: '4rem', width: '25rem' }
            },
            l.a.createElement(
              'div',
              { className: 'slds-region_narrow slds-is-relative' },
              l.a.createElement(
                d,
                { type: 'info', containerClassName: 'slds-is-absolute' },
                l.a.createElement(
                  'div',
                  { className: 'slds-notify__content' },
                  l.a.createElement(
                    'h2',
                    { className: 'slds-text-heading_small' },
                    '26 potential ',
                    l.a.createElement(
                      'a',
                      { href: 'javascript:void(0);' },
                      'duplicate leads'
                    ),
                    ' ',
                    'were found.'
                  )
                )
              )
            )
          )
        }
      ];
  }
});
