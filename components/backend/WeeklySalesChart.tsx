"use client";
import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function WeeklySalesChart() {
  const tabs = [
    {
      title: "Sales",
      type: "sales",
      current: true,
    },
    {
      title: "Orders",
      type: "orders",
      current: false,
    },
  ];

  const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type);
  return (
    <div className="bg-slate-700 p-8 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Best Selling Charts</h2>
      <div className="p-4">
        {/* Tabs */}

        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-200 border-b border-gray-200 dark:border-gray-400 dark:text-gray-400">
          {tabs.map((tab, index) => {
            return (
              <li className="me-2" key={index}>
                <button
                  onClick={() => setChartToDisplay(tab.type)}
                  aria-current="page"
                  className={
                    chartToDisplay === tab.type
                      ? "inline-block p-4 text-orange-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-orange-500"
                      : "inline-block p-4 rounded-t-lg hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                  }
                >
                  {tab.title}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Content to display */}
        {tabs.map((tab, index) => {
          if (chartToDisplay === tab.type) {
            return <h2>{tab.title}</h2>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default WeeklySalesChart;
