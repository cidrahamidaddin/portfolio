import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import LanguagesSection from "./components/LanguagesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState("dark"); 

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div className={`page ${theme}`}>
      <div className="box">
        <Navbar onToggleTheme={toggleTheme} />

        <main className="content">
          <section id="home" className="section">
            <ProfileCard
              name="Your Name"
              role="Frontend Developer"
              email="email@example.com"
            />
          </section>

          <SkillsSection />
          <EducationSection />
          <LanguagesSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
