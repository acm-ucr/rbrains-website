import type { EventProps } from "@/types/calendar";
import EventCard from "./EventCard";

interface EventCardsProps {
  events: EventProps[];
}

const EventCards = ({ events }: EventCardsProps) => {
  if (!events || !Array.isArray(events)) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const filteredEvents = events.filter((event) => {
    let eventStartDate: Date | null = null;

    if (event.start.dateTime) {
      eventStartDate = new Date(event.start.dateTime);
    } else if (event.start.date) {
      eventStartDate = new Date(event.start.date);
    }

    return eventStartDate && eventStartDate >= today;
  });

  const displayedEvents = filteredEvents.slice(0, 3);

  return (
    <>
      {displayedEvents.map((event, index) => (
        <EventCard
          key={index}
          title={event.summary}
          location={event.location || "No location"}
          description={event.description ?? "No description"}
          startDate={{
            dateTime: event.start.dateTime
              ? new Date(event.start.dateTime)
              : undefined,
            date: event.start.date ?? "",
          }}
          idx={index}
        />
      ))}
    </>
  );
};

export default EventCards;
