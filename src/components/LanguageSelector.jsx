import React from 'react';

const LanguageSelector = () => {
  return (
    <select className="border border-white bg-transparent rounded-full px-2 sm:px-3 py-1 sm:py-1 text-white font-medium text-xs sm:text-sm md:text-base focus:outline-none">
      <option value="english">English</option>
      <option value="hindi">Hindi</option>
    </select>
  );
};

export default LanguageSelector;
