import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Get in Touch</h2>
      <p>If you’d like to collaborate or just say hi, feel free to reach out!</p>

      <div className="contact-buttons">
        <a href="mailto:your.email@example.com" className="btn btn-email">Email Me</a>
      </div>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/yourId" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/yourId" target="_blank"><FaGithub /></a>
        <a href="https://www.instagram.com/yourId" target="_blank"><FaInstagram /></a>
      </div>
    </section>
  );
}

export default Contact;
