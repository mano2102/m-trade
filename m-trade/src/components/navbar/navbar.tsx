import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex w-80 h-screen bg-black justify-center">
      <ul className="w-full">
        <li className="  h-auto bg-white flex justify-right m-10 p-3 ">
          <Link href="/">Home</Link>
        </li>
        <li className="  h-auto bg-white flex justify-right m-10 p-3 active:bg-green-400 ">
          About us
        </li>
        <li className="  h-auto bg-white flex justify-right m-10 p-3  ">
          <Link legacyBehavior href="/upload">
            <a>Upload Data</a>
          </Link>
        </li>
        <li className="  h-auto bg-white flex justify-right m-10 p-3  ">
          Connect to Db
        </li>
        <li className="  h-auto bg-white flex justify-right m-10 p-3  ">
          Home
        </li>
        <li className="  h-auto bg-white flex justify-right  m-10 p-3 ">
          Home
        </li>
        <li className="  h-auto bg-white flex justify-right m-10 p-3 ">Home</li>
        <li className="  h-auto bg-white flex justify-right m-10 p-3 ">Home</li>
      </ul>
    </nav>
  );
};

export default Navbar;
