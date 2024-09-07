// src/components/ThemeToggler.jsx
import React from 'react';

const ThemeToggler = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700 ${
        theme === 'dark' ? 'dark-button' : ''
      }`}
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggler;