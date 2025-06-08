"use client";
import React from "react";
import MemberCard from "@/components/board/BoardCard";
import { mainBoard } from "@/data/boardInfo";
import type { BoardMember } from "@/data/boardInfo";

const BoardPage = () => {
  const firstSix = mainBoard.slice(0, 6);
  const lastTwo = mainBoard.slice(6, 8);

  return (
    <div className="w-full space-y-10 p-16">
      {/* First 6 cards in a 3-column grid */}
      <div className="text-rbrains-dark-brown mx-auto grid max-w-6xl grid-cols-1 gap-x-28 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
        {firstSix.map((member: BoardMember) => (
          <MemberCard key={member.name} {...member} />
        ))}
      </div>

      {/* Last 2 cards centered using a 2-column grid */}
      <div className="text-rbrains-dark-brown mx-auto grid max-w-6xl grid-cols-2 items-center justify-center gap-28 px-56">
        {lastTwo.map((member: BoardMember) => (
          <MemberCard key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
};

export default BoardPage;
