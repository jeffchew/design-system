var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/combobox/deprecated-inline-listbox/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var a, o, i = t[0], r = t[1], s = t[2], d = 0, m = [];
      d < i.length;
      d++
    )
      (o = i[d]),
        Object.prototype.hasOwnProperty.call(l, o) && l[o] && m.push(l[o][0]),
        (l[o] = 0);
    for (a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    for (u && u(t); m.length; ) m.shift()();
    return c.push.apply(c, s || []), n();
  }
  function n() {
    for (var e, t = 0; t < c.length; t++) {
      for (var n = c[t], a = !0, i = 1; i < n.length; i++) {
        var r = n[i];
        0 !== l[r] && (a = !1);
      }
      a && (c.splice(t--, 1), (e = o((o.s = n[0]))));
    }
    return e;
  }
  var a = {},
    l = {
      45: 0,
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
    c = [];
  function o(t) {
    if (a[t]) return a[t].exports;
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.m = e),
    (o.c = a),
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
        for (var a in e)
          o.d(
            n,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
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
  var i = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    r = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var s = 0; s < i.length; s++) t(i[s]);
  var u = r;
  return c.push([171, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  171: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'states', function() {
        return s;
      });
    var a = n(0),
      l = n.n(a),
      c = n(22),
      o = n(18),
      i = n(12),
      r = function(e) {
        return l.a.createElement(
          i.c,
          {
            listboxClassName: 'slds-dropdown slds-dropdown_fluid',
            vertical: !0,
            id: 'listbox-unique-id'
          },
          l.a.createElement(
            i.d,
            null,
            l.a.createElement(i.b, {
              id: 'listbox-option-unique-id-01',
              entityTitle: 'Acme',
              entityMeta: !0,
              focused: e.focused
            })
          ),
          l.a.createElement(
            i.d,
            null,
            l.a.createElement(i.b, {
              id: 'listbox-option-unique-id-02',
              entityTitle: 'Salesforce.com, Inc.',
              entityMeta: !0
            })
          )
        );
      };
    t.default = l.a.createElement(
      'div',
      { className: 'demo-only', style: { height: '10rem' } },
      l.a.createElement(i.a, {
        inputIcon: 'right',
        inputIconRightSymbol: 'search',
        selectedOptionsInline: !0,
        autocomplete: !0,
        listbox: l.a.createElement(r, null)
      })
    );
    var s = [
      {
        id: 'deprecated-focused',
        label: 'Deprecated - Focused',
        element: l.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '10rem' } },
          l.a.createElement(i.a, {
            containerClassName: 'slds-has-input-focus',
            inputIcon: 'right',
            inputIconRightSymbol: 'search',
            selectedOptionsInline: !0,
            autocomplete: !0,
            isOpen: !0,
            listbox: l.a.createElement(r, null)
          })
        ),
        script:
          "\n      document.getElementById('combobox-unique-id').focus()\n    "
      },
      {
        id: 'deprecated-open-item-focused',
        label: 'Deprecated - Open - Item Focused',
        element: l.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '10rem' } },
          l.a.createElement(i.a, {
            inputIcon: 'right',
            inputIconRightSymbol: 'search',
            selectedOptionsInline: !0,
            autocomplete: !0,
            isOpen: !0,
            listbox: l.a.createElement(r, { focused: !0 }),
            'aria-activedescendant': 'listbox-option-unique-id-01'
          })
        )
      },
      {
        id: 'deprecated-closed-option-selected',
        label: 'Deprecated - Option Selected',
        element: l.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '10rem' } },
          l.a.createElement(i.a, {
            selectedOptionsInline: !0,
            autocomplete: !0,
            readonly: !0,
            inputIcon: 'both',
            inputIconLeftSprite: 'standard',
            inputIconLeftSymbol: 'account',
            inputButtonIcon: !0,
            inputIconRightSymbol: 'close',
            value: 'Salesforce.com, Inc.',
            listbox: l.a.createElement(r, null)
          })
        )
      },
      {
        id: 'deprecated-options-selected',
        label: 'Deprecated - Option(s) Selected',
        element: l.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '10rem' } },
          l.a.createElement(
            i.a,
            {
              inputIcon: 'right',
              inputIconRightSymbol: 'search',
              selectedOptionsInline: !0,
              autocomplete: !0,
              listbox: l.a.createElement(r, null)
            },
            l.a.createElement(
              o.b,
              null,
              l.a.createElement(
                o.c,
                null,
                l.a.createElement(
                  o.a,
                  { label: 'Acme', tabIndex: '0' },
                  l.a.createElement(c.StandardIcon, {
                    containerClassName: 'slds-pill__icon_container',
                    title: 'Account',
                    assistiveText: 'Account'
                  })
                )
              ),
              l.a.createElement(
                o.c,
                null,
                l.a.createElement(
                  o.a,
                  { label: 'Salesforce.com, Inc.' },
                  l.a.createElement(c.StandardIcon, {
                    containerClassName: 'slds-pill__icon_container',
                    title: 'Account',
                    assistiveText: 'Account'
                  })
                )
              )
            )
          )
        )
      },
      {
        id: 'deprecated-focused-options-selected',
        label: 'Deprecated - Focused - Option(s) Selected',
        element: l.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '10rem' } },
          l.a.createElement(
            i.a,
            {
              isOpen: !0,
              inputIcon: 'right',
              inputIconRightSymbol: 'search',
              containerClassName: 'slds-has-input-focus',
              selectedOptionsInline: !0,
              autocomplete: !0,
              listbox: l.a.createElement(r, null)
            },
            l.a.createElement(
              o.b,
              null,
              l.a.createElement(
                o.c,
                null,
                l.a.createElement(
                  o.a,
                  { label: 'Acme', tabIndex: '0' },
                  l.a.createElement(c.StandardIcon, {
                    containerClassName: 'slds-pill__icon_container',
                    title: 'Account',
                    assistiveText: 'Account'
                  })
                )
              ),
              l.a.createElement(
                o.c,
                null,
                l.a.createElement(
                  o.a,
                  { label: 'Salesforce.com, Inc.' },
                  l.a.createElement(c.StandardIcon, {
                    containerClassName: 'slds-pill__icon_container',
                    title: 'Account',
                    assistiveText: 'Account'
                  })
                )
              )
            )
          )
        ),
        script:
          "\n      document.getElementById('combobox-unique-id').focus()\n    "
      }
    ];
  }
});
