var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/prompt/docs.mdx.js'] = (function(
  e
) {
  function t(t) {
    for (
      var s, n, i = t[0], l = t[1], d = t[2], u = 0, m = [];
      u < i.length;
      u++
    )
      (n = i[u]),
        Object.prototype.hasOwnProperty.call(o, n) && o[n] && m.push(o[n][0]),
        (o[n] = 0);
    for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s]);
    for (c && c(t); m.length; ) m.shift()();
    return r.push.apply(r, d || []), a();
  }
  function a() {
    for (var e, t = 0; t < r.length; t++) {
      for (var a = r[t], s = !0, i = 1; i < a.length; i++) {
        var l = a[i];
        0 !== o[l] && (s = !1);
      }
      s && (r.splice(t--, 1), (e = n((n.s = a[0]))));
    }
    return e;
  }
  var s = {},
    o = { 60: 0 },
    r = [];
  function n(t) {
    if (s[t]) return s[t].exports;
    var a = (s[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = e),
    (n.c = s),
    (n.d = function(e, t, a) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (n.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var s in e)
          n.d(
            a,
            s,
            function(t) {
              return e[t];
            }.bind(null, s)
          );
      return a;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = '/assets/scripts/bundle/');
  var i = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    l = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var d = 0; d < i.length; d++) t(i[d]);
  var c = l;
  return r.push([285, 0]), a();
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
  285: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'getElement', function() {
        return y;
      }),
      a.d(t, 'getContents', function() {
        return g;
      });
    var s = a(0),
      o = a.n(s),
      r = a(4),
      n = a(22),
      i = o.a.createElement(
        'div',
        { className: 'demo-only', style: { height: '24rem' } },
        o.a.createElement(
          n.b,
          {
            tabIndex: '0',
            role: 'alertdialog',
            'aria-labelledby': 'prompt-heading-id',
            'aria-describedby': 'prompt-message-wrapper',
            className: 'slds-modal_prompt'
          },
          o.a.createElement(
            n.e,
            {
              className: 'slds-theme_error slds-theme_alert-texture',
              closeButton: !1
            },
            o.a.createElement(
              'h2',
              {
                className: 'slds-text-heading_medium',
                id: 'prompt-heading-id'
              },
              'Service Unavailable'
            )
          ),
          o.a.createElement(
            n.c,
            { className: 'slds-p-around_medium', id: 'prompt-message-wrapper' },
            o.a.createElement(
              'p',
              null,
              'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.'
            )
          ),
          o.a.createElement(
            n.d,
            { className: 'slds-theme_default' },
            o.a.createElement(
              'button',
              { className: 'slds-button slds-button_neutral' },
              'Okay'
            )
          )
        ),
        o.a.createElement('div', {
          className: 'slds-backdrop slds-backdrop_open'
        })
      ),
      l = a(1),
      d = (a(2), r.c.a),
      c = r.c.code,
      u = r.c.h2,
      m = r.c.h3,
      p = r.c.h4,
      h = r.c.li,
      f = r.c.p,
      b = r.c.ul,
      y = function() {
        return Object(s.createElement)(
          r.b,
          {},
          Object(s.createElement)(
            'div',
            { className: 'doc lead' },
            'Prompt notice grabs the user’s attention & alerts them of system-related issues/updates.'
          ),
          Object(s.createElement)(l.a, { exampleOnly: !0 }, i),
          u({ id: 'About-Prompt' }, 'About Prompt'),
          f(
            {},
            'A prompt uses the ',
            d({ href: '/components/modals' }, 'base modal component'),
            ' and then adds the class ',
            c({}, '.slds-modal_prompt'),
            ' to the overall ',
            c({}, '.slds-modal'),
            '. The utilities > themes > colors class is placed on the ',
            c({}, '.slds-modal__head'),
            ' to create the color of the header. In the example, we illustrate using ',
            c({}, '.slds-theme_error'),
            '. The class ',
            c({}, '.slds-theme_alert-texture'),
            ' should be applied to create the striped gradient. The ',
            c({}, '.slds-modal__footer'),
            ' receives the class ',
            c({}, '.slds-theme_default'),
            '.'
          ),
          m({ id: 'Implementation-Guidelines' }, 'Implementation Guidelines'),
          p({ id: 'Markup' }, 'Markup'),
          f(
            {},
            'Expected markup is the same as Modals (/components/modals), but with the following differences):'
          ),
          b(
            {},
            h({}, 'Modal has ', c({}, 'role="alertdialog"')),
            h(
              {},
              'Modal has an ',
              c({}, 'aria-describedby'),
              ' attribute that matches the id of the modal message container.'
            ),
            h(
              {},
              'Modal message container container should have ',
              c({}, 'tabindex="0"')
            )
          ),
          p({ id: 'Keyboard-Interaction' }, 'Keyboard Interaction'),
          f(
            {},
            'Expected keyboard interaction is the same as Modals (',
            d({ href: '/components/modals' }, 'same as Modals'),
            ', with the addition of):'
          ),
          b({}, h({}, 'Modal message container should take initial focus')),
          m({ id: 'Accessibility' }, 'Accessibility'),
          f(
            {},
            'Prompt notifications are similar to modals, in that they are a focus trap, but they should take a slightly different ',
            c({}, 'role'),
            ' of ',
            c({}, 'alertdialog'),
            ' to indicate their severity. Like modals they should be labelled by their headings, but additionally they should be described by the message details of the prompt.'
          ),
          f(
            {},
            'The element containing the prompt message should be the target focus of the browser when it is displayed, which is why we add ',
            c({}, 'tabindex="0"'),
            ' to ',
            c({}, 'slds-modal__container'),
            '.'
          ),
          f(
            {},
            'There is no requirement for a close button, as the confirmation button should be used to dismiss the prompt, along with the usual Esc key dismissal.'
          ),
          u({ id: 'Base' }, 'Base'),
          Object(s.createElement)(l.a, null, i)
        );
      },
      g = function() {
        return Object(r.a)(y());
      };
  }
});
