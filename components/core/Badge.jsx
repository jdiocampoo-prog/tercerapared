import React from "react";
export function Badge({ children, tone = "lime" }) {
  const tones = {
    lime: { background: "var(--lime)", color: "var(--near-black)" },
    outline: { background: "transparent", color: "var(--cream)", border: "1px solid var(--border-strong)" },
    sky: { background: "var(--sky)", color: "var(--near-black)" },
    dark: { background: "var(--bg-surface-raised)", color: "var(--cream)" },
  };
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "6px",
      fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "12px",
      letterSpacing: "var(--tracking-wide)", textTransform: "uppercase",
      padding: "5px 12px", borderRadius: "var(--radius-pill)", ...tones[tone],
    }}>{children}</span>
  );
}
