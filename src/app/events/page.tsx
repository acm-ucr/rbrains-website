import "@/styles/styles.css";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import CalendarMain from "@/components/events/CalendarMain";

const Page = () => {
  return (
    <div className="mt-30 min-h-screen py-8">
      <UpcomingEvents />
      <CalendarMain />
    </div>
  );
};

export default Page;
