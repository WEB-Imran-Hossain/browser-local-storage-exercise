import { useEffect, useState } from "react";

const UserNameStore = () => {
 
  const [name, setName] = useState("");  // Create a state variable to store the name
  const [storedName, setStoredName] = useState("");

  // Save name to localStorage
  const handleSaveName = () => {
    localStorage.setItem('userName', name);
    setStoredName(name);
    setName('');
  };

  // Clear localStorage and reset state
  const clearStorage = () => {
    localStorage.clear();
    setStoredName('');
  };


  // useEffect to retrieve stored name when the component mounts
    useEffect(() => {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      setStoredName(savedName);
    }
  }, []);


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Local Storage Clear Example</h1>

      {/* Input field for user name */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="px-4 py-2 border rounded-md mb-4"
      />

      {/* Save name button */}
      <button
        onClick={handleSaveName}
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mb-4"
      >
        Save Name
      </button>

      {/* Clear localStorage button */}
      <button
        onClick={clearStorage}
        className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Clear Local Storage
      </button>

      {/* Display stored name */}
      {storedName && (
        <p className="mt-4 text-xl">Stored Name: <strong>{storedName}</strong></p>
      )}
    </div>
  );
}

export default UserNameStore;
