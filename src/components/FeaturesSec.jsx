import React from "react";
import { FaStar, FaGlobe, FaRocket, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaGlobe />,
    title: "Global Access",
    desc: "Access healthcare services from anywhere, anytime.",
  },
  {
    icon: <FaRocket />,
    title: "Fast Booking",
    desc: "Book appointments in seconds with smart system.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Trusted Doctors",
    desc: "Verified and experienced medical professionals only.",
  },
  {
    icon: <FaStar />,
    title: "Top Rated Care",
    desc: "Loved and trusted by thousands of patients.",
  },
];

const FeaturedSec = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 dark:from-[#0B1220] dark:to-[#0F172A] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Why Choose Us
          </h2>
          <p className="text-gray-500 dark:text-gray-300 mt-3 text-sm md:text-base">
            Smart, secure and fast healthcare experience for everyone
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-emerald-400/40 to-teal-500/40 hover:from-emerald-500 hover:to-teal-600 transition"
            >

              {/* Card */}
              <div className="h-full bg-white dark:bg-[#0B1220] rounded-2xl p-6 md:p-7 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl border border-transparent dark:border-white/10">

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xl mb-4 group-hover:scale-110 transition">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Bottom line */}
                <div className="mt-5 h-[2px] w-0 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-500"></div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturedSec;