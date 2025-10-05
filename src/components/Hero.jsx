/* eslint-disable no-unused-vars */
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  const words = [
    "Hi, I'm Dora.",
    "I'm a Full Stack Developer.",
    "I'm a Problem Solver.",
    "I'm a Content Writer."
  ];

  // Longest text length to reserve space (so no glitch when text changes)
  const longestLen = Math.max(...words.map(w => w.length));
  const reservedCh = longestLen + 3;

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* Profile pic with framer-motion animation */}
        <motion.div
          className="hero-img-container"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img src="/profilepic.jpg" alt="Dora" className="hero-img" />
        </motion.div>

        {/* Typewriter text with reserved width */}
        <div className="hero-text">
          <span
            className="typewriter-wrapper"
            style={{ minWidth: `${reservedCh}ch` }}
          >
            <Typewriter
              words={words}
              loop={0}
              cursor={false}
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="#projects" className="hero-btn">View Projects</a>
            <a href="#contact" className="hero-btn">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
