var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/badges/docs.mdx.js'] = (function(
  e
) {
  function t(t) {
    for (
      var a, c, r = t[0], s = t[1], o = t[2], u = 0, b = [];
      u < r.length;
      u++
    )
      (c = r[u]),
        Object.prototype.hasOwnProperty.call(l, c) && l[c] && b.push(l[c][0]),
        (l[c] = 0);
    for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
    for (d && d(t); b.length; ) b.shift()();
    return i.push.apply(i, o || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], a = !0, r = 1; r < n.length; r++) {
        var s = n[r];
        0 !== l[s] && (a = !1);
      }
      a && (i.splice(t--, 1), (e = c((c.s = n[0]))));
    }
    return e;
  }
  var a = {},
    l = { 7: 0 },
    i = [];
  function c(t) {
    if (a[t]) return a[t].exports;
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, c), (n.l = !0), n.exports;
  }
  (c.m = e),
    (c.c = a),
    (c.d = function(e, t, n) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
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
      var n = Object.create(null);
      if (
        (c.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          c.d(
            n,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return n;
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
    s = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var o = 0; o < r.length; o++) t(r[o]);
  var d = s;
  return i.push([251, 0]), n();
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
  251: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getElement', function() {
        return B;
      }),
      n.d(t, 'getContents', function() {
        return S;
      });
    var a = n(0),
      l = n.n(a),
      i = n(4),
      c = n(11),
      r = n(1),
      s = n(26),
      o = n(43),
      d = (n(12), n(44)),
      u = l.a.createElement(d.a, null, 'Badge Label'),
      b = [
        {
          id: 'inverse',
          label: 'Inverse',
          element: l.a.createElement(d.c, null, 'Inverse badge')
        },
        {
          id: 'with-left-icon',
          label: 'With left icon',
          element: l.a.createElement(
            d.a,
            null,
            l.a.createElement(d.b, { symbol: 'moneybag' }),
            '423 Credits Available'
          )
        },
        {
          id: 'with-right-icon',
          label: 'With right icon',
          element: l.a.createElement(
            d.a,
            null,
            '423 Credits Available',
            l.a.createElement(d.b, { symbol: 'moneybag', align: 'right' })
          )
        },
        {
          id: 'light-with-left-icon',
          label: 'Light with left icon',
          element: l.a.createElement(
            d.d,
            null,
            l.a.createElement(d.b, { symbol: 'moneybag' }),
            '423 Credits Available'
          )
        },
        {
          id: 'light-with-right-icon',
          label: 'Light with right icon',
          element: l.a.createElement(
            d.d,
            null,
            '423 Credits Available',
            l.a.createElement(d.b, { symbol: 'moneybag', align: 'right' })
          )
        },
        {
          id: 'inverse-with-left-icon',
          label: 'Inverse with left icon',
          element: l.a.createElement(
            d.c,
            null,
            l.a.createElement(d.b, { symbol: 'moneybag', isInverse: !0 }),
            '423 Credits Available'
          )
        },
        {
          id: 'inverse-with-right-icon',
          label: 'Inverse with right icon',
          element: l.a.createElement(
            d.c,
            null,
            '423 Credits Available',
            l.a.createElement(d.b, {
              symbol: 'moneybag',
              align: 'right',
              isInverse: !0
            })
          )
        },
        {
          id: 'badge-with-child',
          label: 'With Child Element',
          element: l.a.createElement(
            d.a,
            null,
            'Component In: ',
            l.a.createElement('em', null, 'Lightning')
          )
        }
      ],
      h = (d.a, d.a, d.a, n(2)),
      g = i.c.a,
      m = i.c.code,
      f = i.c.h2,
      p = i.c.h3,
      E = i.c.p,
      y = i.c.table,
      O = i.c.tbody,
      j = i.c.td,
      v = i.c.th,
      w = i.c.thead,
      _ = i.c.tr,
      B = function() {
        return Object(a.createElement)(
          i.b,
          {},
          Object(a.createElement)(
            'div',
            { className: 'doc lead' },
            'Badges are labels which hold small amounts of information.'
          ),
          Object(a.createElement)(r.a, { exampleOnly: !0 }, u),
          f({ id: 'About-Badges' }, 'About Badges'),
          E(
            {},
            'Badges are composed of text inside a ',
            m({}, 'span'),
            ' element and may include inline/inline-block elements and/or icons.'
          ),
          p({ id: 'Colors' }, 'Colors'),
          E({}, 'There are six different color badges you can use.'),
          y(
            {},
            w({}, _({}, v({}, 'Badge'), v({}, 'class'), v({}, 'description'))),
            O(
              {},
              _(
                {},
                j(
                  {},
                  Object(a.createElement)(d.a, { key: '1' }, 'Default Badge')
                ),
                j({}, m({}, '.slds-badge')),
                j(
                  {},
                  'This is the default badge. You probably want to use this one unless you fall into a specific use-case.'
                )
              ),
              _(
                {},
                j(
                  {},
                  Object(a.createElement)(d.c, { key: '2' }, 'Darker Badge')
                ),
                j({}, m({}, '.slds-badge_inverse')),
                j(
                  {},
                  'This badge is used when you need higher contrast than our default badge.'
                )
              ),
              _(
                {},
                j(
                  {},
                  Object(a.createElement)(d.d, { key: '3' }, 'Lightest Badge')
                ),
                j({}, m({}, '.slds-badge_lightest')),
                j(
                  {},
                  'This badge is used when you need higher contrast, such as on colored backgrounds.'
                )
              ),
              _(
                {},
                j(
                  {},
                  Object(a.createElement)(
                    d.a,
                    { key: '4', isSuccess: !0 },
                    'Success Badge'
                  )
                ),
                j({}, m({}, '.slds-badge .slds-theme_success')),
                j({}, 'This is a badge used to communicate success.')
              ),
              _(
                {},
                j(
                  {},
                  Object(a.createElement)(
                    d.a,
                    { key: '5', isWarning: !0 },
                    'Warning Badge'
                  )
                ),
                j({}, m({}, '.slds-badge .slds-theme_warning')),
                j({}, 'This is a badge used to communicate a warning.')
              ),
              _(
                {},
                j(
                  {},
                  Object(a.createElement)(
                    d.a,
                    { key: '6', isError: !0 },
                    'Error Badge'
                  )
                ),
                j({}, m({}, '.slds-badge .slds-theme_error')),
                j({}, 'This is a badge used to communicate an error.')
              )
            )
          ),
          f({ id: 'Base' }, 'Base'),
          Object(a.createElement)(r.a, { toggleCode: !1 }, u),
          f({ id: 'Badges-with-Icons' }, 'Badges with Icons'),
          E(
            {},
            'You can include an icon in your badge. For maximum visual clarity, ',
            g({ href: '/icons/#utility' }, 'Utility icons'),
            ' are the suggested icon type inside badges. You may also choose to put an icon in a badge without text, but in that case, be sure to include assistive text.'
          ),
          E(
            {},
            'The icon can be aligned to the left or right side of the text. To use an icon, wrap the icon with ',
            m({}, '<span class="slds-badge__icon">'),
            '. Add the classes ',
            m({}, 'slds-badge__icon_left'),
            ' or ',
            m({}, 'slds-badge__icon_right'),
            ' to the wrapper for spacing the icon in relation to the text label.'
          ),
          Object(a.createElement)(
            o.a,
            null,
            Object(a.createElement)(
              s.a,
              null,
              Object(a.createElement)('strong', null, 'Base: Icon on the left'),
              Object(a.createElement)(
                r.a,
                null,
                Object(h.e)(b, 'with-left-icon')
              )
            ),
            Object(a.createElement)(
              s.a,
              null,
              Object(a.createElement)(
                'strong',
                null,
                'Base: Icon on the right'
              ),
              Object(a.createElement)(
                r.a,
                null,
                Object(h.e)(b, 'with-right-icon')
              )
            ),
            Object(a.createElement)(
              s.a,
              null,
              Object(a.createElement)(
                r.a,
                null,
                Object(h.e)(b, 'light-with-left-icon')
              )
            ),
            Object(a.createElement)(
              s.a,
              null,
              Object(a.createElement)(
                r.a,
                null,
                Object(h.e)(b, 'light-with-right-icon')
              )
            )
          ),
          E(
            {},
            'When using inverse themed badges, add the ',
            m({}, 'slds-badge__icon_inverse'),
            ' class to ',
            m({}, 'slds-badge__icon'),
            ' to inverse the icon.'
          ),
          Object(a.createElement)(
            o.a,
            null,
            Object(a.createElement)(
              s.a,
              null,
              Object(a.createElement)('strong', null, 'Icon on the left'),
              Object(a.createElement)(
                r.a,
                null,
                Object(h.e)(b, 'inverse-with-left-icon')
              )
            ),
            Object(a.createElement)(
              s.a,
              null,
              Object(a.createElement)('strong', null, 'Icon on the right'),
              Object(a.createElement)(
                r.a,
                null,
                Object(h.e)(b, 'inverse-with-right-icon')
              )
            )
          ),
          f(
            { id: 'Badges-with-Nested-Elements' },
            'Badges with Nested Elements'
          ),
          E(
            {},
            'Along with icons, you can have nested textual elements, such as ',
            m({}, 'strong'),
            ', ',
            m({}, 'em'),
            ', and ',
            m({}, 'span'),
            ' elements, within a badge. Only ',
            m({}, 'inline'),
            ' and ',
            m({}, 'inline-block'),
            ' elements are supported at this time.'
          ),
          Object(a.createElement)(
            c.a,
            { title: 'Badge with nested element' },
            Object(a.createElement)(
              r.a,
              { toggleCode: !1 },
              Object(a.createElement)(
                d.a,
                null,
                'Component In: ',
                Object(a.createElement)('em', null, 'Lightning')
              )
            )
          )
        );
      },
      S = function() {
        return Object(i.a)(B());
      };
  }
});
