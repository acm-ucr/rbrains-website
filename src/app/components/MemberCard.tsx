import React from "react";
import Image from "next/image";
import Pic from "@/Public/Rishitha Kona.png";
interface MemberCardProps {
  position: string;
  name: string;
  pronouns: string;
  info: string;
}

const MemberCard = ({ position, name, pronouns, info }: MemberCardProps) => {
  return (
    <div className="h-full w-1/2 rounded-3xl border-[2px] border-black bg-amber-300 p-5 text-center font-serif">
      <div className="text-4xl">{position}</div>
      <div className="">
        <Image
          className="mx-auto size-3/4"
          src={Pic}
          alt="Rishitha Kona"
        ></Image>
        <div className="text-2xl"> {name} </div>
        <div> ({pronouns}) </div>
        <div> {info} </div>
      </div>
    </div>
  );
};

export default MemberCard;
