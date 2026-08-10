function PostCard({ img, tag, title, meta }) {
  return (
    <div style={{
      background: "var(--bg-surface)", borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border-subtle)", overflow: "hidden", boxShadow: "var(--shadow-card)",
    }}>
      <div style={{ height: "180px", background: img, display: "flex", alignItems: "flex-end", padding: "16px" }}>
        <span style={{ background: "var(--lime)", color: "var(--near-black)", fontWeight: 700, fontSize: "12px", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", padding: "5px 12px", borderRadius: "var(--radius-pill)" }}>{tag}</span>
      </div>
      <div style={{ padding: "20px" }}>
        <h3 style={{ fontFamily: "var(--font-secondary)", fontWeight: 600, fontSize: "19px", color: "var(--cream)", margin: "0 0 8px" }}>{title}</h3>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--cream-dim)" }}>{meta}</span>
      </div>
    </div>
  );
}
function ContentFeed() {
  const posts = [
    { img: "linear-gradient(135deg,var(--navy),var(--teal))", tag: "Progreso", title: "5 ejercicios para subir de categoría 4 a 3", meta: "Entrenamiento · 4 min" },
    { img: "linear-gradient(135deg,var(--teal),var(--sky))", tag: "Cultura", title: "Por qué el pádel se tomó Quito este año", meta: "Cultura · 6 min" },
    { img: "linear-gradient(135deg,#1d1d1b,var(--navy))", tag: "Torneo", title: "Así se vivió el Open Tercera Pared", meta: "Torneos · 3 min" },
  ];
  return (
    <section style={{ padding: "0 48px 80px" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "28px" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-display-sm)", color: "var(--cream)", textTransform: "uppercase", margin: 0 }}>Contenido reciente</h2>
        <a href="#" style={{ color: "var(--lime)", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>Ver todo →</a>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }}>
        {posts.map((p) => <PostCard key={p.title} {...p} />)}
      </div>
    </section>
  );
}
