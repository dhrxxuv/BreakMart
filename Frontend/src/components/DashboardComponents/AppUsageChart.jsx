import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const AppUsageChart = ({ className }) => {
  const data = [
    { category: "Category A", usage: 55.87 },
    { category: "Category B", usage: 34.39 },
    { category: "Category C", usage: 89.77 },
  ];

  return (
    <div className={`w-full h-[300px] max-w-[500px] mx-auto bg-white p-4 rounded-lg shadow-md ${className}`}>
      <h3 className="text-xl font-semibold mb-4 text-center">App Usage</h3>

      {/* Responsive Radar Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="category" tick={{ fill: "#666", fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: "#999", fontSize: 10 }} />
          <Tooltip />
          <Legend />
          <Radar name="Usage" dataKey="usage" stroke="#4ade80" fill="#4ade80" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppUsageChart;