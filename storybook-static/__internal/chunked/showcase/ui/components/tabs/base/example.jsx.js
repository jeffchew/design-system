var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/tabs/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, s, c = t[0], m = t[1], o = t[2], d = 0, u = [];
      d < c.length;
      d++
    )
      (s = c[d]),
        Object.prototype.hasOwnProperty.call(l, s) && l[s] && u.push(l[s][0]),
        (l[s] = 0);
    for (n in m) Object.prototype.hasOwnProperty.call(m, n) && (e[n] = m[n]);
    for (i && i(t); u.length; ) u.shift()();
    return r.push.apply(r, o || []), a();
  }
  function a() {
    for (var e, t = 0; t < r.length; t++) {
      for (var a = r[t], n = !0, c = 1; c < a.length; c++) {
        var m = a[c];
        0 !== l[m] && (n = !1);
      }
      n && (r.splice(t--, 1), (e = s((s.s = a[0]))));
    }
    return e;
  }
  var n = {},
    l = {
      143: 0,
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
    r = [];
  function s(t) {
    if (n[t]) return n[t].exports;
    var a = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, s), (a.l = !0), a.exports;
  }
  (s.m = e),
    (s.c = n),
    (s.d = function(e, t, a) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
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
      var a = Object.create(null);
      if (
        (s.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          s.d(
            a,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return a;
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
  var c = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    m = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var o = 0; o < c.length; o++) t(c[o]);
  var i = m;
  return r.push([126, 0]), a();
})({
  0: function(e, t) {
    e.exports = React;
  },
  126: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'TabsDefault', function() {
        return f;
      }),
      a.d(t, 'TabsWithNestedScopedTabs', function() {
        return b;
      }),
      a.d(t, 'TabsOverflow', function() {
        return I;
      }),
      a.d(t, 'TabsOverflowIcons', function() {
        return h;
      }),
      a.d(t, 'TabsWithCards', function() {
        return T;
      }),
      a.d(t, 'TabsWithError', function() {
        return _;
      }),
      a.d(t, 'TabsMedium', function() {
        return w;
      }),
      a.d(t, 'TabsLarge', function() {
        return y;
      }),
      a.d(t, 'states', function() {
        return C;
      }),
      a.d(t, 'examples', function() {
        return N;
      });
    var n = a(0),
      l = a.n(n),
      r = a(1),
      s = a.n(r),
      c = a(23),
      m = a(22),
      o = a(9),
      i = a(71),
      d = a(14),
      u = a(99),
      E = a(11),
      f = function(e) {
        return l.a.createElement(
          c.a,
          { selectedIndex: e.selectedIndex },
          l.a.createElement(
            c.a.Item,
            { title: 'Item One', id: 'tab-default-1' },
            e.itemOneContent
          ),
          l.a.createElement(
            c.a.Item,
            { title: 'Item Two', id: 'tab-default-2' },
            'Item Two Content'
          ),
          l.a.createElement(
            c.a.Item,
            { title: 'Item Three', id: 'tab-default-3' },
            'Item Three Content'
          )
        );
      };
    (f.propTypes = { selectedIndex: s.a.number, itemOneContent: s.a.node }),
      (f.defaultProps = {
        selectedIndex: 0,
        itemOneContent: 'Item One Content'
      });
    var b = function() {
        return l.a.createElement(f, {
          itemOneContent: l.a.createElement(u.TabsScoped, null)
        });
      },
      I = function() {
        return l.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '12rem' } },
          l.a.createElement(
            c.a,
            null,
            l.a.createElement(
              c.a.Item,
              { title: 'Item One', id: 'tab-default-1' },
              l.a.createElement('h2', null, 'Item One Content')
            ),
            l.a.createElement(
              c.a.Item,
              { title: 'Item Two', id: 'tab-default-2' },
              l.a.createElement('h2', null, 'Item Two Content')
            ),
            l.a.createElement(
              c.a.Item,
              { title: 'Item Three', id: 'tab-default-3' },
              l.a.createElement('h2', null, 'Item Three Content')
            ),
            l.a.createElement(
              c.a.Item,
              { title: 'Item Four', id: 'tab-default-4' },
              l.a.createElement('h2', null, 'Item Four Content')
            ),
            l.a.createElement(
              c.a.Item,
              { title: 'Item Five', id: 'tab-default-5' },
              l.a.createElement('h2', null, 'Item Five Content')
            ),
            l.a.createElement(
              c.a.ItemOverflow,
              { title: 'More Tabs', id: 'tab-default-8' },
              l.a.createElement(
                i.a,
                { label: 'More', type: 'tabs', flavor: 'default', isOpen: !0 },
                l.a.createElement(p, null)
              )
            )
          )
        );
      },
      h = function() {
        return l.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '12rem' } },
          l.a.createElement(
            c.a,
            null,
            l.a.createElement(
              c.a.Item,
              {
                title: 'Opportunities',
                leftIcon: l.a.createElement(m.StandardIcon, {
                  className: 'slds-icon_small',
                  symbol: 'opportunity',
                  title: 'Opportunities',
                  assistiveText: !1
                }),
                id: 'tab-default-1'
              },
              l.a.createElement('h2', null, 'Item One Content')
            ),
            l.a.createElement(
              c.a.Item,
              {
                title: 'Cases',
                leftIcon: l.a.createElement(m.StandardIcon, {
                  className: 'slds-icon_small',
                  title: 'Cases',
                  symbol: 'case',
                  assistiveText: !1
                }),
                id: 'tab-default-2'
              },
              l.a.createElement('h2', null, 'Item Two Content')
            ),
            l.a.createElement(
              c.a.Item,
              {
                title: 'Products',
                leftIcon: l.a.createElement(m.StandardIcon, {
                  className: 'slds-icon_small',
                  title: 'Products',
                  symbol: 'product',
                  assistiveText: !1
                }),
                id: 'tab-default-3'
              },
              l.a.createElement('h2', null, 'Item Three Content')
            ),
            l.a.createElement(
              c.a.Item,
              {
                title: 'Price Books',
                leftIcon: l.a.createElement(m.StandardIcon, {
                  className: 'slds-icon_small',
                  title: 'Price Books',
                  symbol: 'pricebook',
                  assistiveText: !1
                }),
                id: 'tab-default-4'
              },
              l.a.createElement('h2', null, 'Item Four Content')
            ),
            l.a.createElement(
              c.a.Item,
              {
                title: 'Contacts',
                leftIcon: l.a.createElement(m.StandardIcon, {
                  className: 'slds-icon_small',
                  title: 'Contacts',
                  symbol: 'contact',
                  assistiveText: !1
                }),
                id: 'tab-default-5'
              },
              l.a.createElement('h2', null, 'Item Five Content')
            ),
            l.a.createElement(
              c.a.ItemOverflow,
              { title: 'More Tabs', id: 'tab-default-8' },
              l.a.createElement(
                i.a,
                { label: 'More', type: 'tabs', flavor: 'default', isOpen: !0 },
                l.a.createElement(v, null)
              )
            )
          )
        );
      },
      p = function() {
        return l.a.createElement(
          d.Menu,
          { className: 'slds-dropdown_right' },
          l.a.createElement(
            d.MenuList,
            { className: 'slds-dropdown_length-with-icon-10' },
            l.a.createElement(d.MenuItem, { title: 'Accounts' }, 'Accounts'),
            l.a.createElement(d.MenuItem, { title: 'Approvals' }, 'Approvals'),
            l.a.createElement(d.MenuItem, { title: 'Lead' }, 'Leads')
          )
        );
      },
      v = function() {
        return l.a.createElement(
          d.Menu,
          { className: 'slds-dropdown_right' },
          l.a.createElement(
            d.MenuList,
            { className: 'slds-dropdown_length-with-icon-10' },
            l.a.createElement(
              d.MenuItem,
              { title: 'Accounts' },
              l.a.createElement(
                'span',
                { className: 'slds-media slds-media_center' },
                l.a.createElement(
                  'span',
                  { className: 'slds-media__figure' },
                  l.a.createElement(m.StandardIcon, {
                    className: 'slds-icon_small',
                    symbol: 'account',
                    assistiveText: !1
                  })
                ),
                l.a.createElement(
                  'span',
                  { className: 'slds-media__body' },
                  'Accounts'
                )
              )
            ),
            l.a.createElement(
              d.MenuItem,
              { title: 'Approvals' },
              l.a.createElement(
                'span',
                { className: 'slds-media slds-media_center' },
                l.a.createElement(
                  'span',
                  { className: 'slds-media__figure' },
                  l.a.createElement(m.StandardIcon, {
                    className: 'slds-icon_small',
                    symbol: 'approval',
                    assistiveText: !1
                  })
                ),
                l.a.createElement(
                  'span',
                  { className: 'slds-media__body' },
                  'Approvals'
                )
              )
            ),
            l.a.createElement(
              d.MenuItem,
              { title: 'Lead' },
              l.a.createElement(
                'span',
                { className: 'slds-media slds-media_center' },
                l.a.createElement(
                  'span',
                  { className: 'slds-media__figure' },
                  l.a.createElement(m.StandardIcon, {
                    className: 'slds-icon_small',
                    symbol: 'lead',
                    assistiveText: !1
                  })
                ),
                l.a.createElement(
                  'span',
                  { className: 'slds-media__body' },
                  'Leads'
                )
              )
            )
          )
        );
      },
      T = function() {
        return l.a.createElement(
          c.a,
          { isCard: !0, selectedIndex: 0 },
          l.a.createElement(
            c.a.Item,
            { title: 'Item One', id: 'tab-default-1' },
            l.a.createElement(
              E.d,
              null,
              l.a.createElement(E.c, {
                symbol: 'contact',
                title: 'Card Header',
                href: 'javascript:void(0);',
                action: l.a.createElement(
                  'button',
                  { className: 'slds-button slds-button_neutral' },
                  'New'
                )
              }),
              l.a.createElement(
                E.a,
                { hasPadding: !0 },
                'This is a card inside an ',
                l.a.createElement(
                  'code',
                  { className: 'doc' },
                  '.slds-tabs_card'
                ),
                ' ',
                'to show how styling is removed when cards are nested inside.'
              ),
              l.a.createElement(
                E.b,
                null,
                'View All ',
                l.a.createElement(
                  'span',
                  { className: 'slds-assistive-text' },
                  'Contacts'
                )
              )
            ),
            l.a.createElement(
              E.d,
              null,
              l.a.createElement(E.c, {
                symbol: 'contact',
                title: 'Card Header',
                href: 'javascript:void(0);',
                action: l.a.createElement(
                  'button',
                  { className: 'slds-button slds-button_neutral' },
                  'New'
                )
              }),
              l.a.createElement(
                E.a,
                { hasPadding: !0 },
                'This is a card inside an ',
                l.a.createElement(
                  'code',
                  { className: 'doc' },
                  '.slds-tabs_card'
                ),
                ' ',
                'to show how styling is removed when cards are nested inside.'
              ),
              l.a.createElement(
                E.b,
                null,
                'View All ',
                l.a.createElement(
                  'span',
                  { className: 'slds-assistive-text' },
                  'Contacts'
                )
              )
            ),
            l.a.createElement(
              E.d,
              { hasCardBoundary: !0 },
              l.a.createElement(E.c, {
                symbol: 'contact',
                title: 'Card Header',
                href: 'javascript:void(0);',
                action: l.a.createElement(
                  'button',
                  { className: 'slds-button slds-button_neutral' },
                  'New'
                )
              }),
              l.a.createElement(
                E.a,
                { hasPadding: !0 },
                'This is a card inside an ',
                l.a.createElement(
                  'code',
                  { className: 'doc' },
                  '.slds-tabs_card'
                ),
                ' ',
                'to illustrate how',
                l.a.createElement(
                  'code',
                  { className: 'doc' },
                  '.slds-card_boundary'
                ),
                ' adds a rounded border when desired.'
              ),
              l.a.createElement(
                E.b,
                null,
                'View All ',
                l.a.createElement(
                  'span',
                  { className: 'slds-assistive-text' },
                  'Contacts'
                )
              )
            )
          ),
          l.a.createElement(
            c.a.Item,
            { title: 'Item Two', id: 'tab-default-2' },
            'Item Two Content'
          ),
          l.a.createElement(
            c.a.Item,
            { title: 'Item Three', id: 'tab-default-3' },
            'Item Three Content'
          )
        );
      },
      _ = function() {
        return l.a.createElement(
          'div',
          { className: 'demo-only', style: { height: '12rem' } },
          l.a.createElement(
            c.a,
            null,
            l.a.createElement(
              c.a.Item,
              { title: 'Item One', id: 'tab-default-1' },
              l.a.createElement('h2', null, 'Item One Content')
            ),
            l.a.createElement(
              c.a.Item,
              {
                title: 'Item Two',
                id: 'tab-default-2',
                rightIcon: l.a.createElement(o.UtilityIcon, {
                  className: 'slds-icon_x-small slds-icon-text-error',
                  symbol: 'error',
                  title: 'This item has an error',
                  assistiveText: 'This item has an error'
                })
              },
              l.a.createElement('h2', null, 'Item Two Content - Has Error')
            ),
            l.a.createElement(
              c.a.Item,
              { title: 'Item Three', id: 'tab-default-3' },
              l.a.createElement('h2', null, 'Item Three Content')
            ),
            l.a.createElement(
              c.a.Item,
              { title: 'Item Four', id: 'tab-default-4' },
              l.a.createElement('h2', null, 'Item Four Content')
            )
          )
        );
      },
      w = function() {
        return l.a.createElement(
          c.a,
          { size: 'medium' },
          l.a.createElement(
            c.a.Item,
            { title: 'Item One', id: 'tab-default-1' },
            'Item One Content'
          ),
          l.a.createElement(
            c.a.Item,
            { title: 'Item Two', id: 'tab-default-2' },
            'Item Two Content'
          ),
          l.a.createElement(
            c.a.Item,
            { title: 'Item Three', id: 'tab-default-3' },
            'Item Three Content'
          )
        );
      },
      y = function() {
        return l.a.createElement(
          c.a,
          { size: 'large' },
          l.a.createElement(
            c.a.Item,
            { title: 'Item One', id: 'tab-default-1' },
            'Item One Content'
          ),
          l.a.createElement(
            c.a.Item,
            { title: 'Item Two', id: 'tab-default-2' },
            'Item Two Content'
          ),
          l.a.createElement(
            c.a.Item,
            { title: 'Item Three', id: 'tab-default-3' },
            'Item Three Content'
          )
        );
      };
    t.default = l.a.createElement(f, null);
    var C = [
        {
          id: 'selected',
          label: 'Item Two Selected',
          element: l.a.createElement(f, { selectedIndex: 1 })
        }
      ],
      N = [
        {
          id: 'size-medium',
          label: 'Size - Medium',
          element: l.a.createElement(w, null)
        },
        {
          id: 'size-large',
          label: 'Size - Large',
          element: l.a.createElement(y, null)
        },
        {
          id: 'overflow',
          label: 'Overflowing Items',
          element: l.a.createElement(I, null)
        },
        {
          id: 'overflow',
          label: 'Overflowing Items with Icons',
          element: l.a.createElement(h, null)
        },
        {
          id: 'error',
          label: 'Tabs With Error inside of content',
          element: l.a.createElement(_, null)
        },
        {
          id: 'nested',
          label: 'With Nested Scoped Tabs',
          element: l.a.createElement(b, null)
        },
        {
          id: 'card-look',
          label: 'Tab Card-look',
          element: l.a.createElement(T, null)
        }
      ];
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  }
});
