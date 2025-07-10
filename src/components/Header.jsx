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
                <button className="py-[0.1rem] sm:py-1 border-2 px-4 sm:px-6 text-md font-bold text-gray-900 bg-white rounded-full border-white hover:bg-gray-100 transition-colors duration-200 shadow-sm">
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
                <button className="py-1 border-2 px-4 sm:px-6 text-md font-bold text-gray-900 bg-white rounded-full border-white hover:bg-gray-100 transition-colors duration-200 shadow-sm">
                  Back to Home
                </button>
              </Link>
              <Link to="/" className="sm:hidden">
                <button className="py-1.5 px-4 text-sm font-medium text-gray-900 bg-white rounded-full border border-gray-200 hover:bg-gray-100 transition-colors duration-200 shadow-sm">
                  Home
                </button>
              </Link>
            </div>
          </>
        );
      case "browse":
        return (
          <>
            <Logo />
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <img 
                  src={user?.photoURL} 
                  alt="Profile" 
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover border-2 border-black cursor-pointer" 
                />
              </div>
              <button
                onClick={handleSignOut}
                className="py-1 px-4 sm:px-6 text-md font-bold text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors duration-200 shadow-sm"
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
    <header className={`w-full h-16 px-4 sm:px-8 flex justify-between items-center fixed top-0 left-0 right-0 z-50 ${
      pageType === "browse" ? "bg-white" : "bg-gradient-to-b from-black to-transparent"
    }`}>
      {renderHeaderContent()}
    </header>
  );
};

export default Header;