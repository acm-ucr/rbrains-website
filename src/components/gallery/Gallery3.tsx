import React from "react";
import Image from "next/image";
// import { gallery } from "../../data/gallery3";

const localGallery = [
  {
    src: "/gallerysection3/love1.webp",
    label: "Psych Behind Love <3",
    alt: "",
  },
  { src: "/gallerysection3/love2.webp", label: "", alt: "" },
  { src: "/gallerysection3/love3.webp", label: "", alt: "" },
  { src: "/gallerysection3/love4.webp", label: "", alt: "" },
  { src: "/gallerysection3/love5.webp", label: "", alt: "" },
  { src: "/gallerysection3/love6.webp", label: "", alt: "" },
  { src: "/gallerysection3/love7.webp", label: "", alt: "" },
];

const Gallery2 = () => {
  return (
    <div className="grid w-full auto-rows-[300px] grid-cols-7 gap-5 p-16">
      {localGallery.map((photo, index) => (
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
          {photo.label && (
            <div className="absolute right-4 bottom-4 z-10 inline-block text-right text-[3.7vw] leading-[1.2] font-bold text-white">
              <p
                style={{
                  WebkitTextFillColor: "white",
                  WebkitTextStroke: "2px #B64D4C",
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

export default Gallery2;
