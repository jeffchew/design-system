var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/components/map/base/example.jsx.js'
] = (function(e) {
  function t(t) {
    for (
      var a, l, s = t[0], i = t[1], c = t[2], u = 0, m = [];
      u < s.length;
      u++
    )
      (l = s[u]),
        Object.prototype.hasOwnProperty.call(r, l) && r[l] && m.push(r[l][0]),
        (r[l] = 0);
    for (a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
    for (d && d(t); m.length; ) m.shift()();
    return o.push.apply(o, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], a = !0, s = 1; s < n.length; s++) {
        var i = n[s];
        0 !== r[i] && (a = !1);
      }
      a && (o.splice(t--, 1), (e = l((l.s = n[0]))));
    }
    return e;
  }
  var a = {},
    r = {
      102: 0,
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
    o = [];
  function l(t) {
    if (a[t]) return a[t].exports;
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, l), (n.l = !0), n.exports;
  }
  (l.m = e),
    (l.c = a),
    (l.d = function(e, t, n) {
      l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
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
      var n = Object.create(null);
      if (
        (l.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          l.d(
            n,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return n;
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
  var s = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    i = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var c = 0; c < s.length; c++) t(s[c]);
  var d = i;
  return o.push([243, 0]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  243: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'Context', function() {
        return C;
      }),
      n.d(t, 'states', function() {
        return N;
      }),
      n.d(t, 'examples', function() {
        return O;
      });
    var a = n(0),
      r = n.n(a),
      o = n(22),
      l = n(21),
      s = n(2),
      i = n.n(s),
      c = [
        {
          title: 'Worldwide Corporate Headquarters',
          address: 'The Landmark @ One Market, San Francisco, CA'
        },
        {
          title: 'salesforce.com inc Atlanta',
          address: '950 East Paces Ferry Road NE, Atlanta, GA'
        },
        {
          title: 'salesforce.com inc Bellevue',
          address: '929 108th Ave NE, Bellevue, WA'
        },
        {
          title: 'salesforce.com inc Boston',
          address: '500 Boylston Street 19th Floor, Boston, MA'
        },
        {
          title: 'salesforce.com inc Chicago',
          address: '111 West Illinois Street, Chicago, IL'
        },
        {
          title: 'salesforce.com inc Herndon',
          address: '2550 Wasser Terrace, Herndon, VA'
        },
        {
          title: 'salesforce.com inc Hillsboro',
          address: '2035 NE Cornelius Pass Road, Hillsboro, OR'
        },
        {
          title: 'salesforce.com inc Indy',
          address: '111 Monument Circle, Indianapolis, IN'
        },
        {
          title: 'salesforce.com inc Irvine',
          address: '300 Spectrum Center Drive, Irvine, CA'
        }
      ];
    function d(e) {
      return (d =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            })(e);
    }
    function u(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function m(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          'value' in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    function p(e, t) {
      return (p =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function f(e, t) {
      return !t || ('object' !== d(t) && 'function' != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function h() {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function() {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    function b(e) {
      return (b = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var y = function(e) {
        return r.a.createElement(
          'div',
          { className: 'slds-coordinates' },
          r.a.createElement(
            'div',
            { className: 'slds-coordinates__header' },
            r.a.createElement(
              'h2',
              { className: 'slds-coordinates__title' },
              e.heading
            )
          ),
          r.a.createElement(
            'ul',
            { className: 'slds-coordinates__list' },
            c.map(function(t, n) {
              return r.a.createElement(
                'li',
                { className: 'slds-coordinates__item', key: n },
                r.a.createElement(
                  'span',
                  { className: 'slds-assistive-text', 'aria-live': 'polite' },
                  parseInt(e.selection, 0) === n
                    ? t.title + ' is currently selected'
                    : null
                ),
                r.a.createElement(_, {
                  title: t.title,
                  address: t.address,
                  selected: parseInt(e.selection, 0) === n
                })
              );
            })
          )
        );
      },
      _ = function(e) {
        return r.a.createElement(
          'button',
          {
            className:
              'slds-coordinates__item-action slds-button_reset slds-media',
            'aria-pressed': e.selected
          },
          r.a.createElement(
            'span',
            { className: 'slds-media__figure' },
            r.a.createElement(o.StandardIcon, { symbol: 'account' })
          ),
          r.a.createElement(
            'span',
            { className: 'slds-media__body' },
            r.a.createElement('span', { className: 'slds-text-link' }, e.title),
            r.a.createElement('span', null, e.address)
          )
        );
      },
      v = function() {
        return r.a.createElement(
          l.ModalFooter,
          null,
          r.a.createElement(
            'button',
            { className: 'slds-button slds-button_brand' },
            'Open in Google Maps'
          )
        );
      },
      E = function(e) {
        return r.a.createElement(
          'div',
          { className: 'slds-map' },
          !e.hideMap &&
            r.a.createElement('iframe', {
              id: 'GoogleMapID',
              title: 'Google Maps iframe',
              src:
                'https://www.google.com/maps/embed/v1/place?q=1%20market%2C%20san%20francisco&key=AIzaSyDliLquGXGts9S8YtkWVolSQEJdBL1ZuWc'
            })
        );
      },
      g = function(e) {
        return r.a.createElement(
          'div',
          {
            className: i()(
              'slds-grid',
              e.multipleCoordinates && 'slds-has-coordinates'
            )
          },
          r.a.createElement(
            'div',
            { className: 'slds-map_container' },
            r.a.createElement(E, { hideMap: e.hideMap })
          ),
          e.multipleCoordinates &&
            r.a.createElement(y, { heading: e.heading, selection: e.selection })
        );
      },
      S = (function(e) {
        !(function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && p(e, t);
        })(i, e);
        var t,
          n,
          a,
          o,
          s = ((t = i),
          function() {
            var e,
              n = b(t);
            if (h()) {
              var a = b(this).constructor;
              e = Reflect.construct(n, arguments, a);
            } else e = n.apply(this, arguments);
            return f(this, e);
          });
        function i() {
          return u(this, i), s.apply(this, arguments);
        }
        return (
          (n = i),
          (a = [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.heading,
                  n = e.multipleCoordinates,
                  a = e.selection,
                  o = e.hideMap,
                  s = e.footer;
                return r.a.createElement(
                  l.Modal,
                  {
                    className: 'slds-modal_medium',
                    'aria-labelledby': 'modal-heading-id-01',
                    'aria-describedby': 'modal-content-id-01'
                  },
                  r.a.createElement(
                    l.ModalHeader,
                    null,
                    r.a.createElement(
                      'h2',
                      {
                        id: 'modal-heading-id-01',
                        className: 'slds-text-heading_medium slds-hyphenate'
                      },
                      t
                    )
                  ),
                  r.a.createElement(
                    l.ModalContent,
                    { id: 'modal-content-id-01' },
                    r.a.createElement(g, {
                      multipleCoordinates: n,
                      heading: t,
                      selection: a,
                      hideMap: o
                    })
                  ),
                  s && r.a.createElement(v, null)
                );
              }
            }
          ]) && m(n.prototype, a),
          o && m(n, o),
          i
        );
      })(a.Component),
      C = function(e) {
        return r.a.createElement(
          'div',
          {
            className: 'demo-only demo-only_viewport',
            style: { height: '660px' }
          },
          e.children
        );
      },
      N = ((t.default = r.a.createElement(g, {
        heading: 'Salesforce Locations In United States (9)',
        multipleCoordinates: !0
      })),
      [
        {
          id: 'multiple-coordinates-item-one-selection',
          label: 'First Coordinate Selected',
          element: r.a.createElement(g, {
            heading: 'Salesforce Locations In United States (9)',
            multipleCoordinates: !0,
            selection: '0'
          })
        },
        {
          id: 'multiple-coordinates-item-two-selection',
          label: 'Second Coordinate Selected',
          element: r.a.createElement(g, {
            heading: 'Salesforce Locations In United States (9)',
            multipleCoordinates: !0,
            selection: '1'
          })
        }
      ]),
      O = [
        {
          id: 'single-coordinate',
          label: 'In Modal - Single Coordinate - With Footer',
          element: r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(S, {
              heading: "Geo Code: 37°48'08.3\"N 122°15'55.2W",
              footer: !0
            }),
            r.a.createElement('div', {
              className: 'slds-backdrop slds-backdrop_open'
            })
          )
        },
        {
          id: 'multiple-coordinates',
          label: 'In Modal - Multiple Coordinates',
          element: r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(S, {
              heading: 'Salesforce Locations In United States (9)',
              multipleCoordinates: !0,
              footer: !0
            }),
            r.a.createElement('div', {
              className: 'slds-backdrop slds-backdrop_open'
            })
          )
        }
      ];
  }
});
