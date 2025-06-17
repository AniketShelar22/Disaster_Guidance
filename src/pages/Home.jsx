import { Link } from 'react-router-dom';
import disasterInfo from '../data/disasterInfo';
import '../styles/Home.css';
import React from 'react';

export default function Home() {
  return (
    <div className="home bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <div className="home-content px-4 md:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-600 dark:text-orange-400 mb-2">
          🌐 Disaster Preparedness Guide
        </h1>
        <p className="text-lg text-gray-800 dark:text-gray-300 mb-6">
          Click a disaster to learn how to prepare →
        </p>

       <div className="home-menu grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
  );
}
