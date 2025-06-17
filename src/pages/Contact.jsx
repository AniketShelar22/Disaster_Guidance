import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Have questions, suggestions, or feedback? We'd love to hear from you!
        </p>
      </div>

      {/* Contact Form and Info */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Form Section */}
          <div className="contact-form">
            <h2>Send a Message</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea rows="5" placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Info Section */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p><strong>Email:</strong> contact@preparednessguide.com</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Address:</strong> 123 Safety Lane, Resilience City, India</p>
            <p><strong>Hours:</strong> Mon - Fri, 9 AM - 5 PM</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
