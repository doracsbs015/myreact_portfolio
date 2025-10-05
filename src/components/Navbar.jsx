import { useState } from "react";
import { HiOutlineSparkles } from "react-icons/hi2";
import { FaDownload } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);
  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo with sparkle */}
        <div className="logo">
          Dora <HiOutlineSparkles className="sparkle-icon" />
        </div>

        {/* Navigation links */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><a href="#hero" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
          <li className="download-cv">
            <a href="#!" title="Download my resume">
              <FaDownload /> 
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <div className={`hamburger ${open ? "active" : ""}`} onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
