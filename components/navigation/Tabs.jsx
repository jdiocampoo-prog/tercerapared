import React, { useState } from "react";
export function Tabs({ items = [], defaultActive = 0 }) {
  const [active, setActive] = useState(defaultActive);
  return (
    <div style={{ fontFamily: "var(--font-body)" }}>
      <div style={{ display: "flex", gap: "28px", borderBottom: "1px solid var(--border-subtle)" }}>
        {items.map((it, i) => (
          <button key={it.label} onClick={() => setActive(i)} style={{
            background: "none", border: "none", cursor: "pointer",
            padding: "0 0 14px 0", fontSize: "15px", fontWeight: 700,
            color: active === i ? "var(--cream)" : "var(--cream-dim)",
            borderBottom: active === i ? "2px solid var(--lime)" : "2px solid transparent",
          }}>{it.label}</button>
        ))}
      </div>
      <div style={{ paddingTop: "20px", color: "var(--cream)" }}>{items[active]?.content}</div>
    </div>
  );
}
