import React, { useState } from "react";

const DashboardNavbar = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  return (
    <nav className="flex justify-between items-center p-4 bg-[#C1C1C1] text-white">
      {/* Left section: Dashboard label */}
      <div className="text-2xl text-[#3B3F70] font-semibold">Dashboard</div>

      {/* Right section: Date range picker */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <label htmlFor="fromDate" className="mr-2 text-[#3B3F70]">From</label>
          <input
            type="date"
            id="fromDate"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="px-3 py-2 border border-gray-400 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="toDate" className="mr-2 text-[#3B3F70]">To</label>
          <input
            type="date"
            id="toDate"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="px-3 py-2 border border-gray-400 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;