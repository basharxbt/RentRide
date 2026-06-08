import BookCars from "@/components/BookCars";
import { myBookCars } from "@/lib/data";
import { Button, Card, CloseButton } from "@heroui/react";

const Mybookings = async () => {
  const mybookingsCars = await myBookCars();
  console.log(mybookingsCars);
  return (
    <div className="min-h-screen flex flex-col gap-4 container mx-auto">
      {mybookingsCars.map((car) => (
        <BookCars key={car._id} car={car}></BookCars>
      ))}
    </div>
  );
};

export default Mybookings;
