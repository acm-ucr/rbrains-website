// types/calendar.ts
// Central type definitions for the calendar system

// types/calendar.ts
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

export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isWeekend: boolean;
  events: EventProps[];
}

export interface CalendarSettings {
  firstDayOfWeek: 0 | 1; // 0 = Sunday, 1 = Monday
  maxEventsPerDay: number;
  showWeekNumbers: boolean;
  showOtherMonthDays: boolean;
  timeFormat: "12h" | "24h";
}

export interface CalendarTheme {
  // ShadCN uses CSS variables, so these are optional overrides
  primaryColor?: string;
  secondaryColor?: string;
  backgroundColor?: string;
  textColor?: string;
  weekendColor?: string;
  todayColor?: string;
  eventColors: {
    default: string;
    work: string;
    personal: string;
    holiday: string;
    meeting: string;
  };
}

// ShadCN Badge variant types for events
export type EventBadgeVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | "work"
  | "personal"
  | "meeting"
  | "holiday";

// ShadCN Button variant types for navigation
export type NavigationButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

// ============================================
// UTILITY FUNCTIONS
// ============================================

export const calendarUtils = {
  // Check if two dates are the same day
  isSameDay: (date1: Date, date2: Date): boolean => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  },

  // Get the first day of the month
  getFirstDayOfMonth: (date: Date): Date => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  },

  // Get the last day of the month
  getLastDayOfMonth: (date: Date): Date => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  },

  // Get all days for calendar grid (including previous/next month days)
  getCalendarDays: (date: Date, firstDayOfWeek: 0 | 1 = 0): Date[] => {
    const firstDay = calendarUtils.getFirstDayOfMonth(date);
    const startDate = new Date(firstDay);

    // Adjust for first day of week preference
    const dayOffset = (firstDay.getDay() - firstDayOfWeek + 7) % 7;
    startDate.setDate(startDate.getDate() - dayOffset);

    const days: Date[] = [];
    const currentDay = new Date(startDate);

    // Generate 42 days (6 weeks)
    for (let i = 0; i < 42; i++) {
      days.push(new Date(currentDay));
      currentDay.setDate(currentDay.getDate() + 1);
    }

    return days;
  },

  // Filter events for a specific day
  getEventsForDay: (date: Date, events: EventProps[]): EventProps[] => {
    return events.filter((event) => {
      const eventStart = event.start.dateTime
        ? new Date(event.start.dateTime)
        : event.start.date
          ? new Date(event.start.date)
          : null;

      const eventEnd = event.end.dateTime
        ? new Date(event.end.dateTime)
        : event.end.date
          ? new Date(event.end.date)
          : null;

      if (!eventStart || !eventEnd) return false;

      // Set hours for proper day comparison
      eventStart.setHours(0, 0, 0, 0);
      eventEnd.setHours(23, 59, 59, 999);

      const checkDate = new Date(date);
      checkDate.setHours(0, 0, 0, 0);

      return checkDate >= eventStart && checkDate <= eventEnd;
    });
  },

  // Format date for display
  formatDate: (date: Date, options?: Intl.DateTimeFormatOptions): string => {
    const defaultOptions: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options || defaultOptions);
  },

  // Format time for display
  formatTime: (date: Date, format: "12h" | "24h" = "12h"): string => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: format === "12h",
    });
  },

  // Get month name
  getMonthName: (monthIndex: number): string => {
    const months = [
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
    return months[monthIndex];
  },

  // Get day of week names
  getDayNames: (startWithMonday = false): string[] => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return startWithMonday ? [...days.slice(1), days[0]] : days;
  },
};

// ============================================
// DEFAULT CONFIGURATIONS
// ============================================

export const defaultCalendarSettings: CalendarSettings = {
  firstDayOfWeek: 0,
  maxEventsPerDay: 3,
  showWeekNumbers: false,
  showOtherMonthDays: true,
  timeFormat: "12h",
};

export const defaultCalendarTheme: CalendarTheme = {
  // ShadCN themes use CSS variables, so these are fallback values
  primaryColor: "hsl(var(--primary))",
  secondaryColor: "hsl(var(--secondary))",
  backgroundColor: "hsl(var(--background))",
  textColor: "hsl(var(--foreground))",
  weekendColor: "hsl(var(--destructive))",
  todayColor: "hsl(var(--primary))",
  eventColors: {
    default: "hsl(var(--primary))",
    work: "#3b82f6", // blue-500
    personal: "#10b981", // emerald-500
    holiday: "#ef4444", // red-500
    meeting: "#8b5cf6", // purple-500
  },
};
