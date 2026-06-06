import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div
      className="h-screen bg-cover bg-center grid grid-cols-2 "
      style={{ backgroundImage: "url('/banner1.jpg')" }}
    >
      <div className="container mx-auto text-white flex justify-center gap-4 flex-col ">
        <h1 className="text-7xl font-bold ">
          Find the Perfect Car for Every Adventure
        </h1>
        <p className="text-2xl ">
          Rent quality vehicles at competitive prices and enjoy a smooth,
          hassle-free booking experience for every trip
        </p>
        <Link href="/explorecars" className="w-max  ">
          <button className="btn  font-bold bg-[#d7b65d]">Explore Cars</button>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Banner;
