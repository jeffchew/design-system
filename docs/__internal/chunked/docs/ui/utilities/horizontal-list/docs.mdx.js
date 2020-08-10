var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/utilities/horizontal-list/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var a, n, r = t[0], c = t[1], o = t[2], d = 0, h = [];
      d < r.length;
      d++
    )
      (n = r[d]),
        Object.prototype.hasOwnProperty.call(i, n) && i[n] && h.push(i[n][0]),
        (i[n] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
    for (m && m(t); h.length; ) h.shift()();
    return s.push.apply(s, o || []), l();
  }
  function l() {
    for (var e, t = 0; t < s.length; t++) {
      for (var l = s[t], a = !0, r = 1; r < l.length; r++) {
        var c = l[r];
        0 !== i[c] && (a = !1);
      }
      a && (s.splice(t--, 1), (e = n((n.s = l[0]))));
    }
    return e;
  }
  var a = {},
    i = { 92: 0 },
    s = [];
  function n(t) {
    if (a[t]) return a[t].exports;
    var l = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(l.exports, l, l.exports, n), (l.l = !0), l.exports;
  }
  (n.m = e),
    (n.c = a),
    (n.d = function(e, t, l) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: l });
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var l = Object.create(null);
      if (
        (n.r(l),
        Object.defineProperty(l, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          n.d(
            l,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return l;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = '/assets/scripts/bundle/');
  var r = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    c = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var o = 0; o < r.length; o++) t(r[o]);
  var m = c;
  return s.push([236, 0]), l();
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
  236: function(e, t, l) {
    'use strict';
    l.r(t),
      l.d(t, 'getElement', function() {
        return d;
      }),
      l.d(t, 'getContents', function() {
        return h;
      });
    var a = l(0),
      i = l.n(a),
      s = l(4),
      n = l(1),
      r = l(2),
      c = [
        {
          id: 'horizontal-list',
          label: 'Default',
          element: i.a.createElement(
            'ul',
            { className: 'slds-list_horizontal' },
            i.a.createElement('li', null, 'Horizontal List'),
            i.a.createElement('li', null, 'List Item'),
            i.a.createElement('li', null, 'List Item')
          )
        },
        {
          id: 'horizontal-list-links',
          label: 'Links',
          element: i.a.createElement(
            'ul',
            { className: 'slds-list_horizontal' },
            i.a.createElement(
              'li',
              null,
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'Horizontal List with inline level links'
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
          id: 'horizontal-list-block-links',
          label: 'Block links',
          element: i.a.createElement(
            'ul',
            { className: 'slds-list_horizontal slds-has-block-links' },
            i.a.createElement(
              'li',
              null,
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'Horizontal List with block level links'
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
          id: 'horizontal-list-block-links-space',
          label: 'Block links with space',
          element: i.a.createElement(
            'ul',
            { className: 'slds-list_horizontal slds-has-block-links_space' },
            i.a.createElement(
              'li',
              null,
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'Horizontal List with block level links and space'
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
          id: 'horizontal-list-inline-block-links',
          label: 'Inline block links',
          element: i.a.createElement(
            'ul',
            { className: 'slds-list_horizontal slds-has-inline-block-links' },
            i.a.createElement(
              'li',
              null,
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'Horizontal List with inline-block level links'
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
          id: 'horizontal-list-inline-block-links-space',
          label: 'Inline block links with space',
          element: i.a.createElement(
            'ul',
            {
              className:
                'slds-list_horizontal slds-has-inline-block-links_space'
            },
            i.a.createElement(
              'li',
              null,
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'Horizontal List with inline-block level links and space'
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
          id: 'horizontal-list-left',
          label: 'Left',
          element: i.a.createElement(
            'ul',
            { className: 'slds-list_horizontal slds-has-dividers_left' },
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              'Horizontal List with dot dividers to the left'
            ),
            i.a.createElement('li', { className: 'slds-item' }, 'List Item'),
            i.a.createElement('li', { className: 'slds-item' }, 'List Item')
          )
        },
        {
          id: 'horizontal-list-link-left',
          label: 'Left with link',
          element: i.a.createElement(
            'ul',
            {
              className:
                'slds-list_horizontal slds-has-dividers_left slds-has-block-links'
            },
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'Horizontal List with block level links and dot dividers'
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
          id: 'horizontal-list-link-space-left',
          label: 'Left with link space',
          element: i.a.createElement(
            'ul',
            {
              className:
                'slds-list_horizontal slds-has-dividers_left slds-has-block-links_space'
            },
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'Horizontal List with block level links and dot dividers with space'
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
          id: 'horizontal-list-right',
          label: 'Right',
          element: i.a.createElement(
            'ul',
            { className: 'slds-list_horizontal slds-has-dividers_right' },
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              'Horizontal List with dot dividers to the right'
            ),
            i.a.createElement('li', { className: 'slds-item' }, 'List Item'),
            i.a.createElement('li', { className: 'slds-item' }, 'List Item')
          )
        },
        {
          id: 'horizontal-list-link-right',
          label: 'Right with link',
          element: i.a.createElement(
            'ul',
            {
              className:
                'slds-list_horizontal slds-has-dividers_right slds-has-block-links'
            },
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'Horizontal List with block level links and dot dividers'
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
          id: 'horizontal-list-link-space-right',
          label: 'Right with link space',
          element: i.a.createElement(
            'ul',
            {
              className:
                'slds-list_horizontal slds-has-dividers_right slds-has-block-links_space'
            },
            i.a.createElement(
              'li',
              { className: 'slds-item' },
              i.a.createElement(
                'a',
                { href: 'javascript:void(0);' },
                'Horizontal List with block level links and dot dividers with space'
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
      o = s.c.h2,
      m = s.c.h3,
      d = function() {
        return Object(a.createElement)(
          s.b,
          {},
          Object(a.createElement)(
            'div',
            { className: 'doc lead' },
            'A horizontal list'
          ),
          o({ id: 'Base' }, 'Base'),
          Object(a.createElement)(n.a, null, Object(r.e)(c, 'horizontal-list')),
          o({ id: 'Examples' }, 'Examples'),
          m({ id: 'Links' }, 'Links'),
          Object(a.createElement)(
            n.a,
            null,
            Object(r.e)(c, 'horizontal-list-links')
          ),
          m({ id: 'Block-Links' }, 'Block Links'),
          Object(a.createElement)(
            n.a,
            null,
            Object(r.e)(c, 'horizontal-list-block-links')
          ),
          m({ id: 'Block-Links-with-Space' }, 'Block Links with Space'),
          Object(a.createElement)(
            n.a,
            null,
            Object(r.e)(c, 'horizontal-list-block-links-space')
          ),
          m({ id: 'Inline-Block-Links' }, 'Inline Block Links'),
          Object(a.createElement)(
            n.a,
            null,
            Object(r.e)(c, 'horizontal-list-inline-block-links')
          ),
          m(
            { id: 'Inline-Block-Links-with-Space' },
            'Inline Block Links with Space'
          ),
          Object(a.createElement)(
            n.a,
            null,
            Object(r.e)(c, 'horizontal-list-inline-block-links-space')
          ),
          m({ id: 'Left' }, 'Left'),
          Object(a.createElement)(
            n.a,
            null,
            Object(r.e)(c, 'horizontal-list-left')
          ),
          m({ id: 'Left-with-Link' }, 'Left with Link'),
          Object(a.createElement)(
            n.a,
            null,
            Object(r.e)(c, 'horizontal-list-link-left')
          ),
          m({ id: 'Left-with-Link-Space' }, 'Left with Link Space'),
          Object(a.createElement)(
            n.a,
            null,
            Object(r.e)(c, 'horizontal-list-link-space-left')
          ),
          m({ id: 'Right' }, 'Right'),
          Object(a.createElement)(
            n.a,
            null,
            Object(r.e)(c, 'horizontal-list-right')
          ),
          m({ id: 'Right-with-Link' }, 'Right with Link'),
          Object(a.createElement)(
            n.a,
            null,
            Object(r.e)(c, 'horizontal-list-link-right')
          ),
          m({ id: 'Right-with-Link-Space' }, 'Right with Link Space'),
          Object(a.createElement)(
            n.a,
            null,
            Object(r.e)(c, 'horizontal-list-link-space-right')
          )
        );
      },
      h = function() {
        return Object(s.a)(d());
      };
  }
});
