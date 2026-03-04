"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
// import { gallery } from "../../data/gallery3";

const localGallery = [
  {
    src: "/gallerysection6/soluna1.jpg",
    label: "Soluna Mental Health & Study Tips",
    alt: "",
  },
  { src: "/gallerysection6/soluna2.jpg", label: "", alt: "" },
  { src: "/gallerysection6/soluna3.jpg", label: "", alt: "" },
  { src: "/gallerysection6/soluna4.jpg", label: "", alt: "" },
  { src: "/gallerysection6/soluna7.webp", label: "", alt: "" },
  { src: "/gallerysection6/soluna5.jpg", label: "", alt: "" },
  { src: "/gallerysection6/soluna8.jpg", label: "", alt: "" },
  
];

const Gallery2 = () => {
  return (
    <div className="grid w-full auto-rows-[300px] grid-cols-2 gap-5 p-16 md:grid-cols-7">
      {localGallery.map((photo, index) => (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          key={index}
          className={`relative h-full w-full overflow-hidden rounded-3xl border-4 border-[#B64D4C] 
            ${index === 0 ? "col-span-2 row-span-1 md:col-span-3 md:row-span-2" : ""} 
            ${index === 3 ? "col-span-2 md:col-span-2" : ""} 
            ${index === 4 ? "col-span-1 md:col-span-2 row-span-2" : ""} 
            ${index === 1 || index === 2 || index === 5 ? "col-span-1 md:col-span-2" : ""}
            ${index === 6 ? "md:col-span-3" : ""}`}
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
        </motion.div>
      ))}
    </div>
  );
};

export default Gallery2;
