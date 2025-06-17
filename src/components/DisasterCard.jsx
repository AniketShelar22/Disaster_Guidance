// /src/components/DisasterCard.jsx
import { Link } from 'react-router-dom';
import React from 'react';
import '../styles/DisasterCard.css'; // Ensure you have this CSS file for styles
import { disasters } from '../data/disasters.json'; // Adjust the path as necessary


export default function DisasterCard({ disaster }) {
  return (
    <Link to={`/disaster/${disaster.type}`}>
      <div className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer text-center ${disaster.color}`}>
        <div className="text-4xl mb-2">{disaster.emoji}</div>
        <h3 className="text-xl font-semibold text-gray-800">{disaster.name}</h3>
      </div>
    </Link>
  );
}
