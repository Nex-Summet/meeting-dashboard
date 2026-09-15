import ConnectCalendarButton from "./ConnectCalendarButton";

export default function WelcomeSection() {
  return (
    <section className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">
          Tuesday, September 15, 2026
        </p>

        <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Good afternoon, Sumeet 👋
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Here&apos;s what&apos;s happening with your meetings today.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <ConnectCalendarButton />

        <button className="rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800">
          + Create Meeting
        </button>
      </div>
    </section>
  );
}