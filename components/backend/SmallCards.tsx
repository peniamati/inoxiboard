import React from "react";
import SmallCard from "./SmallCard";
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from "lucide-react";

function SmallCards() {
  const orderStatus = [
    {
      title: "Total Order",
      number: 150,
      iconBg: "bg-green-600",
      icon: ShoppingCart
    },
    {
      title: "Orders Pending",
      number: 100,
      iconBg: "bg-blue-600",
      icon: Loader2
    },
    {
      title: "Orders Processing",
      number: 200,
      iconBg: "bg-orange-600",
      icon: RefreshCcw
    },
    {
      title: "Orders Delivered",
      number: 300,
      iconBg: "bg-purple-600",
      icon: CheckCheck
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
      {orderStatus.map((data, index) => (
        <SmallCard key={index} data={data}/>
      ))}
    </div>
  );
}

export default SmallCards;
