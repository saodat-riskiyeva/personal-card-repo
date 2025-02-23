import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML-CSS",
    level: "beginner",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "beginner",
    color: "#2EA",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "beginner",
    color: "#266",
  },
  {
    skill: "Redux",
    level: "beginner",
    color: "#EFD81D",
  },
  {
    skill: "Java",
    level: "intermediate",
    color: "#60DAFB",
  },
  {
    skill: "Productivity Lab",
    level: "advanced",
    color: "#60DA",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="my phote.jpg" alt="Saodat Riskiyeva" />;
}

function Intro() {
  return (
    <div className="data">
      <h1>SAODAT RISKIYEVA</h1>
      <p>
        Full stack web developer and intrepreneur. A Millionaire. A Smart Lady.
        A Happy Wife and Loving Mother
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skillsObject) => (
        <Skill
          skill={skillsObject.skill}
          emoji={
            skillsObject.level === "beginner"
              ? "⛱️"
              : skillsObject.level === "intermediate"
              ? "🙋"
              : "🌞"
          }
          color={skillsObject.color}
        />
      ))}

      {/* <Skill skill="JavaScript" emoji="⛱️" color="#234567" />
      <Skill skill="HTML + CSS" emoji="🙋" color="red" />
      <Skill skill="React" emoji="😍" color="yellow" />
      <Skill skill="Redux" emoji="🌞" color="green" /> */}
    </div>
  );
}

function Skill({ skill, emoji, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span> {emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
