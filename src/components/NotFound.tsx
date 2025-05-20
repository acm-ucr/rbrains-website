import React from "react";
import Image from "next/image";
import BlueSquiggle from "@/public/notfound/Blue.webp";
import PurpleSquiggle from "@/public/notfound/Purple.webp";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col">
      <Image
        src={PurpleSquiggle}
        alt="Blue squiggle design"
        className="self-end"
      />

      <div className="z-10 text-center">
        <div className="text-9xl font-bold text-[#442F2C]">404</div>
        <div className="text-5xl text-[#535353]">Page Not Found :(</div>
      </div>

      <Image src={BlueSquiggle} alt="Purple squiggle design" />
    </div>
  );
};

export default NotFoundPage;
