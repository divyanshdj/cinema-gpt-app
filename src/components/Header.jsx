import React from "react";
import Logo from "../assets/CinemaGPT-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-[10vh] px-4 sm:px-6 py-2 flex justify-between items-center bg-gradient-to-b from-black shadow-md">
      <div className="flex items-center">
        <img
          src={Logo}
          alt="CinemaGPT Logo"
          className="h-10 sm:h-12 md:h-14"
        />
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <select className="border border-white bg-transparent rounded-full px-2 sm:px-3 py-1 sm:py-1 text-white font-medium text-xs sm:text-sm md:text-base focus:outline-none">
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>

        <Link to={"/login"}>
          <button className="py-1 sm:py-1 px-3 sm:px-5 text-xs sm:text-sm md:text-base font-bold text-black bg-white rounded-full border border-transparent shadow-sm hover:bg-gray-200 transition duration-300">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
