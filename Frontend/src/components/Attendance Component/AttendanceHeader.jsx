import React from "react";
import { useNavigate } from "react-router-dom";

const AttendanceHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap items-center justify-between bg-[#C1C1C1] p-4 text-[#3B3F70]">
      {/* Title */}
      <h2 className="text-lg font-semibold">Attendance</h2>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-gray-300 text-black rounded" onClick={() => navigate("/attendance")}>
          Basic
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={() => navigate("/attendance/advanced")}>
          Advance
        </button>
      </div>
    </div>
  );
};

export default AttendanceHeader;
