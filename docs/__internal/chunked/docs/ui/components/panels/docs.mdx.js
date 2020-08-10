var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/panels/docs.mdx.js'] = (function(
  e
) {
  function t(t) {
    for (
      var a, o, r = t[0], s = t[1], c = t[2], h = 0, p = [];
      h < r.length;
      h++
    )
      (o = r[h]),
        Object.prototype.hasOwnProperty.call(l, o) && l[o] && p.push(l[o][0]),
        (l[o] = 0);
    for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
    for (d && d(t); p.length; ) p.shift()();
    return i.push.apply(i, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], a = !0, r = 1; r < n.length; r++) {
        var s = n[r];
        0 !== l[s] && (a = !1);
      }
      a && (i.splice(t--, 1), (e = o((o.s = n[0]))));
    }
    return e;
  }
  var a = {},
    l = { 52: 0 },
    i = [];
  function o(t) {
    if (a[t]) return a[t].exports;
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.m = e),
    (o.c = a),
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
        for (var a in e)
          o.d(
            n,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
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
  var r = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    s = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var c = 0; c < r.length; c++) t(r[c]);
  var d = s;
  return i.push([132, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  132: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getElement', function() {
        return P;
      }),
      n.d(t, 'getContents', function() {
        return x;
      });
    var a = n(0),
      l = n(4),
      i = n(1),
      o = n(23),
      r = n(11),
      s = n(15),
      c = n(67),
      d = n(39),
      h = (n(10), l.c.a),
      p = l.c.code,
      m = l.c.h2,
      u = l.c.h3,
      f = l.c.h4,
      b = l.c.li,
      g = l.c.ol,
      y = l.c.p,
      v = l.c.strong,
      O = l.c.table,
      j = l.c.tbody,
      E = l.c.td,
      k = l.c.th,
      _ = l.c.thead,
      w = l.c.tr,
      P = function() {
        return Object(a.createElement)(
          l.b,
          {},
          Object(a.createElement)(
            'div',
            { className: 'doc lead' },
            'A panel is typically used to provide supplemental information or form inputs that relate to your primary canvas.'
          ),
          Object(a.createElement)(
            i.a,
            {
              exampleOnly: !0,
              demoStyles:
                ' background-color: #fafaf9; position: relative; height: 200px; overflow: hidden; '
            },
            Object(a.createElement)(
              c.b,
              {
                size: 'medium',
                title: 'Panel Header',
                docked: 'left',
                invoke: 'toggle'
              },
              'A panel body accepts any layout or component'
            )
          ),
          m({ id: 'About-Panel' }, 'About Panel'),
          y(
            {},
            'A panel is docked to the left/right side of a viewport and is in the document flow of the canvas or main content.'
          ),
          y({}, v({}, 'Use this component when:')),
          g(
            {},
            b(
              {},
              'The canvas content extends beyond the boundaries of the viewport, while panning and zooming is supported'
            ),
            b(
              {},
              'It is not important to see canvas content while completing the task in a Panel'
            ),
            b({}, 'The task performed in a Panel is momentary')
          ),
          y(
            {},
            'Toggling visibility of a Panel will re-flow the main content.'
          ),
          y(
            {},
            'The panel should take up 100% of the height of its parent container. In most cases, that would be the viewport or main stage of your application.'
          ),
          m({ id: 'Base' }, 'Base'),
          Object(a.createElement)(
            r.a,
            { title: 'Panel base' },
            Object(a.createElement)(
              i.a,
              {
                demoStyles:
                  ' background-color: #fafaf9; position: relative; height: 600px; overflow: hidden; '
              },
              Object(a.createElement)(
                c.b,
                {
                  size: 'medium',
                  title: 'Panel Header',
                  docked: 'left',
                  invoke: 'toggle'
                },
                'A panel body accepts any layout or component'
              )
            )
          ),
          m({ id: 'Header' }, 'Header'),
          y(
            {},
            'The header is docked to the top of its panel. When the content of the panel body becomes overflowed, the body will provide scrolling while the header remains visible in place.'
          ),
          y(
            {},
            'The header of a left/right docked panel has left-aligned text by default and one icon that dismisses the panel. The header title should truncate when it becomes too long for the panel width by using the ',
            p({}, 'slds-truncate'),
            ' class on the title.'
          ),
          Object(a.createElement)(
            r.a,
            { title: 'Panel base - header' },
            Object(a.createElement)(
              i.a,
              {
                demoStyles:
                  ' background-color: #fafaf9; position: relative; height: 50px; overflow: hidden; '
              },
              Object(a.createElement)(c.b, {
                size: 'medium',
                title: 'Panel Header',
                docked: 'left',
                invoke: 'toggle'
              })
            )
          ),
          u({ id: 'Centered-Text' }, 'Centered Text'),
          y(
            {},
            'To center the header title, add the class ',
            p({}, 'slds-panel__header_align-center'),
            ' to the ',
            p({}, '<div>'),
            ' with class ',
            p({}, 'slds-panel__header'),
            '.'
          ),
          Object(a.createElement)(
            r.a,
            { title: 'Panel base - header' },
            Object(a.createElement)(
              i.a,
              {
                demoStyles:
                  ' background-color: #fafaf9; position: relative; height: 50px; overflow: hidden; '
              },
              Object(a.createElement)(c.b, {
                size: 'medium',
                title: 'Panel Header',
                docked: 'left',
                invoke: 'toggle',
                hasCenterTitle: !0
              })
            )
          ),
          u({ id: 'Custom-Header' }, 'Custom Header'),
          y(
            {},
            'If a panel header requires additional elements outside of a title and close button, The panel header needs to have the class ',
            p({}, 'slds-panel__header_custom'),
            ' added to ',
            p({}, 'slds-panel__header'),
            '. This notifies the component that it has a custom layout in the header.'
          ),
          Object(a.createElement)(
            o.a,
            { toggleCode: !1 },
            Object(a.createElement)(
              'div',
              { className: 'slds-panel__header slds-panel__header_custom' },
              '...'
            )
          ),
          y(
            {},
            'The ',
            p({}, '&lt;h2&gt;'),
            ' which contains the title of the panel requires the class ',
            p({}, 'slds-panel__header-title'),
            '.'
          ),
          m({ id: 'Invoked-via-Toggle' }, 'Invoked via Toggle'),
          Object(a.createElement)(
            s.a,
            { type: 'a11y', header: 'Accessibility Requirement' },
            Object(a.createElement)(
              'p',
              null,
              'When toggling the visibility, author must manage user focus by placing the user inside the panel when it opens and returning them to the trigger when it closes.'
            )
          ),
          u({ id: 'Positioning' }, 'Positioning'),
          y(
            {},
            'The ',
            p({}, 'slds-panel_docked'),
            ' element can be positioned on the left or right side of a viewport by adding the class ',
            p({}, 'slds-panel_docked-left'),
            ' or ',
            p({}, 'slds-panel_docked-right'),
            '.'
          ),
          f({ id: 'Left-side' }, 'Left side'),
          Object(a.createElement)(
            r.a,
            { title: 'Panel base - left dock toggle' },
            Object(a.createElement)(
              i.a,
              {
                demoStyles:
                  ' background-color: #fafaf9; position: relative; height: 200px; overflow: hidden; '
              },
              Object(a.createElement)(
                c.b,
                {
                  size: 'medium',
                  title: 'Panel Header',
                  docked: 'left',
                  invoke: 'toggle'
                },
                'A panel body accepts any layout or component'
              )
            )
          ),
          f({ id: 'Right-side' }, 'Right side'),
          Object(a.createElement)(
            r.a,
            { title: 'Panel base - right dock toggle' },
            Object(a.createElement)(
              i.a,
              {
                demoStyles:
                  ' background-color: #fafaf9; position: relative; height: 200px; overflow: hidden; '
              },
              Object(a.createElement)(
                c.b,
                {
                  size: 'medium',
                  title: 'Panel Header',
                  docked: 'right',
                  invoke: 'toggle'
                },
                'A panel body accepts any layout or component'
              )
            )
          ),
          m({ id: 'Drilled-In-State' }, 'Drilled-In State'),
          Object(a.createElement)(
            s.a,
            { type: 'note', header: 'Design Note' },
            Object(a.createElement)(
              'p',
              null,
              'If the panel has been drilled into, then the panel displays an arrow facing to the left to indicate the direction the user drilled in from.'
            )
          ),
          Object(a.createElement)(
            s.a,
            { type: 'a11y', header: 'Accessibility Requirement' },
            Object(a.createElement)(
              'p',
              null,
              'When the user drills in, the author must manage user focus by keeping the user inside the panel when it drills in and returning them to the drill-in trigger when it the user presses the back arrow.'
            )
          ),
          u({ id: 'Positioning-2' }, 'Positioning'),
          f({ id: 'Left-side-2' }, 'Left side'),
          Object(a.createElement)(
            r.a,
            { title: 'Panel base - Left dock drill in' },
            Object(a.createElement)(
              i.a,
              {
                demoStyles:
                  ' background-color: #fafaf9; position: relative; height: 200px; overflow: hidden; '
              },
              Object(a.createElement)(
                c.b,
                {
                  size: 'medium',
                  title: 'Panel Header',
                  docked: 'left',
                  invoke: 'drill-in'
                },
                'A panel body accepts any layout or component'
              )
            )
          ),
          f({ id: 'Right-side-2' }, 'Right side'),
          Object(a.createElement)(
            r.a,
            { title: 'Panel base - Right dock drill in' },
            Object(a.createElement)(
              i.a,
              {
                demoStyles:
                  ' background-color: #fafaf9; position: relative; height: 200px; overflow: hidden; '
              },
              Object(a.createElement)(
                c.b,
                {
                  size: 'medium',
                  title: 'Panel Header',
                  docked: 'right',
                  invoke: 'drill-in'
                },
                'A panel body accepts any layout or component'
              )
            )
          ),
          m({ id: 'Sizing' }, 'Sizing'),
          y(
            {},
            'The panel width can be modified by applying a sizing class to the ',
            p({}, 'slds-panel'),
            ' element.'
          ),
          y({}, 'The panels come in 5 different sizes:'),
          O(
            {},
            _({}, w({}, k({}, 'Width'), k({}, 'SLDS Class'))),
            j(
              {},
              w({}, E({}, '240px'), E({}, p({}, 'slds-size_small'))),
              w({}, E({}, '320px'), E({}, p({}, 'slds-size_medium'))),
              w({}, E({}, '400px'), E({}, p({}, 'slds-size_large'))),
              w({}, E({}, '640px'), E({}, p({}, 'slds-size_x-large'))),
              w({}, E({}, '100%'), E({}, p({}, 'slds-size_full')))
            )
          ),
          m({ id: 'Panel-Visibility' }, 'Panel Visibility'),
          u({ id: 'Open-as-a-drawer' }, 'Open as a drawer'),
          y(
            {},
            'A panel causes reflow by being in the flow of the layout rather than overlaid on top of the content. To achieve this, simply toggle the class ',
            p({}, 'slds-is-open'),
            ' to the ',
            p({}, 'slds-panel_docked'),
            ' element.'
          ),
          Object(a.createElement)(
            r.a,
            { title: 'Panel base - Drawer' },
            Object(a.createElement)(c.a, { drawer: !0 })
          ),
          m({ id: 'Panels-for-Filtering' }, 'Panels for Filtering'),
          y(
            {},
            'Filtering lists or reports can be done by using a Filtering expressions inside of a Panel. Check out the ',
            h(
              { href: '/components/expression/#filtering' },
              'Filtering expression'
            ),
            ' component for different states and accessibility requirements.'
          ),
          Object(a.createElement)(
            s.a,
            { type: 'a11y', header: 'Accessibility Requirement' },
            Object(a.createElement)(
              'p',
              null,
              'Make sure to use assistive text to improve the clarity of what you might be editing, for example, add',
              ' ',
              Object(a.createElement)(
                'code',
                null,
                Object(a.createElement)(
                  'span',
                  { className: 'slds-assistive-text' },
                  'Edit filter:'
                )
              ),
              ' ',
              'to the button element inside each filterable object.'
            )
          ),
          Object(a.createElement)(
            i.a,
            {
              demoStyles:
                ' background-color: #fafaf9; position: relative; height: 600px; overflow: hidden; '
            },
            Object(a.createElement)(
              c.b,
              {
                size: 'medium',
                title: 'Filter',
                docked: 'right',
                invoke: 'toggle'
              },
              Object(a.createElement)(
                d.c,
                null,
                Object(a.createElement)(
                  'ol',
                  { className: 'slds-list_vertical slds-list_vertical-space' },
                  Object(a.createElement)(
                    d.a,
                    { type: 'Show Me' },
                    'All Products'
                  )
                ),
                Object(a.createElement)(
                  'h3',
                  { className: 'slds-text-body_small slds-m-vertical_x-small' },
                  'Matching all these filters'
                ),
                Object(a.createElement)(
                  'ol',
                  { className: 'slds-list_vertical slds-list_vertical-space' },
                  Object(a.createElement)(
                    d.a,
                    { type: 'Created Date', removable: !0 },
                    'equals THIS WEEK'
                  ),
                  Object(a.createElement)(
                    d.a,
                    { type: 'List Price', removable: !0 },
                    'greater than "500"'
                  )
                ),
                Object(a.createElement)(d.d, null)
              )
            )
          )
        );
      },
      x = function() {
        return Object(l.a)(P());
      };
  },
  18: function(e, t) {
    e.exports = JSBeautify;
  },
  19: function(e, t) {
    e.exports = ReactDOM;
  }
});
