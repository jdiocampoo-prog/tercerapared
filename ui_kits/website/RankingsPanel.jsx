function RankingsPanel() {
  const rows = [
    { rank: 1, name: "Andrés Salazar", club: "Padel Club Cumbayá", pts: "1,240" },
    { rank: 2, name: "María José Ruiz", club: "La Carolina Padel", pts: "1,180" },
    { rank: 3, name: "Diego Fuentes", club: "Padel Club Cumbayá", pts: "1,095" },
  ];
  return (
    <section style={{ padding: "0 48px 100px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "40px", alignItems: "start" }}>
        <div>
          <span style={{ color: "var(--lime)", fontFamily: "var(--font-secondary)", fontWeight: 700, fontSize: "13px", letterSpacing: "var(--tracking-wider)", textTransform: "uppercase" }}>Ecosistema</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-display-md)", color: "var(--cream)", textTransform: "uppercase", margin: "12px 0 16px", lineHeight: "var(--lh-tight)" }}>Rankings de tu club</h2>
          <p style={{ color: "var(--cream-dim)", fontSize: "16px", lineHeight: "var(--lh-normal)", maxWidth: "440px", margin: "0 0 24px" }}>
            Sigue tu progreso real: puntos, torneos jugados y tu posición frente a la comunidad de tu ciudad.
          </p>
          <div style={{ maxWidth: "320px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--cream-dim)", marginBottom: "8px" }}>
              <span>Tu progreso a categoría 3</span><span style={{ color: "var(--lime)", fontWeight: 700 }}>62%</span>
            </div>
            <div style={{ width: "100%", height: "8px", borderRadius: "var(--radius-pill)", background: "var(--bg-surface-raised)" }}>
              <div style={{ width: "62%", height: "100%", background: "var(--lime)", borderRadius: "var(--radius-pill)" }} />
            </div>
          </div>
        </div>
        <div style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "8px", boxShadow: "var(--shadow-card)" }}>
          {rows.map((r) => (
            <div key={r.rank} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px", borderBottom: r.rank < 3 ? "1px solid var(--border-subtle)" : "none" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "26px", color: r.rank === 1 ? "var(--lime)" : "var(--cream-dim)", minWidth: "32px" }}>{r.rank}</span>
              <div style={{ flex: 1 }}>
                <div style={{ color: "var(--cream)", fontWeight: 600, fontSize: "15px", fontFamily: "var(--font-body)" }}>{r.name}</div>
                <div style={{ color: "var(--cream-dim)", fontSize: "13px", fontFamily: "var(--font-body)" }}>{r.club}</div>
              </div>
              <span style={{ color: "var(--sky)", fontWeight: 700, fontFamily: "var(--font-body)", fontSize: "14px" }}>{r.pts} pts</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
