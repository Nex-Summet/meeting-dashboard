import {
  CalendarDays,
  Clock3,
  Users,
  Video,
} from "lucide-react";

const stats = [
  {
    title: "Upcoming Meetings",
    value: "12",
    description: "Today",
    icon: CalendarDays,
  },
  {
    title: "Pending Requests",
    value: "4",
    description: "Need your response",
    icon: Clock3,
  },
  {
    title: "Hours Booked",
    value: "8.5h",
    description: "This week",
    icon: Video,
  },
  {
    title: "Total Meetings",
    value: "24",
    description: "This month",
    icon: Users,
  },
];

export default function StatsCards() {
  return (
    <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {stat.title}
                </p>

                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  {stat.description}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                <Icon size={19} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}