import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaBars, FaTimes, FaHome, FaVideo, FaUserCheck, FaHeart, 
  FaClock, FaChartLine, FaTasks, FaCamera, FaAppStore, 
  FaProjectDiagram, FaStickyNote, FaCalendarAlt, FaFileAlt, 
  FaCog, FaUserShield, FaChevronLeft, FaChevronRight 
} from "react-icons/fa";

const Sidebar = ({ isSidebarVisible, toggleSidebar }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <FaHome /> },
    { name: "Live Stream", path: "/livestream", icon: <FaVideo /> },
    { name: "Attendance", path: "/attendance", icon: <FaUserCheck /> },
    { name: "Wellness", path: "/WellnessPanel", icon: <FaHeart /> },
    { name: "Timeline", path: "/Timeline", icon: <FaClock /> },
    { name: "Productivity", path: "/ProductivityPanel", icon: <FaChartLine /> },
    { name: "Activity", path: "/Activity", icon: <FaTasks /> },
    { name: "Snapshots", path: "/Snapshots", icon: <FaCamera /> },
    { name: "Applications", path: "/Applications", icon: <FaAppStore /> },
    { name: "Projects", path: "/ProjectPanel", icon: <FaProjectDiagram /> },
    { name: "Notes", path: "/Notes", icon: <FaStickyNote /> },
    { name: "Leaves", path: "/Leaves", icon: <FaCalendarAlt /> },
    { name: "Reports", path: "/reports", icon: <FaFileAlt /> },
    { name: "Settings", path: "/settings", icon: <FaCog /> },
    { name: "Super Admin", path: "/admin", icon: <FaUserShield /> },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMobileMenu}
        className="fixed top-4 left-4 z-50 md:hidden bg-gray-800 text-white p-2 rounded-md"
      >
        {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-screen bg-[#D9D9D9] text-gray-300 transition-all duration-300 z-40
          ${isSidebarVisible ? "w-64" : "w-20"} 
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          {isSidebarVisible && <h1 className="text-xl font-semibold text-[#1A1E24]">Breakmart</h1>}
          <button 
            onClick={toggleSidebar}
            className="hidden md:block p-1 bg-gray-600 hover:bg-gray-800 rounded-lg"
          >
            {isSidebarVisible ? <FaChevronLeft size={20} /> : <FaChevronRight size={20} />}
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="flex flex-col h-[calc(100vh-5rem)] overflow-y-auto">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 text-sm rounded-lg 
                hover:bg-[#3B3F70] transition-all duration-200
                ${!isSidebarVisible && "justify-center"}`}
            >
              <span className="text-[#3B3F70] hover:text-white">{item.icon}</span>
              {isSidebarVisible && <span className="text-[#3B3F70]">{item.name}</span>}
            </Link>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-700">
          <button 
            className={`w-full flex items-center gap-3 px-3 py-2 text-sm 
              rounded-lg hover:bg-gray-800 transition-all duration-200
              ${!isSidebarVisible && "justify-center"}`}
          >
            <FaCog size={20} className="text-gray-400" />
            {isSidebarVisible && <span className="text-gray-300">Settings</span>}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
