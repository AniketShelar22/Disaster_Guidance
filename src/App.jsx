// /src/App.jsx
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import DisasterDetails from './pages/DisasterDetails';
import ChecklistPage from './pages/ChecklistPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import EmergencyContacts from './pages/EmergencyContacts';


export default function App() {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <Router>
      <AnimatePresence mode="wait">
      <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/disaster/:type" element={<DisasterDetails />} />
            <Route path="/checklist" element={<ChecklistPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/emergency-contacts" element={<EmergencyContacts />} />
          
          </Routes>
        </main>
        <Footer />
      </div>
      </AnimatePresence>
    </Router>
  );
}
