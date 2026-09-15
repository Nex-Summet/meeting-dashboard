import { Copy, Video, Users, Briefcase, Monitor } from "lucide-react";

const meetingTypes = [
  {
    title: "30 Min Consultation",
    duration: "30 minutes",
    icon: Users,
  },
  {
    title: "60 Min Strategy Call",
    duration: "60 minutes",
    icon: Briefcase,
  },
  {
    title: "Quick Demo",
    duration: "30 minutes",
    icon: Monitor,
  },
  {
    title: "Interview Session",
    duration: "45 minutes",
    icon: Video,
  },
];

export default function MeetingTypes() {
  return (
    <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Your Meeting Types
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage your available meeting types
          </p>
        </div>

        <button className="text-sm font-semibold text-gray-700 hover:text-black">
          Manage all
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {meetingTypes.map((meeting) => {
          const Icon = meeting.icon;

          return (
            <div
              key={meeting.title}
              className="rounded-xl border border-gray-200 p-4 transition hover:border-gray-300 hover:shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                  <Icon size={18} />
                </div>

                <button
                  className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                  aria-label={`Copy ${meeting.title} link`}
                >
                  <Copy size={16} />
                </button>
              </div>

              <h3 className="mt-4 text-sm font-semibold text-gray-900">
                {meeting.title}
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                {meeting.duration}
              </p>

              <button className="mt-4 text-xs font-semibold text-gray-700 hover:text-black">
                Copy link
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}