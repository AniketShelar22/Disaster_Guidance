import React, { useEffect, useState } from "react";
import "../styles/EmergencyContacts.css";
import { FaPhoneAlt } from "react-icons/fa";

const nationalServices = [
  { service: "Police", number: "100" },
  { service: "Fire Brigade", number: "101" },
  { service: "Ambulance", number: "102" },
  { service: "Disaster Management", number: "108" },
  { service: "Women Helpline", number: "1091" },
  { service: "Child Helpline", number: "1098" },
  { service: "Covid-19 Helpline", number: "1075" }
];

const EmergencyContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/emergencyContacts.json")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  const filteredContacts = contacts.filter(
    (item) =>
      item.state.toLowerCase().includes(searchQuery) ||
      item.cities.some((c) => c.city.toLowerCase().includes(searchQuery))
  );

  return (
    <div className="emergency-container">
      <h1 className="emergency-title">📞 Emergency Contacts – India</h1>
      <p className="updated-date">Last updated: June 2025</p>

      <input
        className="search-bar"
        type="text"
        placeholder="🔍 Search state or city..."
        onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
      />

      <h2 className="section-heading"> National Helpline Numbers</h2>
      <div className="national-grid">
        {nationalServices.map((item, index) => (
          <div key={index} className="service-card">
            <FaPhoneAlt className="phone-icon" />
            <a href={`tel:${item.number}`} className="phone-link">
              {item.service}: {item.number}
            </a>
          </div>
        ))}
      </div>

      <h2 className="section-heading">📍 State-wise Helpline Numbers</h2>
      {filteredContacts.map((item, index) => (
        <div key={index} className="state-section">
          <h3 className="state-title">{item.state}</h3>
          <p>
            State Helpline:{" "}
            <a href={`tel:${item.helpline}`} className="phone-link">
              {item.helpline}
            </a>
          </p>
          <ul className="city-list">
            {item.cities.map((city, idx) => (
              <li key={idx} className="city-item">
                {city.city}:{" "}
                <a href={`tel:${city.number}`} className="phone-link">
                  {city.number}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default EmergencyContacts;
