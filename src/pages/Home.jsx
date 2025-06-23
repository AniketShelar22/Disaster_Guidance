import { Link } from 'react-router-dom';
import disasterInfo from '../data/disasterInfo';
import '../styles/Home.css';
import React from 'react';
import WeatherCard from '../components/WeatherCard';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      className="home bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
      <div className="home-content">
        {/* Left Section */}
        <div className="home-left">
          <h1 className="home-title">🌐 Disaster Preparedness Guide</h1>
          <WeatherCard />
          <p className="home-subtitle">
            <a href="/checklist">Click a disaster to learn how to prepare →</a>
          </p>
        </div>

        {/* Right Section */}
        <div className="home-right">
          <div className="home-menu">
            {disasterInfo.map((disaster) => (
              <Link
                key={disaster.id}
                to={`/disaster/${disaster.id}`}
                className="home-disaster-card"
              >
                <span className="home-disaster-icon">{disaster.icon}</span>
                <span className="home-disaster-text">{disaster.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
