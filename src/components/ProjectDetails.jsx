import React from 'react';
import { useParams } from 'react-router-dom';

const projectData = [
  {
    id: 'hotel-management',
    title: 'Hotel Management System',
    description: "  Developed a hotel management system using Java, Spring Boot, and React, enabling features like room booking and guest check-in/out. Designed a user-friendly interface and implemented RESTful APIs for seamless front-end and back-end integration.",
    technologies: 'Java, Spring Boot, React',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-tnhIuJNEa9FBXaEYpW5XYqSahhmSkNnnDQ&s'
  },
  {
    id: 'lap-count',
    title: 'Lap Count Application',
    description: 'Created a Lap Count application that tracks and displays lap times using Java and React, providing real-time updates for users. Implemented a user-friendly interface for easy navigation and integrated data storage to save user statistics.',
    technologies: 'Java, React',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb3tMYvKDVwg9rPtyFRTYygsHfvqnfBkxlAw&s'
  },
  {
    id: 'login-page',
    title: 'Secure Login Page',
    description: 'Developed a secure login page using React for the front end and Java Spring Boot for the back end, implementing form validation and user authentication. Integrated with RESTful APIs to manage user credentials and sessions, ensuring a seamless and secure user experience.',
    technologies: 'Java, Spring Boot, React',
    imageUrl: 'https://www.malcare.com/wp-content/uploads/2020/01/WordPress-Login-Security.png', 
  },
];

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectData.find(p => p.id === projectId);

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p><strong>Technologies Used:</strong> {project.technologies}</p>
      <div style={{ marginTop: '20px' }}>
        <img src={project.imageUrl} alt={project.title} style={{ maxWidth: '100%', borderRadius: '10px' }} />
      </div>
    </div>
  );
};

export default ProjectDetails;
