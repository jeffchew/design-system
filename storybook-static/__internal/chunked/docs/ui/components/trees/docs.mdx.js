var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/trees/docs.mdx.js'] = (function(e) {
  function t(t) {
    for (
      var l, i, c = t[0], o = t[1], m = t[2], d = 0, u = [];
      d < c.length;
      d++
    )
      (i = c[d]),
        Object.prototype.hasOwnProperty.call(n, i) && n[i] && u.push(n[i][0]),
        (n[i] = 0);
    for (l in o) Object.prototype.hasOwnProperty.call(o, l) && (e[l] = o[l]);
    for (s && s(t); u.length; ) u.shift()();
    return r.push.apply(r, m || []), a();
  }
  function a() {
    for (var e, t = 0; t < r.length; t++) {
      for (var a = r[t], l = !0, c = 1; c < a.length; c++) {
        var o = a[c];
        0 !== n[o] && (l = !1);
      }
      l && (r.splice(t--, 1), (e = i((i.s = a[0]))));
    }
    return e;
  }
  var l = {},
    n = { 80: 0 },
    r = [];
  function i(t) {
    if (l[t]) return l[t].exports;
    var a = (l[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, i), (a.l = !0), a.exports;
  }
  (i.m = e),
    (i.c = l),
    (i.d = function(e, t, a) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
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
      var a = Object.create(null);
      if (
        (i.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var l in e)
          i.d(
            a,
            l,
            function(t) {
              return e[t];
            }.bind(null, l)
          );
      return a;
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
  var c = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    o = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var m = 0; m < c.length; m++) t(c[m]);
  var s = o;
  return r.push([221, 0]), a();
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
  221: function(e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'getElement', function() {
        return Q;
      }),
      a.d(t, 'getContents', function() {
        return Y;
      });
    var l = a(0),
      n = a.n(l),
      r = a(4),
      i = a(1),
      c = (a(23), a(15), a(3)),
      o = a.n(c),
      m = a(5),
      s = a.n(m),
      d = a(7),
      u = a(2);
    function h(e) {
      return (h =
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
    function b(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function p(e, t) {
      for (var a = 0; a < t.length; a++) {
        var l = t[a];
        (l.enumerable = l.enumerable || !1),
          (l.configurable = !0),
          'value' in l && (l.writable = !0),
          Object.defineProperty(e, l.key, l);
      }
    }
    function E(e, t) {
      return (E =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function L(e, t) {
      return !t || ('object' !== h(t) && 'function' != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function g() {
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
    function v(e) {
      return (v = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var f = function(e) {
      var t = function(t) {
        return e.termToMark
          ? n.a.createElement('span', {
              dangerouslySetInnerHTML: {
                __html: ((a = t),
                (l = e.termToMark),
                a.replace(new RegExp(l, 'gi'), function(e) {
                  return '<mark>'.concat(e, '</mark>');
                }))
              }
            })
          : n.a.createElement(n.a.Fragment, null, t);
        var a, l;
      };
      return n.a.createElement(
        'div',
        { className: s()('slds-tree__item', e.className) },
        n.a.createElement(d.b, {
          'aria-hidden': 'true',
          assistiveText: 'Expand '.concat(e.itemLabel),
          className: s()(
            'slds-m-right_x-small',
            (!e.isBranch || e.isDisabled) && 'slds-is-disabled'
          ),
          iconClassName: 'slds-button__icon_small',
          symbol: 'chevronright',
          tabIndex: '-1',
          title: 'Expand '.concat(e.itemLabel)
        }),
        n.a.createElement(
          'span',
          { className: 'slds-has-flexi-truncate' },
          n.a.createElement(
            'span',
            {
              className: 'slds-tree__item-label slds-truncate',
              title: e.itemLabel
            },
            t(e.itemLabel)
          ),
          e.metaTextLabel &&
            n.a.createElement(
              'span',
              {
                className: 'slds-tree__item-meta slds-truncate',
                title: e.metaTextLabel
              },
              n.a.createElement(
                'span',
                { className: 'slds-assistive-text' },
                ':'
              ),
              t(e.metaTextLabel)
            )
        ),
        e.children
      );
    };
    (f.displayName = 'TreeItem'),
      (f.propTypes = {
        children: o.a.node,
        isBranch: o.a.bool,
        isDisabled: o.a.bool,
        itemLabel: o.a.string,
        metaTextLabel: o.a.string,
        termToMark: o.a.string
      }),
      (f.defaultProps = { itemLabel: 'Tree Item' });
    var T = (function(e) {
      !(function(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          t && E(e, t);
      })(c, e);
      var t,
        a,
        l,
        r,
        i = ((t = c),
        function() {
          var e,
            a = v(t);
          if (g()) {
            var l = v(this).constructor;
            e = Reflect.construct(a, arguments, l);
          } else e = a.apply(this, arguments);
          return L(this, e);
        });
      function c() {
        return b(this, c), i.apply(this, arguments);
      }
      return (
        (a = c),
        (l = [
          {
            key: 'getBranchAriaLabel',
            value: function(e, t) {
              return t ? e + ': ' + t : e;
            }
          },
          {
            key: 'render',
            value: function() {
              var e = this.props,
                t = e.ariaLevel,
                a = e.tabIndex,
                l = e.isBranch,
                r = e.isExpanded,
                i = e.isSelected,
                c = e.itemLabel,
                o = e.metaTextLabel;
              return n.a.createElement(
                'li',
                {
                  'aria-expanded': l ? r || !1 : null,
                  'aria-label': l ? this.getBranchAriaLabel(c, o) : null,
                  'aria-level': t,
                  'aria-selected': i,
                  role: 'treeitem',
                  tabIndex: a
                },
                this.props.children
              );
            }
          }
        ]) && p(a.prototype, l),
        r && p(a, r),
        c
      );
    })(l.Component);
    (T.displayName = 'TreeListItem'),
      (T.propTypes = {
        ariaLevel: o.a.number.isRequired,
        children: o.a.node.isRequired,
        isBranch: Object(u.b)('itemLabel', o.a.bool),
        isExpanded: Object(u.b)('isBranch', o.a.bool),
        isSelected: o.a.bool,
        itemLabel: o.a.string,
        metaTextLabel: Object(u.b)('itemLabel', o.a.string),
        tabIndex: o.a.number
      });
    var y = function(e) {
      return n.a.createElement(
        'h4',
        { className: 'slds-tree__group-header', id: e.id },
        e.children
      );
    };
    (y.displayName = 'TreeHeader'),
      (y.propTypes = { children: o.a.node, id: o.a.string.isRequired });
    var x = function(e) {
      return n.a.createElement(
        'ul',
        {
          'aria-labelledby': e.headerId,
          className: 'slds-tree',
          id: e.id,
          role: 'tree'
        },
        e.children
      );
    };
    (x.displayName = 'TreeList'),
      (x.propTypes = {
        children: o.a.node,
        headerId: o.a.string,
        id: o.a.string
      });
    var B = function(e) {
      return n.a.createElement('ul', { role: 'group' }, e.children);
    };
    (B.displayName = 'TreeGroup'), (B.propTypes = { children: o.a.node });
    var w = function(e) {
      return n.a.createElement(
        'div',
        { className: 'slds-tree_container' },
        e.children
      );
    };
    (w.displayName = 'TreeContainer'), (w.propTypes = { children: o.a.node });
    var I = function() {
      return n.a.createElement(
        n.a.Fragment,
        null,
        n.a.createElement(
          T,
          { ariaLevel: 1, tabIndex: 0 },
          n.a.createElement(f, null)
        ),
        n.a.createElement(
          T,
          { ariaLevel: 1, isBranch: !0, itemLabel: 'Tree Branch' },
          n.a.createElement(f, { isBranch: !0, itemLabel: 'Tree Branch' }),
          n.a.createElement(
            B,
            null,
            n.a.createElement(T, { ariaLevel: 2 }, n.a.createElement(f, null))
          )
        ),
        n.a.createElement(
          T,
          { ariaLevel: 1, isBranch: !0, itemLabel: 'Tree Branch' },
          n.a.createElement(f, { isBranch: !0, itemLabel: 'Tree Branch' }),
          n.a.createElement(
            B,
            null,
            n.a.createElement(T, { ariaLevel: 2 }, n.a.createElement(f, null))
          )
        ),
        n.a.createElement(
          T,
          {
            ariaLevel: 1,
            itemLabel:
              'Tree Item with a Really Really Long Name That Should Truncate'
          },
          n.a.createElement(f, {
            itemLabel:
              'Tree Item with a Really Really Long Name That Should Truncate'
          })
        )
      );
    };
    I.displayName = 'DefaultTree';
    var _ = function() {
      return n.a.createElement(
        n.a.Fragment,
        null,
        n.a.createElement(
          T,
          { ariaLevel: 1, tabIndex: 0 },
          n.a.createElement(f, null)
        ),
        n.a.createElement(
          T,
          {
            ariaLevel: 1,
            isBranch: !0,
            isExpanded: !0,
            itemLabel: 'Tree Branch'
          },
          n.a.createElement(f, { isBranch: !0, itemLabel: 'Tree Branch' }),
          n.a.createElement(
            B,
            null,
            n.a.createElement(T, { ariaLevel: 2 }, n.a.createElement(f, null))
          )
        ),
        n.a.createElement(
          T,
          { ariaLevel: 1, isBranch: !0, itemLabel: 'Tree Branch' },
          n.a.createElement(f, { isBranch: !0, itemLabel: 'Tree Branch' }),
          n.a.createElement(
            B,
            null,
            n.a.createElement(T, { ariaLevel: 2 }, n.a.createElement(f, null))
          )
        ),
        n.a.createElement(
          T,
          {
            ariaLevel: 1,
            itemLabel:
              'Tree Item with a Really Really Long Name That Should Truncate'
          },
          n.a.createElement(f, {
            itemLabel:
              'Tree Item with a Really Really Long Name That Should Truncate'
          })
        )
      );
    };
    _.displayName = 'ExpandedTree';
    var O = function() {
      return n.a.createElement(
        n.a.Fragment,
        null,
        n.a.createElement(T, { ariaLevel: 1 }, n.a.createElement(f, null)),
        n.a.createElement(
          T,
          {
            ariaLevel: 1,
            isBranch: !0,
            isExpanded: !0,
            itemLabel: 'Tree Branch'
          },
          n.a.createElement(f, { isBranch: !0, itemLabel: 'Tree Branch' }),
          n.a.createElement(
            B,
            null,
            n.a.createElement(
              T,
              { ariaLevel: 2, isSelected: !0, tabIndex: 0 },
              n.a.createElement(f, null)
            )
          )
        ),
        n.a.createElement(
          T,
          { ariaLevel: 1, isBranch: !0, itemLabel: 'Tree Branch' },
          n.a.createElement(f, { isBranch: !0, itemLabel: 'Tree Branch' }),
          n.a.createElement(
            B,
            null,
            n.a.createElement(T, { ariaLevel: 2 }, n.a.createElement(f, null))
          )
        ),
        n.a.createElement(
          T,
          { ariaLevel: 1 },
          n.a.createElement(f, {
            itemLabel:
              'Tree Item with a Really Really Long Name That Should Truncate'
          })
        )
      );
    };
    O.displayName = 'SelectedTree';
    var S = function() {
      return n.a.createElement(
        n.a.Fragment,
        null,
        n.a.createElement(
          T,
          { ariaLevel: 1, tabIndex: 0 },
          n.a.createElement(f, null)
        ),
        n.a.createElement(
          T,
          {
            ariaLevel: 1,
            isBranch: !0,
            isExpanded: !0,
            itemLabel: 'Tree Branch'
          },
          n.a.createElement(f, { isBranch: !0, itemLabel: 'Tree Branch' }),
          n.a.createElement(
            B,
            null,
            n.a.createElement(T, { ariaLevel: 2 }, n.a.createElement(f, null)),
            n.a.createElement(
              T,
              {
                ariaLevel: 2,
                isBranch: !0,
                isExpanded: !0,
                itemLabel: 'Tree Branch'
              },
              n.a.createElement(f, { isBranch: !0, itemLabel: 'Tree Branch' }),
              n.a.createElement(
                B,
                null,
                n.a.createElement(
                  T,
                  { ariaLevel: 3 },
                  n.a.createElement(f, null)
                ),
                n.a.createElement(
                  T,
                  { ariaLevel: 3 },
                  n.a.createElement(f, null)
                ),
                n.a.createElement(
                  T,
                  { ariaLevel: 3, isBranch: !0, itemLabel: 'Tree Branch' },
                  n.a.createElement(f, {
                    isBranch: !0,
                    itemLabel: 'Tree Branch'
                  }),
                  n.a.createElement(
                    B,
                    null,
                    n.a.createElement(
                      T,
                      { ariaLevel: 4 },
                      n.a.createElement(f, null)
                    )
                  )
                ),
                n.a.createElement(
                  T,
                  {
                    ariaLevel: 3,
                    isBranch: !0,
                    isExpanded: !0,
                    itemLabel: 'Tree Branch'
                  },
                  n.a.createElement(f, {
                    isBranch: !0,
                    itemLabel: 'Tree Branch'
                  }),
                  n.a.createElement(
                    B,
                    null,
                    n.a.createElement(
                      T,
                      { ariaLevel: 4 },
                      n.a.createElement(f, null)
                    ),
                    n.a.createElement(
                      T,
                      { ariaLevel: 4 },
                      n.a.createElement(f, {
                        itemLabel:
                          'Another Tree Item with Really Really Long Text That Should Truncate'
                      })
                    ),
                    n.a.createElement(
                      T,
                      { ariaLevel: 4 },
                      n.a.createElement(f, null)
                    ),
                    n.a.createElement(
                      T,
                      {
                        ariaLevel: 4,
                        isBranch: !0,
                        isExpanded: !0,
                        itemLabel: 'Tree Branch'
                      },
                      n.a.createElement(f, {
                        isBranch: !0,
                        itemLabel: 'Tree Branch'
                      }),
                      n.a.createElement(
                        B,
                        null,
                        n.a.createElement(
                          T,
                          { ariaLevel: 5 },
                          n.a.createElement(f, null)
                        ),
                        n.a.createElement(
                          T,
                          { ariaLevel: 5 },
                          n.a.createElement(f, null)
                        ),
                        n.a.createElement(
                          T,
                          { ariaLevel: 5 },
                          n.a.createElement(f, null)
                        )
                      )
                    ),
                    n.a.createElement(
                      T,
                      { ariaLevel: 4 },
                      n.a.createElement(f, null)
                    )
                  )
                ),
                n.a.createElement(
                  T,
                  { ariaLevel: 3 },
                  n.a.createElement(f, null)
                )
              )
            )
          )
        ),
        n.a.createElement(
          T,
          { ariaLevel: 1, isBranch: !0, itemLabel: 'Tree Branch' },
          n.a.createElement(f, { isBranch: !0, itemLabel: 'Tree Branch' }),
          n.a.createElement(
            B,
            null,
            n.a.createElement(T, { ariaLevel: 2 }, n.a.createElement(f, null))
          )
        ),
        n.a.createElement(
          T,
          { ariaLevel: 1 },
          n.a.createElement(f, {
            itemLabel:
              'Tree Item with a Really Really Long Name That Should Truncate'
          })
        )
      );
    };
    S.displayName = 'DeeplyNestedTree';
    var N = function() {
      return n.a.createElement(
        n.a.Fragment,
        null,
        n.a.createElement(
          T,
          { ariaLevel: 1, tabIndex: 0 },
          n.a.createElement(f, null)
        ),
        n.a.createElement(
          T,
          {
            ariaLevel: 1,
            isBranch: !0,
            isExpanded: !0,
            itemLabel: 'Tree Branch'
          },
          n.a.createElement(f, { isBranch: !0, itemLabel: 'Tree Branch' }),
          n.a.createElement(
            B,
            null,
            n.a.createElement(
              T,
              {
                ariaLevel: 2,
                itemLabel: 'Tree Item',
                metaTextLabel:
                  'Tree Item Metatext with a Really Really Long Name That Should Truncate'
              },
              n.a.createElement(f, {
                itemLabel: 'Tree Item',
                metaTextLabel:
                  'Tree Item Metatext with a Really Really Long Name That Should Truncate'
              })
            )
          )
        ),
        n.a.createElement(
          T,
          {
            ariaLevel: 1,
            isBranch: !0,
            itemLabel: 'Tree Branch',
            metaTextLabel: 'Tree Branch Metatext'
          },
          n.a.createElement(f, {
            isBranch: !0,
            itemLabel: 'Tree Branch',
            metaTextLabel: 'Tree Branch Metatext'
          }),
          n.a.createElement(
            B,
            null,
            n.a.createElement(T, { ariaLevel: 2 }, n.a.createElement(f, null))
          )
        ),
        n.a.createElement(
          T,
          { ariaLevel: 1 },
          n.a.createElement(f, {
            itemLabel:
              'Tree Item with a Really Really Long Name That Should Truncate'
          })
        )
      );
    };
    N.displayName = 'MetaTextTree';
    var k = function() {
      return n.a.createElement(
        n.a.Fragment,
        null,
        n.a.createElement(
          T,
          { ariaLevel: 1, tabIndex: 0 },
          n.a.createElement(f, { className: 'slds-is-hovered' })
        ),
        n.a.createElement(
          T,
          { ariaLevel: 1, isBranch: !0, itemLabel: 'Tree Branch' },
          n.a.createElement(f, { isBranch: !0, itemLabel: 'Tree Branch' }),
          n.a.createElement(
            B,
            null,
            n.a.createElement(T, { ariaLevel: 2 }, n.a.createElement(f, null))
          )
        ),
        n.a.createElement(
          T,
          { ariaLevel: 1, isBranch: !0, itemLabel: 'Tree Branch' },
          n.a.createElement(f, { isBranch: !0, itemLabel: 'Tree Branch' }),
          n.a.createElement(
            B,
            null,
            n.a.createElement(T, { ariaLevel: 2 }, n.a.createElement(f, null))
          )
        ),
        n.a.createElement(
          T,
          {
            ariaLevel: 1,
            itemLabel:
              'Tree Item with a Really Really Long Name That Should Truncate'
          },
          n.a.createElement(f, {
            itemLabel:
              'Tree Item with a Really Really Long Name That Should Truncate'
          })
        )
      );
    };
    k.displayName = 'TreeWithItemHovered';
    var j = function() {
      return n.a.createElement(
        n.a.Fragment,
        null,
        n.a.createElement(
          T,
          { ariaLevel: 1, tabIndex: 0 },
          n.a.createElement(f, null)
        ),
        n.a.createElement(
          T,
          { ariaLevel: 1, isBranch: !0, itemLabel: 'Tree Branch' },
          n.a.createElement(f, {
            isBranch: !0,
            isDisabled: !0,
            itemLabel: 'Tree Branch'
          }),
          n.a.createElement(
            B,
            null,
            n.a.createElement(T, { ariaLevel: 2 }, n.a.createElement(f, null))
          )
        ),
        n.a.createElement(
          T,
          { ariaLevel: 1, isBranch: !0, itemLabel: 'Tree Branch' },
          n.a.createElement(f, {
            isBranch: !0,
            isDisabled: !0,
            itemLabel: 'Tree Branch'
          }),
          n.a.createElement(
            B,
            null,
            n.a.createElement(T, { ariaLevel: 2 }, n.a.createElement(f, null))
          )
        ),
        n.a.createElement(
          T,
          {
            ariaLevel: 1,
            itemLabel:
              'Tree Item with a Really Really Long Name That Should Truncate'
          },
          n.a.createElement(f, {
            itemLabel:
              'Tree Item with a Really Really Long Name That Should Truncate'
          })
        )
      );
    };
    j.displayName = 'TreeWithItemDisabled';
    var R = a(8),
      M = a(16),
      D = a(12),
      F = n.a.createElement(
        w,
        null,
        n.a.createElement(y, { id: 'treeheading' }, 'Tree Group Header'),
        n.a.createElement(
          x,
          { headerId: 'treeheading' },
          n.a.createElement(I, null)
        )
      ),
      A = [
        {
          id: 'expanded',
          label: 'Expanded',
          element: n.a.createElement(
            w,
            null,
            n.a.createElement(y, { id: 'treeheading' }, 'Tree Group Header'),
            n.a.createElement(
              x,
              { headerId: 'treeheading' },
              n.a.createElement(_, null)
            )
          )
        },
        {
          id: 'selected',
          label: 'Item Selected',
          element: n.a.createElement(
            w,
            null,
            n.a.createElement(y, { id: 'treeheading' }, 'Tree Group Header'),
            n.a.createElement(
              x,
              { headerId: 'treeheading' },
              n.a.createElement(O, null)
            )
          )
        },
        {
          id: 'deep-nesting',
          label: 'Deeply nested branches',
          element: n.a.createElement(
            w,
            null,
            n.a.createElement(y, { id: 'treeheading' }, 'Tree Group Header'),
            n.a.createElement(
              x,
              { headerId: 'treeheading' },
              n.a.createElement(S, null)
            )
          )
        },
        {
          id: 'metatext',
          label: 'Metatext',
          element: n.a.createElement(
            w,
            null,
            n.a.createElement(y, { id: 'treeheading' }, 'Tree Group Header'),
            n.a.createElement(
              x,
              { headerId: 'treeheading' },
              n.a.createElement(N, null)
            )
          )
        },
        {
          id: 'item-hovered',
          label: 'Item Hovered',
          element: n.a.createElement(
            w,
            null,
            n.a.createElement(y, { id: 'treeheading' }, 'Tree Group Header'),
            n.a.createElement(
              x,
              { headerId: 'treeheading' },
              n.a.createElement(k, null)
            )
          )
        },
        {
          id: 'item-disabled',
          label: 'Item Disabled',
          element: n.a.createElement(
            w,
            null,
            n.a.createElement(y, { id: 'treeheading' }, 'Tree Group Header'),
            n.a.createElement(
              x,
              { headerId: 'treeheading' },
              n.a.createElement(j, null)
            )
          )
        }
      ],
      C = [
        {
          id: 'filterable-tree',
          label: 'Fliterable Tree',
          element: n.a.createElement(
            'div',
            null,
            n.a.createElement(
              'div',
              { className: 'slds-m-bottom_small' },
              n.a.createElement(
                R.b,
                {
                  hasHiddenLabel: !0,
                  hasLeftIcon: !0,
                  inputId: 'filter-id',
                  labelContent: 'Filter navigation items'
                },
                n.a.createElement(D.a, {
                  className:
                    'slds-icon slds-input__icon slds-input__icon_right slds-icon-text-default',
                  sprite: 'utility',
                  symbol: 'search'
                }),
                n.a.createElement(M.a, {
                  'aria-controls': 'tree-id',
                  id: 'filter-id',
                  placeholder: 'Quick Find',
                  type: 'search'
                })
              )
            ),
            n.a.createElement(
              w,
              null,
              n.a.createElement(y, { id: 'treeheading' }, 'Components'),
              n.a.createElement(
                x,
                { headerId: 'treeheading', id: 'tree-id' },
                n.a.createElement(
                  T,
                  {
                    ariaLevel: 1,
                    isBranch: !0,
                    itemLabel: 'lightning',
                    tabIndex: 0
                  },
                  n.a.createElement(f, {
                    isBranch: !0,
                    itemLabel: 'lightning'
                  }),
                  n.a.createElement(
                    B,
                    null,
                    n.a.createElement(
                      T,
                      { ariaLevel: 2, itemLabel: 'lightning-button' },
                      n.a.createElement(f, { itemLabel: 'lightning-button' })
                    ),
                    n.a.createElement(
                      T,
                      { ariaLevel: 2, itemLabel: 'lightning-checkbox-button' },
                      n.a.createElement(f, {
                        itemLabel: 'lightning-checkbox-button'
                      })
                    ),
                    n.a.createElement(
                      T,
                      { ariaLevel: 2, itemLabel: 'lightning-radio-button' },
                      n.a.createElement(f, {
                        itemLabel: 'lightning-radio-button'
                      })
                    ),
                    n.a.createElement(
                      T,
                      {
                        ariaLevel: 2,
                        itemLabel: 'lightning-toggle',
                        metaTextLabel: 'vaiant a checkbox button'
                      },
                      n.a.createElement(f, {
                        itemLabel: 'lightning-toggle',
                        metaTextLabel: 'variant a checkbox button'
                      })
                    )
                  )
                ),
                n.a.createElement(
                  T,
                  { ariaLevel: 1, isBranch: !0, itemLabel: 'ui' },
                  n.a.createElement(f, { isBranch: !0, itemLabel: 'ui' }),
                  n.a.createElement(
                    B,
                    null,
                    n.a.createElement(
                      T,
                      { ariaLevel: 2, itemLabel: 'ui:button' },
                      n.a.createElement(f, { itemLabel: 'ui:button' })
                    ),
                    n.a.createElement(
                      T,
                      { ariaLevel: 2, itemLabel: 'ui:checkboxButton' },
                      n.a.createElement(f, { itemLabel: 'ui:checkboxButton' })
                    ),
                    n.a.createElement(
                      T,
                      { ariaLevel: 2, itemLabel: 'ui:radioButton' },
                      n.a.createElement(f, { itemLabel: 'ui:radioButton' })
                    )
                  )
                ),
                n.a.createElement(
                  T,
                  {
                    ariaLevel: 1,
                    isBranch: !0,
                    itemLabel: 'lightningcommunities',
                    metaTextLabel: 'Community components'
                  },
                  n.a.createElement(f, {
                    isBranch: !0,
                    itemLabel: 'lightningcommunities',
                    metaTextLabel: 'Community components'
                  }),
                  n.a.createElement(
                    B,
                    null,
                    n.a.createElement(
                      T,
                      { ariaLevel: 2 },
                      n.a.createElement(f, null)
                    )
                  )
                )
              )
            )
          )
        },
        {
          id: 'filterabled-tree',
          label: 'Flitered Tree',
          element: n.a.createElement(
            'div',
            null,
            n.a.createElement(
              'div',
              { className: 'slds-m-bottom_small' },
              n.a.createElement(
                R.b,
                {
                  hasHiddenLabel: !0,
                  hasLeftIcon: !0,
                  inputId: 'filter-id',
                  labelContent: 'Filter navigation items'
                },
                n.a.createElement(D.a, {
                  className:
                    'slds-icon slds-input__icon slds-input__icon_right slds-icon-text-default',
                  sprite: 'utility',
                  symbol: 'search'
                }),
                n.a.createElement(M.a, {
                  'aria-controls': 'tree-id',
                  defaultValue: 'butto',
                  id: 'filter-id',
                  placeholder: 'Quick Find',
                  type: 'search'
                })
              )
            ),
            n.a.createElement(
              w,
              null,
              n.a.createElement(y, { id: 'treeheading' }, 'Components'),
              n.a.createElement(
                x,
                { headerId: 'treeheading', id: 'tree-id' },
                n.a.createElement(
                  T,
                  {
                    ariaLevel: 1,
                    isBranch: !0,
                    isExpanded: !0,
                    itemLabel: 'lightning',
                    tabIndex: 0
                  },
                  n.a.createElement(f, {
                    isBranch: !0,
                    itemLabel: 'lightning'
                  }),
                  n.a.createElement(
                    B,
                    null,
                    n.a.createElement(
                      T,
                      { ariaLevel: 2, itemLabel: 'lightning-button' },
                      n.a.createElement(f, {
                        itemLabel: 'lightning-button',
                        termToMark: 'butto'
                      })
                    ),
                    n.a.createElement(
                      T,
                      { ariaLevel: 2, itemLabel: 'lightning-checkbox-button' },
                      n.a.createElement(f, {
                        itemLabel: 'lightning-checkbox-button',
                        termToMark: 'butto'
                      })
                    ),
                    n.a.createElement(
                      T,
                      { ariaLevel: 2, itemLabel: 'lightning-radio-button' },
                      n.a.createElement(f, {
                        itemLabel: 'lightning-radio-button',
                        termToMark: 'butto'
                      })
                    ),
                    n.a.createElement(
                      T,
                      {
                        ariaLevel: 2,
                        itemLabel: 'lightning-toggle',
                        metaTextLabel: 'vaiant a checkbox button'
                      },
                      n.a.createElement(f, {
                        itemLabel: 'lightning-toggle',
                        metaTextLabel: 'variant a checkbox button',
                        termToMark: 'butto'
                      })
                    )
                  )
                ),
                n.a.createElement(
                  T,
                  {
                    ariaLevel: 1,
                    isBranch: !0,
                    isExpanded: !0,
                    itemLabel: 'ui'
                  },
                  n.a.createElement(f, { isBranch: !0, itemLabel: 'ui' }),
                  n.a.createElement(
                    B,
                    null,
                    n.a.createElement(
                      T,
                      { ariaLevel: 2, itemLabel: 'ui:button' },
                      n.a.createElement(f, {
                        itemLabel: 'ui:button',
                        termToMark: 'butto'
                      })
                    ),
                    n.a.createElement(
                      T,
                      { ariaLevel: 2, itemLabel: 'ui:checkboxButton' },
                      n.a.createElement(f, {
                        itemLabel: 'ui:checkboxButton',
                        termToMark: 'butto'
                      })
                    ),
                    n.a.createElement(
                      T,
                      { ariaLevel: 2, itemLabel: 'ui:radioButton' },
                      n.a.createElement(f, {
                        itemLabel: 'ui:radioButton',
                        termToMark: 'butto'
                      })
                    )
                  )
                )
              )
            )
          )
        }
      ],
      H = r.c.code,
      P = r.c.h2,
      G = r.c.h3,
      W = r.c.h4,
      q = r.c.li,
      J = r.c.p,
      U = r.c.strong,
      K = r.c.ul,
      Q = function() {
        return Object(l.createElement)(
          r.b,
          {},
          Object(l.createElement)(
            'div',
            { className: 'doc lead' },
            'A tree is visualization of a structure hierarchy. A branch can be expanded or collapsed.'
          ),
          Object(l.createElement)(
            i.a,
            { exampleOnly: !0 },
            Object(u.e)(A, 'selected')
          ),
          P({ id: 'About-Trees' }, 'About Trees'),
          J(
            {},
            'A tree is composed of two core elements ',
            H({}, '.slds-tree'),
            ' and ',
            H({}, '.slds-tree__item'),
            '. The tree wrapper, the outer most parent ',
            H({}, 'ul'),
            ', will receive the class ',
            H({}, '.slds-tree'),
            '. This class will be used for scoping a tree, which allows for particular styling based on states in which the tree may enter.'
          ),
          J(
            {},
            'A tree will need helper classes added and removed to help structure the layout. Each child node list item needs an ',
            H({}, 'aria-level'),
            ' attribute with its value being the number of levels deep it is nested to indicate the distinct grouping is nested within.'
          ),
          J(
            {},
            'Whenever the tree has a nested group, the nested ',
            H({}, 'ul'),
            ' element should receive the ARIA role ',
            H({}, 'group'),
            '. The parent ',
            H({}, 'li[role="treeitem"]'),
            ' requires the ',
            H({}, 'aria-expanded'),
            ' attribute to be applied. Toggling ',
            H({}, 'aria-expanded'),
            ' to ',
            H({}, 'true'),
            ' or ',
            H({}, 'false'),
            ' will show or hide the child ',
            H({}, 'group'),
            '. The parent ',
            H({}, 'li[role="treeitem"]'),
            ' also requires ',
            H({}, 'aria-label'),
            ' to be applied and set to the tree items text value, this ensures child groups are announced to screen readers as you interact with that branch.'
          ),
          J(
            {},
            'Whenever a ',
            H({}, 'role="treeitem"'),
            ' node is selected, ',
            H({}, 'aria-selected="true"'),
            ' needs to be applied to display the selected styles.'
          ),
          J(
            {},
            'In our example, we are using a chevron icon on tree branches to help indicate to the user what action clicking the tree branch will perform, whether opening or closing it. The effect of rotating the icon 90° to indicate open/closed status is achieved by applying the ARIA attribute ',
            H({}, 'aria-expanded'),
            ' to the ',
            H({}, 'treeitem'),
            '. ',
            H({}, 'aria-hidden="true"'),
            ' and ',
            H({}, 'tabindex="-1"'),
            ' must be placed on the toggle button.'
          ),
          J(
            {},
            'Tree items can only contain text values, no actionable elements, apart from our toggle button, can be placed inside a Tree item.'
          ),
          J(
            {},
            'Trees can only contain a single focusable tree item and ',
            H({}, 'tabindex="0"'),
            ' must be placed on the ',
            H({}, 'li[role="treeitem]'),
            ' that takes current focus. Every other actionable and non-actionable element must be made unfocused by adding ',
            H({}, 'tabindex="-1"'),
            ' or removing ',
            H({}, 'tabindex'),
            ', respectively.'
          ),
          J(
            {},
            'When implementing collapsed rows, we suggest showing the content DOM nodes within each collapsed row only once the row is expanded for performance reasons. You can additionally toggle the hidden row with ',
            H({}, 'slds-show'),
            ' and ',
            H({}, 'slds-hide'),
            ' if you intend to keep all of the content in the DOM.'
          ),
          J(
            {},
            'You can add metatext (see: metatext state) to any tree item, which adds a smaller, second line of text below tree node labels to provide supplemental information (to provide users with added context, aid with identification/disambiguation). To add metatext, include an additional ',
            H({}, 'span'),
            ' within the treeitem with the class ',
            H({}, 'slds-tree__item-meta'),
            ". We've added an additional parent span around the label/title and metatext to ensure the spacing works properly when metatext is included. If adding metatext to a tree item with child nodes (i.e. a branch), be sure to update the ",
            H({}, 'aria-label'),
            ' to include the metatext. For example: ',
            H({}, 'aria-label="Tree Branch Label: Tree Branch Metatext"')
          ),
          G({ id: 'Accessibility' }, 'Accessibility'),
          W({ id: 'Markup' }, 'Markup'),
          K(
            {},
            q({}, H({}, 'role="tree"'), ' is placed on the ', H({}, 'ul')),
            q(
              {},
              H({}, 'role="tree"'),
              ' element also has ',
              H({}, 'aria-labelledby'),
              ' applied which points to the trees heading element'
            ),
            q(
              {},
              H({}, 'role="treeitem"'),
              ' is placed on the tree ',
              H({}, 'li'),
              ' elements'
            ),
            q(
              {},
              H({}, 'aria-level'),
              ' is applied to ',
              H({}, 'treeitem'),
              ' elements to indicate their nesting depth'
            ),
            q(
              {},
              H({}, 'aria-expanded'),
              ' is applied to ',
              H({}, 'treeitem'),
              ' elements that have child tree nodes. It is set to ',
              H({}, 'true'),
              ' or ',
              H({}, 'false')
            ),
            q(
              {},
              H({}, 'aria-label'),
              ' is applied to ',
              H({}, 'treeitem'),
              ' elements that have child tree nodes. Be sure to add any metatext to the label, if applicable'
            ),
            q(
              {},
              H({}, 'aria-selected="true"'),
              ' is applied to ',
              H({}, 'treeitem'),
              ' elements that are selected'
            ),
            q(
              {},
              H({}, 'tabindex="0"'),
              ' is applied to the ',
              H({}, 'treeitem'),
              ' that is in focus'
            ),
            q(
              {},
              H({}, 'role="group"'),
              ' is applied to child tree node containers, ',
              H({}, 'ul')
            )
          ),
          W({ id: 'Interactions' }, 'Interactions'),
          K(
            {},
            q({}, 'Only a single action per tree item'),
            q({}, 'Only 1 focused item per Tree'),
            q(
              {},
              'Actionable elements in a tree item are mouse only and should not be focusable, they should be presentational and should be hidden from screen readers and keyboard users'
            ),
            q(
              {},
              'Focus is placed on the entire ',
              H({}, 'li[role="treeitem"]'),
              '. If that item has child items, focus must include those as well.'
            )
          ),
          W({ id: 'Keyboard-Navigation' }, 'Keyboard Navigation'),
          K(
            {},
            q({}, 'Clicking on a tree item creates a selection'),
            q(
              {},
              H({}, 'Up'),
              ' and ',
              H({}, 'Down'),
              ' arrow keys move ',
              H({}, ':focus'),
              ' ',
              U({}, 'and'),
              ' ',
              H({}, 'aria-selected'),
              '. Previous selections are cleared'
            ),
            q({}, H({}, 'Right'), ' arrow key to expand collapsed node.'),
            q({}, H({}, 'Left'), ' arrow key to collapse expanded node.'),
            q(
              {},
              H({}, 'Left'),
              ' arrow key on an end child node, collapses the group and moves ',
              H({}, ':focus'),
              ' and ',
              H({}, 'aria-selected'),
              ' to the parent ',
              H({}, 'treeitem')
            ),
            q(
              {},
              H({}, 'Enter'),
              ' performs the default action on an end tree item (if there is one).'
            ),
            q(
              {},
              H({}, 'Ctrl'),
              ' + ',
              H({}, 'Up'),
              ' and ',
              H({}, 'Ctrl'),
              ' + ',
              H({}, 'Down'),
              ' moves focus. Current selection is maintained'
            ),
            q(
              {},
              H({}, 'Ctrl'),
              ' + ',
              H({}, 'Space'),
              ' will add or remove the currently focused tree item to the selection'
            )
          ),
          G({ id: 'Filtering' }, 'Filtering'),
          J(
            {},
            'When filtering a tree you should couple the tree with a search input. The search input will control the contents of the tree and as such should the attribute ',
            H({}, 'aria-controls'),
            ' added to it. The value of the ',
            H({}, 'aria-controls'),
            ' attribute should be the ID of the tree it controls. The search input should also be of type ',
            H({}, 'search'),
            '.'
          ),
          J(
            {},
            'Upon typing in the input the tree should start filtering immediately, expanding all nodes that have matching tree items to display, and highlighting the search term in each of the matching items. The highlight is provided by wrapping the term in ',
            H({}, '<mark />'),
            ' elements.'
          ),
          P({ id: 'Base' }, 'Base'),
          Object(l.createElement)(i.a, null, F),
          G({ id: 'States' }, 'States'),
          W({ id: 'Expanded-Item' }, 'Expanded Item'),
          Object(l.createElement)(i.a, null, Object(u.e)(A, 'expanded')),
          W({ id: 'Item-Selected' }, 'Item Selected'),
          Object(l.createElement)(i.a, null, Object(u.e)(A, 'selected')),
          W({ id: 'Deeply-Nested-Branches' }, 'Deeply Nested Branches'),
          Object(l.createElement)(i.a, null, Object(u.e)(A, 'deep-nesting')),
          W({ id: 'Item-with-Metatext' }, 'Item with Metatext'),
          Object(l.createElement)(i.a, null, Object(u.e)(A, 'metatext')),
          W({ id: 'Item-Hovered' }, 'Item Hovered'),
          Object(l.createElement)(i.a, null, Object(u.e)(A, 'item-hovered')),
          W({ id: 'Items-Disabled' }, 'Items Disabled'),
          Object(l.createElement)(i.a, null, Object(u.e)(A, 'item-disabled')),
          P({ id: 'Examples' }, 'Examples'),
          G({ id: 'Filterable-Tree' }, 'Filterable Tree'),
          Object(l.createElement)(i.a, null, Object(u.e)(C, 'filterable-tree')),
          G({ id: 'Filtered-Tree' }, 'Filtered Tree'),
          Object(l.createElement)(i.a, null, Object(u.e)(C, 'filterabled-tree'))
        );
      },
      Y = function() {
        return Object(r.a)(Q());
      };
  }
});
