import { doctorsData } from "@/lib/data";
import DoctorCard from "./DoctorCard";

const RatedDoctorSec = async () => {
  const doctors = await doctorsData();

  const topRatedDoctors = doctors
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="w-full md:w-10/12 lg:w-9/12 mx-auto py-8 px-4">
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-100 px-4 py-1.5 mb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>

          <span className="text-sm font-semibold text-emerald-600">
            Trusted Doctors in Town
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
          Top Rated{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            Doctors
          </span>
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed px-1">
          Connect with highly experienced and top-rated medical specialists
          dedicated to providing exceptional healthcare services with
          compassion, professionalism, and modern treatment solutions for every
          patient.
        </p>

        <div className="mt-6 flex justify-center">
          <div className="h-1.5 w-24 rounded-full bg-emerald-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-6 ">
        {topRatedDoctors.map((doctor) => (
          <DoctorCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default RatedDoctorSec;
