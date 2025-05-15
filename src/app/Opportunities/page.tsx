import React from "react";
import Lab from "@/app/components/Lab";
import Volunteer from "@/app/components/Volunteering";
import Club from "@/app/components/Club";

const Opportunities = () => {
  return (
    <div className="mt-30 flex h-screen w-screen flex-col items-center justify-center">
      <Lab />
      <Volunteer />
      <Club />
    </div>
  );
};

export default Opportunities;
