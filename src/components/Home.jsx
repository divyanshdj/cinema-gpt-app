import React from "react";
import Header from "./Header";
import bg from "../assets/bg.jpg";
import SwiperComponent from "./SwiperComponent";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
    <div className="relative w-full min-h-screen">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-50">
        <Header pageType="main" />
      </header>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.3] -z-10"
        style={{ backgroundImage: `url(${bg})` }}
        role="img"
        aria-label="Background scenery"
      ></div>

      {/* Swiper Section */}
      <section className="absolute top-40 sm:top-20 md:top-16 w-full px-3 md:px-10 z-10">
        <SwiperComponent />
      </section>

      {/* Call to Action Button */}
      <div className="absolute bottom-4 md:bottom-0 w-full flex justify-center items-center z-20">
        <button
          className="py-2 sm:py-3 px-6 sm:px-8 text-xs sm:text-sm md:text-base font-bold text-white bg-[#E50914] hover:bg-red-600 rounded-full transition duration-300 shadow-md hover:shadow-lg"
          aria-label="Get started"
        >
          Get Started
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
