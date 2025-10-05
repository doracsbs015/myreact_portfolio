import { FaJava, FaPython, FaReact, FaNodeJs, FaGithub, FaJs, FaFileExcel, FaDatabase } from "react-icons/fa"; 
import { 
  SiCplusplus, SiC, SiR, SiPostman, SiExpress, SiMongodb, 
  SiHackerrank, SiCodechef, SiGeeksforgeeks, SiCanva, SiLeetcode, 
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

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
          <div className="icon-card"><FaJs className="icon" /><p>JavaScript</p></div>
          <div className="icon-card"><FaDatabase className="icon" /><p>SQL</p></div>
        </div>
      </div>

      {/* Tools */}
      <div className="skills-category">
        <h3>Tools</h3>
        <div className="skills-grid">
          <div className="icon-card"><SiPostman className="icon" /><p>Postman</p></div>
          <div className="icon-card"><FaGithub className="icon" /><p>GitHub</p></div>
          <div className="icon-card"><SiCanva className="icon" /><p>Canva</p></div>
          <div className="icon-card"><FaFileExcel className="icon" /><p>Excel</p></div>
          <div className="icon-card"><VscVscode className="icon" /><p>VS Code</p></div>
          <div className="icon-card"><FaFileExcel className="icon" /><p>MS Word</p></div>
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

        {/* LeetCode */}
        <div className="profile-section">
          <h4>
            <a href="https://leetcode.com/u/doracsbs015/" target="_blank" rel="noreferrer">
              <SiLeetcode /> LeetCode
            </a>
          </h4>
          <iframe 
            src="https://leetcard.jacoblin.cool/doracsbs015?ext=contest" 
            frameBorder="0" 
            title="LeetCode Stats"
            className="leet-iframe"
          />
        </div>

        {/* Other Coding Platforms */}
        <div className="profile-section">
          <h4 className="other-platforms-heading">Other Platforms</h4>
          <div className="profile-links">
            <a href="https://www.hackerrank.com/profile/dhora_m2023csbs" target="_blank" rel="noreferrer">
              <SiHackerrank /> HackerRank
            </a>
            <a href="https://www.codechef.com/users/doracsbs015" target="_blank" rel="noreferrer">
              <SiCodechef /> CodeChef
            </a>
            <a href="https://auth.geeksforgeeks.org/user/yourId" target="_blank" rel="noreferrer">
              <SiGeeksforgeeks /> GeeksforGeeks
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
