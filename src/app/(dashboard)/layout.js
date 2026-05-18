import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { Toaster } from "react-hot-toast";
import Link from "next/link";

import { FiCalendar, FiUser } from "react-icons/fi";

export default function DashLayout({ children }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">

        {/* Dashboard Container */}
        <div className="w-9/12 mx-auto min-h-screen bg-white rounded-2xl shadow-lg p-6 flex gap-6">

          {/* Left Sidebar */}
          <div className="w-3/12 border-r pr-4">
            <h2 className="text-xl font-bold mb-6 text-gray-800">
              Dashboard
            </h2>

            <div className="flex flex-col gap-3">

              <Link
                href="/my-bookings"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border text-gray-700 hover:bg-emerald-50 hover:border-emerald-500 hover:text-emerald-600 transition"
              >
                <FiCalendar />
                My Bookings
              </Link>

              <Link
                href="/my-profile"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border text-gray-700 hover:bg-emerald-50 hover:border-emerald-500 hover:text-emerald-600 transition"
              >
                <FiUser />
                My Profile
              </Link>

            </div>
          </div>

          {/* Right Content */}
          <main className="w-9/12 pl-6">
            {children}
          </main>

        </div>

        <Toaster />
      </div>
    </ThemeProvider>
  );
}