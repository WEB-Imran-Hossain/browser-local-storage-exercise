import React, { useEffect, useState } from 'react'

const Theme = () => {
     // Initialize theme state with default or localStorage value
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save theme to localStorage
  };

  // Apply saved theme on page load
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

 return (
    <div className={`h-screen ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'} flex flex-col items-center justify-center`}>
      <h1 className="text-2xl font-bold mb-4">Theme Toggle Example</h1>

      {/* Button to toggle theme */}
      <button 
        onClick={toggleTheme} 
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}

export default Theme