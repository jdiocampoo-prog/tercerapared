import React from "react";
export function Tag({ children, active = false, onClick }) {
  return (
    <button onClick={onClick} style={{
      fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600,
      padding: "8px 16px", borderRadius: "var(--radius-pill)", cursor: "pointer",
      border: active ? "1px solid var(--lime)" : "1px solid var(--border-subtle)",
      background: active ? "rgba(186,244,30,0.12)" : "transparent",
      color: active ? "var(--lime)" : "var(--cream-dim)",
      transition: "all var(--duration-fast) var(--ease-standard)",
    }}>{children}</button>
  );
}
