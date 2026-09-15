import ConnectCalendarButton from "./ConnectCalendarButton";

export default function WelcomeSection() {
  return (
    <section className="mb-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex flex-col items-start justify-between gap-6 p-6 sm:flex-row sm:items-center sm:p-7">
        
        {/* Left Content */}
        <div className="relative z-10">
          <p className="text-sm font-medium text-gray-500">
            Tuesday, September 15, 2026
          </p>

          <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Good Morning, Sumeet 👋
          </h1>

          <p className="mt-2 max-w-xl text-sm text-gray-500">
            Welcome back! Here&apos;s what&apos;s happening with your meetings
            today.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <ConnectCalendarButton />

            <button className="rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800">
              + Create Meeting
            </button>
          </div>
        </div>

        {/* Right Side Illustration */}
        <div className="hidden shrink-0 sm:block">
          <div className="flex h-32 w-44 items-end justify-center rounded-2xl bg-gray-50 px-4 pt-4">
            <div className="flex items-end gap-2">
              <div className="h-12 w-8 rounded-t-lg bg-gray-300" />
              <div className="h-20 w-10 rounded-t-lg bg-gray-400" />
              <div className="h-28 w-12 rounded-t-lg bg-gray-800" />
              <div className="h-16 w-9 rounded-t-lg bg-gray-300" />
              <div className="h-10 w-7 rounded-t-lg bg-gray-400" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}