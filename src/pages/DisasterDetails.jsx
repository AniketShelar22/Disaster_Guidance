// /src/pages/DisasterDetails.jsx
import { useParams, Link } from 'react-router-dom';
import React from 'react';
import disasterInfo from '../data/disasterInfo'; // ← changed
import '../styles/DisasterDetails.css'; // Ensure you have this CSS file for styles


export default function DisasterDetails() {
  const { type } = useParams();
  const disaster = disasterInfo.find((d) => d.id === type); // ← fixed

  if (!disaster) return <p className="text-center p-10">Disaster not found.</p>;

  return (
    <div className="disaster-details">
      <div className="disater-header">
        {disaster.icon} {disaster.name} Preparedness
      </div>

      {['before', 'during', 'after'].map((phase) => (
        <div key={phase} className="mb-6">
          <h3 className="text-xl font-semibold capitalize mb-2">
            What to do {phase}:
          </h3>
          <ul className="list-disc ml-6 space-y-1">
            {disaster.tips[phase].map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="disaster-link">
        {/* <Link
          to="/checklist"
          className="inline-block bg-white-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition"
        >
          Start Checklist
        </Link> */}
        <a href="/checklist" className="disater-link-button">Start Checklist</a>
      </div>
    </div>
  );
}
