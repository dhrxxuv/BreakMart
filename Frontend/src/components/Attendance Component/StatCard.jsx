import React from "react";

function StatCard({ title, value, bgColor, textColor }) {
  return (
    <div className={`rounded-lg shadow-md p-4 ${bgColor}`}>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
    </div>
  );
}

export default StatCard;
