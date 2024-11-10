import React from "react";
import { FaDownload, FaEye, FaLinkedin } from "react-icons/fa";
import "./Profile.css"; // Ensure you have the CSS file for styling
import PS from "./assets/PS.jpeg"; // Adjust this path based on your structure

const Profile = () => {
  const resumeUrl = "./Parthasarathi_M_Resume.pdf";

  return (
    <div className="profile-container">
      <h2 className="profile-title">My Profile</h2>
      <img src={PS} alt="Profile" className="profile-image" />
      <p className="profile-description">
        Hi, I'm Parthasarathi! I'm a Full Stack Developer with expertise in
        various technologies. Here’s a bit about me and my work.
      </p>
      <div className="resume-section">
        <a
          href={resumeUrl}
          download
          aria-label="Download My Resume"
          className="resume-link"
          target="_blank"
        >
          <FaDownload /> Download My Resume
        </a>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View My Resume"
          className="resume-link"
        >
          <FaEye /> View My Resume
        </a>
      </div>
      <div className="profile-footer">
      <p style={{ textAlign: 'center', fontSize: '1.1em' }}>
      I’d be happy to connect and discuss any professional opportunities. You can reach me on

    
    </p>
    <a
  href="https://www.linkedin.com/in/partha-sarathi-m-student2004"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5em', // Increased gap for better spacing between icon and text
    textDecoration: 'none',
    color: '#0077b5',
    margin: '10px',
    fontSize: '16px', // Increased font size
    fontWeight: 'bold', // Bold text for emphasis
    borderRadius: '5px', // Subtle rounded corners
    padding: '8px 12px', // Padding to make the link area bigger and more clickable
    transition: 'color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease', // Added background-color transition
  }}
  onMouseEnter={(e) => {
    e.target.style.color = '#005582'; // Darker shade on hover
    e.target.style.transform = 'scale(1.05)'; // Slight zoom effect
    e.target.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)'; // Adds shadow
    e.target.style.backgroundColor = '#e6f4ff'; // Light background color on hover
  }}
  onMouseLeave={(e) => {
    e.target.style.color = '#0077b5'; // Original color
    e.target.style.transform = 'scale(1)'; // Reset scale
    e.target.style.boxShadow = 'none'; // Remove shadow
    e.target.style.backgroundColor = 'transparent'; // Reset background color
  }}
>
  <FaLinkedin style={{ fontSize: '20px' }} /> LinkedIn!
</a>

      </div>
    </div>
  );
};

export default Profile;
