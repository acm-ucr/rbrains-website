import React from "react";
import Image from "next/image";
interface MemberCardProps {
  position: string;
  imageSrc: string;
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
    <div className="h-full w-3/5 rounded-3xl border-[3px] border-black p-5 text-center font-serif">
      <div className="text-4xl">{position}</div>
      <div className="">
        <Image
          className="mx-auto size-3/4"
          src={imageSrc}
          alt="picture of member"
          width={200}
          height={200}
        ></Image>
        <div className="text-2xl"> {name} </div>
        <div> ({pronouns}) </div>
        <div> {info} </div>
      </div>
    </div>
  );
};

export default MemberCard;
