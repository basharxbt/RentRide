import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-6">
        <div className="max-w-2xl text-center">
          <h1 className="text-8xl md:text-9xl font-bold text-[#d7b65d]">404</h1>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-neutral-900">
            Page Not Found
          </h2>

          <p className="mt-4 text-neutral-600 text-lg">
            The road you're looking for doesn't exist. Let's get you back on
            track and find your next ride.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 rounded-lg bg-[#d7b65d] text-black font-medium hover:opacity-90 transition"
            >
              Back to Home
            </Link>

            <Link
              href="/available-cars"
              className="px-6 py-3 rounded-lg border border-neutral-300 text-neutral-800 font-medium hover:bg-neutral-100 transition"
            >
              Explore Cars
            </Link>
          </div>

          <div className="mt-12">
            <p className="text-sm text-neutral-400">
              RenRide • Premium Car Rental Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
