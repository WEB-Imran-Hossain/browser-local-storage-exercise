import React, { useEffect, useState } from 'react';

const LightAndLanguage = () => {
  // Step 1: Set initial state for theme and language
  const [preferences, setPreferences] = useState({
    theme: 'light', // Default theme is 'light'
    language: 'English', // Default language is 'English'
  });

  // Step 2: Function to toggle the theme between light and dark
  const changeTheme = () => {
    // Toggle theme: if current theme is 'light', switch to 'dark', and vice versa
    const newPreferences = {
      ...preferences, // Keep the existing preferences (like language)
      theme: preferences.theme === 'light' ? 'dark' : 'light', // Change only the theme
    };

    setPreferences(newPreferences); // Update the state with the new preferences
    localStorage.setItem('userPreferences', JSON.stringify(newPreferences)); // Save preferences in localStorage
  };

  // Step 3: Retrieve saved preferences from localStorage when the component loads
  useEffect(() => {
    const savedPreferences = JSON.parse(localStorage.getItem('userPreferences')); // Get saved preferences from localStorage
    if (savedPreferences) {
      setPreferences(savedPreferences); // Update state with saved preferences if available
    }
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${
        preferences.theme === 'light' ? 'bg-gray-100' : 'bg-gray-900 text-white'
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">User Preferences</h1>
      
      {/* Step 4: Display the current theme and language */}
      <p className="text-lg">Current Theme: {preferences.theme}</p>
      <p className="text-lg mb-4">Language: {preferences.language}</p>

      {/* Step 5: Button to toggle the theme */}
      <button
        onClick={changeTheme}
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default LightAndLanguage;