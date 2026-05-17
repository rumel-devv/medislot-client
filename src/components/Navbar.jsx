"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "@/app/providers/ThemeProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Appoint", href: "/all-appoint" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md dark:bg-[#0F172A] border-b dark:border-gray-800 shadow-sm text-gray-900 dark:text-white">

      {/* CONTAINER REMOVED → w-10/12 USED */}
      <div className="w-10/12 mx-auto flex items-center justify-between h-16">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-[#088F8F] flex items-center justify-center text-white font-bold">
            M
          </div>
          <h1 className="text-xl font-bold text-[#088F8F]">
            Medislot
          </h1>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition px-2 py-1 rounded-md ${
                  isActive
                    ? "text-[#088F8F] font-semibold border-b-2 border-[#088F8F]"
                    : "text-gray-700 dark:text-gray-300 hover:text-[#088F8F]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-3">

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-105 transition"
          >
            {theme === "light" ? (
              <FiMoon />
            ) : (
              <FiSun className="text-yellow-400" />
            )}
          </button>

          <Link
            href="/login"
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="px-4 py-2 bg-[#088F8F] text-white rounded-lg hover:opacity-90"
          >
            Register
          </Link>
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex items-center gap-3">

          <button onClick={toggleTheme} className="text-xl">
            {theme === "light" ? <FiMoon /> : <FiSun className="text-yellow-500" />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="text-2xl text-[#088F8F]"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden w-10/12 mx-auto pb-4 space-y-3 bg-white dark:bg-[#0F172A]">

          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-2 rounded-md px-2 ${
                  isActive
                    ? "text-[#088F8F] font-semibold bg-[#088F8F]/10"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="flex gap-3 pt-2">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="flex-1 text-center border border-gray-300 dark:border-gray-700 py-2 rounded-lg"
            >
              Login
            </Link>

            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="flex-1 text-center bg-[#088F8F] text-white py-2 rounded-lg"
            >
              Register
            </Link>
          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;