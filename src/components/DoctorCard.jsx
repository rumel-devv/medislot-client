

import Image from "next/image";
import Link from "next/link";
import {
  FiStar,
  FiBriefcase,
  FiArrowRight,
} from "react-icons/fi";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">
      
      {/* Doctor Image */}
      <div className="relative overflow-hidden">
        <Image
          src={doctor.image}
          alt={doctor.name}
          width={500}
          height={500}
          className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Availability Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200">
            Available
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        
        {/* Specialty */}
        <p className="text-sm font-medium text-cyan-600 mb-2">
          {doctor.specialty}
        </p>

        {/* Name */}
        <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-1">
          {doctor.name}
        </h2>

        {/* Info */}
        <div className="space-y-2 mb-5">
          
          {/* Rating */}
          <div className="flex items-center gap-2 text-gray-600">
            <FiStar className="text-amber-500" />
            <span className="text-sm font-medium">
              {doctor.rating} Rating
            </span>
          </div>

          {/* Experience */}
          <div className="flex items-center gap-2 text-gray-600">
            <FiBriefcase className="text-cyan-600" />
            <span className="text-sm font-medium">
              {doctor.experience} Experience
            </span>
          </div>
        </div>

        {/* Button */}
        <Link href={`/doctors/${doctor._id}`}>
          <button className="w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-2xl font-medium transition-all duration-300">
            View Details
            <FiArrowRight className="text-lg" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;