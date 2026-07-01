import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center grid grid-cols-1 md:grid-cols-2 "
      style={{ backgroundImage: "url('/banner1.jpg')" }}
    >
      <div className="md:container lg:container px-8  mx-auto text-white flex justify-center gap-4 flex-col ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="md:text-7xl text-3xl font-bold ">
            Find the Perfect Car for Every Adventure
          </h1>
          <p className="text-md  mt-4">
            Rent quality vehicles at competitive prices and enjoy a smooth,
            hassle-free booking experience for every trip
          </p>
        </div>
        <Link href="/explorecars" className="w-max  ">
          <button className="text-black px-4 py-2  font-bold bg-[#d7b65d]">
            Explore Cars
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
