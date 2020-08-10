var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/combobox/docs.mdx.js'] = (function(
  e
) {
  function t(t) {
    for (
      var i, l, a = t[0], c = t[1], r = t[2], p = 0, u = [];
      p < a.length;
      p++
    )
      (l = a[p]),
        Object.prototype.hasOwnProperty.call(n, l) && n[l] && u.push(n[l][0]),
        (n[l] = 0);
    for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]);
    for (d && d(t); u.length; ) u.shift()();
    return s.push.apply(s, r || []), o();
  }
  function o() {
    for (var e, t = 0; t < s.length; t++) {
      for (var o = s[t], i = !0, a = 1; a < o.length; a++) {
        var c = o[a];
        0 !== n[c] && (i = !1);
      }
      i && (s.splice(t--, 1), (e = l((l.s = o[0]))));
    }
    return e;
  }
  var i = {},
    n = { 22: 0 },
    s = [];
  function l(t) {
    if (i[t]) return i[t].exports;
    var o = (i[t] = { i: t, l: !1, exports: {} });
    return e[t].call(o.exports, o, o.exports, l), (o.l = !0), o.exports;
  }
  (l.m = e),
    (l.c = i),
    (l.d = function(e, t, o) {
      l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
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
      var o = Object.create(null);
      if (
        (l.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var i in e)
          l.d(
            o,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
          );
      return o;
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
  var a = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    c = a.push.bind(a);
  (a.push = t), (a = a.slice());
  for (var r = 0; r < a.length; r++) t(a[r]);
  var d = c;
  return s.push([214, 0]), o();
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
  214: function(e, t, o) {
    'use strict';
    o.r(t),
      o.d(t, 'getElement', function() {
        return X;
      }),
      o.d(t, 'getContents', function() {
        return Z;
      });
    var i = o(0),
      n = o.n(i),
      s = o(4),
      l = o(1),
      a = o(23),
      c = o(15),
      r = (o(11), o(24)),
      d = o(49),
      p = o(25),
      u = o(56),
      m = o(7),
      h = o(12),
      b = o(32),
      x = o(21),
      g = o(29),
      y = o(2),
      E = o(27),
      f = function(e) {
        return n.a.createElement(
          x.c,
          {
            listboxClassName: 'slds-dropdown slds-dropdown_fluid',
            vertical: !0,
            id: 'listbox-unique-id'
          },
          n.a.createElement(
            x.d,
            null,
            n.a.createElement(x.b, {
              id: 'listbox-option-unique-id-01',
              entityTitle: 'Acme',
              entityMeta: !0,
              focused: e.focused
            })
          ),
          n.a.createElement(
            x.d,
            null,
            n.a.createElement(x.b, {
              id: 'listbox-option-unique-id-02',
              entityTitle: 'Salesforce.com, Inc.',
              entityMeta: !0
            })
          )
        );
      },
      _ = n.a.createElement(r.b, {
        id: y.c.uniqueId('combobox-id-'),
        'aria-controls': 'listbox-id-1',
        inputIconPosition: 'right',
        rightInputIcon: n.a.createElement(h.a, {
          symbol: 'down',
          className: 'slds-icon slds-icon_x-small slds-icon-text-default',
          containerClassName: 'slds-input__icon slds-input__icon_right',
          assistiveText: !1,
          title: !1
        }),
        results: n.a.createElement(p.e, {
          id: 'listbox-id-1',
          snapshot: E.g,
          type: 'plain',
          count: 8,
          visualSelection: !0
        }),
        resultsType: 'listbox',
        hasInteractions: !0
      }),
      O = [
        {
          id: 'focused',
          label: 'Focused',
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-4',
            readonly: !0,
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: n.a.createElement(p.e, {
              id: 'listbox-id-4',
              snapshot: E.h,
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
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-4',
            readonly: !0,
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: n.a.createElement(p.e, {
              id: 'listbox-id-4',
              snapshot: E.g,
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
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-4',
            readonly: !0,
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: n.a.createElement(p.e, {
              id: 'listbox-id-4',
              snapshot: E.h,
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
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-6',
            readonly: !0,
            value: 'Accounts',
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: n.a.createElement(p.e, {
              id: 'listbox-id-6',
              snapshot: E.k,
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
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-5',
            readonly: !0,
            value: 'Accounts',
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: n.a.createElement(p.e, {
              id: 'listbox-id-5',
              snapshot: E.k,
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
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-7',
            readonly: !0,
            value: '2 Options Selected',
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: n.a.createElement(p.e, {
              id: 'listbox-id-7',
              snapshot: E.i,
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
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-8',
            readonly: !0,
            value: '2 Options Selected',
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: n.a.createElement(p.e, {
              id: 'listbox-id-8',
              snapshot: E.i,
              type: 'plain',
              count: 8,
              visualSelection: !0
            }),
            resultsType: 'listbox',
            listboxOfSelections: n.a.createElement(u.a, {
              snapshot: E.j,
              count: 2
            })
          })
        },
        {
          id: 'loading-options',
          label: 'Loading more options',
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-222',
            readonly: !0,
            value: 'Accounts',
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: n.a.createElement(p.e, {
              id: 'listbox-id-222',
              snapshot: E.g,
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
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-3',
            readonly: !0,
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: n.a.createElement(
              p.c,
              {
                id: 'listbox-id-3',
                className: 'slds-dropdown slds-dropdown_fluid'
              },
              n.a.createElement(p.b, {
                'aria-label': 'Group One',
                snapshot: E.o,
                count: 3
              }),
              n.a.createElement(p.b, {
                'aria-label': 'Group Two',
                snapshot: E.p,
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
          element: n.a.createElement(
            'div',
            { className: 'demo-only', style: { height: '10rem' } },
            n.a.createElement(x.a, {
              autocomplete: !0,
              inputIcon: 'right',
              inputIconRightSymbol: 'search',
              listbox: n.a.createElement(f, null)
            })
          )
        },
        {
          id: 'deprecated-focused',
          label: 'Deprecated - Focused',
          element: n.a.createElement(
            'div',
            { className: 'demo-only', style: { height: '10rem' } },
            n.a.createElement(x.a, {
              isOpen: !0,
              autocomplete: !0,
              inputIcon: 'right',
              inputIconRightSymbol: 'search',
              listbox: n.a.createElement(f, null)
            })
          )
        },
        {
          id: 'deprecated-open-item-focused',
          label: 'Deprecated - Open - Item Focused',
          element: n.a.createElement(
            'div',
            { className: 'demo-only', style: { height: '10rem' } },
            n.a.createElement(x.a, {
              isOpen: !0,
              autocomplete: !0,
              inputIcon: 'right',
              inputIconRightSymbol: 'search',
              listbox: n.a.createElement(f, { focused: !0 }),
              'aria-activedescendant': 'listbox-option-unique-id-01'
            })
          )
        },
        {
          id: 'deprecated-closed-options-selected',
          label: 'Deprecated - Option(s) Selected',
          element: n.a.createElement(
            'div',
            { className: 'demo-only', style: { height: '10rem' } },
            n.a.createElement(
              x.a,
              {
                inputIcon: 'right',
                inputIconRightSymbol: 'search',
                autocomplete: !0,
                listbox: n.a.createElement(f, null)
              },
              n.a.createElement(
                g.b,
                { className: 'slds-p-top_xxx-small' },
                n.a.createElement(
                  g.c,
                  null,
                  n.a.createElement(
                    g.a,
                    { label: 'Acme', tabIndex: '0' },
                    n.a.createElement(b.a, {
                      containerClassName: 'slds-pill__icon_container',
                      title: 'Account',
                      assistiveText: 'Account'
                    })
                  )
                ),
                n.a.createElement(
                  g.c,
                  null,
                  n.a.createElement(
                    g.a,
                    { label: 'Salesforce.com, Inc.' },
                    n.a.createElement(b.a, {
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
      ],
      v = n.a.createElement(r.b, {
        id: y.c.uniqueId('combobox-id-'),
        'aria-controls': 'listbox-id-9',
        autocomplete: !0,
        inputIconPosition: 'right',
        rightInputIcon: n.a.createElement(h.a, {
          symbol: 'search',
          className: 'slds-icon slds-icon_x-small slds-icon-text-default',
          containerClassName: 'slds-input__icon slds-input__icon_right',
          assistiveText: !1,
          title: !1
        }),
        results: n.a.createElement(p.e, {
          id: 'listbox-id-9',
          snapshot: E.m,
          type: 'plain',
          count: 3
        }),
        resultsType: 'listbox',
        hasInteractions: !0
      }),
      I = [
        {
          id: 'focused-open',
          label: 'Focused - Open',
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-10',
            autocomplete: !0,
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'search',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: n.a.createElement(p.e, {
              id: 'listbox-id-10',
              snapshot: E.m,
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
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-15',
            autocomplete: !0,
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'search',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: n.a.createElement(p.e, {
              id: 'listbox-id-15',
              snapshot: E.b,
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
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-11',
            autocomplete: !0,
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'search',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            value: 'opp',
            results: n.a.createElement(p.e, {
              id: 'listbox-id-11',
              snapshot: E.r,
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
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-16',
            autocomplete: !0,
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'search',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            value: 'salesforce',
            results: n.a.createElement(p.e, {
              id: 'listbox-id-16',
              snapshot: E.d,
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
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-12',
            autocomplete: !0,
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'search',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: n.a.createElement(p.e, {
              id: 'listbox-id-12',
              snapshot: E.n,
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
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-17',
            autocomplete: !0,
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'search',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: n.a.createElement(p.e, {
              id: 'listbox-id-17',
              snapshot: E.c,
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
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-unique-id-03',
            autocomplete: !0,
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(m.b, {
              className: 'slds-input__icon slds-input__icon_right',
              symbol: 'clear',
              title: 'Clear the text input',
              assistiveText: 'Clear the text input'
            }),
            results: n.a.createElement(p.e, {
              id: 'listbox-unique-id-03',
              snapshot: E.m,
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
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-18',
            inputIconPosition: 'left-right',
            leftInputIcon: n.a.createElement(b.a, {
              symbol: 'account',
              className: 'slds-icon_small',
              containerClassName: 'slds-combobox__input-entity-icon',
              assistiveText: 'Account',
              title: 'Account'
            }),
            rightInputIcon: n.a.createElement(m.b, {
              className: 'slds-input__icon slds-input__icon_right',
              symbol: 'close',
              title: 'Remove selected option',
              assistiveText: 'Remove selected option'
            }),
            results: n.a.createElement(p.e, {
              id: 'listbox-id-18',
              snapshot: E.b,
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
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-13',
            autocomplete: !0,
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'search',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: n.a.createElement(p.e, {
              id: 'listbox-id-13',
              snapshot: E.m,
              type: 'entity',
              count: 3
            }),
            resultsType: 'listbox',
            hasSelection: !0,
            listboxOfSelections: n.a.createElement(u.a, {
              snapshot: E.q,
              count: 2
            })
          })
        },
        {
          id: 'lookup-multiple-options',
          label: 'Lookup - Selected multiple options',
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-19',
            autocomplete: !0,
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'search',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: n.a.createElement(p.e, {
              id: 'listbox-id-19',
              snapshot: E.b,
              type: 'entity',
              count: 2
            }),
            resultsType: 'listbox',
            hasSelection: !0,
            listboxOfSelections: n.a.createElement(u.a, {
              snapshot: E.e,
              count: 2
            })
          })
        }
      ],
      w = [
        {
          id: 'lookup',
          label: 'Lookup',
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-14',
            autocomplete: !0,
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'search',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: n.a.createElement(p.e, {
              id: 'listbox-id-14',
              snapshot: E.b,
              type: 'entity',
              count: 2
            }),
            resultsType: 'listbox',
            hasInteractions: !0
          })
        }
      ],
      j = y.c.uniqueId('combobox-id-'),
      T = y.c.uniqueId('primary-combobox-id-'),
      C = y.c.uniqueId('listbox-id-'),
      S = n.a.createElement(r.a, {
        id: y.c.uniqueId('combobox-id-'),
        'aria-controls': 'listbox-id-20',
        comboboxID: 'primary-combobox-id-1',
        autocomplete: !0,
        results: n.a.createElement(p.e, {
          id: 'listbox-id-20',
          snapshot: E.b,
          type: 'entity',
          count: 4
        }),
        resultsType: 'listbox',
        addon: n.a.createElement(d.b, {
          id: y.c.uniqueId('combobox-id-'),
          value: 'Accounts',
          addonPosition: 'start',
          hasInteractions: !0,
          comboboxAriaControls: 'primary-combobox-id-1'
        }),
        addonPosition: 'start',
        comboboxPosition: 'end',
        inputIconPosition: 'right',
        rightInputIcon: n.a.createElement(h.a, {
          symbol: 'search',
          className: 'slds-icon slds-icon_x-small slds-icon-text-default',
          containerClassName: 'slds-input__icon slds-input__icon_right',
          assistiveText: !1,
          title: !1
        }),
        hasInteractions: !0
      }),
      P = [
        {
          id: 'focused-open',
          label: 'Focused - Open',
          element: n.a.createElement(r.a, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-21',
            comboboxID: 'primary-combobox-id-2',
            autocomplete: !0,
            results: n.a.createElement(p.e, {
              id: 'listbox-id-21',
              snapshot: E.b,
              type: 'entity',
              count: 4
            }),
            resultsType: 'listbox',
            isOpen: !0,
            hasFocus: !0,
            addon: n.a.createElement(d.b, {
              id: y.c.uniqueId('combobox-id-'),
              value: 'Accounts',
              addonPosition: 'start',
              comboboxAriaControls: 'primary-combobox-id-2'
            }),
            addonPosition: 'start',
            comboboxPosition: 'end',
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
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
          element: n.a.createElement(r.a, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-activedescendant': 'option0',
            'aria-controls': 'listbox-id-22',
            comboboxID: 'primary-combobox-id-2',
            autocomplete: !0,
            results: n.a.createElement(p.e, {
              id: 'listbox-id-22',
              snapshot: E.d,
              term: 'salesforce',
              type: 'entity',
              count: 4
            }),
            resultsType: 'listbox',
            value: 'salesforce',
            isOpen: !0,
            hasFocus: !0,
            addon: n.a.createElement(d.b, {
              id: y.c.uniqueId('combobox-id-'),
              value: 'Accounts',
              addonPosition: 'start',
              comboboxAriaControls: 'primary-combobox-id-2'
            }),
            addonPosition: 'start',
            comboboxPosition: 'end',
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
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
          element: n.a.createElement(r.a, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-activedescendant': 'option0',
            'aria-controls': 'listbox-id-23',
            comboboxID: 'primary-combobox-id-2',
            autocomplete: !0,
            results: n.a.createElement(p.e, {
              id: 'listbox-id-23',
              snapshot: E.d,
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
            addon: n.a.createElement(d.b, {
              id: y.c.uniqueId('combobox-id-'),
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
          element: n.a.createElement(r.a, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-24',
            comboboxID: 'primary-combobox-id-3',
            autocomplete: !0,
            results: n.a.createElement(p.e, {
              id: 'listbox-id-24',
              snapshot: E.b,
              type: 'entity',
              count: 4
            }),
            resultsType: 'listbox',
            hasFocus: !0,
            addon: n.a.createElement(d.b, {
              id: y.c.uniqueId('combobox-id-'),
              value: 'Accounts',
              addonPosition: 'start',
              comboboxAriaControls: 'primary-combobox-id-3'
            }),
            addonPosition: 'start',
            comboboxPosition: 'end',
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'search',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            hasSelection: !0,
            listboxOfSelections: n.a.createElement(u.a, {
              snapshot: E.e,
              count: 2
            })
          })
        },
        {
          id: 'selected-options-open',
          label: 'Selected Options - Open',
          element: n.a.createElement(r.a, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-25',
            comboboxID: 'primary-combobox-id-4',
            autocomplete: !0,
            results: n.a.createElement(p.e, {
              id: 'listbox-id-25',
              snapshot: E.b,
              type: 'entity',
              count: 4
            }),
            resultsType: 'listbox',
            isOpen: !0,
            hasFocus: !0,
            addon: n.a.createElement(d.b, {
              id: y.c.uniqueId('combobox-id-'),
              value: 'Accounts',
              addonPosition: 'start',
              comboboxAriaControls: 'primary-combobox-id-4'
            }),
            addonPosition: 'start',
            comboboxPosition: 'end',
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'search',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            hasSelection: !0,
            listboxOfSelections: n.a.createElement(u.a, {
              snapshot: E.e,
              count: 2
            })
          })
        },
        {
          id: 'overflow-collapsed',
          label: 'Selections in container - Overflowed - Collapsed',
          element: n.a.createElement(r.a, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-26',
            comboboxID: 'primary-combobox-id-5',
            autocomplete: !0,
            results: n.a.createElement(p.e, {
              id: 'listbox-id-26',
              snapshot: E.b,
              type: 'entity',
              count: 4
            }),
            resultsType: 'listbox',
            addon: n.a.createElement(d.b, {
              id: y.c.uniqueId('combobox-id-'),
              value: 'Accounts',
              addonPosition: 'start',
              comboboxAriaControls: 'primary-combobox-id-5'
            }),
            addonPosition: 'start',
            comboboxPosition: 'end',
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'search',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            hasSelection: !0,
            listboxOfSelections: n.a.createElement(u.a, {
              snapshot: E.e,
              count: 8
            })
          })
        },
        {
          id: 'overflow-expanded',
          label: 'Selections in container - Overflowed - Expanded',
          element: n.a.createElement(r.a, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-27',
            comboboxID: 'primary-combobox-id-6',
            autocomplete: !0,
            results: n.a.createElement(p.e, {
              id: 'listbox-id-27',
              snapshot: E.b,
              type: 'entity',
              count: 4
            }),
            resultsType: 'listbox',
            hasFocus: !0,
            addon: n.a.createElement(d.b, {
              id: y.c.uniqueId('combobox-id-'),
              value: 'Accounts',
              addonPosition: 'start',
              comboboxAriaControls: 'primary-combobox-id-6'
            }),
            addonPosition: 'start',
            comboboxPosition: 'end',
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'search',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            hasSelection: !0,
            listboxOfSelections: n.a.createElement(u.a, {
              snapshot: E.e,
              count: 8,
              isExpanded: !0
            })
          })
        },
        {
          id: 'non-grouped-overflow-collapsed',
          label: 'Selections - Collapsed',
          element: n.a.createElement(r.b, {
            id: j,
            'aria-controls': C,
            comboboxID: T,
            autocomplete: !0,
            results: n.a.createElement(p.e, {
              id: C,
              snapshot: E.b,
              type: 'entity',
              count: 4
            }),
            resultsType: 'listbox',
            hasSelection: !0,
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'search',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            listboxOfSelections: n.a.createElement(u.a, {
              snapshot: E.e,
              count: 8
            })
          })
        },
        {
          id: 'non-grouped-overflow-expanded',
          label: 'Selections - Expanded',
          element: n.a.createElement(r.b, {
            id: j,
            'aria-controls': C,
            comboboxID: T,
            autocomplete: !0,
            results: n.a.createElement(p.e, {
              id: C,
              snapshot: E.b,
              type: 'entity',
              count: 4
            }),
            resultsType: 'listbox',
            hasSelection: !0,
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'search',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            listboxOfSelections: n.a.createElement(u.a, {
              snapshot: E.e,
              count: 8,
              isExpanded: !0
            })
          })
        },
        {
          id: 'scoping-results-focused',
          label: 'Scoping results - Focused',
          element: n.a.createElement(r.a, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-28',
            comboboxID: 'primary-combobox-id-7',
            autocomplete: !0,
            results: n.a.createElement(p.e, {
              id: 'listbox-id-28',
              snapshot: E.b,
              type: 'entity',
              count: 2
            }),
            addon: n.a.createElement(d.b, {
              id: y.c.uniqueId('combobox-id-'),
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
            rightInputIcon: n.a.createElement(h.a, {
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
          element: n.a.createElement(r.a, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-29',
            comboboxID: 'primary-combobox-id-9',
            autocomplete: !0,
            results: n.a.createElement(p.e, {
              id: 'listbox-id-29',
              snapshot: E.b,
              type: 'entity',
              count: 2
            }),
            resultsType: 'listbox',
            addon: n.a.createElement(d.a, {
              id: y.c.uniqueId('combobox-id-'),
              value: 'Apex',
              filteredSymbol: 'apex',
              addonPosition: 'start',
              comboboxAriaControls: 'primary-combobox-id-9'
            }),
            addonPosition: 'start',
            comboboxPosition: 'end',
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
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
          element: n.a.createElement(r.a, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'listbox-id-30',
            comboboxID: 'primary-combobox-id-8',
            autocomplete: !0,
            results: n.a.createElement(p.e, {
              id: 'listbox-id-30',
              snapshot: E.b,
              type: 'entity',
              count: 2
            }),
            resultsType: 'listbox',
            addon: n.a.createElement(d.a, {
              id: y.c.uniqueId('combobox-id-'),
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
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'search',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            })
          })
        }
      ],
      k = o(34),
      N = o(13),
      q = o(8),
      A = o(30),
      D = function() {
        var e = y.c.uniqueId('popover-id-');
        return n.a.createElement(r.b, {
          id: y.c.uniqueId('combobox-id-'),
          'aria-controls': e,
          label: 'Languages',
          readonly: !0,
          inputIconPosition: 'right',
          rightInputIcon: n.a.createElement(h.a, {
            symbol: 'down',
            className: 'slds-icon slds-icon_x-small slds-icon-text-default',
            containerClassName: 'slds-input__icon slds-input__icon_right',
            assistiveText: !1,
            title: !1
          }),
          resultsType: 'dialog',
          results: n.a.createElement(
            k.a,
            {
              popoverId: e,
              title: 'Language Options',
              isFullWidth: !0,
              isHidden: !0,
              hasFormFooter: !0,
              size: 'small',
              footer: n.a.createElement(
                n.a.Fragment,
                null,
                n.a.createElement(N.a, null),
                n.a.createElement(N.a, null)
              )
            },
            n.a.createElement(
              'div',
              null,
              'Any content can go here in this Dialog'
            )
          )
        });
      },
      F = n.a.createElement(D, null),
      L = [
        {
          id: 'open',
          label: 'Open',
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'popover-unique-id-01',
            label: 'Languages',
            readonly: !0,
            isOpen: !0,
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            resultsType: 'dialog',
            results: n.a.createElement(
              k.a,
              {
                popoverId: 'popover-unique-id-01',
                title: 'Language Options',
                isFullWidth: !0,
                hasFormFooter: !0,
                size: 'small',
                footer: n.a.createElement(
                  n.a.Fragment,
                  null,
                  n.a.createElement(N.a, { isNeutral: !0 }, 'Cancel'),
                  n.a.createElement(N.a, { isBrand: !0 }, 'Done')
                )
              },
              n.a.createElement(
                'div',
                null,
                'Any content can go here in this Dialog'
              )
            )
          })
        }
      ],
      M = [
        {
          id: 'with-checkbox-group',
          label: 'With Checkbox Group',
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'popover-unique-id-02',
            label: 'Languages',
            readonly: !0,
            isOpen: !0,
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            resultsType: 'dialog',
            results: n.a.createElement(
              k.a,
              {
                popoverId: 'popover-unique-id-02',
                title: 'Language Options',
                isFullWidth: !0,
                hasFormFooter: !0,
                size: 'small',
                footer: n.a.createElement(
                  n.a.Fragment,
                  null,
                  n.a.createElement(N.a, { isNeutral: !0 }, 'Cancel'),
                  n.a.createElement(N.a, { isBrand: !0 }, 'Done')
                )
              },
              n.a.createElement(
                q.a,
                { label: 'Select up to 2' },
                n.a.createElement(A.a, { label: 'English' }),
                n.a.createElement(A.a, { label: 'German' }),
                n.a.createElement(A.a, { label: 'Tobagonian Creole English' }),
                n.a.createElement(A.a, { label: 'Spanish' })
              )
            )
          })
        },
        {
          id: 'selecting-options',
          label: 'Selecting Options',
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'popover-unique-id-03',
            label: 'Languages',
            readonly: !0,
            isOpen: !0,
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            resultsType: 'dialog',
            results: n.a.createElement(
              k.a,
              {
                popoverId: 'popover-unique-id-03',
                title: 'Language Options',
                isFullWidth: !0,
                hasFormFooter: !0,
                size: 'small',
                footer: n.a.createElement(
                  n.a.Fragment,
                  null,
                  n.a.createElement(N.a, { isNeutral: !0 }, 'Cancel'),
                  n.a.createElement(N.a, { isBrand: !0 }, 'Done')
                )
              },
              n.a.createElement(
                q.a,
                { label: 'Select up to 2' },
                n.a.createElement(A.a, { label: 'English' }),
                n.a.createElement(A.a, { label: 'German', checked: !0 }),
                n.a.createElement(A.a, {
                  label: 'Tobagonian Creole English',
                  checked: !0
                }),
                n.a.createElement(A.a, { label: 'Spanish' })
              )
            )
          })
        },
        {
          id: 'open-one-option-selected',
          label: 'Open - One Option Selected ',
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'popover-unique-id-04',
            label: 'Languages',
            readonly: !0,
            isOpen: !0,
            value: 'German',
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            resultsType: 'dialog',
            results: n.a.createElement(
              k.a,
              {
                popoverId: 'popover-unique-id-04',
                title: 'Language Options',
                isFullWidth: !0,
                hasFormFooter: !0,
                size: 'small',
                footer: n.a.createElement(
                  n.a.Fragment,
                  null,
                  n.a.createElement(N.a, { isNeutral: !0 }, 'Cancel'),
                  n.a.createElement(N.a, { isBrand: !0 }, 'Done')
                )
              },
              n.a.createElement(
                q.a,
                { label: 'Select up to 2' },
                n.a.createElement(A.a, { label: 'English' }),
                n.a.createElement(A.a, { label: 'German', checked: !0 }),
                n.a.createElement(A.a, { label: 'Tobagonian Creole English' }),
                n.a.createElement(A.a, { label: 'Spanish' })
              )
            )
          })
        },
        {
          id: 'closed-one-option-selected',
          label: 'Closed - One Option Selected',
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'popover-unique-id-05',
            label: 'Languages',
            readonly: !0,
            value: 'German',
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            resultsType: 'dialog',
            results: n.a.createElement(
              k.a,
              {
                popoverId: 'popover-unique-id-05',
                title: 'Language Options',
                isHidden: !0,
                isFullWidth: !0,
                hasFormFooter: !0,
                size: 'small',
                footer: n.a.createElement(
                  n.a.Fragment,
                  null,
                  n.a.createElement(N.a, { isNeutral: !0 }, 'Cancel'),
                  n.a.createElement(N.a, { isBrand: !0 }, 'Done')
                )
              },
              n.a.createElement(
                q.a,
                { label: 'Select up to 2' },
                n.a.createElement(A.a, { label: 'English' }),
                n.a.createElement(A.a, { label: 'German', checked: !0 }),
                n.a.createElement(A.a, { label: 'Tobagonian Creole English' }),
                n.a.createElement(A.a, { label: 'Spanish' })
              )
            )
          })
        },
        {
          id: 'open-two-or-more-options-selected',
          label: 'Open - Two or More Options Selected',
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'popover-unique-id-06',
            label: 'Languages',
            readonly: !0,
            isOpen: !0,
            value: '2 options selected',
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            resultsType: 'dialog',
            results: n.a.createElement(
              k.a,
              {
                popoverId: 'popover-unique-id-06',
                title: 'Language Options',
                isFullWidth: !0,
                hasFormFooter: !0,
                size: 'small',
                footer: n.a.createElement(
                  n.a.Fragment,
                  null,
                  n.a.createElement(N.a, { isNeutral: !0 }, 'Cancel'),
                  n.a.createElement(N.a, { isBrand: !0 }, 'Done')
                )
              },
              n.a.createElement(
                q.a,
                { label: 'Select up to 2' },
                n.a.createElement(A.a, { label: 'English' }),
                n.a.createElement(A.a, { label: 'German', checked: !0 }),
                n.a.createElement(A.a, {
                  label: 'Tobagonian Creole English',
                  checked: !0
                }),
                n.a.createElement(A.a, { label: 'Spanish' })
              )
            )
          })
        },
        {
          id: 'closed-two-or-more-options-selected',
          label: 'Closed - Two or More Options Selected',
          element: n.a.createElement(r.b, {
            id: y.c.uniqueId('combobox-id-'),
            'aria-controls': 'popover-unique-id-07',
            label: 'Languages',
            readonly: !0,
            value: '2 options selected',
            inputIconPosition: 'right',
            rightInputIcon: n.a.createElement(h.a, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            resultsType: 'dialog',
            results: n.a.createElement(
              k.a,
              {
                popoverId: 'popover-unique-id-07',
                title: 'Language Options',
                isHidden: !0,
                isFullWidth: !0,
                hasFormFooter: !0,
                size: 'small',
                footer: n.a.createElement(
                  n.a.Fragment,
                  null,
                  n.a.createElement(N.a, { isNeutral: !0 }, 'Cancel'),
                  n.a.createElement(N.a, { isBrand: !0 }, 'Done')
                )
              },
              n.a.createElement(
                q.a,
                { label: 'Select up to 2' },
                n.a.createElement(A.a, { label: 'English' }),
                n.a.createElement(A.a, { label: 'German', checked: !0 }),
                n.a.createElement(A.a, {
                  label: 'Tobagonian Creole English',
                  checked: !0
                }),
                n.a.createElement(A.a, { label: 'Spanish' })
              )
            )
          })
        }
      ],
      W = o(33),
      B = s.c.a,
      G = s.c.code,
      R = s.c.em,
      U = s.c.h2,
      z = s.c.h3,
      H = s.c.h4,
      K = s.c.h5,
      J = s.c.li,
      Y = s.c.p,
      Q = s.c.strong,
      V = s.c.ul,
      X = function() {
        return Object(i.createElement)(
          s.b,
          {},
          Object(i.createElement)(
            'div',
            { className: 'lead doc' },
            'A widget that provides a user with an input field that is either an autocomplete or readonly, accompanied by a listbox of options.'
          ),
          Object(i.createElement)(
            l.a,
            { demoStyles: 'height: 17rem;' },
            Object(y.e)(O, 'focused-open')
          ),
          U({ id: 'Base-Combobox' }, 'Base Combobox'),
          Y(
            {},
            'A Base Combobox is a readonly text ',
            G({}, 'input'),
            ' that allows a user to select an option from a pre-defined list of options. It does not allow free form user input, nor does it allow the user to modify the selected value.'
          ),
          Object(i.createElement)(l.a, { demoStyles: 'height: 17rem;' }, _),
          z({ id: 'Combobox-markup' }, 'Combobox markup'),
          V(
            {},
            J(
              {},
              'A Combobox must come with an associated ',
              G({}, 'label'),
              ' element, with an appropriate ',
              G({}, 'for'),
              ' attribute'
            ),
            J(
              {},
              G({}, 'slds-combobox'),
              ' acts as the root node to the composite Combobox widget. It takes the ',
              G({}, 'role="combobox"'),
              ' attribute as a result',
              V(
                {},
                J(
                  {},
                  G({}, 'aria-haspopup="listbox"'),
                  ' attribute is then applied to indicate the Combobox will display a popup, of type ',
                  G({}, 'listbox')
                ),
                J(
                  {},
                  G({}, 'aria-expanded="true|false"'),
                  ' attribute is applied to describe whether the popup of ',
                  G({}, 'listbox'),
                  ' is currently visible or not'
                )
              )
            ),
            J(
              {},
              'The element ',
              G({}, 'slds-combobox__form-element'),
              ' between the ',
              G({}, 'combobox'),
              ' and its ',
              G({}, 'input'),
              ' must have ',
              G({}, 'role="none"')
            )
          ),
          z({ id: 'Input-markup' }, 'Input markup'),
          V(
            {},
            J(
              {},
              'The ',
              G({}, 'input'),
              ' is an ',
              G({}, 'input'),
              ' with a role of ',
              G({}, 'textbox'),
              ". The role is implicit on inputs, but in this case it doesn't hurt to be explicit"
            ),
            J(
              {},
              'The ',
              G({}, 'input'),
              ' has the following attributes:',
              V(
                {},
                J(
                  {},
                  G({}, 'autocomplete="off"'),
                  " to remove the browsers' suggestions from the ",
                  G({}, 'input')
                ),
                J(
                  {},
                  G({}, 'aria-controls=""'),
                  ' which points to the ID of the ',
                  G({}, 'listbox'),
                  '. It informs assistive technology what DOM node the ',
                  G({}, 'input'),
                  ' controls, in terms of visibility and / or content'
                ),
                J(
                  {},
                  G({}, 'type'),
                  ' attribute set to be ',
                  G({}, 'text'),
                  " as it's not a search field"
                ),
                J({}, G({}, 'readonly'))
              )
            )
          ),
          z({ id: 'Mobile' }, 'Mobile'),
          Object(i.createElement)(W.a, {
            patternSpecificText:
              'comboboxes and the available options will have an increased size to accommodate tapping with a finger instead of the more precise mouse cursor'
          }),
          Object(i.createElement)(
            l.a,
            { frameStyles: { height: '20rem' }, frameOnly: !0 },
            Object(y.e)(O, 'focused-open')
          ),
          z({ id: 'Displaying-options' }, 'Displaying options'),
          Y(
            {},
            'To toggle visibility of the ',
            G({}, 'listbox'),
            ', add the class ',
            G({}, 'slds-is-open'),
            ' to the ',
            G({}, 'slds-dropdown-trigger'),
            ' element.'
          ),
          Y(
            {},
            'It is most common to expand the ',
            G({}, 'listbox'),
            ' of options when a user clicks on the Combobox. For a more detailed description of interaction behaviors, see the ',
            B({ href: '#Interaction' }, 'Interaction'),
            ' section.'
          ),
          Object(i.createElement)(
            c.a,
            { type: 'a11y', header: 'Accessibility Requirement' },
            Object(i.createElement)(
              'p',
              null,
              'When toggling visibility of the Combobox, the ',
              Object(i.createElement)('code', null, 'aria-expanded'),
              ' ',
              'attribute needs to be toggled to ',
              Object(i.createElement)('code', null, 'true'),
              '. Set it to',
              ' ',
              Object(i.createElement)('code', null, 'false'),
              ' again when the options are hidden.'
            )
          ),
          Object(i.createElement)(
            c.a,
            { type: 'a11y', header: 'Accessibility Note' },
            Object(i.createElement)(
              'p',
              null,
              'The ',
              Object(i.createElement)('code', null, 'listbox'),
              ' of options must be an ',
              Object(i.createElement)('b', null, 'owned'),
              ' child of the',
              ' ',
              Object(i.createElement)('code', null, 'combobox'),
              '. If it cannot be a direct child of the',
              ' ',
              Object(i.createElement)('code', null, 'combobox'),
              ' element, then ',
              Object(i.createElement)('code', null, 'aria-owns'),
              ' must be placed on the ',
              Object(i.createElement)('code', null, 'combobox'),
              ' and point to the ID of the ',
              Object(i.createElement)('code', null, 'listbox'),
              ' ',
              'instead.'
            )
          ),
          Object(i.createElement)(
            l.a,
            { demoStyles: 'height: 17rem;' },
            Object(y.e)(O, 'focused-open')
          ),
          H({ id: 'Listbox-markup' }, 'Listbox markup'),
          V(
            {},
            J(
              {},
              'The ',
              G({}, 'listbox'),
              ' has ',
              G({}, 'role="listbox"'),
              ' applied'
            ),
            J(
              {},
              'The ',
              G({}, 'listbox'),
              ' can have child ',
              G({}, 'option'),
              's. We place ',
              G({}, 'role="option"'),
              ' on a ',
              G({}, 'div'),
              ' element, inside a list item. As such the list item ',
              G({}, 'li'),
              ' needs to be removed from the Accessibility Tree with ',
              G({}, 'role="presentation"')
            ),
            J(
              {},
              'A ',
              G({}, 'listbox'),
              ' has the ability to group options together under a visual heading or label. This means the ',
              G({}, 'role="listbox"'),
              ' attribute is placed on a common parent element, which can wrap multiple lists (or groups) of options',
              V(
                {},
                J(
                  {},
                  'When a ',
                  G({}, 'listbox'),
                  ' has no option groups, the ',
                  G({}, 'ul'),
                  ' element has ',
                  G({}, 'role="presentation"'),
                  ' to remove it from the Accessibility Tree'
                )
              )
            ),
            J(
              {},
              'Every ',
              G({}, 'option'),
              ' has ',
              G({}, 'aria-selected="false"'),
              ' by default'
            ),
            J(
              {},
              'Focused ',
              G({}, 'option'),
              's should have ',
              G({}, 'aria-selected="true"')
            ),
            J(
              {},
              'Chosen ',
              G({}, 'options'),
              's should have ',
              G({}, 'aria-checked="true"')
            ),
            J(
              {},
              'Disabled ',
              G({}, 'option'),
              's should have ',
              G({}, 'aria-disabled="true"'),
              ' applied along with ',
              B(
                { href: '#Disabled-listbox-items' },
                'a class on the icon in an entity option'
              )
            )
          ),
          H({ id: 'Loading-more-options' }, 'Loading more options'),
          Y(
            {},
            'If you are dynamically loading in more items to the listbox, the very last ',
            G({}, '<li>'),
            ' of the ',
            G({}, '<ul>'),
            ' should receive the ',
            G({}, 'role="presentation"'),
            ' attribute and have the ',
            B({ href: '/components/spinners/' }, 'Spinner component'),
            ' injected into it.'
          ),
          Y(
            {},
            'For layout purposes, wrap the spinner in a ',
            G({}, '<div>'),
            ' with the class ',
            G({}, 'slds-align_absolute-center'),
            ' to position the spinner in the middle of the list item, as well as ',
            G({}, 'slds-p-top_medium'),
            ' to provide the appropriate amount of space for the spinner to be visible.'
          ),
          Object(i.createElement)(
            l.a,
            { demoStyles: 'height: 14rem;' },
            Object(y.e)(O, 'loading-options')
          ),
          z({ id: 'Grouped-options' }, 'Grouped options'),
          Y(
            {},
            'Options within a ',
            G({}, 'listbox'),
            ' can be grouped together under meaningful headings. This is useful if you wish to create separation between 2 or more sets of options within a single ',
            G({}, 'listbox'),
            '.'
          ),
          Object(i.createElement)(
            l.a,
            { demoStyles: 'height: 18rem;' },
            Object(y.e)(O, 'grouped-options')
          ),
          H({ id: 'Grouped-listbox-markup' }, 'Grouped listbox markup'),
          V(
            {},
            J(
              {},
              'When a ',
              G({}, 'listbox'),
              ' has option groups, each group gets a visual label. Exactly like ',
              G({}, 'optgroup'),
              ' in a ',
              G({}, 'select'),
              ' element',
              V(
                {},
                J(
                  {},
                  'The ',
                  G({}, 'ul'),
                  ' element in this case has ',
                  G({}, 'role="group"'),
                  ' with an ',
                  G({}, 'aria-label'),
                  ' that matches the visible label'
                ),
                J(
                  {},
                  'Display the group label visually, but due to the way a ',
                  G({}, 'listbox'),
                  ' works it can only be marked as ',
                  G({}, 'role="presentation"'),
                  ', as a ',
                  G({}, 'listbox'),
                  ' can only have ',
                  G({}, 'option'),
                  ' children. This allows us to communicate the group label visually and programmatically to a screen reader'
                )
              )
            )
          ),
          z(
            { id: 'Styling-choices-for-options' },
            'Styling choices for options'
          ),
          Y(
            {},
            'The options in the ',
            G({}, 'listbox'),
            ' can have a left icon and/or metatext.'
          ),
          Object(i.createElement)(
            l.a,
            { demoStyles: 'position: relative; height: 12rem;' },
            Object(i.createElement)(p.e, {
              id: 'listbox-id-2',
              snapshot: E.s,
              type: 'plain',
              count: 4
            })
          ),
          H({ id: 'Disabled-listbox-items' }, 'Disabled listbox items'),
          Y(
            {},
            'Options in a listbox that are disabled require these accessibility and styling considerations:'
          ),
          V(
            {},
            J(
              {},
              G({}, 'aria-disabled="true"'),
              ' must be applied to ',
              G({}, 'slds-listbox__option')
            ),
            J(
              {},
              'if using an entity icon, apply ',
              G({}, 'slds-icon_disabled'),
              ' to ',
              G({}, 'slds-icon_container')
            )
          ),
          Y(
            {},
            R(
              {},
              'Plain options: Example shows two disabled options with one enabled one'
            )
          ),
          Object(i.createElement)(
            l.a,
            { demoStyles: 'position: relative; height: 9rem;' },
            Object(i.createElement)(p.e, {
              id: y.c.uniqueId('listbox-id-'),
              snapshot: E.l,
              type: 'plain',
              count: 3
            })
          ),
          Y(
            {},
            R(
              {},
              'Entity options: Example shows two disabled entity options with one enabled one'
            )
          ),
          Object(i.createElement)(
            l.a,
            { demoStyles: 'position: relative; height: 9rem;' },
            Object(i.createElement)(p.e, {
              id: y.c.uniqueId('listbox-id-'),
              snapshot: E.a,
              type: 'entity',
              count: 3
            })
          ),
          z({ id: 'Interaction' }, 'Interaction'),
          Y(
            {},
            'At its most basic, the ',
            G({}, 'listbox'),
            ' of options should be displayed when a user interacts with the Combobox. When the user leaves the combobox the options are hidden. However, there are some differences when interacting with a Combobox with a mouse versus with a keyboard.'
          ),
          H({ id: 'Expanding-the-Combobox' }, 'Expanding the Combobox'),
          Y(
            {},
            'A mouse or pointer device user can click on a Combobox and the ',
            G({}, 'listbox'),
            ' will display automatically whilst focus is placed inside the Combobox input field.'
          ),
          Object(i.createElement)(
            l.a,
            { demoStyles: 'height: 17rem;' },
            Object(y.e)(O, 'focused-open')
          ),
          Y(
            {},
            'If using a keyboard, placing focus into the Combobox input field ',
            R({}, 'will not'),
            ' display the ',
            G({}, 'listbox'),
            ' of options automatically.'
          ),
          Object(i.createElement)(l.a, null, Object(y.e)(O, 'focused')),
          Y(
            {},
            'After focusing inside the Combobox with the keyboard, pressing the ',
            G({}, 'Down'),
            ' or ',
            G({}, 'Enter'),
            ' key will expand the collapsed Combobox and display the ',
            G({}, 'listbox'),
            ' options. Be sure to update ',
            G({}, 'aria-expanded'),
            ' to be true. This will also highlight the first option in the listbox.'
          ),
          Object(i.createElement)(
            c.a,
            { type: 'a11y', header: 'Accessibility Requirement' },
            Object(i.createElement)(
              'p',
              null,
              'Update ',
              Object(i.createElement)('code', null, 'aria-expanded'),
              ' to "true" when the Combobox is expanded.'
            )
          ),
          H({ id: 'Highlighting-an-option' }, 'Highlighting an option'),
          Y(
            {},
            'To Highlight an option in the ',
            G({}, 'Listbox'),
            ' use the ',
            G({}, 'Up'),
            ' and ',
            G({}, 'Down'),
            ' arrow keys to cycle through all the available options in the list.'
          ),
          V(
            {},
            J(
              {},
              'Each press of the arrow key ',
              Q({}, 'must'),
              ' update the ',
              G({}, 'input'),
              ' value to reflect the currently selected option'
            ),
            J(
              {},
              'It is common to loop the selected option to the first option when you get to the last option in the list. Similarly, loop to the last option when you reach the first option.'
            )
          ),
          Y(
            {},
            'When an option from the ',
            G({}, 'listbox'),
            ' is "in focus", user focus never leaves the ',
            G({}, 'input'),
            ' field, since we manually create a programmatic or "faux focus" state that highlights the selected option and associates it to the ',
            G({}, 'input'),
            '.'
          ),
          Object(i.createElement)(
            c.a,
            { type: 'a11y', header: 'Accessibility Requirement' },
            Object(i.createElement)(
              'p',
              null,
              'When highlighting an option with "faux focus", the',
              ' ',
              Object(i.createElement)('code', null, 'aria-activedescendant'),
              ' attribute on the ',
              Object(i.createElement)('code', null, 'input'),
              ' needs to be set to the value of the ID of the highlighted option. The highlighted option must also have ',
              Object(i.createElement)('code', null, 'aria-selected="true"'),
              '. When no option is highlighted, ',
              Object(i.createElement)('code', null, 'aria-activedescendant'),
              ' must be removed.'
            )
          ),
          Y(
            {},
            "By typing the first letter of an option name, the first matching option will highlight. When the letter doesn't match an option, highlighting doesn't move."
          ),
          Object(i.createElement)(
            l.a,
            { demoStyles: 'height: 17rem;' },
            Object(y.e)(O, 'highlighting-an-option')
          ),
          H({ id: 'Collapsing-the-Combobox' }, 'Collapsing the Combobox'),
          Y(
            {},
            'To collapse the Combobox the user should be able to press the ',
            G({}, 'Escape'),
            ' key on their keyboard or click anywhere outside of the Combobox.'
          ),
          Y(
            {},
            'Pressing the ',
            G({}, 'Enter'),
            ' key whilst an option is highlighted will select the option as the current value and collapse the Combobox.'
          ),
          Object(i.createElement)(
            c.a,
            { type: 'a11y', header: 'Accessibility Requirement' },
            Object(i.createElement)(
              'p',
              null,
              'Update ',
              Object(i.createElement)('code', null, 'aria-expanded'),
              ' to "false" when the Combobox is collapsed.'
            )
          ),
          z({ id: 'Selecting-an-option' }, 'Selecting an option'),
          Y(
            {},
            'A user selects an option by using their mouse to click the option they require, or pressing the ',
            G({}, 'Enter'),
            ' key once they have arrowed to the desired option.'
          ),
          Y(
            {},
            'Upon selection the Combobox collapses, only showing the ',
            G({}, 'input'),
            ' field. The value of the ',
            G({}, 'input'),
            ' inside the Combobox is set to match the selected option name so the user can see what was previously selected from the ',
            G({}, 'listbox'),
            ' of options.'
          ),
          Object(i.createElement)(
            l.a,
            null,
            Object(y.e)(O, 'selected-an-option-closed')
          ),
          H({ id: 'Single-selection' }, 'Single selection'),
          Y(
            {},
            'When an option becomes selected, the class ',
            G({}, 'slds-is-selected'),
            ' should be applied to the ',
            G({}, 'slds-listbox__option'),
            ' element with the ',
            G({}, 'role="option"'),
            '. This will provide visual feedback that the user has selected that element.'
          ),
          Object(i.createElement)(
            l.a,
            { demoStyles: 'height: 17rem;' },
            Object(y.e)(O, 'selecting-a-single-option')
          ),
          K(
            { id: 'Re-opening-with-a-selection' },
            'Re-opening with a selection'
          ),
          Y(
            {},
            'When re-opening a Combobox that already has a selected value, the ',
            G({}, 'listbox'),
            ' should be displayed with the selected option already highlighted.'
          ),
          Object(i.createElement)(
            c.a,
            { type: 'a11y', header: 'Accessibility Requirement' },
            Object(i.createElement)(
              'p',
              null,
              'Be sure to re-set the ',
              Object(i.createElement)('code', null, 'aria-activedescendant'),
              ' attribute on the `input` to the value of the ID of the highlighted option. The highlighted option must also have ',
              Object(i.createElement)('code', null, 'aria-selected="true"'),
              '.'
            )
          ),
          H({ id: 'Multiple-selections' }, 'Multiple selections'),
          Y(
            {},
            'When more than one option has been selected, the value of the ',
            G({}, 'input'),
            ' should be updated with the total number of selected items, such as "3 options selected".'
          ),
          Object(i.createElement)(
            a.a,
            { toggleCode: !1 },
            Object(i.createElement)(p.d, { name: 'Accounts', selected: !0 })
          ),
          Object(i.createElement)(
            l.a,
            { demoStyles: 'height: 17rem;' },
            Object(y.e)(O, 'selecting-multiple-options')
          ),
          Y(
            {},
            'When a Combobox with multiple selected options is closed, a ',
            B(
              { href: '/components/pills/#Listbox-Of-Pill-Options' },
              'Listbox of Pills'
            ),
            ' is also used to represent those selected options.'
          ),
          Y(
            {},
            'The ',
            B(
              { href: '/components/pills/#Listbox-Of-Pill-Options' },
              'Listbox of Pills'
            ),
            ' is positioned below the read-only ',
            G({}, 'input'),
            ', outside of the Combobox. Each pill represents a selected option. This allows a user to easily see and remove selected items from the Combobox without opening it again.'
          ),
          Object(i.createElement)(
            l.a,
            null,
            Object(y.e)(O, 'selected-multiple-options-closed')
          ),
          H(
            { id: 'Editing-multiple-selections' },
            'Editing multiple selections'
          ),
          Y(
            {},
            'The ',
            B(
              { href: '/components/pills/#Listbox-Of-Pill-Options' },
              'Listbox of Pills'
            ),
            ' allows you to quickly remove selections without opening the Combobox by clicking the remove "x" or using your delete key.'
          ),
          Y(
            {},
            'The ',
            B(
              { href: '/components/pills/#Listbox-Of-Pill-Options' },
              'Listbox of Pills'
            ),
            ' acts as a single focusable element. Using the arrow keys whilst focused on the first pill will cycle the user through the pill options.'
          ),
          U({ id: 'Autocomplete-Combobox' }, 'Autocomplete Combobox'),
          Y(
            {},
            'An autocomplete Combobox also allows a user to select an option from a list, but that list can be affected by what the user types into the ',
            G({}, 'input'),
            ' of the Combobox. This can be useful when the list of options is very large, as user input can start to display options that only match the text they have entered.'
          ),
          Y(
            {},
            'If no option matches, the user can complete the value of the combobox by finishing their own text entry.'
          ),
          Object(i.createElement)(
            c.a,
            { type: 'a11y', header: 'Accessibility Difference' },
            Object(i.createElement)(
              'p',
              null,
              'The difference between the ',
              Object(i.createElement)('strong', null, 'Base Combobox'),
              ' and the',
              ' ',
              Object(i.createElement)('strong', null, 'Autocomplete Combobox'),
              ', is that the text ',
              Object(i.createElement)('code', null, 'input'),
              ' ',
              'must have the ',
              Object(i.createElement)('code', null, 'readonly'),
              ' attribute removed and replaced with',
              ' ',
              Object(i.createElement)('code', null, 'aria-autocomplete="list"'),
              '.'
            )
          ),
          Object(i.createElement)(l.a, { demoStyles: 'height: 12rem;' }, v),
          z({ id: 'Displaying-options-2' }, 'Displaying options'),
          Y(
            {},
            'Displaying options for the Autocomplete Combobox happens just like the base Combobox, except there is no difference between mouse and keyboard users when interacting with the Combobox for the first time. Clicking or placing focus on the Combobox text ',
            G({}, 'input'),
            ' will automatically expand the Combobox and display the options.'
          ),
          Y(
            {},
            'When a user stops interacting with the Combobox, or selects an option, the Combobox collapses and hides the options.'
          ),
          Object(i.createElement)(
            l.a,
            { demoStyles: 'height: 12rem;' },
            Object(y.e)(I, 'focused-open')
          ),
          z(
            { id: 'Displaying-options-based-on-user-input' },
            'Displaying options based on user input'
          ),
          Y(
            {},
            'If an option from the pre-populated ',
            G({}, 'listbox'),
            " isn't what the user wants, they can start typing into the ",
            G({}, 'input'),
            '. This term will be used to filter the options by and narrow down the size of the list to something more relevant.'
          ),
          Y(
            {},
            'Whilst typing, the highlighted option in the ',
            G({}, 'listbox'),
            " should be the user's text string."
          ),
          Object(i.createElement)(
            c.a,
            { type: 'a11y', header: 'Accessibility Requirement' },
            Object(i.createElement)(
              'p',
              null,
              'When highlighting an option with "faux focus", the',
              ' ',
              Object(i.createElement)('code', null, 'aria-activedescendant'),
              ' attribute on the `input` needs to be set to the value of the ID of the highlighted option. The highlighted option must also have ',
              Object(i.createElement)('code', null, 'aria-selected="true"'),
              '.'
            )
          ),
          Object(i.createElement)(
            l.a,
            { demoStyles: 'height: 12rem;' },
            Object(y.e)(I, 'typeahead')
          ),
          z({ id: 'Drill-In-for-Autocomplete' }, 'Drill In for Autocomplete'),
          Y(
            {},
            'The options in the autocomplete ',
            G({}, 'listbox'),
            ' can have a right icon to indicate an option that drills in for more options.'
          ),
          Object(i.createElement)(
            l.a,
            { demoStyles: 'position: relative; height: 10rem;' },
            Object(i.createElement)(p.e, {
              id: 'listbox-id-3',
              snapshot: E.f,
              type: 'entity',
              count: 3,
              visualSelection: !0
            })
          ),
          z({ id: 'Keyboard-interaction' }, 'Keyboard interaction'),
          Y(
            {},
            'The same keyboard interactions apply from the base Combobox, but with these differences:'
          ),
          V(
            {},
            J(
              {},
              G({}, 'Up'),
              ' and ',
              G({}, 'Down'),
              ' arrows ',
              Q({}, 'should optionally'),
              ' update the ',
              G({}, 'input'),
              ' value to reflect the currently selected option'
            )
          ),
          Object(i.createElement)(
            l.a,
            { demoStyles: 'height: 12rem;' },
            Object(y.e)(I, 'highlighting-an-option')
          ),
          z({ id: 'Selecting-an-option-2' }, 'Selecting an option'),
          Y(
            {},
            'The user again can click on the desired option or press the ',
            G({}, 'Enter'),
            ' key with the desired option highlighted. Alternatively they can leave their entered text string as the value of the Combobox.'
          ),
          Y(
            {},
            'Selecting an option from the ',
            G({}, 'listbox'),
            ' will close the ',
            G({}, 'listbox'),
            '.'
          ),
          Y(
            {},
            'To remove the selected option, simply clear the text ',
            G({}, 'input'),
            '.'
          ),
          Object(i.createElement)(
            l.a,
            null,
            Object(y.e)(I, 'selected-an-option')
          ),
          z({ id: 'Multiple-selection' }, 'Multiple selection'),
          Y(
            {},
            'Multiple selection is much the same as the Base Combobox. A list of selected options are displayed below the Combobox as a ',
            B(
              { href: '/components/pills/#Listbox-Of-Pill-Options' },
              'Listbox of Pills'
            ),
            '.'
          ),
          Object(i.createElement)(
            l.a,
            null,
            Object(y.e)(I, 'selected-multiple-options')
          ),
          H(
            { id: 'Editing-multiple-selections-2' },
            'Editing multiple selections'
          ),
          Y(
            {},
            'The ',
            B(
              { href: '/components/pills/#Listbox-Of-Pill-Options' },
              'Listbox of Pills'
            ),
            ' allows you to quickly remove selections without opening the Combobox by clicking the remove "x" or using your delete key.'
          ),
          Y(
            {},
            'The ',
            B(
              { href: '/components/pills/#Listbox-Of-Pill-Options' },
              'Listbox of Pills'
            ),
            ' acts as a single focusable element. Using the arrow keys whilst focused on the first pill will cycle the user through the pill options.'
          ),
          U(
            { id: 'Entity-Autocomplete-Combobox-(Lookup)' },
            'Entity Autocomplete Combobox (Lookup)'
          ),
          Y(
            {},
            'An Entity Autocomplete Combobox or Lookup, is used to search for and select Salesforce Entities.'
          ),
          Object(i.createElement)(
            l.a,
            { demoStyles: 'height: 10rem;' },
            Object(y.e)(w, 'lookup')
          ),
          z({ id: 'Displaying-options-3' }, 'Displaying options'),
          Y(
            {},
            'Displaying options happens just like an Autocomplete Combobox, by placing user focus inside the Combobox text ',
            G({}, 'input'),
            '.'
          ),
          Y(
            {},
            'The options now have extra information about them, such as the type of entity and any other important metadata.'
          ),
          Object(i.createElement)(
            l.a,
            { demoStyles: 'height: 10rem;' },
            Object(y.e)(I, 'lookup-focused-open')
          ),
          z(
            { id: 'Displaying-options-based-on-user-input-2' },
            'Displaying options based on user input'
          ),
          Y(
            {},
            'As with the Autocomplete Combobox, the user can start typing into the ',
            G({}, 'input'),
            ' to search for Salesforce Entities that match their search term.'
          ),
          Y(
            {},
            'In the resultant displayed options, we highlight the matched term by bolding it using the ',
            G({}, '<mark>'),
            ' element.'
          ),
          Object(i.createElement)(
            l.a,
            { demoStyles: 'height: 15rem;' },
            Object(y.e)(I, 'lookup-typeahead')
          ),
          z({ id: 'Keyboard-interaction-2' }, 'Keyboard interaction'),
          Y(
            {},
            'The same keyboard interactions apply from the base Combobox, but with these differences:'
          ),
          V(
            {},
            J(
              {},
              G({}, 'Up'),
              ' and ',
              G({}, 'Down'),
              ' arrows ',
              Q({}, 'should not'),
              ' update the ',
              G({}, 'input'),
              ' value to reflect the currently selected option. The ',
              G({}, 'input'),
              ' value should only be updated upon selection.'
            )
          ),
          Object(i.createElement)(
            l.a,
            { demoStyles: 'height: 10rem;' },
            Object(y.e)(I, 'lookup-highlighting-an-option')
          ),
          z({ id: 'Selecting-an-option-3' }, 'Selecting an option'),
          Y(
            {},
            'The user again can click on the desired option or press the ',
            G({}, 'Enter'),
            ' key with the desired option highlighted. The user can only select from the returned options; a plain text string is not a valid selection with the Entity Lookup.'
          ),
          Y(
            {},
            'The selected option is still set as the value of the text ',
            G({}, 'input'),
            ', but this time we make the ',
            G({}, 'input'),
            ' look like a dismissible pill. This ',
            G({}, 'input'),
            ' becomes readonly at this point, so the user can no longer type into it.'
          ),
          Y(
            {},
            'To remove the selected option, simply press the ',
            G({}, 'Delete'),
            ' key when focused inside the text ',
            G({}, 'input'),
            ' or click the remove "x".'
          ),
          Object(i.createElement)(
            c.a,
            { type: 'a11y', header: 'Accessibility Requirement' },
            Object(i.createElement)(
              'p',
              null,
              'When the option is selected, make sure to add the ',
              Object(i.createElement)('code', null, 'readonly'),
              ' ',
              'attribute to the text ',
              Object(i.createElement)('code', null, 'input'),
              '. Be sure to remove it again when the option is cleared.'
            )
          ),
          Object(i.createElement)(
            l.a,
            null,
            Object(y.e)(I, 'lookup-selected-an-option')
          ),
          z({ id: 'Multiple-selection-2' }, 'Multiple selection'),
          Y(
            {},
            'Multiple selection is handled the same as the Base and Autocomplete Combobox, a list of selected entities is displayed under the combobox as a ',
            B(
              { href: '/components/pills/#Listbox-Of-Pill-Options' },
              'Listbox of Pills'
            ),
            '.'
          ),
          Object(i.createElement)(
            l.a,
            null,
            Object(y.e)(I, 'lookup-multiple-options')
          ),
          Object(i.createElement)(W.b, {
            docsLink: '#Mobile',
            header: 'Mobile context changes',
            elementName: 'comboboxes with multiple selection'
          }),
          Object(i.createElement)(
            l.a,
            { frameOnly: !0 },
            Object(y.e)(I, 'lookup-multiple-options')
          ),
          U(
            { id: 'Grouped-Comboboxes-(Cross-entity-Polymorphic)' },
            'Grouped Comboboxes (Cross-entity / Polymorphic)'
          ),
          Y(
            {},
            'The Grouped Comboboxes should be used when a Combobox has another Combobox appended or prepended to itself.'
          ),
          Y(
            {},
            'The containing ',
            G({}, 'div'),
            ' of the comboboxes should have the class ',
            G({}, 'slds-combobox-group'),
            ' on it.'
          ),
          Object(i.createElement)(
            c.a,
            { type: 'warning', header: 'Keep in mind' },
            Object(i.createElement)(
              'p',
              null,
              'The grouped combobox only accepts ',
              Object(i.createElement)('em', null, 'one'),
              ' addon, in addition to the primary combobox. Use the classes ',
              Object(i.createElement)(
                'code',
                null,
                'slds-combobox_addon-start'
              ),
              ' and',
              ' ',
              Object(i.createElement)('code', null, 'slds-combobox_addon-end'),
              ' to describe the position of the form element.'
            )
          ),
          Object(i.createElement)(
            c.a,
            { type: 'a11y', header: 'Accessibility Requirement' },
            Object(i.createElement)(
              'p',
              null,
              'Be sure to set ',
              Object(i.createElement)('code', null, 'aria-controls'),
              ' on the Object Switcher, which points to the Search Combobox ID.'
            )
          ),
          Object(i.createElement)(l.a, { demoStyles: 'height: 17rem;' }, S),
          Object(i.createElement)(W.b, {
            docsLink: '#Mobile',
            header: 'Mobile context changes',
            elementName: 'grouped comboboxes (cross-entity / polymorphic)'
          }),
          Object(i.createElement)(
            l.a,
            { frameStyles: { height: '21rem' }, frameOnly: !0 },
            S
          ),
          z({ id: 'User-input-(Typeahead)' }, 'User input (Typeahead)'),
          Object(i.createElement)(
            l.a,
            { demoStyles: 'height: 15rem;' },
            Object(y.e)(P, 'typeahead')
          ),
          z(
            { id: 'User-input-(Typeahead)-Loading' },
            'User input (Typeahead) - Loading'
          ),
          Object(i.createElement)(
            l.a,
            { demoStyles: 'height: 15rem;' },
            Object(y.e)(P, 'typeahead-loading')
          ),
          z({ id: 'Selecting-options' }, 'Selecting options'),
          Object(i.createElement)(
            l.a,
            null,
            Object(y.e)(P, 'selected-options')
          ),
          z(
            { id: 'User-input-with-selection(s)-made' },
            'User input with selection(s) made'
          ),
          Object(i.createElement)(
            l.a,
            { demoStyles: 'height: 15rem;' },
            Object(y.e)(P, 'selected-options-open')
          ),
          z({ id: 'Selected-options-overflow' }, 'Selected options overflow'),
          Y(
            {},
            'When a user is not focused on any element inside of the combobox group, the pill container should become collapsed to reduce vertical space.'
          ),
          Y(
            {},
            'The combobox group element needs the class ',
            G({}, 'slds-has-selection'),
            ' when a selection has been made. The pill selections are found inside of a ',
            B(
              { href: '/components/pills/#Listbox-Of-Pill-Options' },
              'Listbox of Pills'
            ),
            ' located after the combobox group. It requires the class ',
            G({}, 'slds-listbox_selection-group'),
            ' to provide appropriate styling for the expanding and collapsing behavior of this region.'
          ),
          H({ id: 'Collapsed' }, 'Collapsed'),
          Y(
            {},
            'By default, the ',
            G({}, 'slds-listbox_selection-group'),
            ' is collapsed.'
          ),
          Object(i.createElement)(
            l.a,
            null,
            Object(y.e)(P, 'overflow-collapsed')
          ),
          H({ id: 'Expanded' }, 'Expanded'),
          Y(
            {},
            'When a user focuses on ',
            R({}, 'any'),
            ' element inside of the combobox group, the class ',
            G({}, 'slds-is-expanded'),
            ' should be applied to the ',
            G({}, 'slds-listbox_selection-group'),
            '. The selection group should remain open until the user moves away from any element inside the combobox group.'
          ),
          Object(i.createElement)(
            l.a,
            null,
            Object(y.e)(P, 'overflow-expanded')
          ),
          Y(
            {},
            'For mouse users, clicking on the "+{x} more" text would expand the selection group and place the user\'s focus on the first pill inside the Listbox of Pills.'
          ),
          z({ id: 'Scoping-results' }, 'Scoping results'),
          Y(
            {},
            'A grouped combobox is intended to be used to filter down or scope you search results. You can do so by interacting with the object switcher to scope down to an object type.'
          ),
          Y(
            {},
            'The containing element should receive the class ',
            G({}, 'slds-combobox_object-switcher'),
            ' and ',
            G({}, 'slds-combobox_addon-start'),
            '.'
          ),
          H({ id: 'Text-variant' }, 'Text variant'),
          Object(i.createElement)(
            l.a,
            { demoStyles: 'height: 17rem;' },
            Object(y.e)(P, 'scoping-results-focused')
          ),
          H({ id: 'Icon-variant' }, 'Icon variant'),
          K({ id: 'Blurred' }, 'Blurred'),
          Object(i.createElement)(
            l.a,
            null,
            Object(y.e)(P, 'scoping-results-icon')
          ),
          K({ id: 'Focused' }, 'Focused'),
          Object(i.createElement)(
            l.a,
            { demoStyles: 'height: 13rem;' },
            Object(y.e)(P, 'scoping-results-icon-focused')
          ),
          U({ id: 'Combobox-with-a-Dialog' }, 'Combobox with a Dialog'),
          Y(
            {},
            'If the data displayed within the dropdown of a combobox cannot be represented as a listbox (as shown above), tree, grid, or tree-grid, then the dropdown should be represented as a dialog, with ',
            G({}, 'role="dialog"'),
            '.'
          ),
          Y(
            {},
            'The key difference for ',
            G({}, 'dialog'),
            ' dropdowns lies in how they handle focus. In ',
            G({}, 'listbox'),
            ' dropdowns, users can enter values in the input while arrowing through the listbox options using ',
            G({}, 'aria-activedescendant'),
            '. In ',
            G({}, 'dialog'),
            ' dropdowns, the dropdown becomes a focus trap, so users must have a way to clear or save any selections or changes made.'
          ),
          Object(i.createElement)(
            c.a,
            { type: 'a11y', header: 'Implementation Details' },
            Object(i.createElement)(
              'ol',
              null,
              Object(i.createElement)(
                'li',
                null,
                '1. The input does not have `aria-autocomplete`, it is essentially readonly'
              ),
              Object(i.createElement)(
                'li',
                null,
                '2. The input for this dialog variant will also never have `aria-activedescendant`'
              ),
              Object(i.createElement)(
                'li',
                null,
                '3. The combobox `<div>` with `class="slds-combobox"` has `aria-haspopup=”dialog”`'
              ),
              Object(i.createElement)(
                'li',
                null,
                '4. The dropdown is a dialog with `role="dialog"`'
              ),
              Object(i.createElement)(
                'li',
                null,
                "5. The dialog should have an `aria-label` with a value for the dialog's title"
              ),
              Object(i.createElement)(
                'li',
                null,
                '6. The combobox has `aria-expanded="false"` when the dialog is closed, and `aria-expanded="true"` when the dialog is open.',
                ' '
              )
            )
          ),
          Object(i.createElement)(l.a, null, F),
          z({ id: 'Open-Dialog' }, 'Open Dialog'),
          Y(
            {},
            'To open the dialog, remove the class ',
            G({}, 'slds-popover_hide'),
            ' from the ',
            G({}, '<div>'),
            ' with ',
            G({}, 'class="slds-popover"'),
            '. Any content can go inside a ',
            G({}, 'dialog'),
            ' dropdown.'
          ),
          Object(i.createElement)(
            c.a,
            { type: 'a11y', header: 'Accessibility Note' },
            Object(i.createElement)(
              'p',
              null,
              'When the dialog is open, be sure to change `aria-expanded` to **true** on the combobox `<div>` with `class="slds-combobox"`.'
            )
          ),
          Object(i.createElement)(l.a, null, Object(y.e)(L, 'open')),
          z({ id: 'Keyboard-Interaction' }, 'Keyboard Interaction'),
          V(
            {},
            J({}, 'Focusing on the input does not open the dropdown'),
            J({}, 'Typing in the input does nothing'),
            J(
              {},
              'Pressing the ',
              G({}, 'down arrow'),
              " from the input opens the dialog and moves the user's focus into the dialog."
            ),
            J(
              {},
              'The dialog dropdown is a focus trap',
              V(
                {},
                J(
                  {},
                  'Pressing the ',
                  G({}, 'Tab'),
                  ' key cycles the user through all UI elements in the dialog'
                )
              )
            ),
            J(
              {},
              'Pressing ',
              G({}, 'Escape'),
              ' closes the dialog and clears any changes'
            ),
            J(
              {},
              'Pressing the Cancel button closes the dialog and clears any changes'
            ),
            J(
              {},
              'Pressing the Save button updates the selected value in the input and closes the dialog'
            )
          ),
          z({ id: 'Focus-Management' }, 'Focus Management'),
          V(
            {},
            J(
              {},
              'Clicking on the input opens and focuses the cursor inside the dialog on the first focusable element.'
            ),
            J(
              {},
              'Placing focus on the input ',
              R({}, 'does not'),
              ' open the dialog'
            ),
            J(
              {},
              'Pressing the ',
              G({}, 'down arrow'),
              ' whilst focused on the input opens the dialog and moves focus to the first focusable element'
            )
          ),
          z({ id: 'Examples' }, 'Examples'),
          H({ id: 'Multiple-Selection' }, 'Multiple Selection'),
          Y(
            {},
            'Below is an example of a ',
            G({}, 'dialog'),
            ' combobox where users can make multiple selections using checkboxes. The main difference between the ',
            Q({}, 'dialog variant'),
            ' of a multi-select combobox and the ',
            B(
              { href: '/components/combobox/#Multiple-selection-2' },
              'multi-select Entity Autocomplete'
            ),
            ' involves the behavior after a selection is made. A ',
            G({}, 'dialog'),
            ' will not close after each selection, since it is a focus trap, while the ',
            G({}, 'listbox'),
            ' dropdown of the Entity Autocomplete example closes after each selection made, forcing users to re-open the listbox if they need to make another selection.'
          ),
          Object(i.createElement)(
            c.a,
            {
              type: 'note',
              header: 'Dueling Picklist vs. Multi Select Combobox'
            },
            Object(i.createElement)(
              'p',
              null,
              'We recommend using the',
              ' ',
              Object(i.createElement)(
                'a',
                { href: '/components/dueling-picklist/' },
                ' Dueling Picklist'
              ),
              ' when there are many items to choose from, such as “Select Country”. Use a multiselect combobox with a dialog when you have less horizontal real estate available and fewer items to select from.'
            )
          ),
          K({ id: 'Open' }, 'Open'),
          Object(i.createElement)(
            l.a,
            null,
            Object(y.e)(M, 'with-checkbox-group')
          ),
          K({ id: 'Open-and-Selecting' }, 'Open and Selecting'),
          Y(
            {},
            'If nothing has been selected yet, the input\'s placeholder remains "Select an Option" or something similar.'
          ),
          Object(i.createElement)(
            l.a,
            null,
            Object(y.e)(M, 'selecting-options')
          ),
          K(
            { id: 'Closed-with-One-Option-Selected' },
            'Closed with One Option Selected'
          ),
          Y(
            {},
            "When only one selection has been made, the input's value takes on the value of the selection - German in this case."
          ),
          Object(i.createElement)(
            l.a,
            null,
            Object(y.e)(M, 'closed-one-option-selected')
          ),
          K(
            { id: 'Open-with-One-Option-Selected' },
            'Open with One Option Selected'
          ),
          Object(i.createElement)(
            l.a,
            null,
            Object(y.e)(M, 'open-one-option-selected')
          ),
          K(
            { id: 'Closed-with-Two-or-More-Options-Selected' },
            'Closed with Two or More Options Selected'
          ),
          Y(
            {},
            'When more then one option has been selected, the input\'s value reads "{# of items selected} options selected".'
          ),
          Object(i.createElement)(
            l.a,
            null,
            Object(y.e)(M, 'closed-two-or-more-options-selected')
          ),
          K(
            { id: 'Open-with-Two-or-More-Options-Selected' },
            'Open with Two or More Options Selected'
          ),
          Object(i.createElement)(
            l.a,
            null,
            Object(y.e)(M, 'open-two-or-more-options-selected')
          )
        );
      },
      Z = function() {
        return Object(s.a)(X());
      };
  }
});