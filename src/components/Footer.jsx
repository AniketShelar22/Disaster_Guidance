import React from "react";
import '../styles/Footer.css'; // Ensure you have this CSS file for styles


 function Footer() {
  return (
    <div className="Footer">
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
    </div>
  );
}
export default Footer;