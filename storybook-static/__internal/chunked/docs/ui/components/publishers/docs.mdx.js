var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/publishers/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var a, l, r = t[0], o = t[1], c = t[2], d = 0, h = [];
      d < r.length;
      d++
    )
      (l = r[d]),
        Object.prototype.hasOwnProperty.call(n, l) && n[l] && h.push(n[l][0]),
        (n[l] = 0);
    for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    for (u && u(t); h.length; ) h.shift()();
    return i.push.apply(i, c || []), s();
  }
  function s() {
    for (var e, t = 0; t < i.length; t++) {
      for (var s = i[t], a = !0, r = 1; r < s.length; r++) {
        var o = s[r];
        0 !== n[o] && (a = !1);
      }
      a && (i.splice(t--, 1), (e = l((l.s = s[0]))));
    }
    return e;
  }
  var a = {},
    n = { 61: 0 },
    i = [];
  function l(t) {
    if (a[t]) return a[t].exports;
    var s = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(s.exports, s, s.exports, l), (s.l = !0), s.exports;
  }
  (l.m = e),
    (l.c = a),
    (l.d = function(e, t, s) {
      l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s });
    }),
    (l.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (l.t = function(e, t) {
      if ((1 & t && (e = l(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var s = Object.create(null);
      if (
        (l.r(s),
        Object.defineProperty(s, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          l.d(
            s,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return s;
    }),
    (l.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return l.d(t, 'a', t), t;
    }),
    (l.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (l.p = '/assets/scripts/bundle/');
  var r = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    o = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var c = 0; c < r.length; c++) t(r[c]);
  var u = o;
  return i.push([265, 0]), s();
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
  265: function(e, t, s) {
    'use strict';
    s.r(t),
      s.d(t, 'getElement', function() {
        return x;
      }),
      s.d(t, 'getContents', function() {
        return _;
      });
    var a = s(0),
      n = s.n(a),
      i = s(4),
      l = s(1),
      r = (s(23), s(15), s(2)),
      o = s(7),
      c = s(5),
      u = s.n(c),
      d = function(e) {
        return n.a.createElement(
          'div',
          { className: u()('slds-publisher', e.className) },
          n.a.createElement(
            'label',
            {
              htmlFor: 'comment-text-input2',
              className: 'slds-publisher__toggle-visibility slds-m-bottom_small'
            },
            n.a.createElement(
              'span',
              { className: 'slds-assistive-text' },
              'Write a comment'
            ),
            'To: My followers'
          ),
          n.a.createElement('textarea', {
            id: 'comment-text-input2',
            className: 'slds-publisher__input slds-textarea slds-text-longform',
            placeholder: 'Write a comment…'
          }),
          e.children
        );
      },
      h = function(e) {
        return n.a.createElement(
          'div',
          {
            className:
              'slds-publisher__actions slds-grid slds-grid_align-spread'
          },
          n.a.createElement(
            'ul',
            { className: 'slds-grid slds-publisher__toggle-visibility' },
            n.a.createElement(
              'li',
              null,
              n.a.createElement(o.b, {
                className: 'slds-button_icon-container',
                symbol: 'adduser',
                assistiveText: 'Add User',
                title: 'Add User'
              })
            ),
            n.a.createElement(
              'li',
              null,
              n.a.createElement(o.b, {
                className: 'slds-button_icon-container',
                symbol: 'attach',
                assistiveText: 'Attach a file',
                title: 'Attach a file'
              })
            )
          ),
          n.a.createElement(
            'button',
            { className: 'slds-button slds-button_brand' },
            'Share'
          )
        );
      },
      b = n.a.createElement(d, null, n.a.createElement(h, null)),
      p = [
        {
          id: 'active',
          label: 'Active',
          element: n.a.createElement(
            d,
            { className: 'slds-is-active' },
            n.a.createElement(h, null)
          )
        }
      ],
      f = s(73),
      m = i.c.code,
      g = i.c.h2,
      v = i.c.h3,
      y = i.c.p,
      x = function() {
        return Object(a.createElement)(
          i.b,
          {},
          Object(a.createElement)(
            'div',
            { className: 'lead doc' },
            'A publisher is an advanced longform text input form element.'
          ),
          Object(a.createElement)(
            l.a,
            { exampleOnly: !0 },
            Object(r.e)(f.c, 'active')
          ),
          g({ id: 'About-Publishers' }, 'About Publishers'),
          y(
            {},
            'To initialize the publisher, apply the ',
            m({}, '.slds-publisher'),
            ' class to a containing ',
            m({}, '<div>'),
            '. The publisher consists of, but not limited to, a text input form element that is either a plain text or rich text editor. A row of actionable interactions, such as attaching additional content, adding followers and a submit button.'
          ),
          y(
            {},
            'The variants of the publishers have different use cases, so please pay attention to the markup structure of each.'
          ),
          g({ id: 'Base' }, 'Base'),
          Object(a.createElement)(l.a, null, b),
          y(
            {},
            'The discussion feed publisher is found at the top of a feed stream. It contains basic and advanced publishing capabilities.'
          ),
          y(
            {},
            'The discussion feed is in a collapsed state by default. There are 3 states of the discussion feed that provide different feedback to the user. First, the collapsed state, this indicates the user has not interacted with the discussion feed publisher. When the user initiates an interaction with the publisher, by either focusing of the textarea or clicking the "Share" button, through javascript the class of ',
            m({}, 'slds-is-active'),
            ' should be applied to the ',
            m({}, 'slds-publisher'),
            ' div. This class will expand the publisher box and display additional publisher actions.'
          ),
          y(
            {},
            'During the active state, before the user has begun typing or attaching additional content, the "Share" button should be disabled by applying the ',
            m({}, 'disabled'),
            ' attribute to the ',
            m({}, '<textarea>'),
            '. When the user begins typing, the ',
            m({}, 'disabled'),
            ' attribute should be toggled off.'
          ),
          v({ id: 'Active' }, 'Active'),
          Object(a.createElement)(l.a, null, Object(r.e)(p, 'active')),
          g({ id: 'Comment' }, 'Comment'),
          Object(a.createElement)(l.a, null, f.b),
          y(
            {},
            'The comment publisher is found at the bottom of a discussion feed comment thread. It contains basic publishing capabilities.'
          ),
          y(
            {},
            'The comment publisher is in a collapsed state by default. There are 4 states of the discussion feed that provide different feedback to the user. First, the collapsed state, this indicates the user has not interacted with the comment publisher. When the user initiates an interaction with the publisher, by either focusing of the textarea or clicking the "Comment" button, through javascript the class of ',
            m({}, 'slds-is-active'),
            ' should be applied to the ',
            m({}, 'slds-publisher'),
            ' element. This class will expand the publisher box and display additional publisher actions.'
          ),
          y(
            {},
            "Due to the implementation of the comment publisher design, we used a faux textarea container and we'll need to apply the our focus state to that custom container. Using javascript, the class ",
            m({}, 'slds-has-focus'),
            ' should be applied to the ',
            m({}, 'slds-publisher'),
            ' element when the user interacts with ',
            m({}, '<textarea>'),
            '. When the user loses focus on the ',
            m({}, '<textarea>'),
            ', the class ',
            m({}, 'slds-has-focus'),
            ' should be toggled off from the ',
            m({}, 'slds-publisher'),
            ' element.'
          ),
          y(
            {},
            'During the active state, before the user has begun typing or attaching additional content, the "Comment" button should be disabled by applying the ',
            m({}, 'disabled'),
            ' attribute to the ',
            m({}, '<textarea>'),
            '. When the user begins typing, the ',
            m({}, 'disabled'),
            ' attribute should be toggled off.'
          ),
          v({ id: 'Active-2' }, 'Active'),
          Object(a.createElement)(l.a, null, Object(r.e)(f.c, 'active')),
          v({ id: 'Focused' }, 'Focused'),
          Object(a.createElement)(l.a, null, Object(r.e)(f.c, 'focused'))
        );
      },
      _ = function() {
        return Object(i.a)(x());
      };
  }
});
