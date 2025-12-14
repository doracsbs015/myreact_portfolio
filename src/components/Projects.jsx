// // import { useState } from "react"; 
// // import "./Projects.css";
// // import projects from "../data/projects";

// // function Projects() {
// //   const [showAll, setShowAll] = useState(false);
// //   const [expandedCards, setExpandedCards] = useState({}); 

// //   const displayedProjects = showAll ? projects : projects.slice(0, 6);

// //   const toggleShow = () => setShowAll(!showAll);

// //   const toggleCard = (index) => {
// //     setExpandedCards((prev) => ({
// //       ...prev,
// //       [index]: !prev[index],
// //     }));
// //   };

// //   return (
// //     <section id="projects" className="projects-section">
// //       <h2>Projects</h2>

// //       <div className="projects-grid">
// //         {displayedProjects.map((project, index) => {
// //           const isExpanded = expandedCards[index];
// //           const needsExpand = project.description.length > 150; // approx. 2 lines
// //           return (
// //             <div className="project-card" key={index}>
// //               <img src={`/${project.image}`} alt={project.title} className="project-img" />
// //               <div className="project-content">
// //                 <h3>{project.title}</h3>
                
// //                 <p className={`project-desc ${isExpanded ? "expanded" : ""}`}>
// //                   {project.description}
// //                 </p>

// //                 {needsExpand && (
// //                   <button 
// //                     className="view-more-btn" 
// //                     onClick={() => toggleCard(index)}
// //                   >
// //                     {isExpanded ? "View Less" : "View More"}
// //                   </button>
// //                 )}

// //                 <div className="tech-stack">
// //                   {project.tech.map((tech, i) => (
// //                     <span key={i} className="tech-item">{tech}</span>
// //                   ))}
// //                 </div>

// //                 <div className="project-links">
// //                   {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>}
// //                   {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live</a>}
// //                 </div>
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>

// //       {projects.length > 6 && (
// //         <button className="toggle-btn" onClick={toggleShow}>
// //           {showAll ? "Hide Many Projects" : "Show Many Projects"}
// //         </button>
// //       )}
// //     </section>
// //   );
// // }

// // export default Projects;
// import { useState } from "react";  
// import "./Projects.css";
// import projects from "../data/projects";
// import { Link } from "react-router-dom"; 

// function Projects() {
//   const [showAll, setShowAll] = useState(false);
//   const [expandedCards, setExpandedCards] = useState({}); 

//   const displayedProjects = showAll ? projects : projects.slice(0, 3);

//   const toggleShow = () => setShowAll(!showAll);

//   const toggleCard = (index) => {
//     setExpandedCards((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   return (
//     <section id="projects" className="projects-section">
//       <h2>Projects</h2>

//       <div className="projects-grid">
//         {displayedProjects.map((project, index) => {
//           const isExpanded = expandedCards[index];
//           const needsExpand = project.description.length > 150; // approx. 2 lines
//           return (
//             <div className="project-card" key={index}>
//               {/* 👇 Wrap image + title in Link to detail page */}
//               <Link to={`/project/${index}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//                 <img src={`/${project.image}`} alt={project.title} className="project-img" />
//                 <div className="project-content">
//                   <h3>{project.title}</h3>
//                   <p className={`project-desc ${isExpanded ? "expanded" : ""}`}>
//                     {project.description}
//                   </p>
//                 </div>
//               </Link>

//               {needsExpand && (
//                 <button 
//                   className="view-more-btn" 
//                   onClick={() => toggleCard(index)}
//                 >
//                   {isExpanded ? "View Less" : "View More"}
//                 </button>
//               )}

//               <div className="tech-stack">
//                 {project.tech.map((tech, i) => (
//                   <span key={i} className="tech-item">{tech}</span>
//                 ))}
//               </div>

//               <div className="project-links">
//                 {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>}
//                 {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live</a>}
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {projects.length > 6 && (
//         <button className="toggle-btn" onClick={toggleShow}>
//           {showAll ? "Hide Mini Projects" : "Show Mini Projects"}
//         </button>
//       )}
//     </section>
//   );
// }

// export default Projects;

import { useState } from "react";  
import "./Projects.css";
import projects from "../data/projects";
import { Link } from "react-router-dom"; 

function Projects() {
  const [showAll, setShowAll] = useState(false); 

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  const toggleShow = () => setShowAll(!showAll);

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {displayedProjects.map((project, index) => {
          const needsExpand = project.description.length > 150; // approx. 2 lines
          return (
            <div className="project-card" key={index}>
              
              {/* Clicking image or title navigates */}
              <Link to={`/project/${index}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={`/${project.image}`} alt={project.title} className="project-img" />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-desc">
                    {project.description.length > 150
                      ? project.description.slice(0, 150) + "..."
                      : project.description}
                  </p>
                </div>
              </Link>

              {/* View More button navigates too */}
              {needsExpand && (
                <Link to={`/project/${index}`} style={{ textDecoration: 'none' }}>
                  <button className="view-more-btn">View More</button>
                </Link>
              )}

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-item">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>}
                {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live</a>}
              </div>
            </div>
          );
        })}
      </div>

      {projects.length > 3 && (
        <button className="toggle-btn" onClick={toggleShow}>
          {showAll ? "Hide Mini Projects" : "Show Mini Projects"}
        </button>
      )}
    </section>
  );
}

export default Projects;
