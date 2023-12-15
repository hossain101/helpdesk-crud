import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-500 bg-opacity-75 px-8 py-3">
      <Link href="/">
        <span className="text-2xl font-bold cursor-pointer">
          Hossain Service Now
        </span>
      </Link>
      <Link href="/addTicket">
        <span className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700 transition-colors cursor-pointer">
          Add Ticket
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
