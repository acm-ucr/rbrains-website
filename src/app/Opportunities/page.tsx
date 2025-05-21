import React from "react";
import Lab from "@/components/opportunities/Lab";
import Volunteer from "@/components/opportunities/Volunteering";
import Club from "@/components/opportunities/Club";

const Page = () => {
  return (
    <div className="mt-30 flex h-screen w-screen flex-col items-center justify-center">
      <Lab />
      <Volunteer />
      <Club />
    </div>
  );
};

export default Page;
