import {
  CalendarDays,
  Clock3,
  Users,
  Video,
  IndianRupee,
} from "lucide-react";

const stats = [
  {
    title: "Upcoming Meetings",
    value: "12",
    change: "↑ 12% vs yesterday",
    icon: CalendarDays,
  },
  {
    title: "Pending Requests",
    value: "4",
    change: "↑ 8% vs yesterday",
    icon: Clock3,
  },
  {
    title: "Hours Booked",
    value: "8.5h",
    change: "↑ 15% vs yesterday",
    icon: Video,
  },
  {
    title: "Revenue",
    value: "₹24,680",
    change: "↑ 10% vs yesterday",
    icon: IndianRupee,
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

                <p className="mt-2 text-xs font-medium text-green-600">
                  {stat.change}
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