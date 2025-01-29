import React from "react";
import AttendanceHeader from "../Attendance Component/AttendanceHeader";
import AttendanceGraph from "../Attendance Component/AttendanceGraph";
import UserList from "../Attendance Component/UserList";
import SearchBar from "../Attendance Component/SearchBar";
import DateSelector from "../Attendance Component/DateSelector";
import Header from "../Header";

function Attendance() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Main Header */}
      <Header />

      {/* Attendance Header - Fixed alignment */}
      <div className="relative z-10">
        <AttendanceHeader title="Attendance" className="bg-blue-700" />
      </div>

      {/* Main Content - Scrollable Area */}
      <div className="overflow-auto h-[calc(100vh-8.5rem)] p-6 space-y-6">
        {/* Top Row: Graph */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <AttendanceGraph />
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <SearchBar />
          <DateSelector />
        </div>

        {/* Present & Absent Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UserList 
            title="Present" 
            count={27} 
            users={["Anushka", "Devansh", "Dev"]} 
            bgColor="bg-green-100" 
          />
          <UserList 
            title="Absent" 
            count={17} 
            users={["Anushka", "Devansh", "Dev"]} 
            bgColor="bg-red-100" 
          />
        </div>
      </div>
    </div>
  );
}

export default Attendance;