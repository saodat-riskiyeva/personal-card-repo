import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
      <Skill skill="JavaScript" emoji="⛱️" color="#234567" />
      <Skill skill="HTML + CSS" emoji="🙋" color="red" />
      <Skill skill="React" emoji="😍" color="yellow" />
      <Skill skill="Redux" emoji="🌞" color="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span> {props.emoji}</span>
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
