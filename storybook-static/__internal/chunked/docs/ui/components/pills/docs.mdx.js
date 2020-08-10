var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/pills/docs.mdx.js'] = (function(e) {
  function t(t) {
    for (
      var a, s, o = t[0], r = t[1], c = t[2], p = 0, u = [];
      p < o.length;
      p++
    )
      (s = o[p]),
        Object.prototype.hasOwnProperty.call(n, s) && n[s] && u.push(n[s][0]),
        (n[s] = 0);
    for (a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    for (d && d(t); u.length; ) u.shift()();
    return i.push.apply(i, c || []), l();
  }
  function l() {
    for (var e, t = 0; t < i.length; t++) {
      for (var l = i[t], a = !0, o = 1; o < l.length; o++) {
        var r = l[o];
        0 !== n[r] && (a = !1);
      }
      a && (i.splice(t--, 1), (e = s((s.s = l[0]))));
    }
    return e;
  }
  var a = {},
    n = { 55: 0 },
    i = [];
  function s(t) {
    if (a[t]) return a[t].exports;
    var l = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(l.exports, l, l.exports, s), (l.l = !0), l.exports;
  }
  (s.m = e),
    (s.c = a),
    (s.d = function(e, t, l) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: l });
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
      var l = Object.create(null);
      if (
        (s.r(l),
        Object.defineProperty(l, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          s.d(
            l,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return l;
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
  var o = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    r = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var c = 0; c < o.length; c++) t(o[c]);
  var d = r;
  return i.push([231, 0]), l();
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
  231: function(e, t, l) {
    'use strict';
    l.r(t),
      l.d(t, 'getElement', function() {
        return S;
      }),
      l.d(t, 'getContents', function() {
        return P;
      });
    var a = l(0),
      n = l.n(a),
      i = l(4),
      s = l(1),
      o = (l(23), l(15), l(2)),
      r = l(33),
      c = l(10),
      d = l(29),
      p = n.a.createElement(d.d, null),
      u = [
        {
          id: 'error',
          label: 'Error',
          element: n.a.createElement(
            d.d,
            { className: 'slds-has-error' },
            n.a.createElement(
              'span',
              { className: 'slds-pill__icon_container' },
              n.a.createElement(
                'span',
                { className: 'slds-icon_container', title: 'Error' },
                n.a.createElement(c.a, {
                  className: 'slds-icon slds-icon-text-error',
                  sprite: 'utility',
                  symbol: 'error'
                }),
                n.a.createElement(
                  'span',
                  { className: 'slds-assistive-text' },
                  'Warning'
                )
              )
            )
          )
        },
        {
          id: 'truncated',
          label: 'Truncated',
          demoStyles: 'width: 220px;',
          element: n.a.createElement(
            d.e,
            null,
            n.a.createElement(d.d, {
              label: 'Pill label that is longer than the area that contains it'
            })
          )
        }
      ],
      m = [
        {
          id: 'icon',
          label: 'With icon',
          element: n.a.createElement(
            d.d,
            null,
            n.a.createElement(
              'span',
              { className: 'slds-pill__icon_container' },
              n.a.createElement(
                'span',
                {
                  className: 'slds-icon_container slds-icon-standard-account',
                  title: 'Account'
                },
                n.a.createElement(c.a, {
                  className: 'slds-icon',
                  sprite: 'standard',
                  symbol: 'account'
                }),
                n.a.createElement(
                  'span',
                  { className: 'slds-assistive-text' },
                  'Account'
                )
              )
            )
          )
        },
        {
          id: 'avatar',
          label: 'With avatar',
          element: n.a.createElement(
            d.d,
            null,
            n.a.createElement(
              'span',
              { className: 'slds-pill__icon_container' },
              n.a.createElement(
                'span',
                {
                  className: 'slds-avatar slds-avatar_circle',
                  title: 'User avatar'
                },
                n.a.createElement('img', {
                  alt: 'Person name',
                  src: '/assets/images/avatar2.jpg',
                  title: 'User avatar'
                })
              )
            )
          )
        },
        {
          id: 'container',
          label: 'Pill with Container',
          element: n.a.createElement(
            d.e,
            null,
            n.a.createElement(d.d, null),
            n.a.createElement(d.d, null),
            n.a.createElement(d.d, null)
          )
        }
      ],
      h = l(40),
      b = l(32),
      f = n.a.createElement(
        d.e,
        null,
        n.a.createElement(
          d.b,
          null,
          n.a.createElement(
            d.c,
            null,
            n.a.createElement(d.a, { tabIndex: '0' })
          ),
          n.a.createElement(d.c, null, n.a.createElement(d.a, null))
        )
      ),
      E = [
        {
          id: 'listbox-pill-with-icon',
          label: 'With icon',
          element: n.a.createElement(
            d.e,
            null,
            n.a.createElement(
              d.b,
              null,
              n.a.createElement(
                d.c,
                null,
                n.a.createElement(
                  d.a,
                  { tabIndex: '0' },
                  n.a.createElement(b.a, {
                    containerClassName: 'slds-pill__icon_container',
                    title: 'Account',
                    assistiveText: 'Account'
                  })
                )
              ),
              n.a.createElement(
                d.c,
                null,
                n.a.createElement(
                  d.a,
                  null,
                  n.a.createElement(b.a, {
                    containerClassName: 'slds-pill__icon_container',
                    symbol: 'case',
                    title: 'Case',
                    assistiveText: 'Case'
                  })
                )
              )
            )
          )
        },
        {
          id: 'listbox-pill-with-avatar',
          label: 'With avatar',
          element: n.a.createElement(
            d.e,
            null,
            n.a.createElement(
              d.b,
              null,
              n.a.createElement(
                d.c,
                null,
                n.a.createElement(
                  d.a,
                  { tabIndex: '0' },
                  n.a.createElement(
                    h.a,
                    {
                      className: 'slds-avatar_x-small slds-pill__icon_container'
                    },
                    n.a.createElement('img', {
                      alt: 'Person name',
                      src: '/assets/images/avatar2.jpg',
                      title: 'User avatar'
                    })
                  )
                )
              ),
              n.a.createElement(
                d.c,
                null,
                n.a.createElement(
                  d.a,
                  null,
                  n.a.createElement(
                    h.a,
                    {
                      className: 'slds-avatar_x-small slds-pill__icon_container'
                    },
                    n.a.createElement('img', {
                      alt: 'Person name',
                      src: '/assets/images/avatar2.jpg',
                      title: 'User avatar'
                    })
                  )
                )
              )
            )
          )
        },
        {
          id: 'listbox-pill-bare',
          label: 'Bare',
          element: n.a.createElement(
            d.e,
            null,
            n.a.createElement(
              d.b,
              null,
              n.a.createElement(
                d.c,
                null,
                n.a.createElement(d.a, {
                  className: 'slds-pill_bare',
                  tabIndex: '0'
                })
              ),
              n.a.createElement(
                d.c,
                null,
                n.a.createElement(d.a, { className: 'slds-pill_bare' })
              )
            )
          )
        }
      ],
      _ = i.c.a,
      v = i.c.code,
      y = i.c.h2,
      x = i.c.h3,
      w = i.c.h4,
      O = i.c.li,
      j = i.c.p,
      g = i.c.strong,
      k = i.c.ul,
      S = function() {
        return Object(a.createElement)(
          i.b,
          {},
          Object(a.createElement)(
            'div',
            { className: 'lead doc' },
            'A pill represents an object that can be viewed with or without an icon.'
          ),
          Object(a.createElement)(
            s.a,
            { exampleOnly: !0 },
            Object(o.e)(m, 'icon')
          ),
          y({ id: 'About-Pills' }, 'About Pills'),
          j(
            {},
            'To create a pill, apply the ',
            v({}, '.slds-pill'),
            ' class on a ',
            v({}, '<span>'),
            '.'
          ),
          j(
            {},
            'Depending on your context, you will either need a linked pill or a pill option inside of a listbox.'
          ),
          j(
            {},
            'For linked pills, a modifier class of ',
            v({}, 'slds-pill_link'),
            ' needs to be added to the existing ',
            v({}, '<span>'),
            ' with the class name of ',
            v({}, 'slds-pill'),
            '. You need an ',
            v({}, '<a>'),
            ' inside of the span with the ',
            v({}, 'slds-pill_link'),
            ' class. The ',
            v({}, '<a>'),
            ' will get the class name of ',
            v({}, 'slds-pill__action'),
            '. This will treat the interactions differently from an unlinked pill option inside of a listbox.'
          ),
          j(
            {},
            'For both linked pills and unlinked pill options, a ',
            v({}, '<span>'),
            ' with the class name of ',
            v({}, 'slds-pill__label'),
            ' should contain the string of text describing the pill object.'
          ),
          j(
            {},
            'Note, that a linked pill should not be used as a pill option inside of a listbox.'
          ),
          j(
            {},
            'Additionally, a pill can have an icon or image that sits to the left-hand side of the ',
            v({}, '.slds-pill__label'),
            '. That icon or image should receive the class ',
            v({}, '.slds-pill__icon_container'),
            '.'
          ),
          j(
            {},
            'You may also want the functionality to remove the pill as a selection. An "X" icon is normally used and will sit to the right-hand side of the ',
            v({}, '.slds-pill__label'),
            '. That icon should receive the class ',
            v({}, '.slds-pill__remove'),
            '.'
          ),
          j(
            {},
            'A ',
            v({}, '.slds-pill_container'),
            ' can be used as a visual container for multiple pill(s).'
          ),
          x({ id: 'Mobile' }, 'Mobile'),
          Object(a.createElement)(r.a, {
            patternSpecificText:
              'pills will have an increased size to accommodate tapping with a finger instead of the more precise mouse cursor'
          }),
          Object(a.createElement)(
            s.a,
            { frameOnly: !0 },
            Object(o.e)(m, 'icon')
          ),
          y({ id: 'Base' }, 'Base'),
          Object(a.createElement)(s.a, null, p),
          x({ id: 'Examples' }, 'Examples'),
          w({ id: 'With-Icon' }, 'With Icon'),
          Object(a.createElement)(s.a, null, Object(o.e)(m, 'icon')),
          w({ id: 'With-Avatar' }, 'With Avatar'),
          Object(a.createElement)(s.a, null, Object(o.e)(m, 'avatar')),
          w({ id: 'Pill-with-Container' }, 'Pill with Container'),
          Object(a.createElement)(s.a, null, Object(o.e)(m, 'container')),
          x({ id: 'States' }, 'States'),
          w({ id: 'Error' }, 'Error'),
          Object(a.createElement)(s.a, null, Object(o.e)(u, 'error')),
          w({ id: 'Truncated' }, 'Truncated'),
          j(
            {},
            'The pills component will respect the width of its parent and truncate if necessary.'
          ),
          Object(a.createElement)(
            s.a,
            { demoStyles: 'width: 220px;' },
            Object(o.e)(u, 'truncated')
          ),
          y({ id: 'Listbox-Of-Pill-Options' }, 'Listbox Of Pill Options'),
          Object(a.createElement)(s.a, null, f),
          j(
            {},
            'A Listbox of Pills is a way to display a list of selected options when performing user input, usually from a multi-select ',
            _({ href: '/components/combobox' }, 'Combobox'),
            ', ',
            _({ href: '/components/lookups' }, 'Lookup'),
            ' or ',
            _({ href: '/components/picklist' }, 'Picklist'),
            '.'
          ),
          x({ id: 'Accessibility' }, 'Accessibility'),
          j({}, g({}, 'Interaction requirements')),
          k(
            {},
            O({}, 'Only 1 focused Pill per set of Pills'),
            O(
              {},
              'The remove button must not be a focusable element, but can be clickable'
            ),
            O(
              {},
              'Delete with a keyboard is performed with the ',
              v({}, 'Backspace'),
              ' or ',
              v({}, 'Delete'),
              ' key when focused on a pill'
            )
          ),
          j({}, g({}, 'Notable attributes')),
          k(
            {},
            O({}, v({}, 'role="listbox"'), ' is placed on the ', v({}, 'ul')),
            O(
              {},
              v({}, 'aria-label'),
              ' is applied to ',
              v({}, 'listbox'),
              ' to describe what the list of options are to the user'
            ),
            O(
              {},
              v({}, 'aria-orientation="horizontal"'),
              ' is applied to the ',
              v({}, 'listbox'),
              ' to describe the left to right direction of the pills'
            ),
            O(
              {},
              v({}, 'role="presentation"'),
              ' is placed on the ',
              v({}, 'li'),
              ' elements'
            ),
            O(
              {},
              v({}, 'role="option"'),
              ' is placed on the ',
              v({}, 'slds-pill'),
              ' elements'
            ),
            O(
              {},
              v({}, 'aria-selected="true"'),
              ' is applied to all ',
              v({}, 'option'),
              ' elements, this is because they have all be selected'
            ),
            O(
              {},
              v({}, 'tabindex="0"'),
              ' is applied to the ',
              v({}, 'option'),
              ' that is in focus last. By default it is placed on the first ',
              v({}, 'option')
            )
          ),
          j({}, g({}, 'Keyboard navigation')),
          k(
            {},
            O(
              {},
              'The first ',
              v({}, 'option'),
              ' in the list will be take user focus initially, when tabbed to'
            ),
            O(
              {},
              v({}, 'Right'),
              ' arrow key will move focus to the next pill in the list'
            ),
            O(
              {},
              v({}, 'Left'),
              ' arrow key will move focus to the previous pill in the list'
            ),
            O(
              {},
              v({}, 'Left'),
              ' arrow key when on the first ',
              v({}, 'option'),
              ' should cycle user focus to the last ',
              v({}, 'option')
            ),
            O(
              {},
              v({}, 'Right'),
              ' arrow key when on the last ',
              v({}, 'option'),
              ' should cycle user focus to the first ',
              v({}, 'option')
            ),
            O(
              {},
              v({}, 'Delete'),
              ' or ',
              v({}, 'Backspace'),
              ' key when focused on an ',
              v({}, 'option'),
              ' should remove that ',
              v({}, 'option'),
              '. Focus should then be placed on the nearest ',
              v({}, 'option'),
              k(
                {},
                O(
                  {},
                  'When on the last ',
                  v({}, 'option'),
                  ', place user focus on the previous ',
                  v({}, 'option')
                ),
                O(
                  {},
                  'When on the first ',
                  v({}, 'option'),
                  ', place user focus on the next ',
                  v({}, 'option')
                ),
                O(
                  {},
                  'When on the only ',
                  v({}, 'option'),
                  ', place user focus on the ',
                  v({}, 'listbox'),
                  ' or any ',
                  v({}, 'input'),
                  ' element the ',
                  v({}, 'option'),
                  ' might be associated with'
                )
              )
            )
          ),
          x({ id: 'Examples-2' }, 'Examples'),
          w({ id: 'With-Icon-2' }, 'With Icon'),
          Object(a.createElement)(
            s.a,
            null,
            Object(o.e)(E, 'listbox-pill-with-icon')
          ),
          w({ id: 'With-Avatar-2' }, 'With Avatar'),
          Object(a.createElement)(
            s.a,
            null,
            Object(o.e)(E, 'listbox-pill-with-avatar')
          ),
          x({ id: 'Layout' }, 'Layout'),
          w({ id: 'Bare' }, 'Bare'),
          Object(a.createElement)(
            s.a,
            null,
            Object(o.e)(E, 'listbox-pill-bare')
          )
        );
      },
      P = function() {
        return Object(i.a)(S());
      };
  }
});
