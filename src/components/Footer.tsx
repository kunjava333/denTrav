"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Link, Mail } from "lucide-react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faFacebook,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className="bg-white dark:bg-black mt-60">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 flex flex-col gap-14 md:mb-0">
              <div className="flex justify-center items-center gap-6 py-6">
                <a
                  href="https://www.instagram.com/dentrav.eu?igsh=ZHNxb3AybHdoaHJq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-pink-600 hover:scale-125 transition-transform duration-300"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                </a>
                <a
                  href="https://www.tiktok.com/@dentrav.eu?_t=ZN-8tYIByeLqoI&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-black dark:text-white hover:scale-125 transition-transform duration-300"
                >
                  <FontAwesomeIcon icon={faTiktok} />
                </a>

                <a
                  href="https://www.facebook.com/share/1GnLD9s2f4/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-blue-600 hover:scale-125 transition-transform duration-300"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://pin.it/6SsFjhcRc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-red-600 hover:scale-125 transition-transform duration-300"
                >
                  <FontAwesomeIcon icon={faPinterest} />
                </a>
              </div>
            </div>
            <div className=" grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div className="mr-10">
                <h2 className="mb-6 text-sm font-semibold  text-gray-900 uppercase dark:text-white">
                  Menu
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col gap-2">
                  <li><a href="/" className="hover:text-blue-500 transition-colors">Home</a></li>
                  <li><a href="/services" className="hover:text-blue-500 transition-colors">Services</a></li>
                  <li><a href="/about" className="hover:text-blue-500 transition-colors">About Us</a></li>
                  <li><a href="/contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Our Services
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col gap-2">
                  <li>Reviews</li>
                  <li>Careers</li>
                  <li>Enquiries</li>
                  <li><a href="/contact" className="hover:text-blue-500 transition-colors">Book an appointment</a></li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Contact
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col gap-2">
                <li><a href="mailto:dentravinternational@gmail.com?subject=To%20Book%20an%20appointment&body=Dear%20Dentrav%20Team%2C%0A%0AI%20hope%20this%20message%20finds%20you%20well.%20I%20would%20like%20to%20schedule%20a%20consultation%20appointment%20at%20your%20earliest%20availability.%20Please%20let%20me%20know%20the%20available%20dates%20and%20times%2C%20and%20any%20information%20I%20may%20need%20to%20prepare%20for%20the%20appointment.%0A%0AThank%20you%2C%20and%20I%20look%20forward%20to%20hearing%20from%20you.%0A%0ABest%20regards%2C" className="hover:text-blue-500 transition-colors">dentravinternational@gmail.com</a></li>
                  
                  <li><a href="tel: +370 66195755" className="hover:text-blue-500 transition-colors">+370 66195755</a></li>
                  <li>Location</li>
                  <li>FAQs</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            {/* <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2025{" "}
              <Link href="https://flowbite.com/" className="hover:underline">
                Flowbite™
              </Link>
              . All Rights Reserved.
            </span> */}
          </div>
        </div>
      </footer>
    </>
  );
}
