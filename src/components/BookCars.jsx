import { auth } from "@/lib/auth";
import { Button, Card, CloseButton } from "@heroui/react";
import { headers } from "next/headers";

import Image from "next/image";
import Link from "next/link";
const BookCars = async ({ car }) => {
  console.log(car.bookInfo);

  // const session = await auth.api.getSession({
  //   headers: await headers(),
  // });
  // console.log(session, "this is the session of getsession");

  // if (session?.user?.email === car.bookInfo.email) {
  return (
    <div>
      <Card className=" items-stretch md:flex-row">
        <div className="  rounded-2xl ">
          <Image
            src={car.bookInfo.carinfo?.imageUrl}
            width={200}
            height={200}
            alt={car.bookInfo.carinfo.name}
          ></Image>
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <Card.Header className="gap-1">
            <Card.Title className="text-3xl">
              {car.bookInfo.carinfo.name}
            </Card.Title>

            <p className="my-2">Booking Date: {car.bookInfo?.bookingDate}</p>

            <span className=" mt-1  text-foreground">
              Pickup Location: {car.bookInfo.carinfo.pickupLocation}
            </span>
            <span className=" mt-1 text-2xl text-foreground">
              ${car.bookInfo.carinfo.price}/ per day
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
