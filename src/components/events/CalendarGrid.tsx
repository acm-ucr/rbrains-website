// CalendarGrid.tsx
import React from "react";
import CalendarDay from "./CalendarDay";
import type { EventProps } from "@/types/calendar";

interface CalendarGridProps {
  currentDate: Date;
  events: EventProps[];
}

const CalendarGrid = ({ currentDate, events }: CalendarGridProps) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getWeekdayColorClass = (weekday: number) => {
    switch (weekday) {
      case 0:
      case 6:
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

  // Get first day of the month and number of days
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  );
  const startDate = new Date(firstDayOfMonth);
  startDate.setDate(startDate.getDate() - firstDayOfMonth.getDay());

  // Generate calendar days (6 weeks = 42 days)
  const calendarDays = [];
  const currentDay = new Date(startDate);

  for (let i = 0; i < 42; i++) {
    calendarDays.push(new Date(currentDay));
    currentDay.setDate(currentDay.getDate() + 1);
  }

  return (
    <div className="calendar-grid">
      {/* Days of Week Header */}
      <div className="mb-4 grid grid-cols-7 gap-1">
        {daysOfWeek.map((day, index) => (
          <div
            key={day}
            className={`py-2 text-center text-2xl font-semibold ${getWeekdayColorClass(index)}`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((date, index) => (
          <CalendarDay
            key={index}
            date={date}
            currentMonth={currentDate}
            events={events}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
