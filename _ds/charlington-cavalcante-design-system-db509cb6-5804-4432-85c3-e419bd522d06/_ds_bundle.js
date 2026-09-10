/* @ds-bundle: {"format":4,"namespace":"CharlingtonCavalcanteDesignSystem_db509c","components":[{"name":"ArrowLink","sourcePath":"components/core/ArrowLink.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"DashList","sourcePath":"components/core/DashList.jsx"},{"name":"ExplorePill","sourcePath":"components/core/ExplorePill.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Accordion","sourcePath":"components/disclosure/Accordion.jsx"},{"name":"ArticleRow","sourcePath":"components/disclosure/ArticleRow.jsx"},{"name":"ChoiceBlock","sourcePath":"components/disclosure/ChoiceBlock.jsx"},{"name":"Modal","sourcePath":"components/disclosure/Modal.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"IconButton","sourcePath":"components/navigation/IconButton.jsx"},{"name":"NavCapsule","sourcePath":"components/navigation/NavCapsule.jsx"},{"name":"ScrollCue","sourcePath":"components/navigation/ScrollCue.jsx"},{"name":"TabList","sourcePath":"components/navigation/TabList.jsx"},{"name":"GlassCapsule","sourcePath":"components/surfaces/GlassCapsule.jsx"},{"name":"MediaCard","sourcePath":"components/surfaces/MediaCard.jsx"},{"name":"SectionHeader","sourcePath":"components/surfaces/SectionHeader.jsx"},{"name":"TestimonialCard","sourcePath":"components/surfaces/TestimonialCard.jsx"}],"sourceHashes":{"components/core/ArrowLink.jsx":"498abde3e2cb","components/core/Button.jsx":"487e39d8a622","components/core/DashList.jsx":"372197d76536","components/core/ExplorePill.jsx":"6c6e2a305c4b","components/core/Eyebrow.jsx":"15347df87dcb","components/core/Tag.jsx":"e2012d6200af","components/disclosure/Accordion.jsx":"f887b132f19f","components/disclosure/ArticleRow.jsx":"e826e2836a39","components/disclosure/ChoiceBlock.jsx":"66239d2258c4","components/disclosure/Modal.jsx":"fb81bceb0c15","components/icons/Icon.jsx":"c229fb08684a","components/navigation/IconButton.jsx":"47f9742c3afc","components/navigation/NavCapsule.jsx":"0c524687a84d","components/navigation/ScrollCue.jsx":"d962b18a5432","components/navigation/TabList.jsx":"c1b3c80be97f","components/surfaces/GlassCapsule.jsx":"f6fc59eddfa9","components/surfaces/MediaCard.jsx":"c6081764d2a1","components/surfaces/SectionHeader.jsx":"abda6288ea2b","components/surfaces/TestimonialCard.jsx":"6380b2323c7f","ui_kits/link_in_bio/BioCapsule.jsx":"8bcd5ac5df66","ui_kits/link_in_bio/GroupCapsules.jsx":"b15f93c40323","ui_kits/website/Articles.jsx":"3212fc99477d","ui_kits/website/Community.jsx":"ddbfbe156ec1","ui_kits/website/Faq.jsx":"1c7f846555ab","ui_kits/website/Hero.jsx":"6cbd77df3add","ui_kits/website/Home.jsx":"e330f092fc20","ui_kits/website/Method.jsx":"80feecfa3acc","ui_kits/website/SiteFooter.jsx":"161646f81ffd","ui_kits/website/Testimonials.jsx":"4d95a86f9362","ui_kits/website/Trajectory.jsx":"6965e7ad749b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CharlingtonCavalcanteDesignSystem_db509c = window.CharlingtonCavalcanteDesignSystem_db509c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--text-base)',
  fontWeight: 'var(--font-weight-regular)',
  letterSpacing: 'var(--tracking-default)',
  border: 'none',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 'var(--touch-target-min)',
  transition: 'all 200ms ease',
  textDecoration: 'none'
};
const VARIANTS = {
  primary: {
    background: 'var(--color-midnight-ink)',
    color: 'var(--color-ghost-white)',
    borderRadius: 'var(--radius-pillbuttons)',
    padding: 'var(--spacing-10) var(--spacing-22)'
  },
  secondary: {
    background: 'var(--tint-ink-05)',
    color: 'var(--color-deep-graphite)',
    borderRadius: 'var(--radius-pillbuttons)',
    padding: 'var(--spacing-10) var(--spacing-22)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)',
    borderRadius: 0,
    padding: 'var(--spacing-6) var(--spacing-10)',
    minHeight: 'auto'
  },
  quiet: {
    background: 'var(--tint-neutral-10)',
    color: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 'var(--radius-buttons)',
    padding: 'var(--spacing-6) var(--spacing-10)',
    fontSize: 'var(--text-meta)',
    minHeight: 'auto'
  }
};
const HOVER = {
  primary: {
    background: 'var(--action-primary)'
  },
  secondary: {
    background: 'var(--action-primary)',
    color: 'var(--color-canvas)'
  },
  ghost: {
    color: 'var(--action-primary)'
  },
  quiet: {
    background: 'var(--tint-neutral-20)',
    color: 'var(--color-midnight-ink)'
  }
};
function Button({
  variant = 'secondary',
  href,
  disabled,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const css = {
    ...BASE,
    ...VARIANTS[variant],
    ...(hover && !disabled ? HOVER[variant] : null),
    ...(disabled ? {
      opacity: 0.35,
      pointerEvents: 'none'
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    style: css,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/DashList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Em-dash marker list. The dash is the brand's only bullet. */
function DashList({
  items = [],
  tone = 'onDark',
  gap = 16,
  style,
  ...rest
}) {
  const onDark = tone === 'onDark';
  return /*#__PURE__*/React.createElement("ul", _extends({
    style: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: gap + 'px',
      padding: 0,
      margin: 0,
      ...style
    }
  }, rest), items.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontSize: 'var(--text-body-lg)',
      lineHeight: 1.6,
      position: 'relative',
      paddingLeft: '24px',
      color: onDark ? 'var(--tint-on-dark-70)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      color: 'var(--text-accent)',
      fontWeight: 'var(--font-weight-medium)'
    }
  }, "\u2014"), item)));
}
Object.assign(__ds_scope, { DashList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/DashList.jsx", error: String((e && e.message) || e) }); }

// components/core/ExplorePill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The hero's signature control: outlined blue capsule whose label rolls up on
   hover (two stacked copies of the text inside a clipped 1.3em window). */
function ExplorePill({
  children,
  href,
  active = false,
  size = 'md',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pad = size === 'sm' ? '5px 12px' : '6px 16px';
  const fs = size === 'sm' ? '12px' : '13px';
  const Tag = href ? 'a' : 'span';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontSize: fs,
      fontWeight: 'var(--font-weight-regular)',
      padding: pad,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (active || hover ? 'var(--action-primary)' : 'var(--tint-accent-25)'),
      background: active ? hover ? 'var(--action-primary-press)' : 'var(--action-primary)' : hover ? 'var(--tint-accent-05)' : 'transparent',
      color: active ? '#ffffff' : 'var(--text-accent)',
      transition: 'all 200ms var(--ease-out)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
      transform: hover ? 'translateY(-1px)' : 'none',
      textDecoration: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      overflow: 'hidden',
      height: '1.3em',
      lineHeight: '1.3em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: '1.3em',
      lineHeight: '1.3em',
      transition: 'transform 400ms var(--ease-out)',
      transform: hover ? 'translateY(-100%)' : 'none'
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'block',
      height: '1.3em',
      lineHeight: '1.3em',
      transition: 'transform 400ms var(--ease-out)',
      transform: hover ? 'translateY(-100%)' : 'none'
    }
  }, children)));
}
Object.assign(__ds_scope, { ExplorePill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ExplorePill.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Small uppercase label above a section title. Blue on light, blue on dark,
   grey inside cards. Never more than three words. */
function Eyebrow({
  children,
  tone = 'accent',
  style,
  ...rest
}) {
  const color = tone === 'muted' ? 'var(--text-muted)' : 'var(--text-accent)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: tone === 'muted' ? '11px' : 'var(--text-caption)',
      fontWeight: 'var(--font-weight-medium)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color,
      marginBottom: 'var(--spacing-10)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Article tag. Two treatments, both from the codebase: a filled white-alpha
   capsule (blog list on dark) and a blue outline capsule (updates page). */
function Tag({
  children,
  variant = 'outline',
  style,
  ...rest
}) {
  const outline = variant === 'outline';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--font-weight-light)',
      letterSpacing: outline ? 'var(--tracking-default)' : '0.05em',
      textTransform: outline ? 'none' : 'uppercase',
      padding: outline ? '4px 11px' : '2px var(--spacing-10)',
      borderRadius: 'var(--radius-pill)',
      border: outline ? '1.8px solid var(--action-primary)' : 'none',
      color: outline ? 'var(--action-primary)' : '#ffffff',
      background: outline ? 'transparent' : 'rgba(255, 255, 255, 0.1)',
      whiteSpace: 'nowrap',
      display: 'inline-block',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* FAQ accordion: hairline divider, plus icon whose vertical stroke rotates
   away to become a minus. Question shifts 4px right on hover. */
function Accordion({
  items = [],
  defaultOpen = -1,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), items.map((item, i) => /*#__PURE__*/React.createElement(AccordionItem, {
    key: i,
    item: item,
    open: open === i,
    onToggle: () => setOpen(open === i ? -1 : i)
  })));
}
function AccordionItem({
  item,
  open,
  onToggle
}) {
  const [hover, setHover] = React.useState(false);
  const line = {
    content: '""',
    position: 'absolute',
    borderRadius: '2px',
    background: open ? 'var(--action-primary)' : 'var(--text-muted)',
    transition: 'transform 400ms var(--ease-out), background-color 400ms ease'
  };
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderBottom: '1px solid var(--border-light-subtle)',
      padding: 'var(--spacing-22) 0',
      marginBottom: 'var(--spacing-6)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    "aria-expanded": open,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 1.35,
      letterSpacing: 'var(--tracking-default)',
      minHeight: 'var(--touch-target-min)',
      fontWeight: open ? 'var(--font-weight-medium)' : 'var(--font-weight-regular)',
      color: open ? 'var(--action-primary)' : 'var(--text-body)',
      transform: hover && !open ? 'translateX(4px)' : 'none',
      transition: 'color 300ms ease, transform 300ms var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", null, item.question), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'relative',
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...line,
      width: '10px',
      height: '1.2px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...line,
      width: '1.2px',
      height: '10px',
      transform: open ? 'rotate(90deg) scale(0)' : 'none'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: open ? '350px' : 0,
      overflow: 'hidden',
      opacity: open ? 1 : 0,
      paddingTop: open ? 'var(--spacing-11)' : 0,
      color: 'var(--text-muted)',
      fontSize: '13.5px',
      fontWeight: 'var(--font-weight-light)',
      lineHeight: 1.6,
      letterSpacing: '-0.015em',
      transition: 'max-height 400ms var(--ease-out), opacity 400ms ease'
    }
  }, item.answer));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/ArticleRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Article accordion row on the dark Artigos page: tag row, dated title,
   plus/minus at the right, body text revealed below. */
function ArticleRow({
  tags = [],
  title,
  children,
  open = false,
  onToggle,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onToggle,
    style: {
      borderTop: '0.5px solid rgba(253,253,253,0.2)',
      paddingTop: 'var(--spacing-22)',
      marginBottom: 'var(--spacing-69)',
      cursor: 'pointer',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '6px',
      flexWrap: 'nowrap'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-meta)',
      fontWeight: 'var(--font-weight-light)',
      color: 'var(--color-canvas)',
      letterSpacing: 'var(--tracking-default)',
      marginTop: 'var(--spacing-11)',
      lineHeight: 1.2
    }
  }, title)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '24px',
      height: '24px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: '14px',
      height: '1.5px',
      background: 'var(--color-canvas)',
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform 400ms var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: '1.5px',
      height: '14px',
      background: 'var(--color-canvas)',
      opacity: open ? 0 : 1,
      transform: open ? 'rotate(90deg) scale(0)' : 'none',
      transition: 'transform 400ms var(--ease-out), opacity 300ms ease'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: open ? '800px' : 0,
      overflow: 'hidden',
      opacity: open ? 1 : 0,
      marginTop: open ? 'var(--spacing-22)' : 0,
      color: 'var(--text-muted)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--font-weight-light)',
      lineHeight: 1.6,
      letterSpacing: 'var(--tracking-default)',
      transition: 'max-height 500ms var(--ease-out), opacity 400ms ease, margin-top 400ms ease'
    }
  }, children));
}
Object.assign(__ds_scope, { ArticleRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/ArticleRow.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/ChoiceBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Card inside the community modal: title, description, arrow CTA, tag pills.
   Lifts 4px and reveals a very soft neutral spotlight on hover. */
function ChoiceBlock({
  title,
  description,
  action,
  href,
  tags = [],
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: '#ffffff',
      borderRadius: 'var(--radius-card)',
      border: '1px solid ' + (hover ? '#d1d5db' : '#eaeaea'),
      boxShadow: hover ? 'var(--shadow-block-hover)' : 'var(--shadow-block)',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      transform: hover ? 'translateY(-4px) scale(1.015)' : 'none',
      transition: 'transform 350ms var(--ease-out), box-shadow 350ms var(--ease-out), border-color 350ms var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-heading-lg)',
      fontWeight: 'var(--font-weight-semibold)',
      color: '#111827',
      margin: 0,
      lineHeight: 1.2
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-base)',
      color: '#6b7280',
      lineHeight: 1.5,
      margin: 0,
      flexGrow: 1
    }
  }, description)), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      marginTop: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--font-weight-medium)',
      color: 'var(--action-primary)',
      textDecoration: 'none',
      minHeight: 'var(--touch-target-min)'
    }
  }, /*#__PURE__*/React.createElement("span", null, action), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      transition: 'transform 250ms var(--ease-out)',
      transform: hover ? 'translate(4px,-4px)' : 'none'
    }
  }, "\u2197")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement(__ds_scope.ExplorePill, {
    key: t,
    size: "sm",
    style: {
      transform: hover ? 'translateY(-2px)' : 'none',
      transitionDelay: 0.02 + i * 0.03 + 's'
    }
  }, t))));
}
Object.assign(__ds_scope, { ChoiceBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/ChoiceBlock.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Stroke set copied verbatim from the two codebases:
   - src/Icons.jsx (link-in-bio): arrow-up, arrow-up-right, instagram, linkedin, doctoralia
   - index.html footer (site): whatsapp, instagram, linkedin, doctoralia
   - index.html inline SVGs: arrow-right (overview link), chevron-down (scroll cue), close
   1.5–2px stroke, round caps, currentColor. No icon library is used anywhere in the brand. */

const PATHS = {
  'arrow-right': /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    stroke: "none",
    d: "M6.18252 2.51959L4.71493 1.05199L5.19807 0.568848L7.80164 3.17242L5.19807 5.77599L4.71493 5.29285L6.18252 3.82526H0.597168V3.14175H0.597168V2.51959H6.18252Z"
  }),
  'arrow-long-right': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  })),
  'arrow-up': /*#__PURE__*/React.createElement("path", {
    d: "M12 19V5M5 12l7-7 7 7"
  }),
  'arrow-up-right': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7 17L17 7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 7h10v10"
  })),
  'chevron-down': /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    stroke: "none",
    d: "M2.92737 6.71384L2.92737 0.159781L3.61089 0.159781L3.61089 6.71384L5.20721 5.11752L5.69036 5.60067L3.26913 8.02189L0.84791 5.60067L1.33105 5.11752L2.92737 6.71384Z"
  }),
  close: /*#__PURE__*/React.createElement("path", {
    d: "M1 1L13 13M1 13L13 1"
  }),
  whatsapp: /*#__PURE__*/React.createElement("path", {
    d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
  }),
  instagram: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "5",
    ry: "5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "17.5",
    y1: "6.5",
    x2: "17.51",
    y2: "6.5"
  })),
  linkedin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "9",
    width: "4",
    height: "12"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "4",
    cy: "4",
    r: "2"
  })),
  doctoralia: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "9",
    width: "18",
    height: "6",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "3",
    width: "6",
    height: "18",
    rx: "1"
  }))
};
const VIEWBOX = {
  'arrow-right': '0 0 8 6',
  'chevron-down': '0 0 7 9',
  close: '0 0 14 14'
};
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  style,
  ...rest
}) {
  const d = PATHS[name];
  if (!d) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: VIEWBOX[name] || '0 0 24 24',
    width: size,
    height: size,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    }
  }, rest), d);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/ArrowLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Blue text link preceded by a small outlined capsule holding an arrow that
   slides out and a duplicate that slides in. Not a button. */
function ArrowLink({
  children,
  href,
  tone = 'accent',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const color = tone === 'onDark' ? 'var(--color-ghost-white)' : 'var(--text-accent)';
  const glyph = shift => ({
    position: 'absolute',
    left: '50%',
    top: '50%',
    transition: 'transform 400ms var(--ease-out)',
    transform: `translate(calc(-50% + ${shift}px), -50%)`
  });
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      color,
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--font-weight-regular)',
      textDecoration: 'none',
      opacity: hover ? 0.8 : 1,
      transition: 'opacity 200ms ease',
      minHeight: 'var(--touch-target-min)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '32px',
      height: '18px',
      border: '1px solid currentColor',
      borderRadius: '9px',
      position: 'relative',
      overflow: 'hidden',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 10,
    style: glyph(hover ? 20 : 0)
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 10,
    style: glyph(hover ? 0 : -20)
  })), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { ArrowLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ArrowLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Circular icon action: footer social links, modal close, back-to-top.
   Fill lifts to Future Blue on hover with a -2px rise. */
function IconButton({
  icon,
  href,
  label,
  size = 40,
  tone = 'onDark',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const onDark = tone === 'onDark';
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    "aria-label": label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size + 'px',
      height: size + 'px',
      minWidth: 'var(--touch-target-min)',
      minHeight: 'var(--touch-target-min)',
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: hover ? 'var(--action-primary)' : onDark ? 'rgba(242, 242, 244, 0.1)' : 'var(--tint-ink-05)',
      color: hover ? 'var(--color-ghost-white)' : onDark ? 'var(--color-ghost-white)' : 'var(--color-midnight-ink)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'all 200ms ease',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Full-screen ink overlay with a 16px blur; a 20px-radius paper dialog rises
   20px into place. The header band carries media and the 64px title. */
function Modal({
  open = false,
  onClose,
  title,
  subtitle,
  media,
  children,
  footer,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      background: 'rgba(15,16,18,0.4)',
      backdropFilter: 'blur(var(--blur-overlay))',
      WebkitBackdropFilter: 'blur(var(--blur-overlay))',
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity 250ms ease-out',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      background: 'var(--color-canvas)',
      width: '100%',
      maxWidth: '960px',
      maxHeight: '90vh',
      borderRadius: '20px',
      overflowY: 'auto',
      transform: open ? 'none' : 'scale(0.96)',
      transition: 'transform 250ms ease-out'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '260px',
      display: 'flex',
      alignItems: 'flex-end',
      padding: '40px',
      overflow: 'hidden',
      background: '#2f2549'
    }
  }, media ? /*#__PURE__*/React.createElement("img", {
    src: media,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(30,20,50,0.3) 0%, rgba(15,10,30,0.75) 100%)'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "close",
    label: "Fechar",
    size: 40,
    onClick: onClose,
    style: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: 'rgba(0,0,0,0.2)',
      zIndex: 10
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      width: '100%',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display-xl)',
      fontWeight: 'var(--font-weight-regular)',
      color: 'var(--color-canvas)',
      letterSpacing: 'var(--tracking-display-xl)',
      lineHeight: 1,
      margin: 0
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13.5px',
      color: '#e0e0e0',
      letterSpacing: '-0.01em',
      lineHeight: 1.45,
      margin: 0,
      textAlign: 'right'
    }
  }, subtitle) : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px'
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 40px 30px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '16px'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Modal.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavCapsule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Floating glass pill: logo circle + link capsule, fixed 30px from the top.
   Non-hovered links fade to 0.5 while the capsule is hovered. */
function NavCapsule({
  links = [],
  logoSrc,
  tone = 'light',
  fixed = true,
  activeHref,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dark = tone === 'dark';
  const glass = {
    background: hover ? dark ? 'var(--tint-glass-dark-hover)' : 'var(--tint-glass-light-hover)' : dark ? 'var(--tint-glass-dark)' : 'var(--tint-glass-light)',
    backdropFilter: 'blur(var(--blur-glass))',
    WebkitBackdropFilter: 'blur(var(--blur-glass))',
    border: '1px solid ' + (dark ? 'var(--border-glass-dark)' : 'var(--border-glass-light)'),
    boxShadow: hover ? 'var(--shadow-glass-hover)' : 'var(--shadow-glass)',
    transition: 'background 300ms ease, border-color 300ms ease, box-shadow 300ms ease'
  };
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: fixed ? 'fixed' : 'relative',
      top: fixed ? '30px' : undefined,
      left: 0,
      width: '100%',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      pointerEvents: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      pointerEvents: 'auto',
      maxWidth: '90vw'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      width: '54px',
      height: '54px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      ...glass
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Charlington Cavalcante",
    style: {
      width: '26px',
      height: '26px',
      objectFit: 'contain'
    }
  }) : null), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Principal",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '36px',
      padding: '15px 40px',
      borderRadius: 'var(--radius-pill)',
      height: '54px',
      ...glass
    }
  }, links.map(l => /*#__PURE__*/React.createElement(NavLink, {
    key: l.label,
    link: l,
    dark: dark,
    dim: hover,
    active: activeHref === l.href
  })))));
}
function NavLink({
  link,
  dark,
  dim,
  active
}) {
  const [over, setOver] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: link.href,
    onMouseEnter: () => setOver(true),
    onMouseLeave: () => setOver(false),
    style: {
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--font-weight-regular)',
      whiteSpace: 'nowrap',
      textDecoration: 'none',
      color: over || active ? 'var(--action-primary)' : dark ? 'var(--color-ghost-white)' : 'var(--color-midnight-ink)',
      opacity: over ? 1 : dim ? 0.5 : 0.9,
      transition: 'opacity 200ms ease, color 200ms ease'
    }
  }, link.label);
}
Object.assign(__ds_scope, { NavCapsule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavCapsule.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ScrollCue.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 36×52 rounded well holding a chevron that slides down on a 2.2s loop. */
function ScrollCue({
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: '36px',
      height: '52px',
      borderRadius: '18px',
      background: 'var(--tint-ink-05)',
      color: 'var(--color-midnight-ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, '@keyframes ds-scroll-cue{0%{transform:translateY(-16px);opacity:0}25%{transform:translateY(0);opacity:1}75%{transform:translateY(0);opacity:1}100%{transform:translateY(16px);opacity:0}}'), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 12,
    style: {
      width: '10px',
      height: '12px',
      animation: 'ds-scroll-cue 2.2s infinite var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { ScrollCue });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ScrollCue.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Numbered vertical tabs (Trajetória). Number turns blue and the label goes
   full-opacity medium when active. */
function TabList({
  tabs = [],
  value = 0,
  onChange,
  orientation = 'vertical',
  tone = 'onDark',
  style,
  ...rest
}) {
  const onDark = tone === 'onDark';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      flexDirection: orientation === 'vertical' ? 'column' : 'row',
      gap: orientation === 'vertical' ? '36px' : '20px',
      ...style
    }
  }, rest), tabs.map((t, i) => {
    const active = i === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(i),
      style: {
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        minWidth: '120px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '11px',
        letterSpacing: '0.05em',
        transition: 'color 300ms ease',
        color: active ? 'var(--action-primary)' : onDark ? 'var(--tint-on-dark-30)' : 'var(--text-muted)'
      }
    }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-body-lg)',
        whiteSpace: 'nowrap',
        transition: 'color 300ms ease',
        fontWeight: active ? 'var(--font-weight-medium)' : 'var(--font-weight-regular)',
        color: active ? onDark ? 'var(--color-ghost-white)' : 'var(--text-body)' : onDark ? 'var(--tint-on-dark-40)' : 'var(--text-muted)'
      }
    }, t));
  }));
}
Object.assign(__ds_scope, { TabList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabList.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/GlassCapsule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The link-in-bio surface: one slim glass capsule, full radius, dark tint,
   24px blur, 1px white-alpha border. Everything stacks centred inside it. */
function GlassCapsule({
  children,
  width = 272,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width: width + 'px',
      borderRadius: 'var(--radius-pill)',
      padding: '48px 28px 32px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'rgba(0, 0, 0, 0.25)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      overflow: 'hidden',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { GlassCapsule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/GlassCapsule.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/MediaCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Large content card: full-bleed media on top, a protection gradient fading the
   media into the card surface, then eyebrow/title/text and a tag row. */
function MediaCard({
  image,
  video,
  eyebrow,
  title,
  text,
  tags = [],
  action = 'Ver mais',
  href,
  tone = 'light',
  height = 550,
  mediaHeight = 320,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'grid',
      gridTemplateRows: mediaHeight + 'px 1fr',
      background: dark ? 'var(--color-midnight-ink)' : 'var(--color-canvas)',
      border: dark ? '1px solid rgba(255,255,255,0.08)' : 'none',
      borderRadius: '20px',
      overflow: 'hidden',
      textDecoration: 'none',
      height: height + 'px',
      transform: hover ? 'translateY(-6px)' : 'none',
      boxShadow: hover ? dark ? 'var(--shadow-card-lift-dark)' : 'var(--shadow-card-lift)' : 'none',
      transition: 'var(--transition-lift)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--color-midnight-ink)'
    }
  }, video ? /*#__PURE__*/React.createElement("video", {
    src: video,
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '90px',
      pointerEvents: 'none',
      background: dark ? 'var(--gradient-media-to-card-dark)' : 'var(--gradient-media-to-card)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 32px 32px 32px',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      zIndex: 2,
      marginTop: '-35px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      fontWeight: 'var(--font-weight-medium)',
      marginBottom: '8px',
      color: dark ? 'var(--text-accent)' : 'var(--text-muted)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '26px',
      fontWeight: 'var(--font-weight-regular)',
      letterSpacing: 'var(--tracking-default)',
      lineHeight: 1.15,
      margin: '0 0 10px 0',
      color: dark ? 'var(--color-ghost-white)' : 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13.5px',
      lineHeight: 1.45,
      letterSpacing: '-0.01em',
      margin: '0 0 20px 0',
      flexGrow: 1,
      color: dark ? 'var(--tint-on-dark-70)' : 'var(--text-secondary)'
    }
  }, text), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginTop: 'auto',
      gap: '16px',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '12px',
      whiteSpace: 'nowrap',
      transition: 'color 200ms ease',
      color: hover ? 'var(--text-accent)' : dark ? 'var(--tint-on-dark-70)' : 'var(--text-muted)'
    }
  }, action, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: '13px',
      lineHeight: 1,
      transition: 'transform 250ms var(--ease-out)',
      transform: hover ? 'translate(3px,-3px)' : 'none'
    }
  }, "\u2197")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.ExplorePill, {
    key: t,
    size: "sm",
    style: dark ? {
      borderColor: 'rgba(255,255,255,0.25)',
      color: 'rgba(242,242,244,0.85)'
    } : undefined
  }, t))))));
}
Object.assign(__ds_scope, { MediaCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/MediaCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Eyebrow + display title + subtitle. The only heading block in the system. */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  tone = 'onLight',
  style,
  ...rest
}) {
  const onDark = tone === 'onDark';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      maxWidth: '600px',
      margin: align === 'center' ? '0 auto' : 0,
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    style: {
      textAlign: align
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-display)',
      fontWeight: 'var(--font-weight-light)',
      letterSpacing: 'var(--tracking-display)',
      lineHeight: 1.25,
      margin: '0 0 var(--spacing-22) 0',
      color: onDark ? 'var(--color-ghost-white)' : 'var(--text-heading)'
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-meta)',
      fontWeight: 'var(--font-weight-light)',
      lineHeight: 1.5,
      letterSpacing: '-0.015em',
      margin: 0,
      color: onDark ? 'rgba(242,242,244,0.6)' : 'var(--text-muted)'
    }
  }, subtitle) : null);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Glass card on the ink section: quote, avatar initials, name, source. */
function TestimonialCard({
  quote,
  name,
  role,
  initials,
  source,
  width = 480,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("figure", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: width + 'px',
      flexShrink: 0,
      margin: 0,
      background: hover ? 'rgba(255,255,255,0.05)' : 'var(--tint-on-dark-03)',
      border: '1px solid ' + (hover ? 'rgba(0,113,227,0.4)' : 'rgba(255,255,255,0.07)'),
      borderRadius: 'var(--radius-lg)',
      padding: '28px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '20px',
      backdropFilter: 'blur(var(--blur-glass-soft))',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'border-color 300ms ease, background-color 300ms ease, transform 300ms ease',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontSize: '16px',
      fontWeight: 'var(--font-weight-light)',
      lineHeight: 1.5,
      letterSpacing: 'var(--tracking-default)',
      color: '#e5e5e7',
      flexGrow: 1
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      paddingTop: '14px',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,255,255,0.1)',
      color: 'var(--color-ghost-white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'var(--font-weight-semibold)',
      fontSize: '12px',
      flexShrink: 0
    }
  }, initials), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, /*#__PURE__*/React.createElement("cite", {
    style: {
      fontStyle: 'normal',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--font-weight-medium)',
      color: 'var(--color-ghost-white)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      color: 'rgba(242,242,244,0.5)'
    }
  }, role))), source ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '1px',
      height: '28px',
      background: 'rgba(255,255,255,0.08)',
      margin: '0 16px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      letterSpacing: 'var(--tracking-default)',
      color: hover ? 'var(--color-ghost-white)' : 'var(--tint-on-dark-40)',
      transition: 'color 300ms ease'
    }
  }, source)) : null));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/link_in_bio/BioCapsule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  GlassCapsule,
  Icon
} = window.CharlingtonCavalcanteDesignSystem_db509c;
const COUNCIL = ['CRM-CE 14.212, RQE 13562', 'CRM-CE 14.212, RQE 13563', 'CRM-SP 173.176, RQE 744911', 'CRM-SP 173.176, RQE 82724'];
const LINKS = [{
  id: 'whatsapp',
  label: 'Agendar',
  href: 'https://wa.me/5519971502747',
  primary: true
}, {
  id: 'addresses',
  label: 'Endereços'
}, {
  id: 'groups',
  label: 'Grupos'
}, {
  id: 'site',
  label: 'Site',
  href: 'https://charlington.com.br/'
}];
const ADDRESSES = [{
  id: 'campinas',
  label: 'Campinas',
  href: '#'
}, {
  id: 'fortaleza',
  label: 'Fortaleza',
  href: '#'
}];
const SOCIALS = [{
  id: 'instagram',
  icon: 'instagram',
  label: 'Instagram'
}, {
  id: 'linkedin',
  icon: 'linkedin',
  label: 'LinkedIn'
}, {
  id: 'doctoralia',
  icon: 'doctoralia',
  label: 'Doctoralia'
}];
const rowStyle = {
  display: 'flex',
  width: '100%',
  minHeight: '44px',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'var(--font-sans)',
  fontSize: '16px',
  lineHeight: 1,
  color: 'rgba(255,255,255,0.8)',
  textDecoration: 'none',
  transition: 'all 200ms var(--ease-out)'
};
function BioRow({
  children,
  onClick,
  href,
  primary
}) {
  const [h, setH] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      ...rowStyle,
      color: h ? 'var(--color-cobalt)' : primary ? '#ffffff' : 'rgba(255,255,255,0.8)',
      transform: h ? 'scale(1.04)' : 'none',
      gap: '6px'
    }
  }, children);
}
function BioCapsule({
  view,
  setView
}) {
  const [council, setCouncil] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setCouncil(c => (c + 1) % COUNCIL.length), 3000);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement(GlassCapsule, {
    width: 272
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "",
    style: {
      width: '64px',
      height: '64px',
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("header", {
    style: {
      marginTop: '14px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: '2px',
      fontSize: '12px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.5)'
    }
  }, "Neuropediatra"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '17px',
      lineHeight: 1.3,
      fontWeight: 'var(--font-weight-medium)',
      color: 'rgba(255,255,255,0.95)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "Dr. Charlington"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "Cavalcante")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '4px',
      fontSize: '12px',
      color: 'rgba(255,255,255,0.5)'
    }
  }, COUNCIL[council])), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Canais e consult\xF3rios",
    style: {
      marginTop: '14px',
      width: '100%'
    }
  }, view === 'main' ? LINKS.map(l => /*#__PURE__*/React.createElement(BioRow, {
    key: l.id,
    primary: l.primary,
    href: l.href,
    onClick: l.href ? undefined : () => setView(l.id === 'addresses' ? 'addresses' : 'groups')
  }, l.label)) : /*#__PURE__*/React.createElement(React.Fragment, null, ADDRESSES.map(a => /*#__PURE__*/React.createElement(BioRow, {
    key: a.id,
    href: a.href
  }, a.label, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 13,
    strokeWidth: 1.5
  }))), /*#__PURE__*/React.createElement(BioRow, {
    onClick: () => setView('main')
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.5)'
    }
  }, "Voltar")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    }
  }, SOCIALS.map(s => /*#__PURE__*/React.createElement(BioSocial, _extends({
    key: s.id
  }, s)))), /*#__PURE__*/React.createElement(BioTop, null));
}
function BioSocial({
  icon,
  label
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": label,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'grid',
      placeItems: 'center',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      color: h ? 'var(--color-cobalt)' : 'rgba(255,255,255,0.8)',
      background: h ? 'rgba(255,255,255,0.05)' : 'transparent',
      transform: h ? 'scale(1.15)' : 'none',
      transition: 'all 200ms var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    strokeWidth: 1.5
  }));
}
function BioTop() {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": "Voltar ao topo",
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      marginTop: '8px',
      width: '44px',
      height: '44px',
      display: 'grid',
      placeItems: 'center',
      border: 'none',
      background: 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: '34px',
      height: '34px',
      borderRadius: '50%',
      border: '1px solid ' + (h ? 'var(--color-cobalt)' : 'rgba(255,255,255,0.1)'),
      background: h ? 'rgba(47,102,224,0.15)' : 'transparent',
      color: h ? 'var(--color-cobalt)' : 'rgba(255,255,255,0.8)',
      boxShadow: h ? '0 0 12px rgba(47,102,224,0.3)' : 'none',
      transition: 'all 200ms var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up",
    size: 13,
    strokeWidth: 1.5
  })));
}
Object.assign(window, {
  BioCapsule
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/link_in_bio/BioCapsule.jsx", error: String((e && e.message) || e) }); }

// ui_kits/link_in_bio/GroupCapsules.jsx
try { (() => {
const GROUPS = [{
  id: 'canal-oficial',
  tag: 'Grupo no WhatsApp',
  title: 'Canal Oficial',
  sub: 'receber materiais e avisos',
  callout: 'Receba em primeira mão materiais, artigos e avisos do Dr. Charlington. Só leitura, sem ruído.',
  image: '../../assets/grupo-canal-oficial.jpg'
}, {
  id: 'comunidade',
  tag: 'Grupo no WhatsApp',
  title: 'Comunidade',
  sub: 'entrar no grupo de famílias',
  callout: 'Um espaço para trocar, comentar e tirar dúvidas com outros pacientes e famílias.',
  image: '../../assets/grupo-comunidade.jpg'
}];
function GroupCapsules({
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '20px',
      alignItems: 'stretch'
    }
  }, GROUPS.map(g => /*#__PURE__*/React.createElement(GroupCapsule, {
    key: g.id,
    group: g
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      position: 'absolute',
      left: '50%',
      bottom: '-56px',
      transform: 'translateX(-50%)',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.5)'
    }
  }, "Voltar"));
}
function GroupCapsule({
  group
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: '210px',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,' + (h ? '0.25' : '0.1') + ')',
      background: 'rgba(0,0,0,0.25)',
      backdropFilter: 'blur(24px)',
      textDecoration: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '26px 22px 30px',
      transition: 'all 250ms var(--ease-out)',
      transform: h ? 'translateY(-4px)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: group.image,
    alt: "",
    style: {
      width: '118px',
      height: '118px',
      objectFit: 'cover',
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: '16px',
      fontSize: '10.5px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.5)'
    }
  }, group.tag), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: '6px',
      fontSize: '17px',
      fontWeight: 'var(--font-weight-medium)',
      color: h ? 'var(--color-cobalt)' : 'rgba(255,255,255,0.95)',
      transition: 'color 200ms ease'
    }
  }, group.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'rgba(255,255,255,0.5)'
    }
  }, group.sub), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '14px',
      fontSize: '12.5px',
      lineHeight: 1.5,
      textAlign: 'center',
      color: 'rgba(255,255,255,0.7)'
    }
  }, group.callout));
}
Object.assign(window, {
  GroupCapsules
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/link_in_bio/GroupCapsules.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Articles.jsx
try { (() => {
const {
  NavCapsule,
  ArticleRow,
  ArrowLink
} = window.CharlingtonCavalcanteDesignSystem_db509c;
const ARTICLES = [{
  tags: ['P01', 'Sono', 'Desenvolvimento'],
  title: '19 de Maio de 2026 — A importância do sono no desenvolvimento infantil e neurodesenvolvimento',
  body: ['O sono desempenha um papel fundamental na consolidação da memória, no aprendizado e no neurodesenvolvimento da criança. Durante o sono profundo, ocorre a liberação do hormônio do crescimento e a maturação das vias sinápticas essenciais.', 'Distúrbios do sono não tratados na infância podem levar a dificuldades escolares, irritabilidade e até mesmo simular quadros de déficit de atenção.']
}, {
  tags: ['P02', 'Autismo', 'Intervenção'],
  title: '10 de Maio de 2026 — Avanços e a importância do diagnóstico precoce no Transtorno do Espectro Autista',
  body: ['Identificar sinais do TEA nos primeiros anos de vida permite intervenções terapêuticas que modificam positivamente a plasticidade cerebral da criança.']
}, {
  tags: ['P03', 'Neuropediatria', 'Clínica'],
  title: '28 de Abril de 2026 — Neuropediatria: quando procurar um especialista para avaliação neurológica',
  body: ['Muitos pais têm dúvidas sobre o momento certo de levar o filho a um neurologista infantil. Sinais de alerta incluem atraso para sentar ou caminhar e crises convulsivas.']
}, {
  tags: ['P04', 'TDAH', 'Foco'],
  title: '15 de Abril de 2026 — Desmistificando o TDAH na infância: sinais de alerta e abordagens integradas',
  body: ['O TDAH vai muito além da agitação motora. Muitas crianças manifestam o transtorno de forma predominantemente desatenta.']
}];
function Articles({
  onHome
}) {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-midnight-ink)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(NavCapsule, {
    fixed: false,
    tone: "dark",
    logoSrc: "../../assets/logo.png",
    links: [{
      label: 'Método',
      href: '#'
    }, {
      label: 'Trajetória',
      href: '#'
    }, {
      label: 'Artigos',
      href: '#'
    }, {
      label: 'Info',
      href: '#'
    }, {
      label: 'Agendar',
      href: '#'
    }],
    activeHref: "#",
    style: {
      paddingTop: '30px'
    }
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '120px 0',
      color: 'var(--color-ghost-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max-width)',
      margin: '0 auto',
      padding: '0 var(--page-gutter)',
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 'var(--spacing-30)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '2 / 3',
      marginTop: '22px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display)',
      fontWeight: 'var(--font-weight-light)',
      letterSpacing: 'var(--tracking-display)',
      marginBottom: '20px'
    }
  }, "Artigos & Insights"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-muted)',
      lineHeight: 1.4,
      fontWeight: 'var(--font-weight-light)'
    }
  }, "Ci\xEAncia, neurodesenvolvimento infantil e not\xEDcias da pr\xE1tica cl\xEDnica.")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '3 / 6'
    }
  }, ARTICLES.map((a, i) => /*#__PURE__*/React.createElement(ArticleRow, {
    key: i,
    tags: a.tags,
    title: a.title,
    open: open === i,
    onToggle: () => setOpen(open === i ? -1 : i)
  }, a.body.map((p, n) => /*#__PURE__*/React.createElement("p", {
    key: n,
    style: {
      marginBottom: '22px'
    }
  }, p))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-canvas)',
      color: 'var(--color-midnight-ink)',
      padding: '140px 0',
      borderTop: '0.5px solid rgba(15,16,18,0.1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1000px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '120px',
      padding: '0 var(--page-gutter)'
    }
  }, [['1.0', 'Impulsionado por pessoas.', 'O acompanhamento neuropediátrico moderno não se faz de forma isolada. Nossa comunidade ativa de pais e profissionais compartilha informações baseadas em evidências.', 'Acessar o Canal do WhatsApp'], ['2.0', 'Entre em contato.', 'Nossa equipe está à disposição para acolher suas dúvidas e orientar de forma personalizada sobre as melhores abordagens no cuidado.', 'Agendar uma consulta']].map(([n, h, b, cta]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: 'var(--text-accent)',
      marginTop: '5px'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '21px',
      fontWeight: 'var(--font-weight-light)',
      letterSpacing: '-0.54px',
      lineHeight: 1.2,
      marginBottom: '22px'
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--font-weight-light)',
      color: '#5e5e5e',
      lineHeight: 1.5,
      marginBottom: '24px',
      maxWidth: '320px'
    }
  }, b), /*#__PURE__*/React.createElement(ArrowLink, {
    href: "#"
  }, cta)))))));
}
Object.assign(window, {
  Articles
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Articles.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Community.jsx
try { (() => {
const {
  MediaCard,
  SectionHeader,
  Modal,
  ChoiceBlock
} = window.CharlingtonCavalcanteDesignSystem_db509c;
function Community({
  open,
  onOpen,
  onClose
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 0 var(--section-gap)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1550px',
      margin: '0 auto',
      padding: '0 var(--page-gutter)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-50)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Expandindo o cuidado",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "A experi\xEAncia continua", /*#__PURE__*/React.createElement("br", null), "muito al\xE9m do consult\xF3rio"),
    style: {
      maxWidth: '800px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '7fr 5fr',
      gap: '32px',
      maxWidth: '1140px',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(MediaCard, {
    image: "../../assets/grupo-comunidade.jpg",
    eyebrow: "Espa\xE7o de troca",
    title: "Comunidade",
    text: "Pergunta boa, resposta boa. Suporte e troca de experi\xEAncias entre fam\xEDlias que vivenciam o neurodesenvolvimento no dia a dia.",
    tags: ['Apoio mútuo', 'Troca real', 'Suporte']
  })), /*#__PURE__*/React.createElement(MediaCard, {
    tone: "dark",
    image: "../../assets/grupo-canal-oficial.jpg",
    eyebrow: "Acervo de artigos",
    href: "#artigos",
    title: "Artigos, sua trilha de estudos",
    text: "Conte\xFAdos do Dr. Charlington que montam sua base de conhecimento.",
    tags: ['Contextual', 'Aprofundamento', 'Revisão']
  }))), /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: onClose,
    title: "Comunidade",
    media: "../../assets/grupo-comunidade.jpg",
    subtitle: /*#__PURE__*/React.createElement(React.Fragment, null, "Dois espa\xE7os distintos.", /*#__PURE__*/React.createElement("br", null), "Escolha a sua forma", /*#__PURE__*/React.createElement("br", null), "de participar."),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: onClose,
      style: {
        fontSize: '14px'
      }
    }, "Voltar"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12px',
        color: 'var(--text-muted)'
      }
    }, "Os links de acesso ser\xE3o adicionados em breve."))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement(ChoiceBlock, {
    title: "Canal Oficial",
    action: "Entrar no Canal Oficial",
    href: "#",
    description: "O ambiente de comunicados diretos. Aqui apenas o Dr. Charlington envia materiais, artigos em primeira m\xE3o e atualiza\xE7\xF5es importantes.",
    tags: ['Somente leitura', 'Materiais e artigos', 'Enquetes']
  }), /*#__PURE__*/React.createElement(ChoiceBlock, {
    title: "Comunidade Aberta",
    action: "Entrar na Comunidade",
    href: "#",
    description: "Onde a troca verdadeira acontece. Um grupo aberto para voc\xEA comentar, tirar d\xFAvidas pontuais e compartilhar experi\xEAncias com outros membros.",
    tags: ['Participação livre', 'Comentários', 'Dúvidas']
  }))));
}
Object.assign(window, {
  Community
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Community.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Faq.jsx
try { (() => {
const {
  Accordion,
  SectionHeader
} = window.CharlingtonCavalcanteDesignSystem_db509c;
const FAQ_ITEMS = [{
  question: 'Qual o horário de atendimento?',
  answer: 'Segunda a sexta-feira das 08:00 às 18:00. Somente com horário marcado.'
}, {
  question: 'Como agendar uma consulta?',
  answer: /*#__PURE__*/React.createElement(React.Fragment, null, "As consultas, tanto de Fortaleza quanto de Campinas, s\xE3o agendadas por meio de comunica\xE7\xE3o via ", /*#__PURE__*/React.createElement("a", {
    href: "#agendar"
  }, "WhatsApp +55 (19) 97150 2747"), ".")
}, {
  question: 'Qual a localização?',
  answer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Campinas:"), " Avenida Jos\xE9 Rocha Bomfim 214, Campinas, SP."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Fortaleza:"), " Av. Pontes Vieira, 2340, sala 704, Fortaleza, CE."))
}, {
  question: 'Aceita convênios?',
  answer: 'O atendimento é realizado exclusivamente de forma particular, garantindo consultas mais completas, cuidadosas e individualizadas. Emitimos toda a documentação necessária para a solicitação de reembolso.'
}, {
  question: 'Quais as formas de pagamento?',
  answer: 'Aceitamos pagamentos em dinheiro, PIX, cartão de débito e cartão de crédito.'
}, {
  question: 'Tem estacionamento?',
  answer: 'Sim. Ambos os locais de atendimentos possuem estacionamento privativo.'
}];
function Faq() {
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    style: {
      padding: 'var(--section-gap) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1140px',
      margin: '0 auto',
      padding: '0 var(--page-gutter)',
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: '80px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    align: "left",
    eyebrow: "Suporte & Informa\xE7\xF5es",
    title: "Perguntas Frequentes",
    subtitle: "Tudo o que voc\xEA precisa saber para ter mais seguran\xE7a e tranquilidade em cada etapa do atendimento neuroinfantil.",
    style: {
      maxWidth: '440px',
      margin: 0
    }
  }), /*#__PURE__*/React.createElement(Accordion, {
    items: FAQ_ITEMS,
    defaultOpen: 0
  })));
}
Object.assign(window, {
  Faq
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Faq.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const {
  NavCapsule,
  ExplorePill,
  ScrollCue
} = window.CharlingtonCavalcanteDesignSystem_db509c;
const NAV = [{
  label: 'Método',
  href: '#abordagem'
}, {
  label: 'Trajetória',
  href: '#trajetoria'
}, {
  label: 'Artigos',
  href: '#artigos'
}, {
  label: 'Info',
  href: '#faq'
}, {
  label: 'Agendar',
  href: '#agendar'
}];
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      width: '100%',
      height: '760px',
      background: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/banner-landing-page-1.png",
    alt: "Dr. Charlington com uma paciente",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 22%'
    }
  }), /*#__PURE__*/React.createElement(NavCapsule, {
    fixed: false,
    logoSrc: "../../assets/logo.png",
    links: NAV,
    style: {
      position: 'absolute',
      top: '30px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: '80px 10%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginBottom: '40px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-heading-lg)',
      letterSpacing: 'var(--tracking-heading-lg)',
      textTransform: 'lowercase',
      marginBottom: '8px'
    }
  }, "neurologista"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-display)',
      fontWeight: 'var(--font-weight-light)',
      letterSpacing: 'var(--tracking-display)',
      lineHeight: 1.2,
      margin: '0 0 8px'
    }
  }, "Dr. Charlington Cavalcante"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-muted)',
      marginBottom: '30px'
    }
  }, "CRM-SP 173.176"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: 'var(--text-secondary)',
      marginRight: '6px'
    }
  }, "Explorar"), /*#__PURE__*/React.createElement(ExplorePill, {
    href: "#abordagem"
  }, "Neurologia"), /*#__PURE__*/React.createElement(ExplorePill, {
    href: "#trajetoria"
  }, "Trajet\xF3ria"), /*#__PURE__*/React.createElement(ExplorePill, {
    href: "#agendar",
    active: true
  }, "Agendar")))), /*#__PURE__*/React.createElement(ScrollCue, {
    style: {
      position: 'absolute',
      left: '10%',
      bottom: '40px'
    }
  }));
}
Object.assign(window, {
  Hero,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function Home() {
  const [modal, setModal] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Method, null), /*#__PURE__*/React.createElement(Trajectory, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(Community, {
    open: modal,
    onOpen: () => setModal(true),
    onClose: () => setModal(false)
  }), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(SiteFooter, null));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Method.jsx
try { (() => {
const {
  ArrowLink
} = window.CharlingtonCavalcanteDesignSystem_db509c;
const METHOD_SLIDES = [{
  label: 'Individualizado',
  title: 'Abordagem centralizada na criança',
  body: 'Cada consulta é adaptada para as necessidades específicas da criança, garantindo um ambiente seguro e acolhedor.'
}, {
  label: 'Transparente',
  title: 'Comunicação clara e empática',
  body: 'Além de falar, foco em explicar diagnósticos e tratamentos de forma compreensível, com canal aberto para dúvidas.'
}, {
  label: 'Integrado',
  title: 'Apoio multidisciplinar',
  body: 'Colaboração constante com pediatras, psicólogos e terapeutas para oferecer um tratamento integrado e abrangente.'
}, {
  label: 'Humanizado',
  title: 'Empatia e compreensão',
  body: 'Cada criança é única. Empenho-me em ouvir e respeitar as preocupações, oferecendo um cuidado técnico e humanizado.'
}];
function Method() {
  const [i, setI] = React.useState(0);
  const s = METHOD_SLIDES[i];
  return /*#__PURE__*/React.createElement("section", {
    id: "abordagem",
    style: {
      background: 'var(--surface-page)',
      padding: '120px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max-width)',
      margin: '0 auto',
      padding: '0 var(--page-gutter)',
      display: 'grid',
      gridTemplateColumns: '240px 1fr',
      gap: '80px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: 'var(--text-muted)'
    }
  }, "M\xE9todo"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: 'var(--text-body)'
    }
  }, s.label)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display)',
      fontWeight: 'var(--font-weight-light)',
      letterSpacing: 'var(--tracking-display)',
      lineHeight: 1.25,
      marginBottom: '24px',
      maxWidth: '720px'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-lg)',
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      maxWidth: '640px'
    }
  }, s.body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '30px'
    }
  }, /*#__PURE__*/React.createElement(ArrowLink, {
    href: "#agendar"
  }, "Agendar consulta")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      marginTop: '40px'
    }
  }, METHOD_SLIDES.map((_, n) => /*#__PURE__*/React.createElement("span", {
    key: n,
    onClick: () => setI(n),
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 300ms ease',
      background: n === i ? 'var(--color-midnight-ink)' : 'rgba(15,16,18,0.15)',
      transform: n === i ? 'scale(1.2)' : 'none'
    }
  }))))));
}
Object.assign(window, {
  Method
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Method.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFooter.jsx
try { (() => {
const {
  IconButton,
  Button
} = window.CharlingtonCavalcanteDesignSystem_db509c;
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-midnight-ink)',
      color: 'var(--color-ghost-white)',
      padding: 'var(--spacing-94) 0 var(--spacing-50)',
      borderTop: '1px solid rgba(255,255,255,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max-width)',
      margin: '0 auto',
      padding: '0 var(--page-gutter)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 'var(--spacing-50)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--text-heading-lg)',
      fontWeight: 'var(--font-weight-light)',
      marginBottom: 'var(--spacing-22)'
    }
  }, "Nossos endere\xE7os"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--tint-on-dark-70)',
      lineHeight: 1.5,
      marginBottom: 'var(--spacing-10)'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Campinas-SP"), /*#__PURE__*/React.createElement("br", null), "Avenida Jos\xE9 Rocha Bomfim 214", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Ver localiza\xE7\xE3o no mapa")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--tint-on-dark-70)',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Fortaleza-CE"), /*#__PURE__*/React.createElement("br", null), "Av. Pontes Vieira, 2340, sala 704", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Ver localiza\xE7\xE3o no mapa"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--text-heading-lg)',
      fontWeight: 'var(--font-weight-light)',
      marginBottom: 'var(--spacing-22)'
    }
  }, "Hor\xE1rios"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--tint-on-dark-70)'
    }
  }, "Seg a Sex das 8:00 \xE0s 18:00"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--tint-on-dark-70)',
      marginBottom: '24px'
    }
  }, "Somente com hor\xE1rio marcado."), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "#agendar",
    style: {
      paddingLeft: 0,
      color: 'var(--text-accent)'
    }
  }, "Agendar agora \u2192")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--text-heading-lg)',
      fontWeight: 'var(--font-weight-light)',
      marginBottom: 'var(--spacing-22)'
    }
  }, "Redes Sociais"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--spacing-11)',
      marginTop: 'var(--spacing-11)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "whatsapp",
    label: "WhatsApp",
    href: "#"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "instagram",
    label: "Instagram",
    href: "#"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "linkedin",
    label: "LinkedIn",
    href: "#"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "doctoralia",
    label: "Doctoralia",
    href: "#"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      marginTop: '60px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '36px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "Dr. Charlington Cavalcante",
    style: {
      height: '24px',
      filter: 'brightness(0) invert(1)',
      opacity: 0.35
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '24px'
    }
  }, ['Política de Privacidade', 'Termos de Uso', 'Cookies', 'Acesso Profissional'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: '12px',
      color: 'var(--tint-on-dark-40)'
    }
  }, l)))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--tint-on-dark-30)',
      letterSpacing: '0.05em'
    }
  }, "Brasil"))));
}
Object.assign(window, {
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Testimonials.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  TestimonialCard,
  SectionHeader
} = window.CharlingtonCavalcanteDesignSystem_db509c;
const TESTIMONIALS = [{
  quote: '"Dr. Charlington é extremamente atencioso, gentil, e com uma escuta ao paciente extremamente importante."',
  name: 'R. V.',
  role: 'Paciente verificado • Doctoralia',
  initials: 'RV'
}, {
  quote: '"Excelente, muito atencioso, explicando todos os detalhes."',
  name: 'Kimberly Sá',
  role: 'Paciente verificado • Doctoralia',
  initials: 'KS'
}, {
  quote: '"Excelente! O médico que orei pra Deus colocar em nossos caminhos! Gratidão!"',
  name: 'Mariana',
  role: 'Mãe de paciente • Doctoralia',
  initials: 'M'
}, {
  quote: '"É um profissional atencioso, centrado, cuidadoso e paciente, além de demonstrar muito conhecimento e segurança no que faz."',
  name: 'Karina',
  role: 'Mãe de paciente • Doctoralia',
  initials: 'K'
}, {
  quote: '"Excelente profissional! Muito atencioso, tira todas nossas dúvidas, consulta é bem detalhada e esclarecedora."',
  name: 'Douglas A. Fideles',
  role: 'Paciente verificado • Doctoralia',
  initials: 'DF'
}];
function Testimonials() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-midnight-ink)',
      padding: 'var(--section-gap) 0',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    tone: "onDark",
    eyebrow: "Opini\xF5es Reais",
    title: "O que dizem as fam\xEDlias",
    subtitle: "Depoimentos aut\xEAnticos de m\xE3es, pais e fam\xEDlias que vivenciaram de perto a dedica\xE7\xE3o e o cuidado humanizado do Dr. Charlington.",
    style: {
      marginBottom: 'var(--spacing-50)',
      padding: '0 var(--page-gutter)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      overflow: 'hidden',
      padding: '10px 0',
      maskImage: 'var(--mask-marquee-edges)',
      WebkitMaskImage: 'var(--mask-marquee-edges)'
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes ds-marquee{0%{transform:translateX(0)}100%{transform:translateX(calc(-50% - 10px))}}'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '20px',
      width: 'max-content',
      animation: 'ds-marquee 38s linear infinite'
    }
  }, [...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => /*#__PURE__*/React.createElement(TestimonialCard, _extends({
    key: i
  }, t, {
    source: "Doctoralia"
  }))))));
}
Object.assign(window, {
  Testimonials
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Testimonials.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Trajectory.jsx
try { (() => {
const {
  TabList,
  DashList
} = window.CharlingtonCavalcanteDesignSystem_db509c;
const TRAJECTORY = [{
  label: 'Formações',
  title: 'Formação médica de excelência',
  items: ['Médico graduado pela Universidade Estadual do Ceará (UECE)', 'Residência em Pediatria pela Escola de Saúde Pública do Ceará (ESP-CE)', 'Especialização em Neurologia Infantil pela UNICAMP', 'Especialização em Neurofisiologia Clínica pela UNICAMP']
}, {
  label: 'Pós-Graduação',
  title: 'Aprimoramento contínuo nas ciências do sono e autismo',
  items: ['Medicina do Sono pelo Instituto do Sono', 'Medicina do Sono em Crianças e Adolescentes', 'Transtorno do Espectro Autista pelo Child Behaviour Institute (Miami)', 'Pós-Graduação em Intervenção ABA (em andamento)']
}, {
  label: 'Mestrado',
  title: 'Mestrado stricto sensu em neurologia clínica',
  items: ['Mestre em Ciências na área de Ciências Médicas — Neurologia pela UNICAMP']
}, {
  label: 'Extensão',
  title: 'Cursos de extensão e aprimoramento',
  items: ['Understanding child development: from synapse to society (Utrecht University)', 'Autism Spectrum Disorder (University of California, Davis)', 'Health Concepts in Chinese Medicine (HKUST)']
}, {
  label: 'Atuação Clínica',
  title: 'Liderança clínica e vivência internacional',
  items: ['Fellowship em Epilepsia Infantil e Neuroimagem pela UNICAMP', 'Observership no Sick Kids Hospital (Toronto, Canadá)', 'Chefe do ambulatório da síndrome do Zika vírus congênita (HIAS)', 'Preceptor da residência em neurologia infantil (ESP-CE)']
}];
function Trajectory() {
  const [tab, setTab] = React.useState(0);
  const t = TRAJECTORY[tab];
  return /*#__PURE__*/React.createElement("section", {
    id: "trajetoria",
    style: {
      background: 'var(--color-midnight-ink)',
      padding: '120px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max-width)',
      margin: '0 auto',
      padding: '0 var(--page-gutter)',
      display: 'grid',
      gridTemplateColumns: '420px 1fr',
      gap: '80px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '36px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '13px',
      color: 'var(--tint-on-dark-40)'
    }
  }, "Dr. Charlington Cavalcante"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '13px',
      color: 'var(--text-accent)',
      marginTop: '36px'
    }
  }, "Trajet\xF3ria acad\xEAmica")), /*#__PURE__*/React.createElement(TabList, {
    tabs: TRAJECTORY.map(x => x.label),
    value: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '26px',
      fontWeight: 'var(--font-weight-light)',
      color: 'var(--color-ghost-white)',
      lineHeight: 1.3,
      letterSpacing: 'var(--tracking-default)',
      marginBottom: '32px',
      maxWidth: '720px'
    }
  }, t.title), /*#__PURE__*/React.createElement(DashList, {
    items: t.items
  }))));
}
Object.assign(window, {
  Trajectory
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Trajectory.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ArrowLink = __ds_scope.ArrowLink;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.DashList = __ds_scope.DashList;

__ds_ns.ExplorePill = __ds_scope.ExplorePill;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.ArticleRow = __ds_scope.ArticleRow;

__ds_ns.ChoiceBlock = __ds_scope.ChoiceBlock;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.NavCapsule = __ds_scope.NavCapsule;

__ds_ns.ScrollCue = __ds_scope.ScrollCue;

__ds_ns.TabList = __ds_scope.TabList;

__ds_ns.GlassCapsule = __ds_scope.GlassCapsule;

__ds_ns.MediaCard = __ds_scope.MediaCard;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

})();
