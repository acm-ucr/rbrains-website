// EventPopover.tsx
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { EventProps } from "./CalendarMain";

interface EventPopoverProps {
  event: EventProps;
  date: Date;
}

const EventPopover = ({ event, date }: EventPopoverProps) => {
    const [open, setOpen] = React.useState(false);
  // Parse event times
  let eventStartDate = new Date();
  let eventEndDate = new Date();
  let hasStartTime = false;
  let hasEndTime = false;

  if (event.start.dateTime) {
    eventStartDate = new Date(event.start.dateTime);
    hasStartTime = true;
  } else if (event.start.date) {
    eventStartDate = new Date(event.start.date);
  }

  if (event.end.dateTime) {
    eventEndDate = new Date(event.end.dateTime);
    hasEndTime = true;
  } else if (event.end.date) {
    eventEndDate = new Date(event.end.date);
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="w-full cursor-pointer">
          <div className="rounded-full border-2 border-[#F2B7B6] bg-[#FFF5F5] hover:bg-[#FFEDED] transition-colors py-1 px-2">
            <p className="text-xs font-medium text-[#442F2C] text-center truncate">
              ☆ {event.summary} ☆
            </p>
          </div>
        </div>
      </PopoverTrigger>

      <PopoverContent
        className="w-80 md:w-[550px] p-0 overflow-hidden border-none bg-transparent shadow-lg"
        side="right"
        align="start"
      >
        {/* Header */}
        <div className="bg-[#C8D9E8] px-4 py-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[#442F2C]">
            {formatDate(date)} - {event.summary}
          </h3>
          <button 
            onClick={() => setOpen(false)}
            className="text-[#442F2C] hover:opacity-70 text-3xl"
          >
            ×
          </button>
        </div>
        
        {/* Body */}
        <div className="bg-[#FFF5F5] px-4 py-4 space-y-3">
          {/* Location */}
          <div className="text-[#442F2C]">
            <p className="text-base">{event.location || "Location/Building"}</p>
          </div>
          
          {/* Time */}
          <div className="text-[#442F2C]">
            <p className="text-base">
              {hasStartTime ? formatTime(eventStartDate) : "00:00 PM"} - {hasEndTime ? formatTime(eventEndDate) : "00:00 PM"}
            </p>
          </div>

          {/* Attendees */}
          {event.attendees && event.attendees.length > 0 && (
            <>
              <div className="border-t border-[#F2B7B6] pt-3 mt-3">
                <p className="mb-2 font-medium text-sm text-[#442F2C]">
                  Attendees ({event.attendees.length})
                </p>
                <div className="space-y-1">
                  {event.attendees.slice(0, 3).map((attendee, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          attendee.responseStatus === "accepted"
                            ? "bg-green-500"
                            : attendee.responseStatus === "declined"
                              ? "bg-red-500"
                              : attendee.responseStatus === "tentative"
                                ? "bg-yellow-500"
                                : "bg-gray-400"
                        }`}
                      />
                      <span className="text-[#442F2C] text-xs">
                        {attendee.displayName || attendee.email}
                      </span>
                    </div>
                  ))}
                  {event.attendees.length > 3 && (
                    <p className="text-[#442F2C]/70 text-xs">
                      +{event.attendees.length - 3} more
                    </p>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default EventPopover;