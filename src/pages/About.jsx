import React from 'react';
import '../styles/About.css';
import info from '../assets/prepareness.jpeg'; // Adjust the path as necessary
import anotherImage from '../assets/p2.jpeg'; // Example for another image
import secondImage from '../assets/p3new.jpeg'; // Example for a second image


const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>About Us</h1>
        <p>
          Empowering communities with knowledge and tools to stay safe before, during, and after disasters.
        </p>
      </div>

      {/* Info Cards Section */}
      <section className="about-content">
        <div className="cards-container">
          {/* Card 1 */}
          <div className="info-card">
            <h2>Our Vision</h2>
            <p>
              To create a disaster-resilient society by spreading awareness and providing accessible resources to all.
            </p>
          </div>

          {/* Card 2 */}
          <div className="info-card">
            <h2>Why It Matters</h2>
            <p>
              Disasters can strike anytime. Being prepared helps reduce panic, save lives, and recover faster.
            </p>
          </div>

          {/* Card 3 */}
          <div className="info-card">
            <h2>What We Offer</h2>
            <p>
              Practical checklists, disaster-specific guides, and safety tips curated for real-world emergencies.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="about-image">
          <img
            src={info}
            alt="Preparedness"
          />
          <img
            src={anotherImage}
            alt="Preparedness"
          />
          <img
            src={secondImage}
            alt="Preparedness"
          />
        </div>
         {/* <div className="about-image">
          <img
            src={anotherImage}
            alt="Preparedness"
          />
        </div> */}
      </section>
    </div>
  );
};

export default About;
