var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/combobox/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var i, o, a = t[0], c = t[1], r = t[2], u = 0, p = [];
      u < a.length;
      u++
    )
      (o = a[u]),
        Object.prototype.hasOwnProperty.call(s, o) && s[o] && p.push(s[o][0]),
        (s[o] = 0);
    for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]);
    for (d && d(t); p.length; ) p.shift()();
    return l.push.apply(l, r || []), n();
  }
  function n() {
    for (var e, t = 0; t < l.length; t++) {
      for (var n = l[t], i = !0, a = 1; a < n.length; a++) {
        var c = n[a];
        0 !== s[c] && (i = !1);
      }
      i && (l.splice(t--, 1), (e = o((o.s = n[0]))));
    }
    return e;
  }
  var i = {},
    s = {
      44: 0,
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
    if (i[t]) return i[t].exports;
    var n = (i[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.m = e),
    (o.c = i),
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
        for (var i in e)
          o.d(
            n,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
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
  var a = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    c = a.push.bind(a);
  (a.push = t), (a = a.slice());
  for (var r = 0; r < a.length; r++) t(a[r]);
  var d = c;
  return l.push([123, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  123: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'ListboxDropdown', function() {
        return b;
      }),
      n.d(t, 'states', function() {
        return h;
      });
    var i = n(0),
      s = n.n(i),
      l = n(19),
      o = n(20),
      a = n(49),
      c = n(12),
      r = n(18),
      d = n(9),
      u = n(22),
      p = n(6),
      m = n(25),
      b = function(e) {
        return s.a.createElement(
          c.c,
          {
            listboxClassName: 'slds-dropdown slds-dropdown_fluid',
            vertical: !0,
            id: 'listbox-unique-id'
          },
          s.a.createElement(
            c.d,
            null,
            s.a.createElement(c.b, {
              id: 'listbox-option-unique-id-01',
              entityTitle: 'Acme',
              entityMeta: !0,
              focused: e.focused
            })
          ),
          s.a.createElement(
            c.d,
            null,
            s.a.createElement(c.b, {
              id: 'listbox-option-unique-id-02',
              entityTitle: 'Salesforce.com, Inc.',
              entityMeta: !0
            })
          )
        );
      };
    t.default = s.a.createElement(l.b, {
      id: p.c.uniqueId('combobox-id-'),
      'aria-controls': 'listbox-id-1',
      inputIconPosition: 'right',
      rightInputIcon: s.a.createElement(d.UtilityIcon, {
        symbol: 'down',
        className: 'slds-icon slds-icon_x-small slds-icon-text-default',
        containerClassName: 'slds-input__icon slds-input__icon_right',
        assistiveText: !1,
        title: !1
      }),
      results: s.a.createElement(o.e, {
        id: 'listbox-id-1',
        snapshot: m.e,
        type: 'plain',
        count: 8,
        visualSelection: !0
      }),
      resultsType: 'listbox',
      hasInteractions: !0
    });
    var h = [
      {
        id: 'focused',
        label: 'Focused',
        element: s.a.createElement(l.b, {
          id: p.c.uniqueId('combobox-id-'),
          'aria-controls': 'listbox-id-4',
          readonly: !0,
          inputIconPosition: 'right',
          rightInputIcon: s.a.createElement(d.UtilityIcon, {
            symbol: 'down',
            className: 'slds-icon slds-icon_x-small slds-icon-text-default',
            containerClassName: 'slds-input__icon slds-input__icon_right',
            assistiveText: !1,
            title: !1
          }),
          results: s.a.createElement(o.e, {
            id: 'listbox-id-4',
            snapshot: m.f,
            type: 'plain',
            count: 8,
            visualSelection: !0
          }),
          resultsType: 'listbox',
          hasFocus: !0
        })
      },
      {
        id: 'focused-open',
        label: 'Focused - Opened',
        element: s.a.createElement(l.b, {
          id: p.c.uniqueId('combobox-id-'),
          'aria-controls': 'listbox-id-4',
          readonly: !0,
          inputIconPosition: 'right',
          rightInputIcon: s.a.createElement(d.UtilityIcon, {
            symbol: 'down',
            className: 'slds-icon slds-icon_x-small slds-icon-text-default',
            containerClassName: 'slds-input__icon slds-input__icon_right',
            assistiveText: !1,
            title: !1
          }),
          results: s.a.createElement(o.e, {
            id: 'listbox-id-4',
            snapshot: m.e,
            type: 'plain',
            count: 8,
            visualSelection: !0
          }),
          resultsType: 'listbox',
          isOpen: !0,
          hasFocus: !0
        })
      },
      {
        id: 'highlighting-an-option',
        label: 'Highlighting an option',
        element: s.a.createElement(l.b, {
          id: p.c.uniqueId('combobox-id-'),
          'aria-controls': 'listbox-id-4',
          readonly: !0,
          inputIconPosition: 'right',
          rightInputIcon: s.a.createElement(d.UtilityIcon, {
            symbol: 'down',
            className: 'slds-icon slds-icon_x-small slds-icon-text-default',
            containerClassName: 'slds-input__icon slds-input__icon_right',
            assistiveText: !1,
            title: !1
          }),
          results: s.a.createElement(o.e, {
            id: 'listbox-id-4',
            snapshot: m.f,
            type: 'plain',
            count: 8,
            visualSelection: !0
          }),
          resultsType: 'listbox',
          'aria-activedescendant': 'option1',
          isOpen: !0,
          hasFocus: !0
        })
      },
      {
        id: 'selecting-a-single-option',
        label: 'Selecting a single option',
        element: s.a.createElement(l.b, {
          id: p.c.uniqueId('combobox-id-'),
          'aria-controls': 'listbox-id-6',
          readonly: !0,
          value: 'Accounts',
          inputIconPosition: 'right',
          rightInputIcon: s.a.createElement(d.UtilityIcon, {
            symbol: 'down',
            className: 'slds-icon slds-icon_x-small slds-icon-text-default',
            containerClassName: 'slds-input__icon slds-input__icon_right',
            assistiveText: !1,
            title: !1
          }),
          results: s.a.createElement(o.e, {
            id: 'listbox-id-6',
            snapshot: m.i,
            type: 'plain',
            count: 8,
            visualSelection: !0
          }),
          resultsType: 'listbox',
          'aria-activedescendant': 'option1',
          isOpen: !0,
          hasFocus: !0
        })
      },
      {
        id: 'selected-an-option-closed',
        label: 'Selected an option - Closed',
        element: s.a.createElement(l.b, {
          id: p.c.uniqueId('combobox-id-'),
          'aria-controls': 'listbox-id-5',
          readonly: !0,
          value: 'Accounts',
          inputIconPosition: 'right',
          rightInputIcon: s.a.createElement(d.UtilityIcon, {
            symbol: 'down',
            className: 'slds-icon slds-icon_x-small slds-icon-text-default',
            containerClassName: 'slds-input__icon slds-input__icon_right',
            assistiveText: !1,
            title: !1
          }),
          results: s.a.createElement(o.e, {
            id: 'listbox-id-5',
            snapshot: m.i,
            type: 'plain',
            count: 8,
            visualSelection: !0
          }),
          resultsType: 'listbox'
        })
      },
      {
        id: 'selecting-multiple-options',
        label: 'Selecting multiple options',
        element: s.a.createElement(l.b, {
          id: p.c.uniqueId('combobox-id-'),
          'aria-controls': 'listbox-id-7',
          readonly: !0,
          value: '2 Options Selected',
          inputIconPosition: 'right',
          rightInputIcon: s.a.createElement(d.UtilityIcon, {
            symbol: 'down',
            className: 'slds-icon slds-icon_x-small slds-icon-text-default',
            containerClassName: 'slds-input__icon slds-input__icon_right',
            assistiveText: !1,
            title: !1
          }),
          results: s.a.createElement(o.e, {
            id: 'listbox-id-7',
            snapshot: m.g,
            type: 'plain',
            count: 8,
            visualSelection: !0
          }),
          resultsType: 'listbox',
          isOpen: !0,
          hasFocus: !0
        })
      },
      {
        id: 'selected-multiple-options-closed',
        label: 'Selected multiple options-closed',
        element: s.a.createElement(l.b, {
          id: p.c.uniqueId('combobox-id-'),
          'aria-controls': 'listbox-id-8',
          readonly: !0,
          value: '2 Options Selected',
          inputIconPosition: 'right',
          rightInputIcon: s.a.createElement(d.UtilityIcon, {
            symbol: 'down',
            className: 'slds-icon slds-icon_x-small slds-icon-text-default',
            containerClassName: 'slds-input__icon slds-input__icon_right',
            assistiveText: !1,
            title: !1
          }),
          results: s.a.createElement(o.e, {
            id: 'listbox-id-8',
            snapshot: m.g,
            type: 'plain',
            count: 8,
            visualSelection: !0
          }),
          resultsType: 'listbox',
          listboxOfSelections: s.a.createElement(a.a, {
            snapshot: m.h,
            count: 2
          })
        })
      },
      {
        id: 'loading-options',
        label: 'Loading more options',
        element: s.a.createElement(l.b, {
          id: p.c.uniqueId('combobox-id-'),
          'aria-controls': 'listbox-id-222',
          readonly: !0,
          value: 'Accounts',
          inputIconPosition: 'right',
          rightInputIcon: s.a.createElement(d.UtilityIcon, {
            symbol: 'down',
            className: 'slds-icon slds-icon_x-small slds-icon-text-default',
            containerClassName: 'slds-input__icon slds-input__icon_right',
            assistiveText: !1,
            title: !1
          }),
          results: s.a.createElement(o.e, {
            id: 'listbox-id-222',
            snapshot: m.e,
            type: 'plain',
            count: 3,
            visualSelection: !0,
            loading: !0
          }),
          resultsType: 'listbox',
          isOpen: !0,
          hasFocus: !0
        })
      },
      {
        id: 'grouped-options',
        label: 'Grouped options',
        element: s.a.createElement(l.b, {
          id: p.c.uniqueId('combobox-id-'),
          'aria-controls': 'listbox-id-3',
          readonly: !0,
          inputIconPosition: 'right',
          rightInputIcon: s.a.createElement(d.UtilityIcon, {
            symbol: 'down',
            className: 'slds-icon slds-icon_x-small slds-icon-text-default',
            containerClassName: 'slds-input__icon slds-input__icon_right',
            assistiveText: !1,
            title: !1
          }),
          results: s.a.createElement(
            o.d,
            {
              id: 'listbox-id-3',
              className: 'slds-dropdown slds-dropdown_fluid'
            },
            s.a.createElement(o.b, {
              'aria-label': 'Group One',
              snapshot: m.l,
              count: 3
            }),
            s.a.createElement(o.b, {
              'aria-label': 'Group Two',
              snapshot: m.m,
              count: 3
            })
          ),
          resultsType: 'listbox',
          isOpen: !0,
          hasFocus: !0
        })
      },
      {
        id: 'deprecated-closed',
        label: 'Deprecated - Closed',
        element: s.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '10rem' } },
          s.a.createElement(c.a, {
            autocomplete: !0,
            inputIcon: 'right',
            inputIconRightSymbol: 'search',
            listbox: s.a.createElement(b, null)
          })
        )
      },
      {
        id: 'deprecated-focused',
        label: 'Deprecated - Focused',
        element: s.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '10rem' } },
          s.a.createElement(c.a, {
            isOpen: !0,
            autocomplete: !0,
            inputIcon: 'right',
            inputIconRightSymbol: 'search',
            listbox: s.a.createElement(b, null)
          })
        )
      },
      {
        id: 'deprecated-open-item-focused',
        label: 'Deprecated - Open - Item Focused',
        element: s.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '10rem' } },
          s.a.createElement(c.a, {
            isOpen: !0,
            autocomplete: !0,
            inputIcon: 'right',
            inputIconRightSymbol: 'search',
            listbox: s.a.createElement(b, { focused: !0 }),
            'aria-activedescendant': 'listbox-option-unique-id-01'
          })
        )
      },
      {
        id: 'deprecated-closed-options-selected',
        label: 'Deprecated - Option(s) Selected',
        element: s.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '10rem' } },
          s.a.createElement(
            c.a,
            {
              inputIcon: 'right',
              inputIconRightSymbol: 'search',
              autocomplete: !0,
              listbox: s.a.createElement(b, null)
            },
            s.a.createElement(
              r.b,
              { className: 'slds-p-top_xxx-small' },
              s.a.createElement(
                r.c,
                null,
                s.a.createElement(
                  r.a,
                  { label: 'Acme', tabIndex: '0' },
                  s.a.createElement(u.StandardIcon, {
                    containerClassName: 'slds-pill__icon_container',
                    title: 'Account',
                    assistiveText: 'Account'
                  })
                )
              ),
              s.a.createElement(
                r.c,
                null,
                s.a.createElement(
                  r.a,
                  { label: 'Salesforce.com, Inc.' },
                  s.a.createElement(u.StandardIcon, {
                    containerClassName: 'slds-pill__icon_container',
                    title: 'Account',
                    assistiveText: 'Account'
                  })
                )
              )
            )
          )
        )
      }
    ];
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  }
});
