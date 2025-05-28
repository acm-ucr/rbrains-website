import React from "react";
import Image from "next/image";
// import { gallery } from "../../data/gallery2";

const localGallery = [
  {
    src: "/gallerysection2/health1.webp",
    label: "",
    alt: "",
  },
  { src: "/gallerysection2/health2.webp", label: "", alt: "" },
  {
    src: "/gallerysection2/health3.webp",
    label: "Mental Health Awareness",
    alt: "",
  },
  { src: "/gallerysection2/health4.webp", label: "", alt: "" },
  { src: "/gallerysection2/health5.webp", label: "", alt: "" },
  { src: "/gallerysection2/health6.webp", label: "", alt: "" },
  { src: "/gallerysection2/health7.webp", label: "", alt: "" },
  { src: "/gallerysection2/health8.webp", label: "", alt: "" },
];

const Gallery1 = () => {
  return (
    <div className="grid w-full auto-rows-[300px] grid-cols-4 items-center justify-center gap-5 p-16">
      {localGallery.map((photo, index) => (
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
          {photo.label && (
            <div className="absolute right-4 bottom-4 z-10 inline-block text-right text-[3.7vw] leading-[1.2] font-bold text-white">
              <p
                style={{
                  WebkitTextFillColor: "white",
                  WebkitTextStroke: "2px #BE9C6A",
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

export default Gallery1;
