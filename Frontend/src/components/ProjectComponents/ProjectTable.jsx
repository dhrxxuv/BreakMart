import React from "react";

const ProjectTable = () => {
  const data = [
    {
      employee: "Devansh Jain",
      owner: "Ekta Bahekar",
      tasksCompleted: "1/2",
      lastPresent: "12/10/24 12:55:76",
      status: "Active",
    },
    // Add more data rows as needed
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-lg rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Employee</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Owner</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Tasks Completed</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Last Present</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-t">
              <td className="py-3 px-6 text-sm text-gray-800">{row.employee}</td>
              <td className="py-3 px-6 text-sm text-gray-800">{row.owner}</td>
              <td className="py-3 px-6 text-sm text-gray-800">
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-green-500 rounded-full"
                      style={{ width: "50%" }} // Adjust width based on tasksCompleted value
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500">{row.tasksCompleted}</span>
                </div>
              </td>
              <td className="py-3 px-6 text-sm text-gray-800">{row.lastPresent}</td>
              <td className="py-3 px-6 text-sm text-gray-800">
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition duration-200">
                  {row.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;