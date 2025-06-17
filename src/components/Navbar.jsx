import { Link } from 'react-router-dom';
import React from 'react';
import '../styles/Navbar.css'; // Ensure you have this CSS file for styles
import logo from '../assets/logo.jpg'; // Adjust the path as necessary


 function Navbar({ toggleTheme, darkMode }) {
  return (
    <div className="navbar">
  <div className="navbar-left">
    <img src={logo} alt="Logo" className="logo-image" />
    <span className="navbar-title">Disaster Preparedness Guide</span>
  </div>
  <div className="navbar-right">
    <a href="/" className="nav-link">Home</a>
    {/* <a href="/disaster/" className="nav-link">Disaster Details</a> */}
    <a href="/checklist" className="nav-link">Checklist</a>
    
    <a href="/about" className="nav-link">About</a>
    <a href="/contact" className="nav-link">Contact</a>

  </div>
</div>

  );
}
export default Navbar;