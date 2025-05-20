"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import WebMarker from "@/public/home/webpageMarker.svg";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const all_link = [
    { name: "Home", href: "/" },
    { name: "Board", href: "/board" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Resources", href: "/resources" },
    { name: "Opportunities", href: "/opportunities" },
  ];

  return (
    <div className="font-besley fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b-2 border-black bg-rbrains-background px-10 py-4">
      <div className="text-lg font-semibold text-black">UCR R'Brains</div>
      <div className="flex items-center space-x-8 text-base font-semibold text-black">
        {all_link.map((link) => (
          <Link key={link.name} href={link.href}>
            <div className="flex cursor-pointer flex-col items-center">
              <span>{link.name}</span>
              <Image
                src={WebMarker}
                alt="WebMarker"
                width={10}
                height={10}
                className={`transition-opacity duration-200 ${
                  pathname === link.href ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </Link>
        ))}
        <Link
          href="\somelinkforjoin"
          className="rounded-xl border-2 border-[#846FA8] px-4 py-1 font-semibold text-black"
        >
          Join
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
