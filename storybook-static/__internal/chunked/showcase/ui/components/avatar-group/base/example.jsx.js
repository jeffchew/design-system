var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/avatar-group/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var n, r, s = t[0], m = t[1], c = t[2], o = 0, p = [];
      o < s.length;
      o++
    )
      (r = s[o]),
        Object.prototype.hasOwnProperty.call(l, r) && l[r] && p.push(l[r][0]),
        (l[r] = 0);
    for (n in m) Object.prototype.hasOwnProperty.call(m, n) && (e[n] = m[n]);
    for (u && u(t); p.length; ) p.shift()();
    return i.push.apply(i, c || []), a();
  }
  function a() {
    for (var e, t = 0; t < i.length; t++) {
      for (var a = i[t], n = !0, s = 1; s < a.length; s++) {
        var m = a[s];
        0 !== l[m] && (n = !1);
      }
      n && (i.splice(t--, 1), (e = r((r.s = a[0]))));
    }
    return e;
  }
  var n = {},
    l = {
      5: 0,
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
    i = [];
  function r(t) {
    if (n[t]) return n[t].exports;
    var a = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
  }
  (r.m = e),
    (r.c = n),
    (r.d = function(e, t, a) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
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
      var a = Object.create(null);
      if (
        (r.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          r.d(
            a,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return a;
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
  var s = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    m = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var c = 0; c < s.length; c++) t(s[c]);
  var u = m;
  return i.push([255, 0]), a();
})({
  0: function(e, t) {
    e.exports = React;
  },
  255: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'ContextInversed', function() {
        return f;
      }),
      a.d(t, 'examples', function() {
        return g;
      });
    var n = a(0),
      l = a.n(n),
      i = a(1),
      r = a.n(i),
      s = a(2),
      m = a.n(s),
      c = a(33);
    var u = function(e) {
      var t = e.isPrimary,
        a = e.isInverse,
        i = e.type,
        r = function(e, t) {
          switch (e) {
            case 'icon':
              return l.a.createElement(y, null);
            case 'user-initials':
              return l.a.createElement(E, { isInverse: a });
            case 'image':
            default:
              return l.a.createElement(d, { imgType: t ? '1' : '2' });
          }
        };
      return l.a.createElement(
        n.Fragment,
        null,
        l.a.createElement(p, { isPrimary: !0, isInverse: a }, r(i, t)),
        l.a.createElement(p, { isInverse: a }, r(i, !1))
      );
    };
    (u.defaultProps = { type: 'image' }),
      (u.propTypes = {
        type: r.a.oneOf(['image', 'icon', 'user-initials']),
        isPrimary: r.a.bool,
        isInverse: r.a.bool
      });
    var o = function(e) {
      return l.a.createElement(
        'span',
        {
          className: m()(
            'slds-avatar-group',
            ((t = {}),
            (a = 'slds-avatar-group_'.concat(e.size)),
            (n = e.size),
            a in t
              ? Object.defineProperty(t, a, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (t[a] = n),
            t)
          )
        },
        e.children
      );
      var t, a, n;
    };
    (o.defaultProps = { children: l.a.createElement(u, null) }),
      (o.propTypes = {
        children: r.a.node.isRequired,
        size: r.a.oneOf(['x-small', 'small', 'medium', 'large'])
      });
    var p = function(e) {
      var t = e.children,
        a = e.isPrimary,
        n = e.isInverse;
      return l.a.createElement(
        c.a,
        { isGrouped: !0, isPrimary: a, isInverse: n },
        t
      );
    };
    p.propTypes = {
      children: r.a.node.isRequired,
      isPrimary: r.a.bool,
      isInverse: r.a.bool
    };
    var d = function(e) {
      var t = e.imgType,
        a = 'Person '.concat(t, ' name');
      return l.a.createElement('img', {
        alt: a,
        src: '/assets/images/avatar'.concat(t, '.jpg'),
        title: a
      });
    };
    (d.defaultProps = { imgType: '1' }),
      (d.propTypes = { imgType: r.a.oneOf(['1', '2']).isRequired });
    var y = function(e) {
        return l.a.createElement(c.b, { symbol: 'user', isGrouped: !0 });
      },
      E = function(e) {
        return l.a.createElement(c.c, {
          isGrouped: !0,
          isInverse: e.isInverse,
          title: 'Person name',
          initials: 'WW'
        });
      };
    E.propTypes = { isInverse: r.a.bool };
    var f = function(e) {
        return l.a.createElement(
          'div',
          {
            className: 'demo-only',
            style: { padding: '0.5rem', background: '#16325c' }
          },
          e.children
        );
      },
      g = ((t.default = l.a.createElement(
        o,
        null,
        l.a.createElement(u, { type: 'image' })
      )),
      [
        {
          id: 'with-icons',
          label: 'With icons',
          element: l.a.createElement(
            o,
            null,
            l.a.createElement(u, { type: 'icon' })
          )
        },
        {
          id: 'with-user-initials',
          label: 'With initials',
          element: l.a.createElement(
            o,
            null,
            l.a.createElement(u, { type: 'user-initials' })
          )
        },
        {
          id: 'with-user-initials-inversed',
          label: 'With initials inversed',
          demoStyles: 'padding: 0.5rem; background: #16325c',
          element: l.a.createElement(
            o,
            null,
            l.a.createElement(u, { type: 'user-initials', isInverse: !0 })
          )
        },
        {
          id: 'with-image-and-icon',
          label: 'With image and icon',
          element: l.a.createElement(
            o,
            null,
            l.a.createElement(p, { isPrimary: !0 }, l.a.createElement(d, null)),
            l.a.createElement(p, null, l.a.createElement(y, null))
          )
        },
        {
          id: 'with-icon-and-user-initials',
          label: 'With icon and user initials',
          element: l.a.createElement(
            o,
            null,
            l.a.createElement(p, { isPrimary: !0 }, l.a.createElement(y, null)),
            l.a.createElement(p, null, l.a.createElement(E, null))
          )
        },
        {
          id: 'with-user-initials-and-image',
          label: 'With user initials and image',
          element: l.a.createElement(
            o,
            null,
            l.a.createElement(p, { isPrimary: !0 }, l.a.createElement(E, null)),
            l.a.createElement(p, null, l.a.createElement(d, null))
          )
        },
        {
          id: 'x-small-image',
          label: 'X-Small',
          element: l.a.createElement(
            o,
            { size: 'x-small' },
            l.a.createElement(u, { type: 'image' })
          )
        },
        {
          id: 'small-image',
          label: 'Small',
          element: l.a.createElement(
            o,
            { size: 'small' },
            l.a.createElement(u, { type: 'image' })
          )
        },
        {
          id: 'medium-image',
          label: 'Medium',
          element: l.a.createElement(
            o,
            { size: 'medium' },
            l.a.createElement(u, { type: 'image' })
          )
        },
        {
          id: 'large-image',
          label: 'Large',
          element: l.a.createElement(
            o,
            { size: 'large' },
            l.a.createElement(u, { type: 'image' })
          )
        },
        {
          id: 'x-small-icon',
          label: 'X-Small With icon',
          element: l.a.createElement(
            o,
            { size: 'x-small' },
            l.a.createElement(u, { type: 'icon' })
          )
        },
        {
          id: 'small-icon',
          label: 'Small With icon',
          element: l.a.createElement(
            o,
            { size: 'small' },
            l.a.createElement(u, { type: 'icon' })
          )
        },
        {
          id: 'medium-icon',
          label: 'Medium With icon',
          element: l.a.createElement(
            o,
            { size: 'medium' },
            l.a.createElement(u, { type: 'icon' })
          )
        },
        {
          id: 'large-icon',
          label: 'Large With icon',
          element: l.a.createElement(
            o,
            { size: 'large' },
            l.a.createElement(u, { type: 'icon' })
          )
        },
        {
          id: 'x-small-user-initials',
          label: 'X-Small With initials',
          element: l.a.createElement(
            o,
            { size: 'x-small' },
            l.a.createElement(u, { type: 'user-initials' })
          )
        },
        {
          id: 'small-user-initials',
          label: 'Small With initials',
          element: l.a.createElement(
            o,
            { size: 'small' },
            l.a.createElement(u, { type: 'user-initials' })
          )
        },
        {
          id: 'medium-user-initials',
          label: 'Medium With initials',
          element: l.a.createElement(
            o,
            { size: 'medium' },
            l.a.createElement(u, { type: 'user-initials' })
          )
        },
        {
          id: 'large-user-initials',
          label: 'Large With initials',
          element: l.a.createElement(
            o,
            { size: 'large' },
            l.a.createElement(u, { type: 'user-initials' })
          )
        }
      ]);
  }
});
