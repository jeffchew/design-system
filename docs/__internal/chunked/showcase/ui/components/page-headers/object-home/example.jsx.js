var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/page-headers/object-home/example.jsx.js'
] = (function(s) {
  function e(e) {
    for (
      var l, r, o = e[0], i = e[1], c = e[2], m = 0, b = [];
      m < o.length;
      m++
    )
      (r = o[m]),
        Object.prototype.hasOwnProperty.call(a, r) && a[r] && b.push(a[r][0]),
        (a[r] = 0);
    for (l in i) Object.prototype.hasOwnProperty.call(i, l) && (s[l] = i[l]);
    for (u && u(e); b.length; ) b.shift()();
    return n.push.apply(n, c || []), t();
  }
  function t() {
    for (var s, e = 0; e < n.length; e++) {
      for (var t = n[e], l = !0, o = 1; o < t.length; o++) {
        var i = t[o];
        0 !== a[i] && (l = !1);
      }
      l && (n.splice(e--, 1), (s = r((r.s = t[0]))));
    }
    return s;
  }
  var l = {},
    a = {
      107: 0,
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
    n = [];
  function r(e) {
    if (l[e]) return l[e].exports;
    var t = (l[e] = { i: e, l: !1, exports: {} });
    return s[e].call(t.exports, t, t.exports, r), (t.l = !0), t.exports;
  }
  (r.m = s),
    (r.c = l),
    (r.d = function(s, e, t) {
      r.o(s, e) || Object.defineProperty(s, e, { enumerable: !0, get: t });
    }),
    (r.r = function(s) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(s, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(s, '__esModule', { value: !0 });
    }),
    (r.t = function(s, e) {
      if ((1 & e && (s = r(s)), 8 & e)) return s;
      if (4 & e && 'object' == typeof s && s && s.__esModule) return s;
      var t = Object.create(null);
      if (
        (r.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: s }),
        2 & e && 'string' != typeof s)
      )
        for (var l in s)
          r.d(
            t,
            l,
            function(e) {
              return s[e];
            }.bind(null, l)
          );
      return t;
    }),
    (r.n = function(s) {
      var e =
        s && s.__esModule
          ? function() {
              return s.default;
            }
          : function() {
              return s;
            };
      return r.d(e, 'a', e), e;
    }),
    (r.o = function(s, e) {
      return Object.prototype.hasOwnProperty.call(s, e);
    }),
    (r.p = '/assets/scripts/bundle/');
  var o = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    i = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var c = 0; c < o.length; c++) e(o[c]);
  var u = i;
  return n.push([151, 0]), t();
})({
  0: function(s, e) {
    s.exports = React;
  },
  151: function(s, e, t) {
    'use strict';
    t.r(e),
      t.d(e, 'ObjectHome', function() {
        return m;
      }),
      t.d(e, 'examples', function() {
        return b;
      });
    var l = t(0),
      a = t.n(l),
      n = t(13),
      r = t(4),
      o = t(30),
      i = t(11),
      c = t(14),
      u = t(17),
      m = function(s) {
        return a.a.createElement(
          u.a,
          null,
          a.a.createElement(
            u.l,
            null,
            a.a.createElement(
              u.b,
              { type: 'title' },
              a.a.createElement(u.m, {
                symbol: 'opportunity',
                objectName: 'Opportunities',
                titleText: 'Recently Viewed',
                hasSwitcher: !0
              })
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
                    o.ButtonGroupList,
                    null,
                    a.a.createElement(
                      o.ButtonGroupListItem,
                      null,
                      a.a.createElement(n.Button, { isNeutral: !0 }, 'New')
                    ),
                    a.a.createElement(
                      o.ButtonGroupListItem,
                      null,
                      a.a.createElement(c.Trigger, {
                        triggerIcon: a.a.createElement(r.b, {
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
              a.a.createElement(u.k, null, '10 items • Updated 13 minutes ago')
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
                  a.a.createElement(c.Trigger, {
                    triggerIcon: a.a.createElement(r.b, {
                      className: 'slds-button_icon-more',
                      symbol: 'settings',
                      hasDropdown: !0,
                      assistiveText: 'List View Controls',
                      title: 'List View Controls'
                    })
                  })
                ),
                a.a.createElement(
                  u.c,
                  null,
                  a.a.createElement(c.Trigger, {
                    triggerIcon: a.a.createElement(r.b, {
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
                  a.a.createElement(r.b, {
                    className: 'slds-button_icon-border-filled',
                    symbol: 'edit',
                    assistiveText: 'Edit List',
                    title: 'Edit List'
                  })
                ),
                a.a.createElement(
                  u.c,
                  null,
                  a.a.createElement(r.b, {
                    className: 'slds-button_icon-border-filled',
                    symbol: 'refresh',
                    assistiveText: 'Refresh List',
                    title: 'Refresh List'
                  })
                ),
                a.a.createElement(
                  u.c,
                  null,
                  a.a.createElement(
                    o.ButtonGroupList,
                    null,
                    a.a.createElement(
                      o.ButtonGroupListItem,
                      null,
                      a.a.createElement(r.b, {
                        className: 'slds-button_icon-border-filled',
                        symbol: 'chart',
                        assistiveText: 'Charts',
                        title: 'Charts'
                      })
                    ),
                    a.a.createElement(
                      o.ButtonGroupListItem,
                      null,
                      a.a.createElement(r.b, {
                        className: 'slds-button_icon-border-filled',
                        symbol: 'filterList',
                        assistiveText: 'Filters',
                        title: 'Filters'
                      })
                    )
                  )
                )
              )
            )
          )
        );
      };
    e.default = a.a.createElement(m, null);
    var b = [
      {
        id: 'base-extra-long',
        label: 'Base with extra long name',
        element: a.a.createElement(
          u.a,
          null,
          a.a.createElement(
            u.l,
            null,
            a.a.createElement(
              u.b,
              { type: 'title' },
              a.a.createElement(u.m, {
                symbol: 'opportunity',
                objectName: 'Opportunities',
                titleText:
                  'Recently Viewed listssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
                hasSwitcher: !0
              })
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
                    o.ButtonGroupList,
                    null,
                    a.a.createElement(
                      o.ButtonGroupListItem,
                      null,
                      a.a.createElement(n.Button, { isNeutral: !0 }, 'New')
                    ),
                    a.a.createElement(
                      o.ButtonGroupListItem,
                      null,
                      a.a.createElement(r.b, {
                        className: 'slds-button_icon-border-filled',
                        symbol: 'down',
                        'aria-haspopup': 'true',
                        assistiveText: 'More Actions',
                        title: 'More Actions'
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
              a.a.createElement(u.k, null, '10 items • Updated 13 minutes ago')
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
                  a.a.createElement(c.Trigger, {
                    triggerIcon: a.a.createElement(r.b, {
                      className: 'slds-button_icon-more',
                      symbol: 'settings',
                      hasDropdown: !0,
                      assistiveText: 'List View Controls',
                      title: 'List View Controls'
                    })
                  })
                ),
                a.a.createElement(
                  u.c,
                  null,
                  a.a.createElement(c.Trigger, {
                    triggerIcon: a.a.createElement(r.b, {
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
                  a.a.createElement(r.b, {
                    className: 'slds-button_icon-border-filled',
                    symbol: 'edit',
                    assistiveText: 'Edit List',
                    title: 'Edit List'
                  })
                ),
                a.a.createElement(
                  u.c,
                  null,
                  a.a.createElement(r.b, {
                    className: 'slds-button_icon-border-filled',
                    symbol: 'refresh',
                    assistiveText: 'Refresh List',
                    title: 'Refresh List'
                  })
                ),
                a.a.createElement(
                  u.c,
                  null,
                  a.a.createElement(
                    o.ButtonGroupList,
                    null,
                    a.a.createElement(
                      o.ButtonGroupListItem,
                      null,
                      a.a.createElement(r.b, {
                        className: 'slds-button_icon-border-filled',
                        symbol: 'chart',
                        assistiveText: 'Charts',
                        title: 'Charts'
                      })
                    ),
                    a.a.createElement(
                      o.ButtonGroupListItem,
                      null,
                      a.a.createElement(r.b, {
                        className: 'slds-button_icon-border-filled',
                        symbol: 'filterList',
                        assistiveText: 'Filters',
                        title: 'Filters'
                      })
                    )
                  )
                )
              )
            )
          )
        )
      },
      {
        id: 'card',
        label: 'Inside a card',
        element: a.a.createElement(i.d, null, a.a.createElement(m, null))
      },
      {
        id: 'tab-card',
        label: 'Inside a tabs card',
        element: a.a.createElement(
          'div',
          { className: 'slds-tabs_card' },
          a.a.createElement(m, null)
        )
      }
    ];
  },
  16: function(s, e) {
    s.exports = ReactDOM;
  }
});
