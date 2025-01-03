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
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

function WeeklySalesChart() {

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const tabs = [
    {
      title: "Sales",
      type: "sales",
      data: {
        labels,
        datasets: [
          {
            label: "Sales",
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      }
    },
    {
      title: "Orders",
      type: "orders",
      data: {
        labels,
        datasets: [
          {
            label: "Orders",
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            borderColor: "rgb(0, 137, 132)",
            backgroundColor: "rgba(0, 137, 132, 0.5)",
          },
        ],
      }
    },
  ];

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

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
            return <Line options={options} data={tab.data} key={index}/>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default WeeklySalesChart;
