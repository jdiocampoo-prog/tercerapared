function SiteHeader({ active = "inicio" }) {
  const links = [["inicio","Inicio"],["contenido","Contenido"],["torneos","Torneos"],["comunidad","Comunidad"]];
  return (
    <header style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "20px 48px", fontFamily: "var(--font-body)",
    }}>
      <img src="../../assets/logo-lockup-dark-bg.png" alt="Tercera Pared" style={{ height: "34px", objectFit: "contain" }} />
      <nav style={{ display: "flex", gap: "32px" }}>
        {links.map(([key, label]) => (
          <a key={key} href="#" style={{
            color: active === key ? "var(--lime)" : "var(--cream-dim)",
            fontWeight: 700, fontSize: "14px", letterSpacing: "var(--tracking-wide)",
            textTransform: "uppercase", textDecoration: "none",
          }}>{label}</a>
        ))}
      </nav>
      <button style={{
        background: "var(--lime)", color: "var(--near-black)", border: "none",
        borderRadius: "var(--radius-pill)", padding: "12px 24px", fontWeight: 700,
        fontSize: "14px", cursor: "pointer",
      }}>Únete gratis</button>
    </header>
  );
}
