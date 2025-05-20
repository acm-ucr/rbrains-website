import React from "react";
import Image, { StaticImageData } from "next/image";

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
    <div className="flex flex-col items-center text-center space-y-3 font-rbrains border-5 border-black rounded-4xl p-6 w-full min-h-[22rem] bg-white">
      <p className="text-4xl font-semibold">{position}</p>
      <div className="relative w-1/2 aspect-square max-w-xs mx-auto">
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
    </div>
  );
};

export default MemberCard;
