import React from "react";
import Image from "next/image";
import { gallery } from "../../data/gallery3";

const Gallery2 = () => {
  return (
    <div className="grid w-full auto-rows-[300px] grid-cols-7 gap-5 p-16">
      {gallery.map((photo, index) => (
        <div
          key={index}
          className={`relative h-full w-full overflow-hidden rounded-3xl border-4 border-[#B64D4C] ${index === 0 ? "col-span-3 row-span-2" : ""} ${index === 3 ? "col-span-4" : ""} ${index === 4 ? "col-span-3" : ""} ${index === 1 || index === 2 || index === 5 || index === 6 ? "col-span-2" : ""}`}
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

export default Gallery2;
