"use client";
import MemberCard from "@/components/board/BoardCard";
import { mainBoard } from "@/data/boardInfo";
import type { BoardMember } from "@/data/boardInfo";

const BoardPage = () => {
  return (
    <div className="flex flex-wrap justify-center gap-x-28 gap-y-10">
      {mainBoard.map((member: BoardMember) => (
        <MemberCard key={member.name} {...member} />
      ))}
    </div>
  );
};

export default BoardPage;
