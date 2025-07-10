import React from 'react';

const LanguageSelector = () => {
  return (
    <div className="relative inline-block group">
      <select 
        className="
          appearance-none
          border border-white
          bg-white/90 hover:bg-white
          rounded-full 
          px-3 py-1
          text-gray-900 
          font-bold 
          text-sm sm:text-base
          focus:outline-none focus:ring-2 focus:ring-gray-500
          cursor-pointer
          transition-all duration-200
          pr-8
        "
      >
        <option value="english">English</option>
        <option value="hindi">Hindi</option>
      </select>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg 
          className="w-4 h-4 text-gray-500"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 9l-7 7-7-7" 
          />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSelector;