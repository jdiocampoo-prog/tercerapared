import React from "react";
export function Switch({ checked, onChange, label }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: "12px", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--cream)" }}>
      <span onClick={onChange} style={{
        width: "44px", height: "26px", borderRadius: "var(--radius-pill)",
        background: checked ? "var(--lime)" : "var(--bg-surface-raised)",
        border: "1px solid var(--border-subtle)", position: "relative",
        transition: "background var(--duration-normal) var(--ease-standard)",
      }}>
        <span style={{
          position: "absolute", top: "2px", left: checked ? "20px" : "2px",
          width: "20px", height: "20px", borderRadius: "50%",
          background: checked ? "var(--near-black)" : "var(--cream-dim)",
          transition: "left var(--duration-normal) var(--ease-standard)",
        }} />
      </span>
      {label}
    </label>
  );
}
