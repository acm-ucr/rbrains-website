import React from "react";
import MemberCard from "@/app/components/MemberCard";

const BoardPage = () => {
  return (
    <div className="grid gap-5">
      <div className="grid grid-cols-3 place-items-center gap-5">
        <MemberCard
          position="President"
          imageSrc="/Board/Rishitha_Kona.webp"
          name="Rishitha Kona"
          pronouns="she/her/hers"
          info="3rd year Psychology and Business double major"
        />
        <MemberCard
          position="Secretary"
          imageSrc="/Board/Abby_Lazar.webp"
          name="Abby Lazar"
          pronouns="she/her/hers"
          info="3rd year Psychology major, TFDP Film minor"
        />
        <MemberCard
          position="Treasurer"
          imageSrc="/Board/Sagey_Moorjani.webp"
          name="Sagey Moorjani"
          pronouns="she/her/hers"
          info="2nd year Psychology major"
        />
        <MemberCard
          position="Public Relations Head"
          imageSrc="/Board/Shriya_Patel.webp"
          name="Shriya patel"
          pronouns="she/her/hers"
          info="3rd-year Psychology major"
        />
        <MemberCard
          position="Social Media Director"
          imageSrc="/Board/Catherine_Sanchez.webp"
          name="Catherine Sanchez"
          pronouns="she/her/hers"
          info="4th year Psychology major, Public Policy minor"
        />
        <MemberCard
          position="Social Media Committee"
          imageSrc="/Board/Alexa_Zelaya.webp"
          name="Alexa Zelaya"
          pronouns="she/her/hers"
          info="3rd year Psychology major, Education minor"
        />
      </div>
      <div className="grid grid-cols-3 place-items-end">
        <MemberCard
          position="Coordination Lead"
          imageSrc="/Board/Angie_Santander.webp"
          name="Angie Santander"
          pronouns="she/her/hers"
          info="2nd year Psychology major"
        />
        <MemberCard
          position="Representative"
          imageSrc="/Board/Alexander_Tang.webp"
          name="Alexander Tang"
          pronouns="he/him/his"
          info="1st year Psychology major"
        />
      </div>
    </div>
  );
};

export default BoardPage;
