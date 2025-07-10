import React from "react";
import { FaPlay, FaInfoCircle, FaStar, FaCalendarAlt } from "react-icons/fa";

const VideoData = ({ title, overview, rating, releaseDate }) => {
  // Smart date formatting - shorter on mobile
  const formattedDate = releaseDate ? new Date(releaseDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: window.innerWidth < 640 ? 'short' : 'long',
    day: 'numeric'
  }) : '';

  return (
    <div className="flex flex-col items-start justify-center z-10 relative w-full max-w-2xl md:max-w-3xl lg:max-w-4xl">
      {/* Dynamic Title - Scales perfectly */}
      <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-5 text-shadow-lg shadow-black leading-tight">
        {title}
      </h1>
      
      {/* Compact Metadata - Better mobile layout */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm">
        {rating && (
          <div className="flex items-center bg-black/40 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full backdrop-blur-sm border border-gray-600/50">
            <FaStar className="text-yellow-400 mr-1 text-xs sm:text-sm" />
            <span className="whitespace-nowrap">{rating.toFixed(1)}/10</span>
          </div>
        )}
        {formattedDate && (
          <div className="flex items-center bg-black/40 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full backdrop-blur-sm border border-gray-600/50">
            <FaCalendarAlt className="text-gray-300 mr-1 text-xs sm:text-sm" />
            <span className="whitespace-nowrap">{formattedDate}</span>
          </div>
        )}
      </div>
      
      {/* Responsive Overview - Clamped on mobile */}
      <p className="text-xs xs:text-sm sm:text-base md:text-lg font-light w-full md:w-4/5 lg:w-3/4 mb-4 sm:mb-6 md:mb-8 text-shadow-md shadow-black line-clamp-2 xs:line-clamp-3 sm:line-clamp-none">
        {overview}
      </p>
      
      {/* Adaptive Buttons - Stacked on mobile */}
      <div className="flex flex-row gap-3 w-full">
        <button className="py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 text-xs xs:text-sm sm:text-base font-semibold text-black bg-white hover:bg-opacity-90 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98]">
          <FaPlay className="text-black text-xs sm:text-sm" />
          <span>Play Now</span>
        </button>
        <button className="py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 text-xs xs:text-sm sm:text-base font-semibold text-white bg-gray-600/80 hover:bg-gray-700/80 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98] backdrop-blur-sm border border-gray-500/50">
          <FaInfoCircle className="text-xs sm:text-sm" />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoData;