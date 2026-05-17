"use client";

import Link from "next/link";
import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiTwitter,
  FiMapPin,
  FiMail,
  FiPhone,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-[#0F172A] border-t dark:border-gray-800 text-gray-800 dark:text-gray-200">

      {/* MAIN */}
      <div className="w-10/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* BRAND */}
        <div className="space-y-4">

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#088F8F] flex items-center justify-center text-white font-bold text-lg">
              M
            </div>

            <h1 className="text-2xl font-bold text-[#088F8F]">
              Medislot
            </h1>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Smart Doctor Appointment System for fast and easy healthcare booking.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3">

            <a className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#088F8F] hover:text-white transition">
              <FiFacebook />
            </a>

            <a className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#088F8F] hover:text-white transition">
              <FiTwitter />
            </a>

            <a className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#088F8F] hover:text-white transition">
              <FiInstagram />
            </a>

            <a className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#088F8F] hover:text-white transition">
              <FiGithub />
            </a>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="space-y-3">

          <h2 className="text-lg font-semibold">Quick Links</h2>

          <div className="flex flex-col gap-2 text-sm">

            <Link href="/" className="hover:text-[#088F8F]">
              Home
            </Link>

            <Link href="/all-appoint" className="hover:text-[#088F8F]">
              Appointments
            </Link>

            <Link href="/dashboard" className="hover:text-[#088F8F]">
              Dashboard
            </Link>

            <Link href="/login" className="hover:text-[#088F8F]">
              Login
            </Link>

          </div>

        </div>

        {/* CONTACT */}
        <div className="space-y-3">

          <h2 className="text-lg font-semibold">Contact Us</h2>

          <div className="flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400">

            <div className="flex items-center gap-2">
              <FiMapPin />
              <span>Sylhet, Bangladesh</span>
            </div>

            <div className="flex items-center gap-2">
              <FiMail />
              <span>support@medislot.com</span>
            </div>

            <div className="flex items-center gap-2">
              <FiPhone />
              <span>+880 1XXXXXXXXX</span>
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t dark:border-gray-800 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#088F8F] font-semibold">Medislot</span>. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;