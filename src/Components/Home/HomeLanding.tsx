import Image from "next/image";
import React from "react";

const HomeLanding = () => {
  return (
    <div className="flex h-screen w-screen items-start bg-red-200">
      <Image
        className="flex justify-start"
        src="/Home/squiggle 1.png"
        alt="left squiggle"
        width={100}
        height={100}
      ></Image>
      <Image
        className="flex justify-center"
        src="/Home/image.png"
        alt="welcome to logo"
        width={100}
        height={100}
      ></Image>
      <Image
        className="flex justify-end"
        src="/Home/squiggle 2.png"
        alt="right squiggle"
        width={100}
        height={100}
      ></Image>
    </div>
  );
};

export default HomeLanding;
