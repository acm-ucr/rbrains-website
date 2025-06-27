import Image from "next/image";

interface EventCardProps {
  title: string;
  location: string;
  description?: string;
  startDate: {
    dateTime?: Date;
    date: string;
  };
  idx: number;
}

const cloudPaths = [
  "/calendar/purpleCloud.svg",
  "/calendar/blueCloud.svg",
  "/calendar/redCloud.svg",
];

const EventCard = ({
  title,
  location,
  description,
  startDate,
  idx,
}: EventCardProps) => {
  let eventStartDate: Date = new Date();
  let hasTime = false;

  if (startDate.dateTime) {
    eventStartDate = new Date(startDate.dateTime);
    hasTime = true;
  } else {
    eventStartDate = new Date(startDate.date);
  }

  const hour = eventStartDate.getHours();
  const formattedHour = hour % 12 || 12;
  const suffix = hour < 12 ? "AM" : "PM";

  return (
    <div className="mb-[13vw] flex justify-center md:mb-[18vh]">
      <div className="relative h-[22vw] w-[65vw] bg-white pt-[2vh] md:h-[18vw] md:w-[50vw] md:pt-[8vh]">
        {/* Event Title */}
        <p className="pl-[35%] text-lg leading-none font-bold text-[#442F2C] md:text-[3.25vw]">
          {title}
        </p>

        {/* Location */}
        <p className="text-md pt-1 pl-[36%] leading-none text-[#442F2C] md:text-xl">
          {location || "No location"}
        </p>

        {/* Description */}
        <p className="z-50 hidden pt-2 pl-[36%] text-xs leading-none text-[#442F2C] md:flex md:text-[1vw]">
          {description ?? "No description"}
        </p>

        {/* Cloud SVG background with date and time */}
        <div
          className={`absolute top-0 left-[-10%] h-[22vw] w-[22vw] rotate-45 md:h-[18vw] md:w-[18vw]`}
        >
          <Image
            src={cloudPaths[idx % cloudPaths.length]}
            alt="Cloud"
            width={200}
            height={200}
            className="absolute inset-0 -z-10 h-full w-full object-contain"
          />
          <p className="-rotate-45 pt-[25%] pr-[23%] text-[5vw] leading-none font-bold text-[#442F2C] md:pt-[19%] md:pr-[18%] md:text-[4.5vw] 2xl:pt-[22%]">
            {eventStartDate.toLocaleString("default", { month: "short" })}
            <br /> {eventStartDate.getDate()}
          </p>

          {hasTime && (
            <p className="-rotate-45 pt-[20%] pl-[30%] text-sm font-bold whitespace-nowrap text-[#442F2C] md:pl-[36%] md:text-[2.3vw]">
              {formattedHour} {suffix}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
