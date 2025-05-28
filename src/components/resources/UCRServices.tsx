import React from "react";
import BoxComponent from "@/components/ReusableBox";
import { resources } from "@/data/resourcesInfo"; // adjust path as needed

const ResourceServices = () => {
  return (
    <div className="flex flex-col items-center justify-center p-20">
      <div className="flex w-full p-5 text-right text-5xl font-medium">
        UCR Services
      </div>
      <div className="flex w-5/6 flex-col space-y-6 rounded-3xl border-[5px] border-[#93B48F] bg-white text-center font-[Besley]">
        {resources.map((res, index) => (
          <BoxComponent
            key={index}
            padding="p-6"
            textSize="text-xl"
            borderColor="border-white"
          >
            <div className={`text-2xl font-semibold ${res.TitleColor} mb-2`}>
              {res.Title}
            </div>
            <div className="p-2 font-medium text-[#442F2C]">{res.Body}</div>
            <div className="p-5 text-xl font-medium text-[#442F2C]">
              {res.Post}
            </div>
          </BoxComponent>
        ))}
      </div>
    </div>
  );
};

export default ResourceServices;
