"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#0F172A] px-4 py-8 sm:py-10 transition-colors">

      <div className="w-full max-w-md bg-white dark:bg-[#111827] shadow-lg rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800">

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-5 sm:mb-6">
          Login
        </h1>

        {/* Form */}
        <form className="space-y-4">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-3 sm:px-4 py-2.5 text-sm sm:text-base border rounded-lg 
              bg-white dark:bg-gray-900 
              text-gray-900 dark:text-white
              border-gray-300 dark:border-gray-700
              focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-3 sm:px-4 py-2.5 text-sm sm:text-base border rounded-lg 
              bg-white dark:bg-gray-900 
              text-gray-900 dark:text-white
              border-gray-300 dark:border-gray-700
              focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <h1 className="text-xs sm:text-sm text-emerald-400 hover:underline">
                   Forgot Password?
            </h1>
           
        
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-emerald-400 text-white py-2.5 sm:py-3 rounded-lg 
            hover:bg-emerald-500 active:scale-[0.98] transition font-medium text-sm sm:text-base"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-5 sm:my-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
          <span className="text-xs sm:text-sm text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
        </div>

        {/* Google Login */}
        <button className="w-full flex items-center justify-center gap-2 border 
        border-gray-300 dark:border-gray-700 
        py-2.5 sm:py-3 rounded-lg 
        hover:bg-gray-100 dark:hover:bg-gray-800 
        active:scale-[0.98]
        text-gray-700 dark:text-white transition text-sm sm:text-base">
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        {/* Register Link */}
        <p className="text-xs sm:text-sm text-center mt-5 sm:mt-6 text-gray-600 dark:text-gray-300">
          Do not have an account?{" "}
          <Link
            href="/register"
            className="text-emerald-400 hover:underline font-medium"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}