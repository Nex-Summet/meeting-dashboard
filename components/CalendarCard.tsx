import { ChevronLeft, ChevronRight, Circle } from "lucide-react";

const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

const calendarDays = [
  { date: 31, currentMonth: false },
  { date: 1, currentMonth: true },
  { date: 2, currentMonth: true },
  { date: 3, currentMonth: true },
  { date: 4, currentMonth: true },
  { date: 5, currentMonth: true },
  { date: 6, currentMonth: true },
  { date: 7, currentMonth: true },
  { date: 8, currentMonth: true },
  { date: 9, currentMonth: true },
  { date: 10, currentMonth: true },
  { date: 11, currentMonth: true },
  { date: 12, currentMonth: true },
  { date: 13, currentMonth: true },
  { date: 14, currentMonth: true },
  { date: 15, currentMonth: true, today: true },
  { date: 16, currentMonth: true },
  { date: 17, currentMonth: true },
  { date: 18, currentMonth: true },
  { date: 19, currentMonth: true },
  { date: 20, currentMonth: true },
];

export default function CalendarCard() {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">
          September 2026
        </h2>

        <div className="flex items-center gap-1">
          <button
            type="button"
            className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            type="button"
            className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="mb-2 grid grid-cols-7 gap-1 text-center">
        {daysOfWeek.map((day, index) => (
          <span
            key={index}
            className="text-xs font-medium text-gray-400"
          >
            {day}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {calendarDays.map((day, index) => (
          <button
            key={index}
            type="button"
            className={`mx-auto flex h-8 w-8 items-center justify-center rounded-lg text-sm ${
              day.today
                ? "bg-gray-900 font-semibold text-white"
                : day.currentMonth
                ? "text-gray-700 hover:bg-gray-100"
                : "text-gray-300"
            }`}
          >
            {day.date}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="mt-4 w-full text-center text-sm font-semibold text-gray-700 hover:text-gray-900"
      >
        View full calendar
      </button>

      <div className="my-5 border-t border-gray-100" />

      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-900">
          Today&apos;s Schedule
        </h3>

        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <Circle
              size={8}
              className="mt-1.5 fill-gray-900 text-gray-900"
            />

            <div>
              <p className="text-sm font-medium text-gray-800">
                Product Design Review
              </p>

              <p className="text-xs text-gray-400">
                10:00 AM
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Circle
              size={8}
              className="mt-1.5 fill-gray-900 text-gray-900"
            />

            <div>
              <p className="text-sm font-medium text-gray-800">
                Client Meeting
              </p>

              <p className="text-xs text-gray-400">
                2:00 PM
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="mt-5 flex w-full items-center justify-center rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          + New Meeting
        </button>
      </div>
    </section>
  );
}