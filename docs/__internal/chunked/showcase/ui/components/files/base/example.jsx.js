var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/files/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var l, r, n = t[0], o = t[1], d = t[2], c = 0, p = [];
      c < n.length;
      c++
    )
      (r = n[c]),
        Object.prototype.hasOwnProperty.call(i, r) && i[r] && p.push(i[r][0]),
        (i[r] = 0);
    for (l in o) Object.prototype.hasOwnProperty.call(o, l) && (e[l] = o[l]);
    for (m && m(t); p.length; ) p.shift()();
    return s.push.apply(s, d || []), a();
  }
  function a() {
    for (var e, t = 0; t < s.length; t++) {
      for (var a = s[t], l = !0, n = 1; n < a.length; n++) {
        var o = a[n];
        0 !== i[o] && (l = !1);
      }
      l && (s.splice(t--, 1), (e = r((r.s = a[0]))));
    }
    return e;
  }
  var l = {},
    i = {
      83: 0,
      6: 0,
      13: 0,
      14: 0,
      22: 0,
      24: 0,
      26: 0,
      36: 0,
      37: 0,
      56: 0,
      72: 0,
      73: 0,
      79: 0,
      80: 0,
      93: 0,
      94: 0,
      96: 0,
      97: 0,
      98: 0,
      103: 0,
      104: 0,
      112: 0,
      117: 0,
      118: 0,
      122: 0,
      124: 0,
      127: 0,
      131: 0,
      133: 0,
      135: 0,
      136: 0,
      137: 0,
      140: 0,
      142: 0,
      145: 0,
      146: 0,
      147: 0,
      150: 0,
      154: 0,
      157: 0
    },
    s = [];
  function r(t) {
    if (l[t]) return l[t].exports;
    var a = (l[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
  }
  (r.m = e),
    (r.c = l),
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
        for (var l in e)
          r.d(
            a,
            l,
            function(t) {
              return e[t];
            }.bind(null, l)
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
  var n = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    o = n.push.bind(n);
  (n.push = t), (n = n.slice());
  for (var d = 0; d < n.length; d++) t(n[d]);
  var m = o;
  return s.push([142, 0]), a();
})({
  0: function(e, t) {
    e.exports = React;
  },
  142: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'examples', function() {
        return r;
      });
    var l = a(0),
      i = a.n(l),
      s = a(32);
    t.default = i.a.createElement(
      'div',
      { style: { width: '20rem' } },
      i.a.createElement(s.b, {
        isCard: !0,
        hasCrop: !0,
        hasTitleCard: !0,
        symbol: 'pdf',
        title: 'Proposal.pdf',
        hasImage: !0
      })
    );
    var r = [
      {
        id: 'attachment-file-no-image',
        label: 'File with no image',
        element: i.a.createElement(
          'div',
          { style: { width: '20rem' } },
          i.a.createElement(s.b, {
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
        element: i.a.createElement(
          'div',
          { style: { width: '20rem' } },
          i.a.createElement(s.b, {
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
        element: i.a.createElement(
          'div',
          { style: { width: '20rem' } },
          i.a.createElement(s.b, {
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
        element: i.a.createElement(
          'div',
          { style: { width: '20rem' } },
          i.a.createElement(s.b, {
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
        element: i.a.createElement(
          'div',
          { style: { width: '20rem' } },
          i.a.createElement(s.b, {
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
        element: i.a.createElement(
          'div',
          { style: { width: '20rem' } },
          i.a.createElement(s.b, {
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
        element: i.a.createElement(
          'div',
          { style: { width: '20rem' } },
          i.a.createElement(s.b, {
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
        element: i.a.createElement(
          'div',
          { style: { width: '20rem' } },
          i.a.createElement(s.b, {
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
        element: i.a.createElement(
          'ul',
          { className: 'slds-grid slds-grid_pull-padded' },
          i.a.createElement(
            'li',
            {
              className:
                'slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3'
            },
            i.a.createElement(s.b, {
              isCard: !0,
              hasCrop: !0,
              hasTitleCard: !0,
              symbol: 'pdf',
              title: 'Proposal.pdf',
              hasImage: !0
            })
          ),
          i.a.createElement(
            'li',
            {
              className:
                'slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3'
            },
            i.a.createElement(s.b, {
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
        element: i.a.createElement(
          'ul',
          { className: 'slds-grid slds-grid_pull-padded' },
          i.a.createElement(
            'li',
            {
              className:
                'slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3'
            },
            i.a.createElement(s.b, {
              isCard: !0,
              hasCrop: !0,
              hasTitleCard: !0,
              symbol: 'pdf',
              title: 'Proposal.pdf',
              hasImage: !0
            })
          ),
          i.a.createElement(
            'li',
            {
              className:
                'slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3  slds-medium-show'
            },
            i.a.createElement(s.b, {
              isCard: !0,
              hasCrop: !0,
              hasTitleCard: !0,
              symbol: 'pdf',
              title: 'Proposal.pdf'
            })
          ),
          i.a.createElement(
            'li',
            {
              className:
                'slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3'
            },
            i.a.createElement(s.b, {
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
        element: i.a.createElement(s.a, {
          articleTitle: 'Maui By Air The Best Way Around The Island',
          articleDescription:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.'
        })
      },
      {
        id: 'crop-4-by-3',
        label: 'Crop 4 x 3',
        element: i.a.createElement(
          'div',
          { style: { width: '20rem' } },
          i.a.createElement(s.b, {
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
        element: i.a.createElement(
          'div',
          { style: { width: '20rem' } },
          i.a.createElement(s.b, {
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
        element: i.a.createElement(
          'div',
          { style: { width: '20rem' } },
          i.a.createElement(s.b, {
            isCard: !0,
            has1x1Crop: !0,
            hasTitleCard: !0,
            symbol: 'pdf',
            title: 'Proposal.pdf',
            hasImage: !0
          })
        )
      }
    ];
  },
  16: function(e, t) {
    e.exports = ReactDOM;
  }
});
