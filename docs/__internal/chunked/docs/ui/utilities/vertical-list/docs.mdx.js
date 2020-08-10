var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/utilities/vertical-list/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var a, c, n = t[0], r = t[1], m = t[2], o = 0, u = [];
      o < n.length;
      o++
    )
      (c = n[o]),
        Object.prototype.hasOwnProperty.call(i, c) && i[c] && u.push(i[c][0]),
        (i[c] = 0);
    for (a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    for (d && d(t); u.length; ) u.shift()();
    return s.push.apply(s, m || []), l();
  }
  function l() {
    for (var e, t = 0; t < s.length; t++) {
      for (var l = s[t], a = !0, n = 1; n < l.length; n++) {
        var r = l[n];
        0 !== i[r] && (a = !1);
      }
      a && (s.splice(t--, 1), (e = c((c.s = l[0]))));
    }
    return e;
  }
  var a = {},
    i = { 108: 0 },
    s = [];
  function c(t) {
    if (a[t]) return a[t].exports;
    var l = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(l.exports, l, l.exports, c), (l.l = !0), l.exports;
  }
  (c.m = e),
    (c.c = a),
    (c.d = function(e, t, l) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: l });
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
      var l = Object.create(null);
      if (
        (c.r(l),
        Object.defineProperty(l, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          c.d(
            l,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return l;
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
  var n = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    r = n.push.bind(n);
  (n.push = t), (n = n.slice());
  for (var m = 0; m < n.length; m++) t(n[m]);
  var d = r;
  return s.push([264, 0]), l();
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
  264: function(e, t, l) {
    'use strict';
    l.r(t),
      l.d(t, 'getElement', function() {
        return o;
      }),
      l.d(t, 'getContents', function() {
        return u;
      });
    var a = l(0),
      i = l.n(a),
      s = l(4),
      c = l(1),
      n = l(2),
      r = [
        {
          id: 'vertical-list',
          label: 'Default',
          element: i.a.createElement(
            'ul',
            null,
            i.a.createElement('li', null, 'Vertical List'),
            i.a.createElement('li', null, 'List Item'),
            i.a.createElement('li', null, 'List Item')
          )
        },
        {
          id: 'unordered-list-decimal',
          label: 'Dotted',
          element: i.a.createElement(
            'ul',
            { className: 'slds-list_dotted' },
            i.a.createElement('li', null, 'Basic ordered list'),
            i.a.createElement('li', null, 'List Item'),
            i.a.createElement('li', null, 'List Item')
          )
        },
        {
          id: 'ordered-list-decimal',
          label: 'Decimal',
          element: i.a.createElement(
            'ol',
            { className: 'slds-list_ordered' },
            i.a.createElement('li', null, 'Basic ordered list'),
            i.a.createElement('li', null, 'List Item'),
            i.a.createElement('li', null, 'List Item')
          )
        },
        {
          id: 'vertical-list-links',
          label: 'Links',
          element: i.a.createElement(
            'ul',
            null,
            i.a.createElement(
              'li',
              null,
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'Vertical List with links'
              )
            ),
            i.a.createElement(
              'li',
              null,
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List Item'
              )
            ),
            i.a.createElement(
              'li',
              null,
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List Item'
              )
            )
          )
        },
        {
          id: 'vertical-list-block-links',
          label: 'Block links',
          element: i.a.createElement(
            'ul',
            { className: 'slds-has-block-links' },
            i.a.createElement(
              'li',
              null,
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'Vertical List with block links'
              )
            ),
            i.a.createElement(
              'li',
              null,
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List Item'
              )
            ),
            i.a.createElement(
              'li',
              null,
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List Item'
              )
            )
          )
        },
        {
          id: 'vertical-list-block-links-space',
          label: 'Block links with space',
          element: i.a.createElement(
            'ul',
            { className: 'slds-has-block-links_space' },
            i.a.createElement(
              'li',
              null,
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'Vertical List with block links with space'
              )
            ),
            i.a.createElement(
              'li',
              null,
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List Item'
              )
            ),
            i.a.createElement(
              'li',
              null,
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List Item'
              )
            )
          )
        },
        {
          id: 'vertical-list-inline-block-links',
          label: 'Inline block links',
          element: i.a.createElement(
            'ul',
            { className: 'slds-has-inline-block-links' },
            i.a.createElement(
              'li',
              null,
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'Vertical List with inline-block links'
              )
            ),
            i.a.createElement(
              'li',
              null,
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List Item'
              )
            ),
            i.a.createElement(
              'li',
              null,
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List Item'
              )
            )
          )
        },
        {
          id: 'vertical-list-inline-block-links-space',
          label: 'Inline block links with space',
          element: i.a.createElement(
            'ul',
            { className: 'slds-has-inline-block-links_space' },
            i.a.createElement(
              'li',
              null,
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'Vertical List with inline-block links with space'
              )
            ),
            i.a.createElement(
              'li',
              null,
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List Item'
              )
            ),
            i.a.createElement(
              'li',
              null,
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List Item'
              )
            )
          )
        },
        {
          id: 'vertical-list-nested',
          label: 'Nested vertical lists',
          element: i.a.createElement(
            'ul',
            null,
            i.a.createElement(
              'li',
              null,
              'Vertical List with nested vertical lists'
            ),
            i.a.createElement('li', null, 'List Item'),
            i.a.createElement(
              'li',
              null,
              i.a.createElement(
                'ul',
                { className: 'slds-is-nested' },
                i.a.createElement('li', null, 'Nested Vertical List'),
                i.a.createElement('li', null, 'List Item'),
                i.a.createElement(
                  'li',
                  null,
                  i.a.createElement(
                    'ul',
                    { className: 'slds-is-nested' },
                    i.a.createElement('li', null, 'Nested Vertical List'),
                    i.a.createElement('li', null, 'List Item'),
                    i.a.createElement('li', null, 'List Item')
                  )
                )
              )
            )
          )
        },
        {
          id: 'vertical-dividers-top',
          label: 'Top',
          element: i.a.createElement(
            'ul',
            { className: 'slds-has-dividers_top' },
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              'List item with top divider'
            ),
            i.a.createElement('li', { className: 'slds-item' }, 'List Item'),
            i.a.createElement('li', { className: 'slds-item' }, 'List Item')
          )
        },
        {
          id: 'vertical-dividers-top-space',
          label: 'Top with space',
          element: i.a.createElement(
            'ul',
            { className: 'slds-has-dividers_top-space' },
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              'List item with top divider with space'
            ),
            i.a.createElement('li', { className: 'slds-item' }, 'List Item'),
            i.a.createElement('li', { className: 'slds-item' }, 'List Item')
          )
        },
        {
          id: 'vertical-dividers-link-top',
          label: 'Top with link',
          element: i.a.createElement(
            'ul',
            { className: 'slds-has-dividers_top slds-has-block-links' },
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List item with link and top divider'
              )
            ),
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List Item'
              )
            ),
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List Item'
              )
            )
          )
        },
        {
          id: 'vertical-dividers-link-top-space',
          label: 'Top with link and space',
          element: i.a.createElement(
            'ul',
            { className: 'slds-has-dividers_top slds-has-block-links_space' },
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List item with link and top divider'
              )
            ),
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List Item'
              )
            ),
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List Item'
              )
            )
          )
        },
        {
          id: 'vertical-dividers-bottom',
          label: 'Bottom',
          element: i.a.createElement(
            'ul',
            { className: 'slds-has-dividers_bottom' },
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              'List item with bottom divider'
            ),
            i.a.createElement('li', { className: 'slds-item' }, 'List Item'),
            i.a.createElement('li', { className: 'slds-item' }, 'List Item')
          )
        },
        {
          id: 'vertical-dividers-bottom-space',
          label: 'Bottom with space',
          element: i.a.createElement(
            'ul',
            { className: 'slds-has-dividers_bottom-space' },
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              'List item with bottom divider with space'
            ),
            i.a.createElement('li', { className: 'slds-item' }, 'List Item'),
            i.a.createElement('li', { className: 'slds-item' }, 'List Item')
          )
        },
        {
          id: 'vertical-dividers-link-bottom',
          label: 'Bottom with link',
          element: i.a.createElement(
            'ul',
            { className: 'slds-has-dividers_bottom slds-has-block-links' },
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List item with link and bottom divider'
              )
            ),
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List Item'
              )
            ),
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List Item'
              )
            )
          )
        },
        {
          id: 'vertical-dividers-link-bottom-space',
          label: 'Bottom with link and space',
          element: i.a.createElement(
            'ul',
            {
              className: 'slds-has-dividers_bottom slds-has-block-links_space'
            },
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List item with link and bottom divider with space'
              )
            ),
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List Item'
              )
            ),
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List Item'
              )
            )
          )
        },
        {
          id: 'vertical-dividers-around',
          label: 'Around',
          element: i.a.createElement(
            'ul',
            { className: 'slds-has-dividers_around' },
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              'List item with around divider'
            ),
            i.a.createElement('li', { className: 'slds-item' }, 'List Item'),
            i.a.createElement('li', { className: 'slds-item' }, 'List Item')
          )
        },
        {
          id: 'vertical-dividers-around-space',
          label: 'Around with space',
          element: i.a.createElement(
            'ul',
            { className: 'slds-has-dividers_around-space' },
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              'List item with around divider with space'
            ),
            i.a.createElement('li', { className: 'slds-item' }, 'List Item'),
            i.a.createElement('li', { className: 'slds-item' }, 'List Item')
          )
        },
        {
          id: 'vertical-dividers-link-around',
          label: 'Around with link',
          element: i.a.createElement(
            'ul',
            { className: 'slds-has-dividers_around slds-has-block-links' },
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List item with link and around divider'
              )
            ),
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List Item'
              )
            ),
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List Item'
              )
            )
          )
        },
        {
          id: 'vertical-dividers-link-around-space',
          label: 'Around with link and space',
          element: i.a.createElement(
            'ul',
            {
              className: 'slds-has-dividers_around slds-has-block-links_space'
            },
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List item with link and around divider with space'
              )
            ),
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List Item'
              )
            ),
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'List Item'
              )
            )
          )
        }
      ],
      m = s.c.h2,
      d = s.c.h3,
      o = function() {
        return Object(a.createElement)(
          s.b,
          {},
          Object(a.createElement)(
            'div',
            { className: 'doc lead' },
            'A vertical list.'
          ),
          m({ id: 'Base' }, 'Base'),
          Object(a.createElement)(c.a, null, Object(n.e)(r, 'vertical-list')),
          m({ id: 'Examples' }, 'Examples'),
          d({ id: 'Dotted' }, 'Dotted'),
          Object(a.createElement)(
            c.a,
            null,
            Object(n.e)(r, 'unordered-list-decimal')
          ),
          d({ id: 'Decimal' }, 'Decimal'),
          Object(a.createElement)(
            c.a,
            null,
            Object(n.e)(r, 'ordered-list-decimal')
          ),
          d({ id: 'Links' }, 'Links'),
          Object(a.createElement)(
            c.a,
            null,
            Object(n.e)(r, 'vertical-list-links')
          ),
          d({ id: 'Block-Links' }, 'Block Links'),
          Object(a.createElement)(
            c.a,
            null,
            Object(n.e)(r, 'vertical-list-block-links')
          ),
          d({ id: 'Block-Links-with-Space' }, 'Block Links with Space'),
          Object(a.createElement)(
            c.a,
            null,
            Object(n.e)(r, 'vertical-list-block-links-space')
          ),
          d({ id: 'Inline-Block-Links' }, 'Inline Block Links'),
          Object(a.createElement)(
            c.a,
            null,
            Object(n.e)(r, 'vertical-list-inline-block-links')
          ),
          d(
            { id: 'Inline-Block-Links-with-Space' },
            'Inline Block Links with Space'
          ),
          Object(a.createElement)(
            c.a,
            null,
            Object(n.e)(r, 'vertical-list-inline-block-links-space')
          ),
          d({ id: 'Nested-Vertical-Lists' }, 'Nested Vertical Lists'),
          Object(a.createElement)(
            c.a,
            null,
            Object(n.e)(r, 'vertical-list-nested')
          ),
          d({ id: 'Top' }, 'Top'),
          Object(a.createElement)(
            c.a,
            null,
            Object(n.e)(r, 'vertical-dividers-top')
          ),
          d({ id: 'Top-with-Space' }, 'Top with Space'),
          Object(a.createElement)(
            c.a,
            null,
            Object(n.e)(r, 'vertical-dividers-top-space')
          ),
          d({ id: 'Top-with-Link' }, 'Top with Link'),
          Object(a.createElement)(
            c.a,
            null,
            Object(n.e)(r, 'vertical-dividers-link-top')
          ),
          d({ id: 'Top-with-Link-and-Space' }, 'Top with Link and Space'),
          Object(a.createElement)(
            c.a,
            null,
            Object(n.e)(r, 'vertical-dividers-link-top-space')
          ),
          d({ id: 'Bottom' }, 'Bottom'),
          Object(a.createElement)(
            c.a,
            null,
            Object(n.e)(r, 'vertical-dividers-bottom')
          ),
          d({ id: 'Bottom-with-Space' }, 'Bottom with Space'),
          Object(a.createElement)(
            c.a,
            null,
            Object(n.e)(r, 'vertical-dividers-bottom-space')
          ),
          d({ id: 'Bottom-with-Link' }, 'Bottom with Link'),
          Object(a.createElement)(
            c.a,
            null,
            Object(n.e)(r, 'vertical-dividers-link-bottom')
          ),
          d({ id: 'Bottom-with-Link-and-Space' }, 'Bottom with Link and Space'),
          Object(a.createElement)(
            c.a,
            null,
            Object(n.e)(r, 'vertical-dividers-link-bottom-space')
          ),
          d({ id: 'Around' }, 'Around'),
          Object(a.createElement)(
            c.a,
            null,
            Object(n.e)(r, 'vertical-dividers-around')
          ),
          d({ id: 'Around-with-Space' }, 'Around with Space'),
          Object(a.createElement)(
            c.a,
            null,
            Object(n.e)(r, 'vertical-dividers-around-space')
          ),
          d({ id: 'Around-with-Link' }, 'Around with Link'),
          Object(a.createElement)(
            c.a,
            null,
            Object(n.e)(r, 'vertical-dividers-link-around')
          ),
          d({ id: 'Around-with-Link-and-Space' }, 'Around with Link and Space'),
          Object(a.createElement)(
            c.a,
            null,
            Object(n.e)(r, 'vertical-dividers-link-around-space')
          )
        );
      },
      u = function() {
        return Object(s.a)(o());
      };
  }
});
