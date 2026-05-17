"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Link from "next/link";

const slides = [
  {
    title: "Book Doctors with Ease",
    desc: "Find verified doctors and manage appointments digitally in seconds.",
    img: "https://images.unsplash.com/photo-1652787542567-f86c0b4c0269",
  },
  {
    title: "Your Health, Our Priority",
    desc: "Connect with certified doctors anytime, anywhere for trusted care.",
    img: "https://images.unsplash.com/photo-1504813184591-01572f98c85f",
  },
  {
    title: "Smart Appointment System",
    desc: "No waiting lines. Just quick and seamless booking experience.",
    img: "https://images.unsplash.com/photo-1551190822-a9333d879b1f",
  },
];

export default function HeroBanner() {
  return (
    <>
      <section className="w-full bg-white dark:bg-[#0B1220] transition-colors duration-300 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 md:py-14">

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 4500 }}
            pagination={{ clickable: true }}
            navigation
            loop
            className="rounded-3xl overflow-hidden heroSwiper"
          >
            {slides.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[380px] sm:h-[450px] md:h-[520px] lg:h-[580px]">

       
                  <div
                    className="absolute inset-0 bg-cover bg-center scale-105"
                    style={{
                      backgroundImage: `url(${item.img})`,
                    }}
                  />

              
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20 dark:from-black/80 dark:via-black/60 dark:to-transparent" />

           
                  <div className="relative z-10 h-full flex items-center">

                    <div className="max-w-xl px-5 sm:px-10 md:px-14 text-white">

                 
                      <span className="inline-flex items-center mb-3 px-3 py-1 text-xs sm:text-sm rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                        Medisolt Health Platform
                      </span>

                 
                      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        {item.title}
                      </h1>

            
                      <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-200">
                        {item.desc}
                      </p>

            
                      <div className="mt-5 flex flex-col sm:flex-row gap-3">

                        <Link
                          href="/doctors"
                          className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-xl font-medium transition text-center"
                        >
                          Find Doctors
                        </Link>

                        <Link
                          href="/appointments"
                          className="border border-white/40 text-white hover:bg-white/10 px-5 py-3 rounded-xl font-medium transition text-center"
                        >
                          Book Appointment
                        </Link>

                      </div>

                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>

    </>
  );
}