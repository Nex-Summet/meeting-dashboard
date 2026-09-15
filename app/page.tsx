import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import WelcomeSection from "@/components/WelcomeSection";
import StatsCards from "@/components/StatsCards";
import UpcomingMeetings from "@/components/UpcomingMeetings";
import CalendarCard from "@/components/CalendarCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <Header />

          <main className="flex-1 p-4 sm:p-6 lg:p-8">
            <WelcomeSection />

            <StatsCards />

             <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
  <div className="xl:col-span-2">
    <UpcomingMeetings />
  </div>

  <CalendarCard />
</div>
          </main>
        </div>
      </div>
    </main>
  );
}