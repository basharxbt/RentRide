import { carCollections } from "@/lib/data";
import React from "react";
import FeaturedSingleCard from "./FeaturedSingleCard";

const ExploreAllCars = async () => {
  const allCars = await carCollections();

  return (
    <div className="container mx-auto ">
      <div className="text-center my-8 ">
        <h1 className="text-4xl font-semibold my-3">
          Explore Our Premium Fleet
        </h1>
        <p>
          Choose from our carefully selected collection of reliable,
          comfortable, and affordable rental vehicles.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 ">
        {allCars.map((car) => {
          return (
            <FeaturedSingleCard key={car._id} car={car}></FeaturedSingleCard>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreAllCars;
