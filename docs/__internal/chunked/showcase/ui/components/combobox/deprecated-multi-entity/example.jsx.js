var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/combobox/deprecated-multi-entity/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var a, o, r = t[0], i = t[1], s = t[2], d = 0, p = [];
      d < r.length;
      d++
    )
      (o = r[d]),
        Object.prototype.hasOwnProperty.call(c, o) && c[o] && p.push(c[o][0]),
        (c[o] = 0);
    for (a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
    for (u && u(t); p.length; ) p.shift()();
    return l.push.apply(l, s || []), n();
  }
  function n() {
    for (var e, t = 0; t < l.length; t++) {
      for (var n = l[t], a = !0, r = 1; r < n.length; r++) {
        var i = n[r];
        0 !== c[i] && (a = !1);
      }
      a && (l.splice(t--, 1), (e = o((o.s = n[0]))));
    }
    return e;
  }
  var a = {},
    c = {
      46: 0,
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
    l = [];
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
  var r = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    i = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var s = 0; s < r.length; s++) t(r[s]);
  var u = i;
  return l.push([177, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  177: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'states', function() {
        return s;
      });
    var a = n(0),
      c = n.n(a),
      l = n(22),
      o = n(12),
      r = n(18),
      i = function(e) {
        return c.a.createElement(
          o.c,
          {
            listboxClassName: 'slds-dropdown slds-dropdown_fluid',
            vertical: !0
          },
          c.a.createElement(
            o.d,
            null,
            c.a.createElement(o.b, {
              id: 'listbox-option-unique-id-01',
              entityTitle: 'Acme',
              entityMeta: !0,
              focused: e.focused
            })
          ),
          c.a.createElement(
            o.d,
            null,
            c.a.createElement(o.b, {
              id: 'listbox-option-unique-id-02',
              entityTitle: 'Salesforce.com, Inc.',
              entityMeta: !0
            })
          )
        );
      };
    t.default = c.a.createElement(
      'div',
      { className: 'demo-only', style: { height: '10rem' } },
      c.a.createElement(o.a, {
        inputIcon: 'right',
        inputIconRightSymbol: 'search',
        objectSwitcherInline: !0,
        autocomplete: !0,
        listbox: c.a.createElement(i, null),
        objectSwitcher: !0
      })
    );
    var s = [
      {
        id: 'deprecated-focused',
        label: 'Deprecated - Focused',
        element: c.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '10rem' } },
          c.a.createElement(o.a, {
            containerClassName: 'slds-has-input-focus',
            inputIcon: 'right',
            inputIconRightSymbol: 'search',
            objectSwitcherInline: !0,
            autocomplete: !0,
            isOpen: !0,
            listbox: c.a.createElement(i, null),
            objectSwitcher: !0
          })
        ),
        script:
          "\n      document.getElementById('combobox-unique-id').focus()\n    "
      },
      {
        id: 'deprecated-open-item-focused',
        label: 'Deprecated - Open - Item Focused',
        element: c.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '10rem' } },
          c.a.createElement(o.a, {
            inputIcon: 'right',
            inputIconRightSymbol: 'search',
            objectSwitcherInline: !0,
            autocomplete: !0,
            isOpen: !0,
            listbox: c.a.createElement(i, { focused: !0 }),
            objectSwitcher: !0,
            'aria-activedescendant': 'listbox-option-unique-id-01'
          })
        )
      },
      {
        id: 'deprecated-options-selected',
        label: 'Deprecated - Option(s) Selected',
        element: c.a.createElement(
          o.a,
          {
            inputIcon: 'right',
            inputIconRightSymbol: 'search',
            objectSwitcherInline: !0,
            autocomplete: !0,
            listbox: c.a.createElement(i, null),
            objectSwitcher: !0
          },
          c.a.createElement(
            r.b,
            { className: 'slds-p-top_xxx-small' },
            c.a.createElement(
              r.c,
              null,
              c.a.createElement(
                r.a,
                { label: 'Acme', tabIndex: '0' },
                c.a.createElement(l.StandardIcon, {
                  containerClassName: 'slds-pill__icon_container',
                  title: 'Account',
                  assistiveText: 'Account'
                })
              )
            ),
            c.a.createElement(
              r.c,
              null,
              c.a.createElement(
                r.a,
                { label: 'Salesforce.com, Inc.' },
                c.a.createElement(l.StandardIcon, {
                  containerClassName: 'slds-pill__icon_container',
                  symbol: 'opportunity',
                  title: 'Opportunity',
                  assistiveText: 'Opportunity'
                })
              )
            )
          )
        )
      },
      {
        id: 'deprecated-focused-options-selected',
        label: 'Deprecated - Focused - Option(s) Selected',
        element: c.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '10rem' } },
          c.a.createElement(
            o.a,
            {
              isOpen: !0,
              containerClassName: 'slds-has-input-focus',
              inputIcon: 'right',
              inputIconRightSymbol: 'search',
              objectSwitcherInline: !0,
              autocomplete: !0,
              listbox: c.a.createElement(i, null),
              objectSwitcher: !0
            },
            c.a.createElement(
              r.b,
              { className: 'slds-p-top_xxx-small' },
              c.a.createElement(
                r.c,
                null,
                c.a.createElement(
                  r.a,
                  { label: 'Acme', tabIndex: '0' },
                  c.a.createElement(l.StandardIcon, {
                    containerClassName: 'slds-pill__icon_container',
                    title: 'Account',
                    assistiveText: 'Account'
                  })
                )
              ),
              c.a.createElement(
                r.c,
                null,
                c.a.createElement(
                  r.a,
                  { label: 'Salesforce.com, Inc.' },
                  c.a.createElement(l.StandardIcon, {
                    containerClassName: 'slds-pill__icon_container',
                    symbol: 'opportunity',
                    title: 'Opportunity',
                    assistiveText: 'Opportunity'
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
