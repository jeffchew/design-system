var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/progress-indicator/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var a, c, n = t[0], i = t[1], o = t[2], p = 0, m = [];
      p < n.length;
      p++
    )
      (c = n[p]),
        Object.prototype.hasOwnProperty.call(l, c) && l[c] && m.push(l[c][0]),
        (l[c] = 0);
    for (a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
    for (d && d(t); m.length; ) m.shift()();
    return s.push.apply(s, o || []), r();
  }
  function r() {
    for (var e, t = 0; t < s.length; t++) {
      for (var r = s[t], a = !0, n = 1; n < r.length; n++) {
        var i = r[n];
        0 !== l[i] && (a = !1);
      }
      a && (s.splice(t--, 1), (e = c((c.s = r[0]))));
    }
    return e;
  }
  var a = {},
    l = { 58: 0 },
    s = [];
  function c(t) {
    if (a[t]) return a[t].exports;
    var r = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, c), (r.l = !0), r.exports;
  }
  (c.m = e),
    (c.c = a),
    (c.d = function(e, t, r) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (c.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (c.t = function(e, t) {
      if ((1 & t && (e = c(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (c.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          c.d(
            r,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return r;
    }),
    (c.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return c.d(t, 'a', t), t;
    }),
    (c.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = '/assets/scripts/bundle/');
  var n = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    i = n.push.bind(n);
  (n.push = t), (n = n.slice());
  for (var o = 0; o < n.length; o++) t(n[o]);
  var d = i;
  return s.push([249, 0]), r();
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
  249: function(e, t, r) {
    'use strict';
    r.r(t),
      r.d(t, 'getElement', function() {
        return y;
      }),
      r.d(t, 'getContents', function() {
        return w;
      });
    var a = r(0),
      l = r.n(a),
      s = r(4),
      c = r(1),
      n = r(23),
      i = r(11),
      o = r(15),
      d = r(5),
      p = r.n(d),
      m = r(7),
      b = r(54),
      u = r(22),
      E = r(52),
      h = function(e) {
        return l.a.createElement(
          'div',
          { className: p()('slds-progress', e.className) },
          l.a.createElement(
            'ol',
            { className: 'slds-progress__list' },
            e.children
          ),
          l.a.createElement(E.a, {
            className: 'slds-progress-bar_x-small',
            value: e.value
          })
        );
      },
      O = function(e) {
        return l.a.createElement(
          'li',
          {
            className: p()(
              'slds-progress__item',
              e.className,
              e.active ? 'slds-is-active' : null,
              e.done ? 'slds-is-completed' : null,
              e.error ? 'slds-has-error' : null
            )
          },
          e.done && !e.error
            ? l.a.createElement(m.b, {
                className: 'slds-progress__marker slds-progress__marker_icon',
                symbol: 'success',
                'aria-describedby': e['aria-describedby'],
                assistiveText: e.done ? e.children + ' - Completed' : null,
                title: e.done ? e.children + ' - Completed' : null
              })
            : e.error
            ? l.a.createElement(m.b, {
                className: 'slds-progress__marker slds-progress__marker_icon',
                symbol: 'error',
                'aria-describedby': e['aria-describedby'],
                assistiveText: e.error ? e.children + ' - Error' : null,
                title: e.error ? e.children + ' - Error' : null
              })
            : l.a.createElement(
                'button',
                {
                  className: 'slds-button slds-progress__marker',
                  'aria-describedby': e['aria-describedby']
                },
                l.a.createElement(
                  'span',
                  { className: 'slds-assistive-text' },
                  e.children,
                  ' ',
                  e.active ? '- Active' : null
                )
              )
        );
      },
      j = (b.a, u.b, u.e, u.c, u.d, r(50)),
      S = r(33),
      g = s.c.code,
      v = s.c.h2,
      _ = s.c.h3,
      f = s.c.p,
      y = function() {
        return Object(a.createElement)(
          s.b,
          {},
          Object(a.createElement)(
            'div',
            { className: 'doc lead' },
            'A progress indicator component communicates to the user the progress of a particular process.'
          ),
          Object(a.createElement)(
            c.a,
            { exampleOnly: !0 },
            Object(a.createElement)(
              h,
              { value: '50' },
              Object(a.createElement)(O, { done: !0 }, 'Step 1'),
              Object(a.createElement)(O, { done: !0 }, 'Step 2'),
              Object(a.createElement)(O, { active: !0 }, 'Step 3'),
              Object(a.createElement)(O, null, 'Step 4'),
              Object(a.createElement)(O, null, 'Step 5')
            )
          ),
          v({ id: 'About-Progress-Indicator' }, 'About Progress Indicator'),
          _(
            { id: 'Implementation-Requirements' },
            'Implementation Requirements'
          ),
          f(
            {},
            'The ',
            g({}, 'slds-progress-bar'),
            ' accepts a range from 0% to 100%, and this percentage should be applied with inline styling to the ',
            g({}, 'div'),
            ' with class ',
            g({}, 'slds-progress-bar__value'),
            ' using JavaScript. If implementing a horizontal progress indicator, set the width, otherwise set the height for vertical progress indicators.'
          ),
          _({ id: 'Accessibility' }, 'Accessibility'),
          f(
            {},
            'As the percentage of completion changes, be sure to update the ',
            g({}, 'aria-valuenow'),
            ' property on the ',
            g({}, '<div>'),
            ' with ',
            g({}, 'class="slds-progress-bar"'),
            ', as well as the ',
            g({}, 'slds-assistive-text'),
            ' ',
            g({}, '<span>'),
            '.'
          ),
          Object(a.createElement)(
            n.a,
            { toggleCode: !1 },
            Object(a.createElement)(
              'div',
              {
                className: 'slds-progress-bar slds-progress-bar_x-small',
                'aria-valuemin': '0',
                'aria-valuemax': '100',
                'aria-valuenow': '50',
                role: 'progressbar'
              },
              Object(a.createElement)(
                'span',
                {
                  className: 'slds-progress-bar__value',
                  style: { width: '50%' }
                },
                Object(a.createElement)(
                  'span',
                  { className: 'slds-assistive-text' },
                  'Progress: 50%'
                )
              )
            )
          ),
          _({ id: 'Mobile' }, 'Mobile'),
          Object(a.createElement)(S.a, {
            patternSpecificText:
              'progress indicators will have increased actionable area sizes to accommodate tapping with a finger instead of the more precise mouse cursor'
          }),
          Object(a.createElement)(
            c.a,
            { frameOnly: !0 },
            Object(a.createElement)(
              h,
              { value: '50' },
              Object(a.createElement)(O, { done: !0 }, 'Step 1'),
              Object(a.createElement)(O, { done: !0 }, 'Step 2'),
              Object(a.createElement)(O, { active: !0 }, 'Step 3'),
              Object(a.createElement)(O, null, 'Step 4'),
              Object(a.createElement)(O, null, 'Step 5')
            )
          ),
          v({ id: 'Base' }, 'Base'),
          Object(a.createElement)(
            i.a,
            { title: 'Progress Indicator Base Horizontal' },
            Object(a.createElement)(
              c.a,
              null,
              Object(a.createElement)(
                h,
                { value: '0' },
                Object(a.createElement)(O, { active: !0 }, 'Step 1'),
                Object(a.createElement)(O, null, 'Step 2'),
                Object(a.createElement)(O, null, 'Step 3'),
                Object(a.createElement)(O, null, 'Step 4'),
                Object(a.createElement)(O, null, 'Step 5')
              )
            )
          ),
          v({ id: 'Horizontal' }, 'Horizontal'),
          _({ id: 'Active-Step' }, 'Active Step'),
          f(
            {},
            'When a step becomes active, the ',
            g({}, '<div>'),
            ' with class ',
            g({}, '.slds-progress__item'),
            ' should also get the class ',
            g({}, '.slds-is-active'),
            '.'
          ),
          Object(a.createElement)(
            o.a,
            { type: 'a11y', header: 'Accessibility Requirements' },
            Object(a.createElement)(
              'p',
              null,
              'When a step is active, be sure to append "- Active" to the hidden button text in the `<span>` with class `slds-assistive-text`, such as `Step 1 - Active`.'
            )
          ),
          Object(a.createElement)(
            i.a,
            { title: 'Progress Indicator Active Horizontal' },
            Object(a.createElement)(
              c.a,
              null,
              Object(a.createElement)(
                h,
                { value: '0' },
                Object(a.createElement)(O, { active: !0 }, 'Step 1'),
                Object(a.createElement)(O, null, 'Step 2'),
                Object(a.createElement)(O, null, 'Step 3'),
                Object(a.createElement)(O, null, 'Step 4'),
                Object(a.createElement)(O, null, 'Step 5')
              )
            )
          ),
          _({ id: 'Completed-Step' }, 'Completed Step'),
          f(
            {},
            'When the step is completed, the ',
            g({}, '.slds-is-active'),
            ' class should be replaced with the class ',
            g({}, '.slds-is-completed'),
            ' on ',
            g({}, '.slds-progress__item'),
            '. At that point, the ',
            g({}, '.slds-progress__item'),
            ' element will receive a "success" icon, providing feedback that the step has been completed.'
          ),
          Object(a.createElement)(
            o.a,
            { type: 'a11y', header: 'Accessibility Requirements' },
            Object(a.createElement)(
              'p',
              null,
              'When a step is completed, be sure to append "- Completed" to the hidden button text in the `<span>` with class `slds-assistive-text`, such as `Step 2 - Completed`.'
            )
          ),
          Object(a.createElement)(
            i.a,
            { title: 'Progress Indicator Done Horizontal' },
            Object(a.createElement)(
              c.a,
              null,
              Object(a.createElement)(
                h,
                { value: '50' },
                Object(a.createElement)(O, { done: !0 }, 'Step 1'),
                Object(a.createElement)(O, { done: !0 }, 'Step 2'),
                Object(a.createElement)(O, { active: !0 }, 'Step 3'),
                Object(a.createElement)(O, null, 'Step 4'),
                Object(a.createElement)(O, null, 'Step 5')
              )
            )
          ),
          _({ id: 'Error-in-a-Step' }, 'Error in a Step'),
          f(
            {},
            'When an error has occurred on a step, the ',
            g({}, '<div>'),
            ' with class ',
            g({}, '.slds-progress__item'),
            ' should also get the class ',
            g({}, '.slds-has-error'),
            '.'
          ),
          Object(a.createElement)(
            o.a,
            { type: 'a11y', header: 'Accessibility Requirements' },
            Object(a.createElement)(
              'p',
              null,
              'When a step has an error, be sure to append "- Error" to the hidden button text in the `<span>` with class `slds-assistive-text`, such as `Step 3 - Error`.'
            )
          ),
          Object(a.createElement)(
            i.a,
            { title: 'Progress Indicator Done Horizontal' },
            Object(a.createElement)(
              c.a,
              null,
              Object(a.createElement)(
                h,
                { value: '50' },
                Object(a.createElement)(O, { done: !0 }, 'Step 1'),
                Object(a.createElement)(O, { done: !0 }, 'Step 2'),
                Object(a.createElement)(O, { error: !0 }, 'Step 3'),
                Object(a.createElement)(O, null, 'Step 4'),
                Object(a.createElement)(O, null, 'Step 5')
              )
            )
          ),
          _({ id: 'Step-Title-Tooltip' }, 'Step Title Tooltip'),
          Object(a.createElement)(
            o.a,
            { type: 'a11y', header: 'Accessibility Requirements' },
            Object(a.createElement)(
              'p',
              null,
              "When a step's tooltip is visible, the step's button needs the",
              ' ',
              Object(a.createElement)('code', null, 'aria-describedby'),
              ' attribute, whose value should be the ',
              Object(a.createElement)('code', null, 'id'),
              ' of the associated tooltip.'
            )
          ),
          Object(a.createElement)(
            i.a,
            { title: 'Progress Indicator Tooltip Horizontal' },
            Object(a.createElement)(
              c.a,
              null,
              Object(a.createElement)(
                'div',
                { style: { padding: '3.5rem 1rem 0' } },
                Object(a.createElement)(
                  h,
                  { value: '50' },
                  Object(a.createElement)(O, { done: !0 }, 'Step 1'),
                  Object(a.createElement)(O, { done: !0 }, 'Step 2'),
                  Object(a.createElement)(
                    O,
                    { active: !0, 'aria-describedby': 'step-3-tooltip' },
                    'Step 3'
                  ),
                  Object(a.createElement)(O, null, 'Step 4'),
                  Object(a.createElement)(O, null, 'Step 5')
                ),
                Object(a.createElement)(
                  b.a,
                  {
                    className: 'slds-nubbin_bottom',
                    id: 'step-3-tooltip',
                    style: {
                      position: 'absolute',
                      top: '1rem',
                      left: 'calc(50% + 6px)',
                      transform: 'translateX(-50%)'
                    }
                  },
                  'Verify Email'
                )
              )
            )
          ),
          _({ id: 'In-a-Modal' }, 'In a Modal'),
          Object(a.createElement)(
            i.a,
            { title: 'Progress Indicator Horizontal in Modal' },
            Object(a.createElement)(
              c.a,
              { demoStyles: 'height: 640px;' },
              Object(a.createElement)(
                'div',
                null,
                Object(a.createElement)(
                  u.b,
                  {
                    className: 'slds-modal_large',
                    'aria-labelledby': 'header43'
                  },
                  Object(a.createElement)(
                    u.e,
                    null,
                    Object(a.createElement)(
                      'h2',
                      { id: 'header43', className: 'slds-text-heading_medium' },
                      'Modal Header'
                    )
                  ),
                  Object(a.createElement)(u.c, {
                    className: 'slds-grow slds-p-around_medium'
                  }),
                  Object(a.createElement)(
                    u.d,
                    { className: 'slds-grid slds-grid_align-spread' },
                    Object(a.createElement)(
                      'button',
                      { className: 'slds-button slds-button_neutral' },
                      'Cancel'
                    ),
                    Object(a.createElement)(
                      h,
                      { className: 'slds-progress_shade', value: '25' },
                      Object(a.createElement)(O, { done: !0 }, 'Step 1'),
                      Object(a.createElement)(O, { active: !0 }, 'Step 2'),
                      Object(a.createElement)(O, null, 'Step 3'),
                      Object(a.createElement)(O, null, 'Step 4'),
                      Object(a.createElement)(O, null, 'Step 5')
                    ),
                    Object(a.createElement)(
                      'button',
                      { className: 'slds-button slds-button_brand' },
                      'Save'
                    )
                  )
                ),
                Object(a.createElement)('div', {
                  className: 'slds-backdrop slds-backdrop_open'
                })
              )
            )
          ),
          _({ id: 'On-a-Gray-Background' }, 'On a Gray Background'),
          Object(a.createElement)(
            i.a,
            { title: 'Progress Indicator Horizontal Gray Background' },
            Object(a.createElement)(
              c.a,
              { demoStyles: 'background-color: #F3F2F2; padding: 1rem;' },
              Object(a.createElement)(
                h,
                { className: 'slds-progress_shade', value: '25' },
                Object(a.createElement)(O, { done: !0 }, 'Step 1'),
                Object(a.createElement)(O, { active: !0 }, 'Step 2'),
                Object(a.createElement)(O, null, 'Step 3'),
                Object(a.createElement)(O, null, 'Step 4'),
                Object(a.createElement)(O, null, 'Step 5')
              )
            )
          ),
          v({ id: 'Vertical' }, 'Vertical'),
          f(
            {},
            'To display a vertical progress indicator, the ',
            g({}, '<div>'),
            ' with class ',
            g({}, '.slds-progress'),
            ' should also get the class ',
            g({}, '.slds-progress_vertical'),
            '. The vertical progress indicator will take up 100% of the height of its container. The step titles in the vertical variant appear next to the step, instead of in a tooltip.'
          ),
          Object(a.createElement)(
            o.a,
            { type: 'note', header: 'Implementation Note' },
            Object(a.createElement)(
              'p',
              null,
              'The key markup difference between the horizontal and vertical variants is the progress markers. Horizontal progress indicators use `<button>` for each step, whereas Vertical progress indicator steps are not interactive and therefore simply use `<div>`.'
            )
          ),
          Object(a.createElement)(
            i.a,
            { title: 'Progress Indicator Vertical' },
            Object(a.createElement)(
              c.a,
              null,
              Object(a.createElement)(
                j.a,
                { value: '25' },
                Object(a.createElement)(j.b, { done: !0 }, 'Step 1'),
                Object(a.createElement)(j.b, { active: !0 }, 'Step 2'),
                Object(a.createElement)(j.b, null, 'Step 3'),
                Object(a.createElement)(j.b, null, 'Step 4'),
                Object(a.createElement)(j.b, null, 'Step 5')
              )
            )
          ),
          _({ id: 'Green-Success' }, 'Green Success'),
          f(
            {},
            'To create a green completed step, the ',
            g({}, '.slds-progress__item'),
            ' element should also receive the ',
            g({}, '.slds-is-completed'),
            ' class. In addition, the ',
            g({}, '<span>'),
            ' with class ',
            g({}, '.slds-progress__marker_icon'),
            ' should also get the class ',
            g({}, 'slds-progress__marker_icon-success'),
            '.'
          ),
          Object(a.createElement)(
            i.a,
            { title: 'Progress Indicator Vertical Success' },
            Object(a.createElement)(
              c.a,
              null,
              Object(a.createElement)(
                j.a,
                { value: '25' },
                Object(a.createElement)(
                  j.b,
                  { done: !0, hasSuccessMarker: !0 },
                  'Step 1'
                ),
                Object(a.createElement)(j.b, { active: !0 }, 'Step 2'),
                Object(a.createElement)(j.b, null, 'Step 3'),
                Object(a.createElement)(j.b, null, 'Step 4'),
                Object(a.createElement)(j.b, null, 'Step 5')
              )
            )
          ),
          _({ id: 'Error-in-a-Step-2' }, 'Error in a Step'),
          f(
            {},
            'When an error has occurred on a step, the ',
            g({}, '<div>'),
            ' with class ',
            g({}, '.slds-progress__item'),
            ' should also get the class ',
            g({}, '.slds-has-error'),
            '.'
          ),
          Object(a.createElement)(
            i.a,
            { title: 'Progress Indicator Vertical Success' },
            Object(a.createElement)(
              c.a,
              null,
              Object(a.createElement)(
                j.a,
                { value: '25' },
                Object(a.createElement)(j.b, { done: !0 }, 'Step 1'),
                Object(a.createElement)(j.b, { error: !0 }, 'Step 2'),
                Object(a.createElement)(j.b, null, 'Step 3'),
                Object(a.createElement)(j.b, null, 'Step 4'),
                Object(a.createElement)(j.b, null, 'Step 5')
              )
            )
          ),
          _({ id: 'Multiline-Step-Titles' }, 'Multiline Step Titles'),
          f(
            {},
            'The vertical progress indicator also supports multiline step descriptions.'
          ),
          Object(a.createElement)(
            i.a,
            { title: 'Progress Indicator Vertical' },
            Object(a.createElement)(
              c.a,
              null,
              Object(a.createElement)(
                j.a,
                { value: '25' },
                Object(a.createElement)(j.b, { done: !0 }, 'Step 1'),
                Object(a.createElement)(j.b, { active: !0 }, 'Step 2'),
                Object(a.createElement)(
                  j.b,
                  null,
                  'Step 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                ),
                Object(a.createElement)(j.b, null, 'Step 4'),
                Object(a.createElement)(j.b, null, 'Step 5')
              )
            )
          )
        );
      },
      w = function() {
        return Object(s.a)(y());
      };
  }
});
