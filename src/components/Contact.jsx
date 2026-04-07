import { FaLinkedin, FaGithub, FaPinterest, FaDownload } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <>
      <section id="resume" className="resume-section">
  <h2>Take a Look at My Resume</h2>
  <p>More professional insights about my work experience and projects.</p>

  <div className="resume-buttons">
    {/* Download CV */}
    <a href="/Dhora_resume_3.pdf" download className="btn-download">
      <FaDownload className="download-icon" /> Download CV
    </a>

    {/* View Resume */}
    <a
      href="/Dhora_resume_3.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-download"
    >
      View Resume
    </a>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Get in Touch</h2>
        <p>If you’d like to collaborate or just say hi, feel free to reach out!</p>

        <div className="contact-buttons">
          <a href="mailto:starkimzyra@gmail.com.com" className="btn-email">Email Me</a>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/dora-m-ab2819291" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/doracsbs015" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://in.pinterest.com/starkimzyra/" target="_blank" rel="noreferrer"><FaPinterest /></a>
        </div>
      </section>
    </>
  );
}

export default Contact;
