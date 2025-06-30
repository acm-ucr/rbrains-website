"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import WebMarker from "@/public/home/webpageMarker.svg";
import { useState } from "react";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const all_link = [
    { name: "Home", href: "/" },
    { name: "Board", href: "/board" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Resources", href: "/resources" },
    { name: "Opportunities", href: "/opportunities" },
  ];

  return (
    <>
      <div
        className={`font-besley bg-rbrains-background fixed top-0 left-0 z-50 hidden w-full items-center justify-between border-b-2 border-black px-10 py-4 md:flex`}
      >
        <Link className="text-lg font-semibold text-black" href="/">
          UCR R'Brains
        </Link>
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
          <div className="pb-2">
            <Link
              href="\somelinkforjoin"
              className="flex items-center justify-center rounded-2xl border-2 border-[#846FA8] px-7 py-2 font-semibold text-black"
            >
              Join
            </Link>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div
          className={`font-besley bg-rbrains-background fixed top-0 left-0 z-50 flex w-full flex-col border-b-2 border-black px-10 py-3`}
        >
          <div className="flex flex-row justify-between">
            <div className="text-lg font-semibold text-black">UCR R'Brains</div>
            <button
              className="text-2xl text-black md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>

          <div
            className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-96 scale-100 opacity-100" : "max-h-0 scale-95 opacity-0"} w-full items-center justify-between space-y-2 text-base font-semibold text-black`}
          >
            {all_link.map((link) => (
              <Link key={link.name} href={link.href}>
                <div className="flex cursor-pointer flex-col items-center justify-between">
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
      </div>
    </>
  );
};

export default Navbar;
