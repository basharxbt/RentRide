"use client";

import { updateAddedCar } from "@/lib/data";
import {
  Button,
  Description,
  Input,
  Label,
  ListBox,
  TextField,
  Select,
} from "@heroui/react";
import { Bounce, toast } from "react-toastify";
const UpdatedAddedCar = ({ id, car }) => {
  const handleCarListing = async (formdata) => {
    console.log(car);
    const carData = Object.fromEntries(formdata.entries());
    console.log(carData);
    const carUpdateData = await updateAddedCar(id, carData);
    toast.success(" Car updated successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  return (
    <div className="container mx-auto flex  items-center justify-center">
      <div className="bg-gray-100  p-5 max-w-lg w-full rounded-4xl mt-5  ">
        <h1 className="text-4xl font-semibold text-center mb-10">Update Car</h1>
        <form action={handleCarListing} className="flex flex-col gap-4 w-full">
          <TextField defaultValue={car.price} className="w-full" name="price">
            <Label>Daily Rent Price</Label>
            <Input />
          </TextField>

          {/* <Label></Label> */}

          <Select
            aria-label="Car Type"
            name="carType"
            className=""
            placeholder="Select one"
            defaultValue={car.carType}
          >
            <Label>Car Type</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="SUV" textValue="SUV">
                  SUV
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="Sedan" textValue="Sedan">
                  Sedan
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="Hatchback" textValue="Hatchback">
                  Hatchback
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="Luxury" textValue="Luxury">
                  Luxury
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          <TextField
            defaultValue={car.imageUrl}
            className="w-full"
            name="imageUrl"
          >
            <Label>Image Url</Label>
            <Input />
          </TextField>

          <TextField
            defaultValue={car.pickupLocation}
            className="w-full"
            name="pickupLocation"
          >
            <Label>Pickup Location</Label>
            <Input />
          </TextField>
          <TextField
            defaultValue={car.description}
            className="w-full"
            name="description"
          >
            <Label>Description</Label>
            <Input />
          </TextField>

          <Select
            defaultValue={car.status}
            aria-label="status"
            name="status"
            className=""
            placeholder="Select one"
          >
            <Label>Satus</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="Available" textValue="Available">
                  Available
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="Not Available" textValue="Not Available">
                  Not Available
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          <Button className="w-full bg-neutral-700" type="submit" slot="close">
            Update Car
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UpdatedAddedCar;
