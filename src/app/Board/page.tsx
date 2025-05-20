import React from "react";
import Board from "@/components/board/Board";
import Title from "@/components/ReusableTitle";

const Page = () => {
  return (
    <div className="w-full">
      <div className="text-center mt-32">
        <Title text="Get To Know Us!" textSize="text-4xl" />
      </div>
      <Board />
    </div>


  );
};

export default Page;
