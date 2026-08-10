import React from "react";
export function Card({ children, padding = "24px", style = {} }) {
  return (
    <div style={{
      background: "var(--bg-surface)", border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)", padding, boxShadow: "var(--shadow-card)",
      ...style,
    }}>{children}</div>
  );
}
