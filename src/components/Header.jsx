import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import Logo from './Logo';
import LanguageSelector from './LanguageSelector';

const Header = ({ pageType }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));

        if (pageType === "login") {
          navigate("/browse");
        }

        if (pageType === "main") {
          navigate("/browse");
        }
      } else {
        dispatch(removeUser());
        if (pageType !== "login") {
          navigate("/");
        }
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate, pageType]);

  const renderHeaderContent = () => {
    switch (pageType) {
      case "main":
        return (
          <>
            <Logo />
            <div className="flex items-center gap-2 sm:gap-4">
              <LanguageSelector />
              <Link to="/login">
                <button className="py-1 sm:py-1 px-3 sm:px-5 text-xs sm:text-sm md:text-base font-bold text-black bg-white rounded-full border border-transparent shadow-sm hover:bg-gray-200 transition duration-300">
                  Sign In
                </button>
              </Link>
            </div>
          </>
        );
      case "login":
        return (
          <>
            <Logo />
            <div className="flex items-center gap-4">
              <LanguageSelector />
              <Link to="/" className="sm:block hidden">
                <button className="border-2 border-transparent py-1 px-4 text-xs sm:text-sm font-bold text-black bg-white rounded-full transition duration-300">
                  Back to Home
                </button>
              </Link>
              <Link to="/" className="sm:hidden">
                <span className="border border-white px-4 py-1 rounded-full text-black bg-white text-sm font-bold cursor-pointer">
                  Home
                </span>
              </Link>
            </div>
          </>
        );
      case "browse":
        return (
          <>
            <Logo />
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center">
                <img src={user?.photoURL} alt="Profile Logo" className="h-6 sm:h-8 md:h-10 brightness-125 cursor-pointer" />
              </div>
              <button
                onClick={handleSignOut}
                className="py-1 sm:py-1 px-3 sm:px-5 text-xs sm:text-sm md:text-base font-bold text-white bg-red-600 rounded-full border border-transparent shadow-sm hover:bg-red-500 transition duration-300"
              >
                Sign Out
              </button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`w-full h-[10vh] px-4 sm:px-6 py-2 flex justify-between items-center ${pageType === "browse" ? "" : "bg-gradient-to-b from-black shadow-md"}`}>
      {renderHeaderContent()}
    </div>
  );
};

export default Header;
