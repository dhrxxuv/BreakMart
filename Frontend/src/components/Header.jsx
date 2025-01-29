import React from "react";

const Header = ({ isSidebarVisible }) => (
  <div className={`fixed top-0 right-0 h-14 bg-[#DBDBDB] text-white px-6 flex items-center shadow-md z-30 
    ${isSidebarVisible ? "left-64" : "left-20"} transition-all duration-300`}>
    <div className="flex-1 flex justify-between items-center">
      <h2 className="text-lg font-semibold text-[#3B3F70] ">Breakmart</h2>
      
      <div className="flex space-x-4 text-sm md:text-base">
        <span className="whitespace-nowrap text-[#00A2A8]">Admin</span>
        <span className="whitespace-nowrap text-[#3B3F70] ">Demo Account</span>
      </div>
    </div>
  </div>
);

export default Header;