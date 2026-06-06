import { carCollections } from "@/lib/data";
import React from "react";

const ExploreCars = async () => {
  const allCars = await carCollections();
  console.log(allCars);
  return <div className="min-h-screen"></div>;
};

export default ExploreCars;
