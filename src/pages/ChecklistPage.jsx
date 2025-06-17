import { useEffect, useState } from 'react';
import '../styles/ChecklistPage.css'; // Adjust the path as necessary
import React from 'react';



const defaultChecklist = {
  Essentials: ['Water', 'Non-perishable food', 'Flashlight'],
  'First Aid': ['Bandages', 'Antiseptic', 'Medications'],
  Documents: ['ID Card', 'Insurance papers', 'Emergency contacts']
};

export default function ChecklistPage() {
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('checklist');
    if (saved) setCheckedItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('checklist', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleItem = (category, item) => {
    setCheckedItems((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [item]: !prev?.[category]?.[item]
      }
    }));
  };

  return (
    <div className="checklist-page">
  <h2 className="checklist-heading">✅ Disaster Preparedness Checklist</h2>

  {Object.entries(defaultChecklist).map(([category, items]) => (
    <div key={category} className="mb-6">
      <h3 className="category-title">{category}</h3>
      <ul className="checklist-card space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="checklist-item"
            onClick={() => toggleItem(category, item)}
          >
            <input
              type="checkbox"
              checked={!!checkedItems?.[category]?.[item]}
              onChange={() => toggleItem(category, item)}
              className="mr-2"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
  );
}
