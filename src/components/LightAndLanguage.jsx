import React, { useEffect, useState } from 'react'

const LightAndLanguage = () => {
     // Initialize state for user preferences
  const [preferences, setPreferences] = useState({
    theme: 'light',
    language: 'English',
  });

  // Function to update the theme in preferences
  const changeTheme = () => {
    const newPreferences = {
      ...preferences,
      theme: preferences.theme === 'light' ? 'dark' : 'light',
    };
    setPreferences(newPreferences);
    localStorage.setItem('userPreferences', JSON.stringify(newPreferences)); // Store object as JSON in localStorage
  };

  // Retrieve user preferences from localStorage on component mount
  useEffect(() => {
    const savedPreferences = JSON.parse(localStorage.getItem('userPreferences'));
    if (savedPreferences) {
      setPreferences(savedPreferences); // Set state to saved preferences if available
    }
  }, []);

  return (
    <div className={`flex flex-col items-center justify-center h-screen ${preferences.theme === 'light' ? 'bg-gray-100' : 'bg-gray-900 text-white'}`}>
      <h1 className="text-2xl font-bold mb-4">User Preferences</h1>

      {/* Display current theme and language */}
      <p className="text-lg">Current Theme: {preferences.theme}</p>
      <p className="text-lg mb-4">Language: {preferences.language}</p>

      {/* Button to toggle theme */}
      <button
        onClick={changeTheme}
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default LightAndLanguage