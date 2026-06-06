import { carDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { HiLocationMarker } from "react-icons/hi";

import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { TbCategory } from "react-icons/tb";
const DetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const car = await carDetailsById(id);
  console.log(car);
  return (
    <div className="container mx-auto">
      <div className="flex justify-around ">
        <Image
          className="w-fit rounded-sm"
          src={car.imageUrl}
          width={600}
          height={600}
          alt={car.name}
        ></Image>
        <div>
          <div className=" space-y-3 ">
            <h1 className="text-4xl   font-semibold mt-3">{car.name}</h1>
            <p className="text-md text-neutral-500 max-w-120">
              {car.Description}
            </p>

            <div className="flex gap-5 text-md pt-4">
              <p className="w-15 h-15 border border-gray-300 flex flex-col items-center justify-center gap-2">
                <TbCategory className="text-[#d7b65d] text-md" />
                {car.carType}
              </p>
              <p className="w-15 h-15 border border-gray-300 flex flex-col items-center justify-center gap-2">
                <MdAirlineSeatReclineNormal className=" text-[#d7b65d] text-3xl" />
                {car.seatCapacity} Seats
              </p>
              <p className="w-15 h-15 border border-gray-300 flex flex-col items-center justify-center gap-2">
                <HiLocationMarker className="text-[#d7b65d]" />
                {car.pickupLocation}
              </p>
            </div>
            <p>{car.status}</p>

            <p className="text-3xl    mb-5">
              $
              <span className="text-[#d7b65d] font-semibold ">{car.price}</span>
              /per day
            </p>
          </div>
          <div className="flex justify-center">
            <Link href={`/${car._id}`}>
              <button className="btn border-3 border-dotted border-[#d7b65d]">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
