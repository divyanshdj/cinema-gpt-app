import React from "react";
import Header from "./Header";
import bg from "../assets/bg.jpg";

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
          filter: "brightness(0.4)",
        }}
      ></div>
    </>
  );
};

export default Home;
