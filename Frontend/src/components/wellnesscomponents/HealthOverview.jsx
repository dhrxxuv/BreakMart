import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const HealthOverview = ({ className }) => {
  const data = [
    { name: "Healthy", value: 60 },
    { name: "Overworked", value: 25 },
    { name: "Underutilized", value: 15 },
  ];

  const colors = ["#4ade80", "#ef4444", "#f59e0b"]; // Ensured unique colors

  // Custom Legend with responsive layout
  const CustomLegend = ({ payload }) => {
    if (!payload) return null; // Prevent crash if payload is undefined

    return (
      <div className="flex flex-wrap justify-center gap-4 mt-2 px-2">
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 min-w-[80px]">
            <div className="w-3 h-3 flex-shrink-0" style={{ backgroundColor: entry.color }} />
            <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  };

  // Custom Label for PieChart
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    if (percent < 0.05) return null; // Show labels only if percentage > 5%

    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        className="text-xs sm:text-sm"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className={`w-full h-full ${className}`}>
      <div className="h-full flex flex-col">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Health Overview</h2>
        <div className="flex-grow relative min-h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius="70%" // Optimized for responsiveness
                innerRadius="40%"
                labelLine={false}
                label={renderCustomizedLabel}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} stroke="none" />
                ))}
              </Pie>
              <Legend content={<CustomLegend />} verticalAlign="bottom" align="center" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  fontSize: "12px",
                }}
                wrapperStyle={{
                  zIndex: 1000,
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default HealthOverview;
