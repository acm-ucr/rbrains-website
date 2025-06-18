// page.tsx (Usage Example)
// This is how you would implement the calendar in your page

import "@/styles/styles.css";
import CalendarMain from "@/components/events/CalendarMain";

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-[#f9f5ef] py-8 mt-30">
      <div className="container mx-auto">
        <CalendarMain />
      </div>
    </div>
  );
}

// Alternative with custom wrapper
export function CalendarWithCustomWrapper() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Custom header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-foreground mb-2">
            My Events
          </h1>
          <p className="text-muted-foreground">
            Stay organized with your calendar
          </p>
        </div>
        
        {/* Calendar component */}
        <CalendarMain />
        
        {/* Custom footer */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          Powered by Google Calendar
        </div>
      </div>
    </div>
  );
}