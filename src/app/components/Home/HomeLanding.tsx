import React from "react";
import Image from "next/image";

const HomeLanding = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-[#F9F5EF]">
        <div className="relative aspect-square flex-1">
          <Image
            className="object-contain"
            src="/homelanding/squiggle1.webp"
            alt="left squiggle"
            fill
          />
        </div>

        {/* main contents */}
        <div className="relative flex aspect-square flex-1 items-center justify-center">
          {/* content */}
          <div className="relative h-64 w-84">
            <Image
              className="object-contain"
              src="/homelanding/rbrain_logo.webp"
              alt="home"
              fill
            />

            <div className="absolute inset-0 flex items-center justify-center font-[Besley] font-semibold text-[#442F2C]">
              <p className="text-3xl">To</p>
            </div>
          </div>
        </div>
        {/* end of main content */}

        {/* right imgage */}
        <div className="relative aspect-square flex-1">
          <Image
            className="object-contain"
            src="/homelanding/squiggle2.webp"
            alt="right squiggle"
            fill
          />
        </div>
      </div>

      {/* bottom border */}
      <div className="flex justify-center">
        <div className="w-11/12 border-b-2 border-[#282220]" />
      </div>
    </>
  );
};

export default HomeLanding;
