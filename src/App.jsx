import React from 'react'
import UserNameStore from './components/UserNameStore'

const App = () => {
  return (
    <div>
      <UserNameStore />
    </div>
  )
}

export default App


// import React, { useState, useEffect } from 'react';
// import Cookies from 'js-cookie';
// import ThemeToggler from './components/cookies/ThemeToggler';
// import ThemeDisplay from './components/cookies/ThemeDisplay';
// import './App.css'; // Optional CSS for styling

// function App() {
//   const [theme, setTheme] = useState('light'); // Default theme is light

//   // Load theme from cookies on component mount
//   useEffect(() => {
//     const savedTheme = Cookies.get('theme');
//     if (savedTheme) {
//       setTheme(savedTheme);
//     }
//   }, []);

//   // Save the theme to cookies when it changes
//   useEffect(() => {
//     Cookies.set('theme', theme, { expires: 7 }); // Cookie will expire in 7 days
//   }, [theme]);

//   // Function to toggle between light and dark themes
//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <div className={`App ${theme}`}>
//       <div className="container mx-auto p-4">
//         <ThemeDisplay theme={theme} />
//         <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
//       </div>
//     </div>
//   );
// }

// export default App;
