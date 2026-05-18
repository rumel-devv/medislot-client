import DoctorCard from "@/components/DoctorCard";
import { doctorsData } from "@/lib/data";

const AllAppointPage = async () => {
  const doctors = await doctorsData();
  console.log(doctors);
  return (
   <div className="w-full px-4 md:w-10/12 mx-auto py-10">

  {/* Center Content Wrapper */}
  <div className="text-center mb-10">

    {/* Title */}
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
      All Appointments
    </h1>

    {/* Description */}
    <p className="text-gray-500 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
      Browse all available doctors and their appointment schedules.
      Easily explore doctors by name or specialty using the search below.
    </p>

    {/* Search Box */}
    <div className="mt-6 flex justify-center">
      <div className="relative w-full md:w-1/2">
        
        <input
          type="text"
          placeholder="Search doctors by name or specialty..."
          className="w-full px-4 py-3 pr-24 rounded-xl border border-gray-300 dark:border-gray-700 
          bg-white dark:bg-gray-900 text-gray-800 dark:text-white 
          focus:outline-none focus:ring-2 focus:text-emerald-600"
        />

      

      </div>
    </div>

  </div>

  {/* Doctors Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {doctors.map((doctor) => (
      <DoctorCard key={doctor._id} doctor={doctor} />
    ))}
  </div>

</div>
  );
};

export default AllAppointPage;
