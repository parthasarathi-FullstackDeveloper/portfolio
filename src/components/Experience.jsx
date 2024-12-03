import React from "react";
import { FaBriefcase, FaCogs, FaDatabase, FaChartLine } from "react-icons/fa"; // Importing icons for experience
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h2>
        <FaBriefcase /> Experience
      </h2>
      <p>
        <strong>Full Stack Developer at Pimerce</strong> 
        (June 2021 – May 2024)
      </p>
      <ul>
        <li>
          <FaCogs /> Worked on the PIM (Product Information Management) system, developing features to manage and analyze product data for e-commerce clients.
        </li>
        <li>
          <FaChartLine /> Developed market share analysis tools, providing clients with insights into competitor performance and market trends to optimize sales strategies.
        </li>
        <li>
          <FaCogs /> Used React.js for building interactive and responsive user interfaces and Java, Spring Boot for back-end development, ensuring a smooth user experience.
        </li>
        <li>
          <FaDatabase /> Integrated various third-party APIs to gather product data and market statistics, enhancing the accuracy of analysis tools.
        </li>
        <li>
          <FaDatabase /> Optimized database performance using MySQL and Cassandra, ensuring efficient data handling and rapid analysis across large datasets.
        </li>
        <li>
          <FaCogs /> Collaborated with cross-functional teams to design, deploy, and optimize new features that improved functionality and user experience of the platform.
        </li>
      </ul>
    </section>
  );
};

export default Experience;
