var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/tooltips/docs.mdx.js'] = (function(
  e
) {
  function t(t) {
    for (
      var o, r, a = t[0], c = t[1], s = t[2], b = 0, d = [];
      b < a.length;
      b++
    )
      (r = a[b]),
        Object.prototype.hasOwnProperty.call(l, r) && l[r] && d.push(l[r][0]),
        (l[r] = 0);
    for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
    for (u && u(t); d.length; ) d.shift()();
    return i.push.apply(i, s || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], o = !0, a = 1; a < n.length; a++) {
        var c = n[a];
        0 !== l[c] && (o = !1);
      }
      o && (i.splice(t--, 1), (e = r((r.s = n[0]))));
    }
    return e;
  }
  var o = {},
    l = { 78: 0 },
    i = [];
  function r(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = e),
    (r.c = o),
    (r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
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
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
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
  var a = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    c = a.push.bind(a);
  (a.push = t), (a = a.slice());
  for (var s = 0; s < a.length; s++) t(a[s]);
  var u = c;
  return i.push([133, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  133: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getElement', function() {
        return m;
      }),
      n.d(t, 'getContents', function() {
        return h;
      });
    var o = n(0),
      l = n(4),
      i = n(1),
      r = n(26),
      a = n(43),
      c = (n(15), n(54)),
      s = n(2),
      u = l.c.a,
      b = l.c.code,
      d = l.c.h2,
      p = l.c.h3,
      f = l.c.p,
      m = function() {
        return Object(o.createElement)(
          l.b,
          {},
          Object(o.createElement)(
            'div',
            { className: 'doc lead' },
            'A Tooltip is a small piece of contextual information about an element on the screen, which is displayed when a user hovers or focuses on the element it is describing. It is not focusable and cannot contain focusable content.'
          ),
          Object(o.createElement)(
            i.a,
            {
              exampleOnly: !0,
              demoStyles:
                ' padding-left: 1rem; padding-top: 1rem; position: relative; '
            },
            Object(s.e)(c.c, 'button-icon')
          ),
          d({ id: 'About-Tooltips' }, 'About Tooltips'),
          f(
            {},
            'Nubbins are indicators that inform the user of the direction of the content associated with the tooltip. A tooltip can accept the following nubbin position classes, ',
            b({}, '.slds-nubbin_left'),
            ', ',
            b({}, '.slds-nubbin_left-top'),
            ', ',
            b({}, '.slds-nubbin_left-bottom'),
            ', ',
            b({}, '.slds-nubbin_top-left'),
            ', ',
            b({}, '.slds-nubbin_top-right'),
            ', ',
            b({}, '.slds-nubbin_right-top'),
            ', ',
            b({}, '.slds-nubbin_right-bottom'),
            ', ',
            b({}, '.slds-nubbin_bottom-left'),
            ', ',
            b({}, '.slds-nubbin_bottom-right'),
            '.'
          ),
          f(
            {},
            'Learn more about how to use them at the ',
            u(
              { href: '/components/popovers/#flavor-nubbins' },
              'Nubbins documentation'
            ),
            '.'
          ),
          p({ id: 'Accessibility' }, 'Accessibility'),
          f(
            {},
            'Showing the tooltip on hover or on keyboard focus of a focusable element ensures that all users can access it, even if they aren’t using a mouse. Examples of focusable elements include links, buttons, and inputs. Give the tooltip an ID and use that as the value of the ',
            b({}, 'aria-describedby'),
            ' attribute of the DOM element it describes. This helps users of assistive technology read the tooltip content.'
          ),
          f(
            {},
            'When using a link as the focusable element to show a tooltip, add a ',
            b({}, '<div>'),
            ' at the bottom of the tooltip bubble that includes a description of where the link will take the user. Add ',
            b({}, "aria-hidden='true'"),
            ' to this element, and ensure that the link text itself matches the text within this ',
            b({}, '<div>'),
            '.'
          ),
          d({ id: 'Base' }, 'Base'),
          Object(o.createElement)(
            i.a,
            {
              demoStyles:
                ' padding-left: 2rem; padding-top: 5rem; position: relative; '
            },
            c.b
          ),
          d({ id: 'Examples' }, 'Examples'),
          p({ id: 'As-an-icon-link' }, 'As an icon link'),
          Object(o.createElement)(
            i.a,
            {
              demoStyles:
                ' padding-left: 2rem; padding-top: 6.75rem; position: relative; '
            },
            Object(s.e)(c.c, 'link')
          ),
          p({ id: 'As-a-Button-Icon' }, 'As a Button Icon'),
          Object(o.createElement)(
            i.a,
            {
              demoStyles:
                ' padding-left: 2rem; padding-top: 5rem; position: relative; '
            },
            Object(s.e)(c.c, 'button-icon')
          ),
          p({ id: 'As-a-Button' }, 'As a Button'),
          Object(o.createElement)(
            i.a,
            {
              demoStyles:
                ' padding-left: 2rem; padding-top: 5rem; position: relative; '
            },
            Object(s.e)(c.c, 'button')
          ),
          d({ id: 'Modifiers' }, 'Modifiers'),
          p({ id: 'Motion' }, 'Motion'),
          Object(o.createElement)(
            a.a,
            null,
            Object(o.createElement)(
              r.a,
              null,
              Object(o.createElement)('strong', null, 'Bottom To Top'),
              Object(o.createElement)(
                i.a,
                { toggleCode: !1 },
                Object(s.e)(c.c, 'bottom-to-top')
              )
            ),
            Object(o.createElement)(
              r.a,
              null,
              Object(o.createElement)('strong', null, 'Top To Bottom'),
              Object(o.createElement)(
                i.a,
                { toggleCode: !1 },
                Object(s.e)(c.c, 'top-to-bottom')
              )
            ),
            Object(o.createElement)(
              r.a,
              null,
              Object(o.createElement)('strong', null, 'Right To Left'),
              Object(o.createElement)(
                i.a,
                { toggleCode: !1 },
                Object(s.e)(c.c, 'right-to-left')
              )
            ),
            Object(o.createElement)(
              r.a,
              null,
              Object(o.createElement)('strong', null, 'Left To Right'),
              Object(o.createElement)(
                i.a,
                { toggleCode: !1 },
                Object(s.e)(c.c, 'left-to-right')
              )
            )
          ),
          p({ id: 'Toggle' }, 'Toggle'),
          Object(o.createElement)(
            a.a,
            null,
            Object(o.createElement)(
              r.a,
              null,
              Object(o.createElement)('strong', null, 'Rise'),
              Object(o.createElement)(
                i.a,
                { toggleCode: !1 },
                Object(s.e)(c.c, 'rise')
              )
            ),
            Object(o.createElement)(
              r.a,
              null,
              Object(o.createElement)('strong', null, 'Fall'),
              Object(o.createElement)(
                i.a,
                { toggleCode: !1 },
                Object(s.e)(c.c, 'fall')
              )
            )
          )
        );
      },
      h = function() {
        return Object(l.a)(m());
      };
  },
  18: function(e, t) {
    e.exports = JSBeautify;
  },
  19: function(e, t) {
    e.exports = ReactDOM;
  }
});
