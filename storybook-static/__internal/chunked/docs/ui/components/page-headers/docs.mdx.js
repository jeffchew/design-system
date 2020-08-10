var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/page-headers/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var a, r, i = t[0], c = t[1], o = t[2], m = 0, u = [];
      m < i.length;
      m++
    )
      (r = i[m]),
        Object.prototype.hasOwnProperty.call(l, r) && l[r] && u.push(l[r][0]),
        (l[r] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
    for (d && d(t); u.length; ) u.shift()();
    return n.push.apply(n, o || []), s();
  }
  function s() {
    for (var e, t = 0; t < n.length; t++) {
      for (var s = n[t], a = !0, i = 1; i < s.length; i++) {
        var c = s[i];
        0 !== l[c] && (a = !1);
      }
      a && (n.splice(t--, 1), (e = r((r.s = s[0]))));
    }
    return e;
  }
  var a = {},
    l = { 51: 0 },
    n = [];
  function r(t) {
    if (a[t]) return a[t].exports;
    var s = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(s.exports, s, s.exports, r), (s.l = !0), s.exports;
  }
  (r.m = e),
    (r.c = a),
    (r.d = function(e, t, s) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s });
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
      var s = Object.create(null);
      if (
        (r.r(s),
        Object.defineProperty(s, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          r.d(
            s,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return s;
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
  var i = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    c = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var o = 0; o < i.length; o++) t(i[o]);
  var d = c;
  return n.push([208, 0]), s();
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
  208: function(e, t, s) {
    'use strict';
    s.r(t),
      s.d(t, 'getElement', function() {
        return se;
      }),
      s.d(t, 'getContents', function() {
        return ae;
      });
    var a = s(0),
      l = s.n(a),
      n = s(4),
      r = s(1),
      i = (s(23), s(15), s(2)),
      c = s(3),
      o = s.n(c),
      d = s(5),
      m = s.n(d),
      u = s(7),
      p = s(9),
      E = s(62),
      h = s(32),
      b = function(e) {
        return l.a.createElement(h.a, {
          symbol: e.type,
          className: 'slds-page-header__icon',
          assistiveText: e.assistiveText,
          title: e.title
        });
      };
    b.propTypes = {
      assistiveText: o.a.oneOfType([o.a.string, o.a.bool]),
      title: o.a.oneOfType([o.a.string, o.a.bool]),
      type: o.a.string.isRequired
    };
    var y = function(e) {
      return l.a.createElement(
        'div',
        {
          className: m()('slds-page-header', {
            'slds-page-header_vertical': e.isVertical,
            'slds-page-header_related-list': e.isRelatedList,
            'slds-page-header_record-home': e.isRecordHome
          })
        },
        e.children
      );
    };
    y.propTypes = {
      children: o.a.node,
      isRelatedList: o.a.bool,
      isVertical: o.a.bool,
      isRecordHome: o.a.bool
    };
    var g = function(e) {
      return l.a.createElement(
        'div',
        {
          className: m()('slds-page-header__row', {
            'slds-page-header__row_gutters': e.hasGutters
          })
        },
        e.children
      );
    };
    g.propTypes = { children: o.a.node, hasGutters: o.a.bool };
    var f = function(e) {
      return l.a.createElement(
        'div',
        {
          className: m()({
            'slds-page-header__col-actions': 'actions' === e.type,
            'slds-page-header__col-controls': 'controls' === e.type,
            'slds-page-header__col-details': 'details' === e.type,
            'slds-page-header__col-meta': 'meta' === e.type,
            'slds-page-header__col-title': 'title' === e.type
          })
        },
        e.children
      );
    };
    f.propTypes = { children: o.a.node, type: o.a.string };
    var v = function(e) {
      return l.a.createElement(
        E.a,
        {
          figureLeft:
            e.symbol &&
            l.a.createElement(b, {
              assistiveText: !e.objectName && e.symbol,
              title: !e.objectName && e.symbol,
              type: e.symbol
            })
        },
        l.a.createElement(
          'div',
          { className: 'slds-page-header__name' },
          l.a.createElement(
            'div',
            { className: 'slds-page-header__name-title' },
            l.a.createElement(
              'h1',
              null,
              e.objectName && !e.metaText
                ? l.a.createElement('span', null, e.objectName)
                : null,
              l.a.createElement(
                'span',
                {
                  className: m()(
                    'slds-page-header__title',
                    !e.isVertical && 'slds-truncate',
                    e.isVertical && 'slds-hyphenate'
                  ),
                  title: e.titleText
                },
                e.titleText
              )
            )
          ),
          e.hasSwitcher &&
            l.a.createElement(
              'div',
              { className: 'slds-page-header__name-switcher' },
              l.a.createElement(p.l, {
                triggerIcon: l.a.createElement(u.b, {
                  'aria-haspopup': 'true',
                  assistiveText: 'Switch list view',
                  className: 'slds-button_icon-small',
                  iconClassName: 'slds-icon_x-small',
                  symbol: 'down',
                  title: 'Switch list view'
                })
              })
            )
        ),
        e.metaText &&
          l.a.createElement(
            'p',
            { className: 'slds-page-header__name-meta' },
            e.metaText
          )
      );
    };
    v.propTypes = {
      symbol: o.a.string,
      objectName: o.a.string,
      hasSwitcher: o.a.bool,
      metaText: o.a.string,
      titleText: o.a.string.isRequired,
      isVertical: o.a.bool
    };
    var _ = function(e) {
      return l.a.createElement(
        'p',
        { className: 'slds-page-header__meta-text' },
        e.children
      );
    };
    _.propTypes = { children: o.a.node };
    var T = function(e) {
      return l.a.createElement(
        'div',
        { className: 'slds-page-header__controls' },
        e.children
      );
    };
    T.propTypes = { children: o.a.node };
    var x = function(e) {
      return l.a.createElement(
        'div',
        { className: 'slds-page-header__control' },
        e.children
      );
    };
    x.propTypes = { children: o.a.node };
    var N = function(e) {
      return l.a.createElement(
        'ul',
        { className: 'slds-page-header__detail-row' },
        e.children
      );
    };
    N.propTypes = { children: o.a.node };
    var w = function(e) {
      return l.a.createElement(
        'ul',
        { className: 'slds-page-header__detail-list' },
        e.children
      );
    };
    w.propTypes = { children: o.a.node };
    var j = function(e) {
      return l.a.createElement(
        'li',
        { className: 'slds-page-header__detail-block' },
        e.children
      );
    };
    j.propTypes = { children: o.a.node };
    var O = function(e) {
      return l.a.createElement(
        'li',
        { className: 'slds-page-header__detail-item' },
        e.children
      );
    };
    O.propTypes = { children: o.a.node };
    var S = function(e) {
      return l.a.createElement(
        'div',
        {
          className: m()('slds-text-title', !e.isVertical && 'slds-truncate'),
          title: e.title
        },
        e.children
      );
    };
    S.propTypes = {
      children: o.a.node,
      title: o.a.string,
      isVertical: o.a.bool
    };
    var C = function(e) {
      return l.a.createElement(
        'div',
        { className: e.isVertical ? null : 'slds-truncate', title: e.title },
        e.children
      );
    };
    C.propTypes = {
      children: o.a.node,
      title: o.a.string,
      isVertical: o.a.bool
    };
    var L = function(e) {
        return l.a.createElement(
          y,
          null,
          l.a.createElement(
            g,
            null,
            l.a.createElement(
              f,
              { type: 'title' },
              l.a.createElement(v, {
                titleText: 'Rohde Corp - 80,000 Widgets',
                metaText: 'Mark Jaeckal • Unlimited Customer • 11/13/15',
                symbol: 'opportunity'
              })
            )
          )
        );
      },
      V = l.a.createElement(L, null),
      R = s(13),
      A = s(38),
      D = s(14),
      M = function(e) {
        return l.a.createElement(
          y,
          null,
          l.a.createElement(
            g,
            null,
            l.a.createElement(
              f,
              { type: 'title' },
              l.a.createElement(v, {
                symbol: 'opportunity',
                objectName: 'Opportunities',
                titleText: 'Recently Viewed',
                hasSwitcher: !0
              })
            ),
            l.a.createElement(
              f,
              { type: 'actions' },
              l.a.createElement(
                T,
                null,
                l.a.createElement(
                  x,
                  null,
                  l.a.createElement(
                    A.a,
                    null,
                    l.a.createElement(
                      A.b,
                      null,
                      l.a.createElement(R.a, { isNeutral: !0 }, 'New')
                    ),
                    l.a.createElement(
                      A.b,
                      null,
                      l.a.createElement(p.l, {
                        triggerIcon: l.a.createElement(u.b, {
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
          l.a.createElement(
            g,
            null,
            l.a.createElement(
              f,
              { type: 'meta' },
              l.a.createElement(_, null, '10 items • Updated 13 minutes ago')
            ),
            l.a.createElement(
              f,
              { type: 'controls' },
              l.a.createElement(
                T,
                null,
                l.a.createElement(
                  x,
                  null,
                  l.a.createElement(p.l, {
                    triggerIcon: l.a.createElement(u.b, {
                      className: 'slds-button_icon-more',
                      symbol: 'settings',
                      hasDropdown: !0,
                      assistiveText: 'List View Controls',
                      title: 'List View Controls'
                    })
                  })
                ),
                l.a.createElement(
                  x,
                  null,
                  l.a.createElement(p.l, {
                    triggerIcon: l.a.createElement(u.b, {
                      className: 'slds-button_icon-more',
                      symbol: 'table',
                      hasDropdown: !0,
                      assistiveText: 'Change view',
                      title: 'Change view'
                    })
                  })
                ),
                l.a.createElement(
                  x,
                  null,
                  l.a.createElement(u.b, {
                    className: 'slds-button_icon-border-filled',
                    symbol: 'edit',
                    assistiveText: 'Edit List',
                    title: 'Edit List'
                  })
                ),
                l.a.createElement(
                  x,
                  null,
                  l.a.createElement(u.b, {
                    className: 'slds-button_icon-border-filled',
                    symbol: 'refresh',
                    assistiveText: 'Refresh List',
                    title: 'Refresh List'
                  })
                ),
                l.a.createElement(
                  x,
                  null,
                  l.a.createElement(
                    A.a,
                    null,
                    l.a.createElement(
                      A.b,
                      null,
                      l.a.createElement(u.b, {
                        className: 'slds-button_icon-border-filled',
                        symbol: 'chart',
                        assistiveText: 'Charts',
                        title: 'Charts'
                      })
                    ),
                    l.a.createElement(
                      A.b,
                      null,
                      l.a.createElement(u.b, {
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
      },
      I = l.a.createElement(M, null),
      F = [
        {
          id: 'base-extra-long',
          label: 'Base with extra long name',
          element: l.a.createElement(
            y,
            null,
            l.a.createElement(
              g,
              null,
              l.a.createElement(
                f,
                { type: 'title' },
                l.a.createElement(v, {
                  symbol: 'opportunity',
                  objectName: 'Opportunities',
                  titleText:
                    'Recently Viewed listssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
                  hasSwitcher: !0
                })
              ),
              l.a.createElement(
                f,
                { type: 'actions' },
                l.a.createElement(
                  T,
                  null,
                  l.a.createElement(
                    x,
                    null,
                    l.a.createElement(
                      A.a,
                      null,
                      l.a.createElement(
                        A.b,
                        null,
                        l.a.createElement(R.a, { isNeutral: !0 }, 'New')
                      ),
                      l.a.createElement(
                        A.b,
                        null,
                        l.a.createElement(u.b, {
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
            l.a.createElement(
              g,
              null,
              l.a.createElement(
                f,
                { type: 'meta' },
                l.a.createElement(_, null, '10 items • Updated 13 minutes ago')
              ),
              l.a.createElement(
                f,
                { type: 'controls' },
                l.a.createElement(
                  T,
                  null,
                  l.a.createElement(
                    x,
                    null,
                    l.a.createElement(p.l, {
                      triggerIcon: l.a.createElement(u.b, {
                        className: 'slds-button_icon-more',
                        symbol: 'settings',
                        hasDropdown: !0,
                        assistiveText: 'List View Controls',
                        title: 'List View Controls'
                      })
                    })
                  ),
                  l.a.createElement(
                    x,
                    null,
                    l.a.createElement(p.l, {
                      triggerIcon: l.a.createElement(u.b, {
                        className: 'slds-button_icon-more',
                        symbol: 'table',
                        hasDropdown: !0,
                        assistiveText: 'Change view',
                        title: 'Change view'
                      })
                    })
                  ),
                  l.a.createElement(
                    x,
                    null,
                    l.a.createElement(u.b, {
                      className: 'slds-button_icon-border-filled',
                      symbol: 'edit',
                      assistiveText: 'Edit List',
                      title: 'Edit List'
                    })
                  ),
                  l.a.createElement(
                    x,
                    null,
                    l.a.createElement(u.b, {
                      className: 'slds-button_icon-border-filled',
                      symbol: 'refresh',
                      assistiveText: 'Refresh List',
                      title: 'Refresh List'
                    })
                  ),
                  l.a.createElement(
                    x,
                    null,
                    l.a.createElement(
                      A.a,
                      null,
                      l.a.createElement(
                        A.b,
                        null,
                        l.a.createElement(u.b, {
                          className: 'slds-button_icon-border-filled',
                          symbol: 'chart',
                          assistiveText: 'Charts',
                          title: 'Charts'
                        })
                      ),
                      l.a.createElement(
                        A.b,
                        null,
                        l.a.createElement(u.b, {
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
          element: l.a.createElement(D.d, null, l.a.createElement(M, null))
        },
        {
          id: 'tab-card',
          label: 'Inside a tabs card',
          element: l.a.createElement(
            'div',
            { className: 'slds-tabs_card' },
            l.a.createElement(M, null)
          )
        }
      ],
      P = s(76),
      k = function(e) {
        return l.a.createElement(
          y,
          { isRecordHome: !0 },
          l.a.createElement(
            g,
            null,
            l.a.createElement(
              f,
              { type: 'title' },
              l.a.createElement(v, {
                symbol: 'opportunity',
                objectName: 'Opportunity',
                titleText: 'Acme - 1,200 Widgets'
              })
            ),
            l.a.createElement(
              f,
              { type: 'actions' },
              l.a.createElement(
                T,
                null,
                l.a.createElement(
                  x,
                  null,
                  l.a.createElement(P.a, { isNotSelected: !0, isNeutral: !0 })
                ),
                l.a.createElement(
                  x,
                  null,
                  l.a.createElement(
                    A.a,
                    null,
                    l.a.createElement(
                      A.b,
                      null,
                      l.a.createElement(R.a, { isNeutral: !0 }, 'Edit')
                    ),
                    l.a.createElement(
                      A.b,
                      null,
                      l.a.createElement(R.a, { isNeutral: !0 }, 'Delete')
                    ),
                    l.a.createElement(
                      A.b,
                      null,
                      l.a.createElement(R.a, { isNeutral: !0 }, 'Clone')
                    ),
                    l.a.createElement(
                      A.b,
                      null,
                      l.a.createElement(p.l, {
                        triggerIcon: l.a.createElement(u.b, {
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
          l.a.createElement(
            g,
            { hasGutters: !0 },
            l.a.createElement(
              f,
              { type: 'details' },
              l.a.createElement(
                N,
                null,
                l.a.createElement(
                  j,
                  null,
                  l.a.createElement(S, { title: 'Field 1' }, 'Field 1'),
                  l.a.createElement(
                    C,
                    {
                      title:
                        'Description that demonstrates truncation with a long text field.'
                    },
                    'Description that demonstrates truncation with a long text field.'
                  )
                ),
                l.a.createElement(
                  j,
                  null,
                  l.a.createElement(
                    S,
                    { title: 'Field 2 (3)' },
                    'Field 2 (3)',
                    l.a.createElement(p.l, {
                      triggerIcon: l.a.createElement(u.b, {
                        className: 'slds-button_icon',
                        iconClassName: 'slds-button__icon_small',
                        symbol: 'down',
                        'aria-haspopup': 'true',
                        assistiveText: 'More Actions',
                        title: 'More Actions'
                      })
                    })
                  ),
                  l.a.createElement(
                    C,
                    { title: 'Multiple Values' },
                    'Multiple Values'
                  )
                ),
                l.a.createElement(
                  j,
                  null,
                  l.a.createElement(S, { title: 'Field 3' }, 'Field 3'),
                  l.a.createElement(
                    C,
                    { title: 'Hyperlink' },
                    l.a.createElement(
                      'a',
                      { href: 'javascript:void(0);' },
                      'Hyperlink'
                    )
                  )
                ),
                l.a.createElement(
                  j,
                  null,
                  l.a.createElement(S, { title: 'Field 4' }, 'Field 4'),
                  l.a.createElement(
                    C,
                    {
                      title:
                        'Description (2-line truncation—must use JS to truncate).'
                    },
                    'Description (2-line truncati...'
                  )
                )
              )
            )
          )
        );
      },
      H = l.a.createElement(k, null),
      W = s(40),
      B = function(e) {
        return l.a.createElement(
          'div',
          { className: 'demo-only', style: { width: '300px' } },
          l.a.createElement(
            y,
            { isVertical: !0 },
            l.a.createElement(v, {
              symbol: 'opportunity',
              titleText: 'Burlington Textile Weaving Plant Generator',
              isVertical: !0
            }),
            l.a.createElement(
              T,
              null,
              l.a.createElement(P.a, { isNeutral: !0, isNotSelected: !0 }),
              l.a.createElement(
                A.a,
                null,
                l.a.createElement(
                  A.b,
                  null,
                  l.a.createElement(R.a, { isNeutral: !0 }, 'Edit')
                ),
                l.a.createElement(
                  A.b,
                  null,
                  l.a.createElement(R.a, { isNeutral: !0 }, 'Delete')
                ),
                l.a.createElement(
                  A.b,
                  null,
                  l.a.createElement(u.b, {
                    className: 'slds-button_icon-border-filled',
                    symbol: 'down',
                    'aria-haspopup': 'true',
                    assistiveText: 'More Actions',
                    title: 'More Actions'
                  })
                )
              )
            ),
            l.a.createElement(
              w,
              null,
              l.a.createElement(
                O,
                null,
                l.a.createElement(S, { title: 'Field 1' }, 'Account Name'),
                l.a.createElement(
                  C,
                  {
                    title: 'Burlington Textile Weaving Plant Generator',
                    isVertical: !0
                  },
                  l.a.createElement(
                    'a',
                    { href: 'javascript:void(0);' },
                    'Burlington Textile Weaving Plant Generator'
                  )
                )
              ),
              l.a.createElement(
                O,
                null,
                l.a.createElement(
                  S,
                  { title: 'Address (2)' },
                  'Address (2)',
                  l.a.createElement(p.l, {
                    triggerIcon: l.a.createElement(u.b, {
                      className: 'slds-button_icon',
                      iconClassName: 'slds-button__icon_small',
                      symbol: 'down',
                      'aria-haspopup': 'true',
                      assistiveText: 'More Actions',
                      title: 'More Actions'
                    })
                  })
                ),
                l.a.createElement(
                  C,
                  { title: 'Multiple Values', isVertical: !0 },
                  l.a.createElement('div', null, '1 Market St'),
                  l.a.createElement('div', null, 'San Francisco, CA 94105')
                )
              ),
              l.a.createElement(
                O,
                null,
                l.a.createElement(S, { title: 'Close Date' }, 'Close Date'),
                l.a.createElement(
                  C,
                  { title: '11/1/2018', isVertical: !0 },
                  '11/1/2018'
                )
              ),
              l.a.createElement(
                O,
                null,
                l.a.createElement(
                  S,
                  { title: 'Opportunity Owner' },
                  'Opportunity Owner'
                ),
                l.a.createElement(
                  C,
                  { title: 'Hyperlink', isVertical: !0 },
                  l.a.createElement(
                    'div',
                    { className: 'slds-media slds-media_small' },
                    l.a.createElement(
                      'div',
                      { className: 'slds-media__figure' },
                      l.a.createElement(
                        W.a,
                        { className: 'slds-avatar_circle slds-avatar_x-small' },
                        l.a.createElement('img', {
                          alt: 'Person name',
                          src: '/assets/images/avatar2.jpg',
                          title: 'User avatar'
                        })
                      )
                    ),
                    l.a.createElement(
                      'div',
                      { className: 'slds-media__body' },
                      l.a.createElement(
                        'a',
                        { href: 'javascript:void(0);' },
                        'Jeanette Gomez'
                      )
                    )
                  )
                )
              ),
              l.a.createElement(
                O,
                null,
                l.a.createElement(S, { title: 'Amount' }, 'Amount'),
                l.a.createElement(
                  C,
                  { title: '$375,000.00', isVertical: !0 },
                  '$375,000.00'
                )
              )
            )
          )
        );
      },
      G = l.a.createElement(B, null),
      J = s(80),
      U = J.a.Crumb,
      q = function(e) {
        return l.a.createElement(
          y,
          { isRelatedList: !0 },
          l.a.createElement(
            g,
            null,
            l.a.createElement(
              f,
              { type: 'title' },
              l.a.createElement(
                J.a,
                { className: 'slds-m-bottom_xx-small' },
                l.a.createElement(
                  U,
                  { href: 'javascript:void(0);' },
                  'Accounts'
                ),
                l.a.createElement(
                  U,
                  { href: 'javascript:void(0);' },
                  'Company One'
                )
              ),
              l.a.createElement(v, { titleText: 'Contacts (will truncate)' })
            ),
            l.a.createElement(
              f,
              { type: 'actions' },
              l.a.createElement(
                T,
                null,
                l.a.createElement(
                  x,
                  null,
                  l.a.createElement(
                    A.a,
                    null,
                    l.a.createElement(
                      A.b,
                      null,
                      l.a.createElement(R.a, { isNeutral: !0 }, 'Add Contact')
                    ),
                    l.a.createElement(
                      A.b,
                      null,
                      l.a.createElement(p.l, {
                        triggerIcon: l.a.createElement(u.b, {
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
          l.a.createElement(
            g,
            null,
            l.a.createElement(
              f,
              { type: 'meta' },
              l.a.createElement(_, null, '10 items • sorted by name')
            ),
            l.a.createElement(
              f,
              { type: 'controls' },
              l.a.createElement(
                T,
                null,
                l.a.createElement(
                  x,
                  null,
                  l.a.createElement(p.l, {
                    triggerIcon: l.a.createElement(u.b, {
                      className: 'slds-button_icon-more',
                      symbol: 'table',
                      hasDropdown: !0,
                      assistiveText: 'Change view',
                      title: 'Change view'
                    })
                  })
                ),
                l.a.createElement(
                  x,
                  null,
                  l.a.createElement(
                    A.a,
                    null,
                    l.a.createElement(
                      A.b,
                      null,
                      l.a.createElement(u.b, {
                        className: 'slds-button_icon-border',
                        symbol: 'chart',
                        assistiveText: 'Chart',
                        title: 'Chart'
                      })
                    ),
                    l.a.createElement(
                      A.b,
                      null,
                      l.a.createElement(u.b, {
                        className: 'slds-button_icon-border',
                        symbol: 'filterList',
                        assistiveText: 'Filter List',
                        title: 'Filter List'
                      })
                    ),
                    l.a.createElement(
                      A.b,
                      null,
                      l.a.createElement(p.l, {
                        triggerIcon: l.a.createElement(u.b, {
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
      },
      $ = l.a.createElement(q, null),
      z = n.c.code,
      K = n.c.h2,
      Q = n.c.h3,
      X = n.c.h4,
      Y = n.c.li,
      Z = n.c.p,
      ee = n.c.strong,
      te = n.c.ul,
      se = function() {
        return Object(a.createElement)(
          n.b,
          {},
          Object(a.createElement)(
            'div',
            { className: 'lead doc' },
            'Page headers are used at the top of several page types and contains the Title of the page.'
          ),
          Object(a.createElement)(r.a, { exampleOnly: !0 }, I),
          K({ id: 'About-Page-header' }, 'About Page header'),
          Z(
            {},
            'The Page Header uses the ',
            z({}, '.slds-page-header'),
            ' class as a base and is comprised of multiple components including the Title of the page and supporting details. For large form factors, it may include actions.'
          ),
          K({ id: 'Base' }, 'Base'),
          Object(a.createElement)(r.a, null, V),
          K({ id: 'Object-Home' }, 'Object Home'),
          Object(a.createElement)(r.a, null, I),
          Z(
            {},
            'The title for the Object Home page header is a filtering component. The ',
            z({}, '.slds-text-focus'),
            ' class is placed on the media object that contains the title and down icon to simulate a hover and focus state of a link.'
          ),
          Z(
            {},
            'This component is created entirely of existing components like buttons, button groups, and icons.'
          ),
          Q({ id: 'Examples' }, 'Examples'),
          X({ id: 'With-extra-long-name' }, 'With extra long name'),
          Object(a.createElement)(r.a, null, Object(i.e)(F, 'base-extra-long')),
          X({ id: 'Inside-a-card' }, 'Inside a card'),
          Object(a.createElement)(r.a, null, Object(i.e)(F, 'card')),
          X({ id: 'Inside-a-tabs-card' }, 'Inside a tabs card'),
          Object(a.createElement)(r.a, null, Object(i.e)(F, 'tab-card')),
          K({ id: 'Record-Home' }, 'Record Home'),
          Object(a.createElement)(r.a, null, H),
          Z(
            {},
            "Page header record home contains up to four compact layout fields. They're contained in the ",
            z({}, '.slds-page-header__detail-row'),
            ' div. That div contains the top and bottom spacing needed for this version of the page header.'
          ),
          Z(
            {},
            'When text is truncated, the full text should be placed in a tooltip on hover (currently shown in the title attribute). One line truncation is created by using the ',
            z({}, '.slds-truncate'),
            ' class. Two line truncation must be achieved using JavaScript.'
          ),
          Z(
            {},
            'The page header is located at the top of every record home. It includes the record title and compact layout for a record. Excluding the title, the page header displays 4 compact layout fields. Similar data types can be rolled up and be displayed as a single field.'
          ),
          Z({}, ee({}, 'Record Title')),
          te(
            {},
            Y({}, 'Display Record Type icon to the left of the title'),
            Y({}, 'Record Type is displayed above the title'),
            Y(
              {},
              'When required, follow action is displayed to the right of the record title'
            ),
            Y(
              {},
              'Display one line of text, truncate when the length conflicts with the page level actions'
            )
          ),
          Z(
            {},
            'As shown in Field 3, web addresses and email addresses should be parsed and displayed as hyperlinks linking to the appropriate ',
            z({}, 'mailto:'),
            " or web url. Do not modify the user's input, display as intended."
          ),
          Z(
            {},
            'When text is truncated, display full field text in browser tooltip on hover.'
          ),
          Z(
            {},
            'Display addresses in two lines. Street address on first line, City, State and Postal Code on line 2. For lengthy addresses, truncate each line individually based on the available width of the area using the ',
            z({}, '.slds-truncate'),
            ' class. Display the full address via browser tooltip.'
          ),
          K({ id: 'Record-Home-Vertical' }, 'Record Home Vertical'),
          Object(a.createElement)(r.a, null, G),
          Z(
            {},
            "Vertical page header record home contains up to seven compact layout fields. They're contained in the ",
            z({}, '.slds-page-header__detail-row'),
            ' div.\nThe heading does not truncate. This is typically used in more compact layouts where more vertical space is desired.'
          ),
          K({ id: 'Related-List' }, 'Related List'),
          Object(a.createElement)(r.a, null, $),
          Z(
            {},
            'The Related List page header is similar to the Object Home page header. It includes a breadcrumb component at the top and the title is truncated.'
          )
        );
      },
      ae = function() {
        return Object(n.a)(se());
      };
  }
});
