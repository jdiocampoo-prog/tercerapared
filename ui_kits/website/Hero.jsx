function Hero() {
  return (
    <section style={{
      display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "28px",
      padding: "80px 48px 100px", fontFamily: "var(--font-body)",
    }}>
      <span style={{
        color: "var(--lime)", fontFamily: "var(--font-secondary)", fontWeight: 700,
        fontSize: "14px", letterSpacing: "var(--tracking-wider)", textTransform: "uppercase",
      }}>Comunidad de pádel LATAM</span>
      <h1 style={{
        fontFamily: "var(--font-display)", fontSize: "var(--text-display-xl)",
        lineHeight: "var(--lh-tight)", color: "var(--cream)", margin: 0,
        textTransform: "uppercase", maxWidth: "980px",
      }}>Cultura, progreso<br/>y estilo. Dentro<br/>y fuera de la cancha.</h1>
      <p style={{ color: "var(--cream-dim)", fontSize: "18px", maxWidth: "560px", lineHeight: "var(--lh-normal)", margin: 0 }}>
        Rankings, torneos, grupos de WhatsApp y contenido hecho por alguien que juega. Todo lo que necesitas para mejorar tu juego, en un solo lugar.
      </p>
      <div style={{ display: "flex", gap: "16px" }}>
        <button style={{ background: "var(--lime)", color: "var(--near-black)", border: "none", borderRadius: "var(--radius-pill)", padding: "16px 32px", fontWeight: 700, fontSize: "15px", cursor: "pointer" }}>Únete a la comunidad</button>
        <button style={{ background: "transparent", color: "var(--cream)", border: "1.5px solid var(--border-strong)", borderRadius: "var(--radius-pill)", padding: "16px 32px", fontWeight: 700, fontSize: "15px", cursor: "pointer" }}>Ver contenido</button>
      </div>
    </section>
  );
}
