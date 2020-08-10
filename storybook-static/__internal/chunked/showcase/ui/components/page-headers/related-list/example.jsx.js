var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/page-headers/related-list/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, o, s = t[0], c = t[1], i = t[2], m = 0, p = [];
      m < s.length;
      m++
    )
      (o = s[m]),
        Object.prototype.hasOwnProperty.call(a, o) && a[o] && p.push(a[o][0]),
        (a[o] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    for (u && u(t); p.length; ) p.shift()();
    return l.push.apply(l, i || []), n();
  }
  function n() {
    for (var e, t = 0; t < l.length; t++) {
      for (var n = l[t], r = !0, s = 1; s < n.length; s++) {
        var c = n[s];
        0 !== a[c] && (r = !1);
      }
      r && (l.splice(t--, 1), (e = o((o.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = {
      110: 0,
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
    l = [];
  function o(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.m = e),
    (o.c = r),
    (o.d = function(e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (o.t = function(e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          o.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (o.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return o.d(t, 'a', t), t;
    }),
    (o.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = '/assets/scripts/bundle/');
  var s = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    c = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var i = 0; i < s.length; i++) t(s[i]);
  var u = c;
  return l.push([232, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  232: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'RelatedList', function() {
        return p;
      });
    var r = n(0),
      a = n.n(r),
      l = n(61),
      o = n(4),
      s = n(13),
      c = n(30),
      i = n(14),
      u = n(17),
      m = l.a.Crumb,
      p = function(e) {
        return a.a.createElement(
          u.a,
          { isRelatedList: !0 },
          a.a.createElement(
            u.l,
            null,
            a.a.createElement(
              u.b,
              { type: 'title' },
              a.a.createElement(
                l.a,
                { className: 'slds-m-bottom_xx-small' },
                a.a.createElement(
                  m,
                  { href: 'javascript:void(0);' },
                  'Accounts'
                ),
                a.a.createElement(
                  m,
                  { href: 'javascript:void(0);' },
                  'Company One'
                )
              ),
              a.a.createElement(u.m, { titleText: 'Contacts (will truncate)' })
            ),
            a.a.createElement(
              u.b,
              { type: 'actions' },
              a.a.createElement(
                u.d,
                null,
                a.a.createElement(
                  u.c,
                  null,
                  a.a.createElement(
                    c.ButtonGroupList,
                    null,
                    a.a.createElement(
                      c.ButtonGroupListItem,
                      null,
                      a.a.createElement(
                        s.Button,
                        { isNeutral: !0 },
                        'Add Contact'
                      )
                    ),
                    a.a.createElement(
                      c.ButtonGroupListItem,
                      null,
                      a.a.createElement(i.Trigger, {
                        triggerIcon: a.a.createElement(o.b, {
                          className: 'slds-button_icon-border-filled',
                          symbol: 'down',
                          'aria-haspopup': 'true',
                          assistiveText: 'More Actions',
                          title: 'More Actions'
                        })
                      })
                    )
                  )
                )
              )
            )
          ),
          a.a.createElement(
            u.l,
            null,
            a.a.createElement(
              u.b,
              { type: 'meta' },
              a.a.createElement(u.k, null, '10 items • sorted by name')
            ),
            a.a.createElement(
              u.b,
              { type: 'controls' },
              a.a.createElement(
                u.d,
                null,
                a.a.createElement(
                  u.c,
                  null,
                  a.a.createElement(i.Trigger, {
                    triggerIcon: a.a.createElement(o.b, {
                      className: 'slds-button_icon-more',
                      symbol: 'table',
                      hasDropdown: !0,
                      assistiveText: 'Change view',
                      title: 'Change view'
                    })
                  })
                ),
                a.a.createElement(
                  u.c,
                  null,
                  a.a.createElement(
                    c.ButtonGroupList,
                    null,
                    a.a.createElement(
                      c.ButtonGroupListItem,
                      null,
                      a.a.createElement(o.b, {
                        className: 'slds-button_icon-border',
                        symbol: 'chart',
                        assistiveText: 'Chart',
                        title: 'Chart'
                      })
                    ),
                    a.a.createElement(
                      c.ButtonGroupListItem,
                      null,
                      a.a.createElement(o.b, {
                        className: 'slds-button_icon-border',
                        symbol: 'filterList',
                        assistiveText: 'Filter List',
                        title: 'Filter List'
                      })
                    ),
                    a.a.createElement(
                      c.ButtonGroupListItem,
                      null,
                      a.a.createElement(i.Trigger, {
                        triggerIcon: a.a.createElement(o.b, {
                          className: 'slds-button_icon-more',
                          symbol: 'sort',
                          hasDropdown: !0,
                          assistiveText: 'Sort List',
                          title: 'Sort List'
                        })
                      })
                    )
                  )
                )
              )
            )
          )
        );
      };
    t.default = a.a.createElement(p, null);
  }
});
