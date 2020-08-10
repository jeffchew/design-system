var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/avatar/docs.mdx.js'] = (function(
  e
) {
  function t(t) {
    for (
      var n, c, i = t[0], o = t[1], s = t[2], d = 0, b = [];
      d < i.length;
      d++
    )
      (c = i[d]),
        Object.prototype.hasOwnProperty.call(l, c) && l[c] && b.push(l[c][0]),
        (l[c] = 0);
    for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
    for (u && u(t); b.length; ) b.shift()();
    return r.push.apply(r, s || []), a();
  }
  function a() {
    for (var e, t = 0; t < r.length; t++) {
      for (var a = r[t], n = !0, i = 1; i < a.length; i++) {
        var o = a[i];
        0 !== l[o] && (n = !1);
      }
      n && (r.splice(t--, 1), (e = c((c.s = a[0]))));
    }
    return e;
  }
  var n = {},
    l = { 6: 0 },
    r = [];
  function c(t) {
    if (n[t]) return n[t].exports;
    var a = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, c), (a.l = !0), a.exports;
  }
  (c.m = e),
    (c.c = n),
    (c.d = function(e, t, a) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (c.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (c.t = function(e, t) {
      if ((1 & t && (e = c(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (c.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          c.d(
            a,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return a;
    }),
    (c.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return c.d(t, 'a', t), t;
    }),
    (c.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = '/assets/scripts/bundle/');
  var i = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    o = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var s = 0; s < i.length; s++) t(i[s]);
  var u = o;
  return r.push([268, 0]), a();
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
  268: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'getElement', function() {
        return O;
      }),
      a.d(t, 'getContents', function() {
        return v;
      });
    var n = a(0),
      l = a.n(n),
      r = a(4),
      c = a(1),
      i = a(2),
      o = a(40),
      s = a(45),
      u = l.a.createElement(
        o.a,
        null,
        l.a.createElement(s.c, {
          iconClassName: 'slds-icon-standard-account',
          title: 'company name',
          initials: 'Ac'
        })
      ),
      d = [
        {
          id: 'linked-avatar-initials',
          label: 'Wrapped in a link',
          element: l.a.createElement(
            'a',
            { href: 'javascript:void(0);' },
            l.a.createElement(
              o.a,
              null,
              l.a.createElement(s.c, {
                iconClassName: 'slds-icon-standard-account',
                title: 'company name',
                initials: 'Ac'
              })
            )
          )
        }
      ],
      b = r.c.code,
      f = r.c.h2,
      m = r.c.h3,
      p = r.c.h4,
      j = r.c.p,
      O = function() {
        return Object(n.createElement)(
          r.b,
          {},
          Object(n.createElement)(
            'div',
            { className: 'doc lead' },
            'An avatar component represents an object or entity'
          ),
          Object(n.createElement)(c.a, { exampleOnly: !0 }, o.b),
          f({ id: 'About-Avatar' }, 'About Avatar'),
          j(
            {},
            'An avatar can be circular or a rounded rectangle, depending on usage. The default is a rounded rectangle and requires ',
            b({}, '.slds-avatar'),
            ' as the base class.'
          ),
          f({ id: 'Base' }, 'Base'),
          Object(n.createElement)(c.a, null, o.b),
          m({ id: 'Examples' }, 'Examples'),
          p({ id: 'Profile-Icon' }, 'Profile Icon'),
          Object(n.createElement)(c.a, null, Object(i.e)(o.c, 'profile-icon')),
          p({ id: 'Group-Icon' }, 'Group Icon'),
          Object(n.createElement)(c.a, null, Object(i.e)(o.c, 'group-icon')),
          p({ id: 'Fallback-User-Icon' }, 'Fallback User Icon'),
          Object(n.createElement)(
            c.a,
            null,
            Object(i.e)(o.c, 'fallback-user-icon')
          ),
          p({ id: 'Fallback-Entity-Icon' }, 'Fallback Entity Icon'),
          Object(n.createElement)(
            c.a,
            null,
            Object(i.e)(o.c, 'fallback-entity-icon')
          ),
          p({ id: 'Fallback-User-Initials' }, 'Fallback User Initials'),
          Object(n.createElement)(
            c.a,
            null,
            Object(i.e)(o.c, 'fallback-user-initials')
          ),
          p({ id: 'Fallback-Entity-Initials' }, 'Fallback Entity Initials'),
          Object(n.createElement)(
            c.a,
            null,
            Object(i.e)(o.c, 'fallback-entity-initials')
          ),
          p({ id: 'Fallback-User-Inverse' }, 'Fallback User Inverse'),
          Object(n.createElement)(
            c.a,
            null,
            Object(i.e)(o.c, 'fallback-user-initials-inverse')
          ),
          p({ id: 'Linked-Avatar' }, 'Linked Avatar'),
          Object(n.createElement)(c.a, null, Object(i.e)(o.c, 'linked-avatar')),
          f({ id: 'Initials' }, 'Initials'),
          j(
            {},
            'If an image is unavailable, up to two letters can be used instead. If the record name contains two words, like first and last name, use the first capitalized letter of each. For records that only have a single word name, use the first two letters of that word using one capital and one lower case letter. If either an image or initials are unavailable, use the object icon as a fallback.'
          ),
          Object(n.createElement)(c.a, null, u),
          m({ id: 'Examples-2' }, 'Examples'),
          p({ id: 'Linked-Avatar-2' }, 'Linked Avatar'),
          Object(n.createElement)(
            c.a,
            null,
            Object(i.e)(d, 'linked-avatar-initials')
          ),
          f({ id: 'Layout' }, 'Layout'),
          m({ id: 'Circle' }, 'Circle'),
          j(
            {},
            'Use a circle for all people-oriented objects that could potentially render as avatars. For a fully round avatar, add the ',
            b({}, '.slds-avatar_circle'),
            ' class. Four additional classes are available for sizing.'
          ),
          Object(n.createElement)(c.a, null, Object(i.e)(o.c, 'circle')),
          f({ id: 'Sizes' }, 'Sizes'),
          m({ id: 'X-Small' }, 'X-Small'),
          Object(n.createElement)(
            c.a,
            { toggleCode: !1 },
            Object(i.e)(o.c, 'x-small-image')
          ),
          m({ id: 'Small' }, 'Small'),
          Object(n.createElement)(
            c.a,
            { toggleCode: !1 },
            Object(i.e)(o.c, 'small-image')
          ),
          m({ id: 'Medium' }, 'Medium'),
          Object(n.createElement)(
            c.a,
            { toggleCode: !1 },
            Object(i.e)(o.c, 'medium-image')
          ),
          m({ id: 'Large' }, 'Large'),
          Object(n.createElement)(
            c.a,
            { toggleCode: !1 },
            Object(i.e)(o.c, 'large-image')
          )
        );
      },
      v = function() {
        return Object(r.a)(O());
      };
  }
});
