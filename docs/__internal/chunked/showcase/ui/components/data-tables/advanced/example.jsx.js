var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/data-tables/advanced/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, r, i = t[0], o = t[1], s = t[2], u = 0, m = [];
      u < i.length;
      u++
    )
      (r = i[u]),
        Object.prototype.hasOwnProperty.call(l, r) && l[r] && m.push(l[r][0]),
        (l[r] = 0);
    for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
    for (d && d(t); m.length; ) m.shift()();
    return c.push.apply(c, s || []), a();
  }
  function a() {
    for (var e, t = 0; t < c.length; t++) {
      for (var a = c[t], n = !0, i = 1; i < a.length; i++) {
        var o = a[i];
        0 !== l[o] && (n = !1);
      }
      n && (c.splice(t--, 1), (e = r((r.s = a[0]))));
    }
    return e;
  }
  var n = {},
    l = {
      51: 0,
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
    c = [];
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
    o = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var s = 0; s < i.length; s++) t(i[s]);
  var d = o;
  return c.push([250, 0]), a();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  250: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'columns', function() {
        return h;
      }),
      a.d(t, 'rows', function() {
        return R;
      }),
      a.d(t, 'productColumns', function() {
        return M;
      }),
      a.d(t, 'productRows', function() {
        return T;
      }),
      a.d(t, 'states', function() {
        return q;
      }),
      a.d(t, 'examples', function() {
        return L;
      });
    var n = a(0),
      l = a.n(n),
      c = a(65),
      r = a(22),
      i = a(3),
      o = a(1),
      s = a.n(o),
      d = a(6),
      u = a(66),
      m = a(48),
      p = a(10),
      b = a(5),
      y = function(e) {
        return l.a.createElement(
          i.o,
          { isSelected: e.isSelected },
          l.a.createElement(
            i.s,
            { isRightAligned: !0, type: 'advanced' },
            l.a.createElement(i.m, {
              checked: e.isSelected,
              hasSingleRowSelect: e.hasSingleRowSelect,
              index: e.index,
              inputTabIndex: e.actionableMode ? '0' : '-1'
            })
          ),
          l.a.createElement(
            i.l,
            {
              hasFocus: !e.actionableMode && 1 === e.index && e.hasFocus,
              tabIndex: e.actionableMode || 1 !== e.index ? null : '0'
            },
            l.a.createElement(i.i, {
              actionableMode: e.actionableMode,
              cellLink: 'javascript:void(0);',
              cellText: e.recordName
            })
          ),
          l.a.createElement(
            i.s,
            { type: 'advanced' },
            l.a.createElement(i.i, { cellText: e.accountName })
          ),
          l.a.createElement(
            i.s,
            { type: 'advanced' },
            l.a.createElement(i.i, { cellText: e.closeDate })
          ),
          l.a.createElement(
            i.s,
            { type: 'advanced' },
            l.a.createElement(i.i, { cellText: e.stage })
          ),
          l.a.createElement(
            i.s,
            { type: 'advanced' },
            l.a.createElement(i.i, { cellText: e.confidence })
          ),
          e.hasScores && e.amountScore && e.amountScoreLabel
            ? l.a.createElement(
                i.s,
                { type: 'advanced' },
                l.a.createElement(
                  'div',
                  { className: 'slds-grid slds-grid_vertical-align-center' },
                  l.a.createElement(
                    'div',
                    { className: 'slds-truncate', title: e.amount },
                    e.amount
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'slds-icon_container slds-m-left_x-small slds-m-right_xx-small'
                    },
                    l.a.createElement(u.a, { 'data-slds-state': e.amountScore })
                  ),
                  l.a.createElement(
                    'div',
                    { className: 'slds-truncate', title: e.amountScoreLabel },
                    e.amountScoreLabel
                  )
                )
              )
            : l.a.createElement(
                i.s,
                { type: 'advanced' },
                l.a.createElement(i.i, { cellText: e.amount })
              ),
          l.a.createElement(
            i.s,
            { type: 'advanced' },
            l.a.createElement(i.i, {
              actionableMode: e.actionableMode,
              cellLink: 'javascript:void(0);',
              cellText: e.contact
            })
          ),
          e.hasRowActions &&
            l.a.createElement(
              i.s,
              { type: 'advanced' },
              l.a.createElement(i.j, {
                actionableMode: e.actionableMode,
                rowName: e.recordName
              })
            )
        );
      };
    (y.displayName = 'AdvancedDataTableTr'),
      (y.propTypes = {
        accountName: s.a.string.isRequired,
        actionableMode: s.a.bool,
        amount: s.a.string.isRequired,
        amountScore: Object(d.b)('amountScoreLabel', s.a.string),
        amountScoreLabel: Object(d.b)('amountScore', s.a.string),
        closeDate: s.a.string.isRequired,
        confidence: s.a.string.isRequired,
        contact: s.a.string.isRequired,
        hasFocus: s.a.bool,
        hasRowActions: s.a.bool,
        hasScores: s.a.bool,
        index: s.a.number.isRequired,
        hasSingleRowSelect: s.a.bool,
        recordName: s.a.string.isRequired,
        isSelected: s.a.bool,
        stage: s.a.string.isRequired
      }),
      (y.defaultProps = { hasRowActions: !0 });
    var E = function(e) {
      return l.a.createElement(
        'div',
        { className: 'slds-size_xx-small' },
        l.a.createElement('img', {
          alt: e.productName,
          src: e.productImgSrc,
          title: e.productName
        })
      );
    };
    (E.displayName = 'ProductImage'),
      (E.propTypes = {
        productImgSrc: s.a.string.isRequired,
        productName: s.a.string.isRequired
      });
    var g = function(e) {
      return l.a.createElement(
        l.a.Fragment,
        null,
        l.a.createElement(
          'p',
          null,
          l.a.createElement('s', null, e.priceOriginal)
        ),
        l.a.createElement('p', null, e.priceDiscount)
      );
    };
    (g.displayName = 'ProductPriceCell'),
      (g.propTypes = {
        priceDiscount: s.a.string.isRequired,
        priceOriginal: s.a.string.isRequired
      });
    var v = function(e) {
      return l.a.createElement(
        m.a,
        {
          figureLeft: l.a.createElement(E, {
            productImgSrc: e.productImgSrc,
            productName: e.productName
          })
        },
        l.a.createElement(i.i, {
          actionableMode: e.actionableMode,
          cellLink: 'javascript:void(0);',
          cellText: e.productName
        }),
        l.a.createElement(
          'ul',
          null,
          e.productProperties.map(function(e, t) {
            return l.a.createElement(
              'li',
              {
                className: 'slds-truncate',
                key: t,
                title: ''.concat(e.label, ': ').concat(e.value)
              },
              e.label,
              ': ',
              l.a.createElement('strong', null, e.value)
            );
          })
        ),
        l.a.createElement(
          'p',
          { className: 'slds-text-color_success' },
          e.labelInventory
        )
      );
    };
    (v.displayName = 'ProductItemDetailsCell'),
      (v.propTypes = {
        actionableMode: s.a.bool,
        labelInventory: s.a.string.isRequired,
        productImgSrc: s.a.string.isRequired,
        productName: s.a.string.isRequired,
        productProperties: s.a.array.isRequired
      });
    var f = function(e) {
      return l.a.createElement(
        b.b,
        {
          inputId: e.inputId,
          labelClassName: 'slds-assistive-text',
          labelContent: e.labelText
        },
        l.a.createElement(p.a, {
          className:
            'slds-size_xxx-small slds-text-align_center slds-p-horizontal_x-small',
          defaultValue: e.quantity,
          id: e.inputId,
          placeholder: ' ',
          tabIndex: e.actionableMode ? null : '-1'
        })
      );
    };
    (f.displayName = 'ProductQuantityCell'),
      (f.propTypes = {
        actionableMode: s.a.bool,
        labelText: s.a.string.isRequired,
        inputId: s.a.string.isRequired,
        quantity: s.a.string
      });
    var S = function(e) {
      return l.a.createElement(
        i.o,
        { isTopAligned: !0 },
        l.a.createElement(
          i.l,
          null,
          l.a.createElement(v, {
            actionableMode: e.actionableMode,
            labelInventory: e.labelInventory,
            productImgSrc: e.productImgSrc,
            productName: e.productName,
            productProperties: e.productProperties
          })
        ),
        l.a.createElement(
          i.s,
          { type: 'advanced' },
          l.a.createElement(f, {
            actionableMode: e.actionableMode,
            inputId: 'product-quantity-text-input-id-'.concat(e.index),
            labelText: ''.concat(e.productName, ' quantity'),
            quantity: e.quantity
          })
        ),
        l.a.createElement(
          i.s,
          { type: 'advanced' },
          l.a.createElement(i.i, { cellText: e.dateAdded })
        ),
        l.a.createElement(
          i.s,
          { type: 'advanced' },
          l.a.createElement(g, {
            priceDiscount: e.priceDiscount,
            priceOriginal: e.priceOriginal
          })
        ),
        l.a.createElement(
          i.s,
          { type: 'advanced' },
          l.a.createElement(i.j, {
            actionableMode: e.actionableMode,
            rowName: e.productName
          })
        )
      );
    };
    function x() {
      return (x =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var n in a)
              Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    (S.displayName = 'ProductDataTableTr'),
      (S.propTypes = {
        actionableMode: s.a.bool,
        dateAdded: s.a.string.isRequired,
        index: s.a.number.isRequired,
        labelInventory: s.a.string.isRequired,
        priceDiscount: s.a.string.isRequired,
        priceOriginal: s.a.string.isRequired,
        productImgSrc: s.a.string.isRequired,
        productName: s.a.string.isRequired,
        productProperties: s.a.array.isRequired,
        quantity: s.a.string
      });
    var h = [
        'Name',
        'Account Name',
        'Close Date',
        'Stage',
        'Confidence',
        'Amount',
        'Contact'
      ],
      R = [
        {
          recordName: 'Acme - 1,200 Widgets',
          accountName: 'Acme',
          closeDate: '4/10/15',
          stage: 'Value Proposition',
          confidence: '30%',
          amount: '$25,000,000',
          contact: 'jrogers@acme.com',
          amountScore: 'positive',
          amountScoreLabel: 'High'
        },
        {
          recordName: 'Acme - 200 Widgets',
          accountName: 'Acme',
          closeDate: '1/31/15',
          stage: 'Prospecting',
          confidence: '60%',
          amount: '$5,000,000',
          contact: 'bob@acme.com'
        },
        {
          recordName: 'salesforce.com - 1,000 Widgets',
          accountName: 'salesforce.com',
          closeDate: '1/31/15 3:45PM',
          stage: 'Id. Decision Makers',
          confidence: '70%',
          amount: '$25,000',
          contact: 'nathan@salesforce.com',
          amountScore: 'negative',
          amountScoreLabel: 'Low'
        }
      ],
      N = [].concat(R).reverse(),
      M = ['Product', 'Quantity', 'Date Added', 'Price'],
      T = [
        {
          productImgSrc: '/assets/images/product1.jpg',
          productName: 'Baseball Cap',
          productProperties: [
            { label: 'Size', value: '7 3/4' },
            { label: 'Color', value: 'Blue' },
            { label: 'Item No.', value: '1007100' }
          ],
          labelInventory: 'In Stock',
          quantity: '1',
          dateAdded: '4/10/17',
          priceOriginal: '$23.00',
          priceDiscount: '$20.00'
        },
        {
          productImgSrc: '/assets/images/product2.jpg',
          productName: 'Construction Hat',
          productProperties: [
            { label: 'Size', value: 'One size fits most' },
            { label: 'Color', value: 'Yellow' },
            { label: 'Item No.', value: '2800100' }
          ],
          labelInventory: 'In Stock',
          quantity: '1',
          dateAdded: '4/10/17',
          priceOriginal: '$52.00',
          priceDiscount: '$40.00'
        },
        {
          productImgSrc: '/assets/images/product3.jpg',
          productName: 'Campaign Hat',
          productProperties: [
            { label: 'Size', value: 'Small' },
            { label: 'Color', value: 'Tan' },
            { label: 'Item No.', value: '2000100' }
          ],
          labelInventory: 'In Stock',
          quantity: '1',
          dateAdded: '4/10/17',
          priceOriginal: '$79.00',
          priceDiscount: '$59.00'
        }
      ],
      I = [
        {
          column: 'account name',
          icon: l.a.createElement(r.StandardIcon, {
            assistiveText: 'Account',
            className: 'slds-icon_x-small',
            containerClassName: 'slds-m-right_xx-small',
            symbol: 'account',
            title: 'Account'
          })
        },
        {
          column: 'confidence',
          icon: l.a.createElement(
            'div',
            { className: 'slds-icon_container slds-m-right_xx-small' },
            l.a.createElement(c.a, {
              assistiveText: 'Einstein calculated',
              className: 'slds-is-paused',
              title: 'Einstein calculated'
            })
          )
        }
      ],
      q = ((t.default = l.a.createElement(
        i.r,
        {
          isBordered: !0,
          isFixedLayout: !0,
          isResizable: !0,
          selectionType: 'multiple',
          type: 'advanced'
        },
        l.a.createElement(i.a, { columns: h }),
        l.a.createElement(
          i.n,
          null,
          R.map(function(e, t) {
            return l.a.createElement(
              y,
              x({ isSelected: !1, key: t, index: t + 1 }, e)
            );
          })
        )
      )),
      [
        {
          id: 'cell-focused',
          label: 'Cell Focused',
          element: l.a.createElement(
            i.r,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            l.a.createElement(i.a, { columns: h }),
            l.a.createElement(
              i.n,
              null,
              R.map(function(e, t) {
                return l.a.createElement(
                  y,
                  x({ isSelected: !1, key: t, index: t + 1 }, e, {
                    hasFocus: !0
                  })
                );
              })
            )
          )
        },
        {
          id: 'actionable-mode',
          label: 'Actionable Mode',
          element: l.a.createElement(
            i.r,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            l.a.createElement(i.a, { actionableMode: !0, columns: h }),
            l.a.createElement(
              i.n,
              null,
              R.map(function(e, t) {
                return l.a.createElement(
                  y,
                  x(
                    {
                      actionableMode: !0,
                      index: t + 1,
                      isSelected: !1,
                      key: t
                    },
                    e
                  )
                );
              })
            )
          )
        },
        {
          id: 'row-selected',
          label: 'Row Selected (Actionable mode)',
          element: l.a.createElement(
            i.r,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            l.a.createElement(i.a, { actionableMode: !0, columns: h }),
            l.a.createElement(
              i.n,
              null,
              R.map(function(e, t) {
                return l.a.createElement(
                  y,
                  x(
                    {
                      actionableMode: !0,
                      index: t + 1,
                      isSelected: 1 === t,
                      key: t
                    },
                    e
                  )
                );
              })
            )
          )
        },
        {
          id: 'all-row-selected',
          label: 'All Rows Selected (Actionable mode)',
          element: l.a.createElement(
            i.r,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            l.a.createElement(i.a, {
              actionableMode: !0,
              columns: h,
              selectAll: !0
            }),
            l.a.createElement(
              i.n,
              null,
              R.map(function(e, t) {
                return l.a.createElement(
                  y,
                  x(
                    {
                      actionableMode: !0,
                      index: t + 1,
                      isSelected: !0,
                      key: t
                    },
                    e
                  )
                );
              })
            )
          )
        },
        {
          id: 'sorted-column-asc',
          label: 'Sorted Ascending (Actionable mode)',
          element: l.a.createElement(
            i.r,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            l.a.createElement(i.a, {
              columns: h,
              actionableMode: !0,
              sortDirection: 'ascending'
            }),
            l.a.createElement(
              i.n,
              null,
              R.map(function(e, t) {
                return l.a.createElement(
                  y,
                  x(
                    {
                      actionableMode: !0,
                      index: t + 1,
                      isSelected: !1,
                      key: t
                    },
                    e
                  )
                );
              })
            )
          )
        },
        {
          id: 'sorted-column-desc',
          label: 'Sorted Descending (Actionable mode)',
          element: l.a.createElement(
            i.r,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            l.a.createElement(i.a, {
              columns: h,
              actionableMode: !0,
              sortDirection: 'descending'
            }),
            l.a.createElement(
              i.n,
              null,
              N.map(function(e, t) {
                return l.a.createElement(
                  y,
                  x(
                    {
                      actionableMode: !0,
                      index: t + 1,
                      isSelected: !1,
                      key: t
                    },
                    e
                  )
                );
              })
            )
          )
        },
        {
          id: 'resized-column',
          label: 'Column Resized (Actionable mode)',
          element: l.a.createElement(
            i.r,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            l.a.createElement(i.a, {
              columns: h,
              actionableMode: !0,
              singleColumnWidth: '300px'
            }),
            l.a.createElement(
              i.n,
              null,
              R.map(function(e, t) {
                return l.a.createElement(
                  y,
                  x(
                    {
                      actionableMode: !0,
                      index: t + 1,
                      isSelected: !1,
                      key: t
                    },
                    e
                  )
                );
              })
            )
          )
        }
      ]),
      L = [
        {
          id: 'header-icon-menu-button',
          label: 'Header Icon and Menu Button',
          element: l.a.createElement(
            i.r,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            l.a.createElement(i.a, {
              columnHeaderIcons: I,
              columns: h,
              hasMenus: !0
            }),
            l.a.createElement(
              i.n,
              null,
              R.map(function(e, t) {
                return l.a.createElement(
                  y,
                  x({ isSelected: !1, key: t, index: t + 1 }, e)
                );
              })
            )
          )
        },
        {
          id: 'header-menu-button',
          label: 'Header Menu Button',
          element: l.a.createElement(
            i.r,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            l.a.createElement(i.a, { columns: h, hasMenus: !0 }),
            l.a.createElement(
              i.n,
              null,
              R.map(function(e, t) {
                return l.a.createElement(
                  y,
                  x({ isSelected: !1, key: t, index: t + 1 }, e)
                );
              })
            )
          )
        },
        {
          id: 'cell-icon',
          label: 'Cell Icon',
          element: l.a.createElement(
            i.r,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            l.a.createElement(i.a, { columns: h }),
            l.a.createElement(
              i.n,
              null,
              R.map(function(e, t) {
                return l.a.createElement(
                  y,
                  x({ isSelected: !1, key: t, index: t + 1 }, e, {
                    hasScores: !0
                  })
                );
              })
            )
          )
        },
        {
          id: 'product-listing',
          label: 'Product Listing',
          element: l.a.createElement(
            i.r,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            l.a.createElement(i.a, {
              columns: M,
              actionableMode: !0,
              hasNoRowSelection: !0
            }),
            l.a.createElement(
              i.n,
              null,
              T.map(function(e, t) {
                return l.a.createElement(
                  S,
                  x({ isSelected: !1, key: t, index: t + 1 }, e, {
                    actionableMode: !0
                  })
                );
              })
            )
          )
        },
        {
          id: 'radio-group',
          label: 'Radio Group',
          element: l.a.createElement(
            i.r,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              type: 'advanced'
            },
            l.a.createElement(i.a, { columns: h, hasSingleRowSelect: !0 }),
            l.a.createElement(
              i.n,
              null,
              R.map(function(e, t) {
                return l.a.createElement(
                  y,
                  x({ hasSingleRowSelect: !0, index: t + 1, key: t }, e)
                );
              })
            )
          )
        },
        {
          id: 'data-table-no-borders',
          label: 'No borders',
          element: l.a.createElement(
            i.r,
            {
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            l.a.createElement(i.a, { columns: h }),
            l.a.createElement(
              i.n,
              null,
              R.map(function(e, t) {
                return l.a.createElement(
                  y,
                  x({ isSelected: !1, key: t, index: t + 1 }, e)
                );
              })
            )
          )
        },
        {
          id: 'data-table-headless',
          label: 'Headless',
          element: l.a.createElement(
            i.r,
            {
              hasHiddenHeader: !0,
              isBordered: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            l.a.createElement(i.a, { isHidden: !0, columns: h }),
            l.a.createElement(
              i.n,
              null,
              R.map(function(e, t) {
                return l.a.createElement(
                  y,
                  x({ isSelected: !1, key: t, index: t + 1 }, e)
                );
              })
            )
          )
        },
        {
          id: 'data-table-headless-no-borders',
          label: 'Headless with no borders',
          element: l.a.createElement(
            i.r,
            {
              hasHiddenHeader: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            l.a.createElement(i.a, { isHidden: !0, columns: h }),
            l.a.createElement(
              i.n,
              null,
              R.map(function(e, t) {
                return l.a.createElement(
                  y,
                  x({ isSelected: !1, key: t, index: t + 1 }, e)
                );
              })
            )
          )
        }
      ];
  }
});
