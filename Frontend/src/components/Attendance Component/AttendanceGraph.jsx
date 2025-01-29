import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

function AttendanceGraph() {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && !chartInstanceRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Create a gradient effect for the area fill
      const gradientGreen = ctx.createLinearGradient(0, 0, 0, 400);
      gradientGreen.addColorStop(0, "rgba(72, 187, 120, 0.4)"); // Slightly more transparent green
      gradientGreen.addColorStop(1, "rgba(72, 187, 120, 0.05)");

      const gradientGray = ctx.createLinearGradient(0, 0, 0, 400);
      gradientGray.addColorStop(0, "rgba(200, 200, 200, 0.6)"); // More visible gray
      gradientGray.addColorStop(1, "rgba(200, 200, 200, 0.1)");

      const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Average Per Day",
            data: [24, 34, 14, 44, 30, 24, 24], // Lowered to avoid full overlap
            backgroundColor: gradientGray,
            borderColor: "rgba(150, 150, 150, 1)", // Darker border
            borderWidth: 2, // Thicker line
            pointRadius: 0,
            tension: 0.3, // Slightly less curve to differentiate
            fill: true,
          },
          {
            label: "Attendance",
            data: [27, 30, 25, 28, 32, 26, 29],
            backgroundColor: gradientGreen,
            borderColor: "rgba(72, 187, 120, 1)",
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.4, // Smoother curve
            fill: true,
          },
        ],
      };

      const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false, // Hide default legend
          },
        },
        scales: {
          x: {
            grid: { display: false },
            title: { display: false },
          },
          y: {
            grid: { display: false },
            ticks: { stepSize: 10, callback: (value) => `${value}%` },
          },
        },
      };

      chartInstanceRef.current = new Chart(ctx, {
        type: "line",
        data,
        options,
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg relative">
      <h2 className="text-sm font-semibold text-gray-700 mb-2">Attendance change over time</h2>

      {/* Left-Side Labels, Separate from the Graph */}
      <div className="absolute top-12 left-4 flex flex-col space-y-2">
        <div className="bg-green-300 text-black text-xs px-3 py-2 rounded-md shadow-md w-32 text-center">
          <span className="block font-medium">Attendance</span>
          <p className="font-bold text-lg">27.06%</p>
        </div>
        <div className="bg-gray-200 text-gray-700 text-xs px-3 py-2 rounded-md shadow-md w-32 text-center">
          <span className="block font-medium">Average Per Day</span>
          <p className="font-bold text-lg">27</p>
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="h-40 ml-36">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}

export default AttendanceGraph;