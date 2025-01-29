import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard.jsx";
import Attendance from "./components/Attendance Component/Attendance";
import AdvancedAttendance from "./components/Attendance Component/AdvancedAttendance";
import WellnessPanel from "./components/WellnessPanel";
import ProductivityPanel from "./components/ProductivityPanel"; // Import the new component
import ProjectPanel from "./components/ProjectPanel"; // Import the new component

// Header Selector based on Route
const HeaderSelector = ({ isSidebarVisible }) => {
  const location = useLocation();

  // Ensure Attendance and Wellness Pages show their own headers without extra gap
  if (location.pathname.startsWith("/attendance") || location.pathname === "/WellnessPanel") {
    return null;
  }

  return <Header isSidebarVisible={isSidebarVisible} />;
};

// Main App Component
const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <div
          className={`flex-1 transition-all duration-300 overflow-hidden
            ${isSidebarVisible ? "ml-64" : "ml-20"}`}
        >
          {/* Header */}
          <HeaderSelector isSidebarVisible={isSidebarVisible} />

          {/* Main Content Area */}
          <main className="pt-14 overflow-hidden">
            <Routes>
              {/* Dashboard Route */}
              <Route path="/" element={<Dashboard />} />

              {/* Wellness Panel */}
              <Route path="/WellnessPanel" element={<WellnessPanel />} />

              {/* Productivity Panel */}
              <Route path="/ProductivityPanel" element={<ProductivityPanel />} /> {/* New Route */}

              {/* Project Panel */}
              <Route path="/ProjectPanel" element={<ProjectPanel />} /> {/* New Route */}

              {/* Attendance Pages */}
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/attendance/advanced" element={<AdvancedAttendance />} />

              {/* 404 Fallback */}
              <Route
                path="*"
                element={
                  <div className="p-6">
                    <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
                    <p className="mt-2">The page you're looking for doesn't exist.</p>
                  </div>
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
