// CreateRadiologistForm.js

import React, { useState } from "react";

const CreateRadiologistForm = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to a backend)
    console.log("Submitted Radiologist data:", { name, location });
    // Clear form fields after submission if needed
    setName("");
    setLocation("");
  };

  return (
    <div>
      <h3>Create Radiologist</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button type="submit">Create Radiologist</button>
      </form>
    </div>
  );
};

export default CreateRadiologistForm;
