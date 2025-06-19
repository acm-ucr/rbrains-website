import React from "react";
import Image from "next/image";
import image1 from "@/public/Opportunities/Head With Brain.webp";
import image2 from "@/public/Opportunities/Psychology.webp";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Club = () => {
  return (
    <div className="flex w-screen flex-col px-40 py-5">
      <h1 className="mb-6 text-left text-3xl font-bold">Club</h1>
      <div className="rounded-2xl border-[5px] border-[#B64D4C] bg-[#FFFFFF] p-8 text-center">
        R'Brains and Behavior will arrange various social events with UCR staff
        and alumni in order to allow members the opportunity to create networks
        within and outside of the university. This organization will stand as a
        support of each member as they find or expand their concentration within
        the field of psychology.
        <br />
        <br />
        <br />
        <div className="grid grid-cols-3 items-center justify-center">
          <div className="row-span-2 flex items-center justify-end">
            <Image
              src={image1}
              alt="Trust"
              width={128}
              height={128}
              className="rounded-lg object-cover"
            />
          </div>
          <div>learn more about R’BRAINS</div>
          <div className="justify-basline row-span-2 flex items-center">
            <Image
              src={image2}
              alt="Volunteering"
              width={128}
              height={128}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex items-center justify-center">
            <Link href="https://highlanderlink.ucr.edu/organization/rbrains">
              <Button
                size="lg"
                className="flex cursor-pointer rounded-4xl bg-[#B64D4C] text-2xl font-semibold text-white"
              >
                HighlanderLink
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Club;
