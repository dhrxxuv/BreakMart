import React from "react";

const WellnessTable = () => {
  const data = [
    { name: "John Doe", status: "Healthy", lastSeen: "12 Dec" },
    { name: "Jane Smith", status: "Overworked", lastSeen: "10 Dec" },
    { name: "Mike Johnson", status: "Underutilized", lastSeen: "8 Dec" },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "healthy":
        return "text-green-500";
      case "overworked":
        return "text-red-500";
      case "underutilized":
        return "text-blue-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md">
      <table className="w-full table-auto border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
              Name
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
              Status
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
              Last Seen
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-t border-gray-200 hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-sm text-gray-800">{row.name}</td>
              <td className="px-6 py-4 text-sm">
                <span className={`font-medium ${getStatusColor(row.status)}`}>
                  {row.status}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">{row.lastSeen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WellnessTable;
