import React from "react";
import MemberCard from "@/components/board/MemberCard";
import { mainBoard } from "@/data/boardInfo";

const BoardPage = () => {
  return (
    <div className="grid grid-cols-3 place-items-center gap-5 p-10">
      {mainBoard.map((member, index) => (
        <MemberCard
          key={index}
          position={member.position}
          imageSrc={member.imageSrc}
          name={member.name}
          pronouns={member.pronouns}
          info={member.info}
        />
      ))}
    </div>
  );
};

export default BoardPage;
