import React from "react";
import Lab from "@/components/opportunities/Lab";
import Volunteer from "@/components/opportunities/Volunteering";
import Club from "@/components/opportunities/Club";

const Page = () => {
  return (
    <div className="w-full px-6 py-16 space-y-16">
      <Lab />
      <Volunteer />
      <Club />
    </div>
  );
};

export default Page;
