/* @ds-bundle: {"format":4,"namespace":"TerceraParedDesignSystem_689e62","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"86df73f7da65","components/core/Button.jsx":"803e2a99af6e","components/core/Card.jsx":"5c344153f2d5","components/core/Tag.jsx":"49300d4f3e17","components/feedback/ProgressBar.jsx":"dc28620404e1","components/feedback/Toast.jsx":"40ca32ec7df3","components/forms/Checkbox.jsx":"d835743ba60c","components/forms/Input.jsx":"44920418f61c","components/forms/Select.jsx":"8dd6ac97d450","components/forms/Switch.jsx":"9d6a7acd8327","components/navigation/Tabs.jsx":"cb5803f07f9f","ui_kits/website/ContentFeed.jsx":"3a88279bdafc","ui_kits/website/Hero.jsx":"41f27c3ce472","ui_kits/website/RankingsPanel.jsx":"31bd81d44485","ui_kits/website/SiteFooter.jsx":"f61a7d5d1cc7","ui_kits/website/SiteHeader.jsx":"1438d220ff16"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TerceraParedDesignSystem_689e62 = window.TerceraParedDesignSystem_689e62 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = "lime"
}) {
  const tones = {
    lime: {
      background: "var(--lime)",
      color: "var(--near-black)"
    },
    outline: {
      background: "transparent",
      color: "var(--cream)",
      border: "1px solid var(--border-strong)"
    },
    sky: {
      background: "var(--sky)",
      color: "var(--near-black)"
    },
    dark: {
      background: "var(--bg-surface-raised)",
      color: "var(--cream)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "12px",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      padding: "5px 12px",
      borderRadius: "var(--radius-pill)",
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  disabled = false,
  onClick
}) {
  const pad = size === "sm" ? "8px 16px" : size === "lg" ? "16px 32px" : "12px 24px";
  const fontSize = size === "sm" ? "13px" : size === "lg" ? "17px" : "15px";
  const base = {
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    fontSize,
    padding: pad,
    borderRadius: "var(--radius-pill)",
    border: "1.5px solid transparent",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "transform var(--duration-fast) var(--ease-standard), background var(--duration-fast) var(--ease-standard)",
    letterSpacing: "0.01em"
  };
  const variants = {
    primary: {
      background: "var(--lime)",
      color: "var(--near-black)"
    },
    secondary: {
      background: "transparent",
      color: "var(--cream)",
      border: "1.5px solid var(--border-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--cream)"
    },
    inverse: {
      background: "var(--cream)",
      color: "var(--near-black)"
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    style: {
      ...base,
      ...variants[variant]
    },
    disabled: disabled,
    onClick: onClick,
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = "scale(0.96)"),
    onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
    onMouseLeave: e => e.currentTarget.style.transform = "scale(1)"
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padding = "24px",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-surface)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding,
      boxShadow: "var(--shadow-card)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  active = false,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      fontWeight: 600,
      padding: "8px 16px",
      borderRadius: "var(--radius-pill)",
      cursor: "pointer",
      border: active ? "1px solid var(--lime)" : "1px solid var(--border-subtle)",
      background: active ? "rgba(186,244,30,0.12)" : "transparent",
      color: active ? "var(--lime)" : "var(--cream-dim)",
      transition: "all var(--duration-fast) var(--ease-standard)"
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  max = 100
}) {
  const pct = Math.min(100, Math.round(value / max * 100));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "8px",
      borderRadius: "var(--radius-pill)",
      background: "var(--bg-surface-raised)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + "%",
      height: "100%",
      background: "var(--lime)",
      borderRadius: "var(--radius-pill)",
      transition: "width var(--duration-normal) var(--ease-standard)"
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  message,
  tone = "default"
}) {
  const tones = {
    default: "var(--bg-surface-raised)",
    success: "var(--lime)"
  };
  const textColor = tone === "success" ? "var(--near-black)" : "var(--cream)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      background: tones[tone],
      color: textColor,
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      fontWeight: 600,
      padding: "12px 20px",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-pop)"
    }
  }, message);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    style: {
      display: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "20px",
      height: "20px",
      borderRadius: "6px",
      border: checked ? "none" : "1.5px solid var(--border-strong)",
      background: checked ? "var(--lime)" : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--near-black)",
      fontSize: "13px",
      fontWeight: 900
    }
  }, checked ? "✓" : ""), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      fontFamily: "var(--font-body)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: 600,
      color: "var(--cream-dim)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase"
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: {
      background: "var(--bg-surface)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      padding: "12px 16px",
      color: "var(--cream)",
      fontSize: "15px",
      fontFamily: "var(--font-body)",
      outline: "none"
    },
    onFocus: e => e.target.style.borderColor = "var(--lime)",
    onBlur: e => e.target.style.borderColor = "var(--border-subtle)"
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const {
  useState
} = React;
function Select({
  label,
  options = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      fontFamily: "var(--font-body)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: 600,
      color: "var(--cream-dim)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase"
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    style: {
      background: "var(--bg-surface)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      padding: "12px 16px",
      color: "var(--cream)",
      fontSize: "15px",
      fontFamily: "var(--font-body)",
      outline: "none",
      appearance: "none"
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: onChange,
    style: {
      width: "44px",
      height: "26px",
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--lime)" : "var(--bg-surface-raised)",
      border: "1px solid var(--border-subtle)",
      position: "relative",
      transition: "background var(--duration-normal) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "2px",
      left: checked ? "20px" : "2px",
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      background: checked ? "var(--near-black)" : "var(--cream-dim)",
      transition: "left var(--duration-normal) var(--ease-standard)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const {
  useState
} = React;
function Tabs({
  items = [],
  defaultActive = 0
}) {
  const [active, setActive] = useState(defaultActive);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "28px",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("button", {
    key: it.label,
    onClick: () => setActive(i),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "0 0 14px 0",
      fontSize: "15px",
      fontWeight: 700,
      color: active === i ? "var(--cream)" : "var(--cream-dim)",
      borderBottom: active === i ? "2px solid var(--lime)" : "2px solid transparent"
    }
  }, it.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "20px",
      color: "var(--cream)"
    }
  }, items[active]?.content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContentFeed.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PostCard({
  img,
  tag,
  title,
  meta
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-surface)",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border-subtle)",
      overflow: "hidden",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "180px",
      background: img,
      display: "flex",
      alignItems: "flex-end",
      padding: "16px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--lime)",
      color: "var(--near-black)",
      fontWeight: 700,
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      padding: "5px 12px",
      borderRadius: "var(--radius-pill)"
    }
  }, tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-secondary)",
      fontWeight: 600,
      fontSize: "19px",
      color: "var(--cream)",
      margin: "0 0 8px"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      color: "var(--cream-dim)"
    }
  }, meta)));
}
function ContentFeed() {
  const posts = [{
    img: "linear-gradient(135deg,var(--navy),var(--teal))",
    tag: "Progreso",
    title: "5 ejercicios para subir de categoría 4 a 3",
    meta: "Entrenamiento · 4 min"
  }, {
    img: "linear-gradient(135deg,var(--teal),var(--sky))",
    tag: "Cultura",
    title: "Por qué el pádel se tomó Quito este año",
    meta: "Cultura · 6 min"
  }, {
    img: "linear-gradient(135deg,#1d1d1b,var(--navy))",
    tag: "Torneo",
    title: "Así se vivió el Open Tercera Pared",
    meta: "Torneos · 3 min"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 48px 80px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginBottom: "28px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display-sm)",
      color: "var(--cream)",
      textTransform: "uppercase",
      margin: 0
    }
  }, "Contenido reciente"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--lime)",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "14px",
      textDecoration: "none"
    }
  }, "Ver todo \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "24px"
    }
  }, posts.map(p => /*#__PURE__*/React.createElement(PostCard, _extends({
    key: p.title
  }, p)))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContentFeed.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "28px",
      padding: "80px 48px 100px",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--lime)",
      fontFamily: "var(--font-secondary)",
      fontWeight: 700,
      fontSize: "14px",
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase"
    }
  }, "Comunidad de p\xE1del LATAM"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display-xl)",
      lineHeight: "var(--lh-tight)",
      color: "var(--cream)",
      margin: 0,
      textTransform: "uppercase",
      maxWidth: "980px"
    }
  }, "Cultura, progreso", /*#__PURE__*/React.createElement("br", null), "y estilo. Dentro", /*#__PURE__*/React.createElement("br", null), "y fuera de la cancha."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--cream-dim)",
      fontSize: "18px",
      maxWidth: "560px",
      lineHeight: "var(--lh-normal)",
      margin: 0
    }
  }, "Rankings, torneos, grupos de WhatsApp y contenido hecho por alguien que juega. Todo lo que necesitas para mejorar tu juego, en un solo lugar."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: "var(--lime)",
      color: "var(--near-black)",
      border: "none",
      borderRadius: "var(--radius-pill)",
      padding: "16px 32px",
      fontWeight: 700,
      fontSize: "15px",
      cursor: "pointer"
    }
  }, "\xDAnete a la comunidad"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "transparent",
      color: "var(--cream)",
      border: "1.5px solid var(--border-strong)",
      borderRadius: "var(--radius-pill)",
      padding: "16px 32px",
      fontWeight: 700,
      fontSize: "15px",
      cursor: "pointer"
    }
  }, "Ver contenido")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/RankingsPanel.jsx
try { (() => {
function RankingsPanel() {
  const rows = [{
    rank: 1,
    name: "Andrés Salazar",
    club: "Padel Club Cumbayá",
    pts: "1,240"
  }, {
    rank: 2,
    name: "María José Ruiz",
    club: "La Carolina Padel",
    pts: "1,180"
  }, {
    rank: 3,
    name: "Diego Fuentes",
    club: "Padel Club Cumbayá",
    pts: "1,095"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 48px 100px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: "40px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--lime)",
      fontFamily: "var(--font-secondary)",
      fontWeight: 700,
      fontSize: "13px",
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase"
    }
  }, "Ecosistema"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display-md)",
      color: "var(--cream)",
      textTransform: "uppercase",
      margin: "12px 0 16px",
      lineHeight: "var(--lh-tight)"
    }
  }, "Rankings de tu club"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--cream-dim)",
      fontSize: "16px",
      lineHeight: "var(--lh-normal)",
      maxWidth: "440px",
      margin: "0 0 24px"
    }
  }, "Sigue tu progreso real: puntos, torneos jugados y tu posici\xF3n frente a la comunidad de tu ciudad."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "320px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      color: "var(--cream-dim)",
      marginBottom: "8px"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Tu progreso a categor\xEDa 3"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--lime)",
      fontWeight: 700
    }
  }, "62%")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "8px",
      borderRadius: "var(--radius-pill)",
      background: "var(--bg-surface-raised)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "62%",
      height: "100%",
      background: "var(--lime)",
      borderRadius: "var(--radius-pill)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-surface)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: "8px",
      boxShadow: "var(--shadow-card)"
    }
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.rank,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      padding: "16px",
      borderBottom: r.rank < 3 ? "1px solid var(--border-subtle)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "26px",
      color: r.rank === 1 ? "var(--lime)" : "var(--cream-dim)",
      minWidth: "32px"
    }
  }, r.rank), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--cream)",
      fontWeight: 600,
      fontSize: "15px",
      fontFamily: "var(--font-body)"
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--cream-dim)",
      fontSize: "13px",
      fontFamily: "var(--font-body)"
    }
  }, r.club)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sky)",
      fontWeight: 700,
      fontFamily: "var(--font-body)",
      fontSize: "14px"
    }
  }, r.pts, " pts"))))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/RankingsPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFooter.jsx
try { (() => {
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "40px 48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderTop: "1px solid var(--border-subtle)",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup-dark-bg.png",
    alt: "Tercera Pared",
    style: {
      height: "24px",
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--cream-dim)",
      fontSize: "13px"
    }
  }, "\xA9 2026 Tercera Pared \xB7 Quito, Ecuador"));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
function SiteHeader({
  active = "inicio"
}) {
  const links = [["inicio", "Inicio"], ["contenido", "Contenido"], ["torneos", "Torneos"], ["comunidad", "Comunidad"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 48px",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup-dark-bg.png",
    alt: "Tercera Pared",
    style: {
      height: "34px",
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "32px"
    }
  }, links.map(([key, label]) => /*#__PURE__*/React.createElement("a", {
    key: key,
    href: "#",
    style: {
      color: active === key ? "var(--lime)" : "var(--cream-dim)",
      fontWeight: 700,
      fontSize: "14px",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      textDecoration: "none"
    }
  }, label))), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "var(--lime)",
      color: "var(--near-black)",
      border: "none",
      borderRadius: "var(--radius-pill)",
      padding: "12px 24px",
      fontWeight: 700,
      fontSize: "14px",
      cursor: "pointer"
    }
  }, "\xDAnete gratis"));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
