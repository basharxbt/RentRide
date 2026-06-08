"use client";

import { authClient, useSession } from "@/lib/auth-client";
import { Skeleton } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Bounce, toast } from "react-toastify";

const Navbar = () => {
  const { data: season, error, isPending } = useSession();
  console.log(season, error, "this is season message");

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
      <div className=" container flex items-center justify-between">
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
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="">
                      <div className=" rounded-md flex items-center gap-2 cursor-pointer ">
                        {season?.user?.image && (
                          <Image
                            src={season.user.image}
                            width={50}
                            height={50}
                            alt={season.user.name}
                            className="rounded-full"
                          ></Image>
                        )}
                        <div>{season.user.name}</div>
                      </div>
                    </div>
                    <ul
                      tabIndex="-1"
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                      <li>
                        <Link href="/addcars">Add Car</Link>
                      </li>
                      <li>
                        <Link href="/mybookings">My Bookings</Link>
                      </li>
                      <li>
                        <Link href="/myaddedcars">My Added Cars</Link>
                      </li>
                      <li>
                        <button onClick={singOutHandler}>Logout</button>
                      </li>
                    </ul>
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
