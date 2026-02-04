import { useState } from "react";

export default function SkillsSection() {
  const [skills, setSkills] = useState(["React", "JavaScript", "CSS"]);
  const [newSkill, setNewSkill] = useState("");

  function addSkill() {
    const trimmed = newSkill.trim();
    if (!trimmed) return;
    setSkills((prev) => [...prev, trimmed]);
    setNewSkill("");
  }

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>

      <div className="pills">
        {skills.map((skill) => (
          <span key={skill} className="pill">
            {skill}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
        <input
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Add a skill"
          style={{
            padding: 10,
            borderRadius: 12,
            border: "1px solid rgba(15,23,42,0.15)",
            flex: 1,
          }}
        />
        <button className="button ghost" type="button" onClick={addSkill}>
          Add
        </button>
      </div>
    </section>
  );
}
