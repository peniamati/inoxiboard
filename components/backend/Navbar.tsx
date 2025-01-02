import React from "react";
import { AlignJustify, Bell, Sun, User } from "lucide-react";

function Navbar() {
  return (
    <div className="flex items-center justify-between bg-slate-800 text-slate-50 h-16 px-8 py-4 fixed top-0 w-[calc(100%-240px)] left-60">
      {/*Icon*/}
      <button>
        <AlignJustify/>
      </button>
      {/*3 Icons*/}
      <div className="flex space-x-3">
        <button>
          <Sun />
        </button>
        <button>
          <Bell />
        </button>
        <button>
          <User />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
