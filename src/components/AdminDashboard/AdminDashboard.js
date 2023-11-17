import React from "react";
import { Link, Route, useMatch, Routes, BrowserRouter } from "react-router-dom";
import CreateUploaderForm from "../Form/CreateUploaderForm/CreateUploaderForm";
import CreateRadiologistForm from "../Form/CreateRadiologistForm/CreateRadiologistForm";
import CreateDoctorForm from "../Form/CreateDoctorForm/CreateDoctorForm";

const AdminDashboard = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  const match = useMatch();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const { path, url } = match;

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li>
            <Link to={`${url}/create-uploader`}>Create Uploader</Link>
          </li>
          <li>
            <Link to={`${url}/create-doctor`}>Create Doctor</Link>
          </li>
          <li>
            <Link to={`${url}/create-radiologist`}>Create Radiologist</Link>
          </li>
        </ul>
      </div>

      {/* Content area */}
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route exact path={match.path}>
              <h3>Welcome, Admin!</h3>
            </Route>
            <Route path={`${match.path}/create-uploader`}>
              <CreateUploaderForm />
            </Route>
            <Route path={`${match.path}/create-radiologist`}>
              <CreateRadiologistForm />
            </Route>
            <Route path={`${match.path}/create-doctor`}>
              <CreateDoctorForm />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default AdminDashboard;
