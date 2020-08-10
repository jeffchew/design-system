var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/button-groups/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, o, c = t[0], s = t[1], u = t[2], d = 0, b = [];
      d < c.length;
      d++
    )
      (o = c[d]),
        Object.prototype.hasOwnProperty.call(l, o) && l[o] && b.push(l[o][0]),
        (l[o] = 0);
    for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
    for (i && i(t); b.length; ) b.shift()();
    return a.push.apply(a, u || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, c = 1; c < n.length; c++) {
        var s = n[c];
        0 !== l[s] && (r = !1);
      }
      r && (a.splice(t--, 1), (e = o((o.s = n[0]))));
    }
    return e;
  }
  var r = {},
    l = { 11: 0 },
    a = [];
  function o(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.m = e),
    (o.c = r),
    (o.d = function(e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
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
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          o.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
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
  var c = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    s = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var u = 0; u < c.length; u++) t(c[u]);
  var i = s;
  return a.push([258, 0]), n();
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
  258: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getElement', function() {
        return S;
      }),
      n.d(t, 'getContents', function() {
        return _;
      });
    var r = n(0),
      l = n.n(r),
      a = n(4),
      o = n(1),
      c = (n(23), n(15), n(2)),
      s = n(51),
      u = n(38),
      i = n(3),
      d = n.n(i),
      b = n(13),
      p = n(7),
      m = function(e) {
        return l.a.createElement(
          'ul',
          { className: 'slds-button-group-row' },
          e.children
        );
      };
    m.propTypes = { children: d.a.node };
    var h = function(e) {
      return l.a.createElement(
        'li',
        { className: 'slds-button-group-item' },
        e.children
      );
    };
    h.propTypes = { children: d.a.node };
    var f = l.a.createElement(
        m,
        null,
        l.a.createElement(
          h,
          null,
          l.a.createElement(b.a, { isNeutral: !0 }, 'Refresh')
        ),
        l.a.createElement(
          h,
          null,
          l.a.createElement(b.a, { isNeutral: !0 }, 'Edit')
        ),
        l.a.createElement(
          h,
          null,
          l.a.createElement(b.a, { isBrand: !0 }, 'Save')
        )
      ),
      O = [
        {
          id: 'buttons-icons',
          label: 'Row of button icons',
          element: l.a.createElement(
            m,
            null,
            l.a.createElement(
              h,
              null,
              l.a.createElement(
                'div',
                {
                  className:
                    'slds-dropdown-trigger slds-dropdown-trigger_clicked'
                },
                l.a.createElement(p.b, {
                  hasDropdown: !0,
                  theme: 'neutral',
                  assistiveText: 'More options',
                  title: 'More Options'
                })
              )
            ),
            l.a.createElement(
              h,
              null,
              l.a.createElement(
                'div',
                {
                  className:
                    'slds-dropdown-trigger slds-dropdown-trigger_clicked'
                },
                l.a.createElement(p.b, {
                  hasDropdown: !0,
                  theme: 'neutral',
                  symbol: 'table',
                  assistiveText: 'More options',
                  title: 'More Options'
                })
              )
            ),
            l.a.createElement(
              h,
              null,
              l.a.createElement(p.b, { symbol: 'edit', theme: 'neutral' })
            ),
            l.a.createElement(
              h,
              null,
              l.a.createElement(p.b, { symbol: 'refresh', theme: 'neutral' })
            ),
            l.a.createElement(
              h,
              null,
              l.a.createElement(
                s.a,
                null,
                l.a.createElement(p.b, { symbol: 'chart', theme: 'neutral' }),
                l.a.createElement(p.b, { symbol: 'filter', theme: 'neutral' })
              )
            )
          )
        }
      ],
      v = a.c.a,
      E = a.c.code,
      j = a.c.h2,
      g = a.c.h3,
      w = a.c.h4,
      y = a.c.p,
      S = function() {
        return Object(r.createElement)(
          a.b,
          {},
          Object(r.createElement)(
            'div',
            { className: 'doc lead' },
            'Button groups are used to bunch together buttons with similar actions'
          ),
          Object(r.createElement)(
            o.a,
            { exampleOnly: !0 },
            Object(c.e)(s.d, 'with-overflow-open')
          ),
          j({ id: 'About-Button-Groups' }, 'About Button Groups'),
          y(
            {},
            'Buttons in a group are surrounded by a parent with the ',
            E({}, '.slds-button-group'),
            ' class, unless they are in a list (in which case they use ',
            E({}, '.slds-button-group-list'),
            '. If the last button is an icon, like the down triangle, use the ',
            E({}, '.slds-button_icon-border-filled'),
            ' class when accompanying a ',
            E({}, '.slds-button_neutral'),
            ' group.'
          ),
          y(
            {},
            'If the last button in a group needs to be wrapped in another element (for example, a drop-down trigger), add the ',
            E({}, '.slds-button_last'),
            ' class to the wrapper element to create proper spacing and borders.'
          ),
          g({ id: 'Accessibility' }, 'Accessibility'),
          y(
            {},
            'Unless you are using the list version, include the Aria role ',
            E({}, 'role="group"'),
            ' so that assistive technologies are alerted to the grouping.'
          ),
          j({ id: 'Base' }, 'Base'),
          Object(r.createElement)(o.a, null, s.b),
          g({ id: 'States' }, 'States'),
          w({ id: 'Disabled' }, 'Disabled'),
          Object(r.createElement)(o.a, null, Object(c.e)(s.d, 'disabled')),
          w({ id: 'With-Overflow-Menu' }, 'With Overflow Menu'),
          Object(r.createElement)(o.a, null, Object(c.e)(s.d, 'with-overflow')),
          w({ id: 'With-Overflow-Menu-Open' }, 'With Overflow Menu – Open'),
          Object(r.createElement)(
            o.a,
            null,
            Object(c.e)(s.d, 'with-overflow-open')
          ),
          w(
            { id: 'With-Overflow-Menu-Disabled' },
            'With Overflow Menu – Disabled'
          ),
          Object(r.createElement)(
            o.a,
            null,
            Object(c.e)(s.d, 'with-overflow-disabled')
          ),
          g({ id: 'Examples' }, 'Examples'),
          w({ id: 'Inverse' }, 'Inverse'),
          Object(r.createElement)(o.a, null, Object(c.e)(s.c, 'inverse')),
          w({ id: 'Inverse-Disabled' }, 'Inverse - Disabled'),
          Object(r.createElement)(
            o.a,
            null,
            Object(c.e)(s.c, 'inverse-disabled')
          ),
          w(
            { id: 'Inverse-With-Overflow-Menu' },
            'Inverse - With Overflow Menu'
          ),
          Object(r.createElement)(
            o.a,
            null,
            Object(c.e)(s.c, 'inverse-overflow')
          ),
          w(
            { id: 'Inverse-With-Disabled-Overflow-Menu' },
            'Inverse - With Disabled Overflow Menu'
          ),
          Object(r.createElement)(
            o.a,
            null,
            Object(c.e)(s.c, 'inverse-overflow-disabled')
          ),
          g({ id: 'Button-Icon-Group' }, 'Button Icon Group'),
          Object(r.createElement)(
            o.a,
            null,
            Object(c.e)(s.c, 'button-group-icon')
          ),
          w({ id: 'Disabled-2' }, 'Disabled'),
          Object(r.createElement)(
            o.a,
            null,
            Object(c.e)(s.c, 'button-group-icon-disabled')
          ),
          w({ id: 'Selected' }, 'Selected'),
          Object(r.createElement)(
            o.a,
            null,
            Object(c.e)(s.c, 'button-group-icon-selected')
          ),
          g({ id: 'Brand-Button' }, 'Brand Button'),
          w({ id: 'With-Overflow-Menu-2' }, 'With Overflow Menu'),
          Object(r.createElement)(
            o.a,
            null,
            Object(c.e)(s.c, 'brand-with-overflow')
          ),
          g({ id: 'With-Style-Encapsulation' }, 'With Style Encapsulation'),
          Object(r.createElement)(
            o.a,
            null,
            Object(c.e)(s.c, 'style-encapsulated-button-group')
          ),
          w({ id: 'FirstLast' }, 'First/Last'),
          Object(r.createElement)(
            o.a,
            null,
            Object(c.e)(s.c, 'style-encapsulated-button-group-2-button')
          ),
          w({ id: 'Button-Icon-Group-2' }, 'Button Icon Group'),
          Object(r.createElement)(
            o.a,
            null,
            Object(c.e)(s.c, 'style-encapsulated-button-icon-group')
          ),
          w(
            { id: 'Button-Icon-Group-FirstLast' },
            'Button Icon Group – First/Last'
          ),
          Object(r.createElement)(
            o.a,
            null,
            Object(c.e)(s.c, 'style-encapsulated-button-icon-group-2-button')
          ),
          j({ id: 'List' }, 'List'),
          Object(r.createElement)(o.a, null, u.c),
          g({ id: 'Examples-2' }, 'Examples'),
          y(
            {},
            'See the ',
            v({ href: '#Examples' }, 'Base examples'),
            ' for various use cases such as ',
            v({ href: '#Inverse' }, 'inverse'),
            '.'
          ),
          j({ id: 'Row' }, 'Row'),
          Object(r.createElement)(o.a, null, f),
          g({ id: 'Of-Button-Icons' }, 'Of Button Icons'),
          Object(r.createElement)(o.a, null, Object(c.e)(O, 'buttons-icons'))
        );
      },
      _ = function() {
        return Object(a.a)(S());
      };
  }
});
