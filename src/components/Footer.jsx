import React from "react";
import { motion } from "framer-motion";
import '../styles/Footer.css';

function Footer() {
  return (
    <motion.div
      className="Footer"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="footer-content">
        <h2>Stay Prepared, Stay Safe</h2>
        <p>Your guide to disaster preparedness and response.</p>
        
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <p>© {new Date().getFullYear()} Disaster Preparedness Guide</p>
      </div>
    </motion.div>
  );
}

export default Footer;
