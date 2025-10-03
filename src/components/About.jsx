import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hi! I’m Dora, a third-year B.Tech student in Computer Science and Business Systems.  
          Passionate about coding, writing, and exploring new things. I love building projects  
          that combine creativity and technology.
        </p>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>SSLC</h3>
              <span>School Name | Year</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>HSC</h3>
              <span>School Name | Year</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>B.Tech</h3>
              <span>College Name | Ongoing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
