import "@/styles/styles.css";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import CalendarMain from "@/components/events/CalendarMain";

const Page = () => {
  return (
    <div className="mt-30 min-h-screen py-8">
      <title>UCR R'Brains - Events</title>
      <meta name="description" content="UCR R'Brains Upcoming Events" />
      <UpcomingEvents />
      <CalendarMain />
    </div>
  );
};

export default Page;
