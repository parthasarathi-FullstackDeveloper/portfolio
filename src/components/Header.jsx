import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaInfoCircle, FaTools, FaProjectDiagram, FaBriefcase, FaGraduationCap, FaEnvelope } from 'react-icons/fa';
import './Header.css'; // CSS file for styling

const Header = () => {
  const location = useLocation(); // Get the current location

  const navItems = [
    { to: '/', icon: <FaUser />, label: 'Profile' },
    { to: '/about', icon: <FaInfoCircle />, label: 'About' },
    { to: '/skills', icon: <FaTools />, label: 'Skills' },
    { to: '/projects', icon: <FaProjectDiagram />, label: 'Projects' },
    { to: '/experience', icon: <FaBriefcase />, label: 'Experience' },
    { to: '/education', icon: <FaGraduationCap />, label: 'Education' },
    { to: '/contact', icon: <FaEnvelope />, label: 'Contact' },
  ];

  return (
    <header className="header-container">
      <h1 className="header-title">Parthasarathi M</h1>
      <h3>Full Stack Developer</h3>
      <nav className="header-nav">
        {navItems.map(item => (
          <Link 
            to={item.to} 
            className={`nav-link ${location.pathname === item.to ? 'active' : ''}`} 
            key={item.label}
          >
            {item.icon} {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
