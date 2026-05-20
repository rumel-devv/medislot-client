// "use client";

import Link from "next/link";
import { FiCalendar, FiUser, FiPlusCircle } from "react-icons/fi";


const DashboardPage = () => {
  return (
    <div className="space-y-6 text-gray-800 dark:text-gray-100">
      <div className="text-center md:text-left">
        <h1 className="text-xl md:text-3xl font-bold">
          Welcome to your Dashboard
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Manage your bookings and profile from here.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
        <Link href="/my-bookings" className="group relative">
          <div className="p-[1px] rounded-2xl bg-gradient-to-r from-emerald-400/40 to-teal-500/40 hover:from-emerald-500 hover:to-teal-600 transition">
            <div
              className="
              h-auto sm:h-52
              bg-white dark:bg-[#0B1220]
              rounded-2xl p-4 sm:p-5
              flex flex-col justify-between
              transition-all duration-300
              group-hover:-translate-y-2 group-hover:shadow-2xl
              border border-transparent dark:border-white/10
            "
            >
              <div>
                <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-3 group-hover:scale-110 transition">
                  <FiCalendar />
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                  My Bookings
                </h3>

                <p className="text-gray-500 dark:text-gray-300 mt-1 text-xs sm:text-sm leading-snug">
                  View and manage your appointments
                </p>
              </div>

              <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
        </Link>

        <Link href="/my-profile" className="group relative">
          <div className="p-[1px] rounded-2xl bg-gradient-to-r from-blue-400/40 to-indigo-500/40 hover:from-blue-500 hover:to-indigo-600 transition">
            <div
              className="
              h-auto sm:h-52
              bg-white dark:bg-[#0B1220]
              rounded-2xl p-4 sm:p-5
              flex flex-col justify-between
              transition-all duration-300
              group-hover:-translate-y-2 group-hover:shadow-2xl
              border border-transparent dark:border-white/10
            "
            >
              <div>
                <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 transition">
                  <FiUser />
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                  My Profile
                </h3>

                <p className="text-gray-500 dark:text-gray-300 mt-1 text-xs sm:text-sm leading-snug">
                  Update your personal information
                </p>
              </div>

              <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
        </Link>

        <Link href="/all-appoint" className="group relative">
          <div className="p-[1px] rounded-2xl bg-gradient-to-r from-purple-400/40 to-pink-500/40 hover:from-purple-500 hover:to-pink-600 transition">
            <div
              className="
              h-auto sm:h-52
              bg-white dark:bg-[#0B1220]
              rounded-2xl p-4 sm:p-5
              flex flex-col justify-between
              transition-all duration-300
              group-hover:-translate-y-2 group-hover:shadow-2xl
              border border-transparent dark:border-white/10
            "
            >
              <div>
                <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 mb-3 group-hover:scale-110 transition">
                  <FiPlusCircle />
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                  New Appointment
                </h3>

                <p className="text-gray-500 dark:text-gray-300 mt-1 text-xs sm:text-sm leading-snug">
                  Book a new doctor appointment
                </p>
              </div>

              <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
        </Link>
      </div>

      <div className="p-5  rounded-xl border bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
        <h2 className="font-semibold text-gray-700 dark:text-gray-200">
          Quick Tips
        </h2>

        <ul className="text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
          <li>• You can update or delete your bookings anytime</li>
          <li>• Profile info should be kept up to date</li>
          <li>• Always check appointment status before visiting</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardPage;
