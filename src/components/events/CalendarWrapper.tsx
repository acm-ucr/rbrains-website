"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import CalendarMain from "./CalendarMain";
import EventCards from "./EventCards";
import type { EventProps } from "@/types/calendar";

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

type GoogleCalendarResponse = {
  items?: GoogleCalendarEvent[];
};

const CalendarWrapper = () => {
  // Get current date for the API query
  const currentDate = new Date();

  const {
    data: events = [],
    isLoading,
    error,
  } = useQuery<EventProps[]>({
    queryKey: [
      "calendar-events",
      currentDate.getMonth(),
      currentDate.getFullYear(),
    ],
    queryFn: async () => {
      const url = `https://www.googleapis.com/calendar/v3/calendars/${
        process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
      }/events?key=${
        process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY
      }&singleEvents=true&orderBy=startTime&timeMin=${new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1,
      ).toISOString()}&timeMax=${new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0,
      ).toISOString()}`;

      const response = await fetch(url);
      const data: GoogleCalendarResponse = await response.json();

      return (
        data.items?.map((e) => ({
          start: e.start,
          end: e.end,
          summary: e.summary,
          location: e.location,
          description: e.description,
          id: e.id,
          htmlLink: e.htmlLink,
          attendees: e.attendees,
        })) || []
      );
    },
  });

  return (
    <div className="mt-30 min-h-screen bg-[#f9f5ef] py-8">
      <div className="container mx-auto">
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error fetching calendar data.</p>}

        {!isLoading && events.length > 0 && <EventCards events={events} />}

        {/* CalendarMain manages its own state */}
        <CalendarMain />
      </div>
    </div>
  );
};

export default CalendarWrapper;
