import "./Projects.css";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={`/${project.image}`} alt={project.title} className="project-img" />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-item">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github && <a href={project.github} target="_blank">GitHub</a>}
                {project.live && <a href={project.live} target="_blank">Live Demo</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
