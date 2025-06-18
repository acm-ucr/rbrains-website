// page.tsx (Usage Example)
// This is how you would implement the calendar in your page

import "@/styles/styles.css";
import CalendarMain from "@/components/events/CalendarMain";

export default function CalendarPage() {
  return (
    <div className="mt-30 min-h-screen bg-[#f9f5ef] py-8">
      <div className="container mx-auto">
        <CalendarMain />
      </div>
    </div>
  );
}

// Alternative with custom wrapper
export function CalendarWithCustomWrapper() {
  return (
    <div className="from-background to-muted/20 min-h-screen bg-gradient-to-br">
      <div className="container mx-auto px-4 py-8">
        {/* Custom header */}
        <div className="mb-8 text-center">
          <h1 className="text-foreground mb-2 text-5xl font-bold">My Events</h1>
          <p className="text-muted-foreground">
            Stay organized with your calendar
          </p>
        </div>

        {/* Calendar component */}
        <CalendarMain />

        {/* Custom footer */}
        <div className="text-muted-foreground mt-8 text-center text-sm">
          Powered by Google Calendar
        </div>
      </div>
    </div>
  );
}
