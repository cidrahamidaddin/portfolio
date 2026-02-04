export default function Hero() {
  return (
    <section id="home" className="section">
      <div style={{ textAlign: "center", padding: "22px 0" }}>
        <h1 style={{ margin: 0, fontSize: 42 }}>Your Name</h1>
        <p style={{ margin: "10px 0 0", fontWeight: 700 }}>Frontend Developer</p>
        <p style={{ margin: "6px 0 0", opacity: 0.85 }}>email@example.com</p>

        <p className="summary">
          Write 2–3 lines about yourself here. Keep it simple and workshop-friendly.
        </p>
      </div>
    </section>
  );
}
