"use client";

import { CalendarDays } from "lucide-react";
import { signIn } from "next-auth/react";

export default function ConnectCalendarButton() {
  const handleConnect = () => {
    signIn("google", {
      callbackUrl: "/",
    });
  };

  return (
    <button
      onClick={handleConnect}
      className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50"
    >
      <CalendarDays size={17} />
      Connect Google Calendar
    </button>
  );
}