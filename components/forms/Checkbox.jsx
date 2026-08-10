import React from "react";
export function Checkbox({ label, checked, onChange }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: "10px", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--cream)" }}>
      <input type="checkbox" checked={checked} onChange={onChange} style={{ display: "none" }} />
      <span style={{
        width: "20px", height: "20px", borderRadius: "6px",
        border: checked ? "none" : "1.5px solid var(--border-strong)",
        background: checked ? "var(--lime)" : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "var(--near-black)", fontSize: "13px", fontWeight: 900,
      }}>{checked ? "✓" : ""}</span>
      {label}
    </label>
  );
}
