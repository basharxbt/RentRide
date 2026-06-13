"use client";
import { AlertDialog, Button } from "@heroui/react";

import { useSession } from "@/lib/auth-client";
import { Card } from "@heroui/react";
import Image from "next/image";
import { deleteAddedCar } from "@/lib/data";

const MyAddCard = ({ car }) => {
  const { data: season } = useSession();

  const deleteHandler = async (id) => {
    await deleteAddedCar(id);
  };

  //   const email = season?.user?.email;
  console.log(season?.user?.email);

  console.log(car, "car from singlecar");

  if (car.formData) {
    if (car?.formData?.email == season?.user?.email) {
      return (
        <div className="flex flex-col items-center">
          <div className=" min-w-300 ">
            <Card className=" items-stretch md:flex-row">
              <div className="  rounded-2xl ">
                <Image
                  src={car.formData.imageUrl}
                  width={200}
                  height={200}
                  alt={car.formData.name}
                ></Image>
              </div>

              <div className="flex flex-1 flex-col gap-3">
                <Card.Header className="gap-1">
                  <div className="flex justify-between">
                    <Card.Title className="text-3xl">
                      {car?.formData?.name}
                    </Card.Title>

                    <div className="flex gap-3 items-center">
                      <div>
                        {" "}
                        <button className="px-4 py-1 bg-neutral-700 text-white rounded-4xl cursor-pointer">
                          Edit
                        </button>
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
                                  Delete project permanently?
                                </AlertDialog.Heading>
                              </AlertDialog.Header>
                              <AlertDialog.Body>
                                <p>
                                  This will permanently delete{" "}
                                  <strong>My Awesome Project</strong> and all of
                                  its data. This action cannot be undone.
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

                  <p className="my-2">Car Type: {car?.formData?.carType}</p>

                  <span className=" mt-1  text-foreground">
                    Pickup Location: {car?.formData?.pickupLocation}
                  </span>
                  <span className=" mt-1 text-2xl text-foreground">
                    ${car?.formData?.price}/ per day
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
    } else {
      <div>
        <h1>no </h1>
      </div>;
    }
  }
};

export default MyAddCard;
