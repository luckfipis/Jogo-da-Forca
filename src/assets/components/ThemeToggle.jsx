import React from 'react';

function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme} className="theme-btn">
        {darkMode ? '☀️ Tema Claro' : '🌙 Tema Escuro'}
      </button>
    </div>
  );
}

export default ThemeToggle;