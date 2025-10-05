import { FaLinkedin, FaGithub, FaPinterest, FaDownload } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <>
      {/* Resume / CV Section */}
      <section id="resume" className="resume-section">
        <h2>Take a Look at My Resume</h2>
        <p>More professional insights about my work experience and projects.</p>
        <a href="#" className="btn-download">
          <FaDownload className="download-icon" /> Download CV
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Get in Touch</h2>
        <p>If you’d like to collaborate or just say hi, feel free to reach out!</p>

        <div className="contact-buttons">
          <a href="mailto:your.email@example.com" className="btn-email">Email Me</a>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/yourId" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/yourId" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.pinterest.com/yourId" target="_blank" rel="noreferrer"><FaPinterest /></a>
        </div>
      </section>
    </>
  );
}

export default Contact;
