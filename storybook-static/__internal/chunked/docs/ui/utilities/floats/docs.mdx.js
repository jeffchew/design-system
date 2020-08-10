var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/utilities/floats/docs.mdx.js'] = (function(e) {
  function t(t) {
    for (
      var a, o, c = t[0], i = t[1], s = t[2], u = 0, d = [];
      u < c.length;
      u++
    )
      (o = c[u]),
        Object.prototype.hasOwnProperty.call(l, o) && l[o] && d.push(l[o][0]),
        (l[o] = 0);
    for (a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
    for (f && f(t); d.length; ) d.shift()();
    return r.push.apply(r, s || []), n();
  }
  function n() {
    for (var e, t = 0; t < r.length; t++) {
      for (var n = r[t], a = !0, c = 1; c < n.length; c++) {
        var i = n[c];
        0 !== l[i] && (a = !1);
      }
      a && (r.splice(t--, 1), (e = o((o.s = n[0]))));
    }
    return e;
  }
  var a = {},
    l = { 90: 0 },
    r = [];
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
  var c = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    i = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var s = 0; s < c.length; s++) t(c[s]);
  var f = i;
  return r.push([270, 0]), n();
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
  270: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getElement', function() {
        return p;
      }),
      n.d(t, 'getContents', function() {
        return h;
      });
    var a = n(0),
      l = n.n(a),
      r = n(4),
      o = n(1),
      c = n(15),
      i = n(2),
      s = [
        {
          id: 'left',
          label: 'Left',
          element: l.a.createElement(
            'div',
            { className: 'slds-clearfix' },
            l.a.createElement(
              'div',
              { className: 'slds-float_left' },
              l.a.createElement('p', null, 'I’m floooaaaating')
            )
          )
        },
        {
          id: 'right',
          label: 'Right',
          element: l.a.createElement(
            'div',
            { className: 'slds-clearfix' },
            l.a.createElement(
              'div',
              { className: 'slds-float_right' },
              l.a.createElement('p', null, 'I’m floooaaaating')
            )
          )
        },
        {
          id: 'none',
          label: 'None',
          element: l.a.createElement(
            'div',
            { className: 'slds-float_none' },
            l.a.createElement('p', null, 'I’m not floooaaaating')
          )
        },
        {
          id: 'clearfix',
          label: 'Clearfix',
          element: l.a.createElement(
            'div',
            { className: 'slds-clearfix' },
            l.a.createElement(
              'div',
              { className: 'slds-float_left' },
              l.a.createElement('p', null, 'I’m floooaaaating')
            ),
            l.a.createElement(
              'div',
              { className: 'slds-float_right' },
              l.a.createElement('p', null, 'I’m floooaaaating')
            )
          )
        }
      ],
      f = r.c.code,
      u = r.c.h2,
      d = r.c.h3,
      m = r.c.p,
      p = function() {
        return Object(a.createElement)(
          r.b,
          {},
          Object(a.createElement)(
            'div',
            { className: 'doc lead' },
            'Use a float to pull an element out of the document’s normal flow and to align it with the left or right side of the container.'
          ),
          u({ id: 'About-Floats' }, 'About Floats'),
          m(
            {},
            'To float an element on the left, add the ',
            f({}, '.slds-float_left'),
            ' class to the element. To float it on the right, add the ',
            f({}, '.slds-float_right'),
            ' class.'
          ),
          Object(a.createElement)(
            c.a,
            { type: 'note', header: 'Note' },
            Object(a.createElement)(
              'p',
              null,
              'The floated element must be first in the document flow, even if it renders on the right.'
            )
          ),
          m(
            {},
            'If you want the parent of the floated element to contain the floats, add the ',
            f({}, '.slds-clearfix'),
            ' class to the parent.'
          ),
          u({ id: 'Examples' }, 'Examples'),
          d({ id: 'Left' }, 'Left'),
          Object(a.createElement)(o.a, null, Object(i.e)(s, 'left')),
          d({ id: 'Right' }, 'Right'),
          Object(a.createElement)(o.a, null, Object(i.e)(s, 'right')),
          d({ id: 'None' }, 'None'),
          Object(a.createElement)(o.a, null, Object(i.e)(s, 'none')),
          d({ id: 'Clearfix' }, 'Clearfix'),
          Object(a.createElement)(o.a, null, Object(i.e)(s, 'clearfix'))
        );
      },
      h = function() {
        return Object(r.a)(p());
      };
  }
});
