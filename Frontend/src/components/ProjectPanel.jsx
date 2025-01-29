import React, { useState } from "react";
import ProjectNavbar from "./ProjectComponents/ProjectNavbar";
import ProjectTable from "./ProjectComponents/ProjectTable";

function ProjectPanel() {
  return (
    <div className="flex flex-col h-screen overflow-auto">
      {/* Project Navbar */}
      <ProjectNavbar />

      {/* Main Content Section */}
        {/* Project Data Table */}
        <div className="p-4 bg-gray-100 mt-4 overflow-hidden shadow-lg rounded-lg">
            <ProjectTable />
        </div>
    </div>
  );
}

export default ProjectPanel;
