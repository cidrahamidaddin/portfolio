import ProfileCard from "./components/ProfileCard";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <div className="box">
        {/* NAVIGATION (INSIDE THE BOX) */}
        <header className="topbar">
          <div className="brand">My Portfolio</div>

          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#languages">Languages</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        {/* CONTENT (ALSO INSIDE THE BOX) */}
        <main className="content">
          <section id="home" className="section">
            <ProfileCard
              name="Your Name"
              role="Your Role or Title"
              email="your.email@example.com"
              // photo="/me.jpg"
            />
            <p className="summary">
              Write 2–3 lines about yourself here.
            </p>
          </section>

          <section id="skills" className="section">
            <h2 className="section-title">Skills</h2>
            <div className="pills">
              <span className="pill">Skill One</span>
              <span className="pill">Skill Two</span>
              <span className="pill">Skill Three</span>
            </div>
          </section>

          <section id="education" className="section">
            <h2 className="section-title">Education</h2>
            <div className="cards">
              <div className="info-card">
                <div className="info-title">Degree or Program</div>
                <div className="info-sub">University or School</div>
                <div className="info-meta">Year – Year</div>
              </div>
              <div className="info-card">
                <div className="info-title">Another Program</div>
                <div className="info-sub">University or School</div>
                <div className="info-meta">Year – Year</div>
              </div>
            </div>
          </section>

          <section id="languages" className="section">
            <h2 className="section-title">Languages</h2>
            <div className="cards">
              <div className="info-card">
                <div className="info-title">Language</div>
                <div className="info-sub">Level</div>
              </div>
              <div className="info-card">
                <div className="info-title">Language</div>
                <div className="info-sub">Level</div>
              </div>
            </div>
          </section>

          <section id="contact" className="section">
            <h2 className="section-title">Contact</h2>
            <div className="contact">
              <a className="button" href="mailto:your.email@example.com">Email Me</a>
              <a className="button ghost" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
              <a className="button ghost" href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </section>

          <footer className="footer">© 2026 Your Name</footer>
        </main>
      </div>
    </div>
  );
}