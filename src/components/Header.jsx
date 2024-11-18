import React from "react";
import Logo from "../assets/CinemaGPT-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-[10vh] px-6 py-2 flex justify-between items-center bg-gradient-to-b from-black shadow-md">
      <div className="flex items-center">
        <img
          src={Logo} 
          alt="CinemaGPT Logo" 
          className="h-12 sm:h-14" 
        />
      </div>
      
      <div className="flex items-center gap-4">
        <select className="border-2 border-white bg-transparent rounded-full px-2 py-1 text-white font-medium text-sm sm:text-base focus:outline-none">
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
        <Link to={"/login"}><button className="border-2 border-transparent py-1 px-4 text-sm sm:text-base font-bold text-black bg-white rounded-full">
          Sign In
        </button></Link>
      </div>
    </div>
  );
};

export default Header;
