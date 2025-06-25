"use client";
import React from "react";
import Board from "@/components/board/Board";
import Title from "@/components/ReusableTitle";
import HomeLanding from "@/components/about/HomeLanding";
import { motion } from "motion/react";

const Page = () => {
  return (
    <div className="w-full">
      <HomeLanding />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-3 text-center"
      >
        <Title text="Get To Know Us!" textSize="text-4xl" />
      </motion.div>
      <Board />
    </div>
  );
};

export default Page;
