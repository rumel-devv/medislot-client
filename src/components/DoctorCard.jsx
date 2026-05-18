"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiStar, FiMapPin, FiArrowUpRight } from "react-icons/fi";

const DoctorCard = ({ doctor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.8, 0.25, 1], // smooth custom easing
      }}
      viewport={{ once: true, amount: 0.2 }}
      className="group relative h-full overflow-hidden rounded-xl border border-emerald-100 bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50/0 via-emerald-50/0 to-emerald-100/80 opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="relative overflow-hidden">
        <Image
          src={doctor.image}
          alt={doctor.name}
          width={500}
          height={500}
          className="h-52 sm:h-60 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />

        <div className="inline-flex absolute top-3 left-3 items-center gap-2 rounded-full bg-emerald-50 border border-emerald-100 px-4 py-1.5 mb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-sm font-semibold text-emerald-600">
            Available
          </span>
        </div>
      </div>

      <div className="relative p-2 flex flex-col">
        <p className="text-sm font-semibold tracking-wide text-emerald-600 uppercase">
          {doctor.specialty}
        </p>

        <h2 className="mt-1 text-xl sm:text-2xl font-bold text-gray-800 line-clamp-1">
          {doctor.name}
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-gray-500 line-clamp-2 min-h-[44px]">
          {doctor.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50">
              <FiMapPin className="text-emerald-600" />
            </div>

            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-700 truncate">
                {doctor.location}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-2xl border border-yellow-100 bg-yellow-50 px-3 py-2">
            <FiStar className="text-yellow-500" />
            <span className="text-sm font-semibold text-gray-700">
              {doctor.rating}
            </span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">Consultation Fee</p>
            <h3 className="text-2xl font-bold text-emerald-600">
              ${doctor.fee}
            </h3>
          </div>

          <Link href={`/all-appoint/${doctor._id}`}>
            <motion.button
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="flex h-10 items-center gap-2 rounded-md bg-emerald-500 px-5 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition-colors duration-300 hover:bg-emerald-600"
            >
              Details
              <FiArrowUpRight className="text-lg" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DoctorCard;