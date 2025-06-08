"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";

interface MemberCardProps {
  position: string;
  imageSrc: StaticImageData | string;
  name: string;
  pronouns: string;
  info: string;
}

const MemberCard = ({
  position,
  imageSrc,
  name,
  pronouns,
  info,
}: MemberCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="font-rbrains flex min-h-[22rem] w-full flex-col items-center space-y-3 rounded-4xl border-5 border-black bg-white p-6 text-center"
    >
      <p className="text-4xl font-semibold">{position}</p>
      <div className="relative mx-auto aspect-square w-1/2 max-w-xs">
        <Image
          src={imageSrc}
          alt={`${name}'s photo`}
          fill
          className="object-cover"
        />
      </div>

      <p className="text-3xl font-semibold">{name}</p>
      <p className="text-xl">({pronouns})</p>
      <p className="text-xl">{info}</p>
    </motion.div>
  );
};

export default MemberCard;
