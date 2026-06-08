import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" ">
      <div className=" mx-20 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/rent2.jpg"
            alt="Logo Image"
            width={100}
            height={100}
            className="rounded-full"
          ></Image>
          <h1 className="text-4xl font-bold text-yellow-500">RentRide</h1>
        </div>

        <ul className="flex items-center gap-4 font-bold">
          <Link href="/">Home</Link>
          <Link href="/explorecars">Explore Cars</Link>
          <Link href="/addcars">Add Cars</Link>
          <Link href="/mybookings">My Bookings</Link>
        </ul>
        <div className="flex font-bold gap-4">
          <Link href="/register">Register</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
