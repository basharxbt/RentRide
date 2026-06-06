import { carCollections } from "@/lib/data";
import React from "react";

const ExploreCars = async () => {
  const allCars = await carCollections();
  console.log(allCars, "carss");
  return (
    <div className="min-h-screen">
      {/* {allCars.map((car, index) => (
        <div key={index}>
          {" "}
          <h1>hey</h1>
        </div>
      ))} */}
    </div>
  );
};

export default ExploreCars;
