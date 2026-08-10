import React from "react";

export function Button({ children, variant = "primary", size = "md", icon, disabled = false, onClick }) {
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
    letterSpacing: "0.01em",
  };
  const variants = {
    primary: { background: "var(--lime)", color: "var(--near-black)" },
    secondary: { background: "transparent", color: "var(--cream)", border: "1.5px solid var(--border-strong)" },
    ghost: { background: "transparent", color: "var(--cream)" },
    inverse: { background: "var(--cream)", color: "var(--near-black)" },
  };
  return (
    <button
      style={{ ...base, ...variants[variant] }}
      disabled={disabled}
      onClick={onClick}
      onMouseDown={(e) => !disabled && (e.currentTarget.style.transform = "scale(0.96)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {icon}
      {children}
    </button>
  );
}
