"use client";

import React, { useState } from "react";
import { FaChevronDown, FaCheckCircle } from "react-icons/fa";

const faqs = [
  {
    question: "How can I book an appointment?",
    answer:
      "Select a doctor, choose an available slot, and confirm your booking instantly.",
  },
  {
    question: "Are the doctors verified?",
    answer:
      "Yes, all doctors are verified, licensed, and experienced in their fields.",
  },
  {
    question: "Can I cancel or reschedule?",
    answer:
      "Yes, you can manage your appointment anytime from your dashboard.",
  },
  {
    question: "Is the service available 24/7?",
    answer:
      "Yes, the platform is available 24/7 for booking and support.",
  },
];

const FaqSec = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#0B1220] dark:via-[#0B1220] dark:to-[#0F172A] transition-colors">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1 text-xs sm:text-sm rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            FAQ Section
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-gray-500 dark:text-gray-300">
            Everything you need to know about our platform
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-5">

          {faqs.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-300"
              >

                {/* QUESTION */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                >
                  <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white group-hover:text-emerald-500 transition">
                    {item.question}
                  </h3>

                  <FaChevronDown
                    className={`text-emerald-500 transition-all duration-300 ${
                      isOpen ? "rotate-180 scale-110" : "rotate-0"
                    }`}
                  />
                </button>

                {/* ANSWER */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">

                    <div className="px-5 md:px-6 pb-5 space-y-3 text-sm md:text-base text-gray-600 dark:text-gray-300">

                      <div className="flex gap-3 items-start">
                        <FaCheckCircle className="text-emerald-500 mt-1 shrink-0" />
                        <p>{item.answer}</p>
                      </div>

                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default FaqSec;