"use client";

import Link from "next/link";
import { FaUserDoctor } from "react-icons/fa6";
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
    <footer className="w-full bg-white dark:bg-[#0B1220] border-t border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200">

      {/* MAIN */}
      <div className="w-11/12 lg:w-10/12 mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div className="space-y-5">

          {/* LOGO */}
          <div className="flex items-center gap-2">

            <div className="w-11 h-11 rounded-2xl bg-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-emerald-500/30">
         <FaUserDoctor/>
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Medi<span className="text-emerald-500">solt</span>
              </h1>

              <p className="text-[11px] text-gray-500 dark:text-gray-400 -mt-1">
                Healthcare Platform
              </p>
            </div>

          </div>

          {/* DESC */}
          <p className="text-sm leading-6 text-gray-500 dark:text-gray-400 max-w-sm">
            Smart Doctor Appointment System for fast, secure, and hassle-free healthcare booking.
          </p>

          {/* SOCIAL */}
          <div className="flex items-center gap-3">

            {[
              FiFacebook,
              FiTwitter,
              FiInstagram,
              FiGithub,
            ].map((Icon, index) => (
              <a
                key={index}
                className="w-10 h-10 rounded-xl flex items-center justify-center 
                bg-gray-100 dark:bg-white/10 
                text-gray-600 dark:text-gray-300 
                hover:bg-emerald-500 hover:text-white 
                transition duration-300 cursor-pointer"
              >
                <Icon size={18} />
              </a>
            ))}

          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="space-y-5">

          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Quick Links
          </h2>

          <div className="flex flex-col gap-3 text-sm">

            {[
              { name: "Home", href: "/" },
              { name: "Appointments", href: "/all-appoint" },
              { name: "Dashboard", href: "/dashboard" },
              { name: "Login", href: "/login" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-500 dark:text-gray-400 hover:text-emerald-500 transition duration-300 w-fit"
              >
                {link.name}
              </Link>
            ))}

          </div>
        </div>

        {/* CONTACT */}
        <div className="space-y-5">

          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Contact Us
          </h2>

          <div className="flex flex-col gap-4 text-sm text-gray-500 dark:text-gray-400">

            <div className="flex items-start gap-3">
              <div className="mt-0.5 text-emerald-500">
                <FiMapPin size={17} />
              </div>
              <span>Sylhet, Bangladesh</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-0.5 text-emerald-500">
                <FiMail size={17} />
              </div>
              <span>support@medisolt.com</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-0.5 text-emerald-500">
                <FiPhone size={17} />
              </div>
              <span>+880 1XXXXXXXXX</span>
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-200 dark:border-white/10">

        <div className="w-11/12 lg:w-10/12 mx-auto py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500 dark:text-gray-400">

          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-emerald-500 font-semibold">
              Medisolt
            </span>. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-emerald-500 transition">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-emerald-500 transition">
              Terms
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;