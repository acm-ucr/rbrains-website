"use client";

import { FaMailchimp } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 flex w-full items-center justify-between gap-2 border-t-3 border-yellow-950 bg-neutral-100 py-3 pr-4">
      <span className="font-besley pl-4 text-2xl text-yellow-950">
        UCR R'Brains
      </span>

      <div className="flex items-center gap-2">
        <Link
          href="https://www.instagram.com/rbrainsatucr/"
          target="_blank"
          aria-label="Instagram"
        >
          <AiFillInstagram className="text-5xl text-yellow-950 transition-transform hover:scale-110" />
        </Link>

        <Link
          href="https://mailchimp.com"
          target="_blank"
          aria-label="Mailchimp"
        >
          <FaMailchimp className="text-5xl text-yellow-950 transition-transform hover:scale-110" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
