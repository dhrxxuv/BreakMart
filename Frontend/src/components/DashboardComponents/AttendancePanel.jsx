import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const AttendancePanel = ({ total = 67, present = 34, absent = 19, leave = 0 }) => {
  // Dummy attendance trend data
  const data = [
    { day: "Mon", present: 30 },
    { day: "Tue", present: 25 },
    { day: "Wed", present: 40 },
    { day: "Thu", present: 35 },
    { day: "Fri", present: 50 },
    { day: "Sat", present: 45 },
    { day: "Sun", present: 34 },
  ];

  return (
    <div className="p-6 rounded-lg shadow-lg bg-white w-full">
      {/* Header */}
      <h3 className="text-xl font-bold mb-6 text-center md:text-left">Today's Attendance</h3>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Total Users */}
        <div className="flex-1 text-center">
          <div className="text-4xl font-bold text-gray-900">{total}</div>
          <p className="text-sm text-gray-600">Total Users</p>
        </div>

        {/* Attendance Stats */}
        <div className="flex flex-1 justify-around w-full space-x-4 md:space-x-6">
          <div className="text-center">
            <div className="text-2xl font-semibold text-green-600">{present}</div>
            <p className="text-sm text-gray-600">Present</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-semibold text-red-600">{absent}</div>
            <p className="text-sm text-gray-600">Absent</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-semibold text-yellow-600">{leave}</div>
            <p className="text-sm text-gray-600">Leave</p>
          </div>
        </div>
      </div>

      {/* Attendance Trend Line Chart */}
      <div className="mt-6">
        <h4 className="text-md font-semibold text-gray-700 text-center md:text-left">Attendance Trend (Past Week)</h4>
        <ResponsiveContainer width="100%" height={150}>
          <LineChart data={data}>
            <XAxis dataKey="day" stroke="#999" />
            <YAxis hide />
            <Tooltip />
            <Line type="monotone" dataKey="present" stroke="#4ade80" strokeWidth={3} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendancePanel;