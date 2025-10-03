/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="profile-pic-container">
          <img src="/profilepic.jpg" alt="Dora" className="profile-pic" />
        </div>

        <h1>Hi, I’m Dora 👋</h1>
        <p className="intro-text">B.Tech CSE & Business Systems | Aspiring Writer & Developer</p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
