import {
  Search,
  CalendarDays,
  KeyRound,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const WorkingSystem = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Choose your car",
      description:
        "Browse our fleet, filter by type, price, or seat count, and pick the perfect car for your trip.",
      points: [
        "50+ cars available",
        "Compare by price & features",
        "Instant availability check",
      ],
    },
    {
      number: "02",
      icon: CalendarDays,
      title: "Book your dates",
      description:
        "Pick your pickup and return dates, choose your location, and confirm your booking in under a minute.",
      points: [
        "Flexible date selection",
        "Multiple pickup locations",
        "Free cancellation option",
      ],
    },
    {
      number: "03",
      icon: KeyRound,
      title: "Pay & drive away",
      description:
        "Complete a secure payment, collect your keys at pickup, and hit the road — it's that easy.",
      points: [
        "Secure online payment",
        "No hidden charges",
        "24/7 customer support",
      ],
    },
  ];
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="mb-14">
            <p className="text-xl font-semibold tracking-widest text-[#d7b65d] uppercase mb-2">
              How it works
            </p>
            <h2 className="text-4xl font-semibold text-gray-900 leading-tight mb-3">
              Rent a car in 3 simple steps
            </h2>
            <p className="text-gray-500 text-lg">
              Get behind the wheel faster — no paperwork hassle, no hidden fees.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">
                <div className="hidden md:flex absolute top-10 -right-5 z-10 items-center justify-center w-10"></div>

                <div className="bg-white border border-[#d7b65d47] rounded-2xl p-7 h-full shadow-sm hover:shadow-md transition-shadow duration-200">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-50 text-[#d7b65d] text-xs font-semibold mb-5">
                    {step.number}
                  </span>

                  <div className="mb-5">
                    <Icon className="w-8 h-8 text-gray-900" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-md text-gray-500 leading-relaxed mb-5">
                    {step.description}
                  </p>

                  <ul className="space-y-2">
                    {step.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-md text-gray-500"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#d7b65d] flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkingSystem;
