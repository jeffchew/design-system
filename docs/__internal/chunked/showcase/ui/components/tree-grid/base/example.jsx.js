var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/tree-grid/base/example.jsx.js'
] = (function(e) {
  function n(n) {
    for (
      var l, s, o = n[0], r = n[1], d = n[2], m = 0, p = [];
      m < o.length;
      m++
    )
      (s = o[m]),
        Object.prototype.hasOwnProperty.call(i, s) && i[s] && p.push(i[s][0]),
        (i[s] = 0);
    for (l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l]);
    for (c && c(n); p.length; ) p.shift()();
    return a.push.apply(a, d || []), t();
  }
  function t() {
    for (var e, n = 0; n < a.length; n++) {
      for (var t = a[n], l = !0, o = 1; o < t.length; o++) {
        var r = t[o];
        0 !== i[r] && (l = !1);
      }
      l && (a.splice(n--, 1), (e = s((s.s = t[0]))));
    }
    return e;
  }
  var l = {},
    i = {
      151: 0,
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
    a = [];
  function s(n) {
    if (l[n]) return l[n].exports;
    var t = (l[n] = { i: n, l: !1, exports: {} });
    return e[n].call(t.exports, t, t.exports, s), (t.l = !0), t.exports;
  }
  (s.m = e),
    (s.c = l),
    (s.d = function(e, n, t) {
      s.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (s.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (s.t = function(e, n) {
      if ((1 & n && (e = s(e)), 8 & n)) return e;
      if (4 & n && 'object' == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (s.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
        2 & n && 'string' != typeof e)
      )
        for (var l in e)
          s.d(
            t,
            l,
            function(n) {
              return e[n];
            }.bind(null, l)
          );
      return t;
    }),
    (s.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return s.d(n, 'a', n), n;
    }),
    (s.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (s.p = '/assets/scripts/bundle/');
  var o = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    r = o.push.bind(o);
  (o.push = n), (o = o.slice());
  for (var d = 0; d < o.length; d++) n(o[d]);
  var c = r;
  return a.push([248, 0]), t();
})({
  0: function(e, n) {
    e.exports = React;
  },
  16: function(e, n) {
    e.exports = ReactDOM;
  },
  248: function(e, n, t) {
    'use strict';
    t.r(n),
      t.d(n, 'Row', function() {
        return E;
      }),
      t.d(n, 'HeadlessRow', function() {
        return S;
      }),
      t.d(n, 'DefaultRows', function() {
        return b;
      }),
      t.d(n, 'ExpandedRow', function() {
        return w;
      }),
      t.d(n, 'DeepNestingRows', function() {
        return v;
      }),
      t.d(n, 'HeadlessRows', function() {
        return y;
      }),
      t.d(n, 'states', function() {
        return g;
      }),
      t.d(n, 'examples', function() {
        return R;
      });
    var l = t(0),
      i = t.n(l),
      a = t(2),
      s = t.n(a),
      o = t(1),
      r = t.n(o),
      d = t(3),
      c = function(e) {
        return i.a.createElement(
          d.r,
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
    c.propTypes = {
      children: r.a.node,
      hasHiddenHeader: r.a.bool,
      isBordered: r.a.bool,
      isFixedLayout: r.a.bool,
      isResizable: r.a.bool,
      selectionType: r.a.string
    };
    var m = t(4),
      p = [
        'Account Name',
        'Employees',
        'Phone Number',
        'Account Owner',
        'Billing City'
      ],
      h = ['Account Name'],
      u = 0,
      E = function(e) {
        return i.a.createElement(
          d.o,
          {
            isExpanded: e.isExpanded,
            isSelected: e.isSelected,
            level: e.level,
            positionWithinLevel: e.positionWithinLevel,
            numberOfItemsAtLevel: e.numberOfItemsAtLevel,
            tabIndex: e.isFocusable ? '0' : null
          },
          !e.hasSingleRowSelection &&
            i.a.createElement(
              d.s,
              {
                isRightAligned: !0,
                type: 'advanced',
                style: { width: '3.25rem' }
              },
              i.a.createElement(d.m, { index: u++, checked: e.isSelected })
            ),
          i.a.createElement(
            d.l,
            {
              'data-label': 'Account Name',
              type: 'treegrid',
              isItemHovered: e.isItemHovered
            },
            i.a.createElement(m.b, {
              'aria-hidden': 'true',
              assistiveText: e.isExpanded
                ? 'Expand '.concat(e.name)
                : 'Collapse '.concat(e.name),
              className: s()('slds-button_icon-x-small slds-m-right_x-small', {
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
            i.a.createElement(d.i, {
              cellLink: 'javascript:void(0);',
              cellText: e.name
            })
          ),
          i.a.createElement(
            d.s,
            { 'data-label': 'Employees', type: 'treegrid' },
            i.a.createElement(d.i, { cellText: e.employees })
          ),
          i.a.createElement(
            d.s,
            { 'data-label': 'Phone Number', type: 'treegrid' },
            i.a.createElement(d.i, { cellText: e.phone })
          ),
          i.a.createElement(
            d.s,
            { 'data-label': 'Account Owner', type: 'treegrid' },
            i.a.createElement(d.i, {
              cellLink: 'javascript:void(0);',
              cellText: e.owner
            })
          ),
          i.a.createElement(
            d.s,
            { 'data-label': 'Billing City', type: 'treegrid' },
            i.a.createElement(d.i, { cellText: e.city })
          ),
          i.a.createElement(
            d.s,
            { type: 'treegrid', style: { width: '3.25rem' } },
            i.a.createElement(d.j, { rowName: e.name })
          )
        );
      };
    E.propTypes = {
      city: r.a.string.isRequired,
      employees: r.a.string.isRequired,
      hasSingleRowSelection: r.a.bool,
      isExpanded: r.a.bool,
      isFocusable: r.a.bool,
      isSelected: r.a.bool,
      level: r.a.string.isRequired,
      name: r.a.string.isRequired,
      numberOfItemsAtLevel: r.a.string.isRequired,
      owner: r.a.string.isRequired,
      phone: r.a.string.isRequired,
      positionWithinLevel: r.a.string.isRequired
    };
    var S = function(e) {
      return i.a.createElement(
        d.o,
        {
          isExpanded: e.isExpanded,
          isSelected: e.isSelected,
          level: e.level,
          numberOfItemsAtLevel: e.numberOfItemsAtLevel,
          positionWithinLevel: e.positionWithinLevel,
          tabIndex: e.isFocusable ? '0' : null
        },
        !e.hasSingleRowSelection &&
          i.a.createElement(
            d.s,
            {
              isRightAligned: !0,
              type: 'advanced',
              style: { width: '3.25rem' }
            },
            i.a.createElement(d.m, { index: u++, checked: e.isSelected })
          ),
        i.a.createElement(
          d.l,
          { 'data-label': 'Account Name', type: 'treegrid' },
          i.a.createElement(m.b, {
            'aria-hidden': 'true',
            assistiveText: e.isExpanded
              ? 'Expand '.concat(e.name)
              : 'Collapse '.concat(e.name),
            className: s()(
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
          i.a.createElement(d.i, {
            cellLink: 'javascript:void(0);',
            cellText: e.name
          })
        ),
        i.a.createElement(
          d.s,
          { type: 'treegrid', style: { width: '3.25rem' } },
          i.a.createElement(d.j, { rowName: e.name })
        )
      );
    };
    (S.displayName = 'HeadlessRow'),
      (S.propTypes = {
        hasSingleRowSelection: r.a.bool,
        isExpanded: r.a.bool,
        isFocusable: r.a.bool,
        isSelected: r.a.bool,
        level: r.a.string.isRequired,
        name: r.a.string.isRequired,
        numberOfItemsAtLevel: r.a.string.isRequired,
        positionWithinLevel: r.a.string.isRequired
      });
    var b = function(e) {
      return i.a.createElement(
        d.n,
        null,
        i.a.createElement(E, {
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
        i.a.createElement(E, {
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
        i.a.createElement(E, {
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
        i.a.createElement(E, {
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
    (b.displayName = 'DefaultRows'),
      (b.propTypes = {
        additionalItem: r.a.node,
        hasSelectedRow: r.a.bool,
        hasSingleRowSelection: r.a.bool,
        isExpanded: r.a.bool
      });
    var w = function(e) {
        return i.a.createElement(E, {
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
      v = function(e) {
        return i.a.createElement(
          d.n,
          null,
          i.a.createElement(E, {
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
          i.a.createElement(E, {
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
          i.a.createElement(E, {
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
          i.a.createElement(E, {
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
          i.a.createElement(E, {
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
          i.a.createElement(E, {
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
          i.a.createElement(E, {
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
          i.a.createElement(E, {
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
          i.a.createElement(E, {
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
          i.a.createElement(E, {
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
          i.a.createElement(E, {
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
          i.a.createElement(E, {
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
          i.a.createElement(E, {
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
          i.a.createElement(E, {
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
      y = function(e) {
        return i.a.createElement(
          d.n,
          null,
          i.a.createElement(S, {
            hasSingleRowSelection: e.hasSingleRowSelection,
            isFocusable: !0,
            isSelected: !!e.hasSingleRowSelection && null,
            level: '1',
            name: 'Rewis Inc',
            numberOfItemsAtLevel: '4',
            positionWithinLevel: '1'
          }),
          i.a.createElement(S, {
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
          i.a.createElement(S, {
            hasSingleRowSelection: e.hasSingleRowSelection,
            isExpanded: !1,
            isSelected: !!e.hasSingleRowSelection && null,
            level: '1',
            name: 'Rohde Enterprises',
            numberOfItemsAtLevel: '4',
            positionWithinLevel: '3'
          }),
          i.a.createElement(S, {
            hasSingleRowSelection: e.hasSingleRowSelection,
            isSelected: !!e.hasSingleRowSelection && null,
            level: '1',
            name: 'Cheese Corp',
            numberOfItemsAtLevel: '4',
            positionWithinLevel: '4'
          })
        );
      };
    (y.displayName = 'HeadlessRows'),
      (y.propTypes = {
        isExpanded: r.a.any,
        hasSelectedRow: r.a.bool,
        hasSingleRowSelection: r.a.bool
      });
    n.default = i.a.createElement(
      c,
      {
        isBordered: !0,
        isFixedLayout: !0,
        isResizable: !0,
        selectionType: 'multiple'
      },
      i.a.createElement(d.a, { columns: p, hasMenus: !0 }),
      i.a.createElement(b, { isExpanded: !1 })
    );
    var g = [
        {
          id: 'expanded',
          label: 'Expanded',
          element: i.a.createElement(
            c,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple'
            },
            i.a.createElement(d.a, { columns: p, hasMenus: !0 }),
            i.a.createElement(b, {
              isExpanded: !0,
              additionalItem: i.a.createElement(w, null)
            })
          )
        },
        {
          id: 'selected-row',
          label: 'Selected row',
          element: i.a.createElement(
            c,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple'
            },
            i.a.createElement(d.a, { columns: p, hasMenus: !0 }),
            i.a.createElement(b, {
              isExpanded: !0,
              hasSelectedRow: !0,
              additionalItem: i.a.createElement(w, null)
            })
          )
        },
        {
          id: 'deep-nesting',
          label: 'Deeply nested branches',
          element: i.a.createElement(
            c,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple'
            },
            i.a.createElement(d.a, { columns: p, hasMenus: !0 }),
            i.a.createElement(v, null)
          )
        }
      ],
      R = [
        {
          id: 'treegrid-headless',
          label: 'Headless',
          element: i.a.createElement(
            c,
            { isBordered: !0, selectionType: 'multiple', hasHiddenHeader: !0 },
            i.a.createElement(d.a, {
              columns: h,
              hasSingleRowSelect: !0,
              isHidden: !0
            }),
            i.a.createElement(y, { isExpanded: !1 })
          )
        },
        {
          id: 'treegrid-headless-selected-row',
          label: 'Headless with selected row',
          element: i.a.createElement(
            c,
            { isBordered: !0, selectionType: 'multiple', hasHiddenHeader: !0 },
            i.a.createElement(d.a, {
              columns: h,
              hasSingleRowSelect: !0,
              isHidden: !0
            }),
            i.a.createElement(y, { isExpanded: !1, hasSelectedRow: !0 })
          )
        },
        {
          id: 'treegrid-headless-no-borders',
          label: 'Headless with no borders',
          element: i.a.createElement(
            c,
            { selectionType: 'multiple', hasHiddenHeader: !0 },
            i.a.createElement(d.a, {
              hasSingleRowSelect: !0,
              columns: h,
              isHidden: !0
            }),
            i.a.createElement(y, { isExpanded: !1 })
          )
        },
        {
          id: 'treegrid-headless-no-borders-selected-row',
          label: 'Headless with no borders and a selected row',
          element: i.a.createElement(
            c,
            { selectionType: 'multiple', hasHiddenHeader: !0 },
            i.a.createElement(d.a, {
              hasSingleRowSelect: !0,
              columns: h,
              isHidden: !0
            }),
            i.a.createElement(y, { isExpanded: !1, hasSelectedRow: !0 })
          )
        },
        {
          id: 'treegrid-single-select',
          label: 'Single select',
          element: i.a.createElement(
            c,
            { isBordered: !0, isFixedLayout: !0, isResizable: !0 },
            i.a.createElement(d.a, {
              hasNoRowSelection: !0,
              columns: p,
              hasMenus: !0
            }),
            i.a.createElement(b, { isExpanded: !1, hasSingleRowSelection: !0 })
          )
        },
        {
          id: 'treegrid-single-select-selected-row',
          label: 'Single select with a selected row',
          element: i.a.createElement(
            c,
            { isBordered: !0, isFixedLayout: !0, isResizable: !0 },
            i.a.createElement(d.a, {
              hasNoRowSelection: !0,
              columns: p,
              hasMenus: !0
            }),
            i.a.createElement(b, {
              isExpanded: !1,
              hasSelectedRow: !0,
              hasSingleRowSelection: !0
            })
          )
        },
        {
          id: 'treegrid-single-select-headless',
          label: 'Single select headless',
          element: i.a.createElement(
            c,
            { isBordered: !0, hasHiddenHeader: !0 },
            i.a.createElement(d.a, {
              hasNoRowSelection: !0,
              columns: h,
              isHidden: !0
            }),
            i.a.createElement(y, { isExpanded: !1, hasSingleRowSelection: !0 })
          )
        },
        {
          id: 'treegrid-single-select-headless-selected',
          label: 'Single select headless with selected row',
          element: i.a.createElement(
            c,
            { isBordered: !0, hasHiddenHeader: !0 },
            i.a.createElement(d.a, {
              hasNoRowSelection: !0,
              columns: h,
              isHidden: !0
            }),
            i.a.createElement(y, {
              isExpanded: !1,
              hasSelectedRow: !0,
              hasSingleRowSelection: !0
            })
          )
        },
        {
          id: 'treegrid-single-select-headless-no-borders',
          label: 'Single select headless with no borders',
          element: i.a.createElement(
            c,
            { hasHiddenHeader: !0 },
            i.a.createElement(d.a, {
              hasNoRowSelection: !0,
              columns: h,
              isHidden: !0
            }),
            i.a.createElement(y, { isExpanded: !1, hasSingleRowSelection: !0 })
          )
        },
        {
          id: 'treegrid-single-select-headless-no-borders-with-selected',
          label: 'Single select headless with no borders and a selected row',
          element: i.a.createElement(
            c,
            { hasHiddenHeader: !0 },
            i.a.createElement(d.a, {
              hasNoRowSelection: !0,
              columns: h,
              isHidden: !0
            }),
            i.a.createElement(y, {
              isExpanded: !1,
              hasSelectedRow: !0,
              hasSingleRowSelection: !0
            })
          )
        },
        {
          id: 'item-disabled',
          label: 'Item Disabled',
          element: i.a.createElement(
            c,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple'
            },
            i.a.createElement(d.a, { columns: p, hasMenus: !0 }),
            i.a.createElement(b, { isExpanded: !1 })
          )
        },
        {
          id: 'item-hovered',
          label: 'Item Hovered',
          element: i.a.createElement(
            c,
            {
              isBordered: !0,
              isFixedLayout: !0,
              isResizable: !0,
              selectionType: 'multiple'
            },
            i.a.createElement(d.a, { columns: p, hasMenus: !0 }),
            i.a.createElement(
              d.n,
              null,
              i.a.createElement(E, {
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
              i.a.createElement(E, {
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
              i.a.createElement(E, {
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
      ];
  }
});
