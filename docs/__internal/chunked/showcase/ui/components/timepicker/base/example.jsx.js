var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/timepicker/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var i, a, r = t[0], c = t[1], s = t[2], d = 0, p = [];
      d < r.length;
      d++
    )
      (a = r[d]),
        Object.prototype.hasOwnProperty.call(l, a) && l[a] && p.push(l[a][0]),
        (l[a] = 0);
    for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]);
    for (u && u(t); p.length; ) p.shift()();
    return o.push.apply(o, s || []), n();
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], i = !0, r = 1; r < n.length; r++) {
        var c = n[r];
        0 !== l[c] && (i = !1);
      }
      i && (o.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var i = {},
    l = {
      148: 0,
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
    o = [];
  function a(t) {
    if (i[t]) return i[t].exports;
    var n = (i[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = e),
    (a.c = i),
    (a.d = function(e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (a.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (a.t = function(e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var i in e)
          a.d(
            n,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (a.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return a.d(t, 'a', t), t;
    }),
    (a.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = '/assets/scripts/bundle/');
  var r = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    c = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var s = 0; s < r.length; s++) t(r[s]);
  var u = c;
  return o.push([117, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  117: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'Context', function() {
        return r;
      }),
      n.d(t, 'states', function() {
        return c;
      });
    var i = n(0),
      l = n.n(i),
      o = n(12),
      a = function(e) {
        return l.a.createElement(
          o.c,
          {
            listboxClassName:
              'slds-dropdown slds-dropdown_fluid slds-dropdown_length-5',
            vertical: !0
          },
          l.a.createElement(
            o.d,
            null,
            l.a.createElement(o.e, {
              id: 'listbox-option-unique-id-01',
              title: '6:00am',
              focused: e.optionFocused
            })
          ),
          l.a.createElement(
            o.d,
            null,
            l.a.createElement(o.e, {
              id: 'listbox-option-unique-id-02',
              title: '7:00am'
            })
          ),
          l.a.createElement(
            o.d,
            null,
            l.a.createElement(o.e, {
              id: 'listbox-option-unique-id-03',
              title: '8:00am',
              selected: e.optionSelected
            })
          ),
          l.a.createElement(
            o.d,
            null,
            l.a.createElement(o.e, {
              id: 'listbox-option-unique-id-04',
              title: '9:00am'
            })
          ),
          l.a.createElement(
            o.d,
            null,
            l.a.createElement(o.e, {
              id: 'listbox-option-unique-id-05',
              title: '10:00am'
            })
          ),
          l.a.createElement(
            o.d,
            null,
            l.a.createElement(o.e, {
              id: 'listbox-option-unique-id-06',
              title: '11:00am'
            })
          ),
          l.a.createElement(
            o.d,
            null,
            l.a.createElement(o.e, {
              id: 'listbox-option-unique-id-07',
              title: '12:00pm'
            })
          ),
          l.a.createElement(
            o.d,
            null,
            l.a.createElement(o.e, {
              id: 'listbox-option-unique-id-08',
              title: '1:00pm'
            })
          ),
          l.a.createElement(
            o.d,
            null,
            l.a.createElement(o.e, {
              id: 'listbox-option-unique-id-09',
              title: '2:00pm'
            })
          ),
          l.a.createElement(
            o.d,
            null,
            l.a.createElement(o.e, {
              id: 'listbox-option-unique-id-10',
              title: '3:00pm'
            })
          ),
          l.a.createElement(
            o.d,
            null,
            l.a.createElement(o.e, {
              id: 'listbox-option-unique-id-11',
              title: '4:00pm'
            })
          ),
          l.a.createElement(
            o.d,
            null,
            l.a.createElement(o.e, {
              id: 'listbox-option-unique-id-12',
              title: '5:00pm'
            })
          )
        );
      },
      r = function(e) {
        return l.a.createElement(
          'div',
          { style: { height: '15rem' } },
          e.children
        );
      };
    t.default = l.a.createElement(o.a, {
      label: 'Time',
      className: 'slds-combobox-picklist slds-timepicker',
      autocomplete: !0,
      inputIcon: 'right',
      inputIconRightSymbol: 'clock',
      inputIconRightAssistiveText: !1,
      placeholder: ' ',
      listbox: l.a.createElement(a, null)
    });
    var c = [
      {
        id: 'focused',
        label: 'Focused',
        element: l.a.createElement(o.a, {
          label: 'Time',
          className: 'slds-combobox-picklist slds-timepicker',
          autocomplete: !0,
          isOpen: !0,
          inputIcon: 'right',
          inputIconRightSymbol: 'clock',
          inputIconRightAssistiveText: !1,
          placeholder: ' ',
          listbox: l.a.createElement(a, null)
        })
      },
      {
        id: 'open-item-focused',
        label: 'Open - Item Focused',
        element: l.a.createElement(o.a, {
          label: 'Time',
          className: 'slds-combobox-picklist slds-timepicker',
          autocomplete: !0,
          isOpen: !0,
          inputIcon: 'right',
          inputIconRightSymbol: 'clock',
          inputIconRightAssistiveText: !1,
          placeholder: ' ',
          listbox: l.a.createElement(a, { optionFocused: !0 }),
          'aria-activedescendant': 'listbox-option-unique-id-01'
        })
      },
      {
        id: 'time-selection',
        label: 'Open - Time selected',
        element: l.a.createElement(o.a, {
          label: 'Time',
          className: 'slds-combobox-picklist slds-timepicker',
          autocomplete: !0,
          isOpen: !0,
          inputIcon: 'right',
          inputIconRightSymbol: 'clock',
          inputIconRightAssistiveText: !1,
          placeholder: ' ',
          value: '8:00am',
          listbox: l.a.createElement(a, { optionSelected: !0 })
        })
      }
    ];
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  }
});
