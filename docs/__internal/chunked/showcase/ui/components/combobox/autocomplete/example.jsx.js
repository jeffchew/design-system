var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/combobox/autocomplete/example.jsx.js'
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
    return n.push.apply(n, r || []), i();
  }
  function i() {
    for (var e, t = 0; t < n.length; t++) {
      for (var i = n[t], s = !0, a = 1; a < i.length; a++) {
        var c = i[a];
        0 !== o[c] && (s = !1);
      }
      s && (n.splice(t--, 1), (e = l((l.s = i[0]))));
    }
    return e;
  }
  var s = {},
    o = {
      43: 0,
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
  function l(t) {
    if (s[t]) return s[t].exports;
    var i = (s[t] = { i: t, l: !1, exports: {} });
    return e[t].call(i.exports, i, i.exports, l), (i.l = !0), i.exports;
  }
  (l.m = e),
    (l.c = s),
    (l.d = function(e, t, i) {
      l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
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
      var i = Object.create(null);
      if (
        (l.r(i),
        Object.defineProperty(i, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var s in e)
          l.d(
            i,
            s,
            function(t) {
              return e[t];
            }.bind(null, s)
          );
      return i;
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
  return n.push([162, 0]), i();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  162: function(e, t, i) {
    'use strict';
    i.r(t),
      i.d(t, 'states', function() {
        return m;
      }),
      i.d(t, 'examples', function() {
        return b;
      });
    var s = i(0),
      o = i.n(s),
      n = i(4),
      l = i(19),
      a = i(20),
      c = i(49),
      r = i(9),
      u = i(22),
      d = i(6),
      p = i(25);
    t.default = o.a.createElement(l.b, {
      id: d.c.uniqueId('combobox-id-'),
      'aria-controls': 'listbox-id-9',
      autocomplete: !0,
      inputIconPosition: 'right',
      rightInputIcon: o.a.createElement(r.UtilityIcon, {
        symbol: 'search',
        className: 'slds-icon slds-icon_x-small slds-icon-text-default',
        containerClassName: 'slds-input__icon slds-input__icon_right',
        assistiveText: !1,
        title: !1
      }),
      results: o.a.createElement(a.e, {
        id: 'listbox-id-9',
        snapshot: p.j,
        type: 'plain',
        count: 3
      }),
      resultsType: 'listbox',
      hasInteractions: !0
    });
    var m = [
        {
          id: 'focused-open',
          label: 'Focused - Open',
          element: o.a.createElement(l.b, {
            id: d.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-10',
            autocomplete: !0,
            inputIconPosition: 'right',
            rightInputIcon: o.a.createElement(r.UtilityIcon, {
              symbol: 'search',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: o.a.createElement(a.e, {
              id: 'listbox-id-10',
              snapshot: p.j,
              type: 'plain',
              count: 3
            }),
            resultsType: 'listbox',
            isOpen: !0,
            hasFocus: !0
          })
        },
        {
          id: 'lookup-focused-open',
          label: 'Lookup - Focused - Open',
          element: o.a.createElement(l.b, {
            id: d.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-15',
            autocomplete: !0,
            inputIconPosition: 'right',
            rightInputIcon: o.a.createElement(r.UtilityIcon, {
              symbol: 'search',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: o.a.createElement(a.e, {
              id: 'listbox-id-15',
              snapshot: p.a,
              type: 'entity',
              count: 2
            }),
            resultsType: 'listbox',
            isOpen: !0,
            hasFocus: !0
          })
        },
        {
          id: 'typeahead',
          label: 'Typeahead',
          element: o.a.createElement(l.b, {
            id: d.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-11',
            autocomplete: !0,
            inputIconPosition: 'right',
            rightInputIcon: o.a.createElement(r.UtilityIcon, {
              symbol: 'search',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            value: 'opp',
            results: o.a.createElement(a.e, {
              id: 'listbox-id-11',
              snapshot: p.o,
              term: 'opp',
              type: 'plain',
              count: 4
            }),
            resultsType: 'listbox',
            isOpen: !0,
            hasFocus: !0
          })
        },
        {
          id: 'lookup-typeahead',
          label: 'Lookup - Typeahead',
          element: o.a.createElement(l.b, {
            id: d.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-16',
            autocomplete: !0,
            inputIconPosition: 'right',
            rightInputIcon: o.a.createElement(r.UtilityIcon, {
              symbol: 'search',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            value: 'salesforce',
            results: o.a.createElement(a.e, {
              id: 'listbox-id-16',
              snapshot: p.c,
              term: 'salesforce',
              type: 'entity',
              count: 4
            }),
            resultsType: 'listbox',
            'aria-activedescendant': 'option0',
            isOpen: !0,
            hasFocus: !0
          })
        },
        {
          id: 'highlighting-an-option',
          label: 'Highlighting an option',
          element: o.a.createElement(l.b, {
            id: d.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-12',
            autocomplete: !0,
            inputIconPosition: 'right',
            rightInputIcon: o.a.createElement(r.UtilityIcon, {
              symbol: 'search',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: o.a.createElement(a.e, {
              id: 'listbox-id-12',
              snapshot: p.k,
              type: 'plain',
              count: 3
            }),
            resultsType: 'listbox',
            'aria-activedescendant': 'option1',
            isOpen: !0,
            hasFocus: !0
          })
        },
        {
          id: 'lookup-highlighting-an-option',
          label: 'Lookup - Highlighting an option',
          element: o.a.createElement(l.b, {
            id: d.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-17',
            autocomplete: !0,
            inputIconPosition: 'right',
            rightInputIcon: o.a.createElement(r.UtilityIcon, {
              symbol: 'search',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: o.a.createElement(a.e, {
              id: 'listbox-id-17',
              snapshot: p.b,
              type: 'entity',
              count: 2
            }),
            resultsType: 'listbox',
            'aria-activedescendant': 'option1',
            isOpen: !0,
            hasFocus: !0
          })
        },
        {
          id: 'selected-an-option',
          label: 'Selected an option',
          element: o.a.createElement(l.b, {
            id: d.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-unique-id-03',
            autocomplete: !0,
            inputIconPosition: 'right',
            rightInputIcon: o.a.createElement(n.b, {
              className: 'slds-input__icon slds-input__icon_right',
              symbol: 'clear',
              title: 'Clear the text input',
              assistiveText: 'Clear the text input'
            }),
            results: o.a.createElement(a.e, {
              id: 'listbox-unique-id-03',
              snapshot: p.j,
              type: 'entity',
              count: 3
            }),
            resultsType: 'listbox',
            value: 'GenePoint',
            hasSelection: !0,
            readonly: !0
          })
        },
        {
          id: 'lookup-selected-an-option',
          label: 'Lookup - Selected an option',
          element: o.a.createElement(l.b, {
            id: d.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-18',
            inputIconPosition: 'left-right',
            leftInputIcon: o.a.createElement(u.StandardIcon, {
              symbol: 'account',
              className: 'slds-icon_small',
              containerClassName: 'slds-combobox__input-entity-icon',
              assistiveText: 'Account',
              title: 'Account'
            }),
            rightInputIcon: o.a.createElement(n.b, {
              className: 'slds-input__icon slds-input__icon_right',
              symbol: 'close',
              title: 'Remove selected option',
              assistiveText: 'Remove selected option'
            }),
            results: o.a.createElement(a.e, {
              id: 'listbox-id-18',
              snapshot: p.a,
              type: 'entity',
              count: 2
            }),
            resultsType: 'listbox',
            hasSelection: !0,
            value: 'Salesforce.com, Inc.',
            readonly: !0
          })
        },
        {
          id: 'selected-multiple-options',
          label: 'Selected multiple options',
          element: o.a.createElement(l.b, {
            id: d.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-13',
            autocomplete: !0,
            inputIconPosition: 'right',
            rightInputIcon: o.a.createElement(r.UtilityIcon, {
              symbol: 'search',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: o.a.createElement(a.e, {
              id: 'listbox-id-13',
              snapshot: p.j,
              type: 'entity',
              count: 3
            }),
            resultsType: 'listbox',
            hasSelection: !0,
            listboxOfSelections: o.a.createElement(c.a, {
              snapshot: p.n,
              count: 2
            })
          })
        },
        {
          id: 'lookup-multiple-options',
          label: 'Lookup - Selected multiple options',
          element: o.a.createElement(l.b, {
            id: d.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-19',
            autocomplete: !0,
            inputIconPosition: 'right',
            rightInputIcon: o.a.createElement(r.UtilityIcon, {
              symbol: 'search',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: o.a.createElement(a.e, {
              id: 'listbox-id-19',
              snapshot: p.a,
              type: 'entity',
              count: 2
            }),
            resultsType: 'listbox',
            hasSelection: !0,
            listboxOfSelections: o.a.createElement(c.a, {
              snapshot: p.d,
              count: 2
            })
          })
        }
      ],
      b = [
        {
          id: 'lookup',
          label: 'Lookup',
          element: o.a.createElement(l.b, {
            id: d.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-14',
            autocomplete: !0,
            inputIconPosition: 'right',
            rightInputIcon: o.a.createElement(r.UtilityIcon, {
              symbol: 'search',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: o.a.createElement(a.e, {
              id: 'listbox-id-14',
              snapshot: p.a,
              type: 'entity',
              count: 2
            }),
            resultsType: 'listbox',
            hasInteractions: !0
          })
        }
      ];
  }
});
