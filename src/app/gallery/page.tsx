"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

import Gallery1 from "@/components/gallery/Gallery1";
import Gallery2 from "@/components/gallery/Gallery2";
import Gallery3 from "@/components/gallery/Gallery3";
import Gallery4 from "@/components/gallery/Gallery4";

const Page = () => {
  const [isGallery2Visible, setIsGallery2Visible] = useState(false);
  return (
    <div>
      <title>UCR R'Brains - Gallery</title>
      <meta name="description" content="UCR R'Brains" />
      <Gallery1 />
      <Gallery2 />
      {!isGallery2Visible && (
        <div className="flex justify-center">
          <button
            className="cursor-pointer"
            onClick={() => setIsGallery2Visible(true)}
          >
            <Image
              src="./home/scroll.webp"
              alt="Scroll"
              width={90}
              height={90}
              className="animate-bounce"
            />
          </button>
        </div>
      )}
      {isGallery2Visible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          id="gallery2"
        >
          <Gallery3 />
          <Gallery4 />
        </motion.div>
      )}
    </div>
  );
};

export default Page;
