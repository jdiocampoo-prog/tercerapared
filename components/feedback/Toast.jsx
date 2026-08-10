import React from "react";
export function Toast({ message, tone = "default" }) {
  const tones = { default: "var(--bg-surface-raised)", success: "var(--lime)" };
  const textColor = tone === "success" ? "var(--near-black)" : "var(--cream)";
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: "10px",
      background: tones[tone], color: textColor, fontFamily: "var(--font-body)",
      fontSize: "14px", fontWeight: 600, padding: "12px 20px",
      borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-pop)",
    }}>{message}</div>
  );
}
