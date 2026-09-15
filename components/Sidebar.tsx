"use client";

import {
  LayoutDashboard,
  CalendarDays,
  Clock3,
  Video,
  Users,
  BarChart3,
  Plug,
  UserRound,
  CreditCard,
  Settings,
  ChevronDown,
  Crown,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    label: "Meetings",
    icon: Video,
  },
  {
    label: "Calendar",
    icon: CalendarDays,
  },
  {
    label: "Availability",
    icon: Clock3,
  },
  {
    label: "Meeting Types",
    icon: Video,
  },
  {
    label: "Contacts",
    icon: Users,
  },
  {
    label: "Analytics",
    icon: BarChart3,
  },
  {
    label: "Integrations",
    icon: Plug,
  },
];

const bottomItems = [
  {
    label: "Team",
    icon: UserRound,
  },
  {
    label: "Billing",
    icon: CreditCard,
  },
  {
    label: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-64 flex-col border-r border-gray-200 bg-white lg:flex">
      {/* Logo */}
      <div className="flex h-20 items-center px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white">
            <CalendarDays size={20} />
          </div>

          <span className="text-xl font-bold tracking-tight text-gray-900">
            MeetPlan
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Workspace
        </p>

        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                  item.active
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <Icon size={18} strokeWidth={1.8} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-8 border-t border-gray-100 pt-5">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Account
          </p>

          <div className="space-y-1">
            {bottomItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-500 transition hover:bg-gray-50 hover:text-gray-900"
                >
                  <Icon size={18} strokeWidth={1.8} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Upgrade Card */}
      <div className="p-4">
        <div className="rounded-2xl bg-gray-900 p-4 text-white">
          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
            <Crown size={18} />
          </div>

          <p className="text-sm font-semibold">Upgrade to Pro</p>

          <p className="mt-1 text-xs leading-5 text-gray-400">
            Unlock more features and grow your business.
          </p>

          <button className="mt-4 flex w-full items-center justify-between rounded-lg bg-white px-3 py-2 text-xs font-semibold text-gray-900">
            Upgrade now
            <ChevronDown size={14} className="-rotate-90" />
          </button>
        </div>
      </div>

      {/* Profile */}
      <div className="border-t border-gray-100 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-700">
            SK
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-gray-900">
              Sumeet Kannoji
            </p>

            <p className="truncate text-xs text-gray-500">
              sumeet@example.com
            </p>
          </div>

          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>
    </aside>
  );
}