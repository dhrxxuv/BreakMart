import React from "react";

function WellnessNavbar() {
  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex justify-between items-center bg-[#C1C1C1] text-[#3B3F70] p-4">
      {/* Wellness on the Left */}
      <h1 className="text-xl font-semibold">Wellness</h1>

      {/* Month and Year on the Right */}
      <div className="text-lg">
        <span>{currentMonth} {currentYear}</span>
      </div>
    </div>
  );
}

export default WellnessNavbar;
