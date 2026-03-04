"use client";
import Image from "next/image";
import { motion } from "motion/react";
import gallery from "@/data/gallery8";

const Gallery = () => {
  return (
    <div className="grid w-full auto-rows-[100px] grid-cols-2 items-center justify-center gap-5 p-16 md:grid-cols-4">
      {gallery.map((photo, index) => (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          key={index}
          className={`relative h-full w-full overflow-hidden rounded-3xl border-5 border-[#72A0C7] ${index === 0 || index === 1 ? "col-span-2 row-span-2" : ""} ${index === 2 || index === 3 ? "col-span-1 row-span-2" : ""} ${index === 4 ? "col-span-2 row-span-2" : ""} ${index === 5 || index === 6 || index === 8 || index === 7 ? "row-span-2" : ""}`}
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
                  WebkitTextStroke: "2px #72a0c7",
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

export default Gallery;
