"use client";

import { useState } from "react";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import { FiCalendar, FiUser, FiMenu, FiX } from "react-icons/fi";

export default function DashLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen w-full md:w-9/12 mx-auto bg-gray-50 dark:bg-gray-950 flex">

        {/* ================= SIDEBAR ================= */}
        <aside
          className={`
            fixed lg:static top-0 left-0 h-full w-64
            bg-white dark:bg-gray-900
            border-r border-gray-200 dark:border-gray-800
            p-6 z-50
            transform transition-transform duration-300 ease-in-out
            ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          `}
        >
          <div className="lg:hidden h-14" />

          <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
            Dashboard
          </h2>

          <nav className="flex flex-col gap-3">

            <Link
              href="/my-bookings"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border
              border-gray-200 dark:border-gray-700
              text-gray-700 dark:text-gray-200
              hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <FiCalendar />
              My Bookings
            </Link>

            <Link
              href="/my-profile"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border
              border-gray-200 dark:border-gray-700
              text-gray-700 dark:text-gray-200
              hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <FiUser />
              My Profile
            </Link>

          </nav>
        </aside>

        {/* ================= OVERLAY ================= */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/50 lg:hidden z-40"
          />
        )}

        {/* ================= MAIN ================= */}
        <div className="flex-1 flex flex-col">

          {/* ================= MOBILE TOPBAR ================= */}
          <div className="lg:hidden h-14 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-40">

            <h2 className="font-semibold text-gray-800 dark:text-white">
              Dashboard
            </h2>

            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {open ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>

          </div>

          {/* ================= CONTENT ================= */}
          <main className="flex-1 p-4 md:p-6 pt-4 lg:pt-6">
            {children}
          </main>

        </div>

        <Toaster />
      </div>
    </ThemeProvider>
  );
}