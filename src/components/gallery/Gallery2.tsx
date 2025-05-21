import React from "react";
import Image from "next/image";
import { gallery } from "../../data/gallery2";

const Gallery1 = () => {
  return (
    <div className="grid w-full auto-rows-[300px] grid-cols-4 items-center justify-center gap-5 p-16">
      {gallery.map((photo, index) => (
        <div
          key={index}
          className={`relative h-full w-full overflow-hidden rounded-3xl border-5 border-[#FFDCA5] ${index === 2 ? "col-span-2 row-span-2" : ""} ${index === 5 ? "col-span-2 row-span-2" : ""} ${index === 6 || index === 7 ? "row-span-2" : ""} `}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery1;
