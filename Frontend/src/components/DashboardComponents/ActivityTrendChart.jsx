import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const ActivityTrendChart = ({ className }) => {
  const data = [
    { month: "Jan", activity: 10 },
    { month: "Feb", activity: 20 },
    { month: "Mar", activity: 30 },
    { month: "Apr", activity: 40 },
  ];

  return (
    <div className="w-full mx-auto p-4 rounded-lg bg-white shadow-md ${className}">
      <h3 className="text-xl font-semibold mb-4">Activity Trend</h3>

      {/* Responsive Chart Container */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip wrapperStyle={{ backgroundColor: "#fff", color: "#333" }} />
          <Bar dataKey="activity" fill="rgba(75, 192, 192, 0.8)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityTrendChart;