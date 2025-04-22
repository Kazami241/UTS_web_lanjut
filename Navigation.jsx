import React from 'react';

const Navigation = ({ onNavigate, onToggleMode }) => (
  <nav>
    <button onClick={() => onNavigate('home')}>Home</button>
    <button onClick={() => onNavigate('about')}>About Me</button>
    <button onClick={() => onNavigate('projects')}>Projects</button>
    <button onClick={() => onNavigate('contact')}>Contact</button>
    <button className="toggle-btn" onClick={onToggleMode}>
      Toggle Dark/Light Mode
    </button>
  </nav>
);

export default Navigation;
