import React from "react";
import Header from "./Header";
import bg from "../assets/bg.jpg";
import SwiperComponent from "./SwiperComponent";

const Home = () => {
  return (
    <>
      <div className="absolute w-full z-50">
        <Header pageType="main" />
      </div>

      <div
        className="min-h-screen w-full bg-cover bg-center relative -z-10"
        style={{
          backgroundImage: `url(${bg})`,
          filter: "brightness(0.3)",
        }}
      ></div>

      <div className="absolute top-40 sm:top-20 md:top-5 w-full p-3 md:p-10 rounded-lg">
        <SwiperComponent />
      </div>

      <div className="absolute w-full z-20 bottom-4 md:bottom-0 flex justify-center items-center">
        <button className="py-2 sm:py-3 px-6 sm:px-8 text-xs sm:text-sm md:text-base font-bold text-white bg-[#E50914] hover:bg-red-600 rounded-full transition duration-300 shadow-md hover:shadow-lg">
          Get Started
        </button>
      </div>
    </>
  );
};

export default Home;
