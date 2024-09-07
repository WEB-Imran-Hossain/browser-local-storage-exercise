// src/components/ThemeDisplay.jsx
import React from 'react';

const ThemeDisplay = ({ theme }) => {
  return (
    <div className="text-center mt-4">
      <h1 className="text-2xl">
        Current Theme: <span className="font-bold">{theme}</span>
      </h1>
    </div>
  );
};

export default ThemeDisplay;