import MyAddCard from "@/components/MyAddCard";
import { auth } from "@/lib/auth";
import { useSession } from "@/lib/auth-client";
import { carCollections } from "@/lib/data";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

const MyAddedCars = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const allcars = await carCollections();
  const addedCars = allcars.filter((car) => car.email == session?.user?.email);

  //   addedCars.map((car) => if(car.formData === ));
  if (addedCars.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center h-screen">
        <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
          🚗
        </div>

        <h2 className="text-3xl font-bold text-gray-800">No Cars Added Yet</h2>

        <p className="text-gray-500 mt-3 max-w-md">
          You haven't listed any cars for rent yet. Add your first vehicle and
          start receiving booking requests from customers.
        </p>

        <Link
          href="/addcars"
          className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Add Your First Car
        </Link>
      </div>
    );
  }
  return (
    <div className="h-screen container space-y-5 mx-auto mt-1">
      {addedCars.map((car) => (
        <MyAddCard key={car._id} car={car}></MyAddCard>
      ))}
    </div>
  );
};

export default MyAddedCars;
