var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/combobox/grouped/example.jsx.js'
] = (function(o) {
  function t(t) {
    for (
      var i, a, c = t[0], l = t[1], r = t[2], u = 0, b = [];
      u < c.length;
      u++
    )
      (a = c[u]),
        Object.prototype.hasOwnProperty.call(s, a) && s[a] && b.push(s[a][0]),
        (s[a] = 0);
    for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (o[i] = l[i]);
    for (d && d(t); b.length; ) b.shift()();
    return n.push.apply(n, r || []), e();
  }
  function e() {
    for (var o, t = 0; t < n.length; t++) {
      for (var e = n[t], i = !0, c = 1; c < e.length; c++) {
        var l = e[c];
        0 !== s[l] && (i = !1);
      }
      i && (n.splice(t--, 1), (o = a((a.s = e[0]))));
    }
    return o;
  }
  var i = {},
    s = {
      49: 0,
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
    n = [];
  function a(t) {
    if (i[t]) return i[t].exports;
    var e = (i[t] = { i: t, l: !1, exports: {} });
    return o[t].call(e.exports, e, e.exports, a), (e.l = !0), e.exports;
  }
  (a.m = o),
    (a.c = i),
    (a.d = function(o, t, e) {
      a.o(o, t) || Object.defineProperty(o, t, { enumerable: !0, get: e });
    }),
    (a.r = function(o) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(o, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(o, '__esModule', { value: !0 });
    }),
    (a.t = function(o, t) {
      if ((1 & t && (o = a(o)), 8 & t)) return o;
      if (4 & t && 'object' == typeof o && o && o.__esModule) return o;
      var e = Object.create(null);
      if (
        (a.r(e),
        Object.defineProperty(e, 'default', { enumerable: !0, value: o }),
        2 & t && 'string' != typeof o)
      )
        for (var i in o)
          a.d(
            e,
            i,
            function(t) {
              return o[t];
            }.bind(null, i)
          );
      return e;
    }),
    (a.n = function(o) {
      var t =
        o && o.__esModule
          ? function() {
              return o.default;
            }
          : function() {
              return o;
            };
      return a.d(t, 'a', t), t;
    }),
    (a.o = function(o, t) {
      return Object.prototype.hasOwnProperty.call(o, t);
    }),
    (a.p = '/assets/scripts/bundle/');
  var c = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    l = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var r = 0; r < c.length; r++) t(c[r]);
  var d = l;
  return n.push([127, 0]), e();
})({
  0: function(o, t) {
    o.exports = React;
  },
  127: function(o, t, e) {
    'use strict';
    e.r(t),
      e.d(t, 'Context', function() {
        return x;
      }),
      e.d(t, 'states', function() {
        return h;
      });
    var i = e(0),
      s = e.n(i),
      n = e(19),
      a = e(42),
      c = e(20),
      l = e(49),
      r = e(9),
      d = e(25),
      u = e(6),
      b = u.c.uniqueId('combobox-id-'),
      m = u.c.uniqueId('primary-combobox-id-'),
      p = u.c.uniqueId('listbox-id-'),
      x = function(o) {
        return s.a.createElement(
          'div',
          { style: { height: '240px' } },
          o.children
        );
      };
    t.default = s.a.createElement(n.a, {
      id: u.c.uniqueId('combobox-id-'),
      'aria-controls': 'listbox-id-20',
      comboboxID: 'primary-combobox-id-1',
      autocomplete: !0,
      results: s.a.createElement(c.e, {
        id: 'listbox-id-20',
        snapshot: d.a,
        type: 'entity',
        count: 4
      }),
      resultsType: 'listbox',
      addon: s.a.createElement(a.b, {
        id: u.c.uniqueId('combobox-id-'),
        value: 'Accounts',
        addonPosition: 'start',
        hasInteractions: !0,
        comboboxAriaControls: 'primary-combobox-id-1'
      }),
      addonPosition: 'start',
      comboboxPosition: 'end',
      inputIconPosition: 'right',
      rightInputIcon: s.a.createElement(r.UtilityIcon, {
        symbol: 'search',
        className: 'slds-icon slds-icon_x-small slds-icon-text-default',
        containerClassName: 'slds-input__icon slds-input__icon_right',
        assistiveText: !1,
        title: !1
      }),
      hasInteractions: !0
    });
    var h = [
      {
        id: 'focused-open',
        label: 'Focused - Open',
        element: s.a.createElement(n.a, {
          id: u.c.uniqueId('combobox-id-'),
          'aria-controls': 'listbox-id-21',
          comboboxID: 'primary-combobox-id-2',
          autocomplete: !0,
          results: s.a.createElement(c.e, {
            id: 'listbox-id-21',
            snapshot: d.a,
            type: 'entity',
            count: 4
          }),
          resultsType: 'listbox',
          isOpen: !0,
          hasFocus: !0,
          addon: s.a.createElement(a.b, {
            id: u.c.uniqueId('combobox-id-'),
            value: 'Accounts',
            addonPosition: 'start',
            comboboxAriaControls: 'primary-combobox-id-2'
          }),
          addonPosition: 'start',
          comboboxPosition: 'end',
          inputIconPosition: 'right',
          rightInputIcon: s.a.createElement(r.UtilityIcon, {
            symbol: 'search',
            className: 'slds-icon slds-icon_x-small slds-icon-text-default',
            containerClassName: 'slds-input__icon slds-input__icon_right',
            assistiveText: !1,
            title: !1
          })
        })
      },
      {
        id: 'typeahead',
        label: 'Typeahead',
        element: s.a.createElement(n.a, {
          id: u.c.uniqueId('combobox-id-'),
          'aria-activedescendant': 'option0',
          'aria-controls': 'listbox-id-22',
          comboboxID: 'primary-combobox-id-2',
          autocomplete: !0,
          results: s.a.createElement(c.e, {
            id: 'listbox-id-22',
            snapshot: d.c,
            term: 'salesforce',
            type: 'entity',
            count: 4
          }),
          resultsType: 'listbox',
          value: 'salesforce',
          isOpen: !0,
          hasFocus: !0,
          addon: s.a.createElement(a.b, {
            id: u.c.uniqueId('combobox-id-'),
            value: 'Accounts',
            addonPosition: 'start',
            comboboxAriaControls: 'primary-combobox-id-2'
          }),
          addonPosition: 'start',
          comboboxPosition: 'end',
          inputIconPosition: 'right',
          rightInputIcon: s.a.createElement(r.UtilityIcon, {
            symbol: 'search',
            className: 'slds-icon slds-icon_x-small slds-icon-text-default',
            containerClassName: 'slds-input__icon slds-input__icon_right',
            assistiveText: !1,
            title: !1
          })
        })
      },
      {
        id: 'typeahead-loading',
        label: 'Typeahead - Loading',
        element: s.a.createElement(n.a, {
          id: u.c.uniqueId('combobox-id-'),
          'aria-activedescendant': 'option0',
          'aria-controls': 'listbox-id-23',
          comboboxID: 'primary-combobox-id-2',
          autocomplete: !0,
          results: s.a.createElement(c.e, {
            id: 'listbox-id-23',
            snapshot: d.c,
            term: 'salesforce',
            type: 'entity',
            count: 4
          }),
          resultsType: 'listbox',
          value: 'salesforce',
          isOpen: !0,
          showCloseButton: !0,
          isLoading: !0,
          hasFocus: !0,
          addon: s.a.createElement(a.b, {
            id: u.c.uniqueId('combobox-id-'),
            value: 'Accounts',
            addonPosition: 'start',
            comboboxAriaControls: 'primary-combobox-id-2'
          }),
          addonPosition: 'start',
          comboboxPosition: 'end',
          inputIconPosition: 'group-right'
        })
      },
      {
        id: 'selected-options',
        label: 'Selected Options',
        element: s.a.createElement(n.a, {
          id: u.c.uniqueId('combobox-id-'),
          'aria-controls': 'listbox-id-24',
          comboboxID: 'primary-combobox-id-3',
          autocomplete: !0,
          results: s.a.createElement(c.e, {
            id: 'listbox-id-24',
            snapshot: d.a,
            type: 'entity',
            count: 4
          }),
          resultsType: 'listbox',
          hasFocus: !0,
          addon: s.a.createElement(a.b, {
            id: u.c.uniqueId('combobox-id-'),
            value: 'Accounts',
            addonPosition: 'start',
            comboboxAriaControls: 'primary-combobox-id-3'
          }),
          addonPosition: 'start',
          comboboxPosition: 'end',
          inputIconPosition: 'right',
          rightInputIcon: s.a.createElement(r.UtilityIcon, {
            symbol: 'search',
            className: 'slds-icon slds-icon_x-small slds-icon-text-default',
            containerClassName: 'slds-input__icon slds-input__icon_right',
            assistiveText: !1,
            title: !1
          }),
          hasSelection: !0,
          listboxOfSelections: s.a.createElement(l.a, {
            snapshot: d.d,
            count: 2
          })
        })
      },
      {
        id: 'selected-options-open',
        label: 'Selected Options - Open',
        element: s.a.createElement(n.a, {
          id: u.c.uniqueId('combobox-id-'),
          'aria-controls': 'listbox-id-25',
          comboboxID: 'primary-combobox-id-4',
          autocomplete: !0,
          results: s.a.createElement(c.e, {
            id: 'listbox-id-25',
            snapshot: d.a,
            type: 'entity',
            count: 4
          }),
          resultsType: 'listbox',
          isOpen: !0,
          hasFocus: !0,
          addon: s.a.createElement(a.b, {
            id: u.c.uniqueId('combobox-id-'),
            value: 'Accounts',
            addonPosition: 'start',
            comboboxAriaControls: 'primary-combobox-id-4'
          }),
          addonPosition: 'start',
          comboboxPosition: 'end',
          inputIconPosition: 'right',
          rightInputIcon: s.a.createElement(r.UtilityIcon, {
            symbol: 'search',
            className: 'slds-icon slds-icon_x-small slds-icon-text-default',
            containerClassName: 'slds-input__icon slds-input__icon_right',
            assistiveText: !1,
            title: !1
          }),
          hasSelection: !0,
          listboxOfSelections: s.a.createElement(l.a, {
            snapshot: d.d,
            count: 2
          })
        })
      },
      {
        id: 'overflow-collapsed',
        label: 'Selections in container - Overflowed - Collapsed',
        element: s.a.createElement(n.a, {
          id: u.c.uniqueId('combobox-id-'),
          'aria-controls': 'listbox-id-26',
          comboboxID: 'primary-combobox-id-5',
          autocomplete: !0,
          results: s.a.createElement(c.e, {
            id: 'listbox-id-26',
            snapshot: d.a,
            type: 'entity',
            count: 4
          }),
          resultsType: 'listbox',
          addon: s.a.createElement(a.b, {
            id: u.c.uniqueId('combobox-id-'),
            value: 'Accounts',
            addonPosition: 'start',
            comboboxAriaControls: 'primary-combobox-id-5'
          }),
          addonPosition: 'start',
          comboboxPosition: 'end',
          inputIconPosition: 'right',
          rightInputIcon: s.a.createElement(r.UtilityIcon, {
            symbol: 'search',
            className: 'slds-icon slds-icon_x-small slds-icon-text-default',
            containerClassName: 'slds-input__icon slds-input__icon_right',
            assistiveText: !1,
            title: !1
          }),
          hasSelection: !0,
          listboxOfSelections: s.a.createElement(l.a, {
            snapshot: d.d,
            count: 8
          })
        })
      },
      {
        id: 'overflow-expanded',
        label: 'Selections in container - Overflowed - Expanded',
        element: s.a.createElement(n.a, {
          id: u.c.uniqueId('combobox-id-'),
          'aria-controls': 'listbox-id-27',
          comboboxID: 'primary-combobox-id-6',
          autocomplete: !0,
          results: s.a.createElement(c.e, {
            id: 'listbox-id-27',
            snapshot: d.a,
            type: 'entity',
            count: 4
          }),
          resultsType: 'listbox',
          hasFocus: !0,
          addon: s.a.createElement(a.b, {
            id: u.c.uniqueId('combobox-id-'),
            value: 'Accounts',
            addonPosition: 'start',
            comboboxAriaControls: 'primary-combobox-id-6'
          }),
          addonPosition: 'start',
          comboboxPosition: 'end',
          inputIconPosition: 'right',
          rightInputIcon: s.a.createElement(r.UtilityIcon, {
            symbol: 'search',
            className: 'slds-icon slds-icon_x-small slds-icon-text-default',
            containerClassName: 'slds-input__icon slds-input__icon_right',
            assistiveText: !1,
            title: !1
          }),
          hasSelection: !0,
          listboxOfSelections: s.a.createElement(l.a, {
            snapshot: d.d,
            count: 8,
            isExpanded: !0
          })
        })
      },
      {
        id: 'non-grouped-overflow-collapsed',
        label: 'Selections - Collapsed',
        element: s.a.createElement(n.b, {
          id: b,
          'aria-controls': p,
          comboboxID: m,
          autocomplete: !0,
          results: s.a.createElement(c.e, {
            id: p,
            snapshot: d.a,
            type: 'entity',
            count: 4
          }),
          resultsType: 'listbox',
          hasSelection: !0,
          inputIconPosition: 'right',
          rightInputIcon: s.a.createElement(r.UtilityIcon, {
            symbol: 'search',
            className: 'slds-icon slds-icon_x-small slds-icon-text-default',
            containerClassName: 'slds-input__icon slds-input__icon_right',
            assistiveText: !1,
            title: !1
          }),
          listboxOfSelections: s.a.createElement(l.a, {
            snapshot: d.d,
            count: 8
          })
        })
      },
      {
        id: 'non-grouped-overflow-expanded',
        label: 'Selections - Expanded',
        element: s.a.createElement(n.b, {
          id: b,
          'aria-controls': p,
          comboboxID: m,
          autocomplete: !0,
          results: s.a.createElement(c.e, {
            id: p,
            snapshot: d.a,
            type: 'entity',
            count: 4
          }),
          resultsType: 'listbox',
          hasSelection: !0,
          inputIconPosition: 'right',
          rightInputIcon: s.a.createElement(r.UtilityIcon, {
            symbol: 'search',
            className: 'slds-icon slds-icon_x-small slds-icon-text-default',
            containerClassName: 'slds-input__icon slds-input__icon_right',
            assistiveText: !1,
            title: !1
          }),
          listboxOfSelections: s.a.createElement(l.a, {
            snapshot: d.d,
            count: 8,
            isExpanded: !0
          })
        })
      },
      {
        id: 'scoping-results-focused',
        label: 'Scoping results - Focused',
        element: s.a.createElement(n.a, {
          id: u.c.uniqueId('combobox-id-'),
          'aria-controls': 'listbox-id-28',
          comboboxID: 'primary-combobox-id-7',
          autocomplete: !0,
          results: s.a.createElement(c.e, {
            id: 'listbox-id-28',
            snapshot: d.a,
            type: 'entity',
            count: 2
          }),
          addon: s.a.createElement(a.b, {
            id: u.c.uniqueId('combobox-id-'),
            value: 'Accounts',
            addonPosition: 'start',
            isOpen: !0,
            hasFocus: !0,
            comboboxAriaControls: 'primary-combobox-id-7'
          }),
          resultsType: 'listbox',
          addonPosition: 'start',
          comboboxPosition: 'end',
          inputIconPosition: 'right',
          rightInputIcon: s.a.createElement(r.UtilityIcon, {
            symbol: 'search',
            className: 'slds-icon slds-icon_x-small slds-icon-text-default',
            containerClassName: 'slds-input__icon slds-input__icon_right',
            assistiveText: !1,
            title: !1
          })
        })
      },
      {
        id: 'scoping-results-icon',
        label: 'Scoping results - Icon variant',
        element: s.a.createElement(n.a, {
          id: u.c.uniqueId('combobox-id-'),
          'aria-controls': 'listbox-id-29',
          comboboxID: 'primary-combobox-id-9',
          autocomplete: !0,
          results: s.a.createElement(c.e, {
            id: 'listbox-id-29',
            snapshot: d.a,
            type: 'entity',
            count: 2
          }),
          resultsType: 'listbox',
          addon: s.a.createElement(a.a, {
            id: u.c.uniqueId('combobox-id-'),
            value: 'Apex',
            filteredSymbol: 'apex',
            addonPosition: 'start',
            comboboxAriaControls: 'primary-combobox-id-9'
          }),
          addonPosition: 'start',
          comboboxPosition: 'end',
          inputIconPosition: 'right',
          rightInputIcon: s.a.createElement(r.UtilityIcon, {
            symbol: 'search',
            className: 'slds-icon slds-icon_x-small slds-icon-text-default',
            containerClassName: 'slds-input__icon slds-input__icon_right',
            assistiveText: !1,
            title: !1
          })
        })
      },
      {
        id: 'scoping-results-icon-focused',
        label: 'Scoping results - Icon variant - Focused',
        element: s.a.createElement(n.a, {
          id: u.c.uniqueId('combobox-id-'),
          'aria-controls': 'listbox-id-30',
          comboboxID: 'primary-combobox-id-8',
          autocomplete: !0,
          results: s.a.createElement(c.e, {
            id: 'listbox-id-30',
            snapshot: d.a,
            type: 'entity',
            count: 2
          }),
          resultsType: 'listbox',
          addon: s.a.createElement(a.a, {
            id: u.c.uniqueId('combobox-id-'),
            value: 'Apex',
            filteredSymbol: 'apex',
            addonPosition: 'start',
            isOpen: !0,
            hasFocus: !0,
            comboboxAriaControls: 'primary-combobox-id-8'
          }),
          addonPosition: 'start',
          comboboxPosition: 'end',
          inputIconPosition: 'right',
          rightInputIcon: s.a.createElement(r.UtilityIcon, {
            symbol: 'search',
            className: 'slds-icon slds-icon_x-small slds-icon-text-default',
            containerClassName: 'slds-input__icon slds-input__icon_right',
            assistiveText: !1,
            title: !1
          })
        })
      }
    ];
  },
  16: function(o, t) {
    o.exports = ReactDOM;
  }
});
