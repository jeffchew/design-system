var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/data-tables/inline-edit/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, r, i = t[0], c = t[1], d = t[2], m = 0, u = [];
      m < i.length;
      m++
    )
      (r = i[m]),
        Object.prototype.hasOwnProperty.call(l, r) && l[r] && u.push(l[r][0]),
        (l[r] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    for (s && s(t); u.length; ) u.shift()();
    return o.push.apply(o, d || []), a();
  }
  function a() {
    for (var e, t = 0; t < o.length; t++) {
      for (var a = o[t], n = !0, i = 1; i < a.length; i++) {
        var c = a[i];
        0 !== l[c] && (n = !1);
      }
      n && (o.splice(t--, 1), (e = r((r.s = a[0]))));
    }
    return e;
  }
  var n = {},
    l = {
      54: 0,
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
  for (var d = 0; d < i.length; d++) t(i[d]);
  var s = c;
  return o.push([253, 0]), a();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  253: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'InlineEditTableFocusedCell', function() {
        return f;
      }),
      a.d(t, 'states', function() {
        return x;
      });
    var n = a(0),
      l = a.n(n),
      o = a(6),
      r = a(3),
      i = a(1),
      c = a.n(i);
    function d() {
      return (d =
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
    var s = function(e) {
      return l.a.createElement(
        'div',
        d({ className: 'demo-only' }, e),
        e.children
      );
    };
    s.propTypes = { children: c.a.node };
    var m = function(e) {
      return l.a.createElement(
        r.o,
        { isSelected: e.isSelected },
        l.a.createElement(
          r.s,
          {
            hasFocus: 'error' === e.focusedCell,
            isEditable: !0,
            isErrorCell: !0,
            type: 'advanced'
          },
          l.a.createElement(r.e, {
            actionableMode: e.actionableMode,
            hasError: e.showRowError,
            index: e.index
          })
        ),
        l.a.createElement(
          r.s,
          {
            hasFocus: 'selectRow' === e.focusedCell,
            isEditable: !0,
            tabIndex:
              e.actionableMode || 'selectRow' !== e.focusableCell ? null : '0',
            type: 'advanced'
          },
          l.a.createElement(r.m, {
            checked: e.isSelected,
            index: e.index,
            inputTabIndex: e.actionableMode ? '0' : '-1'
          })
        ),
        l.a.createElement(
          r.l,
          {
            hasFocus: 'recordName' === e.focusedCell,
            isEditable: !0,
            tabIndex:
              e.actionableMode || 'recordName' !== e.focusableCell ? null : '0'
          },
          l.a.createElement(r.d, {
            actionableMode: e.actionableMode,
            buttonText: 'Edit Name of ' + e.recordName,
            cellLink: 'javascript:void(0);',
            cellText: e.recordName,
            index: e.index
          })
        ),
        l.a.createElement(
          r.s,
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
          l.a.createElement(r.d, {
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
        l.a.createElement(
          r.s,
          { isEditable: !0, type: 'advanced' },
          l.a.createElement(r.d, {
            actionableMode: e.actionableMode,
            buttonText: 'Edit Close Date of ' + e.recordName,
            cellText: e.closeDate,
            index: e.index
          })
        ),
        l.a.createElement(
          r.s,
          { isEditable: !0, type: 'advanced' },
          l.a.createElement(r.d, {
            actionableMode: e.actionableMode,
            buttonText: 'Edit Stage of ' + e.recordName,
            cellText: e.stage,
            index: e.index
          })
        ),
        l.a.createElement(
          r.s,
          { isEditable: !0, isLocked: !0, type: 'advanced' },
          l.a.createElement(r.d, {
            actionableMode: e.actionableMode,
            buttonText: 'Edit Confidence of ' + e.recordName,
            cellText: e.confidence,
            index: e.index,
            isLocked: !0
          })
        ),
        l.a.createElement(
          r.s,
          { isEditable: !0, type: 'advanced' },
          l.a.createElement(r.d, {
            actionableMode: e.actionableMode,
            buttonText: 'Edit Amount of ' + e.recordName,
            cellText: e.amount,
            index: e.index
          })
        ),
        l.a.createElement(
          r.s,
          { isEditable: !0, type: 'advanced' },
          l.a.createElement(r.d, {
            actionableMode: e.actionableMode,
            buttonText: 'Edit Contact of ' + e.recordName,
            cellText: e.contact,
            index: e.index
          })
        ),
        l.a.createElement(
          r.s,
          { isEditable: !0, type: 'advanced' },
          l.a.createElement(r.j, {
            actionableMode: e.actionableMode,
            isEditable: !0,
            rowName: e.recordName
          })
        )
      );
    };
    (m.displayName = 'InlineEditTr'),
      (m.propTypes = {
        accountName: c.a.string.isRequired,
        actionableMode: c.a.bool,
        amount: c.a.string.isRequired,
        closeDate: c.a.string.isRequired,
        confidence: c.a.string.isRequired,
        contact: c.a.string.isRequired,
        focusableCell: Object(o.a)('actionableMode', c.a.string),
        focusedCell: c.a.string,
        index: c.a.number.isRequired,
        isLocked: c.a.bool,
        recordName: c.a.string.isRequired,
        isSelected: c.a.bool,
        showCellError: Object(o.b)('showRowError', c.a.bool),
        showEdit: c.a.bool,
        showEditError: c.a.bool,
        showEditRequired: c.a.bool,
        showEditedCell: c.a.bool,
        showRowError: c.a.bool,
        stage: c.a.string.isRequired
      });
    var u = a(27),
      E = a(60);
    function b() {
      return (b =
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
    var p = o.c.uniqueId('dialog-heading-id-'),
      h = [
        'Name',
        'Account Name',
        'Close Date',
        'Stage',
        'Confidence',
        'Amount',
        'Contact'
      ],
      y = [
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
      f = function() {
        return l.a.createElement(
          r.g,
          null,
          l.a.createElement(
            r.r,
            {
              isBordered: !0,
              isEditable: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple',
              style: { width: '66.75rem' },
              type: 'advanced'
            },
            l.a.createElement(r.a, {
              actionableMode: !0,
              columns: h,
              hasErrorColumn: !0,
              mainColumnWidth: '8.75rem'
            }),
            l.a.createElement(
              r.n,
              null,
              y.map(function(e, t) {
                return l.a.createElement(
                  m,
                  b(
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
      x = ((t.default = l.a.createElement(
        r.g,
        null,
        l.a.createElement(
          r.r,
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
          l.a.createElement(r.a, {
            columns: h,
            hasErrorColumn: !0,
            mainColumnWidth: '8.75rem'
          }),
          l.a.createElement(
            r.n,
            null,
            y.map(function(e, t) {
              return l.a.createElement(
                m,
                b(
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
      )),
      [
        {
          id: 'with-link',
          label: 'Cell focused - Link (Actionable mode)',
          element: l.a.createElement(f, null),
          script: "\n      document.getElementById('link-01').focus()\n    "
        },
        {
          id: 'checkbox',
          label: 'Cell focused - Checkbox (Actionable mode)',
          element: l.a.createElement(
            r.g,
            null,
            l.a.createElement(
              r.r,
              {
                isBordered: !0,
                isEditable: !0,
                isFixedLayout: !0,
                isResizable: !0,
                selectionType: 'multiple',
                style: { width: '66.75rem' },
                type: 'advanced'
              },
              l.a.createElement(r.a, {
                actionableMode: !0,
                columns: h,
                hasErrorColumn: !0,
                mainColumnWidth: '8.75rem'
              }),
              l.a.createElement(
                r.n,
                null,
                y.map(function(e, t) {
                  return l.a.createElement(
                    m,
                    b(
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
          element: l.a.createElement(
            r.g,
            null,
            l.a.createElement(
              r.r,
              {
                isBordered: !0,
                isEditable: !0,
                isFixedLayout: !0,
                isResizable: !0,
                selectionType: 'multiple',
                style: { width: '66.75rem' },
                type: 'advanced'
              },
              l.a.createElement(r.a, {
                columns: h,
                hasErrorColumn: !0,
                mainColumnWidth: '8.75rem'
              }),
              l.a.createElement(
                r.n,
                null,
                y.map(function(e, t) {
                  return l.a.createElement(
                    m,
                    b(
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
          element: l.a.createElement(
            r.g,
            null,
            l.a.createElement(
              r.r,
              {
                isBordered: !0,
                isEditable: !0,
                isFixedLayout: !0,
                isResizable: !0,
                selectionType: 'multiple',
                style: { width: '66.75rem' },
                type: 'advanced'
              },
              l.a.createElement(r.a, {
                actionableMode: !0,
                columns: h,
                hasErrorColumn: !0,
                mainColumnWidth: '8.75rem'
              }),
              l.a.createElement(
                r.n,
                null,
                y.map(function(e, t) {
                  return l.a.createElement(
                    m,
                    b(
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
          element: l.a.createElement(
            r.g,
            null,
            l.a.createElement(
              r.r,
              {
                isBordered: !0,
                isEditable: !0,
                isFixedLayout: !0,
                isResizable: !0,
                selectionType: 'multiple',
                style: { width: '66.75rem' },
                type: 'advanced'
              },
              l.a.createElement(r.a, {
                actionableMode: !0,
                columns: h,
                hasErrorColumn: !0,
                mainColumnWidth: '8.75rem'
              }),
              l.a.createElement(
                r.n,
                null,
                y.map(function(e, t) {
                  return l.a.createElement(
                    m,
                    b(
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
          element: l.a.createElement(
            r.g,
            null,
            l.a.createElement(
              r.r,
              {
                isBordered: !0,
                isEditable: !0,
                isFixedLayout: !0,
                isResizable: !0,
                selectionType: 'multiple',
                style: { width: '66.75rem' },
                type: 'advanced'
              },
              l.a.createElement(r.a, {
                actionableMode: !0,
                columns: h,
                hasErrorColumn: !0,
                mainColumnWidth: '8.75rem'
              }),
              l.a.createElement(
                r.n,
                null,
                y.map(function(e, t) {
                  return l.a.createElement(
                    m,
                    b(
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
          element: l.a.createElement(
            r.g,
            null,
            l.a.createElement(
              r.r,
              {
                isBordered: !0,
                isEditable: !0,
                isFixedLayout: !0,
                isResizable: !0,
                selectionType: 'multiple',
                style: { width: '66.75rem' },
                type: 'advanced'
              },
              l.a.createElement(r.a, {
                actionableMode: !0,
                columns: h,
                hasErrorColumn: !0,
                mainColumnWidth: '8.75rem'
              }),
              l.a.createElement(
                r.n,
                null,
                y.map(function(e, t) {
                  return l.a.createElement(
                    m,
                    b(
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
          element: l.a.createElement(
            r.g,
            null,
            l.a.createElement(
              r.r,
              {
                isBordered: !0,
                isEditable: !0,
                isFixedLayout: !0,
                isResizable: !0,
                selectionType: 'multiple',
                style: { width: '66.75rem' },
                type: 'advanced'
              },
              l.a.createElement(r.a, {
                actionableMode: !0,
                columns: h,
                hasErrorColumn: !0,
                mainColumnWidth: '8.75rem'
              }),
              l.a.createElement(
                r.n,
                null,
                y.map(function(e, t) {
                  return l.a.createElement(
                    m,
                    b(
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
          element: l.a.createElement(
            r.g,
            null,
            l.a.createElement(
              r.r,
              {
                isBordered: !0,
                isEditable: !0,
                isFixedLayout: !0,
                isResizable: !0,
                selectionType: 'multiple',
                style: { width: '66.75rem' },
                type: 'advanced'
              },
              l.a.createElement(r.a, {
                actionableMode: !0,
                columns: h,
                hasErrorColumn: !0,
                mainColumnWidth: '8.75rem'
              }),
              l.a.createElement(
                r.n,
                null,
                y.map(function(e, t) {
                  return l.a.createElement(
                    m,
                    b(
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
          element: l.a.createElement(
            r.g,
            null,
            l.a.createElement(
              r.r,
              {
                isBordered: !0,
                isEditable: !0,
                isFixedLayout: !0,
                isResizable: !0,
                selectionType: 'multiple',
                style: { width: '66.75rem' },
                type: 'advanced'
              },
              l.a.createElement(r.a, {
                actionableMode: !0,
                columns: h,
                hasErrorColumn: !0,
                mainColumnWidth: '8.75rem'
              }),
              l.a.createElement(
                r.n,
                null,
                y.map(function(e, t) {
                  return l.a.createElement(
                    m,
                    b(
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
          element: l.a.createElement(
            s,
            { style: { marginTop: '100px', marginLeft: '10px' } },
            l.a.createElement(
              r.g,
              null,
              l.a.createElement(
                r.r,
                {
                  isBordered: !0,
                  isEditable: !0,
                  isFixedLayout: !0,
                  isResizable: !0,
                  selectionType: 'multiple',
                  style: { width: '66.75rem' },
                  type: 'advanced'
                },
                l.a.createElement(r.a, {
                  actionableMode: !0,
                  columns: h,
                  hasErrorColumn: !0,
                  mainColumnWidth: '8.75rem'
                }),
                l.a.createElement(
                  r.n,
                  null,
                  y.map(function(e, t) {
                    return l.a.createElement(
                      m,
                      b(
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
              l.a.createElement(
                u.Popover,
                {
                  className: 'slds-popover_error slds-nubbin_bottom-left',
                  closeButton: !0,
                  header: l.a.createElement(E.FeedbackHeader, {
                    headingId: p,
                    symbol: 'error',
                    title: 'Resolve error'
                  }),
                  headingId: p,
                  inverse: !0,
                  style: { position: 'absolute', top: '-56px' }
                },
                l.a.createElement('p', null, 'Company encountered an error')
              )
            )
          ),
          script: "\n      document.getElementById('error-01').focus()\n    "
        },
        {
          id: 'header-cell-focused',
          label: 'Header cell focused (Navigation mode)',
          element: l.a.createElement(
            r.g,
            null,
            l.a.createElement(
              r.r,
              {
                isBordered: !0,
                isEditable: !0,
                isFixedLayout: !0,
                isResizable: !0,
                selectionType: 'multiple',
                style: { width: '66.75rem' },
                type: 'advanced'
              },
              l.a.createElement(r.a, {
                columns: h,
                hasErrorColumn: !0,
                hasFocus: !0,
                mainColumnWidth: '8.75rem'
              }),
              l.a.createElement(
                r.n,
                null,
                y.map(function(e, t) {
                  return l.a.createElement(m, {
                    accountName: y[t].accountName,
                    amount: y[t].amount,
                    closeDate: y[t].closeDate,
                    confidence: y[t].confidence,
                    contact: y[t].contact,
                    index: t + 1,
                    isSelected: !1,
                    key: t,
                    recordName: y[t].recordName,
                    stage: y[t].stage
                  });
                })
              )
            )
          )
        },
        {
          id: 'header-cell-marked',
          label: 'Header cell marked (Navigation mode)',
          element: l.a.createElement(
            r.g,
            null,
            l.a.createElement(
              r.r,
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
              l.a.createElement(r.a, {
                columns: h,
                hasErrorColumn: !0,
                hasFocus: !0,
                mainColumnWidth: '8.75rem'
              }),
              l.a.createElement(
                r.n,
                null,
                y.map(function(e, t) {
                  return l.a.createElement(m, {
                    accountName: y[t].accountName,
                    amount: y[t].amount,
                    closeDate: y[t].closeDate,
                    confidence: y[t].confidence,
                    contact: y[t].contact,
                    index: t + 1,
                    isSelected: !1,
                    key: t,
                    recordName: y[t].recordName,
                    stage: y[t].stage
                  });
                })
              )
            )
          )
        }
      ]);
  }
});
