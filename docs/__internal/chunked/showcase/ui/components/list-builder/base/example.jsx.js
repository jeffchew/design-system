var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/list-builder/base/example.jsx.js'
] = (function(e) {
  function a(a) {
    for (
      var l, d, r = a[0], c = a[1], o = a[2], m = 0, u = [];
      m < r.length;
      m++
    )
      (d = r[m]),
        Object.prototype.hasOwnProperty.call(s, d) && s[d] && u.push(s[d][0]),
        (s[d] = 0);
    for (l in c) Object.prototype.hasOwnProperty.call(c, l) && (e[l] = c[l]);
    for (i && i(a); u.length; ) u.shift()();
    return n.push.apply(n, o || []), t();
  }
  function t() {
    for (var e, a = 0; a < n.length; a++) {
      for (var t = n[a], l = !0, r = 1; r < t.length; r++) {
        var c = t[r];
        0 !== s[c] && (l = !1);
      }
      l && (n.splice(a--, 1), (e = d((d.s = t[0]))));
    }
    return e;
  }
  var l = {},
    s = {
      100: 0,
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
  function d(a) {
    if (l[a]) return l[a].exports;
    var t = (l[a] = { i: a, l: !1, exports: {} });
    return e[a].call(t.exports, t, t.exports, d), (t.l = !0), t.exports;
  }
  (d.m = e),
    (d.c = l),
    (d.d = function(e, a, t) {
      d.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: t });
    }),
    (d.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (d.t = function(e, a) {
      if ((1 & a && (e = d(e)), 8 & a)) return e;
      if (4 & a && 'object' == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (d.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
        2 & a && 'string' != typeof e)
      )
        for (var l in e)
          d.d(
            t,
            l,
            function(a) {
              return e[a];
            }.bind(null, l)
          );
      return t;
    }),
    (d.n = function(e) {
      var a =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return d.d(a, 'a', a), a;
    }),
    (d.o = function(e, a) {
      return Object.prototype.hasOwnProperty.call(e, a);
    }),
    (d.p = '/assets/scripts/bundle/');
  var r = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    c = r.push.bind(r);
  (r.push = a), (r = r.slice());
  for (var o = 0; o < r.length; o++) a(r[o]);
  var i = c;
  return n.push([180, 0]), t();
})({
  0: function(e, a) {
    e.exports = React;
  },
  16: function(e, a) {
    e.exports = ReactDOM;
  },
  180: function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'states', function() {
        return g;
      }),
      t.d(a, 'examples', function() {
        return P;
      });
    var l = t(0),
      s = t.n(l),
      n = t(1),
      d = t.n(n),
      r = t(21),
      c = t(46),
      o = t(12),
      i = t(3),
      m = t(18),
      u = ['Name', 'Product Code', 'List Price', 'Product Family'],
      p = ['Product Name'],
      b = [
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
      E = function(e) {
        return s.a.createElement(
          o.c,
          {
            listboxClassName: 'slds-dropdown slds-dropdown_fluid',
            vertical: !0
          },
          s.a.createElement(
            o.d,
            null,
            s.a.createElement(o.b, {
              id: 'listbox-option-unique-id-01',
              entityTitle: 'Acme',
              entityMeta: !0,
              focused: e.focused
            })
          ),
          s.a.createElement(
            o.d,
            null,
            s.a.createElement(o.b, {
              id: 'listbox-option-unique-id-02',
              entityTitle: 'Salesforce.com, Inc.',
              entityMeta: !0
            })
          )
        );
      },
      h = function(e) {
        return s.a.createElement(
          'div',
          {
            className:
              'slds-p-vertical_x-small slds-p-horizontal_large slds-shrink-none slds-theme_shade'
          },
          s.a.createElement(o.a, {
            autocomplete: !0,
            hideLabel: !0,
            inputIcon: 'right',
            inputIconRightSymbol: 'search',
            listbox: s.a.createElement(E, null)
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
      y = function(e) {
        return s.a.createElement(
          'div',
          { className: 'slds-scrollable slds-grow' },
          s.a.createElement(
            'div',
            { className: 'slds-scrollable_none' },
            s.a.createElement(
              i.r,
              {
                hasNoRowHover: !0,
                isBordered: !0,
                isFixedLayout: !0,
                isResizable: !0,
                selectionType: 'multiple',
                type: 'advanced'
              },
              s.a.createElement(
                i.p,
                null,
                s.a.createElement(
                  i.q,
                  null,
                  s.a.createElement(i.c, { style: { width: '3.75rem' } }),
                  u.map(function(e, a) {
                    return s.a.createElement(
                      i.c,
                      {
                        'aria-label': e,
                        isSortable: !0,
                        isResizable: !0,
                        key: a
                      },
                      s.a.createElement(i.h, { columnName: e })
                    );
                  })
                )
              ),
              s.a.createElement(i.n, null, e.children)
            )
          )
        );
      },
      N = function(e) {
        return s.a.createElement(
          'div',
          { className: 'slds-scrollable slds-grow' },
          s.a.createElement(
            'div',
            { className: 'slds-scrollable_none' },
            s.a.createElement(
              i.r,
              {
                hasHiddenHeader: !0,
                hasNoRowHover: !0,
                isBordered: !0,
                selectionType: 'multiple',
                type: 'advanced'
              },
              s.a.createElement(
                i.p,
                { isHidden: e.hasHiddenHeader },
                s.a.createElement(
                  i.q,
                  null,
                  s.a.createElement(i.c, { style: { width: '3.75rem' } }),
                  e.hasHiddenHeader
                    ? s.a.createElement(
                        i.c,
                        { 'aria-label': p[0] },
                        s.a.createElement(i.b, { columnName: p[0] })
                      )
                    : s.a.createElement(
                        i.c,
                        { 'aria-label': p[0] },
                        s.a.createElement(i.h, { columnName: p[0] })
                      )
                )
              ),
              s.a.createElement(i.n, null, e.children)
            )
          )
        );
      };
    N.propTypes = { hasHiddenHeader: d.a.bool, children: d.a.node };
    var f = function(e) {
        var a = 'Select item ' + e.index;
        return s.a.createElement(
          i.o,
          { isSelected: e.checked },
          s.a.createElement(
            i.s,
            {
              isRightAligned: !0,
              tabIndex: 1 === e.index ? '0' : null,
              type: 'advanced'
            },
            s.a.createElement(c.b, {
              label: a,
              isChecked: e.checked,
              isDisabled: e.disabled,
              tabIndex: -1
            })
          ),
          s.a.createElement(
            i.l,
            null,
            s.a.createElement(i.i, { cellText: e.name })
          ),
          s.a.createElement(
            i.s,
            { type: 'advanced' },
            s.a.createElement(i.i, { cellText: e.productCode })
          ),
          s.a.createElement(
            i.s,
            { type: 'advanced' },
            s.a.createElement(i.i, { cellText: e.listPrice })
          ),
          s.a.createElement(
            i.s,
            { type: 'advanced' },
            s.a.createElement(i.i, { cellText: e.productFamily })
          )
        );
      },
      _ = function(e) {
        var a = 'Select item ' + e.index;
        return s.a.createElement(
          i.o,
          { isSelected: e.checked },
          s.a.createElement(
            i.s,
            {
              isRightAligned: !0,
              tabIndex: 1 === e.index ? '0' : '-1',
              type: 'advanced',
              style: { width: '3.75rem' }
            },
            s.a.createElement(c.b, {
              label: a,
              isChecked: e.checked,
              isDisabled: e.disabled,
              tabIndex: -1
            })
          ),
          s.a.createElement(
            i.s,
            { type: 'advanced' },
            s.a.createElement(i.i, { cellText: e.name })
          )
        );
      };
    _.propTypes = {
      className: d.a.string,
      index: d.a.number,
      checked: d.a.bool,
      disabled: d.a.bool,
      name: d.a.string
    };
    var v = function(e) {
        return s.a.createElement(
          m.e,
          { className: 'slds-pill_container_bare' },
          s.a.createElement(
            m.b,
            null,
            s.a.createElement(
              m.c,
              null,
              s.a.createElement(m.a, { label: 'Analytics', tabIndex: '0' })
            )
          )
        );
      },
      x = function(e) {
        return s.a.createElement(
          m.e,
          { className: 'slds-pill_container_bare' },
          s.a.createElement(
            m.b,
            null,
            s.a.createElement(
              m.c,
              null,
              s.a.createElement(m.a, { label: 'Option A', tabIndex: '0' })
            ),
            s.a.createElement(
              m.c,
              null,
              s.a.createElement(m.a, { label: 'Option B' })
            )
          )
        );
      };
    a.default = s.a.createElement(
      'div',
      { className: 'demo-only demo-only_viewport', style: { height: '640px' } },
      s.a.createElement(
        r.Modal,
        {
          className: 'slds-modal_large slds-list-builder',
          'aria-labelledby': 'id-of-modalheader-h2'
        },
        s.a.createElement(
          r.ModalHeader,
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
          r.ModalContent,
          { className: 'slds-grid slds-grow' },
          s.a.createElement(
            'div',
            { className: 'slds-grid slds-grid_vertical' },
            s.a.createElement(h, null),
            s.a.createElement(
              y,
              null,
              b.map(function(e, a) {
                return s.a.createElement(f, {
                  checked: !1,
                  key: a,
                  index: a + 1,
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
          r.ModalFooter,
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
    );
    var g = [
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
              r.Modal,
              {
                className: 'slds-modal_large',
                'aria-labelledby': 'id-of-modalheader-h2'
              },
              s.a.createElement(
                r.ModalHeader,
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
                r.ModalContent,
                { className: 'slds-grid slds-nowrap' },
                s.a.createElement(
                  'div',
                  {
                    className:
                      'slds-col slds-grid slds-grid_vertical slds-nowrap'
                  },
                  s.a.createElement(h, {
                    selectedFilters: s.a.createElement(v, null),
                    itemsSelected: '1'
                  }),
                  s.a.createElement(
                    y,
                    null,
                    b.map(function(e, a) {
                      return s.a.createElement(f, {
                        key: a,
                        index: a + 1,
                        checked: 0 === a,
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
                r.ModalFooter,
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
              r.Modal,
              {
                className: 'slds-modal_large',
                'aria-labelledby': 'id-of-modalheader-h2'
              },
              s.a.createElement(
                r.ModalHeader,
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
                r.ModalContent,
                { className: 'slds-grid slds-nowrap' },
                s.a.createElement(
                  'div',
                  {
                    className:
                      'slds-col slds-grid slds-grid_vertical slds-nowrap'
                  },
                  s.a.createElement(h, { itemsSelected: '0' }),
                  s.a.createElement(
                    y,
                    null,
                    b.map(function(e, a) {
                      return s.a.createElement(f, {
                        checked: !1,
                        key: a,
                        index: a + 1,
                        disabled: a % 2 == 0 || null,
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
                r.ModalFooter,
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
              r.Modal,
              {
                className: 'slds-modal_large',
                'aria-labelledby': 'id-of-modalheader-h2'
              },
              s.a.createElement(
                r.ModalHeader,
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
                r.ModalContent,
                { className: 'slds-grid slds-nowrap' },
                s.a.createElement(
                  'div',
                  {
                    className:
                      'slds-col slds-grid slds-grid_vertical slds-nowrap'
                  },
                  s.a.createElement(h, { itemsSelected: '0' }),
                  s.a.createElement(
                    y,
                    null,
                    b.map(function(e, a) {
                      return s.a.createElement(f, {
                        key: a,
                        index: a + 1,
                        checked: a % 2 == 1,
                        disabled: a % 2 == 1 || null,
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
                r.ModalFooter,
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
      P = [
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
              r.Modal,
              {
                className: 'slds-modal_large',
                'aria-labelledby': 'id-of-modalheader-h2'
              },
              s.a.createElement(
                r.ModalHeader,
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
                r.ModalContent,
                { className: 'slds-grid slds-nowrap' },
                s.a.createElement(
                  'div',
                  {
                    className:
                      'slds-col slds-grid slds-grid_vertical slds-nowrap'
                  },
                  s.a.createElement(h, { itemsSelected: '0' }),
                  s.a.createElement(
                    N,
                    { hasHiddenHeader: !0 },
                    b.map(function(e, a) {
                      return s.a.createElement(_, {
                        checked: !1,
                        key: a,
                        index: a + 1,
                        name: e.name
                      });
                    })
                  )
                )
              ),
              s.a.createElement(
                r.ModalFooter,
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
              r.Modal,
              {
                className: 'slds-modal_large',
                'aria-labelledby': 'id-of-modalheader-h2'
              },
              s.a.createElement(
                r.ModalHeader,
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
                r.ModalContent,
                { className: 'slds-grid slds-grow' },
                s.a.createElement(
                  'div',
                  { className: 'slds-grid slds-grid_vertical' },
                  s.a.createElement(h, {
                    selectedFilters: s.a.createElement(x, null),
                    itemsSelected: '2'
                  }),
                  s.a.createElement(
                    y,
                    null,
                    s.a.createElement(f, {
                      checked: !1,
                      index: 1,
                      name: b[0].name,
                      productCode: b[0].productCode,
                      listPrice: b[0].listPrice,
                      productFamily: b[0].productFamily
                    })
                  )
                )
              ),
              s.a.createElement(
                r.ModalFooter,
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
      ];
  }
});
