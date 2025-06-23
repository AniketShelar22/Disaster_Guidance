import { Link } from 'react-router-dom';
import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.jpg';
import { motion } from 'framer-motion';

function Navbar({ toggleTheme, darkMode }) {
  return (
    <motion.div
      className="navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo-image" />
        <span className="navbar-title">Disaster Preparedness Guide</span>
      </div>
      <div className="navbar-right">
        {["/", "/emergency-contacts" ,"/about", "/contact"].map((path, i) => (
          <motion.a
            key={path}
            href={path}
            className="nav-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {["Home", "EmergencyContacts", "About", "Contact"][i]}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

export default Navbar;
