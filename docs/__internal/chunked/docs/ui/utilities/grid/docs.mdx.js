var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/utilities/grid/docs.mdx.js'] = (function(e) {
  function t(t) {
    for (
      var a, i, r = t[0], o = t[1], d = t[2], m = 0, u = [];
      m < r.length;
      m++
    )
      (i = r[m]),
        Object.prototype.hasOwnProperty.call(s, i) && s[i] && u.push(s[i][0]),
        (s[i] = 0);
    for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    for (c && c(t); u.length; ) u.shift()();
    return n.push.apply(n, d || []), l();
  }
  function l() {
    for (var e, t = 0; t < n.length; t++) {
      for (var l = n[t], a = !0, r = 1; r < l.length; r++) {
        var o = l[r];
        0 !== s[o] && (a = !1);
      }
      a && (n.splice(t--, 1), (e = i((i.s = l[0]))));
    }
    return e;
  }
  var a = {},
    s = { 91: 0 },
    n = [];
  function i(t) {
    if (a[t]) return a[t].exports;
    var l = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(l.exports, l, l.exports, i), (l.l = !0), l.exports;
  }
  (i.m = e),
    (i.c = a),
    (i.d = function(e, t, l) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: l });
    }),
    (i.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.t = function(e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var l = Object.create(null);
      if (
        (i.r(l),
        Object.defineProperty(l, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          i.d(
            l,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return l;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return i.d(t, 'a', t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = '/assets/scripts/bundle/');
  var r = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    o = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var d = 0; d < r.length; d++) t(r[d]);
  var c = o;
  return n.push([209, 0]), l();
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
  209: function(e, t, l) {
    'use strict';
    l.r(t),
      l.d(t, 'getElement', function() {
        return F;
      }),
      l.d(t, 'getContents', function() {
        return J;
      });
    var a = l(0),
      s = l.n(a),
      n = l(4),
      i = l(5),
      r = l.n(i);
    function o(e) {
      return (o =
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
    function d() {
      return (d =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var l = arguments[t];
            for (var a in l)
              Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
          }
          return e;
        }).apply(this, arguments);
    }
    function c(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function m(e, t) {
      for (var l = 0; l < t.length; l++) {
        var a = t[l];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          'value' in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    function u(e, t) {
      return (u =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function p(e, t) {
      return !t || ('object' !== o(t) && 'function' != typeof t)
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
    function g(e) {
      return (g = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var f = function(e) {
        var t = e.count + 1;
        return s.a.createElement(
          'div',
          { className: r()('slds-col', e.className) },
          e.count >= 0
            ? s.a.createElement('span', null, t)
            : s.a.createElement('span', null, e.children)
        );
      },
      b = (function(e) {
        !(function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && u(e, t);
        })(o, e);
        var t,
          l,
          a,
          n,
          i = ((t = o),
          function() {
            var e,
              l = g(t);
            if (h()) {
              var a = g(this).constructor;
              e = Reflect.construct(l, arguments, a);
            } else e = l.apply(this, arguments);
            return p(this, e);
          });
        function o() {
          return c(this, o), i.apply(this, arguments);
        }
        return (
          (l = o),
          (a = [
            {
              key: 'render',
              value: function() {
                for (var e = [], t = 0; t < this.props.columns; t += 1)
                  e.push({ key: t, count: t });
                return s.a.createElement(
                  'div',
                  {
                    className: r()('slds-grid', this.props.className),
                    style: this.props.style
                  },
                  this.props.columns
                    ? e.map(function(e) {
                        return s.a.createElement(f, d({ key: e.key }, e));
                      })
                    : this.props.children
                );
              }
            }
          ]) && m(l.prototype, a),
          n && m(l, n),
          o
        );
      })(a.Component),
      y = l(1),
      E = l(15),
      v = l(3),
      _ = l.n(v),
      w = l(2),
      z = function(e) {
        return s.a.createElement(
          y.a,
          { demoStyles: Object(w.d)(e.collection, e.exampleId) },
          Object(w.e)(e.collection, e.exampleId)
        );
      },
      x = z;
    z.propTypes = { collection: _.a.array, exampleId: _.a.string };
    var N =
      '\n/* stylelint-disable selector-class-pattern */\n\n.slds-grid {\n  height: auto;\n  min-height: 8.75rem;\n  margin-bottom: 1rem;\n}\n\n.slds-grid > .slds-grid {\n  height: auto;\n  margin-bottom: 0;\n}\n\n.slds-col,\n.slds-grid > div:not(.slds-col) {\n  display: inline-flex;\n  background: #54698d;\n  color: #fff;\n  text-align: center;\n  background-clip: content-box;\n  border: 1px solid #fff;\n  border-radius: 0;\n}\n\n.slds-col > span {\n  align-self: center;\n  margin: auto;\n  font-size: 1.575rem;\n  padding: 0.5rem;\n}\n\n.slds-wrap {\n  align-items: stretch;\n}\n\n.slds-grid > div:not(.slds-col) > span {\n  align-self: center;\n  margin: auto;\n  font-size: 1.575rem;\n  padding: 0.5rem;\n}\n';
    function O(e, t) {
      var l = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          l.push.apply(l, a);
      }
      return l;
    }
    function j(e, t, l) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = l),
        e
      );
    }
    var C = [
        {
          id: 'default-left-to-right',
          label: 'Grid Default Left to Right',
          element: s.a.createElement(b, { columns: '3' }),
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
          element: s.a.createElement(b, {
            columns: '2',
            className: 'slds-gutters'
          })
        },
        {
          id: 'intro-3-col-with-gutters',
          label: 'Grid Intro 3 col with gutters',
          element: s.a.createElement(b, {
            columns: '3',
            className: 'slds-gutters'
          })
        },
        {
          id: 'intro-4-col-with-gutters',
          label: 'Grid Intro 4 col with gutters',
          element: s.a.createElement(b, {
            columns: '4',
            className: 'slds-gutters'
          })
        },
        {
          id: 'intro-12-col',
          label: 'Grid Intro 12 col',
          element: s.a.createElement(b, { columns: '12' })
        },
        {
          id: 'grid-col-width-2-col',
          label: 'Grid Column Width 2 col',
          element: s.a.createElement(
            b,
            { className: 'slds-gutters' },
            s.a.createElement(f, { className: 'slds-size_2-of-3' }, '1'),
            s.a.createElement(f, { className: 'slds-size_1-of-3' }, '2')
          )
        },
        {
          id: 'col-width-all-options',
          label: 'Grid Column Width all options',
          element: s.a.createElement(
            b,
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
            b,
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
            b,
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
            b,
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
            b,
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
            b,
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
            b,
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
            b,
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
            b,
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
            b,
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
            b,
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
            b,
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
            b,
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
            b,
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
            b,
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
            b,
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
            b,
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
            b,
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
            b,
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
            b,
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
            b,
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
            b,
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
            b,
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
            b,
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
            b,
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
            b,
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
            b,
            null,
            s.a.createElement(f, { className: 'slds-align-top' }, '1'),
            s.a.createElement(f, { className: 'slds-align-middle' }, '2'),
            s.a.createElement(f, { className: 'slds-align-bottom' }, '3')
          )
        }
      ].map(function(e) {
        return (function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var l = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? O(Object(l), !0).forEach(function(t) {
                  j(e, t, l[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l))
              : O(Object(l)).forEach(function(t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(l, t)
                  );
                });
          }
          return e;
        })({}, e, { demoStyles: N + e.demoStyles || '' });
      }),
      I = function(e) {
        return s.a.createElement(x, { collection: C, exampleId: e.exampleId });
      },
      T = I;
    I.propTypes = { exampleId: _.a.string };
    var k = n.c.code,
      S = n.c.em,
      G = n.c.h2,
      A = n.c.h3,
      R = n.c.h4,
      D = n.c.li,
      P = n.c.ol,
      L = n.c.p,
      B = n.c.strong,
      W = n.c.table,
      M = n.c.tbody,
      Y = n.c.td,
      H = n.c.th,
      V = n.c.thead,
      q = n.c.tr,
      F = function() {
        return Object(a.createElement)(
          n.b,
          {},
          Object(a.createElement)(
            'div',
            { className: 'doc lead' },
            'The SLDS grid system provides a flexible, mobile-first, device-agnostic layout system. It  has features to control alignment, order, flow, and gutters.'
          ),
          G({ id: 'About-Grids' }, 'About Grids'),
          L(
            {},
            'Our most-used grid has standard 16px gutters. If you don’t have a design that calls for something more specific, this is the grid you’ll want to use. We’ll also show you exactly how to customize it for your use-case.'
          ),
          L({}, B({}, 'To build a grid:')),
          P(
            {},
            D(
              {},
              'Add a grid container by adding ',
              k({}, 'slds-grid'),
              ' to an HTML element'
            ),
            D(
              {},
              'Add as many ',
              k({}, 'slds-col'),
              ' elements as you want inside of your grid container'
            )
          ),
          Object(a.createElement)(T, { exampleId: 'intro-3-col-with-gutters' }),
          L(
            {},
            "Initially, each column takes an equal percentage of the width available. In this case, that's 33.3% of the container’s width. Once content is added, the sections expand as needed to fit the content if sizing classes are not used."
          ),
          Object(a.createElement)(T, { exampleId: 'intro-4-col-with-gutters' }),
          L(
            {},
            "Adding a fourth column means they'll each take up 25% of the width of the container."
          ),
          G({ id: '12-Column-Support' }, '12 Column Support'),
          L({}, 'You can have up to 12 columns in your grid.'),
          Object(a.createElement)(T, { exampleId: 'intro-12-col' }),
          G({ id: 'Column-Widths' }, 'Column Widths'),
          L(
            {},
            'If you don’t want the columns to have widths based on their content, you can easily control the width of the columns by adding column width classes.'
          ),
          Object(a.createElement)(T, { exampleId: 'grid-col-width-2-col' }),
          L(
            {},
            'This example sets the width of the first column 66% of your ',
            k({}, 'slds-grid'),
            ' container and the second column to 33% of your ',
            k({}, 'slds-grid'),
            ' container.'
          ),
          Object(a.createElement)(
            E.a,
            { header: 'Tip' },
            Object(a.createElement)(
              'p',
              null,
              'Our sizing classes set widths in percentages. This will keep your layout fluid to the width of your ',
              Object(a.createElement)('code', null, 'slds-grid'),
              ' container.'
            )
          ),
          L(
            {},
            "A 12 column grid is our most used grid. Here's an overview of all the available width classes for a 12 column grid:"
          ),
          Object(a.createElement)(T, { exampleId: 'col-width-all-options' }),
          L(
            {},
            'Since width class names are written in a human-friendly way, you may choose to write ',
            k({}, 'slds-size_1-of-2'),
            ' or ',
            k({}, 'slds-size_6-of-12'),
            ', both outcomes are the same.'
          ),
          Object(a.createElement)(T, {
            exampleId: 'col-width-all-fraction-options'
          }),
          G({ id: 'Column-Gutters' }, 'Column Gutters'),
          L(
            {},
            'By default, we start with 0 gutters on our columns. This allows flexibility to add gutter widths of your liking to each column(s) or grid container.'
          ),
          L(
            {},
            'You can easily add padding to your grid by applying ',
            k({}, 'slds-gutters'),
            ' to the ',
            k({}, 'slds-grid'),
            ' container. This will add the gutters to your columns as well as align the outside of your grid.'
          ),
          Object(a.createElement)(T, { exampleId: '2-col-with-gutters' }),
          L(
            {},
            'In the above example, adding ',
            k({}, 'slds-gutters'),
            ' will give us our default gutter size of 24px (12px on each side).'
          ),
          Object(a.createElement)(
            E.a,
            { type: 'note' },
            Object(a.createElement)(
              'p',
              null,
              'The default ',
              Object(a.createElement)('code', null, 'slds-gutters'),
              ' is subject to change over time but is a great way to ensure when we upgrade, you upgrade.'
            )
          ),
          L(
            {},
            'You can modify the width of the gutters between each column by using ',
            k({}, 'slds-gutters_x-small'),
            ' (16px), ',
            k({}, 'slds-gutters_small'),
            ' (24px), ',
            k({}, 'slds-gutters_medium'),
            ' (32px), ',
            k({}, 'slds-gutters_large'),
            ' (48px), and ',
            k({}, 'slds-gutters_x-large'),
            ' (64px).'
          ),
          L(
            {},
            'You can also add different gutter widths to your columns by using a spacing utility and adding it to the ',
            k({}, 'slds-col'),
            ' element (e.g. ',
            k({}, 'slds-p-location_size-*'),
            '). The "location" can be ',
            B({}, 'left'),
            ', ',
            B({}, 'right'),
            ', ',
            B({}, 'top'),
            ', ',
            B({}, 'bottom'),
            ', ',
            B({}, 'vertical'),
            ', ',
            B({}, 'horizontal'),
            ' or ',
            B({}, 'around'),
            '. The "size" can be ',
            B({}, 'xxx-small'),
            ' (2px), ',
            B({}, 'xx-small'),
            ' (4px), ',
            B({}, 'x-small'),
            ' (8px), ',
            B({}, 'small'),
            ' (12px), ',
            B({}, 'medium'),
            ' (16px), ',
            B({}, 'large (24px)'),
            ', ',
            B({}, 'x-large'),
            ' (32px) or ',
            B({}, 'xx-large'),
            ' (48px).'
          ),
          Object(a.createElement)(T, { exampleId: '2-col-gutters-utilities' }),
          L(
            {},
            'The above example adds gutters of 32px (16px on each side) in between each column.'
          ),
          L(
            {},
            "You'll notice the 16px space on the left and right of your container created by the spacing classes. You can remove this by adding a ",
            k({}, 'slds-grid_pull-padded-[size]'),
            ' class to the ',
            k({}, 'slds-grid'),
            ' container. The ',
            k({}, '[size]'),
            " portion of this class should be the name of the spacing utility size you've applied to the outermost columns."
          ),
          Object(a.createElement)(T, { exampleId: '2-col-pull-padded' }),
          A({ id: 'Direct-Columns-Only' }, 'Direct Columns Only'),
          L(
            {},
            'By default, ',
            k({}, 'slds-gutters'),
            ' will apply to ',
            S({}, 'any'),
            ' column nested within the grid. If you only want ',
            B({}, 'direct'),
            ' child columns to receive gutters, use the ',
            k({}, 'slds-gutters_direct'),
            ' class.'
          ),
          L(
            {},
            'You can modify the width of the gutters between each column by using ',
            k({}, 'slds-gutters_direct-x-small'),
            ' (16px), ',
            k({}, 'slds-gutters_direct-small'),
            ' (24px), ',
            k({}, 'slds-gutters_direct-medium'),
            ' (32px), ',
            k({}, 'slds-gutters_direct-large'),
            ' (48px), and ',
            k({}, 'slds-gutters_direct-x-large'),
            ' (64px).'
          ),
          Object(a.createElement)(T, { exampleId: 'direct-col-gutters' }),
          L(
            {},
            'Below is the same example without using the ',
            k({}, 'slds-gutters_direct'),
            ' class:'
          ),
          Object(a.createElement)(T, { exampleId: 'all-children-col-gutters' }),
          G({ id: 'Column-Wrapping' }, 'Column Wrapping'),
          L(
            {},
            'By default, your columns will align themselves horizontally unless you tell them otherwise. If you are using sizing classes (e.g. ',
            k({}, 'slds-size_4-of-12'),
            ') and the total # of columns in a row exceed 12 then you can let the grid container know to wrap your columns to a new row by adding ',
            k({}, 'slds-wrap'),
            ' to the ',
            k({}, 'slds-grid'),
            ' container.'
          ),
          Object(a.createElement)(T, { exampleId: '3-col-wrapping' }),
          G({ id: 'Column-Reordering' }, 'Column Reordering'),
          Object(a.createElement)(
            E.a,
            { type: 'a11y', header: 'Accessibility concern' },
            Object(a.createElement)(
              'p',
              null,
              'You can visually reorder columns independently from their position in the markup, but you should avoid doing so if you wish to remain WCAG compliant.'
            )
          ),
          Object(a.createElement)(T, { exampleId: '3-col-reordering' }),
          G({ id: 'Column-Nesting' }, 'Column Nesting'),
          L(
            {},
            'Nesting columns is simple and can add more flexibility in your designs. In a column, you can add a nested grid by creating another ',
            k({}, 'slds-grid'),
            ' container and as many ',
            k({}, 'slds-col'),
            ' elements inside of that container as you need.'
          ),
          Object(a.createElement)(T, { exampleId: 'col-nesting' }),
          G({ id: 'Grid-Flow' }, 'Grid Flow'),
          L(
            {},
            'Once an ',
            k({}, 'slds-grid'),
            ' has been set, you can change things like flow. By ',
            S({}, 'default'),
            ', a grid flows left to right on the main horizontal axis. You can easily switch your grid to flow top to bottom on a vertical axis by adding ',
            k({}, 'slds-grid_vertical'),
            ' to the ',
            k({}, 'slds-grid'),
            ' container.'
          ),
          A({ id: 'Left-to-Right' }, 'Left to Right'),
          L({}, 'The default flow is left to right on the horizontal axis'),
          Object(a.createElement)(T, { exampleId: 'default-left-to-right' }),
          A({ id: 'Top-to-Bottom' }, 'Top to Bottom'),
          L(
            {},
            'To switch the grid to flow top to bottom on the vertical axis, add ',
            k({}, 'slds-grid_vertical'),
            ' to the ',
            k({}, 'slds-grid'),
            ' container.'
          ),
          Object(a.createElement)(T, { exampleId: 'vertical-align' }),
          A({ id: 'Reversed' }, 'Reversed'),
          L(
            {},
            'There may be times you find yourself in a situation to reverse the visual flow of your columns. You can do this both horizontally and vertically.'
          ),
          R({ id: 'Right-to-Left' }, 'Right to Left'),
          L(
            {},
            'To reverse the horizontal flow, add the class ',
            k({}, 'slds-grid_reverse'),
            ' to the ',
            k({}, 'slds-grid'),
            ' container.'
          ),
          Object(a.createElement)(T, { exampleId: 'horizontal-reversed' }),
          R({ id: 'Bottom-to-Top' }, 'Bottom to Top'),
          L(
            {},
            'To reverse the vertical flow, add the class ',
            k({}, 'slds-grid_vertical-reverse'),
            ' to the ',
            k({}, 'slds-grid'),
            ' container.'
          ),
          Object(a.createElement)(T, {
            exampleId: 'vertical-aligned-reversed'
          }),
          G(
            { id: 'Creating-Responsive-Layouts' },
            'Creating Responsive Layouts'
          ),
          L(
            {},
            'The SLDS grid system can become responsive to your viewport size by prefixing our sizing and ordering classes with a breakpoint name. Our responsive sizing utilities are built upon a mobile first approach.'
          ),
          L(
            {},
            'To achieve the desired outcome of this approach, you will need to append responsive sizing utilities to an element that override the previous breakpoint.'
          ),
          L(
            {},
            'This means the sizing utility used will start at the smallest width and continue to be applied until a responsive sizing utility for a specific breakpoint overrides it.'
          ),
          L(
            {},
            'In some uncommon cases, you may need a sizing utility that is up to a certain breakpoint. For these, use the classes prefixed with ',
            k({}, 'max-'),
            ' to achieve this result.'
          ),
          R({ id: 'Responsive-Layout-Options' }, 'Responsive Layout Options'),
          L(
            {},
            'Below is an overview table outlining the default behavior for columns and how that behavior may change for responsive breakpoints.'
          ),
          W(
            {},
            V(
              {},
              q(
                {},
                H({}),
                H({}, 'Default'),
                H({}, 'Small (>= 480px)'),
                H({}, 'Medium (>=768px)'),
                H({}, 'Large (>=1024px)')
              )
            ),
            M(
              {},
              q(
                {},
                Y({}, 'Width class prefix'),
                Y({}, k({}, 'slds-size')),
                Y({}, k({}, 'slds-small-size')),
                Y({}, k({}, 'slds-medium-size')),
                Y({}, k({}, 'slds-large-size'))
              ),
              q(
                {},
                Y({}, '# of columns'),
                Y({}, '1,2,3,4,5,6,7,8 and 12'),
                Y({}),
                Y({}),
                Y({})
              ),
              q(
                {},
                Y({}, 'Column ordering prefix'),
                Y({}, k({}, 'slds-order')),
                Y({}, k({}, 'slds-small-order')),
                Y({}, k({}, 'slds-medium-order')),
                Y({}, k({}, 'slds-large-order'))
              ),
              q(
                {},
                Y({}, 'Max # of reorders'),
                Y({}, '12'),
                Y({}),
                Y({}),
                Y({})
              )
            )
          ),
          Object(a.createElement)(
            E.a,
            null,
            Object(a.createElement)(
              'p',
              null,
              'Note: To make sure columns wrap as they exceed a total column count of 12, responsive layouts require ',
              Object(a.createElement)('code', null, 'slds-wrap'),
              ' to be added to the ',
              Object(a.createElement)('code', null, 'slds-grid'),
              ' container.'
            )
          ),
          R({ id: 'MobileDesktop-Example' }, 'Mobile/Desktop Example'),
          L(
            {},
            "Since we build on the concept of mobile first, let's set a layout for mobile and override for desktop directly in our HTML. We do this by setting a mobile, in this case default widths to our columns and override the layout when we meet the criteria of a desktop viewport size."
          ),
          Object(a.createElement)(T, {
            exampleId: 'responsive-2-col-mobile-desktop'
          }),
          L(
            {},
            'In the above example, we are setting a stacked layout for mobile/tablet devices and then when our viewport exceeds a width of 1024px we redraw our layout to be a nice two column where the primary content area takes up 8 columns and the secondary content area takes up 4 columns.'
          ),
          R(
            { id: 'MobileTabletDesktop-Example' },
            'Mobile/Tablet/Desktop Example'
          ),
          L(
            {},
            'If our designs need a bit more flexibility, we can accomplish that by establishing different layouts for mobile, tablet, and desktop.'
          ),
          Object(a.createElement)(T, {
            exampleId: 'responsive-2-col-mobile-tablet-desktop'
          }),
          L(
            {},
            'In this above example, we are setting our default stacked layout and when our browser exceeds a viewport width of 768px, we adjust the layout for each column to take up 50% or 6 columns of the slds-grid container. Then once we exceed a viewport width of 1024px, we again redraw a layout to be a nice 66% or 8 columns for the primary content area and 33% or 4 columns for the secondary content area.'
          ),
          R(
            { id: 'Conditional-Column-Reordering' },
            'Conditional Column Reordering'
          ),
          L(
            {},
            "With flexbox it's easy to reorder your columns visually. Luckily with the SLDS grid system it's easy to reorder visually in a responsive manner! Following the same naming convention as sizing, we'll want to prefix ",
            k({}, 'slds-order'),
            ' with our breakpoint name and pass in an integer for where you want it visually. The lowest value is the first in order. If no order is defined, standard ordering is applied. This means that a column with no order class will render before ',
            k({}, 'slds-order_1'),
            '.'
          ),
          Object(a.createElement)(T, {
            exampleId: 'responsive-reordering-2-col-mobile-desktop'
          }),
          L(
            {},
            "In the above example, we're setting our first column to be last in the order of 3. Then once your viewport exceeds a width of 1024px, we're changing the visual order of our first column back to 1. Now this seemed rather long winded to move 1 column. Below is an easy way of letting the column know you only want to reorder the first column if it's in a viewport smaller than 480px. This breaks the convention of mobile first and should be used sparingly."
          ),
          G({ id: 'Alignment' }, 'Alignment'),
          L(
            {},
            'Since the grids are built on flexbox, they allow us to do some interesting things with alignment on both a horizontal axis and vertical axis. You can add an alignment utility to the ',
            k({}, 'slds-grid'),
            ' container.'
          ),
          A({ id: 'Horizontal-Axis' }, 'Horizontal Axis'),
          R({ id: 'Content-centered' }, 'Content centered'),
          L(
            {},
            'If you want your columns to grow from the the center of the horizontal axis, apply the class ',
            k({}, 'slds-grid_align-center'),
            '.'
          ),
          Object(a.createElement)(T, {
            exampleId: 'horizontal-align-center-basic'
          }),
          R(
            { id: 'Setting-variable-widths-based-on-content' },
            'Setting variable widths based on content'
          ),
          L(
            {},
            'Another powerful technique is letting a column shrink to the width of the content inside of it, while explicitly setting widths to other columns. This is achieved by using the ',
            k({}, 'slds-shrink-none'),
            ' or ',
            k({}, 'slds-grow-none'),
            ' utility classes or simply removing the ',
            k({}, 'slds-col'),
            ' class from the column element.'
          ),
          Object(a.createElement)(T, {
            exampleId: 'horizontal-align-center-variable'
          }),
          R({ id: 'Content-evenly-spaced-out' }, 'Content evenly spaced out'),
          L(
            {},
            'To evenly distribute columns on the horizontal axis with an equal amount of white space separating the columns, apply the class ',
            k({}, 'slds-grid_align-space'),
            '.'
          ),
          Object(a.createElement)(T, { exampleId: 'horizontal-align-spaced' }),
          R(
            { id: 'Content-evenly-spread-out-from-edges' },
            'Content evenly spread out from edges'
          ),
          L(
            {},
            'To spread out your columns on the horizontal axis, with the first column starting at the start of your main axis and last item ending at the far end of your main axis, apply the class ',
            k({}, 'slds-grid_align-spread'),
            '.'
          ),
          Object(a.createElement)(T, { exampleId: 'horizontal-align-spread' }),
          R({ id: 'Content-right-justified' }, 'Content right justified'),
          L(
            {},
            'If you want your columns to grow from the end of the horizontal axis, apply the class ',
            k({}, 'slds-grid_align-end'),
            '.'
          ),
          Object(a.createElement)(T, { exampleId: 'horizontal-align-end' }),
          R(
            { id: 'Content-alignment-with-bump' },
            'Content alignment with bump'
          ),
          L(
            {},
            'To "bump" a single or multiple grid items, apply the class ',
            k({}, 'slds-col_bump-{direction}'),
            ', with ',
            k({}, '{direction}'),
            ' being either left, right, top or bottom, to a grid item.'
          ),
          L({}, B({}, 'Bump Left')),
          L(
            {},
            'In the example below, applying the left bump class to item 5 bumps items 1 through 4 to the left.'
          ),
          Object(a.createElement)(T, {
            exampleId: 'content-alignment-bump-left'
          }),
          L({}, B({}, 'Bump Right')),
          L(
            {},
            'In the example below, applying the right bump class to item 5 bumps item 6 to the right.'
          ),
          Object(a.createElement)(T, {
            exampleId: 'content-alignment-bump-right'
          }),
          A({ id: 'Vertical-Axis' }, 'Vertical Axis'),
          Object(a.createElement)(
            E.a,
            { type: 'note', header: 'Implementation Note' },
            Object(a.createElement)(
              'p',
              null,
              'To vertically align elements on a cross-axis of a `slds-grid` container, the elements need available vertical white space. This is usually achieved by having a height applied to the `slds-grid` container.'
            )
          ),
          R({ id: 'Content-top' }, 'Content top'),
          L(
            {},
            'To align a single row or multi-line rows to the beginning of the cross axis, apply the class ',
            k({}, 'slds-grid_vertical-align-start'),
            '.'
          ),
          Object(a.createElement)(T, { exampleId: 'vertical-align-start' }),
          R({ id: 'Content-centered-2' }, 'Content centered'),
          L(
            {},
            'To vertically center align a single row or multi-line rows to the height of a ',
            k({}, 'slds-grid'),
            ' container, apply the class ',
            k({}, 'slds-grid_vertical-align-center'),
            '. When ',
            k({}, 'slds-grid_vertical-align-center'),
            ' is used in conjunction with ',
            k({}, 'slds-grid_align-center'),
            ', the outcome would horizontally and vertically center align your content in the center of the ',
            k({}, 'slds-grid'),
            ' container.'
          ),
          Object(a.createElement)(T, { exampleId: 'vertical-align-center' }),
          R({ id: 'Content-bottom' }, 'Content bottom'),
          L(
            {},
            'To align a single row or multi-line rows to the end of the cross axis, apply the class ',
            k({}, 'slds-grid_vertical-align-end'),
            '.'
          ),
          Object(a.createElement)(T, { exampleId: 'vertical-align-end' }),
          R(
            { id: 'Content-absolutely-centered' },
            'Content absolutely centered'
          ),
          Object(a.createElement)(T, {
            exampleId: 'vertical-align-absolute-center'
          }),
          R({ id: 'Individual-alignment' }, 'Individual alignment'),
          L(
            {},
            'To specify the vertical placement of grid items on the cross axis, you can apply ',
            k({}, 'slds-align-top'),
            ', ',
            k({}, 'slds-align-middle'),
            ', and ',
            k({}, 'slds-align-bottom'),
            ' to a ',
            k({}, 'slds-col'),
            ' element.'
          ),
          Object(a.createElement)(T, {
            exampleId: 'vertical-align-individual'
          }),
          G({ id: 'Page-Containers' }, 'Page Containers'),
          L(
            {},
            'Optionally, you can contain your page content by adding the class ',
            k({}, 'slds-container_width'),
            ' to a top level element in your page structure.'
          ),
          L(
            {},
            'Containers come in 4 widths, ',
            B({}, 'small'),
            ', ',
            B({}, 'medium'),
            ', ',
            B({}, 'large'),
            ' and ',
            B({}, 'x-large'),
            '. They are rendered using ',
            k({}, 'max-width'),
            '. This means your content will be a fluid width until it reaches the width the modifier has set on the container.'
          ),
          W(
            {},
            V({}, q({}, H({}, 'Class'), H({}, 'Width'))),
            M(
              {},
              q({}, Y({}, k({}, 'slds-container_small')), Y({}, '480px')),
              q({}, Y({}, k({}, 'slds-container_medium')), Y({}, '768px')),
              q({}, Y({}, k({}, 'slds-container_large')), Y({}, '1024px')),
              q({}, Y({}, k({}, 'slds-container_x-large')), Y({}, '1280px'))
            )
          ),
          L(
            {},
            'Additionally, you can center the content of your page by adding ',
            k({}, 'slds-container_center'),
            '.'
          )
        );
      },
      J = function() {
        return Object(n.a)(F());
      };
  }
});
