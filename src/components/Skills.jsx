import React from 'react';
import { FaCog, FaJava, FaReact, FaDatabase, FaRocket } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'Spring Microservices Architecture', icon: <FaCog /> },
    { name: 'Java Programming', icon: <FaJava /> },
    { name: 'ReactJS', icon: <FaReact /> },
    { name: 'MySQL', icon: <FaDatabase /> },
    { name: 'Cassandra', icon: <FaDatabase /> },
    { name: 'Spring Boot', icon: <FaRocket /> },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            {skill.icon} {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
