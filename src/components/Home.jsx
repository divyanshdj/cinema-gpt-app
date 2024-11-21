import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import bg from "../assets/bg.jpg";
import SwiperComponent from "./SwiperComponent";

const Home = () => {
  return (
    <>
      <div className="absolute w-full z-50">
        <Header />
      </div>

      <div
        className="min-h-screen w-full bg-cover bg-center relative -z-10"
        style={{
          backgroundImage: `url(${bg})`,
          filter: "brightness(0.3)",
        }}
      ></div>

      <div className="absolute bottom-28 sm:bottom-20 w-full z-20 px-4 sm:px-8">
        <SwiperComponent />
      </div>

      <div className="relative w-full z-10 bg-black py-12 px-6 sm:px-12 text-white">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8">
          Why Choose CinemaGPT?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <span className="text-4xl sm:text-5xl text-red-500">
              🎥
            </span>
            <h3 className="text-lg sm:text-xl font-semibold mt-4">
              Exclusive Content
            </h3>
            <p className="text-sm sm:text-base mt-2">
              Enjoy exclusive movies and shows available only on CinemaGPT.
            </p>
          </div>
          <div className="text-center">
            <span className="text-4xl sm:text-5xl text-red-500">
              🚀
            </span>
            <h3 className="text-lg sm:text-xl font-semibold mt-4">
              Unlimited Streaming
            </h3>
            <p className="text-sm sm:text-base mt-2">
              Watch anytime, anywhere on any device without interruptions.
            </p>
          </div>
          <div className="text-center">
            <span className="text-4xl sm:text-5xl text-red-500">
              🌟
            </span>
            <h3 className="text-lg sm:text-xl font-semibold mt-4">
              Affordable Plans
            </h3>
            <p className="text-sm sm:text-base mt-2">
              Choose from flexible plans designed to fit every budget.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute w-full z-20 bottom-4 flex justify-center items-center">
        <button className="py-2 sm:py-3 px-6 sm:px-8 text-xs sm:text-sm md:text-base font-bold text-white bg-[#E50914] hover:bg-red-600 rounded-full transition duration-300 shadow-md hover:shadow-lg">
          Get Started
        </button>
      </div>

      <Footer/>
    </>
  );
};

export default Home;
