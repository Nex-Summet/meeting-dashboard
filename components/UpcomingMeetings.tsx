"use client";

import { useEffect, useState } from "react";
import { CalendarDays, Clock3, Video } from "lucide-react";

type CalendarEvent = {
  id: string;
  summary?: string;
  start?: {
    dateTime?: string;
    date?: string;
  };
};

const avatars = ["SK", "JD", "AK"];

export default function UpcomingMeetings() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch("/api/calendar/events");
        const data = await response.json();

        if (response.ok) {
          setEvents(data);
        }
      } catch (error) {
        console.error("Failed to fetch calendar events:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Upcoming Meetings
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Your scheduled meetings from Google Calendar
          </p>
        </div>

        <button className="text-sm font-semibold text-gray-700 hover:text-black">
          View all
        </button>
      </div>

      {loading ? (
        <p className="py-6 text-sm text-gray-500">
          Loading meetings...
        </p>
      ) : events.length === 0 ? (
        <p className="py-6 text-sm text-gray-500">
          No upcoming meetings found.
        </p>
      ) : (
        <div className="divide-y divide-gray-100">
          {events.map((event, index) => {
            const start = event.start?.dateTime
              ? new Date(event.start.dateTime)
              : null;

            const time = start
              ? start.toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZone: "Asia/Kolkata",
                })
              : "All day";

            return (
              <div
                key={event.id}
                className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                    <CalendarDays size={19} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {event.summary || "Untitled Meeting"}
                    </h3>

                    <div className="mt-2 flex items-center">
                      {avatars.map((avatar, avatarIndex) => (
                        <div
                          key={avatarIndex}
                          className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-gray-200 text-[10px] font-semibold text-gray-700 ${
                            avatarIndex > 0 ? "-ml-2" : ""
                          }`}
                        >
                          {avatar}
                        </div>
                      ))}

                      <span className="ml-2 text-xs text-gray-500">
                        Google Calendar
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-1.5 text-sm font-medium text-gray-700">
                    <Clock3 size={15} />
                    {time}
                  </div>

                  <span className="hidden rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 sm:inline-flex">
                    Google Calendar
                  </span>

                  <button className="flex items-center gap-1.5 rounded-lg bg-gray-900 px-3 py-2 text-xs font-semibold text-white hover:bg-gray-800">
                    <Video size={14} />
                    Join
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}