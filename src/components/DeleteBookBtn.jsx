"use client";
import { deleteBookingCar } from "@/lib/data";
import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { Flip, toast } from "react-toastify";

const DeleteBookBtn = ({ carId, token }) => {
  const bookingClickDelete = async () => {
    console.log(carId, "this is the car id from delete book btn");
    const deletedCar = await deleteBookingCar(carId, token);
    // console.log(deletedCar, "this is the deleted car from delete book btn");
    toast.success(" Booking deleted successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
    });
    window.location.reload();
  };

  return (
    <div>
      <button
        onClick={bookingClickDelete}
        className="px-4 py-2 bg-neutral-500 rounded-md text-white hover:cursor-pointer my-3 hover:bg-[#D7B65D] flex items-center gap-2"
      >
        <FaDeleteLeft />
        Cancel Booking
      </button>
    </div>
  );
};

export default DeleteBookBtn;
