// pages/OpportunitiesPage.tsx
import React from "react";
import Image from "next/image";
import Lab from "@/components/opportunities/Lab";
import Volunteer from "@/components/opportunities/Volunteering";
import Club from "@/components/opportunities/Club";
import squiggle1 from "@/public/notfound/Purple.webp";
import squiggle2 from "@/public/notfound/Blue.webp"; // Import if needed
import squiggle3 from "@/public/Opportunities/red and green heart squiggle.webp"; // Import if needed

const OpportunitiesPage = () => (
  <div className="w-full space-y-16 px-6 py-16">
    {/* wrap Lab in a relative container that allows overflow */}
    <div className="relative overflow-visible">
      {/* absolute squiggle at top-right, pulling out a bit */}
      <div className="absolute top-0 right-0 z-10 -mt-25 -mr-15">
        <Image
          src={squiggle1}
          alt="Decorative squiggle"
          width={squiggle1.width}
          height={squiggle1.height}
          className=""
        />
      </div>

      {/* Lab sits on top */}
      <div className="relative z-0">
        <Lab />
      </div>
    </div>
    <div className="relative overflow-visible">
      {/* absolute squiggle at top-right, pulling out a bit */}
      <div className="absolute top-0 left-0 z-10 -mt-22 -ml-15">
        <Image
          src={squiggle2}
          alt="Decorative squiggle"
          width={squiggle2.width}
          height={squiggle2.height}
          className=""
        />
      </div>

      {/* Lab sits on top */}
      <div className="relative z-0">
        <Volunteer />
      </div>
    </div>
    <div className="relative overflow-visible">
      {/* absolute squiggle at top-right, pulling out a bit */}
      <div className="absolute right-0 z-0 -mt-24 -mr-6">
        <Image
          src={squiggle3}
          alt="Decorative squiggle"
          width={squiggle3.width}
          height={squiggle3.height}
          className=""
        />
      </div>

      {/* Lab sits on top */}
      <div className="relative z-10">
        <Club />
      </div>
    </div>
  </div>
);

export default OpportunitiesPage;
