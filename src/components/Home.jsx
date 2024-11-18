import React from "react";
import Header from "./Header";
import bg from "../assets/bg.jpg";
import SwiperComponent from "./SwiperComponent";

const Home = () => {
  return (
    <>
      <div className="absolute w-full z-20">
        <Header />
      </div>

      <div
        className="min-h-screen w-full bg-cover bg-center relative -z-10"
        style={{
          backgroundImage: `url(${bg})`,
          filter: "brightness(0.2)",
        }}
      ></div>

      <div className="absolute bottom-14 w-full z-20 p-8">
        <SwiperComponent />
      </div>

      <div className="absolute w-full z-20 bottom-0 flex justify-center items-center">
        <button className="py-3 px-8 my-4 w-fit text-sm sm:text-base font-bold text-white bg-[#E50914] hover:bg-red-600 rounded-full transition duration-300">
            Get Started.
        </button>
      </div>
    </>
  );
};

export default Home;
