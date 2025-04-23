import Image from "next/image";

import React from "react";
import { Fullscreen } from "lucide-react";

const HomeLanding = () => {
  return (
    <div className="h-full w-xl justify-evenly">
      <Image
        className="w-full"
        src="/Home/title_page.png"
        alt="logo"
        width={200}
        height={300}
      ></Image>
    </div>
  );
};

export default HomeLanding;
