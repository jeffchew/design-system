var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/visual-picker/non-coverable-content/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var l, r, i = t[0], c = t[1], u = t[2], d = 0, m = [];
      d < i.length;
      d++
    )
      (r = i[d]),
        Object.prototype.hasOwnProperty.call(n, r) && n[r] && m.push(n[r][0]),
        (n[r] = 0);
    for (l in c) Object.prototype.hasOwnProperty.call(c, l) && (e[l] = c[l]);
    for (o && o(t); m.length; ) m.shift()();
    return s.push.apply(s, u || []), a();
  }
  function a() {
    for (var e, t = 0; t < s.length; t++) {
      for (var a = s[t], l = !0, i = 1; i < a.length; i++) {
        var c = a[i];
        0 !== n[c] && (l = !1);
      }
      l && (s.splice(t--, 1), (e = r((r.s = a[0]))));
    }
    return e;
  }
  var l = {},
    n = {
      159: 0,
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
  var i = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    c = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var u = 0; u < i.length; u++) t(i[u]);
  var o = c;
  return s.push([220, 0]), a();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  220: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'PackageOne', function() {
        return m;
      }),
      a.d(t, 'PackageTwo', function() {
        return p;
      }),
      a.d(t, 'PackageThree', function() {
        return f;
      }),
      a.d(t, 'VisualPickerMediaObject', function() {
        return h;
      }),
      a.d(t, 'states', function() {
        return g;
      });
    var l = a(0),
      n = a.n(l),
      s = a(2),
      r = a.n(s),
      i = a(6),
      c = a(28),
      u = a(5),
      o = a(50),
      d = a(9),
      m = [
        n.a.createElement(
          'span',
          { className: 'slds-text-heading_small', key: i.c.uniqueId() },
          'Lightning Professional'
        ),
        n.a.createElement(
          'span',
          { className: 'slds-text-title', key: i.c.uniqueId() },
          'Complete service CRM for teams of any size'
        )
      ],
      p = [
        n.a.createElement(
          'span',
          { className: 'slds-text-heading_small', key: i.c.uniqueId() },
          'Lightning Enterprise'
        ),
        n.a.createElement(
          'span',
          { className: 'slds-text-title', key: i.c.uniqueId() },
          'Everything you need to take support to the next level'
        )
      ],
      f = [
        n.a.createElement(
          'span',
          { className: 'slds-text-heading_small', key: i.c.uniqueId() },
          'Lightning Unlimited'
        ),
        n.a.createElement(
          'span',
          { className: 'slds-text-title', key: i.c.uniqueId() },
          'Complete support with enterprise-grade customization'
        )
      ],
      h = function(e) {
        return n.a.createElement(
          'a',
          {
            href: 'javascript:void(0);',
            className: r()(
              'slds-box slds-box_link slds-box_x-small slds-media',
              e.className
            )
          },
          n.a.createElement(
            'div',
            {
              className:
                'slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center slds-m-left_xx-small'
            },
            n.a.createElement(d.UtilityIcon, {
              className: 'slds-icon-text-default',
              symbol: 'knowledge_base'
            })
          ),
          n.a.createElement(
            'div',
            {
              className: 'slds-media__body slds-border_left slds-p-around_small'
            },
            e.children
          )
        );
      };
    t.default = n.a.createElement(
      c.Fieldset,
      null,
      n.a.createElement(c.Legend, null, 'Select a plan'),
      n.a.createElement(
        u.c,
        null,
        n.a.createElement(
          o.VisualPicker,
          { type: 'radio', size: 'medium', label: m },
          n.a.createElement(
            'span',
            null,
            n.a.createElement(
              'span',
              { className: 'slds-text-heading_large' },
              '$30'
            ),
            n.a.createElement(
              'span',
              { className: 'slds-text-title' },
              'USD/user/month *'
            )
          )
        ),
        n.a.createElement(
          o.VisualPicker,
          { type: 'radio', size: 'medium', label: p },
          n.a.createElement(
            'span',
            null,
            n.a.createElement(
              'span',
              { className: 'slds-text-heading_large' },
              '$150'
            ),
            n.a.createElement(
              'span',
              { className: 'slds-text-title' },
              'USD/user/month *'
            )
          )
        ),
        n.a.createElement(
          o.VisualPicker,
          { type: 'radio', size: 'medium', label: f },
          n.a.createElement(
            'span',
            null,
            n.a.createElement(
              'span',
              { className: 'slds-text-heading_large' },
              '$300'
            ),
            n.a.createElement(
              'span',
              { className: 'slds-text-title' },
              'USD/user/month *'
            )
          )
        )
      )
    );
    var g = [
      {
        id: 'disabled',
        label: 'Disabled option',
        element: n.a.createElement(
          c.Fieldset,
          null,
          n.a.createElement(c.Legend, null, 'Select a plan'),
          n.a.createElement(
            u.c,
            null,
            n.a.createElement(
              o.VisualPicker,
              { type: 'radio', size: 'medium', label: m },
              n.a.createElement(
                'span',
                null,
                n.a.createElement(
                  'span',
                  { className: 'slds-text-heading_large' },
                  '$30'
                ),
                n.a.createElement(
                  'span',
                  { className: 'slds-text-title' },
                  'USD/user/month *'
                )
              )
            ),
            n.a.createElement(
              o.VisualPicker,
              { type: 'radio', size: 'medium', label: p },
              n.a.createElement(
                'span',
                null,
                n.a.createElement(
                  'span',
                  { className: 'slds-text-heading_large' },
                  '$150'
                ),
                n.a.createElement(
                  'span',
                  { className: 'slds-text-title' },
                  'USD/user/month *'
                )
              )
            ),
            n.a.createElement(
              o.VisualPicker,
              { type: 'radio', size: 'medium', disabled: !0, label: f },
              n.a.createElement(
                'span',
                null,
                n.a.createElement(
                  'span',
                  { className: 'slds-text-heading_large' },
                  '$300'
                ),
                n.a.createElement(
                  'span',
                  { className: 'slds-text-title' },
                  'USD/user/month *'
                )
              )
            )
          )
        )
      }
    ];
  }
});
