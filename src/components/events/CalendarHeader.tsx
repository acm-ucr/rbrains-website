// CalendarHeader.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
        <Button
          variant="outline"
          size="icon"
          onClick={() => onNavigate("prev")}
          aria-label="Previous month"
          className="border-border hover:bg-accent calendar-button rounded-full border-2"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <h2
          className="text-[4.7vw] leading-[1.2] font-extrabold text-white"
          style={{
            WebkitTextFillColor: "white",
            WebkitTextStroke: "2px #72a0c7",
          }}
        >
          {monthNames[currentDate.getMonth()]}
        </h2>

        <Button
          variant="outline"
          size="icon"
          onClick={() => onNavigate("next")}
          aria-label="Next month"
          className="border-border hover:bg-accent calendar-button rounded-full border-2"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CalendarHeader;
