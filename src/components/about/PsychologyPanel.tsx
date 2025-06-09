import Image from "next/image";
import PsychologyPanel from "@/public/home/psychology-panels.webp";
import PsychologyPanelMobile from "@/public/home/psychology-panelMobile.webp";

const Component = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="hidden md:block">
        <Image
          src={PsychologyPanel}
          alt="Psychology-Panels Logo"
          className="h-[300px] w-[600px] object-contain"
          priority
        />
      </div>

      <div className="block md:hidden">
        <Image
          src={PsychologyPanelMobile}
          alt="Psychology-Panels Logo on Mobile"
          className="object-contain"
          width={350}
          height={300}
        />
      </div>
    </div>
  );
};
export default Component;
