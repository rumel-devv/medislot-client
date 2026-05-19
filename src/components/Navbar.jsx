"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FiMoon,
  FiSun,
  FiMenu,
  FiX,
  FiLogOut,
  FiUserPlus,
  FiLogIn,
} from "react-icons/fi";
import { useTheme } from "@/app/providers/ThemeProvider";
import { FaUserDoctor } from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  // console.log(user);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Appointment", href: "/all-appoint" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <nav
      className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#0B1220]/90 
      backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-sm"
    >
      <div className="w-11/12 lg:w-10/12 mx-auto flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div
            className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center 
            justify-center text-white font-bold shadow-md shadow-emerald-500/30"
          >
            <FaUserDoctor />
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Medi<span className="text-emerald-500">solt</span>
            </h1>

            <p className="text-[10px] text-gray-500 dark:text-gray-400 -mt-1">
              Healthcare Platform
            </p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-7 font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative transition duration-300 pb-1 ${
                  isActive
                    ? "text-emerald-500"
                    : "text-gray-700 dark:text-gray-300 hover:text-emerald-500"
                }`}
              >
                {link.name}

                {isActive && (
                  <span
                    className="absolute left-0 bottom-0 w-full h-[2px] 
                    bg-emerald-500 rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl flex items-center justify-center 
            bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white 
            hover:scale-105 transition"
          >
            {theme === "light" ? (
              <FiMoon size={18} />
            ) : (
              <FiSun size={18} className="text-yellow-400" />
            )}
          </button>

          {user ? (
            <div className="flex items-center gap-3">
              <div
                className="flex items-center gap-3 px-3 py-2 rounded-xl 
              "
              >
                <Link href='/dashboard'>

                <Avatar className="w-11 cursor-pointer object-cover h-11 ring-2 ring-emerald-500/30">
                  <Avatar.Image
                    alt={user?.name}
                    src={user?.image}
                    className="w-full h-full object-cover"
                  />

                  <Avatar.Fallback className="bg-emerald-500 text-white font-semibold">
                    {user?.name?.slice(0, 2).toUpperCase() || "US"}
                  </Avatar.Fallback>
                </Avatar>
                </Link>

              </div>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl 
                bg-red-500 hover:bg-red-600 text-white font-medium 
                transition shadow-md shadow-red-500/20"
              >
                <FiLogOut size={18} />
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="flex items-center justify-center gap-2 
                px-5 py-2.5 rounded-xl border border-emerald-500/30 
                text-emerald-600 dark:text-emerald-400 
                hover:bg-emerald-50 dark:hover:bg-white/10 transition"
              >
                <FiLogIn size={18} />
                Login
              </Link>

              <Link
                href="/signup"
                className="flex items-center justify-center gap-2 
                px-5 py-2.5 rounded-xl bg-emerald-500 
                hover:bg-emerald-600 text-white font-medium transition 
                shadow-md shadow-emerald-500/20"
              >
                <FiUserPlus size={18} />
                Register
              </Link>
            </>
          )}
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-xl flex items-center justify-center 
            bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white"
          >
            {theme === "light" ? (
              <FiMoon size={18} />
            ) : (
              <FiSun size={18} className="text-yellow-400" />
            )}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="w-9 h-9 rounded-xl flex items-center justify-center 
            bg-emerald-500 text-white"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="md:hidden border-t border-gray-200 
          dark:border-white/10 bg-white dark:bg-[#0B1220]"
        >
          <div className="w-11/12 mx-auto py-5 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-xl transition ${
                    isActive
                      ? "bg-emerald-500 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-3">
              {user ? (
                <>
                  <div
                    className="flex items-center gap-3 mb-4 p-3 rounded-2xl 
                    bg-gray-100 dark:bg-white/10"
                  >
                    <Link href='/dashboard'>
                    <Avatar className="w-12 h-12 cursor-pointer ring-2 ring-emerald-500/30">
                      <Avatar.Image
                        className="w-full h-full object-cover"
                        alt={user?.name || "User"}
                        src={user?.image}
                      />
                    
                      <Avatar.Fallback className="bg-emerald-500 text-white font-semibold">
                        {user?.name?.slice(0, 2).toUpperCase() || "US"}
                      </Avatar.Fallback>
                    </Avatar>
                    </Link>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                        {user?.name}
                      </h3>

                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {user?.email}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 
                    py-3 rounded-xl bg-red-500 hover:bg-red-600 
                    text-white font-medium transition"
                  >
                    <FiLogOut size={18} />
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex gap-3">
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="flex-1 flex items-center justify-center gap-2 
                    text-center py-3 rounded-xl 
                    border border-emerald-500/30 
                    text-emerald-600 dark:text-emerald-400
                    hover:bg-emerald-50 dark:hover:bg-white/10 transition"
                  >
                    <FiLogIn size={18} />
                    Login
                  </Link>

                  <Link
                    href="/signup"
                    onClick={() => setOpen(false)}
                    className="flex-1 flex items-center justify-center gap-2 
                    text-center py-3 rounded-xl 
                    bg-emerald-500 hover:bg-emerald-600 
                    text-white transition"
                  >
                    <FiUserPlus size={18} />
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
