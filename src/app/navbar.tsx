"use client";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="font-besley flex items-center justify-between border-b-2 border-black bg-amber-50 px-10 py-4">
      <div className="text-lg font-semibold text-black">UCR R'Brains</div>
      <ul className="flex items-center space-x-8 text-base font-semibold text-black">
        <li>
          <a href="#" className="hover:text-green-500">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-500">
            Board
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-500">
            Events
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-500">
            Gallery
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-500">
            Resources
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-500">
            Opportunities
          </a>
        </li>
        <a
          href="#"
          className="rounded-xl border-2 border-blue-300 px-4 py-1 font-semibold text-black hover:bg-amber-300"
        >
          {" "}
          Join{" "}
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
