import "@/styles/styles.css";
import UpcomingEvents from "@/components/events/UpcommingEvents";
import CalendarMain from "@/components/events/CalendarMain";

const Page = () => {
  return (
    <div className="mt-30 min-h-screen bg-[#f9f5ef] py-8">
      <div className="container mx-auto">
        <UpcomingEvents />
        <CalendarMain />
      </div>
    </div>
  );
};

export default Page;
