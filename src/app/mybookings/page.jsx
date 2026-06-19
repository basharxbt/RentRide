import BookCars from "@/components/BookCars";
import { auth } from "@/lib/auth";
import { myBookCars } from "@/lib/data";
import { Button, Card, CloseButton } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";

const Mybookings = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const mybookingsCars = await myBookCars(token);
  console.log(mybookingsCars, "this is the mybookingsCars");
  const filteredCars = mybookingsCars.filter(
    (car) => car.bookInfo.email === session?.user?.email,
  );
  console.log(filteredCars, "this is the filtered cars from mybookings");
  if (filteredCars.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center h-screen">
        <div className="w-20 h-20 rounded-full bg-[#d7b65d]/10 flex items-center justify-center mb-6">
          <span className="text-4xl">🚗</span>
        </div>

        <h2 className="text-3xl font-semibold text-gray-900">
          No Bookings Found
        </h2>

        <p className="mt-3 max-w-md text-gray-500">
          You haven't booked any cars yet. Explore our fleet and reserve the
          perfect ride for your next journey.
        </p>

        <Link
          href="/explorecars"
          className="mt-8 rounded-lg bg-[#d7b65d] px-6 py-3 font-medium text-black transition hover:opacity-90"
        >
          Book Your First Car
        </Link>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex flex-col gap-4 container mx-auto">
      {filteredCars.map((car) => (
        <BookCars key={car._id} car={car}></BookCars>
      ))}
    </div>
  );
};

export default Mybookings;
