import React from "react";
import Image from "next/image";
import {
  AlignJustify,
  Bell,
  LayoutDashboard,
  LogOut,
  Settings,
  Sun,
  User,
  X,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeSwitcher } from "../ThemeSwitcher";

function Navbar() {
  return (
    <div className="flex items-center justify-between bg-slate-800 text-slate-50 h-20 px-8 py-8 fixed top-0 pr-[20rem] w-full left-60 z-50">
      {/*Icon*/}
      <button>
        <AlignJustify />
      </button>
      {/*3 Icons*/}
      <div className="flex space-x-3 ">
        <ThemeSwitcher />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <button
              type="button"
              className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg"
            >
              <Bell className="text-green-600" />
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-0 -end-0 dark:border-gray-900">
                20
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="py-2 px-4 pr-8 z-[51]">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <button>
                  <Image
                    src={"/profile.jpg"}
                    alt="User profile"
                    width={200}
                    height={200}
                    className="w-8 h-8 rounded-full"
                  />
                </button>
                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Corn Stock out</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm">
                      Stock out
                    </p>
                    <p>Dec 12 2021 - 12:40PM</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <button>
                  <Image
                    src={"/profile.jpg"}
                    alt="User profile"
                    width={200}
                    height={200}
                    className="w-8 h-8 rounded-full"
                  />
                </button>
                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Corn Stock out</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm">
                      Stock out
                    </p>
                    <p>Dec 12 2021 - 12:40PM</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <button>
                  <Image
                    src={"/profile.jpg"}
                    alt="User profile"
                    width={200}
                    height={200}
                    className="w-8 h-8 rounded-full"
                  />
                </button>
                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Corn Stock out</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm">Stock out</p>
                    <p>Dec 12 2021 - 12:40PM</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
              
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <button>
              <Image
                src={"/profile.jpg"}
                alt="User profile"
                width={200}
                height={200}
                className="w-8 h-8 rounded-full"
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="py-2 px-4 pr-8 z-[51]">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <Settings className="mr-2 h-4 w-4" />
                <span>Edit Profile</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Navbar;
