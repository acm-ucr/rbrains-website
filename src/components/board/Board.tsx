import React from "react";
import MemberCard from "@/components/board/BoardCard";
import { mainBoard } from "@/data/boardInfo";
import type { BoardMember } from "@/data/boardInfo";

const BoardPage = () => {
  const firstSix = mainBoard.slice(0, 6);
  const lastTwo = mainBoard.slice(6, 8);

  return (
    <div className="w-full p-16 space-y-10">
      {/* First 6 cards in a 3-column grid */}
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-28 gap-y-10 max-w-6xl text-rbrains-dark-brown">
        {firstSix.map((member: BoardMember) => (
          <MemberCard key={member.name} {...member} />
        ))}
      </div>

      {/* Last 2 cards centered using a 2-column grid */}
      <div className="mx-auto grid grid-cols-2 gap-28 px-56 max-w-6xl justify-center items-center text-rbrains-dark-brown">
        {lastTwo.map((member: BoardMember) => (
          <MemberCard key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
};

export default BoardPage;
