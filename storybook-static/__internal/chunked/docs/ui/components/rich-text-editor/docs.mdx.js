var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/rich-text-editor/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var a, i, o = t[0], c = t[1], d = t[2], m = 0, s = [];
      m < o.length;
      m++
    )
      (i = o[m]),
        Object.prototype.hasOwnProperty.call(n, i) && n[i] && s.push(n[i][0]),
        (n[i] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
    for (u && u(t); s.length; ) s.shift()();
    return r.push.apply(r, d || []), l();
  }
  function l() {
    for (var e, t = 0; t < r.length; t++) {
      for (var l = r[t], a = !0, o = 1; o < l.length; o++) {
        var c = l[o];
        0 !== n[c] && (a = !1);
      }
      a && (r.splice(t--, 1), (e = i((i.s = l[0]))));
    }
    return e;
  }
  var a = {},
    n = { 64: 0 },
    r = [];
  function i(t) {
    if (a[t]) return a[t].exports;
    var l = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(l.exports, l, l.exports, i), (l.l = !0), l.exports;
  }
  (i.m = e),
    (i.c = a),
    (i.d = function(e, t, l) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: l });
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
      var l = Object.create(null);
      if (
        (i.r(l),
        Object.defineProperty(l, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          i.d(
            l,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return l;
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
  var o = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    c = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var d = 0; d < o.length; d++) t(o[d]);
  var u = c;
  return r.push([271, 0]), l();
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
  271: function(e, t, l) {
    'use strict';
    l.r(t),
      l.d(t, 'getElement', function() {
        return x;
      }),
      l.d(t, 'getContents', function() {
        return N;
      });
    var a = l(0),
      n = l.n(a),
      r = l(4),
      i = l(1),
      o = (l(26), l(43), l(15), l(2)),
      c = l(5),
      d = l.n(c),
      u = l(54),
      m = l(20);
    function s() {
      return (s =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var l = arguments[t];
            for (var a in l)
              Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
          }
          return e;
        }).apply(this, arguments);
    }
    var E = function(e) {
        return n.a.createElement(
          'div',
          s(
            {
              className: d()('demo-only', e.className),
              style: { minHeight: '180px' }
            },
            e
          ),
          e.children
        );
      },
      b = function(e) {
        return n.a.createElement(
          'div',
          null,
          n.a.createElement('h1', null, 'Heading - h1'),
          n.a.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet, ',
            n.a.createElement('strong', null, 'strong'),
            ' adipisicing elit, sed do ',
            n.a.createElement('em', null, 'emphasis'),
            ' tempor incididunt ut ',
            n.a.createElement('u', null, 'underlined'),
            ' et dolore',
            ' ',
            n.a.createElement('s', null, 'strikethrough'),
            ' aliqua. Ut ',
            n.a.createElement('sub', null, 'subscript'),
            ' ad',
            ' ',
            n.a.createElement('sup', null, 'superscript'),
            ' veniam, ',
            n.a.createElement('abbr', null, 'quis'),
            ' nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ',
            n.a.createElement('a', { href: '#' }, 'link'),
            ' in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          ),
          n.a.createElement('h2', null, 'Heading - h2'),
          n.a.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
            ' ',
            n.a.createElement(
              'a',
              { href: '#' },
              'veryVeryLongWordWithHyperlinkExample'
            ),
            ' tempor incididunt ut labore et dolore magna aliqua.'
          ),
          n.a.createElement(
            'ul',
            null,
            n.a.createElement(
              'li',
              null,
              'Unordered list item',
              n.a.createElement(
                'ul',
                null,
                n.a.createElement(
                  'li',
                  null,
                  'Nested Unordered list item',
                  n.a.createElement(
                    'ol',
                    null,
                    n.a.createElement('li', null, 'Nested Ordered list item'),
                    n.a.createElement('li', null, 'Nested Ordered list item')
                  )
                ),
                n.a.createElement(
                  'li',
                  null,
                  'Nested Unordered list item',
                  n.a.createElement(
                    'ul',
                    null,
                    n.a.createElement('li', null, 'Nested Unordered list item'),
                    n.a.createElement('li', null, 'Nested Unordered list item')
                  )
                )
              )
            ),
            n.a.createElement(
              'li',
              null,
              'Unordered list item',
              n.a.createElement(
                'ol',
                null,
                n.a.createElement('li', null, 'Nested Ordered list item'),
                n.a.createElement('li', null, 'Nested Ordered list item')
              )
            ),
            n.a.createElement('li', null, 'Unordered list item')
          ),
          n.a.createElement('h3', null, 'Heading - h3'),
          n.a.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          ),
          n.a.createElement(
            'ol',
            null,
            n.a.createElement(
              'li',
              null,
              'Ordered list item',
              n.a.createElement(
                'ul',
                null,
                n.a.createElement(
                  'li',
                  null,
                  'Nested Unordered list item',
                  n.a.createElement(
                    'ol',
                    null,
                    n.a.createElement('li', null, 'Nested Ordered list item'),
                    n.a.createElement('li', null, 'Nested Ordered list item')
                  )
                ),
                n.a.createElement(
                  'li',
                  null,
                  'Nested Unordered list item',
                  n.a.createElement(
                    'ul',
                    null,
                    n.a.createElement('li', null, 'Nested Unordered list item'),
                    n.a.createElement('li', null, 'Nested Unordered list item')
                  )
                )
              )
            ),
            n.a.createElement(
              'li',
              null,
              'Ordered list item',
              n.a.createElement(
                'ol',
                null,
                n.a.createElement(
                  'li',
                  null,
                  'Nested Ordered list item',
                  n.a.createElement(
                    'ol',
                    null,
                    n.a.createElement(
                      'li',
                      null,
                      'Nested Ordered list item',
                      n.a.createElement(
                        'ol',
                        null,
                        n.a.createElement(
                          'li',
                          null,
                          'Nested Ordered list item'
                        ),
                        n.a.createElement(
                          'li',
                          null,
                          'Nested Ordered list item'
                        )
                      )
                    ),
                    n.a.createElement('li', null, 'Nested Ordered list item')
                  )
                ),
                n.a.createElement('li', null, 'Nested Ordered list item')
              )
            ),
            n.a.createElement('li', null, 'Ordered list item')
          ),
          n.a.createElement(
            'ul',
            null,
            n.a.createElement(
              'li',
              null,
              n.a.createElement('div', null, 'List Item with div')
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement('div', null, 'List Item with div')
            )
          ),
          n.a.createElement(
            'ol',
            null,
            n.a.createElement(
              'li',
              null,
              n.a.createElement('div', null, 'List Item with div')
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement('div', null, 'List Item with div')
            )
          ),
          n.a.createElement('h4', null, 'Heading - h4'),
          n.a.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          ),
          n.a.createElement(
            'dl',
            null,
            n.a.createElement('dt', null, 'Description List - Term'),
            n.a.createElement('dd', null, 'Description List - Description'),
            n.a.createElement('dt', null, 'Description List - Term'),
            n.a.createElement('dd', null, 'Description List - Description')
          ),
          n.a.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          ),
          n.a.createElement(
            'table',
            null,
            n.a.createElement(
              'thead',
              null,
              n.a.createElement(
                'tr',
                null,
                n.a.createElement('th', null, 'Column'),
                n.a.createElement('th', null, 'Column')
              )
            ),
            n.a.createElement(
              'tbody',
              null,
              n.a.createElement(
                'tr',
                null,
                n.a.createElement('td', null, 'Row'),
                n.a.createElement('td', null, 'Row')
              ),
              n.a.createElement(
                'tr',
                null,
                n.a.createElement('td', null, 'Row'),
                n.a.createElement('td', null, 'Row')
              )
            )
          ),
          n.a.createElement('h5', null, 'Heading - h5'),
          n.a.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          ),
          n.a.createElement(
            'blockquote',
            null,
            'Blockquote - incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
          ),
          n.a.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          ),
          n.a.createElement('h6', null, 'Heading - h6'),
          n.a.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
            ' ',
            n.a.createElement(
              'a',
              { href: '#' },
              'https://url.com/document/d/1dSOGKlCQtSG73NcSJB7qCJVyjE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/ed'
            ),
            ' ',
            'quis nostrud ',
            n.a.createElement('ins', null, 'Content to be inserted.'),
            ' exercitation ullamco',
            ' ',
            n.a.createElement('del', null, 'Content to be deleted.'),
            ' laboris nisi ut aliquip ex ea commodo consequat.'
          )
        );
      },
      p = n.a.createElement(
        E,
        null,
        n.a.createElement(
          m.a,
          null,
          n.a.createElement(
            m.l,
            null,
            n.a.createElement(m.g, { tabIndexSetting: '0' }),
            n.a.createElement(m.d, null),
            n.a.createElement(m.c, null)
          ),
          n.a.createElement(m.k, { placeholder: 'Compose text...' })
        )
      ),
      h = [
        {
          id: 'focused',
          label: 'Focused',
          element: n.a.createElement(
            E,
            null,
            n.a.createElement(
              m.a,
              { className: 'slds-has-focus' },
              n.a.createElement(
                m.l,
                null,
                n.a.createElement(m.g, { tabIndexSetting: '0' }),
                n.a.createElement(m.d, null),
                n.a.createElement(m.c, null)
              ),
              n.a.createElement(m.k, { placeholder: 'Compose text...' })
            )
          )
        },
        {
          id: 'filled-out',
          label: 'Filled Out',
          element: n.a.createElement(
            E,
            null,
            n.a.createElement(
              m.a,
              null,
              n.a.createElement(
                m.l,
                null,
                n.a.createElement(m.g, { tabIndexSetting: '0' }),
                n.a.createElement(m.d, null),
                n.a.createElement(m.c, null)
              ),
              n.a.createElement(m.k, { text: n.a.createElement(b, null) })
            )
          )
        },
        {
          id: 'error',
          label: 'Error',
          element: n.a.createElement(
            E,
            null,
            n.a.createElement(
              m.a,
              {
                className: 'slds-has-error',
                inlineMessage: 'This field is required',
                hasError: !0,
                errorId: 'rte-error-01'
              },
              n.a.createElement(
                m.l,
                null,
                n.a.createElement(m.g, { tabIndexSetting: '0' }),
                n.a.createElement(m.d, null),
                n.a.createElement(m.c, null)
              ),
              n.a.createElement(m.k, {
                placeholder: 'Compose text...',
                'aria-describedby': 'rte-error-01'
              })
            )
          )
        },
        {
          id: 'disabled',
          label: 'Disabled',
          element: n.a.createElement(
            E,
            null,
            n.a.createElement(
              m.a,
              null,
              n.a.createElement(
                m.l,
                { disabledButtons: !0, disabledLabel: 'disabled' },
                n.a.createElement(m.g, {
                  tabIndexSetting: '0',
                  disabledButtons: !0
                }),
                n.a.createElement(m.d, { disabledButtons: !0 }),
                n.a.createElement(m.c, { disabledButtons: !0 })
              ),
              n.a.createElement(m.k, {
                placeholder: 'Compose text...',
                disabled: !0
              })
            )
          )
        },
        {
          id: 'tooltip',
          label: 'Tooltip',
          element: n.a.createElement(
            E,
            null,
            n.a.createElement(
              m.a,
              null,
              n.a.createElement(
                m.l,
                null,
                n.a.createElement(m.g, {
                  tabIndexSetting: '0',
                  hasTooltip: !0
                }),
                n.a.createElement(m.d, null),
                n.a.createElement(m.c, null)
              ),
              n.a.createElement(m.k, { placeholder: 'Compose text...' }),
              n.a.createElement(
                u.a,
                {
                  className: 'slds-nubbin_top-left',
                  id: 'bold',
                  style: { position: 'absolute', top: '48px', left: '2px' }
                },
                'Bold ',
                n.a.createElement('kbd', null, 'cmd+b')
              )
            )
          )
        },
        {
          id: 'toolbar-only',
          label: 'Toolbar Only',
          element: n.a.createElement(
            E,
            null,
            n.a.createElement(
              m.a,
              { isToolbarOnly: !0 },
              n.a.createElement(
                m.l,
                { isToolbarOnly: !0 },
                n.a.createElement(m.g, { tabIndexSetting: '0' }),
                n.a.createElement(m.d, null)
              )
            )
          )
        }
      ],
      f = [
        {
          id: 'bottom-toolbar',
          label: 'Bottom toolbar',
          element: n.a.createElement(
            E,
            null,
            n.a.createElement(
              m.a,
              null,
              n.a.createElement(m.k, { placeholder: 'Compose text...' }),
              n.a.createElement(
                m.l,
                { className: 'slds-rich-text-editor__toolbar_bottom' },
                n.a.createElement(m.g, { tabIndexSetting: '0' }),
                n.a.createElement(m.d, null),
                n.a.createElement(m.c, null)
              )
            )
          )
        },
        {
          id: 'with-label',
          label: 'With a Label',
          element: n.a.createElement(
            E,
            null,
            n.a.createElement(
              m.a,
              { label: 'Details and Steps to Reproduce', labelId: m.m },
              n.a.createElement(
                m.l,
                null,
                n.a.createElement(m.g, { tabIndexSetting: '0' }),
                n.a.createElement(m.d, null),
                n.a.createElement(m.c, null)
              ),
              n.a.createElement(m.k, {
                placeholder: 'Compose text...',
                labelId: m.m
              })
            )
          )
        },
        {
          id: 'email',
          label: 'Email',
          element: n.a.createElement(
            E,
            null,
            n.a.createElement(
              m.a,
              null,
              n.a.createElement(
                m.l,
                null,
                n.a.createElement(m.f, null),
                n.a.createElement(m.g, { tabIndexSetting: '-1' }),
                n.a.createElement(m.e, null),
                n.a.createElement(m.d, null),
                n.a.createElement(m.b, null),
                n.a.createElement(m.i, null),
                n.a.createElement(m.c, null)
              ),
              n.a.createElement(m.k, {
                label: 'Compose email',
                placeholder: 'Compose Email...'
              })
            )
          )
        },
        {
          id: 'toolbar-narrow',
          label: 'Toolbar Narrow',
          element: n.a.createElement(
            E,
            { style: { width: '294px' }, className: 'slds-region_narrow' },
            n.a.createElement(
              m.a,
              null,
              n.a.createElement(
                m.l,
                null,
                n.a.createElement(m.f, null),
                n.a.createElement(m.g, { tabIndexSetting: '-1' }),
                n.a.createElement(m.e, null),
                n.a.createElement(m.d, null),
                n.a.createElement(m.b, null),
                n.a.createElement(m.i, null),
                n.a.createElement(m.c, null)
              ),
              n.a.createElement(m.k, {
                label: 'Compose email',
                placeholder: 'Compose Email...'
              })
            )
          )
        },
        {
          id: 'feed',
          label: 'Feed',
          element: n.a.createElement(
            E,
            null,
            n.a.createElement(
              m.a,
              null,
              n.a.createElement(
                m.l,
                null,
                n.a.createElement(m.g, { tabIndexSetting: '0' }),
                n.a.createElement(m.d, null),
                n.a.createElement(m.b, null),
                n.a.createElement(m.i, null),
                n.a.createElement(m.j, null),
                n.a.createElement(m.c, null)
              ),
              n.a.createElement(m.k, {
                label: 'Post to feed',
                placeholder: 'Post to feed...'
              })
            )
          )
        },
        {
          id: 'note',
          label: 'Notes',
          element: n.a.createElement(
            E,
            null,
            n.a.createElement(
              m.a,
              null,
              n.a.createElement(
                m.l,
                null,
                n.a.createElement(m.g, { tabIndexSetting: '0' }),
                n.a.createElement(m.d, null),
                n.a.createElement(m.i, null),
                n.a.createElement(m.c, null)
              ),
              n.a.createElement(m.k, {
                label: 'Compose note',
                placeholder: 'Compose Note...'
              })
            )
          )
        }
      ],
      g = r.c.code,
      j = r.c.h2,
      O = r.c.h3,
      v = r.c.p,
      x = function() {
        return Object(a.createElement)(
          r.b,
          {},
          Object(a.createElement)(
            'div',
            { className: 'doc lead' },
            'The Rich Text Editor is a textarea with added capabilities for use in various publishers.'
          ),
          Object(a.createElement)(
            i.a,
            { exampleOnly: !0 },
            Object(o.e)(h, 'filled-out')
          ),
          j({ id: 'About-Rich-Text-Editor' }, 'About Rich Text Editor'),
          v(
            {},
            'At a high-level, the buttons in Rich Text Editor (RTE) are organized into four groupings: “format text”, “format body”, “insert content”, and “clear formatting”.'
          ),
          v(
            {},
            'The "clear formatting” button always stays at the end of the buttons set, regardless of which rich text editor variant is used. It should always stand by itself.'
          ),
          v(
            {},
            'On smaller screen sizes, the select dropdowns for Font and Size in the toolbar can overlap outside of the container. To adjust the widths of the dropdowns, apply the class ',
            g({}, 'slds-region_narrow'),
            ' to the outermost ',
            g({}, 'div'),
            ' of the rich text editor.'
          ),
          v(
            {},
            'A label may be used to further describe the purpose of a Rich Text Editor. To add a label, place a ',
            g({}, '<span>'),
            ' element with the class ',
            g({}, 'slds-form-element__label'),
            ', right before the ',
            g({}, 'slds-form-element__control'),
            ' element.'
          ),
          O({ id: 'Accessibility' }, 'Accessibility'),
          v(
            {},
            'Ensure that there is a single tab key stop for the button groups in the toolbar, and that left and right arrows are used to navigate through each button.'
          ),
          j({ id: 'Base' }, 'Base'),
          Object(a.createElement)(i.a, null, p),
          j({ id: 'States' }, 'States'),
          O({ id: 'Focused' }, 'Focused'),
          Object(a.createElement)(i.a, null, Object(o.e)(h, 'focused')),
          O({ id: 'Filled-Out' }, 'Filled Out'),
          Object(a.createElement)(i.a, null, Object(o.e)(h, 'filled-out')),
          O({ id: 'Error' }, 'Error'),
          Object(a.createElement)(i.a, null, Object(o.e)(h, 'error')),
          O({ id: 'Disabled' }, 'Disabled'),
          Object(a.createElement)(i.a, null, Object(o.e)(h, 'disabled')),
          O({ id: 'Tooltip' }, 'Tooltip'),
          Object(a.createElement)(i.a, null, Object(o.e)(h, 'tooltip')),
          j({ id: 'Examples' }, 'Examples'),
          O({ id: 'Bottom-toolbar' }, 'Bottom toolbar'),
          Object(a.createElement)(i.a, null, Object(o.e)(f, 'bottom-toolbar')),
          O({ id: 'With-a-Label' }, 'With a Label'),
          Object(a.createElement)(i.a, null, Object(o.e)(f, 'with-label')),
          O({ id: 'Email' }, 'Email'),
          Object(a.createElement)(i.a, null, Object(o.e)(f, 'email')),
          O({ id: 'Toolbar-Narrow' }, 'Toolbar Narrow'),
          Object(a.createElement)(i.a, null, Object(o.e)(f, 'toolbar-narrow')),
          O({ id: 'Feed' }, 'Feed'),
          Object(a.createElement)(i.a, null, Object(o.e)(f, 'feed')),
          O({ id: 'Notes' }, 'Notes'),
          Object(a.createElement)(i.a, null, Object(o.e)(f, 'note'))
        );
      },
      N = function() {
        return Object(r.a)(x());
      };
  }
});
