import { GoogleEventProps } from "@/components/events/CalendarCall";
import { useState, useEffect } from "react";

interface DayProps {
  date: Date;
  displayMonth: Date;
  events: GoogleEventProps[];
}

const CalendarDay = ({ date, displayMonth, events }: DayProps) => {
  const today = new Date();
  const isCurrentMonth = displayMonth.getMonth() === date.getMonth();
  const isWeekend = date.getDay() === 0 || date.getDay() === 6;
  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();
  const isOtherMonthsFirst =
    displayMonth.getMonth() !== today.getMonth() && date.getDate() === 1;

  const filteredEvents = events.filter((event) => {
    let eventStartDate: Date | null = null;
    let eventEndDate: Date | null = null;

    if (event.start.dateTime) {
      eventStartDate = new Date(event.start.dateTime);
    } else if (event.start.date) {
      eventStartDate = new Date(event.start.date);
    }

    if (event.end.dateTime) {
      eventEndDate = new Date(event.end.dateTime);
    } else if (event.end.date) {
      eventEndDate = new Date(event.end.date);
    }

    eventStartDate?.setHours(0, 0, 0, 0);
    eventEndDate?.setHours(23, 59, 59, 999);

    return (
      eventStartDate &&
      eventEndDate &&
      date >= eventStartDate &&
      date <= eventEndDate
    );
  });

  const [visibleEventCount, setVisibleEventCount] = useState(2);

  useEffect(() => {
    const updateVisibleEventCount = () => {
      if (window.innerHeight > 1440) {
        setVisibleEventCount(4);
      } else if (window.innerHeight > 1080) {
        setVisibleEventCount(3);
      } else {
        setVisibleEventCount(2);
      }
    };

    updateVisibleEventCount();
    window.addEventListener("resize", updateVisibleEventCount);
    return () => window.removeEventListener("resize", updateVisibleEventCount);
  }, []);

  return (
    <div
      className={`flex h-[10vh] flex-col items-center justify-start gap-y-0.5 sm:gap-y-1 md:h-[14vh] ${
        isCurrentMonth ? "" : "collapse"
      } ${isWeekend ? "text-csa-red-200" : "text-csa-gray-200"} ${
        isToday || isOtherMonthsFirst
          ? "bg-csa-red-200 text-csa-yellow-400"
          : ""
      } rounded-lg md:rounded-xl`}
    >
      <p className="mt-[1vh] text-base sm:text-lg md:text-2xl 2xl:text-4xl">
        {date.getDate()}
      </p>
      {filteredEvents.slice(0, visibleEventCount).map(({ summary }, index) => (
        <p
          className="truncate text-center text-[8px] sm:text-xs 2xl:text-sm"
          key={index}
        >
          {summary}
        </p>
      ))}
    </div>
  );
};

export default CalendarDay;
