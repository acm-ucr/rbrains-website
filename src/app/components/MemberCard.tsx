import React from "react";
import Image from "next/image";
import Pic from "@/public/Rishitha Kona.png";

const MemberCard = () => {
  return (
    <div className="h-1/5 w-1/6 rounded-3xl border-[2px] border-[#000000] p-5 text-center font-serif">
      <div className="text-4xl">President</div>
      <div className="-mt-12">
        <Image
          className="w-full scale-55"
          src={Pic}
          alt="Rishitha Kona"
        ></Image>
        <div className="-mt-12">
          <div className="text-2xl"> Rishitha Kona </div>
          <div>(she/her/hers) </div>
          <div>3rd year Psychology and Business double major </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
