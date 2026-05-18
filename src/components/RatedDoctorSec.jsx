import { doctorsData } from "@/lib/data";
import DoctorCard from "./DoctorCard";

const RatedDoctorSec = async () => {
  const doctors = await doctorsData();
  
  const topRatedDoctors = doctors
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="w-full md:w-10/12 lg:w-9/12 mx-auto py-8 px-4">
      
      {/* Section Header */}
      <div className="text-center mb-10">
        <h1 className="text-xl md:text-3xl  font-bold">
          Top Rated Doctors
        </h1>

        <p className="text-gray-500 mt-2 text-md ">
          Meet our highest-rated specialist doctors
        </p>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3  gap-6 ">
        
        {topRatedDoctors.map((doctor) => <DoctorCard  key={doctor._id} doctor={doctor} /> )}
      </div>
    </div>
  );
};

export default RatedDoctorSec;