var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/file-selector/integrated/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var r, o, n = t[0], s = t[1], u = t[2], c = 0, m = [];
      c < n.length;
      c++
    )
      (o = n[c]),
        Object.prototype.hasOwnProperty.call(a, o) && a[o] && m.push(a[o][0]),
        (a[o] = 0);
    for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
    for (d && d(t); m.length; ) m.shift()();
    return l.push.apply(l, u || []), i();
  }
  function i() {
    for (var e, t = 0; t < l.length; t++) {
      for (var i = l[t], r = !0, n = 1; n < i.length; n++) {
        var s = i[n];
        0 !== a[s] && (r = !1);
      }
      r && (l.splice(t--, 1), (e = o((o.s = i[0]))));
    }
    return e;
  }
  var r = {},
    a = {
      82: 0,
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
    l = [];
  function o(t) {
    if (r[t]) return r[t].exports;
    var i = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(i.exports, i, i.exports, o), (i.l = !0), i.exports;
  }
  (o.m = e),
    (o.c = r),
    (o.d = function(e, t, i) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
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
      var i = Object.create(null);
      if (
        (o.r(i),
        Object.defineProperty(i, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          o.d(
            i,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return i;
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
  var n = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    s = n.push.bind(n);
  (n.push = t), (n = n.slice());
  for (var u = 0; u < n.length; u++) t(n[u]);
  var d = s;
  return l.push([225, 0]), i();
})({
  0: function(e, t) {
    e.exports = React;
  },
  225: function(e, t, i) {
    'use strict';
    i.r(t),
      i.d(t, 'states', function() {
        return u;
      });
    var r = i(0),
      a = i.n(r),
      l = i(8),
      o = i(2),
      n = i.n(o),
      s = function(e) {
        return a.a.createElement(
          'div',
          {
            className: n()(
              'slds-file-selector slds-file-selector_integrated',
              e.className
            )
          },
          a.a.createElement(
            'div',
            {
              className: n()(
                'slds-file-selector__dropzone slds-file-selector__dropzone_integrated',
                e.drag ? 'slds-has-drag' : null,
                e.dragover ? 'slds-has-drag-over' : null
              ),
              'aria-hidden': 'true'
            },
            a.a.createElement('input', {
              className: 'slds-file-selector__input slds-assistive-text',
              accept: 'image/png',
              type: 'file',
              id: 'file-upload-input-01',
              disabled: e.dragoverError,
              tabIndex: '-1'
            }),
            a.a.createElement(
              'label',
              {
                className:
                  'slds-file-selector__body slds-file-selector__body_integrated',
                htmlFor: 'file-upload-input-01'
              },
              e.dragoverError
                ? a.a.createElement(l.a, {
                    className:
                      'slds-file-selector__body-icon slds-icon slds-icon-text-default',
                    sprite: 'utility',
                    symbol: 'error'
                  })
                : a.a.createElement(l.a, {
                    className:
                      'slds-file-selector__body-icon slds-icon slds-icon-text-default',
                    sprite: 'utility',
                    symbol: 'upload'
                  }),
              a.a.createElement(
                'span',
                {
                  className:
                    'slds-file-selector__text slds-file-selector__text_integrated slds-text-heading_medium slds-text-align_center'
                },
                e.dragoverError
                  ? 'Too many files selected. Attach up to 1 file.'
                  : 'Drop Files'
              )
            )
          ),
          e.children
        );
      };
    t.default = a.a.createElement(
      'div',
      { className: 'demo-only', style: { width: '320px', height: '320px' } },
      a.a.createElement(
        s,
        { className: 'slds-file-selector_integrated' },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      )
    );
    var u = [
      {
        id: 'integrated-file-selector-drag',
        label: 'Drag',
        element: a.a.createElement(
          'div',
          {
            className: 'demo-only',
            style: { width: '320px', height: '320px' }
          },
          a.a.createElement(
            s,
            { className: 'slds-file-selector_integrated', drag: !0 },
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          )
        )
      },
      {
        id: 'integrated-file-selector-dragover',
        label: 'Dragover',
        element: a.a.createElement(
          'div',
          {
            className: 'demo-only',
            style: { width: '320px', height: '320px' }
          },
          a.a.createElement(
            s,
            {
              className: 'slds-file-selector_integrated',
              drag: !0,
              dragover: !0
            },
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          )
        )
      },
      {
        id: 'integrated-file-selector-dragover-error',
        label: 'Dragover with error',
        element: a.a.createElement(
          'div',
          {
            className: 'demo-only',
            style: { width: '320px', height: '320px' }
          },
          a.a.createElement(
            s,
            {
              className: 'slds-file-selector_integrated',
              drag: !0,
              dragoverError: !0,
              error: !0
            },
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          )
        )
      }
    ];
  }
});
