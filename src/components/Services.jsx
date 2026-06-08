import React from "react";
import {
  FaBriefcase,
  FaCar,
  FaCarSide,
  FaPlaneArrival,
  FaTachometerAlt,
  FaUserTie,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Airport Transfer",
      description:
        "Fast and reliable airport pickup and drop-off services available 24/7 for your convenience.",
      icon: <FaPlaneArrival size={32} />,
    },
    {
      id: 2,
      title: "Corporate Rentals",
      description:
        "Professional transportation solutions for business meetings, conferences, and executive travel.",
      icon: <FaBriefcase size={32} />,
    },
    {
      id: 3,
      title: "Luxury Chauffeur Service",
      description:
        "Enjoy premium comfort with experienced chauffeurs and high-end vehicles for any occasion.",
      icon: <FaUserTie size={32} />,
    },
  ];
  return (
    <div className="container mx-auto mt-10 ">
      <div className="flex flex-col items-center gap-4">
        <p className="text-md font-bold bg-gray-100 p-2 px-4 rounded-full text-center w-max">
          Our Services
        </p>
        <h2 className="text-4xl font-semibold text-center">
          Everything You Need for the Road
        </h2>
      </div>
      <div className=" my-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-3xl bg-[#eceaea] p-12 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#d7b65d] text-black">
                {service.icon}
              </div>
              <h3 className="mb-5 text-3xl font-semibold text-black">
                {service.title}
              </h3>
              <p className="mb-12 text-lg leading-8 text-gray-600">
                {service.description}
              </p>

              <div className="mb-8 border-t border-gray-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
