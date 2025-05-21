"use client";

import { FaMailchimp } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLink } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-rbrains-background mt-10 flex w-full items-center justify-between gap-2 border-t-3 border-yellow-950 px-10 py-3">
      <span className="text-lg font-semibold text-black">UCR R'Brains</span>

      <div className="flex items-center gap-3">
        <Link
          href="https://www.instagram.com/rbrainsatucr/"
          target="_blank"
          aria-label="Instagram"
        >
          <AiFillInstagram className="text-5xl text-yellow-950 transition-transform hover:scale-110" />
        </Link>

        <Link
          href="https://highlanderlink.ucr.edu/organization/rbrains"
          target="_blank"
          aria-label="InterestForm"
        >
          <FaLink className="text-4xl text-yellow-950 transition-transform hover:scale-110" />
        </Link>

        <Link
          href="https://docs.google.com/forms/d/1R4oxeOC3CpATipMxl3J4olg6IimapSmRxj0kGZL_uZE/viewform?edit_requested=true"
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
