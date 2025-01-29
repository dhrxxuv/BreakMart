import React from "react";
import Header from "../components/Header";
import ActivityTrendChart from "./DashboardComponents/ActivityTrendChart";
import AppUsageChart from "./DashboardComponents/AppUsageChart";
import AttendancePanel from "./DashboardComponents/AttendancePanel";
import Snapshots from "./DashboardComponents/Snapshots";
import DashboardNavbar from "./DashboardComponents/DashboardNavbar";

function Dashboard() {
  return (
    <div className="flex flex-col h-screen bg-gray-100 overflow-hidden">
      {/* Fixed Header */}
      <Header />
      {/* Project Navbar */}
      <DashboardNavbar />

      {/* Scrollable Content Area */}
      <div className="flex-1 pt-14 overflow-auto">
        {/* Grid Layout for Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 pb-20">
          {/* Row 1 */}
          <AttendancePanel />
          <ActivityTrendChart />

          {/* Row 2 */}
          <AppUsageChart />
          <Snapshots />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
