var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/files/docs.mdx.js'] = (function(e) {
  function t(t) {
    for (
      var i, s, r = t[0], o = t[1], c = t[2], m = 0, h = [];
      m < r.length;
      m++
    )
      (s = r[m]),
        Object.prototype.hasOwnProperty.call(l, s) && l[s] && h.push(l[s][0]),
        (l[s] = 0);
    for (i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
    for (d && d(t); h.length; ) h.shift()();
    return n.push.apply(n, c || []), a();
  }
  function a() {
    for (var e, t = 0; t < n.length; t++) {
      for (var a = n[t], i = !0, r = 1; r < a.length; r++) {
        var o = a[r];
        0 !== l[o] && (i = !1);
      }
      i && (n.splice(t--, 1), (e = s((s.s = a[0]))));
    }
    return e;
  }
  var i = {},
    l = { 38: 0 },
    n = [];
  function s(t) {
    if (i[t]) return i[t].exports;
    var a = (i[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, s), (a.l = !0), a.exports;
  }
  (s.m = e),
    (s.c = i),
    (s.d = function(e, t, a) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
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
      var a = Object.create(null);
      if (
        (s.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var i in e)
          s.d(
            a,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
          );
      return a;
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
  var r = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    o = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var c = 0; c < r.length; c++) t(r[c]);
  var d = o;
  return n.push([272, 0]), a();
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
  272: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'getElement', function() {
        return y;
      }),
      a.d(t, 'getContents', function() {
        return g;
      });
    var i = a(0),
      l = a.n(i),
      n = a(4),
      s = a(1),
      r = (a(26), a(43), a(15), a(2)),
      o = a(46),
      c = l.a.createElement(
        'div',
        { style: { width: '20rem' } },
        l.a.createElement(o.b, {
          isCard: !0,
          hasCrop: !0,
          hasTitleCard: !0,
          symbol: 'pdf',
          title: 'Proposal.pdf',
          hasImage: !0
        })
      ),
      d = [
        {
          id: 'attachment-file-no-image',
          label: 'File with no image',
          element: l.a.createElement(
            'div',
            { style: { width: '20rem' } },
            l.a.createElement(o.b, {
              isCard: !0,
              hasCrop: !0,
              hasTitleCard: !0,
              symbol: 'image',
              title: 'Image Title'
            })
          )
        },
        {
          id: 'attachment-file-no-title',
          label: 'File with no title',
          element: l.a.createElement(
            'div',
            { style: { width: '20rem' } },
            l.a.createElement(o.b, {
              isCard: !0,
              hasCrop: !0,
              noCaption: !0,
              symbol: 'pdf',
              hasImage: !0
            })
          )
        },
        {
          id: 'attachment-file-truncate-title',
          label: 'File with truncating title',
          element: l.a.createElement(
            'div',
            { style: { width: '20rem' } },
            l.a.createElement(o.b, {
              title: 'super-super-long-file-name-that-will-truncate.pdf',
              symbol: 'pdf',
              isCard: !0,
              hasCrop: !0,
              hasTitleCard: !0,
              hasActions: !0
            })
          )
        },
        {
          id: 'attachment-file-with-actions',
          label: 'File with actions',
          element: l.a.createElement(
            'div',
            { style: { width: '20rem' } },
            l.a.createElement(o.b, {
              isCard: !0,
              hasCrop: !0,
              hasTitleCard: !0,
              symbol: 'pdf',
              title: 'Proposal.pdf',
              hasActions: !0,
              hasImage: !0
            })
          )
        },
        {
          id: 'attachment-file-with-no-title-actions',
          label: 'File with no title + actions',
          element: l.a.createElement(
            'div',
            { style: { width: '20rem' } },
            l.a.createElement(o.b, {
              isCard: !0,
              hasCrop: !0,
              symbol: 'pdf',
              title: 'Proposal.pdf',
              hasActions: !0,
              iconColor: 'white',
              hasScrim: !0,
              noCaption: !0,
              hasImage: !0
            })
          )
        },
        {
          id: 'attachment-file-external-icon',
          label: 'File with external icon',
          element: l.a.createElement(
            'div',
            { style: { width: '20rem' } },
            l.a.createElement(o.b, {
              isCard: !0,
              hasCrop: !0,
              hasTitleCard: !0,
              symbol: 'pdf',
              title: 'Proposal.pdf',
              isExternalSource: !0
            })
          )
        },
        {
          id: 'attachment-file-loading-with-title',
          label: 'File in loading state with title',
          element: l.a.createElement(
            'div',
            { style: { width: '20rem' } },
            l.a.createElement(o.b, {
              isCard: !0,
              hasCrop: !0,
              hasTitleCard: !0,
              sprite: 'utility',
              symbol: 'image',
              isLoading: !0
            })
          )
        },
        {
          id: 'attachment-file-loading-no-title',
          label: 'File in loading state without title',
          element: l.a.createElement(
            'div',
            { style: { width: '20rem' } },
            l.a.createElement(o.b, {
              isCard: !0,
              hasCrop: !0,
              isLoading: !0,
              noCaption: !0
            })
          )
        },
        {
          id: 'multi-attachments',
          label: 'Less than 3 file attachments',
          element: l.a.createElement(
            'ul',
            { className: 'slds-grid slds-grid_pull-padded' },
            l.a.createElement(
              'li',
              {
                className:
                  'slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3'
              },
              l.a.createElement(o.b, {
                isCard: !0,
                hasCrop: !0,
                hasTitleCard: !0,
                symbol: 'pdf',
                title: 'Proposal.pdf',
                hasImage: !0
              })
            ),
            l.a.createElement(
              'li',
              {
                className:
                  'slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3'
              },
              l.a.createElement(o.b, {
                isCard: !0,
                hasCrop: !0,
                hasTitleCard: !0,
                symbol: 'pdf',
                title: 'Proposal.pdf'
              })
            )
          )
        },
        {
          id: 'multi-attachments-overflow',
          label: 'Greater than 3 file attachments',
          element: l.a.createElement(
            'ul',
            { className: 'slds-grid slds-grid_pull-padded' },
            l.a.createElement(
              'li',
              {
                className:
                  'slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3'
              },
              l.a.createElement(o.b, {
                isCard: !0,
                hasCrop: !0,
                hasTitleCard: !0,
                symbol: 'pdf',
                title: 'Proposal.pdf',
                hasImage: !0
              })
            ),
            l.a.createElement(
              'li',
              {
                className:
                  'slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3  slds-medium-show'
              },
              l.a.createElement(o.b, {
                isCard: !0,
                hasCrop: !0,
                hasTitleCard: !0,
                symbol: 'pdf',
                title: 'Proposal.pdf'
              })
            ),
            l.a.createElement(
              'li',
              {
                className:
                  'slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3'
              },
              l.a.createElement(o.b, {
                isCard: !0,
                hasCrop: !0,
                title: '+22',
                hasImage: !0,
                hasOverlay: !0
              })
            )
          )
        },
        {
          id: 'link-attachment',
          label: 'Link attachment',
          element: l.a.createElement(o.a, {
            articleTitle: 'Maui By Air The Best Way Around The Island',
            articleDescription:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.'
          })
        },
        {
          id: 'crop-4-by-3',
          label: 'Crop 4 x 3',
          element: l.a.createElement(
            'div',
            { style: { width: '20rem' } },
            l.a.createElement(o.b, {
              isCard: !0,
              has4x3Crop: !0,
              hasTitleCard: !0,
              symbol: 'pdf',
              title: 'Proposal.pdf',
              hasImage: !0
            })
          )
        },
        {
          id: 'crop-16-by-9',
          label: 'Crop 16 x 9',
          element: l.a.createElement(
            'div',
            { style: { width: '20rem' } },
            l.a.createElement(o.b, {
              isCard: !0,
              has16x9Crop: !0,
              hasTitleCard: !0,
              symbol: 'pdf',
              title: 'Proposal.pdf',
              hasImage: !0
            })
          )
        },
        {
          id: 'crop-1-by-1',
          label: 'Crop 1 by 1',
          element: l.a.createElement(
            'div',
            { style: { width: '20rem' } },
            l.a.createElement(o.b, {
              isCard: !0,
              has1x1Crop: !0,
              hasTitleCard: !0,
              symbol: 'pdf',
              title: 'Proposal.pdf',
              hasImage: !0
            })
          )
        }
      ],
      m = n.c.code,
      h = n.c.h2,
      p = n.c.h3,
      u = n.c.h4,
      f = n.c.p,
      b = n.c.strong,
      y = function() {
        return Object(i.createElement)(
          n.b,
          {},
          Object(i.createElement)(
            'div',
            { className: 'doc lead' },
            'Files are a representation of content uploaded as an attachment.'
          ),
          Object(i.createElement)(
            s.a,
            { exampleOnly: !0 },
            Object(r.e)(d, 'attachment-file-with-actions')
          ),
          h({ id: 'About-Files' }, 'About Files'),
          f(
            {},
            'A figure component is a self-contained unit of content, such as an image with an optional caption. The figure component should NOT be used with icons or logos. A figure can optionally be cropped to a specific ratio such as 16x9, 4x3 and 1x1 with the use of ',
            m({}, '.slds-image__crop'),
            ' and passing in a ratio class such as ',
            m({}, '.slds-image__crop_16-by-9'),
            '.'
          ),
          p({ id: 'Accessibility' }, 'Accessibility'),
          f(
            {},
            'Every ',
            m({}, '<img>'),
            ' you add to your site needs to have an ',
            m({}, 'alt'),
            ' attribute. If the image is informational, set the ',
            m({}, 'alt'),
            ' equal to a descriptive alternative for that image. If the image is decorative or redundant to adjacent text, set ',
            m({}, 'alt=""'),
            ', which conveys to assistive technology users that the image isn’t necessary for understanding the page. Avoid using generic strings like ',
            b({}, 'photo'),
            ', ',
            b({}, 'image'),
            ', or ',
            b({}, 'icon'),
            ' as alt values, as they don’t communicate valuable content to the user.'
          ),
          h({ id: 'Base' }, 'Base'),
          Object(i.createElement)(s.a, null, c),
          h({ id: 'States' }, 'States'),
          p({ id: 'File-with-no-image' }, 'File with no image'),
          Object(i.createElement)(
            s.a,
            null,
            Object(r.e)(d, 'attachment-file-no-image')
          ),
          p({ id: 'File-with-no-title' }, 'File with no title'),
          Object(i.createElement)(
            s.a,
            null,
            Object(r.e)(d, 'attachment-file-no-title')
          ),
          p({ id: 'File-with-actions' }, 'File with actions'),
          Object(i.createElement)(
            s.a,
            null,
            Object(r.e)(d, 'attachment-file-with-actions')
          ),
          p(
            { id: 'File-with-no-title-+-actions' },
            'File with no title + actions'
          ),
          Object(i.createElement)(
            s.a,
            null,
            Object(r.e)(d, 'attachment-file-with-no-title-actions')
          ),
          p({ id: 'File-with-external-icon' }, 'File with external icon'),
          Object(i.createElement)(
            s.a,
            null,
            Object(r.e)(d, 'attachment-file-external-icon')
          ),
          p(
            { id: 'File-in-loading-state-with-title' },
            'File in loading state with title'
          ),
          Object(i.createElement)(
            s.a,
            null,
            Object(r.e)(d, 'attachment-file-loading-with-title')
          ),
          p(
            { id: 'File-in-loading-state-without-title' },
            'File in loading state without title'
          ),
          Object(i.createElement)(
            s.a,
            null,
            Object(r.e)(d, 'attachment-file-loading-no-title')
          ),
          p({ id: '3-file-attachments' }, '< 3 file attachments'),
          Object(i.createElement)(
            s.a,
            null,
            Object(r.e)(d, 'multi-attachments')
          ),
          p({ id: '3-file-attachments-2' }, '> 3 file attachments'),
          Object(i.createElement)(
            s.a,
            null,
            Object(r.e)(d, 'multi-attachments-overflow')
          ),
          h({ id: 'Modifiers' }, 'Modifiers'),
          p({ id: 'Ratio' }, 'Ratio'),
          u({ id: '.slds-file__crop_4-by-3' }, '.slds-file__crop_4-by-3'),
          Object(i.createElement)(s.a, null, Object(r.e)(d, 'crop-4-by-3')),
          u({ id: '.slds-file__crop_16-by-9' }, '.slds-file__crop_16-by-9'),
          Object(i.createElement)(s.a, null, Object(r.e)(d, 'crop-16-by-9')),
          u({ id: '.slds-file__crop_1-by-1' }, '.slds-file__crop_1-by-1'),
          Object(i.createElement)(s.a, null, Object(r.e)(d, 'crop-1-by-1'))
        );
      },
      g = function() {
        return Object(n.a)(y());
      };
  }
});
