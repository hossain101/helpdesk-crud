import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white bg-opacity-75 px-8 py-3">
      <Link href="/">
        <div className="flex items-center text-2xl font-bold cursor-pointer">
          <Image src="/assets/logo.png" alt="Logo" width={40} height={40} />
          <span className="ml-2">Service Now</span>
        </div>
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
