var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/datepickers/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, r, c = t[0], i = t[1], o = t[2], u = 0, p = [];
      u < c.length;
      u++
    )
      (r = c[u]),
        Object.prototype.hasOwnProperty.call(d, r) && d[r] && p.push(d[r][0]),
        (d[r] = 0);
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    for (s && s(t); p.length; ) p.shift()();
    return l.push.apply(l, o || []), a();
  }
  function a() {
    for (var e, t = 0; t < l.length; t++) {
      for (var a = l[t], n = !0, c = 1; c < a.length; c++) {
        var i = a[c];
        0 !== d[i] && (n = !1);
      }
      n && (l.splice(t--, 1), (e = r((r.s = a[0]))));
    }
    return e;
  }
  var n = {},
    d = { 25: 0 },
    l = [];
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
  var c = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    i = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var o = 0; o < c.length; o++) t(c[o]);
  var s = i;
  return l.push([273, 0]), a();
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
  273: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'getElement', function() {
        return O;
      }),
      a.d(t, 'getContents', function() {
        return S;
      });
    var n = a(0),
      d = a.n(n),
      l = a(4),
      r = a(1),
      c = (a(26), a(43), a(15)),
      i = a(2),
      o = a(37),
      s = function(e) {
        return d.a.createElement(
          'div',
          { className: 'slds-form slds-form_compound' },
          d.a.createElement(
            'fieldset',
            { className: 'slds-form-element' },
            d.a.createElement(
              'legend',
              {
                className: 'slds-form-element__label slds-form-element__legend'
              },
              'Start and End Date'
            ),
            d.a.createElement(
              'div',
              { className: 'slds-form-element__control' },
              d.a.createElement(
                'div',
                { className: 'slds-form-element__group' },
                d.a.createElement(
                  'div',
                  { className: 'slds-form-element__row' },
                  e.children
                )
              )
            )
          )
        );
      },
      u = function(e) {
        return d.a.createElement(
          'div',
          { style: { height: '25rem' } },
          e.children
        );
      },
      p = d.a.createElement(
        s,
        null,
        d.a.createElement(o.c, {
          idPrefix: 'rangeDefault_start',
          labelContent: 'Start Date',
          dateInputId: ''.concat('date-input-id-01', '-default'),
          isOpen: !0,
          todayActive: !0
        }),
        d.a.createElement(o.c, {
          idPrefix: 'rangeDefault_end',
          labelContent: 'End Date',
          dateInputId: ''.concat('date-input-id-02', '-default')
        })
      ),
      m = [
        {
          id: 'start-date',
          label: 'Start date selected',
          element: d.a.createElement(
            s,
            null,
            d.a.createElement(o.c, {
              idPrefix: 'rangeSelected_start',
              labelContent: 'Start Date',
              dateInputId: ''.concat('date-input-id-01', '-start_selected'),
              isOpen: !0,
              todayActive: !0,
              dateSelected: 'single',
              dateRange: 'week-4',
              defaultValue: '06/24/2020'
            }),
            d.a.createElement(o.c, {
              idPrefix: 'rangeSelected_end',
              labelContent: 'End Date',
              dateInputId: ''.concat('date-input-id-02', '-start_selected')
            })
          )
        },
        {
          id: 'end-date-week',
          label: 'End date selected (Same week)',
          element: d.a.createElement(
            s,
            null,
            d.a.createElement(o.c, {
              idPrefix: 'rangeWeekSame_start',
              labelContent: 'Start Date',
              dateInputId: ''.concat('date-input-id-01', '-end_selected'),
              defaultValue: '06/24/2020'
            }),
            d.a.createElement(o.c, {
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
          element: d.a.createElement(
            s,
            null,
            d.a.createElement(o.c, {
              idPrefix: 'rangeWeekDiff_start',
              labelContent: 'Start Date',
              dateInputId: ''.concat(
                'date-input-id-01',
                '-end_selected_diff_week'
              ),
              defaultValue: '06/24/2020'
            }),
            d.a.createElement(o.c, {
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
          element: d.a.createElement(
            s,
            null,
            d.a.createElement(o.c, {
              idPrefix: 'rangeToday_start',
              labelContent: 'Start Date',
              dateInputId: ''.concat('date-input-id-01', '-today_in_range'),
              defaultValue: '06/24/2020'
            }),
            d.a.createElement(o.c, {
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
          element: d.a.createElement(
            s,
            null,
            d.a.createElement(o.c, {
              idPrefix: 'rangeSpanMonth_start',
              labelContent: 'Start Date',
              dateInputId: ''.concat('date-input-id-01', '-adjacent_month'),
              defaultValue: '06/28/2020'
            }),
            d.a.createElement(o.c, {
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
      f = (o.d,
      o.c,
      ''.concat('date-input-id-01', '-default'),
      o.c,
      ''.concat('date-input-id-02', '-default'),
      o.d,
      o.c,
      ''.concat('date-input-id-01', '-table-start_selected'),
      o.c,
      ''.concat('date-input-id-02', '-table-start_selected'),
      o.d,
      o.c,
      ''.concat('date-input-id-01', '-table-end_selected'),
      o.c,
      ''.concat('date-input-id-02', '-table-end_selected'),
      o.d,
      o.c,
      ''.concat('date-input-id-01', '-table-end_selected_diff_week'),
      o.c,
      ''.concat('date-input-id-02', '-table-end_selected_diff_week'),
      o.d,
      o.c,
      ''.concat('date-input-id-01', '-table-today_in_range'),
      o.c,
      ''.concat('date-input-id-02', '-table-today_in_range'),
      o.d,
      o.c,
      ''.concat('date-input-id-01', '-table-adjacent_month'),
      o.c,
      ''.concat('date-input-id-02', '-table-adjacent_month'),
      l.c.a),
      h = l.c.code,
      b = l.c.h2,
      g = l.c.h3,
      y = l.c.h4,
      _ = l.c.li,
      w = l.c.p,
      E = l.c.strong,
      k = l.c.ul,
      O = function() {
        return Object(n.createElement)(
          l.b,
          {},
          Object(n.createElement)(
            'div',
            { className: 'doc lead' },
            'A datepicker is a text input to capture a date. You can select a single date, date range or date and time.'
          ),
          Object(n.createElement)(
            r.a,
            { exampleOnly: !0 },
            Object(n.createElement)(o.a, null, o.e)
          ),
          b({ id: 'About-Datepickers' }, 'About Datepickers'),
          g({ id: 'Implementation' }, 'Implementation'),
          w(
            {},
            'The datepicker is a ',
            f({ href: '/components/form-element' }, 'form element'),
            ', containing a label and text ',
            f({ href: '/components/input' }, 'input'),
            ', and a dropdown ',
            f({ href: '/components/menus' }, 'menu'),
            ', containing a grid-based calendar and filters. The form element acts as a trigger for the dropdown.'
          ),
          Object(n.createElement)(
            c.a,
            { type: 'warning' },
            Object(n.createElement)(
              'p',
              null,
              'Placement of inline form elements inside a data table cell is not supported. Instead, use a button to invoke a popover, which does support form elements.'
            )
          ),
          w({}, 'The datepicker has the following markup requirements:'),
          w({}, E({}, 'Desktop:')),
          k(
            {},
            _(
              {},
              'Add ',
              h({}, '.slds-is-open'),
              ' to the element with ',
              h({}, '.slds-dropdown-trigger'),
              ' to invoke the dropdown that contains the datepicker.'
            ),
            _(
              {},
              'The ',
              h({}, '.slds-is-selected'),
              ' modifier class is required on the ',
              h({}, 'td'),
              ' element that has the selected day.'
            ),
            _(
              {},
              'The ',
              h({}, '.slds-is-today'),
              ' modifier class is required on the ',
              h({}, 'td'),
              ' element that is the current day.'
            ),
            _(
              {},
              'The ',
              h({}, '.slds-has-multi-selection'),
              ' modifier class is required on the ',
              h({}, 'tr'),
              ' element that contains multiple days selected in the ',
              E({}, 'same'),
              ' week.'
            ),
            _(
              {},
              'The ',
              h({}, '.slds-has-multi-row-selection'),
              ' modifier class is required on any ',
              h({}, 'tr'),
              ' element that contains multiple days selected in the ',
              E({}, 'multiple'),
              ' weeks.'
            ),
            _(
              {},
              'The ',
              h({}, '.slds-is-selected-multi'),
              ' modifier class is required on the ',
              h({}, 'td'),
              ' element that contains a selected day within a range.'
            )
          ),
          w({}, E({}, 'Mobile:')),
          k(
            {},
            _(
              {},
              'When on mobile, we want to leverage the native date picker by changing the ',
              h({}, 'input'),
              ' type from ',
              h({}, 'text'),
              ' to ',
              h({}, 'date')
            ),
            _(
              {},
              'The ',
              h({}, 'input type="date"'),
              ' will create an input field allowing a date and time to be easily entered — this includes year, month, day.'
            ),
            _(
              {},
              'When switching ',
              h({}, 'input type="text"'),
              ' to ',
              h({}, 'input type="date"'),
              " for mobile, we need to remove the ARIA attributes. The native rendering doesn't require these.",
              k(
                {},
                _(
                  {},
                  'On the element with the class ',
                  h({}, 'slds-combobox'),
                  ', please remove ',
                  h({}, 'role="combobox"'),
                  ', ',
                  h({}, 'aria-expanded'),
                  ', and ',
                  h({}, 'aria-haspopup'),
                  '.'
                ),
                _(
                  {},
                  'On the ',
                  h({}, 'input'),
                  ' that we just added ',
                  h({}, 'type="date"'),
                  ' to, please remove ',
                  h({}, 'aria-controls'),
                  ', ',
                  h({}, 'aria-autocomplete'),
                  ', and ',
                  h({}, 'role="textbox"'),
                  '.'
                )
              )
            )
          ),
          g({ id: 'Accessibility' }, 'Accessibility'),
          y({ id: 'Markup' }, 'Markup'),
          w({}, E({}, 'Dialog:')),
          k(
            {},
            _(
              {},
              'Should act as a focus trap so the user only cycles through the datepicker ',
              h({}, 'dialog'),
              ' when the datepicker is open'
            )
          ),
          w({}, E({}, 'Grid:')),
          k(
            {},
            _(
              {},
              'Table must be labelled with ',
              h({}, 'role="grid"'),
              ' and be appropriately labelled with ',
              h({}, 'aria-labelledby')
            ),
            _(
              {},
              'Use ',
              h({}, 'aria-multiselectable="true"'),
              ' to allow for selection of multiple days'
            ),
            _({}, 'Should act as a single focus stop')
          ),
          w({}, E({}, 'Gridcell:')),
          k(
            {},
            _(
              {},
              'All dates should have ',
              h({}, 'role="gridcell"'),
              ' and ',
              h({}, 'aria-selected="false"'),
              ' on the ',
              h({}, 'gridcell'),
              ' by default'
            ),
            _(
              {},
              'If a date is selected, ',
              h({}, 'aria-selected'),
              ' should be set to ',
              h({}, 'true'),
              ' on the corresponding ',
              h({}, 'gridcell')
            ),
            _(
              {},
              h({}, 'aria-current'),
              ' is used to indicate which day is today and should be set to ',
              h({}, 'aria-current="date"')
            )
          ),
          w({}, E({}, 'Opening the Datepicker:')),
          k(
            {},
            _(
              {},
              'Mouse user: open the datepicker when a mouse user clicks on the input'
            ),
            _(
              {},
              'Keyboard user: only open the datepicker when a keyboard user presses ',
              h({}, 'enter'),
              ' or ',
              h({}, 'space'),
              ' on the datepicker button',
              k(
                {},
                _(
                  {},
                  'Do not open the datepicker when user focus is on the input'
                )
              )
            )
          ),
          y({ id: 'Keyboard-Interactions' }, 'Keyboard Interactions'),
          k(
            {},
            _(
              {},
              'When the datepicker opens, place user focus on either the currently selected date in the grid or if no date is selected the current day'
            ),
            _(
              {},
              h({}, 'left'),
              ' and ',
              h({}, 'right'),
              ' arrow keys to navigate row'
            ),
            _(
              {},
              h({}, 'up'),
              ' and ',
              h({}, 'down'),
              ' arrow keys to navigate between weeks on the same day'
            ),
            _(
              {},
              h({}, 'home'),
              ' and ',
              h({}, 'end'),
              ' keys to jump to beginning or end of current row'
            ),
            _(
              {},
              h({}, 'pagedown'),
              ' and ',
              h({}, 'pageup'),
              ' to navigate between months'
            ),
            _(
              {},
              h({}, 'alt + pagedown'),
              ' and ',
              h({}, 'alt + pageup'),
              ' to navigate between years'
            ),
            _({}, h({}, 'enter'), ' to select date and close datepicker'),
            _({}, h({}, 'esc'), ' to close datepicker without choosing a date')
          ),
          b({ id: 'Base' }, 'Base'),
          Object(n.createElement)(
            r.a,
            null,
            Object(n.createElement)(o.a, null, o.e)
          ),
          g({ id: 'States' }, 'States'),
          y({ id: 'Date-Selected' }, 'Date Selected'),
          Object(n.createElement)(
            r.a,
            null,
            Object(n.createElement)(
              o.a,
              null,
              Object(i.e)(o.f, 'datepicker-day-selected')
            )
          ),
          y({ id: 'Date-Picker-Has-Error' }, 'Date Picker Has Error'),
          Object(n.createElement)(
            r.a,
            null,
            Object(n.createElement)(
              o.a,
              null,
              Object(i.e)(o.f, 'datepicker-with-error')
            )
          ),
          b({ id: 'Range' }, 'Range'),
          Object(n.createElement)(
            r.a,
            null,
            Object(n.createElement)(u, null, p)
          ),
          g({ id: 'States-2' }, 'States'),
          y({ id: 'Start-Date-Selected' }, 'Start Date Selected'),
          Object(n.createElement)(
            r.a,
            null,
            Object(n.createElement)(o.a, null, Object(i.e)(m, 'start-date'))
          ),
          y(
            { id: 'End-date-selected-(Same-week)' },
            'End date selected (Same week)'
          ),
          Object(n.createElement)(
            r.a,
            null,
            Object(n.createElement)(o.a, null, Object(i.e)(m, 'end-date-week'))
          ),
          y(
            { id: 'End-date-selected-(Different-week)' },
            'End date selected (Different week)'
          ),
          Object(n.createElement)(
            r.a,
            null,
            Object(n.createElement)(o.a, null, Object(i.e)(m, 'end-date-weeks'))
          ),
          y({ id: 'Today-In-selected-range' }, 'Today - In selected range'),
          Object(n.createElement)(
            r.a,
            null,
            Object(n.createElement)(o.a, null, Object(i.e)(m, 'today-in-range'))
          ),
          y(
            { id: 'Current-And-Adjacent-Month-In-Selected-Range' },
            'Current And Adjacent Month In Selected Range'
          ),
          Object(n.createElement)(
            r.a,
            null,
            Object(n.createElement)(
              o.a,
              null,
              Object(i.e)(m, 'span-across-month-in-range')
            )
          )
        );
      },
      S = function() {
        return Object(l.a)(O());
      };
  }
});
