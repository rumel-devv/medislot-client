import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold mt-4 text-gray-600">
        Page Not Found
      </h2>
      <p className="text-gray-500 mt-2 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;