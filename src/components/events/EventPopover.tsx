// EventPopover.tsx
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";
import { EventProps } from "./CalendarMain";

interface EventPopoverProps {
  event: EventProps;
  date: Date;
}

const EventPopover = ({ event, date }: EventPopoverProps) => {
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
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Badge
          variant="default"
          className="w-full justify-start cursor-pointer hover:opacity-80 text-xs truncate calendar-badge smooth-transition"
        >
          {event.summary}
        </Badge>
      </PopoverTrigger>
      
      <PopoverContent className="w-80 calendar-popover popover-content" side="right" align="start">
        <Card className="border-0 shadow-none">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">{event.summary}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarIcon className="h-4 w-4" />
              {formatDate(date)}
            </div>
          </CardHeader>
          
          <CardContent className="space-y-3">
            {/* Time Information */}
            {hasStartTime && (
              <div className="flex items-center gap-2 text-sm">
                <ClockIcon className="h-4 w-4 text-muted-foreground" />
                <span>
                  {formatTime(eventStartDate)}
                  {hasEndTime && (
                    <span> - {formatTime(eventEndDate)}</span>
                  )}
                </span>
              </div>
            )}

            {/* Location */}
            {event.location && (
              <>
                <div className="flex items-center gap-2 text-sm">
                  <MapPinIcon className="h-4 w-4 text-muted-foreground" />
                  <span>{event.location}</span>
                </div>
              </>
            )}

            {/* Description */}
            {event.description && (
              <>
                <Separator />
                <div className="text-sm">
                  <p className="font-medium mb-1">Description</p>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </>
            )}

            {/* Attendees */}
            {event.attendees && event.attendees.length > 0 && (
              <>
                <Separator />
                <div className="text-sm">
                  <p className="font-medium mb-2">
                    Attendees ({event.attendees.length})
                  </p>
                  <div className="space-y-1">
                    {event.attendees.slice(0, 3).map((attendee, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            attendee.responseStatus === 'accepted'
                              ? 'bg-green-500'
                              : attendee.responseStatus === 'declined'
                              ? 'bg-red-500'
                              : attendee.responseStatus === 'tentative'
                              ? 'bg-yellow-500'
                              : 'bg-gray-400'
                          }`}
                        />
                        <span className="text-xs text-muted-foreground">
                          {attendee.displayName || attendee.email}
                        </span>
                      </div>
                    ))}
                    {event.attendees.length > 3 && (
                      <p className="text-xs text-muted-foreground">
                        +{event.attendees.length - 3} more
                      </p>
                    )}
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
};

export default EventPopover;