import Image from "next/image";
import Link from "next/link";
import React from "react";

import { HiLocationMarker } from "react-icons/hi";

import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { TbCategory } from "react-icons/tb";

const FeaturedSingleCard = async ({ car }) => {
  return (
    <div>
      <div className=" border-2 border-dotted border-gray-300 p-6 w-100">
        {car.imageUrl || car.formData.imageUrl ? (
          <Image
            className="w-fit h-70 rounded-sm"
            src={car.imageUrl || car.formData.imageUrl}
            width={400}
            height={400}
            alt={car.name || car.formData.name}
          ></Image>
        ) : (
          ""
        )}
        <div className=" space-y-3 text-center">
          <h1 className="text-4xl   font-semibold mt-3">
            {car.name || car?.formData?.name}
          </h1>

          <div className="flex justify-around text-lg pt-4">
            <p className="w-28 h-28 border border-gray-300 flex flex-col items-center justify-center gap-2">
              <TbCategory className="text-[#d7b65d] text-2xl" />
              {car.carType || car.formData.carType}
            </p>
            <p className="w-28 h-28 border border-gray-300 flex flex-col items-center justify-center gap-2">
              <MdAirlineSeatReclineNormal className=" text-[#d7b65d] text-3xl" />
              {car.seatCapacity || car.formData.seatCapacity} Seats
            </p>
            <p className="w-28 h-28 border border-gray-300 flex flex-col items-center justify-center gap-2">
              <HiLocationMarker className="text-[#d7b65d]" />
              {car.pickupLocation || car.formData.pickupLocation}
            </p>
          </div>

          <p className="text-3xl    mb-5">
            $
            <span className="text-[#d7b65d] font-semibold ">
              {car.price || car.formData.price}
            </span>
            /per day
          </p>
        </div>
        <div className="flex justify-center">
          <Link href={`/details/${car._id || car.formData._id}`}>
            <button className="px-2 py-2 border-3 border-dotted border-[#d7b65d]">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSingleCard;
