var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/icons/docs.mdx.js'] = (function(e) {
  function t(t) {
    for (
      var a, s, i = t[0], l = t[1], r = t[2], h = 0, u = [];
      h < i.length;
      h++
    )
      (s = i[h]),
        Object.prototype.hasOwnProperty.call(o, s) && o[s] && u.push(o[s][0]),
        (o[s] = 0);
    for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
    for (d && d(t); u.length; ) u.shift()();
    return c.push.apply(c, r || []), n();
  }
  function n() {
    for (var e, t = 0; t < c.length; t++) {
      for (var n = c[t], a = !0, i = 1; i < n.length; i++) {
        var l = n[i];
        0 !== o[l] && (a = !1);
      }
      a && (c.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var a = {},
    o = { 42: 0 },
    c = [];
  function s(t) {
    if (a[t]) return a[t].exports;
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.m = e),
    (s.c = a),
    (s.d = function(e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (s.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (s.t = function(e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          s.d(
            n,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return n;
    }),
    (s.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return s.d(t, 'a', t), t;
    }),
    (s.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = '/assets/scripts/bundle/');
  var i = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    l = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var r = 0; r < i.length; r++) t(i[r]);
  var d = l;
  return c.push([277, 0]), n();
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
  277: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getElement', function() {
        return w;
      }),
      n.d(t, 'getContents', function() {
        return T;
      });
    var a = n(0),
      o = n.n(a),
      c = n(4),
      s = n(1),
      i = n(23),
      l = n(11),
      r = (n(15), n(12)),
      d = n(84),
      h = n(10),
      u = n(5),
      m = n.n(u),
      f = function(e) {
        var t = e.symbol || 'custom5';
        return o.a.createElement(
          'span',
          {
            className: m()('slds-icon_container slds-icon-custom-' + t),
            title: e.title || 'Description of icon when needed'
          },
          o.a.createElement(h.a, {
            className: m()('slds-icon', e.className),
            sprite: 'custom',
            symbol: t
          }),
          o.a.createElement(
            'span',
            { className: 'slds-assistive-text' },
            e.assistiveText || 'Description of icon when needed'
          )
        );
      },
      p = n(81),
      b = n(32),
      g = n(2),
      y = c.c.a,
      j = c.c.code,
      O = c.c.em,
      v = c.c.h2,
      E = c.c.h3,
      S = c.c.li,
      x = c.c.p,
      _ = c.c.ul,
      w = function() {
        return Object(a.createElement)(
          c.b,
          {},
          Object(a.createElement)(
            'div',
            { className: 'doc lead' },
            'Icons provide visual context and enhance usability. Read more in the ',
            Object(a.createElement)(
              'a',
              {
                href: '/guidelines/iconography',
                title: 'Iconography Guidelines'
              },
              'Iconography design guideline'
            ),
            ' and for a full list of icons available, visit the ',
            Object(a.createElement)(
              'a',
              { href: '/icons', title: 'Icons' },
              'Icons page'
            ),
            '.'
          ),
          Object(a.createElement)(
            s.a,
            { exampleOnly: !0 },
            Object(a.createElement)(r.a, {
              className: 'slds-icon-text-default'
            })
          ),
          v({ id: 'About-Icons' }, 'About Icons'),
          x(
            {},
            'Five separate SVG sprites are used to create icons — ',
            y({ href: '/icons/#action' }, 'action'),
            ', ',
            y({ href: '/icons/#custom' }, 'custom'),
            ', ',
            y({ href: '/icons/#doctype' }, 'doctype'),
            ', ',
            y({ href: '/icons/#standard' }, 'standard '),
            ' and ',
            y({ href: '/icons/#utility' }, 'utility'),
            '. Link to the icon SVG sprite by targeting the icon’s hash/ID value in the use href attribute. (You can find the values on the ',
            y({ href: '/icons/' }, 'icon page'),
            '.)'
          ),
          v({ id: 'Accessibility' }, 'Accessibility'),
          x({}, 'Icons require a containing element for two reasons:'),
          _(
            {},
            S(
              {},
              'If assistive text is required, the containing element should contain both the icon and a ',
              j({}, '<span>'),
              ' with hidden assistive text describing the icon using the ',
              j({}, 'slds-assistive-text'),
              ' class.'
            ),
            S(
              {},
              'If the icon is used without a visible, descriptive label, a ',
              j({}, 'title'),
              ' attribute is needed on the containing element. The ',
              j({}, 'title'),
              ' should describe the icon.'
            )
          ),
          x(
            {},
            'If an icon has a visible label that describes what the icon represents, no title or hidden assistive text is required.'
          ),
          x(
            {},
            'The containing element must have the ',
            j({}, 'slds-icon_container'),
            ' class.'
          ),
          v({ id: 'Default' }, 'Default'),
          Object(a.createElement)(
            l.a,
            { title: 'Base Default' },
            Object(a.createElement)(
              s.a,
              null,
              Object(a.createElement)(r.a, {
                className: 'slds-icon-text-default'
              })
            )
          ),
          E(
            { id: 'Structure-and-Implementation' },
            'Structure and Implementation'
          ),
          x(
            {},
            'An icon must have a containing element with the class ',
            j({}, 'slds-icon_container'),
            ' for ',
            y({ href: '#Accessibility' }, 'accessibility support'),
            '. Inside the container, a ',
            j({}, '<svg>'),
            ' with the class ',
            j({}, 'slds-icon'),
            ' contains the reference to your icon and a ',
            j({}, '<span>'),
            ' with the class ',
            j({}, 'slds-assistive-text'),
            ' contains your hidden assistive text that describes the icon. Be sure to read the ',
            y({ href: '#Accessibility' }, 'accessibility section'),
            ' to know when to use assistive text, the ',
            j({}, 'title'),
            ' attribute, or when neither is needed.'
          ),
          x(
            {},
            'When placing the icon code into your page, customize the path in the ',
            j({}, 'use'),
            ' attribute of the ',
            j({}, 'svg'),
            ' to the proper path and icon name for your specific icon. For example, the ',
            O({}, 'case'),
            ' icon in the ',
            O({}, 'standard'),
            ' sprite would have a path like this:'
          ),
          Object(a.createElement)(
            i.a,
            { toggleCode: !1 },
            Object(a.createElement)(
              'svg',
              {
                'aria-hidden': 'true',
                className: 'slds-icon',
                title: 'when needed'
              },
              Object(a.createElement)('use', {
                xlinkHref: '/assets/icons/standard-sprite/svg/symbols.svg#case'
              })
            )
          ),
          x(
            {},
            'If an icon has more than one word in the name, it should be included in the ',
            j({}, 'use'),
            ' attribute with the underscore separator as shown on the icon page. For example: log_a_call.'
          ),
          x(
            {},
            'You must require SLDS in your application for SVG sprites to work. If you’re using Visualforce, see ',
            Object(a.createElement)(
              'a',
              { href: '/platforms/visualforce' },
              'the Visualforce tutorial'
            ),
            '. If you’re using ',
            Object(a.createElement)(
              'a',
              { href: '/platforms/lightning' },
              ' Lightning components, see this documentation'
            ),
            '.'
          ),
          _(
            {},
            S(
              {},
              'You can access the SVG sprites by downloading the entire ',
              y(
                { href: '/resources/downloads' },
                'CSS Framework or just the icons'
              ),
              '. To include a sprite in your application, the recommended method is to place it into the page as the first element inside the ',
              j({}, 'body'),
              ' element. Alternatively, you can leave the sprite in the assets/icons directory and link to it from your page. To render a sprite icon, add the tiny ',
              y(
                { href: 'https://github.com/jonathantneal/svg4everybody' },
                'SVG for Everybody'
              ),
              ' script for Internet Explorer.'
            ),
            S(
              {},
              'When placed into the ',
              j({}, 'body'),
              ', the SVG sprite takes up space in the page. Use either ',
              j({}, 'display:none'),
              ' or ',
              j({}, 'position:absolute'),
              ' and set both the width and height to zero.'
            )
          ),
          v({ id: 'Types' }, 'Types'),
          x(
            {},
            'All available SVG sprites fall into one of these five main categories: action, custom, doctype, standard, and utility.'
          ),
          E({ id: 'Action' }, 'Action'),
          x(
            {},
            'To view all available action icons, see ',
            y({ href: '/icons/#action' }, 'action icons'),
            '.'
          ),
          Object(a.createElement)(
            l.a,
            { title: 'Action' },
            Object(a.createElement)(
              s.a,
              null,
              Object(a.createElement)(d.a, null)
            )
          ),
          E({ id: 'Custom' }, 'Custom'),
          x(
            {},
            'Custom icons have a rounded square shape and use a class on the container for the background color.'
          ),
          x(
            {},
            'To view all available custom icons, see ',
            y({ href: '/icons/#custom' }, 'custom icons'),
            '.'
          ),
          Object(a.createElement)(
            l.a,
            { title: 'Custom' },
            Object(a.createElement)(s.a, null, Object(a.createElement)(f, null))
          ),
          E({ id: 'Doctype' }, 'Doctype'),
          x(
            {},
            'To view all available doctype icons, see ',
            y({ href: '/icons/#doctype' }, 'doctype icons'),
            '.'
          ),
          Object(a.createElement)(
            l.a,
            { title: 'Doctype' },
            Object(a.createElement)(
              s.a,
              null,
              Object(a.createElement)(p.a, null)
            )
          ),
          E({ id: 'Standard' }, 'Standard'),
          x(
            {},
            'Standard icons have a rounded square shape and use a class on the container for the background color.'
          ),
          x(
            {},
            'To view all available standard icons, see ',
            y({ href: '/icons/#standard' }, 'standard icons'),
            '.'
          ),
          Object(a.createElement)(
            l.a,
            { title: 'Standard' },
            Object(a.createElement)(
              s.a,
              null,
              Object(a.createElement)(b.a, null)
            )
          ),
          v({ id: 'Color' }, 'Color'),
          E({ id: 'Default-2' }, 'Default'),
          x(
            {},
            'To change the fill of an icon to the default text color, add the ',
            j({}, 'slds-icon-text-default'),
            ' class to the icon.'
          ),
          Object(a.createElement)(
            l.a,
            { title: 'Utility Default' },
            Object(a.createElement)(
              s.a,
              null,
              Object(a.createElement)(r.a, {
                className: 'slds-icon-text-default'
              })
            )
          ),
          E({ id: 'Current-Color' }, 'Current Color'),
          x(
            {},
            'To change the fill of an icon to match the current color of its parent, add the ',
            j({}, 'slds-current-color'),
            " class to the icon's container. This class utilizes the CSS ",
            j({}, 'currentColor'),
            ' value.'
          ),
          Object(a.createElement)(
            l.a,
            { title: 'Current Color' },
            Object(a.createElement)(
              s.a,
              null,
              Object(a.createElement)(r.a, {
                containerClassName: 'slds-current-color'
              })
            )
          ),
          E({ id: 'Success' }, 'Success'),
          x(
            {},
            'To change the fill of an icon to the success text color, add the ',
            j({}, 'slds-icon-text-success'),
            ' class to the icon.'
          ),
          Object(a.createElement)(
            l.a,
            { title: 'Utility Warning' },
            Object(a.createElement)(
              s.a,
              null,
              Object(a.createElement)(r.a, {
                className: 'slds-icon-text-success'
              })
            )
          ),
          E({ id: 'Warning' }, 'Warning'),
          x(
            {},
            'To change the fill of an icon to the warning text color, add the ',
            j({}, 'slds-icon-text-warning'),
            ' class to the icon.'
          ),
          Object(a.createElement)(
            l.a,
            { title: 'Utility Warning' },
            Object(a.createElement)(
              s.a,
              null,
              Object(a.createElement)(r.a, {
                className: 'slds-icon-text-warning'
              })
            )
          ),
          E({ id: 'Error' }, 'Error'),
          x(
            {},
            'To change the fill of an icon to the error text color, add the ',
            j({}, 'slds-icon-text-error'),
            ' class to the icon.'
          ),
          Object(a.createElement)(
            l.a,
            { title: 'Utility Error' },
            Object(a.createElement)(
              s.a,
              null,
              Object(a.createElement)(r.a, {
                className: 'slds-icon-text-error'
              })
            )
          ),
          E({ id: 'Light' }, 'Light'),
          x(
            {},
            'To change the fill of an icon to the light text color, add the ',
            j({}, 'slds-icon-text-light'),
            ' class to the icon.'
          ),
          Object(a.createElement)(
            l.a,
            { title: 'Utility Light' },
            Object(a.createElement)(
              s.a,
              null,
              Object(a.createElement)(r.a, {
                className: 'slds-icon-text-light'
              })
            )
          ),
          E({ id: 'Background-Color' }, 'Background Color'),
          x(
            {},
            'To change a background color for action, custom, or standard icons, use composed class names:'
          ),
          Object(a.createElement)(
            'code',
            { className: 'docs' },
            '.slds-icon-[sprite name]-[icon name]'
          ),
          x({}, 'Place the class on the ', j({}, '.slds-icon_container'), '.'),
          Object(a.createElement)(
            i.a,
            { toggleCode: !1 },
            Object(a.createElement)('div', {
              className: 'slds-icon_container slds-icon-standard-account'
            })
          ),
          x(
            {},
            'Some icon names have more than one word, separated by ',
            j({}, '_'),
            ' underscores. Replace underscores with dashes when composing the class name. So ',
            j({}, 'log_a_call'),
            ' in the standard icon set becomes ',
            j({}, '.slds-icon-action-log-a-call'),
            '.'
          ),
          _(
            {},
            S(
              {},
              'For ',
              y({ href: '/components/icons/#Action' }, 'action'),
              ' icons, add the ',
              j({}, '.slds-icon_container_circle'),
              ' class to the container (',
              j({}, '.slds-icon_container'),
              '), which changes the background shape to a circle.'
            ),
            S(
              {},
              y({ href: '/components/icons/#Doctype' }, 'Doctype'),
              ' icons have no background color.'
            ),
            S(
              {},
              y({ href: '/components/icons/#Standard' }, 'Standard'),
              ' and ',
              y({ href: '/components/icons/#Custom' }, 'Custom'),
              ' icons have a rounded square shape and use a class on the container for the background color.'
            ),
            S(
              {},
              y({ href: '/components/icons/#Base' }, 'Utility'),
              ' icons have no background color.'
            )
          ),
          v({ id: 'Size' }, 'Size'),
          x(
            {},
            'Size modifiers can be added to the ',
            j({}, 'slds-icon'),
            ' element on all types of icons.'
          ),
          E({ id: 'XX-Small' }, 'XX-Small'),
          x(
            {},
            'To change the size of an icon to xx-small, add the ',
            j({}, 'slds-icon_xx-small'),
            ' class to the icon.'
          ),
          Object(a.createElement)(
            l.a,
            { title: 'Utility XX-Small' },
            Object(a.createElement)(
              s.a,
              null,
              Object(a.createElement)(r.a, {
                className: 'slds-icon-text-default slds-icon_xx-small'
              })
            )
          ),
          E({ id: 'X-Small' }, 'X-Small'),
          x(
            {},
            'To change the size of an icon to x-small, add the ',
            j({}, 'slds-icon_x-small'),
            ' class to the icon.'
          ),
          Object(a.createElement)(
            l.a,
            { title: 'Utility X-Small' },
            Object(a.createElement)(
              s.a,
              null,
              Object(a.createElement)(r.a, {
                className: 'slds-icon-text-default slds-icon_x-small'
              })
            )
          ),
          E({ id: 'Small' }, 'Small'),
          x(
            {},
            'To change the size of an icon to small, add the ',
            j({}, 'slds-icon_small'),
            ' class to the icon.'
          ),
          Object(a.createElement)(
            l.a,
            { title: 'Utility Small' },
            Object(a.createElement)(
              s.a,
              null,
              Object(a.createElement)(r.a, {
                className: 'slds-icon-text-default slds-icon_small'
              })
            )
          ),
          E({ id: 'Large' }, 'Large'),
          x(
            {},
            'To change the size of an icon to large, add the ',
            j({}, 'slds-icon_large'),
            ' class to the icon.'
          ),
          Object(a.createElement)(
            l.a,
            { title: 'Utility Large' },
            Object(a.createElement)(
              s.a,
              null,
              Object(a.createElement)(r.a, {
                className: 'slds-icon-text-default slds-icon_large'
              })
            )
          ),
          v({ id: 'Right-to-Left-Support' }, 'Right-to-Left Support'),
          x(
            {},
            'To horizontally flip an icon to support bidirectionality (reading from right to left), use the ',
            j({}, 'slds-icon_flip'),
            ' class with the ',
            j({}, 'slds-icon_container'),
            ' class, and setting the ',
            j({}, 'dir'),
            ' attribute on any parent container, most often the parent component or on ',
            j({}, 'html'),
            ' itself.'
          ),
          Object(a.createElement)(s.a, null, Object(g.e)(r.b, 'rtl-flipped'))
        );
      },
      T = function() {
        return Object(c.a)(w());
      };
  }
});
