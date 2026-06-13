import { BookingModal } from "@/components/BookingModal";
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
          src={car.imageUrl || car.formData.imageUrl}
          width={600}
          height={600}
          alt={car.name || car.formData.name}
        ></Image>
        <div>
          <div className=" space-y-3 ">
            <h1 className="text-4xl   font-semibold mt-3">
              {car.name || car.formData.name}
            </h1>
            <p className="w-max px-3 py-2 border-2 border-dotted border-gray-300 flex items-center justify-center gap-2">
              {car.status || car.formData.status}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 me-2 inline-block text-[#d7b65d]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </p>
            <p className="text-md text-neutral-500 max-w-120">
              {car.Description || car.formData.Description}
            </p>

            <div className="flex gap-5 text-md pt-4">
              <p className="min-w-15 p-1 h-15 border border-gray-300 flex flex-col items-center justify-center gap-2">
                <TbCategory className="text-[#d7b65d] text-md" />
                {car.carType || car.formData.carType}
              </p>
              <p className="min-w-15 p-1 h-15 border border-gray-300 flex flex-col items-center justify-center gap-2">
                <MdAirlineSeatReclineNormal className=" text-[#d7b65d] text-3xl" />
                {car.seatCapacity || car.formData.seatCapacity} Seats
              </p>
              <p className="min-w-15 p-1 h-15 border border-gray-300 flex flex-col items-center justify-center gap-2">
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

          <BookingModal car={car}></BookingModal>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
