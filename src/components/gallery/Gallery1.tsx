"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
// import { gallery } from "../../data/gallery1";

const localGallery = [
  {
    src: "/gallerysection1/PsychBehindMusic1.webp",
    label: "Psych Behind Music",
    alt: "",
  },
  { src: "/gallerysection1/PsychBehindMusic2.webp", label: "", alt: "" },
  { src: "/gallerysection1/PsychBehindMusic3.webp", label: "", alt: "" },
  { src: "/gallerysection1/PsychBehindMusic4.webp", label: "", alt: "" },
  { src: "/gallerysection1/PsychBehindMusic5.webp", label: "", alt: "" },
  { src: "/gallerysection1/PsychBehindMusic6.webp", label: "", alt: "" },
  { src: "/gallerysection1/PsychBehindMusic7.webp", label: "", alt: "" },
  { src: "/gallerysection1/PsychBehindMusic8.webp", label: "", alt: "" },
  { src: "/gallerysection1/PsychBehindMusic9.webp", label: "", alt: "" },
  { src: "/gallerysection1/PsychBehindMusic10.webp", label: "", alt: "" },
];

const Gallery = () => {
  return (
    <div className="grid w-full grid-cols-4 items-center justify-center gap-5 p-16">
      {localGallery.map((photo, index) => (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          key={index}
          className={`flex items-center justify-center overflow-hidden rounded-3xl border-5 border-[#72A0C7] ${index === 0 ? "col-span-2 row-span-2" : ""} ${index === 5 || index === 8 || index === 7 ? "row-span-4" : ""} ${index === 6 || index === 9 ? "row-span-2" : ""} `}
        >
          <div className="relative h-full w-full">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={1536}
              height={2048}
              className="z-0"
            />
            {photo.label && (
              <div className="absolute right-4 bottom-4 z-10 inline-block text-right text-[3.7vw] leading-[1.2] font-bold text-white">
                <p
                  style={{
                    WebkitTextFillColor: "white",
                    WebkitTextStroke: "2px #72a0c7",
                  }}
                  className=""
                >
                  {photo.label}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Gallery;
