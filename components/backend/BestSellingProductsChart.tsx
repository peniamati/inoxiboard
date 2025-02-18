"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function BestSellingProductsChart() {
  const data = {
    labels: ["Cabbage", "Watermelon", "Broccoli", "Maize"],
    datasets: [
      {
        label: "# of Sales",
        data: [50, 10, 20, 20],
        backgroundColor: [
          "rgba(0,0,255,0.7)",
          "rgba(255,0,221,0.7)",
          "rgba(2,139,71,0.7)",
          "rgba(0,0,0,0.7)",
        ],
        borderColor: [
          "rgba(0,0,255,0.3)",
          "rgba(255,0,221,0.3)",
          "rgba(2,139,71,0.3)",
          "rgba(0,0,0,0.3)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
        },
      },
    },
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-700 p-8 rounded-lg shadow-xl">
      <h2 className="text-xl font-bold mb-4 dark:text-slate-50 text-slate-900">Best Selling Products Charts</h2>
      {/* Chart */}
      <div className="p-4">
        <Pie data={data} options={options}/>
      </div>
    </div>
  );
}

export default BestSellingProductsChart;
