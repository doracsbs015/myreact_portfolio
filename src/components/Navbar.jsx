import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  const handleLinkClick = () => setOpen(false); // close menu on click

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Dora</div>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><a href="#hero" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>

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
