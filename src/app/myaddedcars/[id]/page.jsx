import React from "react";

import { carDetailsById, updateAddedCar } from "@/lib/data";
import UpdatedAddedCar from "@/components/UpdatedAddedCar";
const AddedCarEdit = async ({ params }) => {
  const { id } = await params;
  const car = await carDetailsById(id);
  return (
    <div className="container mx-auto">
      <UpdatedAddedCar id={id} car={car}></UpdatedAddedCar>
    </div>
  );
};

export default AddedCarEdit;
