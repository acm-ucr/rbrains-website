import React from "react";
import Image from "next/image";

const HomeLanding = () => {
  return (
    <div className="bg-[#F9F5EF]">
      <div className="flex w-full flex-row pb-10">
        <div className="relative top-6 flex-1">
          <Image
            className="h-full w-full object-contain"
            src="/homelanding/squiggle2.svg"
            alt="left squiggle"
            fill
          />
        </div>

        {/* main contents */}
        <div className="relative ml-6 flex flex-1 flex-col items-center justify-center">
          <div className="z-10 w-full">
            <Image
              className="h-auto w-full object-contain"
              src="/homelanding/curvetext.svg"
              alt="Welcome text"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="absolute top-[50%] z-10 flex w-full flex-none -translate-y-[30%] items-center justify-center">
            <div className="w-1/8 max-w-[4rem]">
              <Image
                className="h-auto w-full object-contain"
                src="/homelanding/TO.svg"
                alt="TO text"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </div>
          <div className="relative z-10 h-auto w-full">
            <div className="absolute right-0 bottom-0 left-0 -translate-y-[5%] transform">
              <Image
                className="h-auto w-full object-contain"
                src="/homelanding/rbrainslogo.svg"
                alt="rbrain logo"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </div>
        </div>
        {/* end of main content */}

        {/* right imgage */}
        <div className="relative top-6 flex-1">
          <Image
            className="h-full w-full object-contain"
            src="/homelanding/squiggle1.svg"
            alt="right squiggle"
            fill
          />
        </div>
      </div>

      <div className="mx-auto flex w-11/12 items-center">
        <div className="flex-grow border-b-2 border-[#282220]"></div>
        <div className="relative mx-9 h-4 w-4">
          <Image
            className="absolute top-0 left-0"
            src="/homelanding/heart3.svg"
            alt="left circle"
            width={9}
            height={9}
          />
          <Image
            className="absolute top-0 right-0"
            src="/homelanding/heart2.svg"
            alt="right circle"
            width={9}
            height={9}
          />
          <Image
            className="absolute bottom-0 left-1/2 -translate-x-1/2 transform"
            src="/homelanding/heart1.svg"
            alt="bottom heart shape"
            width={13}
            height={13}
          />
        </div>
        <div className="flex-grow border-b-2 border-[#282220]"></div>
      </div>
    </div>
  );
};

export default HomeLanding;
