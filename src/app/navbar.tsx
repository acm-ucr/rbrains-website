"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

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

  const star = "/star.webp";

  return (
    <nav className="font-besley flex items-center justify-between border-b-2 border-black bg-amber-50 px-10 py-4">
      <div className="text-lg font-semibold text-black">UCR R'Brains</div>
      <ul className="flex items-center space-x-8 text-base font-semibold text-black">
        {all_link.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>
              <div className="flex flex-col-reverse items-center">
                <div className="h-[10px] w-[10px]">
                  {pathname === link.href && (
                    <Image src={star} alt="star" width={10} height={10} />
                  )}
                </div>
                {link.name}
              </div>
            </Link>
          </li>
        ))}
        <Link
          href="\somelinkforjoin"
          className="rounded-xl border-2 border-blue-300 px-4 py-1 font-semibold text-black"
        >
          Join
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
