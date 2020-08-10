var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/utilities/line-clamp/example.jsx.js'
] = (function(e) {
  function i(i) {
    for (
      var t, s, l = i[0], r = i[1], c = i[2], d = 0, o = [];
      d < l.length;
      d++
    )
      (s = l[d]),
        Object.prototype.hasOwnProperty.call(u, s) && u[s] && o.push(u[s][0]),
        (u[s] = 0);
    for (t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
    for (m && m(i); o.length; ) o.shift()();
    return n.push.apply(n, c || []), a();
  }
  function a() {
    for (var e, i = 0; i < n.length; i++) {
      for (var a = n[i], t = !0, l = 1; l < a.length; l++) {
        var r = a[l];
        0 !== u[r] && (t = !1);
      }
      t && (n.splice(i--, 1), (e = s((s.s = a[0]))));
    }
    return e;
  }
  var t = {},
    u = {
      174: 0,
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
    n = [];
  function s(i) {
    if (t[i]) return t[i].exports;
    var a = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(a.exports, a, a.exports, s), (a.l = !0), a.exports;
  }
  (s.m = e),
    (s.c = t),
    (s.d = function(e, i, a) {
      s.o(e, i) || Object.defineProperty(e, i, { enumerable: !0, get: a });
    }),
    (s.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (s.t = function(e, i) {
      if ((1 & i && (e = s(e)), 8 & i)) return e;
      if (4 & i && 'object' == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (s.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & i && 'string' != typeof e)
      )
        for (var t in e)
          s.d(
            a,
            t,
            function(i) {
              return e[i];
            }.bind(null, t)
          );
      return a;
    }),
    (s.n = function(e) {
      var i =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return s.d(i, 'a', i), i;
    }),
    (s.o = function(e, i) {
      return Object.prototype.hasOwnProperty.call(e, i);
    }),
    (s.p = '/assets/scripts/bundle/');
  var l = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    r = l.push.bind(l);
  (l.push = i), (l = l.slice());
  for (var c = 0; c < l.length; c++) i(l[c]);
  var m = r;
  return n.push([136, 0]), a();
})({
  0: function(e, i) {
    e.exports = React;
  },
  136: function(e, i, a) {
    'use strict';
    a.r(i),
      a.d(i, 'examples', function() {
        return n;
      });
    var t = a(0),
      u = a.n(t),
      n = [
        {
          id: 'default',
          label: 'Line Clamp - Default',
          demoStyles: 'width: 300px',
          element: u.a.createElement(
            'p',
            { className: 'slds-line-clamp' },
            'Sed ut erat nec velit egestas porttitor sit amet et arcu. Aenean dui nisi, ultrices non pulvinar id, tristique vitae sapien. Sed non lacus id risus aliquam ultricies. Vestibulum accumsan nisl ante, ac aliquet erat rhoncus ac. Maecenas quam ipsum, pharetra sed tristique sed, interdum et odio. Nunc accumsan feugiat enim, vel dictum nisl egestas eu. Morbi eu elit hendrerit, sollicitudin sem a, interdum elit. Vivamus eget pharetra urna. Proin tincidunt accumsan nibh, non finibus tellus malesuada vitae. Quisque eu sodales erat, quis tempus diam. Vivamus egestas orci purus, sed efficitur ligula tincidunt at. Aliquam vel convallis ex, at lacinia quam. Pellentesque nec diam placerat, luctus enim ac, volutpat diam.'
          )
        },
        {
          id: 'x-small',
          label: 'Line Clamp - X-Small',
          demoStyles: 'width: 300px',
          element: u.a.createElement(
            'p',
            { className: 'slds-line-clamp_x-small' },
            'Sed ut erat nec velit egestas porttitor sit amet et arcu. Aenean dui nisi, ultrices non pulvinar id, tristique vitae sapien. Sed non lacus id risus aliquam ultricies. Vestibulum accumsan nisl ante, ac aliquet erat rhoncus ac. Maecenas quam ipsum, pharetra sed tristique sed, interdum et odio. Nunc accumsan feugiat enim, vel dictum nisl egestas eu. Morbi eu elit hendrerit, sollicitudin sem a, interdum elit. Vivamus eget pharetra urna. Proin tincidunt accumsan nibh, non finibus tellus malesuada vitae. Quisque eu sodales erat, quis tempus diam. Vivamus egestas orci purus, sed efficitur ligula tincidunt at. Aliquam vel convallis ex, at lacinia quam. Pellentesque nec diam placerat, luctus enim ac, volutpat diam.'
          )
        },
        {
          id: 'small',
          label: 'Line Clamp - Small',
          demoStyles: 'width: 300px',
          element: u.a.createElement(
            'p',
            { className: 'slds-line-clamp_small' },
            'Sed ut erat nec velit egestas porttitor sit amet et arcu. Aenean dui nisi, ultrices non pulvinar id, tristique vitae sapien. Sed non lacus id risus aliquam ultricies. Vestibulum accumsan nisl ante, ac aliquet erat rhoncus ac. Maecenas quam ipsum, pharetra sed tristique sed, interdum et odio. Nunc accumsan feugiat enim, vel dictum nisl egestas eu. Morbi eu elit hendrerit, sollicitudin sem a, interdum elit. Vivamus eget pharetra urna. Proin tincidunt accumsan nibh, non finibus tellus malesuada vitae. Quisque eu sodales erat, quis tempus diam. Vivamus egestas orci purus, sed efficitur ligula tincidunt at. Aliquam vel convallis ex, at lacinia quam. Pellentesque nec diam placerat, luctus enim ac, volutpat diam.'
          )
        },
        {
          id: 'medium',
          label: 'Line Clamp - Medium',
          demoStyles: 'width: 300px',
          element: u.a.createElement(
            'p',
            { className: 'slds-line-clamp_medium' },
            'Sed ut erat nec velit egestas porttitor sit amet et arcu. Aenean dui nisi, ultrices non pulvinar id, tristique vitae sapien. Sed non lacus id risus aliquam ultricies. Vestibulum accumsan nisl ante, ac aliquet erat rhoncus ac. Maecenas quam ipsum, pharetra sed tristique sed, interdum et odio. Nunc accumsan feugiat enim, vel dictum nisl egestas eu. Morbi eu elit hendrerit, sollicitudin sem a, interdum elit. Vivamus eget pharetra urna. Proin tincidunt accumsan nibh, non finibus tellus malesuada vitae. Quisque eu sodales erat, quis tempus diam. Vivamus egestas orci purus, sed efficitur ligula tincidunt at. Aliquam vel convallis ex, at lacinia quam. Pellentesque nec diam placerat, luctus enim ac, volutpat diam.'
          )
        },
        {
          id: 'large',
          label: 'Line Clamp - Large',
          demoStyles: 'width: 300px',
          element: u.a.createElement(
            'p',
            { className: 'slds-line-clamp_large' },
            'Sed ut erat nec velit egestas porttitor sit amet et arcu. Aenean dui nisi, ultrices non pulvinar id, tristique vitae sapien. Sed non lacus id risus aliquam ultricies. Vestibulum accumsan nisl ante, ac aliquet erat rhoncus ac. Maecenas quam ipsum, pharetra sed tristique sed, interdum et odio. Nunc accumsan feugiat enim, vel dictum nisl egestas eu. Morbi eu elit hendrerit, sollicitudin sem a, interdum elit. Vivamus eget pharetra urna. Proin tincidunt accumsan nibh, non finibus tellus malesuada vitae. Quisque eu sodales erat, quis tempus diam. Vivamus egestas orci purus, sed efficitur ligula tincidunt at. Aliquam vel convallis ex, at lacinia quam. Pellentesque nec diam placerat, luctus enim ac, volutpat diam.'
          )
        },
        {
          id: 'block children',
          label: 'Block Level Children',
          demoStyles: 'width: 300px',
          element: u.a.createElement(
            'div',
            { className: 'slds-line-clamp_small' },
            u.a.createElement('p', null, 'Lorem ipsum.'),
            u.a.createElement('p', null, 'dolor.'),
            u.a.createElement(
              'p',
              null,
              'Sed ut erat nec velit egestas porttitor sit amet et arcu. Aenean dui nisi, ultrices non pulvinar id, tristique vitae sapien. Sed non lacus id risus aliquam ultricies. Vestibulum accumsan nisl ante, ac aliquet erat rhoncus ac. Maecenas quam ipsum, pharetra sed tristique sed, interdum et odio. Nunc accumsan feugiat enim, vel dictum nisl egestas eu. Morbi eu elit hendrerit, sollicitudin sem a, interdum elit. Vivamus eget pharetra urna. Proin tincidunt accumsan nibh, non finibus tellus malesuada vitae. Quisque eu sodales erat, quis tempus diam. Vivamus egestas orci purus, sed efficitur ligula tincidunt at. Aliquam vel convallis ex, at lacinia quam. Pellentesque nec diam placerat, luctus enim ac, volutpat diam.'
            )
          )
        }
      ];
  }
});
