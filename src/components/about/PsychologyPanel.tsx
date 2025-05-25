import Image from "next/image";
import PsychologyPanel from "@/public/home/psychology-panels.webp";

const Component = () => {
  return (
    <div>
      <Image
        src={PsychologyPanel}
        alt="Psychology-Panels Logo"
        className="object-contain"
        width={300}
        height={300}
      />
    </div>
  );
};
export default Component;
