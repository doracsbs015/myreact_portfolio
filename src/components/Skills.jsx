import { FaJava, FaPython, FaReact, FaNodeJs, FaGithub, FaCode } from "react-icons/fa";
import { SiCplusplus, SiC, SiR, SiPostman, SiExpress, SiMongodb } from "react-icons/si";


import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

      {/* Programming Languages */}
      <div className="skills-category">
        <h3>Programming Languages</h3>
        <div className="skills-grid">
          <div className="icon-card"><SiC className="icon" /><p>C</p></div>
          <div className="icon-card"><SiCplusplus className="icon" /><p>C++</p></div>
          <div className="icon-card"><FaJava className="icon" /><p>Java</p></div>
          <div className="icon-card"><FaPython className="icon" /><p>Python</p></div>
          <div className="icon-card"><SiR className="icon" /><p>R</p></div>
        </div>
      </div>

      {/* Tools */}
      <div className="skills-category">
        <h3>Tools</h3>
        <div className="skills-grid">
          
          <div className="icon-card"><SiPostman className="icon" /><p>Postman</p></div>
          <div className="icon-card"><FaGithub className="icon" /><p>GitHub</p></div>
        </div>
      </div>

      {/* Frameworks / Libraries */}
      <div className="skills-category">
        <h3>Frameworks / Libraries</h3>
        <div className="skills-grid">
          <div className="icon-card"><FaReact className="icon" /><p>React</p></div>
          <div className="icon-card"><FaNodeJs className="icon" /><p>Node.js</p></div>
          <div className="icon-card"><SiExpress className="icon" /><p>Express</p></div>
          <div className="icon-card"><SiMongodb className="icon" /><p>MongoDB</p></div>
        </div>
      </div>

      {/* Coding Profiles */}
      <div className="coding-profiles">
        <h3>Coding Profiles</h3>
        <iframe 
          src="https://leetcard.jacoblin.cool/doracsbs015" 
          frameBorder="0" 
          title="LeetCode Stats"
          className="leet-iframe"
        />
        <div className="profile-links">
          <a href="https://www.hackerrank.com/yourId" target="_blank">HackerRank</a>
          <a href="https://www.codechef.com/users/yourId" target="_blank">CodeChef</a>
        </div>
      </div>
    </section>
  );
}

export default Skills;
