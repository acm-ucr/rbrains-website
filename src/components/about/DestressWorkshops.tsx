import Image from "next/image";
import DestressWorkshops from "@/public/home/StarLogo.webp";

const Component = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="hidden md:block">
        <Image
          src={DestressWorkshops}
          alt="Destress-Workshops Logo"
          className="object-contain"
          width={250}
          height={400}
        />
      </div>

      <div className="block md:hidden">
        <Image
          src={DestressWorkshops}
          alt="Destress-Workshops Logo on Mobile"
          className="object-contain"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};
export default Component;
