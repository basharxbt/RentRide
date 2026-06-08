import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white mt-16">
        <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
          <div>
            <h1 className="text-xl font-bold text-[#d7b65d]">RentRide</h1>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed">
              We make car rental easy, fast, and affordable. Choose your
              favorite car and hit the road with confidence.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Links</h2>

            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-[#d7b65d] cursor-pointer">
                <Link href="/"> Home</Link>
              </li>
              <li className="hover:text-[#d7b65d] cursor-pointer">
                {" "}
                <Link href="/explorecars"> Cars</Link>{" "}
              </li>
              <li className="hover:text-[#d7b65d] cursor-pointer">
                <Link href="/mybookings"> My Booking</Link>
              </li>
              <li className="hover:text-[#d7b65d] cursor-pointer">About</li>
              <li className="hover:text-[#d7b65d] cursor-pointer">Contact</li>
            </ul>
          </div>

          <div className="text-sm text-gray-400 space-y-2">
            <h2 className="text-lg font-semibold mb-4">Contact</h2>

            <p>Dhaka, Bangladesh</p>
            <p>support@rentride.com</p>
            <p>+880 1234 567 890</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Social</h2>

            <div className="flex gap-4 text-gray-400">
              <Link href="/">
                <FaFacebookF />
              </Link>
              <Link href="/">
                <FaInstagram />
              </Link>

              <Link href="/">
                <FaTwitter />
              </Link>

              <Link href="/">
                <FaLinkedinIn />
              </Link>

              <Link href="/">
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
          © 2026 RentRide. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
