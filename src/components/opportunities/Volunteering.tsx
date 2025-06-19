import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import image1 from "@/public/Opportunities/Trust.webp";
import image2 from "@/public/Opportunities/Volunteering.webp";

const Volunteer = () => {
  return (
    <div className="flex w-screen flex-col px-40 py-5">
      <h1 className="self-end p-8 text-3xl font-bold">Volunteer</h1>
      <div className="h-full w-full rounded-2xl border-5 border-[#688B96] bg-[#FFFFFF] p-8 text-center">
        The key to your dream job does not just depend on advancing your
        academic knowledge and interning opportunities, but in gaining memorable
        experiences that give you a competitive advantage.
        <br />
        <br />
        <br />
        <div className="grid grid-cols-[1fr_1.25fr_1fr] items-center justify-center">
          <div className="row-span-2 flex items-center justify-end">
            <Image
              src={image1}
              alt="Trust"
              width={128}
              height={128}
              className="rounded-lg object-cover"
            />
          </div>
          learn more about community service in Riverside & more
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
            <Link href="https://careers.ucr.edu/students/student-jobs/community-services">
              <Button
                size="lg"
                className="flex cursor-pointer rounded-4xl bg-[#688B96] text-2xl font-semibold text-white"
              >
                Volunteering
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
