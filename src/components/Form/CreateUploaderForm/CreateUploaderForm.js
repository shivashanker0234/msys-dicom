// CreateUploaderForm.js

import React, { useState } from "react";

const CreateUploaderForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to a backend)
    console.log("Submitted Uploader data:", { username, email, password });
    // Clear form fields after submission if needed
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h3>Create Uploader</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Create Uploader</button>
      </form>
    </div>
  );
};

export default CreateUploaderForm;
