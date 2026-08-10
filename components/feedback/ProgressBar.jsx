import React from "react";
export function ProgressBar({ value = 0, max = 100 }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div style={{ width: "100%", height: "8px", borderRadius: "var(--radius-pill)", background: "var(--bg-surface-raised)", overflow: "hidden" }}>
      <div style={{ width: pct + "%", height: "100%", background: "var(--lime)", borderRadius: "var(--radius-pill)", transition: "width var(--duration-normal) var(--ease-standard)" }} />
    </div>
  );
}
