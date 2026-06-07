"use client";

import { bookCar } from "@/lib/data";
import { Car, Envelope } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextField,
  Select,
} from "@heroui/react";

export function BookingModal({ car }) {
  const handleBooking = async (formdata) => {
    const bookInfo = Object.fromEntries(formdata.entries());
    console.log(bookInfo);
    const bookingCar = bookCar(bookInfo, car);
  };
  return (
    <Modal>
      <Modal.Trigger>
        <button className="btn px-4 hover:bg-[#d7b65d] hover:text-neutral-600 bg-neutral-600 text-white">
          Book Now !
        </button>
      </Modal.Trigger>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-[#d7b65d] text-accent-soft-foreground">
                <Car className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Book Your Ride Instantly</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill in your details to reserve your preferred car quickly and
                securely. Enjoy a smooth and hassle-free rental experience.
              </p>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={handleBooking} className="flex flex-col gap-4">
                  <Select
                    aria-label="status"
                    name="status"
                    className=""
                    placeholder="Select one"
                  >
                    <Label>Driver Need ?</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="Yes" textValue="Yes">
                          Yes
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="No" textValue="No">
                          No
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  <TextField
                    className="w-full"
                    name="message"
                    variant="secondary"
                  >
                    <Label>Special Note</Label>
                    <Input placeholder="Enter your message" />
                  </TextField>
                  <button
                    className="w-full btn bg-[#d7b65d] rounded-sm"
                    type="submit"
                    slot="close"
                  >
                    BOOK NOW
                  </button>
                </form>
              </Surface>
            </Modal.Body>

            <Modal.Footer></Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
