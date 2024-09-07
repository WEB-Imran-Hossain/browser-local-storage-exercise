// src/components/Form.jsx
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const Form = () => {
  // Define state variables to hold user inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Load stored data from cookies on component mount
  useEffect(() => {
    const storedName = Cookies.get('name');
    const storedEmail = Cookies.get('email');
    const storedPhone = Cookies.get('phone');

    if (storedName) setName(storedName);
    if (storedEmail) setEmail(storedEmail);
    if (storedPhone) setPhone(storedPhone);
  }, []);

  // Handle form submission and store the data in cookies
  const handleSubmit = (e) => {
    e.preventDefault();

    // Store the input data in cookies
    Cookies.set('name', name, { expires: 7 });
    Cookies.set('email', email, { expires: 7 });
    Cookies.set('phone', phone, { expires: 7 });

    alert('Data saved to cookies!');
  };

  // Clear the cookie data (optional feature)
  const handleClear = () => {
    Cookies.remove('name');
    Cookies.remove('email');
    Cookies.remove('phone');

    setName('');
    setEmail('');
    setPhone('');
    alert('Data cleared from cookies!');
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 shadow-lg rounded">
      <h1 className="text-2xl font-bold text-center mb-4">User Information Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Phone Number:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">
          Save to Cookies
        </button>
      </form>

      <button
        onClick={handleClear}
        className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-700"
      >
        Clear Cookies
      </button>

      {/* Display stored data if available */}
      <div className="mt-6">
        <h2 className="text-lg font-bold">Stored Data:</h2>
        <p><strong>Name:</strong> {name || 'Not set'}</p>
        <p><strong>Email:</strong> {email || 'Not set'}</p>
        <p><strong>Phone:</strong> {phone || 'Not set'}</p>
      </div>
    </div>
  );
};

export default Form;