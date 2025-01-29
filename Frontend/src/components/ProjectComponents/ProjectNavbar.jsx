const ProjectNavbar = () => {
    return (
      <nav className="flex justify-between items-center p-4 bg-[#DBDBDB] text-white">
        {/* Left section: Projects label */}
        <div className="text-2xl text-[#3B3F70] font-semibold">
          Projects
        </div>
  
        {/* Right section: Search Bar, Add Project button, and Active Projects button */}
        <div className="flex items-center space-x-4">
          {/* Active Projects Button */}
          <button className="px-4 py-2 bg-white text-[#3B3F70] rounded-md transition duration-200">
            Active Projects
          </button>
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 border border-gray-400 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {/* Add Project Button */}
          <button className="px-4 py-2 bg-white text-[#3B3F70] hover:bg-green-500 transition duration-200">
            Add Project
          </button>
        </div>
      </nav>
    );
  };
  
  export default ProjectNavbar;
  