import React from 'react';
import { Link } from 'react-router-dom';
import { FaHotel, FaClock, FaSignInAlt,FaCogs } from 'react-icons/fa'; // Importing icons

const Projects = () => {
  const projectList = [
    {
      id: 'hotel-management',
      title: 'Hotel Management System',
      description: 'A comprehensive system for managing hotel operations.',
      icon: <FaHotel />, // Icon for hotel management
    },
    {
      id: 'uuid-generator',
      title: 'UUID Generator',
      description: 'A tool for generating unique identifiers (UUIDs) with a focus on performance and randomness. The project ensures optimal generation of identifiers and features a user-friendly interface for easy use.',
      icon: <FaCogs />, // Icon for UUID generator
  },
  
    {
      id: 'lap-count',
      title: 'Lap Count Application',
      description: 'Tracks lap times with real-time updates.',
      icon: <FaClock />, // Icon for lap counting
    },
    {
      id: 'login-page',
      title: 'Login Page',
      description: 'A secure and user-friendly authentication page.',
      icon: <FaSignInAlt />, // Icon for login page
    }
  ];

  return (
<>
      <h2>My Projects</h2>

<section id="projects">
      {projectList.map((project) => (
        <div className="project" key={project.id}>
          <div className="project-icon">{project.icon}</div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <Link   to={`/projects/${project.id}`} className="view-project-btn">View Project</Link>
<<<<<<< Updated upstream
        </div> 
=======
        </div>
>>>>>>> Stashed changes
      ))}
    </section>
  </>
  );
};

export default Projects;
