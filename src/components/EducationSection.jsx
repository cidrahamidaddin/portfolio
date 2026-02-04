export default function EducationSection() {
  const education = [
    { title: "Degree Program", place: "University Name", years: "2022–2026" },
    { title: "High School", place: "School Name", years: "2019–2022" },
  ];

  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>

      <div className="cards">
        {education.map((item) => (
          <div key={item.title} className="info-card">
            <div className="info-title">{item.title}</div>
            <div className="info-sub">{item.place}</div>
            <div className="info-meta">{item.years}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
