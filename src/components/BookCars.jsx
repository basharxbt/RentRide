import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";
const BookCars = ({ car }) => {
  return (
    <div>
      <Card className=" items-stretch md:flex-row">
        <div className="  rounded-2xl ">
          <Image
            src={car.carInfo.imageUrl}
            width={200}
            height={200}
            alt={car.carInfo.name}
          ></Image>
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <Card.Header className="gap-1">
            <Card.Title className="text-3xl">{car.carInfo.name}</Card.Title>

            <p className="my-2">Car Type: {car.carInfo.carType}</p>

            <span className=" mt-1  text-foreground">
              Pickup Location: {car.carInfo.pickupLocation}
            </span>
            <span className=" mt-1 text-2xl text-foreground">
              ${car.carInfo.price}/ per day
            </span>
          </Card.Header>
          <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-muted">{}</span>
            </div>
          </Card.Footer>
        </div>
      </Card>
    </div>
  );
};

export default BookCars;
