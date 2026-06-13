"use client";

import React from "react";
import {
  Button,
  Description,
  Input,
  Label,
  ListBox,
  TextField,
  Select,
} from "@heroui/react";
import { carList } from "@/lib/data";
import { useSession } from "@/lib/auth-client";
const AddedCarEdit = () => {
  const { data: season } = useSession();
  console.log(season);
  const handleCarListing = async (formdata) => {
    const carData = Object.fromEntries(formdata.entries());
    console.log(carData);
    const carListData = await carList({
      name: carData.name,
      price: carData.price,
      carType: carData.carType,
      imageUrl: carData.imageUrl,
      seatCapacity: carData.seatCapacity,
      pickupLocation: carData.pickupLocation,
      status: carData.status,
      email: season?.user?.email,
    });
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-6xl font-semibold text-center">Add Car</h1>
      <div className="bg-gray-100 p-5 rounded-4xl mt-5  w-full">
        <form action={handleCarListing} className="flex flex-col gap-4 w-full">
          <TextField className="w-full" name="name" type="text">
            <Label>Car Name</Label>
            <Input />
          </TextField>
          <TextField className="w-full" name="price">
            <Label>Daily Rent Price</Label>
            <Input />
          </TextField>

          {/* <Label></Label> */}

          <Select
            aria-label="Car Type"
            name="carType"
            className=""
            placeholder="Select one"
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

          <TextField className="w-full" name="imageUrl">
            <Label>Image Url</Label>
            <Input />
          </TextField>
          <TextField className="w-full" name="seatCapacity">
            <Label>Seat Capacity</Label>
            <Input />
          </TextField>
          <TextField className="w-full" name="pickupLocation">
            <Label>Pickup Location</Label>
            <Input />
          </TextField>
          <TextField className="w-full" name="Description">
            <Label>Description</Label>
            <Input />
          </TextField>

          <Select
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

          <Button type="submit" slot="close">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddedCarEdit;
