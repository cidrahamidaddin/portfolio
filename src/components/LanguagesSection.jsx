export default function LanguagesSection() {
  const languages = [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Good" },
  ];

  return (
    <section id="languages" className="section">
      <h2 className="section-title">Languages</h2>

      <div className="cards">
        {languages.map((lang) => (
          <div key={lang.name} className="info-card">
            <div className="info-title">{lang.name}</div>
            <div className="info-sub">{lang.level}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
