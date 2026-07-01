"use client";
import { AlertDialog, Button } from "@heroui/react";

import { useSession } from "@/lib/auth-client";
import { Card } from "@heroui/react";
import Image from "next/image";
import { deleteAddedCar, updateAddedCar } from "@/lib/data";
import Link from "next/link";
import { Flip, toast } from "react-toastify";

const MyAddCard = ({ car }) => {
  const { data: season } = useSession();

  const deleteHandler = async (id) => {
    await deleteAddedCar(id);
    toast.success(" Car deleted successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
    });
    window.location.reload();
  };

  //   const email = season?.user?.email;
  console.log(season?.user?.email);

  console.log(car, "car from singlecar");

  return (
    <div className="flex flex-col  items-center">
      <div className=" w-full ">
        <Card className=" items-stretch flex flex-col md:flex-row">
          <div className="  rounded-2xl ">
            <Image
              className="h-40 w-full object-cover rounded-2xl md:h-full md:w-48"
              src={car.imageUrl}
              width={200}
              height={200}
              alt={car.name}
            ></Image>
          </div>

          <div className="flex flex-col-reverse gap-3">
            <Card.Header className="gap-1">
              <div className="flex flex-col-reverse  md:flex-row justify-between gap-5 flex-wrap">
                <Card.Title className="text-3xl">{car.name}</Card.Title>

                <div className="flex gap-3 items-center">
                  <div>
                    {" "}
                    <Link href={`/myaddedcars/${car._id}`}>
                      {" "}
                      <button className="px-4 py-1 bg-neutral-700 text-white rounded-4xl cursor-pointer">
                        Edit
                      </button>
                    </Link>
                  </div>
                  <AlertDialog>
                    <Button variant="danger">Delete </Button>
                    <AlertDialog.Backdrop>
                      <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                          <AlertDialog.CloseTrigger />
                          <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                              Delete this car?
                            </AlertDialog.Heading>
                          </AlertDialog.Header>
                          <AlertDialog.Body>
                            <p>
                              <strong>{car.name}</strong> Car will be removed
                              from your added cars. Are you sure you want to
                              proceed?
                            </p>
                          </AlertDialog.Body>
                          <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                              Cancel
                            </Button>
                            <Button
                              onClick={() => deleteHandler(car._id)}
                              slot="close"
                              variant="danger"
                            >
                              Delete
                            </Button>
                          </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                      </AlertDialog.Container>
                    </AlertDialog.Backdrop>
                  </AlertDialog>
                </div>
              </div>

              <p className="my-2">Car Type: {car.carType}</p>

              <span className=" mt-1  text-foreground">
                Pickup Location: {car.pickupLocation}
              </span>
              <span className=" mt-1 text-2xl text-foreground">
                ${car.price}/ per day
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
    </div>
  );
};

export default MyAddCard;
