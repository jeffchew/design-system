var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/list-builder/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var l, c, d = t[0], r = t[1], i = t[2], m = 0, u = [];
      m < d.length;
      m++
    )
      (c = d[m]),
        Object.prototype.hasOwnProperty.call(s, c) && s[c] && u.push(s[c][0]),
        (s[c] = 0);
    for (l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l]);
    for (o && o(t); u.length; ) u.shift()();
    return n.push.apply(n, i || []), a();
  }
  function a() {
    for (var e, t = 0; t < n.length; t++) {
      for (var a = n[t], l = !0, d = 1; d < a.length; d++) {
        var r = a[d];
        0 !== s[r] && (l = !1);
      }
      l && (n.splice(t--, 1), (e = c((c.s = a[0]))));
    }
    return e;
  }
  var l = {},
    s = { 45: 0 },
    n = [];
  function c(t) {
    if (l[t]) return l[t].exports;
    var a = (l[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, c), (a.l = !0), a.exports;
  }
  (c.m = e),
    (c.c = l),
    (c.d = function(e, t, a) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
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
      var a = Object.create(null);
      if (
        (c.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var l in e)
          c.d(
            a,
            l,
            function(t) {
              return e[t];
            }.bind(null, l)
          );
      return a;
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
  var d = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    r = d.push.bind(d);
  (d.push = t), (d = d.slice());
  for (var i = 0; i < d.length; i++) t(d[i]);
  var o = r;
  return n.push([238, 0]), a();
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
  238: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'getElement', function() {
        return j;
      }),
      a.d(t, 'getContents', function() {
        return T;
      });
    var l = a(0),
      s = a.n(l),
      n = a(4),
      c = a(1),
      d = a(2),
      r = (a(15), a(3)),
      i = a.n(r),
      o = a(22),
      m = a(60),
      u = a(21),
      p = a(6),
      b = a(29),
      E = ['Name', 'Product Code', 'List Price', 'Product Family'],
      h = ['Product Name'],
      y = [
        {
          name: 'Analytics',
          productCode: 'ANTLY',
          listPrice: '5000.00',
          productFamily: 'Analytics Product'
        },
        {
          name: 'Analytics',
          productCode: 'ANTLY',
          listPrice: '5000.00',
          productFamily: 'Analytics Product'
        },
        {
          name: 'Analytics',
          productCode: 'ANTLY',
          listPrice: '5000.00',
          productFamily: 'Analytics Product'
        },
        {
          name: 'Analytics',
          productCode: 'ANTLY',
          listPrice: '5000.00',
          productFamily: 'Analytics Product'
        },
        {
          name: 'Analytics',
          productCode: 'ANTLY',
          listPrice: '5000.00',
          productFamily: 'Analytics Product'
        },
        {
          name: 'Analytics',
          productCode: 'ANTLY',
          listPrice: '5000.00',
          productFamily: 'Analytics Product'
        },
        {
          name: 'Analytics',
          productCode: 'ANTLY',
          listPrice: '5000.00',
          productFamily: 'Analytics Product'
        },
        {
          name: 'Analytics',
          productCode: 'ANTLY',
          listPrice: '5000.00',
          productFamily: 'Analytics Product'
        }
      ],
      f = function(e) {
        return s.a.createElement(
          u.c,
          {
            listboxClassName: 'slds-dropdown slds-dropdown_fluid',
            vertical: !0
          },
          s.a.createElement(
            u.d,
            null,
            s.a.createElement(u.b, {
              id: 'listbox-option-unique-id-01',
              entityTitle: 'Acme',
              entityMeta: !0,
              focused: e.focused
            })
          ),
          s.a.createElement(
            u.d,
            null,
            s.a.createElement(u.b, {
              id: 'listbox-option-unique-id-02',
              entityTitle: 'Salesforce.com, Inc.',
              entityMeta: !0
            })
          )
        );
      },
      N = function(e) {
        return s.a.createElement(
          'div',
          {
            className:
              'slds-p-vertical_x-small slds-p-horizontal_large slds-shrink-none slds-theme_shade'
          },
          s.a.createElement(u.a, {
            autocomplete: !0,
            hideLabel: !0,
            inputIcon: 'right',
            inputIconRightSymbol: 'search',
            listbox: s.a.createElement(f, null)
          }),
          e.selectedFilters ? e.selectedFilters : null,
          s.a.createElement(
            'div',
            {
              className: 'slds-text-title slds-m-top_x-small',
              'aria-live': 'polite'
            },
            e.itemsSelected || '0',
            ' Item(s) Selected'
          )
        );
      },
      _ = function(e) {
        return s.a.createElement(
          'div',
          { className: 'slds-scrollable slds-grow' },
          s.a.createElement(
            'div',
            { className: 'slds-scrollable_none' },
            s.a.createElement(
              p.r,
              {
                hasNoRowHover: !0,
                isBordered: !0,
                isFixedLayout: !0,
                isResizable: !0,
                selectionType: 'multiple',
                type: 'advanced'
              },
              s.a.createElement(
                p.p,
                null,
                s.a.createElement(
                  p.q,
                  null,
                  s.a.createElement(p.c, { style: { width: '3.75rem' } }),
                  E.map(function(e, t) {
                    return s.a.createElement(
                      p.c,
                      {
                        'aria-label': e,
                        isSortable: !0,
                        isResizable: !0,
                        key: t
                      },
                      s.a.createElement(p.h, { columnName: e })
                    );
                  })
                )
              ),
              s.a.createElement(p.n, null, e.children)
            )
          )
        );
      },
      v = function(e) {
        return s.a.createElement(
          'div',
          { className: 'slds-scrollable slds-grow' },
          s.a.createElement(
            'div',
            { className: 'slds-scrollable_none' },
            s.a.createElement(
              p.r,
              {
                hasHiddenHeader: !0,
                hasNoRowHover: !0,
                isBordered: !0,
                selectionType: 'multiple',
                type: 'advanced'
              },
              s.a.createElement(
                p.p,
                { isHidden: e.hasHiddenHeader },
                s.a.createElement(
                  p.q,
                  null,
                  s.a.createElement(p.c, { style: { width: '3.75rem' } }),
                  e.hasHiddenHeader
                    ? s.a.createElement(
                        p.c,
                        { 'aria-label': h[0] },
                        s.a.createElement(p.b, { columnName: h[0] })
                      )
                    : s.a.createElement(
                        p.c,
                        { 'aria-label': h[0] },
                        s.a.createElement(p.h, { columnName: h[0] })
                      )
                )
              ),
              s.a.createElement(p.n, null, e.children)
            )
          )
        );
      };
    v.propTypes = { hasHiddenHeader: i.a.bool, children: i.a.node };
    var x = function(e) {
        var t = 'Select item ' + e.index;
        return s.a.createElement(
          p.o,
          { isSelected: e.checked },
          s.a.createElement(
            p.s,
            {
              isRightAligned: !0,
              tabIndex: 1 === e.index ? '0' : null,
              type: 'advanced'
            },
            s.a.createElement(m.b, {
              label: t,
              isChecked: e.checked,
              isDisabled: e.disabled,
              tabIndex: -1
            })
          ),
          s.a.createElement(
            p.l,
            null,
            s.a.createElement(p.i, { cellText: e.name })
          ),
          s.a.createElement(
            p.s,
            { type: 'advanced' },
            s.a.createElement(p.i, { cellText: e.productCode })
          ),
          s.a.createElement(
            p.s,
            { type: 'advanced' },
            s.a.createElement(p.i, { cellText: e.listPrice })
          ),
          s.a.createElement(
            p.s,
            { type: 'advanced' },
            s.a.createElement(p.i, { cellText: e.productFamily })
          )
        );
      },
      g = function(e) {
        var t = 'Select item ' + e.index;
        return s.a.createElement(
          p.o,
          { isSelected: e.checked },
          s.a.createElement(
            p.s,
            {
              isRightAligned: !0,
              tabIndex: 1 === e.index ? '0' : '-1',
              type: 'advanced',
              style: { width: '3.75rem' }
            },
            s.a.createElement(m.b, {
              label: t,
              isChecked: e.checked,
              isDisabled: e.disabled,
              tabIndex: -1
            })
          ),
          s.a.createElement(
            p.s,
            { type: 'advanced' },
            s.a.createElement(p.i, { cellText: e.name })
          )
        );
      };
    g.propTypes = {
      className: i.a.string,
      index: i.a.number,
      checked: i.a.bool,
      disabled: i.a.bool,
      name: i.a.string
    };
    var P = function(e) {
        return s.a.createElement(
          b.e,
          { className: 'slds-pill_container_bare' },
          s.a.createElement(
            b.b,
            null,
            s.a.createElement(
              b.c,
              null,
              s.a.createElement(b.a, { label: 'Analytics', tabIndex: '0' })
            )
          )
        );
      },
      S = function(e) {
        return s.a.createElement(
          b.e,
          { className: 'slds-pill_container_bare' },
          s.a.createElement(
            b.b,
            null,
            s.a.createElement(
              b.c,
              null,
              s.a.createElement(b.a, { label: 'Option A', tabIndex: '0' })
            ),
            s.a.createElement(
              b.c,
              null,
              s.a.createElement(b.a, { label: 'Option B' })
            )
          )
        );
      },
      k = s.a.createElement(
        'div',
        {
          className: 'demo-only demo-only_viewport',
          style: { height: '640px' }
        },
        s.a.createElement(
          o.b,
          {
            className: 'slds-modal_large slds-list-builder',
            'aria-labelledby': 'id-of-modalheader-h2'
          },
          s.a.createElement(
            o.e,
            null,
            s.a.createElement(
              'h2',
              {
                id: 'id-of-modalheader-h2',
                className: 'slds-text-heading_medium'
              },
              'Add Products'
            ),
            s.a.createElement(
              'p',
              { className: 'slds-m-top_x-small' },
              'Pricebook: Salesforce Products'
            )
          ),
          s.a.createElement(
            o.c,
            { className: 'slds-grid slds-grow' },
            s.a.createElement(
              'div',
              { className: 'slds-grid slds-grid_vertical' },
              s.a.createElement(N, null),
              s.a.createElement(
                _,
                null,
                y.map(function(e, t) {
                  return s.a.createElement(x, {
                    checked: !1,
                    key: t,
                    index: t + 1,
                    name: e.name,
                    productCode: e.productCode,
                    listPrice: e.listPrice,
                    productFamily: e.productFamily
                  });
                })
              )
            )
          ),
          s.a.createElement(
            o.d,
            null,
            s.a.createElement(
              'button',
              { className: 'slds-button slds-button_neutral' },
              'Cancel'
            ),
            s.a.createElement(
              'button',
              { className: 'slds-button slds-button_brand' },
              'Next'
            )
          )
        ),
        s.a.createElement('div', {
          className: 'slds-backdrop slds-backdrop_open'
        })
      ),
      w = [
        {
          id: 'items-selected',
          label: 'Items Selected',
          element: s.a.createElement(
            'div',
            {
              className: 'demo-only demo-only_viewport',
              style: { height: '640px' }
            },
            s.a.createElement(
              o.b,
              {
                className: 'slds-modal_large',
                'aria-labelledby': 'id-of-modalheader-h2'
              },
              s.a.createElement(
                o.e,
                null,
                s.a.createElement(
                  'h2',
                  {
                    id: 'id-of-modalheader-h2',
                    className: 'slds-text-heading_medium'
                  },
                  'Add Products'
                ),
                s.a.createElement(
                  'p',
                  { className: 'slds-m-top_x-small' },
                  'Pricebook: Salesforce Products'
                )
              ),
              s.a.createElement(
                o.c,
                { className: 'slds-grid slds-nowrap' },
                s.a.createElement(
                  'div',
                  {
                    className:
                      'slds-col slds-grid slds-grid_vertical slds-nowrap'
                  },
                  s.a.createElement(N, {
                    selectedFilters: s.a.createElement(P, null),
                    itemsSelected: '1'
                  }),
                  s.a.createElement(
                    _,
                    null,
                    y.map(function(e, t) {
                      return s.a.createElement(x, {
                        key: t,
                        index: t + 1,
                        checked: 0 === t,
                        name: e.name,
                        productCode: e.productCode,
                        listPrice: e.listPrice,
                        productFamily: e.productFamily
                      });
                    })
                  )
                )
              ),
              s.a.createElement(
                o.d,
                null,
                s.a.createElement(
                  'button',
                  { className: 'slds-button slds-button_neutral' },
                  'Cancel'
                ),
                s.a.createElement(
                  'button',
                  { className: 'slds-button slds-button_brand' },
                  'Next'
                )
              )
            ),
            s.a.createElement('div', {
              className: 'slds-backdrop slds-backdrop_open'
            })
          )
        },
        {
          id: 'items-disabled',
          label: 'Items Disabled',
          element: s.a.createElement(
            'div',
            {
              className: 'demo-only demo-only_viewport',
              style: { height: '640px' }
            },
            s.a.createElement(
              o.b,
              {
                className: 'slds-modal_large',
                'aria-labelledby': 'id-of-modalheader-h2'
              },
              s.a.createElement(
                o.e,
                null,
                s.a.createElement(
                  'h2',
                  {
                    id: 'id-of-modalheader-h2',
                    className: 'slds-text-heading_medium'
                  },
                  'Add Products'
                ),
                s.a.createElement(
                  'p',
                  { className: 'slds-m-top_x-small' },
                  'Pricebook: Salesforce Products'
                )
              ),
              s.a.createElement(
                o.c,
                { className: 'slds-grid slds-nowrap' },
                s.a.createElement(
                  'div',
                  {
                    className:
                      'slds-col slds-grid slds-grid_vertical slds-nowrap'
                  },
                  s.a.createElement(N, { itemsSelected: '0' }),
                  s.a.createElement(
                    _,
                    null,
                    y.map(function(e, t) {
                      return s.a.createElement(x, {
                        checked: !1,
                        key: t,
                        index: t + 1,
                        disabled: t % 2 == 0 || null,
                        name: e.name,
                        productCode: e.productCode,
                        listPrice: e.listPrice,
                        productFamily: e.productFamily
                      });
                    })
                  )
                )
              ),
              s.a.createElement(
                o.d,
                null,
                s.a.createElement(
                  'button',
                  { className: 'slds-button slds-button_neutral' },
                  'Cancel'
                ),
                s.a.createElement(
                  'button',
                  { className: 'slds-button slds-button_brand' },
                  'Next'
                )
              )
            ),
            s.a.createElement('div', {
              className: 'slds-backdrop slds-backdrop_open'
            })
          )
        },
        {
          id: 'items-default-selected',
          label: 'Items Default Selected',
          element: s.a.createElement(
            'div',
            {
              className: 'demo-only demo-only_viewport',
              style: { height: '640px' }
            },
            s.a.createElement(
              o.b,
              {
                className: 'slds-modal_large',
                'aria-labelledby': 'id-of-modalheader-h2'
              },
              s.a.createElement(
                o.e,
                null,
                s.a.createElement(
                  'h2',
                  {
                    id: 'id-of-modalheader-h2',
                    className: 'slds-text-heading_medium'
                  },
                  'Add Products'
                ),
                s.a.createElement(
                  'p',
                  { className: 'slds-m-top_x-small' },
                  'Pricebook: Salesforce Products'
                )
              ),
              s.a.createElement(
                o.c,
                { className: 'slds-grid slds-nowrap' },
                s.a.createElement(
                  'div',
                  {
                    className:
                      'slds-col slds-grid slds-grid_vertical slds-nowrap'
                  },
                  s.a.createElement(N, { itemsSelected: '0' }),
                  s.a.createElement(
                    _,
                    null,
                    y.map(function(e, t) {
                      return s.a.createElement(x, {
                        key: t,
                        index: t + 1,
                        checked: t % 2 == 1,
                        disabled: t % 2 == 1 || null,
                        name: e.name,
                        productCode: e.productCode,
                        listPrice: e.listPrice,
                        productFamily: e.productFamily
                      });
                    })
                  )
                )
              ),
              s.a.createElement(
                o.d,
                null,
                s.a.createElement(
                  'button',
                  { className: 'slds-button slds-button_neutral' },
                  'Cancel'
                ),
                s.a.createElement(
                  'button',
                  { className: 'slds-button slds-button_brand' },
                  'Next'
                )
              )
            ),
            s.a.createElement('div', {
              className: 'slds-backdrop slds-backdrop_open'
            })
          )
        }
      ],
      A = [
        {
          id: 'two-column-with-hidden-header',
          label: 'Two Column with Hidden Header',
          element: s.a.createElement(
            'div',
            {
              className: 'demo-only demo-only_viewport',
              style: { height: '640px' }
            },
            s.a.createElement(
              o.b,
              {
                className: 'slds-modal_large',
                'aria-labelledby': 'id-of-modalheader-h2'
              },
              s.a.createElement(
                o.e,
                null,
                s.a.createElement(
                  'h2',
                  {
                    id: 'id-of-modalheader-h2',
                    className: 'slds-text-heading_medium'
                  },
                  'Add Products'
                ),
                s.a.createElement(
                  'p',
                  { className: 'slds-m-top_x-small' },
                  'Pricebook: Salesforce Products'
                )
              ),
              s.a.createElement(
                o.c,
                { className: 'slds-grid slds-nowrap' },
                s.a.createElement(
                  'div',
                  {
                    className:
                      'slds-col slds-grid slds-grid_vertical slds-nowrap'
                  },
                  s.a.createElement(N, { itemsSelected: '0' }),
                  s.a.createElement(
                    v,
                    { hasHiddenHeader: !0 },
                    y.map(function(e, t) {
                      return s.a.createElement(g, {
                        checked: !1,
                        key: t,
                        index: t + 1,
                        name: e.name
                      });
                    })
                  )
                )
              ),
              s.a.createElement(
                o.d,
                null,
                s.a.createElement(
                  'button',
                  { className: 'slds-button slds-button_neutral' },
                  'Cancel'
                ),
                s.a.createElement(
                  'button',
                  { className: 'slds-button slds-button_brand' },
                  'Next'
                )
              )
            ),
            s.a.createElement('div', {
              className: 'slds-backdrop slds-backdrop_open'
            })
          )
        },
        {
          id: 'filtered',
          label: 'Filtered Results',
          element: s.a.createElement(
            'div',
            {
              className: 'demo-only demo-only_viewport',
              style: { height: '640px' }
            },
            s.a.createElement(
              o.b,
              {
                className: 'slds-modal_large',
                'aria-labelledby': 'id-of-modalheader-h2'
              },
              s.a.createElement(
                o.e,
                null,
                s.a.createElement(
                  'h2',
                  {
                    id: 'id-of-modalheader-h2',
                    className: 'slds-text-heading_medium'
                  },
                  'Add Products'
                ),
                s.a.createElement(
                  'p',
                  { className: 'slds-m-top_x-small' },
                  'Pricebook: Salesforce Products'
                )
              ),
              s.a.createElement(
                o.c,
                { className: 'slds-grid slds-grow' },
                s.a.createElement(
                  'div',
                  { className: 'slds-grid slds-grid_vertical' },
                  s.a.createElement(N, {
                    selectedFilters: s.a.createElement(S, null),
                    itemsSelected: '2'
                  }),
                  s.a.createElement(
                    _,
                    null,
                    s.a.createElement(x, {
                      checked: !1,
                      index: 1,
                      name: y[0].name,
                      productCode: y[0].productCode,
                      listPrice: y[0].listPrice,
                      productFamily: y[0].productFamily
                    })
                  )
                )
              ),
              s.a.createElement(
                o.d,
                null,
                s.a.createElement(
                  'button',
                  { className: 'slds-button slds-button_neutral' },
                  'Cancel'
                ),
                s.a.createElement(
                  'button',
                  { className: 'slds-button slds-button_brand' },
                  'Next'
                )
              )
            ),
            s.a.createElement('div', {
              className: 'slds-backdrop slds-backdrop_open'
            })
          )
        }
      ],
      C = n.c.h2,
      O = n.c.h3,
      F = n.c.p,
      j = function() {
        return Object(l.createElement)(
          n.b,
          {},
          Object(l.createElement)(
            'div',
            { className: 'doc lead' },
            'The List Builder is a quick, visual and efficient ‘shopping cart’ approach to adding multiple items to a parent object.'
          ),
          Object(l.createElement)(c.a, { exampleOnly: !0 }, k),
          C({ id: 'About-List-Builder' }, 'About List Builder'),
          F(
            {},
            'The List builder relies heavily on utility classes to piece together the layout so please pay close attention to the markup and classes.'
          ),
          C({ id: 'Base' }, 'Base'),
          Object(l.createElement)(c.a, null, k),
          C({ id: 'States' }, 'States'),
          O({ id: 'Items-Selected' }, 'Items Selected'),
          Object(l.createElement)(c.a, null, Object(d.e)(w, 'items-selected')),
          O({ id: 'Items-Disabled' }, 'Items Disabled'),
          Object(l.createElement)(c.a, null, Object(d.e)(w, 'items-disabled')),
          O({ id: 'Items-Default-Selected' }, 'Items Default Selected'),
          Object(l.createElement)(
            c.a,
            null,
            Object(d.e)(w, 'items-default-selected')
          ),
          C({ id: 'Examples' }, 'Examples'),
          O(
            { id: 'Two-Column-with-Hidden-Header' },
            'Two Column with Hidden Header'
          ),
          Object(l.createElement)(c.a, null, Object(d.e)(A, 'filtered')),
          O({ id: 'Filtered-Results' }, 'Filtered Results'),
          Object(l.createElement)(
            c.a,
            null,
            Object(d.e)(A, 'two-column-with-hidden-header')
          )
        );
      },
      T = function() {
        return Object(n.a)(j());
      };
  }
});
