"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Title from "@/components/ReusableTitle";
import { useQuery } from "@tanstack/react-query";
import type { EventProps } from "@/types/calendar";
import leftSquiggle from "@/public/calendar/leftSideSquiggle.svg";
import rightSquggle from "@/public/calendar/rightSideSquiggle.webp";

interface ProcessedEvent {
  name: string;
  location: string;
  time: string;
  date: string;
  cloudColor: "blue" | "purple" | "red";
  startDate: Date;
}

const UpcomingEventsCalendar = () => {
  const currentDate = new Date();

  const hasValidDate = (event: EventProps): boolean => {
    return !!(event.start && (event.start.dateTime || event.start.date));
  };

  const { data: events = [] } = useQuery<EventProps[]>({
    queryKey: ["upcoming-events"],
    queryFn: async () => {
      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${currentDate.toISOString()}&maxResults=3`,
      );
      const data = await response.json();
      return (data.items || []) as EventProps[];
    },
  });

  const upcomingEvents: ProcessedEvent[] = useMemo(() => {
    const cloudColors: ("blue" | "purple" | "red")[] = [
      "blue",
      "purple",
      "red",
    ];
    const validEvents = events.filter(hasValidDate);

    return validEvents.slice(0, 3).map((event, index) => {
      const startDate = new Date(
        event.start.dateTime || event.start.date || "",
      );
      return {
        name: event.summary,
        location: event.location || "TBD",
        time: event.start.dateTime
          ? startDate.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })
          : "All Day",
        date: startDate
          .toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })
          .toUpperCase(),
        cloudColor: cloudColors[index % 3],
        startDate,
      };
    });
  }, [events]);

  const cloudPaths: Record<"purple" | "blue" | "red", string> = {
    purple: "/calendar/purpleCloud.svg",
    blue: "/calendar/blueCloud.svg",
    red: "/calendar/redCloud.svg",
  };

  return (
    <div className="relative -mt-28 w-full overflow-visible bg-[#f9f5ef] px-3 py-10 md:py-20">
      <motion.div
        className="absolute top-64 left-0 z-10 -ml-20 md:block"
        initial={{ opacity: 0, rotate: -20 }}
        whileInView={{ opacity: 1, rotate: -2 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src={leftSquiggle}
          alt="Decorative squiggle"
          width={450}
          height={450}
        />
      </motion.div>
      <motion.div
        className="absolute top-48 -right-4 z-10 -mr-20 md:block"
        initial={{ opacity: 0, rotate: 20 }}
        whileInView={{ opacity: 1, rotate: -2 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src={rightSquggle}
          alt="Decorative squiggle"
          width={450}
          height={450}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-left md:mb-16"
      >
        <Title text="UPCOMING EVENTS" textSize="text-3xl md:text-[40px]" />
      </motion.div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {upcomingEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className={`relative mb-20 flex w-full cursor-pointer items-center justify-center ${
              index % 3 === 0
                ? "translate-x-16 -translate-y-10"
                : index % 3 === 1
                  ? "translate-x-80 -translate-y-40"
                  : index % 3 === 2
                    ? "-translate-x-44 translate-y-24"
                    : ""
            }`}
            style={{ minHeight: "280px", height: "auto" }}
          >
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 3 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src={cloudPaths[event.cloudColor]}
                width={700}
                height={450}
                className="max-w-none object-contain"
                alt="Event Cloud"
              />
            </motion.div>

            <div className="relative z-10 max-w-[450px] px-6 py-4 text-center">
              <h3 className="mt-9 line-clamp-2 text-lg font-bold text-[#442F2C] md:text-xl">
                {event.name}
              </h3>
              <div>
                <p className="text-center text-sm break-words text-[#442F2C] md:text-base">
                  {event.location}
                </p>
                <p className="text-sm text-[#442F2C] md:text-base">
                  {event.time}
                </p>
                <p className="mt-1 text-lg font-bold text-[#442F2C] md:text-xl">
                  {event.date}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {upcomingEvents.length === 0 && (
        <motion.div
          className="py-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl text-[#442F2C]">
            No upcoming events at the moment. Check back soon!
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default UpcomingEventsCalendar;
