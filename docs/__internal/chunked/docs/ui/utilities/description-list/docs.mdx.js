var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/utilities/description-list/docs.mdx.js'
] = (function(e) {
  function l(l) {
    for (
      var n, i, s = l[0], o = l[1], c = l[2], u = 0, m = [];
      u < s.length;
      u++
    )
      (i = s[u]),
        Object.prototype.hasOwnProperty.call(a, i) && a[i] && m.push(a[i][0]),
        (a[i] = 0);
    for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
    for (d && d(l); m.length; ) m.shift()();
    return r.push.apply(r, c || []), t();
  }
  function t() {
    for (var e, l = 0; l < r.length; l++) {
      for (var t = r[l], n = !0, s = 1; s < t.length; s++) {
        var o = t[s];
        0 !== a[o] && (n = !1);
      }
      n && (r.splice(l--, 1), (e = i((i.s = t[0]))));
    }
    return e;
  }
  var n = {},
    a = { 89: 0 },
    r = [];
  function i(l) {
    if (n[l]) return n[l].exports;
    var t = (n[l] = { i: l, l: !1, exports: {} });
    return e[l].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
  }
  (i.m = e),
    (i.c = n),
    (i.d = function(e, l, t) {
      i.o(e, l) || Object.defineProperty(e, l, { enumerable: !0, get: t });
    }),
    (i.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.t = function(e, l) {
      if ((1 & l && (e = i(e)), 8 & l)) return e;
      if (4 & l && 'object' == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (i.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
        2 & l && 'string' != typeof e)
      )
        for (var n in e)
          i.d(
            t,
            n,
            function(l) {
              return e[l];
            }.bind(null, n)
          );
      return t;
    }),
    (i.n = function(e) {
      var l =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return i.d(l, 'a', l), l;
    }),
    (i.o = function(e, l) {
      return Object.prototype.hasOwnProperty.call(e, l);
    }),
    (i.p = '/assets/scripts/bundle/');
  var s = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    o = s.push.bind(s);
  (s.push = l), (s = s.slice());
  for (var c = 0; c < s.length; c++) l(s[c]);
  var d = o;
  return r.push([256, 0]), t();
})({
  0: function(e, l) {
    e.exports = React;
  },
  18: function(e, l) {
    e.exports = JSBeautify;
  },
  19: function(e, l) {
    e.exports = ReactDOM;
  },
  256: function(e, l, t) {
    'use strict';
    t.r(l),
      t.d(l, 'getElement', function() {
        return u;
      }),
      t.d(l, 'getContents', function() {
        return m;
      });
    var n = t(0),
      a = t.n(n),
      r = t(4),
      i = t(1),
      s = t(2),
      o = [
        {
          id: 'description-list',
          label: 'Default',
          element: a.a.createElement(
            'dl',
            null,
            a.a.createElement('dt', null, 'First Label:'),
            a.a.createElement('dd', null, 'Description for first label'),
            a.a.createElement('dt', null, 'Second Label:'),
            a.a.createElement('dd', null, 'Description for second label')
          )
        },
        {
          id: 'description-list-horizontal',
          label: 'Horizontal',
          element: a.a.createElement(
            'dl',
            { className: 'slds-dl_horizontal' },
            a.a.createElement(
              'dt',
              { className: 'slds-dl_horizontal__label' },
              'First Label:'
            ),
            a.a.createElement(
              'dd',
              { className: 'slds-dl_horizontal__detail' },
              'Description for first label'
            ),
            a.a.createElement(
              'dt',
              { className: 'slds-dl_horizontal__label' },
              'Second Label:'
            ),
            a.a.createElement(
              'dd',
              { className: 'slds-dl_horizontal__detail' },
              'Second description'
            )
          )
        },
        {
          id: 'horizontal-narrow',
          label: 'Horizontal - Within narrow region',
          element: a.a.createElement(
            'div',
            { className: 'slds-region_narrow', style: { width: '360px' } },
            a.a.createElement(
              'dl',
              { className: 'slds-dl_horizontal' },
              a.a.createElement(
                'dt',
                { className: 'slds-dl_horizontal__label' },
                'First Label:'
              ),
              a.a.createElement(
                'dd',
                { className: 'slds-dl_horizontal__detail' },
                'Description for first label'
              ),
              a.a.createElement(
                'dt',
                { className: 'slds-dl_horizontal__label' },
                'Second Label:'
              ),
              a.a.createElement(
                'dd',
                { className: 'slds-dl_horizontal__detail' },
                'Second description'
              )
            )
          )
        },
        {
          id: 'description-list-inline',
          label: 'Inline',
          element: a.a.createElement(
            'dl',
            { className: 'slds-dl_inline' },
            a.a.createElement(
              'dt',
              { className: 'slds-dl_inline__label' },
              'First Label:'
            ),
            a.a.createElement(
              'dd',
              { className: 'slds-dl_inline__detail' },
              'Description for first label'
            ),
            a.a.createElement(
              'dt',
              { className: 'slds-dl_inline__label' },
              'Second Label:'
            ),
            a.a.createElement(
              'dd',
              { className: 'slds-dl_inline__detail' },
              'Description for second label'
            )
          )
        },
        {
          id: 'inline-narrow',
          label: 'Inline - Within narrow region',
          element: a.a.createElement(
            'div',
            { className: 'slds-region_narrow', style: { width: '360px' } },
            a.a.createElement(
              'dl',
              { className: 'slds-dl_inline' },
              a.a.createElement(
                'dt',
                { className: 'slds-dl_inline__label' },
                'First Label:'
              ),
              a.a.createElement(
                'dd',
                { className: 'slds-dl_inline__detail' },
                'Description for first label'
              ),
              a.a.createElement(
                'dt',
                { className: 'slds-dl_inline__label' },
                'Second Label:'
              ),
              a.a.createElement(
                'dd',
                { className: 'slds-dl_inline__detail' },
                'Second description'
              )
            )
          )
        }
      ],
      c = r.c.h2,
      d = r.c.h3,
      u = function() {
        return Object(n.createElement)(
          r.b,
          {},
          Object(n.createElement)(
            'div',
            { className: 'doc lead' },
            'A description list'
          ),
          c({ id: 'Base' }, 'Base'),
          Object(n.createElement)(
            i.a,
            null,
            Object(s.e)(o, 'description-list')
          ),
          c({ id: 'Examples' }, 'Examples'),
          d({ id: 'Inline' }, 'Inline'),
          Object(n.createElement)(
            i.a,
            null,
            Object(s.e)(o, 'description-list-inline')
          ),
          d({ id: 'Inline-Narrow' }, 'Inline Narrow'),
          Object(n.createElement)(i.a, null, Object(s.e)(o, 'inline-narrow')),
          d({ id: 'Horizontal' }, 'Horizontal'),
          Object(n.createElement)(
            i.a,
            null,
            Object(s.e)(o, 'description-list-horizontal')
          ),
          d({ id: 'Horizontal-Narrow' }, 'Horizontal Narrow'),
          Object(n.createElement)(
            i.a,
            null,
            Object(s.e)(o, 'horizontal-narrow')
          )
        );
      },
      m = function() {
        return Object(r.a)(u());
      };
  }
});
