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

  //   const { token } = await auth.api.getToken({
  //   headers: await headers(),
  // });

  const res = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${user?.id}`,
  {
    // headers: {
    //   authorization: `Bearer ${token}`,
    // },
    cache: "no-store",
  }
);

  const bookings = await res.json();

  return (
    <div className="min-h-screen px-1 py-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
            Your Booking Schedule
          </h1>

          <p className="text-gray-500 dark:text-gray-300 mt-1">
            Total Bookings: {bookings?.length || 0}
          </p>
        </div>
         <Link
                  href="/dashboard"
                  className="inline-flex md:hidden items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition whitespace-nowrap"
                >
                  <BiArrowBack  className="text-lg shrink-0" />
                  <span>Back to dashboard</span>
                </Link>

        <div className="grid gap-5">
          {bookings?.map((booking) => (
            <div
              key={booking._id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 p-5"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div className="space-y-3 flex-1">
                  <div>
                    <h2 className="text-xl font-bold text-emerald-600">
                      {booking.doctorName}
                    </h2>

                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      Appointment Details
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                      <FiUser className="text-emerald-500 shrink-0" />
                      <span>{booking.patientName}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                      <FiMail className="text-emerald-500 shrink-0" />
                      <span className="break-all">{booking.email}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                      <FiPhone className="text-emerald-500 shrink-0" />
                      <span>{booking.phone}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                      <FiCalendar className="text-emerald-500 shrink-0" />
                      <span>
                        {new Date(
                          booking.appointmentDate
                        ).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                      <FiClock className="text-emerald-500 shrink-0" />
                      <span>{booking.appointmentTime}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                      <span className="font-medium">Gender:</span>
                      <span>{booking.gender}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
                 <UpdatePaitientInfo bookings={booking} />
                 <DeleteAlert booking={booking}/>
                </div>
              </div>
            </div>
          ))}
        </div>

        {bookings?.length === 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-10 text-center mt-6">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white">
              No Bookings Found
            </h2>

            <p className="text-gray-500 dark:text-gray-300 mt-2">
              You have no booked any appointments yet.
            </p>
            <Link href='all-appoint'>
             <button className="bg-emerald-600 text-white py-2 px-4 mt-2 rounded-md cursor-pointer hover:bg-emerald-500 " >
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