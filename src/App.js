import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie"; // Import js-cookie

import LoginPage from "./components/Login/Login";
import CreateAccountSlide from "./components/CreateAccount/CreateAccount";
import Dashboard from "./components/Dashboard/Dashboard";
import { upload } from "@testing-library/user-event/dist/upload";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";

const App = () => {
  const [userType, setUserType] = useState(null);

  // useEffect(() => {
  //   const userToken = Cookies.get("userToken");

  //   if (userToken) {
  //     setUserType("authenticatedUser");
  //   }
  // }, []);

  // const handleLogout = () => {
  //   Cookies.remove("userToken");
  //   setUserType(null);
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            userType === null ? (
              <LoginPage setUserType={setUserType} />
            ) : (
              <Dashboard userType={userType} />
            )
          }
        >
          <Route index element={<CreateAccountSlide />} />
        </Route>
        {/* <Route path="/" element={<LoginPage/>}></Route> */}
        {/* <Route path="/dashboard" exact element={<Dashboard/>}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
