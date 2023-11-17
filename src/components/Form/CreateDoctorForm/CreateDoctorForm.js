// CreateDoctorForm.js

import React, { useState } from "react";

const CreateDoctorForm = () => {
  const [fullName, setFullName] = useState("");
  const [specialty, setSpecialty] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to a backend)
    console.log("Submitted Doctor data:", { fullName, specialty });
    // Clear form fields after submission if needed
    setFullName("");
    setSpecialty("");
  };

  return (
    <div>
      <h3>Create Doctor</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>Specialty:</label>
          <input
            type="text"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
          />
        </div>
        <button type="submit">Create Doctor</button>
      </form>
    </div>
  );
};

export default CreateDoctorForm;
