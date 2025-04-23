import React from "react";
import Image from "next/image";
import Pic from "@/Public/Rishitha Kona.png";

const MemberCard = () => {
  return (
    <div className="h-1/5 w-1/5 rounded-3xl border-[2px] border-[#000000] p-5 text-center font-serif bg-amber-300">
      <div className="text-4xl">President</div>
      <div className="">
        <Image
          className="size-3/4 mx-auto"
          src={Pic}
          alt="Rishitha Kona"
        ></Image>
        <div className="">
          <div className="text-2xl"> Rishitha Kona </div>
          <div>(she/her/hers) </div>
          <div>3rd year Psychology and Business double major </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
