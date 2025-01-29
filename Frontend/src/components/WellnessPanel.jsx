import React from "react";
import WellnessNavbar from "./wellnesscomponents/WellnessNavbar";
import HealthTrends from "./wellnesscomponents/HealthTrends";
import HealthOverview from "./wellnesscomponents/HealthOverview";
import WellnessTable from "./wellnesscomponents/WellnessTable";
import Header from "../components/Header";

function WellnessPanel() {
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Main Header */}
      <Header />

      {/* Wellness Navbar - Directly after Header */}
      <div className="relative z-10">
        <WellnessNavbar />
      </div>

      {/* Main Content Area */}
      <div className="overflow-auto h-[calc(100vh-8.5rem)]">
        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <HealthTrends />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <HealthOverview />
          </div>
        </div>

        {/* Table Section */}
        <div className="p-4">
          <WellnessTable />
        </div>
      </div>
    </div>
  );
}

export default WellnessPanel;
