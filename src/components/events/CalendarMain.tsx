// CalendarMain.tsx
"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import CalendarGrid from "./CalendarGrid";
import CalendarHeader from "./CalendarHeader";

export type EventProps = {
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  location?: string;
  description?: string;
  summary: string;
  id?: string;
  htmlLink?: string;
  colorId?: string;
  attendees?: Array<{
    email: string;
    displayName?: string;
    responseStatus?: "accepted" | "declined" | "tentative" | "needsAction";
  }>;
};

const CalendarMain = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Replace this with your existing Google Calendar API logic
  const { data: events, isLoading } = useQuery({
    queryKey: [
      "calendar-events",
      currentDate.getMonth(),
      currentDate.getFullYear(),
    ],
    queryFn: async () => {
      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
        }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          1,
        ).toISOString()}&timeMax=${new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + 1,
          0,
        ).toISOString()}`,
      );
      const data = await response.json();
      return (
        data.items?.map(
          ({
            start,
            end,
            location,
            description,
            summary,
            id,
            htmlLink,
            attendees,
          }: any) => ({
            start,
            end,
            location,
            description,
            summary,
            id,
            htmlLink,
            attendees,
          }),
        ) || []
      );
    },
  });

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  return (
    <div className="mx-auto max-w-6xl p-4">
      <h1 className="mb-4 text-center text-4xl font-bold">CALENDAR</h1>

      <Card className="bg-background calendar-container border-4 border-[#442F2C] p-6">
        <CalendarHeader currentDate={currentDate} onNavigate={navigateMonth} />

        {!isLoading && (
          <CalendarGrid currentDate={currentDate} events={events || []} />
        )}
      </Card>
    </div>
  );
};

export default CalendarMain;
