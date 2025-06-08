"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export type GoogleEventProps = {
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  location: string;
  description: string;
  summary: string;
};

const CalendarCall = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-amber-100">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="h-full w-full rounded-md border shadow-sm"
      />
    </div>
  );
};

export default CalendarCall;
