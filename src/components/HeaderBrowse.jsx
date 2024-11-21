import React from "react";
import LOGO from "../assets/CinemaGPT-logo.png";
// import PROFILE_LOGO from "../assets/profile-logo.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderBrowse = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="w-full h-[10vh] px-4 sm:px-6 py-2 flex justify-between items-center">
      <div className="flex items-center">
        <img src={LOGO} alt="CinemaGPT Logo" className="h-10 sm:h-12 md:h-14" />
      </div>

      <div className="flex items-center justify-center gap-2">
        <div className="flex items-center">
          <img
            src={user?.photoURL}
            alt="Profile Logo"
            className="h-6 sm:h-8 md:h-10 brightness-125 cursor-pointer"
          />
        </div>
        <button
          onClick={handleSignOut}
          className="py-1 sm:py-1 px-3 sm:px-5 text-xs sm:text-sm md:text-base font-bold text-white bg-red-600 rounded-full border border-transparent shadow-sm hover:bg-red-500 transition duration-300"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default HeaderBrowse;
