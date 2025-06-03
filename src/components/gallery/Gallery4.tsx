import React from "react";
import Image from "next/image";
// import { gallery } from "../../data/gallery4";

const localGallery = [
  { src: "/gallerysection4/horror1.webp", label: "", alt: "" },
  { src: "/gallerysection4/horror2.webp", label: "Psyc’d for Horror", alt: "" },
  { src: "/gallerysection4/horror3.webp", label: "", alt: "" },
  { src: "/gallerysection4/horror4.webp", label: "", alt: "" },
  { src: "/gallerysection4/horror5.webp", label: "", alt: "" },
  { src: "/gallerysection4/horror6.webp", label: "", alt: "" },
];

const Gallery3 = () => {
  return (
    <div className="grid w-full auto-rows-[200px] grid-cols-9 gap-5 p-16">
      {localGallery.map((photo, index) => (
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
          {photo.label && (
            <div className="absolute right-4 bottom-4 z-10 inline-block text-right text-[3.7vw] leading-[1.2] font-bold text-white">
              <p
                style={{
                  WebkitTextFillColor: "white",
                  WebkitTextStroke: "2px #9C66A5",
                }}
                className=""
              >
                {photo.label}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Gallery3;
