var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/form-element/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var l, o, s = t[0], r = t[1], d = t[2], c = 0, u = [];
      c < s.length;
      c++
    )
      (o = s[c]),
        Object.prototype.hasOwnProperty.call(n, o) && n[o] && u.push(n[o][0]),
        (n[o] = 0);
    for (l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l]);
    for (m && m(t); u.length; ) u.shift()();
    return i.push.apply(i, d || []), a();
  }
  function a() {
    for (var e, t = 0; t < i.length; t++) {
      for (var a = i[t], l = !0, s = 1; s < a.length; s++) {
        var r = a[s];
        0 !== n[r] && (l = !1);
      }
      l && (i.splice(t--, 1), (e = o((o.s = a[0]))));
    }
    return e;
  }
  var l = {},
    n = { 39: 0 },
    i = [];
  function o(t) {
    if (l[t]) return l[t].exports;
    var a = (l[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
  }
  (o.m = e),
    (o.c = l),
    (o.d = function(e, t, a) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
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
      var a = Object.create(null);
      if (
        (o.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var l in e)
          o.d(
            a,
            l,
            function(t) {
              return e[t];
            }.bind(null, l)
          );
      return a;
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
  var s = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    r = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var d = 0; d < s.length; d++) t(s[d]);
  var m = r;
  return i.push([204, 0]), a();
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
  204: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'getElement', function() {
        return J;
      }),
      a.d(t, 'getContents', function() {
        return G;
      });
    var l = a(0),
      n = a.n(l),
      i = a(4),
      o = a(1),
      s = a(23),
      r = a(11),
      d = a(15),
      m = a(7),
      c = a(8),
      u = a(16),
      p = a(30),
      b = a(42),
      f = (a(40), a(5), a(36)),
      h = a(3),
      E = a.n(h),
      g = function(e) {
        var t = e.children;
        return n.a.createElement(
          'div',
          { className: 'slds-form-element__row' },
          t
        );
      };
    g.propTypes = { children: E.a.node.isRequired };
    var y = function(e) {
      var t = e.isStacked,
        a = e.isHorizontal,
        l = e.isEditing,
        i = e.isRequired,
        o = e.isAddress,
        s = e.hasTooltip,
        r = e.hasError,
        d = e.errorId,
        m = e.inlineMessage,
        u = e.labelContent,
        p = e.children;
      return n.a.createElement(
        c.a,
        {
          hasCompoundFields: !0,
          isAddress: o,
          isStacked: t,
          isHorizontal: a,
          isEditing: l,
          isRequired: i,
          hasTooltip: s,
          hasError: r,
          errorId: d,
          inlineMessage: m,
          label: u
        },
        p
      );
    };
    y.propTypes = {
      children: E.a.node.isRequired,
      isStacked: E.a.bool,
      isHorizontal: E.a.bool,
      isEditing: E.a.bool,
      isRequired: E.a.bool,
      isAddress: E.a.bool,
      hasTooltip: E.a.bool,
      hasError: E.a.bool,
      errorId: E.a.string,
      inlineMessage: E.a.string,
      labelContent: E.a.string
    };
    var v = a(53),
      S = a(61),
      _ = a(35),
      C = a(24),
      z = a(25),
      w = a(12),
      k = {
        rows: [
          {
            fields: [
              {
                type: 'text',
                label: 'Assigned To',
                value: 'Jack Rogers',
                avatar: '/assets/images/avatar1.jpg',
                isRequired: !0,
                link: !0,
                component: n.a.createElement(
                  c.b,
                  {
                    inputId: 'stacked-form-element-id-01',
                    labelContent: 'Assigned To',
                    isRequired: !0,
                    isEditing: !0,
                    isStacked: !0
                  },
                  n.a.createElement(u.a, {
                    id: 'stacked-form-element-id-01',
                    readOnly: !0,
                    defaultValue: 'Jack Rogers',
                    required: !0
                  })
                )
              },
              {
                type: 'lookup',
                label: 'Team Name',
                value: 'Salesforce Lightning Design System',
                link: !0,
                component: n.a.createElement(C.b, {
                  id: 'stacked-combobox-id-01',
                  label: 'Team Name',
                  'aria-controls': 'stacked-listbox-id-01',
                  autocomplete: !0,
                  isEditing: !0,
                  isStacked: !0,
                  inputIconPosition: 'right',
                  rightInputIcon: n.a.createElement(m.b, {
                    className: 'slds-input__icon slds-input__icon_right',
                    symbol: 'clear',
                    title: 'Clear the text input',
                    assistiveText: 'Clear the text input'
                  }),
                  results: n.a.createElement(z.e, {
                    id: 'stacked-listbox-id-01',
                    snapshot: {},
                    type: 'entity',
                    count: 2
                  }),
                  resultsType: 'listbox',
                  value: 'Salesforce Lightning Design System'
                })
              }
            ]
          },
          {
            fields: [
              {
                type: 'checkbox',
                label: 'Security Assessment Required?',
                value: n.a.createElement(w.a, {
                  symbol: 'steps',
                  size: 'x-small',
                  useCurrentColor: !0,
                  assistiveText: 'False',
                  title: 'False'
                }),
                component: n.a.createElement(S.a, {
                  labelContent: 'Security Assessment Required?',
                  isEditing: !0,
                  isStacked: !0
                })
              },
              {
                type: 'picklist',
                label: 'Status',
                component: n.a.createElement(C.b, {
                  id: 'stacked-combobox-id-02',
                  label: 'Status',
                  'aria-controls': 'stacked-listbox-id-02',
                  readonly: !0,
                  isEditing: !0,
                  isStacked: !0,
                  inputIconPosition: 'right',
                  rightInputIcon: n.a.createElement(w.a, {
                    symbol: 'down',
                    className:
                      'slds-icon slds-icon_x-small slds-icon-text-default',
                    containerClassName:
                      'slds-input__icon slds-input__icon_right',
                    assistiveText: !1,
                    title: !1
                  }),
                  results: n.a.createElement(z.e, {
                    id: 'stacked-listbox-id-02',
                    snapshot: {},
                    type: 'plain',
                    count: 2,
                    visualSelection: !0
                  }),
                  resultsType: 'listbox'
                })
              }
            ]
          },
          {
            fields: [
              {
                type: 'checkbox-group',
                label: 'Personalization Settings',
                value: 'Disable end user personalization',
                component: n.a.createElement(
                  c.a,
                  {
                    label: 'App Personalization Settings',
                    isEditing: !0,
                    isStacked: !0
                  },
                  n.a.createElement(p.a, {
                    label: 'Disable end user personalization',
                    name: 'default',
                    checked: !0
                  }),
                  n.a.createElement(p.a, {
                    label: "Don't automatically create temporary tabs",
                    name: 'default'
                  })
                )
              },
              { type: '', label: '', value: '' }
            ]
          },
          {
            fields: [
              {
                type: 'text',
                label: 'SLA Serial Number',
                value: '5367',
                hasTooltip: !0,
                component: n.a.createElement(
                  c.b,
                  {
                    labelContent: 'SLA Serial Number',
                    inputId: 'stacked-form-element-id-02',
                    hasTooltip: !0,
                    isEditing: !0,
                    isStacked: !0
                  },
                  n.a.createElement(u.a, {
                    id: 'stacked-form-element-id-02',
                    defaultValue: '5367'
                  })
                )
              },
              {
                type: 'date',
                label: 'SLA Expiration Date',
                value: '1/1/2018',
                component: n.a.createElement(
                  c.b,
                  {
                    formElementClassName:
                      'slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open',
                    labelContent: 'Date',
                    inputId: 'stacked-form-element-id-03',
                    hasRightIcon: !0,
                    isEditing: !0,
                    isStacked: !0
                  },
                  n.a.createElement(u.a, {
                    id: 'stacked-form-element-id-03',
                    defaultValue: '1/1/2018'
                  }),
                  n.a.createElement(m.b, {
                    className: 'slds-input__icon slds-input__icon_right',
                    symbol: 'event',
                    assistiveText: 'Select a date',
                    title: 'Select a date'
                  })
                )
              }
            ]
          },
          {
            fields: [
              {
                type: 'location',
                label: 'Location',
                value: '10.283, 54.293',
                component: n.a.createElement(
                  y,
                  { labelContent: 'Location', isEditing: !0, isStacked: !0 },
                  n.a.createElement(
                    g,
                    null,
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_1-of-2' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Longitude',
                          inputId: 'stacked-location-longitude-01'
                        },
                        n.a.createElement(u.a, {
                          id: 'stacked-location-longitude-01',
                          defaultValue: '10.283'
                        })
                      )
                    ),
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_1-of-2' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Latitude',
                          inputId: 'stacked-location-latitude-01'
                        },
                        n.a.createElement(u.a, {
                          id: 'stacked-location-latitude-01',
                          defaultValue: '54.293'
                        })
                      )
                    )
                  )
                )
              },
              {
                type: 'multiselect',
                label: 'Selected Languages',
                value: 'Arabic, Chinese, English, German',
                component: n.a.createElement(_.j, {
                  isEditing: !0,
                  isStacked: !0,
                  dataSet: _.b,
                  isResponsive: !0
                })
              }
            ]
          },
          {
            fields: [
              {
                type: 'address',
                label: 'Billing Address',
                value: ['525 S. Lexington Ave', 'Burlington, NC 27215', 'USA'],
                link: !0,
                isRequired: !0,
                hasTooltip: !0,
                component: n.a.createElement(
                  y,
                  {
                    labelContent: 'Billing Address',
                    isAddress: !0,
                    isEditing: !0,
                    isRequired: !0,
                    hasTooltip: !0,
                    isStacked: !0
                  },
                  n.a.createElement(
                    g,
                    null,
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_1-of-1' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Billing Street',
                          inputId: 'stacked-form-element-id-04'
                        },
                        n.a.createElement(b.a, {
                          id: 'stacked-form-element-id-04',
                          defaultValue: '525 S. Lexington Ave',
                          required: !0
                        })
                      )
                    )
                  ),
                  n.a.createElement(
                    g,
                    null,
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_4-of-6' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Billing City',
                          inputId: 'stacked-form-element-id-05'
                        },
                        n.a.createElement(u.a, {
                          id: 'stacked-form-element-id-05',
                          defaultValue: 'Burlington',
                          required: !0
                        })
                      )
                    ),
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_2-of-6' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Billing State/Province',
                          inputId: 'stacked-form-element-id-06'
                        },
                        n.a.createElement(u.a, {
                          id: 'stacked-form-element-id-06',
                          defaultValue: 'NC',
                          required: !0
                        })
                      )
                    )
                  ),
                  n.a.createElement(
                    g,
                    null,
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_4-of-6' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Billing Zip/Postal Code',
                          inputId: 'stacked-form-element-id-07'
                        },
                        n.a.createElement(u.a, {
                          id: 'stacked-form-element-id-07',
                          defaultValue: '27215',
                          required: !0
                        })
                      )
                    ),
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_2-of-6' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Billing Country',
                          inputId: 'stacked-form-element-id-08'
                        },
                        n.a.createElement(u.a, {
                          id: 'stacked-form-element-id-08',
                          defaultValue: 'USA',
                          required: !0
                        })
                      )
                    )
                  )
                )
              },
              {
                type: 'address',
                label: 'Shipping Address',
                value: ['312 Constitution Place', 'Austin, TX 78767', 'USA'],
                link: !0,
                component: n.a.createElement(
                  y,
                  {
                    labelContent: 'Shipping Address',
                    isAddress: !0,
                    isEditing: !0,
                    isStacked: !0
                  },
                  n.a.createElement(
                    g,
                    null,
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_1-of-1' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Shipping Street',
                          inputId: 'stacked-form-element-id-09'
                        },
                        n.a.createElement(b.a, {
                          id: 'stacked-form-element-id-09',
                          defaultValue: '312 Constitution Place'
                        })
                      )
                    )
                  ),
                  n.a.createElement(
                    g,
                    null,
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_4-of-6' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Shipping City',
                          inputId: 'stacked-form-element-id-10'
                        },
                        n.a.createElement(u.a, {
                          id: 'stacked-form-element-id-10',
                          defaultValue: 'Austin'
                        })
                      )
                    ),
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_2-of-6' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Shipping State/Province',
                          inputId: 'stacked-form-element-id-11'
                        },
                        n.a.createElement(u.a, {
                          id: 'stacked-form-element-id-11',
                          defaultValue: 'TX'
                        })
                      )
                    )
                  ),
                  n.a.createElement(
                    g,
                    null,
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_4-of-6' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Shipping Zip/Postal Code',
                          inputId: 'stacked-form-element-id-12'
                        },
                        n.a.createElement(u.a, {
                          id: 'stacked-form-element-id-12',
                          defaultValue: '78767'
                        })
                      )
                    ),
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_2-of-6' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Shipping Country',
                          inputId: 'stacked-form-element-id-13'
                        },
                        n.a.createElement(u.a, {
                          id: 'stacked-form-element-id-13',
                          defaultValue: 'USA'
                        })
                      )
                    )
                  )
                )
              }
            ]
          },
          {
            fields: [
              {
                type: 'textarea',
                label: 'Description',
                value: [
                  'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.'
                ],
                column: 1,
                component: n.a.createElement(
                  c.b,
                  {
                    labelContent: 'Description',
                    inputId: 'stacked-form-element-id-14',
                    isStacked: !0,
                    isEditing: !0,
                    column: 1
                  },
                  n.a.createElement(b.a, {
                    id: 'stacked-form-element-id-14',
                    defaultValue:
                      'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.'
                  })
                )
              }
            ]
          }
        ]
      },
      A = {
        rows: [
          {
            fields: [
              {
                type: 'text',
                label: 'Assigned To',
                value: 'Jack Rogers',
                avatar: '/assets/images/avatar1.jpg',
                isRequired: !0,
                link: !0,
                component: n.a.createElement(
                  c.b,
                  {
                    isHorizontal: !0,
                    inputId: 'horizontal-form-element-id-01',
                    labelContent: 'Assigned To',
                    isRequired: !0,
                    isEditing: !0
                  },
                  n.a.createElement(u.a, {
                    id: 'horizontal-form-element-id-01',
                    readOnly: !0,
                    defaultValue: 'Jack Rogers',
                    required: !0
                  })
                )
              },
              {
                type: 'lookup',
                label: 'Team Name',
                value: 'Salesforce Lightning Design System',
                link: !0,
                component: n.a.createElement(C.b, {
                  isHorizontal: !0,
                  id: 'horizontal-combobox-id-01',
                  label: 'Team Name',
                  'aria-controls': 'horizontal-listbox-id-01',
                  isEditing: !0,
                  autocomplete: !0,
                  inputIconPosition: 'right',
                  rightInputIcon: n.a.createElement(m.b, {
                    className: 'slds-input__icon slds-input__icon_right',
                    symbol: 'clear',
                    title: 'Clear the text input',
                    assistiveText: 'Clear the text input'
                  }),
                  results: n.a.createElement(z.e, {
                    id: 'horizontal-listbox-id-01',
                    snapshot: {},
                    type: 'entity',
                    count: 2
                  }),
                  resultsType: 'listbox',
                  value: 'Salesforce Lightning Design System'
                })
              }
            ]
          },
          {
            fields: [
              {
                type: 'checkbox',
                label: 'Security Assessment Required?',
                value: n.a.createElement(w.a, {
                  symbol: 'steps',
                  size: 'x-small',
                  useCurrentColor: !0,
                  assistiveText: 'False',
                  title: 'False'
                }),
                component: n.a.createElement(S.a, {
                  labelContent: 'Security Assessment Required?',
                  isHorizontal: !0,
                  isEditing: !0
                })
              },
              {
                type: 'picklist',
                label: 'Status',
                component: n.a.createElement(C.b, {
                  isHorizontal: !0,
                  id: 'horizontal-combobox-id-02',
                  label: 'Status',
                  'aria-controls': 'horizontal-listbox-id-02',
                  readonly: !0,
                  isEditing: !0,
                  inputIconPosition: 'right',
                  rightInputIcon: n.a.createElement(w.a, {
                    symbol: 'down',
                    className:
                      'slds-icon slds-icon_x-small slds-icon-text-default',
                    containerClassName:
                      'slds-input__icon slds-input__icon_right',
                    assistiveText: !1,
                    title: !1
                  }),
                  results: n.a.createElement(z.e, {
                    id: 'horizontal-listbox-id-02',
                    snapshot: {},
                    type: 'plain',
                    count: 2,
                    visualSelection: !0
                  }),
                  resultsType: 'listbox'
                })
              }
            ]
          },
          {
            fields: [
              {
                type: 'checkbox-group',
                label: 'Personalization Settings',
                value: 'Disable end user personalization',
                component: n.a.createElement(
                  c.a,
                  {
                    isHorizontal: !0,
                    label: 'App Personalization Settings',
                    isEditing: !0
                  },
                  n.a.createElement(p.a, {
                    label: 'Disable end user personalization',
                    name: 'default',
                    checked: !0
                  }),
                  n.a.createElement(p.a, {
                    label: "Don't automatically create temporary tabs",
                    name: 'default'
                  })
                )
              },
              { type: '', label: '', value: '' }
            ]
          },
          {
            fields: [
              {
                type: 'text',
                label: 'SLA Serial Number',
                value: '5367',
                hasTooltip: !0,
                component: n.a.createElement(
                  c.b,
                  {
                    isHorizontal: !0,
                    labelContent: 'SLA Serial Number',
                    inputId: 'horizontal-form-element-id-02',
                    hasTooltip: !0,
                    isEditing: !0
                  },
                  n.a.createElement(u.a, {
                    id: 'horizontal-form-element-id-02',
                    defaultValue: '5367'
                  })
                )
              },
              {
                type: 'date',
                label: 'SLA Expiration Date',
                value: '1/1/2018',
                component: n.a.createElement(
                  c.b,
                  {
                    isHorizontal: !0,
                    isEditing: !0,
                    formElementClassName:
                      'slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open',
                    labelContent: 'Date',
                    inputId: 'horizontal-form-element-id-03',
                    hasRightIcon: !0
                  },
                  n.a.createElement(u.a, {
                    id: 'horizontal-form-element-id-03',
                    defaultValue: '1/1/2018'
                  }),
                  n.a.createElement(m.b, {
                    className: 'slds-input__icon slds-input__icon_right',
                    symbol: 'event',
                    assistiveText: 'Select a date',
                    title: 'Select a date'
                  })
                )
              }
            ]
          },
          {
            fields: [
              {
                type: 'textarea',
                label: 'Description',
                value: [
                  'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.'
                ],
                column: 1,
                component: n.a.createElement(
                  c.b,
                  {
                    isHorizontal: !0,
                    labelContent: 'Description',
                    inputId: 'horizontal-form-element-id-14',
                    isEditing: !0,
                    column: 1
                  },
                  n.a.createElement(b.a, {
                    id: 'horizontal-form-element-id-14',
                    defaultValue:
                      'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.'
                  })
                )
              }
            ]
          },
          {
            fields: [
              {
                type: 'location',
                label: 'Location',
                value: '10.283, 54.293',
                component: n.a.createElement(
                  y,
                  { labelContent: 'Location', isEditing: !0, isHorizontal: !0 },
                  n.a.createElement(
                    g,
                    null,
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_1-of-2' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Longitude',
                          inputId: 'horizontal-location-longitude-01'
                        },
                        n.a.createElement(u.a, {
                          id: 'horizontal-location-longitude-01',
                          defaultValue: '10.283'
                        })
                      )
                    ),
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_1-of-2' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Latitude',
                          inputId: 'horizontal-location-latitude-01'
                        },
                        n.a.createElement(u.a, {
                          id: 'horizontal-location-latitude-01',
                          defaultValue: '54.293'
                        })
                      )
                    )
                  )
                )
              },
              {
                type: 'multiselect',
                label: 'Selected Languages',
                value: 'Arabic, Chinese, English, German',
                component: n.a.createElement(_.j, {
                  isStacked: !0,
                  isEditing: !0,
                  dataSet: _.b,
                  isResponsive: !0
                })
              }
            ]
          },
          {
            fields: [
              {
                type: 'address',
                label: 'Billing Address',
                value: ['525 S. Lexington Ave', 'Burlington, NC 27215', 'USA'],
                link: !0,
                isRequired: !0,
                hasTooltip: !0,
                component: n.a.createElement(
                  y,
                  {
                    labelContent: 'Billing Address',
                    isAddress: !0,
                    isEditing: !0,
                    isRequired: !0,
                    hasTooltip: !0,
                    isStacked: !0
                  },
                  n.a.createElement(
                    g,
                    null,
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_1-of-1' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Billing Street',
                          inputId: 'horizontal-form-element-id-04'
                        },
                        n.a.createElement(b.a, {
                          id: 'horizontal-form-element-id-04',
                          defaultValue: '525 S. Lexington Ave',
                          required: !0
                        })
                      )
                    )
                  ),
                  n.a.createElement(
                    g,
                    null,
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_4-of-6' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Billing City',
                          inputId: 'horizontal-form-element-id-05'
                        },
                        n.a.createElement(u.a, {
                          id: 'horizontal-form-element-id-05',
                          defaultValue: 'Burlington',
                          required: !0
                        })
                      )
                    ),
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_2-of-6' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Billing State/Province',
                          inputId: 'horizontal-form-element-id-06'
                        },
                        n.a.createElement(u.a, {
                          id: 'horizontal-form-element-id-06',
                          defaultValue: 'NC',
                          required: !0
                        })
                      )
                    )
                  ),
                  n.a.createElement(
                    g,
                    null,
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_4-of-6' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Billing Zip/Postal Code',
                          inputId: 'horizontal-form-element-id-07'
                        },
                        n.a.createElement(u.a, {
                          id: 'horizontal-form-element-id-07',
                          defaultValue: '27215',
                          required: !0
                        })
                      )
                    ),
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_2-of-6' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Billing Country',
                          inputId: 'horizontal-form-element-id-08'
                        },
                        n.a.createElement(u.a, {
                          id: 'horizontal-form-element-id-08',
                          defaultValue: 'USA',
                          required: !0
                        })
                      )
                    )
                  )
                )
              },
              {
                type: 'address',
                label: 'Shipping Address',
                value: ['312 Constitution Place', 'Austin, TX 78767', 'USA'],
                link: !0,
                component: n.a.createElement(
                  y,
                  {
                    labelContent: 'Shipping Address',
                    isAddress: !0,
                    isEditing: !0,
                    isStacked: !0
                  },
                  n.a.createElement(
                    g,
                    null,
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_1-of-1' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Shipping Street',
                          inputId: 'horizontal-form-element-id-09'
                        },
                        n.a.createElement(b.a, {
                          id: 'horizontal-form-element-id-09',
                          defaultValue: '312 Constitution Place'
                        })
                      )
                    )
                  ),
                  n.a.createElement(
                    g,
                    null,
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_4-of-6' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Shipping City',
                          inputId: 'horizontal-form-element-id-10'
                        },
                        n.a.createElement(u.a, {
                          id: 'horizontal-form-element-id-10',
                          defaultValue: 'Austin'
                        })
                      )
                    ),
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_2-of-6' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Shipping State/Province',
                          inputId: 'horizontal-form-element-id-11'
                        },
                        n.a.createElement(u.a, {
                          id: 'horizontal-form-element-id-11',
                          defaultValue: 'TX'
                        })
                      )
                    )
                  ),
                  n.a.createElement(
                    g,
                    null,
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_4-of-6' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Shipping Zip/Postal Code',
                          inputId: 'horizontal-form-element-id-12'
                        },
                        n.a.createElement(u.a, {
                          id: 'horizontal-form-element-id-12',
                          defaultValue: '78767'
                        })
                      )
                    ),
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_2-of-6' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Shipping Country',
                          inputId: 'horizontal-form-element-id-13'
                        },
                        n.a.createElement(u.a, {
                          id: 'horizontal-form-element-id-13',
                          defaultValue: 'USA'
                        })
                      )
                    )
                  )
                )
              }
            ]
          }
        ]
      },
      x = {
        rows: [
          {
            fields: [
              {
                type: 'text',
                label: 'Assigned To',
                value: 'Jack Rogers',
                avatar: '/assets/images/avatar1.jpg',
                isRequired: !0,
                link: !0,
                column: 1,
                component: n.a.createElement(
                  c.b,
                  {
                    inputId: 'form-element-id-01',
                    labelContent: 'Assigned To',
                    isRequired: !0,
                    isEditing: !0
                  },
                  n.a.createElement(u.a, {
                    id: 'form-element-id-01',
                    readOnly: !0,
                    defaultValue: 'Jack Rogers',
                    required: !0
                  })
                )
              }
            ]
          },
          {
            fields: [
              {
                type: 'lookup',
                label: 'Team Name',
                value: 'Salesforce Lightning Design System',
                link: !0,
                column: 1,
                component: n.a.createElement(C.b, {
                  id: 'combobox-id-01',
                  label: 'Team Name',
                  'aria-controls': 'listbox-id-01',
                  autocomplete: !0,
                  inputIconPosition: 'right',
                  rightInputIcon: n.a.createElement(m.b, {
                    className: 'slds-input__icon slds-input__icon_right',
                    symbol: 'clear',
                    title: 'Clear the text input',
                    assistiveText: 'Clear the text input'
                  }),
                  results: n.a.createElement(z.e, {
                    id: 'listbox-id-01',
                    snapshot: {},
                    type: 'entity',
                    count: 2
                  }),
                  resultsType: 'listbox',
                  value: 'Salesforce Lightning Design System'
                })
              }
            ]
          },
          {
            fields: [
              {
                type: 'checkbox',
                label: 'Security Assessment Required?',
                value: n.a.createElement(w.a, {
                  symbol: 'steps',
                  size: 'x-small',
                  useCurrentColor: !0,
                  assistiveText: 'False',
                  title: 'False'
                }),
                column: 1,
                component: n.a.createElement(S.a, {
                  labelContent: 'Security Assessment Required?',
                  isEditing: !0
                })
              }
            ]
          },
          {
            fields: [
              {
                type: 'picklist',
                label: 'Status',
                column: 1,
                component: n.a.createElement(C.b, {
                  id: 'combobox-id-02',
                  label: 'Status',
                  'aria-controls': 'listbox-id-02',
                  readonly: !0,
                  inputIconPosition: 'right',
                  rightInputIcon: n.a.createElement(w.a, {
                    symbol: 'down',
                    className:
                      'slds-icon slds-icon_x-small slds-icon-text-default',
                    containerClassName:
                      'slds-input__icon slds-input__icon_right',
                    assistiveText: !1,
                    title: !1
                  }),
                  results: n.a.createElement(z.e, {
                    id: 'listbox-id-02',
                    snapshot: {},
                    type: 'plain',
                    count: 2,
                    visualSelection: !0
                  }),
                  resultsType: 'listbox'
                })
              }
            ]
          },
          {
            fields: [
              {
                type: 'text',
                label: 'Reference Image',
                value:
                  'The URL for the image is https://www.google.com/imgres?imgurl=https%3A%2F%2Fis1-ssl.mzstatic.com%2Fimage%2Fthumb%2FPurple128%2Fv4%2F50%2F98%2Fb6%2F5098b62e-b26d-6d0e-bda4-26a85c42fe1f%2FAppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-3.png%2F246x0w.jpg&imgrefurl=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Fflower%2Fid1279174518%3Fmt%3D8&docid=2fZCCC_Ugr43lM&tbnid=9soMHOA780_ooM%3A&vet=10ahUKEwiJzc206-PcAhVYIjQIHcJsB3YQMwjxASgAMAA..i&w=246&h=246&bih=1320&biw=1280&q=flower&ved=0ahUKEwiJzc206-PcAhVYIjQIHcJsB3YQMwjxASgAMAA&iact=mrc&uact=8',
                column: 1,
                component: n.a.createElement(
                  c.b,
                  {
                    labelContent: 'Reference Image',
                    inputId: 'form-element-id-15',
                    isStacked: !0,
                    isEditing: !0
                  },
                  n.a.createElement(b.a, {
                    id: 'form-element-id-15',
                    defaultValue:
                      'The URL for the image is https://www.google.com/imgres?imgurl=https%3A%2F%2Fis1-ssl.mzstatic.com%2Fimage%2Fthumb%2FPurple128%2Fv4%2F50%2F98%2Fb6%2F5098b62e-b26d-6d0e-bda4-26a85c42fe1f%2FAppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-3.png%2F246x0w.jpg&imgrefurl=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Fflower%2Fid1279174518%3Fmt%3D8&docid=2fZCCC_Ugr43lM&tbnid=9soMHOA780_ooM%3A&vet=10ahUKEwiJzc206-PcAhVYIjQIHcJsB3YQMwjxASgAMAA..i&w=246&h=246&bih=1320&biw=1280&q=flower&ved=0ahUKEwiJzc206-PcAhVYIjQIHcJsB3YQMwjxASgAMAA&iact=mrc&uact=8'
                  })
                )
              }
            ]
          },
          {
            fields: [
              {
                type: 'richtext',
                label: 'Rich Text Output',
                column: 1,
                value: n.a.createElement(
                  'div',
                  { className: 'slds-rich-text-editor__output' },
                  n.a.createElement('p', null, "Here's a big image"),
                  n.a.createElement(
                    'p',
                    null,
                    n.a.createElement('img', {
                      src:
                        '/assets/images/themes/oneSalesforce/banner-group-public-default.png',
                      alt: ''
                    })
                  )
                )
              }
            ]
          },
          {
            fields: [
              {
                type: 'text',
                label: 'SLA Serial Number',
                value: '5367',
                hasTooltip: !0,
                column: 1,
                component: n.a.createElement(
                  c.b,
                  {
                    labelContent: 'SLA Serial Number',
                    inputId: 'form-element-id-02',
                    hasTooltip: !0,
                    isEditing: !0
                  },
                  n.a.createElement(u.a, {
                    id: 'form-element-id-02',
                    defaultValue: '5367'
                  })
                )
              }
            ]
          },
          {
            fields: [
              {
                type: 'date',
                label: 'SLA Expiration Date',
                value: '1/1/2018',
                column: 1,
                component: n.a.createElement(
                  c.b,
                  {
                    formElementClassName:
                      'slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open',
                    labelContent: 'Date',
                    inputId: 'form-element-id-03',
                    hasRightIcon: !0
                  },
                  n.a.createElement(u.a, {
                    id: 'form-element-id-03',
                    defaultValue: '1/1/2018'
                  }),
                  n.a.createElement(m.b, {
                    className: 'slds-input__icon slds-input__icon_right',
                    symbol: 'event',
                    assistiveText: 'Select a date',
                    title: 'Select a date'
                  })
                )
              }
            ]
          },
          {
            fields: [
              {
                type: 'location',
                label: 'Location',
                value: '10.283, 54.293',
                column: 1,
                component: n.a.createElement(
                  y,
                  { labelContent: 'Location', isEditing: !0, isHorizontal: !0 },
                  n.a.createElement(
                    g,
                    null,
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_1-of-2' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Longitude',
                          inputId: 'location-longitude-01'
                        },
                        n.a.createElement(u.a, {
                          id: 'location-longitude-01',
                          defaultValue: '10.283'
                        })
                      )
                    ),
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_1-of-2' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Latitude',
                          inputId: 'location-latitude-01'
                        },
                        n.a.createElement(u.a, {
                          id: 'location-latitude-01',
                          defaultValue: '54.293'
                        })
                      )
                    )
                  )
                )
              }
            ]
          },
          {
            fields: [
              {
                type: 'multiselect',
                label: 'Selected Languages',
                value: 'Arabic, Chinese, English, German',
                column: 1,
                component: n.a.createElement(_.j, {
                  dataSet: _.b,
                  isResponsive: !0
                })
              }
            ]
          },
          {
            fields: [
              {
                type: 'address',
                label: 'Billing Address',
                value: ['525 S. Lexington Ave', 'Burlington, NC 27215', 'USA'],
                link: !0,
                isRequired: !0,
                hasTooltip: !0,
                column: 1,
                component: n.a.createElement(
                  y,
                  {
                    labelContent: 'Billing Address',
                    isAddress: !0,
                    isEditing: !0,
                    isRequired: !0,
                    hasTooltip: !0,
                    isStacked: !0
                  },
                  n.a.createElement(
                    g,
                    null,
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_1-of-1' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Billing Street',
                          inputId: 'form-element-id-04'
                        },
                        n.a.createElement(b.a, {
                          id: 'form-element-id-04',
                          defaultValue: '525 S. Lexington Ave',
                          required: !0
                        })
                      )
                    )
                  ),
                  n.a.createElement(
                    g,
                    null,
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_4-of-6' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Billing City',
                          inputId: 'form-element-id-05'
                        },
                        n.a.createElement(u.a, {
                          id: 'form-element-id-05',
                          defaultValue: 'Burlington',
                          required: !0
                        })
                      )
                    ),
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_2-of-6' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Billing State/Province',
                          inputId: 'form-element-id-06'
                        },
                        n.a.createElement(u.a, {
                          id: 'form-element-id-06',
                          defaultValue: 'NC',
                          required: !0
                        })
                      )
                    )
                  ),
                  n.a.createElement(
                    g,
                    null,
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_4-of-6' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Billing Zip/Postal Code',
                          inputId: 'form-element-id-07'
                        },
                        n.a.createElement(u.a, {
                          id: 'form-element-id-07',
                          defaultValue: '27215',
                          required: !0
                        })
                      )
                    ),
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_2-of-6' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Billing Country',
                          inputId: 'form-element-id-08'
                        },
                        n.a.createElement(u.a, {
                          id: 'form-element-id-08',
                          defaultValue: 'USA',
                          required: !0
                        })
                      )
                    )
                  )
                )
              }
            ]
          },
          {
            fields: [
              {
                type: 'address',
                label: 'Shipping Address',
                value: ['312 Constitution Place', 'Austin, TX 78767', 'USA'],
                link: !0,
                column: 1,
                component: n.a.createElement(
                  y,
                  {
                    labelContent: 'Shipping Address',
                    isAddress: !0,
                    isEditing: !0,
                    isStacked: !0
                  },
                  n.a.createElement(
                    g,
                    null,
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_1-of-1' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Shipping Street',
                          inputId: 'form-element-id-09'
                        },
                        n.a.createElement(b.a, {
                          id: 'form-element-id-09',
                          defaultValue: '312 Constitution Place'
                        })
                      )
                    )
                  ),
                  n.a.createElement(
                    g,
                    null,
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_4-of-6' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Shipping City',
                          inputId: 'form-element-id-10'
                        },
                        n.a.createElement(u.a, {
                          id: 'form-element-id-10',
                          defaultValue: 'Austin'
                        })
                      )
                    ),
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_2-of-6' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Shipping State/Province',
                          inputId: 'form-element-id-11'
                        },
                        n.a.createElement(u.a, {
                          id: 'form-element-id-11',
                          defaultValue: 'TX'
                        })
                      )
                    )
                  ),
                  n.a.createElement(
                    g,
                    null,
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_4-of-6' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Shipping Zip/Postal Code',
                          inputId: 'form-element-id-12'
                        },
                        n.a.createElement(u.a, {
                          id: 'form-element-id-12',
                          defaultValue: '78767'
                        })
                      )
                    ),
                    n.a.createElement(
                      'div',
                      { className: 'slds-size_2-of-6' },
                      n.a.createElement(
                        c.b,
                        {
                          labelContent: 'Shipping Country',
                          inputId: 'form-element-id-13'
                        },
                        n.a.createElement(u.a, {
                          id: 'form-element-id-13',
                          defaultValue: 'USA'
                        })
                      )
                    )
                  )
                )
              }
            ]
          },
          {
            fields: [
              {
                type: 'textarea',
                label: 'Description',
                value: [
                  'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.'
                ],
                column: 1,
                component: n.a.createElement(
                  c.b,
                  {
                    labelContent: 'Description',
                    inputId: 'form-element-id-14',
                    isStacked: !0,
                    isEditing: !0
                  },
                  n.a.createElement(b.a, {
                    id: 'form-element-id-14',
                    defaultValue:
                      'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.'
                  })
                )
              }
            ]
          }
        ]
      },
      I = {
        rows: [
          {
            fields: [
              {
                type: 'text',
                label: 'Assigned To',
                value: 'Jack Rogers',
                avatar: '/assets/images/avatar1.jpg',
                isRequired: !0,
                link: !0,
                component: n.a.createElement(
                  c.b,
                  {
                    inputId: 'form-element-id-01',
                    labelContent: 'Assigned To',
                    isRequired: !0,
                    isEditing: !0
                  },
                  n.a.createElement(u.a, {
                    id: 'form-element-id-01',
                    readOnly: !0,
                    defaultValue: 'Jack Rogers',
                    required: !0
                  })
                )
              },
              {
                type: 'lookup',
                label: 'Team Name',
                value: 'Salesforce Lightning Design System',
                link: !0,
                component: n.a.createElement(C.b, {
                  id: 'combobox-id-01',
                  label: 'Team Name',
                  'aria-controls': 'listbox-id-01',
                  autocomplete: !0,
                  isEditing: !0,
                  inputIconPosition: 'right',
                  rightInputIcon: n.a.createElement(m.b, {
                    className: 'slds-input__icon slds-input__icon_right',
                    symbol: 'clear',
                    title: 'Clear the text input',
                    assistiveText: 'Clear the text input'
                  }),
                  results: n.a.createElement(z.e, {
                    id: 'listbox-id-01',
                    snapshot: {},
                    type: 'entity',
                    count: 2
                  }),
                  resultsType: 'listbox',
                  value: 'Salesforce Lightning Design System'
                })
              }
            ]
          },
          {
            fields: [
              {
                type: 'checkbox',
                label: 'Security Assessment Required?',
                value: 'False',
                component: n.a.createElement(S.a, {
                  labelContent: 'Security Assessment Required?',
                  isEditing: !0
                })
              },
              {
                type: 'picklist',
                label: 'Status',
                component: n.a.createElement(C.b, {
                  id: 'combobox-id-02',
                  label: 'Status',
                  value: 'In Progress',
                  'aria-controls': 'listbox-id-02',
                  readonly: !0,
                  isEditing: !0,
                  inputIconPosition: 'right',
                  rightInputIcon: n.a.createElement(w.a, {
                    symbol: 'down',
                    className:
                      'slds-icon slds-icon_x-small slds-icon-text-default',
                    containerClassName:
                      'slds-input__icon slds-input__icon_right',
                    assistiveText: !1,
                    title: !1
                  }),
                  results: n.a.createElement(z.e, {
                    id: 'listbox-id-02',
                    snapshot: {},
                    type: 'plain',
                    count: 2,
                    visualSelection: !0
                  }),
                  resultsType: 'listbox'
                })
              }
            ]
          },
          {
            fields: [
              {
                type: 'checkbox-group',
                label: 'Personalization Settings',
                value: 'Disable end user personalization',
                component: n.a.createElement(
                  c.a,
                  { label: 'App Personalization Settings', isEditing: !0 },
                  n.a.createElement(p.a, {
                    label: 'Disable end user personalization',
                    name: 'default',
                    checked: !0
                  }),
                  n.a.createElement(p.a, {
                    label: "Don't automatically create temporary tabs",
                    name: 'default'
                  })
                )
              },
              { type: '', label: '', value: '' }
            ]
          },
          {
            fields: [
              {
                type: 'text',
                label: 'SLA Serial Number',
                value: '5367',
                hasTooltip: !0,
                component: n.a.createElement(
                  c.b,
                  {
                    labelContent: 'SLA Serial Number',
                    inputId: 'form-element-id-02',
                    hasTooltip: !0,
                    isEditing: !0
                  },
                  n.a.createElement(u.a, {
                    id: 'form-element-id-02',
                    defaultValue: '5367'
                  })
                )
              },
              {
                type: 'date',
                label: 'SLA Expiration Date',
                value: '1/1/2018',
                component: n.a.createElement(
                  c.b,
                  {
                    formElementClassName:
                      'slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open',
                    labelContent: 'Date',
                    inputId: 'form-element-id-03',
                    hasRightIcon: !0,
                    isEditing: !0
                  },
                  n.a.createElement(u.a, {
                    id: 'form-element-id-03',
                    defaultValue: '1/1/2018'
                  }),
                  n.a.createElement(m.b, {
                    className: 'slds-input__icon slds-input__icon_right',
                    symbol: 'event',
                    assistiveText: 'Select a date',
                    title: 'Select a date'
                  })
                )
              }
            ]
          },
          {
            fields: [
              {
                type: 'location',
                label: 'Location',
                value: '10.283, 54.293',
                component: n.a.createElement(
                  c.a,
                  {
                    label: 'Location',
                    isEditing: !0,
                    hasCompoundFields: !0,
                    isDeprecated: !0
                  },
                  n.a.createElement(
                    'div',
                    { className: 'slds-form-element__group' },
                    n.a.createElement(
                      'div',
                      { className: 'slds-form-element__row' },
                      n.a.createElement(
                        c.b,
                        {
                          formElementClassName: 'slds-size_1-of-2',
                          labelContent: 'Longitude',
                          inputId: 'location-longitude-01'
                        },
                        n.a.createElement(u.a, {
                          id: 'location-longitude-01',
                          defaultValue: '10.283'
                        })
                      ),
                      n.a.createElement(
                        c.b,
                        {
                          formElementClassName: 'slds-size_1-of-2',
                          labelContent: 'Latitude',
                          inputId: 'location-latitude-01'
                        },
                        n.a.createElement(u.a, {
                          id: 'location-latitude-01',
                          defaultValue: '54.293'
                        })
                      )
                    )
                  )
                )
              },
              {
                type: 'multiselect',
                label: 'Selected Languages',
                value: 'Arabic, Chinese, English, German',
                component: n.a.createElement(_.j, {
                  isEditing: !0,
                  dataSet: _.b,
                  isResponsive: !0,
                  isStacked: !0
                })
              }
            ]
          },
          {
            fields: [
              {
                type: 'address',
                label: 'Billing Address',
                value: ['525 S. Lexington Ave', 'Burlington, NC 27215', 'USA'],
                link: !0,
                isRequired: !0,
                hasTooltip: !0,
                component: n.a.createElement(
                  c.a,
                  {
                    label: 'Billing Address',
                    isRequired: !0,
                    isEditing: !0,
                    isStacked: !0,
                    isAddress: !0,
                    hasTooltip: !0,
                    hasCompoundFields: !0,
                    isDeprecated: !0
                  },
                  n.a.createElement(
                    'div',
                    { className: 'slds-form-element__group' },
                    n.a.createElement(
                      'div',
                      { className: 'slds-form-element__row' },
                      n.a.createElement(
                        c.b,
                        {
                          formElementClassName: 'slds-size_1-of-1',
                          labelContent: 'Billing Street',
                          inputId: 'form-element-id-04'
                        },
                        n.a.createElement(b.a, {
                          id: 'form-element-id-04',
                          defaultValue: '525 S. Lexington Ave',
                          required: !0
                        })
                      )
                    ),
                    n.a.createElement(
                      'div',
                      { className: 'slds-form-element__row' },
                      n.a.createElement(
                        c.b,
                        {
                          formElementClassName: 'slds-size_4-of-6',
                          labelContent: 'Billing City',
                          inputId: 'form-element-id-05'
                        },
                        n.a.createElement(u.a, {
                          id: 'form-element-id-05',
                          defaultValue: 'Burlington',
                          required: !0
                        })
                      ),
                      n.a.createElement(
                        c.b,
                        {
                          formElementClassName: 'slds-size_2-of-6',
                          labelContent: 'Billing State/Province',
                          inputId: 'form-element-id-06'
                        },
                        n.a.createElement(u.a, {
                          id: 'form-element-id-06',
                          defaultValue: 'NC',
                          required: !0
                        })
                      )
                    ),
                    n.a.createElement(
                      'div',
                      { className: 'slds-form-element__row' },
                      n.a.createElement(
                        c.b,
                        {
                          formElementClassName: 'slds-size_4-of-6',
                          labelContent: 'Billing Zip/Postal Code',
                          inputId: 'form-element-id-07'
                        },
                        n.a.createElement(u.a, {
                          id: 'form-element-id-07',
                          defaultValue: '27215',
                          required: !0
                        })
                      ),
                      n.a.createElement(
                        c.b,
                        {
                          formElementClassName: 'slds-size_2-of-6',
                          labelContent: 'Billing Country',
                          inputId: 'form-element-id-08'
                        },
                        n.a.createElement(u.a, {
                          id: 'form-element-id-08',
                          defaultValue: 'USA',
                          required: !0
                        })
                      )
                    )
                  )
                )
              },
              {
                type: 'address',
                label: 'Shipping Address',
                value: ['312 Constitution Place', 'Austin, TX 78767', 'USA'],
                link: !0,
                component: n.a.createElement(
                  c.a,
                  {
                    label: 'Shipping Address',
                    isEditing: !0,
                    isStacked: !0,
                    isAddress: !0,
                    hasCompoundFields: !0,
                    isDeprecated: !0
                  },
                  n.a.createElement(
                    'div',
                    { className: 'slds-form-element__group' },
                    n.a.createElement(
                      'div',
                      { className: 'slds-form-element__row' },
                      n.a.createElement(
                        c.b,
                        {
                          formElementClassName: 'slds-size_1-of-1',
                          labelContent: 'Shipping Street',
                          inputId: 'form-element-id-09'
                        },
                        n.a.createElement(b.a, {
                          id: 'form-element-id-09',
                          defaultValue: '312 Constitution Place'
                        })
                      )
                    ),
                    n.a.createElement(
                      'div',
                      { className: 'slds-form-element__row' },
                      n.a.createElement(
                        c.b,
                        {
                          formElementClassName: 'slds-size_4-of-6',
                          labelContent: 'Shipping City',
                          inputId: 'form-element-id-10'
                        },
                        n.a.createElement(u.a, {
                          id: 'form-element-id-10',
                          defaultValue: 'Austin'
                        })
                      ),
                      n.a.createElement(
                        c.b,
                        {
                          formElementClassName: 'slds-size_2-of-6',
                          labelContent: 'Shipping State/Province',
                          inputId: 'form-element-id-11'
                        },
                        n.a.createElement(u.a, {
                          id: 'form-element-id-11',
                          defaultValue: 'TX'
                        })
                      )
                    ),
                    n.a.createElement(
                      'div',
                      { className: 'slds-form-element__row' },
                      n.a.createElement(
                        c.b,
                        {
                          formElementClassName: 'slds-size_4-of-6',
                          labelContent: 'Shipping Zip/Postal Code',
                          inputId: 'form-element-id-12'
                        },
                        n.a.createElement(u.a, {
                          id: 'form-element-id-12',
                          defaultValue: '78767'
                        })
                      ),
                      n.a.createElement(
                        c.b,
                        {
                          formElementClassName: 'slds-size_2-of-6',
                          labelContent: 'Shipping Country',
                          inputId: 'form-element-id-13'
                        },
                        n.a.createElement(u.a, {
                          id: 'form-element-id-13',
                          defaultValue: 'USA'
                        })
                      )
                    )
                  )
                )
              }
            ]
          },
          {
            fields: [
              {
                type: 'textarea',
                label: 'Description',
                value: [
                  'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.'
                ],
                column: 1,
                component: n.a.createElement(
                  c.b,
                  {
                    labelContent: 'Description',
                    inputId: 'form-element-id-14',
                    isStacked: !0,
                    isEditing: !0,
                    column: 1
                  },
                  n.a.createElement(b.a, {
                    id: 'form-element-id-14',
                    defaultValue:
                      'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.'
                  })
                )
              }
            ]
          }
        ]
      },
      j = (v.c,
      v.c,
      [
        {
          id: 'stacked-single-column',
          label: 'Stacked form layout - 1 column - Read Only Mode',
          element: n.a.createElement(v.c, {
            direction: 'stacked',
            snapshot: x,
            isViewMode: !0
          })
        },
        {
          id: 'deprecated-view-stacked',
          label: 'Deprecated - Stacked form layout - View Mode',
          element: n.a.createElement(v.c, {
            direction: 'stacked',
            snapshot: I,
            isViewMode: !0,
            hasInlineEdit: !0,
            isDeprecated: !0
          })
        },
        {
          id: 'deprecated-edit-stacked',
          label: 'Deprecated - Stacked form layout - Edit Mode',
          element: n.a.createElement(v.c, {
            direction: 'stacked',
            snapshot: I,
            isDeprecated: !0
          })
        },
        {
          id: 'simple-stacked',
          label: 'Simple - Stacked form layout',
          element: n.a.createElement(
            'div',
            { className: 'slds-form' },
            n.a.createElement(
              c.b,
              {
                labelContent: 'Text Input',
                inputId: 'stacked-input-id-01',
                isStacked: !0
              },
              n.a.createElement(u.a, {
                id: 'stacked-input-id-01',
                placeholder: 'Placeholder Text'
              })
            ),
            n.a.createElement(
              c.b,
              {
                labelContent: 'Textarea Input',
                inputId: 'stacked-input-id-02',
                isStacked: !0
              },
              n.a.createElement(b.a, {
                id: 'stacked-input-id-02',
                placeholder: 'Placeholder Text'
              })
            ),
            n.a.createElement(
              c.a,
              { label: 'Checkbox Group label', isStacked: !0 },
              n.a.createElement(p.a, {
                label: 'All opportunities owned by you',
                name: 'default'
              }),
              n.a.createElement(p.a, {
                label: 'All contacts in the account owned by you',
                name: 'default'
              })
            ),
            n.a.createElement(
              c.a,
              { label: 'Radio Group label', isStacked: !0 },
              n.a.createElement(f.c, {
                label: 'Lead Generation',
                name: 'options'
              }),
              n.a.createElement(f.c, {
                label: 'Education Leads',
                name: 'options'
              })
            )
          )
        }
      ]),
      O = (v.c,
      v.c,
      [
        {
          id: 'horizontal-single-column',
          label: 'Horizontal form layout - 1 column - Read Only Mode',
          element: n.a.createElement(v.c, {
            direction: 'horizontal',
            snapshot: x,
            isViewMode: !0
          })
        },
        {
          id: 'deprecated-view-horizontal',
          label: 'Deprecated - Horizontal form layout - View Mode',
          element: n.a.createElement(v.c, {
            direction: 'horizontal',
            snapshot: I,
            isViewMode: !0,
            hasInlineEdit: !0,
            isDeprecated: !0
          })
        },
        {
          id: 'deprecated-edit-horizontal',
          label: 'Deprecated - Horizontal form layout - Edit Mode',
          element: n.a.createElement(v.c, {
            direction: 'horizontal',
            snapshot: I,
            isDeprecated: !0
          })
        },
        {
          id: 'simple-horizontal',
          label: 'Simple - Horizontal form layout',
          element: n.a.createElement(
            'div',
            { className: 'slds-form' },
            n.a.createElement(
              c.b,
              {
                labelContent: 'Text Input',
                inputId: 'horizontal-input-id-01',
                isHorizontal: !0
              },
              n.a.createElement(u.a, {
                id: 'horizontal-input-id-01',
                placeholder: 'Placeholder Text'
              })
            ),
            n.a.createElement(
              c.b,
              {
                labelContent: 'Textarea Input',
                inputId: 'horizontal-input-id-02',
                isHorizontal: !0
              },
              n.a.createElement(b.a, {
                id: 'horizontal-input-id-02',
                placeholder: 'Placeholder Text'
              })
            ),
            n.a.createElement(
              c.a,
              { label: 'Checkbox Group label', isHorizontal: !0 },
              n.a.createElement(p.a, {
                label: 'All opportunities owned by you',
                name: 'default'
              }),
              n.a.createElement(p.a, {
                label: 'All contacts in the account owned by you',
                name: 'default'
              })
            ),
            n.a.createElement(
              c.a,
              { label: 'Radio Group label', isHorizontal: !0 },
              n.a.createElement(f.c, {
                label: 'Lead Generation',
                name: 'options'
              }),
              n.a.createElement(f.c, {
                label: 'Education Leads',
                name: 'options'
              })
            )
          )
        }
      ]),
      T = n.a.createElement(
        y,
        { labelContent: 'Location' },
        n.a.createElement(
          g,
          null,
          n.a.createElement(
            'div',
            { className: 'slds-size_1-of-2' },
            n.a.createElement(
              c.b,
              { labelContent: 'Latitude', inputId: 'input-01' },
              n.a.createElement(u.a, { id: 'input-01' })
            )
          ),
          n.a.createElement(
            'div',
            { className: 'slds-size_1-of-2' },
            n.a.createElement(
              c.b,
              { labelContent: 'Longitude', inputId: 'input-02' },
              n.a.createElement(u.a, { id: 'input-02' })
            )
          )
        )
      ),
      q = (c.b,
      u.a,
      c.b,
      u.a,
      c.b,
      u.a,
      c.b,
      u.a,
      c.b,
      u.a,
      c.b,
      u.a,
      c.a,
      c.b,
      u.a,
      c.b,
      u.a,
      n.a.createElement(
        y,
        { labelContent: 'Billing Address', isAddress: !0 },
        n.a.createElement(
          g,
          null,
          n.a.createElement(
            'div',
            { className: 'slds-size_1-of-1' },
            n.a.createElement(
              c.b,
              { labelContent: 'Billing Street', inputId: 'form-element-id-04' },
              n.a.createElement(b.a, {
                id: 'form-element-id-04',
                defaultValue: '525 S. Lexington Ave',
                required: !0
              })
            )
          )
        ),
        n.a.createElement(
          g,
          null,
          n.a.createElement(
            'div',
            { className: 'slds-size_4-of-6' },
            n.a.createElement(
              c.b,
              { labelContent: 'Billing City', inputId: 'form-element-id-05' },
              n.a.createElement(u.a, {
                id: 'form-element-id-05',
                defaultValue: 'Burlington',
                required: !0
              })
            )
          ),
          n.a.createElement(
            'div',
            { className: 'slds-size_2-of-6' },
            n.a.createElement(
              c.b,
              {
                labelContent: 'Billing State/Province',
                inputId: 'form-element-id-06'
              },
              n.a.createElement(u.a, {
                id: 'form-element-id-06',
                defaultValue: 'NC',
                required: !0
              })
            )
          )
        ),
        n.a.createElement(
          g,
          null,
          n.a.createElement(
            'div',
            { className: 'slds-size_4-of-6' },
            n.a.createElement(
              c.b,
              {
                labelContent: 'Billing Zip/Postal Code',
                inputId: 'form-element-id-07'
              },
              n.a.createElement(u.a, {
                id: 'form-element-id-07',
                defaultValue: '27215',
                required: !0
              })
            )
          ),
          n.a.createElement(
            'div',
            { className: 'slds-size_2-of-6' },
            n.a.createElement(
              c.b,
              {
                labelContent: 'Billing Country',
                inputId: 'form-element-id-08'
              },
              n.a.createElement(u.a, {
                id: 'form-element-id-08',
                defaultValue: 'USA',
                required: !0
              })
            )
          )
        )
      )),
      N = (c.b,
      b.a,
      c.b,
      u.a,
      c.b,
      u.a,
      c.b,
      u.a,
      c.b,
      u.a,
      c.b,
      b.a,
      c.b,
      u.a,
      c.b,
      u.a,
      c.b,
      u.a,
      c.b,
      u.a,
      c.b,
      b.a,
      c.b,
      u.a,
      c.b,
      u.a,
      c.b,
      u.a,
      c.b,
      u.a,
      a(2)),
      V = a(33),
      F = i.c.a,
      L = i.c.code,
      P = i.c.em,
      R = i.c.h2,
      D = i.c.h3,
      M = i.c.h4,
      B = i.c.h5,
      H = i.c.p,
      U = i.c.strong,
      J = function() {
        return Object(l.createElement)(
          i.b,
          {},
          Object(l.createElement)(
            'div',
            { className: 'doc lead' },
            'A Form Element contains an HTML input element paired with a label.'
          ),
          Object(l.createElement)(
            o.a,
            { exampleOnly: !0 },
            Object(l.createElement)(
              c.b,
              {
                labelContent: 'Form Label',
                inputId: 'form-element-showcase-01',
                isRequired: !0
              },
              Object(l.createElement)(u.a, {
                id: 'form-element-showcase-01',
                placeholder: 'Placeholder Text',
                required: !0
              })
            )
          ),
          R({ id: 'About-Form-Elements' }, 'About Form Elements'),
          H(
            {},
            'The Form Element is initialized with ',
            L({}, 'slds-form-element'),
            ' and is made up of three primary pieces; a label (',
            L({}, 'slds-form-element__label'),
            '), a form control container (',
            L({}, 'slds-form-element__control'),
            '), and a form input element, i.e. ',
            L({}, '<input>'),
            '.'
          ),
          D({ id: 'Form-Label' }, 'Form Label'),
          H(
            {},
            'A form label should use either the ',
            L({}, '<label>'),
            ' or ',
            L({}, '<legend>'),
            ' elements with the class ',
            L({}, 'slds-form-element__label'),
            '. Use ',
            L({}, '<legend>'),
            ' when you have a ',
            F({ href: '/components/form-element/#Compound' }, 'compound form'),
            '.'
          ),
          Object(l.createElement)(
            s.a,
            { toggleCode: !1 },
            Object(l.createElement)(
              'label',
              {
                className: 'slds-form-element__label',
                htmlFor: 'unique-id-of-input'
              },
              'Form label'
            )
          ),
          D({ id: 'Form-Control' }, 'Form Control'),
          H(
            {},
            'A form control is a ',
            L({}, 'div'),
            ' with the class ',
            L({}, 'slds-form-element__control'),
            '. The control is required to maintain the structure of the Form Element.'
          ),
          Object(l.createElement)(
            s.a,
            { toggleCode: !1 },
            Object(l.createElement)(
              'div',
              { className: 'slds-form-element__control' },
              'Any form type goes here'
            )
          ),
          D({ id: 'Form-Input-Elements' }, 'Form Input Elements'),
          H(
            {},
            'There are many types of input elements that can be used in the Form Element, including ',
            F({ href: '/components/input' }, 'inputs'),
            ', ',
            F({ href: '/components/textarea' }, 'text areas'),
            ', ',
            F({ href: '/components/checkbox' }, 'checkboxes'),
            ', and ',
            F({ href: '/components/radio-group' }, 'radio buttons'),
            '. Visit the individual component pages for in-depth details of their specific states and visuals.'
          ),
          D({ id: 'Accessibility' }, 'Accessibility'),
          H(
            {},
            'Labels must have the ',
            L({}, 'for'),
            ' attribute applied, and its value must match the ID of the associated form element, like ',
            L({}, '<input id="unique-id-of-input" />'),
            '. This association ensures that assistive technology informs users about what information to enter where.'
          ),
          D({ id: 'Mobile' }, 'Mobile'),
          Object(l.createElement)(V.a, {
            patternSpecificText:
              'form elements will have an increased size of label and info icon'
          }),
          Object(l.createElement)(
            o.a,
            { frameOnly: !0 },
            Object(l.createElement)(
              c.b,
              {
                labelContent: 'Form Label',
                inputId: 'form-element-showcase-01',
                isRequired: !0
              },
              Object(l.createElement)(u.a, {
                id: 'form-element-showcase-01',
                placeholder: 'Placeholder Text',
                required: !0
              })
            )
          ),
          R({ id: 'Base' }, 'Base'),
          Object(l.createElement)(
            r.a,
            { title: 'Form Element - Base' },
            Object(l.createElement)(
              o.a,
              null,
              Object(l.createElement)(
                c.b,
                { labelContent: 'Form Label', inputId: 'form-element-01' },
                Object(l.createElement)(u.a, {
                  id: 'form-element-01',
                  placeholder: 'Placeholder Text'
                })
              )
            )
          ),
          R({ id: 'States' }, 'States'),
          D({ id: 'View-ModeStatic' }, 'View Mode/Static'),
          H(
            {},
            'If a form element requires a view mode or static state, instead of ',
            L({}, 'slds-form-element__label'),
            ' being a ',
            L({}, '<label>'),
            ' element, we want to change the element to a ',
            L({}, '<span>'),
            '. This is because the form is no longer a form but a statically read name and value pair.'
          ),
          H(
            {},
            'The string inside of ',
            L({}, 'slds-form-element__control'),
            ' needs to be wrapped in a ',
            L({}, '<div>'),
            ' as well, with the class ',
            L({}, 'slds-form-element__static'),
            ' applied to it.'
          ),
          H(
            {},
            'In addition to the structural changes — if the form element is standalone, you can ',
            P({}, 'optionally'),
            ' apply ',
            L({}, 'slds-form-element__readonly'),
            '. The class will help spacing and separation between other form elements. This class is ',
            U({}, P({}, 'required')),
            ' if the form element is in the context of a larger form composition.'
          ),
          Object(l.createElement)(
            r.a,
            { title: 'Form Element - Readonly' },
            Object(l.createElement)(
              o.a,
              null,
              Object(l.createElement)(
                c.b,
                { labelContent: 'Status', isViewMode: !0 },
                Object(l.createElement)(c.f, null, 'In Progress')
              )
            )
          ),
          D({ id: 'Inline-Edit' }, 'Inline Edit'),
          H(
            {},
            'If the form element has inline editable capabilities, the form element will ',
            U({}, P({}, 'require')),
            ' the class ',
            L({}, 'slds-form-element_edit'),
            '. This will apply styles that help handle the structure of the additional elements, such as the button icon to switch the element out of view mode and into edit mode.'
          ),
          H(
            {},
            'In addition, we want to provide an interaction hint by increasing the contrast of the button icon on hover by adding ',
            L({}, 'slds-hint-parent'),
            ' to the form element. The button icon will also require the class ',
            L({}, 'slds-button__icon_hint'),
            '. This will notify the form element that this is the element we want to provide an interaction hint for. For more implementation details, please refer to ',
            F(
              { href: '/components/button-icons/#Hint-on-hover' },
              'Button icon with hint on hover'
            )
          ),
          Object(l.createElement)(
            r.a,
            { title: 'Form Element - Inline Edit' },
            Object(l.createElement)(
              o.a,
              null,
              Object(l.createElement)(
                c.b,
                {
                  labelContent: 'Status',
                  isViewMode: !0,
                  isEditable: !0,
                  hasHint: !0
                },
                Object(l.createElement)(c.f, null, 'In Progress'),
                Object(l.createElement)(m.b, {
                  iconClassName: 'slds-button__icon_hint',
                  symbol: 'edit',
                  assistiveText: 'Edit: Status',
                  title: 'Edit: Status'
                })
              )
            )
          ),
          D({ id: 'Help-Text-Icon' }, 'Help Text Icon'),
          H(
            {},
            'A form element can have help text that will display in a tooltip when hovering or focusing on an icon.'
          ),
          H(
            {},
            'The icon comes in the form of a button icon so it can receive focus when a user tabs through a form with multiple form elements.'
          ),
          H(
            {},
            'The button icon is ',
            U({}, P({}, 'required')),
            ' to be wrapped in a ',
            L({}, '<div>'),
            ' with the class ',
            L({}, 'slds-form-element__icon'),
            ' and should be placed outside of the ',
            L({}, '<label>'),
            ' element.'
          ),
          Object(l.createElement)(
            r.a,
            { title: 'Form Element - Help Text Icon' },
            Object(l.createElement)(
              o.a,
              null,
              Object(l.createElement)(
                c.b,
                {
                  labelContent: 'Status',
                  inputId: 'form-element-help-01',
                  hasTooltip: !0
                },
                Object(l.createElement)(u.a, {
                  id: 'form-element-help-01',
                  placeholder: 'Placeholder Text'
                })
              )
            )
          ),
          Object(l.createElement)(V.b, {
            docsLink: '#Mobile',
            header: 'Mobile context changes',
            elementName: 'form elements with a help text icon'
          }),
          Object(l.createElement)(
            o.a,
            { frameOnly: !0 },
            Object(l.createElement)(
              c.b,
              {
                labelContent: 'Status',
                inputId: 'form-element-help-01m',
                hasTooltip: !0
              },
              Object(l.createElement)(u.a, {
                id: 'form-element-help-01m',
                placeholder: 'Placeholder Text'
              })
            )
          ),
          M({ id: 'Showing-tooltip' }, 'Showing tooltip'),
          H(
            {},
            'The help text icon uses a tooltip to show the help text information. Please see ',
            F({ href: '/components/tooltips/' }, 'Tooltips'),
            ' for implementation details.'
          ),
          Object(l.createElement)(
            r.a,
            { title: 'Form Element - Help Text Icon - Showing tooltip' },
            Object(l.createElement)(
              o.a,
              { demoStyles: 'padding-top: 4rem;' },
              Object(l.createElement)(
                c.b,
                {
                  labelContent: 'Status',
                  inputId: 'tooltip-showing-form-element-help-01',
                  hasTooltip: !0,
                  showTooltip: !0
                },
                Object(l.createElement)(u.a, {
                  id: 'tooltip-showing-form-element-help-01',
                  placeholder: 'Placeholder Text'
                })
              )
            )
          ),
          D({ id: 'Feedback' }, 'Feedback'),
          H(
            {},
            'A form element can have various methods of feedback, such as a required denotation or an inline error message.'
          ),
          M({ id: 'Required' }, 'Required'),
          H(
            {},
            'When a form element is required, an ',
            L({}, '<abbr>'),
            ' should be injected before the ',
            L({}, '<input>'),
            ' and within the ',
            L({}, '<label>'),
            ' and have the class ',
            L({}, 'slds-required'),
            '.'
          ),
          H(
            {},
            'The ',
            L({}, '<input>'),
            ' element should also have the HTML attribute ',
            L({}, 'required'),
            ' or ',
            L({}, 'required=""'),
            '. Similarly, if it is disabled, it should have the ',
            L({}, 'disabled'),
            ' or ',
            L({}, 'disabled=""'),
            ' attribute. Do not use true/false values inside the ',
            L({}, 'required'),
            ' or ',
            L({}, 'disabled'),
            ' attributes because the mere presence of these attributes signifies the field is required or disabled.'
          ),
          Object(l.createElement)(
            r.a,
            { title: 'Form Element - Required' },
            Object(l.createElement)(
              o.a,
              null,
              Object(l.createElement)(
                c.b,
                {
                  labelContent: 'Form Label',
                  inputId: 'form-element-03',
                  isRequired: !0
                },
                Object(l.createElement)(u.a, {
                  id: 'form-element-03',
                  placeholder: 'Placeholder Text',
                  required: !0
                })
              )
            )
          ),
          M({ id: 'Error' }, 'Error'),
          H(
            {},
            'If an error has occurred while submitting a form, the form element with an error should provide feedback. The ',
            L({}, 'slds-has-error'),
            ' class is placed on the ',
            L({}, '<div class="slds-form-element">'),
            ' element. Then, the error message for the user is placed in a ',
            L({}, '<div>'),
            ' with the ',
            L({}, 'slds-form-element__help'),
            ' class.'
          ),
          Object(l.createElement)(
            d.a,
            { type: 'a11y', header: 'Accessibility requirement' },
            Object(l.createElement)(
              'p',
              null,
              'When a form element displays feedback notifying the user of an error, the error string should be linked to the element by adding the',
              ' ',
              Object(l.createElement)('code', null, 'aria-describedby'),
              ' attribute to the ',
              Object(l.createElement)('code', null, '<input>'),
              '. The `aria-describedby` attribute must reference the id of the error message. This configuration allows screen readers to read the associated error message when the invalid field is focused.'
            )
          ),
          Object(l.createElement)(
            r.a,
            { title: 'Form Element - Error' },
            Object(l.createElement)(
              o.a,
              null,
              Object(l.createElement)(
                c.b,
                {
                  hasError: !0,
                  labelContent: 'Form Label',
                  inputId: 'form-element-05',
                  errorId: 'form-error-01',
                  isRequired: !0,
                  inlineMessage: 'This field is required'
                },
                Object(l.createElement)(u.a, {
                  id: 'form-element-05',
                  placeholder: 'Placeholder Text',
                  required: !0,
                  'aria-describedby': 'form-error-01'
                })
              )
            )
          ),
          R({ id: 'Layout-Variations' }, 'Layout Variations'),
          H(
            {},
            'If your form has more than one form element, you can switch the direction of ',
            L({}, 'slds-form-element__label'),
            ' and ',
            L({}, 'slds-form-element__control'),
            ' by applying ',
            L({}, 'slds-form-element_stacked'),
            ' for stacked labels and ',
            L({}, 'slds-form-element_horizontal'),
            ' for left-aligned labels. For optimal spacing and layout, ensure the ',
            L({}, 'slds-form-element'),
            ' class is present on each element within the form.'
          ),
          D({ id: 'Stacked' }, 'Stacked'),
          H(
            {},
            'To vertically stack ',
            Object(l.createElement)('code', null, '<label>'),
            ' and ',
            Object(l.createElement)('code', null, '<input>'),
            ' pairs, place ',
            L({}, 'slds-form-element_stacked'),
            ' on the ',
            L({}, 'div'),
            ' with the class of ',
            L({}, 'slds-form-element'),
            ' for optimal spacing.'
          ),
          Object(l.createElement)(
            r.a,
            { title: 'Form Layout - Stacked' },
            Object(l.createElement)(o.a, null, Object(N.e)(j, 'simple-stacked'))
          ),
          D({ id: 'Horizontal' }, 'Horizontal'),
          H(
            {},
            'To horizontally align a ',
            L({}, '<label>'),
            ' and ',
            L({}, '<input>'),
            ', use the ',
            L({}, 'slds-form-element_horizontal'),
            ' class on the ',
            L({}, 'div'),
            ' with the class of ',
            L({}, 'slds-form-element'),
            '. The ',
            L({}, 'slds-form-element__label'),
            ' takes up 33% of the width, and the ',
            L({}, 'slds-form-element__control'),
            ' uses the remaining 66%.'
          ),
          Object(l.createElement)(
            r.a,
            { title: 'Form Layout - Horizontal' },
            Object(l.createElement)(
              o.a,
              null,
              Object(N.e)(O, 'simple-horizontal')
            )
          ),
          M({ id: 'Single-Column-Support' }, 'Single Column Support'),
          H(
            {},
            'When using ',
            L({}, 'slds-form-element_horizontal'),
            ', you might find that the 33/66% distribution of the label to control might be too much in a single column form when displayed in a larger region. Another scenario where single column support would be useful is when a form element spans 100% while the other form elements in your form are 50/50 split. To reduce the distribution and/or align with 50/50 split form elements, adding the class ',
            L({}, 'slds-form-element_1-col'),
            ' to ',
            L({}, 'slds-form-element'),
            ' will re-distribute the layout.'
          ),
          B({ id: 'Standalone' }, 'Standalone'),
          Object(l.createElement)(
            r.a,
            { title: 'Form Layout - Horizontal - Single Column standalone' },
            Object(l.createElement)(
              o.a,
              null,
              Object(l.createElement)(
                c.b,
                {
                  isHorizontal: !0,
                  labelContent: 'Description',
                  inputId: 'single-form-element-id-01',
                  isEditing: !0,
                  column: 1
                },
                Object(l.createElement)(b.a, {
                  id: 'single-form-element-id-01',
                  defaultValue:
                    'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.'
                })
              )
            )
          ),
          B({ id: 'With-5050-split' }, 'With 50/50 split'),
          Object(l.createElement)(
            r.a,
            { title: 'Form Layout - Horizontal - Single Column combo' },
            Object(l.createElement)(
              o.a,
              null,
              Object(l.createElement)(
                'div',
                { className: 'slds-form', role: 'list' },
                Object(l.createElement)(
                  v.b,
                  null,
                  Object(l.createElement)(
                    v.a,
                    null,
                    Object(l.createElement)(
                      c.b,
                      {
                        isHorizontal: !0,
                        labelContent: 'Label',
                        inputId: 'single-form-element-id-02',
                        isEditing: !0
                      },
                      Object(l.createElement)(u.a, {
                        id: 'single-form-element-id-02',
                        placeholder: 'Placeholder Text'
                      })
                    )
                  ),
                  Object(l.createElement)(
                    v.a,
                    null,
                    Object(l.createElement)(
                      c.b,
                      {
                        isHorizontal: !0,
                        labelContent: 'Label',
                        inputId: 'single-form-element-id-03',
                        isEditing: !0
                      },
                      Object(l.createElement)(u.a, {
                        id: 'single-form-element-id-03',
                        placeholder: 'Placeholder Text'
                      })
                    )
                  )
                ),
                Object(l.createElement)(
                  v.b,
                  null,
                  Object(l.createElement)(
                    v.a,
                    null,
                    Object(l.createElement)(
                      c.b,
                      {
                        isHorizontal: !0,
                        labelContent: 'Description',
                        inputId: 'single-form-element-id-04',
                        isEditing: !0,
                        column: 1
                      },
                      Object(l.createElement)(b.a, {
                        id: 'single-form-element-id-04',
                        placeholder: 'Placeholder Text',
                        defaultValue:
                          'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.'
                      })
                    )
                  )
                )
              )
            )
          ),
          D({ id: 'Compound' }, 'Compound'),
          H(
            {},
            'A compound form is a grouping of several form elements described by a label/title. The compound form should be implemented as a ',
            L({}, '<fieldset>'),
            ', where the label/title is implemented as a ',
            L({}, '<legend>'),
            ' element.'
          ),
          H(
            {},
            'The ',
            L({}, '<fieldset>'),
            ' ',
            U({}, P({}, 'requires')),
            ' the class ',
            L({}, 'slds-form-element_compound'),
            '. This class handles the layout and wrapping of the form elements that are grouped together.'
          ),
          H(
            {},
            'The ',
            L({}, '<legend>'),
            ' element ',
            U({}, P({}, 'requires')),
            ' the class ',
            L({}, 'slds-form-element__legend'),
            '. Legend elements can only accept a limited amount of CSS properties so this class is there to help manage its layout.'
          ),
          Object(l.createElement)(
            s.a,
            { toggleCode: !1 },
            Object(l.createElement)(
              c.a,
              { hasCompoundFields: !0, label: 'Fieldset Label' },
              '...'
            )
          ),
          M({ id: 'Rows' }, 'Rows'),
          H(
            {},
            'Each row of a compound field should be wrapped in a ',
            L({}, '<div>'),
            ' with the class ',
            L({}, 'slds-form-element__row'),
            '.'
          ),
          M({ id: 'Fields' }, 'Fields'),
          H(
            {},
            'Each field inside of a compound row can be explicitly sized by using a sizing class, e.g. ',
            L({}, 'slds-size_1-of-2'),
            '.'
          ),
          Object(l.createElement)(
            s.a,
            { toggleCode: !1 },
            Object(l.createElement)(
              g,
              null,
              Object(l.createElement)(
                'div',
                { className: 'slds-size_1-of-2' },
                '...'
              )
            )
          ),
          Object(l.createElement)(
            r.a,
            { title: 'Form Layout - Compound' },
            Object(l.createElement)(o.a, { demoStyles: 'max-width: 400px;' }, T)
          ),
          M({ id: 'Address' }, 'Address'),
          H(
            {},
            'Though an address form is utilizing the ',
            L({}, 'slds-form-element_compound'),
            ' class, we need to also add the ',
            L({}, 'slds-form-element_address'),
            ' class to the component. We modify some of the behavior of an address form with this class.'
          ),
          Object(l.createElement)(
            r.a,
            { title: 'Form Layout - Compound - Address' },
            Object(l.createElement)(o.a, { demoStyles: 'max-width: 400px;' }, q)
          ),
          R({ id: 'Usage-Examples' }, 'Usage Examples'),
          D({ id: 'Record-Form' }, 'Record Form'),
          H(
            {},
            'A record form is a series of rows created by ',
            L({}, 'slds-form__row'),
            '. Inside of each row contains up to 2 inline-editable form element. Each item inside of ',
            L({}, 'slds-form__row'),
            ' is required to be wrapped in a ',
            L({}, '<div>'),
            ' with the class ',
            L({}, 'slds-form__item'),
            '.'
          ),
          Object(l.createElement)(
            d.a,
            { type: 'a11y', header: 'Accessibility Requirement' },
            Object(l.createElement)(
              'p',
              null,
              'Due to the nature of how the record form is composed, we need to notify screen readers that this is a list by adding ',
              Object(l.createElement)('code', null, 'role="list"'),
              ' to the',
              ' ',
              Object(l.createElement)('code', null, 'slds-form'),
              ' element. Every column inside of each row should get',
              ' ',
              Object(l.createElement)('code', null, 'role="listitem"'),
              ' to identify itself as items of the list.'
            )
          ),
          M({ id: 'View-Mode' }, 'View Mode'),
          H(
            {},
            'When in view/readonly mode, it is ',
            P({}, 'required'),
            ' to have the class ',
            L({}, 'slds-form-element_readonly'),
            ' on the ',
            L({}, 'slds-form-element'),
            ' element. This class will provide styles for scanability and spacing.'
          ),
          H(
            {},
            'If inline-edit mode is enabled, you will also need to add ',
            L({}, 'slds-form-element_edit'),
            ' to the ',
            L({}, 'slds-form-element'),
            ' to accommodate the space for the edit button icon.'
          ),
          B({ id: 'Stacked-Alignment' }, 'Stacked Alignment'),
          H(
            {},
            'When you want the form elements inside of your record form to be stacked. Each ',
            L({}, 'slds-form-element'),
            ' should also get the class ',
            L({}, 'slds-form-element_stacked'),
            '.'
          ),
          Object(l.createElement)(
            r.a,
            { title: 'Form Element - Record Detail - View Mode' },
            Object(l.createElement)(
              o.a,
              null,
              Object(l.createElement)(v.c, {
                snapshot: k,
                isViewMode: !0,
                hasInlineEdit: !0,
                direction: 'stacked'
              })
            )
          ),
          Object(l.createElement)(V.b, {
            docsLink: '#Mobile',
            header: 'Mobile context changes',
            elementName:
              'form elements within a record form with stacked alignment'
          }),
          Object(l.createElement)(
            o.a,
            { frameOnly: !0 },
            Object(l.createElement)(v.c, {
              snapshot: k,
              isViewMode: !0,
              hasInlineEdit: !0,
              direction: 'stacked'
            })
          ),
          B({ id: 'Horizontal-Alignment' }, 'Horizontal Alignment'),
          H(
            {},
            'By adding the class ',
            L({}, 'slds-form-element_horizontal'),
            ' to every ',
            L({}, 'slds-form-element'),
            ', your form can switch from stacked to left-aligned, horizontal labels in order to reduce vertical space.'
          ),
          Object(l.createElement)(
            r.a,
            { title: 'Form Element - Record Detail - View Mode - Horizontal' },
            Object(l.createElement)(
              o.a,
              null,
              Object(l.createElement)(v.c, {
                snapshot: A,
                isViewMode: !0,
                hasInlineEdit: !0,
                direction: 'horizontal'
              })
            )
          ),
          Object(l.createElement)(V.b, {
            docsLink: '#Mobile',
            header: 'Mobile context changes',
            elementName:
              'form elements within a record form with horizontal alignment'
          }),
          Object(l.createElement)(
            o.a,
            { frameOnly: !0 },
            Object(l.createElement)(v.c, {
              snapshot: A,
              isViewMode: !0,
              hasInlineEdit: !0,
              direction: 'horizontal'
            })
          ),
          M({ id: 'Edit-Mode' }, 'Edit Mode'),
          H(
            {},
            'When a form switches to edit mode, we need to replace all readonly form elements with their semantic field type form element. The structure remains the same:'
          ),
          Object(l.createElement)(
            s.a,
            { toggleCode: !1 },
            Object(l.createElement)(
              c.b,
              { labelContent: 'My Label', inputId: 'unique-form-element-id' },
              '...'
            )
          ),
          H(
            {},
            'The form content found inside of ',
            L({}, 'slds-form-element__control'),
            ' should be replaced with the appropriate field type of the view/readonly state.'
          ),
          B({ id: 'Stacked-Alignment-2' }, 'Stacked Alignment'),
          Object(l.createElement)(
            r.a,
            { title: 'Form Element - Record Detail - Edit Mode' },
            Object(l.createElement)(
              o.a,
              null,
              Object(l.createElement)(v.c, {
                snapshot: k,
                direction: 'stacked'
              })
            )
          ),
          B({ id: 'Horizontal-Alignment-2' }, 'Horizontal Alignment'),
          Object(l.createElement)(
            r.a,
            { title: 'Form Element - Record Detail - Edit Mode - Horizontal' },
            Object(l.createElement)(
              o.a,
              null,
              Object(l.createElement)(v.c, {
                snapshot: A,
                direction: 'horizontal'
              })
            )
          )
        );
      },
      G = function() {
        return Object(i.a)(J());
      };
  }
});
