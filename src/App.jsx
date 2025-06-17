// /src/App.jsx
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import DisasterDetails from './pages/DisasterDetails';
import ChecklistPage from './pages/ChecklistPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';

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
      <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/disaster/:type" element={<DisasterDetails />} />
            <Route path="/checklist" element={<ChecklistPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

          
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
