var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS[
  '__internal/chunked/showcase/ui/utilities/grid/example.jsx.js'
] = (function(e) {
  function l(l) {
    for (
      var a, r, i = l[0], c = l[1], d = l[2], m = 0, u = [];
      m < i.length;
      m++
    )
      (r = i[m]),
        Object.prototype.hasOwnProperty.call(s, r) && s[r] && u.push(s[r][0]),
        (s[r] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
    for (o && o(l); u.length; ) u.shift()();
    return n.push.apply(n, d || []), t();
  }
  function t() {
    for (var e, l = 0; l < n.length; l++) {
      for (var t = n[l], a = !0, i = 1; i < t.length; i++) {
        var c = t[i];
        0 !== s[c] && (a = !1);
      }
      a && (n.splice(l--, 1), (e = r((r.s = t[0]))));
    }
    return e;
  }
  var a = {},
    s = {
      170: 0,
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
  function r(l) {
    if (a[l]) return a[l].exports;
    var t = (a[l] = { i: l, l: !1, exports: {} });
    return e[l].call(t.exports, t, t.exports, r), (t.l = !0), t.exports;
  }
  (r.m = e),
    (r.c = a),
    (r.d = function(e, l, t) {
      r.o(e, l) || Object.defineProperty(e, l, { enumerable: !0, get: t });
    }),
    (r.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (r.t = function(e, l) {
      if ((1 & l && (e = r(e)), 8 & l)) return e;
      if (4 & l && 'object' == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (r.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
        2 & l && 'string' != typeof e)
      )
        for (var a in e)
          r.d(
            t,
            a,
            function(l) {
              return e[l];
            }.bind(null, a)
          );
      return t;
    }),
    (r.n = function(e) {
      var l =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(l, 'a', l), l;
    }),
    (r.o = function(e, l) {
      return Object.prototype.hasOwnProperty.call(e, l);
    }),
    (r.p = '/assets/scripts/bundle/');
  var i = (this.webpackJsonpSLDS___internal_chunked_showcase =
      this.webpackJsonpSLDS___internal_chunked_showcase || []),
    c = i.push.bind(i);
  (i.push = l), (i = i.slice());
  for (var d = 0; d < i.length; d++) l(i[d]);
  var o = c;
  return n.push([238, 0]), t();
})({
  0: function(e, l) {
    e.exports = React;
  },
  238: function(e, l, t) {
    'use strict';
    t.r(l),
      t.d(l, 'Context', function() {
        return N;
      }),
      t.d(l, 'examples', function() {
        return b;
      });
    var a = t(0),
      s = t.n(a),
      n = t(2),
      r = t.n(n);
    function i(e) {
      return (i =
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
    function c() {
      return (c =
        Object.assign ||
        function(e) {
          for (var l = 1; l < arguments.length; l++) {
            var t = arguments[l];
            for (var a in t)
              Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          }
          return e;
        }).apply(this, arguments);
    }
    function d(e, l) {
      if (!(e instanceof l))
        throw new TypeError('Cannot call a class as a function');
    }
    function o(e, l) {
      for (var t = 0; t < l.length; t++) {
        var a = l[t];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          'value' in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    function m(e, l) {
      return (m =
        Object.setPrototypeOf ||
        function(e, l) {
          return (e.__proto__ = l), e;
        })(e, l);
    }
    function u(e, l) {
      return !l || ('object' !== i(l) && 'function' != typeof l)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : l;
    }
    function p() {
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
    function g(e) {
      return (g = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var f = function(e) {
        var l = e.count + 1;
        return s.a.createElement(
          'div',
          { className: r()('slds-col', e.className) },
          e.count >= 0
            ? s.a.createElement('span', null, l)
            : s.a.createElement('span', null, e.children)
        );
      },
      E = (function(e) {
        !(function(e, l) {
          if ('function' != typeof l && null !== l)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(l && l.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            l && m(e, l);
        })(E, e);
        var l,
          t,
          a,
          n,
          i = ((l = E),
          function() {
            var e,
              t = g(l);
            if (p()) {
              var a = g(this).constructor;
              e = Reflect.construct(t, arguments, a);
            } else e = t.apply(this, arguments);
            return u(this, e);
          });
        function E() {
          return d(this, E), i.apply(this, arguments);
        }
        return (
          (t = E),
          (a = [
            {
              key: 'render',
              value: function() {
                for (var e = [], l = 0; l < this.props.columns; l += 1)
                  e.push({ key: l, count: l });
                return s.a.createElement(
                  'div',
                  {
                    className: r()('slds-grid', this.props.className),
                    style: this.props.style
                  },
                  this.props.columns
                    ? e.map(function(e) {
                        return s.a.createElement(f, c({ key: e.key }, e));
                      })
                    : this.props.children
                );
              }
            }
          ]) && o(t.prototype, a),
          n && o(t, n),
          E
        );
      })(a.Component),
      h =
        '\n/* stylelint-disable selector-class-pattern */\n\n.slds-grid {\n  height: auto;\n  min-height: 8.75rem;\n  margin-bottom: 1rem;\n}\n\n.slds-grid > .slds-grid {\n  height: auto;\n  margin-bottom: 0;\n}\n\n.slds-col,\n.slds-grid > div:not(.slds-col) {\n  display: inline-flex;\n  background: #54698d;\n  color: #fff;\n  text-align: center;\n  background-clip: content-box;\n  border: 1px solid #fff;\n  border-radius: 0;\n}\n\n.slds-col > span {\n  align-self: center;\n  margin: auto;\n  font-size: 1.575rem;\n  padding: 0.5rem;\n}\n\n.slds-wrap {\n  align-items: stretch;\n}\n\n.slds-grid > div:not(.slds-col) > span {\n  align-self: center;\n  margin: auto;\n  font-size: 1.575rem;\n  padding: 0.5rem;\n}\n';
    function _(e, l) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        l &&
          (a = a.filter(function(l) {
            return Object.getOwnPropertyDescriptor(e, l).enumerable;
          })),
          t.push.apply(t, a);
      }
      return t;
    }
    function v(e, l, t) {
      return (
        l in e
          ? Object.defineProperty(e, l, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[l] = t),
        e
      );
    }
    var N = function(e) {
        return s.a.createElement(
          a.Fragment,
          null,
          s.a.createElement('style', null, h),
          e.children
        );
      },
      b = [
        {
          id: 'default-left-to-right',
          label: 'Grid Default Left to Right',
          element: s.a.createElement(E, { columns: '3' }),
          description:
            'By default, the grid items within a `.slds-grid` do not stretch to take up that available white-space on the main axis. Apply `.slds-col` to a grid item, it will stretch across the main axis. The width of each grid item will be determined by the content within that region.'
        },
        {
          id: 'stretch',
          label: 'Column Stretch',
          element: s.a.createElement(
            'div',
            { className: 'slds-grid' },
            s.a.createElement('div', { className: 'slds-col' }),
            s.a.createElement('div', { className: 'slds-col' })
          ),
          description:
            'By default, the grid items within a `.slds-grid` do not stretch to take up that available white-space on the main axis. Apply `.slds-col` to a grid item, it will stretch across the main axis. The width of each grid item will be determined by the content within that region.'
        },
        {
          id: 'stretch-gutters',
          label: 'Column Stretch w/ Gutters',
          element: s.a.createElement(
            'div',
            { className: 'slds-grid slds-grid_pull-padded-medium' },
            s.a.createElement('div', {
              className: 'slds-col slds-p-horizontal_medium'
            }),
            s.a.createElement('div', {
              className: 'slds-col slds-p-horizontal_medium'
            })
          ),
          description:
            'To apply gutters between each grid item, the following spacing classes are available to add your intended gutters, `.slds-p-horizontal_small`, `.slds-p-horizontal_medium`, `.slds-p-horizontal_large`, `.slds-p-around_small`, `.slds-p-around_medium` and `.slds-p-around_large`. You may need to pull the grid items back to their original grid boundaries of the grid container, apply the classes `.slds-grid_pull-padded`, `.slds-grid_pull-padded-medium` or `.slds-grid_pull-padded-large` to the `.slds-grid`.'
        },
        {
          id: 'no-stretch',
          label: 'No Column Stretch',
          element: s.a.createElement(
            'div',
            { className: 'slds-grid' },
            s.a.createElement('div', null),
            s.a.createElement('div', null)
          )
        },
        {
          id: 'no-stretch-gutters',
          label: 'No Column Stretch w/ Gutters',
          element: s.a.createElement(
            'div',
            { className: 'slds-grid slds-grid_pull-padded-medium' },
            s.a.createElement('div', { className: 'slds-p-horizontal_medium' }),
            s.a.createElement('div', { className: 'slds-p-horizontal_medium' })
          )
        },
        {
          id: 'regions-with-sizing',
          label: 'Manual Sizing',
          element: s.a.createElement(
            'div',
            { className: 'slds-grid slds-wrap slds-grid_pull-padded' },
            s.a.createElement('div', {
              className: 'slds-p-horizontal_small slds-size_1-of-1'
            }),
            s.a.createElement('div', {
              className:
                'slds-p-horizontal_small slds-size_1-of-2 slds-medium-size_5-of-6 slds-large-size_8-of-12'
            }),
            s.a.createElement('div', {
              className:
                'slds-p-horizontal_small slds-size_1-of-2 slds-medium-size_1-of-6 slds-large-size_4-of-12'
            }),
            s.a.createElement('div', {
              className:
                'slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-2 slds-large-size_1-of-3'
            }),
            s.a.createElement('div', {
              className:
                'slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-2 slds-large-size_1-of-3'
            }),
            s.a.createElement(
              'div',
              {
                className:
                  'slds-p-horizontal_small slds-size_1-of-1 slds-large-size_1-of-3'
              },
              s.a.createElement(
                'div',
                { className: 'slds-grid slds-wrap slds-grid_pull-padded' },
                s.a.createElement('div', {
                  className:
                    'slds-p-horizontal_small slds-size_1-of-2 slds-medium-size_1-of-1 slds-large-size_1-of-2'
                }),
                s.a.createElement('div', {
                  className:
                    'slds-p-horizontal_small slds-size_1-of-2 slds-medium-size_1-of-1 slds-large-size_1-of-2'
                })
              )
            )
          ),
          description:
            'If you need to set explicit widths to your grid items, apply the sizing classes to your grid items. Check out [sizing helpers here](/utilities/sizing).'
        },
        {
          id: 'horizontal-align-center',
          label: 'Horizontal Alignment - Center',
          element: s.a.createElement(
            'div',
            { className: 'slds-grid slds-grid_align-center' },
            s.a.createElement('div', null),
            s.a.createElement('div', null),
            s.a.createElement('div', null),
            s.a.createElement('div', null)
          ),
          description:
            'If you want your columns to grow from the the center of the main (horizontal) axis, apply the class `slds-grid_align-center`.'
        },
        {
          id: 'horizontal-align-space',
          label: 'Horizontal Alignment - Space',
          element: s.a.createElement(
            'div',
            { className: 'slds-grid slds-grid_align-space' },
            s.a.createElement('div', null),
            s.a.createElement('div', null),
            s.a.createElement('div', null),
            s.a.createElement('div', null)
          ),
          description:
            'To evenly distribute columns on the main axis with an equal amount of white space separating the columns, apply the class `slds-grid_align-space`.'
        },
        {
          id: 'vertical-align-item',
          label: 'Vertical Alignment - Item',
          element: s.a.createElement(
            'div',
            { className: 'slds-grid' },
            s.a.createElement('div', { className: 'slds-align-top' }),
            s.a.createElement('div', { className: 'slds-align-middle' }),
            s.a.createElement('div', { className: 'slds-align-bottom' })
          ),
          description:
            'To specify the vertical placement of grid items on the cross axis, you can apply `.slds-align-top`, `.slds-align-middle`, and `.slds-align-bottom` to a grid item. Note, to vertically align elements on a cross-axis of a `.slds-grid`, the elements need available vertical white space. This is usually achieved by having a height applied to the `.slds-grid`.'
        },
        {
          id: 'vertical-strecth',
          label: 'Vertical Stretch',
          element: s.a.createElement(
            'div',
            { className: 'slds-grid slds-grid_vertical-stretch' },
            s.a.createElement('div', null),
            s.a.createElement('div', null),
            s.a.createElement('div', null),
            s.a.createElement('div', null)
          ),
          description:
            'By default, grid items extend vertically unless `.slds-wrap` is applied to your parent grid container or you have multiple rows. If you have need multiple rows that stretch the height of the parent grid container, you can apply the class `.slds-grid_vertical-stretch`. Note, to vertically align elements on a cross-axis of a `.slds-grid`, the elements need available vertical white space. This is usually achieved by having a height applied to the `.slds-grid`.'
        },
        {
          id: 'align-item-bump',
          label: 'Alignment Item Bump',
          element: s.a.createElement(
            'div',
            { className: 'slds-grid' },
            s.a.createElement('div', null),
            s.a.createElement('div', null),
            s.a.createElement('div', null),
            s.a.createElement('div', null),
            s.a.createElement('div', { className: 'slds-col_bump-left' }),
            s.a.createElement('div', null)
          ),
          description:
            'To "bump" a single grid item or a grid item plus the precedding grid items that follow, apply the class `.slds-col_bump-{direction}`, with `{direction}` being either `left`, `right`, `top` or `bottom` to a grid item.'
        },
        {
          id: 'order',
          label: 'Ordering',
          element: s.a.createElement(
            'div',
            { className: 'slds-grid' },
            s.a.createElement('div', {
              className: 'slds-order_2 slds-medium-order_1 slds-large-order_3'
            }),
            s.a.createElement('div', {
              className: 'slds-order_3 slds-medium-order_2 slds-large-order_2'
            }),
            s.a.createElement('div', {
              className: 'slds-order_1 slds-medium-order_3 slds-large-order_1'
            })
          ),
          description:
            'These helper classes visually reorder grid elements independently from their position in the markup.'
        },
        {
          id: 'container-app-frame',
          label: 'Container - App Frame',
          element: s.a.createElement(
            'div',
            { className: 'slds-grid slds-grid_frame' },
            s.a.createElement('div', null)
          ),
          description:
            'If you want your application to fill 100% of the width and height of the viewport and nest other grids inside, use the top-level app helper class `.slds-grid_frame`.'
        },
        {
          id: 'containers',
          label: 'Containers',
          element: s.a.createElement(
            'div',
            { className: 'slds-grid slds-grid_vertical' },
            s.a.createElement('div', { className: 'slds-container_small' }),
            s.a.createElement('div', { className: 'slds-container_medium' }),
            s.a.createElement('div', { className: 'slds-container_large' }),
            s.a.createElement('div', { className: 'slds-container_x-large' }),
            s.a.createElement('div', { className: 'slds-container_fluid' })
          ),
          description:
            'You can use the grid system&rsquo;s containers to constrain your content to a certain width. You can center or left or right align the containers within your viewport.'
        },
        {
          id: '2-col-with-gutters',
          label: 'Grid Column Gutters 2 col basic',
          element: s.a.createElement(E, {
            columns: '2',
            className: 'slds-gutters'
          })
        },
        {
          id: 'intro-3-col-with-gutters',
          label: 'Grid Intro 3 col with gutters',
          element: s.a.createElement(E, {
            columns: '3',
            className: 'slds-gutters'
          })
        },
        {
          id: 'intro-4-col-with-gutters',
          label: 'Grid Intro 4 col with gutters',
          element: s.a.createElement(E, {
            columns: '4',
            className: 'slds-gutters'
          })
        },
        {
          id: 'intro-12-col',
          label: 'Grid Intro 12 col',
          element: s.a.createElement(E, { columns: '12' })
        },
        {
          id: 'grid-col-width-2-col',
          label: 'Grid Column Width 2 col',
          element: s.a.createElement(
            E,
            { className: 'slds-gutters' },
            s.a.createElement(f, { className: 'slds-size_2-of-3' }, '1'),
            s.a.createElement(f, { className: 'slds-size_1-of-3' }, '2')
          )
        },
        {
          id: 'col-width-all-options',
          label: 'Grid Column Width all options',
          element: s.a.createElement(
            E,
            { className: 'slds-wrap' },
            s.a.createElement(f, { className: 'slds-size_1-of-12' }, '1'),
            s.a.createElement(f, { className: 'slds-size_1-of-12' }, '1'),
            s.a.createElement(f, { className: 'slds-size_1-of-12' }, '1'),
            s.a.createElement(f, { className: 'slds-size_1-of-12' }, '1'),
            s.a.createElement(f, { className: 'slds-size_1-of-12' }, '1'),
            s.a.createElement(f, { className: 'slds-size_1-of-12' }, '1'),
            s.a.createElement(f, { className: 'slds-size_1-of-12' }, '1'),
            s.a.createElement(f, { className: 'slds-size_1-of-12' }, '1'),
            s.a.createElement(f, { className: 'slds-size_1-of-12' }, '1'),
            s.a.createElement(f, { className: 'slds-size_1-of-12' }, '1'),
            s.a.createElement(f, { className: 'slds-size_1-of-12' }, '1'),
            s.a.createElement(f, { className: 'slds-size_1-of-12' }, '1'),
            s.a.createElement(f, { className: 'slds-size_2-of-12' }, '2'),
            s.a.createElement(f, { className: 'slds-size_2-of-12' }, '2'),
            s.a.createElement(f, { className: 'slds-size_2-of-12' }, '2'),
            s.a.createElement(f, { className: 'slds-size_2-of-12' }, '2'),
            s.a.createElement(f, { className: 'slds-size_2-of-12' }, '2'),
            s.a.createElement(f, { className: 'slds-size_2-of-12' }, '2'),
            s.a.createElement(f, { className: 'slds-size_3-of-12' }, '3'),
            s.a.createElement(f, { className: 'slds-size_3-of-12' }, '3'),
            s.a.createElement(f, { className: 'slds-size_3-of-12' }, '3'),
            s.a.createElement(f, { className: 'slds-size_3-of-12' }, '3'),
            s.a.createElement(f, { className: 'slds-size_4-of-12' }, '4'),
            s.a.createElement(f, { className: 'slds-size_4-of-12' }, '4'),
            s.a.createElement(f, { className: 'slds-size_4-of-12' }, '4'),
            s.a.createElement(f, { className: 'slds-size_5-of-12' }, '5'),
            s.a.createElement(f, { className: 'slds-size_5-of-12' }, '5'),
            s.a.createElement(f, { className: 'slds-size_2-of-12' }, '2'),
            s.a.createElement(f, { className: 'slds-size_6-of-12' }, '6'),
            s.a.createElement(f, { className: 'slds-size_6-of-12' }, '6'),
            s.a.createElement(f, { className: 'slds-size_7-of-12' }, '7'),
            s.a.createElement(f, { className: 'slds-size_5-of-12' }, '5'),
            s.a.createElement(f, { className: 'slds-size_8-of-12' }, '8'),
            s.a.createElement(f, { className: 'slds-size_4-of-12' }, '4'),
            s.a.createElement(f, { className: 'slds-size_9-of-12' }, '9'),
            s.a.createElement(f, { className: 'slds-size_3-of-12' }, '3'),
            s.a.createElement(f, { className: 'slds-size_10-of-12' }, '10'),
            s.a.createElement(f, { className: 'slds-size_2-of-12' }, '2'),
            s.a.createElement(f, { className: 'slds-size_11-of-12' }, '11'),
            s.a.createElement(f, { className: 'slds-size_1-of-12' }, '1')
          )
        },
        {
          id: 'col-width-all-fraction-options',
          label: 'Grid Column Width all fraction options',
          element: s.a.createElement(
            E,
            { small: !0, className: 'slds-wrap' },
            s.a.createElement(f, { className: 'slds-size_1-of-6' }, '1/6'),
            s.a.createElement(f, { className: 'slds-size_1-of-6' }, '1/6'),
            s.a.createElement(f, { className: 'slds-size_1-of-6' }, '1/6'),
            s.a.createElement(f, { className: 'slds-size_1-of-6' }, '1/6'),
            s.a.createElement(f, { className: 'slds-size_1-of-6' }, '1/6'),
            s.a.createElement(f, { className: 'slds-size_1-of-6' }, '1/6'),
            s.a.createElement(f, { className: 'slds-size_1-of-4' }, '1/4'),
            s.a.createElement(f, { className: 'slds-size_1-of-4' }, '1/4'),
            s.a.createElement(f, { className: 'slds-size_1-of-4' }, '1/4'),
            s.a.createElement(f, { className: 'slds-size_1-of-4' }, '1/4'),
            s.a.createElement(f, { className: 'slds-size_1-of-3' }, '1/3'),
            s.a.createElement(f, { className: 'slds-size_1-of-3' }, '1/3'),
            s.a.createElement(f, { className: 'slds-size_1-of-3' }, '1/3'),
            s.a.createElement(f, { className: 'slds-size_1-of-2' }, '1/2'),
            s.a.createElement(f, { className: 'slds-size_1-of-2' }, '1/2'),
            s.a.createElement(f, { className: 'slds-size_1-of-1' }, '1/1')
          )
        },
        {
          id: '2-col-gutters-utilities',
          label: 'Grid Column Gutters 2 col utilities',
          element: s.a.createElement(
            E,
            null,
            s.a.createElement(
              f,
              { className: 'slds-p-horizontal_medium' },
              '1'
            ),
            s.a.createElement(f, { className: 'slds-p-horizontal_medium' }, '2')
          )
        },
        {
          id: '2-col-pull-padded',
          label: 'Grid Column Gutters 2 col pull padded',
          element: s.a.createElement(
            E,
            { className: 'slds-grid_pull-padded-medium' },
            s.a.createElement(
              f,
              { className: 'slds-p-horizontal_medium' },
              '1'
            ),
            s.a.createElement(f, { className: 'slds-p-horizontal_medium' }, '2')
          )
        },
        {
          id: 'direct-col-gutters',
          label: 'Grid Direct Column Gutters',
          element: s.a.createElement(
            E,
            { className: 'slds-gutters_direct' },
            s.a.createElement(f, null, '1'),
            s.a.createElement(
              'div',
              { className: 'slds-grid' },
              s.a.createElement(f, null, 'Nested Column 1'),
              s.a.createElement(f, null, 'Nested Column 2')
            ),
            s.a.createElement(f, null, '3')
          )
        },
        {
          id: 'all-children-col-gutters',
          label: 'Grid All Children Column Gutters',
          element: s.a.createElement(
            E,
            { className: 'slds-gutters' },
            s.a.createElement(f, null, '1'),
            s.a.createElement(
              'div',
              { className: 'slds-grid' },
              s.a.createElement(f, null, 'Nested Column 1'),
              s.a.createElement(f, null, 'Nested Column 2')
            ),
            s.a.createElement(f, null, '3')
          )
        },
        {
          id: '3-col-wrapping',
          label: 'Grid Column Wrapping 3 col',
          element: s.a.createElement(
            E,
            { className: 'slds-wrap' },
            s.a.createElement(f, { className: 'slds-size_8-of-12' }, '1'),
            s.a.createElement(f, { className: 'slds-size_5-of-12' }, '1'),
            s.a.createElement(f, { className: 'slds-size_5-of-12' }, '1')
          )
        },
        {
          id: '3-col-reordering',
          label: 'Grid Column Reordering 3 col',
          element: s.a.createElement(
            E,
            null,
            s.a.createElement(f, { className: 'slds-order_3' }, '1'),
            s.a.createElement(f, { className: 'slds-order_1' }, '2'),
            s.a.createElement(f, { className: 'slds-order_2' }, '3')
          )
        },
        {
          id: 'col-nesting',
          label: 'Grid Column Nesting',
          element: s.a.createElement(
            E,
            { className: 'slds-wrap' },
            s.a.createElement(f, { className: 'slds-size_10-of-12' }, '1'),
            s.a.createElement(
              'div',
              { className: 'slds-col slds-grid slds-size_1-of-2' },
              s.a.createElement(
                f,
                { className: 'slds-size_1-of-2' },
                'Nested: 1'
              ),
              s.a.createElement(
                f,
                { className: 'slds-size_1-of-2' },
                'Nested: 2'
              )
            )
          )
        },
        {
          id: 'vertical-align',
          label: 'Grid Vertical Align',
          element: s.a.createElement(
            E,
            { className: 'slds-grid_vertical' },
            s.a.createElement(f, null, '1'),
            s.a.createElement(f, null, '2'),
            s.a.createElement(f, null, '3')
          )
        },
        {
          id: 'horizontal-reversed',
          label: 'Grid Horizontal Reversed',
          element: s.a.createElement(
            E,
            { className: 'slds-grid_reverse' },
            s.a.createElement(f, null, '1'),
            s.a.createElement(f, null, '2'),
            s.a.createElement(f, null, '3')
          )
        },
        {
          id: 'vertical-aligned-reversed',
          label: 'Grid Vertical Aligned Reversed',
          element: s.a.createElement(
            E,
            {
              className: 'slds-grid_vertical-reverse',
              style: { height: '200px' }
            },
            s.a.createElement(f, null, '1'),
            s.a.createElement(f, null, '2'),
            s.a.createElement(f, null, '3')
          )
        },
        {
          id: 'responsive-2-col-mobile-desktop',
          label: 'Grid Responsive 2 col mobile desktop',
          element: s.a.createElement(
            E,
            { className: 'slds-wrap' },
            s.a.createElement(
              f,
              { className: 'slds-size_1-of-1 slds-large-size_8-of-12' },
              '1'
            ),
            s.a.createElement(
              f,
              { className: 'slds-size_1-of-1 slds-large-size_4-of-12' },
              '2'
            )
          )
        },
        {
          id: 'responsive-2-col-mobile-tablet-desktop',
          label: 'Grid Responsive 2 col mobile tablet desktop',
          element: s.a.createElement(
            E,
            { className: 'slds-wrap' },
            s.a.createElement(
              f,
              {
                className:
                  'slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size_8-of-12'
              },
              '1'
            ),
            s.a.createElement(
              f,
              {
                className:
                  'slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size_4-of-12'
              },
              '2'
            )
          )
        },
        {
          id: 'responsive-reordering-2-col-mobile-desktop',
          label: 'Grid Responsive Reordering 2 col mobile desktop',
          element: s.a.createElement(
            E,
            null,
            s.a.createElement(
              f,
              { className: 'slds-order_2 slds-large-order_1' },
              '1'
            ),
            s.a.createElement(
              f,
              { className: 'slds-order_1 slds-large-order_2' },
              '2'
            )
          )
        },
        {
          id: 'horizontal-align-center-basic',
          label: 'Grid Horizontal Align center basic',
          element: s.a.createElement(
            E,
            { className: 'slds-grid_align-center' },
            s.a.createElement(f, null, '1'),
            s.a.createElement(f, null, '2'),
            s.a.createElement(f, null, '3')
          )
        },
        {
          id: 'horizontal-align-center-variable',
          label: 'Grid Horizontal Align center variable',
          element: s.a.createElement(
            E,
            { className: 'slds-grid_align-center' },
            s.a.createElement(f, { className: 'slds-size_1-of-6' }, '1'),
            s.a.createElement(f, { className: 'slds-grow-none' }, '2'),
            s.a.createElement(f, { className: 'slds-size_1-of-6' }, '3')
          )
        },
        {
          id: 'horizontal-align-spaced',
          label: 'Grid Horizontal Align spaced',
          element: s.a.createElement(
            E,
            { className: 'slds-grid_align-space' },
            s.a.createElement(f, null, '1'),
            s.a.createElement(f, null, '2'),
            s.a.createElement(f, null, '3')
          )
        },
        {
          id: 'horizontal-align-spread',
          label: 'Grid Horizontal Align spread',
          element: s.a.createElement(
            E,
            { className: 'slds-grid_align-spread' },
            s.a.createElement(f, null, '1'),
            s.a.createElement(f, null, '2'),
            s.a.createElement(f, null, '3')
          )
        },
        {
          id: 'horizontal-align-end',
          label: 'Grid Horizontal Align end',
          element: s.a.createElement(
            E,
            { className: 'slds-grid_align-end' },
            s.a.createElement(f, null, '1'),
            s.a.createElement(f, null, '2'),
            s.a.createElement(f, null, '3')
          )
        },
        {
          id: 'content-alignment-bump-left',
          label: 'Grid Content Alignment Bump Left',
          element: s.a.createElement(
            E,
            { bareGrid: !0 },
            s.a.createElement(
              'div',
              null,
              s.a.createElement('span', null, '1')
            ),
            s.a.createElement(
              'div',
              null,
              s.a.createElement('span', null, '2')
            ),
            s.a.createElement(
              'div',
              null,
              s.a.createElement('span', null, '3')
            ),
            s.a.createElement(
              'div',
              null,
              s.a.createElement('span', null, '4')
            ),
            s.a.createElement(
              'div',
              { className: 'slds-col_bump-left' },
              s.a.createElement('span', null, '5')
            ),
            s.a.createElement('div', null, s.a.createElement('span', null, '6'))
          )
        },
        {
          id: 'content-alignment-bump-right',
          label: 'Grid Content Alignment Bump Right',
          element: s.a.createElement(
            E,
            { bareGrid: !0 },
            s.a.createElement(
              'div',
              null,
              s.a.createElement('span', null, '1')
            ),
            s.a.createElement(
              'div',
              null,
              s.a.createElement('span', null, '2')
            ),
            s.a.createElement(
              'div',
              null,
              s.a.createElement('span', null, '3')
            ),
            s.a.createElement(
              'div',
              null,
              s.a.createElement('span', null, '4')
            ),
            s.a.createElement(
              'div',
              { className: 'slds-col_bump-right' },
              s.a.createElement('span', null, '5')
            ),
            s.a.createElement('div', null, s.a.createElement('span', null, '6'))
          )
        },
        {
          id: 'vertical-align-start',
          label: 'Grid Vertical Align start',
          demoStyles: '.slds-grid { height: 200px; }',
          element: s.a.createElement(
            E,
            { className: 'slds-grid_vertical-align-start' },
            s.a.createElement(f, null, '1'),
            s.a.createElement(f, null, '2'),
            s.a.createElement(f, null, '3')
          )
        },
        {
          id: 'vertical-align-center',
          label: 'Grid Vertical Align center',
          demoStyles: '.slds-grid { height: 200px; }',
          element: s.a.createElement(
            E,
            { className: 'slds-grid_vertical-align-center' },
            s.a.createElement(f, null, '1'),
            s.a.createElement(f, null, '2'),
            s.a.createElement(f, null, '3')
          )
        },
        {
          id: 'vertical-align-end',
          label: 'Grid Vertical Align end',
          demoStyles: '.slds-grid { height: 200px; }',
          element: s.a.createElement(
            E,
            { className: 'slds-grid_vertical-align-end' },
            s.a.createElement(f, null, '1'),
            s.a.createElement(f, null, '2'),
            s.a.createElement(f, null, '3')
          )
        },
        {
          id: 'vertical-align-absolute-center',
          label: 'Grid Vertical Align absolute center',
          demoStyles: '.slds-grid { height: 200px; }',
          element: s.a.createElement(
            E,
            {
              className:
                'slds-grid_vertical-align-center slds-grid_align-center'
            },
            s.a.createElement(f, null, '1'),
            s.a.createElement(f, null, '2'),
            s.a.createElement(f, null, '3')
          )
        },
        {
          id: 'vertical-align-individual',
          label: 'Grid Vertical Align individual',
          demoStyles: '.slds-grid { height: 200px; }',
          element: s.a.createElement(
            E,
            null,
            s.a.createElement(f, { className: 'slds-align-top' }, '1'),
            s.a.createElement(f, { className: 'slds-align-middle' }, '2'),
            s.a.createElement(f, { className: 'slds-align-bottom' }, '3')
          )
        }
      ].map(function(e) {
        return (function(e) {
          for (var l = 1; l < arguments.length; l++) {
            var t = null != arguments[l] ? arguments[l] : {};
            l % 2
              ? _(Object(t), !0).forEach(function(l) {
                  v(e, l, t[l]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : _(Object(t)).forEach(function(l) {
                  Object.defineProperty(
                    e,
                    l,
                    Object.getOwnPropertyDescriptor(t, l)
                  );
                });
          }
          return e;
        })({}, e, { demoStyles: h + e.demoStyles || '' });
      });
  }
});
