import React from "react";
import Image from "next/image";
import image1 from "@/public/Opportunities/Lab Coat.webp";
import image2 from "@/public/Opportunities/Brainstorm Skill.webp";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Lab = () => {
  return (
    <div className="flex w-screen flex-col px-40 py-5">
      <h1 className="self-start p-8 text-3xl font-bold">LAB</h1>
      <div className="text-md font-seoul h-full w-full rounded-2xl border-5 border-[#D6B685] bg-[#FFFFFF] p-8 text-center">
        Students who are working in research labs can earn up to 4 units per
        quarter. Registering for unit credit means that the lab work will appear
        on your transcript and thus gives you a better way of tracking and
        reporting this volunteer effort.
        <br />
        <br />
        <br />
        <div className="grid grid-cols-[1fr_2fr_2fr_1fr] items-center justify-center gap-4">
          <div className="row-span-2 flex items-center justify-center">
            <Image
              src={image1}
              alt="Lab Coat"
              width={128}
              height={128}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="col-span-2 mt-7 flex justify-center font-serif">
            See available opportunities
          </div>
          <div className="row-span-2 flex items-center justify-center">
            <Image
              src={image2}
              alt="brainstorm"
              width={128}
              height={128}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="items-basline flex px-4">
            <Link href="https://psychology.ucr.edu/research-labs">
              <Button
                size="lg"
                className="flex cursor-pointer rounded-4xl bg-[#BE9C6A] text-2xl font-semibold text-white"
              >
                Research Labs
              </Button>
            </Link>
          </div>
          <div className="flex justify-end px-4">
            <Link href="https://braingamecenter.ucr.edu/#">
              <Button
                size="lg"
                className="font-rbrains flex cursor-pointer rounded-4xl bg-[#BE9C6A] text-2xl font-semibold text-white"
              >
                B.G Center
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lab;
