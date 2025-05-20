import Image from "next/image";
import Volunteer from "@/public/home/volunteer.webp"

const Component = () => {
  return (
    <div>
      <Image
        src={Volunteer}
        alt="Volunteer Logo"
        className="object-contain"
        width={300}
        height={300}
      />
    </div>
  );
};
export default Component;
