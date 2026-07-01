import ExploreAllCars from "@/components/ExploreAllCars";
import { carCollections } from "@/lib/data";
import React from "react";

const ExploreCars = async () => {
  const allCars = await carCollections();
  console.log(allCars, "carss");
  return (
    <div className="min-h-screen ">
      <ExploreAllCars></ExploreAllCars>
    </div>
  );
};

export default ExploreCars;
