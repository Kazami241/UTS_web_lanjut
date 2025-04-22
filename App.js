import React, { useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [section, setSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  const isSection = (name) => section === name;
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`${styles.app} ${darkMode ? styles.dark : ''}`}>
      <Header />
      <Navigation onNavigate={setSection} onToggleMode={toggleDarkMode} />

      {isSection('home') && <Home />}
      {isSection('about') && <About />}
      {isSection('projects') && <Projects />}
      {isSection('contact') && <Contact />}
    </div>
  );
}

export default App;
