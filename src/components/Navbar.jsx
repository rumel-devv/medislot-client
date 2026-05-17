"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/app/providers/ThemeProvider";

// React Icons
import { FiMoon, FiSun } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-full bg-white dark:bg-[#0F172A] shadow-md border-b dark:border-gray-800 transition">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">

        {/* LEFT: LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-[#088F8F] flex items-center justify-center text-white font-bold">
            M
          </div>
          <h1 className="text-xl font-bold text-[#088F8F]">
            Medislot
          </h1>
        </div>

        {/* MIDDLE */}
        <div className="hidden md:flex gap-8 font-medium text-gray-700 dark:text-gray-200">
          <Link href="/" className="hover:text-[#088F8F]">Home</Link>
          <Link href="/all-appoint" className="hover:text-[#088F8F]">All Appoint</Link>
          <Link href="/dashboard" className="hover:text-[#088F8F]">Dashboard</Link>
        </div>

        {/* RIGHT */}
        <div className="hidden md:flex items-center gap-3">

          {/* THEME TOGGLE ICON */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border dark:border-gray-600 hover:scale-105 transition"
          >
            {theme === "light" ? (
              <FiMoon className="text-xl text-gray-700" />
            ) : (
              <FiSun className="text-xl text-yellow-400" />
            )}
          </button>

          <Link
            href="/login"
            className="px-4 py-2 border border-[#088F8F] text-[#088F8F] rounded-lg hover:bg-[#088F8F] hover:text-white transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="px-4 py-2 bg-[#088F8F] text-white rounded-lg hover:opacity-90 transition"
          >
            Register
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#088F8F] text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white dark:bg-[#0F172A] border-t dark:border-gray-800">

          <Link href="/" className="block py-2 text-gray-700 dark:text-gray-200 hover:text-[#088F8F]">
            Home
          </Link>

          <Link href="/all-appoint" className="block py-2 text-gray-700 dark:text-gray-200 hover:text-[#088F8F]">
            All Appoint
          </Link>

          <Link href="/dashboard" className="block py-2 text-gray-700 dark:text-gray-200 hover:text-[#088F8F]">
            Dashboard
          </Link>

          {/* MOBILE THEME BUTTON */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 py-2 text-gray-700 dark:text-gray-200"
          >
            {theme === "light" ? (
              <>
                <FiMoon /> Dark Mode
              </>
            ) : (
              <>
                <FiSun /> Light Mode
              </>
            )}
          </button>

          <div className="flex gap-3 pt-2">
            <Link className="flex-1 text-center px-4 py-2 border border-[#088F8F] text-[#088F8F] rounded-lg" href="/login">
              Login
            </Link>

            <Link className="flex-1 text-center px-4 py-2 bg-[#088F8F] text-white rounded-lg" href="/register">
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;