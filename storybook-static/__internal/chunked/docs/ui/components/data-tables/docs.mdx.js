var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/data-tables/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var l, c, r = t[0], i = t[1], d = t[2], m = 0, u = [];
      m < r.length;
      m++
    )
      (c = r[m]),
        Object.prototype.hasOwnProperty.call(n, c) && n[c] && u.push(n[c][0]),
        (n[c] = 0);
    for (l in i) Object.prototype.hasOwnProperty.call(i, l) && (e[l] = i[l]);
    for (s && s(t); u.length; ) u.shift()();
    return o.push.apply(o, d || []), a();
  }
  function a() {
    for (var e, t = 0; t < o.length; t++) {
      for (var a = o[t], l = !0, r = 1; r < a.length; r++) {
        var i = a[r];
        0 !== n[i] && (l = !1);
      }
      l && (o.splice(t--, 1), (e = c((c.s = a[0]))));
    }
    return e;
  }
  var l = {},
    n = { 24: 0 },
    o = [];
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
  var r = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    i = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var d = 0; d < r.length; d++) t(r[d]);
  var s = i;
  return o.push([210, 0]), a();
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
  210: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'getElement', function() {
        return Z;
      }),
      a.d(t, 'getContents', function() {
        return ee;
      });
    var l = a(0),
      n = a.n(l),
      o = a(4),
      c = a(1),
      r = (a(23), a(15), a(2)),
      i = a(6),
      d = n.a.createElement(
        i.r,
        { isBordered: !0, hasCellBuffer: !0, type: 'base' },
        n.a.createElement(i.p, null, n.a.createElement(i.f, null)),
        n.a.createElement(
          i.n,
          null,
          n.a.createElement(i.k, { title: 'Cloudhub' }),
          n.a.createElement(i.k, { title: 'Cloudhub + Anypoint Connectors' })
        )
      ),
      s = [
        {
          id: 'data-table-striped-rows',
          label: 'With striped rows',
          element: n.a.createElement(
            i.r,
            { isBordered: !0, isStriped: !0, hasCellBuffer: !0, type: 'base' },
            n.a.createElement(i.p, null, n.a.createElement(i.f, null)),
            n.a.createElement(
              i.n,
              null,
              n.a.createElement(i.k, { title: 'Cloudhub' }),
              n.a.createElement(i.k, {
                title: 'Cloudhub + Anypoint Connectors'
              }),
              n.a.createElement(i.k, { title: 'Cloudhub' })
            )
          )
        },
        {
          id: 'data-table-no-hover',
          label: 'With no row hovers',
          element: n.a.createElement(
            i.r,
            {
              isBordered: !0,
              hasCellBuffer: !0,
              hasNoRowHover: !0,
              type: 'base'
            },
            n.a.createElement(i.p, null, n.a.createElement(i.f, null)),
            n.a.createElement(
              i.n,
              null,
              n.a.createElement(i.k, { title: 'Cloudhub' }),
              n.a.createElement(i.k, {
                title: 'Cloudhub + Anypoint Connectors'
              })
            )
          )
        },
        {
          id: 'data-table-vertical-borders',
          label: 'With vertical borders',
          element: n.a.createElement(
            i.r,
            {
              isBordered: !0,
              isColBordered: !0,
              hasCellBuffer: !0,
              type: 'base'
            },
            n.a.createElement(i.p, null, n.a.createElement(i.f, null)),
            n.a.createElement(
              i.n,
              null,
              n.a.createElement(i.k, { title: 'Cloudhub' }),
              n.a.createElement(i.k, {
                title: 'Cloudhub + Anypoint Connectors'
              })
            )
          )
        },
        {
          id: 'single-column',
          label: 'Single Column',
          element: n.a.createElement(
            i.r,
            { isBordered: !0, hasCellBuffer: !0, type: 'base' },
            n.a.createElement(
              i.p,
              null,
              n.a.createElement(
                i.q,
                null,
                n.a.createElement(
                  i.c,
                  null,
                  n.a.createElement(i.b, { columnName: 'Opportunity Name' })
                )
              )
            ),
            n.a.createElement(
              i.n,
              null,
              n.a.createElement(
                i.o,
                null,
                n.a.createElement(
                  i.s,
                  { 'data-label': 'Opportunity Name', type: 'base' },
                  n.a.createElement(i.i, {
                    cellLink: 'javascript:void(0);',
                    cellText: 'Cloudhub'
                  })
                )
              ),
              n.a.createElement(
                i.o,
                null,
                n.a.createElement(
                  i.s,
                  { 'data-label': 'Opportunity Name', type: 'base' },
                  n.a.createElement(i.i, {
                    cellLink: 'javascript:void(0);',
                    cellText: 'Cloudhub + Anypoint Connectors'
                  })
                )
              )
            )
          )
        },
        {
          id: 'no-borders',
          label: 'No borders',
          element: n.a.createElement(
            i.r,
            { isStriped: !0, hasCellBuffer: !0, type: 'base' },
            n.a.createElement(i.p, null, n.a.createElement(i.f, null)),
            n.a.createElement(
              i.n,
              null,
              n.a.createElement(i.k, { title: 'Cloudhub' }),
              n.a.createElement(i.k, {
                title: 'Cloudhub + Anypoint Connectors'
              }),
              n.a.createElement(i.k, { title: 'Cloudhub' })
            )
          )
        },
        {
          id: 'headless',
          label: 'Headless',
          element: n.a.createElement(
            i.r,
            {
              hasHiddenHeader: !0,
              isBordered: !0,
              hasCellBuffer: !0,
              type: 'base'
            },
            n.a.createElement(
              i.p,
              { isHidden: !0 },
              n.a.createElement(i.f, null)
            ),
            n.a.createElement(
              i.n,
              null,
              n.a.createElement(i.k, { title: 'Cloudhub' }),
              n.a.createElement(i.k, {
                title: 'Cloudhub + Anypoint Connectors'
              }),
              n.a.createElement(i.k, { title: 'Cloudhub' })
            )
          )
        },
        {
          id: 'headless-no-borders',
          label: 'Headless with no borders',
          element: n.a.createElement(
            i.r,
            { hasHiddenHeader: !0, hasCellBuffer: !0, type: 'base' },
            n.a.createElement(
              i.p,
              { isHidden: !0 },
              n.a.createElement(i.f, null)
            ),
            n.a.createElement(
              i.n,
              null,
              n.a.createElement(i.k, { title: 'Cloudhub' }),
              n.a.createElement(i.k, {
                title: 'Cloudhub + Anypoint Connectors'
              }),
              n.a.createElement(i.k, { title: 'Cloudhub' })
            )
          )
        },
        {
          id: 'cell-content-truncated',
          label: 'Cell content truncated',
          demoStyles: 'max-width: 600px;',
          element: n.a.createElement(
            i.r,
            {
              isBordered: !0,
              isStriped: !0,
              hasCellBuffer: !0,
              isFixedLayout: !0,
              type: 'base'
            },
            n.a.createElement(
              i.p,
              null,
              n.a.createElement(
                i.q,
                null,
                n.a.createElement(
                  i.c,
                  null,
                  n.a.createElement(i.b, {
                    columnName: 'Typical Column Header'
                  })
                ),
                n.a.createElement(
                  i.c,
                  null,
                  n.a.createElement(i.b, { columnName: 'Truncated, no wrap' })
                ),
                n.a.createElement(
                  i.c,
                  null,
                  n.a.createElement(i.b, {
                    columnName: 'Typical Column Header'
                  })
                )
              )
            ),
            n.a.createElement(
              i.n,
              null,
              n.a.createElement(
                i.o,
                null,
                n.a.createElement(
                  i.l,
                  { 'data-label': 'Typical Column Header' },
                  n.a.createElement(i.i, { cellText: 'Typical cell content' })
                ),
                n.a.createElement(
                  i.s,
                  {
                    'data-label': 'Truncated, no wrap',
                    type: 'base',
                    hasWrap: !0
                  },
                  n.a.createElement(i.i, { cellText: i.t })
                ),
                n.a.createElement(
                  i.s,
                  { 'data-label': 'Typical Column Header', type: 'base' },
                  n.a.createElement(i.i, { cellText: 'Typical cell content' })
                )
              )
            )
          )
        },
        {
          id: 'cell-content-wrapped',
          label: 'Cell content wrapped',
          demoStyles: 'max-width: 600px;',
          element: n.a.createElement(
            i.r,
            {
              isBordered: !0,
              isStriped: !0,
              hasCellBuffer: !0,
              isFixedLayout: !0,
              type: 'base'
            },
            n.a.createElement(
              i.p,
              null,
              n.a.createElement(
                i.q,
                null,
                n.a.createElement(
                  i.c,
                  null,
                  n.a.createElement(i.b, {
                    columnName: 'Typical Column Header'
                  })
                ),
                n.a.createElement(
                  i.c,
                  null,
                  n.a.createElement(i.b, {
                    columnName: 'Wrapped, line clamped'
                  })
                ),
                n.a.createElement(
                  i.c,
                  null,
                  n.a.createElement(i.b, {
                    columnName: 'Typical Column Header'
                  })
                )
              )
            ),
            n.a.createElement(
              i.n,
              null,
              n.a.createElement(
                i.o,
                null,
                n.a.createElement(
                  i.l,
                  { 'data-label': 'Typical Column Header' },
                  n.a.createElement(i.i, { cellText: 'Typical cell content' })
                ),
                n.a.createElement(
                  i.s,
                  {
                    'data-label': 'Wrapped, line clamped',
                    type: 'base',
                    hasWrap: !0
                  },
                  n.a.createElement(i.i, { cellText: i.t, hasWrap: !0 })
                ),
                n.a.createElement(
                  i.s,
                  { 'data-label': 'Typical Column Header', type: 'base' },
                  n.a.createElement(i.i, { cellText: 'Typical cell content' })
                )
              )
            )
          )
        }
      ],
      m = a(86),
      u = a(32),
      b = a(3),
      p = a.n(b),
      E = a(87),
      h = a(62),
      y = a(16),
      f = a(8),
      g = function(e) {
        return n.a.createElement(
          i.o,
          { isSelected: e.isSelected },
          n.a.createElement(
            i.s,
            { isRightAligned: !0, type: 'advanced' },
            n.a.createElement(i.m, {
              checked: e.isSelected,
              hasSingleRowSelect: e.hasSingleRowSelect,
              index: e.index,
              inputTabIndex: e.actionableMode ? '0' : '-1'
            })
          ),
          n.a.createElement(
            i.l,
            {
              hasFocus: !e.actionableMode && 1 === e.index && e.hasFocus,
              tabIndex: e.actionableMode || 1 !== e.index ? null : '0'
            },
            n.a.createElement(i.i, {
              actionableMode: e.actionableMode,
              cellLink: 'javascript:void(0);',
              cellText: e.recordName
            })
          ),
          n.a.createElement(
            i.s,
            { type: 'advanced' },
            n.a.createElement(i.i, { cellText: e.accountName })
          ),
          n.a.createElement(
            i.s,
            { type: 'advanced' },
            n.a.createElement(i.i, { cellText: e.closeDate })
          ),
          n.a.createElement(
            i.s,
            { type: 'advanced' },
            n.a.createElement(i.i, { cellText: e.stage })
          ),
          n.a.createElement(
            i.s,
            { type: 'advanced' },
            n.a.createElement(i.i, { cellText: e.confidence })
          ),
          e.hasScores && e.amountScore && e.amountScoreLabel
            ? n.a.createElement(
                i.s,
                { type: 'advanced' },
                n.a.createElement(
                  'div',
                  { className: 'slds-grid slds-grid_vertical-align-center' },
                  n.a.createElement(
                    'div',
                    { className: 'slds-truncate', title: e.amount },
                    e.amount
                  ),
                  n.a.createElement(
                    'div',
                    {
                      className:
                        'slds-icon_container slds-m-left_x-small slds-m-right_xx-small'
                    },
                    n.a.createElement(E.a, { 'data-slds-state': e.amountScore })
                  ),
                  n.a.createElement(
                    'div',
                    { className: 'slds-truncate', title: e.amountScoreLabel },
                    e.amountScoreLabel
                  )
                )
              )
            : n.a.createElement(
                i.s,
                { type: 'advanced' },
                n.a.createElement(i.i, { cellText: e.amount })
              ),
          n.a.createElement(
            i.s,
            { type: 'advanced' },
            n.a.createElement(i.i, {
              actionableMode: e.actionableMode,
              cellLink: 'javascript:void(0);',
              cellText: e.contact
            })
          ),
          e.hasRowActions &&
            n.a.createElement(
              i.s,
              { type: 'advanced' },
              n.a.createElement(i.j, {
                actionableMode: e.actionableMode,
                rowName: e.recordName
              })
            )
        );
      };
    (g.displayName = 'AdvancedDataTableTr'),
      (g.propTypes = {
        accountName: p.a.string.isRequired,
        actionableMode: p.a.bool,
        amount: p.a.string.isRequired,
        amountScore: Object(r.b)('amountScoreLabel', p.a.string),
        amountScoreLabel: Object(r.b)('amountScore', p.a.string),
        closeDate: p.a.string.isRequired,
        confidence: p.a.string.isRequired,
        contact: p.a.string.isRequired,
        hasFocus: p.a.bool,
        hasRowActions: p.a.bool,
        hasScores: p.a.bool,
        index: p.a.number.isRequired,
        hasSingleRowSelect: p.a.bool,
        recordName: p.a.string.isRequired,
        isSelected: p.a.bool,
        stage: p.a.string.isRequired
      }),
      (g.defaultProps = { hasRowActions: !0 });
    var v = function(e) {
      return n.a.createElement(
        'div',
        { className: 'slds-size_xx-small' },
        n.a.createElement('img', {
          alt: e.productName,
          src: e.productImgSrc,
          title: e.productName
        })
      );
    };
    (v.displayName = 'ProductImage'),
      (v.propTypes = {
        productImgSrc: p.a.string.isRequired,
        productName: p.a.string.isRequired
      });
    var w = function(e) {
      return n.a.createElement(
        n.a.Fragment,
        null,
        n.a.createElement(
          'p',
          null,
          n.a.createElement('s', null, e.priceOriginal)
        ),
        n.a.createElement('p', null, e.priceDiscount)
      );
    };
    (w.displayName = 'ProductPriceCell'),
      (w.propTypes = {
        priceDiscount: p.a.string.isRequired,
        priceOriginal: p.a.string.isRequired
      });
    var x = function(e) {
      return n.a.createElement(
        h.a,
        {
          figureLeft: n.a.createElement(v, {
            productImgSrc: e.productImgSrc,
            productName: e.productName
          })
        },
        n.a.createElement(i.i, {
          actionableMode: e.actionableMode,
          cellLink: 'javascript:void(0);',
          cellText: e.productName
        }),
        n.a.createElement(
          'ul',
          null,
          e.productProperties.map(function(e, t) {
            return n.a.createElement(
              'li',
              {
                className: 'slds-truncate',
                key: t,
                title: ''.concat(e.label, ': ').concat(e.value)
              },
              e.label,
              ': ',
              n.a.createElement('strong', null, e.value)
            );
          })
        ),
        n.a.createElement(
          'p',
          { className: 'slds-text-color_success' },
          e.labelInventory
        )
      );
    };
    (x.displayName = 'ProductItemDetailsCell'),
      (x.propTypes = {
        actionableMode: p.a.bool,
        labelInventory: p.a.string.isRequired,
        productImgSrc: p.a.string.isRequired,
        productName: p.a.string.isRequired,
        productProperties: p.a.array.isRequired
      });
    var C = function(e) {
      return n.a.createElement(
        f.b,
        {
          inputId: e.inputId,
          labelClassName: 'slds-assistive-text',
          labelContent: e.labelText
        },
        n.a.createElement(y.a, {
          className:
            'slds-size_xxx-small slds-text-align_center slds-p-horizontal_x-small',
          defaultValue: e.quantity,
          id: e.inputId,
          placeholder: ' ',
          tabIndex: e.actionableMode ? null : '-1'
        })
      );
    };
    (C.displayName = 'ProductQuantityCell'),
      (C.propTypes = {
        actionableMode: p.a.bool,
        labelText: p.a.string.isRequired,
        inputId: p.a.string.isRequired,
        quantity: p.a.string
      });
    var S = function(e) {
      return n.a.createElement(
        i.o,
        { isTopAligned: !0 },
        n.a.createElement(
          i.l,
          null,
          n.a.createElement(x, {
            actionableMode: e.actionableMode,
            labelInventory: e.labelInventory,
            productImgSrc: e.productImgSrc,
            productName: e.productName,
            productProperties: e.productProperties
          })
        ),
        n.a.createElement(
          i.s,
          { type: 'advanced' },
          n.a.createElement(C, {
            actionableMode: e.actionableMode,
            inputId: 'product-quantity-text-input-id-'.concat(e.index),
            labelText: ''.concat(e.productName, ' quantity'),
            quantity: e.quantity
          })
        ),
        n.a.createElement(
          i.s,
          { type: 'advanced' },
          n.a.createElement(i.i, { cellText: e.dateAdded })
        ),
        n.a.createElement(
          i.s,
          { type: 'advanced' },
          n.a.createElement(w, {
            priceDiscount: e.priceDiscount,
            priceOriginal: e.priceOriginal
          })
        ),
        n.a.createElement(
          i.s,
          { type: 'advanced' },
          n.a.createElement(i.j, {
            actionableMode: e.actionableMode,
            rowName: e.productName
          })
        )
      );
    };
    function N() {
      return (N =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var l in a)
              Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
          }
          return e;
        }).apply(this, arguments);
    }
    (S.displayName = 'ProductDataTableTr'),
      (S.propTypes = {
        actionableMode: p.a.bool,
        dateAdded: p.a.string.isRequired,
        index: p.a.number.isRequired,
        labelInventory: p.a.string.isRequired,
        priceDiscount: p.a.string.isRequired,
        priceOriginal: p.a.string.isRequired,
        productImgSrc: p.a.string.isRequired,
        productName: p.a.string.isRequired,
        productProperties: p.a.array.isRequired,
        quantity: p.a.string
      });
    var T = [
        'Name',
        'Account Name',
        'Close Date',
        'Stage',
        'Confidence',
        'Amount',
        'Contact'
      ],
      O = [
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
      j = [].concat(O).reverse(),
      R = [
        {
          column: 'account name',
          icon: n.a.createElement(u.a, {
            assistiveText: 'Account',
            className: 'slds-icon_x-small',
            containerClassName: 'slds-m-right_xx-small',
            symbol: 'account',
            title: 'Account'
          })
        },
        {
          column: 'confidence',
          icon: n.a.createElement(
            'div',
            { className: 'slds-icon_container slds-m-right_xx-small' },
            n.a.createElement(m.a, {
              assistiveText: 'Einstein calculated',
              className: 'slds-is-paused',
              title: 'Einstein calculated'
            })
          )
        }
      ],
      k = (i.r,
      i.a,
      i.n,
      O.map(function(e, t) {
        return n.a.createElement(
          g,
          N({ isSelected: !1, key: t, index: t + 1 }, e)
        );
      }),
      [
        {
          id: 'cell-focused',
          label: 'Cell Focused',
          element: n.a.createElement(
            i.r,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            n.a.createElement(i.a, { columns: T }),
            n.a.createElement(
              i.n,
              null,
              O.map(function(e, t) {
                return n.a.createElement(
                  g,
                  N({ isSelected: !1, key: t, index: t + 1 }, e, {
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
          element: n.a.createElement(
            i.r,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            n.a.createElement(i.a, { actionableMode: !0, columns: T }),
            n.a.createElement(
              i.n,
              null,
              O.map(function(e, t) {
                return n.a.createElement(
                  g,
                  N(
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
          element: n.a.createElement(
            i.r,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            n.a.createElement(i.a, { actionableMode: !0, columns: T }),
            n.a.createElement(
              i.n,
              null,
              O.map(function(e, t) {
                return n.a.createElement(
                  g,
                  N(
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
          element: n.a.createElement(
            i.r,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            n.a.createElement(i.a, {
              actionableMode: !0,
              columns: T,
              selectAll: !0
            }),
            n.a.createElement(
              i.n,
              null,
              O.map(function(e, t) {
                return n.a.createElement(
                  g,
                  N(
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
          element: n.a.createElement(
            i.r,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            n.a.createElement(i.a, {
              columns: T,
              actionableMode: !0,
              sortDirection: 'ascending'
            }),
            n.a.createElement(
              i.n,
              null,
              O.map(function(e, t) {
                return n.a.createElement(
                  g,
                  N(
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
          element: n.a.createElement(
            i.r,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            n.a.createElement(i.a, {
              columns: T,
              actionableMode: !0,
              sortDirection: 'descending'
            }),
            n.a.createElement(
              i.n,
              null,
              j.map(function(e, t) {
                return n.a.createElement(
                  g,
                  N(
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
          element: n.a.createElement(
            i.r,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            n.a.createElement(i.a, {
              columns: T,
              actionableMode: !0,
              singleColumnWidth: '300px'
            }),
            n.a.createElement(
              i.n,
              null,
              O.map(function(e, t) {
                return n.a.createElement(
                  g,
                  N(
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
      M = [
        {
          id: 'header-icon-menu-button',
          label: 'Header Icon and Menu Button',
          element: n.a.createElement(
            i.r,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            n.a.createElement(i.a, {
              columnHeaderIcons: R,
              columns: T,
              hasMenus: !0
            }),
            n.a.createElement(
              i.n,
              null,
              O.map(function(e, t) {
                return n.a.createElement(
                  g,
                  N({ isSelected: !1, key: t, index: t + 1 }, e)
                );
              })
            )
          )
        },
        {
          id: 'header-menu-button',
          label: 'Header Menu Button',
          element: n.a.createElement(
            i.r,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            n.a.createElement(i.a, { columns: T, hasMenus: !0 }),
            n.a.createElement(
              i.n,
              null,
              O.map(function(e, t) {
                return n.a.createElement(
                  g,
                  N({ isSelected: !1, key: t, index: t + 1 }, e)
                );
              })
            )
          )
        },
        {
          id: 'cell-icon',
          label: 'Cell Icon',
          element: n.a.createElement(
            i.r,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            n.a.createElement(i.a, { columns: T }),
            n.a.createElement(
              i.n,
              null,
              O.map(function(e, t) {
                return n.a.createElement(
                  g,
                  N({ isSelected: !1, key: t, index: t + 1 }, e, {
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
          element: n.a.createElement(
            i.r,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            n.a.createElement(i.a, {
              columns: ['Product', 'Quantity', 'Date Added', 'Price'],
              actionableMode: !0,
              hasNoRowSelection: !0
            }),
            n.a.createElement(
              i.n,
              null,
              [
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
              ].map(function(e, t) {
                return n.a.createElement(
                  S,
                  N({ isSelected: !1, key: t, index: t + 1 }, e, {
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
          element: n.a.createElement(
            i.r,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              type: 'advanced'
            },
            n.a.createElement(i.a, { columns: T, hasSingleRowSelect: !0 }),
            n.a.createElement(
              i.n,
              null,
              O.map(function(e, t) {
                return n.a.createElement(
                  g,
                  N({ hasSingleRowSelect: !0, index: t + 1, key: t }, e)
                );
              })
            )
          )
        },
        {
          id: 'data-table-no-borders',
          label: 'No borders',
          element: n.a.createElement(
            i.r,
            {
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            n.a.createElement(i.a, { columns: T }),
            n.a.createElement(
              i.n,
              null,
              O.map(function(e, t) {
                return n.a.createElement(
                  g,
                  N({ isSelected: !1, key: t, index: t + 1 }, e)
                );
              })
            )
          )
        },
        {
          id: 'data-table-headless',
          label: 'Headless',
          element: n.a.createElement(
            i.r,
            {
              hasHiddenHeader: !0,
              isBordered: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            n.a.createElement(i.a, { isHidden: !0, columns: T }),
            n.a.createElement(
              i.n,
              null,
              O.map(function(e, t) {
                return n.a.createElement(
                  g,
                  N({ isSelected: !1, key: t, index: t + 1 }, e)
                );
              })
            )
          )
        },
        {
          id: 'data-table-headless-no-borders',
          label: 'Headless with no borders',
          element: n.a.createElement(
            i.r,
            {
              hasHiddenHeader: !0,
              selectionType: 'multiple',
              type: 'advanced'
            },
            n.a.createElement(i.a, { isHidden: !0, columns: T }),
            n.a.createElement(
              i.n,
              null,
              O.map(function(e, t) {
                return n.a.createElement(
                  g,
                  N({ isSelected: !1, key: t, index: t + 1 }, e)
                );
              })
            )
          )
        }
      ];
    function A() {
      return (A =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var l in a)
              Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
          }
          return e;
        }).apply(this, arguments);
    }
    var I = function(e) {
      return n.a.createElement(
        'div',
        A({ className: 'demo-only' }, e),
        e.children
      );
    };
    I.propTypes = { children: p.a.node };
    var B = function(e) {
      return n.a.createElement(
        i.o,
        { isSelected: e.isSelected },
        n.a.createElement(
          i.s,
          {
            hasFocus: 'error' === e.focusedCell,
            isEditable: !0,
            isErrorCell: !0,
            type: 'advanced'
          },
          n.a.createElement(i.e, {
            actionableMode: e.actionableMode,
            hasError: e.showRowError,
            index: e.index
          })
        ),
        n.a.createElement(
          i.s,
          {
            hasFocus: 'selectRow' === e.focusedCell,
            isEditable: !0,
            tabIndex:
              e.actionableMode || 'selectRow' !== e.focusableCell ? null : '0',
            type: 'advanced'
          },
          n.a.createElement(i.m, {
            checked: e.isSelected,
            index: e.index,
            inputTabIndex: e.actionableMode ? '0' : '-1'
          })
        ),
        n.a.createElement(
          i.l,
          {
            hasFocus: 'recordName' === e.focusedCell,
            isEditable: !0,
            tabIndex:
              e.actionableMode || 'recordName' !== e.focusableCell ? null : '0'
          },
          n.a.createElement(i.d, {
            actionableMode: e.actionableMode,
            buttonText: 'Edit Name of ' + e.recordName,
            cellLink: 'javascript:void(0);',
            cellText: e.recordName,
            index: e.index
          })
        ),
        n.a.createElement(
          i.s,
          {
            hasError: e.showCellError,
            hasFocus: 'accountName' === e.focusedCell,
            isEditable: !0,
            isEdited: e.showEditedCell,
            isEditing: e.showEdit,
            isLocked: e.isLocked,
            tabIndex:
              e.actionableMode || 'accountName' !== e.focusableCell
                ? null
                : '0',
            type: 'advanced'
          },
          n.a.createElement(i.d, {
            actionableMode: e.actionableMode,
            buttonText: 'Edit Account Name of ' + e.recordName,
            cellText: e.accountName,
            hasError: e.showEditError,
            index: e.index,
            isLocked: e.isLocked,
            isRequired: e.showEditRequired,
            showEdit: e.showEdit
          })
        ),
        n.a.createElement(
          i.s,
          { isEditable: !0, type: 'advanced' },
          n.a.createElement(i.d, {
            actionableMode: e.actionableMode,
            buttonText: 'Edit Close Date of ' + e.recordName,
            cellText: e.closeDate,
            index: e.index
          })
        ),
        n.a.createElement(
          i.s,
          { isEditable: !0, type: 'advanced' },
          n.a.createElement(i.d, {
            actionableMode: e.actionableMode,
            buttonText: 'Edit Stage of ' + e.recordName,
            cellText: e.stage,
            index: e.index
          })
        ),
        n.a.createElement(
          i.s,
          { isEditable: !0, isLocked: !0, type: 'advanced' },
          n.a.createElement(i.d, {
            actionableMode: e.actionableMode,
            buttonText: 'Edit Confidence of ' + e.recordName,
            cellText: e.confidence,
            index: e.index,
            isLocked: !0
          })
        ),
        n.a.createElement(
          i.s,
          { isEditable: !0, type: 'advanced' },
          n.a.createElement(i.d, {
            actionableMode: e.actionableMode,
            buttonText: 'Edit Amount of ' + e.recordName,
            cellText: e.amount,
            index: e.index
          })
        ),
        n.a.createElement(
          i.s,
          { isEditable: !0, type: 'advanced' },
          n.a.createElement(i.d, {
            actionableMode: e.actionableMode,
            buttonText: 'Edit Contact of ' + e.recordName,
            cellText: e.contact,
            index: e.index
          })
        ),
        n.a.createElement(
          i.s,
          { isEditable: !0, type: 'advanced' },
          n.a.createElement(i.j, {
            actionableMode: e.actionableMode,
            isEditable: !0,
            rowName: e.recordName
          })
        )
      );
    };
    (B.displayName = 'InlineEditTr'),
      (B.propTypes = {
        accountName: p.a.string.isRequired,
        actionableMode: p.a.bool,
        amount: p.a.string.isRequired,
        closeDate: p.a.string.isRequired,
        confidence: p.a.string.isRequired,
        contact: p.a.string.isRequired,
        focusableCell: Object(r.a)('actionableMode', p.a.string),
        focusedCell: p.a.string,
        index: p.a.number.isRequired,
        isLocked: p.a.bool,
        recordName: p.a.string.isRequired,
        isSelected: p.a.bool,
        showCellError: Object(r.b)('showRowError', p.a.bool),
        showEdit: p.a.bool,
        showEditError: p.a.bool,
        showEditRequired: p.a.bool,
        showEditedCell: p.a.bool,
        showRowError: p.a.bool,
        stage: p.a.string.isRequired
      });
    var L = a(34),
      q = a(69);
    function D() {
      return (D =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var l in a)
              Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
          }
          return e;
        }).apply(this, arguments);
    }
    var F = r.c.uniqueId('dialog-heading-id-'),
      H = [
        'Name',
        'Account Name',
        'Close Date',
        'Stage',
        'Confidence',
        'Amount',
        'Contact'
      ],
      z = [
        {
          recordName: 'Acme - 1,200 Widgets',
          accountName: 'Acme',
          closeDate: '4/10/15',
          stage: 'Value Proposition',
          confidence: '30%',
          amount: '$25,000,000',
          contact: 'jrogers@acme.com'
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
          contact: 'nathan@salesforce.com'
        }
      ],
      P = function() {
        return n.a.createElement(
          i.g,
          null,
          n.a.createElement(
            i.r,
            {
              isBordered: !0,
              isEditable: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple',
              style: { width: '66.75rem' },
              type: 'advanced'
            },
            n.a.createElement(i.a, {
              actionableMode: !0,
              columns: H,
              hasErrorColumn: !0,
              mainColumnWidth: '8.75rem'
            }),
            n.a.createElement(
              i.n,
              null,
              z.map(function(e, t) {
                return n.a.createElement(
                  B,
                  D(
                    {
                      actionableMode: !0,
                      focusedCell: 0 === t ? 'recordName' : null,
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
        );
      },
      W = n.a.createElement(
        i.g,
        null,
        n.a.createElement(
          i.r,
          {
            hasNoCellFocus: !0,
            isBordered: !0,
            isEditable: !0,
            isFixedLayout: !0,
            isResizable: !0,
            selectionType: 'multiple',
            style: { width: '66.75rem' },
            type: 'advanced'
          },
          n.a.createElement(i.a, {
            columns: H,
            hasErrorColumn: !0,
            mainColumnWidth: '8.75rem'
          }),
          n.a.createElement(
            i.n,
            null,
            z.map(function(e, t) {
              return n.a.createElement(
                B,
                D(
                  {
                    focusableCell: 'recordName',
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
      ),
      _ = [
        {
          id: 'with-link',
          label: 'Cell focused - Link (Actionable mode)',
          element: n.a.createElement(P, null),
          script: "\n      document.getElementById('link-01').focus()\n    "
        },
        {
          id: 'checkbox',
          label: 'Cell focused - Checkbox (Actionable mode)',
          element: n.a.createElement(
            i.g,
            null,
            n.a.createElement(
              i.r,
              {
                isBordered: !0,
                isEditable: !0,
                isFixedLayout: !0,
                isResizable: !0,
                selectionType: 'multiple',
                style: { width: '66.75rem' },
                type: 'advanced'
              },
              n.a.createElement(i.a, {
                actionableMode: !0,
                columns: H,
                hasErrorColumn: !0,
                mainColumnWidth: '8.75rem'
              }),
              n.a.createElement(
                i.n,
                null,
                z.map(function(e, t) {
                  return n.a.createElement(
                    B,
                    D(
                      {
                        actionableMode: !0,
                        focusedCell: 0 === t ? 'selectRow' : null,
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
          ),
          script: "\n      document.getElementById('checkbox-01').focus()\n    "
        },
        {
          id: 'focused',
          label: 'Cell focused (Navigation mode)',
          element: n.a.createElement(
            i.g,
            null,
            n.a.createElement(
              i.r,
              {
                isBordered: !0,
                isEditable: !0,
                isFixedLayout: !0,
                isResizable: !0,
                selectionType: 'multiple',
                style: { width: '66.75rem' },
                type: 'advanced'
              },
              n.a.createElement(i.a, {
                columns: H,
                hasErrorColumn: !0,
                mainColumnWidth: '8.75rem'
              }),
              n.a.createElement(
                i.n,
                null,
                z.map(function(e, t) {
                  return n.a.createElement(
                    B,
                    D(
                      {
                        focusableCell: 0 === t ? 'accountName' : null,
                        focusedCell: 0 === t ? 'accountName' : null,
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
          )
        },
        {
          id: 'edit',
          label: 'Cell edit (Actionable mode)',
          element: n.a.createElement(
            i.g,
            null,
            n.a.createElement(
              i.r,
              {
                isBordered: !0,
                isEditable: !0,
                isFixedLayout: !0,
                isResizable: !0,
                selectionType: 'multiple',
                style: { width: '66.75rem' },
                type: 'advanced'
              },
              n.a.createElement(i.a, {
                actionableMode: !0,
                columns: H,
                hasErrorColumn: !0,
                mainColumnWidth: '8.75rem'
              }),
              n.a.createElement(
                i.n,
                null,
                z.map(function(e, t) {
                  return n.a.createElement(
                    B,
                    D(
                      {
                        actionableMode: !0,
                        index: t + 1,
                        isSelected: !1,
                        key: t,
                        showEdit: 0 === t
                      },
                      e
                    )
                  );
                })
              )
            )
          ),
          script:
            "\n      document.getElementById('company-01').focus()\n      document.getElementById('company-01').select()\n    "
        },
        {
          id: 'required',
          label: 'Cell edit — Required (Actionable mode)',
          element: n.a.createElement(
            i.g,
            null,
            n.a.createElement(
              i.r,
              {
                isBordered: !0,
                isEditable: !0,
                isFixedLayout: !0,
                isResizable: !0,
                selectionType: 'multiple',
                style: { width: '66.75rem' },
                type: 'advanced'
              },
              n.a.createElement(i.a, {
                actionableMode: !0,
                columns: H,
                hasErrorColumn: !0,
                mainColumnWidth: '8.75rem'
              }),
              n.a.createElement(
                i.n,
                null,
                z.map(function(e, t) {
                  return n.a.createElement(
                    B,
                    D(
                      {
                        actionableMode: !0,
                        index: t + 1,
                        isSelected: !1,
                        key: t,
                        showEdit: 0 === t,
                        showEditRequired: !0
                      },
                      e
                    )
                  );
                })
              )
            )
          ),
          script:
            "\n      document.getElementById('company-01').focus()\n      document.getElementById('company-01').select()\n    "
        },
        {
          id: 'error',
          label: 'Cell edit — Error (Actionable mode)',
          element: n.a.createElement(
            i.g,
            null,
            n.a.createElement(
              i.r,
              {
                isBordered: !0,
                isEditable: !0,
                isFixedLayout: !0,
                isResizable: !0,
                selectionType: 'multiple',
                style: { width: '66.75rem' },
                type: 'advanced'
              },
              n.a.createElement(i.a, {
                actionableMode: !0,
                columns: H,
                hasErrorColumn: !0,
                mainColumnWidth: '8.75rem'
              }),
              n.a.createElement(
                i.n,
                null,
                z.map(function(e, t) {
                  return n.a.createElement(
                    B,
                    D(
                      {
                        actionableMode: !0,
                        index: t + 1,
                        isSelected: !1,
                        key: t,
                        showEdit: 0 === t,
                        showEditError: !0,
                        showEditRequired: !0
                      },
                      e
                    )
                  );
                })
              )
            )
          ),
          script:
            "\n      document.getElementById('company-01').focus()\n      document.getElementById('company-01').select()\n    "
        },
        {
          id: 'edited',
          label: 'Cell edited (Actionable mode)',
          element: n.a.createElement(
            i.g,
            null,
            n.a.createElement(
              i.r,
              {
                isBordered: !0,
                isEditable: !0,
                isFixedLayout: !0,
                isResizable: !0,
                selectionType: 'multiple',
                style: { width: '66.75rem' },
                type: 'advanced'
              },
              n.a.createElement(i.a, {
                actionableMode: !0,
                columns: H,
                hasErrorColumn: !0,
                mainColumnWidth: '8.75rem'
              }),
              n.a.createElement(
                i.n,
                null,
                z.map(function(e, t) {
                  return n.a.createElement(
                    B,
                    D(
                      {
                        actionableMode: !0,
                        index: t + 1,
                        isSelected: !1,
                        key: t,
                        showEditedCell: 0 === t
                      },
                      e
                    )
                  );
                })
              )
            )
          )
        },
        {
          id: 'row-selected-with-edited-cell',
          label: 'Row Selected with an Edited Cell',
          element: n.a.createElement(
            i.g,
            null,
            n.a.createElement(
              i.r,
              {
                isBordered: !0,
                isEditable: !0,
                isFixedLayout: !0,
                isResizable: !0,
                selectionType: 'multiple',
                style: { width: '66.75rem' },
                type: 'advanced'
              },
              n.a.createElement(i.a, {
                actionableMode: !0,
                columns: H,
                hasErrorColumn: !0,
                mainColumnWidth: '8.75rem'
              }),
              n.a.createElement(
                i.n,
                null,
                z.map(function(e, t) {
                  return n.a.createElement(
                    B,
                    D(
                      {
                        actionableMode: !0,
                        className: 0 === t ? 'slds-is-selected' : null,
                        index: t + 1,
                        isSelected: 0 === t,
                        key: t,
                        showEditedCell: 0 === t
                      },
                      e
                    )
                  );
                })
              )
            )
          )
        },
        {
          id: 'row-error',
          label: 'Error - Row level on save (Actionable mode)',
          element: n.a.createElement(
            i.g,
            null,
            n.a.createElement(
              i.r,
              {
                isBordered: !0,
                isEditable: !0,
                isFixedLayout: !0,
                isResizable: !0,
                selectionType: 'multiple',
                style: { width: '66.75rem' },
                type: 'advanced'
              },
              n.a.createElement(i.a, {
                actionableMode: !0,
                columns: H,
                hasErrorColumn: !0,
                mainColumnWidth: '8.75rem'
              }),
              n.a.createElement(
                i.n,
                null,
                z.map(function(e, t) {
                  return n.a.createElement(
                    B,
                    D(
                      {
                        actionableMode: !0,
                        focusedCell: 0 === t ? 'accountName' : null,
                        index: t + 1,
                        isSelected: !1,
                        key: t,
                        showCellError: 0 === t,
                        showRowError: 0 === t
                      },
                      e
                    )
                  );
                })
              )
            )
          ),
          script: "\n      document.getElementById('button-01').focus()\n    "
        },
        {
          id: 'row-error-and-selected',
          label:
            'Error - Row level on save (Actionable mode) with entire row selected',
          element: n.a.createElement(
            i.g,
            null,
            n.a.createElement(
              i.r,
              {
                isBordered: !0,
                isEditable: !0,
                isFixedLayout: !0,
                isResizable: !0,
                selectionType: 'multiple',
                style: { width: '66.75rem' },
                type: 'advanced'
              },
              n.a.createElement(i.a, {
                actionableMode: !0,
                columns: H,
                hasErrorColumn: !0,
                mainColumnWidth: '8.75rem'
              }),
              n.a.createElement(
                i.n,
                null,
                z.map(function(e, t) {
                  return n.a.createElement(
                    B,
                    D(
                      {
                        actionableMode: !0,
                        className: 0 === t ? 'slds-is-selected' : null,
                        index: t + 1,
                        isSelected: 0 === t,
                        key: t,
                        showCellError: 0 === t,
                        showRowError: 0 === t
                      },
                      e
                    )
                  );
                })
              )
            )
          )
        },
        {
          id: 'row-error-focused',
          label: 'Error indicator - Focused (Actionable mode)',
          element: n.a.createElement(
            I,
            { style: { marginTop: '100px', marginLeft: '10px' } },
            n.a.createElement(
              i.g,
              null,
              n.a.createElement(
                i.r,
                {
                  isBordered: !0,
                  isEditable: !0,
                  isFixedLayout: !0,
                  isResizable: !0,
                  selectionType: 'multiple',
                  style: { width: '66.75rem' },
                  type: 'advanced'
                },
                n.a.createElement(i.a, {
                  actionableMode: !0,
                  columns: H,
                  hasErrorColumn: !0,
                  mainColumnWidth: '8.75rem'
                }),
                n.a.createElement(
                  i.n,
                  null,
                  z.map(function(e, t) {
                    return n.a.createElement(
                      B,
                      D(
                        {
                          actionableMode: !0,
                          focusedCell: 0 === t ? 'error' : null,
                          index: t + 1,
                          isSelected: !1,
                          key: t,
                          showCellError: 0 === t,
                          showRowError: 0 === t
                        },
                        e
                      )
                    );
                  })
                )
              ),
              n.a.createElement(
                L.a,
                {
                  className: 'slds-popover_error slds-nubbin_bottom-left',
                  closeButton: !0,
                  header: n.a.createElement(q.b, {
                    headingId: F,
                    symbol: 'error',
                    title: 'Resolve error'
                  }),
                  headingId: F,
                  inverse: !0,
                  style: { position: 'absolute', top: '-56px' }
                },
                n.a.createElement('p', null, 'Company encountered an error')
              )
            )
          ),
          script: "\n      document.getElementById('error-01').focus()\n    "
        },
        {
          id: 'header-cell-focused',
          label: 'Header cell focused (Navigation mode)',
          element: n.a.createElement(
            i.g,
            null,
            n.a.createElement(
              i.r,
              {
                isBordered: !0,
                isEditable: !0,
                isFixedLayout: !0,
                isResizable: !0,
                selectionType: 'multiple',
                style: { width: '66.75rem' },
                type: 'advanced'
              },
              n.a.createElement(i.a, {
                columns: H,
                hasErrorColumn: !0,
                hasFocus: !0,
                mainColumnWidth: '8.75rem'
              }),
              n.a.createElement(
                i.n,
                null,
                z.map(function(e, t) {
                  return n.a.createElement(B, {
                    accountName: z[t].accountName,
                    amount: z[t].amount,
                    closeDate: z[t].closeDate,
                    confidence: z[t].confidence,
                    contact: z[t].contact,
                    index: t + 1,
                    isSelected: !1,
                    key: t,
                    recordName: z[t].recordName,
                    stage: z[t].stage
                  });
                })
              )
            )
          )
        },
        {
          id: 'header-cell-marked',
          label: 'Header cell marked (Navigation mode)',
          element: n.a.createElement(
            i.g,
            null,
            n.a.createElement(
              i.r,
              {
                hasNoCellFocus: !0,
                isBordered: !0,
                isEditable: !0,
                isFixedLayout: !0,
                isResizable: !0,
                selectionType: 'multiple',
                style: { width: '66.75rem' },
                type: 'advanced'
              },
              n.a.createElement(i.a, {
                columns: H,
                hasErrorColumn: !0,
                hasFocus: !0,
                mainColumnWidth: '8.75rem'
              }),
              n.a.createElement(
                i.n,
                null,
                z.map(function(e, t) {
                  return n.a.createElement(B, {
                    accountName: z[t].accountName,
                    amount: z[t].amount,
                    closeDate: z[t].closeDate,
                    confidence: z[t].confidence,
                    contact: z[t].contact,
                    index: t + 1,
                    isSelected: !1,
                    key: t,
                    recordName: z[t].recordName,
                    stage: z[t].stage
                  });
                })
              )
            )
          )
        }
      ],
      $ = o.c.a,
      G = o.c.code,
      J = o.c.h2,
      V = o.c.h3,
      K = o.c.h4,
      Q = o.c.li,
      Y = o.c.p,
      U = o.c.strong,
      X = o.c.ul,
      Z = function() {
        return Object(l.createElement)(
          o.b,
          {},
          Object(l.createElement)(
            'div',
            { className: 'doc lead' },
            'Data tables are an enhanced version of an HTML table and are used to display tabular data.'
          ),
          Object(l.createElement)(
            c.a,
            { exampleOnly: !0, demoStyles: 'overflow: hidden;' },
            Object(r.e)(k, 'actionable-mode')
          ),
          J({ id: 'About-Data-Tables' }, 'About Data Tables'),
          Y(
            {},
            'To initialize a data table, apply the ',
            G({}, 'slds-table'),
            ' class to the ',
            G({}, 'table'),
            ' element. This class creates a ',
            G({}, 'table'),
            ' with formatted cells and allows you to use data table utilities.'
          ),
          V({ id: 'Accessibility' }, 'Accessibility'),
          Y(
            {},
            'To create an accessible table, the top row of column headers (',
            G({}, 'th'),
            ') are placed in a ',
            G({}, 'thead'),
            '. Each one receives the ',
            G({}, 'scope="col"'),
            " attribute. The first non-actionable (meaning that doesn't contain a checkbox or menu) column in each row should be marked as a th with a ",
            G({}, 'scope="row"'),
            ' attribute.'
          ),
          J({ id: 'Base' }, 'Base'),
          Object(l.createElement)(c.a, null, d),
          V({ id: 'Striped-rows' }, 'Striped rows'),
          Object(l.createElement)(
            c.a,
            null,
            Object(r.e)(s, 'data-table-striped-rows')
          ),
          V({ id: 'Columns-dividers' }, 'Columns dividers'),
          Object(l.createElement)(
            c.a,
            null,
            Object(r.e)(s, 'data-table-vertical-borders')
          ),
          V({ id: 'Rows-with-no-hover' }, 'Rows with no hover'),
          Object(l.createElement)(
            c.a,
            null,
            Object(r.e)(s, 'data-table-no-hover')
          ),
          V({ id: 'Single-Column-table' }, 'Single Column table'),
          Object(l.createElement)(c.a, null, Object(r.e)(s, 'single-column')),
          V({ id: 'Headless' }, 'Headless'),
          Object(l.createElement)(c.a, null, Object(r.e)(s, 'headless')),
          K({ id: 'With-no-borders' }, 'With no borders'),
          Object(l.createElement)(
            c.a,
            null,
            Object(r.e)(s, 'headless-no-borders')
          ),
          J(
            { id: 'Actionable-mode-Column-sorting-and-row-selection(s)' },
            'Actionable mode - Column sorting and row selection(s)'
          ),
          Object(l.createElement)(
            c.a,
            { demoStyles: 'overflow: hidden;' },
            Object(r.e)(k, 'actionable-mode')
          ),
          V({ id: 'Single-row-selection' }, 'Single row selection'),
          Object(l.createElement)(
            c.a,
            { demoStyles: 'overflow: hidden;' },
            Object(r.e)(M, 'radio-group')
          ),
          V(
            { id: 'Navigation-mode-Cell-focused' },
            'Navigation mode - Cell focused'
          ),
          Object(l.createElement)(
            c.a,
            { demoStyles: 'overflow: hidden;' },
            Object(r.e)(k, 'cell-focused')
          ),
          V({ id: 'Row-Selection' }, 'Row Selection'),
          K({ id: 'Single-row-selected' }, 'Single row selected'),
          Object(l.createElement)(
            c.a,
            { demoStyles: 'overflow: hidden;' },
            Object(r.e)(k, 'row-selected')
          ),
          K({ id: 'All-rows-selected' }, 'All rows selected'),
          Object(l.createElement)(
            c.a,
            { demoStyles: 'overflow: hidden;' },
            Object(r.e)(k, 'all-row-selected')
          ),
          V({ id: 'Column-sorting' }, 'Column sorting'),
          K({ id: 'Sorted-Ascending' }, 'Sorted Ascending'),
          Object(l.createElement)(
            c.a,
            { demoStyles: 'overflow: hidden;' },
            Object(r.e)(k, 'sorted-column-asc')
          ),
          K({ id: 'Sorted-Descending' }, 'Sorted Descending'),
          Object(l.createElement)(
            c.a,
            { demoStyles: 'overflow: hidden;' },
            Object(r.e)(k, 'sorted-column-desc')
          ),
          V({ id: 'Column-resizing' }, 'Column resizing'),
          Object(l.createElement)(
            c.a,
            { demoStyles: 'overflow: hidden;' },
            Object(r.e)(k, 'resized-column')
          ),
          V(
            { id: 'Column-headers-with-overflow-actions-button-menu' },
            'Column headers with overflow actions button menu'
          ),
          Object(l.createElement)(
            c.a,
            { demoStyles: 'overflow: hidden;' },
            Object(r.e)(M, 'header-menu-button')
          ),
          V({ id: 'Column-with-icons' }, 'Column with icons'),
          Object(l.createElement)(
            c.a,
            { demoStyles: 'overflow: hidden;' },
            Object(r.e)(M, 'header-icon-menu-button')
          ),
          V({ id: 'Cell-with-icons' }, 'Cell with icons'),
          Object(l.createElement)(
            c.a,
            { demoStyles: 'overflow: hidden;' },
            Object(r.e)(M, 'cell-icon')
          ),
          J({ id: 'Inline-Edit' }, 'Inline Edit'),
          V({ id: 'Accessibility-2' }, 'Accessibility'),
          Y(
            {},
            'The Advanced Data Table and Inline Edit Data Table are based on the semantics, roles and interaction model of the ARIA Grid. In SLDS we overlay the ',
            $(
              {
                href:
                  'http://w3c.github.io/aria/practices/aria-practices.html#grid'
              },
              'ARIA Grid'
            ),
            ' on top of native HTML table semantics.'
          ),
          Y(
            {},
            'The role of Grid comes with 2 distinct modes, Navigation mode and Actionable mode. Both come with very specific keyboard interaction modals. Navigation mode is the default mode of the Grid.'
          ),
          Y({}, U({}, 'Navigation Mode')),
          X(
            {},
            Q(
              {},
              'Tabbing into the grid focuses the first data cell in the table.'
            ),
            Q(
              {},
              'The second tab key press takes the user focus out of the grid onto the next focusable element on the page.'
            ),
            Q(
              {},
              'Once the user has tabbed out of the grid, tabbing back into the grid will return focus to the last cell the user was focused on.'
            ),
            Q({}, 'Navigation in the grid is accomplished via the arrow keys.'),
            Q({}, 'No actionable items in cell contents are focusable.'),
            Q(
              {},
              'Pressing the Enter key on a chosen grid cell, places the entire Grid into Actionable mode.'
            )
          ),
          Y({}, U({}, 'Actionable Mode')),
          X(
            {},
            Q(
              {},
              'Once in Actionable mode, all focusable items in the entire grid can be tabbed to.'
            ),
            Q(
              {},
              'Arrow navigation still takes the user cell to cell in any direction, but focuses on the first actionable item in the cell, if there is one.'
            ),
            Q(
              {},
              'Pressing the Escape key exits Actionable mode, placing the user back into Navigation mode, keeping the users cursor on the same cell they were focused in.'
            ),
            Q(
              {},
              'When interacting with a component in a cell, such as a Menu, that also uses the Escape key as an exit action, pressing Escape will take the user back to the triggering element in the current cell. A subsequent press of Escape will return the user to Navigation mode.'
            )
          ),
          Y(
            {},
            'For the purposes of these docs, the Default state of Inline Edit is representative of Navigation mode, all other states are assumed to be in Actionable Mode.'
          ),
          Object(l.createElement)(c.a, { demoStyles: 'overflow: hidden;' }, W),
          V({ id: 'Keyboard-navigation' }, 'Keyboard navigation'),
          K(
            { id: '1st-cell-highlighted-(checkbox)' },
            '1st cell highlighted (checkbox)'
          ),
          Object(l.createElement)(
            c.a,
            { demoStyles: 'overflow: hidden;' },
            Object(r.e)(_, 'checkbox')
          ),
          K({ id: '2nd-cell-highlighted' }, '2nd cell highlighted'),
          Object(l.createElement)(
            c.a,
            { demoStyles: 'overflow: hidden;' },
            Object(r.e)(_, 'with-link')
          ),
          K({ id: '3rd-cell-highlighted' }, '3rd cell highlighted'),
          Object(l.createElement)(
            c.a,
            { demoStyles: 'overflow: hidden;' },
            Object(r.e)(_, 'focused')
          ),
          V({ id: 'Cell-Edit' }, 'Cell Edit'),
          Object(l.createElement)(
            c.a,
            { demoStyles: 'overflow: hidden;' },
            Object(r.e)(_, 'edit')
          ),
          K({ id: 'Required-form-element' }, 'Required form element'),
          Object(l.createElement)(
            c.a,
            { demoStyles: 'overflow: hidden;' },
            Object(r.e)(_, 'required')
          ),
          K(
            { id: 'Required-form-element-with-error' },
            'Required form element with error'
          ),
          Object(l.createElement)(
            c.a,
            { demoStyles: 'overflow: hidden;' },
            Object(r.e)(_, 'error')
          ),
          K({ id: 'Edited-cell-(unsaved)' }, 'Edited cell (unsaved)'),
          Object(l.createElement)(
            c.a,
            { demoStyles: 'overflow: hidden;' },
            Object(r.e)(_, 'edited')
          ),
          K(
            { id: 'Edited-cell-with-row-selected-(unsaved)' },
            'Edited cell with row selected (unsaved)'
          ),
          Object(l.createElement)(
            c.a,
            { demoStyles: 'overflow: hidden;' },
            Object(r.e)(_, 'row-selected-with-edited-cell')
          ),
          K(
            { id: 'Edited-cell-with-row-level-error-(unsaved)' },
            'Edited cell with row level error (unsaved)'
          ),
          Object(l.createElement)(
            c.a,
            { demoStyles: 'overflow: hidden;' },
            Object(r.e)(_, 'row-error')
          ),
          K(
            { id: 'Edited-cell-with-focused-row-level-error-(unsaved)' },
            'Edited cell with focused row level error  (unsaved)'
          ),
          Object(l.createElement)(
            c.a,
            { demoStyles: 'overflow: hidden;' },
            Object(r.e)(_, 'row-error-focused')
          ),
          K(
            {
              id: 'Edited-cell-with-row-selected-and-row-level-error-(unsaved)'
            },
            'Edited cell with row selected and row level error (unsaved)'
          ),
          Object(l.createElement)(
            c.a,
            { demoStyles: 'overflow: hidden;' },
            Object(r.e)(_, 'row-error-and-selected')
          ),
          V({ id: 'Header-navigation' }, 'Header navigation'),
          K({ id: 'Header-cell-focused' }, 'Header cell focused'),
          Object(l.createElement)(
            c.a,
            { demoStyles: 'overflow: hidden;' },
            Object(r.e)(_, 'header-cell-focused')
          ),
          K({ id: 'Header-cell-marked' }, 'Header cell marked'),
          Object(l.createElement)(
            c.a,
            { demoStyles: 'overflow: hidden;' },
            Object(r.e)(_, 'header-cell-marked')
          ),
          V({ id: 'Cell-Content' }, 'Cell Content'),
          Y(
            {},
            'As a default method, wrap any table cell content in a ',
            G({}, '<div>'),
            '.'
          ),
          K({ id: 'Truncated' }, 'Truncated'),
          Y(
            {},
            'Add the ',
            G({}, 'slds-truncate'),
            ' class to truncate any content that might overflow the tables cell area.'
          ),
          Object(l.createElement)(
            c.a,
            { demoStyles: Object(r.d)(s, 'cell-content-truncated') },
            Object(r.e)(s, 'cell-content-truncated')
          ),
          K({ id: 'Wrapped' }, 'Wrapped'),
          Y(
            {},
            'In those cases where long cell content is anticipated, use the ',
            G({}, 'slds-cell-wrap'),
            ' class on the cell ',
            G({}, '<td>'),
            ' to have the text wrap within the cell’s width.'
          ),
          Y(
            {},
            'Also, use the ',
            G({}, 'slds-line-clamp'),
            ' class on the content-wrapping ',
            G({}, '<div>'),
            ' to clamp, or truncate, the cell content after a certain amount of lines. Other ',
            $({ href: '/utilities/line-clamp' }, 'line clamping classes'),
            ' can be used in place for various line clamping limits. The clamping limit can also be changed by reassigning a value to the ',
            G({}, 'line-clamp'),
            ' token.'
          ),
          Object(l.createElement)(
            c.a,
            { demoStyles: Object(r.d)(s, 'cell-content-wrapped') },
            Object(r.e)(s, 'cell-content-wrapped')
          )
        );
      },
      ee = function() {
        return Object(o.a)(Z());
      };
  }
});
