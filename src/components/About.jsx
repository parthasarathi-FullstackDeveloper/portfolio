import React from 'react';
import { FaCode, FaDesktop, FaLightbulb } from 'react-icons/fa';
import './About.css'
const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          <FaCode /> Accomplished Full Stack Developer with expertise in Java, HTML, CSS, React.js, and more.
        </p>
        <p>
          <FaDesktop /> I love building applications that improve user experience and solve real-world problems.
        </p>
        <p>
          <FaLightbulb /> I enjoy exploring innovative solutions and leveraging technology to create impactful results.
        </p>
      </div>
    </section>
  );
};

export default About;
