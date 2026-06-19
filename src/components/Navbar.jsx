"use client";

import { authClient, useSession } from "@/lib/auth-client";
import { Skeleton } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Bounce, toast } from "react-toastify";

const Navbar = () => {
  const { data: season, error, isPending } = useSession();
  // console.log(season, error, "this is season message");

  const singOutHandler = async () => {
    await authClient.signOut();
    toast.success("You've been logged out. See you on your next ride! 🚗", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    window.location.reload();
  };
  return (
    <div>
      <div className=" md:container px-8 md:px-0 flex items-center justify-between">
        <div className="flex items-center cursor-pointer ">
          <Link className="flex items-center gap-2" href="/">
            <Image
              src="/rent2.jpg"
              alt="Logo Image"
              width={100}
              height={100}
              className="rounded-full"
            ></Image>
            <h1 className="text-4xl font-bold text-yellow-500">RentRide</h1>
          </Link>
        </div>

        <ul className="flex items-center gap-4 font-bold hidden lg:flex">
          <Link href="/">Home</Link>
          <Link href="/explorecars">Explore Cars</Link>
          <Link href="/addcars">Add Cars</Link>
          <Link href="/mybookings">My Bookings</Link>
        </ul>
        <div className="flex font-bold gap-4">
          {isPending ? (
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-3 w-36 rounded-lg" />
                <Skeleton className="h-3 w-24 rounded-lg" />
              </div>
            </div>
          ) : (
            <div>
              {!season ? (
                <div className="flex font-bold gap-4">
                  <Link href="/register">Register</Link>{" "}
                  <Link href="/login">Login</Link>
                </div>
              ) : (
                <div className="flex gap-2">
                  <div className="relative group">
                    <div className="flex items-center gap-3 cursor-pointer rounded-xl px-2 py-2 hover:bg-gray-100 transition">
                      {season?.user?.image && (
                        <Image
                          src={season.user.image}
                          width={45}
                          height={45}
                          alt={season.user.name}
                          className="rounded-full border-2 border-[#d7b65d]"
                        />
                      )}

                      <div className=" md:block">
                        <p className="font-medium">{season.user.name}</p>
                      </div>
                    </div>

                    <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="p-4 border-b">
                        <p className="font-semibold">{season.user.name}</p>
                        <p className="text-sm text-gray-500 truncate">
                          {season.user.email}
                        </p>
                      </div>

                      <div className="p-2">
                        <Link
                          href="/addcars"
                          className="block px-4 py-3 rounded-lg hover:bg-gray-100 transition"
                        >
                          Add Car
                        </Link>

                        <Link
                          href="/mybookings"
                          className="block px-4 py-3 rounded-lg hover:bg-gray-100 transition"
                        >
                          My Bookings
                        </Link>

                        <Link
                          href="/myaddedcars"
                          className="block px-4 py-3 rounded-lg hover:bg-gray-100 transition"
                        >
                          My Added Cars
                        </Link>

                        <div className="my-2 border-t"></div>

                        <button
                          onClick={singOutHandler}
                          className="w-full text-left px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 transition"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
