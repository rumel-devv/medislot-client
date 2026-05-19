import UpdateProfileModal from "@/components/UpdateProfileModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { FiMail, FiCalendar, FiCheckCircle } from "react-icons/fi";

const MyProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${user?.id}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  return (
    <div className="min-h-screen flex items-start justify-center py-6 px-4">
      <div className="w-full max-w-md space-y-4">
        <Link
          href="/dashboard"
          className="inline-flex md:hidden items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition whitespace-nowrap"
        >
          <BiArrowBack className="text-lg shrink-0" />
          <span>Back to dashboard</span>
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5">
          <div className="flex justify-center">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-emerald-500">
              <Image
                src={user?.image}
                alt="profile"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center mt-3">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              {user?.name}
            </h1>

            <div className="flex items-center justify-center gap-2 mt-1 text-gray-600 dark:text-gray-300">
              <FiMail className="text-emerald-500 shrink-0" />
              <p className="break-all">{user?.email}</p>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl flex items-center gap-3">
              <FiCalendar className="text-emerald-500 text-xl shrink-0" />

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Appointments
                </p>

                <h2 className="font-semibold text-gray-800 dark:text-white">
                  {data?.length || 0} Booked
                </h2>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl flex items-center gap-3">
              <FiCheckCircle className="text-emerald-500 text-xl shrink-0" />

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Status
                </p>

                <h2 className="font-semibold text-emerald-600">
                  Active User
                </h2>
              </div>
            </div>

            <div className="mt-5">
              <UpdateProfileModal user={user} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;