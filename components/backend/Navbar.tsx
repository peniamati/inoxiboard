import React from "react";
import Image from "next/image";
import { AlignJustify, Bell, Sun, User } from "lucide-react";

function Navbar() {
  return (
    <div className="flex items-center justify-between bg-slate-800 text-slate-50 h-20 px-8 py-8 fixed top-0 pr-[20rem] w-full left-60 z-[10000]">
      {/*Icon*/}
      <button>
        <AlignJustify />
      </button>
      {/*3 Icons*/}
      <div className="flex space-x-3 ">
        <button>
          <Sun className="text-green-600"/>
        </button>

        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg"
        >
          <Bell className="text-green-600"/>
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-0 -end-0 dark:border-gray-900">
            20
          </div>       
        </button>
        <button>
          <Image src={"/profile.jpg"} alt="User profile" width={200} height={200} className="w-8 h-8 rounded-full"/>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
