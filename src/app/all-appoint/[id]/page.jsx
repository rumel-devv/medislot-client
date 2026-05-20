import BookingModal from "@/components/BookingModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

import {
  FiBriefcase,
  FiClock,
  FiDollarSign,
  FiHome,
  FiMapPin,
  FiStar,
} from "react-icons/fi";

// export const dynamic = "force-dynamic";

const DoctorDetailsPage = async ({ params }) => {
  const { id } = await params;
  // console.log(id);

  // Fetch Doctor Data
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/doctors/${id}`,
    {
      cache: "no-store",
    }
  );

  const doctor = await res.json();
  console.log('details data',doctor);

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 md:p-8 bg-gray-50 dark:bg-[#0B1220] transition-colors duration-300">
      
      <div className="w-full max-w-6xl rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-[#111827]">

        {/* Doctor Image */}
        <div className="relative h-72 md:h-full min-h-[320px]">
          <Image
            src={doctor?.image}
            alt={doctor?.doctorName}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* Doctor Info */}
        <div className="p-6 md:p-10 flex flex-col gap-6">

          {/* Header */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
              {doctor.doctorName}
            </h1>

            <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-lg mt-1">
              {doctor.specialty}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">

              {/* Rating */}
              <span
                className="flex items-center gap-2 px-3 py-1 text-sm rounded-full 
                bg-yellow-100 dark:bg-yellow-500/10 
                text-yellow-700 dark:text-yellow-300 
                border border-yellow-200 dark:border-yellow-500/20"
              >
                <FiStar className="text-yellow-600 dark:text-yellow-400" />
                {doctor.rating}
              </span>

              {/* Experience */}
              <span
                className="flex items-center gap-2 px-3 py-1 text-sm rounded-full 
                bg-emerald-50 dark:bg-emerald-500/10 
                text-emerald-700 dark:text-emerald-300 
                border border-emerald-100 dark:border-emerald-500/20"
              >
                <FiBriefcase className="text-emerald-600 dark:text-emerald-400" />
                {doctor.experience} Experience
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="grid gap-3">

            {/* Hospital */}
            <div
              className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 
              border border-emerald-100 dark:border-emerald-500/20"
            >
              <p
                className="flex items-center gap-2 text-xs 
                text-emerald-600 dark:text-emerald-400 font-medium"
              >
                <FiHome />
                Hospital
              </p>

              <p className="text-gray-800 dark:text-gray-200 font-semibold">
                {doctor.hospital}
              </p>
            </div>

            {/* Location */}
            <div
              className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 
              border border-emerald-100 dark:border-emerald-500/20"
            >
              <p
                className="flex items-center gap-2 text-xs 
                text-emerald-600 dark:text-emerald-400 font-medium"
              >
                <FiMapPin />
                Location
              </p>

              <p className="text-gray-800 dark:text-gray-200 font-semibold">
                {doctor.location}
              </p>
            </div>

            {/* Fee */}
            <div
              className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 
              border border-emerald-100 dark:border-emerald-500/20"
            >
              <p
                className="flex items-center gap-2 text-xs 
                text-emerald-600 dark:text-emerald-400 font-medium"
              >
                <FiDollarSign />
                Consultation Fee
              </p>

              <p className="text-emerald-700 dark:text-emerald-300 font-bold text-lg">
                ৳ {doctor.fee}
              </p>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              About Doctor
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {doctor.description}
            </p>
          </div>

          {/* Available Time */}
          <div>
            <h3
              className="text-lg font-semibold text-gray-900 dark:text-gray-100 
              mb-2 flex items-center gap-2"
            >
              <FiClock className="text-emerald-500 dark:text-emerald-400" />
              Available Time
            </h3>

            <div className="flex flex-wrap gap-2">
              {doctor.availability?.map((time, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full 
                  bg-emerald-50 dark:bg-emerald-500/10 
                  text-emerald-700 dark:text-emerald-300 
                  border border-emerald-100 dark:border-emerald-500/20 text-sm"
                >
                  {time}
                </span>
              ))}
            </div>
          </div>

          {/* Booking Modal */}
          <BookingModal doctor={doctor} />
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsPage;