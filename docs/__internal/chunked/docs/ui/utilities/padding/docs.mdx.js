var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/utilities/padding/docs.mdx.js'] = (function(
  e
) {
  function t(t) {
    for (
      var i, n, l = t[0], s = t[1], p = t[2], m = 0, d = [];
      m < l.length;
      m++
    )
      (n = l[m]),
        Object.prototype.hasOwnProperty.call(o, n) && o[n] && d.push(o[n][0]),
        (o[n] = 0);
    for (i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
    for (c && c(t); d.length; ) d.shift()();
    return r.push.apply(r, p || []), a();
  }
  function a() {
    for (var e, t = 0; t < r.length; t++) {
      for (var a = r[t], i = !0, l = 1; l < a.length; l++) {
        var s = a[l];
        0 !== o[s] && (i = !1);
      }
      i && (r.splice(t--, 1), (e = n((n.s = a[0]))));
    }
    return e;
  }
  var i = {},
    o = { 100: 0 },
    r = [];
  function n(t) {
    if (i[t]) return i[t].exports;
    var a = (i[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = e),
    (n.c = i),
    (n.d = function(e, t, a) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (n.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var i in e)
          n.d(
            a,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
          );
      return a;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = '/assets/scripts/bundle/');
  var l = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    s = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var p = 0; p < l.length; p++) t(l[p]);
  var c = s;
  return r.push([137, 0]), a();
})({
  0: function(e, t) {
    e.exports = React;
  },
  137: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'getElement', function() {
        return f;
      }),
      a.d(t, 'getContents', function() {
        return z;
      });
    var i = a(0),
      o = a(4),
      r = a(17),
      n = a(11),
      l = o.c.a,
      s = o.c.code,
      p = o.c.h2,
      c = o.c.h3,
      m = o.c.li,
      d = o.c.p,
      u = o.c.strong,
      b = o.c.table,
      x = o.c.tbody,
      g = o.c.td,
      y = o.c.th,
      j = o.c.thead,
      O = o.c.tr,
      h = o.c.ul,
      f = function() {
        return Object(i.createElement)(
          o.b,
          {},
          Object(i.createElement)(
            'div',
            { className: 'doc lead' },
            'Adjust whitespace by applying horizontal and vertical padding helpers.'
          ),
          p({ id: 'About-Padding' }, 'About Padding'),
          d(
            {},
            'The base unit of all of our spacing metrics is ',
            u({}, '4'),
            '.'
          ),
          d({}, u({}, 'Before using')),
          h(
            {},
            m(
              {},
              'Most components already come with spacing included. These utility classes are for added convenience in laying out components.'
            ),
            m(
              {},
              'Classes prefixed by ',
              s({}, 'slds-p-'),
              ' are used for adding ',
              u({}, 'padding'),
              '. Classes prefixed in ',
              s({}, 'slds-m-'),
              ' are used for adding ',
              l({ href: '/utilities/margin' }, 'margin')
            ),
            m(
              {},
              'The directions available for the spacing classes are ',
              s({}, 'top'),
              ', ',
              s({}, 'right'),
              ', ',
              s({}, 'bottom'),
              ', and ',
              s({}, 'left'),
              '.'
            ),
            m(
              {},
              'You can use the ',
              s({}, 'vertical'),
              ' shortcut for both ',
              s({}, 'top'),
              ' and ',
              s({}, 'bottom'),
              ', ',
              s({}, 'horizontal'),
              ' for both ',
              s({}, 'right'),
              ' and ',
              s({}, 'left'),
              ', and ',
              s({}, 'around'),
              ' for all sides.'
            ),
            m(
              {},
              'Use the ',
              s({}, '_xxx-small'),
              ' through ',
              s({}, '_xx-large'),
              ' scale to choose the size needed.'
            ),
            m(
              {},
              'You can also use ',
              s({}, 'none'),
              ' as the size on any of the directions to enforce zero padding.'
            ),
            m(
              {},
              'Where ',
              u({}, 'vertical centering'),
              ' is required, check out our ',
              l({ href: '/utilities/media-objects' }, 'centered media object'),
              ' instead of applying extra ',
              s({}, 'padding'),
              ' or ',
              s({}, 'margin'),
              '.'
            )
          ),
          p({ id: 'Examples' }, 'Examples'),
          c({ id: 'Location-Top' }, 'Location - Top'),
          Object(i.createElement)(
            n.a,
            { title: 'top paddings' },
            Object(i.createElement)(
              i.Fragment,
              null,
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'none',
                position: 'top'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'xxx-small',
                position: 'top'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'xx-small',
                position: 'top'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'x-small',
                position: 'top'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'small',
                position: 'top'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'medium',
                position: 'top'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'large',
                position: 'top'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'x-large',
                position: 'top'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'xx-large',
                position: 'top'
              })
            )
          ),
          c({ id: 'Location-Left' }, 'Location - Left'),
          Object(i.createElement)(
            n.a,
            { title: 'left paddings' },
            Object(i.createElement)(
              i.Fragment,
              null,
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'none',
                position: 'left'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'xxx-small',
                position: 'left'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'xx-small',
                position: 'left'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'x-small',
                position: 'left'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'small',
                position: 'left'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'medium',
                position: 'left'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'large',
                position: 'left'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'x-large',
                position: 'left'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'xx-large',
                position: 'left'
              })
            )
          ),
          c({ id: 'Location-Bottom' }, 'Location - Bottom'),
          Object(i.createElement)(
            n.a,
            { title: 'bottom paddings' },
            Object(i.createElement)(
              i.Fragment,
              null,
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'none',
                position: 'bottom'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'xxx-small',
                position: 'bottom'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'xx-small',
                position: 'bottom'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'x-small',
                position: 'bottom'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'small',
                position: 'bottom'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'medium',
                position: 'bottom'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'large',
                position: 'bottom'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'x-large',
                position: 'bottom'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'xx-large',
                position: 'bottom'
              })
            )
          ),
          c({ id: 'Location-Right' }, 'Location - Right'),
          Object(i.createElement)(
            n.a,
            { title: 'right paddings' },
            Object(i.createElement)(
              i.Fragment,
              null,
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'none',
                position: 'right'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'xxx-small',
                position: 'right'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'xx-small',
                position: 'right'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'x-small',
                position: 'right'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'small',
                position: 'right'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'medium',
                position: 'right'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'large',
                position: 'right'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'x-large',
                position: 'right'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'xx-large',
                position: 'right'
              })
            )
          ),
          c({ id: 'Location-Horizontal' }, 'Location - Horizontal'),
          Object(i.createElement)(
            n.a,
            { title: 'horizontal paddings' },
            Object(i.createElement)(
              i.Fragment,
              null,
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'none',
                position: 'horizontal'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'xxx-small',
                position: 'horizontal'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'xx-small',
                position: 'horizontal'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'x-small',
                position: 'horizontal'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'small',
                position: 'horizontal'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'medium',
                position: 'horizontal'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'large',
                position: 'horizontal'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'x-large',
                position: 'horizontal'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'xx-large',
                position: 'horizontal'
              })
            )
          ),
          c({ id: 'Location-Vertical' }, 'Location - Vertical'),
          Object(i.createElement)(
            n.a,
            { title: 'vertical paddings' },
            Object(i.createElement)(
              i.Fragment,
              null,
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'none',
                position: 'vertical'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'xxx-small',
                position: 'vertical'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'xx-small',
                position: 'vertical'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'x-small',
                position: 'vertical'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'small',
                position: 'vertical'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'medium',
                position: 'vertical'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'large',
                position: 'vertical'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'x-large',
                position: 'vertical'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'xx-large',
                position: 'vertical'
              })
            )
          ),
          c({ id: 'Location-Around' }, 'Location - Around'),
          Object(i.createElement)(
            n.a,
            { title: 'around paddings' },
            Object(i.createElement)(
              i.Fragment,
              null,
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'none',
                position: 'around'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'xxx-small',
                position: 'around'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'xx-small',
                position: 'around'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'x-small',
                position: 'around'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'small',
                position: 'around'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'medium',
                position: 'around'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'large',
                position: 'around'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'x-large',
                position: 'around'
              }),
              Object(i.createElement)(r.a, {
                type: 'p',
                size: 'xx-large',
                position: 'around'
              })
            )
          ),
          p({ id: 'Variable-Density-Classes' }, 'Variable Density Classes'),
          d(
            {},
            "In addition to the tokens we've created to support the ",
            l(
              {
                href:
                  'https://developer.salesforce.com/blogs/2018/08/new-density-settings-for-the-lightning-experience-ui-in-winter-19.html'
              },
              'new density settings'
            ),
            ', we have also created variable density classes for both padding and margin. The tables below show how the values change between the Comfy and Compact settings.'
          ),
          c({ id: 'Around' }, 'Around'),
          b(
            {},
            j(
              {},
              O(
                {},
                y({}, 'Class Name'),
                y({}, 'Comfy Value'),
                y({}, 'Compact Value')
              )
            ),
            x(
              {},
              O(
                {},
                g({}, s({}, 'slds-var-p-around_xxx-small')),
                g({}, '0.125rem'),
                g({}, '0.125rem')
              ),
              O(
                {},
                g({}, s({}, 'slds-var-p-around_xx-small')),
                g({}, '0.25rem'),
                g({}, '0.125rem')
              ),
              O(
                {},
                g({}, s({}, 'slds-var-p-around_x-small')),
                g({}, '0.5rem'),
                g({}, '0.125rem')
              ),
              O(
                {},
                g({}, s({}, 'slds-var-p-around_small')),
                g({}, '0.75rem'),
                g({}, '0.25rem')
              ),
              O(
                {},
                g({}, s({}, 'slds-var-p-around_medium')),
                g({}, '1rem'),
                g({}, '0.5rem')
              ),
              O(
                {},
                g({}, s({}, 'slds-var-p-around_large')),
                g({}, '1.5rem'),
                g({}, '0.75rem')
              ),
              O(
                {},
                g({}, s({}, 'slds-var-p-around_x-large')),
                g({}, '2rem'),
                g({}, '1rem')
              ),
              O(
                {},
                g({}, s({}, 'slds-var-p-around_xx-large')),
                g({}, '3rem'),
                g({}, '1.5rem')
              )
            )
          ),
          c({ id: 'Left-Right-Horizontal' }, 'Left, Right, Horizontal'),
          b(
            {},
            j(
              {},
              O(
                {},
                y({}, 'Class Name'),
                y({}, 'Comfy Value'),
                y({}, 'Compact Value')
              )
            ),
            x(
              {},
              O(
                {},
                g({}, s({}, 'slds-var-p-*_xxx-small')),
                g({}, '0.125rem'),
                g({}, '0.125rem')
              ),
              O(
                {},
                g({}, s({}, 'slds-var-p-*_xx-small')),
                g({}, '0.25rem'),
                g({}, '0.125rem')
              ),
              O(
                {},
                g({}, s({}, 'slds-var-p-*_x-small')),
                g({}, '0.5rem'),
                g({}, '0.25rem')
              ),
              O(
                {},
                g({}, s({}, 'slds-var-p-*_small')),
                g({}, '0.75rem'),
                g({}, '0.5rem')
              ),
              O(
                {},
                g({}, s({}, 'slds-var-p-*_medium')),
                g({}, '1rem'),
                g({}, '0.75rem')
              ),
              O(
                {},
                g({}, s({}, 'slds-var-p-*_large')),
                g({}, '1.5rem'),
                g({}, '0.75rem')
              ),
              O(
                {},
                g({}, s({}, 'slds-var-p-*_x-large')),
                g({}, '2rem'),
                g({}, '1rem')
              ),
              O(
                {},
                g({}, s({}, 'slds-var-p-*_xx-large')),
                g({}, '3rem'),
                g({}, '1.5rem')
              )
            )
          ),
          c({ id: 'Top-Bottom-Vertical' }, 'Top, Bottom, Vertical'),
          b(
            {},
            j(
              {},
              O(
                {},
                y({}, 'Class Name'),
                y({}, 'Comfy Value'),
                y({}, 'Compact Value')
              )
            ),
            x(
              {},
              O(
                {},
                g({}, s({}, 'slds-var-p-*_xxx-small')),
                g({}, '0.125rem'),
                g({}, '0.125rem')
              ),
              O(
                {},
                g({}, s({}, 'slds-var-p-*_xx-small')),
                g({}, '0.25rem'),
                g({}, '0.125rem')
              ),
              O(
                {},
                g({}, s({}, 'slds-var-p-*_x-small')),
                g({}, '0.5rem'),
                g({}, '0.25rem')
              ),
              O(
                {},
                g({}, s({}, 'slds-var-p-*_small')),
                g({}, '0.75rem'),
                g({}, '0.5rem')
              ),
              O(
                {},
                g({}, s({}, 'slds-var-p-*_medium')),
                g({}, '1rem'),
                g({}, '0.5rem')
              ),
              O(
                {},
                g({}, s({}, 'slds-var-p-*_large')),
                g({}, '1.5rem'),
                g({}, '0.75rem')
              ),
              O(
                {},
                g({}, s({}, 'slds-var-p-*_x-large')),
                g({}, '2rem'),
                g({}, '1rem')
              ),
              O(
                {},
                g({}, s({}, 'slds-var-p-*_xx-large')),
                g({}, '3rem'),
                g({}, '1.5rem')
              )
            )
          )
        );
      },
      z = function() {
        return Object(o.a)(f());
      };
  },
  18: function(e, t) {
    e.exports = JSBeautify;
  }
});