import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GiGuitar, GiChessKnight, GiQuillInk } from "react-icons/gi";
import "./About.css";

const timelineData = [
  { title: "PSGR Krishnammal Hr Sec School for Girls", year: "2020-2021" },
  { title: "St Josephs Matriculation Hr Sec School for Girls", year: "2021-2023" },
  { title: "B.Tech Computer Science and Business Systems", year: "2023-2027 (Ongoing)" },
  { title: "Better Tomorrow MERN Stack Internship", year: "Jan 2025" },
];

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hi! I’m Dora, a third-year B.Tech student in Computer Science and Business Systems.
          Passionate about coding, writing, and exploring new things. I enjoy building projects
          that combine creativity and technology. I also like learning new skills, sharing
          knowledge, and solving real-world problems. I love experimenting with ideas and bringing
          them to life.
        </p>

        {/* Timeline */}
        <VerticalTimeline lineColor="#9aae7c">
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              date={item.year}
              iconStyle={{ background: "#9aae7c", color: "#fff", fontWeight: "bold" }}
              icon={<div className="timeline-number">{index + 1}</div>}
              contentStyle={{
                background: "#eef4ec",
                color: "#556b2f",
                boxShadow: "0 0.25em 0.5em rgba(0,0,0,0.15)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #9aae7c" }}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        {/* Other Hobbies */}
        <div className="other-hobbies">
          <h3>Other Hobbies</h3>
          <div className="hobby-icons">
            <div className="hobby-item">
              <GiGuitar size={32} />
              <span>Guitar</span>
            </div>
            <div className="hobby-item">
              <GiChessKnight size={32} />
              <span>Chess</span>
            </div>
            <div className="hobby-item">
              <GiQuillInk size={32} />
              <span>Creative Writing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
