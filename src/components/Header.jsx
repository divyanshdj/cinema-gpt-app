import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import Logo from "./Logo";
import LanguageSelector from "./LanguageSelector";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";

const Header = ({ pageType }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        if (pageType === "login" || pageType === "main") {
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

  const menuBtn = `w-full flex items-center justify-start gap-3 px-6 py-4 text-white hover:bg-gray-700 transition`;
  const redBtn = `text-red-400 hover:text-red-300 ${menuBtn}`;
  const pillBtn = `rounded-full font-bold text-sm sm:text-base px-4 py-2 transition shadow-sm flex items-center gap-2`;

  const renderMobileMenu = () => (
    <div
      className={`fixed inset-0 z-40 bg-black/95 transition-opacity duration-300 ease-in-out 
      ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} sm:hidden`}
      role="dialog"
      aria-hidden={!isMenuOpen}
    >
      <div
        className={`fixed top-0 left-0 w-full bg-gray-900 pt-20 transition-transform duration-300 ease-in-out 
        ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <nav className="flex flex-col text-left divide-y divide-gray-700">
          {pageType === "browse" && (
            <button
              onClick={() => {
                handleSignOut();
                setIsMenuOpen(false);
              }}
              className={redBtn}
            >
              <FaSignOutAlt className="text-lg" />
              Sign Out
            </button>
          )}

          {pageType === "login" && (
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={menuBtn}>
              <FaHome className="text-lg" />
              Home
            </Link>
          )}

          {pageType === "main" && (
            <Link to="/login" onClick={() => setIsMenuOpen(false)} className={menuBtn}>
              <FaSignInAlt className="text-lg" />
              Sign In
            </Link>
          )}

          <div className="px-6 py-6">
            <LanguageSelector />
          </div>
        </nav>
      </div>
    </div>
  );

  const renderDesktopMenu = () => {
    switch (pageType) {
      case "main":
        return (
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <Link to="/login" className={`${pillBtn} bg-white text-gray-900 hover:bg-gray-100`}>
              <FaSignInAlt className="text-base" />
              <span>Sign In</span>
            </Link>
          </div>
        );
      case "login":
        return (
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <Link to="/" className={`${pillBtn} bg-white text-gray-900 hover:bg-gray-100`}>
              <FaHome className="text-base" />
              <span>Back to Home</span>
            </Link>
          </div>
        );
      case "browse":
        return (
          <div className="flex items-center gap-4">
            {user?.photoURL && (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-9 h-9 rounded-full border border-gray-800"
              />
            )}
            <button
              onClick={handleSignOut}
              className={`${pillBtn} bg-red-600 text-white hover:bg-red-700`}
            >
              <FaSignOutAlt className="text-base" />
              <span>Sign Out</span>
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <header className={`
        fixed top-0 left-0 w-full z-50 h-16 px-4 sm:px-8 flex items-center justify-between
        ${pageType === "browse" ? "bg-white shadow-md" : "bg-gradient-to-b from-black to-transparent"}
        ${isMenuOpen ? "bg-black" : ""}
      `}>
        <Logo />
        <div className="hidden sm:block">
          {renderDesktopMenu()}
        </div>
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full focus:outline-none bg-gray-800"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="text-white text-lg" />
            ) : (
              <FaBars className="text-white text-lg" />
            )}
          </button>
        </div>
      </header>
      {renderMobileMenu()}
    </>
  );
};

export default Header;
