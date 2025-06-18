// CalendarDay.tsx
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import EventPopover from "./EventPopover";
import { EventProps } from "./CalendarMain";

interface CalendarDayProps {
  date: Date;
  currentMonth: Date;
  events: EventProps[];
}

const CalendarDay = ({ date, currentMonth, events }: CalendarDayProps) => {
  const today = new Date();
  const isCurrentMonth = currentMonth.getMonth() === date.getMonth();
  const isWeekend = date.getDay() === 0 || date.getDay() === 6;
  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  const getWeekdayColorClass = (weekday: number) => {
    switch (weekday) {
      case 0: // Sunday
      case 6: // Saturday
        return "text-[#D66E6D]";
      case 1:
        return "text-[#5F95A7]";
      case 2:
        return "text-[#93B48F]";
      case 3:
        return "text-[#C08CE1]";
      case 4:
        return "text-[#F0B5D3]";
      case 5:
        return "text-[#F0CAA5]";
      default:
        return "";
    }
  };

  // Filter events for this specific day
  const dayEvents = events.filter((event) => {
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

    if (eventStartDate) eventStartDate.setHours(0, 0, 0, 0);
    if (eventEndDate) eventEndDate.setHours(23, 59, 59, 999);

    const checkDate = new Date(date);
    checkDate.setHours(0, 0, 0, 0);

    return (
      eventStartDate &&
      eventEndDate &&
      checkDate >= eventStartDate &&
      checkDate <= eventEndDate
    );
  });

  const maxVisibleEvents = 2;
  const visibleEvents = dayEvents.slice(0, maxVisibleEvents);
  const hasMoreEvents = dayEvents.length > maxVisibleEvents;

  return (
    <Card
      className={`bg-card calendar-day smooth-transition min-h-[100px] border-2 border-[#442F2C] p-2 transition-all duration-200 hover:shadow-md ${!isCurrentMonth ? "text-muted-foreground" : ""} ${isWeekend && isCurrentMonth ? "text-destructive" : ""} ${isToday ? "bg-primary/5 border-2" : ""} `}
    >
      {/* Date Number */}
      <div className="mb-1 text-right">
        <span
          className={`text-2xl font-semibold ${
            isToday ? "text-primary" : getWeekdayColorClass(date.getDay())
          }`}
        >
          {date.getDate()}
        </span>
      </div>

      {/* Events */}
      <div className="space-y-1">
        {visibleEvents.map((event, index) => (
          <EventPopover key={index} event={event} date={date} />
        ))}

        {hasMoreEvents && (
          <Popover>
            <PopoverTrigger asChild>
              <Badge
                variant="secondary"
                className="hover:bg-secondary/80 calendar-badge w-full cursor-pointer justify-center text-xs"
              >
                +{dayEvents.length - maxVisibleEvents} more
              </Badge>
            </PopoverTrigger>
            <PopoverContent className="calendar-popover w-64 p-2">
              <div className="space-y-1">
                {dayEvents.slice(maxVisibleEvents).map((event, index) => (
                  <div
                    key={index}
                    className="hover:bg-accent smooth-transition rounded p-2"
                  >
                    <p className="text-sm font-medium">{event.summary}</p>
                    {event.location && (
                      <p className="text-muted-foreground text-xs">
                        {event.location}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </Card>
  );
};

export default CalendarDay;
