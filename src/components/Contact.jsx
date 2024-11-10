import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa'; // Importing icons for contact
import './Contact.css'; // Import your CSS file for styling

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>
        <FaEnvelope className="contact-icon" /> Email :  <a href="mailto:parthasarathi342004@gmail.com">parthasarathi342004@gmail.com</a>
      </p>
      <p>
        <FaPhone className="contact-icon" /> Phone : +91  7397720349
      </p>
      
    </section>
  );
};

export default Contact;
