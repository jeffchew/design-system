var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/expression/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, s, i = t[0], r = t[1], c = t[2], u = 0, m = [];
      u < i.length;
      u++
    )
      (s = i[u]),
        Object.prototype.hasOwnProperty.call(o, s) && o[s] && m.push(o[s][0]),
        (o[s] = 0);
    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    for (d && d(t); m.length; ) m.shift()();
    return a.push.apply(a, c || []), l();
  }
  function l() {
    for (var e, t = 0; t < a.length; t++) {
      for (var l = a[t], n = !0, i = 1; i < l.length; i++) {
        var r = l[i];
        0 !== o[r] && (n = !1);
      }
      n && (a.splice(t--, 1), (e = s((s.s = l[0]))));
    }
    return e;
  }
  var n = {},
    o = { 35: 0 },
    a = [];
  function s(t) {
    if (n[t]) return n[t].exports;
    var l = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(l.exports, l, l.exports, s), (l.l = !0), l.exports;
  }
  (s.m = e),
    (s.c = n),
    (s.d = function(e, t, l) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: l });
    }),
    (s.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (s.t = function(e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var l = Object.create(null);
      if (
        (s.r(l),
        Object.defineProperty(l, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          s.d(
            l,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return l;
    }),
    (s.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return s.d(t, 'a', t), t;
    }),
    (s.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = '/assets/scripts/bundle/');
  var i = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    r = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var c = 0; c < i.length; c++) t(i[c]);
  var d = r;
  return a.push([213, 0]), l();
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
  213: function(e, t, l) {
    'use strict';
    l.r(t),
      l.d(t, 'getElement', function() {
        return te;
      }),
      l.d(t, 'getContents', function() {
        return le;
      });
    var n = l(0),
      o = l.n(n),
      a = l(4),
      s = l(1),
      i = l(23),
      r = l(11),
      c = l(15),
      d = l(3),
      u = l.n(d),
      m = l(12),
      p = l(10),
      b = l(7),
      h = l(13),
      E = l(24),
      g = l(25),
      f = l(8),
      O = l(16),
      x = {
        conditionOption1: { name: 'All Conditions Are Met' },
        conditionOption2: { name: 'Any Condition Is Met' },
        conditionOption3: { name: 'Custom Logic Is Met' },
        conditionOption4: { name: 'Always (No Criteria)' },
        conditionOption5: { name: 'Formula Evaluates To True' }
      },
      v = {
        resourceOption1: { name: 'Resource 1' },
        resourceOption2: { name: 'Resource 2' },
        resourceOption3: { name: 'Resource 3' },
        resourceOption4: { name: 'Resource 4' }
      },
      y = {
        resourceOption1: { name: 'Resource 1', selected: !0, focused: !0 },
        resourceOption2: { name: 'Resource 2' },
        resourceOption3: { name: 'Resource 3' },
        resourceOption4: { name: 'Resource 4' }
      },
      j = {
        operatorOption1: { name: 'Equals' },
        operatorOption2: { name: 'Does Not Equal' },
        operatorOption3: { name: 'Greater Than' },
        operatorOption4: { name: 'Less Than' }
      },
      _ = {
        all: {
          snapshot: {
            conditionOption1: {
              name: 'All Conditions Are Met',
              selected: !0,
              focused: !0
            },
            conditionOption2: { name: 'Any Condition Is Met' },
            conditionOption3: { name: 'Custom Logic Is Met' },
            conditionOption4: { name: 'Always (No Criteria)' },
            conditionOption5: { name: 'Formula Evaluates To True' }
          },
          value: 'All Conditions Are Met'
        },
        any: {
          snapshot: {
            conditionOption1: { name: 'All Conditions Are Met' },
            conditionOption2: {
              name: 'Any Condition Is Met',
              selected: !0,
              focused: !0
            },
            conditionOption3: { name: 'Custom Logic Is Met' },
            conditionOption4: { name: 'Always (No Criteria)' },
            conditionOption5: { name: 'Formula Evaluates To True' }
          },
          value: 'Any Condition Is Met'
        },
        custom: {
          snapshot: {
            conditionOption1: { name: 'All Conditions Are Met' },
            conditionOption2: { name: 'Any Condition Is Met' },
            conditionOption3: {
              name: 'Custom Logic Is Met',
              selected: !0,
              focused: !0
            },
            conditionOption4: { name: 'Always (No Criteria)' },
            conditionOption5: { name: 'Formula Evaluates To True' }
          },
          value: 'Custom Logic Is Met'
        },
        always: {
          snapshot: {
            conditionOption1: { name: 'All Conditions Are Met' },
            conditionOption2: { name: 'Any Condition Is Met' },
            conditionOption3: { name: 'Custom Logic Is Met' },
            conditionOption4: {
              name: 'Always (No Criteria)',
              selected: !0,
              focused: !0
            },
            conditionOption5: { name: 'Formula Evaluates To True' }
          },
          value: 'Always (No Criteria)'
        },
        formula: {
          snapshot: {
            conditionOption1: { name: 'All Conditions Are Met' },
            conditionOption2: { name: 'Any Condition Is Met' },
            conditionOption3: { name: 'Custom Logic Is Met' },
            conditionOption4: { name: 'Always (No Criteria)' },
            conditionOption5: {
              name: 'Formula Evaluates To True',
              selected: !0,
              focused: !0
            }
          },
          value: 'Formula Evaluates To True'
        },
        group: {
          snapshot: {
            conditionOption1: { name: 'All Conditions Are Met for This Group' },
            conditionOption2: {
              name: 'Any Condition Is Met for This Group',
              selected: !0,
              focused: !0
            },
            conditionOption3: { name: 'Custom Logic Is Met for This Group' },
            conditionOption4: { name: 'Always (No Criteria)' },
            conditionOption5: { name: 'Formula Evaluates To True' }
          },
          value: 'Any Condition Is Met in This Group'
        }
      },
      N = l(5),
      w = l.n(N),
      S = l(2),
      T = function(e) {
        var t = S.c.uniqueId('listbox-id-'),
          l = e.optionSelected && _[e.optionSelected];
        return o.a.createElement(
          'div',
          {
            className: w()(
              e.isInFilter
                ? 'slds-m-vertical_small'
                : 'slds-expression__options'
            )
          },
          o.a.createElement(E.b, {
            id: S.c.uniqueId('combobox-id-'),
            'aria-controls': t,
            label: e.label,
            value: l && l.value,
            readonly: !0,
            inputIconPosition: 'right',
            rightInputIcon: o.a.createElement(m.a, {
              symbol: 'down',
              className: 'slds-icon slds-icon_x-small slds-icon-text-default',
              containerClassName: 'slds-input__icon slds-input__icon_right',
              assistiveText: !1,
              title: !1
            }),
            results: o.a.createElement(g.e, {
              id: t,
              hasUniqueId: !0,
              snapshot: l ? l.snapshot : x,
              type: 'plain',
              count: l ? Object.keys(l.snapshot).length : Object.keys(x).length,
              visualSelection: !0
            }),
            resultsType: 'listbox',
            hasInteractions: !0
          })
        );
      };
    (T.propTypes = {
      label: u.a.string.isRequired,
      isInFilter: u.a.bool,
      optionSelected: u.a.oneOf([
        'any',
        'all',
        'custom',
        'formula',
        'always',
        'group'
      ])
    }),
      (T.defaultProps = { label: 'Take Action When' });
    var A = function(e) {
      var t = S.c.uniqueId('text-input-id-');
      return o.a.createElement(
        'div',
        { className: 'slds-expression__custom-logic' },
        o.a.createElement(
          f.b,
          { labelContent: 'Custom Logic', inputId: t },
          o.a.createElement(O.a, { id: t, defaultValue: e.defaultValue })
        )
      );
    };
    A.propTypes = { defaultValue: u.a.string };
    var I = function(e) {
      return o.a.createElement('ul', null, e.children);
    };
    I.propTypes = { children: u.a.node };
    var C = function(e) {
      return o.a.createElement(
        'legend',
        {
          className: w()('slds-expression__legend', {
            'slds-expression__legend_group': e.isGroup
          })
        },
        e.legendText && o.a.createElement('span', null, e.legendText),
        o.a.createElement(
          'span',
          { className: 'slds-assistive-text' },
          e.assistiveText
        )
      );
    };
    C.propTypes = {
      isGroup: u.a.bool,
      legendText: u.a.string,
      assistiveText: u.a.string
    };
    var D = function(e) {
      return o.a.createElement(
        'div',
        { className: w()('slds-col', { 'slds-grow-none': e.doesNotGrow }) },
        e.children
      );
    };
    D.propTypes = { doesNotGrow: u.a.bool, children: u.a.node };
    var M = function(e) {
      var t = S.c.uniqueId('listbox-id-'),
        l = S.c.uniqueId('listbox-id-'),
        n = S.c.uniqueId('text-input-id-'),
        a = 'error-message-unique-id';
      return o.a.createElement(
        'li',
        {
          className: w()('slds-expression__row', {
            'slds-expression__row_group': e.isGroup
          })
        },
        o.a.createElement(
          'fieldset',
          null,
          o.a.createElement(C, {
            legendText: e.legendText,
            assistiveText: e.isGroup
              ? e.conditionName + ' of ' + e.groupName
              : e.conditionName
          }),
          o.a.createElement(
            'div',
            { className: 'slds-grid slds-gutters_xx-small' },
            o.a.createElement(
              D,
              null,
              o.a.createElement(E.b, {
                id: S.c.uniqueId('combobox-id-'),
                'aria-controls': t,
                label: 'Resource',
                readonly: !0,
                inputIconPosition: 'right',
                value: e.resourceIsSelected && 'Resource 1',
                formClassName: 'slds-has-error',
                errorId: a,
                rightInputIcon: o.a.createElement(m.a, {
                  symbol: 'down',
                  className:
                    'slds-icon slds-icon_x-small slds-icon-text-default',
                  containerClassName: 'slds-input__icon slds-input__icon_right',
                  assistiveText: !1,
                  title: !1
                }),
                results: o.a.createElement(g.e, {
                  id: t,
                  hasUniqueId: !0,
                  snapshot: e.resourceIsSelected ? y : v,
                  type: 'plain',
                  count: 4,
                  visualSelection: !0
                }),
                resultsType: 'listbox',
                hasInteractions: !0
              })
            ),
            o.a.createElement(
              D,
              { doesNotGrow: !0 },
              o.a.createElement(E.b, {
                id: S.c.uniqueId('combobox-id-'),
                'aria-controls': l,
                label: 'Operator',
                readonly: !0,
                inputIconPosition: 'right',
                isDisabled: e.inputIsDisabled,
                rightInputIcon: o.a.createElement(m.a, {
                  symbol: 'down',
                  className:
                    'slds-icon slds-icon_x-small slds-icon-text-default',
                  containerClassName: 'slds-input__icon slds-input__icon_right',
                  assistiveText: !1,
                  title: !1
                }),
                results: o.a.createElement(g.e, {
                  id: l,
                  hasUniqueId: !0,
                  snapshot: j,
                  type: 'plain',
                  count: 4,
                  visualSelection: !0
                }),
                resultsType: 'listbox',
                hasInteractions: !0
              })
            ),
            o.a.createElement(
              D,
              null,
              o.a.createElement(
                f.b,
                {
                  hasError: e.hasError,
                  labelContent: 'Value',
                  inputId: n,
                  errorId: e.errorMessage && a,
                  inlineMessage: e.errorMessage
                },
                o.a.createElement(O.a, {
                  disabled: e.inputIsDisabled,
                  id: n,
                  'aria-describedby': e.errorMessage && a
                })
              )
            ),
            o.a.createElement(
              D,
              { doesNotGrow: !0 },
              o.a.createElement(
                f.h,
                null,
                o.a.createElement(f.e, null, ' '),
                o.a.createElement(
                  f.c,
                  null,
                  o.a.createElement(b.b, {
                    theme: 'neutral',
                    symbol: 'delete',
                    disabled: e.buttonIsDisabled,
                    assistiveText: e.isGroup
                      ? 'Delete ' + e.conditionName + ' of ' + e.groupName
                      : 'Delete ' + e.conditionName,
                    title: e.isGroup
                      ? 'Delete ' + e.conditionName + ' of ' + e.groupName
                      : 'Delete ' + e.conditionName
                  })
                )
              )
            )
          )
        )
      );
    };
    (M.propTypes = {
      legendText: u.a.string,
      conditionName: u.a.string.isRequired,
      isGroup: u.a.bool,
      groupName: function(e, t) {
        if (e.isGroup && (void 0 === e[t] || 'string' != typeof e[t]))
          return new Error(
            "Please provide a string of this row's group name for assistive text."
          );
      },
      inputIsDisabled: u.a.bool,
      buttonIsDisabled: u.a.bool,
      resourceIsSelected: u.a.bool,
      errorMessage: u.a.string
    }),
      (M.defaultProps = { conditionName: 'Condition 1' });
    var G = function(e) {
      return o.a.createElement(
        'li',
        { className: 'slds-expression__group' },
        o.a.createElement(
          'fieldset',
          null,
          o.a.createElement(C, {
            legendText: e.legendText,
            assistiveText: e.assistiveText,
            isGroup: !0
          }),
          o.a.createElement(T, { optionSelected: e.optionSelected }),
          o.a.createElement('ul', null, e.children),
          o.a.createElement(R, { isGroup: !0 })
        )
      );
    };
    (G.propTypes = {
      legendText: u.a.string,
      assistiveText: u.a.string.isRequired,
      optionSelected: u.a.oneOf([
        'any',
        'all',
        'custom',
        'formula',
        'always',
        'group'
      ]),
      children: u.a.node
    }),
      (G.defaultProps = { assistiveText: 'Condition Group 1' });
    var R = function(e) {
      return o.a.createElement(
        'div',
        { className: 'slds-expression__buttons' },
        o.a.createElement(
          h.a,
          { isNeutral: !0 },
          o.a.createElement(p.a, {
            className: 'slds-button__icon slds-button__icon_left',
            sprite: 'utility',
            symbol: 'add'
          }),
          'Add Condition'
        ),
        !e.isGroup &&
          o.a.createElement(
            h.a,
            { isNeutral: !0 },
            o.a.createElement(p.a, {
              className: 'slds-button__icon slds-button__icon_left',
              sprite: 'utility',
              symbol: 'add'
            }),
            'Add Group'
          )
      );
    };
    R.propTypes = { isGroup: u.a.bool };
    var L = function(e) {
      return o.a.createElement(
        'div',
        { className: 'slds-expression' },
        o.a.createElement(
          'h2',
          { className: 'slds-expression__title' },
          'Conditions'
        ),
        o.a.createElement(T, { optionSelected: e.optionSelected }),
        e.hasCustomLogic &&
          o.a.createElement(A, { defaultValue: e.customLogicValue }),
        o.a.createElement(
          I,
          null,
          o.a.createElement(M, {
            legendText: e.legendText,
            assistiveText: 'Condition 1',
            inputIsDisabled: e.inputIsDisabled,
            buttonIsDisabled: e.buttonIsDisabled,
            resourceIsSelected: e.resourceIsSelected
          }),
          e.children
        ),
        o.a.createElement(R, null)
      );
    };
    L.propTypes = {
      hasCustomLogic: u.a.bool,
      legendText: u.a.string,
      inputIsDisabled: u.a.bool,
      buttonIsDisabled: u.a.bool,
      optionSelected: u.a.oneOf(['any', 'all', 'custom', 'formula', 'always']),
      resourceIsSelected: u.a.bool,
      customLogicValue: u.a.string,
      children: u.a.node
    };
    var F = l(20),
      k = function(e) {
        return o.a.createElement(
          'div',
          { className: 'slds-expression' },
          o.a.createElement(T, { optionSelected: e.optionSelected }),
          o.a.createElement(
            'div',
            { className: 'slds-expression_formula__rte' },
            o.a.createElement(
              F.a,
              { label: 'Formula' },
              o.a.createElement(F.l, null, o.a.createElement(F.h, null)),
              o.a.createElement(F.k, {
                label: 'Compose formula',
                placeholder: 'Compose formula...'
              })
            )
          ),
          o.a.createElement(
            'div',
            { className: 'slds-m-top_small' },
            o.a.createElement(h.a, { isNeutral: !0 }, 'Check Syntax')
          )
        );
      };
    k.propTypes = { optionSelected: u.a.string };
    var q = l(39),
      B = function(e) {
        return o.a.createElement(
          'div',
          {
            className: 'demo-only',
            style: { maxWidth: '320px', overflow: 'hidden' }
          },
          e.children
        );
      };
    B.propTypes = { children: u.a.node };
    var P = function(e) {
      return o.a.createElement(
        'div',
        { className: 'slds-m-top_small' },
        o.a.createElement(
          h.a,
          { isNeutral: !0 },
          o.a.createElement(p.a, {
            className: 'slds-button__icon slds-button__icon_left',
            sprite: 'utility',
            symbol: 'add'
          }),
          'Add Condition'
        ),
        e.hasGroup &&
          o.a.createElement(
            h.a,
            { isNeutral: !0 },
            o.a.createElement(p.a, {
              className: 'slds-button__icon slds-button__icon_left',
              sprite: 'utility',
              symbol: 'add'
            }),
            'Add Group'
          )
      );
    };
    P.propTypes = { hasGroup: u.a.bool };
    var W = function(e) {
      return o.a.createElement(
        'div',
        { className: 'slds-filters__group' },
        o.a.createElement(
          'div',
          { className: 'slds-grid slds-grid_align-spread' },
          o.a.createElement(
            'span',
            null,
            o.a.createElement('strong', null, 'AND')
          ),
          o.a.createElement(
            'span',
            { className: 'slds-assistive-text' },
            'Condition Group 1'
          ),
          o.a.createElement(b.b, {
            className: 'slds-button_icon slds-button_icon-small',
            iconClassName: 'slds-button__icon_hint',
            symbol: 'delete',
            assistiveText: 'Remove Group',
            title: 'Remove Group'
          })
        ),
        o.a.createElement(T, {
          isInFilter: !0,
          optionSelected: e.optionSelected
        }),
        o.a.createElement(
          'ol',
          null,
          o.a.createElement(
            q.a,
            { type: 'Amount', removable: !0, removeSymbol: 'delete' },
            'greater than "1000"'
          )
        ),
        o.a.createElement(P, null)
      );
    };
    W.propTypes = { optionSelected: u.a.string };
    var V = function(e) {
      return o.a.createElement(
        B,
        null,
        o.a.createElement(
          q.c,
          null,
          o.a.createElement(
            'h2',
            { className: 'slds-text-heading_small' },
            'Conditions'
          ),
          o.a.createElement(
            'div',
            { className: 'slds-m-vertical_small' },
            o.a.createElement(T, {
              isInFilter: !0,
              optionSelected: e.optionSelected
            })
          ),
          o.a.createElement(
            'ol',
            { className: 'slds-list_vertical slds-list_vertical-space' },
            o.a.createElement(
              q.a,
              { type: 'Amount', removable: !0, removeSymbol: 'delete' },
              'greater than "1000"'
            ),
            e.children
          ),
          o.a.createElement(P, { hasGroup: !0 })
        )
      );
    };
    V.propTypes = { optionSelected: u.a.string, children: u.a.node };
    q.a, q.b, q.a;
    var U = a.c.a,
      J = a.c.code,
      H = a.c.em,
      K = a.c.h2,
      z = a.c.h3,
      Q = a.c.h4,
      X = a.c.li,
      Y = a.c.ol,
      Z = a.c.p,
      $ = a.c.strong,
      ee = a.c.ul,
      te = function() {
        return Object(n.createElement)(
          a.b,
          {},
          Object(n.createElement)(
            'div',
            { className: 'doc lead' },
            'Expression builders help users declaratively construct logical expressions. These expressions can be used when querying for a filtered set of records, creating rules to control when something executes, or any other conditional logic.'
          ),
          Object(n.createElement)(
            s.a,
            { exampleOnly: !0 },
            Object(n.createElement)(L, {
              optionSelected: 'all',
              inputIsDisabled: !0,
              buttonIsDisabled: !0
            })
          ),
          K({ id: 'About-Expression-Builder' }, 'About Expression Builder'),
          Z(
            {},
            'The variants scale from lightweight e-commerce style filtering to declarative rule building, and even to advanced formula or SOQL/SQL expressions.'
          ),
          Z({}, 'We also include size variants to fit a variety of use cases:'),
          ee(
            {},
            X(
              {},
              'Use the narrow version for in-context expression building, enabling users to preview their results.'
            ),
            X(
              {},
              'Use the full width version when expression building is a standalone task, perhaps in a modal.'
            )
          ),
          z({ id: 'Accessibility' }, 'Accessibility'),
          Q({ id: 'Markup' }, 'Markup'),
          Z(
            {},
            'Each row in the expression builder is a ',
            J({}, '<fieldset>'),
            ' and is contained in an ',
            J({}, '<li>'),
            ' inside of a ',
            J({}, '<ul>'),
            '.'
          ),
          Object(n.createElement)(
            i.a,
            { toggleCode: !1 },
            Object(n.createElement)(
              'ul',
              null,
              Object(n.createElement)(
                'li',
                { className: 'slds-expression__row' },
                Object(n.createElement)(
                  'fieldset',
                  null,
                  Object(n.createElement)(
                    'legend',
                    { className: 'slds-expression__legend' },
                    Object(n.createElement)('span', null, 'AND'),
                    Object(n.createElement)(
                      'span',
                      { className: 'slds-assistive-text' },
                      'Condition N'
                    )
                  ),
                  Object(n.createElement)(
                    'div',
                    { className: 'slds-expression__row_inputs' },
                    '...'
                  )
                )
              )
            )
          ),
          Z(
            {},
            'The first child DOM element of the ',
            J({}, '<fieldset>'),
            ' should be the ',
            J({}, '<legend>'),
            ', which includes the logic operator, such as "AND" or "OR", and assistive text describing the current rule, such as "Condition 3".'
          ),
          Object(n.createElement)(
            i.a,
            { toggleCode: !1 },
            Object(n.createElement)(
              'legend',
              { className: 'slds-expression__legend' },
              Object(n.createElement)('span', null, 'AND'),
              Object(n.createElement)(
                'span',
                { className: 'slds-assistive-text' },
                'Condition N'
              )
            )
          ),
          Q({ id: 'Focus-Management' }, 'Focus Management'),
          Z({}, $({}, 'Adding:')),
          Z({}, 'When clicking ', J({}, 'Add Condition'), ':'),
          ee(
            {},
            X(
              {},
              'Focus should move to the first combobox input in the new rule, labeled "Resource" or something similar'
            )
          ),
          Z({}, 'When clicking ', J({}, 'Add Group'), ':'),
          ee(
            {},
            X(
              {},
              'Focus should move to the mode combobox in the new group, where "All Conditions Are Met For This Group" should be selected by default'
            )
          ),
          Z({}, $({}, 'Deleting:')),
          Z({}, 'When "deleting" the only row:'),
          ee(
            {},
            X(
              {},
              'When there is only one row, the delete button is disabled until a Resource is selected.'
            ),
            X(
              {},
              'If a Resource has been selected, then clicking the delete button resets to the ',
              U({ href: '/components/expression/#Default' }, 'Default State'),
              ', since there is a one row minimum. This includes:',
              Y(
                {},
                X(
                  {},
                  'Clear any comboboxes or inputs that have been changed from the default'
                ),
                X(
                  {},
                  'Use JavaScript to move focus to the "Resource" combobox input of that same row.'
                ),
                X(
                  {},
                  'Disable the "Operator" and "Value" inputs, as well as the Delete button'
                )
              )
            )
          ),
          Z({}, 'When deleting the first row or a middle row:'),
          ee(
            {},
            X(
              {},
              'Use JavaScript to move focus to the first combobox input in the ',
              H({}, 'next'),
              ' row, labeled "Resource" or something similar.'
            )
          ),
          Z({}, 'When deleting the last row:'),
          ee(
            {},
            X(
              {},
              'Use JavaScript to move focus to the first combobox input in the ',
              H({}, 'previous'),
              ' row, labeled "Resource" or something similar.'
            )
          ),
          K({ id: 'Base' }, 'Base'),
          Object(n.createElement)(
            r.a,
            { title: 'Expression Builder -  Base' },
            Object(n.createElement)(
              s.a,
              null,
              Object(n.createElement)(L, {
                optionSelected: 'all',
                resourceIsSelected: !0
              })
            )
          ),
          Z(
            {},
            'By default, the expression builder starts with one condition. The default option for the mode combobox is "All Conditions Are Met". Until a Resource is selected, the Operator and Value fields, as well as the Delete button, are disabled.'
          ),
          Z(
            {},
            'The expression builder has a one row minimum requirement. Therefore, clicking the delete button on a single row will only clear any populated values from the inputs.'
          ),
          Object(n.createElement)(
            c.a,
            { header: 'Label Note', type: 'note' },
            Object(n.createElement)(
              'p',
              null,
              'Be sure to show labels above all inputs. By default "Take Action When" is the label for the mode combobox. However, this should be updated based on the product or persona to best match the use case. Similarly, use “Resource”, “Operator”, and “Value” as labels in each row, but, when relevant, replace “Resource” with a more specific label for your use case (e.g. “Field”).'
            )
          ),
          z({ id: 'Initial-State' }, 'Initial State'),
          Z(
            {},
            'Since the options in the Operator field and the type of component used for the Value field are dependent on the Resource selected, the Operator and Value Fields are disabled in the initial state until a Resource is selected. The Delete button is also disabled until a Resource is selected.'
          ),
          Object(n.createElement)(
            r.a,
            { title: 'Expression Builder - Initial Disabled State' },
            Object(n.createElement)(
              s.a,
              null,
              Object(n.createElement)(L, {
                optionSelected: 'all',
                inputIsDisabled: !0,
                buttonIsDisabled: !0
              })
            )
          ),
          z({ id: 'Resource-Selected' }, 'Resource Selected'),
          Z(
            {},
            'Once a resource is selected, the values for the Operator field update to correspond with the type of Resource selected. Similarly, the component used for the Value field can be an input, combobox, picklist, or lookup, depending on what Resource was chosen.'
          ),
          Object(n.createElement)(
            r.a,
            { title: 'Expression Builder - Initial State Resource Selected' },
            Object(n.createElement)(
              s.a,
              null,
              Object(n.createElement)(L, {
                optionSelected: 'all',
                resourceIsSelected: !0
              })
            )
          ),
          z({ id: 'New-Condition-Added' }, 'New Condition Added'),
          Object(n.createElement)(
            r.a,
            { title: 'Expression Builder - Condition Added' },
            Object(n.createElement)(
              s.a,
              null,
              Object(n.createElement)(
                L,
                { optionSelected: 'all', resourceIsSelected: !0 },
                Object(n.createElement)(M, {
                  legendText: 'AND',
                  conditionName: 'Condition 2',
                  inputIsDisabled: !0
                })
              )
            )
          ),
          z({ id: 'Error-State' }, 'Error State'),
          Object(n.createElement)(
            r.a,
            { title: 'Expression Builder - Error State' },
            Object(n.createElement)(
              s.a,
              null,
              Object(n.createElement)(
                L,
                { optionSelected: 'all', resourceIsSelected: !0 },
                Object(n.createElement)(M, {
                  legendText: 'AND',
                  conditionName: 'Condition 2',
                  errorMessage: 'This field is required.',
                  hasError: !0
                })
              )
            )
          ),
          K({ id: 'All-or-Any-Conditions' }, 'All or Any Conditions'),
          Z(
            {},
            'When the user selects "All Conditions Are Met" from the mode combobox and adds a second condition, the expression builder will use ',
            J({}, 'AND'),
            ' logic:'
          ),
          Object(n.createElement)(
            r.a,
            { title: 'Expression Builder - All Conditions' },
            Object(n.createElement)(
              s.a,
              null,
              Object(n.createElement)(
                L,
                { optionSelected: 'all', resourceIsSelected: !0 },
                Object(n.createElement)(M, {
                  legendText: 'AND',
                  conditionName: 'Condition 2',
                  resourceIsSelected: !0
                })
              )
            )
          ),
          Z(
            {},
            'If the user selects "Any Condition Is Met" from the mode combobox, the expression builder will use ',
            J({}, 'OR'),
            ' logic:'
          ),
          Object(n.createElement)(
            r.a,
            { title: 'Expression Builder - Any Conditions' },
            Object(n.createElement)(
              s.a,
              null,
              Object(n.createElement)(
                L,
                { optionSelected: 'any', resourceIsSelected: !0 },
                Object(n.createElement)(M, {
                  legendText: 'OR',
                  conditionName: 'Condition 2',
                  resourceIsSelected: !0
                })
              )
            )
          ),
          z({ id: 'With-an-Expression-Group' }, 'With an Expression Group'),
          Z(
            {},
            'To create more complex expressions, the user can add an expression group to create something like ',
            J({}, 'Condition 1 AND (Condition 2 OR Condition 3)')
          ),
          Z({}, $({}, 'Interaction Details:')),
          Y(
            {},
            X(
              {},
              'New groups are added when the ',
              J({}, 'Add Group'),
              ' button is selected'
            ),
            X(
              {},
              'The only mode combobox options inside of a group are ',
              J({}, 'All'),
              ' and ',
              J({}, 'Any')
            ),
            X(
              {},
              'Only one level of groups is desirable, so there is no ',
              J({}, 'Add Group'),
              ' button inside of a Group',
              ee(
                {},
                X(
                  {},
                  'All logical expressions can be written with one level of nesting, so this maintains the best readability'
                )
              )
            ),
            X({}, 'Deleting the only rule in a group removes the entire group'),
            X(
              {},
              'If a group is added but the first, default rule has not been altered, the first rule is replaced by the group'
            )
          ),
          Object(n.createElement)(
            c.a,
            { header: 'Label Note', type: 'note' },
            Object(n.createElement)(
              'p',
              null,
              'The values in the group mode combobox get "for This Group" appended, ex. "All Conditions are Met for This Group"'
            )
          ),
          Object(n.createElement)(
            r.a,
            { title: 'Expression Builder - With Expression Group' },
            Object(n.createElement)(
              s.a,
              null,
              Object(n.createElement)(
                L,
                { optionSelected: 'all', resourceIsSelected: !0 },
                Object(n.createElement)(
                  G,
                  {
                    legendText: 'AND',
                    assistiveText: 'Condition Group 1',
                    optionSelected: 'group',
                    isGroup: !0
                  },
                  Object(n.createElement)(M, {
                    conditionName: 'Condition 1',
                    isGroup: !0,
                    groupName: 'Condition Group 1',
                    resourceIsSelected: !0
                  }),
                  Object(n.createElement)(M, {
                    legendText: 'OR',
                    conditionName: 'Condition 2',
                    isGroup: !0,
                    groupName: 'Condition Group 1',
                    inputIsDisabled: !0
                  })
                )
              )
            )
          ),
          K({ id: 'Custom-Logic' }, 'Custom Logic'),
          Z(
            {},
            'Another option for creating more complex expressions is using the Custom Logic variant. This allows users to manually type their custom logic into an input field, which references the numbered conditions below, like ',
            J({}, '1 AND 2'),
            '.'
          ),
          Z({}, $({}, 'Interaction Details:')),
          ee(
            {},
            X(
              {},
              'After switching the mode to "Custom Logic", the default custom logic text input should match the previous user selection.',
              Y(
                {},
                X(
                  {},
                  'For example, if the user was previously using "match Any", the input would default to something like ',
                  J({}, '1 OR 2')
                ),
                X(
                  {},
                  'If the user had added a group previously, the input should reflect that group as well, something like ',
                  J({}, '1 AND (2 OR 3)')
                ),
                X(
                  {},
                  'Otherwise, the input defaults to "match All", such as ',
                  J({}, '1 AND 2')
                )
              )
            ),
            X(
              {},
              'New conditions are added to the end of the list, while ',
              J({}, 'AND n'),
              ' is added to the custom logic input text'
            ),
            X(
              {},
              'If a rule is removed, the custom logic should automatically rewrite to maintain intended logic'
            )
          ),
          Object(n.createElement)(
            r.a,
            { title: 'Expression Builder - Custom Logic' },
            Object(n.createElement)(
              s.a,
              null,
              Object(n.createElement)(
                L,
                {
                  hasCustomLogic: !0,
                  customLogicValue: '1 AND 2',
                  legendText: '1',
                  optionSelected: 'custom',
                  resourceIsSelected: !0
                },
                Object(n.createElement)(M, {
                  legendText: '2',
                  conditionName: 'Condition 2',
                  inputIsDisabled: !0
                })
              )
            )
          ),
          K({ id: 'Formula-Logic' }, 'Formula Logic'),
          Z(
            {},
            'The Formula variant provides the user the most customization for their expressions. Users can write free-form custom logic by using the insertion comboboxes and/or typing freely. By default, the formula variant does not appear with default text.'
          ),
          Z({}, 'Users can also validate the syntax to check for errors.'),
          Object(n.createElement)(
            r.a,
            { title: 'Expression Builder - Formula Logic' },
            Object(n.createElement)(
              s.a,
              null,
              Object(n.createElement)(k, { optionSelected: 'formula' })
            )
          ),
          K({ id: 'Narrow' }, 'Narrow'),
          Z(
            {},
            'Use the narrow variant for in-context expression building, where users are able to immediately preview the results of their conditional logic, like a list or report.'
          ),
          Object(n.createElement)(
            c.a,
            { type: 'a11y', header: 'Accessibility Requirement' },
            Object(n.createElement)(
              'p',
              null,
              'Be sure to use assistive text to improve the clarity of what the user might be editing. For example, add',
              ' ',
              Object(n.createElement)(
                'code',
                null,
                Object(n.createElement)(
                  'span',
                  { className: 'slds-assistive-text' },
                  'Edit filter:'
                )
              ),
              ' ',
              'to each expression button element.'
            )
          ),
          Object(n.createElement)(
            r.a,
            { title: 'Expression Builder - Narrow Variant' },
            Object(n.createElement)(
              s.a,
              null,
              Object(n.createElement)(V, { optionSelected: 'all' })
            )
          ),
          z({ id: 'With-an-Expression-Group-2' }, 'With an Expression Group'),
          Object(n.createElement)(
            r.a,
            { title: 'Expression Builder - Narrow Variant with Group' },
            Object(n.createElement)(
              s.a,
              null,
              Object(n.createElement)(
                V,
                { optionSelected: 'all' },
                Object(n.createElement)(
                  q.a,
                  { operator: 'AND', type: 'Status', removable: !0 },
                  'equals Red'
                ),
                Object(n.createElement)(
                  q.b,
                  null,
                  Object(n.createElement)(W, { optionSelected: 'any' })
                )
              )
            )
          ),
          z({ id: 'Filtering' }, 'Filtering'),
          Z(
            {},
            'One example of in-context expression building is filtering. To see examples of filtering logic inside of a panel, checkout our ',
            U({ href: '/components/panels/#Panels-for-Filtering' }, 'Panel'),
            ' documentation'
          ),
          Object(n.createElement)(
            r.a,
            { title: 'Expression Builder - Filtering' },
            Object(n.createElement)(
              s.a,
              { demoStyles: 'max-width: 320px;' },
              Object(n.createElement)(
                q.c,
                null,
                Object(n.createElement)(
                  'ol',
                  { className: 'slds-list_vertical slds-list_vertical-space' },
                  Object(n.createElement)(
                    q.a,
                    { type: 'Show Me' },
                    'All Products'
                  )
                ),
                Object(n.createElement)(
                  'h3',
                  { className: 'slds-text-body_small slds-m-vertical_x-small' },
                  'Matching all these filters'
                ),
                Object(n.createElement)(
                  'ol',
                  { className: 'slds-list_vertical slds-list_vertical-space' },
                  Object(n.createElement)(
                    q.a,
                    { type: 'Created Date', removable: !0 },
                    'equals THIS WEEK'
                  ),
                  Object(n.createElement)(
                    q.a,
                    { type: 'List Price', removable: !0 },
                    'greater than "500"'
                  )
                ),
                Object(n.createElement)(q.d, null)
              )
            )
          ),
          Q({ id: 'Adding-a-new-filter' }, 'Adding a new filter'),
          Object(n.createElement)(
            r.a,
            { title: 'Expression Builder - Filtering with new filter' },
            Object(n.createElement)(
              s.a,
              { demoStyles: 'max-width: 320px;' },
              Object(n.createElement)(
                q.c,
                null,
                Object(n.createElement)(
                  'ol',
                  { className: 'slds-list_vertical slds-list_vertical-space' },
                  Object(n.createElement)(
                    q.a,
                    { type: 'Show Me' },
                    'All Products'
                  )
                ),
                Object(n.createElement)(
                  'h3',
                  { className: 'slds-text-body_small slds-m-vertical_x-small' },
                  'Matching all these filters'
                ),
                Object(n.createElement)(
                  'ul',
                  { className: 'slds-list_vertical slds-list_vertical-space' },
                  Object(n.createElement)(
                    q.a,
                    { type: 'Created Date', removable: !0 },
                    'equals THIS WEEK'
                  ),
                  Object(n.createElement)(
                    q.a,
                    { type: 'List Price', removable: !0 },
                    'greater than "500"'
                  ),
                  Object(n.createElement)(
                    q.a,
                    { className: 'slds-is-new', removable: !0 },
                    'New Filter'
                  )
                ),
                Object(n.createElement)(q.d, null)
              )
            )
          ),
          Q({ id: 'With-an-error' }, 'With an error'),
          Object(n.createElement)(
            c.a,
            { type: 'a11y', header: 'Accessibility Requirement' },
            'When an error message is displayed to the user, the',
            ' ',
            Object(n.createElement)('code', null, '<div>'),
            ' containing the error message should have the ',
            Object(n.createElement)('code', null, 'role="alert"'),
            ' attribute applied. This will immediately notify the user that an error has occurred.'
          ),
          Object(n.createElement)(
            c.a,
            { type: 'a11y', header: 'Accessibility Requirement' },
            Object(n.createElement)(
              'p',
              null,
              'The filter button that has an error is associated to that error with the use of ',
              Object(n.createElement)('code', null, 'aria-describedby'),
              '. The value of',
              ' ',
              Object(n.createElement)('code', null, 'aria-describedby'),
              ' matches the ID given to the element that contains the corresponding error message.'
            )
          ),
          Object(n.createElement)(
            r.a,
            { title: 'Expression Builder - Filtering with error' },
            Object(n.createElement)(
              s.a,
              { demoStyles: 'max-width: 320px;' },
              Object(n.createElement)(
                q.c,
                null,
                Object(n.createElement)(
                  'div',
                  {
                    className: 'slds-text-color_error slds-m-bottom_x-small',
                    role: 'alert'
                  },
                  'Filters could not be applied. Please fix the validation errors below.'
                ),
                Object(n.createElement)(
                  'ol',
                  { className: 'slds-list_vertical slds-list_vertical-space' },
                  Object(n.createElement)(
                    q.a,
                    { type: 'Show Me' },
                    'All Products'
                  )
                ),
                Object(n.createElement)(
                  'h3',
                  { className: 'slds-text-body_small slds-m-vertical_x-small' },
                  'Matching all these filters'
                ),
                Object(n.createElement)(
                  'ol',
                  { className: 'slds-list_vertical slds-list_vertical-space' },
                  Object(n.createElement)(
                    q.a,
                    { type: 'Created Date', removable: !0 },
                    'equals THIS WEEK'
                  ),
                  Object(n.createElement)(
                    q.a,
                    { type: 'List Price', removable: !0 },
                    'greater than "500"'
                  ),
                  Object(n.createElement)(
                    q.a,
                    {
                      className: 'slds-has-error',
                      type: 'Stage',
                      errorMessage: 'Error Message',
                      removable: !0
                    },
                    'equals "Red"'
                  )
                ),
                Object(n.createElement)(q.d, null)
              )
            )
          ),
          Q({ id: 'With-locked-filters' }, 'With locked filters'),
          Object(n.createElement)(
            r.a,
            { title: 'Expression Builder - Filtering with locked filters' },
            Object(n.createElement)(
              s.a,
              { demoStyles: 'max-width: 320px;' },
              Object(n.createElement)(
                q.c,
                null,
                Object(n.createElement)(
                  'ol',
                  { className: 'slds-list_vertical slds-list_vertical-space' },
                  Object(n.createElement)(
                    q.a,
                    { type: 'Show Me' },
                    'All Products'
                  )
                ),
                Object(n.createElement)(
                  'h3',
                  { className: 'slds-text-body_small slds-m-vertical_x-small' },
                  'Matching all these filters'
                ),
                Object(n.createElement)(
                  'ol',
                  { className: 'slds-list_vertical slds-list_vertical-space' },
                  Object(n.createElement)(
                    q.a,
                    { type: 'Created Date', removable: !0 },
                    'equals THIS WEEK'
                  ),
                  Object(n.createElement)(
                    q.a,
                    { type: 'List Price', removable: !0 },
                    'greater than "500"'
                  )
                ),
                Object(n.createElement)(
                  'h3',
                  {
                    className:
                      'slds-text-body_small slds-m-vertical_x-small slds-grid'
                  },
                  'Locked Filters',
                  Object(n.createElement)(p.a, {
                    className:
                      'slds-icon slds-icon_x-small slds-icon-text-default slds-m-left_x-small',
                    sprite: 'utility',
                    symbol: 'lock'
                  })
                ),
                Object(n.createElement)(
                  'ol',
                  { className: 'slds-list_vertical slds-list_vertical-space' },
                  Object(n.createElement)(
                    q.a,
                    { className: 'slds-is-locked', type: 'Name', disabled: !0 },
                    'equals "ACME"'
                  )
                ),
                Object(n.createElement)(q.d, null)
              )
            )
          )
        );
      },
      le = function() {
        return Object(a.a)(te());
      };
  }
});
