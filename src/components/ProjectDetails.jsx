import React from 'react';
import { useParams } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
const projectData = [
  {
    id: 'hotel-management',
    title: 'Hotel Management System',
    description:
      'Developed a hotel management system using Java, Spring Boot, and React, enabling features like room booking and guest check-in/out. Designed a user-friendly interface and implemented RESTful APIs for seamless front-end and back-end integration.',
    technologies: 'Java, Spring Boot, React',
    github: 'https://github.com/parthasarathi-FullstackDeveloper/hotel_Management',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-tnhIuJNEa9FBXaEYpW5XYqSahhmSkNnnDQ&s',
  },
  {
    id: 'lap-count',
    title: 'Lap Count Application',
    description:
      'Created a Lap Count application that tracks and displays lap times using Java and React, providing real-time updates for users. Implemented a user-friendly interface for easy navigation and integrated data storage to save user statistics.',
    technologies: 'Java, React',
    github: 'https://github.com/parthasarathi-FullstackDeveloper/LapCount',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb3tMYvKDVwg9rPtyFRTYygsHfvqnfBkxlAw&s',
  },
  {
    id: 'login-page',
    title: 'Secure Login Page',
    description:
      'Developed a secure login page using React for the front end and Java Spring Boot for the back end, implementing form validation and user authentication. Integrated with RESTful APIs to manage user credentials and sessions, ensuring a seamless and secure user experience.',
    technologies: 'Java, Spring Boot, React',
    github: null,
    imageUrl: 'https://www.malcare.com/wp-content/uploads/2020/01/WordPress-Login-Security.png',
  },{
    id: 'uuid-generator',
    title: 'UUID Generator',
    description:
      'Built a UUID generator tool using modern web technologies. The tool generates unique identifiers and ensures optimal performance and randomness. Integrated a simple and responsive UI for ease of use.',
    technologies: 'JavaScript, React',
    github: 'https://github.com/parthasarathi-FullstackDeveloper/UUID-Generator.git',
    imageUrl: 'https://cdn1.dronahq.com/wp-content/uploads/2023/05/UUID-generator-2.webp',
},

];

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectData.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>
        <strong>Technologies Used:</strong> {project.technologies}
      </p>
    {project.github!=null?<div style={{ marginTop: '10px' }}>
      <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  style={{
    textDecoration: 'none',
    color: '#24292f', // GitHub dark text color
    fontWeight: '600', // Slightly bold text, like GitHub
    fontFamily: 'Arial, sans-serif', // Similar to GitHub's font
    display: 'flex',
    alignItems: 'center',
    borderRadius: '6px',
    padding: '6px 12px',
    backgroundColor: '#f6f8fa', // Light background for GitHub-like appearance
    transition: 'background-color 0.2s, color 0.2s',
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = '#0366d6'; // GitHub blue on hover
    e.target.style.color = '#ffffff'; // Change text color to white
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = '#f6f8fa'; // Revert background on mouse leave
    e.target.style.color = '#24292f'; // Revert text color on mouse leave
  }}
>
  <FaGithub style={{ marginRight: '8px', fontSize: '18px' }} />
  View on GitHub
</a>
      </div>:<></>} 
      <div style={{ marginTop: '20px' }}>
        <img
          src={project.imageUrl}
          alt={project.title}
          style={{
            maxWidth: '100%',
            height: '200px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>
    </div>
  );
};

export default ProjectDetails;
