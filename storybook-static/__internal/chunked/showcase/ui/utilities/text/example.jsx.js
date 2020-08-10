var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/utilities/text/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var a, o, s = t[0], i = t[1], c = t[2], d = 0, m = [];
      d < s.length;
      d++
    )
      (o = s[d]),
        Object.prototype.hasOwnProperty.call(n, o) && n[o] && m.push(n[o][0]),
        (n[o] = 0);
    for (a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
    for (u && u(t); m.length; ) m.shift()();
    return r.push.apply(r, c || []), l();
  }
  function l() {
    for (var e, t = 0; t < r.length; t++) {
      for (var l = r[t], a = !0, s = 1; s < l.length; s++) {
        var i = l[s];
        0 !== n[i] && (a = !1);
      }
      a && (r.splice(t--, 1), (e = o((o.s = l[0]))));
    }
    return e;
  }
  var a = {},
    n = {
      183: 0,
      6: 0,
      22: 0,
      73: 0,
      80: 0,
      93: 0,
      94: 0,
      96: 0,
      97: 0,
      98: 0,
      103: 0,
      104: 0,
      127: 0,
      131: 0,
      135: 0,
      140: 0,
      142: 0
    },
    r = [];
  function o(t) {
    if (a[t]) return a[t].exports;
    var l = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(l.exports, l, l.exports, o), (l.l = !0), l.exports;
  }
  (o.m = e),
    (o.c = a),
    (o.d = function(e, t, l) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: l });
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
      var l = Object.create(null);
      if (
        (o.r(l),
        Object.defineProperty(l, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          o.d(
            l,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return l;
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
    i = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var c = 0; c < s.length; c++) t(s[c]);
  var u = i;
  return r.push([211, 0]), l();
})({
  0: function(e, t) {
    e.exports = React;
  },
  211: function(e, t, l) {
    'use strict';
    l.r(t),
      l.d(t, 'examples', function() {
        return o;
      });
    var a = l(0),
      n = l.n(a),
      r = function(e) {
        return n.a.createElement(
          'div',
          { className: e.className },
          'The quick brown fox jumps over the lazy dog.'
        );
      },
      o = [
        {
          id: 'body-default',
          label: 'Body size - default',
          element: n.a.createElement(r, {
            className: 'slds-text-body_regular'
          }),
          description:
            'This default helper sets regular body copy. You usually don&rsquo;t need this class since most components will inherit this globally from the `body` element. However, it exists if you still need to specifically set it.'
        },
        {
          id: 'body-small',
          label: 'Body size - Small',
          element: n.a.createElement(r, { className: 'slds-text-body_small' }),
          description:
            'This body-small text helper sets smaller, subtler body copy. It is typically used as supportive text.'
        },
        {
          id: 'heading-large',
          label: 'Heading size - Large',
          element: n.a.createElement(r, {
            className: 'slds-text-heading_large'
          })
        },
        {
          id: 'heading-medium',
          label: 'Heading size - Medium',
          element: n.a.createElement(r, {
            className: 'slds-text-heading_medium'
          })
        },
        {
          id: 'heading-small',
          label: 'Heading size - Small',
          element: n.a.createElement(r, {
            className: 'slds-text-heading_small'
          })
        },
        {
          id: 'heading-title',
          label: 'Title',
          element: n.a.createElement(r, { className: 'slds-text-title' })
        },
        {
          id: 'heading-title--caps',
          label: 'Title uppercase',
          element: n.a.createElement(r, { className: 'slds-text-title_caps' })
        },
        {
          id: 'longform',
          label: 'Longform',
          element: n.a.createElement(
            'div',
            { className: 'slds-text-longform' },
            n.a.createElement(
              'p',
              null,
              'The quick brown fox jumps over the lazy dog.'
            ),
            n.a.createElement(
              'p',
              null,
              'The quick brown fox jumps over the lazy dog.'
            ),
            n.a.createElement(
              'h3',
              { className: 'slds-text-heading_small' },
              'Heading'
            ),
            n.a.createElement(
              'ul',
              null,
              n.a.createElement(
                'li',
                null,
                'The quick brown fox jumps over the lazy dog.'
              ),
              n.a.createElement(
                'li',
                null,
                'The quick brown fox jumps over the lazy dog.',
                n.a.createElement(
                  'ul',
                  null,
                  n.a.createElement(
                    'li',
                    null,
                    'The quick brown fox jumps over the lazy dog.'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    'The quick brown fox jumps over the lazy dog.',
                    n.a.createElement(
                      'ul',
                      null,
                      n.a.createElement(
                        'li',
                        null,
                        'The quick brown fox jumps over the lazy dog.'
                      ),
                      n.a.createElement(
                        'li',
                        null,
                        'The quick brown fox jumps over the lazy dog.'
                      )
                    )
                  )
                )
              )
            ),
            n.a.createElement(
              'h3',
              { className: 'slds-text-heading_small' },
              'Heading'
            ),
            n.a.createElement(
              'ol',
              null,
              n.a.createElement(
                'li',
                null,
                'The quick brown fox jumps over the lazy dog.'
              ),
              n.a.createElement(
                'li',
                null,
                'The quick brown fox jumps over the lazy dog.',
                n.a.createElement(
                  'ol',
                  null,
                  n.a.createElement(
                    'li',
                    null,
                    'The quick brown fox jumps over the lazy dog.'
                  ),
                  n.a.createElement(
                    'li',
                    null,
                    'The quick brown fox jumps over the lazy dog.',
                    n.a.createElement(
                      'ol',
                      null,
                      n.a.createElement(
                        'li',
                        null,
                        'The quick brown fox jumps over the lazy dog.'
                      ),
                      n.a.createElement(
                        'li',
                        null,
                        'The quick brown fox jumps over the lazy dog.'
                      )
                    )
                  )
                )
              )
            )
          )
        },
        {
          id: 'align-left',
          label: 'Align left',
          element: n.a.createElement(r, { className: 'slds-text-align_left' }),
          description:
            'These helpers align text to the left, right, or center. Note that this is not used for layout and is only for aligning text horizontally.'
        },
        {
          id: 'align-right',
          label: 'Align right',
          element: n.a.createElement(r, { className: 'slds-text-align_right' }),
          description:
            'These helpers align text to the left, right, or center. Note that this is not used for layout and is only for aligning text horizontally.'
        },
        {
          id: 'align-center',
          label: 'Align center',
          element: n.a.createElement(r, {
            className: 'slds-text-align_center'
          }),
          description:
            'These helpers align text to the left, right, or center. Note that this is not used for layout and is only for aligning text horizontally.'
        },
        {
          id: 'text-color-default',
          label: 'Color - Default',
          element: n.a.createElement(r, {
            className: 'slds-text-color_default'
          })
        },
        {
          id: 'text-color-success',
          label: 'Color - Success',
          element: n.a.createElement(r, {
            className: 'slds-text-color_success'
          })
        },
        {
          id: 'text-color-weak',
          label: 'Color - Weak',
          element: n.a.createElement(r, { className: 'slds-text-color_weak' })
        },
        {
          id: 'text-color-error',
          label: 'Color - Error',
          element: n.a.createElement(r, { className: 'slds-text-color_error' })
        },
        {
          id: 'text-color-destructive',
          label: 'Color - Destructive Actions',
          element: n.a.createElement(r, {
            className: 'slds-text-color_destructive'
          })
        },
        {
          id: 'text-color-inverse',
          label: 'Color - Inverse',
          element: n.a.createElement(
            'div',
            {
              className: 'demo-only',
              style: { padding: '0.5rem', background: '#16325c' }
            },
            n.a.createElement(r, { className: 'slds-text-color_inverse' })
          )
        },
        {
          id: 'text-color-inverse-weak',
          label: 'Color - Inverse - Weak',
          element: n.a.createElement(
            'div',
            {
              className: 'demo-only',
              style: { padding: '0.5rem', background: '#16325c' }
            },
            n.a.createElement(r, { className: 'slds-text-color_inverse-weak' })
          )
        },
        {
          id: 'text-font-monospace',
          label: 'Font - Monospace',
          element: n.a.createElement(r, {
            className: 'slds-text-font_monospace'
          })
        }
      ];
  }
});
