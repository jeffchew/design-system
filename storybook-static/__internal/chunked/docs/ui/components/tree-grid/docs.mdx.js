var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/tree-grid/docs.mdx.js'] = (function(
  e
) {
  function t(t) {
    for (
      var n, s, o = t[0], r = t[1], d = t[2], m = 0, h = [];
      m < o.length;
      m++
    )
      (s = o[m]),
        Object.prototype.hasOwnProperty.call(a, s) && a[s] && h.push(a[s][0]),
        (a[s] = 0);
    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    for (c && c(t); h.length; ) h.shift()();
    return i.push.apply(i, d || []), l();
  }
  function l() {
    for (var e, t = 0; t < i.length; t++) {
      for (var l = i[t], n = !0, o = 1; o < l.length; o++) {
        var r = l[o];
        0 !== a[r] && (n = !1);
      }
      n && (i.splice(t--, 1), (e = s((s.s = l[0]))));
    }
    return e;
  }
  var n = {},
    a = { 79: 0 },
    i = [];
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
  var o = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    r = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var d = 0; d < o.length; d++) t(o[d]);
  var c = r;
  return i.push([229, 0]), l();
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
  229: function(e, t, l) {
    'use strict';
    l.r(t),
      l.d(t, 'getElement', function() {
        return C;
      }),
      l.d(t, 'getContents', function() {
        return _;
      });
    var n = l(0),
      a = l.n(n),
      i = l(4),
      s = l(1),
      o = l(5),
      r = l.n(o),
      d = l(3),
      c = l.n(d),
      m = l(6),
      h = function(e) {
        return a.a.createElement(
          m.r,
          {
            hasHiddenHeader: e.hasHiddenHeader,
            isBordered: e.isBordered,
            isEditable: !0,
            isFixedLayout: e.isFixedLayout,
            isResizable: e.isResizable,
            selectionType: e.selectionType,
            type: 'treegrid'
          },
          e.children
        );
      };
    h.propTypes = {
      children: c.a.node,
      hasHiddenHeader: c.a.bool,
      isBordered: c.a.bool,
      isFixedLayout: c.a.bool,
      isResizable: c.a.bool,
      selectionType: c.a.string
    };
    var p = l(7),
      u = [
        'Account Name',
        'Employees',
        'Phone Number',
        'Account Owner',
        'Billing City'
      ],
      b = ['Account Name'],
      w = 0,
      E = function(e) {
        return a.a.createElement(
          m.o,
          {
            isExpanded: e.isExpanded,
            isSelected: e.isSelected,
            level: e.level,
            positionWithinLevel: e.positionWithinLevel,
            numberOfItemsAtLevel: e.numberOfItemsAtLevel,
            tabIndex: e.isFocusable ? '0' : null
          },
          !e.hasSingleRowSelection &&
            a.a.createElement(
              m.s,
              {
                isRightAligned: !0,
                type: 'advanced',
                style: { width: '3.25rem' }
              },
              a.a.createElement(m.m, { index: w++, checked: e.isSelected })
            ),
          a.a.createElement(
            m.l,
            {
              'data-label': 'Account Name',
              type: 'treegrid',
              isItemHovered: e.isItemHovered
            },
            a.a.createElement(p.b, {
              'aria-hidden': 'true',
              assistiveText: e.isExpanded
                ? 'Expand '.concat(e.name)
                : 'Collapse '.concat(e.name),
              className: r()('slds-button_icon-x-small slds-m-right_x-small', {
                'slds-is-disabled':
                  null === e.isExpanded || void 0 === e.isExpanded
              }),
              iconClassName: 'slds-button__icon_small',
              symbol: 'chevronright',
              tabIndex: '-1',
              title: e.isExpanded
                ? 'Collapse '.concat(e.name)
                : 'Expand '.concat(e.name)
            }),
            a.a.createElement(m.i, {
              cellLink: 'javascript:void(0);',
              cellText: e.name
            })
          ),
          a.a.createElement(
            m.s,
            { 'data-label': 'Employees', type: 'treegrid' },
            a.a.createElement(m.i, { cellText: e.employees })
          ),
          a.a.createElement(
            m.s,
            { 'data-label': 'Phone Number', type: 'treegrid' },
            a.a.createElement(m.i, { cellText: e.phone })
          ),
          a.a.createElement(
            m.s,
            { 'data-label': 'Account Owner', type: 'treegrid' },
            a.a.createElement(m.i, {
              cellLink: 'javascript:void(0);',
              cellText: e.owner
            })
          ),
          a.a.createElement(
            m.s,
            { 'data-label': 'Billing City', type: 'treegrid' },
            a.a.createElement(m.i, { cellText: e.city })
          ),
          a.a.createElement(
            m.s,
            { type: 'treegrid', style: { width: '3.25rem' } },
            a.a.createElement(m.j, { rowName: e.name })
          )
        );
      };
    E.propTypes = {
      city: c.a.string.isRequired,
      employees: c.a.string.isRequired,
      hasSingleRowSelection: c.a.bool,
      isExpanded: c.a.bool,
      isFocusable: c.a.bool,
      isSelected: c.a.bool,
      level: c.a.string.isRequired,
      name: c.a.string.isRequired,
      numberOfItemsAtLevel: c.a.string.isRequired,
      owner: c.a.string.isRequired,
      phone: c.a.string.isRequired,
      positionWithinLevel: c.a.string.isRequired
    };
    var S = function(e) {
      return a.a.createElement(
        m.o,
        {
          isExpanded: e.isExpanded,
          isSelected: e.isSelected,
          level: e.level,
          numberOfItemsAtLevel: e.numberOfItemsAtLevel,
          positionWithinLevel: e.positionWithinLevel,
          tabIndex: e.isFocusable ? '0' : null
        },
        !e.hasSingleRowSelection &&
          a.a.createElement(
            m.s,
            {
              isRightAligned: !0,
              type: 'advanced',
              style: { width: '3.25rem' }
            },
            a.a.createElement(m.m, { index: w++, checked: e.isSelected })
          ),
        a.a.createElement(
          m.l,
          { 'data-label': 'Account Name', type: 'treegrid' },
          a.a.createElement(p.b, {
            'aria-hidden': 'true',
            assistiveText: e.isExpanded
              ? 'Expand '.concat(e.name)
              : 'Collapse '.concat(e.name),
            className: r()(
              'slds-button_icon slds-button_icon-x-small slds-m-right_x-small',
              {
                'slds-is-disabled':
                  null === e.isExpanded || void 0 === e.isExpanded
              }
            ),
            iconClassName: 'slds-button__icon_small',
            symbol: 'chevronright',
            tabIndex: '-1',
            title: e.isExpanded
              ? 'Collapse '.concat(e.name)
              : 'Expand '.concat(e.name)
          }),
          a.a.createElement(m.i, {
            cellLink: 'javascript:void(0);',
            cellText: e.name
          })
        ),
        a.a.createElement(
          m.s,
          { type: 'treegrid', style: { width: '3.25rem' } },
          a.a.createElement(m.j, { rowName: e.name })
        )
      );
    };
    (S.displayName = 'HeadlessRow'),
      (S.propTypes = {
        hasSingleRowSelection: c.a.bool,
        isExpanded: c.a.bool,
        isFocusable: c.a.bool,
        isSelected: c.a.bool,
        level: c.a.string.isRequired,
        name: c.a.string.isRequired,
        numberOfItemsAtLevel: c.a.string.isRequired,
        positionWithinLevel: c.a.string.isRequired
      });
    var v = function(e) {
      return a.a.createElement(
        m.n,
        null,
        a.a.createElement(E, {
          hasSingleRowSelection: e.hasSingleRowSelection,
          city: 'Phoenix, AZ',
          employees: '3,100',
          isFocusable: !0,
          isSelected: !!e.hasSingleRowSelection && null,
          level: '1',
          name: 'Rewis Inc',
          numberOfItemsAtLevel: '4',
          owner: 'Jane Doe',
          phone: '837-555-1212',
          positionWithinLevel: '1'
        }),
        a.a.createElement(E, {
          hasSingleRowSelection: e.hasSingleRowSelection,
          city: 'San Francisco, CA',
          employees: '10,000',
          isExpanded: e.isExpanded,
          isSelected: e.hasSingleRowSelection
            ? e.hasSelectedRow || null
            : e.hasSelectedRow || !1,
          level: '1',
          name: 'Acme Corporation',
          numberOfItemsAtLevel: '4',
          owner: 'John Doe',
          phone: '837-555-1212',
          positionWithinLevel: '2'
        }),
        e.additionalItem,
        a.a.createElement(E, {
          hasSingleRowSelection: e.hasSingleRowSelection,
          city: 'New York, NY',
          employees: '6,000',
          isExpanded: !1,
          isSelected: !!e.hasSingleRowSelection && null,
          level: '1',
          name: 'Rohde Enterprises',
          numberOfItemsAtLevel: '4',
          owner: 'John Doe',
          phone: '837-555-1212',
          positionWithinLevel: '3'
        }),
        a.a.createElement(E, {
          hasSingleRowSelection: e.hasSingleRowSelection,
          city: 'Paris, France',
          employees: '1,234',
          isSelected: !!e.hasSingleRowSelection && null,
          level: '1',
          name: 'Cheese Corp',
          numberOfItemsAtLevel: '4',
          owner: 'Jane Doe',
          phone: '837-555-1212',
          positionWithinLevel: '4'
        })
      );
    };
    (v.displayName = 'DefaultRows'),
      (v.propTypes = {
        additionalItem: c.a.node,
        hasSelectedRow: c.a.bool,
        hasSingleRowSelection: c.a.bool,
        isExpanded: c.a.bool
      });
    var g = function(e) {
        return a.a.createElement(E, {
          city: 'New York, NY',
          employees: '745',
          isSelected: !1,
          level: '2',
          name: 'Acme Corporation (Oakland)',
          numberOfItemsAtLevel: '1',
          owner: 'John Doe',
          phone: '837-555-1212',
          positionWithinLevel: '1'
        });
      },
      y = function(e) {
        return a.a.createElement(
          m.n,
          null,
          a.a.createElement(E, {
            level: '1',
            positionWithinLevel: '1',
            numberOfItemsAtLevel: '4',
            name: 'Rewis Inc',
            employees: '3,100',
            phone: '837-555-1212',
            owner: 'Jane Doe',
            city: 'Phoenix, AZ',
            isFocusable: !0,
            isSelected: !1
          }),
          a.a.createElement(E, {
            isExpanded: !0,
            level: '1',
            positionWithinLevel: '2',
            numberOfItemsAtLevel: '4',
            name: 'Acme Corporation',
            employees: '10,000',
            phone: '837-555-1212',
            owner: 'John Doe',
            city: 'San Francisco, CA',
            isSelected: !1
          }),
          a.a.createElement(E, {
            isExpanded: !0,
            level: '2',
            positionWithinLevel: '1',
            numberOfItemsAtLevel: '2',
            name: 'Acme Corporation (Bay Area)',
            employees: '3,000',
            phone: '837-555-1212',
            owner: 'John Doe',
            city: 'New York, NY',
            isSelected: !1
          }),
          a.a.createElement(E, {
            level: '3',
            positionWithinLevel: '1',
            numberOfItemsAtLevel: '2',
            name: 'Acme Corporation (Oakland)',
            employees: '745',
            phone: '837-555-1212',
            owner: 'John Doe',
            city: 'New York, NY',
            isSelected: !1
          }),
          a.a.createElement(E, {
            level: '3',
            positionWithinLevel: '2',
            numberOfItemsAtLevel: '2',
            name: 'Acme Corporation (San Francisco)',
            employees: '578',
            phone: '837-555-1212',
            owner: 'Jane Doe',
            city: 'Los Angeles, CA',
            isSelected: !1
          }),
          a.a.createElement(E, {
            isExpanded: !0,
            level: '2',
            positionWithinLevel: '2',
            numberOfItemsAtLevel: '2',
            name: 'Acme Corporation (East)',
            employees: '430',
            phone: '837-555-1212',
            owner: 'John Doe',
            city: 'San Francisco, CA',
            isSelected: !1
          }),
          a.a.createElement(E, {
            level: '3',
            positionWithinLevel: '1',
            numberOfItemsAtLevel: '2',
            name: 'Acme Corporation (NY)',
            employees: '1,210',
            phone: '837-555-1212',
            owner: 'Jane Doe',
            city: 'New York, NY',
            isSelected: !1
          }),
          a.a.createElement(E, {
            isExpanded: !0,
            level: '3',
            positionWithinLevel: '2',
            numberOfItemsAtLevel: '2',
            name: 'Acme Corporation (VA)',
            employees: '410',
            phone: '837-555-1212',
            owner: 'John Doe',
            city: 'New York, NY',
            isSelected: !1
          }),
          a.a.createElement(E, {
            isExpanded: !0,
            level: '4',
            positionWithinLevel: '1',
            numberOfItemsAtLevel: '1',
            name: 'Allied Technologies',
            employees: '390',
            phone: '837-555-1212',
            owner: 'Jane Doe',
            city: 'Los Angeles, CA',
            isSelected: !1
          }),
          a.a.createElement(E, {
            level: '5',
            positionWithinLevel: '1',
            numberOfItemsAtLevel: '1',
            name: 'Allied Technologies (UV)',
            employees: '270',
            phone: '837-555-1212',
            owner: 'John Doe',
            city: 'San Francisco, CA',
            isSelected: !1
          }),
          a.a.createElement(E, {
            isExpanded: !0,
            level: '1',
            positionWithinLevel: '3',
            numberOfItemsAtLevel: '4',
            name: 'Rohde Enterprises',
            employees: '6,000',
            phone: '837-555-1212',
            owner: 'John Doe',
            city: 'New York, NY',
            isSelected: !1
          }),
          a.a.createElement(E, {
            level: '2',
            positionWithinLevel: '1',
            numberOfItemsAtLevel: '1',
            name: 'Rohde Enterprises (UCA)',
            employees: '2,540',
            phone: '837-555-1212',
            owner: 'John Doe',
            city: 'New York, NY',
            isSelected: !1
          }),
          a.a.createElement(E, {
            isExpanded: !0,
            level: '1',
            positionWithinLevel: '4',
            numberOfItemsAtLevel: '4',
            name: 'Tech Labs',
            employees: '1,856',
            phone: '837-555-1212',
            owner: 'John Doe',
            city: 'New York, NY',
            isSelected: !1
          }),
          a.a.createElement(E, {
            level: '2',
            positionWithinLevel: '1',
            numberOfItemsAtLevel: '1',
            name: 'Opportunity Resources Inc',
            employees: '1,934',
            phone: '837-555-1212',
            owner: 'John Doe',
            city: 'Los Angeles, CA',
            isSelected: !1
          })
        );
      },
      x = function(e) {
        return a.a.createElement(
          m.n,
          null,
          a.a.createElement(S, {
            hasSingleRowSelection: e.hasSingleRowSelection,
            isFocusable: !0,
            isSelected: !!e.hasSingleRowSelection && null,
            level: '1',
            name: 'Rewis Inc',
            numberOfItemsAtLevel: '4',
            positionWithinLevel: '1'
          }),
          a.a.createElement(S, {
            hasSingleRowSelection: e.hasSingleRowSelection,
            isExpanded: e.isExpanded,
            isSelected: e.hasSingleRowSelection
              ? e.hasSelectedRow || null
              : e.hasSelectedRow || !1,
            level: '1',
            name: 'Acme Corporation',
            numberOfItemsAtLevel: '4',
            positionWithinLevel: '2'
          }),
          a.a.createElement(S, {
            hasSingleRowSelection: e.hasSingleRowSelection,
            isExpanded: !1,
            isSelected: !!e.hasSingleRowSelection && null,
            level: '1',
            name: 'Rohde Enterprises',
            numberOfItemsAtLevel: '4',
            positionWithinLevel: '3'
          }),
          a.a.createElement(S, {
            hasSingleRowSelection: e.hasSingleRowSelection,
            isSelected: !!e.hasSingleRowSelection && null,
            level: '1',
            name: 'Cheese Corp',
            numberOfItemsAtLevel: '4',
            positionWithinLevel: '4'
          })
        );
      };
    (x.displayName = 'HeadlessRows'),
      (x.propTypes = {
        isExpanded: c.a.any,
        hasSelectedRow: c.a.bool,
        hasSingleRowSelection: c.a.bool
      });
    var f = a.a.createElement(
        h,
        {
          isBordered: !0,
          isFixedLayout: !0,
          isResizable: !0,
          selectionType: 'multiple'
        },
        a.a.createElement(m.a, { columns: u, hasMenus: !0 }),
        a.a.createElement(v, { isExpanded: !1 })
      ),
      R = [
        {
          id: 'expanded',
          label: 'Expanded',
          element: a.a.createElement(
            h,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple'
            },
            a.a.createElement(m.a, { columns: u, hasMenus: !0 }),
            a.a.createElement(v, {
              isExpanded: !0,
              additionalItem: a.a.createElement(g, null)
            })
          )
        },
        {
          id: 'selected-row',
          label: 'Selected row',
          element: a.a.createElement(
            h,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple'
            },
            a.a.createElement(m.a, { columns: u, hasMenus: !0 }),
            a.a.createElement(v, {
              isExpanded: !0,
              hasSelectedRow: !0,
              additionalItem: a.a.createElement(g, null)
            })
          )
        },
        {
          id: 'deep-nesting',
          label: 'Deeply nested branches',
          element: a.a.createElement(
            h,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple'
            },
            a.a.createElement(m.a, { columns: u, hasMenus: !0 }),
            a.a.createElement(y, null)
          )
        }
      ],
      L = [
        {
          id: 'treegrid-headless',
          label: 'Headless',
          element: a.a.createElement(
            h,
            { isBordered: !0, selectionType: 'multiple', hasHiddenHeader: !0 },
            a.a.createElement(m.a, {
              columns: b,
              hasSingleRowSelect: !0,
              isHidden: !0
            }),
            a.a.createElement(x, { isExpanded: !1 })
          )
        },
        {
          id: 'treegrid-headless-selected-row',
          label: 'Headless with selected row',
          element: a.a.createElement(
            h,
            { isBordered: !0, selectionType: 'multiple', hasHiddenHeader: !0 },
            a.a.createElement(m.a, {
              columns: b,
              hasSingleRowSelect: !0,
              isHidden: !0
            }),
            a.a.createElement(x, { isExpanded: !1, hasSelectedRow: !0 })
          )
        },
        {
          id: 'treegrid-headless-no-borders',
          label: 'Headless with no borders',
          element: a.a.createElement(
            h,
            { selectionType: 'multiple', hasHiddenHeader: !0 },
            a.a.createElement(m.a, {
              hasSingleRowSelect: !0,
              columns: b,
              isHidden: !0
            }),
            a.a.createElement(x, { isExpanded: !1 })
          )
        },
        {
          id: 'treegrid-headless-no-borders-selected-row',
          label: 'Headless with no borders and a selected row',
          element: a.a.createElement(
            h,
            { selectionType: 'multiple', hasHiddenHeader: !0 },
            a.a.createElement(m.a, {
              hasSingleRowSelect: !0,
              columns: b,
              isHidden: !0
            }),
            a.a.createElement(x, { isExpanded: !1, hasSelectedRow: !0 })
          )
        },
        {
          id: 'treegrid-single-select',
          label: 'Single select',
          element: a.a.createElement(
            h,
            { isBordered: !0, isFixedLayout: !0, isResizable: !0 },
            a.a.createElement(m.a, {
              hasNoRowSelection: !0,
              columns: u,
              hasMenus: !0
            }),
            a.a.createElement(v, { isExpanded: !1, hasSingleRowSelection: !0 })
          )
        },
        {
          id: 'treegrid-single-select-selected-row',
          label: 'Single select with a selected row',
          element: a.a.createElement(
            h,
            { isBordered: !0, isFixedLayout: !0, isResizable: !0 },
            a.a.createElement(m.a, {
              hasNoRowSelection: !0,
              columns: u,
              hasMenus: !0
            }),
            a.a.createElement(v, {
              isExpanded: !1,
              hasSelectedRow: !0,
              hasSingleRowSelection: !0
            })
          )
        },
        {
          id: 'treegrid-single-select-headless',
          label: 'Single select headless',
          element: a.a.createElement(
            h,
            { isBordered: !0, hasHiddenHeader: !0 },
            a.a.createElement(m.a, {
              hasNoRowSelection: !0,
              columns: b,
              isHidden: !0
            }),
            a.a.createElement(x, { isExpanded: !1, hasSingleRowSelection: !0 })
          )
        },
        {
          id: 'treegrid-single-select-headless-selected',
          label: 'Single select headless with selected row',
          element: a.a.createElement(
            h,
            { isBordered: !0, hasHiddenHeader: !0 },
            a.a.createElement(m.a, {
              hasNoRowSelection: !0,
              columns: b,
              isHidden: !0
            }),
            a.a.createElement(x, {
              isExpanded: !1,
              hasSelectedRow: !0,
              hasSingleRowSelection: !0
            })
          )
        },
        {
          id: 'treegrid-single-select-headless-no-borders',
          label: 'Single select headless with no borders',
          element: a.a.createElement(
            h,
            { hasHiddenHeader: !0 },
            a.a.createElement(m.a, {
              hasNoRowSelection: !0,
              columns: b,
              isHidden: !0
            }),
            a.a.createElement(x, { isExpanded: !1, hasSingleRowSelection: !0 })
          )
        },
        {
          id: 'treegrid-single-select-headless-no-borders-with-selected',
          label: 'Single select headless with no borders and a selected row',
          element: a.a.createElement(
            h,
            { hasHiddenHeader: !0 },
            a.a.createElement(m.a, {
              hasNoRowSelection: !0,
              columns: b,
              isHidden: !0
            }),
            a.a.createElement(x, {
              isExpanded: !1,
              hasSelectedRow: !0,
              hasSingleRowSelection: !0
            })
          )
        },
        {
          id: 'item-disabled',
          label: 'Item Disabled',
          element: a.a.createElement(
            h,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple'
            },
            a.a.createElement(m.a, { columns: u, hasMenus: !0 }),
            a.a.createElement(v, { isExpanded: !1 })
          )
        },
        {
          id: 'item-hovered',
          label: 'Item Hovered',
          element: a.a.createElement(
            h,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple'
            },
            a.a.createElement(m.a, { columns: u, hasMenus: !0 }),
            a.a.createElement(
              m.n,
              null,
              a.a.createElement(E, {
                city: 'Phoenix, AZ',
                employees: '3,100',
                isItemHovered: !0,
                isFocusable: !0,
                isExpanded: !1,
                level: '1',
                name: 'Rewis Inc',
                numberOfItemsAtLevel: '4',
                owner: 'Jane Doe',
                phone: '837-555-1212',
                positionWithinLevel: '1'
              }),
              a.a.createElement(E, {
                city: 'San Francisco, CA',
                employees: '10,000',
                isExpanded: !1,
                level: '1',
                name: 'Acme Corporation',
                numberOfItemsAtLevel: '4',
                owner: 'John Doe',
                phone: '837-555-1212',
                positionWithinLevel: '2'
              }),
              a.a.createElement(E, {
                city: 'New York, NY',
                employees: '6,000',
                isExpanded: !1,
                level: '1',
                name: 'Rohde Enterprises',
                numberOfItemsAtLevel: '4',
                owner: 'John Doe',
                phone: '837-555-1212',
                positionWithinLevel: '3'
              })
            )
          )
        }
      ],
      O = l(2),
      A = i.c.a,
      I = i.c.code,
      j = i.c.h2,
      H = i.c.h3,
      N = i.c.h4,
      k = i.c.li,
      D = i.c.p,
      T = i.c.strong,
      W = i.c.ul,
      C = function() {
        return Object(n.createElement)(
          i.b,
          {},
          Object(n.createElement)(
            'div',
            { className: 'doc lead' },
            'A tree is visualization of a structure hierarchy. A branch can be expanded or collapsed.'
          ),
          Object(n.createElement)(
            s.a,
            { exampleOnly: !0, demoStyles: 'height: 12rem;' },
            f
          ),
          j({ id: 'About-Tree-Grid' }, 'About Tree Grid'),
          D(
            {},
            'A tree grid is additional semantics that are laid on top of a grid based component via ARIA attributes, to enable hierarchically structured tabular data.'
          ),
          D(
            {},
            'The tree grid comes with a very specific keyboard interaction model which ',
            T({}, 'must'),
            ' be implemented for the component to be screen reader accessible.'
          ),
          H({ id: 'Accessibility' }, 'Accessibility'),
          N({ id: 'Markup' }, 'Markup'),
          W(
            {},
            k(
              {},
              I({}, 'role="treegrid"'),
              ' should be applied to the ',
              I({}, 'table'),
              ' element'
            ),
            k(
              {},
              I({}, 'aria-readonly="true"'),
              ' should be applied to the ',
              I({}, 'table'),
              ' element'
            ),
            k(
              {},
              I({}, 'aria-level="n"'),
              ' where ',
              I({}, 'n'),
              ' represents the nesting level of a particular grid row, should be applied to the ',
              I({}, 'tr'),
              ' element'
            ),
            k(
              {},
              I({}, 'aria-setsize="n"'),
              ' where ',
              I({}, 'n'),
              ' is the number of items for that specific ',
              I({}, 'aria-level'),
              ' should be applied to the ',
              I({}, 'tr'),
              ' element'
            ),
            k(
              {},
              I({}, 'aria-posinset="n"'),
              ' where ',
              I({}, 'n'),
              ' represents the position in the ',
              I({}, 'aria-level'),
              ' set the row is placed at, should be applied to the ',
              I({}, 'tr'),
              ' element'
            ),
            k(
              {},
              I({}, 'aria-expanded="false"'),
              ' should be placed on rows that are collapsed and have child rows'
            ),
            k(
              {},
              I({}, 'aria-expanded="true"'),
              ' should be placed on rows that are expanded and have child rows'
            ),
            k(
              {},
              I({}, 'tabindex="0"'),
              ' should be placed on the first ',
              I({}, 'tr'),
              ' in the grid on load, to make the row focusable'
            ),
            k(
              {},
              'Every actionable element in the grid should have ',
              I({}, 'tabindex="-1"'),
              ' applied to make them not focusable in the grids navigation mode'
            )
          ),
          D({}, T({}, 'Multi select tree grid:')),
          W(
            {},
            k(
              {},
              I({}, 'aria-multiselectable="true"'),
              ' should be placed on the ',
              I({}, 'table'),
              ' element'
            ),
            k(
              {},
              I({}, 'aria-selected="false"'),
              ' should be set by default on all ',
              I({}, 'tr'),
              " elements that aren't selected"
            ),
            k(
              {},
              I({}, 'aria-selected="true"'),
              ' should be set only on the ',
              I({}, 'tr'),
              ' elements that are selected'
            )
          ),
          D({}, T({}, 'Single Select tree grid:')),
          W(
            {},
            k(
              {},
              I({}, 'aria-selected="true"'),
              ' should be applied to the ',
              I({}, 'tr'),
              ' that is selected in the tree grid'
            )
          ),
          N({ id: 'Keyboard-Interactions' }, 'Keyboard Interactions'),
          W(
            {},
            k(
              {},
              'Overall keyboard interaction should follow the same keyboard modal as the ',
              A(
                { href: '/components/data-tables' },
                'Advanced and Inline Edit Data Table'
              ),
              ' with some additions',
              W(
                {},
                k(
                  {},
                  'Navigation mode is the default mode. The grid only has a single focusable element at any time and it is either the ',
                  I({}, 'tr'),
                  ' or the ',
                  I({}, 'td')
                ),
                k(
                  {},
                  'Actionable mode is enabled when the user presses the ',
                  I({}, 'Enter'),
                  ' key, where actionable elements become focusable in the cell'
                ),
                k(
                  {},
                  'Actionable mode is exited when the user presses the ',
                  I({}, 'Escape'),
                  ' key, and the user is placed back into Navigation Mode on the last cell they were in'
                )
              )
            ),
            k(
              {},
              'User focus is initially placed on the first row in the tree grid'
            ),
            k(
              {},
              I({}, 'Down'),
              ' arrow key moves the user down one row and moves ',
              I({}, 'tabindex="0"'),
              ' with it'
            ),
            k(
              {},
              I({}, 'Up'),
              ' arrow key moves the user up one row and moves ',
              I({}, 'tabindex="0"'),
              ' with it'
            ),
            k(
              {},
              I({}, 'Space'),
              ' key when focused on a row should select that row by setting ',
              I({}, 'aria-selected="true'),
              ' on the ',
              I({}, 'tr'),
              ' element'
            ),
            k(
              {},
              I({}, 'Right'),
              ' arrow key on a collapsed row, will expand it and update ',
              I({}, 'aria-expanded')
            ),
            k(
              {},
              I({}, 'Right'),
              ' arrow key on an expanded or end row will move the user to the first cell in the row and move ',
              I({}, 'tabindex="0"'),
              ' with it'
            ),
            k(
              {},
              I({}, 'Right'),
              ' arrow key on a cell will move the user to the next cell in the row and move ',
              I({}, 'tabindex="0"'),
              ' with it'
            ),
            k(
              {},
              I({}, 'Left'),
              " arrow key on a collapsed or end row will move the user to it's parent row and collapse it, if it has one"
            ),
            k(
              {},
              I({}, 'Left'),
              ' arrow key on an expanded row will collapse it and update ',
              I({}, 'aria-expanded')
            ),
            k(
              {},
              I({}, 'Left'),
              ' arrow key on a cell will move the user to the previous cell in the row and moves ',
              I({}, 'tabindex="0"'),
              ' with it'
            ),
            k(
              {},
              I({}, 'Left'),
              ' arrow key on the first cell of a row will move the user back to the row  and moves ',
              I({}, 'tabindex="0"'),
              ' with it'
            )
          ),
          j({ id: 'Base' }, 'Base'),
          Object(n.createElement)(s.a, null, f),
          H({ id: 'States' }, 'States'),
          N({ id: 'Expanded' }, 'Expanded'),
          Object(n.createElement)(s.a, null, Object(O.e)(R, 'expanded')),
          N({ id: 'Selected-row' }, 'Selected row'),
          Object(n.createElement)(s.a, null, Object(O.e)(R, 'selected-row')),
          N({ id: 'Deeply-nested-branches' }, 'Deeply nested branches'),
          Object(n.createElement)(s.a, null, Object(O.e)(R, 'deep-nesting')),
          j({ id: 'Examples' }, 'Examples'),
          H({ id: 'Headless' }, 'Headless'),
          Object(n.createElement)(
            s.a,
            null,
            Object(O.e)(L, 'treegrid-headless')
          ),
          H({ id: 'Headless-with-selected-row' }, 'Headless with selected row'),
          Object(n.createElement)(
            s.a,
            null,
            Object(O.e)(L, 'treegrid-headless-selected-row')
          ),
          H({ id: 'Headless-with-no-borders' }, 'Headless with no borders'),
          Object(n.createElement)(
            s.a,
            null,
            Object(O.e)(L, 'treegrid-headless-no-borders')
          ),
          H(
            { id: 'Headless-with-no-borders-and-a-selected-row' },
            'Headless with no borders and a selected row'
          ),
          Object(n.createElement)(
            s.a,
            null,
            Object(O.e)(L, 'treegrid-headless-no-borders-selected-row')
          ),
          H({ id: 'Single-select' }, 'Single select'),
          Object(n.createElement)(
            s.a,
            null,
            Object(O.e)(L, 'treegrid-single-select')
          ),
          H(
            { id: 'Single-select-with-a-selected-row' },
            'Single select with a selected row'
          ),
          Object(n.createElement)(
            s.a,
            null,
            Object(O.e)(L, 'treegrid-single-select-selected-row')
          ),
          H({ id: 'Single-select-headless' }, 'Single select headless'),
          Object(n.createElement)(
            s.a,
            null,
            Object(O.e)(L, 'treegrid-single-select-headless')
          ),
          H(
            { id: 'Single-select-headless-with-selected-row' },
            'Single select headless with selected row'
          ),
          Object(n.createElement)(
            s.a,
            null,
            Object(O.e)(L, 'treegrid-single-select-headless-selected')
          ),
          H(
            { id: 'Single-select-headless-with-no-borders' },
            'Single select headless with no borders'
          ),
          Object(n.createElement)(
            s.a,
            null,
            Object(O.e)(L, 'treegrid-single-select-headless-no-borders')
          ),
          H(
            { id: 'Single-select-headless-with-no-borders-and-a-selected-row' },
            'Single select headless with no borders and a selected row'
          ),
          Object(n.createElement)(
            s.a,
            null,
            Object(O.e)(
              L,
              'treegrid-single-select-headless-no-borders-with-selected'
            )
          ),
          j({ id: 'Modifiers' }, 'Modifiers'),
          H({ id: 'Interaction' }, 'Interaction'),
          N({ id: 'Item-Disabled' }, 'Item Disabled'),
          D(
            {},
            "When a branch doesn't have children, apply ",
            I({}, 'slds-is-disabled'),
            ' to the corresponding ',
            I({}, 'slds-button_icon'),
            ' element.'
          ),
          Object(n.createElement)(s.a, null, Object(O.e)(L, 'item-disabled')),
          N({ id: 'Item-Hovered' }, 'Item Hovered'),
          D(
            {},
            'When a tree item is hovered, apply ',
            I({}, 'slds-is-hovered'),
            ' to ',
            I({}, 'slds-tree__item'),
            ' element`.'
          ),
          Object(n.createElement)(s.a, null, Object(O.e)(L, 'item-hovered'))
        );
      },
      _ = function() {
        return Object(i.a)(C());
      };
  }
});
