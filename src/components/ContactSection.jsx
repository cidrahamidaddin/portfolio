import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 2000);
  }

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10 }}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          style={{
            padding: 10,
            borderRadius: 12,
            border: "1px solid rgba(15,23,42,0.15)",
          }}
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your email"
          style={{
            padding: 10,
            borderRadius: 12,
            border: "1px solid rgba(15,23,42,0.15)",
          }}
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your message"
          rows={4}
          style={{
            padding: 10,
            borderRadius: 12,
            border: "1px solid rgba(15,23,42,0.15)",
            resize: "vertical",
          }}
        />

        <div className="contact">
          <button className="button" type="submit">
            Send
          </button>
          <a className="button ghost" href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="button ghost" href="https://linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        {sent && <div className="info-sub">✅ Message sent!</div>}
      </form>
    </section>
  );
}
