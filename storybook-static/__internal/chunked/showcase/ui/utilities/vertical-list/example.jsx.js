var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/utilities/vertical-list/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var l, r, n = t[0], c = t[1], m = t[2], o = 0, v = [];
      o < n.length;
      o++
    )
      (r = n[o]),
        Object.prototype.hasOwnProperty.call(i, r) && i[r] && v.push(i[r][0]),
        (i[r] = 0);
    for (l in c) Object.prototype.hasOwnProperty.call(c, l) && (e[l] = c[l]);
    for (d && d(t); v.length; ) v.shift()();
    return s.push.apply(s, m || []), a();
  }
  function a() {
    for (var e, t = 0; t < s.length; t++) {
      for (var a = s[t], l = !0, n = 1; n < a.length; n++) {
        var c = a[n];
        0 !== i[c] && (l = !1);
      }
      l && (s.splice(t--, 1), (e = r((r.s = a[0]))));
    }
    return e;
  }
  var l = {},
    i = {
      186: 0,
      6: 0,
      22: 0,
      73: 0,
      80: 0,
      93: 0,
      94: 0,
      96: 0,
      97: 0,
      98: 0,
      103: 0,
      104: 0,
      127: 0,
      131: 0,
      135: 0,
      140: 0,
      142: 0
    },
    s = [];
  function r(t) {
    if (l[t]) return l[t].exports;
    var a = (l[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
  }
  (r.m = e),
    (r.c = l),
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
        for (var l in e)
          r.d(
            a,
            l,
            function(t) {
              return e[t];
            }.bind(null, l)
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
  var n = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    c = n.push.bind(n);
  (n.push = t), (n = n.slice());
  for (var m = 0; m < n.length; m++) t(n[m]);
  var d = c;
  return s.push([204, 0]), a();
})({
  0: function(e, t) {
    e.exports = React;
  },
  204: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'examples', function() {
        return s;
      });
    var l = a(0),
      i = a.n(l),
      s = [
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
      ];
  }
});
