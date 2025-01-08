import Link from "next/link";
import React from "react";
import Image from "next/image";

function Sidebar() {
  return (
    <div className="bg-slate-50 dark:bg-slate-700 space-y-6 w-60 h-screen text-slate-800 dark:text-slate-50 px-6 py-4 fixed left-0 top-0 shadow-md">
      <Link className="mb-6" href={"#"}>
        <Image
          src={"/logo.jpg"}
          width={1000}
          height={100}
          alt="Inoxiboard logo"
          className="w-36"
        />
      </Link>
      <div className="space-y-3 flex flex-col">
        <Link href={"#"}>Dashboard</Link>
        <Link href={"#"}>Catalogue</Link>
        <Link href={"#"}>Customers</Link>
        <Link href={"#"}>Markets</Link>
        <Link href={"#"}>Suppliers</Link>
        <Link href={"#"}>Orders</Link>
        <Link href={"#"}>Staff</Link>
        <Link href={"#"}>Setings</Link>
        <Link href={"#"}>Online Store</Link>
      </div>
    </div>
  );
}

export default Sidebar;
