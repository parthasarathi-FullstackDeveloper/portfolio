import React from "react";
import { FaDownload, FaEye, FaLinkedin } from "react-icons/fa";
import "./Profile.css"; // Ensure you have the CSS file for styling
import PS from "./assets/PS.jpeg"; // Adjust this path based on your structure

const Profile = () => {
  const resumeUrl = "https://drive.google.com/file/d/1vUsZdwj-C5ROQe1JEgN6UIRHUDs39c-j/view?usp=drive_link";

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
        <p>
          Feel free to reach out or connect with me on
          <a
            href="https://www.linkedin.com/in/partha-sarathi-m-student2004"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn!
          </a>
        </p>
      </div>
    </div>
  );
};

export default Profile;
