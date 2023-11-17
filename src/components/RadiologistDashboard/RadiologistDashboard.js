// RadiologistDashboard.js

import React from "react";

const RadiologistDashboard = () => {
  return (
    <div>
      {/* Doctor Dashboard content */}
      <h1>Radiologist Dashboard</h1>

      {/* Embed OHIF Viewer using an iframe */}
      <div className="ohif-viewer">
        <iframe
          title="OHIF Viewer"
          src="http://172.30.44.190:8042/app/explorer.html"
          width="100%"
          height="650px"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default RadiologistDashboard;
