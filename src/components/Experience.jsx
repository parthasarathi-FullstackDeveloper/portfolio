import React from "react";
import { FaBriefcase, FaUsers, FaCogs } from "react-icons/fa"; // Importing icons for experience
import "./Experience.css";
const Experience = () => {
  return (
    <section id="experience">
      <h2>
        <FaBriefcase /> Experience
      </h2>
      <p>
        <strong>Full Stack Developer at Pixmonks Software Solutions</strong>{" "}
        (June 2024 - Present)
      </p>
      <ul>
        <li>
          <FaUsers /> Collaborated with designers to create interactive web
          experiences.
        </li>
        <li>
          <FaCogs /> Integrated third-party APIs into applications.
        </li>
      </ul>
    </section>
  );
};

export default Experience;
