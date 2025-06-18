// CalendarGrid.tsx
import React from "react";
import CalendarDay from "./CalendarDay";
import { EventProps } from "./CalendarMain";

interface CalendarGridProps {
  currentDate: Date;
  events: EventProps[];
}

const CalendarGrid = ({ currentDate, events }: CalendarGridProps) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  // Add the same color function
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
  
  // Get first day of the month and number of days
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
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
      <div className="grid grid-cols-7 gap-1 mb-4">
        {daysOfWeek.map((day, index) => (
          <div
            key={day}
            className={`text-center font-semibold text-2xl py-2 ${getWeekdayColorClass(index)}`}
          >
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 calendar-grid">
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