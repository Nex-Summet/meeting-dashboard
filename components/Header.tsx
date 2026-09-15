"use client";

import {
  Bell,
  Search,
  ChevronDown,
  Menu,
} from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-6 lg:px-8">
      
      {/* Mobile Menu Button */}
      <button
        className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>

      {/* Search */}
      <div className="hidden w-full max-w-md sm:block">
        <div className="flex items-center gap-3 rounded-xl bg-gray-100 px-4 py-2.5">
          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="ml-auto flex items-center gap-3">
        {/* Notification */}
        <button
          className="relative rounded-xl p-2.5 text-gray-500 hover:bg-gray-100"
          aria-label="Notifications"
        >
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* Profile */}
        <button className="flex items-center gap-2 rounded-xl p-1.5 hover:bg-gray-50">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-700">
            SK
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold text-gray-900">
              Sumeet Kannoji
            </p>

            <p className="text-xs text-gray-500">
              Full Stack Developer
            </p>
          </div>

          <ChevronDown
            size={16}
            className="hidden text-gray-400 sm:block"
          />
        </button>
      </div>
    </header>
  );
}