import React from "react";

const MemberCard = () => {
  return (
    <div className="h-[367px] w-[298px] rounded-[25px] border-[2px] border-[#000000] p-5 text-center font-serif">
      <p>
        <b>President</b>
      </p>
      <img
        /*className="h-[159px] w-[159px]" */ src="/images/Rishitha Kona.jpg"
        alt="Rishitha Kona"
      ></img>
      <p>
        <b>Rishitha Kona</b>
      </p>
      <p className="font-Times">(she/her/hers)</p>
      <p>3rd year Psychology and Business double major</p>
    </div>
  );
};

export default MemberCard;
