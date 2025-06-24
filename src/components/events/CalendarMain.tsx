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

// Type definition for Google Calendar API event
type GoogleCalendarEvent = {
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

// Type definition for Google Calendar API response
type GoogleCalendarResponse = {
  items?: GoogleCalendarEvent[];
  error?: {
    message: string;
  };
};

const CalendarMain = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const { data: events, isLoading } = useQuery({
    queryKey: [
      "calendar-events",
      currentDate.getMonth(),
      currentDate.getFullYear(),
    ],
    queryFn: async () => {
      // Debug: Check if env variables are loaded
      console.log(
        "Calendar Email:",
        process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL,
      );
      console.log(
        "API Key exists:",
        !!process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY,
      );

      const url = `https://www.googleapis.com/calendar/v3/calendars/${
        process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
      }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1,
      ).toISOString()}&timeMax=${new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0,
      ).toISOString()}`;

      console.log("Fetching URL:", url);

      const response = await fetch(url);
      const data: GoogleCalendarResponse = await response.json();

      console.log("Response status:", response.status);
      console.log("Response data:", data);

      // Check for errors
      if (!response.ok) {
        console.error("API Error:", data.error);
        return [];
      }

      // Debug: Log number of events
      console.log("Number of events found:", data.items?.length || 0);

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
          }: GoogleCalendarEvent) => ({
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
