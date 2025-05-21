import React from "react";
import Image from "next/image";
import { gallery } from "../../data/gallery4";

const Gallery3 = () => {
  return (
    <div className="grid w-full auto-rows-[200px] grid-cols-9 gap-5 p-16">
      {gallery.map((photo, index) => (
        <div
          key={index}
          className={`relative h-full w-full overflow-hidden rounded-3xl border-4 border-[#9C66A5] ${index === 0 ? "col-span-4 row-span-2" : ""} ${index === 1 ? "col-span-5 row-span-3" : ""} ${index === 2 || index === 3 ? "col-span-2" : ""} ${index === 4 ? "col-span-4 row-span-2" : ""} ${index === 5 ? "col-span-5 row-span-2" : ""}`}
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

export default Gallery3;
