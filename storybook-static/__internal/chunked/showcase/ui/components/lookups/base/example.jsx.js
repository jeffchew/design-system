var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/lookups/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var s, l, a = t[0], c = t[1], r = t[2], d = 0, p = [];
      d < a.length;
      d++
    )
      (l = a[d]),
        Object.prototype.hasOwnProperty.call(o, l) && o[l] && p.push(o[l][0]),
        (o[l] = 0);
    for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (e[s] = c[s]);
    for (u && u(t); p.length; ) p.shift()();
    return i.push.apply(i, r || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], s = !0, a = 1; a < n.length; a++) {
        var c = n[a];
        0 !== o[c] && (s = !1);
      }
      s && (i.splice(t--, 1), (e = l((l.s = n[0]))));
    }
    return e;
  }
  var s = {},
    o = {
      101: 0,
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
    i = [];
  function l(t) {
    if (s[t]) return s[t].exports;
    var n = (s[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, l), (n.l = !0), n.exports;
  }
  (l.m = e),
    (l.c = s),
    (l.d = function(e, t, n) {
      l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (l.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (l.t = function(e, t) {
      if ((1 & t && (e = l(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (l.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var s in e)
          l.d(
            n,
            s,
            function(t) {
              return e[t];
            }.bind(null, s)
          );
      return n;
    }),
    (l.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return l.d(t, 'a', t), t;
    }),
    (l.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (l.p = '/assets/scripts/bundle/');
  var a = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    c = a.push.bind(a);
  (a.push = t), (a = a.slice());
  for (var r = 0; r < a.length; r++) t(a[r]);
  var u = c;
  return i.push([148, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  148: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'Context', function() {
        return d;
      }),
      n.d(t, 'states', function() {
        return p;
      });
    var s = n(0),
      o = n.n(s),
      i = n(19),
      l = n(20),
      a = n(4),
      c = n(9),
      r = n(22),
      u = n(25),
      d = function(e) {
        return o.a.createElement(
          'div',
          { style: { height: '15rem' } },
          e.children
        );
      };
    t.default = o.a.createElement(i.b, {
      id: 'combobox-id-1',
      'aria-controls': 'listbox-id-1',
      autocomplete: !0,
      inputIconPosition: 'right',
      rightInputIcon: o.a.createElement(c.UtilityIcon, {
        symbol: 'search',
        className: 'slds-icon slds-icon_x-small slds-icon-text-default',
        containerClassName: 'slds-input__icon slds-input__icon_right',
        assistiveText: !1,
        title: !1
      }),
      results: o.a.createElement(l.e, {
        id: 'listbox-id-1',
        snapshot: u.a,
        type: 'entity',
        count: 3
      }),
      resultsType: 'listbox',
      hasInteractions: !0
    });
    var p = [
      {
        id: 'focused',
        label: 'Focused',
        element: o.a.createElement(i.b, {
          id: 'combobox-id-2',
          'aria-controls': 'listbox-id-2',
          autocomplete: !0,
          inputIconPosition: 'right',
          rightInputIcon: o.a.createElement(c.UtilityIcon, {
            symbol: 'search',
            className: 'slds-icon slds-icon_x-small slds-icon-text-default',
            containerClassName: 'slds-input__icon slds-input__icon_right',
            assistiveText: !1,
            title: !1
          }),
          results: o.a.createElement(l.e, {
            id: 'listbox-id-2',
            snapshot: u.a,
            type: 'entity',
            count: 3
          }),
          resultsType: 'listbox',
          isOpen: !0,
          hasFocus: !0
        })
      },
      {
        id: 'open-item-focused',
        label: 'Open - Item Focused',
        element: o.a.createElement(i.b, {
          id: 'combobox-id-3',
          'aria-controls': 'listbox-id-3',
          autocomplete: !0,
          inputIconPosition: 'right',
          rightInputIcon: o.a.createElement(c.UtilityIcon, {
            symbol: 'search',
            className: 'slds-icon slds-icon_x-small slds-icon-text-default',
            containerClassName: 'slds-input__icon slds-input__icon_right',
            assistiveText: !1,
            title: !1
          }),
          results: o.a.createElement(l.e, {
            id: 'listbox-id-3',
            snapshot: u.b,
            type: 'entity',
            count: 3
          }),
          resultsType: 'listbox',
          'aria-activedescendant': 'option1',
          isOpen: !0,
          hasFocus: !0
        })
      },
      {
        id: 'displaying-options-based-on-input',
        label: 'Displaying options based on user input',
        element: o.a.createElement(i.b, {
          id: 'combobox-id-4',
          'aria-controls': 'listbox-id-4',
          autocomplete: !0,
          inputIconPosition: 'right',
          rightInputIcon: o.a.createElement(c.UtilityIcon, {
            symbol: 'search',
            className: 'slds-icon slds-icon_x-small slds-icon-text-default',
            containerClassName: 'slds-input__icon slds-input__icon_right',
            assistiveText: !1,
            title: !1
          }),
          value: 'salesforce',
          results: o.a.createElement(l.e, {
            id: 'listbox-id-4',
            snapshot: u.c,
            term: 'salesforce',
            type: 'entity',
            count: 4
          }),
          resultsType: 'listbox',
          'aria-activedescendant': 'option1',
          isOpen: !0,
          hasFocus: !0
        })
      },
      {
        id: 'closed-option-selected',
        label: 'Option Selected',
        element: o.a.createElement(i.b, {
          id: 'combobox-id-5',
          'aria-controls': 'listbox-id-5',
          inputIconPosition: 'left-right',
          leftInputIcon: o.a.createElement(r.StandardIcon, {
            symbol: 'account',
            className: 'slds-icon_small',
            containerClassName: 'slds-combobox__input-entity-icon',
            assistiveText: 'Account',
            title: 'Account'
          }),
          rightInputIcon: o.a.createElement(a.b, {
            className: 'slds-input__icon slds-input__icon_right',
            symbol: 'close',
            title: 'Remove selected option',
            assistiveText: 'Remove selected option'
          }),
          results: o.a.createElement(l.e, {
            id: 'listbox-id-5',
            snapshot: u.a,
            type: 'entity',
            count: 2
          }),
          resultsType: 'listbox',
          hasSelection: !0,
          value: 'Salesforce.com, Inc.',
          readonly: !0
        })
      }
    ];
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  }
});
