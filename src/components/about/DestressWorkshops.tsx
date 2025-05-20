import Image from "next/image";
import DestressWorkshops from "@/public/home/StarLogo.webp"

const Component = () => {
  return (
    <div>
      <Image
        src={DestressWorkshops}
        alt="Destress-Workshops Logo"
        className="object-contain"
        width={300}
        height={300}
      />
    </div>
  );
};
export default Component;
