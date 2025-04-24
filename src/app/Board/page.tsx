import React from "react";
import MemberCard from "@/app/components/MemberCard";

const BoardPage = () => {
  return (
    <div className="grid grid-cols-3 place-items-center gap-5 bg-amber-500">
      <MemberCard
        position="President"
        name="Rishitha Kona"
        pronouns="she/her/hers"
        info="3rd year Psychology and Business double major"
      />
      <MemberCard
        position="Secretary"
        name="Abby Lazar"
        pronouns="she/her/hers"
        info="3rd year Psychology major, TFDP Film minor"
      />
      <MemberCard
        position="Treasurer"
        name="Sagey Moorjani"
        pronouns="she/her/hers"
        info="2nd year Psychology major"
      />
      <MemberCard
        position="Public Relations Head"
        name="Shriya patel"
        pronouns="she/her/hers"
        info="3rd-year Psychology major"
      />
      <MemberCard
        position="Social Media Director"
        name="Catherine Sanchez"
        pronouns="she/her/hers"
        info="4th year Psychology major, Public Policy minor"
      />
    </div>
  );
};

export default BoardPage;
