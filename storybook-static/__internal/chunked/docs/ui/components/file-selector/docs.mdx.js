var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/docs/ui/components/file-selector/docs.mdx.js'
] = (function(e) {
  function t(t) {
    for (
      var l, s, o = t[0], n = t[1], c = t[2], u = 0, m = [];
      u < o.length;
      u++
    )
      (s = o[u]),
        Object.prototype.hasOwnProperty.call(a, s) && a[s] && m.push(a[s][0]),
        (a[s] = 0);
    for (l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
    for (d && d(t); m.length; ) m.shift()();
    return i.push.apply(i, c || []), r();
  }
  function r() {
    for (var e, t = 0; t < i.length; t++) {
      for (var r = i[t], l = !0, o = 1; o < r.length; o++) {
        var n = r[o];
        0 !== a[n] && (l = !1);
      }
      l && (i.splice(t--, 1), (e = s((s.s = r[0]))));
    }
    return e;
  }
  var l = {},
    a = { 37: 0 },
    i = [];
  function s(t) {
    if (l[t]) return l[t].exports;
    var r = (l[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, s), (r.l = !0), r.exports;
  }
  (s.m = e),
    (s.c = l),
    (s.d = function(e, t, r) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
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
      var r = Object.create(null);
      if (
        (s.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var l in e)
          s.d(
            r,
            l,
            function(t) {
              return e[t];
            }.bind(null, l)
          );
      return r;
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
    n = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var c = 0; c < o.length; c++) t(o[c]);
  var d = n;
  return i.push([217, 0]), r();
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
  217: function(e, t, r) {
    'use strict';
    r.r(t),
      r.d(t, 'getElement', function() {
        return D;
      }),
      r.d(t, 'getContents', function() {
        return S;
      });
    var l = r(0),
      a = r.n(l),
      i = r(4),
      s = r(1),
      o = (r(26), r(43), r(15), r(2)),
      n = r(10),
      c = r(5),
      d = r.n(c),
      u = function(e) {
        return a.a.createElement(
          'div',
          {
            className: d()(
              'slds-form-element',
              e.error ? 'slds-has-error' : null
            )
          },
          a.a.createElement(
            'span',
            {
              className: 'slds-form-element__label',
              id: 'file-selector-primary-label'
            },
            'Attachment'
          ),
          a.a.createElement(
            'div',
            { className: 'slds-form-element__control' },
            a.a.createElement(
              'div',
              { className: d()('slds-file-selector', e.className) },
              a.a.createElement(
                'div',
                {
                  className: d()(
                    'slds-file-selector__dropzone',
                    e.dragover ? 'slds-has-drag-over' : null
                  )
                },
                a.a.createElement('input', {
                  className: 'slds-file-selector__input slds-assistive-text',
                  accept: 'image/png',
                  type: 'file',
                  id: 'file-upload-input-01',
                  disabled: e.dragoverError,
                  'aria-describedby': e.error ? 'error-01' : null,
                  'aria-labelledby':
                    'file-selector-primary-label file-selector-secondary-label'
                }),
                a.a.createElement(
                  'label',
                  {
                    className: 'slds-file-selector__body',
                    htmlFor: 'file-upload-input-01',
                    id: 'file-selector-secondary-label'
                  },
                  a.a.createElement(
                    'span',
                    {
                      className:
                        'slds-file-selector__button slds-button slds-button_neutral'
                    },
                    a.a.createElement(n.a, {
                      className: 'slds-button__icon slds-button__icon_left',
                      sprite: 'utility',
                      symbol: 'upload'
                    }),
                    'Upload ',
                    e.files ? 'Files' : 'Image'
                  ),
                  a.a.createElement(
                    'span',
                    { className: 'slds-file-selector__text slds-medium-show' },
                    'or Drop ',
                    e.files ? 'Files' : 'Image'
                  )
                )
              )
            )
          ),
          e.error
            ? a.a.createElement(
                'div',
                { className: 'slds-form-element__help', id: 'error-01' },
                'File type not supported'
              )
            : null
        );
      },
      m = a.a.createElement(u, {
        files: !0,
        className: 'slds-file-selector_files'
      }),
      p = [
        {
          id: 'file-selector-files-error',
          label: 'Error',
          element: a.a.createElement(u, {
            files: !0,
            className: 'slds-file-selector_files',
            error: !0
          })
        },
        {
          id: 'file-selector-files-dragover',
          label: 'Dragover',
          element: a.a.createElement(u, {
            files: !0,
            className: 'slds-file-selector_files',
            dragover: !0
          })
        },
        {
          id: 'file-selector-files-dragover-error',
          label: 'Dragover with error',
          element: a.a.createElement(u, {
            files: !0,
            className: 'slds-file-selector_files',
            dragoverError: !0,
            error: !0
          })
        }
      ],
      f = a.a.createElement(
        'div',
        { className: 'demo-only', style: { maxWidth: '320px' } },
        a.a.createElement(u, { className: 'slds-file-selector_images' })
      ),
      g = [
        {
          id: 'file-selector-images-error',
          label: 'Error',
          element: a.a.createElement(
            'div',
            { className: 'demo-only', style: { maxWidth: '320px' } },
            a.a.createElement(u, {
              className: 'slds-file-selector_images',
              error: !0
            })
          )
        },
        {
          id: 'file-selector-images-dragover',
          label: 'Dragover',
          element: a.a.createElement(
            'div',
            { className: 'demo-only', style: { maxWidth: '320px' } },
            a.a.createElement(u, {
              className: 'slds-file-selector_images',
              dragover: !0
            })
          )
        },
        {
          id: 'file-selector-images-dragover-error',
          label: 'Dragover with error',
          element: a.a.createElement(
            'div',
            { className: 'demo-only', style: { maxWidth: '320px' } },
            a.a.createElement(u, {
              className: 'slds-file-selector_images',
              dragoverError: !0,
              error: !0
            })
          )
        }
      ],
      b = function(e) {
        return a.a.createElement(
          'div',
          {
            className: d()(
              'slds-file-selector slds-file-selector_integrated',
              e.className
            )
          },
          a.a.createElement(
            'div',
            {
              className: d()(
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
                ? a.a.createElement(n.a, {
                    className:
                      'slds-file-selector__body-icon slds-icon slds-icon-text-default',
                    sprite: 'utility',
                    symbol: 'error'
                  })
                : a.a.createElement(n.a, {
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
      },
      v = a.a.createElement(
        'div',
        { className: 'demo-only', style: { width: '320px', height: '320px' } },
        a.a.createElement(
          b,
          { className: 'slds-file-selector_integrated' },
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        )
      ),
      h = [
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
              b,
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
              b,
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
              b,
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
      ],
      _ = i.c.code,
      E = i.c.h2,
      y = i.c.h3,
      x = i.c.h4,
      N = i.c.li,
      O = i.c.p,
      j = i.c.ul,
      D = function() {
        return Object(l.createElement)(
          i.b,
          {},
          Object(l.createElement)(
            'div',
            { className: 'doc lead' },
            'The File selector component allows the user to select file(s) from a user’s file system. Either natively using an file input or drag and drop.'
          ),
          Object(l.createElement)(s.a, { exampleOnly: !0 }, m),
          E({ id: 'About-File-Selector' }, 'About File Selector'),
          y({ id: 'Accessibility' }, 'Accessibility'),
          O(
            {},
            'When implementing this component, pay special attention to the following:'
          ),
          x({ id: 'Markup' }, 'Markup'),
          j(
            {},
            N(
              {},
              _({}, 'aria-labelledby'),
              ' is placed on the HTML ',
              _({}, 'input'),
              ' to form an "Accessible Label" from 2 separate visible text labels, by referencing their ',
              _({}, 'id'),
              ' attributes'
            )
          ),
          E({ id: 'Base' }, 'Base'),
          Object(l.createElement)(s.a, null, m),
          E({ id: 'States' }, 'States'),
          y({ id: 'Error' }, 'Error'),
          Object(l.createElement)(
            s.a,
            null,
            Object(o.e)(p, 'file-selector-files-error')
          ),
          y({ id: 'Dragover' }, 'Dragover'),
          Object(l.createElement)(
            s.a,
            null,
            Object(o.e)(p, 'file-selector-files-dragover')
          ),
          y({ id: 'Dragover-with-error' }, 'Dragover with error'),
          Object(l.createElement)(
            s.a,
            null,
            Object(o.e)(p, 'file-selector-files-dragover-error')
          ),
          E({ id: 'Image' }, 'Image'),
          O({}, 'Multi Line / Image'),
          O(
            {},
            'Use as a dedicated dropzone for image files only. May require a cropping control.'
          ),
          Object(l.createElement)(s.a, null, f),
          E({ id: 'States-2' }, 'States'),
          y({ id: 'Error-2' }, 'Error'),
          Object(l.createElement)(
            s.a,
            null,
            Object(o.e)(g, 'file-selector-images-error')
          ),
          y({ id: 'Dragover-2' }, 'Dragover'),
          Object(l.createElement)(
            s.a,
            null,
            Object(o.e)(g, 'file-selector-images-dragover')
          ),
          y({ id: 'Dragover-with-error-2' }, 'Dragover with error'),
          Object(l.createElement)(
            s.a,
            null,
            Object(o.e)(g, 'file-selector-images-dragover-error')
          ),
          E({ id: 'Integrated' }, 'Integrated'),
          O({}, 'Invisible Dropzone (Container)'),
          O(
            {},
            'Use when an entire container should be droppable. The container should have a visible boundary, like a modal, composer, or page.'
          ),
          Object(l.createElement)(s.a, null, v),
          E({ id: 'States-3' }, 'States'),
          y({ id: 'Drag' }, 'Drag'),
          Object(l.createElement)(
            s.a,
            null,
            Object(o.e)(h, 'integrated-file-selector-drag')
          ),
          y({ id: 'Dragover-3' }, 'Dragover'),
          Object(l.createElement)(
            s.a,
            null,
            Object(o.e)(h, 'integrated-file-selector-dragover')
          ),
          y({ id: 'Dragover-with-error-3' }, 'Dragover with error'),
          Object(l.createElement)(
            s.a,
            null,
            Object(o.e)(h, 'integrated-file-selector-dragover-error')
          )
        );
      },
      S = function() {
        return Object(i.a)(D());
      };
  }
});
