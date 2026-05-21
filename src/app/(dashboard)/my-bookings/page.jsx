import DeleteAlert from "@/components/AlertDialog";
import UpdatePaitientInfo from "@/components/UpdatePaitientInfo";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import {
  FiCalendar,
  FiClock,
  FiUser,
  FiPhone,
  FiMail,
  FiEdit,
  FiTrash2,
} from "react-icons/fi";

const MybookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  // console.log(user);

  const token = await auth.api.getToken({
    headers: await headers()
  })

  // console.log('token',token);


  const res = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${user?.id}`,
   {
      headers:{
      authorization:`Bearer ${token?.token}`
    }
   },
  {
    cache: "no-store",
  }
);

  const bookings = await res.json();
   console.log("booking",bookings
   );
  return (
<div className="min-h-screen px-3 sm:px-4 lg:px-6 py-6">
  <div className="max-w-5xl mx-auto">

    {/* HEADER */}
    <div className="mb-6">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
        Your Booking Schedule
      </h1>

      <p className="text-gray-500 dark:text-gray-300 mt-1 text-sm sm:text-base">
        Total Bookings: {bookings?.length || 0}
      </p>
    </div>

    {/* BACK BUTTON */}
    <div className="mb-4">
      <Link
        href="/dashboard"
        className="inline-flex md:hidden items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition"
      >
        <BiArrowBack className="text-lg" />
        <span>Back to Dashboard</span>
      </Link>
    </div>

    {/* CARDS */}
    <div className="space-y-4">

      {bookings?.map((booking) => (
        <div
          key={booking._id}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 p-4 sm:p-5 w-full overflow-hidden"
        >

          <div className="flex flex-col gap-4">

            {/* DOCTOR NAME */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-emerald-600 break-words">
                {booking.doctorName}
              </h2>

              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">
                Appointment Details
              </p>
            </div>

            {/* INFO GRID (IMPORTANT FIX) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm w-full">

              <div className="flex items-start gap-2 min-w-0">
                <FiUser className="text-emerald-500 shrink-0 mt-0.5" />
                <span className="break-words">{booking.patientName}</span>
              </div>

              <div className="flex items-start gap-2 min-w-0">
                <FiMail className="text-emerald-500 shrink-0 mt-0.5" />
                <span className="break-all">{booking.email}</span>
              </div>

              <div className="flex items-center gap-2">
                <FiPhone className="text-emerald-500 shrink-0" />
                <span className="break-words">{booking.phone}</span>
              </div>

              <div className="flex items-center gap-2">
                <FiCalendar className="text-emerald-500 shrink-0" />
                <span>
                  {new Date(booking.appointmentDate).toLocaleDateString()}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FiClock className="text-emerald-500 shrink-0" />
                <span>{booking.appointmentTime}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-medium">Gender:</span>
                <span>{booking.gender}</span>
              </div>

            </div>

            {/* ACTION BUTTONS (FIXED MOBILE STACK) */}
            <div className="
              flex flex-col sm:flex-row
              gap-2 sm:gap-3
              w-full
              mt-2
            ">

              <div className="w-full sm:w-auto">
                <UpdatePaitientInfo bookings={booking} />
              </div>

              <div className="w-full sm:w-auto">
                <DeleteAlert booking={booking} />
              </div>

            </div>

          </div>
        </div>
      ))}

    </div>

    {/* EMPTY STATE */}
    {bookings?.length === 0 && (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sm:p-8 text-center mt-6">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          No Bookings Found
        </h2>

        <p className="text-gray-500 mt-2 text-sm">
          You have not booked any appointments yet.
        </p>

        <Link href="all-appoint">
          <button className="bg-emerald-600 text-white py-2 px-4 mt-4 rounded-md w-full sm:w-auto hover:bg-emerald-500 transition">
            Book Now
          </button>
        </Link>
      </div>
    )}

  </div>
</div>
  );
};

export default MybookingsPage;