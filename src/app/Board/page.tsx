import React from "react";
import Board from "@/components/board/Board";
import Title from "@/components/ReusableTitle";
import HomeLanding from "@/components/about/HomeLanding";

const Page = () => {
  return (
    <div className="w-full">
      <HomeLanding />
      <div className="mt-3 text-center">
        <Title text="Get To Know Us!" textSize="text-4xl" />
      </div>
      <Board />
    </div>
  );
};

export default Page;
