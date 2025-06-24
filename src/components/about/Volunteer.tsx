import Image from "next/image";
import Volunteer from "@/public/home/volunteer.webp";
import VolunteerMobile from "@/public/home/volunteerMobile.webp";

const Component = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="hidden md:block">
        <Image
          src={Volunteer}
          alt="Volunteer Logo"
          className="object-contain"
          width={270}
          height={350}
        />
      </div>

      <div className="block md:hidden">
        <Image
          src={VolunteerMobile}
          alt="Volunteer Logo on Mobile"
          className="object-contain"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
};
export default Component;
