function SiteFooter() {
  return (
    <footer style={{
      padding: "40px 48px", display: "flex", alignItems: "center", justifyContent: "space-between",
      borderTop: "1px solid var(--border-subtle)", fontFamily: "var(--font-body)",
    }}>
      <img src="../../assets/logo-lockup-dark-bg.png" alt="Tercera Pared" style={{ height: "24px", objectFit: "contain" }} />
      <span style={{ color: "var(--cream-dim)", fontSize: "13px" }}>© 2026 Tercera Pared · Quito, Ecuador</span>
    </footer>
  );
}
