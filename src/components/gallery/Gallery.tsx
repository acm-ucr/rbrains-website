import React from "react";
import Image from "next/image";
import { gallery } from "../../data/gallery";

const Gallery = () => {
  return (
    <div className="grid w-full grid-cols-4 items-center justify-center gap-5 p-16">
      {gallery.map((photo, index) => (
        <div
          key={index}
          className={`flex items-center justify-center overflow-hidden rounded-3xl border-5 border-[#72A0C7] ${index === 0 ? "col-span-2 row-span-2" : ""} ${index === 5 || index === 8 || index === 7 ? "row-span-4" : ""} ${index === 6 || index === 9 ? "row-span-2" : ""} `}
        >
          <Image src={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
