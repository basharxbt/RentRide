import React from "react";

const WorkingSystem = () => {
  const steps = [
    {
      id: "01",
      title: "Choose Your Car",
      description:
        "Browse our wide range of cars and pick the one that suits your journey and budget.",
    },
    {
      id: "02",
      title: "Book Online",
      description:
        "Select your pickup location, date, and time. Confirm your booking in just a few clicks.",
    },
    {
      id: "03",
      title: "Enjoy the Ride",
      description:
        "Pick up your car and enjoy a smooth, safe, and comfortable driving experience.",
    },
  ];
  return (
    <div>
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="text-gray-500 mt-3">
            Renting a car with RentRide is quick, simple, and hassle-free
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition bg-gray-100"
              >
                <div className="text-5xl font-extrabold text-gray-200 absolute top-4 right-6">
                  {step.id}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-500 mt-5">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkingSystem;
