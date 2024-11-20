import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/CinemaGPT-logo.png";

const HeaderLogin = () => {
  return (
    <div className="w-full h-[10vh] px-4 sm:px-6 py-2 flex justify-between items-center bg-gradient-to-b from-black shadow-md">
      <div className="flex items-center">
        <img
          src={Logo}
          alt="CinemaGPT Logo"
          className="h-10 sm:h-12"
        />
      </div>

      <div className="flex items-center gap-4">
        <select className="border border-white bg-transparent rounded-full px-3 py-1 text-white font-medium text-sm sm:text-base focus:outline-none">
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>

        <Link to="/">
          <button className="border-2 border-transparent py-1 px-4 text-xs sm:text-sm font-bold text-black bg-white rounded-full transition duration-300 sm:block hidden">
            Back to Home
          </button>
          <span className="border border-white px-4 py-1 rounded-full text-black bg-white text-sm font-bold sm:hidden cursor-pointer">
            Home
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HeaderLogin;
