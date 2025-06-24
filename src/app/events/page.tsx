// src/app/events/page.tsx
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
