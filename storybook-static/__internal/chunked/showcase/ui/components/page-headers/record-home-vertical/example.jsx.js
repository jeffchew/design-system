var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/page-headers/record-home-vertical/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, i, o = t[0], s = t[1], c = t[2], m = 0, p = [];
      m < o.length;
      m++
    )
      (i = o[m]),
        Object.prototype.hasOwnProperty.call(n, i) && n[i] && p.push(n[i][0]),
        (n[i] = 0);
    for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
    for (u && u(t); p.length; ) p.shift()();
    return l.push.apply(l, c || []), a();
  }
  function a() {
    for (var e, t = 0; t < l.length; t++) {
      for (var a = l[t], r = !0, o = 1; o < a.length; o++) {
        var s = a[o];
        0 !== n[s] && (r = !1);
      }
      r && (l.splice(t--, 1), (e = i((i.s = a[0]))));
    }
    return e;
  }
  var r = {},
    n = {
      108: 0,
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
  function i(t) {
    if (r[t]) return r[t].exports;
    var a = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, i), (a.l = !0), a.exports;
  }
  (i.m = e),
    (i.c = r),
    (i.d = function(e, t, a) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (i.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.t = function(e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (i.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          i.d(
            a,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return a;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return i.d(t, 'a', t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = '/assets/scripts/bundle/');
  var o = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    s = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var c = 0; c < o.length; c++) t(o[c]);
  var u = s;
  return l.push([195, 0]), a();
})({
  0: function(e, t) {
    e.exports = React;
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  },
  195: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'RecordHomeVertical', function() {
        return p;
      });
    var r = a(0),
      n = a.n(r),
      l = a(43),
      i = a(13),
      o = a(77),
      s = a(30),
      c = a(4),
      u = a(14),
      m = a(17),
      p = function(e) {
        return n.a.createElement(
          'div',
          { className: 'demo-only', style: { width: '300px' } },
          n.a.createElement(
            m.a,
            { isVertical: !0 },
            n.a.createElement(m.m, {
              symbol: 'opportunity',
              titleText: 'Burlington Textile Weaving Plant Generator',
              isVertical: !0
            }),
            n.a.createElement(
              m.d,
              null,
              n.a.createElement(o.StatefulButton, {
                isNeutral: !0,
                isNotSelected: !0
              }),
              n.a.createElement(
                s.ButtonGroupList,
                null,
                n.a.createElement(
                  s.ButtonGroupListItem,
                  null,
                  n.a.createElement(i.Button, { isNeutral: !0 }, 'Edit')
                ),
                n.a.createElement(
                  s.ButtonGroupListItem,
                  null,
                  n.a.createElement(i.Button, { isNeutral: !0 }, 'Delete')
                ),
                n.a.createElement(
                  s.ButtonGroupListItem,
                  null,
                  n.a.createElement(c.b, {
                    className: 'slds-button_icon-border-filled',
                    symbol: 'down',
                    'aria-haspopup': 'true',
                    assistiveText: 'More Actions',
                    title: 'More Actions'
                  })
                )
              )
            ),
            n.a.createElement(
              m.g,
              null,
              n.a.createElement(
                m.h,
                null,
                n.a.createElement(m.j, { title: 'Field 1' }, 'Account Name'),
                n.a.createElement(
                  m.e,
                  {
                    title: 'Burlington Textile Weaving Plant Generator',
                    isVertical: !0
                  },
                  n.a.createElement(
                    'a',
                    { href: 'javascript:void(0);' },
                    'Burlington Textile Weaving Plant Generator'
                  )
                )
              ),
              n.a.createElement(
                m.h,
                null,
                n.a.createElement(
                  m.j,
                  { title: 'Address (2)' },
                  'Address (2)',
                  n.a.createElement(u.Trigger, {
                    triggerIcon: n.a.createElement(c.b, {
                      className: 'slds-button_icon',
                      iconClassName: 'slds-button__icon_small',
                      symbol: 'down',
                      'aria-haspopup': 'true',
                      assistiveText: 'More Actions',
                      title: 'More Actions'
                    })
                  })
                ),
                n.a.createElement(
                  m.e,
                  { title: 'Multiple Values', isVertical: !0 },
                  n.a.createElement('div', null, '1 Market St'),
                  n.a.createElement('div', null, 'San Francisco, CA 94105')
                )
              ),
              n.a.createElement(
                m.h,
                null,
                n.a.createElement(m.j, { title: 'Close Date' }, 'Close Date'),
                n.a.createElement(
                  m.e,
                  { title: '11/1/2018', isVertical: !0 },
                  '11/1/2018'
                )
              ),
              n.a.createElement(
                m.h,
                null,
                n.a.createElement(
                  m.j,
                  { title: 'Opportunity Owner' },
                  'Opportunity Owner'
                ),
                n.a.createElement(
                  m.e,
                  { title: 'Hyperlink', isVertical: !0 },
                  n.a.createElement(
                    'div',
                    { className: 'slds-media slds-media_small' },
                    n.a.createElement(
                      'div',
                      { className: 'slds-media__figure' },
                      n.a.createElement(
                        l.Avatar,
                        { className: 'slds-avatar_circle slds-avatar_x-small' },
                        n.a.createElement('img', {
                          alt: 'Person name',
                          src: '/assets/images/avatar2.jpg',
                          title: 'User avatar'
                        })
                      )
                    ),
                    n.a.createElement(
                      'div',
                      { className: 'slds-media__body' },
                      n.a.createElement(
                        'a',
                        { href: 'javascript:void(0);' },
                        'Jeanette Gomez'
                      )
                    )
                  )
                )
              ),
              n.a.createElement(
                m.h,
                null,
                n.a.createElement(m.j, { title: 'Amount' }, 'Amount'),
                n.a.createElement(
                  m.e,
                  { title: '$375,000.00', isVertical: !0 },
                  '$375,000.00'
                )
              )
            )
          )
        );
      };
    t.default = n.a.createElement(p, null);
  }
});
