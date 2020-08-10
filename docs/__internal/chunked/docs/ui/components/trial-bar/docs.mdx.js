var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/trial-bar/docs.mdx.js'] = (function(
  e
) {
  function t(t) {
    for (
      var l, r, o = t[0], c = t[1], i = t[2], u = 0, m = [];
      u < o.length;
      u++
    )
      (r = o[u]),
        Object.prototype.hasOwnProperty.call(a, r) && a[r] && m.push(a[r][0]),
        (a[r] = 0);
    for (l in c) Object.prototype.hasOwnProperty.call(c, l) && (e[l] = c[l]);
    for (d && d(t); m.length; ) m.shift()();
    return n.push.apply(n, i || []), s();
  }
  function s() {
    for (var e, t = 0; t < n.length; t++) {
      for (var s = n[t], l = !0, o = 1; o < s.length; o++) {
        var c = s[o];
        0 !== a[c] && (l = !1);
      }
      l && (n.splice(t--, 1), (e = r((r.s = s[0]))));
    }
    return e;
  }
  var l = {},
    a = { 81: 0 },
    n = [];
  function r(t) {
    if (l[t]) return l[t].exports;
    var s = (l[t] = { i: t, l: !1, exports: {} });
    return e[t].call(s.exports, s, s.exports, r), (s.l = !0), s.exports;
  }
  (r.m = e),
    (r.c = l),
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
        for (var l in e)
          r.d(
            s,
            l,
            function(t) {
              return e[t];
            }.bind(null, l)
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
  var o = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    c = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var i = 0; i < o.length; i++) t(o[i]);
  var d = c;
  return n.push([232, 0]), s();
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
  232: function(e, t, s) {
    'use strict';
    s.r(t),
      s.d(t, 'getElement', function() {
        return g;
      }),
      s.d(t, 'getContents', function() {
        return y;
      });
    var l = s(0),
      a = s.n(l),
      n = s(4),
      r = s(1),
      o = s(2),
      c = s(10),
      i = s(9),
      d = s(5),
      u = s.n(d),
      m = function(e) {
        return a.a.createElement(
          'div',
          { className: 'slds-trial-header slds-grid' },
          a.a.createElement(
            'div',
            { className: 'slds-grid' },
            a.a.createElement(
              'button',
              { className: 'slds-button slds-m-right_small' },
              'Take the salesforce tour'
            ),
            a.a.createElement(
              'div',
              {
                className: u()(
                  'slds-grid slds-dropdown-trigger slds-dropdown-trigger_click',
                  e.tourMenuOpen ? 'slds-is-open' : null
                )
              },
              a.a.createElement(
                'button',
                { className: 'slds-button', 'aria-haspopup': 'true' },
                a.a.createElement(c.a, {
                  className: 'slds-button__icon slds-button__icon_left',
                  sprite: 'utility',
                  symbol: 'right'
                }),
                'Choose your tour'
              ),
              a.a.createElement(
                i.f,
                { className: 'slds-dropdown_inverse slds-dropdown_left' },
                a.a.createElement(
                  i.h,
                  null,
                  a.a.createElement(
                    i.g,
                    {
                      tabIndex: '0',
                      className: 'slds-is-selected',
                      title: 'Completed: Conquer Your Cases'
                    },
                    a.a.createElement(c.a, {
                      className:
                        'slds-icon slds-icon_selected slds-icon_x-small slds-m-right_x-small',
                      sprite: 'utility',
                      symbol: 'check'
                    }),
                    a.a.createElement(
                      'span',
                      { className: 'slds-assistive-text' },
                      'Completed:'
                    ),
                    ' Conquer Your Cases'
                  ),
                  a.a.createElement(
                    i.g,
                    { title: 'Automate For Speed' },
                    a.a.createElement(c.a, {
                      className:
                        'slds-icon slds-icon_selected slds-icon_x-small slds-m-right_x-small',
                      sprite: 'utility',
                      symbol: 'check'
                    }),
                    'Automate For Speed'
                  ),
                  a.a.createElement(
                    i.g,
                    { title: 'Share Your Knowledge' },
                    a.a.createElement(c.a, {
                      className:
                        'slds-icon slds-icon_selected slds-icon_x-small slds-m-right_x-small',
                      sprite: 'utility',
                      symbol: 'check'
                    }),
                    'Share Your Knowledge'
                  ),
                  a.a.createElement(
                    i.g,
                    { title: 'Finish it up in a Flash' },
                    a.a.createElement(c.a, {
                      className:
                        'slds-icon slds-icon_selected slds-icon_x-small slds-m-right_x-small',
                      sprite: 'utility',
                      symbol: 'check'
                    }),
                    'Finish it up in a Flash'
                  ),
                  a.a.createElement('li', {
                    className: 'slds-has-divider_top-space',
                    role: 'separator'
                  }),
                  a.a.createElement(
                    i.g,
                    { title: 'Import Contacts and Accounts' },
                    a.a.createElement(c.a, {
                      className:
                        'slds-icon slds-icon_x-small slds-m-right_x-small',
                      sprite: 'utility',
                      symbol: 'upload'
                    }),
                    'Import Contacts and Accounts'
                  )
                )
              )
            )
          ),
          a.a.createElement(
            'div',
            {
              className:
                'slds-grid slds-grid_vertical-align-center slds-col_bump-left'
            },
            a.a.createElement(
              'span',
              { className: 'slds-box slds-box_xx-small slds-theme_default' },
              '30'
            ),
            a.a.createElement(
              'span',
              { className: 'slds-m-horizontal_x-small' },
              'Days left in trial'
            ),
            a.a.createElement(
              'a',
              {
                href: 'javascript:void(0);',
                className: 'slds-button slds-button_success'
              },
              'Subscribe Now'
            )
          )
        );
      },
      p = a.a.createElement(m, null),
      f = [
        {
          id: 'menu-open',
          label: 'Tour Menu Open',
          element: a.a.createElement(
            'div',
            { className: 'demo-only', style: { height: '240px' } },
            a.a.createElement(m, { tourMenuOpen: !0 })
          )
        }
      ],
      b = n.c.h2,
      h = n.c.h3,
      _ = n.c.h4,
      g = function() {
        return Object(l.createElement)(
          n.b,
          {},
          Object(l.createElement)(
            'div',
            { className: 'doc lead' },
            'Trial bar components are used to provide an interactive and educational prospect experience for setup.'
          ),
          b({ id: 'Header' }, 'Header'),
          Object(l.createElement)(r.a, null, p),
          h({ id: 'States' }, 'States'),
          _({ id: 'Menu-Open' }, 'Menu - Open'),
          Object(l.createElement)(r.a, null, Object(o.e)(f, 'menu-open'))
        );
      },
      y = function() {
        return Object(n.a)(g());
      };
  }
});
