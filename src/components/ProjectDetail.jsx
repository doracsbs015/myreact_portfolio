
import { useParams, useNavigate } from "react-router-dom"; 
import projects from "../data/projects";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[id];

  if (!project) return <p>Project not found</p>;

  const handleBack = () => {
    navigate("/"); // go back to main page
    setTimeout(() => {
      const section = document.getElementById("projects");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 50); // slight delay to ensure page renders
  };

  return (
    <section className="project-detail-section">
      <button className="back-btn" onClick={handleBack}>← Back</button>

      <h2 className="project-title">{project.title}</h2>

      <img src={`/${project.image}`} alt={project.title} className="project-detail-img" />

      <p className="project-full-desc">{project.description}</p>

      <div className="project-tech-stack">
        {project.tech.map((tech, i) => (
          <span key={i} className="tech-item">{tech}</span>
        ))}
      </div>

      <div className="project-links-detail">
        {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>}
        {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live</a>}
      </div>
    </section>
  );
};

export default ProjectDetail;

