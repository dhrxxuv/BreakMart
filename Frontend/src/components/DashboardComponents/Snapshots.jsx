import React from "react";

const Snapshots = ({ className, snapshots = ["Snapshot 1", "Snapshot 2", "Snapshot 3"] }) => (
  <div className={`w-full h-[300px] max-w-[500px] mx-auto p-4 bg-white rounded-lg shadow-md ${className}`}>
    <h3 className="text-xl font-semibold mb-4">Latest Snapshots</h3>

    {/* Snapshot List */}
    <div className="flex justify-around flex-wrap gap-4">
      {snapshots.map((snapshot, index) => (
        <p key={index} className="px-3 py-2 bg-gray-200 rounded-lg shadow">
          {snapshot}
        </p>
      ))}
    </div>
  </div>
);

export default Snapshots;