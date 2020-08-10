var SLDS = 'object' == typeof SLDS ? SLDS : {};
SLDS['__internal/chunked/docs/ui/components/buttons/docs.mdx.js'] = (function(
  e
) {
  function t(t) {
    for (
      var s, o, c = t[0], i = t[1], r = t[2], d = 0, b = [];
      d < c.length;
      d++
    )
      (o = c[d]),
        Object.prototype.hasOwnProperty.call(a, o) && a[o] && b.push(a[o][0]),
        (a[o] = 0);
    for (s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
    for (u && u(t); b.length; ) b.shift()();
    return l.push.apply(l, r || []), n();
  }
  function n() {
    for (var e, t = 0; t < l.length; t++) {
      for (var n = l[t], s = !0, c = 1; c < n.length; c++) {
        var i = n[c];
        0 !== a[i] && (s = !1);
      }
      s && (l.splice(t--, 1), (e = o((o.s = n[0]))));
    }
    return e;
  }
  var s = {},
    a = { 13: 0 },
    l = [];
  function o(t) {
    if (s[t]) return s[t].exports;
    var n = (s[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.m = e),
    (o.c = s),
    (o.d = function(e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
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
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var s in e)
          o.d(
            n,
            s,
            function(t) {
              return e[t];
            }.bind(null, s)
          );
      return n;
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
  var c = (this.webpackJsonpSLDS___internal_chunked_docs =
      this.webpackJsonpSLDS___internal_chunked_docs || []),
    i = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var r = 0; r < c.length; r++) t(c[r]);
  var u = i;
  return l.push([233, 0]), n();
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
  233: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getElement', function() {
        return I;
      }),
      n.d(t, 'getContents', function() {
        return L;
      });
    var s = n(0),
      a = n.n(s),
      l = n(4),
      o = n(1),
      c = (n(23), n(15)),
      i = n(13),
      r = n(10),
      u = a.a.createElement(
        i.a,
        { isNeutral: !0 },
        a.a.createElement(r.a, {
          className: 'slds-button__icon slds-button__icon_left',
          sprite: 'utility',
          symbol: 'download'
        }),
        'Button Neutral'
      ),
      d = (i.a,
      r.a,
      [
        {
          id: 'with-icon-right',
          label: 'With right icon',
          element: a.a.createElement(
            i.a,
            { isNeutral: !0 },
            'Button Neutral',
            a.a.createElement(r.a, {
              className: 'slds-button__icon slds-button__icon_right',
              sprite: 'utility',
              symbol: 'download'
            })
          )
        }
      ]),
      b = n(76),
      h = n(3),
      m = n.n(h),
      p = n(5),
      f = n.n(p),
      g = function(e) {
        return a.a.createElement(
          'span',
          { className: 'slds-text-not-pressed' },
          a.a.createElement(r.a, {
            className:
              'slds-button__icon slds-button__icon_small slds-button__icon_left',
            sprite: 'utility',
            symbol: 'add'
          }),
          e.children
        );
      };
    g.propTypes = { children: m.a.string.isRequired };
    var O = function(e) {
      return a.a.createElement(
        'span',
        { className: 'slds-text-pressed' },
        a.a.createElement(r.a, {
          className:
            'slds-button__icon slds-button__icon_small slds-button__icon_left',
          sprite: 'utility',
          symbol: 'check'
        }),
        e.children
      );
    };
    O.propTypes = { children: m.a.string.isRequired };
    var v = function(e) {
      var t = e.isDisabled,
        n = e.isPressed;
      return a.a.createElement(
        i.a,
        {
          isNeutral: !0,
          className: f()('slds-button_dual-stateful', { 'slds-is-pressed': n }),
          disabled: t,
          'aria-live': 'assertive'
        },
        a.a.createElement(g, null, 'Follow'),
        a.a.createElement(O, null, 'Following')
      );
    };
    v.propTypes = { isDisabled: m.a.bool, isPressed: m.a.bool };
    var j = a.a.createElement(
        v,
        null,
        a.a.createElement(g, null, 'Follow'),
        a.a.createElement(O, null, 'Following')
      ),
      y = [
        {
          id: 'pressed',
          label: 'pressed',
          element: a.a.createElement(
            v,
            { isPressed: !0 },
            a.a.createElement(g, null, 'Follow'),
            a.a.createElement(O, null, 'Following')
          )
        }
      ],
      w = n(2),
      E = n(33),
      _ = l.c.a,
      k = l.c.code,
      S = l.c.em,
      T = l.c.h2,
      x = l.c.h3,
      B = l.c.li,
      D = l.c.p,
      N = l.c.strong,
      F = l.c.ul,
      I = function() {
        return Object(s.createElement)(
          l.b,
          {},
          Object(s.createElement)(
            'div',
            { className: 'doc lead' },
            'Buttons are clickable items used to perform an action.'
          ),
          Object(s.createElement)(
            o.a,
            null,
            Object(s.createElement)(
              a.a.Fragment,
              null,
              i.b,
              Object(w.e)(i.c, 'neutral'),
              Object(w.e)(i.c, 'brand'),
              Object(w.e)(i.c, 'outline-brand'),
              Object(w.e)(i.c, 'destructive'),
              Object(w.e)(i.c, 'text-destructive'),
              Object(w.e)(i.c, 'success')
            )
          ),
          T({ id: 'About-Buttons' }, 'About Buttons'),
          D(
            {},
            'Buttons should be used in situations where users might need to:'
          ),
          F(
            {},
            B({}, 'submit a form'),
            B({}, 'begin a new task'),
            B({}, 'trigger a new UI element to appear on the page'),
            B({}, 'specify a new or next step in a process')
          ),
          x({ id: 'Button-vs.-Link' }, 'Button vs. Link'),
          D(
            {},
            'The HTML elements for buttons and links describe a very specific type of action that is going to be taken when they are used. It is important you know when to use which, as the distinction matters:'
          ),
          F(
            {},
            B(
              {},
              'Use a ',
              N({}, 'link'),
              ' when you’re ',
              N({}, 'navigating to another place'),
              ', such as: a "view all" page, "Jane Chen" profile, a page "skip link" etc.'
            ),
            B(
              {},
              'Use ',
              N({}, 'buttons'),
              ' when you are ',
              N({}, 'performing an action'),
              ', such as: "submit," "merge," "create new," "upload," etc.'
            ),
            B({}, 'An action is almost ', N({}, 'always'), ' on the same page')
          ),
          x({ id: 'Accessibility' }, 'Accessibility'),
          D(
            {},
            'If pressing a Button results in a new URL, or the resultant UI makes sense as "a new browser tab", that is a link ',
            k({}, '<a>'),
            '. Everything else is a ',
            k({}, '<button>'),
            '.'
          ),
          D(
            {},
            "The distinction is important to screen reader users to know what's going to happen next. Will I navigate somewhere or will something happen on the page? So it's important to choose the right HTML element for the job."
          ),
          D(
            {},
            'If you absolutely cannot use a ',
            k({}, '<button />'),
            ' element for an action and instead need to use an ',
            k({}, '<a />'),
            ', you are required to do 2 things:'
          ),
          F(
            {},
            B(
              {},
              'Add ',
              k({}, 'role="button"'),
              ' attribute to the ',
              k({}, '<a />'),
              ' to make the element announce itself as a ',
              k({}, 'button'),
              ' element.'
            ),
            B(
              {},
              'Add a JavaScript event handler for when the user presses the space key. This is because a ',
              k({}, 'button'),
              ' element will respond by default to both the enter and space keys being pressed, but an ',
              k({}, '<a />'),
              ' element will not.'
            )
          ),
          D(
            {},
            'Finally, color alone does not suffice when conveying the meaning of buttons. Ensure that the text you use in the button matches the meaning you are trying to convey via color. For example, if you use the destructive button to point out a potential warning, make sure the text communicates the same message.'
          ),
          Object(s.createElement)(
            o.a,
            null,
            Object(s.createElement)(
              a.a.Fragment,
              null,
              Object(w.e)(i.c, 'base-link'),
              Object(w.e)(i.c, 'neutral-link'),
              Object(w.e)(i.c, 'brand-link'),
              Object(w.e)(i.c, 'outline-brand-link'),
              Object(w.e)(i.c, 'destructive-link'),
              Object(w.e)(i.c, 'text-destructive-link'),
              Object(w.e)(i.c, 'success-link')
            )
          ),
          x(
            { id: 'Links-that-look-like-Buttons' },
            'Links that look like Buttons'
          ),
          D(
            {},
            'Use these with caution - dictation software users may not be able to properly identify these actions, as they can say "show buttons" and these won\'t highlight since they are semantically links, even though they may look like buttons.'
          ),
          x({ id: 'Mobile' }, 'Mobile'),
          Object(s.createElement)(E.a, {
            patternSpecificText:
              'buttons will have an increased size to accommodate tapping with a finger instead of the more precise mouse cursor'
          }),
          Object(s.createElement)(
            o.a,
            { frameOnly: !0 },
            Object(s.createElement)(
              a.a.Fragment,
              null,
              Object(w.e)(i.c, 'base-link'),
              Object(w.e)(i.c, 'neutral-link'),
              Object(w.e)(i.c, 'brand-link'),
              Object(w.e)(i.c, 'outline-brand-link'),
              Object(w.e)(i.c, 'destructive-link'),
              Object(w.e)(i.c, 'text-destructive-link'),
              Object(w.e)(i.c, 'success-link')
            )
          ),
          T({ id: 'Base' }, 'Base'),
          D(
            {},
            'The base ',
            k({}, 'slds-button'),
            ' looks like a plain text link. It removes all the styling of the native button.'
          ),
          D(
            {},
            'The base and neutral buttons are used most frequently and can be used multiple times per feature. Use these buttons when the actions are of secondary importance to the content surrounding it, such as in the actions ribbon in a page header.'
          ),
          Object(s.createElement)(o.a, { toggleCode: !1 }, i.b),
          T({ id: 'Variations' }, 'Variations'),
          x({ id: 'Neutral' }, 'Neutral'),
          D(
            {},
            'Add the ',
            k({}, 'slds-button_neutral'),
            ' class to create a neutral button.'
          ),
          Object(s.createElement)(
            o.a,
            { toggleCode: !1 },
            Object(w.e)(i.c, 'neutral')
          ),
          x({ id: 'Brand' }, 'Brand'),
          D(
            {},
            'To create the brand button, add the ',
            k({}, 'slds-button_brand'),
            ' class to the ',
            k({}, 'slds-button'),
            ' class. The brand color tokens can be overridden for theme specific usage.'
          ),
          D(
            {},
            'The Brand button generally should only be used once per component screen at any one time. It is used for when there is an action that is clearly more important than the other actions and you need to draw attention to it. An example is when you have a “Save” and “Cancel” button. The “Save” is the primary action.'
          ),
          D(
            {},
            'Not all features need to have primary actions, sometimes the actions are secondary to the content and are all of equal importance.'
          ),
          Object(s.createElement)(
            o.a,
            { toggleCode: !1 },
            Object(w.e)(i.c, 'brand')
          ),
          x({ id: 'Outline-Brand' }, 'Outline Brand'),
          D(
            {},
            'To create the outline brand button, add the ',
            k({}, 'slds-button_outline-brand'),
            ' class to the ',
            k({}, 'slds-button'),
            ' class. The brand color tokens can be overridden for theme specific usage.'
          ),
          Object(s.createElement)(
            o.a,
            { toggleCode: !1 },
            Object(w.e)(i.c, 'outline-brand')
          ),
          x({ id: 'Inverse' }, 'Inverse'),
          D(
            {},
            'Use the inverse button on dark backgrounds. Add the ',
            k({}, 'slds-button_inverse'),
            ' class to the ',
            k({}, 'slds-button'),
            ' class.'
          ),
          Object(s.createElement)(
            o.a,
            { toggleCode: !1 },
            Object(w.e)(i.c, 'inverse')
          ),
          x({ id: 'Destructive' }, 'Destructive'),
          D(
            {},
            'To create the destructive button, add the ',
            k({}, 'slds-button_destructive'),
            ' class to the ',
            k({}, 'slds-button'),
            ' class.'
          ),
          D(
            {},
            'This button is used to indicate a destructive action to the user, like permanently erasing data.'
          ),
          Object(s.createElement)(
            o.a,
            { toggleCode: !1 },
            Object(w.e)(i.c, 'destructive')
          ),
          x({ id: 'Text-Destructive' }, 'Text Destructive'),
          D(
            {},
            'To create the text destructive button, add the ',
            k({}, 'slds-button_text-destructive'),
            ' class to the ',
            k({}, 'slds-button'),
            ' class.'
          ),
          D(
            {},
            'This button is used to indicate a destructive action to the user, like permanently erasing data. Use this version when the ',
            _({ href: '#Destructive' }, 'Destructive'),
            ' button would be too distracting to the experience.'
          ),
          Object(s.createElement)(
            o.a,
            { toggleCode: !1 },
            Object(w.e)(i.c, 'text-destructive')
          ),
          x({ id: 'Success' }, 'Success'),
          D(
            {},
            'To create the success button, add the ',
            k({}, 'slds-button_success'),
            ' class to the ',
            k({}, 'slds-button'),
            ' class.'
          ),
          Object(s.createElement)(
            o.a,
            { toggleCode: !1 },
            Object(w.e)(i.c, 'success')
          ),
          T({ id: 'Disabled' }, 'Disabled'),
          D(
            {},
            'Use a disabled attribute when a button can’t be clicked. To create a disabled button, append the ',
            k({}, 'disabled'),
            ' attribute to the button.'
          ),
          Object(s.createElement)(
            o.a,
            null,
            Object(s.createElement)(
              a.a.Fragment,
              null,
              Object(w.e)(i.d, 'disabled'),
              Object(w.e)(i.d, 'neutral-disabled'),
              Object(w.e)(i.d, 'brand-disabled'),
              Object(w.e)(i.d, 'outline-brand-disabled'),
              Object(w.e)(i.d, 'destructive-disabled'),
              Object(w.e)(i.d, 'text-destructive-disabled'),
              Object(w.e)(i.d, 'success-disabled')
            )
          ),
          T({ id: 'With-Icons' }, 'With Icons'),
          D(
            {},
            'The SVG, element, or icon inside the button receives the ',
            k({}, 'slds-button__icon'),
            ' class. You can position the icon on the left or the right using ',
            k({}, 'slds-button__icon_left'),
            ' or ',
            k({}, 'slds-button__icon_right'),
            ', which applies the correct amount of space between the icon and the text.'
          ),
          x({ id: 'Left-Icon' }, 'Left Icon'),
          Object(s.createElement)(o.a, null, u),
          Object(s.createElement)(E.b, {
            docsLink: '#Mobile',
            header: 'Mobile context changes',
            elementName: 'button icons'
          }),
          Object(s.createElement)(o.a, { frameOnly: !0 }, u),
          x({ id: 'Right-Icon' }, 'Right Icon'),
          Object(s.createElement)(o.a, null, Object(w.e)(d, 'with-icon-right')),
          T({ id: 'Stateful' }, 'Stateful'),
          D(
            {},
            'Stateful buttons have three states: not selected (default), selected and focused, and selected with hover state.'
          ),
          D(
            {},
            'The stateful button requires the ',
            k({}, 'slds-button_stateful'),
            ' class and the ',
            k({}, 'slds-button_neutral'),
            ' class in addition to the ',
            k({}, 'slds-button'),
            ' class. Stateful buttons are only used with the neutral variation.'
          ),
          D(
            {},
            'The button contains three spans with classes that hide or show the content of the spans based on the class on the button. Each span contains text and a corresponding icon. The SVG will have the ',
            k({}, 'slds-button__icon_left'),
            ' class setting the icon on the left.'
          ),
          Object(s.createElement)(
            c.a,
            { type: 'a11y', header: 'Accessibility Requirement' },
            Object(s.createElement)(
              'p',
              null,
              'Be sure to include the attribute ',
              Object(s.createElement)('code', null, 'aria-live="assertive"'),
              ' on the button. The ',
              Object(s.createElement)('code', null, 'aria-live="assertive"'),
              ' attribute means the value of the ',
              Object(s.createElement)('code', null, '<span>'),
              ' inside the button will be spoken whenever it changes.'
            )
          ),
          Object(s.createElement)(
            c.a,
            { type: 'note', header: 'JavaScript Requirement' },
            Object(s.createElement)(
              'p',
              null,
              'When the user clicks the button, use JavaScript to toggle the class from',
              ' ',
              Object(s.createElement)('code', null, 'slds-not-selected'),
              ' to ',
              Object(s.createElement)('code', null, 'slds-is-selected-clicked'),
              '. As soon as focus leaves the button, use JavaScript to toggle the class from',
              ' ',
              Object(s.createElement)('code', null, 'slds-is-selected-clicked'),
              ' to ',
              Object(s.createElement)('code', null, 'slds-is-selected'),
              '.'
            )
          ),
          x({ id: 'Not-Selected' }, 'Not Selected'),
          D(
            {},
            'Stateful button uses the class ',
            k({}, 'slds-not-selected'),
            ' in its initial state.'
          ),
          Object(s.createElement)(o.a, null, b.b),
          x({ id: 'Selected-and-Focused' }, 'Selected and Focused'),
          D(
            {},
            'When selected and still focused, stateful button uses the class ',
            k({}, 'slds-is-selected-clicked'),
            '.'
          ),
          Object(s.createElement)(
            o.a,
            null,
            Object(w.e)(b.c, 'selected-clicked')
          ),
          x({ id: 'Selected-with-Hover-State' }, 'Selected with Hover State'),
          D(
            {},
            'Once selected and blurred (user moved focus away from the button), stateful button uses the class ',
            k({}, 'slds-is-selected'),
            '.'
          ),
          Object(s.createElement)(o.a, null, Object(w.e)(b.c, 'selected')),
          T({ id: 'Dual-Stateful-Button' }, 'Dual Stateful Button'),
          D(
            {},
            'Dual Stateful buttons have two states, similar to a ',
            _(
              {
                href: '/accessibility/patterns/togglebutton/#site-main-content'
              },
              'Toggle Button'
            ),
            ': not pressed (default), and pressed.'
          ),
          D(
            {},
            'The Dual Stateful button requires the ',
            k({}, 'slds-button_dual-stateful'),
            ' class, along with a combination of the ',
            k({}, 'slds-button'),
            ' and ',
            k({}, 'slds-button_neutral'),
            ' classes. While Dual Stateful buttons are only used with the neutral Button variation, the pressed state changes the button ',
            S({}, 'style'),
            ' to that of the Brand variation.'
          ),
          D(
            {},
            'The button contains two spans. Each span contains display text and a corresponding SVG icon with the class ',
            k({}, 'slds-button__icon-left'),
            ' and has classes that hide or show the contents. By default, the first span with the class ',
            k({}, 'slds-text-is-not-pressed'),
            ' is displayed; when the class ',
            k({}, 'slds-is-pressed'),
            ' is applied to the parent button, the span with the class ',
            k({}, 'slds-text-is-pressed'),
            ' is displayed.'
          ),
          Object(s.createElement)(
            c.a,
            { type: 'a11y', header: 'Accessibility Requirement' },
            Object(s.createElement)(
              'p',
              null,
              'Be sure to include the attribute ',
              Object(s.createElement)('code', null, 'aria-live="assertive"'),
              ' on the button. The ',
              Object(s.createElement)('code', null, 'aria-live="assertive"'),
              ' attribute means the value of the ',
              Object(s.createElement)('code', null, '<span>'),
              ' inside the button will be spoken whenever it changes.'
            )
          ),
          Object(s.createElement)(
            c.a,
            { type: 'note', header: 'JavaScript Requirement' },
            Object(s.createElement)(
              'p',
              null,
              'When the user clicks the button, use JavaScript to toggle the',
              ' ',
              Object(s.createElement)('code', null, 'slds-is-pressed'),
              ' class on or off, depending on the previous state. Remember, only the pressed state requires this class.'
            )
          ),
          x({ id: 'Not-Pressed' }, 'Not Pressed'),
          Object(s.createElement)(o.a, null, j),
          x({ id: 'Pressed' }, 'Pressed'),
          D(
            {},
            'To display the pressed state, use the class ',
            k({}, 'slds-is-pressed'),
            ' on the ',
            k({}, '<button>'),
            ' element.'
          ),
          Object(s.createElement)(o.a, null, Object(w.e)(y, 'pressed')),
          T({ id: 'Sizing' }, 'Sizing'),
          x({ id: 'Stretch' }, 'Stretch'),
          D(
            {},
            "To allow the button's width to take up the entire width available, apply the ",
            k({}, 'slds-button_stretch'),
            ' class to the button.'
          ),
          Object(s.createElement)(
            o.a,
            { toggleCode: !1 },
            Object(w.e)(i.c, 'stretch')
          ),
          x({ id: 'Full-Width' }, 'Full Width'),
          D({}, 'Creates a full width button with styling resets'),
          Object(s.createElement)(
            o.a,
            { toggleCode: !1 },
            Object(w.e)(i.c, 'full-width')
          )
        );
      },
      L = function() {
        return Object(l.a)(I());
      };
  }
});
