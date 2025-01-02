import React from "react";
import LargeCard from "./LargeCard";
import { title } from "process";

function LargeCards() {
  const orderStats = [
    {
      title: "Today Orders",
      sales: 110000,
      color: "bg-green-600",
    },
    {
        title: "Yesterday Orders",
        sales: 140000,
        color: "bg-blue-600",
      },
      {
        title: "This Month",
        sales: 10810000,
        color: "bg-orange-600",
      },
      {
        title: "All Time Sales",
        sales: 1158540000,
        color: "bg-purple-600",
      }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
      {
        orderStats.map((item, index) => (
          <LargeCard key={index} data={item}/>
        ))
      }
    </div>
  );
}

export default LargeCards;
