import React from "react";
import DicomUploader from "../Upload/Upload";
import DoctorDashboard from "../DoctorDashboard/DoctorDashboard";
import RadiologistDashboard from "../RadiologistDashboard/RadiologistDashboard";
import AdminDashboard from "../AdminDashboard/AdminDashboard";

const Dashboard = ({ userType }) => {
  let content = null;

  // Check user type and display dashboard accordingly
  if (userType === "uploader") {
    content = <DicomUploader />;
  } else if (userType === "doctor") {
    content = <DoctorDashboard />;
  } else if (userType === "radiologist") {
    content = <RadiologistDashboard />;
  } else if (userType === "admin") {
    content = <AdminDashboard />;
  } else {
    // Handle other user types or errors
  }

  return <>{content}</>;
};

export default Dashboard;
