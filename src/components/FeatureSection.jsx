import { carCollections } from "@/lib/data";
import React from "react";
import FeaturedSingleCard from "./FeaturedSingleCard";
import Link from "next/link";

const FeatureSection = async () => {
  const allCars = await carCollections();
  //   console.log(allCars);

  return (
    <div className="  px-5 mx-auto  lg:container">
      <div className="text-center my-8 ">
        <h1 className="text-4xl font-semibold">Featured Categories</h1>
        <p>
          Discover powerful features that help you find, book, and manage your
          rental vehicle with confidence
        </p>
      </div>

      <div className=" flex flex-wrap gap-5 justify-center">
        {allCars.slice(0, 6).map((car) => {
          return (
            <FeaturedSingleCard key={car._id} car={car}></FeaturedSingleCard>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Link href="/explorecars">
          <button className="px-4 py-2 bg-neutral-600 text-white hover:text-neutral-700 my-3 hover:bg-[#d7b65d]">
            Explore all
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeatureSection;
