import MyAddCard from "@/components/MyAddCard";
import { useSession } from "@/lib/auth-client";
import { carCollections } from "@/lib/data";
import React from "react";

const MyAddedCars = async () => {
  // const {data:season } =useSession();
  const addedCars = await carCollections();

  //   addedCars.map((car) => if(car.formData === ));

  return (
    <div className="h-screen container mx-auto mt-1">
      {addedCars.map((car) => (
        <MyAddCard key={car._id} car={car}></MyAddCard>
      ))}
    </div>
  );
};

export default MyAddedCars;
