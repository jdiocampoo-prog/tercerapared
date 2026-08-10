import React from "react";
export function Input({ label, placeholder, type = "text", value, onChange }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: "8px", fontFamily: "var(--font-body)" }}>
      {label && <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--cream-dim)", letterSpacing: "var(--tracking-wide)", textTransform: "uppercase" }}>{label}</span>}
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} style={{
        background: "var(--bg-surface)", border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-md)", padding: "12px 16px", color: "var(--cream)",
        fontSize: "15px", fontFamily: "var(--font-body)", outline: "none",
      }} onFocus={(e) => (e.target.style.borderColor = "var(--lime)")} onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")} />
    </label>
  );
}
