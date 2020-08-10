var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/datepickers/range/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, r, i = t[0], c = t[1], u = t[2], s = 0, m = [];
      s < i.length;
      s++
    )
      (r = i[s]),
        Object.prototype.hasOwnProperty.call(l, r) && l[r] && m.push(l[r][0]),
        (l[r] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    for (o && o(t); m.length; ) m.shift()();
    return d.push.apply(d, u || []), a();
  }
  function a() {
    for (var e, t = 0; t < d.length; t++) {
      for (var a = d[t], n = !0, i = 1; i < a.length; i++) {
        var c = a[i];
        0 !== l[c] && (n = !1);
      }
      n && (d.splice(t--, 1), (e = r((r.s = a[0]))));
    }
    return e;
  }
  var n = {},
    l = {
      57: 0,
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
    d = [];
  function r(t) {
    if (n[t]) return n[t].exports;
    var a = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
  }
  (r.m = e),
    (r.c = n),
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
        for (var n in e)
          r.d(
            a,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
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
  return d.push([118, 0]), a();
})({
  0: function(e, t) {
    e.exports = React;
  },
  118: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'Context', function() {
        return i;
      }),
      a.d(t, 'states', function() {
        return c;
      }),
      a.d(t, 'examples', function() {
        return u;
      });
    var n = a(0),
      l = a.n(n),
      d = a(31),
      r = function(e) {
        return l.a.createElement(
          'div',
          { className: 'slds-form slds-form_compound' },
          l.a.createElement(
            'fieldset',
            { className: 'slds-form-element' },
            l.a.createElement(
              'legend',
              {
                className: 'slds-form-element__label slds-form-element__legend'
              },
              'Start and End Date'
            ),
            l.a.createElement(
              'div',
              { className: 'slds-form-element__control' },
              l.a.createElement(
                'div',
                { className: 'slds-form-element__group' },
                l.a.createElement(
                  'div',
                  { className: 'slds-form-element__row' },
                  e.children
                )
              )
            )
          )
        );
      },
      i = function(e) {
        return l.a.createElement(
          'div',
          { style: { height: '25rem' } },
          e.children
        );
      };
    t.default = l.a.createElement(
      r,
      null,
      l.a.createElement(d.DatePickerElement, {
        idPrefix: 'rangeDefault_start',
        labelContent: 'Start Date',
        dateInputId: ''.concat('date-input-id-01', '-default'),
        isOpen: !0,
        todayActive: !0
      }),
      l.a.createElement(d.DatePickerElement, {
        idPrefix: 'rangeDefault_end',
        labelContent: 'End Date',
        dateInputId: ''.concat('date-input-id-02', '-default')
      })
    );
    var c = [
        {
          id: 'start-date',
          label: 'Start date selected',
          element: l.a.createElement(
            r,
            null,
            l.a.createElement(d.DatePickerElement, {
              idPrefix: 'rangeSelected_start',
              labelContent: 'Start Date',
              dateInputId: ''.concat('date-input-id-01', '-start_selected'),
              isOpen: !0,
              todayActive: !0,
              dateSelected: 'single',
              dateRange: 'week-4',
              defaultValue: '06/24/2020'
            }),
            l.a.createElement(d.DatePickerElement, {
              idPrefix: 'rangeSelected_end',
              labelContent: 'End Date',
              dateInputId: ''.concat('date-input-id-02', '-start_selected')
            })
          )
        },
        {
          id: 'end-date-week',
          label: 'End date selected (Same week)',
          element: l.a.createElement(
            r,
            null,
            l.a.createElement(d.DatePickerElement, {
              idPrefix: 'rangeWeekSame_start',
              labelContent: 'Start Date',
              dateInputId: ''.concat('date-input-id-01', '-end_selected'),
              defaultValue: '06/24/2020'
            }),
            l.a.createElement(d.DatePickerElement, {
              idPrefix: 'rangeWeekSame_end',
              labelContent: 'End Date',
              dateInputId: ''.concat('date-input-id-02', '-end_selected'),
              isOpen: !0,
              todayActive: !0,
              dateSelected: !0,
              dateRange: 'week-4',
              defaultValue: '06/27/2020'
            })
          )
        },
        {
          id: 'end-date-weeks',
          label: 'End date selected (Different week)',
          element: l.a.createElement(
            r,
            null,
            l.a.createElement(d.DatePickerElement, {
              idPrefix: 'rangeWeekDiff_start',
              labelContent: 'Start Date',
              dateInputId: ''.concat(
                'date-input-id-01',
                '-end_selected_diff_week'
              ),
              defaultValue: '06/24/2020'
            }),
            l.a.createElement(d.DatePickerElement, {
              idPrefix: 'rangeWeekDiff_end',
              labelContent: 'End Date',
              dateInputId: ''.concat(
                'date-input-id-02',
                '-end_selected_diff_week'
              ),
              isOpen: !0,
              todayActive: !0,
              dateSelected: !0,
              dateRange: 'week-4-5',
              dateRangeMulti: !0,
              defaultValue: '06/30/2020'
            })
          )
        },
        {
          id: 'today-in-range',
          label: 'Today - In selected range',
          element: l.a.createElement(
            r,
            null,
            l.a.createElement(d.DatePickerElement, {
              idPrefix: 'rangeToday_start',
              labelContent: 'Start Date',
              dateInputId: ''.concat('date-input-id-01', '-today_in_range'),
              defaultValue: '06/24/2020'
            }),
            l.a.createElement(d.DatePickerElement, {
              idPrefix: 'rangeToday_end',
              labelContent: 'End Date',
              dateInputId: ''.concat('date-input-id-02', '-today_in_range'),
              isOpen: !0,
              todayActiveInRange: !0,
              dateSelected: !0,
              dateRange: 'week-4-5',
              dateRangeMulti: !0,
              defaultValue: '06/30/2020'
            })
          )
        },
        {
          id: 'span-across-month-in-range',
          label: 'Current and adjacent month in selected range',
          element: l.a.createElement(
            r,
            null,
            l.a.createElement(d.DatePickerElement, {
              idPrefix: 'rangeSpanMonth_start',
              labelContent: 'Start Date',
              dateInputId: ''.concat('date-input-id-01', '-adjacent_month'),
              defaultValue: '06/28/2020'
            }),
            l.a.createElement(d.DatePickerElement, {
              idPrefix: 'rangeSpanMonth_end',
              labelContent: 'End Date',
              dateInputId: ''.concat('date-input-id-02', '-adjacent_month'),
              isOpen: !0,
              dateSelected: !0,
              dateRange: 'week-5',
              defaultValue: '07/04/2020'
            })
          )
        }
      ],
      u = [
        {
          id: 'table_default',
          label: 'Default in a Data Table',
          element: l.a.createElement(
            r,
            null,
            l.a.createElement(
              d.SimpleTable,
              null,
              l.a.createElement(d.DatePickerElement, {
                idPrefix: 'tableRangeDefault_start',
                labelContent: 'Start Date',
                dateInputId: ''.concat('date-input-id-01', '-default'),
                isOpen: !0,
                todayActive: !0
              }),
              l.a.createElement(d.DatePickerElement, {
                idPrefix: 'tableRangeDefault_end',
                labelContent: 'End Date',
                dateInputId: ''.concat('date-input-id-02', '-default')
              })
            )
          )
        },
        {
          id: 'table_start-date',
          label: 'Start date selected in a Data Table',
          element: l.a.createElement(
            r,
            null,
            l.a.createElement(
              d.SimpleTable,
              null,
              l.a.createElement(d.DatePickerElement, {
                idPrefix: 'tableRangeSelected_start',
                labelContent: 'Start Date',
                dateInputId: ''.concat(
                  'date-input-id-01',
                  '-table-start_selected'
                ),
                isOpen: !0,
                todayActive: !0,
                dateSelected: 'single',
                dateRange: 'week-4',
                defaultValue: '06/24/2020'
              }),
              l.a.createElement(d.DatePickerElement, {
                idPrefix: 'tableRangeSelected_end',
                labelContent: 'End Date',
                dateInputId: ''.concat(
                  'date-input-id-02',
                  '-table-start_selected'
                )
              })
            )
          )
        },
        {
          id: 'table_end-date-week',
          label: 'End date selected (Same week) in a Data Table',
          element: l.a.createElement(
            r,
            null,
            l.a.createElement(
              d.SimpleTable,
              null,
              l.a.createElement(d.DatePickerElement, {
                idPrefix: 'tableRangeWeekSame_start',
                labelContent: 'Start Date',
                dateInputId: ''.concat(
                  'date-input-id-01',
                  '-table-end_selected'
                ),
                defaultValue: '06/24/2020'
              }),
              l.a.createElement(d.DatePickerElement, {
                idPrefix: 'tableRangeWeekSame_end',
                labelContent: 'End Date',
                dateInputId: ''.concat(
                  'date-input-id-02',
                  '-table-end_selected'
                ),
                isOpen: !0,
                todayActive: !0,
                dateSelected: !0,
                dateRange: 'week-4',
                defaultValue: '06/27/2020'
              })
            )
          )
        },
        {
          id: 'table_end-date-weeks',
          label: 'End date selected (Different week) in a Data Table',
          element: l.a.createElement(
            r,
            null,
            l.a.createElement(
              d.SimpleTable,
              null,
              l.a.createElement(d.DatePickerElement, {
                idPrefix: 'tableRangeWeekDiff_start',
                labelContent: 'Start Date',
                dateInputId: ''.concat(
                  'date-input-id-01',
                  '-table-end_selected_diff_week'
                ),
                defaultValue: '06/24/2020'
              }),
              l.a.createElement(d.DatePickerElement, {
                idPrefix: 'tableRangeWeekDiff_end',
                labelContent: 'End Date',
                dateInputId: ''.concat(
                  'date-input-id-02',
                  '-table-end_selected_diff_week'
                ),
                isOpen: !0,
                todayActive: !0,
                dateSelected: !0,
                dateRange: 'week-4-5',
                dateRangeMulti: !0,
                defaultValue: '06/30/2020'
              })
            )
          )
        },
        {
          id: 'table_today-in-range',
          label: 'Today - In selected range in a Data Table',
          element: l.a.createElement(
            r,
            null,
            l.a.createElement(
              d.SimpleTable,
              null,
              l.a.createElement(d.DatePickerElement, {
                idPrefix: 'tableRangeToday_start',
                labelContent: 'Start Date',
                dateInputId: ''.concat(
                  'date-input-id-01',
                  '-table-today_in_range'
                ),
                defaultValue: '06/24/2020'
              }),
              l.a.createElement(d.DatePickerElement, {
                idPrefix: 'tableRangeToday_end',
                labelContent: 'End Date',
                dateInputId: ''.concat(
                  'date-input-id-02',
                  '-table-today_in_range'
                ),
                isOpen: !0,
                todayActiveInRange: !0,
                dateSelected: !0,
                dateRange: 'week-4-5',
                dateRangeMulti: !0,
                defaultValue: '06/30/2020'
              })
            )
          )
        },
        {
          id: 'table_span-across-month-in-range',
          label: 'Current and adjacent month in selected range in a Data Table',
          element: l.a.createElement(
            r,
            null,
            l.a.createElement(
              d.SimpleTable,
              null,
              l.a.createElement(d.DatePickerElement, {
                idPrefix: 'tableRangeSpanMonth_start',
                labelContent: 'Start Date',
                dateInputId: ''.concat(
                  'date-input-id-01',
                  '-table-adjacent_month'
                ),
                defaultValue: '06/28/2020'
              }),
              l.a.createElement(d.DatePickerElement, {
                idPrefix: 'tableRangeSpanMonth_end',
                labelContent: 'End Date',
                dateInputId: ''.concat(
                  'date-input-id-02',
                  '-table-adjacent_month'
                ),
                isOpen: !0,
                dateSelected: !0,
                dateRange: 'week-5',
                defaultValue: '07/04/2020'
              })
            )
          )
        }
      ];
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  }
});
