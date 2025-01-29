import React from "react";

function SearchBar() {
  return (
    <input
      type="text"
      placeholder="Type to search"
      className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

export default SearchBar;
