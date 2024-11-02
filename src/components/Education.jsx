import React from 'react';
import { FaGraduationCap } from 'react-icons/fa'; // Importing an icon for education
import './Education.css'
const Education = () => {
  return (
    <section id="education">
      <h2>
        <FaGraduationCap /> Education
      </h2>
      <p>
        <strong>BCA Computer Application</strong>, AVVM Sri Pushpam College, May 2024
      </p>
      <p>
        <strong>HSC</strong>, Government Higher Secondary School, May 2021
      </p>
    </section>
  );
};

export default Education;
