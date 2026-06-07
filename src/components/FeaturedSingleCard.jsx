import Image from "next/image";
import Link from "next/link";
import React from "react";

import { HiLocationMarker } from "react-icons/hi";

import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { TbCategory } from "react-icons/tb";

const FeaturedSingleCard = async ({ car }) => {
  return (
    <div className=" border-2 border-dotted border-gray-300 p-6 w-100">
      <Image
        className="w-fit h-70 rounded-sm"
        src={car.imageUrl}
        width={400}
        height={400}
        alt={car.name}
      ></Image>
      <div className=" space-y-3 text-center">
        <h1 className="text-4xl   font-semibold mt-3">{car.name}</h1>

        <div className="flex justify-around text-lg pt-4">
          <p className="w-28 h-28 border border-gray-300 flex flex-col items-center justify-center gap-2">
            <TbCategory className="text-[#d7b65d] text-2xl" />
            {car.carType}
          </p>
          <p className="w-28 h-28 border border-gray-300 flex flex-col items-center justify-center gap-2">
            <MdAirlineSeatReclineNormal className=" text-[#d7b65d] text-3xl" />
            {car.seatCapacity} Seats
          </p>
          <p className="w-28 h-28 border border-gray-300 flex flex-col items-center justify-center gap-2">
            <HiLocationMarker className="text-[#d7b65d]" />
            {car.pickupLocation}
          </p>
        </div>

        <p className="text-3xl    mb-5">
          $<span className="text-[#d7b65d] font-semibold ">{car.price}</span>
          /per day
        </p>
      </div>
      <div className="flex justify-center">
        <Link href={`/${car._id}`}>
          <button className="btn border-3 border-dotted border-[#d7b65d]">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedSingleCard;
