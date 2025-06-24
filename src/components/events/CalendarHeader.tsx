// CalendarHeader.tsx
import React from "react";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";

interface CalendarHeaderProps {
  currentDate: Date;
  onNavigate: (direction: "prev" | "next") => void;
}

const CalendarHeader = ({ currentDate, onNavigate }: CalendarHeaderProps) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="text-center">
      {/* Month Navigation */}
      <div className="calendar-navigation mb-4 flex items-center justify-center gap-8">
        <IoArrowBackCircleOutline 
        onClick={() => onNavigate("prev")}
        className="h-12 w-12 md:h-16 md:w-16 cursor-pointer hover:bg-accent rounded-full p-1 transition-colors" 
      />
        <h2
          className="text-[4.7vw] leading-[1.2] font-extrabold text-white"
          style={{
            WebkitTextFillColor: "white",
            WebkitTextStroke: "2px #72a0c7",
          }}
        >
          {monthNames[currentDate.getMonth()]}
        </h2>

        <IoArrowForwardCircleOutline 
        onClick={() => onNavigate("prev")}
        className="h-12 w-12 md:h-16 md:w-16 cursor-pointer hover:bg-accent rounded-full p-1 transition-colors" 
      />
      </div>
    </div>
  );
};

export default CalendarHeader;
