import React, { useState } from "react";
import "./Login.css";
import users from "../../user";
import Cookies from "js-cookie";

const LoginPage = ({ setUserType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {

        setUserType(user.role);

        // Cookies.set("userToken", user.token);
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Error occurred while logging in");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-#090c29 to-#041c4a login">
      <div className="bg-[#041c4a] p-8 rounded shadow-md w-96">
        <h1 className="text-2xl text-white font-bold mb-4 text-center">
          Welcome to MSys
        </h1>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="button"
            className="bg-[#090c29] text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            onClick={handleLogin}
          >
            Login
          </button>
          {/* <p className="text-white-500 text-sm">Forget password?</p> */}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
