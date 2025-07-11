import React from "react";

const Footer = () => {
  // Scroll smoothly to top
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black text-white py-12 px-6 text-center select-none">
      <p className="text-base md:text-lg font-medium text-gray-300 mb-2">
        &copy; 2024. All rights reserved.
      </p>
      <p className="text-base md:text-lg font-medium text-gray-300 mb-6">
        Code by <span className="text-red-500 font-medium">Divyansh</span>
      </p>
      <div className="flex justify-center gap-10 text-base md:text-lg font-medium text-gray-300">
        <a
          href="/"
          onClick={scrollToTop}
          className="cursor-pointer hover:text-gray-400 transition-colors duration-300"
          aria-label="Privacy Policy"
        >
          Privacy Policy
        </a>
        <a
          href="/"
          onClick={scrollToTop}
          className="cursor-pointer hover:text-gray-400 transition-colors duration-300"
          aria-label="Terms of Service"
        >
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
