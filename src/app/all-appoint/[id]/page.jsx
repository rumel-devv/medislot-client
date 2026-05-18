import { doctorsDetailsData } from "@/lib/data";
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

const DoctorDetailsPage = async ({ params }) => {
  const { id } = await params;

  const doctor = await doctorsDetailsData(id);

  console.log(doctor);

  return (
   <div className="w-full min-h-screen flex items-center justify-center p-4 md:p-8 bg-gray-50 dark:bg-[#0B1220] transition-colors duration-300">
  <div className="w-full max-w-6xl rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-[#111827]">

    <div className="relative h-72 md:h-full min-h-[320px]">
      <Image
        src={doctor.image}
        alt={doctor.name}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    </div>


    <div className="p-6 md:p-10 flex flex-col gap-6">


      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
          {doctor.name}
        </h1>

        <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-lg mt-1">
          {doctor.specialty}
        </p>


        <div className="flex flex-wrap gap-2 mt-4">


          <span className="flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-yellow-100 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-500/20">
            <FiStar className="text-yellow-600 dark:text-yellow-400" />
            {doctor.rating}
          </span>

   
          <span className="flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-500/20">
            <FiBriefcase className="text-emerald-600 dark:text-emerald-400" />
            {doctor.experience} Experience
          </span>
        </div>
      </div>

 
      <div className="grid gap-3">

        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20">
          <p className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
            <FiHome />
            Hospital
          </p>
          <p className="text-gray-800 dark:text-gray-200 font-semibold">
            {doctor.hospital}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20">
          <p className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
            <FiMapPin />
            Location
          </p>
          <p className="text-gray-800 dark:text-gray-200 font-semibold">
            {doctor.location}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20">
          <p className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
            <FiDollarSign />
            Consultation Fee
          </p>
          <p className="text-emerald-700 dark:text-emerald-300 font-bold text-lg">
            ৳ {doctor.fee}
          </p>
        </div>

      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
          About Doctor
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {doctor.description}
        </p>
      </div>


      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
          <FiClock className="text-emerald-500 dark:text-emerald-400" />
          Available Time
        </h3>

        <div className="flex flex-wrap gap-2">
          {doctor.availability?.map((time, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-500/20 text-sm"
            >
              {time}
            </span>
          ))}
        </div>
      </div>

 
      <button className="mt-auto w-full md:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition shadow-md">
        Book Appointment
      </button>

    </div>
  </div>
</div>
  );
};

export default DoctorDetailsPage;
