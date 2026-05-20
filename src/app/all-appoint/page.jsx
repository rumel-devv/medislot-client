import DoctorCard from "@/components/DoctorCard";
import DoctorSearch from "@/components/DoctorSearch";
import { doctorsData, doctorsSearch } from "@/lib/data";
import { FaSearch } from "react-icons/fa";

export const metadata = {
  title: "Doctors | Medisolt",
  description:
    "Browse qualified doctors by specialty and book your appointment instantly on Medisolt.",
  keywords: ["doctors", "specialists", "Medisolt doctors", "medical booking"],
};

const AllAppointPage = async ({searchParams}) => {
  const sParams = await searchParams
  
  // console.log(sParams);
   
const doctors = await doctorsSearch(sParams?.search || "")
// console.log(doctors);


  return (
   <div className="w-full px-4 md:w-10/12 mx-auto py-10">

  <div className="text-center mb-10">

   
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
      All Appointments
    </h1>


    <p className="text-gray-500 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
      Browse all available doctors and their appointment schedules.
      Easily explore doctors by name or specialty using the search below.
    </p>
         <DoctorSearch/>
  </div>


  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {doctors.map((doctor) => (
      <DoctorCard key={doctor._id} doctor={doctor} />
    ))}
  </div>

</div>
  );
};

export default AllAppointPage;
