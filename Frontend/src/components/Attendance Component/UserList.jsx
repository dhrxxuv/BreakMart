import React from "react";

function UserList({ title, count, users, bgColor }) {
  return (
    <div className={`rounded-lg shadow-md p-4 ${bgColor}`}>
      <h3 className="text-lg font-medium mb-2">
        {count} {title}
      </h3>
      <div className="grid grid-cols-3 gap-2">
        {users.map((user, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 bg-white p-2 rounded-lg shadow-sm"
          >
            <img
              src="/path/to/avatar.png"
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
            <p className="text-sm font-medium">{user}</p>
          </div>
        ))}
      </div>
      <button className="mt-4 bg-gray-200 p-2 rounded-lg shadow-md w-full">
        Load More
      </button>
    </div>
  );
}

export default UserList;
